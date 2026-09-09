import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry — challenge —
 * solution — product — process — result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  customerType: string
  region: string
  productCategory: string
  projectStage: string
  manufacturingScope: string
  keyRequirements: string
  qualityFocus: string
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  customizations: string[]
  inspectionFocus: string[]
  confidentiality: string
  tags: string[]
  metrics?: { value: string; label: string }[]
  takeaways?: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'german-hardware-brand-oem',
      customerType: 'Hardware Brands & OEM Buyers',
      region: 'Germany · EU',
      productCategory: 'Medium-Duty Bench Vise (6″ + 8″ jaw)',
      projectStage: 'Requirement analysis → Sample approval → 3-model volume delivery',
      manufacturingScope: 'OEM tooling, custom branding, packaging, volume production',
      keyRequirements: 'Three medium-duty models under brand, CE certification, retail-ready packaging',
      qualityFocus: 'Jaw hardness, clamping force per model, branding accuracy, packaging per market',
      navLabel: 'German Hardware OEM',
      metaTitle: 'German Hardware OEM | 3 Medium-Duty Vise Models | Stavalk',
      metaDescription:
        'How a German hardware brand launched three OEM medium-duty bench vises — custom branding, CE certification and retail packaging, delivered in two volume batches.',
      kicker: 'OEM Manufacturing Project',
      h1: 'How a German Hardware Brand Launched Three OEM Medium-Duty Vises',
      intro: [
        'A German hardware brand wanted its own bench vise line for the prosumer market — three medium-duty models under its brand, CE-certified and shelf-ready in German retail packaging.',
      ],
      industry: 'Hardware & Tools',
      requirement: 'Three medium-duty bench vises (6″ and 8″ jaws) under the brand, 200 units per model, CE certified, retail packaging, delivered in two batches within 90 days.',
      challenge:
        'The brand was new to workholding and had no casting or machining capability. Vises had to carry the brand\'s identity in the casting and packaging, meet EU compliance, and land together for the retail launch.',
      solution:
        'Three proven medium-duty platforms specified per model, brand casting marks and laser-engraved jaws, CE documentation package, and a two-batch production schedule aligned to the launch date.',
      product: 'OEM medium-duty bench vise — 6″ and 8″ jaws, 3000-4000 lbs clamping force, hardened steel jaws, 360° swivel base, powder coat in brand color.',
      process: [
        { title: 'Model specification', body: 'Three jaw/model combinations set for retail coverage.' },
        { title: 'Branding & tooling', body: 'Casting marks, engraved jaws and packaging artwork approved.' },
        { title: 'Volume production', body: 'Two batches scheduled against the retail launch window.' },
        { title: 'Compliance & delivery', body: 'CE documentation, QC inspection and export handled end to end.' },
      ],
      result:
        'All three models with complete retail packaging shipped in two batches within 90 days, CE-certified for EU retail. The brand extended the line with an 8″ heavy-duty model the following season.',
      outcome: '3 models · 600 units · 90 days · CE certified.',
      metrics: [
        { value: '3', label: 'medium-duty models under the brand' },
        { value: '600', label: 'units delivered in two batches' },
        { value: '90', label: 'days from order to final delivery' },
        { value: 'CE', label: 'certified for EU retail' },
      ],
      takeaways: [
        'Three models from 50-200 pcs each let a new brand fill a category without a single giant order.',
        'Branding in the casting and jaws — not just the box — is what makes OEM feel like a real line.',
        'CE documentation handled by the factory removes a common launch blocker.',
        'Two batches against a fixed launch date keep retail commitments without idle inventory.',
      ],
      customizations: [
        '6″ and 8″ jaw platforms matched to prosumer use',
        'Brand casting marks and laser-engraved jaw branding',
        'Powder coat finishes in the brand color palette',
        'Retail packaging with German-market labels and manual',
        'CE documentation package per model',
        'Two-batch delivery aligned to the retail launch',
      ],
      inspectionFocus: [
        'Jaw hardness verification (58-62 HRC) per batch',
        'Clamping force testing per model',
        'Swivel base torque and locking verification',
        'Branding and engraving accuracy',
        'Package, label and manual completeness per market',
      ],
      confidentiality:
        'By agreement, the brand\'s name is not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['OEM branding', 'CE certification', 'Retail packaging'],
    },
    {
      slug: 'us-tool-retailer-private-label',
      customerType: 'Distributors & Retailers',
      region: 'United States',
      productCategory: 'Private Label Bench Vise (3 SKUs)',
      projectStage: 'Range planning → Sample approval → Single batch delivery',
      manufacturingScope: 'Private-label branding, retail packaging, volume production',
      keyRequirements: 'Three SKUs under retailer brand, US market packaging, e-commerce-ready boxes',
      qualityFocus: 'Artwork accuracy, upc/label per SKU, jaw machining, finish consistency',
      navLabel: 'US Retailer Private Label',
      metaTitle: 'US Retailer Private Label | 3 Vise SKUs for the Web | Stavalk',
      metaDescription:
        'How a US e-commerce tool retailer launched a private-label bench vise line — three SKUs, US packaging, e-commerce-ready, with a repeat order.',
      kicker: 'Private Label Project',
      h1: 'How a US Retailer Launched a Private-Label Bench Vise Line',
      intro: [
        'A US e-commerce tool retailer wanted its own bench vise SKUs to own the margin — three sizes for its web catalog, ready to ship in e-commerce packaging.',
      ],
      industry: 'Tools & E-commerce Retail',
      requirement: 'Three private-label bench vises (4″, 6″, 8″ jaws) under the retailer brand, US packaging with UPC labels, delivered in one batch of 500 units.',
      challenge:
        'The retailer needed differentiated SKUs that still carried the margin advantage of private label, with packaging engineered for direct-to-consumer shipping — no retail shelf presentation required.',
      solution:
        'Three standard platforms in light, medium and heavy duty, private-label branding, robust e-commerce cartons sized for carrier shipping, and a single batch delivery with QC verified per SKU.',
      product: 'Private label bench vise — 4″, 6″ and 8″ jaws, cast iron bodies, branded finish, e-commerce carton.',
      process: [
        { title: 'Range planning', body: 'Three sizes chosen for web-catalog coverage.' },
        { title: 'Sample approval', body: 'Artwork, finish and carton confirmed on physical units.' },
        { title: 'Volume production', body: '500 units across three SKUs in one batch.' },
        { title: 'Repeat order', body: 'Sell-through triggered a reorder on the same spec.' },
      ],
      result:
        '500 units across three SKUs shipped in one batch with e-commerce-ready packaging. The line sold through online and the retailer reordered on the same locked specification.',
      outcome: '3 SKUs · 500 units · one batch · repeat order.',
      metrics: [
        { value: '3', label: 'bench vise SKUs under private label' },
        { value: '500', label: 'units in the first batch' },
        { value: '1', label: 'batch delivered on schedule' },
        { value: 'Repeat', label: 'order on the same spec' },
      ],
      takeaways: [
        'A range from 4″ to 8″ jaws covers the web category without fragmenting inventory.',
        'One program handles branding, QC and packaging — the retailer adds only photography.',
        'E-commerce cartons sized for carriers cut the retailer\'s re-pack labor to zero.',
        'A locked spec makes the repeat order a vendor-managed refresh, not a new project.',
      ],
      customizations: [
        '4″, 6″ and 8″ jaw platforms for catalog coverage',
        'Private-label finish and logo application per SKU',
        'E-commerce cartons with UPC and shipping labels',
        'SKU-specific packaging inserts and manuals',
        'QC verified per SKU in a single batch',
        'Specification locked for repeat-order consistency',
      ],
      inspectionFocus: [
        'Jaw machining and finish consistency across SKUs',
        'Artwork and label accuracy per SKU',
        'UPC and legal label verification for US market',
        'Carton integrity for carrier shipping',
        'Clamping force spot checks per batch',
      ],
      confidentiality:
        'By agreement, the retailer\'s name is not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Private label', 'E-commerce packaging', 'Range launch'],
    },
    {
      slug: 'australian-construction-supply',
      customerType: 'Distribution & Supply Chains',
      region: 'Australia',
      productCategory: 'Heavy-Duty Bench Vise (10″ jaw)',
      projectStage: 'Fleet program → Sample approval → Phased delivery',
      manufacturingScope: 'Heavy-duty specification, corrosion coating, fleet supply',
      keyRequirements: 'Vises for harsh mining site conditions, corrosion resistance, bulk fleet pricing',
      qualityFocus: 'Forged steel body, jaw hardness, salt spray testing, coating durability',
      navLabel: 'Australian Construction Supply',
      metaTitle: 'Australian Construction Supply | 10″ Heavy-Duty Vises | Stavalk',
      metaDescription:
        'How an Australian construction supplier sourced 10″ heavy-duty vises for mining operations — forged steel, corrosion-resistant, in a fleet supply program.',
      kicker: 'Industrial Supply Project',
      h1: 'How a Supply Partner Equipped Australian Mining Sites with Heavy-Duty Vises',
      intro: [
        'An Australian construction supply company needed heavy-duty vises that survive mining site conditions — 10″ jaws, forged steel, corrosion resistance, shipped as a fleet program.',
      ],
      industry: 'Construction & Mining Supply',
      requirement: '100 heavy-duty 10″ vises with forged steel bodies and corrosion-resistant coating, fleet pricing, delivered in two phased lots for multiple sites.',
      challenge:
        'Mining maintenance shops chew through tools; standard cast iron vises cracked under the work and corroded quickly in the environment. The supplier needed a spec that outlasted the equipment and a price that held for fleet volumes.',
      solution:
        'A forged-steel 10″ heavy-duty platform with a phosphate and powder coat finish, salt-spray tested, supplied through a fleet program with site-wise allocation and a reorder lane.',
      product: 'Heavy-duty bench vise — 10″ jaw, 6000-8000 lbs clamping force, forged 45# steel body, corrosion-resistant coating.',
      process: [
        { title: 'Site survey', body: 'Workload and environment set the forged steel + coating spec.' },
        { title: 'Sample approval', body: 'Corrosion and clamping performance verified on a physical unit.' },
        { title: 'Phased delivery', body: 'Two lots allocated per site usage and delivery timetable.' },
        { title: 'Fleet support', body: 'Spare jaw inserts and a reorder lane on the same spec.' },
      ],
      result:
        'All 100 vises delivered in two phased lots with fleet pricing. Site feedback showed longer service life against the previous cast iron units, and the program was extended to additional sites.',
      outcome: '100 vises · 2 lots · fleet pricing · program extended.',
      metrics: [
        { value: '100', label: 'heavy-duty vises supplied' },
        { value: '10″', label: 'jaw width, forged steel body' },
        { value: '2', label: 'phased deliveries across sites' },
        { value: 'Extended', label: 'program to more sites' },
      ],
      takeaways: [
        'Forged steel is the spec for shock-load and harsh environments, not a premium nicety.',
        'A corrosion coating tested by salt spray earns its cost in mining conditions.',
        'Fleet pricing plus a reorder lane converts a one-off buy into a managed program.',
        'Phased lots keep capital spread while sites keep working.',
      ],
      customizations: [
        '10″ forged steel body for extreme service',
        'Phosphate + powder coat corrosion-resistant finish',
        'Site-wise allocation across two phased lots',
        'Fleet pricing on combined volume',
        'Spare jaw insert packs per site',
        'Reorder lane on the locked specification',
      ],
      inspectionFocus: [
        'Forged steel body integrity per unit',
        'Jaw hardness verification (58-62 HRC)',
        'Salt spray corrosion test per batch',
        'Coating thickness and adhesion checks',
        'Clamping force at 120% of rated capacity',
      ],
      confidentiality:
        'By agreement, the supply partner and site locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Forged steel', 'Corrosion resistance', 'Fleet program'],
    },
    {
      slug: 'middle-east-pipe-fitting',
      customerType: 'Contractors & EPC',
      region: 'Middle East',
      productCategory: 'Chain & Tripod Pipe Vises',
      projectStage: 'Product selection → Sample approval → Bulk delivery',
      manufacturingScope: 'Pipe vise range, corrosion finish, bulk supply',
      keyRequirements: 'Portable and chain pipe vises for harsh conditions, wide pipe capacity, bulk pricing',
      qualityFocus: 'V-jaw grip, chain durability, coating, pipe capacity verification',
      navLabel: 'MEP Pipe Vise Supply',
      metaTitle: 'MEP Pipe Vise Supply | 1/4″-6″ Capacity | Stavalk',
      metaDescription:
        'How a Middle East MEP contractor supplied 80 pipe vises for oil & gas and plumbing crews — chain and tripod, corrosion-protected, from 1/4″ to 6″ capacity.',
      kicker: 'MEP Supply Project',
      h1: 'How a Contractor Equipped Oil & Gas Crews with Pipe Vises',
      intro: [
        'A Middle East MEP contractor needed pipe vises for plumbing and oil & gas crews — a mix of bench and portable units, corrosion-protected for the environment, at bulk prices.',
      ],
      industry: 'MEP & Oil & Gas Contracting',
      requirement: '80 pipe vises — chain and tripod configurations — covering 1/4″ to 6″ capacity, corrosion-protected, delivered for a program of site projects.',
      challenge:
        'Crews work across sites in a harsh environment. Portability mattered for field fitting, holding power for heavy pipe, and corrosion resistance for the climate — all at a price that worked for project budgets.',
      solution:
        'A standardized range of chain and tripod pipe vises with hardened V-jaws and corrosion-resistant coating, sized across the pipe range crews actually cut, with bulk pricing and spare chain links.',
      product: 'Pipe vises — chain (1/4″-4″) and tripod (1/4″-6″) configurations, hardened V-jaws, corrosion-resistant finish.',
      process: [
        { title: 'Application review', body: 'Crew workflow set the mix of chain vs tripod units.' },
        { title: 'Range selection', body: 'Pipe capacity tiers matched to project piping.' },
        { title: 'Bulk production', body: '80 units across the range in one program.' },
        { title: 'Delivery & spares', body: 'Shipment with spare chain links per unit.' },
      ],
      result:
        '80 units delivered across chain and tripod configurations sized to the crew\'s pipe range. Site reports confirmed secure pipe grip and reduced time repositioning work, with units staying corrosion-free.',
      outcome: '80 vises · 1/4″-6″ capacity · chain + tripod · spares included.',
      metrics: [
        { value: '80', label: 'pipe vises supplied' },
        { value: '1/4″-6″', label: 'pipe capacity coverage' },
        { value: '2', label: 'configurations — chain and tripod' },
        { value: 'Corrosion', label: 'protected for site conditions' },
      ],
      takeaways: [
        'Mixing chain and tripod units matches fixed shops and mobile crews separately.',
        'Pipe capacity tiers should mirror the real piping range, not a wider catalog.',
        'Spare chain links in the delivery keep units working without procurement delays.',
        'A corrosion finish is mandatory in these environments, not an upgrade.',
      ],
      customizations: [
        'Chain and tripod configurations mixed to workflow',
        'Pipe capacity tiers matched to project piping',
        'Corrosion-resistant coating on all units',
        'Hardened V-jaw inserts for secure round-stock grip',
        'Bulk pricing across the combined program',
        'Spare chain link packs per unit',
      ],
      inspectionFocus: [
        'V-jaw grip and hardened insert verification',
        'Chain durability and link strength testing',
        'Coating and corrosion resistance checks',
        'Pipe capacity verification per model',
        'Open/close mechanism function per unit',
      ],
      confidentiality:
        'By agreement, the contractor and project locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Pipe vises', 'Portable supply', 'Corrosion protection'],
    },
    {
      slug: 'japanese-automotive-plant',
      customerType: 'Industrial & OEM Buyers',
      region: 'Japan',
      productCategory: 'Medium-Duty Bench Vise (6″ jaw)',
      projectStage: 'Fleet refresh → Sample approval → Phased roll-out',
      manufacturingScope: 'Fleet specification, quick-release mechanism, volume delivery',
      keyRequirements: 'Consistent fleet across workstations, quick-release, anti-vibration mounts',
      qualityFocus: 'Mechanism reliability, machining tolerance, jaw alignment, cycle durability',
      navLabel: 'Automotive Plant Refresh',
      metaTitle: 'Automotive Plant Vise Refresh | 150 Medium-Duty Units | Stavalk',
      metaDescription:
        'How a Japanese automotive plant refreshed its workholding fleet with 150 medium-duty vises — quick-release, anti-vibration, and consistent across workstations.',
      kicker: 'Plant Refresh Project',
      h1: 'How an Automotive Plant Refreshed 150 Workstations with Medium-Duty Vises',
      intro: [
        'A Japanese automotive plant replaced its aging workholding fleet across 150 workstations — consistent spec, quick-release convenience and low-vibration mounting.',
      ],
      industry: 'Automotive Manufacturing',
      requirement: '150 medium-duty 6″ vises with quick-release mechanism and anti-vibration mounting, delivered in a phased roll-out across production lines.',
      challenge:
        'The old fleet had drifted in spec as units were replaced ad hoc, causing inconsistent clamping across lines. Downtime during changeover had to be minimized with a phased plan.',
      solution:
        'A single standardized 6″ medium-duty platform with quick-release, anti-vibration mounting hardware, and phased delivery that replaced one line at a time with identical units.',
      product: 'Medium-duty bench vise — 6″ jaw, 3000-4000 lbs clamping force, quick-release lever, anti-vibration mounting set.',
      process: [
        { title: 'Workstation survey', body: 'Line-by-line spec and clamping needs documented.' },
        { title: 'Sample approval', body: 'Quick-release and mount hardware verified on trial units.' },
        { title: 'Phased roll-out', body: 'One production line at a time, minimizing changeover downtime.' },
        { title: 'Fleet consistency', body: 'Identical spec across all 150 units for uniform clamping.' },
      ],
      result:
        '150 units rolled out line by line with minimal downtime. The standardized fleet removed the spec drift, and clamping consistency across workstations was restored on identical units.',
      outcome: '150 vises · phased roll-out · consistent fleet spec.',
      metrics: [
        { value: '150', label: 'workstations refreshed' },
        { value: '6″', label: 'standardized jaw width' },
        { value: 'Phased', label: 'roll-out, one line at a time' },
        { value: '100%', label: 'identical fleet specification' },
      ],
      takeaways: [
        'A phased line-by-line roll-out protects production while a fleet is refreshed.',
        'Identical spec across units removes the clamping inconsistency ad hoc replacements create.',
        'Quick-release pays for itself in high-cycle stations by shortening changeover.',
        'Anti-vibration mounts keep precision work stable without repeated re-tightening.',
      ],
      customizations: [
        'One standardized 6″ platform across the fleet',
        'Quick-release lever on every unit',
        'Anti-vibration mounting hardware per station',
        'Phased line-by-line delivery',
        'Uniform jaw and finish spec fleet-wide',
        'Maintenance and replacement parts package',
      ],
      inspectionFocus: [
        'Quick-release mechanism reliability across units',
        'Machining tolerance and jaw alignment',
        'Jaw hardness and wear resistance',
        'Cycle durability testing per batch',
        'Anti-vibration mount function verification',
      ],
      confidentiality:
        'By agreement, the plant and manufacturer are not identified. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Fleet refresh', 'Quick-release', 'Plant standardization'],
    },
    {
      slug: 'brazilian-vocational-school',
      customerType: 'Education & Institutions',
      region: 'Brazil',
      productCategory: 'Light-Duty Bench Vise (4″ jaw)',
      projectStage: 'Program outfitting → Sample approval → Volume delivery',
      manufacturingScope: 'Tiered program supply, safety marking, volume pricing',
      keyRequirements: 'Student-friendly vises, safety guidance, quantity matching class stations',
      qualityFocus: 'Finish safety, capacity markings, student handling, durability',
      navLabel: 'Vocational School Program',
      metaTitle: 'Vocational School Vise Program | 240 Light-Duty Units | Stavalk',
      metaDescription:
        'How a Brazilian technical school equipped 12 workshops with 240 light-duty vises — student-friendly, safety-marked, within program budget.',
      kicker: 'Education Program Project',
      h1: 'How a Technical School Outfitted 12 Workshops with Student Vises',
      intro: [
        'A Brazilian technical school outfitted its machining and craft workshops with a student-friendly light-duty vise, safety-marked and sourced within a program budget.',
      ],
      industry: 'Education & Vocational Training',
      requirement: '240 light-duty 4″ vises for 12 workshops, safety-marked, student-friendly design, delivered with program pricing and guidance.',
      challenge:
        'Classes mix skill levels and run high utilization. Vises had to be safe for young students, consistent across many stations, and priced to fit an education procurement cycle.',
      solution:
        'A 4″ light-duty platform with smooth-action mechanism, capacity and safety markings, uniform delivery across all 12 workshops, and program pricing with spare parts.',
      product: 'Light-duty bench vise — 4″ jaw, 1200-1500 lbs clamping force, smooth action, safety markings, cast iron body.',
      process: [
        { title: 'Program review', body: 'Station count and skill levels set the quantity and spec.' },
        { title: 'Sample approval', body: 'Safety, action and finish verified on trial units.' },
        { title: 'Volume delivery', body: '240 units allocated evenly across 12 workshops.' },
        { title: 'Program support', body: 'Spare parts and maintenance guidance for ongoing cohorts.' },
      ],
      result:
        '240 units delivered across 12 workshops with uniform specifications. Instructors noted faster student setup and fewer misuse issues with the safety-marked units.',
      outcome: '240 vises · 12 workshops · safety-marked · program pricing.',
      metrics: [
        { value: '240', label: 'student vises supplied' },
        { value: '12', label: 'workshops outfitted' },
        { value: '4″', label: 'jaw width across the fleet' },
        { value: '100%', label: 'uniform program specification' },
      ],
      takeaways: [
        'Uniform spec across many stations keeps instruction consistent and inventory simple.',
        'Capacity and safety markings meaningfully reduce misuse incidents in classrooms.',
        'Program pricing built around station count fits education budgets.',
        'Spare parts in the delivery keep stations working through a school year.',
      ],
      customizations: [
        '4″ light-duty platform with smooth action',
        'Capacity and safety markings on each unit',
        'Uniform finish and spec across all workshops',
        'Program pricing on the combined volume',
        'Spare parts package per workshop',
        'Delivery aligned to the school procurement cycle',
      ],
      inspectionFocus: [
        'Smooth-action mechanism and safe operation',
        'Safety and capacity marking accuracy',
        'Finish quality and edge safety on student units',
        'Jaw alignment and holding consistency',
        'Durability checks for high-utilization use',
      ],
      confidentiality:
        'By agreement, the school is not identified. This project is presented anonymously to protect institutional confidentiality.',
      tags: ['Education program', 'Safety-marked', 'Volume supply'],
    },
  ],
  es: [
    {
      slug: 'german-hardware-brand-oem',
      customerType: 'Marcas de ferretería y compradores OEM',
      region: 'Alemania · UE',
      productCategory: 'Mordaza de banco media (boca 6″ + 8″)',
      projectStage: 'Análisis de requisitos → Aprobación de muestra → Entrega de 3 modelos',
      manufacturingScope: 'Utillaje OEM, marca personalizada, embalaje, producción en volumen',
      keyRequirements: 'Tres modelos medios bajo marca, certificación CE, embalaje retail',
      qualityFocus: 'Dureza de boca, fuerza de sujeción, precisión de marca, embalaje por mercado',
      navLabel: 'OEM marca alemana',
      metaTitle: 'OEM marca alemana | 3 modelos medios | Stavalk',
      metaDescription:
        'Cómo una marca alemana lanzó tres mordazas medias OEM — marca personalizada, CE y embalaje retail, entregadas en dos lotes.',
      kicker: 'Proyecto de fabricación OEM',
      h1: 'Cómo una marca alemana lanzó tres mordazas medias OEM',
      intro: [
        'Una marca alemana de ferretería quería su propia línea de mordazas para el mercado prosumidor: tres modelos medios bajo su marca, certificados CE y listos para la estantería.',
      ],
      industry: 'Ferretería y herramientas',
      requirement: 'Tres mordazas medias (bocas 6″ y 8″) bajo la marca, 200 uds. por modelo, CE, embalaje retail, en dos lotes en 90 días.',
      challenge:
        'La marca era nueva en sujeción y no tenía fundición ni mecanizado. Las mordazas debían llevar su identidad, cumplir la UE y llegar juntas para el lanzamiento.',
      solution:
        'Tres plataformas medias probadas especificadas por modelo, marcas de fundición y mordazas grabadas, paquete CE y un calendario de dos lotes para el lanzamiento.',
      product: 'Mordaza media OEM — bocas 6″ y 8″, 3000-4000 lbs, acero endurecido, base 360°, acabado en polvo.',
      process: [
        { title: 'Especificación de modelos', body: 'Tres combinaciones boca/modelo para el retail.' },
        { title: 'Marca y utillaje', body: 'Marcas de fundición, grabado y embalaje aprobados.' },
        { title: 'Producción en volumen', body: 'Dos lotes alineados con el lanzamiento.' },
        { title: 'Cumplimiento y entrega', body: 'CE, control de calidad y exportación de principio a fin.' },
      ],
      result:
        'Los tres modelos con embalaje retail completo llegaron en dos lotes en 90 días con certificación CE. La marca amplió la línea con un modelo pesado de 8″ la siguiente temporada.',
      outcome: '3 modelos · 600 uds. · 90 días · CE.',
      metrics: [
        { value: '3', label: 'modelos medios bajo la marca' },
        { value: '600', label: 'uds. en dos lotes' },
        { value: '90', label: 'días hasta la entrega final' },
        { value: 'CE', label: 'certificado para retail UE' },
      ],
      takeaways: [
        'Tres modelos de cantidad media llenan una categoría sin un pedido gigante.',
        'La marca en la fundición y las mordazas — no solo la caja — hace que el OEM parezca una línea real.',
        'La documentación CE gestionada por la fábrica elimina un bloqueo habitual.',
        'Dos lotes contra una fecha fija mantienen compromisos sin inventario ocioso.',
      ],
      customizations: [
        'Plataformas de boca 6″ y 8″ según uso prosumidor',
        'Marcas de fundición y grabado láser de marca',
        'Acabados en polvo en la paleta de la marca',
        'Embalaje retail con etiquetas y manual en alemán',
        'Paquete de documentación CE por modelo',
        'Entrega en dos lotes para el lanzamiento',
      ],
      inspectionFocus: [
        'Dureza de boca (58-62 HRC) por lote',
        'Fuerza de sujeción por modelo',
        'Par y bloqueo de la base giratoria',
        'Precisión de la marca y el grabado',
        'Completitud de embalaje, etiqueta y manual',
      ],
      confidentiality:
        'Por acuerdo, no se revela el nombre de la marca. Este proyecto se presenta de forma anónima.',
      tags: ['Marca OEM', 'Certificación CE', 'Embalaje retail'],
    },
    {
      slug: 'us-tool-retailer-private-label',
      customerType: 'Distribuidores y minoristas',
      region: 'Estados Unidos',
      productCategory: 'Mordaza de marca privada (3 SKUs)',
      projectStage: 'Planificación → Aprobación de muestra → Entrega en un lote',
      manufacturingScope: 'Marca privada, embalaje retail, producción en volumen',
      keyRequirements: 'Tres SKUs bajo marca, embalaje de EE. UU., cajas listas para e-commerce',
      qualityFocus: 'Precisión de arte, UPC/etiqueta por SKU, mecanizado, acabado',
      navLabel: 'Marca privada minorista EE. UU.',
      metaTitle: 'Marca privada minorista EE. UU. | 3 SKUs | Stavalk',
      metaDescription:
        'Cómo un minorista estadounidense lanzó su línea de mordazas de marca privada — tres SKUs, embalaje UE, con reorden.',
      kicker: 'Proyecto de marca privada',
      h1: 'Cómo un minorista estadounidense lanzó una línea de mordazas de marca privada',
      intro: [
        'Un minorista estadounidense de herramientas quería sus propios SKUs de mordazas para poseer el margen: tres tamaños para el catálogo web.',
      ],
      industry: 'Herramientas y e-commerce',
      requirement: 'Tres mordazas de marca privada (bocas 4″, 6″, 8″) bajo su marca, embalaje de EE. UU. con UPC, 500 uds. en un lote.',
      challenge:
        'El minorista necesitaba SKUs diferenciados con margen de marca privada y embalaje listo para envío directo al consumidor.',
      solution:
        'Tres plataformas estándar en ligera, media y pesada, marca privada, cajas de e-commerce y entrega en un solo lote con QC por SKU.',
      product: 'Mordaza de marca privada — bocas 4″, 6″ y 8″, cuerpo de fundición, acabado de marca, caja de e-commerce.',
      process: [
        { title: 'Planificación del rango', body: 'Tres tamaños para cobertura del catálogo.' },
        { title: 'Aprobación de muestra', body: 'Arte, acabado y caja confirmados en unidades físicas.' },
        { title: 'Producción en volumen', body: '500 uds. en tres SKUs en un lote.' },
        { title: 'Reorden', body: 'La venta del producto disparó un reorden con la misma especificación.' },
      ],
      result:
        '500 uds. en tres SKUs llegaron en un lote con embalaje listo para e-commerce. La línea se vendió online y el minorista reordenó la misma especificación.',
      outcome: '3 SKUs · 500 uds. · un lote · reorden.',
      metrics: [
        { value: '3', label: 'SKUs de mordazas de marca privada' },
        { value: '500', label: 'uds. en el primer lote' },
        { value: '1', label: 'lote entregado a tiempo' },
        { value: 'Reorden', label: 'con la misma especificación' },
      ],
      takeaways: [
        'Un rango de 4″ a 8″ cubre la categoría web sin fragmentar inventario.',
        'Un solo programa gestiona marca, QC y embalaje.',
        'Las cajas de e-commerce eliminan el re-empaque del minorista.',
        'Una especificación fijada hace del reorden una renovación gestionada.',
      ],
      customizations: [
        'Plataformas 4″, 6″ y 8″ para cobertura',
        'Acabado y logo de marca privada por SKU',
        'Cajas de e-commerce con UPC y etiquetas',
        'Insertos y manuales específicos por SKU',
        'QC verificado por SKU en un lote',
        'Especificación fijada para el reorden',
      ],
      inspectionFocus: [
        'Mecanizado y acabado consistente entre SKUs',
        'Precisión de arte y etiqueta por SKU',
        'Verificación de UPC para EE. UU.',
        'Integridad de caja para envío',
        'Comprobaciones de fuerza por lote',
      ],
      confidentiality:
        'Por acuerdo, no se revela el nombre del minorista. Este proyecto se presenta de forma anónima.',
      tags: ['Marca privada', 'Embalaje e-commerce', 'Lanzamiento de rango'],
    },
    {
      slug: 'australian-construction-supply',
      customerType: 'Distribución y cadena de suministro',
      region: 'Australia',
      productCategory: 'Mordaza pesada (boca 10″)',
      projectStage: 'Programa de flota → Aprobación de muestra → Entrega por fases',
      manufacturingScope: 'Especificación pesada, recubrimiento anticorrosivo, suministro de flota',
      keyRequirements: 'Mordazas para minería, resistencia a la corrosión, precio de flota',
      qualityFocus: 'Cuerpo de acero forjado, dureza de boca, prueba de salmuera',
      navLabel: 'Suministro construcción Australia',
      metaTitle: 'Suministro construcción Australia | 10″ pesadas | Stavalk',
      metaDescription:
        'Cómo un proveedor australiano abasteció operaciones mineras con mordazas pesadas de 10″ — acero forjado y anticorrosivo, en programa de flota.',
      kicker: 'Proyecto de suministro industrial',
      h1: 'Cómo un socio de suministro equipó minas australianas con mordazas pesadas',
      intro: [
        'Un proveedor australiano necesitaba mordazas pesadas que sobrevivan a la minería — 10″ de boca, acero forjado, anticorrosivas, como programa de flota.',
      ],
      industry: 'Suministro de construcción y minería',
      requirement: '100 mordazas pesadas de 10″ con cuerpo de acero forjado y acabado anticorrosivo, precio de flota, en dos lotes.',
      challenge:
        'Los talleres de mantenimiento minero desgastan las herramientas; el hierro fundido se agrietaba y corroía rápido. El proveedor necesitaba una especificación que durara y un precio para volumen.',
      solution:
        'Una plataforma pesada de 10″ en acero forjado con acabado fosfatado y pintura en polvo, probada en salmuera, con asignación por sitio y reorden.',
      product: 'Mordaza pesada — boca 10″, 6000-8000 lbs, cuerpo de acero forjado 45#, acabado anticorrosivo.',
      process: [
        { title: 'Análisis de sitio', body: 'Carga y entorno definen la especificación.' },
        { title: 'Aprobación de muestra', body: 'Corrosión y sujeción verificadas en una unidad física.' },
        { title: 'Entrega por fases', body: 'Dos lotes asignados por sitio.' },
        { title: 'Soporte de flota', body: 'Insertos de repuesto y reorden con la misma especificación.' },
      ],
      result:
        'Las 100 mordazas llegaron en dos lotes con precio de flota. Los sitios reportaron mayor vida útil que las unidades de fundición y el programa se amplió a más sitios.',
      outcome: '100 mordazas · 2 lotes · precio de flota · programa ampliado.',
      metrics: [
        { value: '100', label: 'mordazas pesadas suministradas' },
        { value: '10″', label: 'boca, cuerpo de acero forjado' },
        { value: '2', label: 'entregas por fases entre sitios' },
        { value: 'Ampliado', label: 'programa a más sitios' },
      ],
      takeaways: [
        'El acero forjado es la especificación para entornos hostiles, no un lujo.',
        'Un acabado probado en salmuera se paga solo en minería.',
        'Precio de flota más reorden convierte una compra única en un programa.',
        'Los lotes por fases reparten capital mientras los sitios siguen operando.',
      ],
      customizations: [
        'Cuerpo forjado de 10″ para servicio extremo',
        'Acabado fosfatado + polvo anticorrosivo',
        'Asignación por sitio en dos lotes',
        'Precio de flota sobre el volumen combinado',
        'Paquetes de insertos de repuesto por sitio',
        'Reorden sobre la especificación fijada',
      ],
      inspectionFocus: [
        'Integridad del cuerpo forjado por unidad',
        'Dureza de boca (58-62 HRC)',
        'Prueba de salmuera por lote',
        'Espesor y adherencia del recubrimiento',
        'Fuerza al 120% de la capacidad nominal',
      ],
      confidentiality:
        'Por acuerdo, no se revela el socio de suministro ni la ubicación de los sitios. Proyecto anónimo.',
      tags: ['Acero forjado', 'Anticorrosivo', 'Programa de flota'],
    },
    {
      slug: 'middle-east-pipe-fitting',
      customerType: 'Contratistas y EPC',
      region: 'Oriente Medio',
      productCategory: 'Mordazas para tubo de cadena y trípode',
      projectStage: 'Selección → Aprobación de muestra → Entrega en volumen',
      manufacturingScope: 'Rango de mordazas para tubo, acabado anticorrosivo, suministro por volumen',
      keyRequirements: 'Mordazas portátiles y de banco, gran capacidad, precio por volumen',
      qualityFocus: 'Agarre en V, durabilidad de cadena, recubrimiento, capacidad',
      navLabel: 'Suministro MEP',
      metaTitle: 'Suministro MEP | Capacidad 1/4″-6″ | Stavalk',
      metaDescription:
        'Cómo un contratista MEP suministró 80 mordazas para tubo a equipos de petróleo y gas — cadena y trípode, anticorrosivas, de 1/4″ a 6″.',
      kicker: 'Proyecto de suministro MEP',
      h1: 'Cómo un contratista equipó equipos de petróleo y gas con mordazas para tubo',
      intro: [
        'Un contratista MEP necesitaba mordazas para tubo para equipos de fontanería y petróleo y gas — de banco y portátiles, anticorrosivas, a precio de volumen.',
      ],
      industry: 'Contratación MEP y petróleo y gas',
      requirement: '80 mordazas para tubo — cadena y trípode — de 1/4″ a 6″ de capacidad, anticorrosivas.',
      challenge:
        'Los equipos trabajan en sitios duros. La portabilidad importaba para el campo, la fuerza para tubo pesado y la corrosión para el clima — todo con presupuestos de proyecto.',
      solution:
        'Un rango estandarizado de mordazas de cadena y trípode con mandíbulas V endurecidas y acabado anticorrosivo, dimensionado al rango de tubería real.',
      product: 'Mordazas para tubo — cadena (1/4″-4″) y trípode (1/4″-6″), mandíbulas V endurecidas.',
      process: [
        { title: 'Revisión de aplicación', body: 'El flujo de trabajo define la mezcla de unidades.' },
        { title: 'Selección del rango', body: 'Capacidades alineadas con la tubería del proyecto.' },
        { title: 'Producción en volumen', body: '80 unidades en un programa.' },
        { title: 'Entrega y repuestos', body: 'Envío con eslabones de repuesto por unidad.' },
      ],
      result:
        '80 unidades entregadas en cadena y trípode, dimensionadas a la tubería real. Los sitios confirmaron agarre firme y menos reposicionamiento.',
      outcome: '80 mordazas · capacidad 1/4″-6″ · cadena + trípode · repuestos.',
      metrics: [
        { value: '80', label: 'mordazas para tubo suministradas' },
        { value: '1/4″-6″', label: 'cobertura de capacidad' },
        { value: '2', label: 'configuraciones — cadena y trípode' },
        { value: 'Anticorrosivas', label: 'para condiciones de obra' },
      ],
      takeaways: [
        'Mezclar cadena y trípode sirve a talleres fijos y equipos móviles por separado.',
        'Los niveles de capacidad deben reflejar la tubería real.',
        'Eslabones de repuesto evitan paradas de aprovisionamiento.',
        'El acabado anticorrosivo es obligatorio en estos entornos.',
      ],
      customizations: [
        'Configuraciones a medida del flujo de trabajo',
        'Capacidades alineadas con la tubería del proyecto',
        'Acabado anticorrosivo en todas las unidades',
        'Insertos V endurecidos para agarre',
        'Precio por volumen del programa',
        'Paquetes de eslabones de repuesto',
      ],
      inspectionFocus: [
        'Agarre V e insertos endurecidos',
        'Resistencia y durabilidad de cadena',
        'Comprobaciones de recubrimiento',
        'Verificación de capacidad por modelo',
        'Función del mecanismo por unidad',
      ],
      confidentiality:
        'Por acuerdo, no se revela el contratista ni los proyectos. Proyecto anónimo.',
      tags: ['Mordazas para tubo', 'Suministro portátil', 'Protección anticorrosiva'],
    },
    {
      slug: 'japanese-automotive-plant',
      customerType: 'Compradores industriales y OEM',
      region: 'Japón',
      productCategory: 'Mordaza media (boca 6″)',
      projectStage: 'Renovación de flota → Aprobación → Despliegue por fases',
      manufacturingScope: 'Especificación de flota, liberación rápida, entrega en volumen',
      keyRequirements: 'Flota consistente, liberación rápida, montajes antivibración',
      qualityFocus: 'Fiabilidad del mecanismo, tolerancia, alineación, ciclos',
      navLabel: 'Renovación de planta automotriz',
      metaTitle: 'Renovación de planta | 150 medias | Stavalk',
      metaDescription:
        'Cómo una planta automotriz japonesa renovó 150 estaciones con mordazas medias — liberación rápida y antivibración.',
      kicker: 'Proyecto de renovación de planta',
      h1: 'Cómo una planta automotriz renovó 150 estaciones de trabajo',
      intro: [
        'Una planta automotriz japonesa reemplazó su flota de sujeción en 150 estaciones con una especificación consistente y montajes antivibración.',
      ],
      industry: 'Fabricación automotriz',
      requirement: '150 mordazas medias de 6″ con liberación rápida y antivibración, en despliegue por fases.',
      challenge:
        'La flota antigua había divergido en especificación y causaba sujeción inconsistente. El tiempo de parada debía minimizarse.',
      solution:
        'Una plataforma media estandarizada de 6″ con liberación rápida y montaje antivibración, en fases por línea con unidades idénticas.',
      product: 'Mordaza media — boca 6″, 3000-4000 lbs, palanca de liberación rápida, montaje antivibración.',
      process: [
        { title: 'Análisis de estaciones', body: 'Necesidades de sujeción por línea documentadas.' },
        { title: 'Aprobación de muestra', body: 'Liberación rápida y montajes verificados.' },
        { title: 'Despliegue por fases', body: 'Una línea a la vez, minimizando paradas.' },
        { title: 'Consistencia', body: 'Especificación idéntica en las 150 unidades.' },
      ],
      result:
        '150 unidades desplegadas por líneas con mínima parada. El cambio de especificación desapareció y la sujeción volvió a ser consistente.',
      outcome: '150 mordazas · despliegue por fases · especificación uniforme.',
      metrics: [
        { value: '150', label: 'estaciones renovadas' },
        { value: '6″', label: 'boca estandarizada' },
        { value: 'Por fases', label: 'despliegue, una línea a la vez' },
        { value: '100%', label: 'especificación de flota idéntica' },
      ],
      takeaways: [
        'Un despliegue por fases protege la producción mientras se renueva la flota.',
        'La especificación idéntica elimina la inconsistencia de los reemplazos ad hoc.',
        'La liberación rápida acorta el cambio en estaciones de alto ciclo.',
        'Los montajes antivibración mantienen el trabajo estable sin reajustes.',
      ],
      customizations: [
        'Una plataforma estandarizada de 6″ en toda la flota',
        'Palanca de liberación rápida en cada unidad',
        'Montaje antivibración por estación',
        'Entrega por fases línea a línea',
        'Boca y acabado uniformes en toda la flota',
        'Paquete de mantenimiento y repuestos',
      ],
      inspectionFocus: [
        'Fiabilidad del mecanismo de liberación rápida',
        'Tolerancia de mecanizado y alineación de boca',
        'Dureza y resistencia al desgaste',
        'Pruebas de ciclos por lote',
        'Función del montaje antivibración',
      ],
      confidentiality:
        'Por acuerdo, no se identifica la planta ni el fabricante. Proyecto anónimo.',
      tags: ['Renovación de flota', 'Liberación rápida', 'Estandarización de planta'],
    },
    {
      slug: 'brazilian-vocational-school',
      customerType: 'Educación e instituciones',
      region: 'Brasil',
      productCategory: 'Mordaza ligera (boca 4″)',
      projectStage: 'Equipamiento de programa → Aprobación → Entrega en volumen',
      manufacturingScope: 'Suministro por niveles, marcado de seguridad, precio de programa',
      keyRequirements: 'Mordazas para estudiantes, guía de seguridad, cantidades por aula',
      qualityFocus: 'Seguridad del acabado, marcados, manejo, durabilidad',
      navLabel: 'Programa escolar',
      metaTitle: 'Programa escolar | 240 ligeras | Stavalk',
      metaDescription:
        'Cómo una escuela técnica de Brasil equipó 12 talleres con 240 mordazas ligeras — seguras para estudiantes, con presupuesto de programa.',
      kicker: 'Proyecto de programa educativo',
      h1: 'Cómo una escuela técnica equipó 12 talleres con mordazas para estudiantes',
      intro: [
        'Una escuela técnica brasileña equipó sus talleres con una mordaza ligera pensada para estudiantes, marcada para seguridad y dentro del presupuesto del programa.',
      ],
      industry: 'Educación y formación técnica',
      requirement: '240 mordazas ligeras de 4″ para 12 talleres, marcadas para seguridad, con precio de programa.',
      challenge:
        'Las clases mezclan niveles y alto uso. Las mordazas debían ser seguras, consistentes en muchas estaciones y a precio educativo.',
      solution:
        'Una plataforma ligera de 4″ con acción suave, marcados de capacidad y seguridad, entrega uniforme a los 12 talleres y precio de programa con repuestos.',
      product: 'Mordaza ligera — boca 4″, 1200-1500 lbs, acción suave, marcados de seguridad, cuerpo de fundición.',
      process: [
        { title: 'Revisión del programa', body: 'Estaciones y niveles fijan cantidad y especificación.' },
        { title: 'Aprobación de muestra', body: 'Seguridad, acción y acabado verificados.' },
        { title: 'Entrega en volumen', body: '240 uds. repartidas entre los 12 talleres.' },
        { title: 'Soporte del programa', body: 'Repuestos y guía de mantenimiento.' },
      ],
      result:
        '240 unidades entregadas en 12 talleres con especificación uniforme. Los instructores notaron menos mal uso con las unidades marcadas.',
      outcome: '240 mordazas · 12 talleres · marcadas · precio de programa.',
      metrics: [
        { value: '240', label: 'mordazas para estudiantes' },
        { value: '12', label: 'talleres equipados' },
        { value: '4″', label: 'boca en toda la flota' },
        { value: '100%', label: 'especificación uniforme' },
      ],
      takeaways: [
        'Una especificación uniforme mantiene la enseñanza consistente y el inventario simple.',
        'Los marcados de capacidad y seguridad reducen los incidentes de mal uso.',
        'El precio de programa por estación encaja en presupuestos educativos.',
        'Los repuestos en la entrega mantienen las estaciones operativas un año escolar.',
      ],
      customizations: [
        'Plataforma ligera de 4″ con acción suave',
        'Marcados de capacidad y seguridad por unidad',
        'Acabado y especificación uniformes',
        'Precio de programa sobre el volumen',
        'Paquete de repuestos por taller',
        'Entrega alineada al ciclo de compra',
      ],
      inspectionFocus: [
        'Mecanismo de acción suave y operación segura',
        'Precisión de los marcados de seguridad',
        'Calidad del acabado y cantos seguros',
        'Alineación y consistencia de sujeción',
        'Durabilidad para uso de alta rotación',
      ],
      confidentiality:
        'Por acuerdo, no se identifica la escuela. Proyecto anónimo.',
      tags: ['Programa educativo', 'Marcado de seguridad', 'Suministro por volumen'],
    },
  ],
  fr: [
    {
      slug: 'german-hardware-brand-oem',
      customerType: 'Marques de quincaillerie et acheteurs OEM',
      region: 'Allemagne · UE',
      productCategory: 'Étau d\'établi moyen (mâchoires 6″ + 8″)',
      projectStage: 'Analyse des besoins → Validation de l\'échantillon → Livraison de 3 modèles',
      manufacturingScope: 'Outillage OEM, marque personnalisée, emballage, production en volume',
      keyRequirements: 'Trois modèles moyens sous marque, certification CE, emballage retail',
      qualityFocus: 'Dureté des mâchoires, force de serrage par modèle, précision du marquage, emballage par marché',
      navLabel: 'OEM marque allemande',
      metaTitle: 'OEM marque allemande | 3 modèles moyens | Stavalk',
      metaDescription:
        "Comment une marque allemande a lancé trois étaux d'établi moyens OEM — marque personnalisée, certification CE et emballage retail, livrés en deux lots.",
      kicker: 'Projet de fabrication OEM',
      h1: 'Comment une marque allemande a lancé trois étaux d\'établi moyens OEM',
      intro: [
        'Une marque allemande de quincaillerie souhaitait sa propre gamme d\'étaux d\'établi pour le marché des passionnés : trois modèles moyens sous sa marque, certifiés CE et prêts pour la commercialisation en emballage allemand.',
      ],
      industry: 'Quincaillerie et outillage',
      requirement: 'Trois étaux d\'établi moyens (mâchoires 6″ et 8″) sous la marque, 200 unités par modèle, certifiés CE, emballage retail, livrés en deux lots en 90 jours.',
      challenge:
        "La marque était nouvelle dans le domaine de la fixation et ne disposait ni de fonderie ni de capacité d'usinage. Les étaux devaient porter l'identité de la marque dans la fonte et l'emballage, être conformes aux normes européennes et arriver ensemble pour le lancement.",
      solution:
        "Trois plateformes moyens éprouvées spécifiées par modèle, marques de moulage et mâchoires gravées au laser, dossier de conformité CE et calendrier de production en deux lots synchronisé avec la date de lancement.",
      product: "Étau d'établi moyen OEM — mâchoires 6″ et 8″, 3000-4000 lbs de force de serrage, mâchoires en acier durci, base orientable à 360°, revêtement en poudre dans la couleur de la marque.",
      process: [
        { title: 'Spécification des modèles', body: 'Trois combinaisons mâchoire/modèle définies pour la couverture retail.' },
        { title: 'Marque et outillage', body: 'Marques de moulage, mâchoires gravées et emballage approuvés.' },
        { title: 'Production en volume', body: 'Deux lots planifiés en fonction du calendrier de lancement.' },
        { title: 'Conformité et livraison', body: 'Dossier CE, contrôle qualité et exportation gérés de bout en bout.' },
      ],
      result:
        "Les trois modèles avec emballage retail complet ont été expédiés en deux lots en 90 jours, certifiés CE pour la distribution européenne. La marque a ensuite élargi sa gamme avec un modèle lourd de 8″ la saison suivante.",
      outcome: '3 modèles · 600 unités · 90 jours · certifié CE.',
      metrics: [
        { value: '3', label: 'modèles moyens sous la marque' },
        { value: '600', label: 'unités livrées en deux lots' },
        { value: '90', label: 'jours de la commande à la livraison finale' },
        { value: 'CE', label: 'certifié pour la distribution européenne' },
      ],
      takeaways: [
        'Trois modèles de 50 à 200 unités chacun permettent à une nouvelle marque de couvrir une catégorie sans passer par une commande unique importante.',
        "Le marquage dans la fonte et les mâchoires — et non seulement sur l'emballage — est ce qui donne au OEM l'apparence d'une véritable gamme.",
        'La documentation CE gérée par l\'usine élimine un obstacle fréquent au lancement.',
        'Deux lots programmés à une date de lancement fixe permettent de tenir les engagements retail sans stock stagnant.',
      ],
      customizations: [
        'Plateformes de mâchoires 6″ et 8″ adaptées aux utilisateurs avancés',
        'Marques de moulage et gravure laser de la marque sur les mâchoires',
        'Finitions en poudre dans la palette de couleurs de la marque',
        'Emballage retail avec étiquettes et manuel pour le marché allemand',
        'Dossier de conformité CE par modèle',
        'Livraison en deux lots synchronisée avec le lancement retail',
      ],
      inspectionFocus: [
        'Vérification de la dureté des mâchoires (58-62 HRC) par lot',
        'Tests de force de serrage par modèle',
        'Vérification du couple et du blocage de la base orientable',
        'Précision du marquage et du gravage',
        'Complétude de l\'emballage, des étiquettes et du manuel par marché',
      ],
      confidentiality:
        "Par accord, le nom de la marque n'est pas divulgué. Ce projet est présenté de manière anonyme.",
      tags: ['Marquage OEM', 'Certification CE', 'Emballage retail'],
    },
    {
      slug: 'us-tool-retailer-private-label',
      customerType: 'Distributeurs et détaillants',
      region: 'États-Unis',
      productCategory: 'Étau d\'établi à marque privée (3 SKUs)',
      projectStage: 'Planification du assortiment → Validation de l\'échantillon → Livraison en un lot',
      manufacturingScope: 'Marque privée, emballage retail, production en volume',
      keyRequirements: 'Trois SKUs sous marque, emballage américain, cartons prêts pour e-commerce',
      qualityFocus: 'Précision du graphisme, code-barres/étiquette par SKU, usinage, finition',
      navLabel: 'Marque privée détaillant US',
      metaTitle: 'Marque privée détaillant US | 3 SKUs | Stavalk',
      metaDescription:
        "Comment un détaillant américain a lancé sa gamme d'étaux d'établi à marque privée — trois SKUs, emballage américain, prêt pour e-commerce, avec réassortiment.",
      kicker: 'Projet de marque privée',
      h1: 'Comment un détaillant américain a lancé une gamme d\'étaux d\'établi à marque privée',
      intro: [
        "Un détaillant américain de outils en e-commerce souhaitait ses propres SKUs d'étaux d'établi pour maîtriser la marge : trois tailles pour son catalogue en ligne, prêtes à expédier dans un emballage e-commerce.",
      ],
      industry: 'Outillage et e-commerce',
      requirement: "Trois étaux d'établi à marque privée (mâchoires 4″, 6″, 8″) sous sa marque, emballage américain avec étiquettes UPC, 500 unités en un lot.",
      challenge:
        "Le détaillant avait besoin de SKUs différenciés offrant l'avantage de la marque privée, avec un emballage conçu pour l'expédition directe au consommateur — sans présentation en rayon.",
      solution:
        'Trois plateformes standard en légère, moyenne et lourde, marque privée, cartons e-commerce robustes et livraison en un seul lot avec contrôle qualité par SKU.',
      product: "Étau d'établi à marque privée — mâchoires 4″, 6″ et 8″, corps en fonte, finition de marque, carton e-commerce.",
      process: [
        { title: 'Planification de l\'assortiment', body: 'Trois tailles choisies pour couvrir le catalogue en ligne.' },
        { title: 'Validation de l\'échantillon', body: 'Graphisme, finition et carton confirmés sur des unités physiques.' },
        { title: 'Production en volume', body: '500 unités réparties sur trois SKUs en un seul lot.' },
        { title: 'Réassortiment', body: 'Les ventes ont déclenché une réassortiment avec la même spécification.' },
      ],
      result:
        "500 unités réparties sur trois SKUs expédiées en un lot avec emballage e-commerce. La gamme s'est écoulée en ligne et le détaillant a passé un réassortiment sur la même spécification.",
      outcome: '3 SKUs · 500 unités · un lot · réassortiment.',
      metrics: [
        { value: '3', label: 'SKUs d\'étaux d\'établi à marque privée' },
        { value: '500', label: 'unités dans le premier lot' },
        { value: '1', label: 'lot livré dans les délais' },
        { value: 'Repeat', label: 'réassortiment sur la même spécification' },
      ],
      takeaways: [
        "Un assortiment de 4″ à 8″ couvre la catégorie en ligne sans fragmenter l'inventaire.",
        "Un seul programme gère le marquage, le contrôle qualité et l'emballage — le détaillant n'ajoute que la photographie.",
        'Les cartons e-commerce dimensionnés pour les transporteurs réduisent le reconditionnement du détaillant à néant.',
        "Une spécification verrouillée fait du réassortiment une mise à jour gérée par le fournisseur, pas un nouveau projet.",
      ],
      customizations: [
        'Plateformes de mâchoires 4″, 6″ et 8″ pour couvrir le catalogue',
        'Finition et application du logo de marque privée par SKU',
        'Cartons e-commerce avec étiquettes UPC et d\'expédition',
        'Emballages et manuels spécifiques par SKU',
        'Contrôle qualité vérifié par SKU en un seul lot',
        'Spécification verrouillée pour la cohérence des réassortiments',
      ],
      inspectionFocus: [
        'Usinage et uniformité de la finition entre les SKUs',
        'Précision du graphisme et de l\'étiquette par SKU',
        'Vérification des codes-barres UPC pour le marché américain',
        'Intégrité des cartons pour l\'expédition',
        'Contrôles ponctuels de la force de serrage par lot',
      ],
      confidentiality:
        "Par accord, le nom du détaillant n'est pas divulgué. Ce projet est présenté de manière anonyme.",
      tags: ['Marque privée', 'Emballage e-commerce', 'Lancement d\'assortiment'],
    },
    {
      slug: 'australian-construction-supply',
      customerType: 'Distribution et chaînes d\'approvisionnement',
      region: 'Australie',
      productCategory: 'Étau d\'établi lourd (mâchoire 10″)',
      projectStage: 'Programme de flotte → Validation de l\'échantillon → Livraison par phases',
      manufacturingScope: 'Spécification lourde, revêtement anticorrosif, approvisionnement de flotte',
      keyRequirements: 'Étaux pour environnements miniers difficiles, résistance à la corrosion, tarif de flotte',
      qualityFocus: 'Corps en acier forgé, dureté des mâchoires, tests en brouillard salin, durabilité du revêtement',
      navLabel: 'Approvisionnement construction Australie',
      metaTitle: 'Approvisionnement construction Australie | 10″ lourds | Stavalk',
      metaDescription:
        "Comment un fournisseur australien a équipé des sites miniers avec des étaux d'établi lourds de 10″ — acier forgé, résistants à la corrosion, dans un programme de flotte.",
      kicker: 'Projet d\'approvisionnement industriel',
      h1: 'Comment un partenaire d\'approvisionnement a équipé des sites miniers australiens avec des étaux d\'établi lourds',
      intro: [
        "Une entreprise australienne d'approvisionnement en construction avait besoin d'étaux d'établi lourds capables de résister aux conditions de mines — mâchoires de 10″, acier forgé, résistance à la corrosion, livrés dans le cadre d'un programme de flotte.",
      ],
      industry: 'Approvisionnement en construction et mining',
      requirement: '100 étaux d\'établi lourds de 10″ avec corps en acier forgé et revêtement anticorrosif, tarif de flotte, livrés en deux lots pour plusieurs sites.',
      challenge:
        "Les ateliers de maintenance minière usent rapidement les outils ; les étaux en fonte se fissuraient sous la charge et rouillaient vite. Le fournisseur avait besoin d'une spécification qui dure et d'un prix adapté aux volumes de flotte.",
      solution:
        "Une plateforme lourde de 10″ en acier forgé avec finition phosphatée et revêtement en poudre, testée en brouillard salin, approvisionnée via un programme de flotte avec allocation par site et possibilité de réassortiment.",
      product: "Étau d'établi lourd — mâchoire 10″, 6000-8000 lbs de force de serrage, corps en acier forgé 45#, revêtement anticorrosif.",
      process: [
        { title: 'Étude du site', body: 'Charge et environnement définissent la spécification acier forgé + revêtement.' },
        { title: 'Validation de l\'échantillon', body: 'Corrosion et force de serrage vérifiées sur une unité physique.' },
        { title: 'Livraison par phases', body: 'Deux lots attribués selon l\'utilisation et le calendrier de livraison.' },
        { title: 'Support de flotte', body: 'Inserts de mâchoires de rechange et possibilité de réassortiment sur la même spécification.' },
      ],
      result:
        "Les 100 étaux ont été livrés en deux lots avec tarif de flotte. Les retours des sites ont signalé une durée de vie supérieure aux unités en fonte, et le programme a été étendu à des sites supplémentaires.",
      outcome: '100 étaux · 2 lots · tarif de flotte · programme étendu.',
      metrics: [
        { value: '100', label: 'étaux d\'établi lourds fournis' },
        { value: '10″', label: 'mâchoire, corps en acier forgé' },
        { value: '2', label: 'livraisons par phases entre les sites' },
        { value: 'Extended', label: 'programme étendu à plus de sites' },
      ],
      takeaways: [
        "L'acier forgé est la spécification pour les environnements hostiles, pas un luxe.",
        "Un revêtement testé en brouillard salin s'amortit en conditions minières.",
        "Le tarif de flotte combiné au réassortiment transforme un achat unique en programme géré.",
        "Les lots par phases répartissent le capital tout en permettant aux sites de continuer à fonctionner.",
      ],
      customizations: [
        'Corps forgé de 10″ pour un service extrême',
        'Finition phosphatée + revêtement en poudre anticorrosif',
        'Allocation par site en deux lots',
        'Tarif de flotte sur le volume combiné',
        'Pack d\'inserts de mâchoires de rechange par site',
        'Possibilité de réassortiment sur la spécification verrouillée',
      ],
      inspectionFocus: [
        'Intégrité du corps forgé par unité',
        'Vérification de la dureté des mâchoires (58-62 HRC)',
        'Test de corrosion en brouillard salin par lot',
        'Vérification de l\'épaisseur et de l\'adhérence du revêtement',
        'Force de serrage à 120% de la capacité nominale',
      ],
      confidentiality:
        "Par accord, le partenaire d'approvisionnement et l'emplacement des sites ne sont pas divulgués. Projet présenté de manière anonyme.",
      tags: ['Acier forgé', 'Résistance à la corrosion', 'Programme de flotte'],
    },
    {
      slug: 'middle-east-pipe-fitting',
      customerType: 'Entrepreneurs et EPC',
      region: 'Moyen-Orient',
      productCategory: 'Étaux à tube à chaîne et à trépied',
      projectStage: 'Sélection du produit → Validation de l\'échantillon → Livraison en volume',
      manufacturingScope: 'Gamme d\'étaux à tube, finition anticorrosive, approvisionnement en volume',
      keyRequirements: 'Étaux portables et à chaîne pour conditions difficiles, large capacité, tarif en volume',
      qualityFocus: 'Prise en V, durabilité de la chaîne, revêtement, vérification de la capacité',
      navLabel: 'Approvisionnement MEP',
      metaTitle: 'Approvisionnement MEP | Capacité 1/4″-6″ | Stavalk',
      metaDescription:
        "Comment un entrepreneur MEP a fourni 80 étaux à tube aux équipes pétrole et gaz — chaîne et trépied, protégés contre la corrosion, de 1/4″ à 6″.",
      kicker: 'Projet d\'approvisionnement MEP',
      h1: 'Comment un entrepreneur a équipé des équipes pétrole et gaz avec des étaux à tube',
      intro: [
        "Un entrepreneur MEP avait besoin d'étaux à tube pour les équipes de plomberie et de pétrole et gaz — de bureau et portables, protégés contre la corrosion, à tarif de volume.",
      ],
      industry: 'Entreprise MEP et pétrole et gaz',
      requirement: '80 étaux à tube — configurations chaîne et trépied — de 1/4″ à 6″ de capacité, protégés contre la corrosion.',
      challenge:
        "Les équipes travaillent sur des sites difficiles. La portabilité comptait sur le terrain, la puissance de serrage pour les tuyaux lourds et la résistance à la corrosion pour le climat — le tout avec des budgets de projet.",
      solution:
        "Une gamme standardisée d'étaux à tube à chaîne et à trépied avec mâchoires en V durcies et finition anticorrosive, dimensionnée à la gamme de tuyauterie réellement utilisée, avec tarif en volume et maillons de rechange.",
      product: "Étaux à tube — configurations chaîne (1/4″-4″) et trépied (1/4″-6″), mâchoires en V durcies, finition anticorrosive.",
      process: [
        { title: 'Analyse de l\'application', body: 'Le flux de travail des équipes définit le mélange chaîne vs trépied.' },
        { title: 'Sélection de la gamme', body: 'Niveaux de capacité alignés sur la tuyauterie du projet.' },
        { title: 'Production en volume', body: '80 unités couvrant la gamme dans un programme.' },
        { title: 'Livraison et pièces de rechange', body: 'Expédition avec maillons de rechange par unité.' },
      ],
      result:
        "80 unités livrées en configurations chaîne et trépied, dimensionnées à la tuyauterie réelle des équipes. Les retours des sites ont confirmé une prise sûre et moins de temps de repositionnement, les unités restant protégées contre la corrosion.",
      outcome: '80 étaux · capacité 1/4″-6″ · chaîne + trépied · pièces de rechange incluses.',
      metrics: [
        { value: '80', label: 'étaux à tube fournis' },
        { value: '1/4″-6″', label: 'couverture de capacité' },
        { value: '2', label: 'configurations — chaîne et trépied' },
        { value: 'Corrosion', label: 'protégés pour les conditions de chantier' },
      ],
      takeaways: [
        "Mêler chaîne et trépied répond séparément aux ateliers fixes et aux équipes mobiles.",
        'Les niveaux de capacité doivent refléter la tuyauterie réelle, pas un catalogue plus large.',
        'Les maillons de rechange dans la livraison évitent les retards d\'approvisionnement.',
        'La finition anticorrosive est obligatoire dans ces environnements, pas une option.',
      ],
      customizations: [
        'Configurations chaîne et trépied adaptées au flux de travail',
        'Niveaux de capacité alignés sur la tuyauterie du projet',
        'Revêtement anticorrosif sur toutes les unités',
        'Inserts en V durcis pour une prise sûre sur tube',
        'Tarif en volume pour l\'ensemble du programme',
        'Pack de maillons de rechange par unité',
      ],
      inspectionFocus: [
        'Prise en V et vérification des inserts durcis',
        'Résistance et durabilité de la chaîne',
        'Vérifications du revêtement et de la résistance à la corrosion',
        'Vérification de la capacité par modèle',
        'Fonctionnement du mécanisme d\'ouverture/fermeture par unité',
      ],
      confidentiality:
        "Par accord, l'entrepreneur et les projets ne sont pas divulgués. Projet présenté de manière anonyme.",
      tags: ['Étaux à tube', 'Approvisionnement portable', 'Protection anticorrosive'],
    },
    {
      slug: 'japanese-automotive-plant',
      customerType: 'Acheteurs industriels et OEM',
      region: 'Japon',
      productCategory: 'Étau d\'établi moyen (mâchoire 6″)',
      projectStage: 'Renouvellement de flotte → Validation de l\'échantillon → Déploiement par phases',
      manufacturingScope: 'Spécification de flotte, libération rapide, livraison en volume',
      keyRequirements: 'Flotte homogène, libération rapide, fixations antivibration',
      qualityFocus: 'Fiabilité du mécanisme, tolérance d\'usinage, alignement, durabilité cyclique',
      navLabel: 'Renouvellement usine automobile',
      metaTitle: 'Renouvellement usine | 150 moyens | Stavalk',
      metaDescription:
        "Comment une usine automobile japonaise a renouvelé 150 postes avec des étaux d'établi moyens — libération rapide, antivibration et spécification homogène.",
      kicker: 'Projet de renouvellement d\'usine',
      h1: 'Comment une usine automobile a renouvelé 150 postes de travail avec des étaux d\'établi moyens',
      intro: [
        "Une usine automobile japonaise a remplacé sa flotte de fixation sur 150 postes — spécification homogène, commodité de libération rapide et fixations à faible vibration.",
      ],
      industry: 'Fabrication automobile',
      requirement: '150 étaux d\'établi moyens de 6″ avec mécanisme de libération rapide et fixation antivibration, déployés par phases sur les lignes de production.',
      challenge:
        "L'ancienne flotte avait dérivé en spécification au fil des remplacements ponctuels, entraînant un serrage incohérent entre les lignes. Le temps d'arrêt lors du changement devait être minimisé avec un plan progressif.",
      solution:
        "Une plateforme moyenne standardisée de 6″ avec libération rapide, fixations antivibration et livraison par phases remplaçant une ligne à la fois avec des unités identiques.",
      product: "Étau d'établi moyen — mâchoire 6″, 3000-4000 lbs de force de serrage, levier de libération rapide, ensemble de fixation antivibration.",
      process: [
        { title: 'Étude des postes de travail', body: 'Spécifications et besoins de serrage documentés par ligne.' },
        { title: 'Validation de l\'échantillon', body: 'Libération rapide et fixations vérifiées sur des unités d\'essai.' },
        { title: 'Déploiement par phases', body: 'Une ligne de production à la fois, minimisant les temps d\'arrêt.' },
        { title: 'Homogénéité de la flotte', body: 'Spécification identique sur les 150 unités pour un serrage uniforme.' },
      ],
      result:
        "150 unités déployées ligne par ligne avec un temps d'arrêt minimal. La standardisation de la flotta a éliminé la dérive de spécification, et l'homogénéité du serrage entre les postes de travail a été rétablie sur des unités identiques.",
      outcome: '150 étaux · déploiement par phases · spécification de flotte homogène.',
      metrics: [
        { value: '150', label: 'postes de travail renouvelés' },
        { value: '6″', label: 'largeur de mâchoire standardisée' },
        { value: 'Phased', label: 'déploiement, une ligne à la fois' },
        { value: '100%', label: 'spécification de flotte identique' },
      ],
      takeaways: [
        'Un déploiement par phases protège la production pendant le renouvellement de la flotte.',
        "La spécification identique élimine l'incohérence créée par les remplacements ponctuels.",
        'La libération rapide réduit le temps de changement dans les postes à cycle élevé.',
        'Les fixations antivibration maintiennent la stabilité du travail sans réajustements répétés.',
      ],
      customizations: [
        'Une plateforme standardisée de 6″ sur toute la flotte',
        'Levier de libération rapide sur chaque unité',
        'Fixations antivibration par poste de travail',
        'Livraison par phases, ligne par ligne',
        'Mâchoire et finition uniformes sur toute la flotte',
        'Kit de maintenance et pièces de rechange',
      ],
      inspectionFocus: [
        'Fiabilité du mécanisme de libération rapide sur les unités',
        'Tolérance d\'usinage et alignement des mâchoires',
        'Dureté et résistance à l\'usure des mâchoires',
        'Tests de durabilité cyclique par lot',
        'Vérification du fonctionnement des fixations antivibration',
      ],
      confidentiality:
        "Par accord, l'usine et le fabricant ne sont pas identifiés. Projet présenté de manière anonyme.",
      tags: ['Renouvellement de flotte', 'Libération rapide', 'Standardisation d\'usine'],
    },
    {
      slug: 'brazilian-vocational-school',
      customerType: 'Éducation et institutions',
      region: 'Brésil',
      productCategory: 'Étau d\'établi léger (mâchoire 4″)',
      projectStage: 'Équipement de programme → Validation de l\'échantillon → Livraison en volume',
      manufacturingScope: 'Approvisionnement par niveaux, marquage de sécurité, tarif de programme',
      keyRequirements: 'Étaux pour étudiants, guide de sécurité, quantités par poste',
      qualityFocus: 'Sécurité de la finition, marquages, maniabilité, durabilité',
      navLabel: 'Programme école professionnelle',
      metaTitle: 'Programme école professionnelle | 240 légers | Stavalk',
      metaDescription:
        "Comment une école technique brésilienne a équipé 12 ateliers avec 240 étaux d'établi légers — adaptés aux étudiants, marqués pour la sécurité, dans le budget du programme.",
      kicker: 'Projet de programme éducatif',
      h1: 'Comment une école technique a équipé 12 ateliers avec des étaux d\'établi pour étudiants',
      intro: [
        "Une école technique brésilienne a équipé ses ateliers d'usinage et d'artisanat avec des étaux d'établi légers pensés pour les étudiants, marqués pour la sécurité et dans le budget du programme.",
      ],
      industry: 'Éducation et formation professionnelle',
      requirement: '240 étaux d\'établi légers de 4″ pour 12 ateliers, marqués pour la sécurité, design adapté aux étudiants, livrés avec tarif de programme et guidance.',
      challenge:
        "Les classes mêlent différents niveaux et fonctionnent à fort taux d'utilisation. Les étaux devaient être sûrs pour les jeunes étudiants, homogènes sur de nombreux postes et à un tarif compatible avec les cycles d'achat éducatifs.",
      solution:
        "Une plateforme légère de 4″ avec mécanisme à action fluide, marquages de capacité et de sécurité, livraison uniforme sur les 12 ateliers et tarif de programme avec pièces de rechange.",
      product: "Étau d'établi léger — mâchoire 4″, 1200-1500 lbs de force de serrage, action fluide, marquages de sécurité, corps en fonte.",
      process: [
        { title: 'Revue du programme', body: 'Nombre de postes et niveaux définissent la quantité et la spécification.' },
        { title: 'Validation de l\'échantillon', body: 'Sécurité, action et finition vérifiées sur des unités d\'essai.' },
        { title: 'Livraison en volume', body: '240 unités réparties uniformément sur les 12 ateliers.' },
        { title: 'Support du programme', body: 'Pièces de rechange et guide de maintenance pour les cohortes suivantes.' },
      ],
      result:
        "240 unités livrées sur 12 ateliers avec spécification uniforme. Les instructeurs ont constaté un montage plus rapide des étudiants et moins de problèmes d'utilisation avec les unités marquées.",
      outcome: '240 étaux · 12 ateliers · marqués pour la sécurité · tarif de programme.',
      metrics: [
        { value: '240', label: 'étaux pour étudiants fournis' },
        { value: '12', label: 'ateliers équipés' },
        { value: '4″', label: 'largeur de mâchoire sur toute la flotte' },
        { value: '100%', label: 'spécification de programme uniforme' },
      ],
      takeaways: [
        'Une spécification uniforme sur de nombreux postes maintient la cohérence pédagogique et simplifie la gestion des stocks.',
        'Les marquages de capacité et de sécurité réduisent significativement les incidents de mauvaise utilisation en classe.',
        'Un tarif de programme adapté au nombre de postes s\'intègre dans les budgets éducatifs.',
        'Les pièces de rechange dans la livraison permettent aux postes de fonctionner pendant toute l\'année scolaire.',
      ],
      customizations: [
        'Plateforme légère de 4″ avec action fluide',
        'Marquages de capacité et de sécurité sur chaque unité',
        'Finition et spécification uniformes sur tous les ateliers',
        'Tarif de programme sur le volume combiné',
        'Kit de pièces de rechange par atelier',
        'Livraison synchronisée avec le cycle d\'achat scolaire',
      ],
      inspectionFocus: [
        'Mécanisme à action fluide et fonctionnement sûr',
        'Précision des marquages de sécurité',
        'Qualité de la finition et sécurité des arêtes sur les unités étudiantes',
        'Alignement et cohérence du serrage',
        'Vérifications de durabilité pour une utilisation intensive',
      ],
      confidentiality:
        "Par accord, l'école n'est pas identifiée. Projet présenté de manière anonyme.",
      tags: ['Programme éducatif', 'Marquage de sécurité', 'Approvisionnement en volume'],
    },
  ],
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'Bench Vise Manufacturing Projects | OEM Case Studies | Stavalk',
    metaDescription:
      'Real bench vise manufacturing projects: OEM, private label, heavy-duty and pipe vise programs across hardware, construction, MEP, automotive and education.',
    h1: 'Projects: Bench Vise Manufacturing in Action',
  },
  es: {
    metaTitle: 'Proyectos de fabricación de mordazas de banco | Casos OEM | Stavalk',
    metaDescription:
      'Proyectos reales de fabricación de mordazas de banco: OEM, marca privada, programas pesados y para tubo en ferretería, construcción, MEP, automoción y educación.',
    h1: 'Proyectos: fabricación de mordazas de banco en acción',
  },
  fr: {
    metaTitle: "Projets de fabrication d'étaux d'établi | Études de cas OEM | Stavalk",
    metaDescription:
      "Projets réels de fabrication d'étaux d'établi : OEM, marque privée, programmes lourds et étaux à tube pour la quincaillerie, le BTP, la MEP, l'automobile et l'éducation.",
    h1: "Projets : la fabrication d'étaux d'établi en action",
  },
}

export interface ProjectRelated {
  slug: string
  h1: string
  industry: string
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return (projects[locale] ?? projects.en).find((p) => p.slug === slug)
}

export function relatedProjects(page: ProjectData, locale: Locale): ProjectRelated[] {
  return (projects[locale] ?? projects.en)
    .filter((p) => p.slug !== page.slug)
    .slice(0, 3)
    .map((p) => ({ slug: p.slug, h1: p.h1, industry: p.industry }))
}