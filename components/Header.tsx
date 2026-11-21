'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Services', href: '/services/' },
  { name: 'Solutions', href: '/solutions/' },
  { name: 'Products', href: '/products/' },
  { name: 'Gallery', href: '/gallery/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Contact', href: '/contact/' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Synchronize mobile menu open state with other components (e.g. MobileBottomBar)
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent('mobile-menu-state-change', {
        detail: { isOpen: mobileMenuOpen },
      })
    )
  }, [mobileMenuOpen])

  // Listen to custom toggle / close events from MobileBottomBar
  useEffect(() => {
    const handleToggle = () => setMobileMenuOpen((prev) => !prev)
    const handleClose = () => setMobileMenuOpen(false)

    window.addEventListener('toggle-mobile-menu', handleToggle)
    window.addEventListener('close-mobile-menu', handleClose)

    return () => {
      window.removeEventListener('toggle-mobile-menu', handleToggle)
      window.removeEventListener('close-mobile-menu', handleClose)
    }
  }, [])

  // Close mobile menu and unlock body scroll if resized to desktop viewport (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Close mobile menu on Escape key press (modern keyboard accessibility)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Lock body scroll when mobile menu is open, release when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-[0_2px_20px_rgba(7,80,120,0.10)]'
            : 'bg-white'
        }`}
      >
        <nav
          aria-label="Primary navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18"
        >
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

          {/* Desktop Navigation (visible strictly on desktop lg: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-md whitespace-nowrap ${
                    isActive
                      ? 'text-[#075078]'
                      : 'text-[#252B38] hover:text-[#075078] nav-link-animated'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-2.5 xl:left-3 right-2.5 xl:right-3 h-[2px] bg-[#29B6EB] rounded-full shadow-[0_0_8px_rgba(41,182,235,0.6)]" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA (visible strictly on desktop lg: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20hair%20analysis%20consultation.`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2.5 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2 whitespace-nowrap group"
            >
              <FaWhatsapp className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
              <span>Free Consultation</span>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#075078] hover:bg-[#F3F7FB] active:bg-[#E2E8F0] rounded-lg transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] touch-manipulation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer & Backdrop (strictly mobile/tablet: lg:hidden) */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation drawer"
        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-white shadow-2xl z-50 lg:hidden flex flex-col justify-between transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 border-b border-[#E2E8F0] flex items-center justify-between bg-white sticky top-0 z-10">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center"
            aria-label="ozzone Hair – Home"
          >
            <Image
              src="/images/ozzone-hair-logo-dark.png"
              alt="ozzone Hair Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-[#64748B] hover:text-[#075078] hover:bg-[#F3F7FB] rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Close navigation menu"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 overscroll-contain">
          <p className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
            Navigation
          </p>

          <nav aria-label="Mobile menu links" className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-xl transition-all duration-200 min-h-[44px] touch-manipulation active:scale-[0.98] ${
                    isActive
                      ? 'bg-[#075078] text-white shadow-sm'
                      : 'text-[#252B38] hover:bg-[#F3F7FB] hover:text-[#075078] hover:translate-x-1'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className={`text-xs ${isActive ? 'text-white' : 'text-[#94A3B8]'}`}>→</span>
                </Link>
              )
            })}
          </nav>

          {/* Quick Studio Info Card */}
          
        </div>

        {/* Drawer Footer CTA */}
        
      </aside>
    </>
  )
}
