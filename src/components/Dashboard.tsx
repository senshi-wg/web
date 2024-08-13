import { createServerSupabaseClient } from '@/utils/supabase/server';

export default async function Dashboard() {
  const supabase = createServerSupabaseClient();
  const { data: { session } } = await supabase.auth.getSession();

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-display font-bold mb-8 text-senshi-accent">Welcome to Senshi Dashboard</h1>
      {session && (
        <p className="text-senshi-light">Hello, {session.user.email}! You're now part of the Senshi community.</p>
      )}
    </div>
  );
}