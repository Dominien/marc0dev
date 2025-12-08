import { Code2, LayoutTemplate, Zap, GitGraph, ScanEye, Blocks } from 'lucide-react';

export default function FrontendEngineering() {
  return (
    <section id="frontend" className="py-24 px-4 bg-black relative overflow-hidden">
      
      {/* Spotlight Card Wrapper */}
      <div className="sm:mx-6 spotlight-card group xl:ml-auto xl:mr-auto max-w-7xl rounded-[40px] mt-4 mr-3 ml-3 pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative bg-white/10">
        
        <div className="spotlight-inner sm:p-16 lg:p-24 overflow-hidden flex flex-col bg-[#0A0A0A] rounded-[40px] pt-8 pr-8 pb-8 pl-8 relative items-center">

          {/* Section Number */}
          <div className="absolute top-8 right-8 z-20 pointer-events-none opacity-30">
            <span className="font-mono text-sm font-semibold text-white tracking-widest font-geist">03</span>
          </div>

          {/* Header */}
          <div className="relative z-10 text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex gap-2 uppercase text-xs font-bold text-white tracking-widest font-geist bg-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
              <Code2 className="w-4 h-4" />
              Frontend Engineering
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl tracking-tighter text-white mb-8 leading-[1.05] font-geist">
              Design-Umsetzung &
              <span className="text-gray-600 block sm:inline sm:ml-4 font-geist">System-Integration.</span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto font-geist">
              Ich realisiere vollständige Web-Interfaces, die visuell überzeugen und technisch nahtlos mit der darunterliegenden Architektur verschmelzen.
            </p>
          </div>

          {/* Masonry / Bento Grid - 6 Cards */}
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">

            {/* --- ROW 1 --- */}

            {/* 1. Image (Pixel-Perfect) - Blue */}
            <div className="flex flex-col min-h-[220px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-[#121212] opacity-60 border-white/5 border rounded-[32px] relative items-center justify-center">
              {/* Zoomed Background Image */}
              <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4780cd9-2a3d-4bdc-9e5f-85a097b3a8bf_1600w.webp)] bg-cover bg-center scale-110"></div>
              
              <div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#635BFF]/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 z-10"></div>
              
              {/* Icon */}
              <div className="relative z-20 mb-6">
                <ScanEye className="w-10 h-10 text-white/40 group-hover/card:text-[#635BFF] transition-colors duration-500" />
              </div>

              <p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist absolute bottom-8 z-20">
                Visual Fidelity
              </p>
            </div>

            {/* 2. Text (Pixel-Perfect) */}
            <div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[220px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50">
                <LayoutTemplate className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">
                "Aus statischen Layouts werden funktionale, responsive Webseiten. Ich übersetze Designs exakt in Code."
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-sm font-semibold text-white font-geist">Pixel-Perfekt</div>
                  <div className="text-xs text-gray-500 font-geist">Implementation</div>
                </div>
              </div>
            </div>

            {/* 3. Image (Architecture) - Purple (Swapped from Bottom) */}
            <div className="flex flex-col min-h-[220px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-[#121212] opacity-60 border-white/5 border rounded-[32px] relative items-center justify-center">
              {/* Zoomed Background Image */}
              <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9c4d84b-1b17-41c3-86c7-db3ffe513f31_1600w.webp)] bg-cover bg-center scale-110"></div>
              
              <div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#4A154B]/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 z-10"></div>
              
               {/* Icon */}
              <div className="relative z-20 mb-6">
                <Blocks className="w-10 h-10 text-white/40 group-hover/card:text-white transition-colors duration-500" />
              </div>

              <p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist absolute bottom-8 z-20">
                Type Safety
              </p>
            </div>


            {/* --- ROW 2 --- */}

            {/* 4. Text (Interaction) */}
            <div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[220px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">
                "Ich hauche dem Design Leben ein. Wie verhalten sich Filter? Was passiert beim Klick? Ich entwickle die Interaktions-Logik."
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-sm font-semibold text-white font-geist">Interaktions-Logik</div>
                  <div className="text-xs text-gray-500 font-geist">Behavior</div>
                </div>
              </div>
            </div>

            {/* 5. Image (Interaction) - Orange (Swapped from Top) - NO ICON */}
            <div className="flex flex-col min-h-[220px] hover:opacity-100 transition-all duration-500 group/card overflow-hidden bg-[#121212] opacity-60 border-white/5 border rounded-[32px] relative items-center justify-center">
              {/* Zoomed Background Image */}
              <div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63938f50-71a9-4f22-a6d5-0e7155a4ef5e_1600w.webp)] bg-cover bg-center scale-110"></div>
              
              <div className="group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-[#FF7A59]/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0 z-10"></div>
              
              {/* No Icon Here */}

              <p className="mt-4 text-sm font-medium text-gray-500 uppercase tracking-widest opacity-0 group-hover/card:opacity-100 transform translate-y-2 group-hover/card:translate-y-0 transition-all duration-500 font-geist absolute bottom-8 z-20">
                User Experience
              </p>
            </div>

            {/* 6. Text (Architecture) */}
            <div className="p-8 rounded-[32px] bg-[#151515] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[220px] group/card hover:-translate-y-1 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 transition-all duration-500 group-hover/card:opacity-50">
                <GitGraph className="w-10 h-10 text-white" />
              </div>
              <p className="text-lg text-gray-300 font-light leading-relaxed tracking-tight font-geist">
                "Das Frontend ist kein isolierter Anstrich, sondern das passgenaue Gegenstück zum Backend. Datenstrukturen greifen perfekt ineinander."
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
                <div>
                  <div className="text-sm font-semibold text-white font-geist">Architektur</div>
                  <div className="text-xs text-gray-500 font-geist">Integration</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
