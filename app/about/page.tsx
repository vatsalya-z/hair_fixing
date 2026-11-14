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
  Check,
  ChevronDown,
  HelpCircle,
  ExternalLink,
  Phone
} from 'lucide-react'
import { SITE_INFO } from '@/data/siteData'
import {
  FadeInUp,
  FadeInScale,
  HoverLift3D,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'About ozzone Hair | Trusted Hair Fixing Experts, 18+ Years',
  description: 'Learn about ozzone Hair: 18+ years of trusted expertise in non-surgical hair fixing, custom hair patches & hair replacement in Trivandrum & Bangalore.',
  alternates: {
    canonical: 'https://ozzonehair.com/about/',
  },
  openGraph: {
    title: 'About ozzone Hair | Trusted Hair Fixing Experts, 18+ Years',
    description: '18+ years of trusted expertise in non-surgical hair fixing, custom hair patches and hair replacement in Trivandrum and Bangalore.',
    url: 'https://ozzonehair.com/about/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: '/images/about/About_Hero_Section_Banner.png',
        width: 2048,
        height: 768,
        alt: 'About ozzone Hair - Trusted Hair Fixing Experts, 18+ Years',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ozzone Hair | Trusted Hair Fixing Experts, 18+ Years',
    description: 'Expert hair fixing and non-surgical hair replacement in Trivandrum & Bangalore. 18+ years of excellence.',
    images: ['/images/about/About_Hero_Section_Banner.png'],
  },
}

// 10 Detailed FAQs for Hair Fixing in Trivandrum
const ABOUT_FAQS = [
  {
    id: 'faq-1',
    question: 'How is hair fixing at ozzone Hair different from other clinics?',
    href: '/services/',
    answer: 'Our hair fixing solutions are completely non-surgical, pain-free, and adapted to match your natural hair texture, color and style. We use high quality breathable Swiss lace and 100% natural human hair for an undetectable hairline and long-lasting results.',
  },
  {
    id: 'faq-2',
    question: 'How long does a hair fixing process take?',
    href: '/services/',
    answer: 'The complete hair fixing procedure takes approximately 90 minutes in a single, relaxed session. You walk in for consultation and leave with a complete, natural-looking head of hair on the very same day.',
  },
  {
    id: 'faq-3',
    question: 'Is non-surgical hair fixing a permanent solution?',
    href: '/solutions/',
    answer: 'Non-surgical hair fixing provides a long-term, semi-permanent solution. The hair system stays securely attached for 3 to 5 weeks between routine servicing, and each system lasts between 8 to 14 months before needing replacement.',
  },
  {
    id: 'faq-4',
    question: 'Can I wash, shampoo, and style my hair after hair fixing?',
    href: '/products/',
    answer: 'Yes, absolutely. Because our systems are made from 100% natural human hair, you can wash, shampoo, condition, blow dry, apply hair oil, and style your hair using normal hair care products just like your own hair.',
  },
  {
    id: 'faq-5',
    question: 'Is hair fixing suitable for all types of hair loss?',
    href: '/solutions/',
    answer: 'Yes. Our personalized hair fixing services are designed for people facing thinning hair, receding hairlines, male or female pattern baldness, alopecia, or medical hair loss, supplying successful treatments for men and women.',
  },
  {
    id: 'faq-6',
    question: 'Will hair fixing damage my natural hair or scalp?',
    href: '/faq/',
    answer: 'No, not at all. Our procedures are 100% non-invasive, pain-free, and surgery-free. We use safe, skin-friendly, dermatologically approved adhesives and breathable lace materials that protect your scalp and allow your existing natural hair to breathe comfortably.',
  },
  {
    id: 'faq-7',
    question: 'How long does a hair system last, and how often should it be replaced?',
    href: '/services/',
    answer: 'Depending on the base type (Swiss lace, French lace, or micro-skin) and maintenance care, a premium hair system typically lasts between 8 to 14 months. We recommend a brief monthly maintenance visit (every 3 to 4 weeks) to clean, condition, and re-bond.',
  },
  {
    id: 'faq-8',
    question: 'Can I swim, workout, and play sports with a hair patch?',
    href: '/faq/',
    answer: 'Yes, 100%! The medical-grade bonding agents we use are completely waterproof and sweat-resistant. You can swim in pools or the ocean, exercise intensely at the gym, play sports, and ride two-wheelers with a helmet without any risk of detachment.',
  },
  {
    id: 'faq-9',
    question: 'What is the cost of hair fixing at ozzone Hair?',
    href: '/pricing/',
    answer: 'At ozzone Hair, we offer completely transparent and competitive pricing based on the patch size, base selection, and hair density you need. Furthermore, all initial scalp evaluations and private consultations are 100% free with zero pressure or obligation.',
  },
  {
    id: 'faq-10',
    question: 'Do you provide aftercare and routine maintenance services?',
    href: '/services/',
    answer: 'Yes! We provide full ongoing aftercare services including ultrasonic deep cleaning of the system, scalp detox treatments, conditioning therapy, adhesive re-bonding, and fresh styling at both our Trivandrum and Bangalore studios.',
  },
]

// JSON-LD Structured Data
const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://ozzonehair.com/about/#aboutpage',
      url: 'https://ozzonehair.com/about/',
      name: 'About ozzone Hair Studio | Trusted Hair Fixing Centre in Trivandrum',
      description: 'Learn about ozzone Hair Studio: 18+ years of excellence in non-surgical hair fixing, custom hair patches & hair replacement in Thiruvananthapuram & Bengaluru.',
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
      mainEntity: ABOUT_FAQS.map((faq) => ({
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

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-800">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar (Above Hero Section) */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">About Us</span>
          </nav>
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#005675]">
              <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
              18+ Years in Hair Replacement
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (FULL WIDTH IMAGE BANNER)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#075078] overflow-hidden" aria-label="About Ozzone Hair Hero Banner">
        <h1 className="sr-only">
          About ozzone Hair | Trusted Hair Fixing Experts, 18+ Years in Trivandrum &amp; Bangalore
        </h1>
        <div className="relative w-full aspect-[2048/768]">
          <Image
            src="/images/about/About_Hero_Section_Banner.png"
            alt="About Ozzone Hair - Trusted Hair Fixing Experts for Over 18 Years"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — OUR PROFILE & MISSION (Full Narrative)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center items-center w-full">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square w-full max-w-md min-h-[260px] sm:min-h-[380px] shadow-xl border border-[#E2E8F0] bg-[#F3F7FB]">
                <Image
                  src="/images/gallery/client_1-1.jpg"
                  alt="Client Transformation - Leading Providers of Professional Hair Fixing in Trivandrum - Ozzone Hair"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/40 via-transparent to-transparent pointer-events-none" />
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#005675] text-white flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#29B6EB]" />
                    </div>
                    <div>
                      <p className="text-[#075078] font-bold text-sm">Seasoned Specialists</p>
                      <p className="text-[#64748B] text-xs">Over 17+ Years of Experience in the Field</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <FadeInUp>
                <div className="text-center lg:text-left">
                  <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                    Our Profile
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] leading-tight mt-3 mb-3 text-center lg:text-left">
                    Leading Providers of Professional Hair Fixing in Trivandrum
                  </h2>
                  <div className="w-16 h-1 bg-[#29B6EB] rounded-full mb-5 mx-auto lg:mx-0" />
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed text-left">
                  <p>
                    Our goal is to give you the look you want while helping you in recovering your confidence. Our goal is to provide each individual with excellent alternatives for hair replacement while also meeting their wonderful needs. Because of our unparalleled experience and current period, we are the worldwide experts in the hair replacement industry.
                  </p>
                  <p>
                    <strong className="text-[#075078]">Skill:</strong> Our achievement is basically due to our group of seasoned professionals. Our team of specialists have over 17 years of experience inside the subject and are nicely-versed inside the most recent hair healing techniques. In order to offer extraordinary outcomes, we take top notch pride in preserving on staying at the leading edge of hair substitute generation.
                  </p>
                  <p>
                    Ensuring your happiness is our top priority. Your needs are recognized and satisfied as soon as you walk in and you will find a warm and inviting environment. See what our clients have to say about us rather than taking our word for it.
                  </p>
                  <p>
                    Ozzone hair creates an experience in every person entering our doors. It brings to one a finer expert and certified hairstylist to ensure that every client leaves with a sure result of his or her choice, at the same time reflecting all factors of lifestyle aesthetic. All this is done comfortably as natural results surface because our experts just apply techniques that draw upon his artistry, compassion, and understanding of one’s unique requirement.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                  <Link
                    href="/contact/"
                    className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                  >
                    <span>Book Scalp Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/services/"
                    className="btn-secondary-light inline-flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                  >
                    <span>View Our Signature Services</span>
                  </Link>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — SIGNATURE FACILITIES & TECHNIQUES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Sophisticated Facilities &amp; Expertise
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Signature Services &amp; Skin-Friendly Materials
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Its sophisticated facilities offer signature services, including hair bonding, hair weaving, and non-surgical hair replacement. All techniques utilize high-quality material sourced from trusted suppliers, thereby giving an impression and durability after using its services.
            </p>
          </div>

          {/* Three Core Signatures Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {/* Card 1: Hair Bonding */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Hair Bonding
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Hair bonding is regarded as the most efficient and safest method for adding volume and covering bald areas, providing seamless adhesion and durability.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <span className="text-xs font-semibold text-[#29B6EB] flex items-center gap-1">
                  <Check className="w-4 h-4" /> Safe &amp; Skin-Friendly
                </span>
              </div>
            </div>

            {/* Card 2: Hair Weaving */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-5 shadow-sm">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Hair Weaving
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Hair weaving allows more flexibility in achieving full hair coverage, seamlessly integrated into your lifestyle aesthetics without surgery.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <span className="text-xs font-semibold text-[#29B6EB] flex items-center gap-1">
                  <Check className="w-4 h-4" /> Maximum Flexibility
                </span>
              </div>
            </div>

            {/* Card 3: Non-Surgical Hair Replacement */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-5 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#075078] mb-3">
                  Non-Surgical Hair Replacement
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Done through non-surgical hair replacement, perfectly blending with the existing hair, if comfort and convenience of a hair system are desired but surgery is to be avoided.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <span className="text-xs font-semibold text-[#29B6EB] flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Surgery-Free
                </span>
              </div>
            </div>
          </div>

          {/* Additional Facility & Emotional Care Narrative */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-bold text-[#075078]">
                High Hygiene Levels &amp; Stringent Protocols
              </h3>
              <p>
                We pride ourselves on results and commitment to safe, skin-friendly adhesives and material. High hygiene levels with quite stringent protocols in all treatments ensure health and satisfaction of our clients.
              </p>
              <p>
                Our hair–fixing approach encompasses the latest advancements available in the industry and helps us stay not only abreast of the innovation curve but in a position to deliver contemporary effective solutions.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed border-t md:border-t-0 md:border-l border-[#E2E8F0] pt-6 md:pt-0 md:pl-8">
              <h3 className="text-xl sm:text-2xl font-bold text-[#075078]">
                Emotional Understanding &amp; Free Consultations
              </h3>
              <p>
                To understand the effect of hair loss on the emotional level, we as a team are always trying to make them feel comfortable and understood in such a warm embracing environment.
              </p>
              <p>
                All our consultations are free to our clients so that they can freely express their needs and discuss possible options for them without form of pressure. Give you the best and reliable hair fixing services that will help you feel confident and style at every strand. Let’s help you regain your natural look while making your beauty brighter with specially designed techniques especially for Ozzone hair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — COMMITMENT TO CUSTOMER CARE (Dedicated Callout)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] py-14 sm:py-18 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#174BA5]/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left relative z-10">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#29B6EB] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Customer First Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold mt-3 mb-2">
              Commitment to Customer Care
            </h2>
            <p className="text-xs sm:text-base text-white/90 max-w-2xl leading-relaxed">
              Ensuring your happiness is our top priority. Your needs are recognized and satisfied as soon as you walk in and you will find a warm and inviting environment. See what our clients have to say about us rather than taking our word for it.
            </p>
            <p className="text-xs sm:text-sm font-semibold text-[#29B6EB] mt-3">
              Customer Care: +91 77360 77110 / 098470 62707 • Trivandrum &amp; Bangalore
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto text-center"
            >
              Please Contact Us
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20connect%20with%20customer%20care.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — FAQ - HAIR FIXING IN TRIVANDRUM (10 Comprehensive Items)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Faq- Hair Fixing in Trivandrum
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Find transparent, honest answers to common questions about hair fixing, maintenance, procedure times, costs, and aftercare services in Trivandrum.
            </p>
          </div>

          {/* Interactive Semantic FAQ Accordion List */}
          <div className="space-y-4">
            {ABOUT_FAQS.map((faq, index) => (
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
                  <ChevronDown className="w-5 h-5 text-[#005675] shrink-0 transition-transform duration-300 group-open:rotate-180" />
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
                      <span>Explore Hair Fixing in Trivandrum Guide</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10 pt-6 border-t border-[#E2E8F0]">
            <p className="text-xs sm:text-sm text-[#64748B] mb-4">
              Have a specific question not answered here? Our hair technicians are here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact/"
                className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                <span>Ask Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="btn-secondary-light inline-flex items-center gap-2 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 text-[#005675]" />
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — FINAL TRANSFORMATION CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-16 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#174BA5]/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#29B6EB] tracking-wide mb-4">
            <Sparkles className="w-4 h-4 text-[#29B6EB]" />
            <span>Begin Your Hair Transformation Today</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Ready to Regain Your Confidence &amp; Natural Look?
          </h2>

          <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free, 100% confidential scalp evaluation with our experienced specialists in Trivandrum or Bangalore. Zero pressure, clear transparent pricing, and instant results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <HoverLift3D>
              <Link
                href="/contact/"
                className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto text-center"
              >
                <span>Please Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </HoverLift3D>

            <HoverLift3D>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>WhatsApp Consultation</span>
              </a>
            </HoverLift3D>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white/75 mt-8 pt-6 border-t border-white/15">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#29B6EB]" />
              <span>100% Private Consulting Suites</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#29B6EB]" />
              <span>Zero-Obligation Scalp Analysis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#29B6EB]" />
              <span>Helpline: +91 77360 77110 / 098470 62707</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
