import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Non-Surgical Hair Replacement Solutions in Trivandrum | ozzone Hair',
  description:
    'Tailored non-surgical hair replacement in Trivandrum for male pattern baldness, receding hairlines & crown thinning. Breathable Swiss lace & skin hair systems.',
  keywords: [
    'Hair Replacement in Thiruvananthapuram',
    'Hair Replacement in Trivandrum',
    'Non Surgical Hair Replacement in Kerala',
    'Hair System for Men in Trivandrum',
    'Custom Hair Replacement Systems',
    'Non Surgical Hair Restoration',
    'Hair Fixing in Trivandrum',
  ],
  alternates: {
    canonical: 'https://ozzonehair.com/solutions/',
  },
  openGraph: {
    title: 'Non-Surgical Hair Replacement Solutions in Trivandrum | ozzone Hair',
    description:
      'Custom non-surgical hair replacement solutions in Trivandrum & Bangalore. Undetectable Swiss lace & ultra-thin skin hair systems for men & women.',
    url: 'https://ozzonehair.com/solutions/',
    siteName: 'ozzone Hair',
    images: [{ url: '/images/solution/solution-hero-section.png', width: 2048, height: 768, alt: 'Non-Surgical Hair Replacement Solutions in Trivandrum' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Surgical Hair Replacement Solutions in Trivandrum | ozzone Hair',
    description:
      'Customized hair replacement solutions in Trivandrum & Bangalore. Instant results without surgery.',
    images: ['/images/solution/solution-hero-section.png'],
  },
}

// 10 FAQs provided by the user
const SOLUTIONS_FAQS = [
  {
    id: 'faq-1',
    question: 'How is your hair fixing service different from others at ozzone Hair?',
    href: '/services/',
    answer: 'Our hair fixing solutions are completely non-surgical, pain-free, and adapted to match your natural hair texture, color and style. We use high quality materials for a natural hairline and long lasting results.',
  },
  {
    id: 'faq-2',
    question: 'How long does a hair fixing process take?',
    href: '/services/',
    answer: 'The entire hair fixing process takes approximately 90 minutes in a single session. Unlike typical hair restoration surgeries that take months to produce results, hair fixing gives immediate, instant results.',
  },
  {
    id: 'faq-3',
    question: 'Is hair fixing a permanent solution?',
    href: '/solutions/',
    answer: 'Non-surgical hair fixing provides a long-term, semi-permanent solution. The systems stay fixed for weeks between routine servicing and are durable for months with proper care.',
  },
  {
    id: 'faq-4',
    question: 'Can I wash and style my hair after hair fixing?',
    href: '/products/',
    answer: 'Yes, absolutely. The solutions are designed to resemble and feel like natural hair. You can wash, shampoo, style, and care for your hair naturally.',
  },
  {
    id: 'faq-5',
    question: 'Is hair fixing suitable for all types of hair loss?',
    href: '/solutions/',
    answer: 'Yes. Whether you have crown bald patches, thinning areas, or receding hairlines, our specialized services are tailored to meet your unique scalp requirements.',
  },
  {
    id: 'faq-6',
    question: 'Will hair fixing damage my natural hair or scalp?',
    href: '/services/',
    answer: 'No. Hair fixing is a non-invasive, safe, and discreet procedure that avoids prolonged recovery periods and surgical hassle, leaving your natural hair and scalp protected.',
  },
  {
    id: 'faq-7',
    question: 'How long does a hair system last, and how often should it be replaced?',
    href: '/services/',
    answer: 'With proper care and maintenance, the solutions are durable and last for 8 to 14 months, offering a worry-free and long-lasting hair restoration solution.',
  },
  {
    id: 'faq-8',
    question: 'Can I swim after fixing hair or play sports?',
    href: '/services/',
    answer: 'Yes! Our solutions are water-resistant, wind-resistant, and sweat-resistant, ensuring your hair stays securely bonded all day long during swimming, gym, and outdoor sports.',
  },
  {
    id: 'faq-9',
    question: 'How is the cost of hair fixing determined at ozzone Hair?',
    href: '/contact/',
    answer: 'We offer individualized consultations so you can select the best hair-fixing solution that suits your lifestyle, needs, and scalp area. The investment depends on base material, hair length, and customization requirements.',
  },
  {
    id: 'faq-10',
    question: 'Do you provide aftercare services for hair fixing?',
    href: '/services/',
    answer: 'Yes, we provide complete aftercare, guidance, and routine monthly maintenance support at our Trivandrum and Bangalore locations to ensure durable and comfortable long-term wear.',
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
        '@type': 'WebPage',
        '@id': 'https://ozzonehair.com/solutions/#webpage',
        url: 'https://ozzonehair.com/solutions/',
        name: "Hair Replacement Solutions in Trivandrum | Custom Men's Hair Systems | ozzone Hair",
        description: 'Discover custom non-surgical hair replacement solutions in Trivandrum. Breathable Swiss lace, ultra-thin poly skin systems & undetectable hairlines for men & women.',
      },
      {
        '@type': 'FAQPage',
        mainEntity: SOLUTIONS_FAQS.map((faq) => ({
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

  return (
    <div className="w-full bg-white text-slate-800">
      {/* Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(solutionsJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar (Above Hero Section - Mobile Only) */}
      <div className="lg:hidden bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">Solutions</span>
          </nav>
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#005675]">
              <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
              Trivandrum &amp; Bangalore Studios
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (FULL WIDTH IMAGE BANNER)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#075078] overflow-hidden" aria-label="Hair Fixing Solutions Hero Banner">
        <h1 className="sr-only">
          Non-Surgical Hair Replacement Solutions in Trivandrum &amp; Kerala | ozzone Hair Studio
        </h1>
        <div className="relative w-full aspect-[2048/768]">
          <Image
            src="/images/solution/solution-hero-section.png"
            alt="Non-Surgical Hair Replacement Solutions in Trivandrum and Bangalore - ozzone Hair"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — ADVANCED NON-INVASIVE HAIR FIXING SOLUTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Natural &amp; Less Invasive Methods
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-4">
              Advanced Solutions Tailored to Whatever Needs You May Require
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-6" />
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              With more and more people looking for the most natural, less invasive methods possible to regain or enhance their hair, hair fixing solutions are becoming increasingly popular. For those experiencing thinning hair or losing their hair or just moving to different hairstyles, specialized services in hair fixing are abundant and tailored to meet whatever needs you may require. Many advanced techniques such as non-invasive hair extensions, hair weaving, and advanced wigs are on offer, bringing you the best outcome with minimal stress.
            </p>
          </div>

          {/* Three Advanced Techniques Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Non-Invasive Hair Extensions */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-5 shadow-sm">
                  01
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Non-Invasive Hair Extensions
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Advanced non-invasive techniques crafted to add volume, length, and style naturally, customized to match whatever needs you may require.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#005675] flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">✓</span> Minimal Stress &amp; Natural Feel
              </div>
            </div>

            {/* Hair Weaving */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-5 shadow-sm">
                  02
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Hair Weaving
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  Sophisticated hair weaving solutions offering versatile styling and full integration with your existing hair for a seamless, undetectable look.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#005675] flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">✓</span> Blends with Present Hair
              </div>
            </div>

            {/* Advanced Wigs & Systems */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-5 shadow-sm">
                  03
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Advanced Wigs &amp; Systems
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                  World-class non-surgical systems designed to bring you the best outcome with minimal stress, tailored for complete transformations.
                </p>
              </div>
              <div className="pt-4 border-t border-[#E2E8F0] text-xs font-semibold text-[#005675] flex items-center gap-1.5">
                <span className="text-[#29B6EB] font-bold">✓</span> Best Outcome with Minimal Stress
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — HAIR FIXING BRINGS A LOT OF BENEFITS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Key Advantages
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Hair Fixing Brings a Lot of Benefits
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Whether you desire your confidence back or just want to improve your appearance, hair fixing is one of the excellent choices for anyone seeking an easy, long-term solution to their hair problem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-3 sm:mb-5 shadow-sm">
                  01
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-[#075078] mb-1.5 sm:mb-3 leading-snug">
                  Immediate Change &amp; Instant Results
                </h3>
                <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed mb-3 sm:mb-4">
                  It will immediately change. Unlike most typical hair restoration surgeries, this would only take months to start producing, unlike hair fixing that gives instant results. It’s quick and efficient for those who want to regain their hair without the hassle of surgery.
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] text-[10px] sm:text-xs font-semibold text-[#005675] flex items-start sm:items-center gap-1 sm:gap-1.5">
                <span className="text-[#29B6EB] font-bold shrink-0">✓</span>
                <span>Instant results without months of waiting</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-3 sm:mb-5 shadow-sm">
                  02
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-[#075078] mb-1.5 sm:mb-3 leading-snug">
                  Highly Customized &amp; Perfectly Matched
                </h3>
                <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed mb-3 sm:mb-4">
                  The best thing about these alternatives is that they can be very customized too, as they could all come in varying textures, lengths, and volumes, and every client has a perfectly matched match in natural hair.
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] text-[10px] sm:text-xs font-semibold text-[#005675] flex items-start sm:items-center gap-1 sm:gap-1.5">
                <span className="text-[#29B6EB] font-bold shrink-0">✓</span>
                <span>Varying textures, lengths &amp; volumes</span>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-3 sm:mb-5 shadow-sm">
                  03
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-[#075078] mb-1.5 sm:mb-3 leading-snug">
                  Low-Maintenance &amp; Resembles Natural Hair
                </h3>
                <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed mb-3 sm:mb-4">
                  The hair fixing services help to give low-maintenance hair solutions. They are designed to resemble and feel like natural hair. They are good for months with proper care.
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] text-[10px] sm:text-xs font-semibold text-[#005675] flex items-start sm:items-center gap-1 sm:gap-1.5">
                <span className="text-[#29B6EB] font-bold shrink-0">✓</span>
                <span>Good for months with proper care</span>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 md:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-3 sm:mb-5 shadow-sm">
                  04
                </div>
                <h3 className="text-xs sm:text-lg md:text-xl font-bold text-[#075078] mb-1.5 sm:mb-3 leading-snug">
                  Water &amp; Wind Resistant Hold
                </h3>
                <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed mb-3 sm:mb-4">
                  Most of the solutions are water-resistant, wind-resistant, and other environmental factors. This implies that your hair will stay flawless all day long.
                </p>
              </div>
              <div className="pt-2.5 sm:pt-4 border-t border-[#E2E8F0] text-[10px] sm:text-xs font-semibold text-[#005675] flex items-start sm:items-center gap-1 sm:gap-1.5">
                <span className="text-[#29B6EB] font-bold shrink-0">✓</span>
                <span>Hair stays flawless all day long</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — BANGALORE HAIR FIXING SOLUTION: BOLD AND EFFECTUAL HAIRS LOOK
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Bangalore Studio Solutions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-4">
              Bangalore Hair Fixing Solution: Bold and Effectual Hairs Look
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-6" />
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Being the hub for advanced beauty treatments, hair fixing solutions in the city were anything but different. There is an offer of world-class services, utilizing the latest technology in the delivering of a realistic and stylish hairstyle to be set for a much longer period. From hair extensions to complete non-surgical hair systems, these services come handy as per hair loss and styling needs. Professional clinics within the city offer individualized consultations to their clients, so they can select the best hair-fixing solution that suits their lifestyles and styles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Card 1: Discreet & Undetectable */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Invisible Integration
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mb-4">
                  Discreet &amp; Undetectable Like Natural Hair
                </h3>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                  <p>
                    The benefit of opting for hair fixing services in Bangalore is immense. First of all, they are designed discreetly, and then they let them be undetectable like natural hair. Whether it is full covering with a bald spot or adding volume, the results blend with your natural hair and become invisible.
                  </p>
                  <p>
                    This simply means that there is no discernible difference between your own hair and the extensions or hair pieces attached. Besides, hair fixing services especially appeal to those who would like to avoid prolong recovery periods associated with hair transplant surgeries, hence finding a faster alternative that gives immediate results.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#005675]">
                <span className="text-[#29B6EB] font-bold">✓</span>
                <span>Zero discernible difference from natural hair</span>
              </div>
            </div>

            {/* Card 2: Durability for Busy Lifestyles */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#E0F2FE] text-[#0369A1] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Active &amp; Busy Lifestyles
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mb-4">
                  Durability &amp; Low Maintenance for Active People
                </h3>
                <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
                  <p>
                    For people who are always on the move or busy, the Bangalore hair fixing solutions have really great durability and low maintenance. They are created to endure all-day activities so they are suitable for busy individuals seeking beauty minus the hassle.
                  </p>
                  <p>
                    Hair fixes are also resistant to perspiration and changes in weather, ensuring you look great at all times of the day. Whether you are going for a special event or getting on with your daily routine, hair fixing in Bangalore makes you look great effortlessly.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-semibold text-[#005675]">
                <span className="text-[#29B6EB] font-bold">✓</span>
                <span>Resistant to perspiration &amp; weather changes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — WHY CHOOSE HAIR FIXING IN TRIVANDRUM AND BANGALORE?
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 lg:p-14 shadow-sm">
            <div className="max-w-3xl mb-10 text-center sm:text-left mx-auto sm:mx-0">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Dual-City Excellence
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-4">
                Why Choose Hair Fixing in Trivandrum and Bangalore?
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] rounded-full mb-6 mx-auto sm:mx-0" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 text-sm sm:text-base text-[#475569] leading-relaxed">
              <div className="space-y-4">
                <p>
                  Quality high fixing services of hair at Trivandrum and Bangalore ensure natural, trendy, and long-lasting treatment for the problems being arisen due to alteration in hair. Whether you have bald patches or thinning areas, hair fixing solutions ensure you look great while you feel confident about your appearance.
                </p>
                <p>
                  With professional salons offering customized options and advanced techniques, clients in both cities can enjoy transformative results with minimal effort.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  In addition, these solutions give comfort and low maintenance; hence they rank as one of the best solutions for anyone looking for a worry-free and long-lasting hair growth. This procedure of affixing hair becomes discreet and effective in these both cities to give outcomes that seem quite real and would blend very well with your existing hair.
                </p>
                <p>
                  The best hair fixing solutions available today can assuredly be provided to the clients in Trivandrum and Bangalore through professional expertise, advanced technology, and personalized service. From volume and length to full coverage, hair fixing in these cities will give immediate, long-term transformations minus any surgical or complicated procedures.
                </p>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#E2E8F0] flex flex-wrap gap-4 items-center justify-center sm:justify-start">
              <Link
                href="https://ozzonehair.com/contact/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <span>Please Contact Today</span>
                <span>→</span>
              </Link>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="btn-secondary-light inline-flex items-center justify-center gap-2"
              >
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — PLEASE CONTACT TODAY (Callout Strip)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] py-14 sm:py-18 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#174BA5]/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left relative z-10">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#29B6EB] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Transformative Results with Minimal Effort
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-3 mb-2">
              Please Contact Today
            </h2>
            <p className="text-xs sm:text-base text-white/90 max-w-2xl leading-relaxed">
              Experience reliable, splendid hair solving at our Trivandrum and Bangalore locations, and enjoy a rejuvenated look with an answer tailor-made for your needs.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#29B6EB] mt-3">
              Trivandrum: Palayam • Bangalore: Indiranagar • Helpline: +91 77360 77110 / 098470 62707
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="https://ozzonehair.com/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-center"
            >
              Please Contact Today
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20consult%20about%20hair%20fixing%20solutions.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FAQ (10 Questions & Answers)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Faq
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Find answers regarding our hair fixing solutions, procedure, wash and care, and aftercare services in Trivandrum and Bangalore.
            </p>
          </div>

          {/* Interactive Semantic FAQ Accordion List */}
          <div className="space-y-4">
            {SOLUTIONS_FAQS.map((faq, index) => (
              <details
                key={faq.id}
                className="group bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 transition-all duration-200 open:bg-white open:border-[#29B6EB] open:shadow-md"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer list-none select-none font-bold text-sm sm:text-base text-[#075078] hover:text-[#005675] transition-colors">
                  <span className="flex items-start gap-2.5 sm:gap-3 text-left pr-4">
                    <span className="w-6 h-6 rounded-lg bg-[#005675]/10 text-[#005675] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 group-open:bg-[#29B6EB] group-open:text-[#075078] transition-colors">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <svg className="w-5 h-5 text-[#005675] shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>

                <div className="pt-4 pl-8 sm:pl-9 pr-2 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] mt-3 space-y-3">
                  <p>{faq.answer}</p>
                  <div>
                    <a
                      href={faq.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005675] hover:text-[#29B6EB] transition-colors"
                    >
                      <span>Hair Fixing in Trivandrum Details</span>
                      <span className="text-[11px]">↗</span>
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10 pt-6 border-t border-[#E2E8F0]">
            <p className="text-xs sm:text-sm text-[#64748B] mb-4">
              Have more questions? Reach out to our specialized team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://ozzonehair.com/contact/"
                className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                <span>Please Contact Today</span>
                <span>→</span>
              </Link>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="btn-secondary-light inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
