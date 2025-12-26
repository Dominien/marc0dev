import { getPostBySlug } from '@/lib/data/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import Mermaid from '@/components/Mermaid';



interface BlogPostPageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export const revalidate = 60;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug, lang } = await params;
  const post = await getPostBySlug(slug, lang as 'en' | 'de');

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Marco Patzelt`,
    description: post.tldr,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, lang } = await params;
  const post = await getPostBySlug(slug, lang as 'en' | 'de');

  if (!post) {
    notFound();
  }

  // Calculate split index for "middle" placement
  const content = post.content_md || '';
  let splitIndex = Math.floor(content.length / 2);

  // Adjust split index to the nearest double newline to avoid breaking paragraphs
  const nextSafeBreak = content.indexOf('\n\n', splitIndex);
  if (nextSafeBreak !== -1) {
    splitIndex = nextSafeBreak;
  }

  // Ensure we are not inside a code block (odd number of backticks means inside)
  const textBefore = content.substring(0, splitIndex);
  const backtickCount = (textBefore.match(/```/g) || []).length;
  if (backtickCount % 2 !== 0) {
    // If inside code block, find the next closure
    const nextCodeBlockEnd = content.indexOf('```', splitIndex);
    if (nextCodeBlockEnd !== -1) {
      // Move past the closing ``` and any following newline
      splitIndex = content.indexOf('\n\n', nextCodeBlockEnd);
      if (splitIndex === -1) splitIndex = content.length; // Fallback to end
    }
  }

  const part1 = content.substring(0, splitIndex);
  const part2 = content.substring(splitIndex);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Link */}
        <Link 
          href={`/${lang}/blog`}
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Overview
        </Link>
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-sm text-white/40 font-mono mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.published_at).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', { 
                day: 'numeric', 
                month: 'long', 
                year: 'numeric' 
              })}
            </div>
            {post.status === 'draft' && (
              <>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-yellow-500/80 uppercase tracking-widest text-xs">Draft</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8 leading-tight">
            {post.title}
          </h1>

          {post.tldr && (
            <p className="text-lg text-white/60 leading-relaxed font-light border-l-2 border-blue-500/30 pl-6">
              {post.tldr}
            </p>
          )}
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-base max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
          prose-p:text-white/80 prose-p:leading-relaxed
          prose-a:text-blue-400 hover:prose-a:text-blue-300 
          prose-code:text-blue-300 prose-code:bg-white/5 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10 
          prose-strong:text-white prose-li:text-white/80">
          
          <ReactMarkdown>
            {part1}
          </ReactMarkdown>

          {post.mermaid_graph && (
            <div className="flex flex-col gap-12 my-12">
              {post.mermaid_graph.split('===').map((chart, index) => (
                <Mermaid key={index} chart={chart.trim()} />
              ))}
            </div>
          )}

          <ReactMarkdown>
            {part2}
          </ReactMarkdown>
        </article>

      </div>
    </main>
  );
}
