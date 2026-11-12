'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

// ─── 1. Fade & Slide Up on Scroll Reveal ──────────────────────────────────
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 2. Fade & Scale Up on Scroll Reveal ──────────────────────────────────
export function FadeInScale({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 3. Staggered Container for Grids ─────────────────────────────────────
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 4. Interactive 3D Tilt Card (Mouse-Driven Perspective) ───────────────
export function TiltCard3D({
  children,
  className = '',
  maxTilt = 8,
  depth = 15,
}: {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  depth?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / width - 0.5)
    y.set(mouseY / height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className={`h-full w-full ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{
          scale: 1.025,
          transition: { duration: 0.25 },
        }}
        className="h-full w-full"
      >
        <div style={{ transform: `translateZ(${depth}px)`, transformStyle: 'preserve-3d' }} className="h-full">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// ─── 5. 3D Hover Lift with Subtle Shadow & Scale ──────────────────────────
export function HoverLift3D({
  children,
  className = '',
  yLift = -6,
  scale = 1.02,
}: {
  children: React.ReactNode
  className?: string
  yLift?: number
  scale?: number
}) {
  return (
    <motion.div
      whileHover={{
        y: yLift,
        scale,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 6. Continuous Gentle 3D Float for Badges & Icons ─────────────────────
export function Floating3D({
  children,
  duration = 4,
  yOffset = 8,
  className = '',
}: {
  children: React.ReactNode
  duration?: number
  yOffset?: number
  className?: string
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset, yOffset, -yOffset],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

