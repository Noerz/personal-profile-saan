import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Flag,
  Landmark,
  User,
  Users,
  GraduationCap,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Profil — Saan Mustofa",
  description: "Profil Saan Mustofa, M.Si.",
};

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* Breadcrumb and Title */}
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-900">
            Beranda
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-gray-900">Profil</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Profil
        </h1>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Photo */}
          <div className="w-full shrink-0 lg:w-1/3">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-gray-200 shadow-xl border-4 border-white">
              <Image
                src="/hero.png"
                alt="Saan Mustofa"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex w-full flex-col pt-4 lg:w-2/3">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">
              Saan Mustofa, M.Si.
            </h2>
            <h3 className="mb-8 text-xl font-semibold text-blue-600">
              Wakil Ketua DPR RI (2024-2029)
            </h3>

            <div className="mb-10 space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Saan Mustofa lahir di Karawang, Jawa Barat pada 5 Juli 1968. Berawal dari aktivitas pergerakan mahasiswa, beliau pernah menjabat sebagai Ketua PB Himpunan Mahasiswa Islam (HMI). Latar belakang inilah yang membentuk kepeduliannya yang mendalam terhadap masyarakat dan pembangunan daerah.
              </p>
              <p>
                Kini, sebagai Wakil Ketua DPR RI Koordinator Bidang Industri dan Pembangunan (Korinbang) sekaligus Wakil Ketua Umum DPP Partai NasDem, beliau terus mengawal kebijakan-kebijakan progresif, berfokus pada kesejahteraan, transparansi, serta pemberdayaan ekonomi di berbagai lapisan masyarakat.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Vision Card */}
              <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Visi</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Mewujudkan masyarakat yang sejahtera, berkeadilan, dan berpikiran maju di mana setiap individu memiliki kesempatan untuk berkembang melalui pendidikan yang merata dan kebijakan ekonomi berkelanjutan.
                </p>
              </div>

              {/* Mission Card */}
              <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-4 flex items-center gap-3">
                  <Flag className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-xl font-bold text-gray-900">Misi</h3>
                </div>
                <ul className="list-disc space-y-3 pl-5 text-sm text-gray-600">
                  <li>Meningkatkan infrastruktur daerah dan aksesibilitas.</li>
                  <li>Memperjuangkan pemerataan pendidikan.</li>
                  <li>Mendorong tata kelola pemerintahan yang transparan dan bersih.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey (Riwayat Pekerjaan) */}
      <section className="border-y border-gray-200/60 bg-gray-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Riwayat Pekerjaan
            </h2>
            <p className="text-gray-500">
              Perjalanan karir pengabdian politik dan publik.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Vertical Line */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gray-300 md:block"></div>

            <div className="space-y-12">
              {/* Item 1 */}
              <div className="group relative flex flex-col items-center md:flex-row md:justify-between">
                <div className="mb-4 pr-0 md:mb-0 md:w-[45%] md:pr-8 md:text-right">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Wakil Ketua DPR RI
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Menjabat sebagai Wakil Ketua DPR RI Koordinator Bidang Industri dan Pembangunan (Korinbang) untuk periode 2024-2029, mengawal sektor esensial bagi kemajuan nasional.
                  </p>
                </div>
                <div className="absolute left-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-blue-200 bg-white shadow-sm md:flex ring-4 ring-gray-100">
                  <Landmark className="h-4 w-4 text-blue-600" />
                </div>
                <div className="text-center md:w-[45%] md:pl-8 md:text-left">
                  <span className="inline-block rounded-full bg-blue-100 px-5 py-1.5 text-xs font-bold text-blue-800 border border-blue-200">
                    2024 - Sekarang
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="group relative flex flex-col items-center md:flex-row md:justify-between">
                <div className="order-2 mb-4 pr-0 text-center md:order-1 md:mb-0 md:w-[45%] md:pr-8 md:text-right">
                  <span className="inline-block rounded-full bg-gray-200 px-5 py-1.5 text-xs font-bold text-gray-700 border border-gray-300">
                    2016 - Sekarang
                  </span>
                </div>
                <div className="absolute left-1/2 z-10 order-1 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm md:order-2 md:flex">
                  <Users className="h-4 w-4 text-gray-600" />
                </div>
                <div className="order-3 text-center md:w-[45%] md:pl-8 md:text-left">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Ketua DPW Partai NasDem
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Memimpin Dewan Pimpinan Wilayah (DPW) Partai NasDem Provinsi Jawa Barat, serta menjabat sebagai Wakil Ketua Umum DPP Partai NasDem.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="group relative flex flex-col items-center md:flex-row md:justify-between">
                <div className="mb-4 pr-0 text-center md:mb-0 md:w-[45%] md:pr-8 md:text-right">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    Anggota DPR RI
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500">
                    Menjadi wakil rakyat di Senayan, membawa aspirasi masyarakat Jawa Barat ke tingkat nasional dan mendorong berbagai inisiatif legislasi yang prorakyat.
                  </p>
                </div>
                <div className="absolute left-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm md:flex">
                  <User className="h-4 w-4 text-gray-600" />
                </div>
                <div className="text-center md:w-[45%] md:pl-8 md:text-left">
                  <span className="inline-block rounded-full bg-gray-200 px-5 py-1.5 text-xs font-bold text-gray-700 border border-gray-300">
                    2009 - 2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Background (Riwayat Pendidikan) */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Riwayat Pendidikan
          </h2>
          <p className="text-gray-500">
            Latar belakang akademis yang kuat sebagai fondasi pengabdian.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* S3 */}
          <div className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Doktor (S3) Ilmu Politik
            </h3>
            <h4 className="mb-4 text-sm font-semibold text-blue-600">Universitas Padjadjaran</h4>
            <p className="text-sm leading-relaxed text-gray-500">
              Menyelesaikan pendidikan tingkat Doktoral pada tahun 2024, mengukuhkan keilmuan di bidang politik dan tata negara.
            </p>
            <div className="mt-auto pt-6 text-xs font-bold text-gray-400">
              Lulus 2024
            </div>
          </div>

          {/* S2 */}
          <div className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-50 text-yellow-600 transition-colors group-hover:bg-yellow-500 group-hover:text-white">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Magister (S2) Ilmu Politik
            </h3>
            <h4 className="mb-4 text-sm font-semibold text-yellow-600">Universitas Indonesia</h4>
            <p className="text-sm leading-relaxed text-gray-500">
              Mendalami ilmu politik secara komprehensif dari salah satu universitas terbaik di tanah air.
            </p>
            <div className="mt-auto pt-6 text-xs font-bold text-gray-400">
              Lulus 2008
            </div>
          </div>

          {/* S1 */}
          <div className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-700 transition-colors group-hover:bg-gray-800 group-hover:text-white">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              Sarjana (S1) Ilmu Politik & Fisika
            </h3>
            <h4 className="mb-4 text-sm font-semibold text-gray-700">Univ. Indonesia & IKIP Bandung</h4>
            <p className="text-sm leading-relaxed text-gray-500">
              Meraih gelar Sarjana Ilmu Politik dari UI (2004) dan sebelumnya menyelesaikan pendidikan S1 Fisika di IKIP Bandung (1993).
            </p>
            <div className="mt-auto pt-6 text-xs font-bold text-gray-400">
              Lulus 1993 & 2004
            </div>
          </div>
        </div>
      </section>

      {/* In the Field */}
      <section className="bg-[#0f0e0e] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
            <div>
              <h2 className="mb-3 text-3xl font-bold">Turun ke Lapangan</h2>
              <p className="text-gray-400">Momen kedekatan bersama masyarakat Karawang dan sekitarnya.</p>
            </div>
            <Link
              href="/gallery"
              className="mt-6 flex items-center gap-2 font-semibold text-yellow-500 transition-all hover:text-yellow-400 hover:gap-3 md:mt-0"
            >
              Lihat Galeri Lengkap <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="group relative h-72 overflow-hidden rounded-3xl md:h-64 shadow-2xl">
              <Image
                src="/gallery-1.png"
                alt="In the field 1"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative h-72 overflow-hidden rounded-3xl md:h-64 shadow-2xl">
              <Image
                src="/community.png"
                alt="In the field 2"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="group relative h-72 overflow-hidden rounded-3xl md:h-64 shadow-2xl">
              <Image
                src="/article-featured.png"
                alt="In the field 3"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
