/**
 * Generates a URL-safe slug from a given string.
 * Handles Indonesian characters and special characters.
 * @example slug('Artikel Terbaru!') → 'artikel-terbaru'
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^a-z0-9\s-]/g, '')   // Remove special chars
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with hyphens
    .replace(/-+/g, '-');           // Remove duplicate hyphens
}

/**
 * Generates a unique slug by appending a short UUID suffix if needed.
 * @example uniqueSlug('artikel-terbaru') → 'artikel-terbaru-a1b2c3'
 */
export function generateUniqueSlug(text: string, suffix?: string): string {
  const base = generateSlug(text);
  return suffix ? `${base}-${suffix}` : base;
}
