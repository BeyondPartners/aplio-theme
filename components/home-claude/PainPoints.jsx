'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const iconProps = {
  className: 'h-[18px] w-[18px] shrink-0 text-accent',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
)

const WarningIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <rect x="5" y="3" width="14" height="18" rx="3" />
    <path d="M12 8v5M12 16h.01" />
  </svg>
)

const CollaborationIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="9" cy="12" r="5" />
    <circle cx="15" cy="12" r="5" />
    <path d="M12 7v10" strokeDasharray="2 3" />
  </svg>
)

const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M6 20v-8M12 20V8M18 20v-12" />
  </svg>
)

const pains = [
  {
    title: 'Des heures perdues sur des tâches sans valeur ajoutée',
    desc: 'Comptes-rendus, emails clients, descriptifs techniques — vos collaborateurs passent leur temps sur de la production, pas de la création.',
    tag: 'Productivité',
    Icon: ClockIcon,
  },
  {
    title: "Personne ne sait vraiment par où commencer avec l'IA",
    desc: "Les outils sont nombreux, les usages flous. Sans cap clair, chacun improvise — ou n'essaie pas.",
    tag: 'Adoption',
    Icon: WarningIcon,
  },
  {
    title: 'Des pratiques dispersées, aucune capitalisation',
    desc: "L'IA est utilisée en solo et de façon disparate. Ce qui fonctionne pour l'un ne profite jamais à l'équipe.",
    tag: 'Collaboration',
    Icon: CollaborationIcon,
  },
  {
    title: 'Vous ne savez pas quels process transformer en priorité',
    desc: "Sans méthode, les gains potentiels restent théoriques et le passage à l'échelle ne se fait jamais.",
    tag: 'Stratégie',
    Icon: StrategyIcon,
  },
]

const PainPoints = () => {
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
    <section className="dark:bg-dark-300 relative mb-10 overflow-x-clip bg-white pt-16 md:mb-12 md:pt-20">
      <div className="bg-accent/10 pointer-events-none absolute top-0 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" />

      <div className="container">
        <div className="mx-auto mb-12 max-w-[640px] text-center max-md:mb-10 md:max-xl:mb-10">
          {/* <p className="text-accent mb-4 text-xs font-semibold tracking-[0.15em] uppercase dark:text-white/90">
            Ce que nous entendons chaque semaine
          </p> */}
          <h2 className="mb-4 max-xl:text-[26px] max-xl:leading-snug md:max-xl:text-[32px] md:max-xl:leading-snug">
            Vous vous <span className="text-accent">reconnaissez</span>&nbsp;?
          </h2>
          <p className="text-paragraph-light max-xl:text-[15px] max-xl:leading-relaxed md:max-xl:text-base dark:text-white/60">
            Ces blocages sont ceux que nous entendons dans chaque cabinet que nous accompagnons.
          </p>
        </div>

        {/* Mobile: horizontal snap carousel — ~88% width so next card peeks; no page overflow */}
        <div className="md:hidden">
          <ul
            ref={scrollRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Points de blocage"
            tabIndex={0}
            className="focus-visible:outline-accent flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pt-1 pb-3 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:snap-none [&::-webkit-scrollbar]:hidden">
            {pains.map((pain, i) => {
              const Icon = pain.Icon
              return (
                <li
                  key={pain.title}
                  data-pain-slide={i}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} sur ${pains.length}`}
                  className="dark:border-borderColour-dark dark:bg-dark-200 rounded-medium border-l-accent/40 min-w-0 shrink-0 basis-[88%] snap-start border border-l-[3px] border-[#f1f1f1] bg-white">
                  <div className="flex min-h-full flex-col gap-4 p-6">
                    <div className="bg-accent/10 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
                      <Icon />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="font-jakarta text-paragraph text-base leading-snug font-bold dark:text-white">
                        {pain.title}
                      </p>
                      <p className="text-paragraph-light text-sm leading-relaxed dark:text-white/80">{pain.desc}</p>
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
                aria-label={`Afficher le point ${i + 1}`}
                onClick={() => scrollToSlide(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? 'bg-accent w-6' : 'bg-borderColour dark:bg-borderColour-dark w-2'
                }`}
              />
            ))}
          </div>
          <span className="sr-only">
            {activeIndex + 1} / {pains.length}
          </span>
        </div>

        {/* Tablet + desktop: grid (4 cols from xl per audit / original) */}
        <ul className="hidden w-full md:grid md:auto-rows-fr md:grid-cols-2 md:gap-6 xl:grid-cols-4 xl:gap-4">
          {pains.map((pain) => {
            const Icon = pain.Icon

            return (
              <li
                key={pain.title}
                className="dark:border-borderColour-dark dark:bg-dark-200 rounded-medium shadow-box flex min-h-0 min-w-0 border border-[#f1f1f1] bg-white">
                <div className="flex h-full min-h-full flex-col gap-4 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="bg-accent/10 text-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px]">
                      <Icon />
                    </div>
                    <span className="bg-accent/10 text-accent inline-flex rounded-full px-3 py-1 text-xs font-medium">
                      {pain.tag}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="font-jakarta text-paragraph text-base leading-snug font-bold md:text-[1.05rem] lg:text-[1.1rem] dark:text-white">
                      {pain.title}
                    </p>
                    <p className="text-paragraph-light text-sm leading-relaxed md:text-[0.9rem] dark:text-white/80">
                      {pain.desc}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mx-auto mt-10 flex max-w-6xl justify-center max-md:mt-8">
          <a href="#approche" className="btn max-lg:w-full">
            Voici comment on peut vous aider
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
