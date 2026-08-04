import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Saan Mustofa",
    default: "Saan Mustofa — Melayani dengan Hati, Membangun untuk Negeri",
  },
  description:
    "Website resmi Saan Mustofa. Dedikasi tanpa henti untuk memajukan kesejahteraan rakyat Karawang.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Saan Mustofa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
