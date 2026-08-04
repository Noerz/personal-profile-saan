"use client";

import { Users, FileText, Briefcase, PlusCircle, Megaphone, FileOutput, ChevronRight, Settings } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-12">
      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Welcome back, Administrator.
        </h1>
        <p className="text-lg text-slate-500">
          Here is your executive summary for today. Operations are running smoothly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Summary Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-52 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users size={20} />
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                +12%
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Visitors</p>
              <p className="text-4xl font-extrabold text-slate-900">24,592</p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-52 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <FileText size={20} />
              </div>
              <span className="bg-rose-100 text-rose-600 text-[10px] font-bold px-2 py-1 rounded-full">
                Requires Action
              </span>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Pending Aspirations</p>
              <p className="text-4xl font-extrabold text-slate-900">14</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-52 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Active Programs</p>
              <p className="text-4xl font-extrabold text-slate-900">128</p>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col h-52">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-slate-800 transition-colors">
              <PlusCircle size={16} /> Add New Program
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-yellow-400 text-slate-900 rounded-xl py-2.5 text-sm font-semibold hover:bg-yellow-500 transition-colors">
              <Megaphone size={16} /> Post News Update
            </button>
            <button className="flex items-center justify-center gap-2 w-full bg-white text-slate-900 border border-slate-300 rounded-xl py-2.5 text-sm font-semibold hover:bg-slate-50 transition-colors hidden lg:flex">
              <FileOutput size={16} /> Generate Report
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-4">Recent Activity</h2>
        <div className="bg-white rounded-2xl border border-slate-200 flex flex-col divide-y divide-slate-100">
          
          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <p className="text-slate-900 font-medium">
                  <strong>New aspiration submitted</strong> from John Doe
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Community Garden Initiative • 10 minutes ago
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
          </div>

          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                <Briefcase size={18} />
              </div>
              <div>
                <p className="text-slate-900 font-medium">
                  <strong>Program Approved:</strong> Youth Mentorship Summer Block
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  By Sarah Jenkins • 2 hours ago
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
          </div>

          <div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <Settings size={18} />
              </div>
              <div>
                <p className="text-slate-900 font-medium">
                  <strong>System Update</strong> Maintenance scheduled for tonight
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Automated System • 5 hours ago
                </p>
              </div>
            </div>
            <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
          </div>

        </div>
      </div>

    </div>
  );
}
