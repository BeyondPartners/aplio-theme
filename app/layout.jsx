import '@/styles/theme.css'
import { DEFAULT_LOCALE, LOCALE_HEADER, isValidLocale } from '@/lib/i18n/config'
import { getSiteUrl } from '@/lib/site-url'
import { cn } from '@/utils/cn'
import { ThemeModeProvider } from '@/utils/ThemeModeProvider'
import { Inter, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { cookies, headers } from 'next/headers'
import PropTypes from 'prop-types'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const jakarta_sans = Plus_Jakarta_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})
const playfair = Playfair_Display({
  weight: ['600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'BeyondPartners',
    template: '%s | BeyondPartners',
  },
  description:
    "BeyondPartners accompagne les organisations dans l'adoption de l'intelligence artificielle : formation, intégration et stratégie.",
}

export default async function RootLayout({ children }) {
  const headersList = await headers()
  const cookieStore = await cookies()
  const fromHeader = headersList.get(LOCALE_HEADER)
  const fromCookie = cookieStore.get('bp_lang')?.value
  const locale = isValidLocale(fromHeader) ? fromHeader : isValidLocale(fromCookie) ? fromCookie : DEFAULT_LOCALE
  const lang = locale === 'en' ? 'en' : 'fr'

  return (
    <html lang={lang}>
      <body
        className={cn(
          'dark:bg-dark-300 relative overflow-x-hidden bg-white text-base antialiased',
          inter.variable,
          jakarta_sans.variable,
          playfair.variable,
        )}>
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node,
}
