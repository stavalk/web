import { test, expect } from 'vitest'
import { llmsAfarerFull, llmsAfarerSpanishFull, llmsAfarerFrenchFull, llmAfarierIndex, llmSpanishIndex, llmFrenchIndex } from '@/features/site/llm'
import { getContentPages, getContentProducts, isContentPageTranslated } from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { knowledge } from '@/product/knowledge'
import { projects } from '@/product/projects'
import { solutionPages, solutionPath } from '@/product/solution-pages'

const urlLines = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^URL: (.+)$/gm)) paths.add(m[1])
  return paths
}

const indexPaths = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^- \[[^\]]+\]\(([^)]+)\):/gm)) paths.add(m[1])
  return paths
}

const SHADOWED = new Set([...Object.keys(EDGE_REDIRECTS), ...Object.keys(LEGACY_REDIRECTS)])

test('llms-full.txt contains every live afarer page (no truncation regression)', () => {
  const full = llmsAfarerFull()
  const urls = urlLines(full)
  const expected = getContentPages()
    .filter((p) => !SHADOWED.has(p.path))
    .map((p) => p.path)
  for (const path of expected) {
    expect(urls, `llms-full.txt missing live page ${path}`).toContain(path)
  }
  expect([...urls].sort()).toEqual([...expected].sort())
  expect(expected.length).toBeGreaterThan(25)
})

test('llms-full.txt never advertises edge-301 or legacy-shadowed paths', () => {
  const urls = urlLines(llmsAfarerFull())
  for (const shadowed of SHADOWED) {
    expect(urls, `llms-full.txt must not contain shadowed path ${shadowed}`).not.toContain(shadowed)
  }
})

test('llms.txt afarer index covers every live page and no shadowed paths', () => {
  const index = llmAfarierIndex('https://Stavalk.com')
  const listed = indexPaths(index)
  const live = getContentPages().map((p) => `${index.includes('https://Stavalk.com') ? 'https://Stavalk.com' : ''}${p.path}`)

  // Coverage via the path portion (index links are now absolute URLs).
  const listedPaths = new Set([...listed].map((u) => (u.startsWith('https://') ? new URL(u).pathname : u)))
  for (const path of live.map((p) => (p.startsWith('https://') ? new URL(p).pathname : p))) {
    if (SHADOWED.has(path)) {
      expect(listedPaths, `llms.txt index must not list shadowed path ${path}`).not.toContain(path)
    } else {
      expect(listedPaths, `llms.txt index missing live page ${path}`).toContain(path)
    }
  }
})

test('llms.txt es/fr resource sections mirror the english content-page coverage (no dead links)', () => {
  const origins: Record<'es' | 'fr', { sec: string }> = { es: { sec: llmSpanishIndex('https://stavalk.com') }, fr: { sec: llmFrenchIndex('https://stavalk.com') } }
  for (const [locale, { sec }] of Object.entries(origins) as ['es' | 'fr', { sec: string }][]) {
    const listed = indexPaths(sec)
    const expected = getContentPages()
      .filter((p) => !SHADOWED.has(p.path) && isContentPageTranslated(p.path, locale))
      .map((p) => `/${locale}${p.path}`)
    for (const path of expected) {
      expect(listed, `${locale} resource section missing translated page ${path}`).toContain(`https://stavalk.com${path}`)
    }
    expect(expected.length, `${locale} resource section must cover multiple pages`).toBeGreaterThan(15)
  }
})

test('llms.txt es/fr list every translated knowledge, project, solution, product, tech and case page plus /faq', () => {
  const es = indexPaths(llmSpanishIndex('https://stavalk.com'))
  const fr = indexPaths(llmFrenchIndex('https://stavalk.com'))
  const checks: Record<'es' | 'fr', Set<string>> = { es, fr }
  for (const [locale, listed] of Object.entries(checks) as ['es' | 'fr', Set<string>][]) {
    const l = (path: string) => `https://stavalk.com/${locale}${path}`
    for (const a of knowledge[locale]) {
      expect(listed, `${locale} knowledge article missing ${a.slug}`).toContain(l(`/knowledge/${a.slug}`))
    }
    for (const p of projects[locale]) {
      expect(listed, `${locale} project missing ${p.slug}`).toContain(l(`/projects/${p.slug}`))
    }
    for (const s of solutionPages[locale]) {
      expect(listed, `${locale} solution missing ${s.slug}`).toContain(l(solutionPath(s.slug)))
    }
    for (const p of getContentProducts(locale)) {
      expect(listed, `${locale} product missing ${p.slug}`).toContain(l(`/products/${p.slug}`))
    }
    expect(listed, `${locale} faq url missing`).toContain(l('/faq'))
  }
})

test('llms-full.txt es/fr include the translated deep brand pages with a /url line', () => {
  for (const [locale, full] of [['es', llmsAfarerSpanishFull()], ['fr', llmsAfarerFrenchFull()]] as const) {
    const urls = urlLines(full)
    const deep = getContentPages().filter((p) => !SHADOWED.has(p.path) && isContentPageTranslated(p.path, locale))
    for (const p of deep) {
      expect(urls, `${locale} full corpus missing deep page ${p.path}`).toContain(`/${locale}${p.path}`)
    }
  }
})