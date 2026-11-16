'use client'

import React, { useState } from 'react'
import { SITE_INFO } from '@/data/siteData'

const STUDIOS = [
  {
    id: 'trivandrum',
    city: 'Thiruvananthapuram',
    tag: 'Kerala Flagship Studio',
    title: 'ozzone Hair Studio – Palayam, Trivandrum',
    address:
      'TC 27/3103, PRA 48, Ground Floor, Opp. Jubilee Memorial Hospital (2nd Gate Mizpah), Sunny Meads Lane, Palayam, Thiruvananthapuram, Kerala 695034',
    landmark: 'Opp. Jubilee Memorial Hospital (2nd Gate Mizpah)',
    phone: SITE_INFO.phone,
    altPhone: SITE_INFO.altPhone,
    timing: SITE_INFO.timing,
    mapEmbedUrl:
      'https://maps.google.com/maps?q=Palayam+Thiruvananthapuram&t=&z=15&ie=UTF8&iwloc=&output=embed',
    directMapUrl:
      'https://maps.google.com/maps?q=Palayam+Thiruvananthapuram',
  },
  {
    id: 'bangalore',
    city: 'Bengaluru',
    tag: 'Karnataka Studio',
    title: 'ozzone Hair Studio – Indiranagar, Bengaluru',
    address:
      'Double Road, #3698, 9th Cross Road, 13th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560008',
    landmark: 'Near Double Road, HAL 2nd Stage, Indiranagar',
    phone: SITE_INFO.altPhone,
    altPhone: SITE_INFO.phone,
    timing: SITE_INFO.timing,
    mapEmbedUrl: SITE_INFO.mapEmbedUrl,
    directMapUrl: SITE_INFO.mapUrl,
  },
]

export default function ServiceMapsSection() {
  const [activeStudioId, setActiveStudioId] = useState<'trivandrum' | 'bangalore'>('trivandrum')
  const activeStudio = STUDIOS.find((s) => s.id === activeStudioId) || STUDIOS[0]

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-4 py-1.5 rounded-full border border-[#E2E8F0] mb-3 shadow-2xs">
            Verified Studio Locations
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#075078] tracking-tight">
            Visit Our Private Consultation Studios
          </h2>
          <div className="w-20 h-1 bg-[#29B6EB] rounded-full mx-auto mt-4 mb-4" />
          <p className="text-sm sm:text-base md:text-lg text-[#64748B] leading-relaxed">
            Experience complete discretion in 100% private consultation suites at our fully equipped studios in Thiruvananthapuram and Bangalore.
          </p>

          {/* Location Switcher Tabs */}
          <div className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
            {STUDIOS.map((studio) => {
              const isActive = activeStudioId === studio.id
              return (
                <button
                  key={studio.id}
                  type="button"
                  onClick={() => setActiveStudioId(studio.id as 'trivandrum' | 'bangalore')}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-center ${
                    isActive
                      ? 'bg-[#075078] text-white shadow-md'
                      : 'bg-white text-[#475569] border border-[#E2E8F0] hover:border-[#29B6EB] hover:text-[#075078]'
                  }`}
                >
                  <span>{studio.city} Studio</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Studio Info + Responsive Map Container */}
        <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Studio Details (5 columns) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2E8F0] space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F3F7FB] text-[#005675] border border-[#E2E8F0] mb-3">
                  {activeStudio.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#075078] mb-4">
                  {activeStudio.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#475569]">
                  <div>
                    <strong className="text-[#075078] block mb-0.5">Address:</strong>
                    <p className="leading-relaxed">{activeStudio.address}</p>
                  </div>

                  <div>
                    <strong className="text-[#075078] block mb-0.5">Timings:</strong>
                    <p className="leading-relaxed">{activeStudio.timing}</p>
                  </div>

                  <div>
                    <strong className="text-[#075078] block mb-0.5">Helpline:</strong>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={`tel:${activeStudio.phone}`}
                        className="hover:text-[#29B6EB] font-semibold text-[#075078] transition-colors"
                      >
                        {activeStudio.phone}
                      </a>
                      <span>/</span>
                      <a
                        href={`tel:${activeStudio.altPhone}`}
                        className="hover:text-[#29B6EB] font-semibold text-[#075078] transition-colors"
                      >
                        {activeStudio.altPhone}
                      </a>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#64748B]">
                    <span>Private consultation suites with dedicated specialists</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#E2E8F0] flex flex-wrap gap-3">
                <a
                  href={activeStudio.directMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm flex-1 text-center justify-center py-2.5"
                >
                  <span>Open in Google Maps →</span>
                </a>
              </div>
            </div>

            {/* Right: Responsive Interactive Google Map (7 columns) */}
            <div className="lg:col-span-7 relative w-full min-h-[350px] sm:min-h-[420px] lg:min-h-full bg-slate-100">
              <iframe
                src={activeStudio.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${activeStudio.title} Google Maps Embed`}
                className="w-full h-full min-h-[350px] sm:min-h-[420px] absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
