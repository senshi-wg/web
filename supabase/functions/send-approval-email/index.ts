import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const handler = async (_request: Request): Promise<Response> => {
  const json = await _request.json();
  const record = json.record;

  if (!record?.approved) {
    return new Response(JSON.stringify({ message: "User not approved" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      {
        global: {
          headers: { Authorization: _request.headers.get("Authorization")! },
        },
      }
    );

    const { data: userData } = await supabaseClient.auth.admin.getUserById(record.user_id);
    const email = userData?.user?.email;

    if (!email) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'noreply@yourdomain.com',
        to: email,
        subject: "You've been approved for Senshi! 🎉",
        html: "<h1>Welcome to Senshi!</h1><p>Your access has been approved. You can now log in to the platform.</p>",
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

serve(handler);