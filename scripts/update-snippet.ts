import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load env vars manually
const envLocalPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envLocalPath, 'utf-8');
const env: Record<string, string> = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) env[key.trim()] = value.trim();
});

const supabase = createClient(env.SUPABASE_URL_MARCO, env.SUPABASE_SERVICE_KEY_MARCO);

const sqlSnippet = `create table public.posts (
  id uuid not null default gen_random_uuid (),
  slug text not null,
  title_de text not null,
  tldr_de text null,
  content_de text null,
  title_en text not null,
  tldr_en text null,
  content_en text null,
  mermaid_graph text null,
  code_snippet jsonb null,
  status text not null default 'draft'::text,
  published_at timestamp with time zone null,
  updated_at timestamp with time zone null default now(),
  created_at timestamp with time zone null default now(),
  constraint posts_pkey primary key (id),
  constraint posts_slug_key unique (slug),
  constraint posts_status_check check (
    (
      status = any (array['draft'::text, 'published'::text])
    )
  )
) TABLESPACE pg_default;

create trigger handle_updated_at BEFORE
update on posts for EACH row
execute FUNCTION extensions.moddatetime ('updated_at');`;

async function update() {
  console.log('Updating Code Snippet...');
  const { error } = await supabase
    .from('posts')
    .update({ 
        code_snippet: {
            language: 'sql',
            code: sqlSnippet
        }
    })
    .eq('status', 'published');

  if (error) {
    console.error('Error updating:', error);
  } else {
    console.log('Successfully added code snippet.');
  }
}

update();
