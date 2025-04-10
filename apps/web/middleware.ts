import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { LOGIN_PATH_URL, pathnameMatches, ROUTE_CONFIGS } from './route-config';
import { getAuthToken, verifyAuthToken } from './lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Find matching route configuration
  const routeConfig = ROUTE_CONFIGS.find((config) =>
    Array.isArray(config.matcher)
      ? config.matcher.some((pattern) => pathnameMatches(pattern, pathname))
      : pathnameMatches(config.matcher, pathname)
  );

  // Public routes don't require authentication
  if (routeConfig?.public) {
    return NextResponse.next();
  }

  // Get authentication token (flexible for cookies or headers)
  const authToken = getAuthToken(request);

  // Verify authentication
  const { isAuthenticated, user } = await verifyAuthToken(authToken);

  if (!isAuthenticated) {
    // Redirect to login or return 401 based on route
    if (pathname.startsWith('/api')) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Build callback URL with query params
    let callbackUrl = pathname;
    if (request.nextUrl.search) {
      callbackUrl += request.nextUrl.search;
    }

    // Create login URL with encoded callback
    const loginUrl = new URL(LOGIN_PATH_URL, request.url);
    loginUrl.searchParams.set('callbackUrl', encodeURIComponent(callbackUrl));

    return NextResponse.redirect(loginUrl);
  }

  // Check roles if required by route
  if (routeConfig?.roles && routeConfig.roles.length > 0) {
    const hasRequiredRole = routeConfig.roles.some((role) => user?.roles?.includes(role));

    if (!hasRequiredRole) {
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // Add user data to request headers for API routes
  if (pathname.startsWith('/api')) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', user?.id || '');
    requestHeaders.set('x-user-roles', user?.roles?.join(',') || '');

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next();
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
