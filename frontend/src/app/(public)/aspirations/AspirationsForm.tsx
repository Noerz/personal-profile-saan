"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, Loader2, CheckCircle2, UploadCloud, X } from "lucide-react";
import Image from "next/image";

const aspirationsSchema = z.object({
  name: z.string().min(2, "Nama lengkap harus diisi"),
  phone: z.string().min(10, "Nomor telepon tidak valid"),
  email: z.string().email("Format email tidak valid"),
  location: z.string().min(3, "Lokasi harus diisi"),
  category: z.string().min(1, "Kategori harus dipilih"),
  message: z.string().min(10, "Pesan aspirasi minimal 10 karakter"),
  image: z.any().optional(),
});

type AspirationsFormValues = z.infer<typeof aspirationsSchema>;

export default function AspirationsForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AspirationsFormValues>({
    resolver: zodResolver(aspirationsSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      location: "",
      category: "",
      message: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit = async (data: AspirationsFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Aspirations Form submitted:", data);
    setIsSuccess(true);
    reset();
    setImagePreview(null);
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm border border-gray-100 relative overflow-hidden">
      <h2 className="mb-6 text-xl font-bold text-gray-900">
        Sampaikan Aspirasi
      </h2>

      {/* Success Overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
          <div className="rounded-full bg-green-100 p-3 text-green-600 mb-4">
            <CheckCircle2 size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Aspirasi Terkirim!</h3>
          <p className="text-sm text-gray-500">
            Terima kasih telah menyampaikan suara Anda. Kami akan menindaklanjuti aspirasi ini dan merespons dalam 2-3 hari kerja.
          </p>
        </div>
      )}

      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Row 1 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="asp-name" className="text-xs font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              id="asp-name"
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
            <label htmlFor="asp-phone" className="text-xs font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              placeholder="08xx-xxxx-xxxx"
              id="asp-phone"
              {...register("phone")}
              className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                errors.phone ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
              }`}
            />
            {errors.phone && (
              <span className="text-xs text-red-500 mt-1">{errors.phone.message}</span>
            )}
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="asp-email" className="text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@contoh.com"
              id="asp-email"
              {...register("email")}
              className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
              }`}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1">{errors.email.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="asp-location" className="text-xs font-medium text-gray-700">
              Kecamatan/Kelurahan
            </label>
            <input
              type="text"
              placeholder="Lokasi Anda"
              id="asp-location"
              {...register("location")}
              className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                errors.location ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
              }`}
            />
            {errors.location && (
              <span className="text-xs text-red-500 mt-1">{errors.location.message}</span>
            )}
          </div>
        </div>
        {/* Kategori */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="asp-category" className="text-xs font-medium text-gray-700">
            Kategori / Subjek
          </label>
          <select
            id="asp-category"
            {...register("category")}
            className={`rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 ${
              errors.category ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
            }`}
          >
            <option value="" disabled>
              Pilih Kategori Aspirasi
            </option>
            <option value="infrastruktur">Infrastruktur</option>
            <option value="pendidikan">Pendidikan</option>
            <option value="kesehatan">Kesehatan</option>
            <option value="ekonomi">Ekonomi</option>
            <option value="sosial">Sosial</option>
            <option value="lainnya">Lainnya</option>
          </select>
          {errors.category && (
            <span className="text-xs text-red-500 mt-1">{errors.category.message}</span>
          )}
        </div>
        {/* Isi Aspirasi */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="asp-message" className="text-xs font-medium text-gray-700">
            Isi Aspirasi
          </label>
          <textarea
            id="asp-message"
            rows={5}
            placeholder="Ceritakan detail aspirasi, masukan, atau keluhan Anda..."
            {...register("message")}
            className={`resize-none rounded-lg border bg-gray-50 px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-gray-400 focus:ring-gray-100"
            }`}
          />
          {errors.message && (
            <span className="text-xs text-red-500 mt-1">{errors.message.message}</span>
          )}
        </div>

        {/* Upload Gambar */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-700">
            Unggah Gambar Pendukung (Opsional)
          </label>
          <div className="relative flex min-h-[140px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-6 transition-colors hover:bg-gray-100">
            {imagePreview ? (
              <div className="relative h-40 w-full overflow-hidden rounded-md">
                <Image src={imagePreview} alt="Preview" fill className="object-contain" />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setImagePreview(null);
                    setValue("image", undefined);
                  }}
                  className="absolute right-2 top-2 rounded-full bg-red-500 p-1.5 text-white shadow-sm transition-colors hover:bg-red-600"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <>
                <UploadCloud className="mb-2 h-8 w-8 text-gray-400" />
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-blue-600">Klik untuk mengunggah</span> atau seret dan lepas
                </p>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG, JPEG (Maks. 5MB)</p>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  {...register("image")}
                  onChange={(e) => {
                    register("image").onChange(e);
                    handleImageChange(e);
                  }}
                />
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-2">
          <p className="text-xs text-gray-400">
            ⏱ Respons dalam 2-3 hari kerja.
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            id="asp-submit-btn"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-2.5 text-sm font-bold text-gray-900 hover:bg-yellow-300 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Mengirim...
              </>
            ) : (
              <>
                Kirim Aspirasi
                <ArrowRight size={15} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
