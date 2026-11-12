import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'
import SolutionsHeroImageWithTilt from '@/components/SolutionsHeroImageWithTilt'

export const metadata: Metadata = {
  title: 'Best Hair Fixing in Trivandrum and Bangalore | Hair Solutions | Ozzone Hair',
  description: '18+ years in non-surgical hair replacement & hair solutions in Trivandrum and Bangalore. Hair patching, bonding, weaving, toppers & full scalp systems. 100% natural human hair.',
  alternates: {
    canonical: 'https://ozzonehair.com/solutions/',
  },
  openGraph: {
    title: 'Complete Non-Surgical Hair Solutions | Ozzone Hair Studio',
    description: 'Expert hair fixing solutions in Trivandrum & Bangalore. Instant 90-minute transformation, water-resistant hold, zero surgery, and 100% natural human hair.',
    url: 'https://ozzonehair.com/solutions/',
    siteName: 'Ozzone Hair Studio',
    images: [{ url: '/images/solutions-hero.jpg', width: 1200, height: 630, alt: 'Non-Surgical Hair Solutions in Trivandrum and Bangalore' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hair Fixing in Trivandrum & Bangalore | Ozzone Hair Solutions',
    description: 'Instant, non-surgical hair loss solutions in Trivandrum and Bangalore. 100% natural human hair.',
    images: ['/images/solutions-hero.jpg'],
  },
}

const SOLUTIONS_DATA = [
  {
    id: 'hair-patching',
    title: 'Custom Hair Patching System',
    description: 'Precision-crafted human hair patch seamlessly fitted to bald areas with zero pain, undetectable hairline, and instant natural volume.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    benefits: ['Swiss & French Lace Base', 'Color & Wave Matched Precision', '90-Minute Instant Makeover', 'Breathable & Featherlight'],
    suitability: 'Male pattern baldness, crown thinning, receding hairline',
    href: '/services',
  },
  {
    id: 'hair-bonding',
    title: 'Dermatological Hair Bonding',
    description: 'Medical-grade hypoallergenic adhesive bonding for active lifestyles. 100% waterproof and sweat-resistant in Kerala’s coastal climate.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    benefits: ['Medical Grade Waterproof Bond', 'Withstands Swimming & Workouts', '4 to 6 Weeks Secure Hold', 'Zero Scalp Irritation'],
    suitability: 'Active individuals, swimmers, sports enthusiasts, professionals',
    href: '/services',
  },
  {
    id: 'hair-weaving',
    title: 'Non-Surgical Hair Weaving',
    description: 'Adhesive-free micro-track method interlocking replacement hair unit directly with your existing roots without glues, solvents, or heat.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    benefits: ['100% Glue-Free & Solvent-Free', 'Firm Micro-Silicone Anchor', 'Natural Scalp Breathing', 'Ideal for Sensitive Scalps'],
    suitability: 'Moderate thinning, adhesive sensitivities, natural integration',
    href: '/services',
  },
  {
    id: 'hair-replacement',
    title: 'Full Scalp Non-Surgical Replacement',
    description: 'Comprehensive hair restoration for advanced alopecia and high-grade baldness. Delivers complete crown and perimeter density with natural hair direction.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    benefits: ['Full Scalp Coverage', 'Ultra-Thin Micro-Skin Membrane', 'Micro-Knotting Replicates Follicles', 'Freestyle Parting & Combing'],
    suitability: 'Advanced baldness (Norwood 5–7), Alopecia Totalis, medical loss',
    href: '/services',
  },
  {
    id: 'womens-solutions',
    title: 'Women’s Crown Toppers & Extensions',
    description: 'Discreet volumizing crown pieces and clip-in toppers designed exclusively for female diffuse thinning with genuine silk scalp simulation.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    benefits: ['Triple Silk Base Illusion', 'Lightweight Clip-In or Weave Fix', 'Heat-Resistant 100% Remy Hair', 'Private Female Consultation Suite'],
    suitability: 'Female pattern diffuse thinning, midline loss, post-partum recovery',
    href: '/services',
  },
  {
    id: 'maintenance-care',
    title: 'Hair System Servicing & Scalp Care',
    description: 'Complete routine maintenance ritual including organic C-22 solvent release, deep scalp tea-tree exfoliation, ultrasonic base wash, and fresh re-bonding.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    benefits: ['Painless C-22 Citrus Release', 'Anti-Dandruff Scalp Detox', 'Argan Deep Conditioning', 'Precision Haircut Re-Styling'],
    suitability: 'Routine monthly servicing every 3 to 5 weeks',
    href: '/products',
  },
]

const solutionsFaqs = [
  {
    q: 'How are the hair fixing solutions at Ozzone Hair different from others?',
    a: 'Our hair fixing solutions are completely non-surgical, 100% pain-free, and customized to match your exact natural hair texture, color, wave pattern, and age-appropriate density. With 18+ years in hair replacement, we use the highest quality virgin human hair and skin-friendly breathable materials for completely undetectable, long-lasting results.',
  },
  {
    q: 'How long does a hair fixing process take?',
    a: 'The hair fixing process typically takes between 1 to 2 hours depending on the level of hair loss and the chosen fixing method (bonding, micro-weaving, or patch integration). You walk out with a full, natural head of hair in a single visit.',
  },
  {
    q: 'Is hair fixing a permanent or semi-permanent solution?',
    a: 'Hair fixing is a semi-permanent aesthetic solution. The hair system itself lasts between 6 months to over 1 year with proper care, while the secure bonding hold lasts 3 to 5 weeks before requiring a routine 45-minute studio maintenance service.',
  },
  {
    q: 'Can I wash, shampoo, oil, and style my hair normally?',
    a: 'Yes! You can wash, shampoo, condition, dry, and style your hair just like natural hair. Our fixed hair systems are completely water-resistant, wind-resistant, and built for daily active routines.',
  },
  {
    q: 'Is hair fixing suitable for all types of hair loss?',
    a: 'Yes. Our solutions cater to male and female pattern baldness, receding hairlines, crown baldness, alopecia, diffuse thinning, and post-medical hair loss conditions. Every unit is custom-tailored to individual scalp topography.',
  },
  {
    q: 'Will hair fixing damage my natural hair or scalp?',
    a: 'No. Our non-surgical methods do not harm your natural hair or scalp skin. We use FDA-approved, dermatologically tested hypoallergenic adhesives and breathable Swiss lace / micro-skin bases that allow your scalp skin to breathe freely.',
  },
  {
    q: 'Can I swim, play sports, and ride a motorcycle after hair fixing?',
    a: 'Yes. Our hair fixing solutions are engineered for active lifestyles. You can swim in pools or the sea, work out at the gym, run, and wear full-face helmets without any worry of loosening or shifting.',
  },
  {
    q: 'Do you offer aftercare and maintenance services in Trivandrum and Bangalore?',
    a: 'Yes. Both our Thiruvananthapuram (Statue Junction, MG Road & Pattom) and Bangalore clinics offer comprehensive monthly servicing, including painless unit release with C-22 solvent, scalp exfoliation, deep conditioning, and fresh re-bonding.',
  },
]

export default function SolutionsPage() {
  const solutionsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://ozzonehair.com/solutions/' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Non-Surgical Hair Loss Solutions in Trivandrum and Bangalore',
        description: 'Comprehensive hair replacement and fixing options offered at Ozzone Hair Studio Trivandrum and Bangalore',
        itemListElement: SOLUTIONS_DATA.map((sol, index) => ({
          '@type': 'Service',
          position: index + 1,
          name: sol.title,
          description: sol.description,
          provider: {
            '@type': 'HairSalon',
            name: 'Ozzone Hair Studio',
            url: 'https://ozzonehair.com/',
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: solutionsFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a,
          },
        })),
      },
    ],
  }

  return (
    <div className="w-full text-slate-800">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsJsonLd),
        }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO BANNER WITH 3D REALISTIC IMAGE
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
                <span className="text-[#29B6EB] font-semibold">Hair Solutions</span>
              </nav>

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 bg-[#29B6EB]/20 border border-[#29B6EB]/40 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#29B6EB] tracking-wide mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
                <span>18+ Years in Hair Replacement · Trivandrum &amp; Bangalore</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] mb-3 sm:mb-4 tracking-tight">
                Complete Non-Surgical Hair Solutions in{' '}
                <span className="text-[#29B6EB] drop-shadow-sm">Trivandrum &amp; Bangalore</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-6 font-normal max-w-xl">
                Experience reliable, splendid hair solutions at our Trivandrum and Bangalore locations. Tailor-made hair fixing, non-invasive extensions, weaving, and medical bonding designed to blend seamlessly with your natural hair — giving you instant, undetectable volume with zero surgery.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20know%20more%20about%20your%20hair%20solutions%20in%20Trivandrum%20and%20Bangalore.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span>WhatsApp Consultation</span>
                </a>
                <Link
                  href="/services"
                  className="bg-[#005675] hover:bg-[#174BA5] text-white font-semibold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md transition-all duration-200 border border-white/20 hover:scale-105 flex items-center justify-center text-center"
                >
                  Explore All Services
                </Link>
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 text-[11px] sm:text-xs lg:text-sm text-white/85 w-full pt-4 sm:pt-5 border-t border-white/15">
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>18+ Years Clinical Expertise</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Instant Results in 1–2 Hours</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Water &amp; Wind-Resistant Hold</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>100% Virgin Natural Human Hair</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image with 3D Interaction */}
            <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
              <SolutionsHeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — BENEFITS (MOBILE GRID: 2 COLUMNS ON MOBILE, 3 ON DESKTOP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Proven Advantages
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Hair Fixing Brings a Lot of Benefits
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              With more and more people looking for natural, less invasive methods to restore full hair density, our specialized solutions deliver the best outcomes with minimal stress.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                01
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Immediate Transformation</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Unlike surgical procedures that take months, hair fixing gives instant results in 1 to 2 hours. Quick and efficient without surgery.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                02
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Completely Undetectable</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Seamlessly blends into your existing natural hair with ultra-thin Swiss lace or micro-skin membranes for an invisible hairline.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                03
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Weather &amp; Water Resistant</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Water-resistant, wind-resistant, and sweat-proof. Engineered to withstand Kerala’s humid weather and active routines.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                04
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Low-Maintenance Living</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Enjoy carefree durability for months. Wash, shampoo, style, and comb just like natural hair with routine monthly servicing.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                05
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">100% Tailored Customization</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                From specific lengths and textures to customized curl patterns and color shades, we create an exact match to your natural hair.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 lg:p-7 shadow-xs hover:shadow-md transition-all">
              <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                06
              </div>
              <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">Zero Surgery or Risk</h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                Zero incisions, zero pain, zero side effects, and zero prolonged healing. Completely safe non-invasive method.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — SOLUTIONS CATALOG (MOBILE GRID: 2 COLUMNS ON MOBILE, 3 ON DESKTOP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Our Specialized Solutions
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Choose Your Tailored Hair Solution
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Each solution is personalized to your unique hair loss pattern, scalp topography, and personal styling preferences.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {SOLUTIONS_DATA.map((sol) => (
              <div key={sol.id} className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Clean Photography Frame - No Price Overlay */}
                  <div className="relative h-32 xs:h-40 sm:h-52 lg:h-60 w-full overflow-hidden bg-[#075078]">
                    <Image
                      src={sol.image}
                      alt={`${sol.title} - Non-Surgical Hair Solutions in Trivandrum and Bangalore`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Body Content */}
                  <div className="p-3 sm:p-5 lg:p-6">
                    <h3 className="text-xs xs:text-sm sm:text-lg lg:text-xl font-bold text-[#075078] mb-1.5 sm:mb-2.5 group-hover:text-[#174BA5] transition-colors leading-tight">
                      {sol.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                      {sol.description}
                    </p>

                    <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-5 border-t border-[#E2E8F0] pt-2.5 sm:pt-4 hidden xs:block">
                      {sol.benefits.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs lg:text-sm text-[#252B38] line-clamp-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-[9px] sm:text-xs text-[#64748B] bg-[#F8FAFC] p-2 sm:p-3 rounded-lg border border-[#E2E8F0]">
                      <strong className="text-[#075078]">Best For: </strong>
                      <span className="line-clamp-1 sm:line-clamp-none">{sol.suitability}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-3 sm:p-5 lg:p-6 pt-0">
                  <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-3">
                    <Link
                      href={sol.href}
                      className="bg-[#005675] hover:bg-[#174BA5] text-white font-bold text-[11px] sm:text-xs lg:text-sm py-2 px-3 rounded-lg transition-colors flex-1 text-center"
                    >
                      Learn More
                    </Link>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20interested%20in%20${encodeURIComponent(sol.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] sm:text-xs lg:text-sm py-2 px-2.5 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5 text-white" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — REGIONAL CLINIC SPOTLIGHT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Regional Presence
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Why Choose Hair Fixing in Trivandrum &amp; Bangalore?
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Professional salons offering customized hair loss solutions, comfortable private suites, and advanced application techniques across both major hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#005675] uppercase tracking-wider bg-[#EBF5FB] px-2.5 py-1 rounded">
                  Kerala Center
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mt-2.5 sm:mt-3 mb-2 sm:mb-3">
                  Trivandrum Hair Fixing Solutions
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Located at Statue Junction (Opp. Secretariat, MG Road) and Pattom. Our Trivandrum trichologists specialize in moisture-resistant bonding and breathable Swiss lace units optimized for Kerala’s warm, coastal climate.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Private consultation rooms for men &amp; women</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Free scalp sensitivity &amp; adhesive patch tests</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
              >
                Visit Trivandrum Studio &rarr;
              </Link>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#005675] uppercase tracking-wider bg-[#EBF5FB] px-2.5 py-1 rounded">
                  Karnataka Center
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mt-2.5 sm:mt-3 mb-2 sm:mb-3">
                  Bangalore Hair Fixing Solutions
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Catering to the diverse lifestyle of a metropolitan and corporate clientele. Our Bangalore center provides flexible scheduling, rapid 90-minute transformations, and modern hair trends with complete discretion.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Convenient appointment times for busy tech professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Durable hair systems built for active daily routines</span>
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20Bangalore%20hair%20solutions.`}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
              >
                Inquire Bangalore Studio &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — DIRECT CUSTOMER CARE & HELPLINE BAR
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
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20hair%20solutions.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-1.5 flex-1 sm:flex-initial text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Clear Answers
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Common Questions About Our Hair Solutions
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our non-surgical hair fixing methods, durability, daily life freedom, and aftercare.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {solutionsFaqs.map((faq, idx) => (
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
          SECTION 7 — FINAL CTA BANNER
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-14 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
            Not Sure Which Hair Solution Fits You Best?
          </h2>
          <p className="text-white/85 text-xs sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Our certified hair specialists in Trivandrum and Bangalore will evaluate your scalp density and suggest the ideal match — completely free, with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20need%20help%20choosing%20the%20right%20hair%20solution.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              <span>Get Free Hair Analysis</span>
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-slate-100 text-[#075078] font-bold text-xs sm:text-sm lg:text-base px-6 py-3 rounded-lg shadow-md transition-colors flex items-center justify-center text-center"
            >
              Book Complimentary Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
