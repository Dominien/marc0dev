import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.marc0.dev';
  
  // Define all static routes
  const routes = [
    '',
    '/impressum',
    '/datenschutz',
  ];

  // Define supported locales
  const locales = ['de', 'en'];

  // Generate sitemap entries for each route and locale
  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            de: `${baseUrl}/de${route}`,
            en: `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return sitemap;
}
