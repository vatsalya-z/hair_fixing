'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeInUp, HoverLift3D } from '@/components/MotionWrappers'
import { BLOG_POSTS, SITE_INFO } from '@/data/siteData'

export default function BlogClient() {
  return (
    <div className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: FULL-WIDTH BLOG HERO SECTION (FULL BACKGROUND IMAGE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[360px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-[#075078] text-white">
        {/* Full-width background image covering 100vw */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/blog/Blog_Hero_Section_Banner_Man.png"
            alt="Hair Care &amp; Fixing Guides by ozzone Hair Experts - Before and After Hair Transformation"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle multi-layer overlay for maximum readability and brand atmosphere */}
          <div className="absolute inset-0 bg-[#075078]/80 sm:bg-[#075078]/70 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#075078] via-transparent to-[#075078]/85" />
          <div className="hero-subtle-glow absolute inset-0 opacity-40 pointer-events-none" />
        </div>

        {/* Content Container - Compact & Pixel-Perfect on Mobile, Spacious on Desktop */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-24 text-center flex flex-col items-center justify-center">
          {/* Breadcrumb Navigation inside Hero (Mobile Only) */}
          <nav
            aria-label="Breadcrumbs"
            className="lg:hidden flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-white/85 font-medium mb-3 sm:mb-5 tracking-wide drop-shadow-xs"
          >
            <Link
              href="/"
              className="text-white/85 hover:text-[#29B6EB] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#29B6EB]/70">/</span>
            <span className="text-[#29B6EB] font-semibold">Blog</span>
          </nav>

          {/* Topic Tag Badge */}
          <FadeInUp delay={0.05} yOffset={15}>
            <div className="mb-2.5 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest bg-[#29B6EB]/25 text-[#29B6EB] border border-[#29B6EB]/40 backdrop-blur-md shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] animate-pulse" />
                Expert Hair Care &amp; Fixing Guides • Trivandrum &amp; Bangalore
              </span>
            </div>
          </FadeInUp>

          {/* Main Title - Center Aligned & Mobile Sized */}
          <FadeInUp delay={0.15} yOffset={20}>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-[1.15] tracking-tight max-w-4xl mx-auto mb-3 sm:mb-6 drop-shadow-md">
              Hair Care &amp; Fixing Guides <span className="text-[#29B6EB] block sm:inline">| ozzone Hair Blog</span>
            </h1>
          </FadeInUp>

          {/* Supporting Description */}
          <FadeInUp delay={0.25} yOffset={20}>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-4 sm:mb-8 leading-relaxed font-normal drop-shadow-xs">
              In-depth guides on non-surgical hair fixing, custom hair patch care, adhesive maintenance, and natural hairline restoration from certified specialists.
            </p>
          </FadeInUp>

          {/* CTA Action Buttons: Side-by-side on Mobile, Full-Row on Desktop */}
          <FadeInUp delay={0.35} yOffset={15} className="w-full sm:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 w-full max-w-md sm:max-w-none">
              <HoverLift3D className="flex-1 sm:flex-initial min-w-[130px] sm:min-w-0">
                <a
                  href="#articles-section"
                  className="btn-primary w-full justify-center py-2.5 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-base font-semibold shadow-md whitespace-nowrap"
                >
                  <span>Explore Articles</span>
                  <span className="ml-1" aria-hidden="true">↓</span>
                </a>
              </HoverLift3D>

              <HoverLift3D className="flex-1 sm:flex-initial min-w-[130px] sm:min-w-0">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20have%20a%20question%20regarding%20hair%20fixing.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp w-full justify-center py-2.5 sm:py-3.5 px-3 sm:px-6 text-xs sm:text-base font-semibold shadow-md whitespace-nowrap"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
                  <span>WhatsApp Specialist</span>
                </a>
              </HoverLift3D>

              <HoverLift3D className="w-full sm:w-auto">
                <Link
                  href="/contact/"
                  className="btn-secondary-dark w-full sm:w-auto justify-center py-2 sm:py-3.5 px-3 sm:px-5 text-xs sm:text-base backdrop-blur-xs"
                >
                  <span>Book Free Consultation →</span>
                </Link>
              </HoverLift3D>
            </div>
          </FadeInUp>

          {/* Topic Highlights - Mobile Sleek Pills, Desktop Glassmorphism Badges */}
          <FadeInUp delay={0.45} yOffset={15} className="w-full">
            {/* Mobile: Compact Pills */}
            <div className="sm:hidden flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-white/90">
              {[
                'Non-Surgical Fixing',
                'Patch Maintenance',
                'Cost & Longevity',
                'Scalp Health',
              ].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 bg-[#075078]/80 backdrop-blur-md rounded-full px-2.5 py-0.5 border border-white/20 text-white font-medium shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                  {item}
                </span>
              ))}
            </div>

            {/* Desktop: 4-Column Cards */}
            <div className="hidden sm:grid sm:grid-cols-4 gap-2 sm:gap-3 text-white/90 text-xs sm:text-sm w-full max-w-4xl mx-auto">
              {[
                { title: 'Non-Surgical Fixing', sub: 'Procedure Guides' },
                { title: 'Patch Maintenance', sub: 'Washing & Bonding' },
                { title: 'Cost & Longevity', sub: 'Price Transparency' },
                { title: 'Scalp Health', sub: 'Dermatological Tips' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-2 bg-[#005675]/60 sm:bg-white/10 backdrop-blur-md rounded-xl p-2.5 sm:px-3 sm:py-2.5 border border-white/20 shadow-sm"
                >
                  <span className="w-5 h-5 rounded-full bg-[#29B6EB]/30 text-[#29B6EB] flex items-center justify-center text-xs font-bold shrink-0">
                    ✓
                  </span>
                  <div className="text-left leading-tight min-w-0">
                    <div className="font-semibold text-white truncate text-[11px] sm:text-xs">{item.title}</div>
                    <div className="text-white/75 text-[10px] sm:text-[11px] truncate">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MAIN BLOG LISTING SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="articles-section" className="bg-white py-12 sm:py-24 px-3 sm:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Editorial &amp; Insights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-4">
              Latest Hair Care &amp; Replacement Articles
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-sm sm:text-base text-[#64748B]">
              In-depth guides on non-surgical hair fixing, adhesive care, and healthy styling for residents in Trivandrum.
            </p>
          </div>

          {/* Grid of Articles: 2 columns on mobile, 2 on md, 3 on lg */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}/`}
                className="group cursor-pointer bg-white rounded-xl md:rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* 1. Image */}
                <div className="relative h-32 sm:h-48 md:h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={450}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-3 right-3 bg-[#075078] text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    <span>Read Article</span>
                    <span className="text-[#29B6EB]">→</span>
                  </span>
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-xs text-[#075078] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* 2. Heading & Meta */}
                <div className="p-3 sm:p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-xs sm:text-lg md:text-xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug line-clamp-2 md:line-clamp-none">
                    {post.title}
                  </h3>
                  <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0 text-[10px] sm:text-xs text-[#64748B]">
                    <span className="line-clamp-1">{post.date}</span>
                    <span className="font-medium text-[#075078]">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
