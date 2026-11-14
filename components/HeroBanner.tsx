import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { SITE_INFO } from '@/data/siteData'

interface HeroBannerProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  showCta?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroBanner({
  title,
  highlightText,
  subtitle,
  breadcrumbCurrent,
  showCta = true,
  imageSrc,
  imageAlt,
}: HeroBannerProps) {
  // Default image if needed
  const displayImage = imageSrc || 'https://ozzonehair.com/wp-content/uploads/2024/06/about.png'

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#075078] via-[#104C88] to-[#174BA5] text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
      {/* Background Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className={`grid ${imageSrc ? 'lg:grid-cols-12 gap-8 items-center' : 'grid-cols-1'}`}>
          <div className={imageSrc ? 'lg:col-span-7' : 'w-full'}>
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
            {subtitle && (
              <p className="text-white/85 text-sm sm:text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            )}

            {/* Optional CTAs */}
            {showCta && (
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact/"
                  className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-6 py-3 rounded-lg shadow-md transition-all duration-200"
                >
                  Book Free Hair Analysis
                </Link>
                <a
                  href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg border border-white transition-all duration-200"
                >
                  Call {SITE_INFO.phone}
                </a>
              </div>
            )}
          </div>

          {/* Optional Right Hero Image */}
          {imageSrc && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-md shadow-2xl border-2 border-white/20 bg-[#075078]">
                <Image
                  src={displayImage}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
