'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sparkles,
  Clock,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  LayoutGrid,
  Columns2,
  X,
  ExternalLink,
  ChevronRight,
  Eye,
  Video,
  Play,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeInUp, HoverLift3D } from '@/components/MotionWrappers'
import GalleryHeroImageWithTilt from '@/components/GalleryHeroImageWithTilt'
import { GALLERY_ITEMS, GalleryItem, SITE_INFO } from '@/data/siteData'

export default function GalleryClient() {
  const [filter, setFilter] = useState('All')
  const [mobileLayout, setMobileLayout] = useState<'grid' | 'detailed'>('grid')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filterTabs = ['All', 'Hair Patching', 'Hair Bonding', 'Hair Weaving', "Women's Topper"]

  const filteredItems = useMemo(() => {
    return filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter)
  }, [filter])

  return (
    <div className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (3D TILT WITH CUSTOM GALLERY IMAGE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center">
        {/* Ambient lighting glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
          <div className="hero-subtle-glow absolute inset-0 opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <FadeInUp delay={0.05} yOffset={20}>
                <span className="inline-flex items-center gap-1.5 bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#29B6EB]/30 backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  Verified Studio Transformations
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Real Hair Fixing Before &amp; After Results in{' '}
                  <span className="text-[#29B6EB]">Thiruvananthapuram</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Browse authentic, unretouched before-and-after results showing natural human hair density, seamless scalp blending, and undetectable hairlines from our Statue Junction and Pattom clinics.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <a href="#gallery-grid" className="btn-primary">
                      Explore Results Grid
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href="#video-gallery"
                      className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all flex items-center gap-2"
                    >
                      <Play className="w-4 h-4 text-[#29B6EB] fill-[#29B6EB]" />
                      <span>Watch Video Demo</span>
                    </a>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20know%20which%20hair%20patch%20system%20suits%20my%20hairloss.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>Consultation on WhatsApp</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
                  {[
                    '100% Virgin Human Hair',
                    'Undetectable Hairlines',
                    'Instant 90-Min Session',
                    'Zero Pain & Non-Surgical',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Image with 3D Tilt Card */}
            {/* <div className="flex justify-center lg:justify-end w-full">
              <GalleryHeroImageWithTilt />
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — STUDIO RESULTS STATS STRIP
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-10 px-4 sm:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0]">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#075078]">5,000+</p>
              <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1">Transformations Completed</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0]">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#29B6EB]">90 Mins</p>
              <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1">Average Studio Session</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0]">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#075078]">100%</p>
              <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1">Natural Human Hair</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F3F7FB] border border-[#E2E8F0]">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#29B6EB]">14+ Yrs</p>
              <p className="text-xs sm:text-sm text-[#64748B] font-semibold mt-1">Serving Trivandrum</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — MAIN GALLERY GRID SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section id="gallery-grid" className="bg-[#F3F7FB] py-16 sm:py-24 px-3 sm:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Real Client Cases
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-3">
              Real People. Instant 90-Minute Restorations.
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3" />
            <p className="text-xs sm:text-base text-[#64748B]">
              Browse unretouched results showing genuine scalp blending, natural hairlines, and varied hair textures suited for Kerala climate.
            </p>
          </div>

          {/* Controls: Filter Tabs & Mobile View Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
            {/* Filter Tabs */}

            {/* Mobile View Toggle (Visible on mobile/tablet) */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E2E8F0] shadow-xs sm:hidden">
              <span className="text-[11px] font-bold text-[#64748B] px-2">View:</span>
              <button
                type="button"
                onClick={() => setMobileLayout('grid')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mobileLayout === 'grid'
                    ? 'bg-[#005675] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#075078]'
                }`}
                aria-label="Switch to 2-column mobile grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
              <button
                type="button"
                onClick={() => setMobileLayout('detailed')}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  mobileLayout === 'detailed'
                    ? 'bg-[#005675] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#075078]'
                }`}
                aria-label="Switch to detailed split view"
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span>Detailed</span>
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              GALLERY GRID CONTAINER
              - On mobile: 2-column grid when mobileLayout === 'grid' (default)
              - On desktop (md/lg): 2 to 3 column spacious cards
          ═══════════════════════════════════════════════════════════ */}
          <div
            className={`grid gap-3 sm:gap-6 lg:gap-8 ${
              mobileLayout === 'grid'
                ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1"
              >
                {/* Visual Image Container */}
                <div className="p-2 sm:p-3 bg-white border-b border-[#E2E8F0]">
                  <div className="relative w-full h-36 sm:h-52 lg:h-56 rounded-xl overflow-hidden bg-slate-200">
                    <Image
                      src={item.beforeImg}
                      alt={`${item.solutionProvided} - Before`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-[#252B38]/90 text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded shadow-sm">
                      Before
                    </span>
                  </div>
                </div>

                {/* Card Meta & Details */}
                <div className="p-3 sm:p-6 space-y-2 sm:space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between gap-1 text-[10px] sm:text-xs">
                      <span className="bg-[#F3F7FB] border border-[#E2E8F0] text-[#075078] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-md line-clamp-1">
                        {item.category}
                      </span>
                      <span className="text-[#64748B] hidden sm:flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                        <span>{item.recoveryTime}</span>
                      </span>
                    </div>

                    <h3 className="text-xs sm:text-base font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-snug line-clamp-2">
                      {item.clientType}
                    </h3>

                    {/* Full details visible on tablet/desktop, compact on mobile grid */}
                    
                  </div>

                  {/* Actions */}
                  <div className="pt-1.5 sm:pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveItem(item)}
                      className="w-full bg-[#005675] hover:bg-[#174BA5] text-white text-[11px] sm:text-xs font-bold py-2 sm:py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#29B6EB]" />
                      <span className="hidden sm:inline">Inspect Transformation</span>
                      <span className="sm:hidden">View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LIGHTBOX MODAL FOR TRANSFORMATION INSPECTION
      ═══════════════════════════════════════════════════════════ */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#075078]/75 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E2E8F0] relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-4 border-b border-[#E2E8F0] flex items-center justify-between z-20">
              <div className="flex items-center gap-2">
                <span className="bg-[#005675] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {activeItem.category}
                </span>
                <span className="text-xs text-[#64748B] hidden sm:inline">Case ID: {activeItem.id}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="w-8 h-8 rounded-full bg-[#F3F7FB] hover:bg-[#E2E8F0] text-[#075078] flex items-center justify-center transition-colors"
                aria-label="Close transformation lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 sm:p-8 space-y-6">
              {/* Full Width Image View */}
              <div className="w-full space-y-2">
                <div className="relative w-full h-72 sm:h-96 md:h-[440px] rounded-xl overflow-hidden bg-slate-200 border border-[#E2E8F0]">
                  <Image
                    src={activeItem.beforeImg}
                    alt="Before hair fixing treatment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 768px"
                  />
                  <span className="absolute top-3 left-3 bg-[#252B38]/90 text-white text-xs font-bold px-3 py-1 rounded shadow">
                    Before Treatment
                  </span>
                </div>
                <p className="text-xs text-center text-[#64748B]">Initial Thinning / Bald Area</p>
              </div>

              {/* Case Specifications */}
              

              {/* Action Buttons */}
              
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — CLIENT VIDEO TRANSFORMATIONS & LIVE DEMO
      ═══════════════════════════════════════════════════════════ */}
      <section id="video-gallery" className="bg-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#E2E8F0] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-4 py-1.5 rounded-full border border-[#E2E8F0]">
              <Video className="w-3.5 h-3.5 text-[#29B6EB]" />
              Video Gallery
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#075078] tracking-tight mt-3 mb-3">
              Watch Real Hair Fixing Transformations in Action
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3" />
            <p className="text-xs sm:text-base text-[#64748B]">
              Experience our seamless hair fixing technique, natural hair movement, and 100% undetectable hairline in high-definition video.
            </p>
          </div>

          {/* Videos Grid — Both Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Video 1 */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-5 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#29B6EB]/50 transition-colors">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-black border border-slate-700 aspect-video mb-5">
                  <video
                    src="/videos/hair-fixing-transformation.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#005675] bg-[#E0F2FE] px-2.5 py-1 rounded-md uppercase tracking-wider mb-2">
                  Verified Studio Session 1
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#075078] leading-snug">
                  Natural Hairline &amp; Instant Restoration
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  Watch the live step-by-step hair restoration process. Notice how seamlessly the custom hair system blends with existing natural hair for a completely undetectable finish.
                </p>

                {/* Highlights */}
                <div className="space-y-2 text-xs text-[#252B38] my-4 pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">100% Breathable Swiss Lace Base</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">Natural Density &amp; Seamless Blending</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">Active Lifestyle &amp; Water Resistant</span>
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20watched%20your%20hair%20fixing%20transformation%20video%201%20and%20would%20like%20a%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 btn-whatsapp justify-center text-xs sm:text-sm py-2.5"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Consultation</span>
                </a>

                <a
                  href="https://youtu.be/wTvV8Rhs5Gc"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#075078] hover:text-[#29B6EB] border border-[#CBD5E1] hover:border-[#29B6EB] bg-white rounded-lg px-4 py-2.5 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-5 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#29B6EB]/50 transition-colors">
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-md bg-black border border-slate-700 aspect-video mb-5">
                  <video
                    src="/videos/hair-fixing-results-demo.mp4"
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#005675] bg-[#E0F2FE] px-2.5 py-1 rounded-md uppercase tracking-wider mb-2">
                  Verified Studio Session 2
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#075078] leading-snug">
                  Full Scalp Coverage &amp; Styling Demonstration
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-2 leading-relaxed">
                  See the complete transformation showing density, scalp integration, and natural movement. Custom-fitted hair systems tailored to your unique hair pattern and lifestyle.
                </p>

                {/* Highlights */}
                <div className="space-y-2 text-xs text-[#252B38] my-4 pt-3 border-t border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">Immediate Same-Day Transformation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">Crown &amp; Hairline Perfect Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#29B6EB] shrink-0" />
                    <span className="font-semibold">Zero Downtime &amp; Non-Surgical</span>
                  </div>
                </div>
              </div>

              {/* Action CTA Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20watched%20your%20hair%20fixing%20transformation%20video%202%20and%20would%20like%20a%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 btn-whatsapp justify-center text-xs sm:text-sm py-2.5"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Consultation</span>
                </a>

                <a
                  href="https://youtu.be/HPTfePcIl9I"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#075078] hover:text-[#29B6EB] border border-[#CBD5E1] hover:border-[#29B6EB] bg-white rounded-lg px-4 py-2.5 transition-colors"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — IN-STUDIO CONFIDENTIALITY NOTICE
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#005675] via-[#075078] to-[#104C88] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-4 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#29B6EB]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#29B6EB] flex items-center justify-center mx-auto shadow-inner">
            <ShieldCheck className="w-7 h-7 text-[#29B6EB]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Want to See Video Transformations &amp; Scalp Close-Ups?
          </h3>
          <p className="text-sm sm:text-base text-white/85 max-w-2xl mx-auto leading-relaxed">
            We hold client privacy in the highest regard. For clients who have consented to video releases, we share full high-definition hairline close-ups, comb-through demos, and water tests during your confidential in-studio consultation.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <HoverLift3D>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20see%20video%20results.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>Request Video Case Studies on WhatsApp</span>
              </a>
            </HoverLift3D>

            <HoverLift3D>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-bold text-sm px-6 py-3 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>Book In-Person Viewing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </HoverLift3D>
          </div>
        </div>
      </section>
    </div>
  )
}
