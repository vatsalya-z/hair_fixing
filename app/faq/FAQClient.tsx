'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp, HelpCircle, Phone, ArrowRight, Sparkles } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { FAQS_DATA, SITE_INFO } from '@/data/siteData'

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const categories = ['All', 'General', 'Appearance', 'Maintenance', 'Lifestyle', 'Safety', 'Cost', 'Consultation']

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS_DATA
    : FAQS_DATA.filter((item) => item.category === selectedCategory)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="FAQ"
        title="Frequently Asked Questions About Hair Fixing in"
        highlightText="Thiruvananthapuram"
        subtitle="Get clear, honest answers on hair patch fixing costs, daily maintenance, shower/swimming safety, and why our virgin human hair systems look completely undetectable."
      />

      {/* Main FAQ Section (White and Light Blue Backgrounds, Dark Blue Accordion Headings, Cyan Active Indicators) */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-[#F3F7FB] px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Knowledge Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-4">
              Common Questions &amp; Detailed Answers
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setOpenIndex(0)
                }}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#005675] text-white shadow-sm'
                    : 'bg-[#F3F7FB] text-[#075078] hover:bg-[#E2E8F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#29B6EB] bg-[#F3F7FB] shadow-sm'
                      : 'border-[#E2E8F0] bg-white hover:border-[#29B6EB]/60'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#075078] flex items-center gap-3">
                      {/* Cyan active indicator */}
                      <span
                        className={`w-3 h-3 rounded-full shrink-0 transition-colors duration-200 ${
                          isOpen ? 'bg-[#29B6EB] ring-4 ring-[#29B6EB]/20' : 'bg-[#CBD5E1]'
                        }`}
                      />
                      <span>{faq.question}</span>
                    </span>

                    <span className="text-[#075078] shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#29B6EB]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#64748B]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#252B38] leading-relaxed border-t border-[#E2E8F0]/70 pl-12">
                      <p>{faq.answer}</p>
                      <div className="mt-3 pt-3 border-t border-[#E2E8F0]/50 flex items-center justify-between text-xs text-[#64748B]">
                        <span>Topic: <strong>{faq.category}</strong></span>
                        <a
                          href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi,%20I%20have%20a%20question%20about:%20${encodeURIComponent(faq.question)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#25D366] hover:text-[#20bd5a] font-bold flex items-center gap-1.5"
                        >
                          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                          <span>Ask more on WhatsApp →</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Still have questions strip */}
      <section className="bg-[#F3F7FB] py-16 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-[#E2E8F0] shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#005675] text-[#29B6EB] flex items-center justify-center mx-auto">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#075078]">
            Have a Specific Question About Your Hair Loss?
          </h3>
          <p className="text-sm text-[#64748B] max-w-xl mx-auto">
            Every scalp condition is distinct. Speak directly with our clinical trichology team at Statue Junction, Thiruvananthapuram.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`}
              className="bg-[#005675] hover:bg-[#174BA5] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-all"
            >
              Call Us: {SITE_INFO.phone}
            </a>
            <Link
              href="/contact"
              className="bg-transparent border border-[#005675] text-[#005675] hover:bg-[#005675] hover:text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
            >
              Schedule Studio Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

