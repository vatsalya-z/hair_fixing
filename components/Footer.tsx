import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Phone, 
  MapPin, 
  Clock, 
  ArrowRight,
  ExternalLink
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'
import { SITE_INFO, SERVICES_DATA } from '@/data/siteData'

export default function Footer() {
  return (
    <footer className="w-full bg-[#005675] text-white pt-14 pb-24 lg:pb-8 border-t border-[#075078]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand & About with official ozzone Hair Logo */}
          <div className="space-y-4">
            <div className="flex flex-col items-start gap-2">
              <div className="p-2 rounded-lg bg-black/30 border border-white/20 inline-block">
                <Image
                  src="/images/ozzone-hair-logo-white.png"
                  alt="ozzone Hair Thiruvananthapuram"
                  width={150}
                  height={45}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-[11px] text-[#29B6EB] font-bold uppercase tracking-wider">
                Hair Fixing Studio • Thiruvananthapuram
              </p>
            </div>

            <p className="text-sm text-white/85 leading-relaxed">
              Trivandrum&apos;s leading center for advanced non-surgical hair replacement, hair patching, bonding, and micro-track weaving. Restoring natural looks and youthful confidence with 100% virgin human hair.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a 
                href={`https://wa.me/${SITE_INFO.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white transition-all duration-200 shadow-sm"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#29B6EB] hover:text-[#005675] flex items-center justify-center text-white transition-all duration-200"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#29B6EB] hover:text-[#005675] flex items-center justify-center text-white transition-all duration-200"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#29B6EB] hover:text-[#005675] flex items-center justify-center text-white transition-all duration-200"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#29B6EB]/40 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/#${service.id}`} 
                    className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors duration-150"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#29B6EB]/40 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <Link href="/hair-fixing-trivandrum/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Hair Fixing in Trivandrum</span>
                </Link>
              </li>
              <li>
                <Link href="/hair-fixing-bangalore/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Hair Fixing in Bangalore</span>
                </Link>
              </li>
              <li>
                <Link href="/about/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>About ozzone Hair</span>
                </Link>
              </li>
              <li>
                <Link href="/gallery/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Before &amp; After Results</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Packages &amp; Cost Breakdown</span>
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Hair Care Guides &amp; Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-[#29B6EB] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-[#29B6EB]" />
                  <span>Contact &amp; Free Scalp Analysis</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Clinic Info & Hours */}
          <div className="space-y-3.5 text-sm text-white/85">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-[#29B6EB]/40 inline-block">
              Studio Locations (NAP)
            </h4>
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#29B6EB] shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-semibold">Trivandrum Studio (Palayam):</strong>
                <p className="text-xs text-white/80 leading-relaxed">{SITE_INFO.address}</p>
                <div className="mt-1">
                  <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, '')}`} className="text-xs text-[#29B6EB] hover:underline font-semibold">
                    📞 {SITE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#29B6EB] shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-semibold">Bangalore Studio (Indiranagar):</strong>
                <p className="text-xs text-white/80 leading-relaxed">{SITE_INFO.branch2}</p>
                <div className="mt-1">
                  <a href={`tel:${SITE_INFO.altPhone.replace(/\s+/g, '')}`} className="text-xs text-[#29B6EB] hover:underline font-semibold">
                    📞 {SITE_INFO.altPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Clock className="w-4 h-4 text-[#29B6EB] shrink-0" />
              <span className="text-xs text-white/90">{SITE_INFO.timing}</span>
            </div>
          </div>
        </div>

        {/* GOOGLE MAPS SECTION AT BOTTOM */}
        <div className="mt-10 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#29B6EB]" />
                <span>Locate Ozzone Farrell on Google Maps</span>
              </h4>
              <p className="text-xs text-white/75 mt-0.5">
                Double Road, HAL 2nd Stage, Indiranagar, Bengaluru (Ample Parking Available)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/place/Ozzone+Farrell+bangalore/@12.9660325,77.6380037,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16a25d4a7c99:0xd411d97542f78f0b!8m2!3d12.9660325!4d77.6380037!16s%2Fg%2F1tfxf3nj"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#29B6EB] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-white/20 shadow-md">
            <iframe
              src={SITE_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location - Ozzone Farrell Bangalore"
              className="w-full h-full grayscale-[20%] contrast-[105%]"
            />
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-xs text-white/70">
          <div className="text-center md:text-left space-y-1">
            <p className="text-xs sm:text-sm text-white/80">
              ©{new Date().getFullYear()} ozzone Hair Thiruvananthapuram. All Rights Reserved.
            </p>
            <p className="text-xs text-[#29B6EB]">
              Design And Developed By -{' '}
              <a
                href="https://www.zoomdigital.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#29B6EB] hover:text-white hover:underline transition-colors"
              >
                Zoom Digital
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 self-center md:self-auto">
            <Link href="/faq/" className="hover:text-[#29B6EB] transition-colors">Privacy Policy</Link>
            <Link href="/faq/" className="hover:text-[#29B6EB] transition-colors">Terms of Service</Link>
            <Link href="/contact/" className="hover:text-[#29B6EB] transition-colors">Location &amp; Hours</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
