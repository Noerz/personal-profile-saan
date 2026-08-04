import type { Metadata } from "next";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Berita & Artikel — Saan Mustofa",
  description:
    "Tetap terupdate dengan wawasan terbaru, perkembangan kebijakan, dan inisiatif komunitas dari Saan Mustofa.",
};

export default function ArticlesPage() {
  return <ArticlesClient />;
}
