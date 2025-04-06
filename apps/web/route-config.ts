interface RouteConfig {
  matcher: string | string[];
  public?: boolean;
  roles?: string[];
}

export const ROUTE_CONFIGS: RouteConfig[] = [
  {
    matcher: ["/", "/api/auth/:path*", "/auth/:path*"],
    public: true,
  },
  {
    matcher: "/api/admin/:path*",
    roles: ["admin"],
  },
];

// Helper function to match paths with wildcards
export function pathnameMatches(pattern: string, pathname: string): boolean {
  if (pattern === pathname) return true;
  if (
    pattern.endsWith(":path*") &&
    pathname.startsWith(pattern.replace(":path*", ""))
  ) {
    return true;
  }
  return false;
}
