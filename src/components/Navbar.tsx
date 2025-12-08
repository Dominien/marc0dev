import Link from 'next/link';
import { Mail } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo / Name - Simplified */}
            <Link href="/" className="text-sm font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                Marco Patzelt
            </Link>
            
            {/* Navigation - Clean & Simple */}
            <nav className="hidden md:flex items-center gap-8">
                {[
                    { name: 'Architektur', href: '#stack' },
                    { name: 'Engineering', href: '#frontend' },
                    { name: 'Tech Stack', href: '#tech-stack' },
                    { name: 'Projekte', href: '#work' }
                ].map((item) => (
                    <Link 
                        key={item.name}
                        href={item.href} 
                        className="text-sm font-medium text-white/60 hover:text-white transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* CTA */}
            <ShimmerButton 
                text="Kontakt"
                href="mailto:marcopatzelt7@gmail.com"
                icon={<Mail className="w-4 h-4" />}
                className="shadow-2xl"
            />
        </div>
    </header>
  );
}
