import Link from "next/link";
import { Phone, Clock, Mail, Globe } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";

const importantLinks = [
  { label: "Kebijakan Privasi", href: "#" },
  { label: "Kebijakan Cookie", href: "#" },
  { label: "Syarat & Ketentuan", href: "#" },
];

const siteLinks = [
  { label: "Beranda", href: ROUTES.HOME },
  { label: "Aspirasi", href: ROUTES.ASPIRATIONS },
  { label: "Profil", href: ROUTES.PROFILE },
  { label: "Kegiatan", href: ROUTES.GALLERY },
  { label: "Berita", href: ROUTES.ARTICLES },
  { label: "Kontak", href: ROUTES.CONTACT },
];

const socialIcons = [
  { label: "Instagram", href: "#", char: "📷" },
  { label: "Facebook", href: "#", char: "📘" },
  { label: "TikTok", href: "#", char: "🎵" },
  { label: "YouTube", href: "#", char: "▶" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1a1f3e] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="mb-3 text-base font-bold leading-snug">
              Website Resmi Saan Mustofa
            </h2>
            <p className="mb-5 text-sm leading-relaxed text-gray-400">
              Website ini dikelola oleh tim saanmustofa.com sebagai bentuk
              catatan perjalanan, kegiatan dan catatan realisasi aspirasi Kang
              Saan Mustofa.
            </p>
            <p className="mb-3 text-xs font-semibold text-gray-300 uppercase tracking-wider">
              Ikon Sosial
            </p>
            <div className="flex items-center gap-3">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  <span aria-hidden>{s.char}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-white">Tautan Penting</h2>
            <ul className="flex flex-col gap-2.5">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-white">Lihat Selengkapnya</h2>
            <ul className="flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 text-sm font-bold text-white">Info Kontak</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#252b55] text-yellow-400">
                  <Phone size={14} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Telepon:</p>
                  <p className="text-sm text-gray-200">0812-8057-6180</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#252b55] text-yellow-400">
                  <Clock size={14} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Jam buka:</p>
                  <p className="text-sm text-gray-200">9AM – 5PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#252b55] text-yellow-400">
                  <Mail size={14} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email:</p>
                  <p className="text-sm text-gray-200">aspirasi@saanmustofa.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#252b55] text-yellow-400">
                  <Globe size={14} />
                </span>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Website:</p>
                  <p className="text-sm text-gray-200">www.saanmustofa.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#252b55] pt-6 text-center">
          <p className="text-xs text-gray-400">
            Copyright © {new Date().getFullYear()} · saanmustofa.com
          </p>
        </div>
      </div>
    </footer>
  );
}
