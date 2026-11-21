'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SITE_INFO } from '@/data/siteData'
import { HeroTextItem, HeroParallaxCard, Card3DTilt } from '@/components/MotionWrappers'

interface HeroBannerProps {
  title: string
  highlightText?: string
  subtitle: string
  breadcrumbCurrent: string
  showCta?: boolean
  imageSrc?: string
  imageAlt?: string
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
            {/* Breadcrumb (Mobile Only) */}
            <nav className="lg:hidden flex items-center gap-2 text-xs sm:text-sm text-white/75 mb-4 font-medium" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#29B6EB] transition-colors">Home</Link>
              <span className="text-[#29B6EB]/70">/</span>
              <span className="text-[#29B6EB] font-semibold">{breadcrumbCurrent}</span>
            </nav>

            {/* Heading with smooth staggered entrance */}
            <HeroTextItem delay={0.05} yOffset={20}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
                {title}{' '}
                {highlightText && (
                  <span className="text-[#29B6EB] drop-shadow-sm">{highlightText}</span>
                )}
              </h1>
            </HeroTextItem>

            {/* Subtitle */}
            {subtitle && (
              <HeroTextItem delay={0.2} yOffset={18}>
                <p className="text-white/85 text-sm sm:text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              </HeroTextItem>
            )}

            {/* Optional CTAs */}
            {showCta && (
              <HeroTextItem delay={0.35} yOffset={16}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <Link
                    href="/contact/"
                    className="bg-[#29B6EB] hover:bg-[#1fa0d4] text-[#075078] hover:text-white font-extrabold text-sm sm:text-base px-6 min-h-[48px] rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center text-center touch-manipulation"
                  >
                    Book Free Hair Analysis
                  </Link>
                  <a
                    href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                    className="bg-transparent hover:bg-white/10 text-white font-semibold text-sm sm:text-base px-6 min-h-[48px] rounded-lg border border-white hover:border-[#29B6EB] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 w-full sm:w-auto flex-1 sm:flex-initial inline-flex items-center justify-center text-center touch-manipulation"
                  >
                    Call {SITE_INFO.phone}
                  </a>
                </div>
              </HeroTextItem>
            )}
          </div>

          {/* Optional Right Hero Image with 3D Tilt */}
          {imageSrc && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroParallaxCard className="w-full max-w-md">
                <Card3DTilt maxTilt={6} depth={10}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-2xl border-2 border-white/20 bg-[#075078]">
                    <Image
                      src={displayImage}
                      alt={imageAlt || title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </Card3DTilt>
              </HeroParallaxCard>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
