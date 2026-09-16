import { test, expect } from 'vitest'
import { buildSitemap, buildLocaleSitemap, PUBLIC_PATHS } from '@/features/seo/seo'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import {
  getContentPages,
  getLocalePaths,
  getLocaleContentPaths,
  getContentProducts,
  getTechArticles,
  getCaseUses,
  getNewsPosts,
} from '@/features/content/loader'
import { GUIDES, GUIDES_ES, GUIDES_FR } from '@/features/content/guide-content'
import { projects } from '@/product/projects'
import { knowledge } from '@/product/knowledge'
import { seriesPages } from '@/product/series-pages'

// End-to-end trilingual hreflang audit over the real content corpus: the five
// sitemap handlers are replicated here exactly as deployed, then cross-file
// invariants are enforced (no dead-end alternates, no 301 targets, reciprocal
// mirrored twins at text level on every page pair).
const origin = 'https://audit.example'
const REDIRECTS: Record<string, unknown> = { ...EDGE_REDIRECTS, ...LEGACY_REDIRECTS }

interface UrlBlock {
  loc: string
  alts: { hreflang: string; href: string }[]
}

function parseXml(xml: string): UrlBlock[] {
  const blocks: UrlBlock[] = []
  const re = /<url>([\s\S]*?)<\/url>/g
  let m: RegExpExecArray | null
  while ((m = re.exec(xml))) {
    const inner = m[1]
    const loc = /<loc>([^<]+)<\/loc>/.exec(inner)?.[1]
    if (!loc) continue
    const alts: { hreflang: string; href: string }[] = []
    const are = /<xhtml:link rel="alternate" hreflang="([^"]+)" href="([^"]+)"\/>/g
    let a: RegExpExecArray | null
    while ((a = are.exec(inner))) alts.push({ hreflang: a[1], href: a[2] })
    blocks.push({ loc, alts })
  }
  return blocks
}

interface PageEntry {
  path: string
  meta?: { dateModified?: string }
  content: { seo?: { dateModified?: string } }
}

const lastmod = '2026-06-01'

function pagesXml(): string {
  const esPaths = new Set(getLocalePaths('es'))
  const frPaths = new Set(getLocalePaths('fr'))
  const afarer = getContentPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS))
    .map((p: PageEntry) => {
      const seo = p.content.seo
      return { loc: p.path, lastmod: p.meta?.dateModified ?? seo?.dateModified ?? lastmod, es: esPaths.has(p.path), fr: frPaths.has(p.path) }
    })
  const staticPages = [
    ...GUIDES.map((g) => ({ loc: `/guides/${g.slug}`, lastmod, es: true, fr: true })),
    ...projects.en.map((p) => ({ loc: `/projects/${p.slug}`, lastmod: '2026-08-15', es: true, fr: true })),
    ...knowledge.en.map((a) => ({ loc: `/knowledge/${a.slug}`, lastmod: '2026-09-10', es: true, fr: true })),
    ...seriesPages.en.map((s) => ({ loc: `/products/${s.slug}`, lastmod: '2026-08-15', es: true, fr: true })),
    { loc: '/evidence/case-studies', lastmod, es: true, fr: true },
  ]
  return buildSitemap(origin, [...afarer, ...staticPages], { locale: 'en' })
}

function productsXml(): string {
  const es = new Set(getLocaleContentPaths('es'))
  const fr = new Set(getLocaleContentPaths('fr'))
  const paths = [
    ...getContentProducts().map((p) => ({ loc: `/products/${p.slug}`, lastmod, es: es.has(`/products/${p.slug}`), fr: fr.has(`/products/${p.slug}`) })),
    ...getTechArticles().map((p) => ({ loc: `/technology/${p.slug}`, lastmod, es: es.has(`/technology/${p.slug}`), fr: fr.has(`/technology/${p.slug}`) })),
    ...getCaseUses().map((p) => ({ loc: `/evidence/case-studies/${p.slug}`, lastmod, es: es.has(`/evidence/case-studies/${p.slug}`), fr: fr.has(`/evidence/case-studies/${p.slug}`) })),
  ]
  return buildSitemap(origin, paths, { locale: 'none' })
}

function newsXml(): string {
  const es = new Set(getLocaleContentPaths('es'))
  const fr = new Set(getLocaleContentPaths('fr'))
  const paths = getNewsPosts().map((p) => ({ loc: `/news/${p.slug}`, lastmod: p.date.slice(0, 10), es: es.has(`/news/${p.slug}`), fr: fr.has(`/news/${p.slug}`) }))
  return buildSitemap(origin, paths, { locale: 'none' })
}

function localeXml(locale: 'es' | 'fr'): string {
  const publicSet = new Set(PUBLIC_PATHS.map((p) => p.path))
  const afarer = getLocalePaths(locale)
    .filter((p) => !publicSet.has(p) && !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path) => ({ path }))
  const detail = [
    { path: '/evidence/case-studies' },
    ...getLocaleContentPaths(locale).map((p) => ({ path: p })),
    ...(locale === 'es' ? GUIDES_ES : GUIDES_FR).map((g) => ({ path: `/guides/${g.slug}` })),
    ...projects[locale].map((p) => ({ path: `/projects/${p.slug}` })),
    ...knowledge[locale].map((a) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages[locale].map((s) => ({ path: `/products/${s.slug}` })),
  ]
  return buildLocaleSitemap(origin, locale, [...PUBLIC_PATHS, ...detail, ...afarer])
}

const files: Record<string, UrlBlock[]> = {
  pages: parseXml(pagesXml()),
  products: parseXml(productsXml()),
  news: parseXml(newsXml()),
  es: parseXml(localeXml('es')),
  fr: parseXml(localeXml('fr')),
}

const locSet = (name: string): Set<string> => new Set(files[name].map((b) => b.loc))
const allLocs = new Set([...locSet('pages'), ...locSet('products'), ...locSet('news'), ...locSet('es'), ...locSet('fr')])
const enBlocks = [...files.pages, ...files.products, ...files.news]

/** `/es/...` / `/fr/...` → unprefixed twin path. */
function twinPath(url: string): string {
  const segs = new URL(url).pathname.split('/').filter(Boolean)
  return segs[0] === 'es' || segs[0] === 'fr' ? `/${segs.slice(1).join('/')}` || '/' : new URL(url).pathname
}

function alternateTargetsTo(name: string, hreflang: string): Set<string> {
  const out = new Set<string>()
  for (const b of files[name]) for (const a of b.alts) if (a.hreflang === hreflang) out.add(twinPath(a.href))
  return out
}

test('no duplicate <loc> within any sitemap file (en + es + fr + products + news)', () => {
  for (const name of Object.keys(files)) {
    const counts = new Map<string, number>()
    for (const b of files[name]) counts.set(b.loc, (counts.get(b.loc) ?? 0) + 1)
    const dups = [...counts].filter(([, n]) => n > 1).map(([loc]) => loc)
    expect(dups, `${name}: duplicate <loc>: ${dups.join(', ')}`).toEqual([])
  }
})

test('every alternate href resolves to a live <loc> somewhere (no dead-end hreflang)', () => {
  const broken: string[] = []
  for (const [name, blocks] of Object.entries(files)) {
    for (const b of blocks) {
      for (const a of b.alts) {
        if (!allLocs.has(a.href)) broken.push(`${name}: ${b.loc} → ${a.hreflang} ${a.href} (not listed in any sitemap)`)
      }
    }
  }
  expect(broken, broken.join('\n')).toEqual([])
})

test('no alternate targets a 301 source path (edge or legacy redirect)', () => {
  const broken: string[] = []
  for (const [name, blocks] of Object.entries(files)) {
    for (const b of blocks) {
      for (const a of b.alts) {
        if (twinPath(a.href) in REDIRECTS) broken.push(`${name}: ${b.loc} → ${a.href} targets redirect source ${twinPath(a.href)}`)
      }
    }
  }
  expect(broken, broken.join('\n')).toEqual([])
})

test('en ⇄ es reciprocity: every es twin is listed and cross-linked from its en page', () => {
  const enLocs = new Set([...locSet('pages'), ...locSet('products'), ...locSet('news')])
  const crossLinked = alternateTargetsTo('pages', 'es-ES')
  for (const b of files.pages) for (const a of b.alts) if (a.hreflang === 'es-ES') crossLinked.add(twinPath(b.loc))
  for (const b of files.products) for (const a of b.alts) if (a.hreflang === 'es-ES') crossLinked.add(twinPath(b.loc))
  for (const b of files.news) for (const a of b.alts) if (a.hreflang === 'es-ES') crossLinked.add(twinPath(b.loc))

  const missing: string[] = []
  for (const b of files.es) {
    const path = twinPath(b.loc)
    if (!enLocs.has(`${origin}${path}`)) missing.push(`no en <loc> for ${b.loc}`)
    if (!crossLinked.has(path)) missing.push(`es twin ${b.loc} not cross-linked from its en page`)
  }
  expect(missing, missing.join('\n')).toEqual([])
})

test('en ⇄ fr reciprocity: every fr twin is listed and cross-linked from its en page', () => {
  const enLocs = new Set([...locSet('pages'), ...locSet('products'), ...locSet('news')])
  const crossLinked = new Set<string>()
  for (const b of enBlocks) for (const a of b.alts) if (a.hreflang === 'fr-FR') crossLinked.add(twinPath(b.loc))

  const missing: string[] = []
  for (const b of files.fr) {
    const path = twinPath(b.loc)
    if (!enLocs.has(`${origin}${path}`)) missing.push(`no en <loc> for ${b.loc}`)
    if (!crossLinked.has(path)) missing.push(`fr twin ${b.loc} not cross-linked from its en page`)
  }
  expect(missing, missing.join('\n')).toEqual([])
})

test('es and fr detail sets are symmetric (no locale left without its sibling)', () => {
  const swap = (u: string, from: string, to: string): string => u.replace(new RegExp(`^/${from}(?=/|$)`), `/${to}`)
  const esUrls = new Set(files.es.map((b) => new URL(b.loc).pathname))
  const frUrls = new Set(files.fr.map((b) => new URL(b.loc).pathname))

  const asymEs = [...esUrls].filter((u) => !frUrls.has(swap(u, 'es', 'fr')))
  const asymFr = [...frUrls].filter((u) => !esUrls.has(swap(u, 'fr', 'es')))
  expect(asymEs, `es URL without fr twin: ${asymEs.join(', ')}`).toEqual([])
  expect(asymFr, `fr URL without es twin: ${asymFr.join(', ')}`).toEqual([])
})

test('es/fr content twins emitted by products+news sitemaps all carry a real alternate', () => {
  const declEs = alternateTargetsTo('products', 'es-ES')
  const declFr = alternateTargetsTo('products', 'fr-FR')
  for (const b of [...files.products, ...files.news]) for (const a of b.alts) if (a.hreflang === 'es-ES') declEs.add(twinPath(a.href))
  for (const b of [...files.products, ...files.news]) for (const a of b.alts) if (a.hreflang === 'fr-FR') declFr.add(twinPath(a.href))

  const omittedEs = getLocaleContentPaths('es').filter((p) => !declEs.has(p))
  const omittedFr = getLocaleContentPaths('fr').filter((p) => !declFr.has(p))
  expect(omittedEs, `es twin exists but never cross-linked: ${omittedEs.join(', ')}`).toEqual([])
  expect(omittedFr, `fr twin exists but never cross-linked: ${omittedFr.join(', ')}`).toEqual([])
})