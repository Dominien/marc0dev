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
    subgraph "Startup A (Dead)"
        A["Founding Eng"] -->|Focus K8s| B["Complex Infra"]
        B -->|Months| C["0 Users"]
        C --> D["Bankrupt"]
    end
    style D fill:#ffcccc
===
graph TD
    subgraph "Startup B (Alive)"
        E["Founding Eng"] -->|Focus PaaS| F["Features"]
        F -->|Days| G["Feedback"]
        G --> H["Revenue"]
    end
    style H fill:#ccffcc
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
