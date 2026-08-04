"use client";

import { Eye, LayoutTemplate, Trash2, Plus, CloudUpload, Megaphone } from "lucide-react";
import Image from "next/image";

export default function EditHomepage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6 sticky top-0 bg-[#f8fafc] z-10">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Edit Homepage
          </h1>
          <p className="text-lg text-slate-500 max-w-xl">
            Update the primary messaging and visuals for the public-facing homepage.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold text-sm px-4 py-2.5 transition-colors">
            <Eye size={18} /> Preview Homepage
          </button>
          <button className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors bg-white">
            Discard
          </button>
          <button className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-md">
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Hero Section Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <LayoutTemplate className="text-slate-900" size={24} />
              <h2 className="text-2xl font-bold text-slate-900">Hero Section</h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Headline</label>
                <input 
                  type="text" 
                  defaultValue="Building a Better Tomorrow, Together"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
                />
                <p className="text-xs text-slate-500 mt-2 font-medium">Keep it impactful. Max 60 characters recommended.</p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Subheadline</label>
                <textarea 
                  rows={3}
                  defaultValue="Join our initiative to empower communities, foster innovation, and drive sustainable growth for the future of our city."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Hero Image</label>
                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden group hover:border-slate-400 transition-colors cursor-pointer min-h-[300px]">
                  
                  {/* Current Image Preview */}
                  <div className="absolute inset-4 rounded-xl overflow-hidden shadow-inner">
                    <Image src="/city-bg.jpg" alt="Hero background" fill className="object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>
                  
                  {/* Upload UI on top */}
                  <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200">
                    <CloudUpload size={32} className="text-slate-700 mb-3" />
                    <p className="text-slate-900 font-medium mb-1">
                      Drag and drop new hero image here, or <span className="underline font-bold">browse</span>
                    </p>
                    <p className="text-xs text-slate-500">Recommended size: 1920x1080px (JPG, PNG, WebP)</p>
                    <div className="mt-4 px-3 py-1 bg-slate-900/10 text-slate-900 text-xs font-bold rounded-full">
                      Current Image
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Announcement Banner Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Megaphone className="text-slate-900" size={24} />
                <h2 className="text-2xl font-bold text-slate-900">Announcement Banner</h2>
              </div>
              {/* Toggle Switch */}
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-12 h-6 bg-slate-900 rounded-full relative p-1 transition-colors">
                  <div className="bg-white w-4 h-4 rounded-full absolute right-1"></div>
                </div>
                <span className="text-sm font-bold text-slate-900">Active</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Banner Message</label>
              <input 
                type="text" 
                defaultValue="New policy initiatives announced for Q3. Read the full report here."
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all"
              />
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col gap-6 sticky top-32">
          <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
               <span className="text-slate-400">ılı</span> Impact Statistics
             </h2>
             <p className="text-sm text-slate-500 leading-relaxed">
               Update the key metrics displayed below the hero section.
             </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Stat 1 */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 relative group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">Statistic 1</h3>
                <button className="text-slate-400 hover:text-rose-600 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Number / Value</label>
                  <input type="text" defaultValue="2.5M+" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Label</label>
                  <input type="text" defaultValue="Citizens Served" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-900" />
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 relative group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900">Statistic 2</h3>
                <button className="text-slate-400 hover:text-rose-600 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Number / Value</label>
                  <input type="text" defaultValue="$450M" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-900" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Label</label>
                  <input type="text" defaultValue="Infrastructure Invested" className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:border-slate-900" />
                </div>
              </div>
            </div>

            <button className="flex items-center justify-center gap-2 w-full border-2 border-dashed border-slate-300 text-slate-700 rounded-2xl py-4 font-bold hover:bg-slate-50 hover:border-slate-400 transition-colors mt-2">
              <Plus size={18} /> Add Statistic
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
