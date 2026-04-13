import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "edunexservices.in";

/**
 * Single-hop 301 to https://edunexservices.in (non-www, HTTPS).
 * Skips local dev and Vercel preview (*.vercel.app) hosts.
 */
export function middleware(request: NextRequest) {
  const rawHost = request.headers.get("host")?.split(":")[0]?.toLowerCase() ?? "";
  const proto = request.headers.get("x-forwarded-proto") ?? "https";

  const isPreviewOrLocal =
    rawHost === "localhost" ||
    rawHost.startsWith("127.0.0.1") ||
    rawHost.endsWith(".vercel.app");

  if (isPreviewOrLocal) {
    return NextResponse.next();
  }

  const needsRedirect =
    rawHost === `www.${CANONICAL_HOST}` || proto === "http";

  if (!needsRedirect) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = CANONICAL_HOST;
  url.port = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)",
  ],
};
