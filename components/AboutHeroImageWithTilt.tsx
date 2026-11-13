'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Award, Sparkles } from 'lucide-react'

interface AboutHeroImageWithTiltProps {
  imageSrc?: string
  alt?: string
  badgeTitle?: string
  badgeSubtitle?: string
  topBadge?: string
}

export default function AboutHeroImageWithTilt({
  imageSrc = 'https://ozzonehair.com/wp-content/uploads/2024/06/about.png',
  alt = 'Best Hair Fixing in Trivandrum - Ozzone Hair Studio Profile',
  badgeTitle = '18+ Years of Excellence',
  badgeSubtitle = 'Trivandrum & Bangalore Studios',
  topBadge = '100% Human Hair',
}: AboutHeroImageWithTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth, subtle tilt physics
  const springConfig = { damping: 20, stiffness: 150 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md lg:max-w-[480px] perspective-1000 cursor-pointer"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full"
      >
        {/* Main Image Container */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/3] sm:aspect-[4/3.5] bg-[#075078] w-full">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 90vw, 480px"
          />
          {/* Subtle gradient lighting */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Glassmorphism Information Card - Bottom Left */}
        <motion.div
          style={{
            transform: 'translateZ(30px)',
          }}
          className="absolute bottom-3 left-3 right-3 sm:-bottom-5 sm:-left-5 sm:right-auto bg-[#075078]/95 backdrop-blur-md rounded-xl px-4 sm:px-5 py-3.5 shadow-2xl border border-white/25 sm:max-w-[280px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#29B6EB]/25 border border-[#29B6EB]/50 flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5 text-[#29B6EB]" />
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm">{badgeTitle}</p>
              <p className="text-[#29B6EB] text-[11px] sm:text-xs font-semibold">{badgeSubtitle}</p>
            </div>
          </div>
        </motion.div>

        {/* Top-Right Badge */}
        <motion.div
          style={{
            transform: 'translateZ(25px)',
          }}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#29B6EB] text-[#075078] font-extrabold rounded-xl px-3.5 py-2.5 shadow-lg text-center border border-white/30"
        >
          <div className="flex items-center gap-1.5 text-xs tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{topBadge}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
