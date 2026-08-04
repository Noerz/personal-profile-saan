import type { Metadata } from "next";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Aspirasi — Saan Mustofa",
  description:
    "Sampaikan gagasan, keluhan, atau harapan Anda secara langsung untuk bersama-sama membangun komunitas yang lebih kuat.",
};
import AspirationsForm from "./AspirationsForm";

const processSteps = [
  {
    num: 1,
    title: "Penerimaan & Verifikasi",
    desc: "Tim kami menerima dan memverifikasi kelengkapan data laporan Anda untuk memastikan validitas.",
  },
  {
    num: 2,
    title: "Klasifikasi Isu",
    desc: "Aspirasi diklasifikasikan ke divisi terkait (Infrastruktur, Sosial, Kesehatan, dll) untuk dianalisis.",
  },
  {
    num: 3,
    title: "Tindak Lanjut & Evaluasi",
    desc: "Penyusunan saran atau rekomendasi kebijakan yang akan disampaikan kembali kepada Anda.",
  },
];

export default function AspirationsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-white pt-16 pb-10 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Suara Anda, Masa Depan Kita
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-500">
            Setiap aspirasi adalah pondasi bagi kebijakan yang lebih baik.
            Sampaikan gagasan, keluhan, atau harapan Anda secara langsung untuk
            bersama-sama membangun komunitas yang lebih kuat.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="mx-auto max-w-6xl px-4 py-10 pb-24 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
          <AspirationsForm />

          {/* Right: Sidebar */}
          <div className="flex w-full flex-col gap-5 lg:w-80">
            {/* Process Steps */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <h2 className="mb-5 text-base font-bold text-gray-900">
                Proses Tindak Lanjut
              </h2>
              <div className="flex flex-col gap-5">
                {processSteps.map((step) => (
                  <div key={step.num} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-gray-900">
                      {step.num}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {step.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Urgent Help */}
            <div className="rounded-2xl bg-[#1a1f3e] p-6 text-white">
              <h2 className="mb-2 text-base font-bold">Butuh Bantuan Mendesak?</h2>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">
                Untuk hal-hal yang bersifat darurat atau memerlukan penanganan
                segera, silakan hubungi Hotline Center kami.
              </p>
              <a
                href="tel:08001234567"
                id="urgent-call-btn"
                className="inline-flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2.5 text-sm font-semibold text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                <Phone size={15} />
                0800-123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
