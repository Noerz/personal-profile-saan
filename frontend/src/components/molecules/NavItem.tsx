"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import { Icon } from "@/components/atoms";
import type { LucideIcon } from "lucide-react";

export interface NavItemProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  exact?: boolean;
  collapsed?: boolean;
  onClick?: () => void;
}

/**
 * NavItem molecule — a navigation link with optional icon.
 * Auto-detects active state based on current pathname.
 */
export function NavItem({
  href,
  label,
  icon,
  exact = false,
  collapsed = false,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
        "transition-all duration-150",
        isActive
          ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/30"
          : "text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-transparent",
        collapsed && "justify-center px-2"
      )}
      title={collapsed ? label : undefined}
    >
      {icon && (
        <Icon
          icon={icon}
          size={18}
          className={cn(
            "transition-colors",
            isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"
          )}
        />
      )}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
