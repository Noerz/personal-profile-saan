import { SiteLayout } from "@/components/templates/SiteLayout";

export default function PublicGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SiteLayout>{children}</SiteLayout>;
}
