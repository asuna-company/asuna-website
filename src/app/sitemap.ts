import type { MetadataRoute } from 'next';
import { fetchPosts } from './blog/infrastructure/services/postsServices';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://asuna.com.br';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, changeFrequency: 'weekly', priority: 1, lastModified: new Date() },
    { url: `${baseUrl}/servicos`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.8, lastModified: new Date() },
  ];

  const posts = await fetchPosts();
  const dynamicPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...dynamicPages];
}
