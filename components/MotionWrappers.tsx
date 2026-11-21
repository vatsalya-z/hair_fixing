'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'

// Premium smooth easing curve
const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const

// ─── 1. SectionReveal3D: Scroll-triggered 3D perspective reveal ──────────────
// Animates when scrolling down AND when returning while scrolling back up.
export function SectionReveal3D({
  children,
  delay = 0,
  duration = 0.7,
  yOffset = 35,
  rotateXDeg = 6,
  scaleFrom = 0.98,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  rotateXDeg?: number
  scaleFrom?: number
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, rotateX: rotateXDeg, scale: scaleFrom }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.18, margin: '-20px' }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      style={{ transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 2. StaggerGridLR: Container for left-to-right card grids ────────────────
// Sequentially reveals child cards from left to right with 100-150ms delay
export function StaggerGridLR({
  children,
  staggerDelay = 0.12,
  className = '',
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.12, margin: '-30px' }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.05,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 3. CardRevealLR: Individual card item in left-to-right staggered grid ───
// Enters with subtle horizontal offset from left, scale, and 3D rotation
export function CardRevealLR({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          x: -28,
          scale: 0.96,
          rotateY: -4,
        },
        show: {
          opacity: 1,
          x: 0,
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 0.6,
            ease: PREMIUM_EASE,
          },
        },
      }}
      style={{ transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 4. Card3DTilt: Interactive mouse-following 3D perspective tilt ──────────
// Smooth spring physics on desktop; automatically disabled on touch devices
export function Card3DTilt({
  children,
  className = '',
  maxTilt = 7,
  depth = 12,
  scaleHover = 1.02,
}: {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  depth?: number
  scaleHover?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [canHover, setCanHover] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // Only enable mouse-following tilt on devices that support hover (non-touch)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    setCanHover(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setCanHover(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 220 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    x.set(mouseX / rect.width - 0.5)
    y.set(mouseY / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
      className={`h-full w-full ${className}`}
    >
      <motion.div
        style={{
          rotateX: canHover ? rotateX : 0,
          rotateY: canHover ? rotateY : 0,
          transformStyle: 'preserve-3d',
        }}
        whileHover={
          canHover
            ? {
                y: -6,
                scale: scaleHover,
                transition: { duration: 0.3, ease: PREMIUM_EASE },
              }
            : undefined
        }
        className="h-full w-full transition-shadow duration-300"
      >
        <div
          style={{
            transform: canHover ? `translateZ(${depth}px)` : 'none',
            transformStyle: 'preserve-3d',
          }}
          className="h-full w-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}

// ─── 5. ImageHover3D: Smooth image zoom & perspective hover effect ───────────
// Enforces overflow-hidden, preserves aspect ratios & dimensions with subtle 3D depth
export function ImageHover3D({
  children,
  className = '',
  scaleZoom = 1.06,
  duration = 0.5,
}: {
  children: React.ReactNode
  className?: string
  scaleZoom?: number
  duration?: number
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={`overflow-hidden ${className}`}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{
        scale: scaleZoom,
        transition: { duration, ease: PREMIUM_EASE },
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`h-full w-full will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  )
}

// ─── 6. HeroTextItem: Staggered reveal for Hero headings, text & buttons ─────
export function HeroTextItem({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 7. HeroParallaxCard: Subtle floating 3D tilt for hero visual tiles ──────
export function HeroParallaxCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 8. FadeInUp: Smooth scroll reveal (supports scroll down & scroll up) ────
export function FadeInUp({
  children,
  delay = 0,
  duration = 0.55,
  yOffset = 30,
  once = false,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-30px', amount: 0.15 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 9. FadeInScale: Fade & Scale Up on scroll reveal ────────────────────────
export function FadeInScale({
  children,
  delay = 0,
  duration = 0.55,
  once = false,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: '-30px', amount: 0.15 }}
      transition={{ duration, delay, ease: PREMIUM_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 10. HoverLift3D: 3D Hover Lift with Subtle Shadow & Scale ──────────────
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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{
        y: yLift,
        scale,
        transition: { duration: 0.25, ease: PREMIUM_EASE },
      }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── 11. Floating3D: Continuous Gentle 3D Float for Badges & Icons ───────────
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
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

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

// ─── 12. TiltCard3D: Backward-compatible alias for existing imports ──────────
export const TiltCard3D = Card3DTilt

// ─── 13. StaggerContainer & StaggerItem: Backward-compatible aliases ─────────
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
    <StaggerGridLR staggerDelay={staggerDelay} className={className}>
      {children}
    </StaggerGridLR>
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
    <CardRevealLR className={className}>
      {children}
    </CardRevealLR>
  )
}
