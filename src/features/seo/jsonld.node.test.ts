import { test, expect } from 'vitest'
import { breadcrumbLd, siteBreadcrumbLd, itemListLd, articleLd, aboutPageLd, contactPageLd, SITE_ORIGIN } from '@/features/seo/jsonld'
import { serviceLd, projectLd, siteLd, qcHowToLd } from '@/product/product-jsonld'

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

test('articleLd: inLanguage follows locale (en default, es/fr localized)', () => {
  expect(articleLd({ title: 'T', description: 'D', path: '/knowledge/x' }).inLanguage).toBe('en')
  expect(articleLd({ title: 'T', description: 'D', path: '/knowledge/x', locale: 'es' }).inLanguage).toBe('es')
  expect(articleLd({ title: 'T', description: 'D', path: '/knowledge/x', locale: 'fr' }).inLanguage).toBe('fr')
})

test('siteLd: WebSite SearchAction target localizes the search path', () => {
  const websiteEs = siteLd('es').find((d) => d['@type'] === 'WebSite')!
  const websiteFr = siteLd('fr').find((d) => d['@type'] === 'WebSite')!
  const websiteEn = siteLd().find((d) => d['@type'] === 'WebSite')!
  const target = (d: Record<string, unknown>) => (d.potentialAction as { target?: string }).target
  expect(target(websiteEs)).toBe(`${SITE_ORIGIN}/es/search?q={search_term_string}`)
  expect(target(websiteFr)).toBe(`${SITE_ORIGIN}/fr/search?q={search_term_string}`)
  expect(target(websiteEn)).toBe(`${SITE_ORIGIN}/search?q={search_term_string}`)
})

test('qcHowToLd: localized name/description/steps follow locale', () => {
  const fr = qcHowToLd('fr') as { name: string; step: { name: string }[] }
  expect(fr.name).toContain('Inspection de contrôle qualité')
  expect(fr.step[0].name).toBe('Inspection des matières entrantes')
  const es = qcHowToLd('es') as { name: string; step: { name: string }[] }
  expect(es.name).toContain('Inspección de control de calidad')
  expect(es.step[0].name).toBe('Inspección de materiales entrantes')
  expect((qcHowToLd() as { name: string }).name).toBe('7-Stage Bench Vise Quality Control Inspection')
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

test('aboutPageLd + contactPageLd: localized names follow locale', () => {
  expect(aboutPageLd(SITE_ORIGIN, '/about', 'D').name).toBe(`About Stavalk`)
  expect(aboutPageLd(SITE_ORIGIN, '/es/about', 'D', 'es').name).toBe('Sobre Stavalk')
  expect(aboutPageLd(SITE_ORIGIN, '/fr/about', 'D', 'fr').name).toBe('À propos de Stavalk')
  expect(contactPageLd(SITE_ORIGIN, '/es/contact', 'es').name).toBe('Contacto Stavalk')
  expect(contactPageLd(SITE_ORIGIN, '/contact').name).toBe('Contact Stavalk')
})