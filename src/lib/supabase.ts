import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL_MARCO;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY_MARCO;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);
