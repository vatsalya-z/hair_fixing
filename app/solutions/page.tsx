import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'
import SolutionsHeroImageWithTilt from '@/components/SolutionsHeroImageWithTilt'

export const metadata: Metadata = {
  title: 'Non-Surgical Hair Replacement in Thiruvananthapuram | Hair Systems Trivandrum',
  description: 'Advanced non-surgical hair replacement solutions in Thiruvananthapuram, Kerala. Custom hair systems for men, women\'s crown toppers & full cranial restoration with 100% human hair.',
  alternates: {
    canonical: 'https://ozzonehair.com/solutions/',
  },
  openGraph: {
    title: 'Non-Surgical Hair Replacement Solutions in Thiruvananthapuram | ozzone Hair',
    description: 'Expert hair replacement solutions in Trivandrum. Instant 90-minute transformation, water-resistant hold, zero surgery, and 100% natural human hair.',
    url: 'https://ozzonehair.com/solutions/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/solutions-hero.jpg', width: 1200, height: 630, alt: 'Non-Surgical Hair Replacement Solutions in Thiruvananthapuram' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Surgical Hair Replacement in Thiruvananthapuram | ozzone Hair',
    description: 'Instant, non-surgical hair loss solutions in Trivandrum. 100% natural human hair systems.',
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
    q: 'How are the hair replacement solutions at ozzone Hair customized for each client?',
    a: 'Our hair replacement solutions are completely non-surgical, 100% pain-free, and customized to match your exact natural hair texture, color shade, curl pattern, and age-appropriate density. With 14+ years in non-surgical trichology, we use 100% virgin human hair and skin-friendly breathable materials for completely undetectable results.',
  },
  {
    q: 'How long does a hair replacement appointment take?',
    a: 'The full procedure typically takes between 90 to 120 minutes depending on the degree of hair loss and the chosen fixing technique (dermatological bonding, micro-weaving, or lace patch integration). You walk out with a full, natural head of hair in a single visit.',
  },
  {
    q: 'Is hair replacement a permanent or semi-permanent solution?',
    a: 'Hair replacement systems are semi-permanent aesthetic solutions. A high-quality virgin human hair system lasts between 8 to 14 months with proper care, while the secure waterproof medical bond holds firmly for 3 to 5 weeks before requiring a routine 45-minute studio maintenance service.',
  },
  {
    q: 'Can I wash, shampoo, oil, and style my hair normally?',
    a: 'Yes! You can wash, shampoo, condition, dry, and style your hair just like natural hair. Our bonded hair systems are completely water-resistant, wind-resistant, and built for daily active routines in Kerala.',
  },
  {
    q: 'Is non-surgical hair replacement suitable for all stages of hair loss?',
    a: 'Yes. Our solutions cater to male and female pattern baldness (Norwood stages 2 through 7), receding front hairlines, crown thinning, alopecia areata, diffuse thinning, and post-chemotherapy hair loss. Every system is constructed from an exact mold of your thinning area.',
  },
  {
    q: 'Will hair fixing damage my natural hair or scalp?',
    a: 'No. Our non-surgical methods do not harm your natural hair or scalp follicles. We use FDA-approved, dermatologically tested hypoallergenic adhesives and breathable Swiss lace / micro-skin bases that allow your scalp skin to breathe freely.',
  },
  {
    q: 'Can I swim, play sports, and ride a motorcycle after hair fixing?',
    a: 'Yes. Our hair replacement solutions are engineered for active lifestyles. You can swim in pools or Kovalam beach, work out at the gym, run, and wear full-face motorcycle helmets without any worry of loosening or shifting.',
  },
  {
    q: 'Where can I get hair replacement servicing in Thiruvananthapuram?',
    a: 'Both our Thiruvananthapuram studios (Statue Junction, MG Road opposite Secretariat & Pattom Medical Center Complex, Kesavadasapuram) offer comprehensive monthly servicing, including painless unit release with C-22 solvent, scalp exfoliation, deep conditioning, and fresh re-bonding.',
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
        name: 'Non-Surgical Hair Replacement Solutions in Thiruvananthapuram',
        description: 'Comprehensive hair replacement and hair fixing solutions offered at ozzone Hair Studio Thiruvananthapuram, Kerala',
        itemListElement: SOLUTIONS_DATA.map((sol, index) => ({
          '@type': 'Service',
          position: index + 1,
          name: sol.title,
          description: sol.description,
          provider: {
            '@type': 'HairSalon',
            name: 'ozzone Hair - Hair Fixing & Replacement Studio',
            url: 'https://ozzonehair.com/',
            telephone: SITE_INFO.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2nd Floor, Capital Centre, Opp. Secretariat, MG Road, Statue Junction',
              addressLocality: 'Thiruvananthapuram',
              addressRegion: 'Kerala',
              postalCode: '695001',
              addressCountry: 'IN',
            },
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
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
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
                <span className="text-[#29B6EB] font-semibold">Our Solutions</span>
              </nav>

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 bg-[#29B6EB]/20 border border-[#29B6EB]/40 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#29B6EB] tracking-wide mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
                <span>14+ Years in Hair Replacement · Thiruvananthapuram, Kerala</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] mb-3 sm:mb-4 tracking-tight">
                Advanced Non-Surgical Hair Replacement Solutions in{' '}
                <span className="text-[#29B6EB] drop-shadow-sm">Thiruvananthapuram</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed mb-6 font-normal max-w-xl">
                Experience reliable, natural hair solutions at our Statue Junction and Pattom locations in Trivandrum. Custom hair systems, non-invasive extensions, micro-weaving, and medical bonding designed to blend seamlessly with your natural hair with zero surgery.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20know%20more%20about%20your%20hair%20replacement%20solutions%20in%20Thiruvananthapuram.`}
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
                  Book Free Scalp Analysis
                </Link>
              </div>

              {/* Trust highlights */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 text-[11px] sm:text-xs lg:text-sm text-white/85 w-full pt-4 sm:pt-5 border-t border-white/15">
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>100% Virgin Human Hair</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Custom Hairline Sculpting</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Waterproof Medical Bond</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Zero Pain &amp; Downtime</span>
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
          SECTION 2 — SOLUTION INTRO & COMPARISON
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Personalized Hair Restoration
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Why Non-Surgical Hair Replacement is the Ideal Choice
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Every client experiences hair loss differently. Our diverse range of non-surgical techniques ensures you receive the most comfortable, discreet, and natural restoration tailored precisely to your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-4 text-xl">
                  🎯
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#075078] mb-2">
                  Guaranteed Full Density
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  Surgical transplants are limited by your existing donor follicle count. Non-surgical systems deliver guaranteed 100% hair density with customized fullness across the crown, hairline, and vertex.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>Immediate, guaranteed fullness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>Zero donor follicle depletion</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-4 text-xl">
                  🛡️
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#075078] mb-2">
                  100% Pain-Free &amp; Safe
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  No needles, no surgical incisions, no stitches, and no chemical medications with sexual or systemic side effects. Gentle, hypoallergenic materials certified safe for all scalp types.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>FDA-cleared medical bonding</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>Zero recovery downtime</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-4 text-xl">
                  ⚡
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#075078] mb-2">
                  Complete Lifestyle Freedom
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                  Live life without restrictions. Modern waterproof acrylic adhesives ensure your hair system stays firmly anchored while swimming, showering, gym workouts, and riding two-wheelers in Kerala.
                </p>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>Withstands coastal Kerala humidity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  <span>Helmet &amp; workout proof hold</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — ALL SOLUTIONS GRID
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Full Catalog
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Explore Our Hair Restoration Solutions
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              From targeted crown patches to complete cranial prosthesis systems, discover the right technique for your hair loss pattern.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {SOLUTIONS_DATA.map((sol) => (
              <div
                key={sol.id}
                id={sol.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#075078]">
                    <Image
                      src={sol.image}
                      alt={`${sol.title} - Non-Surgical Hair Solutions in Thiruvananthapuram`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-[#075078] mb-2 group-hover:text-[#29B6EB] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                      {sol.description}
                    </p>

                    <div className="bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2E8F0] space-y-1.5 mb-4">
                      <p className="text-[11px] font-bold text-[#075078] uppercase tracking-wider">
                        Key Features:
                      </p>
                      {sol.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-[#334155]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-[#64748B]">
                      <strong className="text-[#334155]">Best For:</strong> {sol.suitability}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-[#E2E8F0] mt-4 flex items-center justify-between">
                  <Link
                    href={`/contact?solution=${encodeURIComponent(sol.title)}`}
                    className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                  >
                    Consult for {sol.title} &rarr;
                  </Link>
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20interested%20in%20${encodeURIComponent(sol.title)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label={`WhatsApp about ${sol.title}`}
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CLINIC LOCATIONS SPOTLIGHT
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Trivandrum Studios
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Why Choose Hair Solutions at ozzone Hair Thiruvananthapuram?
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Professional studios offering customized hair replacement solutions, comfortable private suites, and certified trichological technicians across two prime Trivandrum locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
            {/* Main Studio */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#005675] uppercase tracking-wider bg-[#EBF5FB] px-2.5 py-1 rounded">
                  Main Studio • Statue Junction
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mt-2.5 sm:mt-3 mb-2 sm:mb-3">
                  Statue Junction Hair Fixing Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Located at 2nd Floor, Capital Centre, Opp. Government Secretariat, MG Road. Our flagship clinic specializes in moisture-resistant medical bonding and breathable Swiss lace units optimized for Kerala’s warm coastal climate.
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
                Visit Statue Junction Studio &rarr;
              </Link>
            </div>

            {/* Branch Studio */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#005675] uppercase tracking-wider bg-[#EBF5FB] px-2.5 py-1 rounded">
                  Branch Studio • Pattom
                </span>
                <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mt-2.5 sm:mt-3 mb-2 sm:mb-3">
                  Pattom &amp; Kesavadasapuram Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Located at Pattom Medical Center Complex, Kesavadasapuram. Convenient for residents of Kowdiar, Medical College, and Technopark commuters. Features flexible appointment scheduling and private women’s consultation rooms.
                </p>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Convenient appointment times for busy tech professionals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                    <span>Express 45-minute monthly maintenance servicing</span>
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20Pattom%20hair%20solutions.`}
                target="_blank"
                rel="noreferrer"
                className="text-xs sm:text-sm font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
              >
                Inquire Pattom Studio &rarr;
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
              Customer Care Helpline: {SITE_INFO.phone} | {SITE_INFO.altPhone}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-white hover:bg-slate-100 text-[#075078] font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-md transition-colors flex-1 sm:flex-initial text-center"
            >
              Call {SITE_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20want%20to%20inquire%20about%20hair%20solutions.`}
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
          SECTION 6 — FREQUENTLY ASKED QUESTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Expert Insights
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Frequently Asked Questions on Hair Solutions
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Direct, transparent answers to help you choose the best non-surgical hair replacement system in Thiruvananthapuram.
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
            Ready to Find Your Ideal{' '}
            <span className="text-[#29B6EB]">Hair Restoration Solution</span>?
          </h2>
          <p className="text-white/85 text-xs sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Our certified hair specialists in Trivandrum will evaluate your scalp density and suggest the ideal match — completely free, with no obligation.
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
