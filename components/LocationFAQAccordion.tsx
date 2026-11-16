'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export interface FAQItem {
  question: string
  answer: string
}

interface LocationFAQAccordionProps {
  faqs: FAQItem[]
}

export default function LocationFAQAccordion({ faqs }: LocationFAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <div className="w-full space-y-3.5 sm:space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const itemNumber = (index + 1).toString().padStart(2, '0')

        return (
          <div
            key={index}
            className={`w-full border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#29B6EB] shadow-md ring-1 ring-[#29B6EB]/20'
                : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#29B6EB]/60 hover:bg-white hover:shadow-xs'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleFAQ(index)}
              className="w-full py-4 px-4 sm:py-5 sm:px-6 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6EB]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <div className="flex items-center gap-3 sm:gap-3.5 flex-1 min-w-0">
                <span
                  className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-bold text-xs sm:text-xs flex items-center justify-center transition-colors ${
                    isOpen
                      ? 'bg-[#005675] text-[#29B6EB] shadow-xs'
                      : 'bg-[#F3F7FB] text-[#005675] border border-[#E2E8F0]'
                  }`}
                >
                  {itemNumber}
                </span>
                <span className="text-sm sm:text-base lg:text-lg font-bold text-[#075078] leading-snug">
                  {faq.question}
                </span>
              </div>

              <span
                className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-transform duration-300 ml-2 select-none ${
                  isOpen
                    ? 'bg-[#29B6EB] text-white rotate-180 shadow-xs'
                    : 'bg-[#F3F7FB] text-[#64748B]'
                }`}
                aria-hidden="true"
              >
                <FaChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
              <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm lg:text-base text-[#475569] leading-relaxed border-t border-[#F1F5F9] pl-14 sm:pl-17">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
