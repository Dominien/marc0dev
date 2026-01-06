"use client";

import { ArrowRight, Smartphone, Tablet, Monitor, LayoutTemplate, Webhook, Database, CheckCircle, Server, RefreshCw, Zap, Languages, Lock, Globe, Cpu } from 'lucide-react';
import ShimmerButton from '@/components/ui/ShimmerButton';
import { useLocale } from '@/i18n/LocaleContext';

export default function Work() {
  const { dictionary } = useLocale();
  const t = dictionary.work;

  return (
    <section id="work" className="py-32 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="grid lg:grid-cols-2 lg:gap-24 z-10 relative gap-x-12 gap-y-16 items-center">
        
            {/* Left Column: Content */}
            <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    {t.featured}
                </div>

                <h2 
                    className="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white mb-6 leading-[1.1] font-sans font-bold"
                    dangerouslySetInnerHTML={{ __html: t.title }}
                />

                
                <div className="space-y-10 mb-10">
                    <div>
                        <h3 className="text-white font-medium mb-3 flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                            {t.task.title}
                        </h3>
                        <p className="text-white/60 text-lg font-light leading-relaxed pl-3 border-l border-white/5">
                            {t.task.desc}
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                            <span className="w-1 h-4 bg-white/40 rounded-full"></span>
                            {t.solution.title}
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {/* Card 1: Middleware (Blue Accent - Primary Tech) */}
                            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-blue-500/20 transition-colors group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                                        <Server className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">{t.solution.card_middleware.title}</div>
                                        <div className="text-xs text-white/50 leading-relaxed">{t.solution.card_middleware.desc}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Sync (Neutral) */}
                            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:bg-white/10 transition-colors">
                                        <RefreshCw className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">{t.solution.card_sync.title}</div>
                                        <div className="text-xs text-white/50 leading-relaxed">{t.solution.card_sync.desc}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Caching (Neutral) */}
                            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:bg-white/10 transition-colors">
                                        <Zap className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">{t.solution.card_caching.title}</div>
                                        <div className="text-xs text-white/50 leading-relaxed">{t.solution.card_caching.desc}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4: Translation (Neutral) */}
                            <div className="glass-card p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:bg-white/10 transition-colors">
                                        <Languages className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-white mb-1">{t.solution.card_translation.title}</div>
                                        <div className="text-xs text-white/50 leading-relaxed">{t.solution.card_translation.desc}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
                    <div className="text-xs text-white/40 flex items-center gap-2 max-w-[200px] leading-tight font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                        {t.credits}
                    </div>
                </div>
            </div>

            {/* Right Column: Visual Diagram */}
            <div className="order-1 lg:order-2 relative w-full flex flex-col items-center select-none pointer-events-none">
                
                {/* Diagram Header Labels */}
                <div className="w-full flex justify-between text-[10px] uppercase tracking-widest text-white/30 font-mono mb-2 px-4 max-w-[400px]">
                    <span>{t.diagram.frontend}</span>
                    <span>{t.diagram.backend}</span>
                </div>

                {/* Icons Row (Sources) */}
                <div className="relative z-10 flex justify-between w-full max-w-[400px] mb-8 gap-2">
                    {/* Icon 1 (Inactive) */}
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-white/20 shadow-lg animate-pulse-glow" style={{ animationDelay: '0s' }}>
                        <Smartphone className="w-5 h-5" />
                    </div>
                    {/* Icon 2 (Inactive) */}
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-white/20 shadow-lg animate-pulse-glow" style={{ animationDelay: '1s' }}>
                        <Tablet className="w-5 h-5" />
                    </div>
                    {/* Icon 3 (Inactive) */}
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center text-white/20 shadow-lg animate-pulse-glow" style={{ animationDelay: '2s' }}>
                        <Monitor className="w-5 h-5" />
                    </div>
                    {/* Icon 4 (Active Source - Webflow/Web) */}
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-blue-500/50 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.15)] relative scale-110 transition-transform">
                        <LayoutTemplate className="w-5 h-5 text-blue-400" />
                    </div>
                </div>

                {/* Animated Connection Diagram */}
                <div className="relative w-full max-w-[400px] flex flex-col items-center">
                    
                    {/* Vertical Flow Lines SVG */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Background Noodle Lines - Faintly Visible */}
                            <path d="M65 0 V40 C65 60 200 60 200 80 V100" stroke="white" strokeOpacity="0.05" strokeWidth="2" strokeDasharray="4 4"></path>
                            <path d="M155 0 V40 C155 60 200 60 200 80 V100" stroke="white" strokeOpacity="0.05" strokeWidth="2" strokeDasharray="4 4"></path>
                            <path d="M245 0 V40 C245 60 200 60 200 80 V100" stroke="white" strokeOpacity="0.05" strokeWidth="2" strokeDasharray="4 4"></path>

                            {/* Faint 'Ghost' Packets on inactive lines */}
                            <path d="M65 0 V40 C65 60 200 60 200 80 V100" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="10 100" className="animate-dash" style={{ animationDuration: '5s' }}></path>
                            <path d="M155 0 V40 C155 60 200 60 200 80 V100" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="10 100" className="animate-dash" style={{ animationDuration: '7s', animationDelay: '1s' }}></path>

                            {/* Active Line from Webflow to Middleware */}
                            <path d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="#3B82F6" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="4 4"></path>
                            <path d="M335 0 V40 C335 60 200 60 200 80 V100" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 100" className="animate-dash"></path>
                            
                            {/* Middleware to Redis (Left Branch) - Curved Connection */}
                            <path d="M200 180 C 200 220 80 220 80 260" stroke="white" strokeOpacity="0.1" strokeWidth="2" fill="none"></path>
                            {/* Packet Out - Neutral */}
                            <path d="M200 180 C 200 220 80 220 80 260" stroke="white" strokeWidth="2" strokeDasharray="10 100" className="animate-dash" style={{ animationDuration: '2s', animationDelay: '0.5s', opacity: 0.3 }} fill="none"></path>

                            {/* Middleware to DeepL (Right Branch) - Curved Connection */}
                            <path d="M200 180 C 200 220 320 220 320 260" stroke="white" strokeOpacity="0.1" strokeWidth="2" fill="none"></path>
                            {/* Packet Out - Neutral */}
                            <path d="M200 180 C 200 220 320 220 320 260" stroke="white" strokeWidth="2" strokeDasharray="10 100" className="animate-dash" style={{ animationDuration: '2s', animationDelay: '0.7s', opacity: 0.3 }} fill="none"></path>

                            {/* Middleware to CRM (Center Down) - Active Success Path */}
                            <path d="M200 180 V 400" stroke="white" strokeOpacity="0.1" strokeWidth="2" strokeDasharray="4 4"></path>
                            <path d="M200 180 V 400" stroke="#3B82F6" strokeWidth="2" strokeDasharray="10 100" className="animate-dash" style={{ animationDuration: '2s', animationDelay: '1s' }}></path>
                        </svg>
                    </div>

                    {/* Node 1: Middleware (Central Hub) */}
                    <div className="relative z-10 mt-[80px] w-64 bg-neutral-900 rounded-2xl p-4 border border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-white relative overflow-hidden">
                                    <Server className="w-4 h-4 text-blue-400 relative z-10" />
                                    <div className="absolute inset-0 bg-blue-400/20 animate-pulse"></div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-white uppercase tracking-wider">{t.diagram.middleware}</div>
                                    <div className="text-xs text-white/60">{t.diagram.serverless}</div>
                                </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
                        </div>
                        
                        {/* Code Snippet: Webhook Handler */}
                        <div className="mt-2 bg-black/50 rounded p-2 border border-white/5">
                            <code className="text-[9px] font-mono text-blue-300 block">
                                POST /api/booking
                            </code>
                        </div>
                    </div>

                    {/* Branching Nodes Container */}
                    <div className="relative z-10 w-full flex justify-between px-0 mt-12">
                        
                        {/* Left Node: Redis (Neutral) */}
                        <div className="relative group -ml-4">
                            <div className="w-40 bg-neutral-900 rounded-xl p-3 border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] flex flex-col gap-2">
                                <div className="flex items-center gap-2 w-full mb-1">
                                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0">
                                        <Zap className="w-3 h-3 text-white/60" />
                                    </div>
                                    <div className="text-[9px] font-bold text-white/60 uppercase">{t.diagram.redis_lock}</div>
                                </div>
                                {/* JSON Snippet: Redis */}
                                <div className="w-full bg-black/50 rounded p-2 border border-white/5 font-mono text-[8px] leading-relaxed text-white/40">
                                    <p><span className="text-white/60">"key"</span>: <span className="text-white/80">"evt_123_lock"</span>,</p>
                                    <p><span className="text-white/60">"ttl"</span>: <span className="text-blue-400">60</span>,</p>
                                    <p><span className="text-white/60">"status"</span>: <span className="text-white/80">"acquired"</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Right Node: DeepL (Neutral) */}
                        <div className="relative group -mr-4">
                            <div className="w-40 bg-neutral-900 rounded-xl p-3 border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] flex flex-col gap-2">
                                <div className="flex items-center gap-2 w-full mb-1">
                                    <div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center shrink-0">
                                        <Languages className="w-3 h-3 text-white/60" />
                                    </div>
                                    <div className="text-[9px] font-bold text-white/60 uppercase">{t.diagram.deepl_api}</div>
                                </div>
                                {/* JSON Snippet: DeepL */}
                                <div className="w-full bg-black/50 rounded p-2 border border-white/5 font-mono text-[8px] leading-relaxed text-white/40">
                                    <p><span className="text-white/60">"text"</span>: <span className="text-white/80">"Porsche GT3"</span>,</p>
                                    <p><span className="text-white/60">"source"</span>: <span className="text-blue-400">"DE"</span>,</p>
                                    <p><span className="text-white/60">"target"</span>: <span className="text-blue-400">"EN"</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connection Bead to CRM */}
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-blue-500/20 my-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/50 w-full h-2 animate-float" style={{ animationDuration: '1.5s' }}></div>
                    </div>

                    {/* Node 3: Dynamics 365 (Bottom - Blue Accent) */}
                    <div className="relative z-10 w-64 bg-neutral-900 rounded-2xl p-4 border border-blue-500/30 hover:border-blue-500/50 transition-colors shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-white relative">
                                <Database className="w-4 h-4 text-blue-400 relative z-10" />
                                <div className="absolute inset-0 bg-blue-400/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-white/40 uppercase tracking-wider">{t.diagram.crm_sync}</div>
                                <div className="text-xs text-white/80">Microsoft Dynamics 365</div>
                            </div>
                            <div className="ml-auto opacity-50 text-blue-400">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                        </div>
                        {/* Code Snippet: CRM */}
                        <div className="mt-2 bg-black/50 rounded p-2 border border-white/5">
                            <code className="text-[9px] font-mono text-blue-300 block">
                                await crm.create(data)
                            </code>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
}
