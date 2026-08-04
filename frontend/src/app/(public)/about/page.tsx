import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Tentang — Saan Mustofa",
  description: "Pelajari lebih lanjut tentang Saan, visi, pengalaman, dan dedikasinya untuk masyarakat.",
};

export default function AboutPage() {
  return <AboutClient />;
}
