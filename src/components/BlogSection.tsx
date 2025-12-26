import { ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/types/blog';

interface BlogSectionProps {
  posts: BlogPost[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  // We expect the parent to pass the correct posts (e.g. sliced)
  // But if passing all posts, we might want to slice here.
  // Generally explicitly passing the data to display is better.
  // Let's assume passed posts are the ones to display.
  
  return (
    <section id="blog" className="py-24 max-w-7xl mx-auto px-6 relative">
       {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
             <BookOpen className="w-3 h-3 text-blue-400" />
            <span>Engineering Logs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white font-sans font-bold">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Thoughts</span>.
          </h2>
        </div>
        
        <Link 
            href="/blog" 
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
        >
            View all posts
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
