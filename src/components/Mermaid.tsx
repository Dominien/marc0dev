"use client";

import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  themeVariables: {
    darkMode: true,
    background: "#0a0a0a",
    primaryColor: "#3b82f6",
    secondaryColor: "#0a0a0a",
    tertiaryColor: "#0a0a0a",
    primaryTextColor: "#ffffff",
    secondaryTextColor: "#ffffff",
    tertiaryTextColor: "#ffffff",
    lineColor: "#ffffff40",
    textColor: "#ffffff",
    mainBkg: "#0a0a0a",
    nodeBorder: "#ffffff20",
    clusterBkg: "#ffffff05",
    clusterBorder: "#ffffff20",
    defaultLinkColor: "#ffffff40",
    titleColor: "#ffffff",
    edgeLabelBackground: "#0a0a0a",
    nodeTextColor: "#ffffff",
  },
  securityLevel: "loose",
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.render(`mermaid-${Math.random().toString(36).substring(7)}`, chart)
        .then(({ svg }) => {
            if (containerRef.current) {
                containerRef.current.innerHTML = svg;
            }
        })
        .catch((error) => {
            console.error("Mermaid Render Error:", error);
            if(containerRef.current) {
                containerRef.current.innerHTML = `<div class="p-4 border border-red-500/50 bg-red-500/10 text-red-400 rounded-lg text-sm font-mono overflow-auto whitespace-pre-wrap">Mermaid Error: ${error.message}</div>`;
            }
        });
    }
  }, [chart]);

  return (
    <div className="my-12 overflow-x-auto">
        <div ref={containerRef} className="mermaid flex justify-center min-w-[600px] md:min-w-0" />
    </div>
  );
}
