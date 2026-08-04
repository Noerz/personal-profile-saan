"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Avatar, Badge } from "@/components/atoms";
import { NavItem } from "@/components/molecules";
import { ROUTES } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";

const navLinks = [
  { href: ROUTES.HOME, label: "Home", exact: true },
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.CONTACT, label: "Contact" },
];

export interface HeaderProps {
  /** Pass user data if authenticated */
  user?: { name: string; avatarUrl?: string; role?: string } | null;
}

export function Header({ user }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-700/60 bg-slate-900/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
            Saan Dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavItem key={link.href} {...link} />
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {user.role === "admin" && (
                <Badge variant="admin" dot>Admin</Badge>
              )}
              <Link href={user.role === "admin" ? ROUTES.ADMIN_DASHBOARD : ROUTES.PROFILE}>
                <Avatar name={user.name} src={user.avatarUrl} size="sm" />
              </Link>
            </div>
          ) : (
            <>
              <Link
                href={ROUTES.LOGIN}
                className="inline-flex items-center h-8 px-3 text-sm rounded-md font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
              >
                Login
              </Link>
              <Link
                href={ROUTES.REGISTER}
                className="inline-flex items-center h-8 px-3 text-sm rounded-md font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className={cn(
            "md:hidden border-t border-slate-700/60 bg-slate-900 px-4 pb-4 pt-2"
          )}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                {...link}
                onClick={() => setMobileOpen(false)}
              />
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-700 pt-3">
              {user ? (
                <div className="flex items-center gap-3 px-3 py-2">
                  <Avatar name={user.name} src={user.avatarUrl} size="sm" />
                  <span className="text-sm text-slate-300">{user.name}</span>
                </div>
              ) : (
                <>
                  <Link
                    href={ROUTES.LOGIN}
                    className="rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href={ROUTES.REGISTER}
                    className="rounded-lg bg-indigo-600 px-3 py-2.5 text-center text-sm text-white hover:bg-indigo-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
