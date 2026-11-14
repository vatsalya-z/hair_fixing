'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar,
  Clock,
  ArrowRight,
  X,
  Maximize2,
} from 'lucide-react'
import { BLOG_POSTS, BlogPost } from '@/data/siteData'

export default function HomeBlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  // Close modal on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null)
    }

    if (selectedPost) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPost])

  return (
    <>
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Centered & Mobile Responsive */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] shadow-xs mb-3">
              Editorial &amp; Insights
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#075078] tracking-tight mb-3">
              Latest Hair Care &amp; Fixing Guides
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] rounded-full mx-auto" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5 cursor-pointer select-none"
              >
                {/* Article Image Container */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#075078]/90 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                      <Maximize2 className="w-3.5 h-3.5 text-[#29B6EB]" />
                      <span>Click to View Image</span>
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#075078] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Article Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#64748B] mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#29B6EB]" />
                        <span>{post.date}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug line-clamp-2 mb-2">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Centered Button Below Section - Mobile Responsive */}
          <div className="mt-10 sm:mt-14 flex justify-center">
            <Link
              href="/blog/"
              className="inline-flex items-center justify-center gap-2 bg-[#075078] hover:bg-[#005675] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group w-full sm:w-auto text-center"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal — Displays full image on click */}
      {selectedPost && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPost(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-slate-900 border border-white/20 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col"
          >
            {/* Top Bar with Title and Close Button */}
            <div className="flex items-center justify-between p-4 sm:p-5 bg-slate-950/80 border-b border-white/10 text-white z-10">
              <div className="pr-4">
                <span className="text-[11px] font-bold text-[#29B6EB] uppercase tracking-wider block">
                  {selectedPost.category}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1 mt-0.5">
                  {selectedPost.title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Full Image */}
            <div className="relative w-full h-[50vh] sm:h-[65vh] bg-black flex items-center justify-center">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                priority
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>

            {/* Bottom Caption Bar */}
            <div className="p-3 sm:p-4 bg-slate-950/90 text-center text-xs text-white/75 border-t border-white/10 flex items-center justify-between">
              <span>{selectedPost.date}</span>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs text-[#29B6EB] hover:underline font-semibold"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

