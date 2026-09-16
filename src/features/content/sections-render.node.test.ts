import { test, expect } from 'vitest'
import { renderToString } from 'react-dom/server'
import * as React from 'react'
import { getContentPage, getContentPages, getLocalePaths } from '@/features/content/loader'
import { ContentSections } from '@/features/content/render/sections'
import { I18nProvider } from '@/features/i18n/provider'

const html = (path: string, locale: 'en' | 'es' | 'fr' = 'en'): string => {
  const page = getContentPage(path, locale)
  expect(page, `${path} not found in registry`).toBeTruthy()
  return renderToString(
    React.createElement(
      I18nProvider,
      { locale, children: React.createElement(ContentSections, { page: page! }) },
    ),
  )
}

test('every registry page renders its sections without error (en)', () => {
  for (const p of getContentPages()) {
    expect(() => html(p.path), `${p.path} throws during render`).not.toThrow()
  }
})

test('every Spanish twin renders without error (es)', () => {
  // /faq is served by the catchall route from site/faqs.yaml, not the registry.
  for (const p of getLocalePaths('es').filter((x) => x !== '/faq')) {
    expect(() => html(p, 'es'), `${p} (es) throws during render`).not.toThrow()
  }
})

test('factory intelligence cards render (bare array shape)', () => {
  const out = html('/factory')
  for (const t of ['Production Capacity', 'Quality Lab &amp; Testing', '7-Stage Quality Control Flow']) {
    expect(out, `factory card "${t}" not rendered`).toContain(t)
  }
})

test('/quality renders all 7 inspection gates and the documentation samples', () => {
  const out = html('/quality')
  for (const t of [
    'Incoming Material',
    'Casting Inspection',
    'Machining Inspection',
    'Heat Treatment',
    'Surface Coating',
    'Assembly &amp; Functional Test',
    'Final Inspection &amp; Packing',
  ]) {
    expect(out, `gate "${t}" not rendered`).toContain(t)
  }
  expect(out).toContain('Documentation &amp; Traceability')
  expect(out).toContain('Controlled Document Register')
  expect(out).toContain('Traceability Matrix')
  expect(out).toContain('Non-Conformance Control')
})

test('/quality es twin renders gates in Spanish', () => {
  const out = html('/quality', 'es')
  for (const t of [
    'Material entrante',
    'Inspección de mecanizado',
    'Montaje y ensayo funcional',
    'Inspección final y embalaje',
  ]) {
    expect(out, `es gate "${t}" not rendered`).toContain(t)
  }
})

test('research topic headline renders as clean h1 text without markup leakage (en/es/fr)', () => {
  const cases: [string, 'en' | 'es' | 'fr', string][] = [
    ['/research/sand-casting-process', 'en', 'Sand Casting — The Foundation of Vise Body Manufacturing'],
    ['/research/cnc-machining-precision', 'es', 'Mecanizado CNC — Precisión en cada componente del tornillo'],
    ['/research/heat-treatment-jaw-hardness', 'fr', 'Traitement thermique — Mâchoires durcies pour un serrage durable'],
  ]
  for (const [path, locale, expected] of cases) {
    const out = html(path, locale)
    expect(out, `${path} (${
      locale
    }) must not leak the raw emphasis markup`).not.toContain('&lt;strong&gt;')
    expect(out, `${path} (${locale}) must not re-emit raw tags`).not.toMatch(/<strong>/i)
    expect(out, `${path} (${locale}) headline text missing`).toContain(`>${expected}</h1>`)
  }
})
