
"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const browserLang = navigator.language || (navigator.languages && navigator.languages[0]);
    const targetLang = (browserLang && browserLang.startsWith('de')) ? 'de' : 'en';
    router.replace(`/${targetLang}`);
  }, [router]);

  return <div className="bg-black min-h-screen" />;
}
