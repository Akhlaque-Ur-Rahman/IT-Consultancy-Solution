import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Ensure HTTP redirects to HTTPS
  if (
    request.headers.get("x-forwarded-proto") === "http" &&
    !request.nextUrl.hostname.includes("localhost")
  ) {
    return NextResponse.redirect(
      `https://${request.nextUrl.hostname}${request.nextUrl.pathname}${request.nextUrl.search}`,
      308
    );
  }

  const response = NextResponse.next();

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin');
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.google.com https://*.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https://edunexservices.in; connect-src 'self' https://*.google.com https://api.web3forms.com ws: wss:; frame-src 'self' https://www.google.com https://maps.google.com;"
  );
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  return response;
}

// Fallback default export for standard Next.js behavior
export default middleware;

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|ws|favicon.ico|logo.jpg).*)',
  ],
};
