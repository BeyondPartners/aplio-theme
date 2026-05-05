'use client'

import { lifelongBenefits as defaultBenefits } from '@/data/lifelongBenefits'
import PropTypes from 'prop-types'
import { useCallback, useEffect, useRef, useState } from 'react'

const NewsletterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="1" y="3.5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M1 6l7 4.5L15 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RefreshIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M13.5 2.5A6.5 6.5 0 1 1 3 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M1 3l2 2.5 2.5-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path
      d="M8 1.5L2 4v4c0 3.3 2.5 5.6 6 6.5 3.5-.9 6-3.2 6-6.5V4L8 1.5z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M5.5 8l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ICONS = {
  brief: NewsletterIcon,
  skills: RefreshIcon,
  access: ShieldIcon,
}

/**
 * Mobile / tablet horizontal snap carousel for lifelong-benefit cards (audit §4.3).
 */
const LifelongBenefitsCarousel = ({ items = defaultBenefits, labels }) => {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveFromScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const cards = Array.from(el.querySelectorAll('[data-benefit-slide]'))
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
  }, [updateActiveFromScroll, items])

  const scrollToSlide = (index) => {
    scrollRef.current?.querySelector(`[data-benefit-slide="${index}"]`)?.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'nearest',
    })
  }

  const ariaRegion = labels?.ariaRegion ?? 'Après le programme'
  const slideLabelSeparator = labels?.slideLabelSeparator ?? 'sur'
  const dotLabelPrefix = labels?.dotLabelPrefix ?? 'Afficher la carte '

  return (
    <div className="md:hidden">
      <ul
        ref={scrollRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={ariaRegion}
        tabIndex={0}
        className="focus-visible:outline-accent flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pt-1 pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:snap-none [&::-webkit-scrollbar]:hidden">
        {items.map((benefit, i) => {
          const Icon = ICONS[benefit.id]
          return (
            <li
              key={benefit.id}
              data-benefit-slide={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} ${slideLabelSeparator} ${items.length}`}
              className="rounded-medium w-[min(88vw,380px)] min-w-0 shrink-0 snap-start border border-[#f1f1f1] bg-white p-2.5">
              <div className="flex h-full flex-col rounded border border-dashed border-gray-100 p-6">
                <span className="bg-secondary/10 text-secondary mb-5 flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon />
                </span>
                <p className="mb-2 leading-snug font-semibold">{benefit.title}</p>
                <p className="text-paragraph-light text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </li>
          )
        })}
      </ul>
      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${dotLabelPrefix}${i + 1}`}
            onClick={() => scrollToSlide(i)}
            className={`h-2 cursor-pointer rounded-full transition-all ${
              activeIndex === i ? 'bg-accent w-6' : 'w-2 bg-gray-200'
            }`}
          />
        ))}
      </div>
      <span className="sr-only">
        {activeIndex + 1} / {items.length}
      </span>
    </div>
  )
}

LifelongBenefitsCarousel.propTypes = {
  items: PropTypes.array,
  labels: PropTypes.shape({
    ariaRegion: PropTypes.string.isRequired,
    slideLabelSeparator: PropTypes.string.isRequired,
    dotLabelPrefix: PropTypes.string.isRequired,
  }),
}

export default LifelongBenefitsCarousel
