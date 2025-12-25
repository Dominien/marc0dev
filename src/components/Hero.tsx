'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight, Server, Mail } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import Script from 'next/script';
import Image from 'next/image';
import { useLocale } from '@/i18n/LocaleContext';

export default function Hero() {
  const { dictionary } = useLocale();
  const t = dictionary.hero;
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Text reveal logic
    const nameContainer = nameRef.current;
    if (nameContainer) {
      const text = nameContainer.textContent?.trim() || '';
      nameContainer.innerHTML = ''; 
      
      const words = text.split(' ');
      let globalCharIndex = 0;
      
      words.forEach((word) => {
          const wordSpan = document.createElement('span');
          wordSpan.className = 'inline-block whitespace-nowrap mr-[0.2em]'; 
          
          word.split('').forEach((char) => {
              const charSpan = document.createElement('span');
              charSpan.textContent = char;
              charSpan.className = 'reveal-char animate-reveal';
              charSpan.style.animationDelay = `${globalCharIndex * 0.05}s`;
              wordSpan.appendChild(charSpan);
              globalCharIndex++;
          });
          
          nameContainer.appendChild(wordSpan);
      });
    }

    // Re-initialize Unicorn Studio on mount (fixes navigation issue)
    // @ts-ignore
    if (window.UnicornStudio) {
      // @ts-ignore
      window.UnicornStudio.init();
    }
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 w-full overflow-hidden">
        <Script 
            src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
            onLoad={() => {
                // @ts-ignore
                if (window.UnicornStudio) {
                    // @ts-ignore
                    window.UnicornStudio.init();
                }
            }}
        />
        
        {/* Background Animation: ONLY in Hero (Unicorn Studio) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <div data-us-project="cqcLtDwfoHqqRPttBbQE" className="w-full h-full opacity-100 blur-[2px]"></div>
            
            {/* Large Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-[120px] rounded-full opacity-50 mix-blend-screen"></div>

            {/* Gradient fade at bottom to blend into next section */}
            <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-neutral-950 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Content (Text First on Mobile) */}
                <div className="flex flex-col justify-center">
                    
                    {/* H1: Name with Animation (Reduced Size) */}
                    <h1 className="font-bold tracking-tighter text-white leading-tight mb-6 drop-shadow-2xl">
                        <span className="block text-5xl md:text-6xl lg:text-7xl reveal-container">
                            <span ref={nameRef} id="name-target" className="flex flex-wrap gap-x-[0.1em]">
                                Marco Patzelt
                            </span>
                        </span>
                    </h1>

                    {/* Pitch Block */}
                    <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="pl-4 border-l-2 border-white/20">
                            <h2 className="text-lg md:text-xl font-mono text-white/90 tracking-tight mb-3">
                                {t.role}
                            </h2>
                            {/* UPDATED TEXT: Higher contrast (text-white) and normal font weight */}
                            <p className="text-lg text-white max-w-lg font-normal leading-relaxed drop-shadow-xl">
                                {t.pitch}
                            </p>
                        </div>
                        

                        {/* ACTIONS (Refined Buttons) */}
                        <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up-fade" style={{ animationDelay: '200ms' }}>
                            <ShimmerButton 
                              text={t.cta_primary}
                              href="mailto:marcopatzelt7@gmail.com"
                              className="shadow-2xl"
                              icon={<Mail className="w-4 h-4" />}
                            />
                            
                            <ShimmerButton 
                              text={t.cta_secondary}
                              href="#work"
                              variant="secondary"
                              icon={<ArrowUpRight className="w-4 h-4" />}
                              className="shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column: Visual / Image */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    
                        {/* Main Image Container */}
                        <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-visible mx-auto">
                            {/* Placeholder Image (Replace SRC with your own) */}
                            {/* Ambient Light Glow - Fainter */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 via-purple-500/30 to-orange-500/30 blur-[80px] -z-10 rounded-full scale-110 opacity-30"></div>
                            
                            {/* Using grayscale and contrast filters to blend nicely */}
                            <Image 
                                src="/marco-hero.png" 
                                alt="Marco Patzelt" 
                                fill
                                className="object-cover rounded-2xl transition-all duration-700 ease-out hero-image-mask opacity-100"
                                priority
                            />
                            
                            {/* Floating Card 1: Vercel */}
                        <div className="absolute -left-4 top-48 glass-card p-3 rounded-xl flex items-center gap-3 animate-float border-l border-white/20 shadow-xl shadow-black/50 backdrop-blur-md">
                            <div className="bg-black p-1.5 rounded-md border border-white/10">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-white"><path d="M24 22.525H0l12-21.05 12 21.05z" fill="white"/></svg>
                            </div>
                            <div className="pr-2">
                                <div className="text-[9px] text-white/50 font-mono uppercase tracking-wider">{t.card_arch.title}</div>
                                <div className="text-xs font-semibold text-white">{t.card_arch.value}</div>
                            </div>
                        </div>

                        {/* Floating Card 2: Node.js */}
                        <div className="absolute -right-2 bottom-24 glass-card p-3 rounded-xl flex items-center gap-3 animate-float-delayed border-r border-green-500/30 shadow-xl shadow-black/50 backdrop-blur-md">
                            <div className="bg-green-900/30 p-1.5 rounded-md border border-green-500/20">
                                <Server className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="pr-2">
                                <div className="text-[9px] text-white/50 font-mono uppercase tracking-wider">{t.card_backend.title}</div>
                                <div className="text-xs font-semibold text-white">{t.card_backend.value}</div>
                            </div>
                        </div>

                        {/* Decorative Grid behind image */}
                        <div className="absolute -z-10 -right-6 -top-6 w-full h-full border border-white/5 rounded-2xl pattern-grid opacity-30"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
