'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function SolutionsHeroImageWithTilt() {
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for smooth tilt physics matching About page
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
      className="relative w-full max-w-[290px] sm:max-w-md lg:max-w-[460px] xl:max-w-[480px] cursor-pointer mx-auto"
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
        {/* Main Image Frame with 4:5 aspect ratio */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/5] bg-[#075078] w-full">
          <Image
            src="/images/solutions-hero.jpg"
            alt="Non-Surgical Hair Replacement Solutions at ozzone Hair Studio Thiruvananthapuram"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 640px) 290px, (max-width: 1024px) 90vw, 480px"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Floating Glassmorphism Badge - Bottom Left */}
        <motion.div
          style={{ transform: 'translateZ(30px)' }}
          className="absolute bottom-3 left-3 right-3 sm:-bottom-6 sm:-left-6 sm:right-auto bg-[#005675]/95 backdrop-blur-md rounded-xl p-3 sm:px-5 sm:py-4 shadow-2xl border border-white/25 sm:max-w-[270px]"
        >
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#29B6EB]/30 border border-[#29B6EB]/50 flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#29B6EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-xs sm:text-sm leading-tight">18+ Years of Excellence</p>
              <p className="text-white/80 text-[10px] sm:text-xs leading-normal mt-0.5">Custom Hair Loss Solutions</p>
            </div>
          </div>
        </motion.div>

        {/* Top-Right Badge */}
        <motion.div
          style={{ transform: 'translateZ(25px)' }}
          className="absolute -top-2.5 -right-2.5 sm:-top-4 sm:-right-4 bg-[#29B6EB] text-white rounded-lg sm:rounded-xl px-2.5 py-1.5 sm:px-4 sm:py-3 shadow-lg text-center"
        >
          <p className="text-base sm:text-2xl font-extrabold leading-none">100%</p>
          <p className="text-[10px] sm:text-xs font-semibold tracking-wide">Natural Hair</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
