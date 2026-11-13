import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Sparkles, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import HeroBanner from '@/components/HeroBanner'
import { PRICING_PLANS, SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Fixing Cost in Thiruvananthapuram | Transparent Pricing Packages',
  description: 'Understand hair fixing and hair replacement prices in Thiruvananthapuram. Transparent packages from ₹9,999 to ₹22,999 with haircut, styling & warranty included.',
  alternates: {
    canonical: 'https://ozzonehair.com/pricing/',
  },
  openGraph: {
    title: 'Hair Fixing Cost in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Transparent hair fixing pricing packages from ₹9,999 to ₹22,999 in Trivandrum. 100% natural human hair systems with zero hidden charges.',
    url: 'https://ozzonehair.com/pricing/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Fixing Cost in Thiruvananthapuram' }],
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Fixing Cost in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Transparent hair fixing packages in Trivandrum from ₹9,999 with haircut, styling & maintenance warranty.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Hair Fixing Packages & Pricing in Thiruvananthapuram',
  itemListElement: PRICING_PLANS.map((plan, i) => ({
    '@type': 'Offer',
    position: i + 1,
    name: plan.name,
    description: plan.subtitle,
    price: plan.price.replace(/[^\d]/g, ''),
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    url: 'https://ozzonehair.com/pricing/',
    seller: {
      '@type': 'HairSalon',
      name: 'ozzone Hair - Hair Fixing & Replacement Studio',
      url: 'https://ozzonehair.com/',
      telephone: SITE_INFO.phone,
    },
  })),
}

const pricingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does hair fixing cost in Thiruvananthapuram?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hair fixing at ozzone Hair in Thiruvananthapuram starts at ₹9,999 for the Essential Breathable system, ₹15,999 for the Royal HD Lace system, and ₹22,999 for the Crown Elite Poly-Skin system. Initial consultation and scalp mapping are completely free.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the hair fixing package price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every package includes 100% natural virgin human hair, custom scalp template design, dermatological bonding, professional salon haircut, custom styling, anti-bacterial scalp cleansing, and an initial servicing warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does monthly hair patch maintenance cost in Trivandrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Routine monthly maintenance servicing at our Statue Junction and Pattom clinics starts at ₹1,200 for standard bonding reset, and ₹1,000 for micro-track weaving adjustments.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
    { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://ozzonehair.com/pricing/' },
  ],
}

export default function PricingPage() {
  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
      />
      {/* Hero Banner */}
      <HeroBanner
        breadcrumbCurrent="Pricing & Packages"
        title="Transparent Hair Fixing Pricing in"
        highlightText="Thiruvananthapuram"
        subtitle="No hidden salon costs or unexpected fees. Every package covers scalp mapping, virgin human hair system, customized haircut, styling, and initial servicing warranty."
      />

      {/* Main Pricing Cards Grid (Light Blue Background #F3F7FB, White Cards) */}
      <section className="bg-[#F3F7FB] py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#005675] bg-white px-3.5 py-1 rounded-full border border-[#E2E8F0]">
              Guaranteed Value
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#075078] mt-3 mb-4">
              Choose the Perfect Hair Restoration Package
            </h2>
            <div className="w-16 h-1 bg-[#29B6EB] mx-auto rounded-full mb-4" />
            <p className="text-base text-[#64748B]">
              Every package is backed by our natural hairline guarantee and clinical hygiene protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-8 border transition-all duration-300 flex flex-col justify-between relative shadow-sm hover:shadow-xl ${
                  plan.popular
                    ? 'border-2 border-[#29B6EB] lg:-translate-y-2'
                    : 'border-[#E2E8F0]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#005675] text-[#29B6EB] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-[#29B6EB] shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular In Trivandrum</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-[#075078]">{plan.name}</h3>
                  <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">{plan.subtitle}</p>

                  <div className="mt-6 pb-6 border-b border-[#E2E8F0]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-[#075078]">{plan.price}</span>
                      <span className="text-xs text-[#64748B]">all-inclusive</span>
                    </div>
                    <p className="text-[11px] text-[#005675] font-semibold mt-1">
                      Best for: {plan.bestFor}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <h4 className="text-xs font-bold text-[#075078] uppercase tracking-wider">
                      Included In This Package:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-[#252B38]">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#29B6EB] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2E8F0] space-y-3">
                  <Link
                    href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full py-3.5 px-4 rounded-lg font-bold text-sm text-center block transition-all duration-200 shadow-md ${
                      plan.popular
                        ? 'bg-[#29B6EB] hover:bg-[#174BA5] text-white'
                        : 'bg-[#005675] hover:bg-[#174BA5] text-white'
                    }`}
                  >
                    {plan.ctaText}
                  </Link>

                  <a
                    href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%20Fixing%20Trivandrum,%20I%20am%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20package.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-xs font-semibold text-[#075078] hover:text-[#174BA5] flex items-center justify-center gap-1.5 py-1.5"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire about this on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routine Servicing Price Breakdown (White Background) */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-8 border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#075078]">
              Monthly Maintenance &amp; Servicing Charges
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Affordable routine upkeep carried out by trained stylists at Statue Junction &amp; Pattom.
            </p>
          </div>

          <div className="bg-[#F3F7FB] rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            <div className="divide-y divide-[#E2E8F0]">
              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#075078]">Standard Hair Patch Servicing</h4>
                  <p className="text-xs text-[#64748B]">Organic bond release + scalp scrub + hair deep condition + fresh adhesive</p>
                </div>
                <span className="text-base font-extrabold text-[#005675] whitespace-nowrap ml-4">₹1,200</span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#075078]">Micro-Track Weaving Re-tightening</h4>
                  <p className="text-xs text-[#64748B]">Interlocking readjustment + root scalp cleaning + perimeter styling</p>
                </div>
                <span className="text-base font-extrabold text-[#005675] whitespace-nowrap ml-4">₹1,000</span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#075078]">HD Swiss Lace Edge Repair &amp; Reset</h4>
                  <p className="text-xs text-[#64748B]">Delicate lace fray trimming + invisible polyurethane touch-up</p>
                </div>
                <span className="text-base font-extrabold text-[#005675] whitespace-nowrap ml-4">₹1,500</span>
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#075078]">First-Time Consultation &amp; Scalp Mapping</h4>
                  <p className="text-xs text-[#64748B]">Microscopic scalp inspection, density measurement, and styling trial</p>
                </div>
                <span className="text-base font-extrabold text-[#29B6EB] whitespace-nowrap ml-4">FREE (₹0)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

