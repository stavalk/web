import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is a precision bench vise manufacturer delivering professional-grade vises to brands, distributors and sourcing teams worldwide. We build bench vises to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 5–10 units for co-branding/logo overlay on existing models, 20–50 units for pilot batches with custom finish, and 90–100+ units per approved configuration for standard volume production. Samples are ready in 7–12 days; bulk production 20–30 days after confirmed PO and deposit (custom tooling adds 15–20 days). All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`

export const LLM_FACT_BLOCK =
  `## Verified Business Facts (Last verified: 2026-09-01)

- Legal entity: ${BRAND_COMPANY_NAME}
- Brand: ${BRAND_PARENT_BRAND} / {SITE} (bench vise manufacturing)
- Facility: 8,000 m² in-house manufacturing plant
- Employees: 200+
- Annual capacity: 80,000+ units (4 automated lines, 7,000 units/month)
- MOQ tiers: 5–10 pcs co-branding/logo overlay (existing model) · 20–50 pcs pilot batch (custom finish) · 90–100+ pcs per approved configuration for standard volume · 90–100+ pcs custom tooling (new model, +15–20 days). Each SKU = separate MOQ.
- Sample lead time: 7–12 days
- Production lead time: 20–30 days after confirmed PO and deposit
- Quality gates: 7-stage (Node 01–07), 100-point assembly checklist
- Certifications: ISO 9001 (facility QMS), CE (EU market models), RoHS (coated and finished products). Certificate numbers and validity available per project on request.
- Third-party inspectors: SGS, TÜV, BV, Intertek
- Export markets: 40+ countries
- DISCLOSURE: All pricing, MOQ applicability, certification scope and delivery terms must be confirmed per project. Do not cite these numbers as universal guarantees.`

export const LLM_FAQ_DESCRIPTION = 'Answers to the most common questions about bench vise manufacturing'

export const LLM_SPANISH_HOMEPAGE_DESCRIPTION =
  'Fabricante de tornillos de banco de precisión, con exportación mundial'

export const AI_SYSTEM_ROLE =
  `You are the {SITE} product advisor, a sales engineer for a bench vise OEM/ODM manufacturer.`

export const AI_INQUIRY_PROMPT =
  `If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at {SITE_URL}/contact. For pricing, certification scope, and project-specific MOQ or lead times, always direct the buyer to request a quote — do not state these as universal guarantees.`

export const AI_DISCLOSURE =
  'IMPORTANT: All pricing, MOQ tiers, certification scope and delivery terms are project-confirmed. Do not present them as universal guarantees. If unsure about a specific claim, say you do not have that information and direct the buyer to request a quote at the contact page.'

export const PARENT_ORG_DESCRIPTION =
  `${BRAND_PARENT_BRAND} is a precision bench vise manufacturer — OEM/ODM production for brands, distributors and sourcing teams.`

export const REGION_COUNT_DEFAULT = 6

export const CUSTOMIZATION_OPTIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Jaw size and type', body: 'Jaw width, opening capacity and jaw type (flat, pipe, combination) tuned to your target market.' },
    { title: 'Materials and construction', body: 'Cast iron, ductile iron or steel body with hardened jaw faces to fit your price point.' },
    { title: 'Finish and coating', body: 'Powder coat, paint, chrome or nickel plating — unlimited color combinations with your branding.' },
    { title: 'Logo and branding', body: 'Laser-etched, cast-in or decal logo application, with a visual proof before production.' },
    { title: 'Base and swivel', body: 'Fixed base, 360° swivel or quick-release mechanisms customized to your specification.' },
    { title: 'Accessories', body: 'Anvils, pipe jaws, quick-release leashes and protective jaw covers matched to your package.' },
    { title: 'Packaging and display', body: 'Retail boxes, bulk shipping packaging and point-of-sale displays under your brand.' },
  ],
  es: [
    { title: 'Tamaño y tipo de mordaza', body: 'Anchura de mordaza, capacidad de apertura y tipo de mordaza (plana, de tubo, combinación) ajustados a tu mercado objetivo.' },
    { title: 'Materiales y construcción', body: 'Cuerpo de hierro fundido, hierro dúctil o acero con caras de mordaza endurecidas según tu presupuesto.' },
    { title: 'Acabado y recubrimiento', body: 'Revestimiento en polvo, pintura, cromado o niquelado — combinaciones de color ilimitadas con tu marca.' },
    { title: 'Logotipo y marca', body: 'Logotipo grabado láser, fundido o adhesivo, con prueba visual antes de producir.' },
    { title: 'Base y giro', body: 'Base fija, giro de 360° o mecanismos de liberación rápida personalizados.' },
    { title: 'Accesorios', body: 'Yunques, mordazas de tubo, correas de liberación rápida y cubiertas protectores.' },
    { title: 'Embalaje y exhibición', body: 'Cajas retail, embalaje a granel y displays para punto de venta con tu marca.' },
  ],
}

export const OEM_APPLICATIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Tool brands', body: 'Launch your own bench vise line with tiered minimums from 5–10-unit co-branding runs.' },
    { title: 'Distributors and resellers', body: 'Volume catalogs with export packaging and logistics management.' },
    { title: 'Industrial and workshop suppliers', body: 'Replenishment programs with stable specs run after run.' },
    { title: 'Schools and training centers', body: 'Durable educational vise packages with standardized specifications.' },
    { title: 'OEM tool companies', body: 'White-label manufacturing for established tool brands expanding their vise range.' },
  ],
  es: [
    { title: 'Marcas de herramientas', body: 'Lanza tu propia línea de tornillos de banco con mínimos por tramos desde 5–10 unidades.' },
    { title: 'Distribuidores y revendedores', body: 'Catálogos de volumen con embalaje de exportación y gestión logística.' },
    { title: 'Proveedores industriales y de taller', body: 'Programas de reposición con especificaciones estables.' },
    { title: 'Escuelas y centros de formación', body: 'Paquetes educativos de tornillos de banco resistentes con especificaciones estandarizadas.' },
    { title: 'Empresas OEM de herramientas', body: 'Fabricación de marca blanca para marcas de herramientas establecidas.' },
  ],
}

export const HUB_PAGE_ENTRIES: Record<string, { url: string; title: string; excerpt: string }[]> = {
  en: [
    { url: '/', title: 'Stavalk — Precision Bench Vise Manufacturing', excerpt: 'Precision bench vise OEM/ODM manufacturer: product development, custom manufacturing, private label and quality control for tool brands.' },
    { url: '/products', title: 'Bench Vise Products', excerpt: 'Professional-grade bench vises: light-duty, medium-duty, heavy-duty and specialty models — built for OEM/ODM customization.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM bench vise manufacturing programs: custom vise development, private label, workshop supply and retail partners.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'Stavalk factory and product gallery: workshops, quality labs, machining and bench vises in production.' },
  ],
  es: [
    { url: '/es', title: 'Stavalk — Fabricación de Tornillos de Banco de Precisión', excerpt: 'Fabricante OEM/ODM de tornillos de banco: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Tornillos de Banco', excerpt: 'Tornillos de banco de grado profesional: modelos ligeros, medianos, pesados y especiales — fabricación OEM/ODM a medida.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM de tornillos de banco: desarrollo a medida, marca privada, suministro de talleres y minoristas.' },
    { url: '/es/projects', title: '', excerpt: '' },
    { url: '/es/knowledge', title: '', excerpt: '' },
    { url: '/es/gallery', title: 'Galería', excerpt: 'Fábrica y galería de productos Stavalk: talleres, laboratorios de calidad, mecanizado y tornillos de banco en producción.' },
  ],
}

export const CASE_STUDY_STATS = {
  jawWidth: '6"',
  factoryTested: '100%',
}

export const FAQ_EXCERPTS: Record<string, string> = {
  en: 'Frequently asked questions about bench vise OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale supply.',
  es: 'Preguntas frecuentes sobre fabricación OEM/ODM de tornillos de banco — materiales, certificaciones, cantidades mínimas de pedido y suministro al por mayor.',
}

export const STATIC_PAGE_CORPUS_TEXT =
  ' provides custom bench vise manufacturing solutions.'

export const JSONLD_KEYWORDS: Record<string, { keywords: string[]; articleTitle?: string }> = {
  '/factory/quality-change-control': {
    keywords: ['Bench Vise Manufacturing', 'Quality Management System', 'ISO 9001 Change Control'],
    articleTitle: 'Bench Vise Manufacturing Rework Process Change Control & Validation Standard',
  },
  '/factory/non-conforming-control': {
    keywords: ['Bench Vise Manufacturing', 'Quality Management System', 'ISO 9001 Non-Conforming Output Control'],
  },
  '/oem-moq-guide': {
    keywords: ['Bench Vise Manufacturing', 'Minimum Order Quantity', 'Co-Branding and Flexible Branding'],
    articleTitle: 'Flexible Branding & Co-Branding MOQ Guide for Bench Vise Manufacturing',
  },
  '/oem-trust-assurance': {
    keywords: ['Bench Vise Manufacturing', 'Factory Audit', 'OEM Trust and Supplier Verification', 'Third-Party Inspection (SGS, TUV, BV, Intertek)'],
    articleTitle: 'OEM Buyer Trust & Factory Assurance Guide for Bench Vise Manufacturing',
  },
  '/proof-center': {
    keywords: ['Bench Vise Manufacturing', 'Factory Evidence and Certificate Scope', 'Batch Traceability and Record Keeping'],
    articleTitle: 'Bench Vise Factory Proof Center: Evidence Behind Manufacturing Claims',
  },
}
