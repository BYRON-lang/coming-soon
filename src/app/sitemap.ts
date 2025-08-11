import { MetadataRoute } from 'next';

const SITE_URL = 'https://gridrr.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes];
}
