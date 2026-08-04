"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className,
  id = "dropdown",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between rounded-lg border border-slate-600 bg-slate-800/60",
          "px-3 py-2.5 text-sm text-left",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
          "hover:border-slate-500",
          selected ? "text-slate-100" : "text-slate-500"
        )}
      >
        <span>{selected?.label ?? placeholder}</span>
        <ChevronDown
          size={16}
          className={cn(
            "shrink-0 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className={cn(
            "absolute z-50 mt-1 w-full overflow-hidden rounded-lg border border-slate-700",
            "bg-slate-800 shadow-xl shadow-black/30",
            "py-1"
          )}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              aria-disabled={option.disabled}
              onClick={() => {
                if (!option.disabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              className={cn(
                "cursor-pointer px-3 py-2 text-sm transition-colors",
                option.value === value
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white",
                option.disabled && "opacity-40 cursor-not-allowed"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
