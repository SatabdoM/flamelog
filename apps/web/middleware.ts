import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { LOGIN_PATH_URL, pathnameMatches, ROUTE_CONFIGS } from './route-config';
import { User } from './types/user';

async function verifyUser(request: NextRequest) {
  // Get cookies and make headers
  const cookies = request.cookies.getAll();
  const cookieHeader = cookies.map((c) => `${c.name}=${c.value}`).join('; ');
  const accessToken = request.cookies.get('accessToken')?.value;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http:localhost:5001'}/api/auth/me`,
      {
        headers: {
          Cookie: cookieHeader,
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: 'include',
      }
    );

    if (!response.ok) throw new Error('Unauthorized');

    const user: User = await response.json();
    return user;
  } catch (error) {
    console.log('User verification failed');
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verify authentication
  const user = await verifyUser(request);

  // Handle authenticated users
  if (user) {
    // Redirect authenticated users away from auth routes
    if (pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/feed', request.url));
    }

    // Redirect authenticated users from home to feed
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/feed', request.url));
    }
  }

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

  if (!user) {
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
