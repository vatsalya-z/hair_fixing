'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, Calendar, Clock, ArrowRight, Share2, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { BLOG_POSTS, BlogPost, SITE_INFO } from '@/data/siteData'

export default function BlogClient() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="Hair Care Blog"
        title="Hair Fixing Guides &amp; Expert Insights in"
        highlightText="Thiruvananthapuram"
        subtitle="Practical advice on non-surgical hair restoration, daily maintenance tips for Kerala's coastal climate, and debunking hair loss myths."
      />

      {/* Main Blog Listing Section: 
          - White background
          - Professional editorial layout
          - Image and heading only on the blog listing page
          - Dark navy headings
      */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
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
          </div>

          {/* Grid: Image and heading ONLY on the listing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
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
                </div>

                {/* 2. Heading Only (Dark navy headings: #075078) */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal */}
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

              <div className="flex items-center gap-4 text-xs text-[#64748B] border-b border-[#E2E8F0] pb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>{activePost.date}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>{activePost.readTime}</span>
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] leading-tight">
                {activePost.title}
              </h2>

              <p className="text-base text-[#005675] font-semibold bg-[#F3F7FB] p-4 rounded-xl border border-[#E2E8F0]">
                {activePost.summary}
              </p>

              <div className="space-y-4 text-sm text-[#252B38] leading-relaxed">
                {activePost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* CTAs inside article */}
              <div className="mt-8 pt-6 border-t border-[#E2E8F0] bg-[#F3F7FB] p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-[#075078]">Have Questions About This?</h4>
                  <p className="text-xs text-[#64748B]">Speak with our senior specialist in Trivandrum.</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi,%20I%20read%20your%20blog%20post%20about%20${encodeURIComponent(activePost.title)}%20and%20want%20to%20consult.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-initial bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors text-center flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                    <span>WhatsApp Specialist</span>
                  </a>
                  <button
                    onClick={() => setActivePost(null)}
                    className="border border-[#E2E8F0] bg-white text-[#252B38] text-xs font-semibold px-4 py-2.5 rounded-lg hover:bg-[#F3F7FB]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

