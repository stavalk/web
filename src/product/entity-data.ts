import { BRAND_COMPANY_NAME } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Brand', value: 'Stavalk — precision bench vise manufacturer' },
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Brand relationship', value: `Stavalk is the bench vise manufacturing division of ${BRAND_COMPANY_NAME}. We specialize in professional-grade bench vises for workshops, garages, and industrial applications.` },
    { label: 'Product focus', value: 'Bench vise manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '8,000 m² in-house manufacturing plant' },
    { label: 'Minimum order', value: 'Tiered: 5–10 co-branding · 20–50 pilot · 90–100+ volume per approved configuration' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Oceania' },
    { label: 'Business model', value: 'B2B development & manufacturing only — no end-consumer sales' },
  ],
  es: [
    { label: 'Marca', value: 'Stavalk — fabricante de tornillos de banco de precisión' },
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Relación de marca', value: `Stavalk es la división de fabricación de tornillos de banco de ${BRAND_COMPANY_NAME}. Nos especializamos en tornillos de banco de grado profesional para talleres, garajes e aplicaciones industriales.` },
    { label: 'Enfoque de producto', value: 'Fabricación de tornillos de banco: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta de fabricación propia de 8.000 m²' },
    { label: 'Pedido mínimo', value: 'Escalonado: 5–10 co-branding · 20–50 prueba · 90–100+ volumen por configuración aprobada' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, Oceanía' },
    { label: 'Modelo de negocio', value: 'Desarrollo y fabricación B2B — sin venta al consumidor final' },
  ],
}

export const ENTITY_SAME_AS = [
  'https://www.linkedin.com/company/stavalk',
  'https://www.facebook.com/stavalk',
] as const

export const ENTITY_SERVICES = ['custom-benchvise', 'private-label', 'workshop', 'industrial', 'educational']

export const ENTITY_KNOWS_ABOUT = [
  'bench vise manufacturing',
  'custom vises',
  'vise product development',
  'vise prototyping',
  'private label vises',
  'OEM manufacturing',
  'workshop equipment',
  'industrial vise',
  'machinist vise',
  'vise MOQ tiers',
  'vise production lead time',
  'vise quality control',
  'factory audit',
]

export const ENTITY_SUBJECT_OF = [
  { type: 'WebPage', name: 'Company entity', path: '/about/stavalk-entity' },
  { type: 'WebPage', name: 'Factory & manufacturing capability', path: '/factory' },
  { type: 'WebPage', name: 'Quality, testing & certifications', path: '/quality' },
  { type: 'WebPage', name: 'Custom vise MOQ & lead time', path: '/vise-oem-moq-lead-time' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'OEM Manufacturing',
  '/odm-development': 'ODM Product Development',
  '/solutions/rental-operators': 'Solutions: Workshop Supply',
  '/solutions/retail-partners': 'Solutions: Retail Partners',
  '/solutions/distributors': 'Solutions: Distributors',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/vise-oem-moq-lead-time': 'Custom Vise MOQ & Lead Time',
  '/new-brand-trial-order': 'New-Brand Trial Order',
  '/oem-moq-guide': 'MOQ & Flexible Branding Guide',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance',
}
