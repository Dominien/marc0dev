import { Server, ShieldCheck, Database, Layers, Activity, Box, GitPullRequest, Zap, Cpu, Network } from 'lucide-react';

export default function Stack() {
  return (
    <section id="stack" className="py-32 bg-black relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* Section Header */}
            <div className="mb-20 max-w-3xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Lean Architecture: <br />
                    <span className="text-white/40">Kein Enterprise-Bloat. Nur Performance.</span>
                </h2>
                <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                    Ich baue Software-Infrastruktur, die keine eigene IT-Abteilung zur Wartung benötigt. 
                    <span className="text-white font-medium"> Lean Architecture</span>. 
                    Das bedeutet: Maximale Geschwindigkeit, keine unnötigen Lizenzkosten und volle Unabhängigkeit von trägen Systemen.
                </p>
            </div>

            {/* Main Feature Card: Infrastructure & TypeScript */}
            <div className="group overflow-hidden bg-neutral-900/50 border border-white/10 rounded-[2.5rem] mb-6 relative backdrop-blur-xl">
                {/* Background Glow Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent opacity-40 pointer-events-none"></div>
                
                <div className="grid lg:grid-cols-2 gap-0">
                    {/* Text Content */}
                    <div className="p-8 md:p-16 flex flex-col justify-center z-10 relative">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                            <Server className="w-6 h-6 text-white" />
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                            Infrastruktur & <br /> Typsicherheit
                        </h2>
                        
                        <div className="space-y-8 text-lg text-white/50 leading-relaxed">
                            <div>
                                <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    Serverless statt Server-Farm
                                </h3>
                                <p className="text-sm">
                                    Keine Wartung, keine Downtime. Deployment in Serverless-Umgebungen (z.B. Vercel) bedeutet, dass Rechenleistung nur dann bezahlt wird, wenn sie auch genutzt wird.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    TypeScript Logic
                                </h3>
                                <p className="text-sm">
                                    Strenge Typisierung verhindert Fehler, bevor sie passieren. Das Resultat ist eine extrem stabile Code-Basis, die auch bei komplexen Features nicht zusammenbricht.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Content: Code & Connection Status */}
                    <div className="relative min-h-[500px] bg-black/20 border-l border-white/5 overflow-hidden font-mono">
                        {/* Abstract Code Editor Background */}
                        <div className="absolute inset-0 p-8 text-xs md:text-sm leading-loose text-white/30 select-none opacity-60 pointer-events-none">
                            <div className="flex gap-1.5 mb-6 opacity-50">
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-purple-400">import</span> {'{'} <span className="text-yellow-200">NextResponse</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'next/server'</span>;</p>
                                <p><span className="text-purple-400">import</span> {'{'} <span className="text-yellow-200">createClient</span> {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@supabase/ssr'</span>;</p>
                                <p className="h-4"></p>
                                <p><span className="text-purple-400">export async function</span> <span className="text-blue-400">POST</span>(req: <span className="text-yellow-200">Request</span>) {'{'}</p>
                                <p className="pl-4"><span className="text-gray-500">// Typsichere Validierung</span></p>
                                <p className="pl-4"><span className="text-purple-400">const</span> body = <span className="text-purple-400">await</span> req.<span className="text-blue-400">json</span>();</p>
                                <p className="pl-4"><span className="text-purple-400">const</span> {'{'} id {'}'} = <span className="text-yellow-200">Schema</span>.<span className="text-blue-400">parse</span>(body);</p>
                                <p className="h-4"></p>
                                <p className="pl-4"><span className="text-purple-400">const</span> supabase = <span className="text-blue-400">createClient</span>();</p>
                                <p className="pl-4"><span className="text-purple-400">const</span> {'{'} data {'}'} = <span className="text-purple-400">await</span> supabase</p>
                                <p className="pl-8">.<span className="text-blue-400">from</span>(<span className="text-green-400">'events'</span>)</p>
                                <p className="pl-8">.<span className="text-blue-400">select</span>(<span className="text-green-400">'*'</span>);</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-yellow-200">NextResponse</span>.<span className="text-blue-400">json</span>(data);</p>
                                <p>{'}'}</p>
                            </div>
                        </div>

                        {/* Floating Status Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[90%] max-w-md">
                            <div className="rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-700 hover:scale-[1.02]">
                                {/* Header */}
                                <div className="p-5 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                                    <div>
                                        <h4 className="text-white font-sans text-sm tracking-wide">System Status</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="relative flex h-2 w-2 shrink-0">
                                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                            </span>
                                            <p className="text-emerald-500 text-xs font-sans tracking-wide overflow-hidden whitespace-nowrap border-r-2 border-emerald-500 w-0 animate-[typing_1.5s_steps(30,end)_2.5s_forwards,blink-caret_0.75s_step-end_infinite]">
                                                All Systems Operational
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                                        <Activity className="w-4 h-4" />
                                    </div>
                                </div>
                                
                                {/* Content Rows */}
                                <div className="divide-y divide-white/5 text-sm font-sans">
                                    {/* Row 1 */}
                                    <div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors opacity-0 animate-[fadeSlideIn_0.6s_ease-out_0.2s_forwards]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                                <Server className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-gray-200">API Gateway</span>
                                                <span className="text-gray-500 text-xs mt-0.5">eu-central-1</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-xs font-mono">24ms</span>
                                            <div className="flex gap-0.5">
                                                <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                                                <div className="w-1 h-3 bg-emerald-500/50 rounded-full"></div>
                                                <div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors opacity-0 animate-[fadeSlideIn_0.6s_ease-out_1.0s_forwards]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                                <Database className="w-4 h-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-gray-200">Postgres Replica</span>
                                                <span className="text-gray-500 text-xs mt-0.5">read-only</span>
                                            </div>
                                        </div>
                                         <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-xs font-mono">12ms</span>
                                            <div className="flex gap-0.5">
                                                <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                                                <div className="w-1 h-3 bg-emerald-500 rounded-full"></div>
                                                <div className="w-1 h-3 bg-emerald-500/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Bottom Left: Backend & Data */}
                <div className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-neutral-900/50 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                    {/* Visual Header */}
                    <div className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_100%)]"></div>
                        
                        {/* High-Speed Stream Visualization */}
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            
                            {/* Glowing Core */}
                            <div className="relative z-20 w-20 h-20 bg-neutral-900 rounded-full border border-green-500/30 shadow-[0_0_50px_-10px_rgba(34,197,94,0.3)] flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                <div className="absolute inset-0 bg-green-500/10 rounded-full animate-pulse"></div>
                                <Zap className="w-8 h-8 text-green-400 fill-green-400/20" />
                            </div>

                            {/* Vertical Data Streams */}
                            <div className="absolute inset-0 flex justify-center gap-8 opacity-30 pointer-events-none">
                                <div className="w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-[stream_2s_linear_infinite]"></div>
                                <div className="w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-[stream_3s_linear_infinite_1s]"></div>
                                <div className="w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent animate-[stream_2.5s_linear_infinite_0.5s]"></div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 bg-neutral-900/80 backdrop-blur border border-green-500/20 px-3 py-1 rounded-full flex items-center gap-2 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] font-mono text-green-400">REALTIME SYNC</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="mt-auto p-10">
                        <div className="flex items-center gap-3 mb-5">
                            <Database className="w-6 h-6 text-white" />
                            <h3 className="text-xl font-semibold text-white tracking-tight">Backend & Daten</h3>
                        </div>
                        <p className="text-white/50 text-base leading-relaxed mb-4">
                            Backend-as-a-Service mit Supabase (PostgreSQL).
                        </p>
                        <p className="text-sm text-white/40 leading-relaxed">
                            <strong className="text-white/70">Der Vorteil:</strong> Die gleiche Power wie Enterprise-Systeme, aber ohne den Overhead. Daten werden in Echtzeit synchronisiert – extrem schnell und skalierbar.
                        </p>
                    </div>
                </div>

                {/* Bottom Right: Modularity */}
                <div className="group overflow-hidden flex flex-col hover:border-white/20 transition-colors duration-500 bg-neutral-900/50 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                    {/* Visual Header */}
                    <div className="flex overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent h-64 relative items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]"></div>
                        
                        {/* Orbital Visualization (Reverted to Circles) */}
                        {/* Orbital Visualization (New Spinning Orbit) */}
                        <div className="flex md:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center">
                            {/* Static Rings */}
                            <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
                              <div className="w-[180px] h-[180px] rounded-full border border-blue-500/30"></div>
                            </div>
                            <div className="absolute flex items-center justify-center pointer-events-none opacity-20">
                              <div className="w-[340px] h-[340px] rounded-full border border-blue-500/20"></div>
                            </div>
                            <div className="absolute flex items-center justify-center pointer-events-none opacity-10">
                              <div className="w-[500px] h-[500px] rounded-full border border-blue-500/10"></div>
                            </div>

                            {/* Center Item (Static Logo Brand Container) */}
                            <div className="relative w-24 h-24 rounded-full bg-[#0B0C10] border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_-5px_rgba(59,130,246,0.5)] z-20">
                              <div className="animate-ping opacity-20 border-blue-500 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
                              <Layers className="w-9 h-9 text-blue-500" />
                            </div>

                            {/* Spinning Orbit Container */}
                            <div className="absolute inset-0 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                              {/* Orbiting Items (Positioned radially + Counter-Rotating) */}

                              {/* 1. Box (0 degrees - Top) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(0deg) translateY(-170px) rotate(0deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <Box className="w-5 h-5" />
                                </div>
                              </div>

                              {/* 2. GitPullRequest (60 degrees) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(60deg) translateY(-170px) rotate(-60deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <GitPullRequest className="w-5 h-5" />
                                </div>
                              </div>

                              {/* 3. Server (120 degrees) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(120deg) translateY(-170px) rotate(-120deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <Server className="w-5 h-5" />
                                </div>
                              </div>

                              {/* 4. Database (180 degrees) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(180deg) translateY(-170px) rotate(-180deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <Database className="w-5 h-5" />
                                </div>
                              </div>

                              {/* 5. Cpu (240 degrees) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(240deg) translateY(-170px) rotate(-240deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <Cpu className="w-5 h-5" />
                                </div>
                              </div>

                              {/* 6. Network (300 degrees) */}
                              <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: 'translate(-50%, -50%) rotate(300deg) translateY(-170px) rotate(-300deg)' }}>
                                <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all hover:scale-110 shadow-lg cursor-pointer animate-[spin_60s_linear_infinite_reverse]">
                                  <Network className="w-5 h-5" />
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="mt-auto p-10">
                        <div className="flex items-center gap-3 mb-5">
                            <Layers className="w-6 h-6 text-white" />
                            <h3 className="text-xl font-semibold text-white tracking-tight">Modulare Architektur</h3>
                        </div>
                        <p className="text-white/50 text-base leading-relaxed mb-4">
                            Unabhängige Komponenten, flexibel verbunden.
                        </p>
                        <p className="text-sm text-white/40 leading-relaxed">
                            <strong className="text-white/70">Das Prinzip:</strong> Es geht nicht nur um APIs, sondern um echte Entkopplung. Teile des Systems können unabhängig voneinander funktionieren, ausgetauscht oder skaliert werden.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
