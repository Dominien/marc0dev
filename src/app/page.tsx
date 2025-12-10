import Hero from "@/components/Hero";
import EngineeringMindset from "@/components/EngineeringMindset";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import TechStack from "@/components/TechStack";
import FrontendEngineering from "@/components/FrontendEngineering";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Marco Patzelt",
            url: "https://marc0.dev",
            jobTitle: "Full-Stack Engineer & Integration Specialist",
            description: "Spezialisiert auf Node.js Middleware, Vercel und Enterprise-Integration.",
            sameAs: [
              "https://github.com/Dominien",
              "https://linkedin.com/in/marco-patzelt-2574b1257/",
              "https://x.com/Marc0dev"
            ],
            knowsAbout: ["Full-Stack Development", "Node.js", "React", "Next.js", "Vercel", "TypeScript", "System Integration"],
            image: "https://marc0.dev/marco-hero.png", // Pointing to the hero image
          }),
        }}
      />
      <main>
        <Hero />
        <Stack />
        <TechStack />
        <Work />
        <FrontendEngineering />
        <EngineeringMindset />
        <CTA />
      </main>
    </>
  );
}
