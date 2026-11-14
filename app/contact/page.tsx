import type { Metadata } from 'next'
import ContactClient from './ContactClient'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Contact ozzone Hair | Free Scalp Consultation Trivandrum',
  description:
    'Contact ozzone Hair studios in Trivandrum & Bangalore. Book your free, private scalp consultation for non-surgical hair fixing and custom hair patches.',
  alternates: {
    canonical: 'https://ozzonehair.com/contact/',
  },
  openGraph: {
    title: 'Contact ozzone Hair | Free Scalp Consultation Trivandrum',
    description:
      'Contact ozzone Hair studios in Trivandrum & Bangalore. Book your free, private scalp consultation for non-surgical hair fixing and custom hair patches.',
    url: 'https://ozzonehair.com/contact/',
    siteName: 'ozzone Hair',
    images: [{ url: 'https://ozzonehair.com/hero-section/slide_2-1.webp', width: 1200, height: 630, alt: 'Contact ozzone Hair Studio' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ozzone Hair | Free Scalp Consultation Trivandrum',
    description:
      'Contact ozzone Hair studios in Trivandrum & Bangalore. Book your free, private scalp consultation for non-surgical hair fixing and custom hair patches.',
    images: ['https://ozzonehair.com/hero-section/slide_2-1.webp'],
  },
}

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  url: 'https://ozzonehair.com/contact/',
  name: 'Contact ozzone Hair Studio',
  description: 'Book your free confidential hair analysis consultation at ozzone Hair in Palayam, Thiruvananthapuram or Indiranagar, Bengaluru.',
  mainEntity: {
    '@type': 'HairSalon',
    name: 'ozzone Hair - Hair Fixing & Replacement Studio',
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    url: 'https://ozzonehair.com/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam',
      addressLocality: 'Thiruvananthapuram',
      addressRegion: 'Kerala',
      postalCode: '695034',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.5029,
      longitude: 76.9535,
    },
    hasMap: 'https://maps.google.com/maps?q=Palayam+Thiruvananthapuram',
    department: [
      {
        '@type': 'HairSalon',
        name: 'ozzone Hair Bangalore Studio',
        telephone: '+91 98470 62707',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560008',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 12.9660325,
          longitude: 77.6380037,
        },
        hasMap: 'https://www.google.com/maps/place/Ozzone+Farrell+bangalore/@12.9660325,77.6380037,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16a25d4a7c99:0xd411d97542f78f0b!8m2!3d12.9660325!4d77.6380037!16s%2Fg%2F1tfxf3nj',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Thiruvananthapuram',
      },
      {
        '@type': 'City',
        name: 'Bengaluru',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Kerala',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Karnataka',
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
