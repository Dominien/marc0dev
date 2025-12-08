import React from 'react';

interface ShimmerButtonProps {
  text: string;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function ShimmerButton({ text, href, target, onClick, className = "", icon, variant = 'primary' }: ShimmerButtonProps) {
  const isPrimary = variant === 'primary';

  const content = (
    <>
      {isPrimary && (
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
      )}
      
      <div className={`relative flex items-center justify-center gap-2 z-10 rounded-full py-3 px-8 ring-1 transition-all duration-300 ${
        isPrimary 
          ? 'bg-zinc-900 ring-white/20 hover:ring-white/50 hover:bg-zinc-800 shadow-[0_0_20px_-5px_rgba(56,189,248,0.3)]' 
          : 'bg-zinc-800 ring-white/30 hover:ring-white/60 hover:bg-zinc-700'
      }`}>
        <div className="reveal-text-wrapper">
          <div className="reveal-text-1 text-sm font-semibold tracking-wide text-white">
            {text}
          </div>
          <div className="reveal-text-2 text-sm font-semibold tracking-wide text-white">
            {text}
          </div>
        </div>
        {icon && <span className={`transition-colors group-hover:rotate-45 duration-300 ${isPrimary ? 'text-white/70 group-hover:text-white' : 'text-white group-hover:text-white'}`}>{icon}</span>}
      </div>

      {isPrimary && (
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
      )}
    </>
  );

  const containerClasses = `group relative inline-block cursor-pointer rounded-full p-px text-xs font-semibold leading-6 no-underline shadow-2xl ${
    isPrimary 
      ? 'bg-slate-800 shadow-sky-900/40 text-white' 
      : 'bg-zinc-700 shadow-zinc-900/60 text-white'
  } ${className}`;

  if (href) {
    return (
      <a href={href} target={target} className={containerClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={containerClasses} onClick={onClick}>
      {content}
    </button>
  );
}
