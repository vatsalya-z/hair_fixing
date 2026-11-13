'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
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
          <Phone
            className="w-5 h-5 text-[#29B6EB] group-hover:scale-110 transition-transform stroke-[2.3]"
            aria-hidden="true"
          />
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
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 py-1 active:scale-95 transition-transform min-h-[44px] touch-manipulation group"
          aria-label="Book Now Free Consultation"
        >
          <Calendar
            className="w-5 h-5 text-[#29B6EB] group-hover:scale-110 transition-transform stroke-[2.3]"
            aria-hidden="true"
          />
          <span className="text-[11px] font-black tracking-wider uppercase text-white drop-shadow-xs">
            BOOK NOW
          </span>
        </Link>
      </div>
    </aside>
  )
}
