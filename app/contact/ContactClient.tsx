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
    branch: 'Statue Junction (Opp. Secretariat, MG Road)',
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
      '✨ *NEW APPOINTMENT CONSULTATION BOOKING*',
      '*ozzone Hair Fixing Studio • Trivandrum*',
      '──────────────────────────────',
      `👤 *Client Name:* ${formData.name.trim()}`,
      `📞 *Phone / WhatsApp:* ${formData.phone.trim()}`,
      formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}` : null,
      '',
      `💇 *Service Requested:* ${formData.service}`,
      `📍 *Preferred Branch:* ${formData.branch}`,
      `📅 *Preferred Date:* ${formattedDate}`,
      `⏰ *Preferred Time:* ${formData.preferredTime}`,
      '',
      formData.message.trim()
        ? `💬 *Client Notes / Hair Concern:*\n"${formData.message.trim()}"`
        : '💬 *Client Notes:* No specific notes provided.',
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
                  Contact ozzone Hair Studio &amp; Book Free Consultation in{' '}
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
      <section className="bg-[#F3F7FB] pt-12 pb-24 sm:py-24 px-3.5 sm:px-8">
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
            <div id="booking-form" className="lg:col-span-7 scroll-mt-28">
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
                    <div className="w-16 h-16 bg-[#005675] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                      <CheckCircle className="w-8 h-8 text-[#29B6EB]" />
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
                        <span>Open WhatsApp Chat Directly</span>
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
                          <option value="Statue Junction (Opp. Secretariat, MG Road)">Statue Junction (Opp. Secretariat, MG Road)</option>
                          <option value="Pattom Studio (Near Medical College & Kesavadasapuram)">Pattom Studio (Near Medical College &amp; Kesavadasapuram)</option>
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
                              className={`py-2 sm:py-2.5 px-1.5 sm:px-2 rounded-xl border text-center transition-all flex flex-col items-center justify-center min-h-[52px] touch-manipulation cursor-pointer ${
                                isSelected
                                  ? 'bg-[#005675] text-white border-[#005675] shadow-xs ring-2 ring-[#005675]/30'
                                  : 'bg-[#F3F7FB] text-[#252B38] border-[#E2E8F0] hover:border-[#29B6EB] hover:bg-white'
                              }`}
                            >
                              <span className="text-xs font-bold leading-tight">{slot.label}</span>
                              <span
                                className={`text-[10px] sm:text-[11px] mt-0.5 leading-tight font-medium ${
                                  isSelected ? 'text-white/85' : 'text-[#64748B]'
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
                          Confirm Consultation &amp; Chat on WhatsApp
                        </span>
                      </button>
                    </HoverLift3D>

                    {/* Security & Privacy Badges below button */}
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] sm:text-xs text-[#64748B] pt-3 pb-1">
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#005675] shrink-0" />
                        <span>100% Free &amp; Zero-Obligation</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#005675] shrink-0" />
                        <span>Private Suites Guaranteed</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#005675] shrink-0" />
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
