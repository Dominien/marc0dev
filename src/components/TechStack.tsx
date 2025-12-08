import { 
  FileCode, Server, Zap, Database, Layers, Triangle, GitBranch, Wind, Atom, Sparkles 
} from 'lucide-react';

export default function TechStack() {
  return (
    <section id="tech-stack" className="overflow-visible w-full pt-24 pb-24 relative bg-black">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-40"></div>
          <div className="absolute top-24 left-24 h-0.5 w-0.5 bg-white rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-48 right-1/4 h-1 w-1 bg-blue-400/20 rounded-full blur-[1px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-1/3 h-0.5 w-0.5 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Content */}
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">
            Entwickelt mit
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-slate-400 leading-relaxed">
            Best-in-Class Tooling. Ich setze auf einen modernen, bewährten Stack mit großer Community und langfristigem Support. 
            Keine Experimente, sondern Industriestandards.
          </p>
        </div>

        {/* Interactive Grid & Flow Visualization */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Flow Schema (Desktop) */}
          <svg className="absolute inset-0 -top-12 h-[1000px] w-full pointer-events-none hidden md:block overflow-visible z-0" preserveAspectRatio="none" viewBox="0 0 1000 800">
            <defs>
               <linearGradient id="blueFlowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Static faint tracks - Connecting Grid Positions to Center Hub (500, 390) */}
            {/* Row 1 */}
            <path d="M 100,100 C 100,300 450,350 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 300,100 C 300,300 480,350 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 500,100 C 500,300 500,350 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 700,100 C 700,300 520,350 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 900,100 C 900,300 550,350 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            
            {/* Row 2 */}
            <path d="M 100,250 C 100,350 450,380 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 300,250 C 300,350 480,380 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 500,250 C 500,350 500,380 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 700,250 C 700,350 520,380 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
            <path d="M 900,250 C 900,350 550,380 500,390" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>


            {/* Animated Data Packets - Flowing from Cards to Hub */}
            {/* Row 1 */}
            <path className="animate-flow-custom" strokeDasharray="20, 1000" strokeDashoffset="0" d="M 100,100 C 100,300 450,350 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '8s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 1000" strokeDashoffset="-200" d="M 300,100 C 300,300 480,350 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '7s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 1000" strokeDashoffset="-100" d="M 500,100 C 500,300 500,350 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '6s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 1000" strokeDashoffset="-300" d="M 700,100 C 700,300 520,350 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '9s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 1000" strokeDashoffset="-150" d="M 900,100 C 900,300 550,350 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '8.5s', opacity: 0.8, strokeLinecap: 'round' }}></path>

            {/* Row 2 */}
            <path className="animate-flow-custom" strokeDasharray="20, 800" strokeDashoffset="-50" d="M 100,250 C 100,350 450,380 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '7.5s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 800" strokeDashoffset="-250" d="M 300,250 C 300,350 480,380 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '6.5s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 800" strokeDashoffset="-150" d="M 500,250 C 500,350 500,380 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '8s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 800" strokeDashoffset="-350" d="M 700,250 C 700,350 520,380 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '7s', opacity: 0.8, strokeLinecap: 'round' }}></path>
            <path className="animate-flow-custom" strokeDasharray="20, 800" strokeDashoffset="-100" d="M 900,250 C 900,350 550,380 500,390" fill="none" stroke="#60a5fa" strokeWidth="2" filter="url(#glow)" style={{ animationDuration: '9.5s', opacity: 0.8, strokeLinecap: 'round' }}></path>
          </svg>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 z-10 mb-20 relative gap-x-6 gap-y-6">
            
            {/* 1. TypeScript */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <FileCode className="w-8 h-8 text-slate-400 group-hover:text-blue-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">TypeScript</span>
            </div>

            {/* 2. Node.js */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Server className="w-8 h-8 text-slate-400 group-hover:text-green-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Node.js</span>
            </div>

            {/* 3. Next.js */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Zap className="w-8 h-8 text-slate-400 group-hover:text-white transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Next.js</span>
            </div>

            {/* 4. Supabase */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Database className="w-8 h-8 text-slate-400 group-hover:text-emerald-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Supabase</span>
            </div>

            {/* 5. PostgreSQL */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Database className="w-8 h-8 text-slate-400 group-hover:text-blue-300 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">PostgreSQL</span>
            </div>

            {/* 6. Redis */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Layers className="w-8 h-8 text-slate-400 group-hover:text-red-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Redis</span>
            </div>

            {/* 7. Gemini API (Replaced Framer Motion) */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Sparkles className="w-8 h-8 text-slate-400 group-hover:text-purple-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Gemini API</span>
            </div>

            {/* 8. Vercel */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Triangle className="w-8 h-8 text-slate-400 group-hover:text-white transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Vercel</span>
            </div>

            {/* 9. Git */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <GitBranch className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Git</span>
            </div>

            {/* 10. Tailwind */}
            <div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full h-24 border-white/5 border relative items-center justify-center flex-col gap-2">
                <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all"></div>
                <Wind className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-all duration-300" />
                <span className="text-xs text-slate-500 group-hover:text-white transition-colors">Tailwind</span>
            </div>

          </div>

          {/* Central Convergence Hub */}
          <div className="flex mt-32 z-20 relative justify-center">
            <div className="flex relative items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#020204] shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-500/30">
                <div className="absolute inset-[-10px] rounded-full border border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-[-4px] rounded-full border border-blue-400/30 border-dotted animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
                <div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
                  <Atom className="h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
