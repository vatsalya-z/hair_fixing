'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS, BlogPost } from '@/data/siteData'
import {
  SectionReveal3D,
  StaggerGridLR,
  CardRevealLR,
  Card3DTilt,
  ImageHover3D,
} from '@/components/MotionWrappers'

export interface BlogHeroSlide {
  id: string
  src: string
  alt: string
  contain?: boolean
}

const BLOG_HERO_SLIDES: BlogHeroSlide[] = [
  {
    id: 'slide-1',
    src: '/images/blog/Blog_Hero_Section_Banner_Man.png',
    alt: 'Hair Care & Fixing Guides by ozzone Hair Experts - Before and After Hair Transformation',
    contain: false,
  },

]

export default function BlogClient() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const totalSlides = BLOG_HERO_SLIDES.length

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Automatic slide movement every 4.5 seconds; pauses on hover
  useEffect(() => {
    if (isHovered) return

    const timer = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(timer)
  }, [isHovered, nextSlide])

  // Touch Swipe Support for mobile and tablet devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diff = touchStartX.current - touchEndX.current
    const minSwipeDistance = 40

    if (diff > minSwipeDistance) {
      nextSlide()
    } else if (diff < -minSwipeDistance) {
      prevSlide()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb Navigation Bar (Above Hero Section - Mobile Only) */}
      <div className="lg:hidden bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 sm:py-3 px-4 sm:px-6 lg:px-8">
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
          SECTION 1 — HERO SECTION (FULL WIDTH IMAGE SLIDER)
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full bg-[#075078] overflow-hidden select-none group"
        aria-label="Blog Hero Banner Slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <h1 className="sr-only">
          Hair Care &amp; Fixing Guides | ozzone Hair Blog
        </h1>
        <div className="relative w-full aspect-[2048/768] min-h-[220px] sm:min-h-[340px] md:min-h-[420px] lg:min-h-[480px]">
          {/* Horizontal Slide Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
          >
            {BLOG_HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full h-full shrink-0 relative overflow-hidden bg-[#075078]"
                aria-hidden={currentIndex !== index}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${totalSlides}`}
              >
                {slide.contain ? (
                  <>
                    {/* Ambient backdrop to prevent side borders */}
                    <div className="absolute inset-0 select-none pointer-events-none">
                      <Image
                        src={slide.src}
                        alt=""
                        fill
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="object-cover object-center blur-xl scale-110 opacity-30"
                        sizes="100vw"
                      />
                    </div>
                    {/* Main crisp full image */}
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="object-contain object-center relative z-10"
                      sizes="100vw"
                    />
                  </>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}


          {/* Navigation Dots */}
          <div
            className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/20"
            role="tablist"
            aria-label="Blog Hero Carousel Dots"
          >
            {BLOG_HERO_SLIDES.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={currentIndex === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#29B6EB] ${currentIndex === index
                  ? 'w-6 sm:w-7 bg-[#29B6EB]'
                  : 'w-2 sm:w-2.5 bg-white/60 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MAIN BLOG LISTING SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="articles-section" className="bg-white py-12 sm:py-24 px-3 sm:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <SectionReveal3D yOffset={25}>
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
          </SectionReveal3D>

          {/* Grid of Articles: Staggered Left-to-Right Reveal with 3D Tilt */}
          <StaggerGridLR
            staggerDelay={0.1}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8"
          >
            {BLOG_POSTS.map((post) => (
              <CardRevealLR key={post.id} className="h-full">
                <Card3DTilt maxTilt={6} depth={10} className="h-full">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="group cursor-pointer bg-white rounded-xl md:rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                  >
                    {/* 1. Image with ImageHover3D */}
                    <div className="relative h-32 sm:h-48 md:h-64 w-full overflow-hidden bg-slate-100">
                      <ImageHover3D scaleZoom={1.06}>
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={450}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </ImageHover3D>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                      <span className="absolute bottom-3 right-3 bg-[#075078] text-white text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 z-10 pointer-events-none">
                        <span>Read Article</span>
                        <span className="text-[#29B6EB]">→</span>
                      </span>
                      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/90 backdrop-blur-xs text-[#075078] text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded sm:rounded-md shadow-xs z-10 pointer-events-none">
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
                </Card3DTilt>
              </CardRevealLR>
            ))}
          </StaggerGridLR>
        </div>
      </section>
    </div>
  )
}
