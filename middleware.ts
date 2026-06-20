import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/lib/i18n/config'

const PUBLIC_FILE = /\.[^/]+$/
// File-based metadata routes (no extension) that must NOT be locale-rewritten.
const SPECIAL = ['/opengraph-image', '/apple-icon', '/icon']

function localeOf(pathname: string): { locale: string | null; rest: string } {
  const seg = pathname.split('/')[1] ?? ''
  if ((locales as readonly string[]).includes(seg)) {
    return { locale: seg, rest: pathname.slice(seg.length + 1) || '/' }
  }
  return { locale: null, rest: pathname }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    SPECIAL.some((s) => pathname === s || pathname.startsWith(`${s}/`)) ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const { locale, rest } = localeOf(pathname)

  // English lives at the root: redirect any explicit /en/* to /*.
  if (locale === defaultLocale) {
    const url = request.nextUrl.clone()
    url.pathname = rest
    return NextResponse.redirect(url, 308)
  }

  // Non-default locale: pass through, expose locale + locale-agnostic path.
  if (locale) {
    const headers = new Headers(request.headers)
    headers.set('x-locale', locale)
    headers.set('x-pathname', rest)
    return NextResponse.next({ request: { headers } })
  }

  // No prefix => default locale served from the root URL via internal rewrite.
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`
  const headers = new Headers(request.headers)
  headers.set('x-locale', defaultLocale)
  headers.set('x-pathname', pathname)
  return NextResponse.rewrite(url, { request: { headers } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
