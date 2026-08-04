"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { ROUTES } from "@/shared/config/routes";

const navLinks = [
  { href: ROUTES.HOME, label: "Beranda", exact: true },
  { href: ROUTES.PROFILE, label: "Profil" },
  { href: ROUTES.PROGRAMS, label: "Program" },
  { href: ROUTES.ARTICLES, label: "Artikel" },
  { href: ROUTES.GALLERY, label: "Galeri" },
  { href: ROUTES.CONTACT, label: "Kontak" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link
          href={ROUTES.HOME}
          className="text-lg font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
        >
          Saan Mustofa
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href, link.exact);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gray-900" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href={ROUTES.ASPIRATIONS}
            className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition-colors"
          >
            Aspirasi
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav
          className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={ROUTES.ASPIRATIONS}
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Aspirasi
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
