"use client";

import { useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Spinner, Text } from "@/components/atoms";
import { SearchBar } from "@/components/molecules";

export type SortDirection = "asc" | "desc" | null;

export interface Column<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  searchable?: boolean;
  pageSize?: number;
  getRowKey: (row: T) => string;
}

export function DataTable<T>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data found.",
  searchable = false,
  pageSize = 10,
  getRowKey,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>(null);
  const [page, setPage] = useState(1);

  // Filter
  const filtered = searchable && search
    ? data.filter((row) =>
        Object.values(row as Record<string, unknown>).some((v) =>
          String(v).toLowerCase().includes(search.toLowerCase())
        )
      )
    : data;

  // Sort
  const sorted = sortKey && sortDir
    ? [...filtered].sort((a, b) => {
        const av = (a as Record<string, unknown>)[sortKey];
        const bv = (b as Record<string, unknown>)[sortKey];
        if (av == null) return 1;
        if (bv == null) return -1;
        const cmp = String(av).localeCompare(String(bv), undefined, { numeric: true });
        return sortDir === "asc" ? cmp : -cmp;
      })
    : filtered;

  // Paginate
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((prev) => (prev === "asc" ? "desc" : prev === "desc" ? null : "asc"));
      if (sortDir === "desc") setSortKey(null);
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-4">
      {searchable && (
        <SearchBar
          value={search}
          onChange={(v) => { setSearch(v); setPage(1); }}
          placeholder="Search table…"
          id="datatable-search"
          className="max-w-xs"
        />
      )}

      <div className="overflow-hidden rounded-xl border border-slate-700/60">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-700/60 bg-slate-800/80">
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    scope="col"
                    className={cn(
                      "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400",
                      col.sortable && "cursor-pointer select-none hover:text-white",
                      col.className
                    )}
                    onClick={col.sortable ? () => handleSort(String(col.key)) : undefined}
                  >
                    <span className="flex items-center gap-1">
                      {col.header}
                      {col.sortable && (
                        <span className="flex flex-col">
                          <ChevronUp
                            size={10}
                            className={cn(sortKey === col.key && sortDir === "asc" ? "text-indigo-400" : "text-slate-600")}
                          />
                          <ChevronDown
                            size={10}
                            className={cn(sortKey === col.key && sortDir === "desc" ? "text-indigo-400" : "text-slate-600")}
                          />
                        </span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700/40 bg-slate-900/50">
              {isLoading ? (
                <tr>
                  <td colSpan={columns.length} className="py-16 text-center">
                    <Spinner size="md" className="mx-auto" />
                  </td>
                </tr>
              ) : paginated.length === 0 ? (
                <tr>
                  <td colSpan={columns.length} className="py-16 text-center">
                    <Text variant="muted">{emptyMessage}</Text>
                  </td>
                </tr>
              ) : (
                paginated.map((row) => (
                  <tr
                    key={getRowKey(row)}
                    className="transition-colors hover:bg-slate-800/40"
                  >
                    {columns.map((col) => (
                      <td
                        key={String(col.key)}
                        className={cn("px-4 py-3 text-slate-300", col.className)}
                      >
                        {col.render
                          ? col.render(row)
                          : String((row as Record<string, unknown>)[String(col.key)] ?? "—")}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between text-sm">
          <Text variant="muted">
            Page {page} of {totalPages} ({sorted.length} results)
          </Text>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-lg border border-slate-700 p-1.5 text-slate-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-lg border border-slate-700 p-1.5 text-slate-400 hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
