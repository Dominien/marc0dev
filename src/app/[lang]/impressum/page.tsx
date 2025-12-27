import { Metadata } from 'next';
import { dictionaries, Locale } from '@/i18n/dictionaries';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang as Locale) || 'en';
  const dict = dictionaries[locale];

  return {
    title: dict.footer.impressum,
    description: 'Legal Notice / Impressum for Marco Patzelt',
    robots: {
      index: false,
      follow: true,
    }
  };
}

export default function Impressum() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-white relative z-10">
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Impressum</h1>
        <div className="space-y-8 text-neutral-300 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              Marco Patzelt<br />
              Max Ernst Str. 21<br />
              40670 Meerbusch
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
            <p className="leading-relaxed">
              E-Mail: <a href="mailto:marcopatzelt7@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">marcopatzelt7@gmail.com</a>
            </p>
          </section>
          <section>
              <h2 className="text-xl font-semibold text-white mb-4">Redaktionell verantwortlich</h2>
              <p className="leading-relaxed">
                Marco Patzelt<br />
                Max Ernst Str. 21<br />
                40670 Meerbusch
              </p>
          </section>
        </div>
      </div>
    </main>
  );
}
