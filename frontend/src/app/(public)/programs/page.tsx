import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Programs — Saan Mustofa",
  description:
    "Explore the initiatives designed to empower communities, enhance infrastructure, and foster sustainable growth across our region.",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
