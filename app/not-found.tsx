import React from 'react'
import Link from 'next/link'
import { Home, ArrowLeft, Phone, Search, HelpCircle } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#F3F7FB] text-[#005675] border border-[#E2E8F0] mb-4">
          404 Error
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#075078] tracking-tight mb-3">
          Page Not Found
        </h1>

        <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-6" />

        <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8 max-w-md mx-auto">
          We couldn&apos;t find the page you were looking for. It might have been moved or updated as part of our website redesign.
        </p>

        {/* Quick Nav Links */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 mb-8 text-left">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#005675] mb-3">
            Popular Destinations:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <Link
              href="/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Home Page</span>
            </Link>
            <Link
              href="/services/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Hair Fixing Services</span>
            </Link>
            <Link
              href="/hair-fixing-trivandrum/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Hair Fixing Trivandrum</span>
            </Link>
            <Link
              href="/hair-fixing-bangalore/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Hair Fixing Bangalore</span>
            </Link>
            <Link
              href="/gallery/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Before &amp; After Gallery</span>
            </Link>
            <Link
              href="/blog/"
              className="text-[#075078] hover:text-[#29B6EB] font-medium py-1 flex items-center gap-1.5 transition-colors"
            >
              <span>› Hair Care Guides</span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto text-sm justify-center"
          >
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact/"
            className="btn-secondary-light w-full sm:w-auto text-sm justify-center"
          >
            <span>Contact Studio</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
