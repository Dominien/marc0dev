"use client";

import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/lib/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col h-full bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden"
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex items-center gap-3 text-xs text-white/40 mb-4 font-mono">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {new Date(post.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-1.5 uppercase tracking-wider text-blue-400/80">
            {post.status === 'published' ? 'Article' : 'Draft'}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
          {post.tldr}
        </p>

        <div className="flex items-center text-xs font-medium text-white/40 group-hover:text-white transition-colors mt-auto">
          Read Article 
          <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
