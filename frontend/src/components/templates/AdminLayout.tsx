"use client";

import { Sidebar } from "@/components/organisms/Sidebar";
import { useAuthStore } from "@/features/auth/store/authStore";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Avatar } from "@/components/atoms";

export interface AdminLayoutProps {
  children: React.ReactNode;
}

/**
 * AdminLayout template — wraps all admin pages.
 * Includes Sidebar + Topbar (Command Center) in Light Theme.
 */
export function AdminLayout({ children }: AdminLayoutProps) {
  // Use a dummy user for the slicing preview if auth store is empty
  const user = { name: "Admin User", avatarUrl: "/hero.png" };
  const logout = () => {};

  return (
    <div className="flex h-screen overflow-hidden bg-[#f8fafc] text-slate-900 font-sans">
      <Sidebar
        user={user}
        onLogout={logout}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar: Command Center */}
        <header className="flex h-20 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-8 shadow-sm z-10">
          <div className="flex items-center gap-8 flex-1">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Command Center
            </h1>
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full rounded-full bg-slate-50 border border-slate-200 py-2 pl-10 pr-4 text-sm outline-none focus:border-slate-300 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button
              className="relative text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Notifications"
            >
              <Bell size={20} />
            </button>
            <button
              className="relative text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Help"
            >
              <HelpCircle size={20} />
            </button>
            <div className="h-8 w-8 rounded-full overflow-hidden border border-slate-200 ml-2">
               <Avatar name={user.name} src={user.avatarUrl} size="sm" />
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-8 relative">
          {children}
        </main>
      </div>
    </div>
  );
}
