import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'
import { GALLERY_ITEMS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Before & After Hair Fixing Gallery Thiruvananthapuram | ozzone Hair',
  description: 'View real before and after hair fixing, hair patching, bonding & toupee results at ozzone Hair Thiruvananthapuram. Undetectable hairlines & 100% natural density.',
  alternates: {
    canonical: 'https://ozzonehair.com/gallery/',
  },
  openGraph: {
    title: 'Before & After Hair Fixing Gallery Thiruvananthapuram | ozzone Hair',
    description: 'Witness real client transformations from our Statue Junction & Pattom studios. Undetectable hairlines, natural volume & restored confidence.',
    url: 'https://ozzonehair.com/gallery/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing Before and After Gallery Trivandrum' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Before & After Hair Fixing Gallery Thiruvananthapuram',
    description: 'Witness real client hair transformations at ozzone Hair Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Hair Fixing Before & After Results in Thiruvananthapuram',
  description: 'Real client non-surgical hair fixing and replacement transformations at ozzone Hair Studio Thiruvananthapuram, Kerala',
  image: GALLERY_ITEMS.map((item) => item.afterImg.startsWith('http') ? item.afterImg : `https://ozzonehair.com${item.afterImg}`),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://ozzonehair.com/gallery/' },
  ],
}

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GalleryClient />
    </>
  )
}
