'use client'

import { COOKIE_MAX_AGE, COOKIE_NAME, LOCALES } from '@/lib/i18n/config'
import { usePathname, useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

export default function LanguageToggle({ locale, dict }) {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const other = locale === 'fr' ? 'en' : 'fr'
  const l = dict.footer.language

  const segments = pathname.split('/').filter(Boolean)
  const hasLocalePrefix = LOCALES.includes(segments[0])

  const switchLocale = () => {
    if (!hasLocalePrefix) return
    const nextSegments = [...segments]
    nextSegments[0] = other
    const nextPath = `/${nextSegments.join('/')}`
    document.cookie = `${COOKIE_NAME}=${other}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
    router.push(
      `${nextPath}${typeof window !== 'undefined' ? window.location.search : ''}${typeof window !== 'undefined' ? window.location.hash : ''}`,
    )
  }

  if (!hasLocalePrefix) return null

  return (
    <div className="flex items-center gap-2 text-sm" role="group" aria-label={l.label}>
      <button
        type="button"
        onClick={() => locale !== 'fr' && switchLocale()}
        className={`cursor-pointer rounded px-2 py-1 font-medium transition-colors ${
          locale === 'fr' ? 'bg-accent/15 text-accent' : 'text-paragraph hover:text-secondary'
        }`}
        aria-current={locale === 'fr' ? 'true' : undefined}
        aria-label={l.switchToFr}>
        {l.fr}
      </button>
      <span className="text-paragraph-light" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => locale !== 'en' && switchLocale()}
        className={`cursor-pointer rounded px-2 py-1 font-medium transition-colors ${
          locale === 'en' ? 'bg-accent/15 text-accent' : 'text-paragraph hover:text-secondary'
        }`}
        aria-current={locale === 'en' ? 'true' : undefined}
        aria-label={l.switchToEn}>
        {l.en}
      </button>
    </div>
  )
}

LanguageToggle.propTypes = {
  locale: PropTypes.oneOf(['fr', 'en']).isRequired,
  dict: PropTypes.object.isRequired,
}
