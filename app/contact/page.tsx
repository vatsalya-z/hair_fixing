import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Contact ozzone Hair Fixing Studio Thiruvananthapuram | Book Consultation',
  description: 'Book a free, private hair consultation at ozzone Hair in Thiruvananthapuram. Studios at Statue Junction (MG Road) & Pattom. Call +91 94470 28419 or WhatsApp.',
  alternates: {
    canonical: 'https://ozzonehair.com/contact/',
  },
  openGraph: {
    title: 'Contact ozzone Hair Studio Thiruvananthapuram | Free Consultation',
    description: 'Visit our studios at Statue Junction & Pattom for free hair analysis. Transparent pricing & 100% private suites.',
    url: 'https://ozzonehair.com/contact/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Contact ozzone Hair Studio Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ozzone Hair Studio Thiruvananthapuram | Book Consultation',
    description: 'Book free hair consultation in Statue Junction & Pattom, Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'HairSalon',
    name: 'ozzone Hair - Hair Fixing & Replacement Studio',
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2nd Floor, Capital Centre, Opp. Secretariat, MG Road, Statue Junction',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      postalCode: '695001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.497555,
      longitude: 76.948294,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://ozzonehair.com/contact/' },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  )
}
