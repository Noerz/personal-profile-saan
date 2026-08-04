import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontak — Saan Mustofa",
  description:
    "Hubungi kami. Kami menyambut pemikiran, aspirasi, dan pertanyaan Anda.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Hubungi Kami
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            Kami menyambut pemikiran, aspirasi, dan pertanyaan Anda. Hubungi kantor kami untuk terhubung dengan tim Saan Mustofa.
          </p>
        </div>
      </section>

      {/* Info + Form */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left: Info Card */}
          <div className="flex flex-col gap-4 lg:w-64">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              {/* Address */}
              <div className="flex items-start gap-3 mb-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <MapPin size={15} className="text-gray-600" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Alamat Kantor
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    Jl. Siliwangi No. 123,
                    <br />
                    Karawang Barat, Karawang,
                    <br />
                    Jawa Barat, 41311
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-3 mb-5">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Phone size={15} className="text-gray-600" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Telepon</p>
                  <p className="mt-1 text-xs text-gray-500">+62 267 1234567</p>
                  <p className="text-xs text-gray-500">(Sen-Jum, 09:00 - 17:00)</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100">
                  <Mail size={15} className="text-gray-600" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <p className="mt-1 text-xs text-gray-500">
                    aspiras@saanmustofa.id
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="mb-3 text-sm font-semibold text-gray-900">
                Terhubung Melalui Media Sosial
              </p>
              <div className="flex items-center gap-3">
                {["📷", "🌐", "#"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={`Media sosial ${i + 1}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-sm text-gray-500 hover:border-gray-400 hover:text-gray-900 transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31695.45498064023!2d107.2780965!3d-6.3190917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69869d39c3daf7%3A0x4b5a30f5f6de30b2!2sKarawang%20Barat%2C%20Kabupaten%20Karawang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Kantor"
          />
        </div>
      </section>
    </div>
  );
}
