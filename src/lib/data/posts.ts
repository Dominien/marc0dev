import { supabase } from '@/lib/supabase';
import { BlogPost, DatabasePost } from '@/lib/types/blog';

export async function getPosts(lang: 'en' | 'de' = 'en'): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    return [];
  }

  return (data as DatabasePost[]).map((post) => mapDatabasePostToBlogPost(post, lang));
}

export async function getPostBySlug(slug: string, lang: 'en' | 'de' = 'en'): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    // console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }

  return mapDatabasePostToBlogPost(data as DatabasePost, lang);
}

function mapDatabasePostToBlogPost(post: DatabasePost, lang: 'en' | 'de'): BlogPost {
  const isEn = lang === 'en';
  // Fallback to the other language if the current one is empty, or just use empty string
  const title = isEn ? (post.title_en || post.title_de) : (post.title_de || post.title_en);
  const content = isEn ? (post.content_en || post.content_de) : (post.content_de || post.content_en);
  const tldr = isEn ? (post.tldr_en || post.tldr_de) : (post.tldr_de || post.tldr_en);

  return {
    id: post.id,
    slug: post.slug,
    title: title || '',
    content_md: content || '',
    tldr: tldr || '',
    mermaid_graph: post.mermaid_graph,
    code_snippet: post.code_snippet,
    status: post.status,
    published_at: post.published_at || new Date().toISOString(),
    updated_at: post.updated_at || new Date().toISOString(),
  };
}
