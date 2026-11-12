import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { 
  Check, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Award
} from 'lucide-react'
import { SERVICES_DATA, SITE_INFO } from '@/data/siteData'
import {
  FadeInUp,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  TiltCard3D,
  HoverLift3D,
} from '@/components/MotionWrappers'

export const metadata: Metadata = {
  title: 'Hair Fixing Services in Thiruvananthapuram | Hair Patch & Bonding',
  description: 'Explore non-surgical hair replacement services in Thiruvananthapuram: custom hair patching, dermatological hair bonding, micro-weaving & full scalp systems.',
  alternates: {
    canonical: 'https://ozzonehair.com/services/',
  },
  openGraph: {
    title: 'Hair Fixing Services in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Precision hair patching, medical-grade bonding, micro-track weaving & custom toppers in Trivandrum. 100% human hair, zero surgery.',
    url: 'https://ozzonehair.com/services/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing Services in Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Services in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Precision hair patching, medical-grade bonding & hair replacement in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Non-Surgical Hair Fixing Services in Thiruvananthapuram',
  description: 'Comprehensive hair replacement and fixing techniques at ozzone Hair Studio Thiruvananthapuram',
  itemListElement: SERVICES_DATA.map((service, index) => ({
    '@type': 'Service',
    position: index + 1,
    name: service.title,
    description: service.shortDesc,
    provider: {
      '@type': 'HairSalon',
      name: 'ozzone Hair Thiruvananthapuram',
      url: 'https://ozzonehair.com/',
    },
    areaServed: {
      '@type': 'City',
      name: 'Thiruvananthapuram',
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

const servicesFaqs = [
  {
    q: 'Where can I get hair fixing in Thiruvananthapuram?',
    a: 'You can get professional non-surgical hair fixing at ozzone Hair Studio located at Statue Junction (MG Road, opposite Secretariat) and Pattom in Thiruvananthapuram, Kerala. We provide private consultation suites and custom fittings in 90 minutes.',
  },
  {
    q: 'What is hair fixing and how is it done?',
    a: 'Hair fixing is a non-surgical aesthetic hair restoration procedure where a customized 100% natural human hair system is matched to your scalp tone, contour, and density, and secured using dermatological adhesives, micro-tapes, or clip-integration without scalp incisions or downtime.',
  },
  {
    q: 'How long does a hair patch last in Kerala’s climate?',
    a: 'A high-grade human hair patch lasts between 6 to 12 months with routine care. The bonding adhesive hold lasts 4 to 6 weeks, after which a 45-minute re-bonding and scalp hygiene service is performed at our Trivandrum studio.',
  },
  {
    q: 'What is the difference between hair fixing and hair transplantation?',
    a: 'Hair fixing is 100% non-surgical, instant (completed in 90 minutes), pain-free, provides guaranteed full density, and is completely reversible. Hair transplants require invasive surgery, donor follicles, months of recovery, and carry unpredictable density.',
  },
  {
    q: 'Can you swim, gym, and shower with a bonded hair patch?',
    a: 'Yes. Our medical-grade waterproof adhesives (such as Ultrahold) are formulated for Kerala’s high humidity and coastal weather. You can shower, swim at Kovalam beach or swimming pools, and do intense gym workouts without worrying about the bond loosening.',
  },
  {
    q: 'Which hair replacement solution is suitable for men in Trivandrum?',
    a: 'For men with crown thinning or receding hairlines (Norwood stages 2–5), a custom Swiss lace or micro-skin hair patch is ideal. For extensive hair loss (Norwood 6–7), a full scalp hair replacement system provides complete natural coverage.',
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
    <div className="w-full">
      {/* JSON-LD Schemas */}
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
          SECTION 1 — SERVICES HERO (3D Interactive Hero Layout)
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
                  Non-Surgical Hair Solutions
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Comprehensive{' '}
                  <span className="text-[#29B6EB]">Hair Fixing &amp; Hair Replacement</span>{' '}
                  Services in Thiruvananthapuram
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  Precision hair patching, medical-grade bonding, micro-track weaving, and custom crown toppers designed specifically for Kerala’s humid climate. Instant natural results with zero surgery and zero downtime.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <Link href="/contact" className="btn-primary">
                      Book a Free Consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20hair%20fixing%20services.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/75 text-xs sm:text-sm">
                  {['100% Remy Human Hair', 'Instant 90-Min Results', 'Zero Surgery & Painless', 'Private Consultation Suites'].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Image with 3D Interaction */}
            <div className="flex justify-center lg:justify-end items-center w-full">
              <FadeInScale delay={0.2} className="w-full max-w-md lg:max-w-[460px]">
                <TiltCard3D maxTilt={6} depth={15} className="w-full">
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/5] bg-[#075078] w-full">
                    <Image
                      src="/images/hero-indian-hair.jpg"
                      alt="Hair Fixing Services at Ozzone Hair Thiruvananthapuram"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 90vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Info Badge */}
                    <div className="absolute bottom-5 left-5 right-5 bg-[#005675]/90 backdrop-blur-md border border-white/25 rounded-xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#29B6EB]/20 flex items-center justify-center shrink-0">
                          <Award className="w-5 h-5 text-[#29B6EB]" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm">6 Advanced Fixing Techniques</p>
                          <p className="text-white/80 text-xs">Customized to your exact scalp needs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </FadeInScale>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — SERVICES LIST (3D Interactive Cards)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Custom Scalp Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mb-3">
                Advanced Hair Replacement Techniques
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-base text-[#64748B]">
                Every technique is customized to your exact degree of hair loss, hair density, texture, wave pattern, and age.
              </p>
            </FadeInUp>
          </div>

          <div className="space-y-16">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1
              return (
                <FadeInUp key={service.id} delay={0.1}>
                  <div 
                    id={service.id}
                    className={`bg-[#F3F7FB] rounded-2xl border border-[#E2E8F0] p-6 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center card-3d-interactive ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <TiltCard3D maxTilt={6} depth={12}>
                        <div className="relative h-72 sm:h-84 rounded-xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-[#075078]">
                          <Image
                            src={service.image}
                            alt={`${service.title} - Non-Surgical Hair Replacement in Thiruvananthapuram`}
                            fill
                            className="object-cover image-zoom-hover"
                            sizes="(max-width: 1024px) 100vw, 40vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute top-4 left-4 bg-[#005675]/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                            Starts at {service.priceStarting}
                          </div>
                        </div>
                      </TiltCard3D>
                    </div>

                    {/* Content Column */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-white text-[#005675] border border-[#E2E8F0] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-xs">
                          <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                          <span>{service.duration}</span>
                        </span>
                        <span className="bg-[#005675] text-white px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                          100% Virgin Hair
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-[#075078]">
                        {service.title}
                      </h3>

                      <p className="text-sm text-[#252B38] leading-relaxed">
                        {service.fullDesc}
                      </p>

                      <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] space-y-2 shadow-xs">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#075078]">
                          Key Benefits &amp; Advantages:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#252B38]">
                          {service.benefits.map((b, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#29B6EB] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-xs text-[#64748B]">
                        <strong>Best Suited For:</strong> {service.suitability}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <HoverLift3D>
                          <Link
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            className="btn-primary"
                          >
                            <span>Book {service.title}</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </HoverLift3D>

                        <HoverLift3D>
                          <a
                            href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn-whatsapp"
                          >
                            <FaWhatsapp className="w-4 h-4 text-white" />
                            <span>WhatsApp Inquire</span>
                          </a>
                        </HoverLift3D>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              )
            })}
          </div>

          {/* Centered CTA */}
          <FadeInUp delay={0.2} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/solutions" className="btn-primary">
                View All Solutions
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — ROUTINE SERVICING & MAINTENANCE PROCESS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Monthly Care
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-3">
                Our 4-Step Hair System Servicing Process
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-base text-[#64748B]">
                Every 3 to 5 weeks, visit our studio for a relaxing 45-minute rejuvenation routine.
              </p>
            </FadeInUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '1',
                title: 'Painless Unit Removal',
                desc: 'Organic citrus-based solvent releases the bond gently without pulling or stressing natural hair.',
              },
              {
                num: '2',
                title: 'Deep Scalp Exfoliation',
                desc: 'Anti-fungal, tea-tree scalp scrub removes dead cells and excess sebum for healthy skin breathing.',
              },
              {
                num: '3',
                title: 'Hair Unit Conditioning',
                desc: 'Ultrasonic base wash and Moroccan argan deep conditioning restore silkiness, shine, and soft texture.',
              },
              {
                num: '4',
                title: 'Fresh Re-Bonding & Cut',
                desc: 'New waterproof medical adhesive applied with precision haircut trim for seamless blending.',
              },
            ].map((step, idx) => (
              <FadeInUp key={step.num} delay={idx * 0.1}>
                <TiltCard3D maxTilt={6} depth={10}>
                  <div className="bg-white p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 card-3d-interactive h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#005675] text-[#29B6EB] font-bold text-lg flex items-center justify-center mb-4 shadow-sm">
                        {step.num}
                      </div>
                      <h4 className="text-base font-bold text-[#075078] mb-2">{step.title}</h4>
                      <p className="text-xs text-[#64748B] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </TiltCard3D>
              </FadeInUp>
            ))}
          </div>

          {/* Centered CTA */}
          <FadeInUp delay={0.2} className="text-center mt-12 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/pricing" className="btn-primary">
                View Maintenance Packages
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — ANSWER ENGINE & USER FAQ SECTION (AEO & QEO)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <FadeInUp>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
                Expert Answers
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mb-3">
                Frequently Asked Questions on Hair Fixing Services
              </h2>
              <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
              <p className="text-base text-[#64748B]">
                Direct answers to common questions about hair fixing, patching, maintenance, and durability in Thiruvananthapuram.
              </p>
            </FadeInUp>
          </div>

          <div className="space-y-4">
            {servicesFaqs.map((faq, idx) => (
              <FadeInUp key={idx} delay={idx * 0.05}>
                <details
                  className="group border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300 hover:border-[#29B6EB] shadow-xs"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-[#075078] font-semibold text-sm sm:text-base hover:bg-[#F3F7FB] transition-colors list-none">
                    <span className="pr-4">{faq.q}</span>
                    <span className="text-[#29B6EB] transition-transform group-open:rotate-45 text-2xl leading-none flex-shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-[#64748B] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4 bg-[#F3F7FB]/40">
                    {faq.a}
                  </div>
                </details>
              </FadeInUp>
            ))}
          </div>

          {/* Centered CTA */}
          <FadeInUp delay={0.2} className="text-center mt-8 flex justify-center">
            <HoverLift3D className="inline-block">
              <Link href="/faq" className="btn-secondary-light">
                View All FAQs
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </HoverLift3D>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — FINAL CTA BANNER (Full Width Hero Gradient)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB]/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Not Sure Which{' '}
              <span className="text-[#29B6EB]">Hair Fixing Technique</span>{' '}
              Fits You Best?
            </h2>
            <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let our senior hair replacement trichologist inspect your scalp density and suggest the ideal match. Book a free, private analysis today.
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
                  Book Complimentary Analysis
                </Link>
              </HoverLift3D>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  )
}
