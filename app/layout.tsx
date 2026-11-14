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
  verification: {
    google: 'TODO_GOOGLE_SEARCH_CONSOLE_VERIFICATION_ID',
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
        url: 'https://ozzonehair.com/hero-section/slide_2-1.webp',
        width: 1200,
        height: 630,
        alt: 'ozzone Hair Fixing & Replacement Studio Thiruvananthapuram and Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Premier non-surgical hair fixing & hair replacement in Trivandrum & Bangalore. 100% natural human hair, zero surgery, instant results.',
    images: ['https://ozzonehair.com/hero-section/slide_2-1.webp'],
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
      image: 'https://ozzonehair.com/hero-section/slide_2-1.webp',
      description: 'Specialist non-surgical hair fixing, custom hair patch, dermatological hair bonding, and hair replacement studio located in Palayam, Thiruvananthapuram, Kerala and Indiranagar, Bengaluru, Karnataka.',
      telephone: SITE_INFO.phone,
      email: SITE_INFO.email,
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
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
      sameAs: [
        'https://www.facebook.com/ozzonehair', // TODO: Replace with official Facebook profile URL
        'https://www.instagram.com/ozzonehair', // TODO: Replace with official Instagram profile URL
        'https://www.youtube.com/@ozzonehair', // TODO: Replace with official YouTube channel URL
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
    <html lang="en-IN">
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
        {/* Google Analytics 4 Placeholder (TODO: Insert your GA4 measurement ID e.g. G-XXXXXXXXXX) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=TODO_GA4_MEASUREMENT_ID"></script> */}
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
