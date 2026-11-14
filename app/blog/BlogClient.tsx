'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  X,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/data/siteData'

export default function BlogClient() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Navigation Bar (Above Hero Section) */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <nav className="flex items-center gap-2 text-slate-600 font-medium" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#005675] transition-colors">Home</Link>
            <span className="text-slate-400" aria-hidden="true">/</span>
            <span className="text-[#075078] font-bold">Blog</span>
          </nav>
          <div className="hidden sm:flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#005675]">
              <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
              Hair Care &amp; Fixing Guides
            </span>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (FULL WIDTH IMAGE BANNER)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#075078] overflow-hidden" aria-label="Blog Hero Banner">
        <h1 className="sr-only">
          Hair Fixing &amp; Hair Replacement Educational Blog - Thiruvananthapuram
        </h1>
        <div className="relative w-full aspect-[2048/768]">
          <Image
            src="/images/blog/Blog_Hero_Section_Banner_Man.png"
            alt="Hair Care & Fixing Guides by ozzone Hair Experts - Before and After Hair Transformation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
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
