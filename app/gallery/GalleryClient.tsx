'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Clock, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { GALLERY_ITEMS, SITE_INFO } from '@/data/siteData'

export default function GalleryClient() {
  const [filter, setFilter] = useState('All')

  const filterTabs = ['All', 'Hair Patching', 'Hair Bonding', 'Hair Weaving', "Women's Topper"]

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter)

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="Gallery"
        title="Client Transformations &amp; Results in"
        highlightText="Thiruvananthapuram"
        subtitle="Witness real before-and-after transformations from our Statue Junction &amp; Pattom studios. Undetectable hairlines, natural volume, and restored confidence."
      />

      {/* Main Gallery Section (White and Light Blue background) */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Verified Studio Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-4">
              Real People. Real 90-Minute Restorations.
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-base text-[#64748B]">
              Browse unretouched photographic results showing real scalp blending, natural hairlines, and varied hair textures suited for Malayali men and women.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === tab
                    ? 'bg-[#005675] text-white shadow-md'
                    : 'bg-[#F3F7FB] text-[#075078] hover:bg-[#E2E8F0]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Clean image grids with subtle hover animations and blue overlays */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#F3F7FB] border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Before / After Split */}
                <div className="p-3 bg-white border-b border-[#E2E8F0]">
                  <div className="grid grid-cols-2 gap-2 relative">
                    {/* Before Image */}
                    <div className="relative h-56 rounded-xl overflow-hidden bg-slate-200">
                      <Image
                        src={item.beforeImg}
                        alt={`${item.solutionProvided} - ${item.clientType} before hair fixing treatment at ozzone Hair Thiruvananthapuram`}
                        width={300}
                        height={350}
                        className="w-full h-full object-cover grayscale-[35%]"
                      />
                      <span className="absolute top-2 left-2 bg-[#252B38]/85 text-white text-[11px] font-bold px-2.5 py-0.5 rounded shadow">
                        Before
                      </span>
                    </div>

                    {/* After Image with Blue Overlay on Hover */}
                    <div className="relative h-56 rounded-xl overflow-hidden bg-[#075078]/20 group-hover:shadow-md transition-all duration-300">
                      <Image
                        src={item.afterImg}
                        alt={`${item.solutionProvided} - ${item.clientType} after hair fixing transformation at ozzone Hair Thiruvananthapuram`}
                        width={300}
                        height={350}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-[#005675] text-white text-[11px] font-bold px-2.5 py-0.5 rounded border border-[#29B6EB] shadow">
                        After
                      </span>

                      {/* Blue Overlay on hover */}
                      <div className="absolute inset-0 bg-[#075078]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="bg-white border border-[#E2E8F0] text-[#075078] font-bold px-3 py-1 rounded-md">
                      {item.category}
                    </span>
                    <span className="text-[#64748B] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#29B6EB]" />
                      <span>{item.recoveryTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#075078] leading-tight">
                    {item.clientType}
                  </h3>

                  <div className="text-xs text-[#252B38] space-y-1 bg-white p-3 rounded-lg border border-[#E2E8F0]">
                    <p>
                      <strong className="text-[#075078]">System Fitted: </strong>
                      {item.solutionProvided}
                    </p>
                    <p className="text-[#64748B]">
                      <strong>Scalp Finish: </strong> Natural multi-directional hairline
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20saw%20transformation%20${item.id}%20and%20want%20a%20similar%20result.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs py-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5 mt-2 shadow-xs"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white" />
                    <span>Request Similar Transformation</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video & Verification Notice */}
      <section className="bg-[#F3F7FB] py-16 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-[#29B6EB]/50 shadow-md text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#005675] text-[#29B6EB] flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#075078]">
            Want to See Video Transformations &amp; Live Client Reviews?
          </h3>
          <p className="text-sm text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            We respect client confidentiality. For clients who have consented to video releases, we share full hairline close-ups and wind-resistance tests during your private studio consultation at Statue Junction.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#005675] hover:bg-[#174BA5] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              <span>Book In-Person Demo Session</span>
              <ArrowRight className="w-4 h-4 text-[#29B6EB]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

