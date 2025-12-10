'use client';

import React from 'react';
import { CheckCircle, Zap, TrendingUp, ArrowRight, Server, Activity, Cpu, BarChart3 } from 'lucide-react';

export default function EngineeringMindset() {
  return (
    <section className="py-32 px-6 relative z-10 bg-black" id="mindset">
        <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6 font-sans">
                    Engineering <span className="text-neutral-500">Mindset</span>
                </h2>
                
                <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl mx-auto font-sans">
                    Nicht nur Code, sondern Ergebnisse. Mein Ansatz verbindet technische Exzellenz mit unternehmerischem Denken.
                </p>
            </div>

            {/* 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Column 1: Marktstart vor Perfektion (MVP) */}
                <div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] hover:-translate-y-1 group" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
                    <div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
                    <div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
                    
                    <div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
                        <div className="flex mb-2 items-start justify-between">
                            <div className="w-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
                                        <CheckCircle className="h-4 w-4 text-white" />
                                    </span>
                                    <h3 className="text-lg font-semibold tracking-tight font-sans text-white">Marktstart vor Perfektion</h3>
                                </div>
                                <p className="text-neutral-300 text-sm font-light mb-4 font-sans leading-relaxed">
                                    Statt Budget für unnötige Infrastruktur zu verbrennen, baue ich genau das, was wir für den Launch brauchen.
                                </p>
                            </div>
                        </div>

                        <article className="relative overflow-hidden sm:p-5 h-64 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 group-hover:border-zinc-700 transition-colors duration-300">
                            <div className="absolute inset-0"></div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-1">
                                        <span className="h-1 w-1 rounded-full bg-emerald-500/80"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                    </div>
                                    <span className="text-[10px] text-emerald-500/80 font-mono uppercase tracking-wider">System Online</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center mt-2 mb-2 w-full">
                                    {/* Visual: Deployment Dashboard */}
                                    <div className="w-full bg-zinc-900/50 rounded-lg border border-white/5 p-3 backdrop-blur-sm">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <Server className="w-3 h-3 text-zinc-400" />
                                                <span className="text-[10px] text-zinc-300 font-mono">production-api</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                <span className="text-[10px] text-emerald-500 font-medium">Live</span>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center text-[10px]">
                                                <span className="text-zinc-500">Uptime</span>
                                                <span className="text-zinc-200 font-mono">99.9%</span>
                                            </div>
                                            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                                                <div className="h-full w-[99%] bg-emerald-500 rounded-full"></div>
                                            </div>
                                            
                                            <div className="flex justify-between items-center text-[10px] mt-2">
                                                <span className="text-zinc-500">Latency</span>
                                                <span className="text-zinc-200 font-mono">24ms</span>
                                            </div>
                                            <div className="flex gap-0.5 h-3 items-end">
                                                {[40, 60, 45, 70, 50, 65, 40, 55, 35, 45, 60, 50].map((h, i) => (
                                                    <div key={i} style={{height: `${h}%`}} className="w-1 bg-emerald-500/30 rounded-sm"></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-sans">Funktionierende Software</h3>
                                    <p className="mt-1 text-sm text-zinc-400 font-sans">Keine theoretische Skalierung.</p>
                                </div>
                            </div>
                        </article>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 mt-6"></div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
                                MVP
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                LAUNCH
                            </span>
                             <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                SPEED
                            </span>
                        </div>
                    </div>
                </div>

                {/* Column 2: 10x Speed durch AI */}
                <div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] hover:-translate-y-1 group" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
                    <div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
                    <div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
                    
                    <div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
                        <div className="flex mb-2 items-start justify-between">
                            <div className="w-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
                                        <Zap className="h-4 w-4 text-white" />
                                    </span>
                                    <h3 className="text-lg font-semibold tracking-tight font-sans text-white">10x Speed durch AI</h3>
                                </div>
                                <p className="text-neutral-300 text-sm font-light mb-4 font-sans leading-relaxed">
                                    Ich nutze AI als massiven Hebel. Das Ergebnis ist die Output-Power eines kleinen Teams in einer Person.
                                </p>
                            </div>
                        </div>

                        <article className="relative overflow-hidden sm:p-5 h-64 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 group-hover:border-zinc-700 transition-colors duration-300">
                            <div className="absolute inset-0"></div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-1">
                                        <span className="h-1 w-1 rounded-full bg-purple-500/80"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                    </div>
                                    <span className="text-[10px] text-purple-500/80 font-mono uppercase tracking-wider">Neural Core</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center mt-2 mb-2 w-full relative">
                                     {/* Visual: Neural Circuit */}
                                     <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                        <div className="w-32 h-32 border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                                        <div className="absolute w-24 h-24 border border-purple-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                                     </div>
                                     
                                     <div className="relative z-10 w-16 h-16 bg-zinc-900 rounded-xl border border-purple-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                                        <Cpu className="w-8 h-8 text-purple-400" />
                                        
                                        {/* Connecting Nodes */}
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent to-purple-500/50"></div>
                                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-gradient-to-t from-transparent to-purple-500/50"></div>
                                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 h-0.5 w-6 bg-gradient-to-r from-transparent to-purple-500/50"></div>
                                        <div className="absolute -right-6 top-1/2 -translate-y-1/2 h-0.5 w-6 bg-gradient-to-l from-transparent to-purple-500/50"></div>
                                        
                                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                        <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                                     </div>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-sans">Massiver Hebel</h3>
                                    <p className="mt-1 text-sm text-zinc-400 font-sans">Output eines kleinen Teams.</p>
                                </div>
                            </div>
                        </article>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 mt-6"></div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
                                AI
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                AUTOMATION
                            </span>
                             <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                EFFICIENCY
                            </span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Lösungen statt Tickets (Business) */}
                <div className="card-top glass-effect w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-gradient-to-r from-white/15 to-white/5 rounded-[1.2em] hover:-translate-y-1 group" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
                    <div className="absolute inset-0 border-white/20 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
                    <div className="absolute inset-0 border-white/10 border rounded-[1.2em]" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
                    
                    <div className="flex flex-col h-full pt-6 pr-6 pb-7 pl-6">
                        <div className="flex mb-2 items-start justify-between">
                            <div className="w-full">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-400 to-neutral-500">
                                        <TrendingUp className="h-4 w-4 text-white" />
                                    </span>
                                    <h3 className="text-lg font-semibold tracking-tight font-sans text-white">Lösungen statt Tickets</h3>
                                </div>
                                <p className="text-neutral-300 text-sm font-light mb-4 font-sans leading-relaxed">
                                    Du musst mir keine technischen Anleitungen schreiben. Gib mir ein Business-Problem und ich liefere das Produkt.
                                </p>
                            </div>
                        </div>

                        <article className="relative overflow-hidden sm:p-5 h-64 bg-gradient-to-br from-zinc-900 to-zinc-950 border-zinc-800 border rounded-2xl pt-4 pr-4 pb-4 pl-4 group-hover:border-zinc-700 transition-colors duration-300">
                            <div className="absolute inset-0"></div>
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-1">
                                        <span className="h-1 w-1 rounded-full bg-blue-500/80"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                        <span className="h-1 w-1 rounded-full bg-zinc-600"></span>
                                    </div>
                                    <span className="text-[10px] text-blue-500/80 font-mono uppercase tracking-wider">Growth</span>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center mt-2 mb-2 w-full">
                                     {/* Visual: Revenue Metric Card */}
                                     <div className="w-full bg-zinc-900/50 rounded-lg border border-white/5 p-4 backdrop-blur-sm">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <div className="text-[10px] text-zinc-400 uppercase tracking-wide">Revenue Impact</div>
                                                <div className="text-2xl font-semibold text-white mt-0.5">+124%</div>
                                            </div>
                                            <div className="bg-blue-500/10 p-1.5 rounded-md">
                                                <BarChart3 className="w-4 h-4 text-blue-400" />
                                            </div>
                                        </div>
                                        
                                        {/* Mini Area Chart */}
                                        <div className="h-12 w-full relative mt-2">
                                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                                <defs>
                                                    <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
                                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"></stop>
                                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
                                                    </linearGradient>
                                                </defs>
                                                <path d="M0 48 L 20 35 L 40 40 L 60 25 L 80 30 L 100 15 L 120 20 L 140 5" fill="url(#revenueGradient)" stroke="none"></path>
                                                <path d="M0 48 L 20 35 L 40 40 L 60 25 L 80 30 L 100 15 L 120 20 L 140 5" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                     </div>
                                </div>
                                <div className="mt-auto">
                                    <h3 className="text-[15px] sm:text-base font-medium leading-snug tracking-tight text-zinc-100 font-sans">Business Impact</h3>
                                    <p className="mt-1 text-sm text-zinc-400 font-sans">Umsatz statt Code-Zeilen.</p>
                                </div>
                            </div>
                        </article>

                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 mt-6"></div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-300 font-sans">
                                REVENUE
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                GROWTH
                            </span>
                             <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neutral-600/10 border border-neutral-600/20 text-neutral-300 font-sans">
                                IMPACT
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
