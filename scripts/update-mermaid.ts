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

const newMermaidGraph = `graph TD
    subgraph "Static (Old)"
        A["User"] --> B["API"]
        B -->|"Hardcoded SQL"| C["DB"]
    end
===
graph TD
    subgraph "Agentic (New)"
        D["User"] --> E["Agent (Gemini)"]
        E -->|"1. Read Schema"| F["Schema"]
        E -->|"2. Gen. Code"| G["Runtime Exec"]
        G -->|"Dynamic Query"| H["DB / API"]
    end
===
graph TD
    User["User Request"] --> Edge["Edge Network (Vercel)"]
    Edge --> MW["Middleware (Auth & Routing)"]
    MW -- "Authorized" --> App["Next.js Monolith (App Router)"]
    MW -- "Block/Redirect" --> User
    App --> DB["Supabase (Postgres)"]
    App --> Func["Edge Functions (Async Jobs)"]
    DB -.-> Func
`;


async function update() {
  console.log('Updating Mermaid graph...');
  const { error } = await supabase
    .from('posts')
    .update({ mermaid_graph: newMermaidGraph })
    .eq('status', 'published'); // Updates all published posts (there is only one)

  if (error) {
    console.error('Error updating:', error);
  } else {
    console.log('Successfully updated Mermaid graph style.');
  }
}

update();
