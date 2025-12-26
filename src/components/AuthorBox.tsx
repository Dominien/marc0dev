import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function AuthorBox() {
  return (
    <div className="sticky top-32 hidden lg:block">
      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
            {/* Fallback to simple generic avatar if image fails or generic gradient */}
            <Image 
              src="/marco-hero.png" 
              alt="Marco Patzelt"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-white">Marco Patzelt</h3>
            <p className="text-xs text-white/50">Full-Stack Engineer</p>
          </div>
        </div>
        
        <p className="text-sm text-white/60 mb-6 leading-relaxed">
          Specialized in Node.js Middleware, Vercel, and Enterprise Integration. Building the future of agentic orchestration.
        </p>

        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/Dominien" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link 
            href="https://linkedin.com/in/marco-patzelt-2574b1257/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="https://x.com/Marc0dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
