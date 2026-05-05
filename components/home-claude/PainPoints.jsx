'use client'

import Link from 'next/link'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useRef, useState } from 'react'

const iconProps = {
  className: 'h-[18px] w-[18px] shrink-0 text-secondary',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ClipboardTasksIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M9 5h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M9 3h6v4H9zM9 11h6M9 15h4" />
  </svg>
)

const GlassCeilingIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M4 10h16M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M9 14h6" />
    <path d="M8 18h8" strokeDasharray="2 2" />
  </svg>
)

const AiBlurIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M12 3v2M12 19v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const DispersedNodesIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="8" cy="17" r="2.5" />
    <circle cx="17" cy="18" r="2.5" />
    <path d="M8 9.5l3 5M15.5 8l-2 7M10.5 16l5 .5" strokeDasharray="2 3" opacity="0.55" />
  </svg>
)

const ICONS = {
  clipboard: ClipboardTasksIcon,
  glass: GlassCeilingIcon,
  aiBlur: AiBlurIcon,
  dispersed: DispersedNodesIcon,
}

const PainPoints = ({ locale, dict }) => {
  const { headingBefore, headingHighlight, headingAfter, sub, carouselAriaLabel, cta, items } = dict.painPoints
  const pains = items
  const approachId = dict.sections.approach

  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll('[data-pain-slide]'))
    if (!cards.length) return
    const scrollLeft = el.scrollLeft
    const viewportCenter = scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect()
      const trackRect = el.getBoundingClientRect()
      const cardCenter = rect.left - trackRect.left + scrollLeft + rect.width / 2
      const dist = Math.abs(cardCenter - viewportCenter)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActiveIndex(best)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateActiveFromScroll()
    el.addEventListener('scroll', updateActiveFromScroll, { passive: true })
    window.addEventListener('resize', updateActiveFromScroll)
    return () => {
      el.removeEventListener('scroll', updateActiveFromScroll)
      window.removeEventListener('resize', updateActiveFromScroll)
    }
  }, [updateActiveFromScroll])

  const scrollToSlide = (index) => {
    const el = scrollRef.current
    const card = el?.querySelector(`[data-pain-slide="${index}"]`)
    card?.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'nearest',
    })
  }

  return (
    <section className="relative mb-10 overflow-x-clip bg-white pt-16 md:mb-12 md:pt-20">
      <div className="bg-accent/10 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="container">
        <div className="mx-auto mb-12 max-w-[640px] text-center max-md:mb-10 md:max-xl:mb-10">
          <h2 className="mb-4 max-xl:text-[26px] max-xl:leading-snug md:max-xl:text-[32px] md:max-xl:leading-snug">
            {headingBefore}
            <span className="text-accent">{headingHighlight}</span>
            {headingAfter}
          </h2>
          <p className="text-paragraph-light max-xl:text-[15px] max-xl:leading-relaxed md:max-xl:text-base">{sub}</p>
        </div>
        <div className="md:hidden">
          <ul
            ref={scrollRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={carouselAriaLabel}
            tabIndex={0}
            className="focus-visible:outline-accent flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pt-1 pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:snap-none [&::-webkit-scrollbar]:hidden">
            {pains.map((pain, i) => {
              const Icon = ICONS[pain.iconKey] || ClipboardTasksIcon
              return (
                <li
                  key={pain.title}
                  data-pain-slide={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} ${dict.painPoints.slideAriaSeparator} ${pains.length}`}
                  className="rounded-medium border-l-accent/40 min-w-0 shrink-0 basis-[88%] snap-start border border-l-[3px] border-[#f1f1f1] bg-white">
                  <div className="flex min-h-full flex-col gap-4 p-6">
                    <div className="bg-secondary/10 text-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
                      <Icon />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="font-jakarta text-paragraph text-base leading-snug font-bold">{pain.title}</p>
                      <p className="text-paragraph-light text-sm leading-relaxed">{pain.desc}</p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-3 flex justify-center gap-2">
            {pains.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${dict.painPoints.dotAriaPrefix}${i + 1}`}
                onClick={() => scrollToSlide(i)}
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  activeIndex === i ? 'bg-accent w-6' : 'w-2 bg-gray-200'
                }`}
              />
            ))}
          </div>
          <span className="sr-only">
            {activeIndex + 1} / {pains.length}
          </span>
        </div>
        <ul className="hidden w-full md:grid md:auto-rows-fr md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-4">
          {pains.map((pain) => {
            const Icon = ICONS[pain.iconKey] || ClipboardTasksIcon

            return (
              <li
                key={pain.title}
                className="rounded-medium shadow-box flex min-h-0 min-w-0 border border-[#f1f1f1] bg-white">
                <div className="flex h-full min-h-full flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="bg-secondary/10 text-secondary flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
                      <Icon />
                    </div>
                    <span className="bg-secondary/10 text-secondary inline-flex rounded-full px-3 py-1 text-xs font-medium">
                      {pain.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-jakarta text-paragraph text-base leading-snug font-bold md:text-[1.05rem] lg:text-[1.1rem]">
                      {pain.title}
                    </p>
                    <p className="text-paragraph-light text-sm leading-relaxed md:text-[0.9rem]">{pain.desc}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className="mx-auto mt-10 flex max-w-6xl justify-center max-md:mt-8">
          <Link href={`/${locale}#${approachId}`} className="btn max-w-full text-center">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  )
}

PainPoints.propTypes = {
  locale: PropTypes.oneOf(['fr', 'en']).isRequired,
  dict: PropTypes.object.isRequired,
}

export default PainPoints
