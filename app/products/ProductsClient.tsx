'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { PRODUCTS_DATA, PRODUCT_FAQS, SITE_INFO } from '@/data/siteData'
import ProductHeroImageWithTilt from '@/components/ProductHeroImageWithTilt'

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const categories = ['All', 'Solvents & Cleaners', 'Adhesives & Bonding']

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="w-full text-slate-800">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO BANNER WITH 3D REALISTIC IMAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center py-10 sm:py-12 lg:py-16 text-white">
        {/* Ambient Lighting Accents */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Call to Actions */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/80 mb-3 sm:mb-4 font-medium" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-[#29B6EB] transition-colors">Home</Link>
                <span className="text-white/40" aria-hidden="true">/</span>
                <span className="text-[#29B6EB] font-semibold">Hair Products</span>
              </nav>

              {/* Verified Tag */}
              <div className="inline-flex items-center gap-2 bg-[#29B6EB]/20 border border-[#29B6EB]/40 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold text-[#29B6EB] tracking-wide mb-3 sm:mb-4">
                <span className="w-2 h-2 rounded-full bg-[#29B6EB]" />
                <span>100% Authentic Hair System Care</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3 sm:mb-4 leading-[1.18]">
                Hair Fixing Products &amp; Care in{' '}
                <span className="text-[#29B6EB] drop-shadow-sm">Thiruvananthapuram</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl leading-relaxed mb-6 font-normal">
                Official hair fixing and replacement care essentials. Featuring certified Walker Tape C-22 fast-acting solvent remover and Ultrahold maximum wear adhesive, formulated for secure bonding and gentle maintenance in Kerala&apos;s humid weather.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%2C%20I%20want%20to%20inquire%20about%20C-22%20Solvent%20and%20Ultrahold%20Adhesive.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm lg:text-base px-5 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span>WhatsApp Inquire / Order</span>
                </a>
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="bg-transparent hover:bg-white/10 text-white font-semibold text-xs sm:text-sm lg:text-base px-5 py-3 rounded-lg border border-white/60 hover:border-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Call {SITE_INFO.phone}</span>
                </a>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 text-[11px] sm:text-xs lg:text-sm text-white/85 w-full pt-4 sm:pt-5 border-t border-white/15">
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>100% Genuine Imported Products</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Safe for Sensitive Scalps</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>4+ Weeks Maximum Wear Hold</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-left">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shrink-0" />
                  <span>Fast Studio Pickup &amp; Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Hero Card */}
            {/* <div className="flex justify-center lg:justify-end w-full mt-4 lg:mt-0">
              <ProductHeroImageWithTilt />
            </div> */}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — PRODUCTS CATALOG (MOBILE GRID: 2 COLUMNS ON MOBILE, UNCHANGED ON DESKTOP)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Certified Products
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Professional Hair Fixing &amp; Maintenance Supplies
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Discover the essential hair system products from Ozzone Hair Studio. Specially formulated for gentle adhesive release and ultra-strong hold.
            </p>
          </div>

          {/* Category Filter Tabs */}
          

          {/* Product Cards: 2-Column Grid on Mobile, 2-Column on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-xl sm:rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
              >
                <div>
                  {/* Clean Photography Frame */}
                  <div className="relative h-36 xs:h-44 sm:h-64 lg:h-72 w-full bg-[#F3F7FB] p-2 sm:p-6 flex items-center justify-center overflow-hidden border-b border-[#E2E8F0]">
                    <Image
                      src={product.image}
                      alt={`${product.title} - Hair Fixing Products Ozzone Hair`}
                      width={400}
                      height={320}
                      className="w-full h-full object-contain p-1 sm:p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#005675] text-white text-[9px] sm:text-[11px] font-bold px-1.5 py-0.5 sm:px-3 sm:py-1 rounded shadow-xs">
                      {product.category}
                    </div>
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm text-[#075078] border border-[#E2E8F0] text-[9px] sm:text-[11px] font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded shadow-xs">
                      {product.lifespan}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-3 sm:p-6 lg:p-7">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-2 sm:mb-3 text-[10px] sm:text-xs">
                      <span className="text-[#005675] font-semibold bg-[#EBF5FB] px-2 py-0.5 rounded-md inline-block">
                        Genuine
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-[10px] sm:text-xs lg:text-sm">
                        <span aria-hidden="true">&#9733;</span>
                        <span>{product.rating}.0</span>
                        <span className="text-[#94A3B8] font-normal text-[10px] hidden xs:inline">(Verified)</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-xs xs:text-sm sm:text-xl lg:text-2xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-tight mb-1 sm:mb-2.5">
                      {product.title}
                    </h3>

                    {/* Product Description */}
                    <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-none">
                      {product.description}
                    </p>

                    {/* Specifications List */}
                    <div className="pt-2 sm:pt-3.5 border-t border-[#E2E8F0] space-y-1 sm:space-y-2 text-[10px] sm:text-xs lg:text-sm text-[#252B38]">
                      <div>
                        <span className="text-[#64748B]">Base: </span>
                        <strong className="text-[#075078] block sm:inline">{product.baseType}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B]">Fit: </span>
                        <strong className="text-[#075078] block sm:inline">{product.hairType}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Price & Actions */}
                <div className="p-3 sm:p-6 lg:p-7 pt-0">
                  <div className="flex items-baseline justify-between mb-2.5 sm:mb-4 border-t border-[#E2E8F0] pt-2.5 sm:pt-4">
                    <span className="text-[10px] sm:text-xs lg:text-sm text-[#64748B]">Price</span>
                    <span className="text-xs sm:text-base lg:text-lg font-bold text-[#075078]">{product.price}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2.5">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20would%20like%20to%20order%20or%20inquire%20about%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-[11px] sm:text-xs lg:text-sm py-2 px-2 sm:py-2.5 sm:px-3 rounded-lg text-center shadow-xs transition-colors flex items-center justify-center gap-1"
                    >
                      <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      <span>Inquire</span>
                    </a>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — STEP-BY-STEP APPLICATION GUIDE (RESPONSIVE GRID)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Expert Usage Guide
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              How C-22 Solvent &amp; Ultrahold Work Together
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Follow the two-step protocol used by professional hair technicians to guarantee painless system removal and an unbreakable bond.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-3.5 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                  01
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">
                  Painless Release (C-22)
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                  Spray C-22 directly on the adhesive bond line. Its natural citrus formula softens adhesives within 60 seconds for effortless release.
                </p>
              </div>
            </div>

            <div className="bg-white p-3.5 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                  02
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">
                  Scalp &amp; Base Cleansing
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                  Rinse away residue using lukewarm water. C-22 is 100% water-soluble, leaving zero sticky traces on scalp or base perimeters.
                </p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-white p-3.5 sm:p-7 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#EBF5FB] text-[#005675] font-extrabold flex items-center justify-center mb-2.5 sm:mb-4 text-xs sm:text-base">
                  03
                </div>
                <h3 className="text-xs sm:text-base lg:text-lg font-bold text-[#075078] mb-1 sm:mb-2">
                  Maximum Hold (Ultrahold)
                </h3>
                <p className="text-[10px] sm:text-xs lg:text-sm text-[#64748B] leading-snug sm:leading-relaxed">
                  Apply thin coats of Ultrahold, let tack for 3-5 minutes, and secure. Delivers 4+ weeks of waterproof, sweat-resistant hold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — FREQUENTLY ASKED QUESTIONS (ACCORDION)
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Frequently Asked Questions
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Common Questions About Our Hair Products
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about using Walker Tape C-22 solvent, Ultrahold adhesive, scalp safety, hold duration, and studio purchasing.
            </p>
          </div>

          {/* Accordion List with clean typography and +/- indicators */}
          <div className="space-y-3 sm:space-y-4">
            {PRODUCT_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#29B6EB] bg-[#F3F7FB] shadow-xs'
                      : 'border-[#E2E8F0] bg-white hover:border-[#29B6EB]/60'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-4 py-3.5 sm:px-6 sm:py-5 flex items-center justify-between gap-3 sm:gap-4"
                  >
                    <span className="text-xs sm:text-base font-bold text-[#075078] flex items-center gap-2.5 sm:gap-3">
                      <span
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 transition-colors duration-200 ${
                          isOpen ? 'bg-[#29B6EB]' : 'bg-[#CBD5E1]'
                        }`}
                      />
                      <span>{faq.question}</span>
                    </span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center font-bold text-xs sm:text-sm text-[#075078] shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-5 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0]/70">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* FAQ WhatsApp Assistance Card */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#075078] to-[#104C88] text-white rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 shadow-sm">
            <div className="text-center sm:text-left">
              <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full mb-1.5 sm:mb-2">
                Expert Assistance
              </span>
              <h3 className="text-base sm:text-xl font-bold">Have a specific question about product usage?</h3>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Our certified trichology specialists in Thiruvananthapuram are happy to assist you.
              </p>
            </div>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20have%20a%20question%20about%20hair%20patch%20products.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-lg transition-all shadow-xs flex items-center justify-center gap-2 shrink-0 w-full sm:w-auto"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — GOOGLE MAP & STUDIO LOCATION DETAILS
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Studio Location
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#075078] tracking-tight mt-2.5 mb-2.5 sm:mt-3 sm:mb-3">
              Visit Our Thiruvananthapuram Studio For Product Pickup
            </h2>
            <div className="w-14 sm:w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
              Collect genuine Walker Tape C-22 solvent and Ultrahold adhesive directly from our clinic, or visit us for personalized adhesive patch testing and system care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Studio Contact Details Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-5 sm:p-8 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="mb-4 sm:mb-6">
                    <span className="text-[11px] sm:text-xs font-bold text-[#005675] uppercase tracking-wider bg-[#EBF5FB] px-2.5 py-1 rounded">
                      Main Clinic &amp; Store
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-[#075078] mt-2 sm:mt-2.5">
                      Ozzone Hair Studio
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748B] mt-0.5 sm:mt-1">
                      Statue Junction, MG Road, Thiruvananthapuram
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-[#334155] border-t border-[#E2E8F0] pt-4 sm:pt-5">
                    <div>
                      <span className="text-[#64748B] block font-medium">Studio Address:</span>
                      <p className="text-[#075078] font-semibold mt-0.5 leading-snug">
                        {SITE_INFO.address}
                      </p>
                    </div>

                    <div>
                      <span className="text-[#64748B] block font-medium">Contact Numbers:</span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mt-0.5 font-semibold">
                        <a href={`tel:${SITE_INFO.phone}`} className="text-[#005675] hover:underline">
                          {SITE_INFO.phone}
                        </a>
                        <span className="text-slate-300">|</span>
                        <a href={`tel:${SITE_INFO.altPhone}`} className="text-[#005675] hover:underline">
                          {SITE_INFO.altPhone}
                        </a>
                      </div>
                    </div>

                    <div>
                      <span className="text-[#64748B] block font-medium">Studio Timings:</span>
                      <p className="text-[#075078] font-semibold mt-0.5">
                        {SITE_INFO.timing}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#E2E8F0] space-y-1.5 sm:space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#075078] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>Instant In-Studio Product Pickup Available</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#075078] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>Free Scalp Sensitivity &amp; Adhesive Patch Test</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-[#075078] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>Private Consultation &amp; Servicing Suites</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <a
                    href="https://maps.google.com/?q=Statue+Palayam+Thiruvananthapuram"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#005675] hover:bg-[#174BA5] text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-lg text-center shadow-xs transition-colors"
                  >
                    Open in Google Maps
                  </a>
                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20am%20coming%20for%20product%20pickup.`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold py-2.5 sm:py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Interactive Embed Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-xs p-2.5 sm:p-3">
                <div className="flex items-center justify-between p-2.5 sm:p-3 border-b border-[#E2E8F0] mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-bold text-[#075078]">
                      Live Studio Map · Trivandrum Central
                    </span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Statue+Palayam+Thiruvananthapuram"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm font-semibold text-[#005675] hover:text-[#29B6EB] transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>

                <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-xl overflow-hidden border border-[#E2E8F0]">
                  <iframe
                    src={SITE_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ozzone Hair Fixing Studio Thiruvananthapuram Location Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
