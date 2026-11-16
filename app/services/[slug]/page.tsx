import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'
import { SERVICE_DETAILS, ServiceDetail } from '@/data/serviceDetailData'
import ServiceFAQAccordion from '@/components/ServiceFAQAccordion'
import ServiceMapsSection from '@/components/ServiceMapsSection'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service: ServiceDetail | undefined = SERVICE_DETAILS[slug]

  if (!service) {
    return {
      title: 'Service Not Found | ozzone Hair',
      description: 'The requested hair fixing service could not be found.',
    }
  }

  const pageTitle = `${service.metaTitle} | ozzone Hair`
  const description = service.metaDescription
  const heroImage = service.heroImage
  const fullImageUrl = heroImage.startsWith('http')
    ? heroImage
    : `https://ozzonehair.com${heroImage}`
  const canonicalUrl = service.canonicalUrl

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonicalUrl,
      type: 'website',
      siteName: 'ozzone Hair',
      locale: 'en_IN',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 675,
          alt: service.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [fullImageUrl],
    },
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const service: ServiceDetail | undefined = SERVICE_DETAILS[slug]

  if (!service) {
    notFound()
  }

  const {
    title,
    category,
    heroBadge,
    heroDescription,
    heroImage,
    heroImageAlt,
    canonicalUrl,
    introHeading,
    introParagraphs,
    introImage,
    introImageAlt,
    targetAudience,
    sections,
    inArticleImage,
    processHeading,
    processSubheading,
    processSteps,
    keyHighlights,
    faqs,
    relatedSlugs,
  } = service

  const fullHeroImageUrl = heroImage.startsWith('http')
    ? heroImage
    : `https://ozzonehair.com${heroImage}`

  // Fetch the 5 other related services
  const otherServices = relatedSlugs
    .map((sSlug) => SERVICE_DETAILS[sSlug])
    .filter((s): s is ServiceDetail => Boolean(s) && s.slug !== slug)

  // JSON-LD Structured Data: Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: heroDescription,
    image: fullHeroImageUrl,
    url: canonicalUrl,
    serviceType: category,
    provider: {
      '@type': 'HairSalon',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      url: 'https://ozzonehair.com/',
      telephone: SITE_INFO.phone,
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress:
            'TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam',
          addressLocality: 'Thiruvananthapuram',
          addressRegion: 'Kerala',
          postalCode: '695034',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress:
            'Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar',
          addressLocality: 'Bengaluru',
          addressRegion: 'Karnataka',
          postalCode: '560008',
          addressCountry: 'IN',
        },
      ],
    },
    areaServed: [
      { '@type': 'City', name: 'Thiruvananthapuram' },
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'AdministrativeArea', name: 'Kerala' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
    ],
  }

  // JSON-LD Structured Data: BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        name: 'Services',
        item: 'https://ozzonehair.com/services/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: canonicalUrl,
      },
    ],
  }

  // JSON-LD Structured Data: FAQPage Schema
  const faqSchema =
    faqs && faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null

  return (
    <article className="w-full bg-white selection:bg-[#29B6EB]/20 selection:text-[#075078]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: FULL-WIDTH HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[520px] sm:min-h-[600px] md:min-h-[680px] flex items-center justify-center overflow-hidden bg-[#075078]">
        {/* Full-width background image covering 100vw */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={heroImageAlt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Content Container - Expanded Full Width */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28 md:py-32 text-center flex flex-col items-center justify-center">
          {/* Breadcrumb Navigation inside Hero */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm text-white/90 font-medium mb-5 sm:mb-6 tracking-wide drop-shadow-sm"
          >
            <Link
              href="/"
              className="text-white/90 hover:text-[#29B6EB] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#29B6EB]/80">/</span>
            <Link
              href="/services/"
              className="text-white/90 hover:text-[#29B6EB] transition-colors"
            >
              Services
            </Link>
            <span className="text-[#29B6EB]/80">/</span>
            <span className="text-[#29B6EB] font-semibold">{title}</span>
          </nav>

          {/* Category Tag Badge */}
          <div className="mb-4 sm:mb-5">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#29B6EB]/20 text-[#29B6EB] border border-[#29B6EB]/40 backdrop-blur-md">
              {heroBadge}
            </span>
          </div>

          {/* Main Service Title - Center Aligned & Full Width */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-5xl mx-auto mb-5 sm:mb-6 drop-shadow-md">
            {title}
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal drop-shadow-md">
            {heroDescription}
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(title)}%20and%20would%20like%20to%20book%20a%20free%20scalp%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" />
              <span>Book Free Consultation</span>
            </a>

            <Link
              href="/contact/"
              className="btn-secondary-dark w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-center"
            >
              <span>Schedule Studio Visit →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: SERVICE INTRODUCTION & AUDIENCE (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3">
              Overview &amp; Purpose
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
              {introHeading}
            </h2>
            <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
          </div>

          {/* Full-Width Intro Grid: 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
            {/* Left: Intro Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#252B38] leading-relaxed">
              {introParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              {/* Target Audience / Who Is It For */}
              <div className="pt-4 mt-4 border-t border-[#E2E8F0]">
                <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-3">
                  Who May Be Interested in This Service:
                </h3>
                <ul className="space-y-2.5 text-sm sm:text-base text-[#475569]">
                  {targetAudience.map((audience, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#29B6EB] font-bold text-base leading-snug shrink-0">✓</span>
                      <span>{audience}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Featured Intro Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/3] group bg-[#F8FAFC]">
                <Image
                  src={introImage}
                  alt={introImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-xs px-3.5 py-2 rounded-lg">
                  {introImageAlt}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 & 4: DETAILED SERVICE INFORMATION & IMAGES
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* 12-Column Responsive Layout: 8 cols content + 4 cols consultation sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Content (8 columns) */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {sections.map((section, sIdx) => (
                <section
                  key={section.id || sIdx}
                  id={section.id}
                  className="scroll-mt-24 space-y-5"
                >
                  {/* H2 Heading */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#075078] tracking-tight border-l-4 border-[#29B6EB] pl-4 sm:pl-5">
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-base sm:text-lg text-[#252B38] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}

                  {/* Subsections (H3) */}
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 pt-3">
                      {section.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] space-y-3"
                        >
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#075078]">
                            {sub.heading}
                          </h3>
                          {sub.paragraphs.map((subP, subPIdx) => (
                            <p
                              key={subPIdx}
                              className="text-sm sm:text-base text-[#475569] leading-relaxed"
                            >
                              {subP}
                            </p>
                          ))}
                          {sub.bulletPoints && (
                            <ul className="space-y-2.5 pt-2 text-sm sm:text-base text-[#334155]">
                              {sub.bulletPoints.map((bp, bpIdx) => (
                                <li key={bpIdx} className="flex items-start gap-3">
                                  <span className="text-[#29B6EB] font-bold text-lg leading-none mt-0.5">•</span>
                                  <span>{bp}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Pro Tip / Callout Box */}
                  {section.callout && (
                    <div className="p-6 sm:p-7 rounded-2xl bg-[#F3F7FB] border-l-4 border-[#075078] shadow-xs">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#005675] block mb-1">
                        {section.callout.title}
                      </span>
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-medium">
                        {section.callout.text}
                      </p>
                    </div>
                  )}
                </section>
              ))}

              {/* In-Article Full Width Supporting Image */}
              {inArticleImage && (
                <figure className="my-10 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-[#F8FAFC]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={inArticleImage.src}
                      alt={inArticleImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                  {inArticleImage.caption && (
                    <figcaption className="p-4 text-center text-xs sm:text-sm text-[#64748B] italic border-t border-[#E2E8F0]">
                      {inArticleImage.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>

            {/* Sticky Sidebar: Studio Consultation Card (4 columns) */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Consultation Card */}
                <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm space-y-5">
                  <div className="border-b border-[#E2E8F0] pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#005675] block">
                      ozzone Hair Studio
                    </span>
                    <h3 className="text-xl font-extrabold text-[#075078] mt-1">
                      Free Scalp Consultation
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    Have questions about {title.toLowerCase()} or want to examine hair patch systems in person? Visit our private consultation suites in Trivandrum or Bangalore.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center text-sm font-semibold py-3 shadow-sm"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>WhatsApp Consultation</span>
                    </a>

                    <a
                    
                      href={`tel:${SITE_INFO.altPhone}`}
                      className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-white hover:bg-slate-50 text-[#075078] border border-[#E2E8F0] font-semibold text-xs sm:text-sm transition-colors shadow-2xs"
                    >
                      <span>Call Bangalore: {SITE_INFO.altPhone}</span>
                    </a>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] text-[11px] sm:text-xs text-[#64748B] space-y-1.5">
                    <p className="font-semibold text-[#075078]">Studio Locations:</p>
                    <p>• Palayam, Thiruvananthapuram (Opp. Jubilee Hospital)</p>
                    <p>• HAL 2nd Stage, Indiranagar, Bengaluru</p>
                  </div>
                </div>

                {/* Confidentiality Guarantee */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] space-y-2">
                  <div className="text-[#075078] font-bold">
                    <span>100% Confidential &amp; Private</span>
                  </div>
                  <p className="leading-relaxed">
                    All scalp assessments, patch fittings, and routine monthly servicings are conducted inside completely private, sound-insulated consultation suites.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: SERVICE PROCESS & KEY HIGHLIGHTS (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Centered Process Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3 shadow-2xs">
              Step-by-Step Procedure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
              {processHeading}
            </h2>
            <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
            <p className="text-sm sm:text-base md:text-lg text-[#64748B]">
              {processSubheading}
            </p>
          </div>

          {/* 4 Process Cards (2-column on mobile, 4-column on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {processSteps.map((pStep, pIdx) => (
              <div
                key={pIdx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E8F0] shadow-2xs hover:border-[#29B6EB] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-2xl sm:text-3xl font-mono font-extrabold text-[#29B6EB] mb-3">
                    {pStep.step}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#075078] mb-2 leading-snug">
                    {pStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {pStep.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Highlights Grid */}
          <div className="bg-white rounded-3xl p-4 sm:p-10 md:p-12 border border-[#E2E8F0] shadow-xs">
            <div className="mb-5 sm:mb-8 border-b border-[#E2E8F0] pb-4 sm:pb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005675]">
                Why Choose This Service
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#075078] mt-1">
                Core Advantages &amp; Considerations
              </h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {keyHighlights.map((highlight, hIdx) => (
                <div
                  key={hIdx}
                  className="bg-[#F8FAFC] rounded-xl p-3.5 sm:p-6 border border-[#E2E8F0] flex flex-col justify-between"
                >
                  <h4 className="text-xs sm:text-base font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                    {highlight.title}
                  </h4>
                  <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: SERVICE-SPECIFIC FAQ ACCORDION
      ═══════════════════════════════════════════════════════════ */}
      {faqs && faqs.length > 0 && (
        <section className="py-14 sm:py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3">
                Questions &amp; Answers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base md:text-lg text-[#64748B]">
                Clear, transparent answers about {title.toLowerCase()} from our hair replacement specialists.
              </p>
            </div>

            {/* Accordion Component - Spans Full Width */}
            <div className="w-full max-w-5xl mx-auto">
              <ServiceFAQAccordion faqs={faqs} serviceTitle={title} />
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7: GOOGLE MAPS SECTION (VERIFIED LOCATIONS)
      ═══════════════════════════════════════════════════════════ */}
      <ServiceMapsSection />

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8: FINAL CTA SECTION (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#075078] via-[#104C88] to-[#174BA5] text-white relative overflow-hidden">
        {/* Decorative Ambient Background Glow */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#29B6EB] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#32B9EE] rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#29B6EB] bg-white/10 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-5">
            Private &amp; Confidential Consultation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 max-w-4xl mx-auto">
            Ready for Your Natural Hair Transformation?
          </h2>
          <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mb-6" />
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Schedule a free, confidential scalp analysis at our Thiruvananthapuram or Bangalore studio. Our certified specialists will assess your scalp, match your hair texture, and recommend the ideal custom hair system.
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xl sm:max-w-none mx-auto">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20book%20a%20free%20scalp%20consultation%20for%20${encodeURIComponent(title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto px-6 py-3.5 text-base font-semibold shadow-lg hover:shadow-2xl"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" />
              <span>Book Free Consultation</span>
            </a>

            <Link
              href="/contact/"
              className="btn-secondary-dark w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-center"
            >
              <span>Visit Contact Page →</span>
            </Link>

            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              <span>Call: {SITE_INFO.phone}</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80">
            <span className="font-medium">✓ 100% Virgin Human Hair</span>
            <span className="font-medium">✓ Hypoallergenic Medical Adhesives</span>
            <span className="font-medium">✓ 100% Private Consultation Suites</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 9: RELATED SERVICES NAVIGATION (EXPLORE OTHER SERVICES)
      ═══════════════════════════════════════════════════════════ */}
      {otherServices.length > 0 && (
        <section className="py-14 sm:py-20 md:py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3">
                Related Hair Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
                Explore Our Other Services
              </h2>
              <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base md:text-lg text-[#64748B]">
                Discover additional non-surgical hair replacement techniques and maintenance options.
              </p>
            </div>

            {/* 5 Related Service Links (Pure URL Cards without Images) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}/`}
                  className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-xs hover:border-[#29B6EB] hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#005675] bg-[#F3F7FB] px-2.5 py-1 rounded-md border border-[#E2E8F0] mb-3">
                      {other.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug">
                      {other.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#64748B] line-clamp-3 leading-relaxed">
                      {other.shortDesc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs font-semibold text-[#005675] group-hover:text-[#29B6EB] transition-colors">
                    <span>View Service Details</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
