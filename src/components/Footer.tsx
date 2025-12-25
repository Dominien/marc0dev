"use client";

import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useLocale } from '@/i18n/LocaleContext';

export default function Footer() {
  const { dictionary } = useLocale();
  const t = dictionary.footer;
  const tn = dictionary.navbar; // Reuse navbar links

  return (
    <footer className="max-w-7xl mx-auto px-6 mb-12">
      <div className="bg-center animate-entry delay-200 animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 w-full bg-cover rounded-3xl pt-16 pr-6 pb-6 pl-6 relative overflow-hidden border border-white/5">
        {/* Background Image Overlay */}
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-[url(/footer-bg.jpg)] bg-cover bg-center opacity-60 blur-sm pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
        
        {/* Blue Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-12 max-w-7xl mx-auto px-6 relative z-10">
          <div className="lg:col-span-2 col-span-full">
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex gap-2 items-center group cursor-pointer">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <span className="font-mono text-xs font-bold text-white">MP</span>
                </div>
                <span className="text-xl text-white font-sans tracking-tight group-hover:opacity-80 transition-opacity">
                  Marco Patzelt
                </span>
              </Link>

              <div className="flex gap-4">
              <a href="https://x.com/Marc0dev" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/marco-patzelt-2574b1257/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              <a href="https://github.com/Dominien" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                <Github className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:marcopatzelt7@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white mb-4 text-sm font-medium font-sans">{t.navigation}</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="#stack" className="hover:text-white transition-colors font-sans">
                  {tn.architektur}
                </Link>
              </li>
              <li>
                <Link href="#frontend" className="hover:text-white transition-colors font-sans">
                  {tn.engineering}
                </Link>
              </li>
              <li>
                <Link href="#tech-stack" className="hover:text-white transition-colors font-sans">
                  {tn.techstack}
                </Link>
              </li>
              <li>
                <Link href="#work" className="hover:text-white transition-colors font-sans">
                  {tn.projekte}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white mb-4 text-sm font-medium font-sans">{t.legal}</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <Link href="/impressum" className="hover:text-white transition-colors font-sans">
                  {t.impressum}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white transition-colors font-sans">
                  {t.datenschutz}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white mb-4 text-sm font-medium font-sans">{t.contact}</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
              <a href="mailto:marcopatzelt7@gmail.com" className="hover:text-white transition-colors font-sans">
                marcopatzelt7@gmail.com
              </a>
            </li>
              <li className="text-neutral-400">
                Remote / Düsseldorf
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-start gap-4 text-xs text-neutral-500 font-sans relative z-10">
          <p className="font-sans">
            {t.rights}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-blue-500/5 blur-3xl opacity-30 pointer-events-none"></div>
      </div>
    </footer>
  );
}
