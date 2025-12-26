import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ['de', 'en'];
const defaultLocale = 'en';

// Get the preferred locale from the request headers
function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  
  if (!acceptLanguage) return defaultLocale;
  
  // Simple check: if header contains 'de', prefer 'de'
  if (acceptLanguage.includes('de')) {
    return 'de';
  }
  
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Handle privacy -> datenschutz redirect
  if (pathname === '/privacy') {
    const locale = getLocale(request);
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/datenschutz`;
    return NextResponse.redirect(url);
  }
  
  // Handle terms redirect if needed (though we created a page for it)
  // if (pathname === '/terms') ...

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Preserve query parameters
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json|icon.png|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$).*)',
  ],
};
