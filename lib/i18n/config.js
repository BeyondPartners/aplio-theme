/** @typedef {'fr' | 'en'} Locale */

export const LOCALES = /** @type {const} */ (['fr', 'en'])

/** @type {Locale} */
export const DEFAULT_LOCALE = 'fr'

export const COOKIE_NAME = 'bp_lang'

/** 1 year */
export const COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export const LOCALE_HEADER = 'x-bp-locale'

/**
 * @param {string | undefined} value
 * @returns {value is Locale}
 */
export function isValidLocale(value) {
  return value === 'fr' || value === 'en'
}

/**
 * Vercel: `x-vercel-ip-country` (ISO 3166-1 alpha-2). FR/CH → French; otherwise English.
 * @param {string} country
 * @returns {Locale}
 */
export function localeFromCountry(country) {
  const c = (country || '').toUpperCase()
  if (c === 'FR' || c === 'CH') return 'fr'
  return 'en'
}
