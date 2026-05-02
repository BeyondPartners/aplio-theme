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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches)
    updatePreference()

    mediaQuery.addEventListener('change', updatePreference)
    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true)
      setProgress(1)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return

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
  }, [isVisible, prefersReducedMotion])

  const getAnimatedValue = (value) => {
    if (!isVisible) return 0
    return Math.round(value * progress)
  }

  return (
    <article ref={sectionRef} className="rounded-medium shadow-box bg-white p-2.5">
      <div className="overflow-hidden rounded border border-dashed border-gray-100">
        <div className="p-6 max-lg:p-5">
          <p className="bg-accent/10 text-accent mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase">
            Résultat
          </p>
          <h3 className="mb-1.5">À l&apos;issue de ce programme</h3>
          <p className="text-paragraph-light text-sm">Vous repartez avec :</p>
        </div>

        <div className="grid grid-cols-2 divide-x divide-y divide-gray-100">
          {metrics.map((metric) => {
            const finalNumericLabel = `${metric.value}${metric.suffix ?? ''}${metric.unit ? ` ${metric.unit}` : ''}`
            return (
              <div key={metric.id} className="p-4 max-[799px]:p-5 max-sm:px-3 min-[800px]:p-6">
                <div className="text-accent mb-2.5 flex items-end gap-1 leading-none font-bold">
                  {metric.animate ? (
                    <span className="text-[28px] max-[799px]:text-[32px] min-[800px]:text-[38px]" aria-hidden="true">
                      {getAnimatedValue(metric.value)}
                    </span>
                  ) : (
                    <span className="text-[28px] max-[799px]:text-[32px] min-[800px]:text-[38px]" aria-hidden="true">
                      {metric.symbol}
                    </span>
                  )}
                  <span className="sr-only">{finalNumericLabel}</span>
                  {metric.suffix && (
                    <span
                      className="mb-0.5 text-[18px] max-[799px]:text-[18px] min-[800px]:text-[20px]"
                      aria-hidden="true">
                      {metric.suffix}
                    </span>
                  )}
                  {metric.unit && (
                    <span
                      className="mb-0.5 text-[14px] font-semibold max-[799px]:text-[15px] min-[800px]:text-[16px]"
                      aria-hidden="true">
                      {metric.unit}
                    </span>
                  )}
                </div>
                <p className="text-paragraph max-w-[260px] text-[13px] leading-snug font-medium max-[799px]:text-sm max-sm:max-w-none min-[800px]:text-sm">
                  {metric.title}
                </p>
                {metric.micro && <p className="text-accent mt-0.5 text-xs font-medium">{metric.micro}</p>}
              </div>
            )
          })}
        </div>

        <div className="bg-secondary/10 border-t border-gray-200 px-5 py-7 max-lg:p-4">
          <div className="flex items-start gap-3">
            <span
              className="bg-secondary mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base leading-none text-white max-[799px]:h-8 max-[799px]:w-8 min-[800px]:h-9 min-[800px]:w-9"
              aria-hidden>
              ★
            </span>
            <p className="text-paragraph text-sm leading-snug font-semibold">
              Vos spécialistes IA internes sont autonomes pour porter cette transformation auprès des autres équipes.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ResultDashboardCard
