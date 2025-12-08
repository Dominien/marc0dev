import Hero from "@/components/Hero";
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
              "https://linkedin.com/in/marcopatzelt", // Assuming this exists, can be updated
              "https://twitter.com/marcopatzelt" // Assuming this exists
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
        <FrontendEngineering />
        <Work />
        <CTA />
      </main>
    </>
  );
}
