'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Products', href: '/products' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-[0_2px_20px_rgba(7,80,120,0.10)]'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" aria-label="ozzone Hair – Home">
          <Image
            src="/images/ozzone-hair-logo-dark.png"
            alt="ozzone Hair Fixing Thiruvananthapuram Logo"
            width={130}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-md whitespace-nowrap ${
                  isActive
                    ? 'text-[#075078]'
                    : 'text-[#252B38] hover:text-[#075078]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#29B6EB] rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2 whitespace-nowrap"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
            <span>Free Consultation</span>
          </a>
        </div>

        {/* Mobile: WhatsApp pill + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20want%20to%20book%20a%20consultation.`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-white p-2 rounded-md hover:bg-[#20bd5a] transition-colors shadow-xs"
            aria-label="WhatsApp Us"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#075078] hover:bg-[#F3F7FB] rounded-md transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E2E8F0] px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-[#F3F7FB] text-[#075078] border-l-4 border-[#075078]'
                      : 'text-[#252B38] hover:bg-[#F3F7FB] hover:text-[#075078]'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#64748B]" />
                </Link>
              )
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-[#E2E8F0] flex flex-col gap-3">
            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#075078] text-[#075078] font-semibold text-sm hover:bg-[#F3F7FB] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {SITE_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm shadow-md transition-colors"
            >
              <FaWhatsapp className="w-4 h-4 text-white" />
              <span>Free WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
