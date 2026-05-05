import { NextResponse } from 'next/server'

import {
  COOKIE_MAX_AGE,
  COOKIE_NAME,
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_HEADER,
  isValidLocale,
  localeFromCountry,
} from './lib/i18n/config'

/**
 * @param {string} pathname
 */
function pathnameHasLocale(pathname) {
  const seg = pathname.split('/')[1]
  return LOCALES.includes(seg)
}

/**
 * @param {import('next/server').NextRequest} request
 */
function preferredLocaleFromCookieOrGeo(request) {
  const raw = request.cookies.get(COOKIE_NAME)?.value
  if (isValidLocale(raw)) return raw
  const country = request.headers.get('x-vercel-ip-country') || ''
  if (!country) return DEFAULT_LOCALE
  return localeFromCountry(country)
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.[a-zA-Z0-9]+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  if (pathname === '/hcnwo' || pathname.startsWith('/hcnwo/')) {
    return NextResponse.next()
  }

  if (pathnameHasLocale(pathname)) {
    const locale = /** @type {'fr' | 'en'} */ (pathname.split('/')[1])
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set(LOCALE_HEADER, locale)

    const res = NextResponse.next({
      request: { headers: requestHeaders },
    })

    const current = request.cookies.get(COOKIE_NAME)?.value
    if (current !== locale) {
      res.cookies.set(COOKIE_NAME, locale, {
        path: '/',
        maxAge: COOKIE_MAX_AGE,
        sameSite: 'lax',
      })
    }
    return res
  }

  const preferred = preferredLocaleFromCookieOrGeo(request)
  const suffix = pathname === '/' ? '' : pathname
  const url = request.nextUrl.clone()
  url.pathname = `/${preferred}${suffix}`
  url.search = search

  const res = NextResponse.redirect(url)
  res.cookies.set(COOKIE_NAME, preferred, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  })
  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
}
