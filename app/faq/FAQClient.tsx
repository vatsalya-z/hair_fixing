'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Search,
  X,
  ShieldCheck,
  CheckCircle,
  Coins,
  Waves,
  Eye,
  HeartHandshake,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeInUp, HoverLift3D } from '@/components/MotionWrappers'
import FAQHeroImageWithTilt from '@/components/FAQHeroImageWithTilt'
import { FAQS_DATA, SITE_INFO } from '@/data/siteData'

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Dynamically derive all categories from FAQS_DATA
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(FAQS_DATA.map((item) => item.category)))]
  }, [])

  // Filter FAQs by category and search query
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        query === '' ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Quick jump helper for the top 4 concerns
  const handleQuickJump = (category: string, questionKeyword: string) => {
    setSelectedCategory(category)
    setSearchQuery('')
    const targetIdx = FAQS_DATA.findIndex(
      (f) =>
        f.category === category &&
        f.question.toLowerCase().includes(questionKeyword.toLowerCase())
    )
    if (targetIdx !== -1) {
      setOpenIndex(0) // since it will be first in filtered list
    }
    const elem = document.getElementById('faq-list')
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full bg-white">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (3D TILT WITH CUSTOM FAQ IMAGE)
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
                  <HelpCircle className="w-3.5 h-3.5" />
                  Hair Fixing Knowledge Hub
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Frequently Asked Questions on Hair Fixing in{' '}
                  <span className="text-[#29B6EB]">Thiruvananthapuram</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Transparent, doctor-backed answers on hair patch costs, waterproof medical bonding, swimming and workouts in Kerala&apos;s humidity, and undetectable human hair systems.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <a href="#faq-list" className="btn-primary">
                      Browse All Questions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20have%20a%20specific%20question%20regarding%20hair%20patch%20fixing.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>Ask on WhatsApp</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
                  {[
                    '100% Honest Pricing Answers',
                    'Kerala Humidity Tested',
                    'Zero Pain & Non-Surgical',
                    'Private Studio Consultations',
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
            <div className="flex justify-center lg:justify-end w-full">
              <FAQHeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — QUICK ANSWERS TO TOP 4 CLIENT QUESTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 px-4 sm:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Quick Facts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-2 mb-2">
              Most Common Hair Fixing Inquiries at a Glance
            </h2>
            <div className="w-14 h-1 bg-[#29B6EB] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Cost */}
            <div
              onClick={() => handleQuickJump('Cost', 'cost')}
              className="bg-[#F3F7FB] rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#29B6EB] hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#075078] mb-1 group-hover:text-[#174BA5] transition-colors">
                How Much Does It Cost?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Packages start from <strong>₹8,999</strong> up to ₹24,999 with zero hidden styling fees.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#29B6EB] font-bold mt-3 group-hover:underline">
                Read full pricing answer <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* 2. Swimming & Gym */}
            <div
              onClick={() => handleQuickJump('Lifestyle', 'swim')}
              className="bg-[#F3F7FB] rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#29B6EB] hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Waves className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#075078] mb-1 group-hover:text-[#174BA5] transition-colors">
                Can I Swim &amp; Shower?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                <strong>100% Yes!</strong> FDA-approved waterproof adhesives resist salt water, chlorine, and heavy sweat.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#29B6EB] font-bold mt-3 group-hover:underline">
                Read lifestyle details <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* 3. Detectability */}
            <div
              onClick={() => handleQuickJump('Appearance', 'notice')}
              className="bg-[#F3F7FB] rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#29B6EB] hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#075078] mb-1 group-hover:text-[#174BA5] transition-colors">
                Will Anyone Notice It?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                <strong>Completely undetectable.</strong> Micro-knotting mimics real follicles growing naturally from your scalp.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#29B6EB] font-bold mt-3 group-hover:underline">
                Read appearance guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* 4. Pain & Surgery */}
            <div
              onClick={() => handleQuickJump('Safety', 'painful')}
              className="bg-[#F3F7FB] rounded-2xl p-6 border border-[#E2E8F0] shadow-xs hover:border-[#29B6EB] hover:shadow-md cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#075078] mb-1 group-hover:text-[#174BA5] transition-colors">
                Is It Painful or Surgical?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                <strong>Zero needles, zero scars.</strong> Non-invasive cosmetic process completed in one 90-minute session.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[#29B6EB] font-bold mt-3 group-hover:underline">
                Read safety info <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — MAIN INTERACTIVE ACCORDION & SEARCH
      ═══════════════════════════════════════════════════════════ */}
      <section id="faq-list" className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Detailed Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-3">
              Explore Questions by Category
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3" />
            <p className="text-sm text-[#64748B]">
              Search below or select a category to find immediate answers.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search questions (e.g. cost, swimming, pain, maintenance, lifespan)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setOpenIndex(0)
                }}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-[#E2E8F0] bg-white shadow-sm focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3.5 text-[#94A3B8] hover:text-[#075078] p-0.5 rounded-full"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="text-center text-xs text-[#64748B] mt-2">
                Showing {filteredFaqs.length} results for &ldquo;{searchQuery}&rdquo;
              </p>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? FAQS_DATA.length
                  : FAQS_DATA.filter((f) => f.category === cat).length

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setOpenIndex(0)
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-[#005675] text-white shadow-md'
                      : 'bg-white text-[#075078] border border-[#E2E8F0] hover:bg-[#F3F7FB]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat
                        ? 'bg-white/20 text-white'
                        : 'bg-[#F3F7FB] text-[#64748B]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Accordion List */}
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-10 text-center border border-[#E2E8F0] shadow-sm space-y-4">
              <HelpCircle className="w-12 h-12 text-[#94A3B8] mx-auto" />
              <h3 className="text-xl font-bold text-[#075078]">No Exact Match Found</h3>
              <p className="text-sm text-[#64748B] max-w-md mx-auto">
                We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Feel free to chat directly with our specialist on WhatsApp.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('All')
                  }}
                  className="btn-secondary-light text-xs"
                >
                  Reset Search
                </button>
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi,%20I%20have%20a%20question%20about:%20${encodeURIComponent(
                    searchQuery
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp text-xs"
                >
                  <FaWhatsapp className="w-4 h-4 text-white" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index
                const questionNumber = String(index + 1).padStart(2, '0')

                return (
                  <div
                    key={faq.question}
                    className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                      isOpen
                        ? 'border-[#29B6EB] bg-white shadow-lg shadow-[#075078]/5 ring-1 ring-[#29B6EB]/30'
                        : 'border-[#E2E8F0] bg-white hover:border-[#29B6EB]/60 shadow-xs'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 touch-manipulation group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        {/* Number Badge */}
                        <span
                          className={`text-xs font-black px-2.5 py-1 rounded-lg shrink-0 transition-colors mt-0.5 ${
                            isOpen
                              ? 'bg-[#005675] text-[#29B6EB]'
                              : 'bg-[#F3F7FB] text-[#64748B] group-hover:bg-[#E2E8F0]'
                          }`}
                        >
                          {questionNumber}
                        </span>

                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#29B6EB] block mb-1">
                            {faq.category}
                          </span>
                          <span
                            className={`text-base sm:text-lg font-bold transition-colors leading-snug ${
                              isOpen
                                ? 'text-[#075078]'
                                : 'text-[#252B38] group-hover:text-[#075078]'
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>
                      </div>

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#005675] text-[#29B6EB]'
                            : 'bg-[#F3F7FB] text-[#64748B] group-hover:bg-[#E2E8F0]'
                        }`}
                      >
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#29B6EB]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#252B38] leading-relaxed border-t border-[#E2E8F0] bg-white">
                        <p className="text-[#334155] leading-relaxed pl-11">{faq.answer}</p>

                        <div className="mt-4 pt-3.5 border-t border-[#E2E8F0]/70 flex flex-wrap items-center justify-between gap-2 pl-11 text-xs text-[#64748B]">
                          <span className="font-semibold text-[#005675]">
                            Verified by ozzone Senior Trichology Team
                          </span>
                          <a
                            href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20have%20a%20question%20about:%20${encodeURIComponent(
                              faq.question
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#25D366] hover:text-[#20bd5a] font-bold inline-flex items-center gap-1.5 transition-colors"
                          >
                            <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                            <span>Ask about this on WhatsApp →</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — STILL HAVE QUESTIONS HELP DESK
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-16 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#005675] via-[#075078] to-[#104C88] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-5 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#29B6EB]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 text-[#29B6EB] flex items-center justify-center mx-auto shadow-inner">
            <HelpCircle className="w-7 h-7 text-[#29B6EB]" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Have a Specific Question About Your Scalp or Thinning?
          </h3>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto leading-relaxed">
            Every hair loss pattern is completely unique. Speak in confidence with our certified trichologists at Statue Junction (MG Road) or Pattom, Thiruvananthapuram.
          </p>

          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <HoverLift3D>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                className="bg-white text-[#005675] hover:bg-[#F3F7FB] font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#005675]" />
                <span>Call Us: {SITE_INFO.phone}</span>
              </a>
            </HoverLift3D>

            <HoverLift3D>
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20consult%20with%20a%20specialist.`}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
                <span>WhatsApp Specialist</span>
              </a>
            </HoverLift3D>

            <HoverLift3D>
              <Link
                href="/contact/"
                className="bg-transparent border-2 border-white/80 text-white hover:bg-white/10 font-bold text-sm px-6 py-3 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <span>Book Free Analysis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </HoverLift3D>
          </div>
        </div>
      </section>
    </div>
  )
}
