import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABannerProps {
  lang: string;
}

export default function CTABanner({ lang }: CTABannerProps) {
  const isDe = lang === 'de';

  const content = {
    title: isDe ? "Bereit, deine Vision zu verwirklichen?" : "Ready to realize your vision?",
    text: isDe 
      ? "Lass uns gemeinsam an deinem nächsten großen Projekt arbeiten. Ich helfe dir dabei, technische Exzellenz mit herausragendem Design zu verbinden."
      : "Let's collaborate on your next big project. I help you enable technical excellence combined with outstanding design.",
    button: isDe ? "Projekt starten" : "Start a Project",
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 md:p-12 mb-12">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">{isDe ? "Zusammenarbeit" : "Collaboration"}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            {content.title}
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            {content.text}
          </p>
        </div>

        <Link
          href={`/${lang}/contact`}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
        >
          {content.button}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
