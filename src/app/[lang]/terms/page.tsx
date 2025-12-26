import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Marco Patzelt',
  description: 'Terms of Service for marc0.dev',
};

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
