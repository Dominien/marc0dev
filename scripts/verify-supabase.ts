import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load env vars manually because we are running outside Next.js context
const envLocalPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envLocalPath, 'utf-8');

const env: Record<string, string> = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    env[key.trim()] = value.trim();
  }
});

const supabaseUrl = env.SUPABASE_URL_MARCO;
const supabaseKey = env.SUPABASE_SERVICE_KEY_MARCO;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing env vars:', { supabaseUrl, supabaseKey });
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function verify() {
  console.log('Verifying Supabase connection...');
  
  const { count: totalCount, error: countError } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true });

  if (countError) {
    console.error('Supabase Error (Count):', countError);
    return;
  }
  
  const { count: publishedCount, error: pubError } = await supabase
    .from('posts')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');

  if (pubError) {
     console.error('Supabase Error (Published Count):', pubError);
     return;
  }

  console.log(`Connection Successful.`);
  console.log(`Total Posts: ${totalCount}`);
  console.log(`Published Posts: ${publishedCount}`);

  if (publishedCount === 0 && totalCount! > 0) {
    console.warn('WARNING: All posts are drafts. The blog page will be empty unless status is updated to "published".');
    
    // Fetch one draft to show its slug for testing
    const { data: draft } = await supabase
      .from('posts')
      .select('slug, title_en')
      .limit(1)
      .single();
      
    if (draft) {
      console.log(`Test URL (Draft): http://localhost:3000/en/blog/${draft.slug}`);
    }
  } else if (publishedCount! > 0) {
      const { data: pub } = await supabase
      .from('posts')
      .select('slug')
      .eq('status', 'published')
      .limit(1)
      .single();
      
      if (pub) {
         console.log(`Test URL (Published): http://localhost:3000/en/blog/${pub.slug}`);
      }
  }
}

verify();
