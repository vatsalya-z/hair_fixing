'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  X,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle,
  TrendingUp,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeInUp, HoverLift3D } from '@/components/MotionWrappers'
import BlogHeroImageWithTilt from '@/components/BlogHeroImageWithTilt'
import { BLOG_POSTS, BlogPost, SITE_INFO } from '@/data/siteData'

export default function BlogClient() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  return (
    <div className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — DYNAMIC 3D WITH UNIQUE GENERATED HERO IMAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center">
        {/* Ambient lighting glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
          <div className="hero-subtle-glow absolute inset-0 opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <FadeInUp delay={0.05} yOffset={20}>
                <span className="inline-flex items-center gap-1.5 bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#29B6EB]/30 backdrop-blur-xs">
                  <BookOpen className="w-3.5 h-3.5" />
                  Hair Care Blog &amp; Insights
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Hair Fixing Guides &amp; Care Insights in{' '}
                  <span className="text-[#29B6EB]">Thiruvananthapuram</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Practical trichological advice, daily maintenance routines engineered for Kerala&apos;s coastal humidity, transparent cost breakdowns, and expert answers from certified hair specialists at ozzone Hair Studio.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <a href="#articles-section" className="btn-primary">
                      Explore All Articles
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20have%20a%20question%20regarding%20hair%20patch%20care%20and%20fixing.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>Ask Our Specialists</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
                  {[
                    '14+ Years Studio Experience',
                    'Kerala Climate Tested',
                    '100% Virgin Human Hair',
                    'Doctor & Specialist Verified',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Image with 3D Tilt Card */}
            {/* <div className="flex justify-center lg:justify-end w-full">
              <BlogHeroImageWithTilt />
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MAIN BLOG LISTING SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="articles-section" className="bg-white py-16 sm:py-24 px-4 sm:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
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

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
              >
                {/* 1. Image */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
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
                    <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  </span>
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#075078] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* 2. Heading & Meta */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#29B6EB]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FULL ARTICLE READER MODAL
      ═══════════════════════════════════════════════════════════ */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#075078]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#E2E8F0] flex items-center justify-between z-20">
              <span className="text-xs font-bold uppercase tracking-wider text-[#005675]">
                {activePost.category}
              </span>
              <button
                onClick={() => setActivePost(null)}
                className="w-8 h-8 rounded-full bg-[#F3F7FB] hover:bg-[#E2E8F0] text-[#075078] flex items-center justify-center transition-colors"
                aria-label="Close Article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Article Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="relative h-72 w-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src={activePost.image}
                  alt={activePost.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
