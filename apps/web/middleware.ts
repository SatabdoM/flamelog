import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { LOGIN_PATH_URL, pathnameMatches, ROUTE_CONFIGS } from './route-config';
import { verifyAuth } from './lib/services/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verify authentication
  // Here, we can use authAction.getMe to get the user but here it's better to use fetch instead of axios because we're getting some error with axios here, and generally fetch is recommended with next js server side
  const { user, newAccessToken } = await verifyAuth(request);

  // Create a response object we can modify
  let response: NextResponse;

  // If a new accessToken was generated, set it in the response
  if (newAccessToken) {
    response = NextResponse.next(); // Default response (can be overridden later)
    response.cookies.set('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60, // 15 minutes
      sameSite: 'lax',
      path: '/',
    });
  } else {
    response = NextResponse.next(); // Default response if no new token
  }

  // Handle authenticated users
  if (user) {
    // Redirect authenticated users away from auth routes
    if (pathname.startsWith('/auth')) {
      response = NextResponse.redirect(new URL('/feed', request.url));
    }
    // Redirect authenticated users from home to feed
    else if (pathname === '/') {
      response = NextResponse.redirect(new URL('/feed', request.url));
    }
  }

  // Public routes don't require authentication
  const routeConfig = ROUTE_CONFIGS.find((config) =>
    Array.isArray(config.matcher)
      ? config.matcher.some((pattern) => pathnameMatches(pattern, pathname))
      : pathnameMatches(config.matcher, pathname)
  );

  if (routeConfig?.public) {
    return response; // Return the response (with new cookie if applicable)
  }

  if (!user) {
    // Build callback URL with query params
    let callbackUrl = pathname;
    if (request.nextUrl.search) {
      callbackUrl += request.nextUrl.search;
    }

    // Create login URL with encoded callback
    const loginUrl = new URL(LOGIN_PATH_URL, request.url);
    loginUrl.searchParams.set('callbackUrl', encodeURIComponent(callbackUrl));

    response = NextResponse.redirect(loginUrl);
  }

  // Check roles if required by route
  if (routeConfig?.roles && routeConfig.roles.length > 0) {
    const hasRequiredRole = routeConfig.roles.some((role) => user?.roles?.includes(role));
    if (!hasRequiredRole) {
      response = new NextResponse('Forbidden', { status: 403 });
    }
  }

  return response; // Final response (with new cookie if applicable)
}

// Config for the middleware - can be adjusted based on needs
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
