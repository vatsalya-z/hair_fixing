'use client'

import React, { useState } from 'react'

export interface FAQItem {
  question: string
  answer: string
}

interface BlogFAQAccordionProps {
  faqs: FAQItem[]
  blogTitle?: string
}

export default function BlogFAQAccordion({ faqs }: BlogFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const itemNumber = (index + 1).toString().padStart(2, '0')

        return (
          <div
            key={index}
            className={`w-full border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#29B6EB] shadow-md ring-1 ring-[#29B6EB]/20'
                : 'bg-white border-[#E2E8F0] hover:border-[#29B6EB]/50 hover:shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full py-5 px-5 sm:py-6 sm:px-8 flex items-start justify-between gap-4 text-left cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6EB]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <span
                  className={`flex-shrink-0 text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded-lg transition-colors ${
                    isOpen
                      ? 'bg-[#075078] text-white'
                      : 'bg-[#F3F7FB] text-[#005675] border border-[#E2E8F0]'
                  }`}
                >
                  {itemNumber}
                </span>
                <span className="text-base sm:text-lg md:text-xl font-bold text-[#075078] leading-snug">
                  {faq.question}
                </span>
              </div>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ml-2 font-mono font-bold text-lg select-none ${
                  isOpen
                    ? 'bg-[#29B6EB] text-white rotate-180'
                    : 'bg-[#F3F7FB] text-[#64748B] hover:bg-[#E2E8F0]'
                }`}
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <div className="px-5 pb-6 sm:px-8 sm:pb-7 pt-2 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#F1F5F9]">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
