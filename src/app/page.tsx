import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Stack from "@/components/Stack";
import TechStack from "@/components/TechStack";
import FrontendEngineering from "@/components/FrontendEngineering";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
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
