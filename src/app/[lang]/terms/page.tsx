import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: 'Terms of Service | Marco Patzelt',
    description: 'Terms of Service for marc0.dev',
    alternates: {
      canonical: `https://www.marc0.dev/${lang}/terms`,
      languages: {
        'en': 'https://www.marc0.dev/en/terms',
        'de': 'https://www.marc0.dev/de/terms',
      },
    },
  };
}

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      <div className="prose prose-invert">
        <p className="text-white/60">
          This website is a portfolio and blog. 
          <br /><br />
          If you have any questions, please contact me at marcopatzelt7@gmail.com.
        </p>
      </div>
    </main>
  );
}
