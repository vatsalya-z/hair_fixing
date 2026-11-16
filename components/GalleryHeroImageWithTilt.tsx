'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function GalleryHeroImageWithTilt() {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring physics for natural 3D tilt
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
      className="relative w-full max-w-md lg:max-w-[460px] perspective-1000 cursor-pointer"
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
        <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/5] bg-[#075078] w-full">
          <Image
            src="/images/gallery-hero.jpg"
            alt="Client hair transformation result at ozzone Hair Studio Thiruvananthapuram"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 90vw, 45vw"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Glassmorphism Information Card - Bottom Left */}
        <motion.div
          style={{
            transform: 'translateZ(30px)',
          }}
          className="absolute bottom-4 left-4 right-4 sm:-bottom-6 sm:-left-6 sm:right-auto bg-[#005675]/95 backdrop-blur-md rounded-xl px-5 py-4 shadow-2xl border border-white/25 sm:max-w-[270px]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#29B6EB]/30 border border-[#29B6EB]/50 flex items-center justify-center flex-shrink-0 shadow-sm text-[#29B6EB] font-bold text-sm">
              ★
            </div>
            <div>
              <p className="text-white font-bold text-sm">Undetectable Natural Hairline</p>
              <p className="text-white/80 text-xs">Instant 90-Min Transformation</p>
            </div>
          </div>
        </motion.div>

        {/* Top-Right Floating Badge */}
        <motion.div
          style={{
            transform: 'translateZ(25px)',
          }}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-[#005675] to-[#29B6EB] text-white rounded-xl px-4 py-2.5 shadow-lg border border-white/20 text-center"
        >
          <span className="text-xs font-bold tracking-wide">5,000+ Happy Clients</span>
        </motion.div>
      </motion.div>
    </div>
  )
}

