'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

const metrics = [
  {
    id: 'process',
    value: 3,
    suffix: '',
    title: 'de vos process les plus chronophages bénéficient de Claude Cowork',
    micro: '',
    animate: true,
  },
  {
    id: 'team',
    value: 100,
    suffix: '%',
    title: 'Équipe formée et autonome',
    micro: '',
    animate: true,
  },
  {
    id: 'roadmap',
    value: 90,
    suffix: '',
    unit: 'jours',
    title: 'Feuille de route co-construite et prête à exécuter',
    micro: '',
    animate: true,
  },
  {
    id: 'partner',
    value: 1,
    suffix: '',
    title: 'partenaire IA de confiance dans la durée',
    micro: '',
    animate: true,
  },
]

const easeOutCubic = (t) => 1 - (1 - t) ** 3

const ResultDashboardCard = () => {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 1300
    let frameId = null
    const start = performance.now()

    const animate = (now) => {
      const elapsed = now - start
      const ratio = Math.min(elapsed / duration, 1)
      setProgress(easeOutCubic(ratio))
      if (ratio < 1) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)
    return () => {
      if (frameId) cancelAnimationFrame(frameId)
    }
  }, [isVisible])

  const ring = useMemo(() => {
    const radius = 22
    const circumference = 2 * Math.PI * radius
    const offset = circumference - circumference * progress
    return { radius, circumference, offset }
  }, [progress])

  const getAnimatedValue = (value) => {
    if (!isVisible) return 0
    return Math.round(value * progress)
  }

  return (
    <article ref={sectionRef} className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5">
      <div className="dark:border-borderColour-dark overflow-hidden rounded border border-dashed border-gray-100">
        <div className="flex items-start justify-between gap-6 p-8 max-lg:p-6">
          <div>
            <p className="bg-accent/10 text-accent mb-4 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold tracking-wider uppercase">
              Résultat
            </p>
            <h3 className="mb-2">À l&apos;issue de ce programme</h3>
            <p className="text-paragraph">Vous repartez avec :</p>
          </div>

          <div className="relative h-16 w-16 shrink-0">
            <svg className="-rotate-90" width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
              <circle
                cx="32"
                cy="32"
                r={ring.radius}
                stroke="currentColor"
                strokeWidth="5"
                className="text-accent/20"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r={ring.radius}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                className="text-accent transition-all duration-150"
                fill="none"
                strokeDasharray={ring.circumference}
                strokeDashoffset={ring.offset}
              />
            </svg>
            <span className="text-accent absolute inset-0 flex items-center justify-center text-lg font-semibold">
              100%
            </span>
          </div>
        </div>

        <div className="dark:divide-borderColour-dark grid grid-cols-2 divide-x divide-y divide-gray-100 max-md:grid-cols-1 max-md:divide-x-0">
          {metrics.map((metric) => (
            <div key={metric.id} className="p-8 max-lg:p-6">
              <div className="text-accent mb-3 flex items-end gap-1.5 leading-none font-bold">
                {metric.animate ? (
                  <span className="text-[48px] max-lg:text-[38px]">{getAnimatedValue(metric.value)}</span>
                ) : (
                  <span className="text-[48px] max-lg:text-[38px]">{metric.symbol}</span>
                )}
                {metric.suffix && <span className="mb-1 text-[24px] max-lg:text-[20px]">{metric.suffix}</span>}
                {metric.unit && (
                  <span className="mb-1 text-[20px] font-semibold max-lg:text-[18px]">{metric.unit}</span>
                )}
              </div>
              <p className="text-paragraph mb-1 max-w-[320px] text-lg leading-normal font-medium max-lg:text-base">
                {metric.title}
              </p>
              {metric.micro && <p className="text-accent text-base font-medium">{metric.micro}</p>}
            </div>
          ))}
        </div>

        <div className="bg-accent-100/60 dark:border-borderColour-dark border-t border-gray-100 p-6 max-lg:p-5">
          <div className="flex items-center gap-4">
            <span className="bg-accent inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base text-white">
              ★
            </span>
            <p className="text-paragraph dark:text-paragraph leading-snug font-semibold">
              Vos spécialistes IA internes sont autonomes pour porter cette transformation auprès des autres équipes.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ResultDashboardCard
