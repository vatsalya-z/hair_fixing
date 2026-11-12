import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface HeroBannerProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  showCta?: boolean;
}

export default function HeroBanner({
  title,
  highlightText,
  subtitle,
  breadcrumbCurrent,
  showCta = true,
}: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] text-white py-14 sm:py-20 px-4 sm:px-8">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/75 mb-4 font-medium" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#29B6EB] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#29B6EB]" />
          <span className="text-[#29B6EB] font-semibold">{breadcrumbCurrent}</span>
        </nav>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          {title}{' '}
          {highlightText && (
            <span className="text-[#29B6EB] drop-shadow-sm">{highlightText}</span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed mb-6">
          {subtitle}
        </p>

        {/* Optional CTAs */}
        {showCta && (
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#005675] hover:bg-[#174BA5] text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg shadow-md transition-all duration-200 border border-white/20 hover:scale-105"
            >
              Book Free Hair Analysis
            </Link>
            <a
              href="tel:+919447028419"
              className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg border border-white transition-all duration-200"
            >
              Call +91 94470 28419
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

