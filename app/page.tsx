import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO, SERVICES_DATA, BLOG_POSTS, FAQS_DATA } from '@/data/siteData'
import HeroImageWithTilt from '@/components/HeroImageWithTilt'
import {
  FadeInUp,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  TiltCard3D,
  HoverLift3D,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio Trivandrum',
  description: 'Premier non-surgical hair fixing, custom hair patch, bonding & hair replacement in Thiruvananthapuram, Kerala. 100% human hair, zero surgery, 90-min results.',
  alternates: {
    canonical: 'https://ozzonehair.com/',
  },
  openGraph: {
    title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio Trivandrum',
    description: 'Premier non-surgical hair fixing, custom hair patch, bonding & hair replacement in Thiruvananthapuram, Kerala. 100% human hair, zero surgery, 90-min results.',
    url: 'https://ozzonehair.com/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing in Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Premier non-surgical hair fixing & hair replacement in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

// ─── Minimal inline icon helpers ────────────────────────────────────────────
function CheckCircle() {
  return (
    <svg className="w-5 h-5 text-[#29B6EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

// ─── Why Choose Us data ────────────────────────────────────────────────────
const WHY_US = [
  {
    icon: '🎯',
    title: 'Precision Custom Fitting',
    desc: 'Every hair system is crafted from a scalp template unique to you — zero guesswork.',
  },
  {
    icon: '💧',
    title: '100% Human Hair Only',
    desc: 'We use exclusively Remy virgin human hair. Never synthetic. Never compromised.',
  },
  {
    icon: '🛡️',
    title: 'Medically Safe Materials',
    desc: 'FDA-approved, dermatologically tested adhesives and lace bases. Safe for all skin types.',
  },
  {
    icon: '⚡',
    title: 'Instant 90-Min Transformation',
    desc: 'Walk in with thinning hair. Walk out with a full natural head of hair — same day.',
  },
  {
    icon: '🔒',
    title: 'Private Consultation Suites',
    desc: 'Fully private, discreet treatment rooms for every client — zero awkwardness.',
  },
  {
    icon: '🔄',
    title: 'Lifetime Maintenance Support',
    desc: 'Monthly re-bonding, deep conditioning, and expert restyling keep your look perfect.',
  },
]

// ─── Solutions (image + title only for homepage) ────────────────────────────
const SOLUTIONS_PREVIEW = [
  {
    title: 'Hair Replacement',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
  {
    title: 'Hair Fixing',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
  {
    title: 'Hair Patch',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
  {
    title: 'Hair Bonding',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
  {
    title: 'Hair Systems',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
  {
    title: 'Hair Extensions',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=600&q=80',
    href: '/solutions',
  },
]

// ─── Gallery preview images ────────────────────────────────────────────────
const GALLERY_PREVIEW = [
  'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
]

// JSON-LD for homepage (WebPage + FAQPage + BreadcrumbList)
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://ozzonehair.com/#webpage',
      url: 'https://ozzonehair.com/',
      name: 'Hair Fixing in Thiruvananthapuram | ozzone Hair Studio',
      description: 'Premier non-surgical hair fixing, hair patching, bonding & hair replacement clinic in Thiruvananthapuram, Kerala.',
      isPartOf: {
        '@id': 'https://ozzonehair.com/#website',
      },
      about: {
        '@id': 'https://ozzonehair.com/#organization',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is hair fixing in Thiruvananthapuram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hair fixing is a non-surgical procedure where a custom hair patch or system is applied to cover bald or thinning areas using medical adhesive, bonding, or weaving methods. ozzone Hair in Thiruvananthapuram offers all types of hair fixing solutions.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does hair replacement cost in Trivandrum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hair replacement costs in Thiruvananthapuram start from ₹9,999 for custom hair patches. Full scalp systems start from ₹18,500. Book a free consultation for a personalised quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you swim and shower with a hair patch in Kerala?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Medical-grade waterproof adhesives withstand swimming, gym workouts, showering, and Kerala\'s humid coastal climate without loosening.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between hair fixing and hair transplant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Hair fixing is completely non-surgical and gives instant 100% hair density in 90 minutes with zero downtime. Hair transplants involve surgery, pain, donor scarring, and take 9-12 months for uncertain results.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://ozzonehair.com/',
        },
      ],
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO (3D Tilt & Scroll Polish)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[79vh] flex items-center">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14 relative w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left — Copy with Staggered Fade Up */}
            <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <FadeInUp delay={0.05} yOffset={20}>
                <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  #1 Non-Surgical Hair Studio in Trivandrum
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Advanced Hair Fixing &amp; Hair Replacement Solutions in Thiruvananthapuram
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  Instant, undetectable, 100% natural human hair systems — customised to your scalp. No surgery. No side effects. Walk out transformed in just 90 minutes.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp text-base px-6 py-3"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      Book a Consultation
                    </a>
                  </HoverLift3D>
                  <HoverLift3D>
                    <Link href="/services" className="btn-secondary-dark text-base px-6 py-3">
                      Explore Services
                      <ArrowRight />
                    </Link>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust row */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/75 text-xs sm:text-sm">
                  {['100% Human Hair', 'Non-Surgical & Safe', 'Instant Same-Day Results', 'Private Consultation'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      {t}
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right — Image with 3D Tilt */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <HeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ABOUT INTRO
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header */}
          <FadeInUp>
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                About ozzone Hair
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] leading-tight mb-3">
                Thiruvananthapuram&apos;s Trusted{' '}
                <span className="text-[#29B6EB]">Hair Fixing</span> Studio
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full" />
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — Image with 3D Card Hover */}
            <FadeInScale>
              <TiltCard3D maxTilt={6} depth={12}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl border border-[#E2E8F0]">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80"
                    alt="ozzone Hair specialist consulting a client at Thiruvananthapuram studio"
                    fill
                    className="object-cover image-zoom-hover"
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#075078]/10 to-transparent pointer-events-none" />
                </div>
              </TiltCard3D>
            </FadeInScale>

            {/* Right — Copy */}
            <FadeInUp delay={0.15}>
              <div>
                <p className="text-[#64748B] leading-relaxed mb-5">
                  At ozzone Hair, we specialise exclusively in non-surgical hair fixing and replacement solutions for men and women across Thiruvananthapuram. Our certified hair specialists combine advanced techniques with premium materials to deliver completely natural, undetectable results.
                </p>
                <p className="text-[#64748B] leading-relaxed mb-8">
                  Whether you&apos;re experiencing early thinning or complete baldness, we have a personalised solution crafted precisely for your scalp, lifestyle, and aesthetic goals. Walk in for a complimentary, private consultation today.
                </p>

                <ul className="space-y-3">
                  {[
                    'Exclusive non-surgical hair fixing specialists',
                    'Certified hair replacement technicians',
                    'Two convenient Thiruvananthapuram locations',
                    'Private consultation rooms for men and women',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#252B38]">
                      <CheckCircle />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>

          {/* Centered CTA Button below section content like other sections */}
          <FadeInUp delay={0.25} className="text-center mt-8 sm:mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/about" className="btn-primary">
                Learn About Us
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — OUR SERVICES (3D Cards + Image & Heading Only)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Our Services</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                Professional hair restoration services tailored to every hair loss stage and lifestyle.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {SERVICES_DATA.map((service) => (
              <StaggerItem key={service.id}>
                <TiltCard3D maxTilt={7} depth={10}>
                  <Link
                    href="/services"
                    className="group ronex-card overflow-hidden block h-full card-3d-interactive"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.title} in Thiruvananthapuram`}
                        fill
                        className="object-cover image-zoom-hover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/85 via-[#075078]/25 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                        <h3 className="text-white font-bold text-xs sm:text-base leading-tight drop-shadow">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/services" className="btn-primary">
                View All Services
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — WHY CHOOSE US (3D Elevation & Micro-interactions)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                The ozzone Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Why Choose Us?</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                We combine decades of expertise, premium materials, and genuine care for every client&apos;s hair journey.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {WHY_US.map((item) => (
              <StaggerItem key={item.title}>
                <div className="group ronex-card p-3.5 sm:p-6 h-full card-3d-interactive flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#F3F7FB] group-hover:bg-[#075078]/10 group-hover:scale-110 flex items-center justify-center mb-3 sm:mb-5 transition-all duration-300 text-xl sm:text-3xl">
                      {item.icon}
                    </div>
                    <h3 className="text-[#075078] font-bold text-xs sm:text-lg mb-1 sm:mb-2 group-hover:text-[#174BA5] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-[#64748B] text-[11px] sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — OUR HAIR SOLUTIONS (3D Portrait Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Tailored for Every Stage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Our Hair Solutions</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                From hair patches to full replacement systems — every solution is built around your unique needs.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
            {SOLUTIONS_PREVIEW.map((sol) => (
              <StaggerItem key={sol.title}>
                <TiltCard3D maxTilt={7} depth={10}>
                  <Link
                    href={sol.href}
                    className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-2xl transition-all duration-300 block card-3d-interactive"
                  >
                    <Image
                      src={sol.image}
                      alt={`${sol.title} in Thiruvananthapuram`}
                      fill
                      className="object-cover image-zoom-hover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/85 via-[#075078]/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <h3 className="text-white font-bold text-xs sm:text-base drop-shadow leading-tight">{sol.title}</h3>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/solutions" className="btn-primary">
                Explore All Solutions
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — OUR PRODUCTS (Interactive 3D Mouse Tilt)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Hair System Care &amp; Maintenance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Our Products</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                Click the Products to view details
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-2 max-w-3xl mx-auto gap-3 sm:gap-8">
            <FadeInUp delay={0.1}>
              <TiltCard3D maxTilt={10} depth={15}>
                <Link
                  href="/products#c22-solvent"
                  className="group ronex-card overflow-hidden block bg-[#005675] h-full card-3d-interactive border border-[#005675]/30 shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-3 sm:p-6">
                    <Image
                      src="/images/products/c22-solvent.webp"
                      alt="C22 solvent – citrus solution for cleaning hair systems"
                      fill
                      className="object-contain p-2 sm:p-6 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#005675]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="p-3 sm:p-5 text-center bg-[#005675] group-hover:bg-[#174BA5] transition-colors duration-300">
                    <h3 className="text-white font-bold text-sm sm:text-xl leading-tight">
                      C22 solvent
                    </h3>
                  </div>
                </Link>
              </TiltCard3D>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <TiltCard3D maxTilt={10} depth={15}>
                <Link
                  href="/products#ultrahold"
                  className="group ronex-card overflow-hidden block bg-[#005675] h-full card-3d-interactive border border-[#005675]/30 shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-white flex items-center justify-center p-3 sm:p-6">
                    <Image
                      src="/images/products/ultrahold.jpg"
                      alt="ULTRAHOLD – hair system bonding adhesive"
                      fill
                      className="object-contain p-2 sm:p-6 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#005675]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="p-3 sm:p-5 text-center bg-[#005675] group-hover:bg-[#174BA5] transition-colors duration-300">
                    <h3 className="text-white font-bold text-sm sm:text-xl leading-tight">
                      ULTRAHOLD
                    </h3>
                  </div>
                </Link>
              </TiltCard3D>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.3} className="text-center mt-8 sm:mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/products" className="btn-primary">
                View All Products
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — GALLERY PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Real Transformations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Gallery</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                See the results for yourself — natural, undetectable hair transformations from our Thiruvananthapuram studio.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {GALLERY_PREVIEW.map((img, i) => (
              <StaggerItem key={i}>
                <TiltCard3D maxTilt={6} depth={8}>
                  <Link
                    href="/gallery"
                    className="group relative rounded-xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-all duration-300 block card-3d-interactive"
                  >
                    <Image
                      src={img}
                      alt={`Hair transformation result ${i + 1} at ozzone Hair Thiruvananthapuram`}
                      fill
                      className="object-cover image-zoom-hover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[#075078]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm px-4 py-2 rounded-lg bg-[#29B6EB]/80 backdrop-blur-sm shadow-md">
                        View Gallery
                      </span>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/gallery" className="btn-primary">
                Explore Full Gallery
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — VIDEO SHOWCASE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                See It In Action
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Watch the Transformation
              </h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                A behind-the-scenes look at how we craft and apply a custom hair system in our Thiruvananthapuram studio.
              </p>
            </div>
          </FadeInUp>

          <FadeInScale>
            <TiltCard3D maxTilt={4} depth={10}>
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl bg-[#075078] group cursor-pointer border border-[#E2E8F0]">
                <Image
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80"
                  alt="Hair fixing process video thumbnail at ozzone Hair Thiruvananthapuram"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-300 image-zoom-hover"
                  sizes="90vw"
                />
                {/* Play button with 3D pulse & hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/25 backdrop-blur-md border-2 border-white flex items-center justify-center group-hover:scale-115 group-hover:bg-[#29B6EB]/80 transition-all duration-300 shadow-2xl">
                    <svg className="w-6 h-6 sm:w-9 sm:h-9 text-white ml-0.5 sm:ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="text-white font-semibold text-xs sm:text-lg drop-shadow line-clamp-1 sm:line-clamp-none">90-Minute Hair Transformation at ozzone Hair, Thiruvananthapuram</p>
                  <p className="text-white/80 text-[10px] sm:text-sm hidden xs:block">Non-surgical hair fixing — step by step</p>
                </div>
              </div>
            </TiltCard3D>
          </FadeInScale>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — LATEST BLOGS (6 Articles with 3D Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Hair Care Insights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Latest From the Blog</h2>
              <p className="text-[#64748B] max-w-xl mx-auto text-sm">
                Expert tips, guides, and insights on hair fixing, care, and maintenance from our specialists.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {BLOG_POSTS.slice(0, 6).map((post) => (
              <StaggerItem key={post.id}>
                <TiltCard3D maxTilt={6} depth={8}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group ronex-card overflow-hidden block h-full card-3d-interactive bg-[#005675] border border-[#005675]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover image-zoom-hover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#005675]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-3 sm:p-5 bg-[#005675] group-hover:bg-[#174BA5] transition-colors duration-300 min-h-[56px] sm:min-h-[88px] flex items-center">
                      <h3 className="text-white font-bold text-xs sm:text-base leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/blog" className="btn-primary">
                Read All Articles
                <ArrowRight />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — FAQ PREVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Common Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Frequently Asked Questions</h2>
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Everything you need to know about hair fixing and replacement in Thiruvananthapuram.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div className="space-y-3">
              {FAQS_DATA.slice(0, 5).map((faq, i) => (
                <details key={i} className="group border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#29B6EB]">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-[#075078] font-semibold text-sm hover:bg-[#F3F7FB] transition-colors list-none">
                    <span className="pr-4">{faq.question}</span>
                    <span className="text-[#29B6EB] transition-transform group-open:rotate-45 text-2xl leading-none flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-[#64748B] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4 bg-white">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2} className="text-center mt-8 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/faq" className="btn-secondary-light">
                View All FAQs
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 — LOCATION & CONTACT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#F3F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">Our Location</h2>
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Visit us at our Thiruvananthapuram studio for a free hair analysis and personalised consultation.
              </p>
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Info Card with 3D Elevation */}
            <FadeInUp delay={0.1} className="h-full">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2E8F0] card-3d-interactive h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#075078] mb-6">Studio Information</h3>

                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F3F7FB] flex items-center justify-center flex-shrink-0 text-lg">📍</div>
                      <div>
                        <p className="font-semibold text-[#252B38] text-sm mb-1">Main Studio</p>
                        <p className="text-[#64748B] text-sm leading-relaxed">{SITE_INFO.address}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F3F7FB] flex items-center justify-center flex-shrink-0 text-lg">📍</div>
                      <div>
                        <p className="font-semibold text-[#252B38] text-sm mb-1">Branch</p>
                        <p className="text-[#64748B] text-sm leading-relaxed">{SITE_INFO.branch2}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F3F7FB] flex items-center justify-center flex-shrink-0 text-lg">📞</div>
                      <div>
                        <p className="font-semibold text-[#252B38] text-sm mb-1">Phone</p>
                        <a href={`tel:${SITE_INFO.phone}`} className="text-[#005675] text-sm hover:text-[#29B6EB] transition-colors">{SITE_INFO.phone}</a>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F3F7FB] flex items-center justify-center flex-shrink-0 text-lg">🕒</div>
                      <div>
                        <p className="font-semibold text-[#252B38] text-sm mb-1">Timings</p>
                        <p className="text-[#64748B] text-sm leading-relaxed">{SITE_INFO.timing}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <HoverLift3D className="w-full sm:flex-1">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp w-full justify-center"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      WhatsApp Us
                    </a>
                  </HoverLift3D>
                  <HoverLift3D className="w-full sm:flex-1">
                    <Link href="/contact" className="btn-secondary-light w-full text-center justify-center">
                      Contact Page
                    </Link>
                  </HoverLift3D>
                </div>
              </div>
            </FadeInUp>

            {/* Map with 3D Card Hover (Full Height matching left card) */}
            <FadeInUp delay={0.2} className="h-full">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0] h-full min-h-[340px] card-3d-interactive flex flex-col">
                <iframe
                  src={SITE_INFO.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ozzone Hair Thiruvananthapuram Location Map"
                  className="w-full h-full min-h-[340px] flex-1"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12 — FINAL CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Start Your{' '}
              <span className="text-[#29B6EB]">Hair Transformation</span>{' '}
              Journey Today
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free, private hair analysis consultation with our certified specialists in Thiruvananthapuram. No obligation, no pressure — just honest expert advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <HoverLift3D>
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-base px-8 py-3.5"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  Book a Free Consultation
                </a>
              </HoverLift3D>
              <HoverLift3D>
                <Link href="/contact" className="btn-secondary-dark text-base px-8 py-3.5">
                  Contact Us
                </Link>
              </HoverLift3D>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
