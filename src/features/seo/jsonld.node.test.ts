import { test, expect } from 'vitest'
import { breadcrumbLd, siteBreadcrumbLd, itemListLd, articleLd, SITE_ORIGIN } from '@/features/seo/jsonld'
import { serviceLd, projectLd } from '@/product/product-jsonld'

type ListItem = { item?: string; url?: string }
const itemsOf = (ld: Record<string, unknown>): ListItem[] => ld.itemListElement as ListItem[]

test('breadcrumbLd: default locale keeps en URLs, es/fr get locale prefix', () => {
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: '6" Medium', path: '/products/vise-medium' },
  ]
  const en = itemsOf(breadcrumbLd(SITE_ORIGIN, crumbs))
  const es = itemsOf(breadcrumbLd(SITE_ORIGIN, crumbs, 'es'))
  const fr = itemsOf(breadcrumbLd(SITE_ORIGIN, crumbs, 'fr'))
  expect(en[1].item).toBe(`${SITE_ORIGIN}/products`)
  expect(en[2].item).toBe(`${SITE_ORIGIN}/products/vise-medium`)
  expect(es[1].item).toBe(`${SITE_ORIGIN}/es/products`)
  expect(es[2].item).toBe(`${SITE_ORIGIN}/es/products/vise-medium`)
  expect(fr[2].item).toBe(`${SITE_ORIGIN}/fr/products/vise-medium`)
  expect(es[0].item).toBe(`${SITE_ORIGIN}/es`)
})

test('siteBreadcrumbLd: localized crumbs on site origin', () => {
  const es = itemsOf(siteBreadcrumbLd([
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
  ], 'es'))
  expect(es[1].item).toBe(`${SITE_ORIGIN}/es/solutions`)
  const en = itemsOf(siteBreadcrumbLd([{ name: 'Home', path: '/' }]))
  expect(en[0].item).toBe(`${SITE_ORIGIN}/`)
})

test('itemListLd: urls localize per locale', () => {
  const fr = itemsOf(itemListLd([{ name: 'H1', path: '/knowledge/h1' }], 'fr'))
  expect(fr[0].url).toBe(`${SITE_ORIGIN}/fr/knowledge/h1`)
  const en = itemsOf(itemListLd([{ name: 'H1', path: '/knowledge/h1' }]))
  expect(en[0].url).toBe(`${SITE_ORIGIN}/knowledge/h1`)
})

test('articleLd: url + mainEntityOfPage localize', () => {
  const fr = articleLd({ title: 'T', description: 'D', path: '/knowledge/x', locale: 'fr' })
  expect(fr.url).toBe(`${SITE_ORIGIN}/fr/knowledge/x`)
  const frMain = fr.mainEntityOfPage as { '@id': string }
  expect(frMain['@id']).toBe(`${SITE_ORIGIN}/fr/knowledge/x`)
  const en = articleLd({ title: 'T', description: 'D', path: '/knowledge/x' })
  expect(en.url).toBe(`${SITE_ORIGIN}/knowledge/x`)
})

test('serviceLd + projectLd: url + mainEntityOfPage localize', () => {
  const es = serviceLd({ serviceType: 'OEM', description: 'D', path: '/oem-manufacturing', locale: 'es' })
  expect(es.url).toBe(`${SITE_ORIGIN}/es/oem-manufacturing`)
  const en = serviceLd({ serviceType: 'OEM', description: 'D', path: '/oem-manufacturing' })
  expect(en.url).toBe(`${SITE_ORIGIN}/oem-manufacturing`)
  const frp = projectLd({ title: 'T', description: 'D', path: '/projects/p1', industry: 'I', outcome: 'O', locale: 'fr' })
  expect(frp.url).toBe(`${SITE_ORIGIN}/fr/projects/p1`)
  const frpMain = frp.mainEntityOfPage as { '@id': string }
  expect(frpMain['@id']).toBe(`${SITE_ORIGIN}/fr/projects/p1`)
})