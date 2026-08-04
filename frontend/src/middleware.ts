import { type NextRequest, NextResponse } from "next/server";
import { ADMIN_ROUTES, AUTH_ROUTES, PROTECTED_ROUTES } from "@/shared/config/routes";

/**
 * Middleware — Role-based route protection.
 *
 * Strategy (JWT stored in cookie "auth-token"):
 *   1. Admin routes  → require auth + admin role
 *   2. Protected routes → require auth
 *   3. Auth routes (login/register) → redirect to / if already authenticated
 *
 * NOTE: When you implement real auth, parse the JWT here and extract the role.
 * For now, the middleware reads a simple cookie "user-role" and "auth-token".
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Read auth data from cookies (set these on login in your auth API handler)
  const token = request.cookies.get("auth-token")?.value;
  const role = request.cookies.get("user-role")?.value;
  const isAuthenticated = Boolean(token);
  const isAdmin = role === "admin";

  // ── Admin routes guard ──────────────────────────────────────
  const isAdminRoute = ADMIN_ROUTES.some(
    (r) => pathname === r || pathname.startsWith(r + "/")
  );

  if (isAdminRoute) {
    if (!isAuthenticated) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // ── Protected (user) routes guard ──────────────────────────
  const isProtectedRoute = PROTECTED_ROUTES.filter(
    (r) => !ADMIN_ROUTES.includes(r as (typeof ADMIN_ROUTES)[number])
  ).some((r) => pathname === r || pathname.startsWith(r + "/"));

  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // ── Auth routes redirect (already logged in) ────────────────
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname === r || pathname.startsWith(r));

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(
      new URL(isAdmin ? "/admin/dashboard" : "/", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     * - public folder assets
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
