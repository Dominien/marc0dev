export default function Datenschutz() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-white relative z-10">
        <h1 className="text-4xl font-bold mb-8 tracking-tight">Datenschutzerklärung</h1>
        <div className="space-y-8 text-neutral-300 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium text-white mb-2">Allgemeine Hinweise</h3>
            <p className="leading-relaxed">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Hosting</h2>
            <p className="leading-relaxed">Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
            <p className="mt-2 text-white/70 italic">Vercel Inc.<br />340 S Lemon Ave #4133<br />Walnut, CA 91789, USA</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="text-lg font-medium text-white mb-2">Datenschutz</h3>
            <p className="leading-relaxed">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
