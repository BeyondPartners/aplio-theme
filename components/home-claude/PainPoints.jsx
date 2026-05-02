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

/** Tâches administratives / faible valeur ajoutée */
const ClipboardTasksIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M9 5h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M9 3h6v4H9zM9 11h6M9 15h4" />
  </svg>
)

/** Structure / plafond de verre sur la croissance */
const GlassCeilingIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M4 10h16M4 10v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
    <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M9 14h6" />
    <path d="M8 18h8" strokeDasharray="2 2" />
  </svg>
)

/** IA repérée mais application encore floue */
const AiBlurIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <path d="M12 3v2M12 19v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h2M19 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

/** Initiatives dispersées, pas de capitalisation */
const DispersedNodesIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden {...iconProps}>
    <circle cx="6" cy="7" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="8" cy="17" r="2.5" />
    <circle cx="17" cy="18" r="2.5" />
    <path d="M8 9.5l3 5M15.5 8l-2 7M10.5 16l5 .5" strokeDasharray="2 3" opacity="0.55" />
  </svg>
)

const pains = [
  {
    title: 'Productivité freinée par des tâches à faible valeur ajoutée',
    desc: 'Les équipes travaillent beaucoup… mais pas toujours là où l’impact est maximal.',
    tag: 'Productivité',
    Icon: ClipboardTasksIcon,
  },
  {
    title: 'Organisation qui limite la croissance',
    desc: 'La structure actuelle fonctionne… mais crée un plafond de verre qui empêche l’évolution.',
    tag: 'Structure',
    Icon: GlassCeilingIcon,
  },
  {
    title: 'Potentiel de l’IA identifié, mais qui reste flou',
    desc: 'Le levier de l’intelligence artificielle est clair… son application concrète beaucoup moins.',
    tag: 'Direction',
    Icon: AiBlurIcon,
  },
  {
    title: 'Usages de l’IA dispersés et non capitalisés',
    desc: 'Des initiatives ponctuelles existent… mais sans cadre commun ni effet cumulé.',
    tag: 'Utilisation',
    Icon: DispersedNodesIcon,
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
                  className="dark:bg-dark-200 rounded-medium border-l-accent/40 min-w-0 shrink-0 basis-[88%] snap-start border border-l-[3px] border-[#f1f1f1] bg-white dark:border-gray-600">
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
                className={`h-2 cursor-pointer rounded-full transition-all ${
                  activeIndex === i ? 'bg-accent w-6' : 'w-2 bg-gray-200 dark:bg-gray-600'
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
                className="dark:bg-dark-200 rounded-medium shadow-box flex min-h-0 min-w-0 border border-[#f1f1f1] bg-white dark:border-gray-600">
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
          <a href="#approche" className="btn max-w-full text-center">
            Voici comment on peut vous aider
          </a>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
