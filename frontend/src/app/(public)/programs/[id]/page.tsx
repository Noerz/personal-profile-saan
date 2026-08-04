import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CircleCheck, ArrowLeft, Calendar, MapPin } from "lucide-react";
import { programs } from "../data";

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const program = programs.find((p) => p.id === id);

  if (!program) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* Back Link */}
      <Link
        href="/programs"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} />
        Kembali ke Program
      </Link>

      {/* Header Section */}
      <div className="mb-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold tracking-wider text-yellow-800">
            {program.category}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold shadow-sm ${
              program.status === "Berjalan"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                program.status === "Berjalan" ? "bg-green-500" : "bg-gray-400"
              }`}
            />
            {program.status}
          </span>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          {program.title}
        </h1>
        
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-500">
          {program.date && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{program.date}</span>
            </div>
          )}
          {program.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{program.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="grid gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Tentang Program</h2>
          <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed">
            <p>{program.fullDesc}</p>
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Tujuan Utama</h3>
            <ul className="flex flex-col gap-3">
              {program.objectives.map((obj) => (
                <li
                  key={obj}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <CircleCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-yellow-600"
                  />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
