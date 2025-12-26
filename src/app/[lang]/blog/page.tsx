import { getPosts } from '@/lib/data/posts';
import BlogCard from '@/components/BlogCard';
import { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import CTA from '@/components/CTA';
import { dictionaries, Locale } from '@/i18n/dictionaries';

export const metadata: Metadata = {
  title: 'Engineering Log | Marco Patzelt',
  description: 'Thoughts on software architecture, AI agents, and full-stack engineering.',
};

interface BlogPageProps {
  params: Promise<{ lang: string }>;
}

export default async function BlogOverviewPage({ params }: BlogPageProps) {
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';
  const t = dictionaries[locale].blog;
  const posts = await getPosts(locale);

  return (
    <main className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
             <BookOpen className="w-3 h-3 text-blue-400" />
            <span>{t.archive}</span>
          </div>
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-white font-sans font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: t.title }}
          />
          <p className="text-xl text-white/50 max-w-2xl font-light leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {posts.map((post) => (
            <div key={post.id} className="h-full">
               <BlogCard post={post} />
            </div>
          ))}
        </div>

        <CTA />

      </div>
    </main>
  );
}
