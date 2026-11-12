import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'
import { PRODUCTS_DATA } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing Products & Hair Systems in Thiruvananthapuram | ozzone Hair',
  description: 'Explore certified hair systems, C22 solvent, Ultrahold adhesive & hair patch accessories in Thiruvananthapuram. 100% genuine human hair, lace & skin bases.',
  alternates: {
    canonical: 'https://ozzonehair.com/products/',
  },
  openGraph: {
    title: 'Hair Systems & Maintenance Products in Thiruvananthapuram | ozzone Hair',
    description: 'Certified men & women hair systems, C-22 solvent, Ultrahold adhesive and hair patch tapes in Trivandrum. 100% human hair systems.',
    url: 'https://ozzonehair.com/products/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing Products in Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Products & Hair Systems in Thiruvananthapuram',
    description: 'Certified hair systems, C-22 solvent, Ultrahold bonding adhesive in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
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
      <ProductsClient />
    </>
  )
}
