import { test, expect } from 'vitest'
import { normalizeSearchText, matchSearchEntry } from '@/features/site/search'
import type { SearchEntry } from '@/features/content/types'

const entry = (over: Partial<SearchEntry> = {}): SearchEntry => ({
  url: '/fr/factory/quality-inspection',
  title: 'Inspection qualité — Contrôle de la qualité à l\'étau',
  excerpt: "Contrôle de l'établi, étaux de précision, fabricant OEM/ODM",
  content: 'durabilité des mâchoires et traitement thermique',
  type: 'page',
  locale: 'fr',
  ...over,
})

test('normalizeSearchText folds diacritics and case', () => {
  expect(normalizeSearchText('Établi — Étaux')).toBe('etabli \u2014 etaux')
  expect(normalizeSearchText('Tornillos de Banco')).toBe('tornillos de banco')
})

test('search matches without accents (fr user typing etau/etabli)', () => {
  const e = entry()
  expect(matchSearchEntry('etau', e)).toBe(true)
  expect(matchSearchEntry('etabli', e)).toBe(true)
  expect(matchSearchEntry('qualite', e)).toBe(true)
  expect(matchSearchEntry('acero', e)).toBe(false)
})

test('search still honors diacritics when the user types them', () => {
  expect(matchSearchEntry('étau', entry())).toBe(true)
  expect(matchSearchEntry('Établi', entry())).toBe(true)
})

test('empty query matches nothing', () => {
  expect(matchSearchEntry('', entry())).toBe(false)
  expect(matchSearchEntry('   ', entry())).toBe(false)
})