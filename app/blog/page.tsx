import type { Metadata } from 'next'
import BlogClient from './BlogClient'
import { BLOG_POSTS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Care & Fixing Guides | ozzone Hair Blog',
  description:
    'Expert guides on hair fixing, hair patch care, bonding, maintenance & non-surgical hair replacement in Trivandrum & Kerala. Tips from certified specialists.',
  alternates: {
    canonical: 'https://ozzonehair.com/blog/',
  },
  openGraph: {
    title: 'Hair Care & Fixing Guides | ozzone Hair Blog',
    description:
      'Expert guides on hair fixing, hair patch care, bonding, maintenance & non-surgical hair replacement in Trivandrum & Kerala. Tips from certified specialists.',
    url: 'https://ozzonehair.com/blog/',
    siteName: 'ozzone Hair',
    images: [{ url: '/images/blog/Blog_Hero_Section_Banner_Before_After.png', width: 2048, height: 768, alt: 'Hair Care & Fixing Guides - ozzone Hair Blog' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Care & Fixing Guides | ozzone Hair Blog',
    description:
      'Expert guides on hair fixing, hair patch care, bonding, maintenance & non-surgical hair replacement in Trivandrum & Kerala.',
    images: ['/images/blog/Blog_Hero_Section_Banner_Before_After.png'],
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ozzone Hair Fixing & Care Blog Thiruvananthapuram',
  description: 'Educational articles and expert advice on non-surgical hair replacement, hair patching, bonding & maintenance in Kerala',
  url: 'https://ozzonehair.com/blog/',
  publisher: {
    '@type': 'Organization',
    name: 'ozzone Hair - Hair Fixing & Replacement Studio',
    url: 'https://ozzonehair.com/',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
    },
  },
  blogPost: BLOG_POSTS.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `https://ozzonehair.com/blog/${post.slug}/`,
    datePublished: post.date,
    image: post.image.startsWith('http') ? post.image : `https://ozzonehair.com${post.image}`,
    author: {
      '@type': 'Organization',
      name: 'ozzone Hair Thiruvananthapuram',
      url: 'https://ozzonehair.com/',
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ozzonehair.com/blog/' },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClient />
    </>
  )
}
