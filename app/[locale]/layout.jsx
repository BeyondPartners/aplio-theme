import { LOCALES, isValidLocale } from '@/lib/i18n/config'
import { notFound } from 'next/navigation'
import PropTypes from 'prop-types'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  return children
}

LocaleLayout.propTypes = {
  children: PropTypes.node,
  params: PropTypes.shape({
    locale: PropTypes.string,
  }),
}
