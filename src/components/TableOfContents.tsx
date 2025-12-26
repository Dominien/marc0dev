"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  content: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Parse headings from markdown content
    const lines = content.split('\n');
    const extractedHeadings: Heading[] = [];
    
    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        // Create simple slug from text
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-');
        
        extractedHeadings.push({ id, text, level });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto hidden lg:block">
      <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-3 text-sm">
        {headings.map(({ id, text, level }) => (
          <li 
            key={id}
            style={{ paddingLeft: (level - 2) * 16 }}
          >
            <Link
              href={`#${id}`}
              className={cn(
                "block transition-colors duration-200 border-l-2 pl-4 -ml-px",
                activeId === id 
                  ? "text-blue-400 border-blue-400" 
                  : "text-white/40 border-transparent hover:text-white hover:border-white/20"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(id);
              }}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
