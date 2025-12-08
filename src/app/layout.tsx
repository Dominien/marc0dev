import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Patzelt | Full-Stack Engineer & Integration Specialist",
  description: "Marco Patzelt - Full-Stack Engineer & Integration Specialist. Spezialisiert auf Node.js Middleware, Vercel und Enterprise-Integration. Maßgeschneiderte Lösungen für moderne Web-Anwendungen.",
  keywords: ["Full-Stack Engineer", "Integration Specialist", "Node.js", "Vercel", "React", "Next.js", "TypeScript", "Enterprise Integration", "Marco Patzelt"],
  authors: [{ name: "Marco Patzelt" }],
  creator: "Marco Patzelt",
  publisher: "Marco Patzelt",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://marc0.dev",
    title: "Marco Patzelt | Full-Stack Engineer & Integration Specialist",
    description: "Spezialisiert auf Node.js Middleware, Vercel und Enterprise-Integration.",
    siteName: "Marco Patzelt Portfolio",
    images: [
      {
        url: "/og-image.jpg", // We should ensure this exists or remove if not ready
        width: 1200,
        height: 630,
        alt: "Marco Patzelt - Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Patzelt | Full-Stack Engineer",
    description: "Spezialisiert auf Node.js Middleware, Vercel und Enterprise-Integration.",
    creator: "@marcopatzelt", // Replace with actual handle if known, or remove
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png", // Next.js will look for this if we add it later
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-neutral-950 text-white/90 selection:bg-white/20 selection:text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
