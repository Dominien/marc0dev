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
    %% Force vertical stacking
    Old_Way ~~~ New_Way

    subgraph Old_Way [The Liability: Static Middleware]
        A[Request] --> B[Controller]
        B --> C[Service]
        C --> D[ORM]
        D --> E[(DB)]
        B -.->|Breaks| A
    end

    subgraph New_Way [The Value: Agentic Orchestration]
        F[Question] --> G[Agentic Layer]
        G -->|Gemini 3 Pro| H{Context}
        H -->|SQL| I[(DB)]
        I -->|Data| G
        G -->|Answer| F
    end

    %% Styles
    classDef default fill:#171717,stroke:#404040,color:#fff,stroke-width:1px;
    classDef highlight fill:#1e3a8a,stroke:#3b82f6,color:#fff,stroke-width:2px;
    classDef agent fill:#0f172a,stroke:#3b82f6,color:#fff,stroke-width:2px,stroke-dasharray: 5 5;
    classDef database fill:#262626,stroke:#525252,color:#fff;

    class G highlight;
    class E,I database;
    
    style Old_Way fill:#171717,stroke:#404040,color:#aaa,stroke-width:1px,stroke-dasharray: 5 5
    style New_Way fill:#1e3a8a30,stroke:#3b82f6,color:#fff,stroke-width:1px
    
    %% Hide the link used for positioning
    linkStyle 0 stroke-width:0px,fill:none;
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
