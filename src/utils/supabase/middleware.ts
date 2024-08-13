import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse, type NextRequest } from 'next/server';
import { Database } from '@/types/supabase';

export const createClient = (request: NextRequest) => {
  const supabase = createServerComponentClient<Database>({ cookies: () => request.cookies });
  return { supabase, response: NextResponse.next() };
};