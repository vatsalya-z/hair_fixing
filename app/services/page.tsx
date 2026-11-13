import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Scissors,
  CheckCircle2,
  MapPin,
  ArrowRight,
  BadgePercent,
  Layers,
  Award,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Best Hair Fixing in Trivandrum and Bangalore | ozzone Hair Services',
  description:
    'Experience reliable, splendid hair solving at our Trivandrum and Bangalore locations. Natural, undetectable solutions tailored for your needs.',
  alternates: {
    canonical: 'https://ozzonehair.com/services/',
  },
  openGraph: {
    title: 'Best Hair Fixing in Trivandrum and Bangalore | ozzone Hair Services',
    description:
      'Professional hair solving services in Trivandrum and Bangalore. Natural, undetectable effects that repair confidence and style.',
    url: 'https://ozzonehair.com/services/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: 'https://ozzonehair.com/wp-content/uploads/2024/06/thumb_1.png',
        width: 1200,
        height: 630,
        alt: 'Best Hair Fixing in Trivandrum and Bangalore',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hair Fixing in Trivandrum and Bangalore | ozzone Hair Services',
    description:
      'Experience reliable, splendid hair solving at our Trivandrum and Bangalore locations.',
    images: ['https://ozzonehair.com/wp-content/uploads/2024/06/thumb_1.png'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Fixing Services in Trivandrum and Bangalore',
  description:
    'Best Hair Fixing in Trivandrum and Bangalore - Professional hair fixing services offering natural, undetectable effects.',
  url: 'https://ozzonehair.com/services/',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'Trivandrum-based Our Hair Fixing Services',
      description:
        'In Trivandrum, each client is assured of experiencing years of the staff delivering sets to them for you. Our use of top-class materials ensures that hair systems match the color blend of your natural hair perfectly.',
      provider: {
        '@type': 'HairSalon',
        name: 'ozzone Hair - Hair Fixing & Replacement Studio',
        url: 'https://ozzonehair.com/',
        telephone: SITE_INFO.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam',
          addressLocality: 'Thiruvananthapuram',
          addressRegion: 'Kerala',
          postalCode: '695034',
          addressCountry: 'IN',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Thiruvananthapuram' },
        { '@type': 'AdministrativeArea', name: 'Kerala' },
      ],
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'Bangalore Service of Hair Fixing',
      description:
        'We bring the same level of expertise, quality, and commitment to our services in hair fixing in Bangalore, catering to the most diverse needs of a metropolitan clientele.',
      provider: {
        '@type': 'HairSalon',
        name: 'ozzone Hair - Hair Fixing & Replacement Studio',
        url: 'https://ozzonehair.com/',
        telephone: SITE_INFO.altPhone,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560008',
          addressCountry: 'IN',
        },
      },
      areaServed: [
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'AdministrativeArea', name: 'Karnataka' },
      ],
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://ozzonehair.com/services/' },
  ],
}

export default function ServicesPage() {
  return (
    <div className="w-full text-slate-800 bg-white">
      {/* Schema Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO BANNER (1. Our Services & 2. Best Hair Fixing in Trivandrum and Bangalore)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[90vh] flex items-center py-12 sm:py-16 lg:py-20 text-white">
        {/* Background Ambient Glows */}
       

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Breadcrumb Navigation */}
              <nav
                className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 font-medium"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="hover:text-[#29B6EB] transition-colors">
                  Home
                </Link>
                <span className="text-white/40" aria-hidden="true">
                  /
                </span>
                <span className="text-[#29B6EB] font-semibold">Our Services</span>
              </nav>

              {/* Tag / Badge */}
              <div className="inline-flex items-center gap-2 bg-[#29B6EB]/20 border border-[#29B6EB]/40 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#29B6EB] tracking-wide mb-4">
                <span>Our Services</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] mb-4 tracking-tight">
                Best Hair Fixing in{' '}
                <span className="text-[#29B6EB] drop-shadow-sm">Trivandrum and Bangalore</span>
              </h1>

              {/* Supplied Content Paragraphs */}
              <div className="space-y-3.5 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mb-7">
                <p>
                  Experience reliable, splendid hair solving at our Trivandrum and Bangalore locations, and enjoy a rejuvenated look with an answer tailor-made for your needs.
                </p>
              </div>

              {/* Contact Today CTA Button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
                <Link
                  href="https://ozzonehair.com/contact/"
                  className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Please Contact Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20arrange%20a%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Column (Supplied Image) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
              <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-[#075078]/50 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="https://ozzonehair.com/wp-content/uploads/2024/06/thumb_1.png"
                  alt="Best Hair Fixing in Trivandrum and Bangalore - ozzone Hair"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 sm:p-3.5 border border-white/40 shadow-lg text-[#075078]">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold">
                    <MapPin className="w-4 h-4 text-[#29B6EB]" />
                    <span>Trivandrum &amp; Bangalore Centers</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                    Natural, undetectable effects &amp; personalized solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — 3. Trivandrum and Bangalore Professional Hair Fixing Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Professional Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Trivandrum and Bangalore Professional Hair Fixing Services
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-sm space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
            <p>
              The best hair fixing centers accredited by leaders in the business are Trivandrum and Bangalore that offer the following superb benefits to people through natural-looking and effective solutions. Browse on to know more about our services, what goes into them, and why we are unique in the industry.
            </p>
            <p>
              Hair fixing is an instant, non-surgical solution for someone who has hair loss or thinning. With such other procedures, one may only start seeing the results after some weeks or months, but hair fixing brings about immediate transformation and to regain a facsimile of youth. The procedure does involve attachment of a natural-looking, quality hair system to your scalp that will then harmonize with your existing hair.
            </p>
            <p className="font-medium text-[#075078]">
              This process is sure not only to fill bald areas but also add volume to hair overall, thus perfect for anyone wanting a quick and effective make-over.
            </p>
            <p>
              For example, Trivandrum and Bangalore provide hair repair which restores one’s style to regain confidence by dealing with pattern baldness, alopecia, or general thinning. Services are catered, focusing on those seeking either a temporary and permanent solution-structures tailored to their lifestyle and preferences in style.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — 4. Trivandrum-based Services & 5. Bangalore Service
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* 4. Trivandrum-based Our Hair Fixing Services */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Trivandrum Center</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#075078] mb-3">
                  Trivandrum-based Our Hair Fixing Services
                </h3>
                <div className="w-10 h-0.5 bg-[#29B6EB] rounded-full mb-4" />
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  In Trivandrum, each client is assured of experiencing years of the staff delivering sets to them for you. Our use of top-class materials ensures that hair systems match the color blend of your natural hair perfectly. We understand every aspect of consultations, from the selected texture and shade for color to the desired density and length in your new hair.
                </p>
              </div>

              
            </div>

            {/* 5. Bangalore Service of Hair Fixing */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                  <MapPin className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Bangalore Center</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#075078] mb-3">
                  Bangalore Service of Hair Fixing
                </h3>
                <div className="w-10 h-0.5 bg-[#29B6EB] rounded-full mb-4" />
                <div className="space-y-3.5 text-sm sm:text-base text-[#475569] leading-relaxed">
                  <p>
                    We bring the same level of expertise, quality, and commitment to our services in hair fixing in Bangalore, catering to the most diverse needs of a metropolitan clientele. The team in Bangalore is quite highly specialized in creating hair systems that cater to everyone’s lifestyle and fashionable trends. We work with precision to get the highest possible output so that every hair system looks very natural, empowering the clients to go about their daily lives rather without worry.
                  </p>
                  <p>
                    Our Bangalore center has been designed with flexible appointment times to allow busy professionals to find time to have their hair fixed. Our customers come from all walks of life and continue to hold ourselves to a very high standard of service by whomever’s needs we attend to. The Bangalore centre is well equipped with the latest tools and quality hair systems, designed to last longer, thus helping them obtain a reliable solution for hair loss.
                  </p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — 6. Advantages of our hair styling service hire
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Key Benefits
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Advantages of our hair styling service hire
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Instant Result */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-[#29B6EB]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2">
                  Instant Result
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Unlike most other hair restoration techniques, hair fixing provides instant results as you can walk right out of our centers with a full head of hair.
                </p>
              </div>
            </div>

            {/* Non-Surgical Solution */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#29B6EB]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2">
                  Non-Surgical Solution
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Hair fixing doesn’t involve any surgical procedures or downtime, making it a convenient option for those who prefer non-invasive treatments.
                </p>
              </div>
            </div>

            {/* Natural Look */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#29B6EB]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2">
                  Natural Look
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Each hair system meticulously designs itself to integrate flawlessly with your existing hair, so the total effect is absolutely natural.
                </p>
              </div>
            </div>

            {/* Affordable */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                  <BadgePercent className="w-5 h-5 text-[#29B6EB]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2">
                  Affordable
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Hair fixing services by our team in Trivandrum and Bangalore offered within a low range of costs, saving money without affecting quality.
                </p>
              </div>
            </div>

            {/* Customizable */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 hover:border-[#29B6EB] transition-all hover:shadow-md sm:col-span-2 lg:col-span-2 flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                  <Scissors className="w-5 h-5 text-[#29B6EB]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2">
                  Customizable
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Any special length, texture, or color you may have is something our team will consider carefully with regards to making a hair system just exactly like what you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — 7. Why We Stand Out
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
            Our Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
            Why We Stand Out
          </h2>
          <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-6" />

          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm text-left sm:text-center text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
            <p>
              Our focus towards quality and customer satisfaction has established us as a trusted provider of hair fixing services in Trivandrum and Bangalore, but surely, we understand the emotional burden that comes in when they lose their locks; thus our focus works gallantly to help each client regain the confidence lost. Our centers in both cities are designed to offer a welcoming environment where you can feel comfortable throughout the process.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — 8. Services for Customized Hair Replacement
          (Includes: 9. Advanced Technology, 10. Natural Results, 11. Knowledge and Quality)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Customized Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Services for Customized Hair Replacement
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-5" />
            <p className="text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed">
              Our custom designed hair substitute systems are made to look just like your natural hair and are available in Trivandrum and Bangalore. We assure you of delight and a perfect match on your precise wishes by way of using the first-class materials and reducing side technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 9. Advanced Technology */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#29B6EB] transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Advanced Technology
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Take advantage of trendy strategies that redefine hair recuperation.
              </p>
            </div>

            {/* 10. Natural Results */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#29B6EB] transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Natural Results
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Our merchandise guarantee a perfect appearance via mixing in seamlessly with your herbal hair.
              </p>
            </div>

            {/* 11. Knowledge and Quality */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-7 hover:border-[#29B6EB] transition-all hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] text-[#005675] flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#29B6EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#075078] mb-2">
                Knowledge and Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                Reap peace of thoughts from our use of the great substances and unmatched understanding in hair restore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — 12. Contact Today CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-14 sm:py-20 relative overflow-hidden text-white">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Today revel in the hair alternative of the future.
          </h2>
          <p className="text-white/90 text-sm sm:text-base lg:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            To arrange a consultation and begin your journey toward a self-confident full head of hair get in touch with us..
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
            <Link
              href="https://ozzonehair.com/contact/"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto text-center"
            >
              <span>Please Contact Today</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20arrange%20a%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-xl shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
