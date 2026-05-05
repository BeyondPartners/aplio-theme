'use client'

import { COOKIE_MAX_AGE, COOKIE_NAME, LOCALES } from '@/lib/i18n/config'
import { usePathname, useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'

const GlobeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
    <path d="M6 9l6 6 6-6" />
  </svg>
)

ChevronIcon.propTypes = { open: PropTypes.bool }

export default function NavLanguageToggle({ locale, dict }) {
  const pathname = usePathname() || '/'
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const l = dict.footer.language

  const switchTo = (next) => {
    const segments = pathname.split('/').filter(Boolean)
    if (LOCALES.includes(segments[0])) segments[0] = next
    else segments.unshift(next)
    const nextPath = `/${segments.join('/')}`
    document.cookie = `${COOKIE_NAME}=${next}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax`
    setOpen(false)
    router.push(
      `${nextPath}${typeof window !== 'undefined' ? window.location.search : ''}${typeof window !== 'undefined' ? window.location.hash : ''}`,
    )
  }

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  return (
    <div ref={ref} className="relative" aria-label={l.label}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="rounded-large text-paragraph flex cursor-pointer items-center gap-1.5 border border-transparent px-2.5 py-[5px] text-sm font-medium transition-colors duration-200 hover:bg-zinc-100 xl:text-base">
        <GlobeIcon />
        <span>{locale.toUpperCase()}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={l.label}
          className="absolute top-full right-0 z-50 mt-1.5 min-w-[80px] overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg">
          {LOCALES.map((loc) => (
            <li key={loc} role="option" aria-selected={loc === locale}>
              <button
                type="button"
                onClick={() => switchTo(loc)}
                aria-label={loc === 'fr' ? l.switchToFr : l.switchToEn}
                className={`flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  loc === locale ? 'text-accent bg-accent/5' : 'text-paragraph hover:text-secondary hover:bg-zinc-50'
                }`}>
                {loc === locale && <span className="bg-accent h-1.5 w-1.5 shrink-0 rounded-full" aria-hidden />}
                {loc !== locale && <span className="h-1.5 w-1.5 shrink-0" aria-hidden />}
                {loc.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

NavLanguageToggle.propTypes = {
  locale: PropTypes.oneOf(['fr', 'en']).isRequired,
  dict: PropTypes.object.isRequired,
}
