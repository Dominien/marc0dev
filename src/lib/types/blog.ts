export interface DatabasePost {
  id: string;
  slug: string;
  title_de: string;
  tldr_de?: string;
  content_de?: string;
  title_en: string;
  tldr_en?: string;
  content_en?: string;
  mermaid_graph?: string;
  code_snippet?: Record<string, any>; // jsonb
  status: 'draft' | 'published';
  published_at?: string;
  updated_at?: string;
  created_at?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content_md: string;
  tldr: string;
  mermaid_graph?: string;
  code_snippet?: Record<string, any>;
  status: 'draft' | 'published';
  published_at: string;
  updated_at: string;
}
