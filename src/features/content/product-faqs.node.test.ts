import { test, expect } from 'vitest'
import { productFaqs } from '@/features/content/product-faqs'
import type { ContentProduct } from '@/features/content/types'

const product: ContentProduct = {
  slug: 'test',
  title: 'Test',
  summary: '',
  body: '',
  faqs: [
    { q: 'Product-specific question?', a: 'Product-specific answer.' },
  ],
}

const FRENCH_RE = /[éèêàçôûîïœ«»ÉÈÊÀÇÔÛÎÏ]|\b(le|la|les|un|une|des|du|l'|est|sont|pour|avec|dans|sur|commandé|commande|échantillons|production|finition|couleur|qualité|expédition)\b/i
const SPANISH_RE = /[áéíóúñ¿¡]|\b(cuál|mínimo|personalizar|tardan|muestras|producción|cambiar|acabado|calidad|envío|pedido)\b/i
const SPANISH_ONLY_RE = /¿|¡|ñ|ó|ú|á|í|\b(cuál|mínimo|personalizar|tardan|muestras|envío|pedido)\b/i
const ENGLISH_LEAK_RE = /\b(days|pieces?|pcs|sample|tooling|custom finish|standard volume production|PO and deposit|per approved|quality is|How is|What is)\b/i

test('product-specific FAQs come first, shared pool appended (≥5 total)', () => {
  const en = productFaqs(product, 'en')
  expect(en[0].q).toBe('Product-specific question?')
  expect(en.length).toBeGreaterThanOrEqual(5)
})

test('fr pool is French with no Spanish and no English fragments', () => {
  const fr = productFaqs(product, 'fr')
  const pooled = fr.slice(product.faqs!.length)
  for (const f of pooled) {
    expect(f.q, f.q).toMatch(FRENCH_RE)
    expect(f.a, f.a).toMatch(FRENCH_RE)
    const joined = `${f.q} ${f.a}`
    expect(joined).not.toMatch(SPANISH_ONLY_RE)
    expect(joined).not.toMatch(ENGLISH_LEAK_RE)
  }
})

test('es pool is Spanish with no English fragments', () => {
  const es = productFaqs(product, 'es')
  const pooled = es.slice(product.faqs!.length)
  for (const f of pooled) {
    expect(f.q, f.q).toMatch(SPANISH_RE)
    expect(f.a, f.a).toMatch(SPANISH_RE)
    expect(`${f.q} ${f.a}`).not.toMatch(ENGLISH_LEAK_RE)
  }
})

test('en pool is an English self-consistent set', () => {
  const en = productFaqs(product, 'en')
  const pooled = en.slice(product.faqs!.length)
  for (const f of pooled) {
    expect(f.q, f.q).toMatch(/\b(What|How|Can)\b/i)
    expect(`${f.q} ${f.a}`).not.toMatch(/[åäö]/i)
  }
})

test('en pool is distinct from es and fr pools', () => {
  const bare: ContentProduct = { slug: 'bare', title: 'Bare', summary: '', body: '' }
  const en = productFaqs(bare, 'en').map((f) => f.q)
  const es = productFaqs(bare, 'es').map((f) => f.q)
  const fr = productFaqs(bare, 'fr').map((f) => f.q)
  const overlap = (a: string[], b: string[]) => a.filter((x) => b.includes(x))
  expect(overlap(en, es)).toEqual([])
  expect(overlap(en, fr)).toEqual([])
  expect(overlap(es, fr)).toEqual([])
})

test('product with no faqs still returns the full localized pool', () => {
  const bare: ContentProduct = { slug: 'bare', title: 'Bare', summary: '', body: '' }
  expect(productFaqs(bare, 'fr')).toHaveLength(4)
  expect(productFaqs(bare, 'es')).toHaveLength(4)
  expect(productFaqs(bare, 'en')).toHaveLength(4)
  expect(productFaqs(bare, 'de').length).toBe(4)
})