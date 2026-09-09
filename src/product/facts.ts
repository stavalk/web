import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = '2026-09-01' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '8,000 m²',
  workers: '200+',
  annualCapacity: '80,000+ units',
  moq: {
    existingPlatform: '5–10 pcs (logo-only on existing model)',
    pilotBatch: '20–50 pcs (custom finish or minor spec change)',
    standardRun: '90–100+ pcs per approved configuration',
    customMould: '90–100+ pcs (new model requires dedicated tooling; adds 15–20 days)',
    multiSku: 'Each SKU (size/type combo) has its own MOQ',
  },
  moqNote: 'MOQ is confirmed after specification review, because material, jaw size, finish, packaging and accessories affect production.',
  moqNoteEs: 'El MOQ se confirma tras la revisión de especificaciones, ya que el material, tamaño de mordaza, acabado, embalaje y accesorios afectan la producción.',
  moqExplanation: {
    sample: '1–2 units for approval',
    coBrand: 'from 5–10 units on selected existing models',
    pilot: '20–50 units on existing models',
    standard: '90–100+ units per approved configuration',
    customMould: '90–100+ units; new model requires dedicated tooling (+15–20 days)',
  },
  materialRollNote: 'Raw steel and iron stock yields different unit counts depending on model size, jaw width and nesting layout. The 90–100+ MOQ represents the minimum batch per configuration.',
  moqDecisionTree: [
    { scenario: 'Existing model, logo overlay only', min: '5–10 pcs', unit: 'per design', condition: 'Same model, same finish, same colorway' },
    { scenario: 'Custom finish / packaging on existing model', min: '20–50 pcs', unit: 'pilot batch', condition: 'Same model; new finish requires visual proof approval' },
    { scenario: 'Standard volume production (any model)', min: '90–100+ pcs', unit: 'per approved configuration', condition: 'Per production run; multiple SKUs = separate runs' },
    { scenario: 'New model / custom tooling', min: '90–100+ pcs', unit: 'production run', condition: 'Tooling 15–20 extra days; one-time tooling fee applies' },
  ] as const,
  leadTime: '20–30 days',
  leadTimeDetail: '20–30 days from confirmed PO and deposit; custom tooling development adds 15–20 days.',
  sampleTime: '7–12 days',
  cncAccuracy: '0.05 mm',
  jawOpening: '6"–12"',
  jawFaceWidth: '4"–6"',
  clampingForce: '2,000–5,000 lbs',
  hardnessRating: '58–62 HRC',
  assemblyChecklist: '100-point',
  pressureTest: '10,000+ cycle durability test',
  pressureReject: 'units failing clamping force or jaw hardness checks',
  traceabilityRet: '10 years',
  certifications: [
    { name: 'ISO 9001', scope: 'Quality management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'CE', scope: 'EU market conformity', authority: 'EU notified body', appliesTo: 'Models destined for EU market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'RoHS', scope: 'Restriction of hazardous substances', authority: 'EU directive', appliesTo: 'Coated and finished products', verifiedSource: 'certificate' as VerifiedSource },
  ] as const,
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request.',
  exportCountries: '40+',
  workshops: '3 specialized workshops',
  productionLines: '4 automated lines',
  monthlyCapacity: '7,000 units/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'TÜV', 'BV', 'Intertek'],
  samplingStandard: 'ISO 2859-1 Level II',
  peakSeason: 'Year-round',
  social: BRAND_SOCIAL,
  contact: BRAND_CONTACT,
  boilerplate: BRAND_BOILERPLATE,
  buildLine: BRAND_BUILD_LINE,
  notRob: BRAND_NOT_ROB,
  tagline:
    'Precision bench vises engineered for professionals. You bring the vision — we build the vise.',
  taglineEs:
    'Tornillos de banco de precisión diseñados para profesionales. Tú traes la visión — nosotros fabricamos el tornillo.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]

export const CERTIFICATION_NAMES = FACTS.certifications.map((c) => c.name) as readonly string[]

export const MOQ_SHORT = {
  trialStandard: FACTS.moq.pilotBatch,
  standardRun: FACTS.moq.standardRun,
  customMould: FACTS.moq.customMould,
  existingPlatform: FACTS.moq.existingPlatform,
} as const

export const COLLABORATION_MODES = {
  oem: {
    short: 'Manufacture to your approved specification',
    full: 'OEM (Original Equipment Manufacturing): We manufacture to your approved specification — your drawings, dimensions, materials, finish and packaging. You own the design and intellectual property.',
    bestFor: 'Buyers with existing designs or detailed specifications',
  },
  odm: {
    short: 'Develop the vise with our engineering team',
    full: 'ODM (Original Design Manufacturing): Our engineering team develops the vise design, construction, finish and packaging from your brief — whether that is a market concept, performance target or adaptation of a proven model. Factory proposes the design; buyer approves before production.',
    bestFor: 'Buyers with product ideas or performance targets but no detailed specification',
  },
  privateLabel: {
    short: 'Brand a proven bench vise model with your logo',
    full: 'Private Label: Your brand, finish and packaging on an existing validated model — no tooling development, no structural changes. Fastest route from concept to delivery.',
    bestFor: 'Buyers who need branded vises quickly without product development',
  },
  commercial: {
    short: 'Configure workshop package deals',
    full: 'Commercial Fleet Program: Bulk bench vise packages for workshops, garages, schools and industrial facilities — with durability specs, spare parts, color management and batch consistency.',
    bestFor: 'Workshop, school and industrial facility operators',
  },
} as const
