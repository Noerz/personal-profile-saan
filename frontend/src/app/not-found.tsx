import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { Heading, Text } from "@/components/atoms";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <p className="mb-4 text-8xl font-black text-indigo-500/30">404</p>
      <Heading as="h1" variant="title" className="mb-3">
        Page Not Found
      </Heading>
      <Text variant="muted" className="mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>
      <Link
        href={ROUTES.HOME}
        id="back-home-btn"
        className="inline-flex items-center h-10 px-4 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-150 text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}
