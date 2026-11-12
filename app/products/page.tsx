import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'
import { PRODUCTS_DATA, PRODUCT_FAQS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing Products & Care Solutions in Thiruvananthapuram | ozzone Hair',
  description: 'Explore authentic Walker Tape C-22 solvent, Ultrahold adhesive and hair system maintenance products in Thiruvananthapuram. Fast delivery and studio pickup.',
  alternates: {
    canonical: 'https://ozzonehair.com/products/',
  },
  openGraph: {
    title: 'Hair Fixing Products & Maintenance Solutions | ozzone Hair Thiruvananthapuram',
    description: 'Certified C-22 solvent, Ultrahold bonding adhesive and professional hair patch maintenance products in Trivandrum.',
    url: 'https://ozzonehair.com/products/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/products-hero.jpg', width: 1200, height: 630, alt: 'Hair Fixing Products in Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Products & Maintenance Solutions | ozzone Hair',
    description: 'Certified Walker Tape C-22 solvent & Ultrahold bonding adhesive in Trivandrum.',
    images: ['/images/products-hero.jpg'],
  },
}

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Systems & Hair Fixing Products in Thiruvananthapuram',
  itemListElement: PRODUCTS_DATA.map((product, i) => ({
    '@type': 'Product',
    position: i + 1,
    name: product.title,
    description: product.description,
    image: product.image.startsWith('http') ? product.image : `https://ozzonehair.com${product.image}`,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price.replace(/[^\d]/g, '') || '9999',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://ozzonehair.com/products/',
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ozzonehair.com/products/' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PRODUCT_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ProductsClient />
    </>
  )
}
