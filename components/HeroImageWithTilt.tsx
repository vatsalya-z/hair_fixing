'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function HeroImageWithTilt() {
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
    <div className="w-full max-w-md lg:max-w-[460px] mx-auto">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full perspective-1000 cursor-pointer"
        style={{ perspective: 1000 }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative"
        >
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[3/4] sm:aspect-[4/5] bg-[#075078]">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-kerala-before-after-mobile.jpg"
                alt="Authentic Kerala male client before and after non-surgical hair fixing transformation at Ozzone Hair Thiruvananthapuram"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
              />
            </div>

            {/* Split Screen Indicator Badges (Rendered via clean HTML UI, zero image burn-in) */}
            <div className="absolute top-3 left-3 z-10 bg-black/60 backdrop-blur-md text-white/90 border border-white/20 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md pointer-events-none">
              Before
            </div>
            <div className="absolute top-3 right-3 z-10 bg-[#005675]/80 backdrop-blur-md text-[#29B6EB] border border-[#29B6EB]/40 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md tracking-wider uppercase shadow-md pointer-events-none flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              After
            </div>

            {/* Center Split Divider Line */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-white/40 via-white/80 to-white/40 pointer-events-none shadow-[0_0_8px_rgba(255,255,255,0.6)]" />

            {/* Subtle gradient vignette at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glassmorphism Information Card */}
          <motion.div
            style={{
              transform: 'translateZ(30px)',
            }}
            className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-[#005675]/95 backdrop-blur-md rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-2xl border border-white/25 max-w-[210px] sm:max-w-[240px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#29B6EB]/30 border border-[#29B6EB]/50 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-base sm:text-lg">⚡</span>
              </div>
              <div>
                <p className="text-white font-bold text-xs sm:text-sm">90-Minute</p>
                <p className="text-white/80 text-[11px] sm:text-xs">Instant Transformation</p>
              </div>
            </div>
          </motion.div>

          {/* Top-Right Badge */}
          <motion.div
            style={{
              transform: 'translateZ(25px)',
            }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-[#29B6EB] text-white rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg text-center"
          >
            <p className="text-lg sm:text-xl font-extrabold leading-none">100%</p>
            <p className="text-[10px] sm:text-xs font-semibold tracking-wide">Human Hair</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


