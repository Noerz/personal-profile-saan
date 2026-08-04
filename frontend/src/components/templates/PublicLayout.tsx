import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export interface PublicLayoutProps {
  children: React.ReactNode;
  user?: { name: string; avatarUrl?: string; role?: string } | null;
}

/**
 * PublicLayout template — wraps all public-facing pages.
 * Includes sticky Header and Footer.
 */
export function PublicLayout({ children, user }: PublicLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Header user={user} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
