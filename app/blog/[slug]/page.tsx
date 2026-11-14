import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { BLOG_POSTS, SITE_INFO } from '@/data/siteData'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Post Not Found | ozzone Hair' }

  const postImageUrl = post.image.startsWith('http')
    ? post.image
    : `https://ozzonehair.com${post.image}`

  const cleanTitle = post.title.replace(/\s*\[Draft\]\s*/i, '').trim()
  const title =
    cleanTitle.length <= 46
      ? `${cleanTitle} | ozzone Hair`
      : cleanTitle.length <= 60
      ? cleanTitle
      : `${cleanTitle.slice(0, 57)}...`

  const description =
    post.summary.length <= 155 ? post.summary : `${post.summary.slice(0, 151)}...`

  return {
    title,
    description,
    alternates: {
      canonical: `https://ozzonehair.com/blog/${post.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://ozzonehair.com/blog/${post.slug}/`,
      images: [{ url: postImageUrl, width: 800, height: 500, alt: cleanTitle }],
      type: 'article',
      siteName: 'ozzone Hair',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [postImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) notFound()

  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3)
  const fullImageUrl = post.image.startsWith('http')
    ? post.image
    : `https://ozzonehair.com${post.image}`

  const cleanTitle = post.title.replace(/\s*\[Draft\]\s*/i, '').trim()

  const parsedSections = post.content.map((para, i) => {
    const match = para.match(/^([^?:]{6,70}(\?|:))\s+(.*)$/)
    if (match) {
      return {
        isHeading: true,
        heading: match[1],
        text: match[3],
        anchorId: `heading-${i + 1}`,
      }
    }
    return {
      isHeading: false,
      heading: '',
      text: para,
      anchorId: '',
    }
  })

  const tocItems = parsedSections.filter((s) => s.isHeading)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: cleanTitle,
    description: post.summary,
    image: fullImageUrl,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    mainEntityOfPage: `https://ozzonehair.com/blog/${post.slug}/`,
    author: {
      '@type': 'Person',
      name: post.author || 'ozzone Hair Specialist Team',
      url: 'https://ozzonehair.com/about/',
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
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ozzonehair.com/blog/' },
      { '@type': 'ListItem', position: 3, name: cleanTitle, item: `https://ozzonehair.com/blog/${post.slug}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="hero-gradient-bg py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB] rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/70 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#29B6EB] transition-colors">Home</Link>
            <span className="text-[#29B6EB]">›</span>
            <Link href="/blog/" className="hover:text-[#29B6EB] transition-colors">Blog</Link>
            <span className="text-[#29B6EB]">›</span>
            <span className="text-[#29B6EB] line-clamp-1">{cleanTitle}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.isDraft && (
              <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Draft Article
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/70 text-xs sm:text-sm">
            <span>🗓️ Published: {post.date}</span>
            {post.updatedDate && <span>🔄 Updated: {post.updatedDate}</span>}
            <span>⏱️ {post.readTime}</span>
            <span>✍️ {post.author || 'ozzone Hair Specialist Team'}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={cleanTitle}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>

              {/* Summary */}
              <p className="text-[#475569] text-base sm:text-lg leading-relaxed border-l-4 border-[#29B6EB] pl-5 mb-8 italic bg-[#F8FAFC] py-3 pr-4 rounded-r-xl">
                {post.summary}
              </p>

              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 sm:p-6 mb-8">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#005675] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
                    <span>Table of Contents</span>
                  </h2>
                  <ul className="space-y-2.5 text-xs sm:text-sm">
                    {tocItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#29B6EB] font-bold">›</span>
                        <a
                          href={`#${item.anchorId}`}
                          className="text-[#075078] hover:text-[#29B6EB] hover:underline transition-colors font-medium"
                        >
                          {item.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Body */}
              <div className="prose prose-blue max-w-none space-y-6">
                {parsedSections.map((sec, i) => {
                  if (sec.isHeading) {
                    return (
                      <div key={i} id={sec.anchorId} className="space-y-2 scroll-mt-24 pt-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#075078] mt-6 mb-2">
                          {sec.heading}
                        </h2>
                        <p className="text-[#252B38] leading-relaxed text-sm sm:text-base">
                          {sec.text}
                        </p>
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="text-[#252B38] leading-relaxed text-sm sm:text-base">
                      {sec.text}
                    </p>
                  )
                })}
              </div>

              {/* Contextual Internal Links Section */}
              <div className="mt-8 p-5 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#005675] mb-2">
                  Explore More Resources:
                </h3>
                <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                  <Link href="/hair-fixing-trivandrum/" className="text-[#005675] hover:text-[#29B6EB] underline font-medium">
                    Hair Fixing in Trivandrum
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/hair-fixing-bangalore/" className="text-[#005675] hover:text-[#29B6EB] underline font-medium">
                    Hair Fixing in Bangalore
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/services/" className="text-[#005675] hover:text-[#29B6EB] underline font-medium">
                    Hair Bonding &amp; Patch Services
                  </Link>
                  <span className="text-slate-300">•</span>
                  <Link href="/contact/" className="text-[#005675] hover:text-[#29B6EB] underline font-medium">
                    Book Free Scalp Consultation
                  </Link>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F3F7FB] border border-[#E2E8F0]">
                <h3 className="text-[#075078] font-bold text-xl mb-2">Ready for Your Hair Transformation?</h3>
                <p className="text-[#64748B] text-sm mb-5 leading-relaxed">
                  Book a free, private hair analysis consultation at our Thiruvananthapuram or Bangalore studio. Our certified specialists will assess your scalp and recommend the ideal custom hair patch.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20read%20your%20blog%20article%20on%20${encodeURIComponent(cleanTitle)}%20and%20would%20like%20to%20book%20a%20consultation.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp"
                  >
                    <FaWhatsapp className="w-5 h-5 text-white" />
                    <span>Book Free Consultation</span>
                  </a>
                  <Link href="/services/" className="btn-secondary-light">
                    Our Services
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <div className="ronex-card p-6">
                <h4 className="text-[#075078] font-bold text-base mb-2">Free Scalp Consultation</h4>
                <p className="text-[#64748B] text-xs sm:text-sm mb-4 leading-relaxed">
                  Get personalized advice on hair patch styles, bonding adhesives, and density matching in complete privacy.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${SITE_INFO.phone}`}
                    className="btn-primary w-full justify-center text-xs sm:text-sm"
                  >
                    📞 Trivandrum: {SITE_INFO.phone}
                  </a>
                  <a
                    href={`tel:${SITE_INFO.altPhone}`}
                    className="btn-secondary-light w-full justify-center text-xs sm:text-sm"
                  >
                    📞 Bangalore: {SITE_INFO.altPhone}
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="ronex-card p-6">
                  <h4 className="text-[#075078] font-bold text-base mb-4">Related Guides</h4>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link key={related.id} href={`/blog/${related.slug}/`} className="group flex gap-3 p-2 rounded-xl hover:bg-[#F3F7FB] transition-colors">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#075078] font-semibold text-xs leading-snug line-clamp-2 group-hover:text-[#29B6EB] transition-colors">
                            {related.title}
                          </p>
                          <p className="text-[#64748B] text-[11px] mt-1">{related.readTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

