import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

export interface AuthLayoutProps {
  children: React.ReactNode;
}

/**
 * AuthLayout template — centered layout for login/register pages.
 * Full-screen gradient background with centered card slot.
 */
export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4">
      {/* Background gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
      </div>

      {/* Logo at top */}
      <Link
        href={ROUTES.HOME}
        className="mb-8 flex items-center gap-2 group"
        aria-label="Go to homepage"
      >
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
          <span className="text-white font-bold">S</span>
        </div>
        <span className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          Saan Dev
        </span>
      </Link>

      {/* Centered card */}
      <div className="relative z-10 w-full max-w-md">{children}</div>

      {/* Footer note */}
      <p className="mt-8 text-xs text-slate-600">
        © {new Date().getFullYear()} Saan Dev. All rights reserved.
      </p>
    </div>
  );
}
