import type { Metadata } from 'next'
import BlogClient from './BlogClient'
import { BLOG_POSTS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing & Hair Care Blog Thiruvananthapuram | ozzone Hair',
  description: 'Expert guides on hair fixing, hair patch care, bonding, pricing & non-surgical hair replacement in Kerala. Tips from certified specialists in Trivandrum.',
  alternates: {
    canonical: 'https://ozzonehair.com/blog/',
  },
  openGraph: {
    title: 'Hair Care & Hair Fixing Blog Thiruvananthapuram | ozzone Hair',
    description: 'Expert advice on hair fixing, climate maintenance tips for Kerala, and non-surgical hair restoration insights from Trivandrum.',
    url: 'https://ozzonehair.com/blog/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing Blog Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Care & Hair Fixing Blog Thiruvananthapuram | ozzone Hair',
    description: 'Expert advice on hair fixing and non-surgical hair replacement in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ozzone Hair Fixing & Care Blog Thiruvananthapuram',
  description: 'Educational articles and expert advice on non-surgical hair replacement, hair patching, bonding & maintenance in Kerala',
  url: 'https://ozzonehair.com/blog/',
  blogPost: BLOG_POSTS.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: `https://ozzonehair.com/blog/${post.slug}/`,
    datePublished: post.date,
    image: post.image,
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
