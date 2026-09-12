import { createServerFn } from '@tanstack/react-start'
import type { Locale } from '@/features/i18n/locale'
import type { SearchEntry, SearchEntryType } from '@/features/content/types'

export type { SearchEntry, SearchEntryType }

/** Fold to an accent-free, case-free string so FR/ES queries work without diacritics. */
export function normalizeSearchText(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

/** True when `query` hits an entry after diacritic/case folding on both sides. */
export function matchSearchEntry(query: string, entry: SearchEntry): boolean {
  const q = normalizeSearchText(query)
  if (!q) return false
  return [
    entry.title,
    entry.excerpt,
    entry.content ?? '',
  ].some((field) => normalizeSearchText(field).includes(q))
}

/** Server-resolved search index for one locale, consumed by the `/search` page loader. */
export const searchIndexServer = createServerFn({ method: 'GET' })
  .validator((input: { locale: Locale }) => input)
  .handler(async ({ data }) => {
    const { buildExtendedIndex } = await import('./search-index.server')
    return buildExtendedIndex(data.locale)
  })
