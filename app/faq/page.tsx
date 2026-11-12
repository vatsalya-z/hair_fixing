import type { Metadata } from 'next'
import FAQClient from './FAQClient'
import { FAQS_DATA } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing FAQs Thiruvananthapuram | Cost, Pain & Care Questions',
  description: 'Got questions about hair fixing in Thiruvananthapuram? Find expert answers on hair patch costs, pain-free bonding, swimming, lifespan & maintenance in Trivandrum.',
  alternates: {
    canonical: 'https://ozzonehair.com/faq/',
  },
  openGraph: {
    title: 'Hair Fixing FAQs Thiruvananthapuram | ozzone Hair Studio',
    description: 'Honest answers on hair patch costs, daily maintenance, shower/swimming safety & natural hairlines from ozzone Hair Trivandrum.',
    url: 'https://ozzonehair.com/faq/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing FAQs Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing FAQs Thiruvananthapuram | ozzone Hair Studio',
    description: 'Expert answers on hair patch costs, bonding, swimming & lifespan in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS_DATA.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://ozzonehair.com/faq/' },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQClient />
    </>
  )
}
