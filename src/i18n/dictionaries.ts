
export type Locale = 'de' | 'en';

export const dictionaries = {
  de: {
    navbar: {
      architektur: "Architektur",
      engineering: "Engineering",
      techstack: "Tech Stack",
      projekte: "Projekte",
      blog: "Blog",
      contact: "Kontakt"
    },
    hero: {
      role: "Full-Stack Engineer & Integration Specialist",
      pitch: "Spezialisiert auf die Entkopplung von Frontends und komplexer Business-Logik. Ich entwickle skalierbare Middleware und robuste Backends.",
      cta_primary: "Lass uns sprechen",
      cta_secondary: "Projekte ansehen",
      card_arch: {
        title: "Architecture",
        value: "Serverless"
      },
      card_backend: {
        title: "Backend",
        value: "Node.js"
      }
    },
    stack: {
      title: "Lean Architecture:",
      subtitle: "Kein Enterprise-Bloat. Nur Performance.",
      description: "Ich baue Software-Infrastruktur, die keine eigene IT-Abteilung zur Wartung benötigt. <strong class=\"text-white font-medium\">Lean Architecture</strong>. Das bedeutet: Maximale Geschwindigkeit, keine unnötigen Lizenzkosten und volle Unabhängigkeit von trägen Systemen.",
      card_infra: {
        title: "Infrastruktur & <br /> Typsicherheit",
        serverless_title: "Serverless statt Server-Farm",
        serverless_desc: "Keine Wartung, keine Downtime. Deployment in Serverless-Umgebungen (z.B. Vercel) bedeutet, dass Rechenleistung nur dann bezahlt wird, wenn sie auch genutzt wird.",
        typescript_title: "TypeScript Logic",
        typescript_desc: "Strenge Typisierung verhindert Fehler, bevor sie passieren. Das Resultat ist eine extrem stabile Code-Basis, die auch bei komplexen Features nicht zusammenbricht."
      },
      card_backend: {
        title: "Backend & Daten",
        desc: "Backend-as-a-Service mit Supabase (PostgreSQL).",
        highlight: "Der Vorteil:",
        highlight_desc: "Die gleiche Power wie Enterprise-Systeme, aber ohne den Overhead. Daten werden in Echtzeit synchronisiert – extrem schnell und skalierbar."
      },
      card_modules: {
        title: "Modulare Architektur",
        desc: "Unabhängige Komponenten, flexibel verbunden.",
        highlight: "Das Prinzip:",
        highlight_desc: "Es geht nicht nur um APIs, sondern um echte Entkopplung. Teile des Systems können unabhängig voneinander funktionieren, ausgetauscht oder skaliert werden."
      },
      visuals: {
        status_title: "System Status",
        status_ok: "All Systems Operational",
        api_gateway: "API Gateway",
        postgres: "Postgres Replica",
        read_only: "read-only",
        realtime: "REALTIME SYNC"
      }
    },
    frontend: {
      label: "Frontend Engineering",
      title: "Design-Umsetzung & <span class=\"text-gray-600 block sm:inline sm:ml-4 font-geist\">System-Integration.</span>",
      description: "Ich realisiere vollständige Web-Interfaces, die visuell überzeugen und technisch nahtlos mit der darunterliegenden Architektur verschmelzen.",
      cards: {
        visual: "Visual Fidelity",
        pixel: {
          quote: "\"Aus statischen Layouts werden funktionale, responsive Webseiten. Ich übersetze Designs exakt in Code.\"",
          title: "Pixel-Perfekt",
          subtitle: "Implementation"
        },
        type_safety: "Type Safety",
        interaction: {
          quote: "\"Ich hauche dem Design Leben ein. Wie verhalten sich Filter? Was passiert beim Klick? Ich entwickle die Interaktions-Logik.\"",
          title: "Interaktions-Logik",
          subtitle: "Behavior"
        },
        user_experience: "User Experience",
        architecture: {
          quote: "\"Das Frontend ist kein isolierter Anstrich, sondern das passgenaue Gegenstück zum Backend. Datenstrukturen greifen perfekt ineinander.\"",
          title: "Architektur",
          subtitle: "Integration"
        }
      }
    },
    techstack: {
        title: "Entwickelt mit",
        description: "Best-in-Class Tooling. Ich setze auf einen modernen, bewährten Stack mit großer Community und langfristigem Support. Keine Experimente, sondern Industriestandards."
    },
    innovation: {
      title_part1: "Agentic Orchestration",
      title_part2: "Layer Model.",
      description: "Dies ist mein aktueller <strong>Research & Development</strong> Fokus. Ich entwickle Systeme, die ihren eigenen Integrations-Code zur Laufzeit schreiben. Damit lässt sich jede Business-Logik dynamisch aus bestehenden Datenbanken extrahieren – ohne starre Schnittstellen und ohne aufwändige IT-Projekte.",
      button_github: "Technical Deep Dive (GitHub)",
      cards: {
        system2: {
          title: "System 2 Thinking",
          desc: "Das System \"rät\" nicht, sondern nutzt eine verschlüsselte Thinking-Schleife zur Plan-Validierung."
        },
        glassbox: {
          title: "Glass Box Trust",
          desc: "Kein Loading-Spinner. Du siehst jeden SQL-Query und jeden Gedanken in Echtzeit."
        },
        cag: {
          title: "CAG statt RAG",
          desc: "Der Agent schreibt <strong>Runtime-Code</strong>. Statt Halluzinationen erzeugt er echten, ausführbaren Code für mathematisch exakte Antworten."
        },
        pipeline: {
          title: "Cognitive Pipeline Layer",
          desc: "Kein unübersichtliches \"Spaghetti-Diagramm\". Eine zentrale, lineare Pipeline orchestriert alle Tools, Contexts und Sicherheitschecks."
        },
        safeguard: {
          title: "Safeguard Protocol",
          desc: "Quantitative Antworten werden über zwei unabhängige Pfade berechnet. Nur Ergebnisse, die einer mathematischen Prüfung standhalten, erreichen den User."
        }
      },
      visuals: {
        input: "Input",
        result: "Ergebnis",
        executing: "EXECUTING",
        context: "Context",
        orchestration: "Orchestration",
        execute: "Execute",
        protocol_verification: "Protocol Verification",
        active: "ACTIVE",
        engine_a: "Engine_A (SQL)",
        engine_b: "Engine_B (PY)",
        delta_check: "DELTA CHECK",
        match: " (MATCH)"
      }
    },
    work: {
      featured: "Featured Project",
      title: "Event Booking <br/> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40\">Architecture</span>",
      task: {
        title: "Die Aufgabe",
        desc: "Konzeption einer Middleware-Architektur für komplexe Buchungsprozesse. Verbindung von modernen Frontends mit Enterprise-CRM-Systemen ohne Performance-Verlust."
      },
      solution: {
        title: "Die Umsetzung",
        card_middleware: {
            title: "Middleware Engineering",
            desc: "Node.js Applikation (Vercel) zur Entkopplung der Systemlogik."
        },
        card_sync: {
            title: "Daten-Synchronisation",
            desc: "Echtzeit-Abgleich von Verfügbarkeiten."
        },
        card_caching: {
            title: "High-Performance Caching",
            desc: "Upstash (Redis) für Latenz-Minimierung."
        },
         card_translation: {
            title: "Automated Pipeline",
            desc: "Automatisierte Content-Verarbeitung."
        }
      },
      cta_project: "Zum Live-Projekt",
      credits: "Realisiert als White-Label Lösung.",
      diagram: {
        frontend: "Frontend",
        backend: "Enterprise CRM",
        middleware: "Middleware",
        serverless: "Vercel Serverless",
        redis_lock: "Redis Lock",
        deepl_api: "Processing API",
        crm_sync: "CRM Sync"
      }
    },
    cta: {
      title: "Lass uns <br /> vernetzen.",
      text: "Ich bin immer offen für spannende Diskussionen über Frontend-Architektur, Performance und moderne Web-Stacks.",
      button: "Schreib mir"
    },
    footer: {
      navigation: "Navigation",
      legal: "Rechtliches",
      contact: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      rights: "© 2025 Marco Patzelt. All rights reserved."
    },
    blog: {
      archive: "Archiv",
      title: "Engineering <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600\">Log</span>.",
      description: "Dokumentation der Reise beim Aufbau skalierbarer Systeme, serverloser Architekturen und autonomer Agenten."
    }
  },
  en: {
    navbar: {
      architektur: "Architecture",
      engineering: "Engineering",
      techstack: "Tech Stack",
      projekte: "Projects",
      blog: "Blog",
      contact: "Contact"
    },
    hero: {
      role: "Full-Stack Engineer & Integration Specialist",
      pitch: "Specialized in decoupling frontends from complex business logic. I build scalable middleware and robust backends.",
      cta_primary: "Let's talk",
      cta_secondary: "View Projects",
      card_arch: {
        title: "Architecture",
        value: "Serverless"
      },
      card_backend: {
        title: "Backend",
        value: "Node.js"
      }
    },
    stack: {
        title: "Lean Architecture:",
        subtitle: "No Enterprise Bloat. Just Performance.",
        description: "I build software infrastructure that doesn't require an IT department to maintain. <strong class=\"text-white font-medium\">Lean Architecture</strong>. This means: Maximum speed, no unnecessary license costs, and full independence from sluggish systems.",
        card_infra: {
          title: "Infrastructure & <br /> Type Safety",
          serverless_title: "Serverless instead of Server Farms",
          serverless_desc: "No maintenance, no downtime. Deployment in serverless environments (e.g., Vercel) means you only pay for compute when it's actually used.",
          typescript_title: "TypeScript Logic",
          typescript_desc: "Strict typing prevents errors before they happen. The result is an extremely stable codebase that doesn't break even with complex features."
        },
        card_backend: {
          title: "Backend & Data",
          desc: "Backend-as-a-Service with Supabase (PostgreSQL).",
          highlight: "The Advantage:",
          highlight_desc: "The same power as enterprise systems, but without the overhead. Data is synchronized in real-time – extremely fast and scalable."
        },
        card_modules: {
          title: "Modular Architecture",
          desc: "Independent components, flexibly connected.",
          highlight: "The Principle:",
          highlight_desc: "It's not just about APIs, but true decoupling. Parts of the system can function independently, be swapped out, or scaled."
        },
        visuals: {
            status_title: "System Status",
            status_ok: "All Systems Operational",
            api_gateway: "API Gateway",
            postgres: "Postgres Replica",
            read_only: "read-only",
            realtime: "REALTIME SYNC"
        }
      },
      frontend: {
        label: "Frontend Engineering",
        title: "Design Implementation & <span class=\"text-gray-600 block sm:inline sm:ml-4 font-geist\">System Integration.</span>",
        description: "I realize complete web interfaces that are visually convincing and merge seamlessly with the underlying architecture.",
        cards: {
          visual: "Visual Fidelity",
          pixel: {
            quote: "\"Static layouts turn into functional, responsive websites. I translate designs exactly into code.\"",
            title: "Pixel-Perfect",
            subtitle: "Implementation"
          },
          type_safety: "Type Safety",
          interaction: {
            quote: "\"I breathe life into design. How do filters behave? What happens on click? I develop the interaction logic.\"",
            title: "Interaction Logic",
            subtitle: "Behavior"
          },
          user_experience: "User Experience",
          architecture: {
            quote: "\"The frontend is not an isolated coat of paint, but the precise counterpart to the backend. Data structures mesh perfectly.\"",
            title: "Architecture",
            subtitle: "Integration"
          }
        }
      },
      techstack: {
          title: "Built with",
          description: "Best-in-Class Tooling. I rely on a modern, proven stack with a large community and long-term support. No experiments, just industry standards."
      },
    innovation: {
      title_part1: "Agentic Orchestration",
      title_part2: "Layer Model.",
      description: "This is my current <strong>Research & Development</strong> focus. I build systems that write their own integration code at runtime. This allows any business logic to be dynamically extracted from existing databases – without rigid interfaces or costly IT projects.",
      button_github: "Technical Deep Dive (GitHub)",
      cards: {
        system2: {
          title: "System 2 Thinking",
          desc: "The system doesn't \"guess\". It uses an encrypted thinking loop for plan validation."
        },
        glassbox: {
          title: "Glass Box Trust",
          desc: "No loading spinner. You see every SQL query and every thought in real-time."
        },
        cag: {
          title: "CAG instead of RAG",
          desc: "The agent writes <strong>Runtime Code</strong>. Instead of hallucinations, it generates real, executable code for analytically exact answers."
        },
        pipeline: {
          title: "Cognitive Pipeline Layer",
          desc: "No messy \"spaghetti diagrams\". A central, linear pipeline orchestrates all tools, contexts, and safety checks."
        },
        safeguard: {
          title: "Safeguard Protocol",
          desc: "Quantitative answers are calculated via two independent paths. Only results that withstand mathematical verification reach the user."
        }
      },
      visuals: {
        input: "Input",
        result: "Result",
        executing: "EXECUTING",
        context: "Context",
        orchestration: "Orchestration",
        execute: "Execute",
        protocol_verification: "Protocol Verification",
        active: "ACTIVE",
        engine_a: "Engine_A (SQL)",
        engine_b: "Engine_B (PY)",
        delta_check: "DELTA CHECK",
        match: " (MATCH)"
      }
    },
    work: {
        featured: "Architecture Showcase",
        title: "High-Performance <br/> <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40\">Integration Layer</span>",
        task: {
          title: "The Challenge",
          desc: "Architecting a middleware solution to bridge the gap between modern, fast frontends and heavy enterprise CRM systems without sacrificing performance."
        },
        solution: {
          title: "The Architecture",
          card_middleware: {
              title: "Middleware Engineering",
              desc: "Node.js Application (Vercel) for decoupling system logic."
          },
          card_sync: {
              title: "Data Synchronization",
              desc: "Real-time availability reconciliation."
          },
          card_caching: {
              title: "High-Performance Caching",
              desc: "Upstash (Redis) to minimize latency."
          },
           card_translation: {
              title: "Processing Pipeline",
              desc: "Automated content handling."
          }
        },
        cta_project: "View Live Project",
        credits: "White-label implementation.",
        diagram: {
          frontend: "Frontend",
          backend: "Enterprise CRM",
          middleware: "Middleware",
          serverless: "Vercel Serverless",
          redis_lock: "Redis Lock",
          deepl_api: "Processing API",
          crm_sync: "CRM Sync"
        }
      },
      cta: {
        title: "Let's <br /> connect.",
        text: "I am always open to exciting discussions about frontend architecture, performance, and modern web stacks.",
        button: "Email me"
      },
      footer: {
        navigation: "Navigation",
        legal: "Legal",
        contact: "Contact",
        impressum: "Imprint",
        datenschutz: "Privacy",
        rights: "© 2025 Marco Patzelt. All rights reserved."
      },
      blog: {
        archive: "Archive",
        title: "Engineering <span class=\"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600\">Log</span>.",
        description: "Documenting the journey of building scalable systems, serverless architectures, and autonomous agents."
      }
  }
};
