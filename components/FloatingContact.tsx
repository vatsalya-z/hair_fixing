'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'
import { Floating3D } from '@/components/MotionWrappers'

export default function FloatingContact() {
  return (
    // Visible strictly on desktop view (lg: >= 1024px); mobile uses the dedicated sticky bottom bar
    <aside aria-label="Desktop quick contact buttons" className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col gap-3">
      <Floating3D duration={5} yOffset={4}>
        {/* WhatsApp Floating Button */}
        <a
          href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20would%20like%20to%20know%20more%20about%20hair%20patch%20fixing.`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative mb-3"
        >
          <FaWhatsapp className="w-7 h-7 drop-shadow-sm group-hover:rotate-6 transition-transform duration-300" />
          <span className="absolute right-14 bg-[#075078] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Call Floating Button */}
        <a
          href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
          aria-label="Call ozzone Hair Studio"
          className="w-13 h-13 rounded-full bg-[#005675] hover:bg-[#174BA5] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        >
          <svg
            className="w-6 h-6 text-[#29B6EB] group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="absolute right-14 bg-[#005675] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Call: {SITE_INFO.phone}
          </span>
        </a>
      </Floating3D>
    </aside>
  )
}
