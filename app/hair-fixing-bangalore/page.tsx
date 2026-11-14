import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  MapPin,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Scissors,
  ArrowRight,
  ExternalLink,
  Award,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing in Bangalore | Non-Surgical Hair Patch Studio',
  description:
    'Leading hair fixing in Bangalore: custom hair patch, medical bonding & non-surgical hair replacement in Indiranagar. Book your free scalp consultation!',
  alternates: {
    canonical: 'https://ozzonehair.com/hair-fixing-bangalore/',
  },
  openGraph: {
    title: 'Hair Fixing in Bangalore | Non-Surgical Hair Patch Studio',
    description:
      'Premier non-surgical hair fixing and custom hair patches in Bangalore (Bengaluru). 100% natural human hair, instant 90-min transformation in Indiranagar.',
    url: 'https://ozzonehair.com/hair-fixing-bangalore/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: 'https://ozzonehair.com/hero-section/slide_1-1.png',
        width: 1200,
        height: 630,
        alt: 'Hair Fixing in Bangalore - ozzone Farrell Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing in Bangalore | Non-Surgical Hair Patch Studio',
    description:
      'Leading non-surgical hair fixing in Bangalore: custom hair patches, medical bonding & hair replacement in Indiranagar.',
    images: ['https://ozzonehair.com/hero-section/slide_1-1.png'],
  },
}

const BANGALORE_FAQS = [
  {
    question: 'Where is your hair fixing studio located in Bangalore?',
    answer:
      'Our Bangalore studio (Ozzone Farrell) is located at Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008. Dedicated client parking is available.',
  },
  {
    question: 'How long does a hair fixing session take at your Bangalore studio?',
    answer:
      'A complete hair fixing and styling session takes approximately 90 to 120 minutes. It includes scalp analysis, precision fitting, medical bonding, and customized haircut styling by senior stylists.',
  },
  {
    question: 'Can I exercise, play sports, and shower with a hair patch in Bangalore?',
    answer:
      'Yes, 100%. Our dermatological adhesives are completely waterproof and sweat-resistant. Bangalore clients routinely work out, jog, swim, and take hot showers without any risk of detachment.',
  },
  {
    question: 'How frequently does a hair system require maintenance in Bangalore?',
    answer:
      'A routine servicing session is recommended every 3 to 5 weeks. Our technicians remove the system, deep clean and condition the hair unit, trim your growing natural hair, and re-bond it securely.',
  },
]

const bangaloreSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': 'https://ozzonehair.com/hair-fixing-bangalore/#studio',
      name: 'ozzone Farrell - Hair Fixing & Hair Replacement Bangalore',
      url: 'https://ozzonehair.com/hair-fixing-bangalore/',
      telephone: '+91 98470 62707',
      email: SITE_INFO.email,
      priceRange: '₹₹',
      image: 'https://ozzonehair.com/hero-section/slide_1-1.png',
      logo: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
      description:
        'Premier non-surgical hair fixing, custom hair patch, dermatological bonding and hair weaving center in Indiranagar, Bengaluru, Karnataka.',
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
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'City', name: 'Bangalore' },
        { '@type': 'AdministrativeArea', name: 'Karnataka' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hair Fixing Bangalore', item: 'https://ozzonehair.com/hair-fixing-bangalore/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: BANGALORE_FAQS.map((faq) => ({
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

export default function HairFixingBangalorePage() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bangaloreSchema) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#005675] transition-colors">Services</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">Hair Fixing Bangalore</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-[#005675] text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#29B6EB]" />
            Indiranagar, Bengaluru
          </span>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#29B6EB]/30 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5" />
            Indiranagar Studio • Bengaluru
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Hair Fixing in Bangalore - Non-Surgical Hair Replacement Studio
          </h1>

          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience undetectable, premium hair fixing in Bangalore at ozzone Farrell. We specialize in custom 100% natural human hair patches, medical-grade hair bonding, and discrete scalp styling in Indiranagar.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Book Free Scalp Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Bangalore%2C%20I%20would%20like%20to%20know%20more%20about%20hair%20fixing.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp Bangalore Studio</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHY BANGALORE PROFESSIONALS CHOOSE OZZONE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Confidence Restored
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Why IT Professionals &amp; Youth in Bangalore Choose Hair Fixing
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Fast-paced lifestyles, tech stress, and early male pattern baldness affect thousands of young adults across Bengaluru. Non-surgical hair fixing offers an instant, painless solution without taking medical leave or waiting months for hair growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Instant 90-Minute Results
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Walk into our Indiranagar studio and walk out the same day with a full head of thick, buoyant hair styled to your exact preference.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Zero Medical Risks
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Completely non-invasive with zero incisions, scars, or systemic medications. Reversible, safe, and dermatologically approved.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Undetectable Natural Hairline
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Hand-tied single knotting on French and Swiss lace bases mirrors natural root emergence, even under bright office and sunlight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — SERVICES AT BANGALORE STUDIO
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F3F7FB] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Our Bangalore Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Hair Fixing &amp; Patch Services in Indiranagar
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Custom Hair Patching System
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Custom-molded crown and hairline patches constructed with premium human hair. Styled to complement modern executive cuts and fades for working professionals.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Explore Hair Patch Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Dermatological Hair Bonding
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Waterproof and heat-resistant medical bonding suited for Bangalore&apos;s active lifestyle. Withstands daily gym workouts, pool sessions, and weekend getaways.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Explore Hair Bonding</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Non-Surgical Hair Weaving
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Micro-ring attachment method designed for clients preferring glue-free fixation. Interlocks securely with remaining roots without chemical adhesives.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Explore Hair Weaving</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Routine Servicing &amp; Scalp Spa
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Comprehensive 45-minute monthly grooming: adhesive detox, conditioning hair mask, natural hair trim, and refreshed re-bonding.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Explore Servicing &amp; Spa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — LOCAL STUDIO LOCATION & MAP
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Bangalore Studio Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-3 mb-4">
                Visit Ozzone Farrell Studio in Indiranagar, Bengaluru
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Centrally positioned in HAL 2nd Stage, Indiranagar, with quick access from Koramangala, Domlur, Whitefield, MG Road, and Marathahalli.
              </p>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 mb-5 space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-[#075078]">
                  Address:
                </p>
                <p className="text-[#475569]">
                  Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008
                </p>
                <div className="pt-2 text-[#005675] font-semibold space-y-1">
                  <p>
                    <a href="tel:+919847062707" className="hover:underline">
                      📞 Phone: +91 98470 62707
                    </a>
                  </p>
                  <p className="text-[#64748B]">
                    🕒 Timing: Mon - Sat: 9:00 AM - 7:30 PM | Sunday: By Appointment
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE_INFO.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs sm:text-sm"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link href="/contact/" className="btn-secondary-light text-xs sm:text-sm">
                  <span>Contact Page</span>
                </Link>
              </div>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
              <iframe
                src={SITE_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ozzone Farrell Bangalore Studio Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — LOCAL FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Bangalore FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Frequently Asked Questions - Hair Fixing in Bangalore
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="space-y-4">
            {BANGALORE_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#29B6EB] transition-colors shadow-xs"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-14 sm:py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4">
            Transform Your Hair at ozzone Farrell Bangalore Today
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Book your free, private scalp consultation in Indiranagar. Our certified specialists will guide you through custom hair systems with zero pressure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Bangalore%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp Bangalore Studio</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
