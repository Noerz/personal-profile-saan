"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Settings,
  Inbox,
  PenTool,
  FileText,
  Briefcase
} from "lucide-react";
import { Avatar } from "@/components/atoms";
import { ROUTES } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";

const adminNavItems = [
  { href: ROUTES.ADMIN_DASHBOARD, label: "Dashboard Overview", icon: LayoutDashboard },
  { href: ROUTES.ADMIN_PROGRAMS, label: "Manage Programs", icon: Briefcase },
  { href: ROUTES.ADMIN_HOMEPAGE, label: "Homepage Content", icon: PenTool },
  { href: ROUTES.ADMIN_ARTICLES, label: "Articles & News", icon: FileText },
  { href: ROUTES.ADMIN_ASPIRATIONS, label: "Aspirations Inbox", icon: Inbox },
];

export interface SidebarProps {
  user?: { name: string; email?: string; avatarUrl?: string } | null;
  onLogout?: () => void;
}

export function Sidebar({ user, onLogout }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className="flex flex-col h-full w-64 border-r border-slate-200 bg-white transition-all duration-300 shrink-0"
      aria-label="Admin sidebar"
    >
      {/* Logo Area */}
      <div className="flex flex-col p-6 border-b border-slate-100">
        <Link href={ROUTES.ADMIN_DASHBOARD} className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200">
            <Image src="/hero.png" alt="Admin Avatar" fill className="object-cover object-top" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-slate-900 leading-tight">Admin Portal</span>
            <span className="text-[10px] text-slate-500 font-medium">Official Management</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-2">
        {adminNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition-all",
                isActive
                  ? "bg-slate-50 text-slate-900 shadow-sm ring-1 ring-slate-200/50 relative overflow-hidden"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 rounded-r-full" />
              )}
              <item.icon size={18} className={isActive ? "text-slate-900" : "text-slate-400"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User Footer / Settings */}
      <div className="p-4 border-t border-slate-100">
        <Link
          href={ROUTES.ADMIN_SETTINGS}
          className={cn(
            "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold transition-all",
            pathname === ROUTES.ADMIN_SETTINGS
              ? "bg-slate-50 text-slate-900 relative overflow-hidden"
              : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
          )}
        >
          {pathname === ROUTES.ADMIN_SETTINGS && (
            <span className="absolute left-0 top-0 bottom-0 w-1 bg-slate-900 rounded-r-full" />
          )}
          <Settings size={18} className={pathname === ROUTES.ADMIN_SETTINGS ? "text-slate-900" : "text-slate-400"} />
          Settings
        </Link>

        {user && (
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-100 p-3 shadow-sm">
            <Avatar name={user.name} src={user.avatarUrl} size="sm" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-slate-900">{user.name}</p>
              <p className="truncate text-[10px] text-slate-500 font-medium">System Admin</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
