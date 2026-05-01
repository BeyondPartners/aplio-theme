'use client'

import { useEffect, useRef, useState } from 'react'

const metrics = [
  {
    id: 'team',
    value: 100,
    suffix: '%',
    title: 'Équipe formée et autonome',
    micro: '',
    animate: true,
  },
  {
    id: 'process',
    value: 3,
    suffix: '',
    title: 'de vos process les plus chronophages bénéficient de Claude Cowork',
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

  const getAnimatedValue = (value) => {
    if (!isVisible) return 0
    return Math.round(value * progress)
  }

  return (
    <article ref={sectionRef} className="rounded-medium shadow-box dark:bg-dark-200 bg-white p-2.5">
      <div className="dark:border-borderColour-dark overflow-hidden rounded border border-dashed border-gray-100">
        <div className="p-6 max-lg:p-5">
          <p className="bg-accent/10 text-accent mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase">
            Résultat
          </p>
          <h3 className="mb-1.5">À l&apos;issue de ce programme</h3>
          <p className="text-paragraph-light text-sm dark:text-white/60">Vous repartez avec :</p>
        </div>

        <div className="dark:divide-borderColour-dark grid grid-cols-2 divide-x divide-y divide-gray-100 max-md:grid-cols-1 max-md:divide-x-0">
          {metrics.map((metric) => (
            <div key={metric.id} className="p-6 max-lg:p-5">
              <div className="text-accent mb-2.5 flex items-end gap-1 leading-none font-bold">
                {metric.animate ? (
                  <span className="text-[38px] max-lg:text-[32px]">{getAnimatedValue(metric.value)}</span>
                ) : (
                  <span className="text-[38px] max-lg:text-[32px]">{metric.symbol}</span>
                )}
                {metric.suffix && <span className="mb-0.5 text-[20px] max-lg:text-[18px]">{metric.suffix}</span>}
                {metric.unit && (
                  <span className="mb-0.5 text-[16px] font-semibold max-lg:text-[15px]">{metric.unit}</span>
                )}
              </div>
              <p className="text-paragraph max-w-[260px] text-sm leading-snug font-medium dark:text-white/80">
                {metric.title}
              </p>
              {metric.micro && <p className="text-accent mt-0.5 text-xs font-medium">{metric.micro}</p>}
            </div>
          ))}
        </div>

        <div className="border-borderColour dark:border-borderColour-dark bg-secondary/10 dark:bg-secondary/15 border-t px-5 py-7 max-lg:p-4">
          <div className="flex items-start gap-3">
            <span
              className="bg-secondary mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base leading-none text-white"
              aria-hidden>
              ★
            </span>
            <p className="text-paragraph text-sm leading-snug font-semibold dark:text-white/90">
              Vos spécialistes IA internes sont autonomes pour porter cette transformation auprès des autres équipes.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ResultDashboardCard
