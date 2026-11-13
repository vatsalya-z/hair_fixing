'use client'

import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Calendar,
  User,
  Building2,
  Lock,
  Coffee,
  Check,
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { FadeInUp, HoverLift3D } from '@/components/MotionWrappers'
import ContactHeroImageWithTilt from '@/components/ContactHeroImageWithTilt'
import { SITE_INFO } from '@/data/siteData'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hair Patching',
    branch: 'Statue Junction, MG Road',
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const text = `*New Hair Consultation Request - Trivandrum*%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(
      formData.email || 'N/A'
    )}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Branch:* ${encodeURIComponent(
      formData.branch
    )}%0A*Preferred Date:* ${encodeURIComponent(
      formData.preferredDate || 'Earliest Available'
    )}%0A*Time Slot:* ${encodeURIComponent(
      formData.preferredTime
    )}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`

    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <div className="w-full bg-[#F3F7FB]">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO SECTION (3D TILT WITH CUSTOM CLINIC IMAGE)
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-gradient-bg relative overflow-hidden min-h-[75vh] flex items-center">
        {/* Ambient lighting glows */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#29B6EB]/12 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#174BA5]/30 rounded-full blur-3xl" />
          <div className="hero-subtle-glow absolute inset-0 opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <FadeInUp delay={0.05} yOffset={20}>
                <span className="inline-flex items-center gap-1.5 bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-[#29B6EB]/30 backdrop-blur-xs">
                  <MapPin className="w-3.5 h-3.5" />
                  Statue Junction &amp; Pattom • Thiruvananthapuram
                </span>
              </FadeInUp>

              <FadeInUp delay={0.15} yOffset={25}>
                <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-5 text-center lg:text-left">
                  Book Your Confidential Hair Analysis in{' '}
                  <span className="text-[#29B6EB]">Thiruvananthapuram</span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.25} yOffset={25}>
                <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                  Visit our 100% private consultation suites for a personalized scalp inspection, custom human hair trial, and transparent price quotation with zero pressure.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.35} yOffset={20}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                  <HoverLift3D>
                    <a href="#booking-form" className="btn-primary">
                      Book Free Consultation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </HoverLift3D>

                  <HoverLift3D>
                    <a
                      href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20book%20a%20free%20consultation.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>WhatsApp Specialist</span>
                    </a>
                  </HoverLift3D>
                </div>
              </FadeInUp>

              {/* Trust highlights */}
              <FadeInUp delay={0.45} yOffset={15}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-white/80 text-xs sm:text-sm">
                  {[
                    '100% Private Consulting Suites',
                    'Zero-Obligation Scalp Analysis',
                    'Statue & Pattom Studios',
                    'Dedicated Client Parking',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB]" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Hero Image with 3D Tilt Card */}
            <div className="flex justify-center lg:justify-end w-full">
              <ContactHeroImageWithTilt />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — WHAT TO EXPECT IN YOUR CONSULTATION
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white py-14 px-4 sm:px-8 border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Consultation Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-2 mb-3">
              What to Expect During Your Free 30-Minute Visit
            </h2>
            <div className="w-14 h-1 bg-[#29B6EB] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div
                key={item.step}
                className="bg-[#F3F7FB] rounded-xl p-6 border border-[#E2E8F0] shadow-xs relative hover:border-[#29B6EB] transition-colors"
              >
                <span className="text-3xl font-black text-[#29B6EB]/30 block mb-2">{item.step}</span>
                <h3 className="text-base font-bold text-[#075078] mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — MAIN BOOKING & CONTACT SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact & Studio Location Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm space-y-5">
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
                      <Phone className="w-5 h-5" />
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
                        href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Trivandrum%2C%20I%20would%20like%20to%20consult.`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-[#1f2937] hover:text-[#25D366] block mt-0.5"
                      >
                        Chat: +91 94470 28419
                      </a>
                      <span className="text-[11px] text-[#059669]">
                        Instant response • Photos kept 100% confidential
                      </span>
                    </div>
                  </div>

                  {/* Email Support */}
                  <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#F3F7FB] transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
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
                      <Clock className="w-5 h-5" />
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

              {/* Studio Locations Cards */}
              <div className="space-y-4">
                {/* Branch 1 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:border-[#29B6EB] transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <h3 className="text-base font-bold text-[#075078]">
                        Statue Junction Studio (Main Center)
                      </h3>
                    </div>
                    <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                      Central Trivandrum
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pl-9 mb-3">
                    {SITE_INFO.address}
                  </p>
                  <div className="pl-9 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E2E8F0]">
                    <span className="text-[11px] text-[#075078] font-semibold">
                      Landmark: Opp. Secretariat, MG Road
                    </span>
                    <a
                      href="https://maps.google.com/?q=Statue+Palayam+Thiruvananthapuram"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#29B6EB] hover:text-[#005675] flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Branch 2 */}
                <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm hover:border-[#29B6EB] transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#005675] text-white flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <h3 className="text-base font-bold text-[#075078]">
                        Pattom Studio (Medical College Side)
                      </h3>
                    </div>
                    <span className="bg-[#E0F2FE] text-[#0369A1] text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">
                      North Trivandrum
                    </span>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed pl-9 mb-3">
                    {SITE_INFO.branch2}
                  </p>
                  <div className="pl-9 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E2E8F0]">
                    <span className="text-[11px] text-[#075078] font-semibold">
                      Landmark: Kesavadasapuram Junction
                    </span>
                    <a
                      href="https://maps.google.com/?q=Pattom+Thiruvananthapuram"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-[#29B6EB] hover:text-[#005675] flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Privacy Guarantee Card */}
              <div className="bg-gradient-to-br from-[#005675] to-[#075078] text-white p-6 rounded-2xl shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#29B6EB]" />
                  <h4 className="text-sm font-bold">Privacy &amp; Discretion Pledge</h4>
                </div>
                <p className="text-xs text-white/85 leading-relaxed">
                  We understand hair loss can feel deeply personal. Every consultation and styling session is conducted behind closed doors in sound-insulated private cabins. Female specialists are available for female clients upon request.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-white/90 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#29B6EB]" />
                    <span>Private Cabins</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#29B6EB]" />
                    <span>Female Stylists Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#29B6EB]" />
                    <span>Sterilized Equipment</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#29B6EB]" />
                    <span>Client Confidentiality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: High-Conversion Appointment Form */}
            <div id="booking-form" className="lg:col-span-7 scroll-mt-24">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xl relative overflow-hidden">
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
                  <div className="bg-[#F3F7FB] border-2 border-[#29B6EB] rounded-2xl p-8 sm:p-10 text-center space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 bg-[#005675] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                      <CheckCircle className="w-8 h-8 text-[#29B6EB]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#075078]">Consultation Details Forwarded!</h3>
                    <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#075078]">{formData.name}</strong>. Your consultation request for <strong className="text-[#075078]">{formData.service}</strong> at the <strong className="text-[#075078]">{formData.branch}</strong> studio has been sent. Our team is ready on WhatsApp.
                    </p>
                    <div className="pt-3">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-primary text-xs"
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
                        <div className="relative">
                          <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Suresh Kumar"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          WhatsApp / Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +91 94470 12345"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
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
                        <div className="relative">
                          <Mail className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            placeholder="e.g. suresh@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Preferred Appointment Date
                        </label>
                        <div className="relative">
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
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                        >
                          <option value="Hair Patching">Custom Hair Patching System</option>
                          <option value="Hair Bonding">Dermatological Hair Bonding</option>
                          <option value="Hair Weaving">Non-Surgical Hair Weaving</option>
                          <option value="Full Scalp Replacement">Full Scalp Replacement System</option>
                          <option value="Womens Crown Topper">Women&apos;s Crown Topper &amp; Parting</option>
                          <option value="Maintenance & Re-bonding">Routine Hair Patch Servicing</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Preferred Studio Branch
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white transition-all"
                        >
                          <option value="Statue Junction, MG Road">Statue Junction (Opp. Secretariat, MG Road)</option>
                          <option value="Pattom, Near Medical College">Pattom Center (Near Medical College &amp; Kesavadasapuram)</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Time Slot */}
                    <div>
                      <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                        Preferred Time of Day
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          'Morning (9 AM - 12 PM)',
                          'Afternoon (12 PM - 4 PM)',
                          'Evening (4 PM - 7:30 PM)',
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredTime: slot })}
                            className={`py-2 px-2 text-xs font-semibold rounded-lg border text-center transition-all ${
                              formData.preferredTime === slot
                                ? 'bg-[#005675] text-white border-[#005675] shadow-xs'
                                : 'bg-[#F3F7FB] text-[#252B38] border-[#E2E8F0] hover:border-[#29B6EB]'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
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
                    <HoverLift3D>
                      <button
                        type="submit"
                        className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5"
                      >
                        <FaWhatsapp className="w-5 h-5 text-white" />
                        <span>Confirm Consultation &amp; Chat on WhatsApp</span>
                      </button>
                    </HoverLift3D>

                    {/* Security & Privacy Badges below button */}
                    <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748B] pt-2">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#005675]" />
                        <span>100% Free &amp; Zero-Obligation</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-[#005675]" />
                        <span>Private Suites Guaranteed</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-[#005675]" />
                        <span>Same-Day Confirmation</span>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════
              SECTION 4 — INTERACTIVE GOOGLE MAP
          ═══════════════════════════════════════════════════════════ */}
          <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3 py-1 rounded-full border border-[#E2E8F0]">
                  Studio Navigation Map
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#075078] mt-2">
                  Visit Our Central Statue Junction Studio
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                  Opposite Secretariat, MG Road, Statue, Thiruvananthapuram, Kerala 695001 • Dedicated parking available for clients.
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Statue+Palayam+Thiruvananthapuram"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-xs shrink-0"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner">
              <iframe
                src={SITE_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ozzone Hair Fixing Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
