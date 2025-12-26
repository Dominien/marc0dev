import { MetadataRoute } from 'next';
import { getPosts } from '@/lib/data/posts';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.marc0.dev';
  
  // Define all static routes which are localized
  const routes = [
    '',
    '/impressum',
    '/datenschutz',
    '/terms',
    '/blog',
  ];

  // Define supported locales
  const locales = ['de', 'en'];

  // Fetch posts once (slugs are shared)
  const posts = await getPosts('en');

  // Generate sitemap entries for each route and locale
  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });

    // Add blog posts
    posts.forEach(post => {
      sitemap.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.updated_at.split('T')[0],
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemap;
}
