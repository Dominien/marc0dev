import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabase = createClient(process.env.SUPABASE_URL_MARCO!, process.env.SUPABASE_SERVICE_KEY_MARCO!);

async function check() {
  const { data: posts } = await supabase.from('posts').select('*');
  if (!posts) return;
  
  posts.forEach(p => {
    Object.keys(p).forEach(k => {
      if (typeof p[k] === 'string' && p[k].includes('2024')) {
        console.log(`Found 2024 in post ${p.slug}, field ${k}`);
      }
    });
  });
}

check();
