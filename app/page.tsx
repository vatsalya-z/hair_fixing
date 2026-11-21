import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'
import HomeBlogSection from '@/components/HomeBlogSection'
import AnnouncementBar from '@/components/AnnouncementBar'
import HeroCarousel from '@/components/HeroCarousel'
import {
  FadeInUp,
  FadeInScale,
  HoverLift3D,
  SectionReveal3D,
  StaggerGridLR,
  CardRevealLR,
  Card3DTilt,
  ImageHover3D,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'Best Hair Fixing in Trivandrum & Thiruvananthapuram | ozzone Hair Studio',
  description:
    'Top-rated hair fixing centre in Trivandrum & Thiruvananthapuram, Kerala. 18+ years experience in non-surgical hair replacement, custom hair patches & hair bonding. Free consultation!',
  keywords: [
    'Hair Fixing in Thiruvananthapuram',
    'Hair Fixing in Trivandrum',
    'Hair Fixing Centre in Trivandrum',
    'Best Hair Fixing in Trivandrum',
    'Hair Replacement in Thiruvananthapuram',
    'Hair Replacement in Trivandrum',
    'Non Surgical Hair Replacement in Kerala',
    'Hair Patch in Trivandrum',
    'Hair Bonding in Trivandrum',
    'Hair Weaving in Trivandrum',
    'Hair System for Men in Trivandrum',
    'Custom Hair Replacement Systems',
    'Hair Fixing Services Near Me',
  ],
  alternates: {
    canonical: 'https://ozzonehair.com/',
  },
  openGraph: {
    title: 'Best Hair Fixing in Trivandrum & Thiruvananthapuram | ozzone Hair Studio',
    description:
      'Top-rated hair fixing centre in Trivandrum & Thiruvananthapuram, Kerala. 18+ years experience in non-surgical hair replacement, custom hair patches & hair bonding.',
    url: 'https://ozzonehair.com/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: 'https://ozzonehair.com/hero-section/slide_1-1.png',
        width: 1200,
        height: 630,
        alt: 'Best Hair Fixing in Trivandrum & Thiruvananthapuram - ozzone Hair Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hair Fixing in Trivandrum & Thiruvananthapuram | ozzone Hair Studio',
    description:
      'Premier non-surgical hair fixing and hair replacement in Trivandrum & Thiruvananthapuram. 100% natural human hair, instant results. Free scalp consultation.',
    images: ['https://ozzonehair.com/hero-section/slide_1-1.png'],
  },
}

const HOME_FAQS = [
  {
    question: 'Which is the best hair fixing studio in Trivandrum?',
    answer:
      'ozzone Hair Studio is widely recognized as one of the best hair fixing centers in Trivandrum and Bangalore, with over 18 years of clinical expertise. Located conveniently at Palayam (Opp. Jubilee Memorial Hospital) in Thiruvananthapuram and Indiranagar in Bengaluru, we offer 100% natural human hair systems, undetectable hairlines, dermatological medical-grade adhesives, and private consultation rooms for both men and women.',
  },
  {
    question: 'Is hair fixing permanent?',
    answer:
      'Non-surgical hair fixing is a semi-permanent hair restoration solution. The custom hair patch remains securely attached to your scalp 24/7 for 3 to 5 weeks using waterproof dermatological bonding polymers. After 3 to 5 weeks, a quick 45-minute routine servicing and re-bonding session is performed at our studio to clean the scalp and refresh the attachment.',
  },
  {
    question: 'Can I swim, shower, or workout with a hair patch?',
    answer:
      'Yes, absolutely! Our hair systems are bonded using FDA-approved, waterproof and sweat-resistant medical adhesives. You can take daily hot showers, swim in chlorinated pools or the sea at Kovalam, ride motorbikes with helmets, and engage in high-intensity gym workouts with zero fear of detachment.',
  },
  {
    question: 'Is a hair patch suitable for young men with early baldness?',
    answer:
      'Yes, over 65% of our clients in Trivandrum and Bangalore are young professionals and college students aged 21 to 38 facing male pattern baldness or receding hairlines. Modern micro-skin and ultra-thin Swiss lace systems replicate natural root growth and permit trending modern hairstyles, fades, and undercut stylings.',
  },
  {
    question: 'How do I get a free scalp consultation in Trivandrum or Bangalore?',
    answer:
      'You can book a 100% free, confidential scalp analysis and consultation by calling +91 77360 77110, messaging our specialists on WhatsApp at +91 98470 62707, or filling out the appointment form on our Contact page. Consultations are conducted in complete privacy with zero purchase obligation.',
  },
]

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': 'https://ozzonehair.com/#organization',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      url: 'https://ozzonehair.com/',
      telephone: SITE_INFO.phone,
      email: SITE_INFO.email,
      logo: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
      image: 'https://ozzonehair.com/hero-section/slide_1-1.png',
      description:
        'Premier non-surgical hair fixing, custom hair patch, bonding, and hair replacement studio with 18 years in Hair Replacement. Flagship studio in Palayam, Thiruvananthapuram and Indiranagar, Bengaluru.',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam',
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
            streetAddress:
              'Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar',
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
          hasMap: SITE_INFO.mapUrl,
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://ozzonehair.com/#webpage',
      url: 'https://ozzonehair.com/',
      name: 'Best Hair Fixing in Trivandrum & Bangalore | ozzone Hair',
      description:
        'Non-surgical hair fixing, custom hair patching & bonding in Trivandrum & Bangalore. 18+ years experience, 100% natural hair. Book a free scalp consultation!',
      isPartOf: {
        '@id': 'https://ozzonehair.com/#website',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://ozzonehair.com/#faq',
      mainEntity: HOME_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (IMAGE SLIDER ONLY FROM /public/hero-section)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#075078] overflow-hidden" aria-label="Hero Image Slider">
        <h1 className="sr-only">
          Best Hair Fixing in Trivandrum &amp; Thiruvananthapuram - Non-Surgical Hair Replacement Centre | ozzone Hair
        </h1>
        <HeroCarousel />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SCROLLING ANNOUNCEMENT BAR (BELOW HERO SECTION)
      ═══════════════════════════════════════════════════════════ */}
      <AnnouncementBar />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ARE YOU TIRED OF HAIR LOSS CONTROLLING YOUR LIFE?
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={30}>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Image with 3D Tilt and Hover Zoom */}
              <div className="lg:col-span-5 flex justify-center items-center w-full">
                <Card3DTilt maxTilt={7} depth={12} className="w-full max-w-md">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square w-full min-h-[260px] sm:min-h-[380px] shadow-xl border border-[#E2E8F0] bg-[#F3F7FB] group">
                    <ImageHover3D>
                      <Image
                        src="/images/gallery/thumb_2.webp"
                        alt="Hair Restoration &amp; Renovation - Are You Tired of Hair Loss Controlling Your Life - ozzone Hair"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 90vw, 40vw"
                      />
                    </ImageHover3D>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/25 via-transparent to-transparent pointer-events-none" />
                  </div>
                </Card3DTilt>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <FadeInUp>
                  <div className="text-center lg:text-left">
                    <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                      Hair Restoration &amp; Renovation
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] leading-tight mt-3 mb-5 text-center lg:text-left">
                      Are You Tired of Hair Loss Controlling Your Life?
                    </h2>
                    <div className="w-16 h-1 bg-[#29B6EB] rounded-full mb-6 mx-auto lg:mx-0" />
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
                    <p>
                      Seek the most dependable solutions for hair replacement,restoration and renovation at Hair Clinics. Our professional services are designed for people facing issues like thinning hair, baldness, or hair loss because of scientific conditions, supplying successful treatments for each ladies and men, inclusive of kids.
                    </p>
                    <p>
                      Located in India, with locations in Bangalore and Trivandrum, Kerala,we are devoted to supporting you restore your hair and live your life to the fullest.Visit us now for personalised hair healing remedies.
                    </p>
                  </div>

                  <div className="pt-6 mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    <Link
                      href="/about"
                      className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-sm font-semibold text-center touch-manipulation"
                    >
                      <span>Read More</span>
                      <span>→</span>
                    </Link>
                    <Link
                      href="/contact"
                      className="btn-secondary-light w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-sm font-semibold text-center touch-manipulation"
                    >
                      <span>Visit Us Now</span>
                    </Link>
                  </div>
                </FadeInUp>
              </div>
            </div>
          </SectionReveal3D>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — BEST HAIR FIXING SERVICE IN TRIVANDRUM AND BANGLORE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={30}>
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-500 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Copy */}
              <div className="lg:col-span-8">
                <div className="text-center lg:text-left">
                  <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                    Expert Hair Solving
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] leading-tight mt-3 mb-4 text-center lg:text-left">
                    Best Hair Fixing Service in Trivandrum and Bangalore
                  </h2>
                  <div className="w-16 h-1 bg-[#29B6EB] rounded-full mb-5 mx-auto lg:mx-0" />
                </div>

                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
                  Our expert hair solving services offer natural, undetectable effects that repair self assurance and style. With advanced strategies and top rate substances, we offer customized answers that blend seamlessly along with your present hair. Whether you are coping with thinning hair or looking for a complete transformation, our group guarantees consolation, durability, and a glance that’s definitely you. Experience reliable, splendid hair solving at our Trivandrum and Bangalore locations, and enjoy a rejuvenated look with an answer tailor-made for your needs.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/services"
                    className="btn-primary w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-xs sm:text-sm font-semibold text-center touch-manipulation"
                  >
                    <span>Explore Our Services</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-secondary-light w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[48px] px-6 text-xs sm:text-sm font-semibold text-center touch-manipulation"
                  >
                    <span>Book Consultation</span>
                  </Link>
                </div>
              </div>

              {/* Image Tile with 3D Tilt */}
              <div className="lg:col-span-4 flex justify-center">
                <Card3DTilt maxTilt={6} depth={10} className="w-full max-w-xs">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] w-full shadow-md border border-[#E2E8F0] bg-[#F3F7FB] group">
                    <ImageHover3D>
                      <Image
                        src="/images/hero-section/home-page-hero-section.webp"
                        alt="Happy client using hair comb after hair fixing"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 80vw, 30vw"
                      />
                    </ImageHover3D>
                  </div>
                </Card3DTilt>
              </div>
            </div>
          </SectionReveal3D>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — THE THREE PILLARS (Our Services, Our Solutions, Our Products)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                What We Offer
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Comprehensive Hair Replacement, Solutions &amp; Products
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
                Explore our complete range of non-invasive hair healing options, tailored structures, and premium maintenance products available in Trivandrum and Bangalore.
              </p>
            </div>
          </SectionReveal3D>

          {/* Left-to-Right Staggered Card Grid */}
          <StaggerGridLR
            staggerDelay={0.14}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {/* Card 1 — Our Services */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={6} depth={10} className="h-full">
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md mb-6 border border-[#E2E8F0] bg-white">
                      <Image
                        src="/images/gallery/thumb_2.webp"
                        alt="Our Services - Non-invasive hair healing options"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mb-3 text-center md:text-left">
                      Our Services
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                      Analyze our non-invasive hair healing options crafted to offer natural,soothing,and custom designed answers for baldness.Improve your look and rebuild your self-assurance with our particularly designed healing procedures.Enjoy a whole scalp of hair that looks and feels natural.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                    >
                      <span>Read more</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Card 2 — Our Solutions */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={6} depth={10} className="h-full">
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md mb-6 border border-[#E2E8F0] bg-white">
                      <Image
                        src="/images/hero-section/home-page-hero-section.webp"
                        alt="Our Solutions - Tailored hair structures and fusion"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mb-3 text-center md:text-left">
                      Our Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                      Test our tailored hair structures,hair fusion,adhesive hair clips,improving hair extensions,brilliant adhesive patches,hair adhesion,and extra services for a smooth and natural development.Get the appropriate appearance with our skillfully made alternatives made to fit your current hair seamlessly.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <Link
                      href="/solutions"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                    >
                      <span>Read more</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Card 3 — Our Products */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={6} depth={10} className="h-full">
                <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-md mb-6 border border-[#E2E8F0] bg-white">
                      <Image
                        src="/images/products/c22-solvent-hd.webp"
                        alt="Our Products - Adhesives, solvents, and hair care devices"
                        fill
                        className="object-fit group-hover:scale-110 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mb-3 text-center md:text-left">
                      Our Products
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-6">
                      Search our choice of stable adhesive tapes,solvent solvents,bonding combs, hair defend protectors,adhesive strips,detangling sprays,and first-rate hair care devices consisting of wet style gel,shine spray,pomade,and mousse for the high-quality outcomes in hair machine adhesion and renovation.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                    >
                      <span>Read more</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>
          </StaggerGridLR>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — LATEST BLOG & HAIR CARE INSIGHTS SECTION
      ═══════════════════════════════════════════════════════════ */}
      <HomeBlogSection />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — PERFECT SOLUTION FOR YOUR HAIR LOSS (CALLOUT STRIP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] py-14 sm:py-18 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
        </div>
        <SectionReveal3D yOffset={25}>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left relative z-10">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#29B6EB] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                18 years in HAIR REPLACEMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold mt-3 mb-2 text-center md:text-left">
                Perfect Solution for Your Hair Loss
              </h2>
              <p className="text-xs sm:text-base text-white/85 max-w-xl">
                We possess unparalleled expertise in the hair replacement industry -- 18 years in HAIR REPLACEMENT.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#29B6EB] mt-2">
                Customer care: 098470 62707 / +91 77360 77110
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="https://ozzonehair.com/contact/"
                className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-xs sm:text-sm px-7 min-h-[48px] rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center text-center touch-manipulation"
              >
                Please Contact Now
              </Link>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20inquire%20about%20hair%20fixing.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-6 min-h-[48px] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto flex-1 sm:flex-initial text-center touch-manipulation group"
              >
                <FaWhatsapp className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </SectionReveal3D>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — STUDIO LOCATIONS & GOOGLE MAP
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Visit Our Studios
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Locations in Trivandrum &amp; Bangalore
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
                Visit our fully private consultation chambers in Kerala and Karnataka for personalized hair healing remedies.
              </p>
            </div>
          </SectionReveal3D>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Info Cards Column with Left-to-Right Stagger */}
            <div className="lg:col-span-6">
              <StaggerGridLR staggerDelay={0.12} className="space-y-4">
                {/* Trivandrum Studio */}
                <CardRevealLR>
                  <Card3DTilt maxTilt={5} depth={8}>
                    <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#29B6EB] hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                            1
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#075078]">
                            Thiruvananthapuram Studio (Headquarters)
                          </h3>
                        </div>
                        <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                          Kerala
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-10 mb-3">
                        {SITE_INFO.address}
                      </p>
                      <div className="pl-10 text-xs text-[#075078] font-semibold space-y-1">
                        <p>Customer Care: +91 77360 77110 / +91 98470 62707</p>
                        <p className="text-[#64748B]">Landmark: Opp. Jubilee Memorial Hospital (2nd Gate Mizpah)</p>
                      </div>
                    </div>
                  </Card3DTilt>
                </CardRevealLR>

                {/* Bangalore Studio */}
                <CardRevealLR>
                  <Card3DTilt maxTilt={5} depth={8}>
                    <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-sm hover:border-[#29B6EB] hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                            2
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-[#075078]">
                            Bangalore Studio
                          </h3>
                        </div>
                        <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                          Karnataka
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#475569] leading-relaxed pl-10 mb-3">
                        {SITE_INFO.branch2}
                      </p>
                      <div className="pl-10 text-xs text-[#075078] font-semibold space-y-1">
                        <p>Phone: +91 98470 62707</p>
                        <p className="text-[#64748B]">Landmark: Double Road, HAL 2nd Stage, Indiranagar</p>
                      </div>
                    </div>
                  </Card3DTilt>
                </CardRevealLR>
              </StaggerGridLR>
            </div>

            {/* Interactive Map Column */}
            <div className="lg:col-span-6">
              <FadeInScale>
                <div className="bg-[#F8FAFC] rounded-2xl p-4 sm:p-5 border border-[#E2E8F0] shadow-sm hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs sm:text-sm font-bold text-[#075078]">
                      Ozzone Farrell Bangalore Map
                    </h4>
                    <a
                      href={SITE_INFO.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#29B6EB] hover:text-[#005675] flex items-center gap-1 transition-colors group"
                    >
                      <span>Open in Maps</span>
                      <span className="text-[11px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                    </a>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-[#E2E8F0] flex-1 min-h-[280px]">
                    <iframe
                      src={SITE_INFO.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ozzone Farrell Bangalore Location Map"
                      className="w-full h-full min-h-[280px]"
                    />
                  </div>
                </div>
              </FadeInScale>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7.5 — FREQUENTLY ASKED QUESTIONS (FAQ)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Frequently Asked Questions About Hair Fixing
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
                Clear, transparent answers about non-surgical hair fixing, custom hair patches, daily care, and booking your consultation in Trivandrum and Bangalore.
              </p>
            </div>
          </SectionReveal3D>

          <StaggerGridLR staggerDelay={0.08} className="space-y-4">
            {HOME_FAQS.map((faq, index) => (
              <CardRevealLR key={index}>
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] hover:shadow-md transition-all duration-300 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2 flex items-start gap-2.5">
                    <span className="w-6 h-6 rounded-full bg-[#005675] text-[#29B6EB] text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm sm:leading-relaxed text-[#475569] pl-8.5">
                    {faq.answer}
                  </p>
                </div>
              </CardRevealLR>
            ))}
          </StaggerGridLR>

          <SectionReveal3D delay={0.2} yOffset={20}>
            <div className="text-center mt-10">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors group"
              >
                <span>Have More Questions? Speak With Our Specialists</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </SectionReveal3D>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — FINAL HIGH-IMPACT TRANSFORMATION CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-16 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#174BA5]/40 rounded-full blur-3xl" />
        </div>

        <SectionReveal3D yOffset={30}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#29B6EB] tracking-wide mb-4">
              <span>Begin Your Hair Transformation Today</span>
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
              Ready to Regain Your Confidence &amp; Natural Look?
            </h2>

            <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a free, 100% confidential scalp evaluation with our experienced specialists in Trivandrum or Bangalore. Zero pressure, clear expert guidance, and instant results.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
              <HoverLift3D className="w-full sm:w-auto flex-1 sm:flex-initial flex">
                <Link
                  href="https://ozzonehair.com/contact/"
                  className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 min-h-[48px] sm:min-h-[52px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto text-center touch-manipulation"
                >
                  <span>Please Contact Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </HoverLift3D>

              <HoverLift3D className="w-full sm:w-auto flex-1 sm:flex-initial flex">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-8 min-h-[48px] sm:min-h-[52px] rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-center touch-manipulation group"
                >
                  <FaWhatsapp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                  <span>WhatsApp Consultation</span>
                </a>
              </HoverLift3D>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/75 mt-8 pt-6 border-t border-white/15">
              <div className="flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">✓</span>
                <span>100% Private Consulting Suites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">✓</span>
                <span>Zero-Obligation Scalp Analysis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">•</span>
                <span>Helpline: +91 77360 77110 / 9847062707</span>
              </div>
            </div>
          </div>
        </SectionReveal3D>
      </section>
    </div>
  )
}
