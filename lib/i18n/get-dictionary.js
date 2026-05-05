import { DEFAULT_LOCALE, isValidLocale } from './config'

import en from '@/messages/en'
import fr from '@/messages/fr'

const dictionaries = { fr, en }

/**
 * @param {string | undefined} locale
 */
export function getDictionary(locale) {
  const loc = isValidLocale(locale) ? locale : DEFAULT_LOCALE
  return dictionaries[loc]
}
