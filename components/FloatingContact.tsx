'use client'

import React from 'react'
import { Phone } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export default function FloatingContact() {
  return (
    // Visible strictly on desktop view (lg: >= 1024px); mobile uses the dedicated sticky bottom bar
    <div className="fixed bottom-6 right-6 z-40 hidden lg:flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20would%20like%20to%20know%20more%20about%20hair%20patch%20fixing.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group relative"
      >
        <FaWhatsapp className="w-7 h-7" />
        <span className="absolute right-14 bg-[#075078] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
        aria-label="Call ozzone Hair Studio"
        className="w-13 h-13 rounded-full bg-[#005675] hover:bg-[#174BA5] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 group relative"
      >
        <Phone className="w-6 h-6 text-[#29B6EB]" />
        <span className="absolute right-14 bg-[#005675] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Call: {SITE_INFO.phone}
        </span>
      </a>
    </div>
  )
}
