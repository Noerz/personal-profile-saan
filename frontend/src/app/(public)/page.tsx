import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Beranda — Saan Mustofa",
  description:
    "Dedikasi tanpa henti untuk memajukan kesejahteraan rakyat. Bersama-sama, kita wujudkan visi pembangunan yang inklusif, transparan, dan berkelanjutan.",
};

export default function HomePage() {
  return <HomeClient />;
}
