import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { BLOG_POSTS, SITE_INFO } from '@/data/siteData'
import { BLOG_DETAILS, BlogDetail } from '@/data/blogDetailData'
import BlogFAQAccordion from '@/components/BlogFAQAccordion'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const detail = BLOG_DETAILS[slug]
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!detail && !post) {
    return {
      title: 'Article Not Found | ozzone Hair',
      description: 'The requested hair fixing article could not be found.',
    }
  }

  const titleText = detail ? detail.cleanTitle : post!.title.replace(/\s*\[Draft\]\s*/i, '').trim()
  const pageTitle = `${titleText} | ozzone Hair`
  const description = detail ? detail.summary : post!.summary
  const heroImage = detail ? detail.heroImage : post!.image
  const fullImageUrl = heroImage.startsWith('http')
    ? heroImage
    : `https://ozzonehair.com${heroImage}`
  const canonicalUrl = `https://ozzonehair.com/blog/${slug}/`

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
      type: 'article',
      siteName: 'ozzone Hair',
      locale: 'en_IN',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 675,
          alt: titleText,
        },
      ],
      publishedTime: detail?.date || post?.date,
      modifiedTime: detail?.updatedDate || post?.updatedDate,
      authors: [detail?.author || post?.author || 'ozzone Hair Specialist Team'],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: [fullImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const blog: BlogDetail | undefined = BLOG_DETAILS[slug]
  const fallbackPost = BLOG_POSTS.find((p) => p.slug === slug)

  if (!blog && !fallbackPost) {
    notFound()
  }

  // Active blog properties
  const title = blog ? blog.title : fallbackPost!.title.replace(/\s*\[Draft\]\s*/i, '').trim()
  const cleanTitle = blog ? blog.cleanTitle : title
  const category = blog ? blog.category : fallbackPost!.category
  const author = blog ? blog.author : fallbackPost!.author || 'ozzone Hair Specialist Team'
  const authorRole = blog ? blog.authorRole : 'Hair Replacement Specialists'
  const date = blog ? blog.date : fallbackPost!.date
  const updatedDate = blog ? blog.updatedDate : fallbackPost!.updatedDate
  const readTime = blog ? blog.readTime : fallbackPost!.readTime
  const summary = blog ? blog.summary : fallbackPost!.summary
  const heroImage = blog ? blog.heroImage : fallbackPost!.image
  const heroImageAlt = blog ? blog.heroImageAlt : title
  const introImage = blog ? blog.introImage : heroImage
  const introImageAlt = blog ? blog.introImageAlt : title
  const canonicalUrl = `https://ozzonehair.com/blog/${slug}/`
  const fullHeroImageUrl = heroImage.startsWith('http')
    ? heroImage
    : `https://ozzonehair.com${heroImage}`

  // Related posts (pick 3 other blogs)
  const relatedSlugs = blog?.relatedSlugs || []
  let relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== slug && relatedSlugs.includes(p.slug)
  )
  if (relatedPosts.length < 3) {
    const additional = BLOG_POSTS.filter(
      (p) => p.slug !== slug && !relatedPosts.some((r) => r.slug === p.slug)
    )
    relatedPosts = [...relatedPosts, ...additional].slice(0, 3)
  }

  // JSON-LD Structured Data
  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: cleanTitle,
    description: summary,
    image: fullHeroImageUrl,
    datePublished: date,
    dateModified: updatedDate || date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    author: {
      '@type': 'Person',
      name: author,
      jobTitle: authorRole,
      worksFor: {
        '@type': 'Organization',
        name: 'ozzone Hair - Hair Fixing & Replacement Studio',
        url: 'https://ozzonehair.com/',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      url: 'https://ozzonehair.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ozzonehair.com/images/ozzone-hair-logo-dark.png',
      },
    },
    articleSection: category,
    keywords: `${category}, hair fixing, non surgical hair replacement, hair patch, Trivandrum, Kerala`,
  }

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
        name: 'Blog',
        item: 'https://ozzonehair.com/blog/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cleanTitle,
        item: canonicalUrl,
      },
    ],
  }

  const faqSchema =
    blog && blog.faqs && blog.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: blog.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
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
          SECTION 1: FULL-WIDTH BLOG HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[500px] sm:min-h-[580px] md:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#075078]">
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
          {/* Subtle multi-layer overlay for maximum readability and brand atmosphere */}
        </div>

        {/* Content Container - Expanded Full Width */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20 sm:py-28 md:py-32 text-center flex flex-col items-center justify-center">
          {/* Breadcrumb Navigation inside Hero (Mobile Only) */}
          <nav
            aria-label="Breadcrumbs"
            className="lg:hidden flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm text-white/80 font-medium mb-5 sm:mb-7 tracking-wide"
          >
            <Link
              href="/"
              className="text-white/80 hover:text-[#29B6EB] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#29B6EB]/70">/</span>
            <Link
              href="/blog/"
              className="text-white/80 hover:text-[#29B6EB] transition-colors"
            >
              Blog
            </Link>
            <span className="text-[#29B6EB]/70">/</span>
            <span className="text-[#29B6EB] font-semibold">
              {category}
            </span>
          </nav>

          {/* Category Tag Badge */}
          <div className="mb-5">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#29B6EB]/20 text-[#29B6EB] border border-[#29B6EB]/40 backdrop-blur-md">
              {category}
            </span>
          </div>

          {/* Main Blog Title - Center Aligned & Full Width */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-5xl mx-auto mb-6 sm:mb-8">
            {title}
          </h1>

          {/* Editorial Meta Info Bar - Human-Made Style without Icon Clutter */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-white/90 font-medium max-w-3xl mx-auto">
            <span>By <strong className="text-white font-semibold">{author}</strong></span>
            <span className="text-white/40">•</span>
            <span>Published {date}</span>
            {updatedDate && (
              <>
                <span className="text-white/40 hidden sm:inline">•</span>
                <span className="text-white/70 hidden sm:inline">(Updated: {updatedDate})</span>
              </>
            )}
            <span className="text-white/40">•</span>
            <span className="text-[#29B6EB] font-semibold">{readTime}</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2: BLOG INTRODUCTION & KEY POINTS (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 md:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3">
              Overview &amp; Key Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
              {blog?.introHeading || 'Understanding the Essentials of Hair Fixing'}
            </h2>
            <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
          </div>

          {/* Full-Width Intro Grid: 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
            {/* Left: Intro Text (7 cols) */}
            <div className="lg:col-span-7 space-y-5 text-base sm:text-lg md:text-xl text-[#252B38] leading-relaxed">
              {blog?.introParagraphs ? (
                blog.introParagraphs.map((para, i) => <p key={i}>{para}</p>)
              ) : (
                <p>{summary}</p>
              )}
            </div>

            {/* Right: Featured Intro Image (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/3] group">
                <Image
                  src={introImage}
                  alt={introImageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/60 backdrop-blur-xs px-3.5 py-2 rounded-lg">
                  {introImageAlt}
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Key Takeaways Banner with Human Editorial Numbers (01, 02, 03, 04) */}
          {blog?.keyTakeaways && blog.keyTakeaways.length > 0 && (
            <div className="w-full bg-[#F3F7FB] rounded-2xl p-4 sm:p-10 md:p-12 border border-[#E2E8F0] shadow-xs">
              <div className="mb-6 sm:mb-8 border-b border-[#E2E8F0] pb-4 sm:pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#005675]">
                  Key Takeaways
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#075078] mt-1">
                  What You Will Learn from This Guide
                </h3>
              </div>

              {/* 2 columns on mobile, 4 columns on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                {blog.keyTakeaways.map((point, idx) => {
                  const numStr = (idx + 1).toString().padStart(2, '0')
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-3.5 sm:p-6 border border-[#E2E8F0] shadow-2xs hover:border-[#29B6EB] hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="inline-block text-lg sm:text-2xl font-mono font-extrabold text-[#29B6EB] mb-1.5 sm:mb-3">
                          {numStr}
                        </span>
                        <h4 className="text-xs sm:text-base md:text-lg font-bold text-[#075078] mb-1.5 sm:mb-2 leading-snug">
                          {point.title}
                        </h4>
                        <p className="text-[11px] sm:text-sm text-[#64748B] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3: DETAILED BLOG CONTENT (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          {/* 12-Column Responsive Layout: 8 cols content + 4 cols consultation sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Main Article Content (8 columns) */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {blog?.sections ? (
                blog.sections.map((section, sIdx) => (
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
                        className="text-base sm:text-lg md:text-xl text-[#252B38] leading-relaxed"
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
                ))
              ) : (
                <div className="space-y-6">
                  {fallbackPost?.content.map((p, i) => (
                    <p key={i} className="text-base sm:text-lg text-[#252B38] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}

              {/* In-Article Full Width Image */}
              {blog?.inArticleImage && (
                <figure className="my-10 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md bg-[#F8FAFC]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={blog.inArticleImage.src}
                      alt={blog.inArticleImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                  {blog.inArticleImage.caption && (
                    <figcaption className="p-4 text-center text-xs sm:text-sm text-[#64748B] italic border-t border-[#E2E8F0]">
                      {blog.inArticleImage.caption}
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
                    Have questions about this article or want to check hair system options in person? Visit our private consultation suites in Thiruvananthapuram or Bangalore.
                  </p>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20read%20your%20blog%20article%20on%20${encodeURIComponent(cleanTitle)}%20and%20would%20like%20to%20book%20a%20consultation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center text-sm font-semibold py-3 shadow-sm"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      <span>WhatsApp Consultation</span>
                    </a>

                    <a
                      href={`tel:${SITE_INFO.phone}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white hover:bg-slate-50 text-[#075078] border border-[#E2E8F0] font-semibold text-xs sm:text-sm transition-colors shadow-2xs"
                    >
                      <span>Call Trivandrum: {SITE_INFO.phone}</span>
                    </a>

                    
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] text-[11px] sm:text-xs text-[#64748B] space-y-1.5">
                    <p className="font-semibold text-[#075078]">Studio Locations:</p>
                    <p>• Palayam, Thiruvananthapuram (Opp. Jubilee Hospital)</p>
                    <p>• HAL 2nd Stage, Indiranagar, Bengaluru</p>
                  </div>
                </div>

                {/* Quick Share / Trust Note */}
                <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] text-xs text-[#64748B] space-y-2">
                  <p className="font-bold text-[#075078]">Confidential &amp; Private</p>
                  <p className="leading-relaxed">
                    All hair fixing consultations, patch fittings, and monthly service sessions are performed in 100% private, sound-insulated suites.
                  </p>
                </div>
              </div>
            </aside>

            {/* Contextual Resources Bar (spans full width of grid) */}
            <div className="lg:col-span-12 mt-6 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#005675] mb-4">
                Explore More Hair Fixing Services &amp; Guides:
              </h3>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                <Link
                  href="/hair-fixing-trivandrum/"
                  className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#075078] hover:text-[#29B6EB] hover:border-[#29B6EB] transition-colors font-medium shadow-2xs"
                >
                  Hair Fixing in Trivandrum →
                </Link>
                <Link
                  href="/hair-fixing-bangalore/"
                  className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#075078] hover:text-[#29B6EB] hover:border-[#29B6EB] transition-colors font-medium shadow-2xs"
                >
                  Hair Fixing in Bangalore →
                </Link>
                <Link
                  href="/services/"
                  className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#075078] hover:text-[#29B6EB] hover:border-[#29B6EB] transition-colors font-medium shadow-2xs"
                >
                  Hair Bonding &amp; Patch Services →
                </Link>
                
                <Link
                  href="/contact/"
                  className="px-4 py-2 rounded-xl bg-white border border-[#E2E8F0] text-[#075078] hover:text-[#29B6EB] hover:border-[#29B6EB] transition-colors font-medium shadow-2xs"
                >
                  Book Free Scalp Consultation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4: TOPIC-SPECIFIC FAQ ACCORDION SECTION (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      {blog?.faqs && blog.faqs.length > 0 && (
        <section className="py-14 sm:py-20 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3 shadow-2xs">
                Questions &amp; Answers
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base md:text-lg text-[#64748B]">
                Clear, practical answers about {cleanTitle.toLowerCase()} from our certified specialists.
              </p>
            </div>

            {/* Accordion Component - Spans Full Width */}
            <div className="w-full max-w-5xl mx-auto">
              <BlogFAQAccordion faqs={blog.faqs} blogTitle={cleanTitle} />
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5: EXPLORE MORE BLOGS (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      {relatedPosts.length > 0 && (
        <section className="py-14 sm:py-20 md:py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3">
                Further Reading
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
                Explore More Blogs
              </h2>
              <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base md:text-lg text-[#64748B]">
                Discover additional expert guides on hair systems, maintenance, and styling.
              </p>
            </div>

            {/* 3 Related Blog Cards Spanning Full Width */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}/`}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
                >
                  {/* Card Image */}
                  <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-xs text-[#075078] text-[11px] font-bold px-3 py-1 rounded-md shadow-xs">
                      {related.category}
                    </span>
                    <span className="absolute bottom-3.5 right-3.5 bg-[#075078] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 shadow-md">
                      <span>Read Article</span>
                      <span className="text-[#29B6EB]">→</span>
                    </span>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-[#64748B] mb-3">
                        <span>{related.date}</span>
                        <span>•</span>
                        <span className="font-medium text-[#075078]">{related.readTime}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
                        {related.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] flex items-center text-xs font-semibold text-[#005675] group-hover:text-[#29B6EB] transition-colors">
                      <span>Read full guide →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6: FINAL CTA SECTION (FULL WIDTH)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-gradient-to-br from-[#075078] via-[#104C88] to-[#174BA5] text-white relative overflow-hidden">
        {/* Subtle Decorative Ambient Background Glow */}
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
            Book a free, 100% confidential scalp analysis at our Thiruvananthapuram or Bangalore studio. Our certified specialists will assess your scalp, match your hair texture, and recommend the ideal custom hair system.
          </p>

          {/* Centered CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xl sm:max-w-none mx-auto">
            {/* WhatsApp Booking */}
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20read%20your%20blog%20article%20on%20${encodeURIComponent(cleanTitle)}%20and%20would%20like%20to%20book%20a%20free%20scalp%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto px-6 py-3.5 text-base font-semibold shadow-lg hover:shadow-2xl sm:whitespace-nowrap"
            >
              <FaWhatsapp className="w-5 h-5 shrink-0" />
              <span>Book Free Consultation</span>
            </a>

            {/* View Services */}
            <Link
              href="/services/"
              className="btn-secondary-dark w-full sm:w-auto px-6 py-3.5 text-base font-semibold sm:whitespace-nowrap"
            >
              <span>Explore All Services →</span>
            </Link>

            {/* Direct Call */}
            <a
              href={`tel:${SITE_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-base font-semibold transition-all duration-300 w-full sm:w-auto sm:whitespace-nowrap"
            >
              <span>Call: {SITE_INFO.phone}</span>
            </a>
          </div>

          {/* Trust badges footer */}
          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-white/80">
            <span className="font-medium">✓ 100% Virgin Human Hair</span>
            <span className="font-medium">✓ Hypoallergenic Medical Bonding</span>
            <span className="font-medium">✓ Private Consultation Suites</span>
          </div>
        </div>
      </section>
    </article>
  )
}
