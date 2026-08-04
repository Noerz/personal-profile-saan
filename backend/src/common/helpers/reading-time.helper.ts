const WORDS_PER_MINUTE = 200;

/**
 * Estimates reading time in minutes from article content.
 * Strips HTML tags before counting words.
 * Minimum return value is 1 minute.
 * @example calculateReadingTime('<p>Hello world</p>') → 1
 */
export function calculateReadingTime(content: string): number {
  const plainText = content.replace(/<[^>]*>/g, ' ');
  const wordCount = plainText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}
