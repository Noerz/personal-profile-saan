"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck, FileX } from "lucide-react";

import { programs } from "./data";

const categories = [
  "Semua Program",
  "Pendidikan",
  "Infrastruktur",
  "Ekonomi",
  "Kesehatan",
];

export default function ProgramsClient() {
  const [activeCategory, setActiveCategory] = useState("Semua Program");

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      if (activeCategory === "Semua Program") return true;
      return p.category === activeCategory.toUpperCase();
    });
  }, [activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Program Unggulan Kami
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
          Jelajahi berbagai inisiatif yang dirancang untuk memberdayakan masyarakat, meningkatkan infrastruktur, dan mendorong pertumbuhan yang berkelanjutan di daerah kita.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            id={`prog-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-gray-900 text-white"
                : "border border-gray-200 bg-white text-gray-600 hover:border-gray-400 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Program Cards Grid */}
      {filteredPrograms.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((p) => (
            <div
              key={p.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-500"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm backdrop-blur-sm">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      p.status === "Berjalan" ? "bg-yellow-400" : "bg-gray-400"
                    }`}
                  />
                  {p.status}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-[11px] font-bold tracking-wider text-yellow-600">
                  {p.category}
                </p>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{p.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  {p.desc}
                </p>

                <div className="mb-6 mt-auto">
                  <p className="mb-3 text-xs font-bold text-gray-900">
                    Tujuan Utama:
                  </p>
                  <ul className="flex flex-col gap-2">
                    {p.objectives.map((obj) => (
                      <li
                        key={obj}
                        className="flex items-start gap-2 text-xs text-gray-500"
                      >
                        <CircleCheck
                          size={14}
                          className="mt-[1px] shrink-0 text-yellow-600 opacity-80"
                        />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/programs/${p.id}`}
                  className="w-full text-center rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  aria-label={`Baca selengkapnya tentang ${p.title}`}
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50 animate-in fade-in duration-300">
          <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-400">
            <FileX size={32} />
          </div>
          <h3 className="text-lg font-bold text-gray-900">Program Tidak Ditemukan</h3>
          <p className="mt-2 text-sm text-gray-500 max-w-sm">
            Maaf, kami belum memiliki program untuk kategori ini.
          </p>
          <button 
            onClick={() => setActiveCategory("Semua Program")}
            className="mt-6 px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Lihat Semua Program
          </button>
        </div>
      )}
    </div>
  );
}
