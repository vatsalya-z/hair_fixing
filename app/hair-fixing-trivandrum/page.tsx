import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing in Thiruvananthapuram | Best Hair Fixing Centre Trivandrum',
  description:
    'Leading hair fixing centre in Trivandrum & Thiruvananthapuram, Kerala. Custom 100% human hair patches, medical hair bonding & micro-track weaving at Palayam studio.',
  keywords: [
    'Hair Fixing in Thiruvananthapuram',
    'Hair Fixing in Trivandrum',
    'Best Hair Fixing in Trivandrum',
    'Hair Fixing Centre in Trivandrum',
    'Hair Replacement in Thiruvananthapuram',
    'Hair Replacement in Trivandrum',
    'Hair Patch in Trivandrum',
    'Hair Bonding in Trivandrum',
    'Hair Weaving in Trivandrum',
    'Non Surgical Hair Replacement in Kerala',
    'Palayam Thiruvananthapuram Hair Studio',
  ],
  alternates: {
    canonical: 'https://ozzonehair.com/hair-fixing-trivandrum/',
  },
  openGraph: {
    title: 'Hair Fixing in Thiruvananthapuram | Best Hair Fixing Centre Trivandrum',
    description:
      'Premier non-surgical hair fixing and custom hair patches in Trivandrum & Thiruvananthapuram. 100% natural human hair, instant 90-min transformation.',
    url: 'https://ozzonehair.com/hair-fixing-trivandrum/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: 'https://ozzonehair.com/hero-section/slide_1-1.png',
        width: 1200,
        height: 630,
        alt: 'Hair Fixing in Thiruvananthapuram - ozzone Hair Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing in Thiruvananthapuram | Best Hair Fixing Centre Trivandrum',
    description:
      'Leading hair fixing centre in Trivandrum & Thiruvananthapuram: custom hair patches, medical bonding & weaving.',
    images: ['https://ozzonehair.com/hero-section/slide_1-1.png'],
  },
}

const TRIVANDRUM_FAQS = [
  {
    question: 'Where is your hair fixing studio located in Trivandrum?',
    answer:
      'Our flagship Trivandrum hair fixing studio is situated at TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam, Thiruvananthapuram, Kerala 695034. We provide private client suites and convenient parking.',
  },
  {
    question: 'How is hair patch customization done in Trivandrum?',
    answer:
      'At our Trivandrum studio, each hair patch is personalized according to your individual scalp measurements, base material choice (such as breathable Swiss lace or ultra-thin skin), hair density, and styling preference. We offer a complimentary, confidential scalp consultation to assess your exact needs.',
  },
  {
    question: 'Will sweating or Kerala humid weather loosen my hair patch?',
    answer:
      'No. We exclusively apply FDA-approved, waterproof and sweat-resistant medical bonding resins (like Ultra Hold and Ghost Bond) paired with breathable French/Swiss lace bases that withstand high humidity, coastal rains, daily hot showers, and active workouts.',
  },
  {
    question: 'Is hair fixing in Trivandrum painful or surgical?',
    answer:
      'Not at all. Hair fixing is 100% non-surgical, painless, and carries zero downtime. In a single 90-minute session, a custom system matched to your natural hair density, texture, and wave is securely attached with undetectable front hairlines.',
  },
]

const trivandrumSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HairSalon',
      '@id': 'https://ozzonehair.com/hair-fixing-trivandrum/#studio',
      name: 'ozzone Hair - Hair Fixing & Hair Patch Studio Trivandrum',
      url: 'https://ozzonehair.com/hair-fixing-trivandrum/',
      telephone: SITE_INFO.phone,
      email: SITE_INFO.email,
      priceRange: '₹₹',
      image: 'https://ozzonehair.com/hero-section/slide_1-1.png',
      logo: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
      description:
        'Premier non-surgical hair fixing, custom hair patch, dermatological bonding and hair weaving center in Palayam, Trivandrum (Thiruvananthapuram), Kerala.',
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
        { '@type': 'City', name: 'Thiruvananthapuram' },
        { '@type': 'City', name: 'Trivandrum' },
        { '@type': 'AdministrativeArea', name: 'Kerala' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
        { '@type': 'ListItem', position: 2, name: 'Hair Fixing Trivandrum', item: 'https://ozzonehair.com/hair-fixing-trivandrum/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: TRIVANDRUM_FAQS.map((faq) => ({
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

export default function HairFixingTrivandrumPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trivandrumSchema) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <Link href="/services/" className="hover:text-[#005675] transition-colors">Services</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">Hair Fixing Trivandrum</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-[#005675] text-xs">
            Palayam, Thiruvananthapuram
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
            Palayam Flagship Studio • Thiruvananthapuram
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Hair Fixing in Trivandrum - Non-Surgical Hair Replacement Studio
          </h1>

          <p className="text-white/90 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Looking for natural, undetectable hair fixing in Trivandrum? ozzone Hair delivers premier non-surgical hair replacement, custom hair patches, and medical hair bonding tailored to your natural hairline, scalp shape, and lifestyle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Book Free Scalp Consultation</span>
              <span>→</span>
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20know%20more%20about%20hair%20fixing.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp Trivandrum Studio</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHY CHOOSE HAIR FIXING IN THIRUVANANTHAPURAM
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Natural Restoration
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Why Non-Surgical Hair Fixing in Trivandrum is the Preferred Solution
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Surgical hair transplants often take up to a year to reveal sparse results and involve significant incisions. In contrast, professional hair fixing in Thiruvananthapuram guarantees immediate, natural density in just 90 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                100% Natural Human Hair
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every custom hair patch in Trivandrum is crafted with Remy natural virgin hair, matched to your hair color, wave, and follicle thickness for a seamless look.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                100% Natural Human Hair
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Every custom hair patch in Trivandrum is crafted with Remy natural virgin hair, matched to your hair color, wave, and follicle thickness for a seamless look.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Sweat &amp; Waterproof Bonding
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Engineered specifically for Kerala&apos;s humid coastal climate. Enjoy swimming at Kovalam, daily showers, and sports with zero anxiety about bond strength.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                18+ Years Trusted Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Our certified trichology specialists in Palayam provide discrete, confidential consultations in private client chambers with no pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — SERVICES AT TRIVANDRUM STUDIO
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-[#F3F7FB] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Our Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Hair Fixing &amp; Patch Services at Palayam Studio
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Custom Hair Patching System
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Tailored hair patch systems utilizing ultra-thin breathable Swiss and French lace. Perfectly blended into existing hair for an invisible hairline that enables pompadours, fades, and natural comb-backs.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Learn more about Hair Patching</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Dermatological Hair Bonding
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Medical-grade hypoallergenic adhesives formulated to withstand high humidity and sweat. Secure 24/7 attachment lasting 3 to 5 weeks before requiring a routine 45-minute re-servicing.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Learn more about Hair Bonding</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Non-Surgical Hair Weaving
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Adhesive-free micro-track and micro-ring anchoring method. Ideal for clients with sensitive skin, psoriasis, or allergies who prefer a glue-free mechanical hair fixing technique.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Learn more about Hair Weaving</span>
                <span>→</span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
              <h3 className="text-xl font-bold text-[#075078] mb-2">
                Women&apos;s Crown Toppers &amp; Parting
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Discreet volume toppers crafted for female pattern thinning, wide partings, and crown hair loss. Serviced in dedicated female consultation chambers with certified stylists.
              </p>
              <Link href="/services/" className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] inline-flex items-center gap-1">
                <span>Learn more about Women&apos;s Toppers</span>
                <span>→</span>
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
                Trivandrum Studio Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-3 mb-4">
                Visit ozzone Hair Studio in Palayam, Trivandrum
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Our central studio is easily accessible from all parts of Thiruvananthapuram, including Statue, Pattom, Kowdiar, Kazhakkoottam, and East Fort.
              </p>

              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 mb-5 space-y-2 text-xs sm:text-sm">
                <p className="font-bold text-[#075078]">
                  Address:
                </p>
                <p className="text-[#475569]">
                  TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam, Thiruvananthapuram, Kerala 695034
                </p>
                <div className="pt-2 text-[#005675] font-semibold space-y-1">
                  <p>
                    <a href="tel:+917736077110" className="hover:underline">
                      📞 Phone: +91 77360 77110
                    </a>
                  </p>
                  <p className="text-[#64748B]">
                    🕒 Timing: Mon - Sat: 9:00 AM - 7:30 PM | Sunday: By Appointment
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://maps.google.com/maps?q=Palayam+Thiruvananthapuram"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs sm:text-sm"
                >
                  <span>Open in Google Maps</span>
                  <span className="text-[11px]">↗</span>
                </a>
                <Link href="/contact/" className="btn-secondary-light text-xs sm:text-sm">
                  <span>Contact Page</span>
                </Link>
              </div>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Palayam+Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ozzone Hair Trivandrum Studio Map"
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
              Local FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Frequently Asked Questions - Hair Fixing in Trivandrum
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="space-y-4">
            {TRIVANDRUM_FAQS.map((faq, index) => (
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
            Transform Your Hair at ozzone Hair Trivandrum Today
          </h2>
          <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Book your free, completely private scalp consultation. Our experienced stylists will help you choose the ideal non-surgical hair patch with zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Book Free Consultation
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp Trivandrum Studio</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
