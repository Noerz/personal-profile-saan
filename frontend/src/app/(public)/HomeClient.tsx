"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User, FileText, MessageSquare, Newspaper, Quote, ChevronRight } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";
import { StatsChart } from "@/components/molecules/StatsChart";
import { motion } from "framer-motion";

const shortcuts = [
  { icon: User, label: "Profil Legislator", desc: "Informasi lengkap tentang profil dan visi misi.", href: ROUTES.PROFILE },
  { icon: FileText, label: "Program Kerja", desc: "Berbagai program yang telah dan akan direalisasikan.", href: ROUTES.PROGRAMS },
  { icon: MessageSquare, label: "Sampaikan Aspirasi", desc: "Mari bangun daerah dengan menyampaikan masukan Anda.", href: ROUTES.ASPIRATIONS },
  { icon: Newspaper, label: "Berita & Kegiatan", desc: "Kabar terbaru dan agenda kegiatan lapangan.", href: ROUTES.ARTICLES },
];

const testimonials = [
  { name: "Budi Santoso", role: "Warga Karawang Barat", text: "Sangat mudah menyampaikan aspirasi sekarang. Program rumah layak huni benar-benar terasa manfaatnya bagi warga kami." },
  { name: "Siti Aminah", role: "Guru Honorer", text: "Bantuan beasiswa PIP sangat membantu murid-murid di sekolah kami yang kurang mampu untuk terus belajar." },
  { name: "Ahmad Riyadi", role: "Ketua RT", text: "Infrastruktur jalan di desa kami sekarang jauh lebih baik berkat dorongan dan kawalan dari Bapak Saan Mustofa." },
];

const fadeIn = {
  hidden: { opacity: 1, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerHero = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const staggerSection = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function HomeClient() {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">
      {/* ── HERO CAROUSEL / BANNER ───────────────────────────── */}
      <section 
        className="relative flex min-h-[85vh] w-full items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden" 
        style={{ backgroundImage: "url('/city-bg.jpg')" }}
      >
        {/* Overlay gradient untuk readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerHero}
          className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6"
        >
          <motion.span variants={fadeIn} className="mb-4 inline-block rounded-full bg-yellow-500/20 border border-yellow-400/50 px-5 py-2 text-xs sm:text-sm font-bold tracking-widest text-yellow-400 uppercase backdrop-blur-md shadow-sm">
            Melayani dengan Hati, Membangun untuk Negeri
          </motion.span>
          <motion.h1 variants={fadeIn} className="mt-4 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-[4.5rem] tracking-tight drop-shadow-2xl">
            Saan Mustofa, M.Si.
          </motion.h1>
          <motion.p variants={fadeIn} className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 sm:text-xl font-medium leading-relaxed drop-shadow-md">
            Wakil Ketua DPR RI periode 2024-2029. Dedikasi tanpa henti untuk memajukan kesejahteraan rakyat, mendorong pembangunan industri, dan mewujudkan kebijakan yang inklusif serta berkelanjutan.
          </motion.p>
          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={ROUTES.PROGRAMS}
              className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-base font-bold text-slate-900 transition-all hover:bg-yellow-400 hover:scale-105 shadow-xl"
            >
              Lihat Program
              <ChevronRight size={18} />
            </Link>
            <Link
              href={ROUTES.ASPIRATIONS}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-md px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/20 hover:scale-105 shadow-xl"
            >
              Sampaikan Aspirasi
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SHORTCUT MENU (QUICK LINKS) ──────────────────────── */}
      <section className="relative z-20 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerSection}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {shortcuts.map((item, idx) => (
            <motion.div key={idx} variants={fadeIn}>
              <Link href={item.href} className="group h-full flex flex-col items-center rounded-3xl bg-white p-8 text-center shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border border-slate-100">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3">
                  <item.icon size={32} />
                </div>
                <h2 className="mb-2 text-xl font-bold text-slate-900">{item.label}</h2>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SAMBUTAN (WELCOME MESSAGE) ───────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerSection}
          className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24"
        >
          <motion.div variants={fadeIn} className="relative w-full max-w-md shrink-0 lg:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl z-10 border-8 border-white">
              <Image
                src="/hero.png"
                alt="Saan Mustofa"
                fill
                priority={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative blocks */}
            <div className="absolute -bottom-8 -left-8 z-0 h-64 w-64 rounded-3xl bg-blue-600/10 border border-blue-600/20 backdrop-blur-3xl"></div>
            <div className="absolute -top-8 -right-8 z-0 h-40 w-40 rounded-full bg-yellow-400/20 blur-2xl"></div>
          </motion.div>
          
          <div className="flex-1 lg:w-1/2">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
              Sambutan & Harapan
            </p>
            <motion.h2 variants={fadeIn} className="mb-8 text-4xl font-extrabold text-slate-900 sm:text-5xl leading-tight">
              Bersama Membangun Daerah
            </motion.h2>
            <motion.div variants={fadeIn} className="mb-10 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                <strong>Assalamualaikum Warahmatullahi Wabarakatuh,</strong>
              </p>
              <p>
                Puji syukur kita panjatkan ke hadirat Allah SWT. Kehadiran website ini merupakan wujud nyata komitmen kami untuk membawa pelayanan dan transparansi ke tingkat yang lebih baik. Kami percaya bahwa komunikasi yang terbuka adalah kunci dari pembangunan yang inklusif.
              </p>
              <p>
                Melalui platform ini, kami mengajak seluruh elemen masyarakat untuk berpartisipasi aktif. Sampaikan aspirasi, pantau program kerja, dan mari kita bahu-membahu mewujudkan daerah yang maju, adil, dan sejahtera untuk semua.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="border-l-4 border-yellow-400 pl-6">
              <p className="font-serif text-3xl font-bold italic text-slate-900 mb-2">Saan Mustofa, M.Si.</p>
              <p className="text-slate-500 font-medium">Wakil Ketua DPR RI</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── INFOGRAFIS PENCAPAIAN (STATS) ────────────────────── */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[500px] w-[500px] rounded-full bg-yellow-500/20 blur-[100px]"></div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerSection}
          className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10"
        >
          <motion.div variants={fadeIn} className="mb-16 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-yellow-500">
              Desa Dalam Angka
            </p>
            <h2 className="text-4xl font-bold sm:text-5xl text-white">
              Infografis Kinerja
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Visualisasi nyata hasil kerja keras untuk masyarakat Karawang.
            </p>
          </motion.div>
          
          <div className="grid gap-10 lg:grid-cols-12 items-center">
            {/* Stats Summary Cards */}
            <div className="flex flex-col gap-6 lg:col-span-4">
              <motion.div variants={fadeIn} className="flex items-center gap-6 rounded-3xl bg-white/5 p-6 border border-white/10 backdrop-blur-md shadow-2xl transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                  <MessageSquare size={28} />
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">1,240+</div>
                  <div className="text-sm font-medium text-slate-400">Aspirasi Teralisasi</div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-6 rounded-3xl bg-white/5 p-6 border border-white/10 backdrop-blur-md shadow-2xl transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                  <FileText size={28} />
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">450+</div>
                  <div className="text-sm font-medium text-slate-400">Rumah Layak Huni</div>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="flex items-center gap-6 rounded-3xl bg-white/5 p-6 border border-white/10 backdrop-blur-md shadow-2xl transition-transform hover:scale-105">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
                  <User size={28} />
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-white mb-1">3,200+</div>
                  <div className="text-sm font-medium text-slate-400">Penerima Beasiswa</div>
                </div>
              </motion.div>
            </div>
            
            {/* Stats Chart */}
            <motion.div variants={fadeIn} className="lg:col-span-8 rounded-3xl bg-slate-800/50 p-8 shadow-2xl border border-white/10 backdrop-blur-md flex items-center justify-center min-h-[450px]">
              <div className="w-full h-full">
                <StatsChart />
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={fadeIn} className="mt-16 text-center">
             <Link
                href={ROUTES.PROGRAMS}
                className="inline-flex items-center rounded-full border border-slate-500 bg-slate-800/50 px-10 py-4 text-sm font-bold text-white hover:bg-white hover:text-slate-900 transition-all shadow-lg"
              >
                Lihat Selengkapnya Data Program
              </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CERITA WARGA (TESTIMONIALS) ──────────────────────── */}
      <section className="py-32">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerSection}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeIn} className="mb-20 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-blue-600">
              Cerita Warga
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
              Apa Kata Mereka?
            </h2>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
              Dengar langsung pengalaman masyarakat tentang program yang telah berjalan.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div variants={fadeIn} key={i} className="group relative rounded-3xl bg-white p-10 shadow-lg border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-2xl">
                <Quote className="absolute right-8 top-8 h-16 w-16 text-slate-50 transition-colors group-hover:text-blue-50" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <p className="mb-10 text-slate-600 italic leading-relaxed text-lg">
                    &quot;{t.text}&quot;
                  </p>
                  <div className="flex items-center gap-5 mt-auto">
                    <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-extrabold text-blue-600">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{t.name}</h3>
                      <p className="text-sm font-medium text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeIn}
          className="relative flex flex-col items-center justify-between gap-10 rounded-[2.5rem] bg-blue-600 px-10 py-16 sm:flex-row sm:px-16 shadow-2xl overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="max-w-2xl text-white relative z-10">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              Suara Anda Adalah Prioritas Kami
            </h2>
            <p className="text-blue-100 text-xl font-medium">
              Mari bersama membangun daerah dengan menyampaikan aspirasi, kritik, dan saran Anda secara langsung.
            </p>
          </div>
          <Link
            href={ROUTES.ASPIRATIONS}
            className="relative z-10 inline-flex shrink-0 items-center gap-3 rounded-full bg-yellow-400 px-10 py-5 text-lg font-bold text-slate-900 hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
          >
            Sampaikan Aspirasi
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
