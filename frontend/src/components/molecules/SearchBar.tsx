"use client";

import { useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/shared/lib/utils";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  id?: string;
}

/**
 * SearchBar molecule — Input with search icon and clear button.
 */
export function SearchBar({
  value,
  onChange,
  placeholder = "Search…",
  className,
  id = "search-bar",
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cn("relative flex items-center", className)}>
      <Search
        size={16}
        className="absolute left-3 text-slate-500 pointer-events-none"
        aria-hidden
      />
      <input
        ref={inputRef}
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "w-full rounded-lg border border-slate-600 bg-slate-800/60 py-2.5 pl-9 pr-9",
          "text-sm text-slate-100 placeholder:text-slate-500",
          "transition-colors duration-150",
          "focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent",
          "hover:border-slate-500"
        )}
        aria-label={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => {
            onChange("");
            inputRef.current?.focus();
          }}
          className="absolute right-3 text-slate-500 hover:text-slate-300 transition-colors"
          aria-label="Clear search"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
