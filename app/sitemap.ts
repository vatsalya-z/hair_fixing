import { MetadataRoute } from 'next'
import { BLOG_POSTS } from '@/data/siteData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ozzonehair.com'
  const now = new Date()

  const staticRoutes = [
    { route: '', priority: 1.0, changeFrequency: 'daily' as const },
    { route: '/about', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/services', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/solutions', priority: 0.95, changeFrequency: 'weekly' as const },
    { route: '/products', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/pricing', priority: 0.85, changeFrequency: 'monthly' as const },
    { route: '/gallery', priority: 0.8, changeFrequency: 'weekly' as const },
    { route: '/blog', priority: 0.85, changeFrequency: 'daily' as const },
    { route: '/faq', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  ]

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    ...staticRoutes.map(({ route, priority, changeFrequency }) => ({
      url: `${baseUrl}${route}/`,
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...blogRoutes,
  ]
}
