import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes safely with clsx + tailwind-merge.
 * Use this everywhere instead of string concatenation.
 *
 * @example
 * cn("px-4 py-2", isActive && "bg-primary", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Format a Date or ISO string to a human-readable date.
 * @example formatDate("2024-01-15") → "15 Jan 2024"
 */
export function formatDate(
  date: string | Date,
  locale: string = "id-ID"
): string {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Format a number as a currency string.
 * @example formatCurrency(150000) → "Rp 150.000"
 */
export function formatCurrency(
  amount: number,
  locale: string = "id-ID",
  currency: string = "IDR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Truncate a string to a given max length, appending "…".
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "…";
}

/**
 * Get initials from a full name (max 2 characters).
 * @example getInitials("Saan Dev") → "SD"
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Sleep utility for testing/mock delays.
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
