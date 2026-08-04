import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";

export interface SiteLayoutProps {
  children: React.ReactNode;
}

/**
 * SiteLayout template — wraps all public-facing pages.
 * Light theme: white background, dark footer.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
