'use client'

import { useEffect, useState } from 'react'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import Clients from '../shared/Clients'

/**
 * Trust bar logos. Per entry:
 * - `logoClassName` — Tailwind on the image (e.g. `scale-110`) to tweak size.
 * - `logoPaddingClassName` — padding inside the logo slot (e.g. `px-4`, `px-6 py-2`) to inset and visually shrink the mark.
 * On `<Clients />`, `defaultLogoPaddingClassName` applies the same padding to every custom logo unless an entry sets `logoPaddingClassName`.
 */
const TRUST_BAR_LOGOS = [
  {
    id: 'fit-routine',
    imageLight: '/images/fit_routine_logo.png',
    imageDark: '/images/fit_routine_logo.png',
    alt: 'FIT-ROUTINE',
    logoClassName: 'scale-85',
  },
  {
    id: 'kilome',
    imageLight: '/images/kilome_logo.png',
    imageDark: '/images/kilome_logo.png',
    alt: 'Kilome',
    logoClassName: 'scale-60',
  },
  {
    id: 'made-in-courtage',
    imageLight: '/images/made_in_courtage_logo.png',
    imageDark: '/images/made_in_courtage_logo.png',
    alt: 'Made in Courtage',
    logoClassName: 'scale-35',
  },
  {
    id: 'zen-financement',
    imageLight: '/images/zen_financement_logo.png',
    imageDark: '/images/zen_financement_logo.png',
    alt: 'zen Financement',
    logoClassName: 'scale-35',
  },
  {
    id: 'skills-up',
    imageLight: '/images/skillsup_logo_rectangle.png',
    imageDark: '/images/skillsup_logo_rectangle.png',
    alt: 'Skills Up',
    logoClassName: 'scale-75',
  },
]

const TrustBar = () => {
  const [marqueePlay, setMarqueePlay] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setMarqueePlay(!mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return (
    <section className="overflow-hidden bg-white dark:bg-white" aria-label="Entreprises accompagnées">
      <FadeUpAnimation className="container overflow-hidden">
        <Clients
          sectionTitle={false}
          sectionDetails={false}
          border={true}
          className="overflow-hidden bg-transparent py-0 dark:bg-transparent"
          marqueeClassName="overflow-hidden py-3 max-md:py-2"
          marqueeItemClassName="max-md:w-[190px] max-md:px-1"
          defaultLogoPaddingClassName="px-5 max-md:px-2"
          marqueePlay={marqueePlay}
          items={TRUST_BAR_LOGOS}
        />
      </FadeUpAnimation>
    </section>
  )
}

export default TrustBar
