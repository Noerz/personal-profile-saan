// ============================================================
// Route Config — Centralized route constants
// ============================================================

export const ROUTES = {
  // Public
  HOME: "/",
  ABOUT: "/about",
  PROFILE: "/profile",
  PROGRAMS: "/programs",
  ARTICLES: "/articles",
  GALLERY: "/gallery",
  CONTACT: "/contact",
  ASPIRATIONS: "/aspirations",

  // Auth
  LOGIN: "/login",
  REGISTER: "/register",

  // User (authenticated)
  USER_PROFILE: "/user/profile",
  USER_SETTINGS: "/user/settings",

  // Admin
  ADMIN_DASHBOARD: "/admin/dashboard",
  ADMIN_PROGRAMS: "/admin/programs",
  ADMIN_HOMEPAGE: "/admin/homepage",
  ADMIN_ARTICLES: "/admin/articles",
  ADMIN_ASPIRATIONS: "/admin/aspirations",
  ADMIN_USERS: "/admin/users",
  ADMIN_SETTINGS: "/admin/settings",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

/** Routes that require authentication */
export const PROTECTED_ROUTES = [
  ROUTES.USER_PROFILE,
  ROUTES.USER_SETTINGS,
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.ADMIN_PROGRAMS,
  ROUTES.ADMIN_HOMEPAGE,
  ROUTES.ADMIN_ARTICLES,
  ROUTES.ADMIN_ASPIRATIONS,
  ROUTES.ADMIN_USERS,
  ROUTES.ADMIN_SETTINGS,
];

/** Routes that require admin role */
export const ADMIN_ROUTES = [
  ROUTES.ADMIN_DASHBOARD,
  ROUTES.ADMIN_PROGRAMS,
  ROUTES.ADMIN_HOMEPAGE,
  ROUTES.ADMIN_ARTICLES,
  ROUTES.ADMIN_ASPIRATIONS,
  ROUTES.ADMIN_USERS,
  ROUTES.ADMIN_SETTINGS,
];

/** Public-only routes (redirect to home if already logged in) */
export const AUTH_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];
