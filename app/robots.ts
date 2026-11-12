import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/dashboard/'],
    },
    sitemap: [
      'https://ozzonehair.com/sitemap_index.xml',
      'https://ozzonehair.com/sitemap.xml',
    ],
  }
}
