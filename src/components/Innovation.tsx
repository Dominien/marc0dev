
"use client";

import { Brain, ShieldCheck, RefreshCw, Workflow, Github, Terminal, Zap, Code2, Database, Play, CheckCircle2 } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { useEffect, useState } from 'react';
import { useLocale } from '@/i18n/LocaleContext';

export default function Innovation() {
  const { dictionary } = useLocale();
  const t = dictionary.innovation;

  const [terminalLines, setTerminalLines] = useState([
    "> INITIALIZING_COGNITIVE_LAYER...",
    "> LOADING_SCHEMA: public.users",
    "> LOADING_SCHEMA: public.transactions",
  ]);

  // Terminal Typing Animation Logic
  useEffect(() => {
    const lines = [
      "> ANALYZING_INTENT: 'Revenue Q3'",
      "> FORMULATING_PLAN: SQL + Python",
      "> EXEC_SQL: SELECT * FROM transactions WHERE date >= '2025-07-01'",
      "> DATA_RETRIEVED: 14,203 rows",
      "> EXEC_PYTHON: df.groupby('category').sum()",
      "> VALIDATING_RESULT: Delta < 0.01%",
      "> OUTPUT_GENERATED",
    ];
    
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        const newLines = [...prev, lines[currentIndex]];
        if (newLines.length > 7) newLines.shift(); 
        return newLines;
      });
      currentIndex = (currentIndex + 1) % lines.length;
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="innovation" className="bg-black relative overflow-hidden">
        
      <style jsx global>{`
        @keyframes flow-synapse {
          0% { stroke-dashoffset: 24; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes scan-line {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes beam-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-synapse {
          stroke-dasharray: 4 4;
          animation: flow-synapse 2s linear infinite;
        }
        .animate-scan {
          animation: scan-line 3s linear infinite;
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid for technical feel */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl rounded-3xl mr-auto ml-auto pt-24 pb-24 px-6 relative z-10">
        
        {/* Header */}
        <div className="w-full lg:mb-24 mb-20">
          <div className="w-full lg:mb-24 mb-20">
            <div className="w-full">
              <div className="max-w-4xl">
                <h2 className="lg:text-8xl text-4xl font-normal text-white tracking-tight mb-8">
                  {t.title_part1} <span className="text-white/30">{t.title_part2}</span>
                </h2>
              </div>

              <div className="delay-100 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 w-full">
                <div className="max-w-4xl">
                  {/* We render HTML string safely or just use dangerouslySetInnerHTML if needed, but for now simple replacement */}
                  {/* Since description contains <strong>, we should ideally parse it. But keeping it simple for now or using dangerouslySetInnerHTML */}
                  <p className="text-lg text-white/60 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.description }} />
                </div>
                <div className="flex gap-4 lg:justify-end items-center w-full">
                  <ShimmerButton 
                     text={t.button_github} 
                     href="https://github.com/Dominien/agentic-orchestration-layer-model.git"
                     target="_blank"
                     icon={<Github className="w-4 h-4" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Panel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0 border-t border-l border-white/5">

          {/* Card 1: System 2 Thinking */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(168,85,247,0.1),transparent_40%)] z-0"></div>
            
            <div className="relative h-48 mb-6 flex items-center justify-center">
               <div className="relative w-full h-full max-w-[240px] flex items-center justify-center">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <g className="opacity-30 stroke-purple-500 stroke-1">
                        <line x1="100" y1="100" x2="60" y2="60" />
                        <line x1="100" y1="100" x2="140" y2="60" />
                        <line x1="100" y1="100" x2="60" y2="140" />
                        <line x1="100" y1="100" x2="140" y2="140" />
                        <line x1="60" y1="60" x2="140" y2="60" />
                        <line x1="60" y1="140" x2="140" y2="140" />
                        <line x1="60" y1="60" x2="60" y2="140" />
                        <line x1="140" y1="60" x2="140" y2="140" />
                      </g>
                      <g className="stroke-purple-400 stroke-[2] animate-synapse">
                         <line x1="100" y1="100" x2="60" y2="60" />
                         <line x1="140" y1="140" x2="100" y2="100" style={{animationDelay: '1s'}} />
                      </g>
                      <circle cx="100" cy="100" r="12" className="fill-purple-500/20 stroke-purple-500 animate-pulse" />
                      <circle cx="60" cy="60" r="4" className="fill-purple-400" />
                      <circle cx="140" cy="60" r="4" className="fill-purple-400" />
                      <circle cx="60" cy="140" r="4" className="fill-purple-400" />
                      <circle cx="140" cy="140" r="4" className="fill-purple-400" />
                      
                      <foreignObject x="88" y="88" width="24" height="24">
                        <Brain className="w-6 h-6 text-purple-400" />
                      </foreignObject>
                    </svg>
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight flex items-center gap-2">
                {t.cards.system2.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {t.cards.system2.desc}
              </p>
            </div>
          </div>

          {/* Card 2: Glass Box Trust */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(34,197,94,0.1),transparent_40%)] z-0"></div>

            <div className="relative h-48 mb-6 flex flex-col">
              <div className="w-full h-full bg-[#0C0C0C] rounded-lg border border-white/10 p-4 font-mono text-[10px] leading-relaxed overflow-hidden relative shadow-inner">
                <div className="absolute top-0 left-0 w-full h-6 bg-white/5 flex items-center px-2 gap-1.5 border-b border-white/5">
                   <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                   <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                   <span className="ml-2 text-white/20">agent_runtime.log</span>
                </div>
                
                <div className="mt-8 flex flex-col gap-1">
                  {terminalLines.map((line, i) => (
                    <div key={i} className={`
                      ${line.includes('EXEC_SQL') ? 'text-blue-400' : 
                        line.includes('EXEC_PYTHON') ? 'text-yellow-400' : 
                        line.includes('VALIDATING') ? 'text-green-400' : 'text-gray-500'}
                      animate-[fadeIn_0.3s_ease-out]
                    `}>
                      {line}
                    </div>
                  ))}
                  <div className="w-2 h-4 bg-white/50 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                {t.cards.glassbox.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                {t.cards.glassbox.desc}
              </p>
            </div>
          </div>

          {/* Card 3: CAG Runtime */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.1),transparent_40%)] z-0"></div>

            <div className="relative h-48 mb-6 flex flex-col justify-center gap-3">
               
               {/* 1. Prompt / Input */}
               <div className="w-full flex items-center gap-2 opacity-50 mb-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                 <span className="text-[10px] font-mono text-white/60">{t.visuals.input}: "Calculate CLTV"</span>
               </div>

               {/* 2. Dynamic Code Generation Container */}
               <div className="w-full bg-[#0d0d0d] border border-blue-500/20 rounded-lg p-3 font-mono text-[10px] text-blue-100/80 leading-loose relative overflow-hidden group-hover:border-blue-500/40 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.05)]">
                  
                  {/* Glowing Pulse Effect for "Runtime" */}
                  <div className="absolute inset-0 bg-blue-500/5 animate-[pulse_2s_infinite]"></div>
                  
                  <div className="relative z-10 flex flex-col">
                    <span className="text-purple-400 flex items-center gap-2">
                      @runtime_generated <span className="text-[8px] bg-purple-500/20 px-1 rounded text-purple-300">AUTO</span>
                    </span>
                    <span className="typing-effect opacity-0 animate-[fadeIn_0.5s_forwards_0.2s]">def calculate_cltv(df):</span>
                    <span className="typing-effect opacity-0 animate-[fadeIn_0.5s_forwards_0.4s] pl-2">avg_value = df['amt'].mean()</span>
                    <span className="typing-effect opacity-0 animate-[fadeIn_0.5s_forwards_0.6s] pl-2">freq = df['transactions'].sum()</span>
                    <span className="typing-effect opacity-0 animate-[fadeIn_0.5s_forwards_0.8s] pl-2"><span className="text-purple-400">return</span> avg_value * freq</span>
                  </div>

                  {/* Execution Badge */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-blue-500/20 border border-blue-500/30 px-2 py-0.5 rounded text-[8px] text-blue-300">
                    <Play className="w-2 h-2 fill-blue-300" />
                    {t.visuals.executing}
                  </div>
               </div>

               {/* 3. Output / Result */}
               <div className="w-full flex items-center justify-between px-3 py-2 rounded border border-green-500/20 bg-green-500/5 opacity-0 animate-[fadeIn_0.5s_forwards_1.2s] mt-1">
                  <span className="text-[9px] font-mono text-green-300">{t.visuals.result}: 4,205.50 EUR</span>
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
               </div>

            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                {t.cards.cag.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t.cards.cag.desc }} />
            </div>
          </div>

          {/* Card 4: Orchestration Layer */}
          <div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
             
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                 <Workflow className="w-8 h-8 text-white" />
            </div>

            <div className="relative flex-1 mb-8 flex items-center justify-center">
               
               {/* Sleek Dark-Mode Pipeline */}
               <div className="w-full max-w-lg relative flex flex-col justify-center px-4">
                  
                  {/* Container for alignment */}
                  <div className="relative w-full flex justify-between items-start z-10">
                      
                      {/* Background Rail - Aligned to circle centers (24px from top approx) */}
                      <div className="absolute left-0 right-0 top-[24px] -translate-y-1/2 h-px bg-white/20 -z-10"></div>
                      
                      {/* Animated High-Speed Beam */}
                      <div className="absolute left-0 right-0 top-[24px] -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-[1px] animate-[beam-flow_3s_ease-in-out_infinite] -z-10"></div>

                      {/* Step 1: Ingest (Dark but Visible) */}
                      <div className="flex flex-col items-center gap-3 mt-1">
                         <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/30 flex items-center justify-center text-white/90 shadow-lg group-hover:border-blue-500/50 group-hover:text-white transition-colors">
                            <span className="text-xs font-mono font-medium">01</span>
                         </div>
                         <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest font-medium">{t.visuals.context}</span>
                      </div>

                      {/* Step 2: Cognition (Active/Pulse) */}
                      <div className="flex flex-col items-center gap-3 relative">
                         <div className="absolute top-[24px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-500/20 rounded-full animate-[pulse-ring_2s_infinite] pointer-events-none"></div>
                         <div className="w-12 h-12 rounded-full bg-zinc-900 border border-blue-500 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-10">
                            <Brain className="w-5 h-5" />
                         </div>
                         <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">{t.visuals.orchestration}</span>
                      </div>

                      {/* Step 3: Execution (Dark but Visible) */}
                       <div className="flex flex-col items-center gap-3 mt-1">
                         <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/30 flex items-center justify-center text-white/90 shadow-lg group-hover:border-blue-500/50 group-hover:text-white transition-colors">
                            <span className="text-xs font-mono font-medium">03</span>
                         </div>
                         <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest font-medium">{t.visuals.execute}</span>
                      </div>

                  </div>
               </div>

            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                {t.cards.pipeline.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                {t.cards.pipeline.desc}
              </p>
            </div>
          </div>

          {/* Card 5: Safeguard Protocol */}
          <div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
             
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                <ShieldCheck className="w-8 h-8 text-white" />
            </div>

            <div className="relative flex-1 mb-8 flex flex-col items-center justify-center">
                 
                 {/* Subtle, Professional "System Monitor" Style */}
                 <div className="w-full max-w-[320px] flex flex-col gap-px bg-white/5 rounded-lg overflow-hidden border border-white/5">
                    
                    {/* Header Row */}
                    <div className="flex items-center justify-between px-3 py-2 bg-white/5">
                        <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{t.visuals.protocol_verification}</span>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[9px] font-mono text-green-400 font-medium">{t.visuals.active}</span>
                        </div>
                    </div>

                    {/* Data Row 1: SQL */}
                    <div className="flex items-center justify-between px-3 py-2 bg-black/20 group/row hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                             <div className="w-1 h-3 bg-blue-500/50 rounded-full"></div>
                             <span className="text-[10px] font-mono text-white/60">{t.visuals.engine_a}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/80 tabular-nums">4,205,921.00</span>
                    </div>

                    {/* Data Row 2: Python */}
                    <div className="flex items-center justify-between px-3 py-2 bg-black/20 group/row hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2">
                             <div className="w-1 h-3 bg-yellow-500/50 rounded-full"></div>
                             <span className="text-[10px] font-mono text-white/60">{t.visuals.engine_b}</span>
                        </div>
                        <span className="text-[10px] font-mono text-white/80 tabular-nums">4,205,921.00</span>
                    </div>

                    {/* Footer / Delta */}
                    <div className="flex items-center justify-between px-3 py-1.5 bg-green-500/5 border-t border-white/5">
                        <span className="text-[9px] font-mono text-white/30">{t.visuals.delta_check}</span>
                        <span className="text-[9px] font-mono text-green-400">0.00%{t.visuals.match}</span>
                    </div>

                 </div>

            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                {t.cards.safeguard.title}
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                {t.cards.safeguard.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
