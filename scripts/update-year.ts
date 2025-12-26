import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.SUPABASE_URL_MARCO;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY_MARCO;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function updateYear() {
  console.log('Fetching posts...');
  const { data: posts, error } = await supabase
    .from('posts')
    .select('*');

  if (error) {
    console.error('Error fetching posts:', error);
    return;
  }

  console.log(`Found ${posts.length} posts. Checking for "2024"...`);

  for (const post of posts) {
    let updated = false;
    const updates: any = {};

    const fieldsToCheck = [
      'title_en', 'title_de',
      'content_md_en', 'content_md_de',
      'content_en', 'content_de',
      'summary_en', 'summary_de',
      'tldr_en', 'tldr_de'
    ];

    for (const field of fieldsToCheck) {
      if (post[field] && typeof post[field] === 'string' && post[field].includes('2024')) {
        updates[field] = post[field].replace(/2024/g, '2025');
        updated = true;
      }
    }

    if (updated) {
      console.log(`Updating post: ${post.slug}`);
      const { error: updateError } = await supabase
        .from('posts')
        .update(updates)
        .eq('id', post.id);

      if (updateError) {
        console.error(`Error updating post ${post.slug}:`, updateError);
      } else {
        console.log(`Successfully updated post ${post.slug}`);
      }
    }
  }

  console.log('Done.');
}

updateYear();
