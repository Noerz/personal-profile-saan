"use client";

import { useEffect } from "react";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  id: string;
  message: string;
  variant?: ToastVariant;
  duration?: number;
  onClose: (id: string) => void;
}

const variantConfig: Record<
  ToastVariant,
  { icon: React.ReactNode; styles: string }
> = {
  success: {
    icon: <CheckCircle size={18} className="text-emerald-400 shrink-0" />,
    styles: "bg-slate-800 border-emerald-500/40",
  },
  error: {
    icon: <XCircle size={18} className="text-rose-400 shrink-0" />,
    styles: "bg-slate-800 border-rose-500/40",
  },
  warning: {
    icon: <AlertTriangle size={18} className="text-amber-400 shrink-0" />,
    styles: "bg-slate-800 border-amber-500/40",
  },
  info: {
    icon: <Info size={18} className="text-sky-400 shrink-0" />,
    styles: "bg-slate-800 border-sky-500/40",
  },
};

export function Toast({
  id,
  message,
  variant = "info",
  duration = 4000,
  onClose,
}: ToastProps) {
  const { icon, styles } = variantConfig[variant];

  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "flex items-center gap-3 rounded-xl border px-4 py-3 shadow-xl shadow-black/30",
        "text-sm text-slate-200",
        "animate-in slide-in-from-right-4 fade-in duration-300",
        styles
      )}
    >
      {icon}
      <p className="flex-1">{message}</p>
      <button
        onClick={() => onClose(id)}
        className="shrink-0 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
