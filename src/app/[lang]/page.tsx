import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";

import Work from "@/components/Work";
import Stack from "@/components/Stack";
import TechStack from "@/components/TechStack";
import FrontendEngineering from "@/components/FrontendEngineering";
import CTA from "@/components/CTA";
import Innovation from "@/components/Innovation";
import { getPosts } from "@/lib/data/posts";
import { Locale } from "@/i18n/dictionaries";

interface HomeProps {
  params: Promise<{ lang: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;
  const posts = await getPosts((lang as Locale) || 'en');
  const latestPosts = posts.slice(0, 3);

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
        <FrontendEngineering />
        <Innovation />
        <Work />
        <div id="blog-section">
          <BlogSection posts={latestPosts} />
        </div>

        <CTA />
      </main>
    </>
  );
}
