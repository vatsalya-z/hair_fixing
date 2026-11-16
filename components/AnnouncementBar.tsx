import React from 'react'

export default function AnnouncementBar() {
  const announcementSegments = [
    {
      text: "Hair loss can be an emotional challenge, but you don't have to live with it. Ozzone Hair Replacement Center, right here in your city, offers effective solutions.",
      highlight: 'Ozzone Hair Replacement Center',
    },
    {
      text: '"Hair loss can be a difficult journey, but you don\'t have to walk it alone. Ozzone Hair is right here in your city to support you every step you walk.....',
      highlight: null,
    },
    {
      text: "Hair loss can be an emotional challenge, but you don't have to live with it. Ozzone Hair Replacement Center, right here in your city, offers effective solutions.",
      highlight: 'Ozzone Hair Replacement Center',
    },
    {
      text: '"Hair loss can be a difficult journey, but you don\'t have to walk it alone. Ozzone Hair is right here in your city to support you every step you walk.....',
      highlight: null,
    },
    {
      text: 'Customized Solutions: Tailored treatments to meet your unique needs. Our team consists of experts with years of experience.',
      highlight: 'Customized Solutions',
    },
  ]

  const renderContent = () => (
    <div className="flex items-center shrink-0">
      {announcementSegments.map((segment, index) => (
        <div key={index} className="flex items-center shrink-0">
          <span className="text-white/95 text-xs sm:text-sm font-medium tracking-wide">
            {segment.text}
          </span>
          {/* Glowing separator dot between statements */}
          <span
            className="inline-flex items-center justify-center mx-5 sm:mx-8 text-[#29B6EB]"
            aria-hidden="true"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#29B6EB] shadow-[0_0_8px_#29B6EB]" />
          </span>
        </div>
      ))}
    </div>
  )

  return (
    <aside
      aria-label="Scrolling Announcement"
      className="relative bg-gradient-to-r from-[#03253a] via-[#075078] to-[#03253a] border-y border-[#29B6EB]/30 py-3 sm:py-3.5 overflow-hidden text-white "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Left Sticky Badge / Indicator */}
        <div className="flex items-center shrink-0  z-20 bg-gradient-to-r from-[#03253a] via-[#03253a]/90 to-transparent">
          <span className="inline-flex items-center gap-1.5 bg-[#29B6EB] text-[#075078] font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3.5 py-1 rounded-full shadow-sm">
            <span className="">Announcement</span>
          </span>
        </div>

        {/* Marquee Viewport with Left & Right Gradient Fade Masks */}
        <div className="relative flex-1 overflow-hidden">

          {/* Scrolling Ticker Track */}
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center whitespace-nowrap cursor-grab active:cursor-grabbing py-0.5">
            {/* Copy 1 */}
            {renderContent()}
            {/* Copy 2 for seamless infinite loop */}
            {renderContent()}
          </div>

          {/* Right Edge Fade */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#03253a] to-transparent z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </aside>
  )
}

