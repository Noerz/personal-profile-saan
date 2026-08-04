import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri — Saan Mustofa",
  description:
    "Momen dalam Gerak — Dokumentasi visual perjalanan komunitas, tonggak legislatif, dan komitmen layanan publik.",
};

const categories = [
  { id: "all", label: "Semua" },
  { id: "events", label: "Kegiatan" },
  { id: "programs", label: "Program" },
  { id: "community", label: "Komunitas" },
];

// Gallery items — mix of different sizes
const galleryItems = [
  { id: 1, src: "/article-featured.png", alt: "Reses DPRD Karawang", category: "events", tall: false },
  { id: 2, src: "/community.png", alt: "Bantuan alat pertanian", category: "programs", tall: false },
  { id: 3, src: "/community.png", alt: "Gedung kabupaten", category: "events", tall: false },
  { id: 4, src: "/article-featured.png", alt: "Reses DPRD 2026", category: "events", tall: false },
  { id: 5, src: "/community.png", alt: "Anak sekolah", category: "community", tall: false },
  { id: 6, src: "/community.png", alt: "Anak-anak Afrika", category: "community", tall: false },
  { id: 7, src: "/article-featured.png", alt: "Logo Kabupaten Karawang", category: "events", tall: false },
  { id: 8, src: "/article-featured.png", alt: "Profil dan Sejarah Desa", category: "community", tall: false },
  { id: 9, src: "/community.png", alt: "Santunan keluarga", category: "programs", tall: false },
  { id: 10, src: "/community.png", alt: "Anak-anak bermain", category: "community", tall: false },
  { id: 11, src: "/gallery-1.png", alt: "Kegiatan komunitas merah", category: "events", tall: false },
  { id: 12, src: "/gallery-1.png", alt: "Pertunjukan budaya", category: "events", tall: false },
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Momen dalam Gerak
        </h1>
        <p className="mt-2 max-w-lg text-sm text-gray-500">
          Perjalanan visual yang mendokumentasikan keterlibatan komunitas, tonggak legislatif, dan komitmen berkelanjutan terhadap pelayanan publik yang visioner.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat, i) => (
          <button
            key={cat.id}
            id={`gallery-cat-${cat.id}`}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              i === 0
                ? "bg-gray-900 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={item.id % 3 === 0 ? 240 : 200}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-10 flex justify-center">
        <button
          id="gallery-load-more"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-colors"
        >
          Muat Lebih Banyak
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
}
