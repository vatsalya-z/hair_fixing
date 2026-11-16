import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'
import { GALLERY_ITEMS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Patch Before & After Results in Trivandrum | ozzone Hair Gallery',
  description:
    'Real before and after hair fixing transformations in Trivandrum & Bangalore. See natural graduated hairlines, crown density restoration & genuine client results.',
  keywords: [
    'Hair Patch in Trivandrum',
    'Hair Fixing Before and After Trivandrum',
    'Hair Fixing in Trivandrum',
    'Hair Fixing in Thiruvananthapuram',
    'Hair Replacement Results Kerala',
    'Hair Patch Results Trivandrum',
  ],
  alternates: {
    canonical: 'https://ozzonehair.com/gallery/',
  },
  openGraph: {
    title: 'Hair Patch Before & After Results in Trivandrum | ozzone Hair Gallery',
    description:
      'Witness real client transformations from our Trivandrum & Bangalore studios. Undetectable hairlines, natural volume & restored confidence.',
    url: 'https://ozzonehair.com/gallery/',
    siteName: 'ozzone Hair',
    images: [{ url: '/images/gallery/gallery_Hero_Section_Banner_Before_After.png', width: 2048, height: 768, alt: 'Hair Fixing Before and After Gallery Trivandrum' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Patch Before & After Results in Trivandrum | ozzone Hair Gallery',
    description: 'Witness real client hair transformations at ozzone Hair Trivandrum & Bangalore.',
    images: ['/images/gallery/gallery_Hero_Section_Banner_Before_After.png'],
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
