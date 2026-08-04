"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, ChevronLeft, ChevronRight, FileX } from "lucide-react";

const categories = [
  { id: "all", label: "Semua Topik" },
  { id: "policy", label: "Kebijakan" },
  { id: "community", label: "Komunitas" },
  { id: "economy", label: "Ekonomi" },
  { id: "education", label: "Pendidikan" },
];

const recentArticlesData = [
  {
    id: "2",
    categoryId: "community",
    category: "Komunitas",
    categoryColor: "bg-yellow-100 text-yellow-700",
    date: "20 Okt 2024",
    readTime: "4 mnt baca",
    title: "Memberdayakan Pengusaha Lokal Melalui...",
    excerpt:
      "Membahas dampak program hibah mikro yang baru diluncurkan untuk mendukung pemilik usaha kecil dan merangsang...",
    image: "/community.png",
  },
  {
    id: "3",
    categoryId: "education",
    category: "Pendidikan",
    categoryColor: "bg-blue-100 text-blue-700",
    date: "19 Okt 2024",
    readTime: "5 mnt baca",
    title: "Memodernisasi Sekolah Pedesaan: Langkah Menuju Kesetaraan Pendidikan",
    excerpt:
      "Gambaran umum tentang proyek yang sedang berlangsung untuk melengkapi fasilitas pendidikan terpencil dengan infrastruktur digital...",
    image: "/community.png",
  },
  {
    id: "4",
    categoryId: "policy",
    category: "Kebijakan",
    categoryColor: "bg-gray-100 text-gray-700",
    date: "16 Okt 2024",
    readTime: "3 mnt baca",
    title: "Tinjauan Legislasi: Reformasi Aksesibilitas Layanan Kesehatan",
    excerpt:
      "Rincian mendalam tentang usulan amandemen yang ditujukan untuk meningkatkan aksesibilitas perawatan kesehatan bagi demografi rentan...",
    image: null,
  },
];

export default function ArticlesClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredArticles = useMemo(() => {
    return recentArticlesData.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "all" || article.categoryId === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Berita &amp; Artikel Terbaru
          </h1>
          <p className="mt-2 max-w-md text-sm text-gray-500">
            Dapatkan kabar terbaru mengenai wawasan, perkembangan kebijakan, dan inisiatif komunitas dari Saan Mustofa.
          </p>
        </div>
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            aria-hidden
          />
          <input
            type="search"
            placeholder="Cari artikel..."
            id="articles-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            id={`category-${cat.id}`}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat.id
                ? "bg-gray-900 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured Article - only show if no search/filter applied for now, or keep it always. Let's keep it if 'all' is selected and search is empty */}
      {activeCategory === "all" && !searchQuery && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 shadow-sm animate-in fade-in duration-500">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full overflow-hidden md:w-[40%]">
              <Image
                src="/article-featured.png"
                alt="Featured article"
                width={480}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col justify-center p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-yellow-400 px-3 py-0.5 text-xs font-bold text-gray-900">
                  Unggulan
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={12} /> 24 Okt 2024
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-400">
                  <Clock size={12} /> 5 mnt baca
                </span>
              </div>
              <h2 className="text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl">
                Mendorong Pembangunan Berkelanjutan di Infrastruktur Daerah
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Pandangan komprehensif mengenai kebijakan baru yang bertujuan memperkuat ekonomi lokal melalui investasi infrastruktur strategis yang mengutamakan keberlanjutan lingkungan dan...
              </p>
              <Link
                href="/articles/1"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
              >
                Baca Selengkapnya <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent Publications */}
      <div className="mt-14">
        <h2 className="mb-6 text-xl font-bold text-gray-900">
          Publikasi Terbaru
        </h2>
        
        {filteredArticles.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {/* Article Image */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-50">
                      <div className="h-12 w-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-300">
                        📰
                      </div>
                    </div>
                  )}
                </div>
                {/* Article Info */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/articles/${article.id}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                  >
                    Baca Selengkapnya <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-gray-200 rounded-2xl bg-gray-50">
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-100 text-gray-400">
              <FileX size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Artikel Tidak Ditemukan</h3>
            <p className="mt-2 text-sm text-gray-500 max-w-sm">
              Maaf, kami tidak dapat menemukan artikel yang sesuai dengan kriteria pencarian Anda. Coba kata kunci atau kategori lain.
            </p>
            <button 
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-6 px-6 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredArticles.length > 0 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft size={16} />
          </button>
          {[1].map((p) => (
            <button
              key={p}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                p === 1
                  ? "bg-gray-900 text-white"
                  : "border border-gray-200 text-gray-600 hover:border-gray-400"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-gray-400 transition-colors"
            aria-label="Halaman berikutnya"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
