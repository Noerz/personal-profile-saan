"use client";

import { Plus, Filter, SortDesc, MoreHorizontal } from "lucide-react";

export default function ManagePrograms() {
  const programs = [
    {
      id: 1,
      name: "Benahi Rumah",
      desc: "Housing improvement initiative for low-income families.",
      category: "Infrastructure",
      status: "Active",
      dateAdded: "Oct 12, 2023",
    },
    {
      id: 2,
      name: "Penyerahan PIP",
      desc: "Smart Indonesia Program (PIP) distribution.",
      category: "Education",
      status: "Completed",
      dateAdded: "Aug 05, 2023",
    },
    {
      id: 3,
      name: "Klinik Keliling Desa",
      desc: "Mobile health clinics for remote villages.",
      category: "Healthcare",
      status: "Active",
      dateAdded: "Jan 22, 2024",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Manage Programs
          </h1>
          <p className="text-lg text-slate-500">
            Overview and control of all active and past public initiatives.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors shrink-0 shadow-md">
          <Plus size={18} /> Add New Program
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white rounded-full border border-slate-200 p-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button className="bg-slate-900 text-white rounded-full px-6 py-2.5 text-sm font-semibold shrink-0">
            All Programs
          </button>
          <button className="bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium transition-colors shrink-0">
            Infrastructure
          </button>
          <button className="bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium transition-colors shrink-0">
            Education
          </button>
          <button className="bg-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-medium transition-colors shrink-0">
            Healthcare
          </button>
        </div>
        <div className="flex items-center gap-2 pl-4 pr-2 border-l border-slate-200 shrink-0">
           <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
             <Filter size={18} />
           </button>
           <button className="p-2 text-slate-500 hover:text-slate-900 transition-colors">
             <SortDesc size={18} />
           </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50">
                <th className="px-6 py-5 whitespace-nowrap">Program Name</th>
                <th className="px-6 py-5 whitespace-nowrap">Category</th>
                <th className="px-6 py-5 whitespace-nowrap">Status</th>
                <th className="px-6 py-5 whitespace-nowrap">Date Added</th>
                <th className="px-6 py-5 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {programs.map((prog) => (
                <tr key={prog.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-5">
                    <p className="font-bold text-slate-900">{prog.name}</p>
                    <p className="text-sm text-slate-500 mt-1 max-w-xs truncate">{prog.desc}</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {prog.category}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                      prog.status === "Active" 
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-slate-200 text-slate-700"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${prog.status === "Active" ? "bg-yellow-500" : "bg-slate-500"}`}></span>
                      {prog.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <p className="text-slate-700 font-medium">{prog.dateAdded}</p>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-slate-400">
                    <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50">
          <p className="text-sm text-slate-500 font-medium">Showing 1 to 3 of 24 entries</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 text-sm bg-white">
              &lsaquo;
            </button>
            <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-sm">
              1
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-medium bg-white">
              2
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-medium bg-white">
              3
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 text-sm bg-white">
              &rsaquo;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
