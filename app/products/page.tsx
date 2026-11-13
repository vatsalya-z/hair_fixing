import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'
import { PRODUCTS_DATA, PRODUCT_FAQS } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing Products in Kerala | Walker C-22 & Ultrahold Adhesive Trivandrum',
  description: 'Buy authentic hair fixing products in Thiruvananthapuram, Kerala. Certified Walker Tape C-22 solvent remover, Ultrahold waterproof adhesive & maintenance products at ozzone Hair.',
  alternates: {
    canonical: 'https://ozzonehair.com/products/',
  },
  openGraph: {
    title: 'Hair Fixing Products & Maintenance Supplies | ozzone Hair Thiruvananthapuram',
    description: 'Certified Walker Tape C-22 solvent, Ultrahold bonding adhesive and professional hair patch maintenance products in Trivandrum, Kerala.',
    url: 'https://ozzonehair.com/products/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: 'https://ozzonehair.com/images/products/c22-solvent-hd.webp', width: 1200, height: 630, alt: 'Hair Fixing Products in Thiruvananthapuram' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Products in Kerala | Walker C-22 & Ultrahold Trivandrum',
    description: 'Certified Walker Tape C-22 solvent & Ultrahold bonding adhesive in Trivandrum, Kerala.',
    images: ['https://ozzonehair.com/images/products/c22-solvent-hd.webp'],
  },
}

const productsSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Systems & Hair Fixing Products in Thiruvananthapuram, Kerala',
  description: 'Certified hair fixing adhesives, solvent removers, and hair system maintenance products available at ozzone Hair Studio Thiruvananthapuram',
  itemListElement: PRODUCTS_DATA.map((product, i) => ({
    '@type': 'Product',
    position: i + 1,
    name: product.title,
    description: product.description,
    image: product.image.startsWith('http') ? product.image : `https://ozzonehair.com${product.image}`,
    category: product.category,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: 'https://ozzonehair.com/products/',
      seller: {
        '@type': 'HairSalon',
        name: 'ozzone Hair - Hair Fixing & Replacement Studio',
        url: 'https://ozzonehair.com/',
      },
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
