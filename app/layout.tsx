import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import MobileBottomBar from '@/components/MobileBottomBar'
import { SITE_INFO } from '@/data/siteData'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#005675',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://ozzonehair.com'),
  title: {
    default: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio Trivandrum',
    template: '%s | ozzone Hair Thiruvananthapuram',
  },
  description: 'Premier non-surgical hair fixing, hair patching, bonding & hair replacement studio in Thiruvananthapuram, Kerala. 100% natural human hair systems, undetectable hairline & private consultation suites.',
  keywords: [
    'Hair Fixing in Thiruvananthapuram',
    'Hair Fixing in Trivandrum',
    'Hair Replacement in Thiruvananthapuram',
    'Hair Patch in Trivandrum',
    'Best Hair Fixing Centre in Trivandrum',
    'Non Surgical Hair Replacement in Kerala',
    'Hair Patch for Men in Kerala',
    'Men\'s Hair System in Trivandrum',
    'Hair Bonding Statue Junction',
    'Hair Weaving Pattom',
    'Hair Fixing Products in Kerala',
    'ozzone Hair Thiruvananthapuram'
  ],
  authors: [{ name: 'ozzone Hair Thiruvananthapuram', url: 'https://ozzonehair.com' }],
  creator: 'ozzone Hair',
  publisher: 'ozzone Hair',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://ozzonehair.com/',
  },
  openGraph: {
    title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Premier non-surgical hair fixing, hair patch, bonding & hair replacement in Thiruvananthapuram. 100% human hair, instant 90-min transformation & private suites.',
    url: 'https://ozzonehair.com/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/hero-indian-hair.jpg',
        width: 1200,
        height: 630,
        alt: 'ozzone Hair Fixing & Replacement Studio Thiruvananthapuram',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Premier non-surgical hair fixing & hair replacement in Trivandrum. 100% natural human hair, zero surgery, instant results.',
    images: ['/images/hero-indian-hair.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Global Organization & LocalBusiness JSON-LD Schema
const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ozzonehair.com/#website',
      url: 'https://ozzonehair.com/',
      name: 'ozzone Hair Fixing Thiruvananthapuram',
      description: 'Premier non-surgical hair fixing and hair replacement center in Thiruvananthapuram, Kerala',
      publisher: {
        '@id': 'https://ozzonehair.com/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'HairSalon',
      '@id': 'https://ozzonehair.com/#organization',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      alternateName: [
        'ozzone Hair Thiruvananthapuram',
        'Hair Fixing in Thiruvananthapuram',
        'ozzone Hair Trivandrum',
      ],
      url: 'https://ozzonehair.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
        caption: 'ozzone Hair Logo',
      },
      image: 'https://ozzonehair.com/images/hero-indian-hair.jpg',
      description: 'Specialist non-surgical hair fixing, custom hair patch, dermatological hair bonding, and hair replacement studio located in Statue Junction, MG Road, and Pattom, Thiruvananthapuram, Kerala.',
      telephone: SITE_INFO.phone,
      email: SITE_INFO.email,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
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
      hasMap: 'https://maps.google.com/?q=Statue+Junction+Thiruvananthapuram',
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
          '@type': 'AdministrativeArea',
          name: 'Kerala',
        },
      ],
      sameAs: [
        'https://www.facebook.com/',
        'https://www.instagram.com/',
        'https://www.youtube.com/',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="64x64" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#252B38] antialiased">
        <Header />
        <main className="flex-1 pt-16 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <MobileBottomBar />
      </body>
    </html>
  )
}
