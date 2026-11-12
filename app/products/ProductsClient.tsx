'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { PRODUCTS_DATA, SITE_INFO } from '@/data/siteData'

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'Solvents & Cleaners', 'Adhesives & Bonding', "Men's Systems", "Women's Toppers", 'Accessories']

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter((p) => p.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="Hair Systems & Products"
        title="Custom Hair Systems &amp; Care Products in"
        highlightText="Thiruvananthapuram"
        subtitle="Certified hair systems, C-22 solvent, Ultrahold adhesive, and maintenance accessories engineered for Kerala's humid climate."
      />

      {/* Main Section */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Product Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-4">
              Premium Natural Hair Replacement Systems &amp; Maintenance Products
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-base text-[#64748B]">
              Every unit is meticulously hand-tied with 100% genuine virgin human hair. Authentic cleaning solvents and medical bonding adhesives in Thiruvananthapuram.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#005675] text-white shadow-md'
                    : 'bg-[#F3F7FB] text-[#075078] hover:bg-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-24"
              >
                <div>
                  {/* Clean Photography Frame */}
                  <div className="relative h-64 w-full bg-[#F3F7FB] p-4 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.title} - Hair Fixing Products Thiruvananthapuram`}
                      width={400}
                      height={260}
                      className={`w-full h-full ${product.image.includes('/products/') ? 'object-contain p-2' : 'object-cover'} rounded-lg group-hover:scale-105 transition-transform duration-500`}
                    />
                    <div className="absolute top-6 left-6 bg-[#005675] text-white text-[11px] font-bold px-3 py-1 rounded shadow-sm">
                      {product.category}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="text-[#64748B] font-medium">Lifespan: <strong>{product.lifespan}</strong></span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>

                    {/* Dark Blue Product Titles */}
                    <h3 className="text-xl font-bold text-[#075078] group-hover:text-[#174BA5] transition-colors leading-tight">
                      {product.title}
                    </h3>

                    <p className="text-xs text-[#64748B] mt-2.5 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#E2E8F0] space-y-1.5 text-xs text-[#252B38]">
                      <div>
                        <span className="text-[#64748B]">Base Construction: </span>
                        <strong>{product.baseType}</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B]">Hair Specification: </span>
                        <strong>{product.hairType}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer with Price & Blue Button */}
                <div className="p-6 pt-0">
                  <div className="flex items-baseline justify-between mb-4 border-t border-[#E2E8F0] pt-3">
                    <span className="text-xs text-[#64748B]">Fixed Studio Price</span>
                    <span className="text-2xl font-extrabold text-[#075078]">{product.price}</span>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20am%20interested%20in%20${encodeURIComponent(product.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-lg text-center shadow-xs transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaWhatsapp className="w-4 h-4 text-white" />
                      <span>WhatsApp Inquire</span>
                    </a>
                    <Link
                      href="/contact"
                      className="bg-[#F3F7FB] hover:bg-[#E2E8F0] text-[#075078] font-bold text-xs px-3 py-2.5 rounded-lg transition-colors flex items-center justify-center"
                    >
                      Visit Studio
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Base Guide Strip */}
      <section className="bg-[#F3F7FB] py-16 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#075078]">
              Which Base Material Suits Kerala&apos;s Weather?
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Our trichologists match the base to your scalp sweat tendency, sports habits, and styling preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0]">
              <h4 className="text-lg font-bold text-[#075078] mb-2">Swiss / French Lace</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Maximum breathability and moisture release. Recommended for people with active routines, outdoor travel, or gym workouts in Trivandrum.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0]">
              <h4 className="text-lg font-bold text-[#075078] mb-2">0.03mm Poly Micro-Skin</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Zero detectable edges. Extremely lightweight and feels identical to genuine skin, perfect for spiked or brushed-back hairlines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0]">
              <h4 className="text-lg font-bold text-[#075078] mb-2">Silk Top Mono Base</h4>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Superb durability and realistic partings. Multi-layer silk hides all knots, creating the illusion of hair sprouting from real follicles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

