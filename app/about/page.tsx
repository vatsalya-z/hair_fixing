import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Users, 
  CheckCircle, 
  Clock, 
  HeartHandshake, 
  MapPin,
  ArrowRight,
  Target,
  Eye,
  Scissors,
  Zap,
  Check
} from 'lucide-react'
import { SITE_INFO, SERVICES_DATA, GALLERY_ITEMS } from '@/data/siteData'
import AboutHeroImageWithTilt from '@/components/AboutHeroImageWithTilt'
import {
  FadeInUp,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  TiltCard3D,
  HoverLift3D,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'About Ozzone Hair | Hair Fixing & Replacement in Trivandrum',
  description: 'Discover Ozzone Hair, offering premier hair fixing and hair replacement solutions in Thiruvananthapuram. Explore our 14+ years experience, approach, and services.',
  alternates: {
    canonical: 'https://ozzonehair.com/about/',
  },
  openGraph: {
    title: 'About Ozzone Hair | Hair Fixing & Replacement in Trivandrum',
    description: '14+ years providing natural, undetectable hair fixing and hair replacement in Trivandrum. Certified stylists, 100% human hair systems & private consultation suites.',
    url: 'https://ozzonehair.com/about/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [
      {
        url: '/images/about-hero-specialist.jpg',
        width: 1200,
        height: 630,
        alt: 'About Ozzone Hair Studio Thiruvananthapuram',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ozzone Hair | Hair Fixing & Replacement in Trivandrum',
    description: '14+ years providing natural, undetectable hair fixing and hair replacement in Trivandrum.',
    images: ['/images/about-hero-specialist.jpg'],
  },
}

// JSON-LD Structured Data
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://ozzonehair.com/about/#aboutpage',
      url: 'https://ozzonehair.com/about/',
      name: 'About Ozzone Hair | Hair Fixing & Replacement in Trivandrum',
      description: 'Learn about Ozzone Hair Studio in Thiruvananthapuram. Over 14 years of excellence in non-surgical hair replacement, 100% human hair systems & private consultation.',
      isPartOf: {
        '@id': 'https://ozzonehair.com/#website',
      },
      about: {
        '@id': 'https://ozzonehair.com/#organization',
      },
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
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://ozzonehair.com/about/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Ozzone Hair?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ozzone Hair is Thiruvananthapuram’s premier non-surgical hair fixing and hair replacement studio, offering 100% natural human hair systems, custom hair patches, and dermatological bonding with over 14 years of trusted experience.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Ozzone Hair located in Thiruvananthapuram?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ozzone Hair operates two modern studios in Thiruvananthapuram: the main studio at 2nd Floor, Capital Centre, Opp. Secretariat, MG Road, Statue Junction, and a second branch at Pattom Medical Center Complex, Kesavadasapuram.',
          },
        },
        {
          '@type': 'Question',
          name: 'What hair fixing services does Ozzone Hair offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ozzone Hair specializes in custom hair patching, dermatological hair bonding, glue-free micro-weaving, full scalp cranial replacement systems, women’s silk crown toppers, and professional monthly maintenance servicing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can customers contact or visit Ozzone Hair?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Customers can call +91 94470 28419 or WhatsApp +91 94470 28419 to book a free, private scalp analysis consultation at either our Statue Junction or Pattom studio.',
          },
        },
      ],
    },
  ],
}

// Expertise cards data
const EXPERTISE_ITEMS = [
  {
    title: 'Custom Hair Fixing',
    desc: 'Precision fitting of featherlight hair patches tailored to your scalp contour, restoring receding hairlines and crown thinning in 90 minutes.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    href: '/services',
  },
  {
    title: 'Non-Surgical Hair Replacement',
    desc: 'Comprehensive cranial coverage for advanced Norwood 5–7 baldness and alopecia using 0.03mm micro-skin and Swiss lace bases.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    href: '/services',
  },
  {
    title: 'Hair Patch Solutions',
    desc: '100% natural human hair patches hand-tied with invisible knotting, blending seamlessly with your natural hair texture and wave.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    href: '/solutions',
  },
  {
    title: "Men's Hair Systems",
    desc: 'Custom-designed hair systems with natural graduated hairlines, custom grey percentages, and high density for men across all age groups.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    href: '/solutions',
  },
  {
    title: 'Dermatological Hair Bonding',
    desc: 'FDA-cleared medical adhesives and waterproof tapes engineered to withstand Kerala’s tropical heat, humidity, workouts, and swimming.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    href: '/services',
  },
  {
    title: 'Hair Care & Maintenance',
    desc: 'Routine monthly servicing including ultrasonic base deep cleaning, tea-tree scalp scrub detox, argan conditioning, and fresh bond reset.',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    href: '/products',
  },
]

// Why Choose Us cards data
const WHY_CHOOSE_ITEMS = [
  {
    icon: Sparkles,
    title: '100% Remy Human Hair',
    desc: 'We use exclusively 100% cuticle-intact natural human hair with zero synthetic fibers, allowing you to wash, oil, and style naturally.',
  },
  {
    icon: Clock,
    title: 'Instant 90-Minute Results',
    desc: 'Walk into our studio and walk out completely transformed in a single 90-minute visit with immediate full hair density.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Surgery & Zero Pain',
    desc: 'Completely painless and non-invasive. No scalp incisions, no injections, no donor scarring, and no recovery downtime.',
  },
  {
    icon: Users,
    title: 'Private Consultation Suites',
    desc: 'Enclosed private consultation and styling suites at both Statue Junction and Pattom to ensure 100% client privacy.',
  },
  {
    icon: HeartHandshake,
    title: 'Kerala Climate-Resistant Hold',
    desc: 'Medical-grade waterproof bonding adhesives engineered specifically to withstand Kerala’s coastal humidity, rain, and sweat.',
  },
  {
    icon: Award,
    title: 'Transparent Pricing & Care',
    desc: 'Clear upfront pricing from ₹9,999 with no hidden charges, accompanied by full ongoing maintenance and styling support.',
  },
]

// Process Steps data
const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Private Consultation',
    desc: 'A confidential scalp examination to assess hair density, thinning pattern, and your personal styling preferences.',
  },
  {
    step: '02',
    title: 'Scalp Mapping & Matching',
    desc: 'Precise cranial contour measurement and matching of hair color, wave pattern, and texture to your existing hair.',
  },
  {
    step: '03',
    title: 'Custom System Selection',
    desc: 'Selecting the ideal breathable Swiss lace, French lace, or micro-skin base suited for your scalp and lifestyle.',
  },
  {
    step: '04',
    title: 'Precision Fitting & Styling',
    desc: 'Secure dermatological bonding followed by an expert haircut, texturizing, and seamless hairline blending.',
  },
  {
    step: '05',
    title: 'Maintenance Guidance',
    desc: 'Comprehensive home-care advice with scheduled monthly studio servicing routines to keep your hair looking fresh.',
  },
]

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — ABOUT HERO (Matches Home Page Hero Language)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center">
        {/* Background ambient glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <FadeInUp delay={0.05} yOffset={20}>
                <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  About ozzone Hair Studio
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  About Ozzone Hair – Your{' '}
                  <span className="text-[#29B6EB]">Hair Fixing &amp; Hair Replacement</span>{' '}
                  Destination
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  For over 14 years, ozzone Hair Studio has pioneered non-surgical hair restoration across Thiruvananthapuram. We combine certified trichological expertise with 100% natural human hair systems to give you instant, undetectable density with zero surgery and zero downtime.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <Link href="/services" className="btn-primary">
                      Explore Our Services
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>WhatsApp Consultation</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/75 text-xs sm:text-sm">
                  {['14+ Years in Trivandrum', '100% Natural Human Hair', 'Zero Surgery & Painless', 'Private Consultation Suites'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Image with 3D Interaction */}
            <div className="flex justify-center lg:justify-end w-full">
              <AboutHeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHO WE ARE (Two-Column Layout with 3D Depth)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Photograph */}
            <div className="lg:col-span-6 w-full">
              <FadeInUp delay={0.1} className="w-full">
                <TiltCard3D maxTilt={6} depth={12} className="w-full">
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#E2E8F0] shadow-xl aspect-[4/3] min-h-[300px] sm:min-h-[380px] bg-[#075078] card-3d-interactive w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                      alt="Hair fixing consultation at Ozzone Hair Studio Thiruvananthapuram"
                      fill
                      className="object-cover image-zoom-hover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#E2E8F0]">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#005675] text-white flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-5 h-5 text-[#29B6EB]" />
                        </div>
                        <div>
                          <p className="text-[#075078] font-bold text-sm">Certified Trichology Specialists</p>
                          <p className="text-[#64748B] text-xs">Dermatologically tested medical adhesives</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </FadeInUp>
            </div>

            {/* Right Column: Business Introduction */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <FadeInUp delay={0.15}>
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-2">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] leading-tight mb-3">
                  Thiruvananthapuram&apos;s Trusted Hair Restoration Specialists
                </h2>
                <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto lg:mx-0 mb-6" />
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-base text-[#64748B] leading-relaxed">
                  Founded in Thiruvananthapuram, ozzone Hair Studio was established to provide a safe, dignified, and guaranteed alternative to invasive hair transplants and painful surgical procedures.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.25}>
                <p className="text-base text-[#64748B] leading-relaxed">
                  We specialize in custom hair patch systems, dermatological hair bonding, glue-free micro-weaving, and full cranial hair replacement. Every system is hand-crafted with 100% genuine virgin human hair, custom-fitted to your scalp contour, and precision-styled in a single 90-minute session.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0] text-center">
                    <h4 className="text-2xl font-extrabold text-[#075078]">14+ Years</h4>
                    <p className="text-xs text-[#64748B] font-medium mt-1">Clinical Practice in Trivandrum</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0] text-center">
                    <h4 className="text-2xl font-extrabold text-[#005675]">12,500+</h4>
                    <p className="text-xs text-[#64748B] font-medium mt-1">Transformations in Kerala</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>

          {/* Centered CTA Button */}
          <FadeInUp delay={0.35} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/contact" className="btn-primary">
                Book a Free Scalp Consultation
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — OUR STORY (Genuine Background & Milestones)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                14+ Years of Restoring Confidence in Kerala
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                From a single private consultation room in Statue Junction to Thiruvananthapuram’s most trusted non-surgical hair replacement destination.
              </p>
            </FadeInUp>
          </div>

          {/* Story Visual Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: '2012',
                title: 'The Foundation',
                desc: 'Established our first studio at Statue Junction, MG Road, addressing the growing demand for non-surgical hair restoration in Trivandrum.',
              },
              {
                year: '2016',
                title: 'Swiss Lace Technology',
                desc: 'Introduced breathable, ultra-lightweight European and Swiss lace bases engineered specifically for Kerala’s tropical heat and humidity.',
              },
              {
                year: '2020',
                title: 'Pattom Branch Opening',
                desc: 'Expanded with a secondary studio at Pattom Medical Center Complex, featuring dedicated private suites for women’s crown toppers.',
              },
              {
                year: 'Present',
                title: '12,500+ Transformations',
                desc: 'Proudly serving thousands of professionals, students, and brides across Kerala with 100% natural human hair solutions.',
              },
            ].map((milestone, idx) => (
              <FadeInUp key={milestone.year} delay={idx * 0.1}>
                <TiltCard3D maxTilt={6} depth={10}>
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                    <div>
                      <span className="inline-block bg-[#005675] text-[#29B6EB] text-xs font-bold px-3 py-1 rounded-full mb-4">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#075078] mb-2">{milestone.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </TiltCard3D>
              </FadeInUp>
            ))}
          </div>

          {/* Centered CTA */}
          <FadeInUp delay={0.3} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/gallery" className="btn-primary">
                View Client Transformations
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — OUR MISSION AND VISION (3D Interactive Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Guiding Principles
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Our Mission &amp; Vision
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Driven by trichological precision, patient confidentiality, and world-class aesthetic excellence.
              </p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <FadeInUp delay={0.1}>
              <TiltCard3D maxTilt={7} depth={15}>
                <div className="bg-[#F3F7FB] border border-[#E2E8F0] p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#005675] text-white flex items-center justify-center mb-6 shadow-md">
                      <Target className="w-7 h-7 text-[#29B6EB]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#29B6EB] block mb-2">
                      Our Core Purpose
                    </span>
                    <h3 className="text-2xl font-bold text-[#075078] mb-4">
                      Empowering Natural Confidence Without Surgery
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Our mission is to eliminate the emotional distress of hair loss by providing safe, 100% natural virgin human hair systems in a comfortable, private setting. We commit to instant results, zero surgical risk, transparent pricing, and complete aftercare support for every client.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#075078] font-semibold">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB]" />
                    <span>Instant Results • Zero Surgery • Honest Care</span>
                  </div>
                </div>
              </TiltCard3D>
            </FadeInUp>

            {/* Vision Card */}
            <FadeInUp delay={0.2}>
              <TiltCard3D maxTilt={7} depth={15}>
                <div className="bg-[#F3F7FB] border border-[#E2E8F0] p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#005675] text-white flex items-center justify-center mb-6 shadow-md">
                      <Eye className="w-7 h-7 text-[#29B6EB]" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#29B6EB] block mb-2">
                      Our Aspiration
                    </span>
                    <h3 className="text-2xl font-bold text-[#075078] mb-4">
                      Kerala&apos;s Gold Standard in Hair Replacement
                    </h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      Our vision is to remain South India’s most trusted non-surgical hair restoration studio, setting the benchmark for clinical hygiene, custom base engineering, and undetectable hairlines while removing the social stigma surrounding hair loss.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#075078] font-semibold">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB]" />
                    <span>Highest Quality • Complete Confidentiality • Excellence</span>
                  </div>
                </div>
              </TiltCard3D>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — OUR EXPERTISE (Grid of Specialized Services)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Specialized Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Our Areas of Hair Restoration Expertise
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Comprehensive non-surgical solutions engineered for Kerala’s climate and customized to your exact degree of hair loss.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <TiltCard3D maxTilt={6} depth={10}>
                  <Link
                    href={item.href}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive block h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/10] min-h-[180px] sm:min-h-[200px] overflow-hidden bg-[#075078]">
                        <Image
                          src={item.image}
                          alt={`${item.title} at Ozzone Hair Thiruvananthapuram`}
                          fill
                          className="object-cover image-zoom-hover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#64748B] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <span className="inline-flex items-center text-xs font-bold text-[#005675] group-hover:text-[#29B6EB] transition-colors">
                        Learn More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered CTA */}
          <FadeInUp delay={0.3} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/solutions" className="btn-primary">
                Explore All Solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — WHY CHOOSE US (Verified Strengths & Features)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                The ozzone Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Why Trivandrum Chooses ozzone Hair
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Built on clinical hygiene, medical safety, and authentic 100% human hair craftsmanship.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => {
              const IconComp = item.icon
              return (
                <StaggerItem key={item.title}>
                  <TiltCard3D maxTilt={6} depth={10}>
                    <div className="bg-[#F3F7FB] p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-[#005675] text-white flex items-center justify-center mb-5 shadow-sm">
                          <IconComp className="w-6 h-6 text-[#29B6EB]" />
                        </div>
                        <h3 className="text-lg font-bold text-[#075078] mb-2">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </TiltCard3D>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          {/* Centered CTA */}
          <FadeInUp delay={0.25} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/pricing" className="btn-primary">
                View Pricing Packages
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — OUR APPROACH / PROCESS (5-Step Visual Flow)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Seamless Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Our 5-Step Hair Transformation Process
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                How we guide you from your initial private consultation to an undetectable natural hairline in 90 minutes.
              </p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <FadeInUp key={step.step} delay={idx * 0.1}>
                <TiltCard3D maxTilt={6} depth={10}>
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-base font-bold text-[#075078] mb-2">{step.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </TiltCard3D>
              </FadeInUp>
            ))}
          </div>

          {/* Centered CTA */}
          <FadeInUp delay={0.3} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/contact" className="btn-primary">
                Book Your 90-Minute Session
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — OUR SERVICES PREVIEW (Matching Home Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Core Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Our Hair Fixing &amp; Replacement Services
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Select from our proven techniques designed for maximum breathability and undetectable hairlines.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <StaggerItem key={service.id}>
                <TiltCard3D maxTilt={7} depth={10}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group ronex-card overflow-hidden block h-full card-3d-interactive border border-[#E2E8F0]"
                  >
                    <div className="relative aspect-[4/3] min-h-[160px] sm:min-h-[180px] bg-[#075078] overflow-hidden">
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

          {/* Centered CTA */}
          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/services" className="btn-primary">
                View All Services
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9 — OUR GALLERY PREVIEW (Real Results & Zoom)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Proven Results
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Real Client Transformations
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto mb-4" />
              <p className="text-[#64748B] text-sm max-w-xl mx-auto">
                Witness real before and after results from our Statue Junction and Pattom studios.
              </p>
            </FadeInUp>
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
            {GALLERY_ITEMS.slice(0, 4).map((item, i) => (
              <StaggerItem key={item.id}>
                <TiltCard3D maxTilt={6} depth={10}>
                  <Link
                    href="/gallery"
                    className="group ronex-card overflow-hidden block h-full card-3d-interactive border border-[#E2E8F0] shadow-md hover:shadow-2xl transition-all duration-300 rounded-2xl"
                  >
                    <div className="relative aspect-[4/3] min-h-[180px] sm:min-h-[220px] bg-[#075078] overflow-hidden">
                      <Image
                        src={item.afterImg}
                        alt={`${item.solutionProvided} result ${i + 1} at ozzone Hair Thiruvananthapuram`}
                        fill
                        className="object-cover image-zoom-hover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                        <span className="inline-block bg-[#005675] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded mb-1.5 shadow-sm">
                          After Result
                        </span>
                        <p className="text-white font-bold text-xs sm:text-base drop-shadow line-clamp-1">
                          {item.solutionProvided}
                        </p>
                      </div>
                    </div>
                  </Link>
                </TiltCard3D>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Centered CTA */}
          <FadeInUp delay={0.2} className="text-center mt-8 sm:mt-10 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/gallery" className="btn-primary">
                Explore Full Gallery
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — FINAL CTA BANNER (Full Width Hero Gradient)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Let&apos;s Find the{' '}
              <span className="text-[#29B6EB]">Right Hair Solution</span>{' '}
              for You
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our team to explore hair fixing and hair replacement options in Thiruvananthapuram. No obligation, no pressure — just honest expert advice in a private suite.
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
                  <span>WhatsApp Consultation</span>
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
    </div>
  )
}
