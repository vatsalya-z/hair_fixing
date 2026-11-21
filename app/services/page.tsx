import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO, SERVICES_DATA } from '@/data/siteData'
import {
  SectionReveal3D,
  StaggerGridLR,
  CardRevealLR,
  Card3DTilt,
  ImageHover3D,
  FadeInUp,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'Hair Fixing Services in Trivandrum & Kerala | ozzone Hair Studio',
  description:
    'Explore expert non-surgical hair fixing services in Trivandrum: custom hair patches, dermatological hair bonding, micro-track weaving & scalp servicing. Free consultation.',
  keywords: [
    'Hair Fixing Services in Kerala',
    'Hair Fixing in Trivandrum',
    'Hair Fixing in Thiruvananthapuram',
    'Hair Patch in Trivandrum',
    'Hair Bonding in Trivandrum',
    'Hair Weaving in Trivandrum',
    'Hair Replacement in Thiruvananthapuram',
    'Non Surgical Hair Replacement in Kerala',
    'Custom Hair Replacement Systems',
  ],
  alternates: {
    canonical: 'https://ozzonehair.com/services/',
  },
  openGraph: {
    title: 'Hair Fixing Services in Trivandrum & Kerala | ozzone Hair Studio',
    description:
      'Explore expert non-surgical hair fixing services in Trivandrum: custom hair patches, dermatological hair bonding, micro-track weaving & scalp servicing.',
    url: 'https://ozzonehair.com/services/',
    siteName: 'ozzone Hair',
    images: [
      {
        url: '/images/service/Services_Hero_Section_Banner.png',
        width: 2048,
        height: 768,
        alt: 'Hair Fixing Services in Trivandrum & Kerala - ozzone Hair Studio',
      },
    ],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Services in Trivandrum & Kerala | ozzone Hair Studio',
    description:
      'Explore non-surgical hair fixing services in Trivandrum & Bangalore: custom hair patches, medical bonding, weaving & scalp spa.',
    images: ['/images/service/Services_Hero_Section_Banner.png'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Fixing & Hair Replacement Services in Thiruvananthapuram and Bangalore',
  description:
    'Professional non-surgical hair fixing, custom hair patching, dermatological bonding, and micro-track weaving services in Thiruvananthapuram and Bangalore.',
  url: 'https://ozzonehair.com/services/',
  itemListElement: SERVICES_DATA.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: `${service.title} in Trivandrum & Bangalore`,
    description: service.shortDesc,
    url: `https://ozzonehair.com${service.href}`,
    provider: {
      '@type': 'HairSalon',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      url: 'https://ozzonehair.com/',
      telephone: SITE_INFO.phone,
    },
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

const SERVICES_FAQS = [
  {
    question: 'Which is the best hair fixing studio in Trivandrum?',
    answer:
      'ozzone Hair is recognized as one of the best hair fixing studios in Trivandrum with over 18 years of clinical expertise. Conveniently located at Palayam in Thiruvananthapuram and Indiranagar in Bengaluru, we offer 100% natural human hair systems, undetectable hairlines, and private consultation rooms for both men and women.',
  },
  {
    question: 'Is hair fixing permanent?',
    answer:
      'Non-surgical hair fixing is a semi-permanent solution. The custom hair patch remains firmly bonded to your scalp for 3 to 5 weeks using waterproof dermatological bonding polymers. A quick monthly servicing cleans the scalp and re-bonds the patch for continuous, long-term use.',
  },
  {
    question: 'Can I swim or shower with a hair patch?',
    answer:
      'Yes, absolutely. Our hair bonding adhesives are completely waterproof and sweat-resistant. You can shower daily, swim in chlorinated or sea water, workout at the gym, and style your hair naturally with zero fear of detachment.',
  },
  {
    question: 'Is a hair patch suitable for young men with early baldness?',
    answer:
      'Yes, custom hair patches are ideal for young men with early male pattern baldness or receding hairlines. They provide instant density and an undetectable, age-appropriate hairline without surgical risks, scarring, or daily medications.',
  },
  {
    question: 'How do I book a free scalp consultation in Trivandrum or Bangalore?',
    answer:
      'You can schedule a free, confidential scalp analysis by calling our Trivandrum studio at +91 77360 77110, our Bangalore studio at +91 98470 62707, or messaging us on WhatsApp. Consultations are private with zero obligation.',
  },
]

const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SERVICES_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      {/* Breadcrumb Navigation Bar (Above Hero Section - Mobile Only) */}
      <div className="lg:hidden bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">Services</span>
          </nav>
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#005675]">
              <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
              Trivandrum &amp; Bangalore Centers
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (FULL WIDTH IMAGE BANNER)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#075078] overflow-hidden" aria-label="Hair Fixing Services Hero Banner">
        <h1 className="sr-only">
          Hair Fixing Services in Trivandrum, Thiruvananthapuram &amp; Kerala | ozzone Hair Studio
        </h1>
        <div className="relative w-full aspect-[2048/768]">
          <Image
            src="/images/service/Services_Hero_Section_Banner.png"
            alt="Hair Fixing Services in Trivandrum, Thiruvananthapuram and Kerala - ozzone Hair"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — 3. Trivandrum and Bangalore Professional Hair Fixing Services
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={30}>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Professional Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Trivandrum and Bangalore Professional Hair Fixing Services
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed">
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
          </SectionReveal3D>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR 6 SPECIALIZED HAIR FIXING SERVICES (DEDICATED PAGES)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 sm:py-20 lg:py-24 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Our Core Specializations
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Explore Our Specialized Hair Fixing Services
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed">
                Select an individual service below to explore detailed procedures, customization options, transparent care guidelines, and verified studio locations.
              </p>
            </div>
          </SectionReveal3D>

          {/* Staggered Left-to-Right Card Grid with 3D Tilt */}
          <StaggerGridLR
            staggerDelay={0.12}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {SERVICES_DATA.map((service) => (
              <CardRevealLR key={service.id} className="h-full">
                <Card3DTilt maxTilt={6} depth={10} className="h-full">
                  <div
                    id={service.id}
                    className="scroll-mt-24 bg-white rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
                  >
                    <div>
                      {/* Image Frame with ImageHover3D */}
                      <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                        <ImageHover3D scaleZoom={1.06}>
                          <Image
                            src={service.image}
                            alt={`${service.title} - Professional Hair Fixing Service by ozzone Hair`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </ImageHover3D>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#075078] text-xs font-bold px-3 py-1 rounded-md shadow-xs z-10 pointer-events-none">
                          {service.duration}
                        </span>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors mb-2.5 leading-snug">
                          <Link href={service.href} className="hover:underline">
                            {service.title}
                          </Link>
                        </h3>
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                          {service.shortDesc}
                        </p>

                        <div className="space-y-2 pt-2 border-t border-[#F1F5F9] mb-4">
                          {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-xs text-[#64748B]">
                              <span className="text-[#29B6EB] font-bold shrink-0">✓</span>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0">
                      <Link
                        href={service.href}
                        className="w-full btn-primary text-xs sm:text-sm flex items-center justify-center gap-2 group-hover:bg-[#174BA5] transition-colors py-3"
                      >
                        <span>View Service Details</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                      </Link>
                    </div>
                  </div>
                </Card3DTilt>
              </CardRevealLR>
            ))}
          </StaggerGridLR>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — 4. Trivandrum-based Services & 5. Bangalore Service
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-14 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerGridLR staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* 4. Trivandrum-based Our Hair Fixing Services */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
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
              </Card3DTilt>
            </CardRevealLR>

            {/* 5. Bangalore Service of Hair Fixing */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-4">
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
              </Card3DTilt>
            </CardRevealLR>
          </StaggerGridLR>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — 6. Advantages of our hair styling service hire
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-10 sm:py-18 lg:py-22 border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Key Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
                Advantages of our hair styling service hire
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            </div>
          </SectionReveal3D>

          <StaggerGridLR staggerDelay={0.1} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {/* Instant Result */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-2.5 sm:mb-4">
                      01
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                      Instant Result
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed">
                      Unlike most other hair restoration techniques, hair fixing provides instant results as you can walk right out of our centers with a full head of hair.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Non-Surgical Solution */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-2.5 sm:mb-4">
                      02
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                      Non-Surgical Solution
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed">
                      Hair fixing doesn’t involve any surgical procedures or downtime, making it a convenient option for those who prefer non-invasive treatments.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Natural Look */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-2.5 sm:mb-4">
                      03
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                      Natural Look
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed">
                      Each hair system meticulously designs itself to integrate flawlessly with your existing hair, so the total effect is absolutely natural.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Affordable */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-2.5 sm:mb-4">
                      04
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                      Affordable
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed">
                      Hair fixing services by our team in Trivandrum and Bangalore offered within a low range of costs, saving money without affecting quality.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Customizable */}
            <CardRevealLR className="col-span-2 sm:col-span-2 lg:col-span-2 h-full">
              <Card3DTilt maxTilt={5} depth={8} className="h-full">
                <div className="bg-[#F8FAFC] rounded-xl sm:rounded-2xl border border-[#E2E8F0] p-3.5 sm:p-6 hover:border-[#29B6EB] transition-all hover:shadow-md flex flex-col justify-between h-full">
                  <div>
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-xs sm:text-sm flex items-center justify-center mb-2.5 sm:mb-4">
                      05
                    </div>
                    <h3 className="text-xs sm:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                      Customizable
                    </h3>
                    <p className="text-[11px] sm:text-sm text-[#475569] leading-relaxed">
                      Any special length, texture, or color you may have is something our team will consider carefully with regards to making a hair system just exactly like what you prefer.
                    </p>
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>
          </StaggerGridLR>
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
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4">
                01
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
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4">
                02
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
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] font-bold text-sm flex items-center justify-center mb-4">
                03
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
          SECTION 6.5 — FREQUENTLY ASKED QUESTIONS (FAQ)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Frequently Asked Questions About Our Services
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Transparent answers regarding hair fixing procedures, custom hair patches, maintenance routines, and consultations in Trivandrum and Bangalore.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES_FAQS.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 hover:border-[#29B6EB] transition-colors shadow-xs"
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
              href="/contact"
              className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 group w-full sm:w-auto text-center"
            >
              <span>Please Contact Today</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
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
