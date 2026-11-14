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
  if (!post) return { title: 'Post Not Found' }

  const postImageUrl = post.image.startsWith('http')
    ? post.image
    : `https://ozzonehair.com${post.image}`

  return {
    title: `${post.title} | ozzone Hair Thiruvananthapuram Blog`,
    description: post.summary,
    alternates: {
      canonical: `https://ozzonehair.com/blog/${post.slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://ozzonehair.com/blog/${post.slug}/`,
      images: [{ url: postImageUrl, width: 800, height: 500, alt: post.title }],
      type: 'article',
      siteName: 'ozzone Hair Thiruvananthapuram',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    image: fullImageUrl,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://ozzonehair.com/blog/${post.slug}/`,
    author: {
      '@type': 'Organization',
      name: 'ozzone Hair Thiruvananthapuram',
      url: 'https://ozzonehair.com/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ozzone Hair Thiruvananthapuram',
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
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://ozzonehair.com/blog/${post.slug}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <span className="text-[#29B6EB] line-clamp-1">{post.title}</span>
          </nav>

          <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span>🗓️ {post.date}</span>
            <span>⏱️ {post.readTime}</span>
            <span>✍️ ozzone Hair Team</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>

              {/* Summary */}
              <p className="text-[#64748B] text-lg leading-relaxed border-l-4 border-[#29B6EB] pl-5 mb-8 italic">
                {post.summary}
              </p>

              {/* Body */}
              <div className="prose prose-blue max-w-none space-y-6">
                {post.content.map((para, i) => {
                  const match = para.match(/^([^?:]{6,70}(\?|:))\s+(.*)$/)
                  if (match) {
                    const headingText = match[1]
                    const restText = match[3]
                    return (
                      <div key={i} className="space-y-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#075078] mt-6 mb-2">
                          {headingText}
                        </h2>
                        <p className="text-[#252B38] leading-relaxed text-base">
                          {restText}
                        </p>
                      </div>
                    )
                  }
                  return (
                    <p key={i} className="text-[#252B38] leading-relaxed text-base">
                      {para}
                    </p>
                  )
                })}
              </div>

              {/* CTA */}
              <div className="mt-10 p-6 rounded-2xl bg-[#F3F7FB] border border-[#E2E8F0]">
                <h3 className="text-[#075078] font-bold text-xl mb-2">Ready for Your Hair Transformation?</h3>
                <p className="text-[#64748B] text-sm mb-5 leading-relaxed">
                  Book a free, private hair analysis consultation at our Thiruvananthapuram studio. Our certified specialists will assess your hair loss and recommend the best solution.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20read%20your%20blog%20and%20would%20like%20to%20book%20a%20consultation.`}
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
            <aside className="lg:col-span-1">
              {/* Contact Card */}
              <div className="ronex-card p-6 mb-6">
                <h4 className="text-[#075078] font-bold text-base mb-3">Talk to a Specialist</h4>
                <p className="text-[#64748B] text-sm mb-4 leading-relaxed">
                  Get personalized advice on the right hair solution for your specific hair loss pattern.
                </p>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="btn-primary w-full justify-center text-sm"
                >
                  📞 {SITE_INFO.phone}
                </a>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-[#075078] font-bold text-base mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link key={related.id} href={`/blog/${related.slug}/`} className="group flex gap-3 ronex-card p-3 overflow-hidden">
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
                          <p className="text-[#075078] font-semibold text-xs leading-snug line-clamp-2 group-hover:text-[#174BA5] transition-colors">
                            {related.title}
                          </p>
                          <p className="text-[#64748B] text-xs mt-1">{related.readTime}</p>
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

