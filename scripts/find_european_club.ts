
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
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function findContent() {
  const { count } = await supabase.from('posts').select('*', { count: 'exact', head: true });
  console.log(`Total posts: ${count}`);

  const queries = ['European', 'Speed', 'Club'];
  
  for (const q of queries) {
      console.log(`\nSearching for "${q}"...`);
      const { data: posts } = await supabase
        .from('posts')
        .select('slug, title_en, content_en')
        .or(`content_en.ilike.%${q}%,title_en.ilike.%${q}%`);
        
      if (posts && posts.length > 0) {
          console.log(`Found ${posts.length} matches.`);
          posts.forEach(p => {
              console.log(` - [${p.slug}] ${p.title_en}`);
              const content = p.content_en || '';
              const idx = content.toLowerCase().indexOf(q.toLowerCase());
              if (idx !== -1) {
                  console.log(`   Snippet: ...${content.substring(idx - 50, idx + 100).replace(/\n/g, ' ')}...`);
              }
          });
      } else {
          console.log('No matches.');
      }
  }
}

findContent();
