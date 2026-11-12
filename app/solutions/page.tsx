import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Hair Solutions in Thiruvananthapuram | Hair Replacement, Patch & Systems',
  description: 'Complete non-surgical hair solutions at ozzone Hair Thiruvananthapuram: Hair Replacement, Hair Fixing, Hair Patch, Hair Bonding, Hair Systems & Extensions.',
  alternates: {
    canonical: 'https://ozzonehair.com/solutions/',
  },
  openGraph: {
    title: 'Hair Solutions in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Complete non-surgical hair loss solutions for men & women in Trivandrum. 100% natural human hair, instant transformation.',
    url: 'https://ozzonehair.com/solutions/',
    siteName: 'ozzone Hair Thiruvananthapuram',
    images: [{ url: '/images/hero-indian-hair.jpg', width: 1200, height: 630, alt: 'Hair Solutions in Thiruvananthapuram' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Solutions in Thiruvananthapuram | ozzone Hair Studio',
    description: 'Complete non-surgical hair loss solutions for men & women in Trivandrum.',
    images: ['/images/hero-indian-hair.jpg'],
  },
}

const SOLUTIONS = [
  {
    id: 'hair-replacement',
    title: 'Hair Replacement',
    description: 'Complete non-surgical hair replacement systems tailored to your scalp and hair type. 100% natural human hair, undetectable hairline.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    benefits: ['100% Natural Human Hair', 'Custom Scalp Template', 'Instant Full Coverage', 'Undetectable Hairline'],
    suitability: 'Advanced baldness, alopecia, Norwood Scale 5–7',
    href: '/services',
  },
  {
    id: 'hair-fixing',
    title: 'Hair Fixing',
    description: 'Advanced hair fixing techniques using medical-grade bonding and weaving methods for a secure, natural look that lasts weeks.',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80',
    benefits: ['Multiple Fixing Methods', 'Sweat & Water Resistant', 'Lasts 4–6 Weeks', 'Professional Styling Included'],
    suitability: 'Receding hairlines, crown thinning, any hair loss stage',
    href: '/services',
  },
  {
    id: 'hair-patch',
    title: 'Hair Patch',
    description: 'Precision-fitted hair patches crafted from featherlight lace bases, blending seamlessly with your natural hair texture and color.',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    benefits: ['Swiss & French Lace Base', 'Color-Matched Precision', '90-Minute Transformation', 'Breathable & Lightweight'],
    suitability: 'Partial hair loss, bald patches, crown thinning',
    href: '/services',
  },
  {
    id: 'hair-bonding',
    title: 'Hair Bonding',
    description: 'FDA-approved hypoallergenic adhesive bonding for active individuals. Withstands swimming, workouts, and Kerala\'s humid weather.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    benefits: ['Medical-Grade Adhesive', 'Waterproof & Sweatproof', '4–6 Week Hold', 'Pain-Free & Non-Surgical'],
    suitability: 'Active lifestyles, athletes, professionals',
    href: '/services',
  },
  {
    id: 'hair-systems',
    title: 'Hair Systems',
    description: 'Premium men\'s and women\'s hair systems with ultra-thin polyurethane and lace bases for the most natural appearance.',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    benefits: ['Ultra-Thin Skin Base', 'Remy Virgin Human Hair', 'Customized Hair Direction', 'Complete Styling Freedom'],
    suitability: 'All levels of hair loss, men and women',
    href: '/products',
  },
  {
    id: 'hair-extensions',
    title: 'Hair Extensions',
    description: 'Volume-boosting and length-adding extensions for women, using clip-in, micro-ring, and tape-in methods for natural results.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    benefits: ['Multiple Application Methods', 'Heat-Resistant Human Hair', 'No Damage to Natural Hair', 'Private Female Consultation Suite'],
    suitability: 'Female diffuse thinning, volume loss, post-partum hair loss',
    href: '/services',
  },
]

export default function SolutionsPage() {
  const solutionsJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ozzonehair.com/' },
          { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://ozzonehair.com/solutions/' },
        ],
      },
      {
        '@type': 'ItemList',
        name: 'Non-Surgical Hair Loss Solutions in Thiruvananthapuram',
        description: 'Comprehensive hair replacement and fixing options offered at ozzone Hair Studio Thiruvananthapuram',
        itemListElement: SOLUTIONS.map((sol, index) => ({
          '@type': 'Service',
          position: index + 1,
          name: sol.title,
          description: sol.description,
          provider: {
            '@type': 'HairSalon',
            name: 'ozzone Hair Thiruvananthapuram',
            url: 'https://ozzonehair.com/',
          },
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Which hair solution is best for complete baldness?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For advanced baldness (Norwood Scale 5–7), our Full Scalp Hair Replacement System or Hair Systems are most suitable. They provide complete coverage with 100% natural human hair.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is hair bonding safe for sensitive scalps?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We use only FDA-approved, dermatologically tested hypoallergenic adhesives. A patch test is performed before any bonding procedure for clients with known sensitivities.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long does a hair fixing solution last?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hair bonding lasts 4–6 weeks. Hair patches and systems typically require maintenance monthly. With proper care, the hair system itself can last 3–6 months or longer.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you have solutions specifically for women?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Absolutely. We have dedicated women-specific solutions including crown toppers, clip-in and micro-ring hair extensions, and complete hair replacement systems — with a private female consultation suite.',
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionsJsonLd),
        }}
      />

      {/* Hero Banner */}
      <section className="hero-gradient-bg pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#29B6EB] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#174BA5] rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#29B6EB]/20 text-[#29B6EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Our Hair Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              Complete Hair Solutions for{' '}
              <span className="text-[#29B6EB]">Men & Women</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              From hair replacement and fixing to bonding, extensions and advanced hair systems — we offer every non-surgical hair loss solution under one roof in Thiruvananthapuram.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20would%20like%20to%20know%20about%20hair%20solutions.`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Book Free Consultation
              </a>
              <Link href="/services" className="btn-secondary-dark">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#29B6EB] mb-3">
              Tailored for Every Hair Loss Stage
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#075078] mb-4">
              Choose Your Hair Solution
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto leading-relaxed">
              Each solution is personalised to your unique hair loss pattern, lifestyle and aesthetic preferences by our certified hair specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol) => (
              <Link key={sol.id} href={sol.href} className="group ronex-card overflow-hidden block">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={sol.image}
                    alt={`${sol.title} in Thiruvananthapuram`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#075078]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="accent-line mb-3" />
                  <h3 className="text-xl font-bold text-[#075078] mb-2 group-hover:text-[#174BA5] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed mb-4">{sol.description}</p>

                  <ul className="space-y-1.5 mb-5">
                    {sol.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-[#252B38]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs text-[#64748B] italic mb-4">
                    <span className="font-semibold text-[#075078]">Best for: </span>
                    {sol.suitability}
                  </p>

                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#005675] group-hover:text-[#174BA5] transition-colors">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F3F7FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#075078] mb-4">
            Not Sure Which Solution is Right for You?
          </h2>
          <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
            Our certified hair specialists will assess your hair loss stage and recommend the most suitable solution — absolutely free, with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_INFO.whatsapp}?text=Hi%20ozzone%20Hair%2C%20I%20need%20help%20choosing%20the%20right%20hair%20solution.`}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <FaWhatsapp className="w-5 h-5 text-white" />
              <span>Get Free Hair Analysis</span>
            </a>
            <Link href="/contact" className="btn-secondary-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#075078] mb-8 text-center">Common Questions About Our Solutions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Which hair solution is best for complete baldness?',
                a: 'For advanced baldness (Norwood Scale 5–7), our Full Scalp Hair Replacement System or Hair Systems are most suitable. They provide complete coverage with 100% natural human hair.',
              },
              {
                q: 'Is hair bonding safe for sensitive scalps?',
                a: 'Yes. We use only FDA-approved, dermatologically tested hypoallergenic adhesives. A patch test is performed before any bonding procedure for clients with known sensitivities.',
              },
              {
                q: 'How long does a hair fixing solution last?',
                a: 'Hair bonding lasts 4–6 weeks. Hair patches and systems typically require maintenance monthly. With proper care, the hair system itself can last 3–6 months or longer.',
              },
              {
                q: 'Do you have solutions specifically for women?',
                a: 'Absolutely. We have dedicated women-specific solutions including crown toppers, clip-in and micro-ring hair extensions, and complete hair replacement systems — with a private female consultation suite.',
              },
            ].map((faq, i) => (
              <details key={i} className="group border border-[#E2E8F0] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-[#075078] font-semibold text-sm hover:bg-[#F3F7FB] transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-[#29B6EB] transition-transform group-open:rotate-45 text-xl leading-none flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-[#64748B] text-sm leading-relaxed border-t border-[#E2E8F0] pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="btn-secondary-light">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

