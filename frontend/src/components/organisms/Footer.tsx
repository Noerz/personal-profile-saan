import Link from "next/link";
import { Globe, GitBranch, ExternalLink } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";

const socialLinks = [
  { href: "https://github.com", icon: GitBranch, label: "GitHub" },
  { href: "https://linkedin.com", icon: Globe, label: "LinkedIn" },
  { href: "https://twitter.com", icon: ExternalLink, label: "Twitter" },
];

const footerLinks = [
  { href: ROUTES.HOME, label: "Home" },
  { href: ROUTES.ABOUT, label: "About" },
  { href: ROUTES.CONTACT, label: "Contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-slate-700/60 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="text-sm font-semibold text-white">Saan Dev</span>
          </div>

          {/* Nav Links */}
          <nav className="flex items-center gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: IconComp, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <IconComp size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700/50 pt-6 text-center">
          <p className="text-xs text-slate-500">
            © {currentYear} Saan Dev. Built with Next.js & ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
