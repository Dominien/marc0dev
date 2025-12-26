"use client";

import Link from 'next/link';
import { Mail } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { useLocale } from '@/i18n/LocaleContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { dictionary, locale } = useLocale();
  const pathname = usePathname();

  const switchLanguage = (targetLocale: string) => {
    if (!pathname) return `/${targetLocale}`;
    
    // Split the path into segments
    const segments = pathname.split('/');
    // segments[0] is empty string because path starts with /
    // segments[1] is the locale (e.g. 'en', 'de')
    
    // Replace the locale segment
    segments[1] = targetLocale;
    
    return segments.join('/');
  };

  const navItems = [
    { name: dictionary.navbar.architektur, href: '#stack' },
    { name: dictionary.navbar.engineering, href: '#frontend' },
    { name: dictionary.navbar.techstack, href: '#tech-stack' },
    { name: dictionary.navbar.projekte, href: '#work' },
    { name: dictionary.navbar.blog, href: `/${locale}/blog` }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo / Name - Simplified */}
            <Link href={`/${locale}`} className="text-sm font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                Marco Patzelt
            </Link>
            
            {/* Navigation - Clean & Simple */}
            <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                    <Link 
                        key={item.name}
                        href={item.href} 
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-6">
                {/* Language Switcher */}
                <div className="flex items-center gap-2 text-xs font-medium">
                     <Link 
                       href={switchLanguage('de')} 
                       className={`transition-colors ${locale === 'de' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                     >
                       DE
                     </Link>
                     <span className="text-white/20">/</span>
                     <Link 
                       href={switchLanguage('en')} 
                       className={`transition-colors ${locale === 'en' ? 'text-white' : 'text-white/40 hover:text-white'}`}
                     >
                       EN
                     </Link>
                </div>

                {/* CTA */}
                <ShimmerButton 
                    text={dictionary.navbar.contact}
                    href="mailto:marcopatzelt7@gmail.com"
                    icon={<Mail className="w-4 h-4" />}
                    className="shadow-2xl"
                />
            </div>
        </div>
    </header>
  );
}
