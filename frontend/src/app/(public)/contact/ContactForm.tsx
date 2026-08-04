"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nama lengkap harus diisi"),
  email: z.string().email("Format email tidak valid"),
  subject: z.string().min(1, "Subjek harus dipilih"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "general",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm relative overflow-hidden">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Hubungi Kami</h2>
      
      {/* Success Overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
          <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
          <p className="text-sm text-gray-500">
            Terima kasih telah menghubungi kami. Kami akan merespons pesan Anda secepatnya.
          </p>
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-xs font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="John Doe"
              id="contact-name"
              {...register("name")}
              className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
              }`}
            />
            {errors.name && (
              <span className="text-xs text-red-500 mt-1">{errors.name.message}</span>
            )}
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-medium text-gray-700">
              Alamat Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              id="contact-email"
              {...register("email")}
              className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className="text-xs font-medium text-gray-700">
            Subjek
          </label>
          <select
            id="contact-subject"
            {...register("subject")}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-700 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-100"
          >
            <option value="general">Pertanyaan Umum</option>
            <option value="aspirasi">Aspirasi</option>
            <option value="kerjasama">Kerjasama</option>
            <option value="media">Media</option>
          </select>
          {errors.subject && (
            <span className="text-xs text-red-500 mt-1">{errors.subject.message}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className="text-xs font-medium text-gray-700">
            Pesan
          </label>
          <textarea
            id="contact-message"
            rows={5}
            placeholder="Bagaimana kami dapat membantu Anda?"
            {...register("message")}
            className={`resize-none rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
            }`}
          />
          {errors.message && (
            <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          id="contact-submit-btn"
          className="w-full rounded-full bg-yellow-400 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              Kirim Pesan
              <ArrowRight size={15} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
