"use client";

import { Filter, DownloadCloud, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export default function AspirationsInbox() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Aspirations Inbox
          </h1>
          <p className="text-lg text-slate-500">
            Review and manage submissions from citizens.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors bg-white">
            <Filter size={18} /> Filter
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-md">
            <DownloadCloud size={18} /> Export Report
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-700">Status:</span>
            <select className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900">
              <option>All Statuses</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-700">Category:</span>
            <select className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-1 focus:ring-slate-900">
              <option>All Categories</option>
            </select>
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-500">
          Showing 1-10 of 142 aspirations
        </div>
      </div>

      {/* Inbox List */}
      <div className="flex flex-col gap-4">
        
        {/* Card 1 - New */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden flex gap-5 transition-transform hover:-translate-y-1 cursor-pointer">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-500 rounded-l-2xl"></div>
          
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold shrink-0 border border-slate-200">
            EJ
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">Improvement of Local Park Facilities</h3>
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">Today, 09:42 AM</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-slate-700">Elena Jenkins</span>
              <span className="text-slate-300">•</span>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded">New</span>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded">Community</span>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
              The current state of Centennial Park requires immediate attention. The playground equipment is outdated and poses safety risks, while the walking paths are deteriorating and becoming hazardous for elderly residents...
            </p>
          </div>
        </div>

        {/* Card 2 - In Progress */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden flex gap-5 transition-transform hover:-translate-y-1 cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold shrink-0 border border-slate-200">
            MR
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">Proposal for Solar Panels on Public Schools</h3>
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">Yesterday, 14:15 PM</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-slate-700">Marcus Rivera</span>
              <span className="text-slate-300">•</span>
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-0.5 rounded">In Progress</span>
              <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-0.5 rounded">Environment</span>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
              In an effort to reduce carbon footprint and long-term energy costs, I propose installing solar panels on the roofs of all major public high schools in the district. Initial feasibility studies suggest...
            </p>
          </div>
        </div>

        {/* Card 3 - Resolved */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 relative overflow-hidden flex gap-5 transition-transform hover:-translate-y-1 cursor-pointer opacity-80">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold shrink-0 border border-slate-200">
            SL
          </div>
          
          <div className="flex-1 flex flex-col">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-500">Traffic Calming Measures on 5th Avenue</h3>
              <span className="text-xs font-medium text-slate-400 whitespace-nowrap">Oct 24, 2023</span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-bold text-slate-500">Sarah Lin</span>
              <span className="text-slate-300">•</span>
              <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded">Resolved</span>
              <span className="bg-slate-100 text-slate-500 text-xs font-semibold px-2.5 py-0.5 rounded">Infrastructure</span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
              The speeding on 5th Avenue near the elementary school is out of control. We need speed bumps, raised crosswalks, or increased police presence during school hours before an accident occurs...
            </p>
          </div>
        </div>

      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-1 mt-6">
        <button className="px-3 py-2 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50 hover:text-slate-700 bg-white transition-colors">
          <ChevronLeft size={18} />
        </button>
        <button className="px-4 py-2 rounded-lg bg-slate-900 text-white font-bold text-sm shadow-sm">
          1
        </button>
        <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm bg-white transition-colors">
          2
        </button>
        <button className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm bg-white transition-colors">
          3
        </button>
        <span className="px-2 text-slate-400">
          <MoreHorizontal size={18} />
        </span>
        <button className="px-3 py-2 rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-700 bg-white transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>

    </div>
  );
}
