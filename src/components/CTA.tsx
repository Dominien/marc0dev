import { ArrowUpRight, Mail } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function CTA() {
  // Force recompile
  return (
    <section className="max-w-7xl mx-auto px-6 mb-12 pt-12">
      <div className="bg-center animate-entry delay-200 animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 w-full bg-cover rounded-3xl p-8 sm:p-10 relative overflow-hidden border border-white/5">
        
        {/* Background Image Overlay - Matching Footer */}
        <div className="absolute inset-0 bg-[url(/cta-bg.jpg)] bg-cover bg-center opacity-60 blur-md pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        
        {/* Blue Glow Effect - Matching Footer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-10 relative z-10">
          <div className="">
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-geist drop-shadow-lg">
              Lass uns <br /> vernetzen.
            </h3>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="text-sm sm:text-base text-white max-w-md md:text-right font-geist drop-shadow-md font-medium">
              Ich bin immer offen für spannende Diskussionen über Frontend-Architektur, Performance und moderne Web-Stacks.
            </p>
            
            {/* Hero-Style Button */}
            <ShimmerButton 
                text="Schreib mir" 
                href="mailto:marcopatzelt7@gmail.com" 
                icon={<Mail className="w-4 h-4" />}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
