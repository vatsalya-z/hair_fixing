'use client'

import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Mobile quick contact bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#004f6e] border-t border-[#006085]/60 shadow-[0_-4px_25px_rgba(0,0,0,0.35)]"
      style={{
        paddingBottom: 'max(0.4rem, env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="max-w-md mx-auto px-4 h-16 grid grid-cols-3 items-center relative">
        {/* Left Action: CALL NOW */}
        <a
          href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center gap-1 py-1 active:scale-95 transition-transform min-h-[44px] touch-manipulation group"
          aria-label={`Call Now: ${SITE_INFO.phone}`}
        >
          <svg
            className="w-5 h-5 text-[#29B6EB] group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-[11px] font-black tracking-wider uppercase text-white drop-shadow-xs">
            CALL NOW
          </span>
        </a>

        {/* Center Action: Elevated WHATSAPP Floating Button */}
        <a
          href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center -mt-6 active:scale-95 transition-transform touch-manipulation group"
          aria-label="Chat on WhatsApp"
        >
          {/* Elevated Circular WhatsApp Button with glow and ring */}
          <div className="relative flex items-center justify-center">
            {/* Soft Green Glow */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] blur-md opacity-45 group-hover:opacity-70 transition-opacity" />

            {/* Green WhatsApp Circle */}
            <div className="relative w-14 h-14 rounded-full bg-[#25D366] border-[3.5px] border-[#004059] flex items-center justify-center shadow-lg shadow-black/45 group-hover:bg-[#20ba59] transition-colors">
              <FaWhatsapp className="w-8 h-8 text-white drop-shadow-xs" aria-hidden="true" />
            </div>
          </div>

          {/* WhatsApp Pill Label */}
          <div className="mt-1 px-3 py-0.5 rounded-full bg-[#00384d]/90 border border-[#005e82]/60 shadow-inner flex items-center justify-center">
            <span className="text-[10px] font-black tracking-wider uppercase text-[#25D366]">
              WHATSAPP
            </span>
          </div>
        </a>

        {/* Right Action: BOOK NOW */}
        <Link
          href="/contact/#booking-form"
          className="flex flex-col items-center justify-center gap-1 py-1 active:scale-95 transition-transform min-h-[44px] touch-manipulation group"
          aria-label="Book Now Free Consultation"
        >
          <svg
            className="w-5 h-5 text-[#29B6EB] group-hover:scale-110 transition-transform"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-[11px] font-black tracking-wider uppercase text-white drop-shadow-xs">
            BOOK NOW
          </span>
        </Link>
      </div>
    </aside>
  )
}
