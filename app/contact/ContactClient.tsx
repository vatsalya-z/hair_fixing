'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import {
  FadeInUp,
  HoverLift3D,
  SectionReveal3D,
  StaggerGridLR,
  CardRevealLR,
  Card3DTilt,
} from '@/components/MotionWrappers'
import { SITE_INFO } from '@/data/siteData'

const TIME_SLOTS = [
  { label: 'Morning', hours: '9 AM – 12 PM', value: 'Morning (9:00 AM - 12:00 PM)' },
  { label: 'Afternoon', hours: '12 PM – 4 PM', value: 'Afternoon (12:00 PM - 4:00 PM)' },
  { label: 'Evening', hours: '4 PM – 7:30 PM', value: 'Evening (4:00 PM - 7:30 PM)' },
]

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Custom Hair Patching System',
    branch: 'Thiruvananthapuram Studio (Palayam, Opp. Jubilee Hospital)',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const cleanPhone = SITE_INFO.whatsapp.replace(/\D/g, '')

    // Format appointment date if chosen
    let formattedDate = 'Earliest Available Slot'
    if (formData.preferredDate) {
      try {
        const d = new Date(formData.preferredDate + 'T00:00:00')
        if (!isNaN(d.getTime())) {
          formattedDate = d.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        } else {
          formattedDate = formData.preferredDate
        }
      } catch {
        formattedDate = formData.preferredDate
      }
    }

    // Build rich, complete WhatsApp consultation message
    const lines = [
      '✨ NEW APPOINTMENT CONSULTATION BOOKING',
      'ozzone Hair Fixing Studio • Trivandrum',
      '──────────────────────────────',
      `👤 Client Name: ${formData.name.trim()}`,
      `📞 Phone / WhatsApp: ${formData.phone.trim()}`,
      formData.email.trim() ? `✉️ Email: ${formData.email.trim()}` : null,
      '',
      `💇 Service Requested: ${formData.service}`,
      `📍 Preferred Branch: ${formData.branch}`,
      `📅 Preferred Date: ${formattedDate}`,
      `⏰ Preferred Time: ${formData.preferredTime}`,
      '',
      formData.message.trim()
        ? `💬 Client Notes / Hair Concern:\n"${formData.message.trim()}"`
        : '💬 Client Notes: No specific notes provided.',
      '──────────────────────────────',
      '_Sent via ozzonehair.com Online Booking Desk_',
    ].filter((line) => line !== null)

    const messageText = lines.join('\n')
    const targetUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`

    setWhatsappUrl(targetUrl)
    setSubmitted(true)

    // Seamless direct redirect to WhatsApp
    if (typeof window !== 'undefined') {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      if (isMobile) {
        window.location.href = targetUrl
      } else {
        const win = window.open(targetUrl, '_blank')
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.location.href = targetUrl
        }
      }
    }
  }

  return (
    <div className="w-full bg-[#F3F7FB]">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: FULL-WIDTH CONTACT HERO SECTION (FULL BACKGROUND IMAGE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[360px] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[660px] flex items-center justify-center overflow-hidden bg-[#075078] text-white">
        {/* Full-width background image covering 100vw */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/contact-hero.jpg"
            alt="ozzone Hair Studio Private Consultation Suite in Trivandrum and Bangalore"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle multi-layer overlay for maximum readability and brand atmosphere */}
        </div>

        {/* Content Container - Compact & Pixel-Perfect on Mobile, Spacious on Desktop */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20 lg:py-24 text-center flex flex-col items-center justify-center">
          {/* Breadcrumb Navigation inside Hero (Mobile Only) */}
          <nav
            aria-label="Breadcrumbs"
            className="lg:hidden flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 text-[11px] sm:text-sm text-white/85 font-medium mb-3 sm:mb-5 tracking-wide drop-shadow-xs"
          >
            <Link
              href="/"
              className="text-white/85 hover:text-[#29B6EB] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#29B6EB]/70">/</span>
            <span className="text-[#29B6EB] font-semibold">Contact</span>
          </nav>

          {/* Location Badge */}
          <FadeInUp delay={0.05} yOffset={15}>
            <div className="mb-2.5 sm:mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest bg-[#29B6EB]/25 text-[#29B6EB] border border-[#29B6EB]/40 backdrop-blur-md shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] animate-pulse" />
                Palayam, Trivandrum &amp; Indiranagar, Bengaluru
              </span>
            </div>
          </FadeInUp>

          {/* Main Title - Center Aligned & Mobile Sized */}
          <FadeInUp delay={0.15} yOffset={20}>
            <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug sm:leading-[1.15] tracking-tight max-w-4xl mx-auto mb-3 sm:mb-6 drop-shadow-md">
              Contact ozzone Hair <span className="text-[#29B6EB] block sm:inline">| Free Scalp Consultation Trivandrum</span>
            </h1>
          </FadeInUp>

          {/* Supporting Description */}
          <FadeInUp delay={0.25} yOffset={20}>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-4 sm:mb-8 leading-relaxed font-normal drop-shadow-xs">
              Visit our 100% private consultation suites for a personalized scalp inspection, custom human hair trial, and transparent price quotation with zero pressure.
            </p>
          </FadeInUp>
          

          
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHAT TO EXPECT IN YOUR CONSULTATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 px-4 sm:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Consultation Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-2 mb-3">
                What to Expect During Your Free 30-Minute Visit
              </h2>
              <div className="w-14 h-1 bg-[#29B6EB] mx-auto rounded-full" />
            </div>
          </SectionReveal3D>

          <StaggerGridLR staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Private Scalp Analysis',
                desc: 'Digital trichological assessment of your scalp condition, thinning stage, and existing donor hair.',
              },
              {
                step: '02',
                title: 'Texture & Color Match',
                desc: 'Inspect genuine 100% human hair samples matching your exact hair shade, wave, and hairline contour.',
              },
              {
                step: '03',
                title: 'Clear Transparent Quote',
                desc: 'Upfront pricing with no hidden charges, covering the hair unit, custom cut, and first wash.',
              },
              {
                step: '04',
                title: 'Zero Obligation Guarantee',
                desc: 'Take your personalized plan home with you. Absolutely no high-pressure sales tactics.',
              },
            ].map((item) => (
              <CardRevealLR key={item.step} className="h-full">
                <Card3DTilt maxTilt={6} depth={10} className="h-full">
                  <div
                    className="bg-[#F3F7FB] rounded-xl p-6 border border-[#E2E8F0] shadow-xs hover:shadow-xl relative hover:border-[#29B6EB] transition-all duration-300 h-full flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl font-black text-[#29B6EB]/30 block mb-2">{item.step}</span>
                      <h3 className="text-base font-bold text-[#075078] mb-1.5">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card3DTilt>
              </CardRevealLR>
            ))}
          </StaggerGridLR>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — MAIN BOOKING & CONTACT SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] pt-12 pb-24 sm:py-24 px-3.5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact & Studio Location Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <Card3DTilt maxTilt={4} depth={6}>
                <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 space-y-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3 py-1 rounded-full border border-[#E2E8F0]">
                      Direct Helpdesk
                    </span>
                    <h2 className="text-2xl font-bold text-[#075078] mt-2.5">
                      Speak Directly With Our Stylists
                    </h2>
                    <p className="text-xs text-[#64748B] mt-1">
                      Reach out for appointments, emergency servicing, or confidential photo evaluations.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Phone Support */}
                    <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F3F7FB] transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-[#075078] uppercase tracking-wide">
                          Phone Call Support
                        </h4>
                        <a
                          href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
                          className="text-sm font-bold text-[#252B38] hover:text-[#005675] block mt-0.5"
                        >
                          {SITE_INFO.phone}
                        </a>
                        <span className="text-[11px] text-[#64748B]">Alt: {SITE_INFO.altPhone}</span>
                      </div>
                    </div>

                    {/* WhatsApp Support */}
                    <div className="flex items-start gap-3.5 p-3 rounded-xl bg-green-50/60 border border-green-200/60 transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <FaWhatsapp className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-[#075078] uppercase tracking-wide">
                          WhatsApp Consultation Desk
                        </h4>
                        <a
                          href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20consult.`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-bold text-[#1f2937] hover:text-[#25D366] block mt-0.5"
                        >
                          Chat: +91 98470 62707
                        </a>
                        <span className="text-[11px] text-[#059669]">
                          Instant response • Photos kept 100% confidential
                        </span>
                      </div>
                    </div>

                    {/* Email Support */}
                    <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F3F7FB] transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-[#075078] uppercase tracking-wide">
                          Email Inquiries
                        </h4>
                        <a
                          href={`mailto:${SITE_INFO.email}`}
                          className="text-sm font-semibold text-[#252B38] hover:text-[#005675] block mt-0.5"
                        >
                          {SITE_INFO.email}
                        </a>
                        <span className="text-[11px] text-[#64748B]">Replies within 2 business hours</span>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F3F7FB] transition-colors">
                      <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-[#075078] uppercase tracking-wide">
                          Studio Working Hours
                        </h4>
                        <p className="text-xs text-[#252B38] font-semibold mt-0.5">{SITE_INFO.timing}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>

              {/* Studio Locations Cards */}
              <div className="space-y-4">
                {/* Branch 1 */}
                <Card3DTilt maxTilt={4} depth={6}>
                  <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#29B6EB] transition-all duration-300">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold">
                          1
                        </div>
                        <h3 className="text-base font-bold text-[#075078]">
                          Thiruvananthapuram Flagship Studio
                        </h3>
                      </div>
                      <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        Palayam, Trivandrum
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed pl-9 mb-2">
                      {SITE_INFO.address}
                    </p>
                    <p className="text-xs font-medium text-[#075078] pl-9 mb-3">
                      Phone: <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline">{SITE_INFO.phone}</a> / <a href={`tel:${SITE_INFO.altPhone.replace(/\s+/g, '')}`} className="hover:underline">{SITE_INFO.altPhone}</a>
                    </p>
                    <div className="pl-9 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E2E8F0]">
                      <span className="text-[11px] text-[#075078] font-semibold">
                        Landmark: Opp. Jubilee Memorial Hospital (2nd Gate Mizpah)
                      </span>
                      <a
                        href="https://maps.google.com/?q=PRA+48+Sunny+Meads+Lane+Palayam+Thiruvananthapuram+Kerala+695034"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#29B6EB] hover:text-[#005675] flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <span className="text-[11px]">↗</span>
                      </a>
                    </div>
                  </div>
                </Card3DTilt>

                {/* Branch 2 */}
                <Card3DTilt maxTilt={4} depth={6}>
                  <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#29B6EB] transition-all duration-300">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold">
                          2
                        </div>
                        <h3 className="text-base font-bold text-[#075078]">
                          Bengaluru Studio
                        </h3>
                      </div>
                      <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                        Indiranagar, Bengaluru
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed pl-9 mb-2">
                      {SITE_INFO.branch2}
                    </p>
                    <p className="text-xs font-medium text-[#075078] pl-9 mb-3">
                      Phone: <a href={`tel:${SITE_INFO.altPhone.replace(/\s+/g, '')}`} className="hover:underline">{SITE_INFO.altPhone}</a>
                    </p>
                    <div className="pl-9 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E2E8F0]">
                      <span className="text-[11px] text-[#075078] font-semibold">
                        Landmark: Double Road, HAL 2nd Stage, Indiranagar
                      </span>
                      <a
                        href="https://www.google.com/maps/place/Ozzone+Farrell+bangalore/@12.9660325,77.6380037,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16a25d4a7c99:0xd411d97542f78f0b!8m2!3d12.9660325!4d77.6380037!16s%2Fg%2F1tfxf3nj"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#29B6EB] hover:text-[#005675] flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <span className="text-[11px]">↗</span>
                      </a>
                    </div>
                  </div>
                </Card3DTilt>
              </div>

              {/* Clinic Privacy Guarantee Card */}
            </div>

            {/* Right Column: High-Conversion Appointment Form */}
            <div id="booking-form" className="lg:col-span-7 scroll-mt-28">
              <SectionReveal3D yOffset={25}>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#E2E8F0] shadow-xl relative overflow-hidden">
                {/* Form header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                      Online Appointment Booking
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#059669] font-bold bg-green-50 px-2.5 py-0.5 rounded-full border border-green-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Slots Open Today
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-2">
                    Schedule Your Free Scalp Consultation
                  </h2>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1.5">
                    Takes less than 60 seconds. Our clinic technician will confirm your slot immediately via WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-[#F3F7FB] border-2 border-[#29B6EB] rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 bg-[#005675] rounded-full flex items-center justify-center mx-auto text-[#29B6EB] text-2xl font-bold shadow-lg">
                      ✓
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#075078]">Consultation Details Forwarded!</h3>
                      <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#075078]">{formData.name}</strong>! Your consultation request has been prepared and formatted for WhatsApp.
                      </p>
                    </div>

                    {/* Summary of submitted data */}
                    <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#E2E8F0] text-left text-xs space-y-2.5 max-w-lg mx-auto shadow-xs">
                      <div className="font-bold text-[#075078] pb-2 border-b border-[#E2E8F0] flex items-center justify-between">
                        <span>Submitted Information</span>
                        <span className="text-[#059669] bg-green-50 border border-green-200 px-2 py-0.5 rounded-full text-[10px] font-bold">
                          Ready on WhatsApp
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#252B38] pt-1">
                        <div>
                          <span className="text-[#64748B]">Name:</span>{' '}
                          <strong className="text-[#075078]">{formData.name}</strong>
                        </div>
                        <div>
                          <span className="text-[#64748B]">Phone:</span>{' '}
                          <strong className="text-[#075078]">{formData.phone}</strong>
                        </div>
                        {formData.email && (
                          <div className="sm:col-span-2">
                            <span className="text-[#64748B]">Email:</span>{' '}
                            <span className="font-semibold">{formData.email}</span>
                          </div>
                        )}
                        <div className="sm:col-span-2">
                          <span className="text-[#64748B]">Service:</span>{' '}
                          <strong className="text-[#005675]">{formData.service}</strong>
                        </div>
                        <div className="sm:col-span-2">
                          <span className="text-[#64748B]">Branch:</span>{' '}
                          <span className="font-semibold">{formData.branch}</span>
                        </div>
                        <div>
                          <span className="text-[#64748B]">Preferred Date:</span>{' '}
                          <span className="font-semibold">
                            {formData.preferredDate || 'Earliest Available'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[#64748B]">Time Slot:</span>{' '}
                          <span className="font-semibold">{formData.preferredTime}</span>
                        </div>
                        {formData.message && (
                          <div className="sm:col-span-2 pt-1 border-t border-dashed border-[#E2E8F0]">
                            <span className="text-[#64748B]">Hair Concern / Notes:</span>{' '}
                            <span className="italic text-[#252B38]">&ldquo;{formData.message}&rdquo;</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <FaWhatsapp className="w-5 h-5 text-white" />
                        <span>Open WhatsApp Chat </span>
                      </a>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-[#005675] hover:underline font-semibold py-2 px-4 cursor-pointer"
                      >
                        Book Another Slot
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <div>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Suresh Kumar"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          WhatsApp / Phone Number *
                        </label>
                        <div>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 94470 12345"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email & Preferred Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Email Address (Optional)
                        </label>
                        <div>
                          <input
                            type="email"
                            placeholder="e.g. suresh@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Preferred Appointment Date
                        </label>
                        <div>
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection & Branch Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Hair Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all cursor-pointer"
                        >
                          <option value="Custom Hair Patching System">Custom Hair Patching System</option>
                          <option value="Dermatological Hair Bonding">Dermatological Hair Bonding</option>
                          <option value="Non-Surgical Hair Weaving">Non-Surgical Hair Weaving</option>
                          <option value="Full Scalp Replacement System">Full Scalp Replacement System</option>
                          <option value="Women's Crown Topper & Parting">Women&apos;s Crown Topper &amp; Parting</option>
                          <option value="Routine Hair Patch Servicing & Re-bonding">Routine Hair Patch Servicing &amp; Re-bonding</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Preferred Studio Branch
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-3.5 sm:px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-xs sm:text-sm outline-none bg-white transition-all cursor-pointer"
                        >
                          <option value="Thiruvananthapuram Flagship Studio (Palayam, Opp. Jubilee Hospital)">Thiruvananthapuram Flagship Studio (Palayam, Opp. Jubilee Hospital)</option>
                          <option value="Bengaluru Studio (HAL 2nd Stage, Indiranagar)">Bengaluru Studio (HAL 2nd Stage, Indiranagar)</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                        Preferred Time of Day
                      </label>
                      <div className="grid grid-cols-3 gap-2 sm:gap-3">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = formData.preferredTime === slot.value
                          return (
                            <button
                              key={slot.value}
                              type="button"
                              onClick={() => setFormData({ ...formData, preferredTime: slot.value })}
                              className={`py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center min-h-[52px] touch-manipulation cursor-pointer ${isSelected
                                ? 'bg-[#005675] text-white border-[#005675] shadow-xs ring-2 ring-[#005675]/30'
                                : 'bg-[#F3F7FB] text-[#252B38] border-[#E2E8F0] hover:border-[#29B6EB] hover:bg-white'
                                }`}
                            >
                              <span className="text-xs font-bold leading-tight">{slot.label}</span>
                              <span
                                className={`text-[10px] sm:text-[11px] mt-0.5 leading-tight font-medium ${isSelected ? 'text-white/85' : 'text-[#64748B]'
                                  }`}
                              >
                                {slot.hours}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Message / Hair Concern */}
                    <div>
                      <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                        Describe Your Hair Concern or Questions (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention any thinning areas, crown baldness, timeline (e.g. wedding coming up), or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all resize-none"
                      />
                    </div>

                    {/* High-Impact Submit Button */}
                    <HoverLift3D className="w-full">
                      <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1ea950] text-white font-bold py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2.5 sm:gap-3 text-center touch-manipulation cursor-pointer group"
                      >
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                          <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
                        </span>
                        <span className="text-sm sm:text-base font-bold leading-tight text-center">
                          Confirm Consultation 
                        </span>
                      </button>
                    </HoverLift3D>

                    {/* Security & Privacy Badges below button */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-[#64748B] pt-3 pb-1">
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <span className="text-[#005675] font-bold">✓</span>
                        <span>100% Free &amp; Zero-Obligation</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <span className="text-[#005675] font-bold">✓</span>
                        <span>Private Suites Guaranteed</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <span className="text-[#005675] font-bold">✓</span>
                        <span>Same-Day Confirmation</span>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </SectionReveal3D>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — INTERACTIVE GOOGLE MAPS (TRIVANDRUM & BANGALORE)
        ═══════════════════════════════════════════════════════════ */}
        <div className="mt-16 space-y-8">
          <SectionReveal3D yOffset={25}>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                Studio Navigation &amp; Maps
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-2 mb-2">
                Visit Our Hair Fixing Studios in Trivandrum &amp; Bangalore
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Private suites, dedicated client parking, and discrete consultation facilities at both locations.
              </p>
            </div>
          </SectionReveal3D>

          <StaggerGridLR staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trivandrum Studio Map */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={4} depth={6} className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full">
                        <span>Flagship Trivandrum Studio</span>
                      </span>
                      <a
                        href="https://maps.google.com/maps?q=Palayam+Thiruvananthapuram"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#005675] hover:text-[#29B6EB] flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <span className="text-[11px]">↗</span>
                      </a>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#075078]">
                      ozzone Hair - Palayam, Thiruvananthapuram
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam, Trivandrum, Kerala 695034
                    </p>
                    <div className="mt-2 text-xs font-semibold text-[#005675]">
                      <a href="tel:+917736077110" className="hover:underline">Phone: +91 77360 77110</a>
                    </div>
                  </div>

                  <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner">
                    <iframe
                      src="https://maps.google.com/maps?q=Palayam+Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ozzone Hair Trivandrum Studio Location Map"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>

            {/* Bangalore Studio Map */}
            <CardRevealLR className="h-full">
              <Card3DTilt maxTilt={4} depth={6} className="h-full">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="mb-4">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#EBF5FB] text-[#005675] font-bold text-xs px-3 py-1 rounded-full">
                        <span>Bangalore Studio</span>
                      </span>
                      <a
                        href={SITE_INFO.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-[#005675] hover:text-[#29B6EB] flex items-center gap-1"
                      >
                        <span>Directions</span>
                        <span className="text-[11px]">↗</span>
                      </a>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#075078]">
                      ozzone Farrell - Indiranagar, Bengaluru
                    </h3>
                    <p className="text-xs text-[#64748B] mt-1 leading-relaxed">
                      Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008
                    </p>
                    <div className="mt-2 text-xs font-semibold text-[#005675]">
                      <a href="tel:+919847062707" className="hover:underline">Phone: +91 98470 62707</a>
                    </div>
                  </div>

                  <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner">
                    <iframe
                      src={SITE_INFO.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ozzone Farrell Bangalore Location Map"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Card3DTilt>
            </CardRevealLR>
          </StaggerGridLR>
        </div>
      </div>
    </section>
  </div>
)
}
