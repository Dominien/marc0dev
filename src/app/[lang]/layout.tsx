import { Locale, dictionaries } from '@/i18n/dictionaries';
import { LocaleProvider } from '@/i18n/LocaleContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }];
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';
  const dict = dictionaries[locale];

  const baseUrl = 'https://www.marc0.dev';
  const path = locale === 'en' ? '/en' : '/de';
  const canonical = `${baseUrl}${path}`;

  const title = `Marco Patzelt | ${dict.hero.role}`;
  const description = dict.hero.pitch.replace(/<\/?[^>]+(>|$)/g, ""); // Strip HTML from pitch for description

  return {
    title: {
      default: title,
      template: `%s | Marco Patzelt`,
    },
    description: description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical,
      languages: {
        'en': '/en',
        'de': '/de',
      },
    },
    openGraph: {
      title: title,
      description: description,
      url: canonical,
      siteName: 'Marco Patzelt Portfolio',
      locale: locale,
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@Marc0dev', 
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function LanguageLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Marco Patzelt',
    url: 'https://www.marc0.dev',
    jobTitle: 'Full-Stack Engineer',
    sameAs: [
      'https://github.com/Dominien',
      'https://www.linkedin.com/in/marco-patzelt-2574b1257/',
      'https://x.com/Marc0dev',
    ],
    knowsAbout: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Serverless', 'AWS', 'Supabase'],
  };

  return (
    <LocaleProvider locale={lang as Locale}>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
    </LocaleProvider>
  );
}
