'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

export interface HeroSlide {
  id: string
  src: string
  alt: string
  title: string
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    src: '/hero-section/slide_1-1.png',
    alt: 'Best Hair Fixing Service in Trivandrum and Bangalore - Stage 1 Hair Loss Solutions',
    title: 'Hair Loss Concerns & Scalp Evaluation',
  },
  {
    id: 'slide-2',
    src: '/hero-section/slide_2-1.png',
    alt: 'Non Surgical Hair Replacement in Trivandrum - Stage 2 Personalized Expert Guidance',
    title: 'Personalized Consultation & Custom Fitting',
  },
  {
    id: 'slide-3',
    src: '/hero-section/slide-3-1.png',
    alt: 'Natural Looking Hair Replacement Systems - Stage 3 Restored Confidence & Style',
    title: 'Full Natural Hair Transformation',
  },
]

interface HeroCarouselProps {
  className?: string
  fullCover?: boolean
}

export default function HeroCarousel({
  className = '',
  fullCover = false,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const totalSlides = HERO_SLIDES.length

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
    const minSwipeDistance = 40 // px

    if (diff > minSwipeDistance) {
      nextSlide() // swiped left -> go to next
    } else if (diff < -minSwipeDistance) {
      prevSlide() // swiped right -> go to previous
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className={`relative select-none overflow-hidden group bg-[#075078] w-full ${
        fullCover
          ? 'h-full min-h-[50vh]'
          : 'aspect-[1200/450]'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Homepage Hero Image Slider"
    >
      {/* ═══════════════════════════════════════════════════════════
          HORIZONTAL SLIDER TRACK (Swiper-style smooth slide behavior)
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
        style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="w-full h-full shrink-0 relative overflow-hidden bg-[#075078]"
            aria-hidden={currentIndex !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${totalSlides}: ${slide.title}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          PREV / NEXT ARROWS (Desktop / Tablet Navigation on Hover)
      ═══════════════════════════════════════════════════════════ */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#29B6EB]"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-md border border-white/25 flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105 active:scale-95 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#29B6EB]"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* ═══════════════════════════════════════════════════════════
          PAGINATION DOTS (Swiper-style with active highlight)
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="absolute bottom-2.5 sm:bottom-4 md:bottom-5 lg:bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-1.5 sm:gap-2.5 pointer-events-auto"
        role="tablist"
        aria-label="Slide Selection"
      >
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-selected={currentIndex === index}
            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#29B6EB] ${
              currentIndex === index
                ? 'w-7 sm:w-10 h-2 sm:h-2.5 bg-[#29B6EB] shadow-lg scale-105'
                : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/70 hover:bg-white shadow-sm'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
