import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { SERVICES_DATA, SITE_INFO } from '@/data/siteData'
import ServicesHeroImageWithTilt from '@/components/ServicesHeroImageWithTilt'

export const metadata: Metadata = {
  title: 'Best Hair Fixing in Trivandrum and Bangalore | Ozzone Hair',
  description: '18+ years in non-surgical hair replacement & hair fixing in Trivandrum and Bangalore. 100% natural virgin human hair systems, undetectable results, and zero surgery.',
  alternates: {
    canonical: 'https://ozzonehair.com/services/',
  },
  openGraph: {
    title: 'Best Hair Fixing in Trivandrum & Bangalore | Ozzone Hair Studio',
    description: '18+ years expertise in non-surgical hair fixing, custom hair systems, and hair bonding in Trivandrum & Bangalore. Walk out with full hair in 90 minutes.',
    url: 'https://ozzonehair.com/services/',
    siteName: 'Ozzone Hair Studio',
    images: [{ url: '/images/services-hero.jpg', width: 1200, height: 630, alt: 'Best Hair Fixing in Trivandrum and Bangalore' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hair Fixing in Trivandrum and Bangalore | Ozzone Hair',
    description: 'Instant, non-surgical hair replacement systems in Trivandrum and Bangalore. 100% natural human hair.',
    images: ['/images/services-hero.jpg'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Fixing & Non-Surgical Hair Replacement in Trivandrum and Bangalore',
  description: 'Comprehensive hair replacement and fixing techniques at Ozzone Hair Studio Trivandrum and Bangalore',
  itemListElement: SERVICES_DATA.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.title,
    description: service.shortDesc,
    provider: {
      '@type': 'HairSalon',
      name: 'Ozzone Hair Studio',
      url: 'https://ozzonehair.com/',
    },
    areaServed: [
      { '@type': 'City', name: 'Thiruvananthapuram' },
      { '@type': 'City', name: 'Bangalore' },
    ],
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ozzonehair.com/services/' },
  ],
}

const servicesFaqs = [
  {
    q: 'How does hair fixing at Ozzone Hair work in Trivandrum and Bangalore?',
    a: 'Hair fixing is an instant, non-surgical procedure where a high-grade 100% natural human hair system is custom-designed and attached to your scalp using hypoallergenic bonding fluids, micro-tracks, or clips. It blends seamlessly with your existing hair, restoring full density and youthful hairline in a single 90-minute session.',
  },
  {
    q: 'What are the main advantages of hair fixing compared to hair transplant surgery?',
    a: 'Unlike hair transplants which require invasive surgery, scalp incisions, donor follicles, and months of waiting with unpredictable growth, hair fixing gives immediate results in 90 minutes, involves zero surgery, zero pain, zero downtime, and is 100% reversible.',
  },
  {
    q: 'How long does a hair system stay attached before needing maintenance?',
    a: 'In Kerala’s tropical humid weather and Bangalore’s active lifestyle, our medical-grade waterproof bonds (like Ultrahold) typically hold firm for 3 to 5 weeks. After this period, clients visit our Trivandrum or Bangalore studios for a routine 45-minute cleaning, scalp exfoliation, and re-bonding service.',
  },
  {
    q: 'Can I shower, swim, work out, and ride a motorcycle with a bonded hair system?',
    a: 'Yes, 100%! Our bonding adhesives are completely waterproof and sweat-resistant. You can take hot showers, swim in pools or the sea, hit the gym, and wear full-face motorcycle helmets with complete confidence.',
  },
  {
    q: 'Do you offer hair fixing services in both Trivandrum and Bangalore?',
    a: 'Yes, Ozzone Hair operates premier hair replacement centers in both Thiruvananthapuram (Statue Junction, MG Road & Pattom) and Bangalore. Both studios offer private consultation suites, experienced trichologists, and identical gold-standard hair systems.',
  },
  {
    q: 'How is the hair system customized to look 100% natural?',
    a: 'Our specialists evaluate your exact hair color shade, wave/curl pattern, hair density, scalp skin tone, and age-appropriate hairline. We hand-knot individual virgin human hairs onto ultra-fine Swiss lace or micro-skin membranes, making the hairline completely undetectable even up close.',
  },
]

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: servicesFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function ServicesPage() {
  return (
    <div className="w-full text-slate-800">
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO BANNER (Matches About Page 75vh Layout)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center py-10 sm:py-12 lg:py-16 text-white">
        {/* Background Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 font-medium" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#29B6EB] transition-colors">Home</Link>
                <span className="text-white/40" aria-hidden="true">/</span>
                <span className="text-[#29B6EB] font-semibold">Our Services</span>
              </nav>

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 bg-[#29B6EB]/20 border border-[#29B6EB]/40 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#29B6EB] tracking-wide mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
                <span>18+ Years in Hair Replacement · Trivandrum &amp; Bangalore</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] mb-3 sm:mb-4 tracking-tight">
                Best Hair Fixing &amp; Hair Replacement in{' '}
                <span className="text-[#29B6EB] drop-shadow-sm">Trivandrum &amp; Bangalore</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-6 font-normal max-w-xl">
                Experience reliable, splendid hair fixing at our Trivandrum and Bangalore locations. Our expert hair restoration offers natural, undetectable results that restore your confidence and style with zero surgery, zero pain, and immediate 90-minute transformation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20hair%20fixing%20services%20in%20Trivandrum%20and%20Bangalore.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span>WhatsApp Consultation</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-[#005675] hover:bg-[#174BA5] text-white font-semibold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md transition-all duration-200 border border-white/20 hover:scale-105 flex items-center justify-center text-center"
                >
                  Book Free Hair Analysis
                </Link>
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 text-[11px] sm:text-xs lg:text-sm text-white/85 w-full pt-4 sm:pt-5 border-t border-white/15">
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>18+ Years Industry Excellence</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>100% Virgin Human Hair</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Instant 90-Min Results</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Zero Surgery &amp; Painless</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image with 3D Interaction */}
            <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
              <ServicesHeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ADVANTAGES (MOBILE GRID: 2 COLUMNS ON MOBILE, 3 ON DESKTOP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Why Choose Ozzone Hair
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Advantages of Our Hair Fixing &amp; Replacement Services
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Discover why thousands of clients in Thiruvananthapuram and Bangalore trust Ozzone Hair for natural, comfortable, and dependable hair restoration.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                01
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Instant Transformation</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Unlike surgical procedures that take months, hair fixing delivers immediate transformation in a single 90-minute session.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                02
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Zero Surgery or Downtime</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Hair fixing is completely non-invasive and painless with no incisions, needles, or post-surgical recovery periods.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                03
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Undetectable Realism</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Every unit is handcrafted with 100% genuine virgin human hair. Micro-knotting mimics hair sprouting directly from scalp.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                04
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Budget-Friendly Costs</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Clear, cost-effective pricing structure with zero hidden fees, saving you substantial expenses while preserving quality.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                05
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">100% Customized to You</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Length, texture, curl pattern, density, and grey percentage are customized to authentically match your natural hair.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                06
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Restores Confidence</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Empowering you to look and feel your absolute best in professional, social, and personal settings without anxiety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — DUAL LOCATION SPOTLIGHT: TRIVANDRUM & BANGALORE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Our Regional Studios
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Professional Hair Fixing Services in Trivandrum &amp; Bangalore
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Equipped with cutting-edge tools, private consultation rooms, and experienced hair replacement specialists in both major centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {/* Trivandrum Studio Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-5 sm:p-7 lg:p-9 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#EBF5FB] text-[#005675] font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4">
                  Kerala Center
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mb-2 sm:mb-3">
                  Trivandrum Hair Fixing Services
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 sm:mb-5">
                  In Trivandrum, our dedicated hair technicians bring decades of hands-on expertise to deliver personalized hair systems for local clients. We understand every subtle aspect of consultations — from selecting the exact texture and shade for color blending to configuring high-breathability French lace designed specifically for Kerala&apos;s humid coastal climate.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Statue Junction (Opp. Secretariat, MG Road) &amp; Pattom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Sweat-resistant, humidity-proof medical bonding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Direct access to Walker Tape C-22 and Ultrahold supplies</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20want%20to%20book%20a%20consultation%20at%20Statue%20Studio.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                >
                  <span>Book Trivandrum Studio &rarr;</span>
                </a>
              </div>
            </div>

            {/* Bangalore Studio Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-5 sm:p-7 lg:p-9 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-block bg-[#EBF5FB] text-[#005675] font-bold text-[11px] sm:text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-3 sm:mb-4">
                  Karnataka Center
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mb-2 sm:mb-3">
                  Bangalore Hair Fixing Services
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4 sm:mb-5">
                  We bring the same gold standard of quality, expertise, and commitment to Bangalore, catering to the dynamic needs of a corporate and metropolitan clientele. Our Bangalore center features flexible appointment schedules to allow busy professionals to experience rapid hair replacement with complete discretion and long-lasting durability.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Convenient metropolitan access &amp; flexible weekend timings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Modern styling trends tailored for corporate &amp; tech professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Equipped with cutting-edge tools and premium hair replacement systems</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20Bangalore%20Hair%20Fixing%20Services.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                >
                  <span>Book Bangalore Studio &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — COMPREHENSIVE SERVICES LIST (DETAILED CARDS)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Techniques Catalog
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Advanced Hair Replacement Techniques
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Every technique is customized to your exact degree of hair loss, hair density, texture, wave pattern, and facial contours.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1
              return (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-4 sm:p-6 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center scroll-mt-24 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative h-48 xs:h-56 sm:h-72 lg:h-80 rounded-xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-[#075078]">
                      <Image
                        src={service.image}
                        alt={`${service.title} - Non-Surgical Hair Replacement in Trivandrum and Bangalore`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-3 sm:space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="bg-white text-[#005675] border border-[#E2E8F0] px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-xs">
                        Duration: {service.duration}
                      </span>
                      <span className="bg-[#005675] text-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-xs">
                        100% Virgin Hair
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#075078] leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="bg-white p-3.5 sm:p-5 rounded-xl border border-[#E2E8F0] space-y-2 sm:space-y-2.5 shadow-xs">
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#075078]">
                        Key Benefits &amp; Advantages:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs lg:text-sm text-[#252B38]">
                        {service.benefits.map((b, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0 mt-1" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-[11px] sm:text-xs lg:text-sm text-[#64748B]">
                      <strong>Best Suited For:</strong> {service.suitability}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="bg-[#005675] hover:bg-[#174BA5] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors shadow-xs flex-1 sm:flex-initial text-center"
                      >
                        Book {service.title}
                      </Link>

                      <a
                        href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-xs transition-colors flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center"
                      >
                        <FaWhatsapp className="w-4 h-4 text-white" />
                        <span>WhatsApp Inquire</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — 4-STEP SERVICING PROCESS (MOBILE GRID: 2 COLUMNS ON MOBILE, 4 ON DESKTOP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Monthly Care Routine
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Our 4-Step Hair System Servicing Process
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Every 3 to 5 weeks, visit our Trivandrum or Bangalore studio for a relaxing 45-minute rejuvenation routine.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[
              {
                num: '01',
                title: 'Painless Removal',
                desc: 'Organic citrus solvent (C-22) releases adhesive gently without pulling natural hair or stressing lace.',
              },
              {
                num: '02',
                title: 'Deep Scalp Cleansing',
                desc: 'Anti-fungal tea-tree scalp scrub removes dead skin cells and excess sebum for refreshed scalp breathing.',
              },
              {
                num: '03',
                title: 'Ultrasonic Conditioning',
                desc: 'Base sanitization and deep Moroccan argan conditioning restore silkiness, shine, and natural bounce.',
              },
              {
                num: '04',
                title: 'Fresh Re-Bond & Style',
                desc: 'Fresh waterproof medical adhesive applied with precision haircut blending for an undetectable refreshed finish.',
              },
            ].map((step) => (
              <div key={step.num} className="bg-white p-3.5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-base flex items-center justify-center mb-2.5 sm:mb-4 shadow-xs">
                    {step.num}
                  </div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — DIRECT CUSTOMER CARE & HELPLINE BAR
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] py-10 sm:py-12 px-4 sm:px-8 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#29B6EB] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Immediate Assistance
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold mt-2.5 sm:mt-3">
              Perfect Solution for Your Hair Loss
            </h3>
            <p className="text-xs sm:text-base text-white/80 mt-1">
              Customer Care Hotline: +91 77360 77110 / +91 98470 62707 / {SITE_INFO.phone}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+917736077110"
              className="bg-white hover:bg-slate-100 text-[#075078] font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md transition-colors flex-1 sm:flex-initial text-center"
            >
              Call 077360 77110
            </a>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20hair%20fixing.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FREQUENTLY ASKED QUESTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Expert Insights
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Frequently Asked Questions on Hair Fixing
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Direct answers to common questions about hair fixing, patching, maintenance, and durability in Trivandrum and Bangalore.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {servicesFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#29B6EB] shadow-xs"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 cursor-pointer text-[#075078] font-semibold text-xs sm:text-base hover:bg-[#F3F7FB] transition-colors list-none gap-3">
                  <span className="pr-2">{faq.q}</span>
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-xs sm:text-sm text-[#075078] shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-[#475569] text-xs sm:text-sm leading-relaxed border-t border-[#E2E8F0] pt-3 sm:pt-4 bg-[#F3F7FB]/40">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-14 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
            Not Sure Which{' '}
            <span className="text-[#29B6EB]">Hair Fixing Technique</span>{' '}
            Fits You Best?
          </h2>
          <p className="text-white/85 text-xs sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Let our senior hair replacement trichologists in Trivandrum or Bangalore inspect your scalp density and suggest the ideal match. Book a free, private consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm lg:text-base px-7 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>WhatsApp Consultation</span>
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-[#075078] font-bold text-xs sm:text-sm lg:text-base px-7 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center text-center"
            >
              Book Complimentary Analysis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
