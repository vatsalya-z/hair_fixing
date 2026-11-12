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
  Sparkles
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { SITE_INFO } from '@/data/siteData'

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Hair Patching',
    branch: 'Statue Junction, MG Road',
    preferredDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const text = `*New Hair Consultation Request - Trivandrum*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A*Service:* ${encodeURIComponent(formData.service)}%0A*Branch:* ${encodeURIComponent(formData.branch)}%0A*Preferred Date:* ${encodeURIComponent(formData.preferredDate || 'Earliest available')}%0A*Notes:* ${encodeURIComponent(formData.message || 'None')}`
    window.open(`https://wa.me/${SITE_INFO.whatsapp}?text=${text}`, '_blank')
  }

  return (
    <div className="w-full bg-[#F3F7FB]">
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="Contact Us"
        title="Visit Our Hair Fixing Studios in"
        highlightText="Thiruvananthapuram"
        subtitle="Book a private, 100% confidential consultation with our certified hair replacement technicians at Statue Junction (MG Road) or Pattom Center."
      />

      {/* Main Contact Section: Light blue background (#F3F7FB) */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Clinic Contact Details & Map Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3 py-1 rounded-full border border-[#E2E8F0]">
                    Direct Contact
                  </span>
                  <h2 className="text-2xl font-bold text-[#075078] mt-3">
                    Get in Touch With Us
                  </h2>
                  <p className="text-xs text-[#64748B] mt-1">
                    Call, message on WhatsApp, or walk into either of our two convenient Trivandrum clinics.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#075078] uppercase">Direct Phone Support</h4>
                      <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-[#252B38] hover:text-[#005675]">
                        {SITE_INFO.phone}
                      </a>
                      <span className="block text-xs text-[#64748B]">Alt: {SITE_INFO.altPhone}</span>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <FaWhatsapp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#075078] uppercase">WhatsApp Helpdesk</h4>
                      <a 
                        href={`https://wa.me/${SITE_INFO.whatsapp}`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-sm font-semibold text-[#005675] hover:underline"
                      >
                        Instant Chat: +91 94470 28419
                      </a>
                      <span className="block text-xs text-[#64748B]">Photos &amp; hairline reviews sent confidentially</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#075078] uppercase">Email Inquiries</h4>
                      <a href={`mailto:${SITE_INFO.email}`} className="text-sm font-medium text-[#252B38] hover:text-[#005675]">
                        {SITE_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#005675] text-[#29B6EB] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#075078] uppercase">Studio Timings</h4>
                      <p className="text-xs text-[#252B38] font-medium">{SITE_INFO.timing}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branch Addresses Card */}
              <div className="bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-sm space-y-5">
                <h3 className="text-lg font-bold text-[#075078] border-b border-[#E2E8F0] pb-2">
                  Studio Locations in Trivandrum
                </h3>

                <div className="space-y-4 text-xs text-[#252B38]">
                  <div className="p-3 bg-[#F3F7FB] rounded-xl border border-[#E2E8F0]">
                    <strong className="text-sm text-[#075078] block mb-1">
                      1. Statue Junction Studio (Main Center)
                    </strong>
                    <p className="text-[#64748B]">{SITE_INFO.address}</p>
                    <p className="text-[#005675] font-semibold mt-1">Landmark: Opp. Government Secretariat, MG Road</p>
                  </div>

                  <div className="p-3 bg-[#F3F7FB] rounded-xl border border-[#E2E8F0]">
                    <strong className="text-sm text-[#075078] block mb-1">
                      2. Pattom Studio (Medical College Side)
                    </strong>
                    <p className="text-[#64748B]">{SITE_INFO.branch2}</p>
                    <p className="text-[#005675] font-semibold mt-1">Landmark: Near Kesavadasapuram &amp; TMC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: White Form Card with Dark Blue Labels & Teal Submit Button */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xl">
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
                    Online Appointment
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#075078] mt-3">
                    Schedule Your Free Scalp Consultation
                  </h2>
                  <p className="text-sm text-[#64748B] mt-1">
                    Takes less than 60 seconds. Our clinic will confirm your slot instantly on WhatsApp.
                  </p>
                </div>

                {submitted ? (
                  <div className="bg-[#F3F7FB] border border-[#29B6EB] rounded-2xl p-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-[#005675] rounded-full flex items-center justify-center mx-auto text-white shadow-md">
                      <CheckCircle className="w-7 h-7 text-[#29B6EB]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#075078]">Consultation Confirmed!</h3>
                    <p className="text-sm text-[#64748B] max-w-md mx-auto">
                      Thank you, <strong>{formData.name}</strong>. Your consultation details have been forwarded to our senior stylist at the <strong>{formData.branch}</strong> studio.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#005675] underline font-bold mt-2"
                    >
                      Book another appointment
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        {/* Dark Blue Labels */}
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Suresh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          WhatsApp / Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 94470 12345"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] focus:ring-2 focus:ring-[#29B6EB]/20 text-sm outline-none bg-white"
                        />
                      </div>
                    </div>

                    {/* Email & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Email Address (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. suresh@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] text-sm outline-none bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Preferred Appointment Date
                        </label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] text-sm outline-none bg-white"
                        />
                      </div>
                    </div>

                    {/* Service & Branch */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                          Service of Interest
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] text-sm outline-none bg-white"
                        >
                          <option value="Hair Patching">Custom Hair Patching</option>
                          <option value="Hair Bonding">Dermatological Hair Bonding</option>
                          <option value="Hair Weaving">Non-Surgical Hair Weaving</option>
                          <option value="Full Scalp Replacement">Full Scalp Replacement</option>
                          <option value="Womens Crown Topper">Women&apos;s Crown Topper</option>
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
                          className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] text-sm outline-none bg-white"
                        >
                          <option value="Statue Junction, MG Road">Statue Junction (MG Road, Secretariat)</option>
                          <option value="Pattom, Near Medical College">Pattom Center (Near Medical College)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Hair Concern */}
                    <div>
                      <label className="block text-xs font-bold text-[#075078] uppercase tracking-wider mb-2">
                        Describe Your Hair Loss or Preference (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention any existing thinning areas, crown baldness, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#29B6EB] text-sm outline-none bg-white"
                      />
                    </div>

                    {/* WhatsApp Green Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.01]"
                    >
                      <FaWhatsapp className="w-5 h-5 text-white" />
                      <span>Submit &amp; Chat on WhatsApp</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-[#64748B] pt-2">
                      <ShieldCheck className="w-4 h-4 text-[#005675]" />
                      <span>100% Confidential Private Suite Consultation Guarantee</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-sm">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-[#075078]">
                  Directions to Our Central Statue Junction Studio
                </h3>
                <p className="text-xs text-[#64748B]">
                  Situated at Statue, MG Road, Palayam, Thiruvananthapuram, Kerala 695001
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Statue+Palayam+Thiruvananthapuram"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#005675] hover:text-[#29B6EB] flex items-center gap-1"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-[#E2E8F0]">
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

