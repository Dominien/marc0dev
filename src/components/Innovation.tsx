
import { Brain, ShieldCheck, RefreshCw, Workflow, Github } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';

export default function Innovation() {
  return (
    <section id="innovation" className="bg-black relative overflow-hidden">
        
      {/* Background Gradients (Matched to Template) */}
      <div className="absolute inset-0 pointer-events-none">
           {/* No blobs, strict dark theme as per template */}
      </div>

      <div className="max-w-7xl rounded-3xl mr-auto ml-auto pt-24 pb-24 px-6 relative z-10">
        
        {/* Header */}
        <div className="w-full lg:mb-24 mb-20">

          {/* TEXT CONTAINER ALIGNED LEFT */}
          <div className="w-full lg:mb-24 mb-20">

            {/* FULL-WIDTH CONTAINER */}
            <div className="w-full">

              {/* TEXT BLOCK LIMITED IN WIDTH, ALIGNED LEFT */}
              <div className="max-w-4xl">
                <h2 className="lg:text-8xl text-4xl font-normal text-white tracking-tight mb-8">
                  Agentic Orchestration <span className="text-white/30">Layer Model.</span>
                </h2>
              </div>

              {/* FULL-WIDTH GRID */}
              <div className="delay-100 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4 w-full">

                {/* LEFT TEXT BLOCK */}
                <div className="max-w-4xl">
                  <p className="text-lg text-white/60 font-light leading-relaxed">
                    Dies ist mein aktueller <strong>Research & Development</strong> Fokus. 
                    Ich entwickle Systeme, die ihren eigenen Integrations-Code zur Laufzeit schreiben. 
                    Damit lässt sich jede Business-Logik dynamisch aus Ihren bestehenden Datenbanken extrahieren – ohne starre Schnittstellen und ohne aufwändige IT-Projekte.
                  </p>
                </div>

                {/* RIGHT BUTTON (aligned right) */}
                <div className="flex gap-4 lg:justify-end items-center w-full">
                  <ShimmerButton 
                     text="Technical Deep Dive (GitHub)" 
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

          {/* Card 1: System 2 Thinking (Predictive Models Template) */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
            {/* Hover Gradients */}
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.06),transparent_40%)] z-0"></div>
            
            <div className="relative h-48 mb-6 flex items-center justify-center">
               <div className="relative w-full h-full max-w-[240px] flex items-center justify-center">
                    {/* Abstract Neural/Thinking Vis */}
                    <div className="w-24 h-24 rounded-full border border-purple-500/30 flex items-center justify-center relative">
                        <div className="absolute inset-0 border border-purple-500/10 rounded-full animate-ping"></div>
                        <Brain className="w-10 h-10 text-purple-400" />
                    </div>
                    {/* Connecting Nodes */}
                    <div className="absolute top-1/2 left-0 w-8 h-px bg-purple-500/20"></div>
                    <div className="absolute top-1/2 right-0 w-8 h-px bg-purple-500/20"></div>
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight flex items-center gap-2">
                System 2 Thinking
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Das System "rät" nicht, sondern nutzt eine verschlüsselte Thinking-Schleife zur Plan-Validierung.
              </p>
            </div>
          </div>

          {/* Card 2: Glass Box Trust (Risk Scores Template) */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
             
            <div className="relative h-48 mb-6 flex flex-col items-center justify-center">
              <div className="w-full max-w-[240px] space-y-3">
                {/* Log Item 1 */}
                <div className="flex items-center justify-between p-2.5 rounded-md border border-white/10 bg-white/5 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                     <div className="h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px] text-blue-400">
                      SQ
                    </div>
                    <span className="text-xs font-mono text-white/90">SELECT * FROM users</span>
                  </div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                {/* Log Item 2 */}
                <div className="flex items-center justify-between p-2.5 rounded-md border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                     <div className="h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center text-[10px] text-yellow-400">
                      PY
                    </div>
                    <span className="text-xs font-mono text-white/60">df.groupby('id').sum()</span>
                  </div>
                </div>
                 {/* Log Item 3 */}
                <div className="flex items-center justify-between p-2.5 rounded-md border border-white/5 bg-white/[0.02] opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="h-6 w-6 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px] text-purple-400">
                      AG
                    </div>
                    <span className="text-xs font-mono text-white/60">Verification...</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                Glass Box Trust
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Kein Loading-Spinner. Du siehst jeden SQL-Query und jeden Gedanken in Echtzeit.
              </p>
            </div>
          </div>

          {/* Card 3: CAG Runtime (Retention Forecasting Template) */}
          <div className="col-span-1 lg:col-span-2 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
            
            <div className="relative h-48 mb-6 flex items-end justify-center px-2 pb-4">
              {/* Code Visual */}
               <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-lg p-3 font-mono text-[10px] text-gray-400 leading-loose group-hover:border-blue-500/30 transition-colors">
                  <div className="flex gap-1.5 mb-2 opacity-30">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <p><span className="text-purple-400">def</span> <span className="text-blue-400">calculate</span>(data):</p>
                  <p className="pl-2">res = df[<span className="text-green-400">'val'</span>] * <span className="text-orange-400">1.05</span></p>
                  <p className="pl-2"><span className="text-purple-400">return</span> res.sum()</p>
               </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                CAG statt RAG
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">
                Code Augmented Generation. Echter, ausführbarer Code statt halluzinierter Text-Zusammenfassungen.
              </p>
            </div>
          </div>

          {/* Card 4: Orchestration Layer (AI Pipelines Editor Template) */}
          <div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
             
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                 <Workflow className="w-8 h-8 text-white" />
            </div>

            <div className="relative flex-1 mb-8 flex items-center justify-center">
               {/* Timeline / Pipeline Visual */}
               <div className="relative w-full h-24 flex items-center justify-center gap-4">
                    {/* Node 1 */}
                    <div className="w-28 p-3 rounded bg-zinc-800 border border-white/10 flex flex-col items-center gap-2 z-10 group-hover:-translate-y-1 transition-transform">
                        <div className="text-[10px] font-mono text-white/40 uppercase">Ingest</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-orange-500"></div>
                        </div>
                    </div>
                    {/* Line */}
                    <div className="h-px w-12 bg-white/10"></div>
                     {/* Node 2 */}
                    <div className="w-28 p-3 rounded bg-zinc-800 border border-white/10 flex flex-col items-center gap-2 z-10 group-hover:-translate-y-1 transition-transform delay-75">
                         <div className="text-[10px] font-mono text-white/40 uppercase">Cognition</div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-yellow-500 animate-pulse"></div>
                        </div>
                    </div>
                    {/* Line */}
                    <div className="h-px w-12 bg-white/10"></div>
                     {/* Node 3 */}
                    <div className="w-28 p-3 rounded bg-zinc-800 border border-white/10 flex flex-col items-center gap-2 z-10 group-hover:-translate-y-1 transition-transform delay-150">
                         <div className="text-[10px] font-mono text-white/40 uppercase">Action</div>
                        <div className="w-full h-1 bg-white/10 rounded-full"></div>
                    </div>
               </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Cognitive Pipeline Layer
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                Autonome Orchestrierung von Kontext, Tools und Sicherheitsprotokollen in einer einzigen Pipeline.
              </p>
            </div>
          </div>

          {/* Card 5: Triangulation Protocol (Automated Mitigation Template) */}
          <div className="col-span-1 lg:col-span-3 group flex flex-col overflow-hidden transition-all hover:bg-white/[0.02] bg-zinc-900/50 border-r border-b border-white/5 pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-md justify-between min-h-[320px]">
             
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                <ShieldCheck className="w-8 h-8 text-white" />
            </div>

            <div className="relative flex-1 mb-8 flex items-center justify-center">
                 <div className="w-full max-w-sm space-y-3">
                    {/* Valid */}
                    <div className="flex items-center gap-3 p-3 rounded-md border shadow-sm backdrop-blur-sm bg-green-500/10 border-green-500/20">
                         <div className="flex h-8 w-8 items-center justify-center rounded-full shrink-0 bg-green-500/20 text-green-400">
                             <ShieldCheck className="w-4 h-4" />
                         </div>
                        <div className="flex-1">
                            <div className="text-xs font-medium text-green-200">Triangulation Matched</div>
                            <div className="text-[10px] font-mono mt-0.5 text-green-200/60">SQL & Pandas Delta &lt; 0.01%</div>
                        </div>
                    </div>
                     {/* Invalid */}
                     <div className="flex items-center gap-3 p-3 rounded-md bg-white/5 border border-white/5 opacity-40">
                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 shrink-0">
                             <RefreshCw className="w-4 h-4" />
                         </div>
                        <div className="">
                            <div className="text-xs font-medium text-white/80">Re-calculating...</div>
                        </div>
                    </div>
                 </div>
            </div>

            <div className="relative z-10 mt-auto">
              <h3 className="text-xl font-medium text-white mb-2 tracking-tight">
                Safeguard Protocol
              </h3>
              <p className="text-sm text-white/50 font-light leading-relaxed max-w-md">
                Quantitative Antworten werden über zwei unabhängige Pfade berechnet. Nur Ergebnisse, die einer mathematischen Prüfung standhalten, erreichen den User.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
