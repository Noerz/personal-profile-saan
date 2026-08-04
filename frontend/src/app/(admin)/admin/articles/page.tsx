"use client";

import { Plus, Edit2, Trash2, Image as ImageIcon, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function ManageArticles() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Manage Articles
          </h1>
          <p className="text-lg text-slate-500">
            Review, edit, and publish content to the public portal.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-colors shrink-0 shadow-md">
          <Plus size={18} /> Create New Article
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left Sidebar Filters */}
        <div className="w-full md:w-64 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm shrink-0 sticky top-32">
          
          {/* Status Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Status</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-slate-900 text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span className="text-sm font-medium text-slate-900">All Statuses</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-slate-300 group-hover:border-slate-400 transition-colors"></div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Published</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-slate-300 group-hover:border-slate-400 transition-colors"></div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Drafts</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-slate-300 group-hover:border-slate-400 transition-colors"></div>
                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">Archived</span>
              </label>
            </div>
          </div>

          <hr className="border-slate-100 mb-8" />

          {/* Categories Filter */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold cursor-pointer">Policy</span>
              <span className="inline-flex px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer hover:bg-slate-200 transition-colors">Community</span>
              <span className="inline-flex px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer hover:bg-slate-200 transition-colors">Events</span>
              <span className="inline-flex px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold cursor-pointer hover:bg-slate-200 transition-colors">Press Release</span>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          
          {/* Article Card 1 (Published) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 transition-transform hover:-translate-y-1">
            <div className="relative w-full sm:w-64 h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-100">
              <Image src="/city-bg.jpg" alt="Thumbnail" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                Published
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Policy Updates</span>
                <span>•</span>
                <span>Oct 24, 2023</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                New Urban Infrastructure Initiatives Announced for Q4
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                A comprehensive overview of the upcoming public works projects aimed at revitalizing the downtown core and improving public transit efficiency.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative border border-slate-200">
                     <Image src="/hero.png" alt="Author" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Sarah Jenkins</span>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Card 2 (Draft) */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 transition-transform hover:-translate-y-1">
            <div className="relative w-full sm:w-64 h-40 shrink-0 rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center border border-slate-200">
              <ImageIcon className="text-slate-300" size={48} />
              <div className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                Draft
              </div>
            </div>
            
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700">Community</span>
                <span>•</span>
                <span>Last edited Oct 22, 2023</span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                Town Hall Meeting Summary: Citizen Voices
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                Notes and key takeaways from last week's open forum regarding the proposed expansion of the local recreation center and its impact.
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative border border-slate-200">
                     <Image src="/hero.png" alt="Author" fill className="object-cover" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">Marcus Thorne</span>
                </div>
                <button className="px-4 py-1.5 border border-slate-300 text-slate-700 text-xs font-bold rounded-full hover:bg-slate-50 transition-colors">
                  Continue Editing
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
             <button className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50 transition-colors bg-white shadow-sm">
               Load More <ChevronDown size={16} />
             </button>
          </div>

        </div>
      </div>
    </div>
  );
}
