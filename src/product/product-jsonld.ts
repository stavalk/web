import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES } from '@/product/facts'
import { SITE_NAME } from '@/config/site'
import { SITE_ORIGIN } from '@/features/seo/jsonld'
import { BRAND_PARENT_BRAND, BRAND_COMPANY_NAME, BRAND_CONTACT, BRAND_PARENT_URL } from '@/config/branding'
import { LLM_SITE_DESCRIPTION } from './ai-content'

export function siteLd(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      alternateName: SITE_NAME,
      legalName: BRAND_COMPANY_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo192.png`,
      description: LLM_SITE_DESCRIPTION.replaceAll('{SITE}', SITE_NAME),
      sameAs: [BRAND_PARENT_URL, FACTS.social.facebook, FACTS.social.linkedin, FACTS.social.youtube],
      parentOrganization: {
        '@type': 'Organization',
        name: BRAND_COMPANY_NAME,
        sameAs: BRAND_PARENT_URL,
      },
      department: {
        '@type': 'Organization',
        name: BRAND_PARENT_BRAND,
        description: `Bench vise manufacturing division of ${BRAND_COMPANY_NAME}.`,
        sameAs: BRAND_PARENT_URL,
      },
      brand: { '@type': 'Brand', name: BRAND_PARENT_BRAND },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: FACTS.workers },
      hasCredential: CERTIFICATION_NAMES.map((c) => ({
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: c,
      })),
      knowsAbout: [
        'bench vise manufacturing',
        'vise OEM / ODM',
        'custom bench vises',
        'vise product development',
        'vise prototyping',
        'private label vices',
        'gray cast iron casting HT200 / HT250',
        'hardened steel jaws 58–62 HRC',
        'vise quality control',
      ],
      foundingLocation: { '@type': 'Place', name: 'Qingdao, China' },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Economic Development Zone, Laixi',
        addressLocality: 'Qingdao',
        addressRegion: 'Shandong',
        postalCode: '266600',
        addressCountry: 'CN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: BRAND_CONTACT.whatsapp,
          email: BRAND_CONTACT.email,
          contactType: 'sales',
          availableLanguage: ['English', 'Chinese', 'French', 'Spanish', 'Arabic', 'German'],
        },
        {
          '@type': 'ContactPoint',
          telephone: BRAND_CONTACT.whatsapp,
          email: BRAND_CONTACT.email,
          contactType: 'customer service',
          availableLanguage: ['English', 'Chinese'],
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: SITE_NAME,
      inLanguage: ['en', 'es', 'fr'],
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_ORIGIN}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]
}

export function serviceLd(input: {
  serviceType: string
  description: string
  path: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.serviceType,
    serviceType: input.serviceType,
    description: input.description,
    url: `${SITE_ORIGIN}${input.path}`,
    provider: { '@id': `${SITE_ORIGIN}/#organization` },
    areaServed: 'Worldwide',
    audience: {
      '@type': 'BusinessAudience',
      name: 'Businesses, brands, professional workshops, schools and distributors',
    },
  }
}

export function projectLd(input: {
  title: string
  description: string
  path: string
  industry: string
  outcome: string
}): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${input.path}`
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'CaseStudy'],
    headline: input.title,
    description: input.description,
    url,
    about: { '@type': 'Thing', name: input.industry },
    result: input.outcome,
    author: { '@id': `${SITE_ORIGIN}/#organization` },
    publisher: { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export function factoryCapabilitiesLd(): Record<string, unknown> {
  return {
    '@type': 'ManufacturingFacility',
    name: `${SITE_NAME} Bench Vise Manufacturing Plant`,
    description:
      `8,000 m\u00b2 cast iron bench vise manufacturing plant in Qingdao, China \u2014 casting HT200/HT250 gray iron bodies, forging 45# steel components and heat-treating GCr15/Cr12MoV jaws to 58\u201362 HRC, with machining, coating and a 7-stage inspection system under one roof.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Economic Development Zone, Laixi',
      addressLocality: 'Qingdao',
      addressRegion: 'Shandong',
      postalCode: '266600',
      addressCountry: 'CN',
    },
    location: { '@type': 'Place', name: 'Qingdao, China' },
    employeeCount: FACTS.workers,
    numberOfEmployees: { '@type': 'QuantitativeValue', value: FACTS.workers },
    areaServed: FACTS.exportCountries,
    isicV4: '2599',
    hasCredential: CERTIFICATION_NAMES.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: c,
    })),
    certification: CERTIFICATION_NAMES,
  }
}

export function brandHeritageLd(): Record<string, unknown> {
  return {
    '@type': 'Brand',
    name: SITE_NAME,
    alternateName: BRAND_PARENT_BRAND,
    description: FACTS.boilerplate,
    founder: BRAND_COMPANY_NAME,
    slogan: FACTS.buildLine,
    historyHighlights: [
      { '@type': 'Event', name: 'Plant operations', description: `${FACTS.warehouseM2} cast iron manufacturing plant with ${FACTS.workshops} in Qingdao, China.` },
      { '@type': 'Event', name: 'Jaw hardness', description: `GCr15/Cr12MoV jaws quenched and tempered to ${FACTS.hardnessRating} \u2014 verified by batch hardness testing.` },
      { '@type': 'Event', name: 'Certification', description: `Certified ${CERTIFICATION_NAMES.join(', ')} \u2014 manufacturing quality, safety and environmental compliance.` },
      { '@type': 'Event', name: 'Global exports', description: `Supplies vise OEM/ODM partners in ${FACTS.exportCountries} countries worldwide.` },
    ],
    certifications: CERTIFICATION_NAMES,
    manufacturingExperience: {
      annualCapacity: FACTS.annualCapacity,
      monthlyCapacity: FACTS.monthlyCapacity,
      exportCountries: FACTS.exportCountries,
      leadTime: FACTS.leadTime,
      sampleTime: FACTS.sampleTime,
      moq: FACTS.moq,
      qualityGates: FACTS.qualityGates,
      traceability: FACTS.traceabilityRet,
    },
  }
}

export function enhancedFaqLd(): Record<string, unknown> {
  const faqs: {
    q: string
    a: string
    category: string
    priority: number
    keywords: string[]
  }[] = [
    {
      q: `What is ${SITE_NAME}?`,
      a: FACTS.boilerplate,
      category: 'General',
      priority: 5,
      keywords: [SITE_NAME, 'bench vise manufacturer', 'vise factory', 'Qingdao'],
    },
    {
      q: 'What is the MOQ for custom vise orders?',
      a: `Trial/pilot orders start at ${MOQ_SHORT.trialStandard}; standard production runs are ${MOQ_SHORT.standardRun}; custom tooling runs are ${MOQ_SHORT.customMould}.`,
      category: 'Pricing',
      priority: 5,
      keywords: ['MOQ', 'minimum order quantity', 'pilot order', 'custom vise'],
    },
    {
      q: 'What are the production and sampling lead times?',
      a: `Samples ship in ${FACTS.sampleTime}; bulk production is ${FACTS.leadTime} from confirmed PO and deposit. Custom tooling development adds 15\u201320 days.`,
      category: 'Production',
      priority: 5,
      keywords: ['lead time', 'sample time', 'production time', 'bulk order'],
    },
    {
      q: 'Can you manufacture bench vises with my own brand?',
      a: 'Yes \u2014 OEM and private-label manufacturing: engineering, tooling, sampling, production and export. You own the brand, the market and the customer.',
      category: 'Customization',
      priority: 5,
      keywords: ['private label', 'OEM', 'ODM', 'custom finish', 'own brand'],
    },
    {
      q: 'What quality control do you run on every vise?',
      a: `Every vise passes ${FACTS.qualityGates} inspection gates including a ${FACTS.assemblyChecklist} assembly checklist and a ${FACTS.pressureTest}; units failing clamping force or jaw hardness checks are auto-rejected. Batches keep ${FACTS.traceabilityRet} ERP traceability, and third-party inspections by ${FACTS.thirdPartyInspectors.join(', ')} are available.`,
      category: 'Technical',
      priority: 4,
      keywords: ['quality control', 'inspection', 'clamping force', 'QC', 'factory audit'],
    },
    {
      q: 'What certifications does the factory hold?',
      a: `${CERTIFICATION_NAMES.join(', ')} \u2014 with third-party inspection by ${FACTS.thirdPartyInspectors.join(', ')}.`,
      category: 'Technical',
      priority: 4,
      keywords: ['certifications', 'ISO 9001', 'CE', 'RoHS'],
    },
    {
      q: 'What warranty do you provide on bulk orders?',
      a: 'Warranty terms are written into each order contract, covering defects in materials and workmanship under documented use conditions. Claims are settled against batch inspection records.',
      category: 'Warranty',
      priority: 5,
      keywords: ['warranty', 'after-sales', 'claim', 'defects'],
    },
    {
      q: 'Do you ship worldwide?',
      a: `Yes \u2014 export to ${FACTS.exportCountries} countries with sea and air freight, full export documentation and customs brokerage support.`,
      category: 'Shipping',
      priority: 4,
      keywords: ['shipping', 'worldwide', 'export', 'freight', 'logistics'],
    },
    {
      q: 'Do you sell to end consumers?',
      a: FACTS.notRob,
      category: 'General',
      priority: 3,
      keywords: ['end consumer', 'retail', 'B2B', 'wholesale'],
    },
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function warrantyReturnsLd(): Record<string, unknown> {
  return {
    '@type': 'WarrantyPromise',
    durationOfWarranty: { '@type': 'QuantitativeValue', value: 12, unitCode: 'MON' },
    warrantyScope: 'Defects in materials and workmanship under documented use conditions',
    description:
      '12-month limited warranty against defects in materials and workmanship, adjudicated against the batch inspection records (10-year ERP traceability). Exact terms are written into each order contract.',
    coverage: [
      { '@type': 'Thing', name: 'Gray iron cast body & base (HT200/HT250)', warranty: '12 months' },
      { '@type': 'Thing', name: 'Hardened jaws (GCr15/Cr12MoV)', warranty: '12 months' },
      { '@type': 'Thing', name: 'Cast spindle & handle (45# steel)', warranty: '12 months' },
      { '@type': 'Thing', name: 'Swivel base hardware', warranty: '12 months' },
    ],
    claimProcess: {
      '@type': 'HowTo',
      name: 'Warranty claim',
      description:
        `Contact ${SITE_NAME} through the contact page with your order number and product details; claims are adjudicated against the batch inspection records (10-year ERP traceability), not guesswork.`,
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Contact sales', text: 'Reach us via the contact page with your order number and product details.' },
        { '@type': 'HowToStep', position: 2, name: 'Review against batch records', text: 'Claims are checked against the vise serial number and 7-stage inspection records.' },
        { '@type': 'HowToStep', position: 3, name: 'Repair or replace', text: 'Defective components are repaired or replaced at our option, per the warranty terms in the order contract.' },
      ],
    },
  }
}

export function shippingLogisticsLd(): Record<string, unknown> {
  return {
    '@type': 'ShippingDeliveryTime',
    description: `Export to ${FACTS.exportCountries} countries with production lead time ${FACTS.leadTime} and samples in ${FACTS.sampleTime}.`,
    shippingMethods: [
      { '@type': 'OfferShippingDetails', name: 'Sea freight', description: 'Bulk production shipments (LCL/FCL) \u2014 standard for 90\u2013100+ unit runs.' },
      { '@type': 'OfferShippingDetails', name: 'Air freight', description: 'Samples and urgent orders via air courier.' },
      { '@type': 'OfferShippingDetails', name: 'Express courier', description: 'DHL/FedEx/UPS for samples and small parcels.' },
    ],
    incoterms: ['EXW', 'FOB', 'CIF', 'DAP'],
    exportDocumentation: [
      'Commercial invoice',
      'Packing list',
      'Certificate of origin',
      'FQC test reports (final inspection)',
      'Batch traceability records (10-year ERP)',
    ],
    logisticsCapabilities: {
      customsBrokerage: true,
      exportCountries: FACTS.exportCountries,
      packaging: 'Export-grade packaging per destination; palletized sea-freight option.',
    },
  }
}

export function productVariantFaqLd(input: {
  variantName: string
  baseProduct: string
  sku?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    name: `${input.variantName} \u2014 variant FAQ`,
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the ${input.variantName}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A variant of the ${input.baseProduct}${input.sku ? ` (SKU ${input.sku})` : ''}, manufactured to order with the customization options agreed in the purchase contract.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can variant markings, finish and packaging be customized?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes \u2014 jaw markings, finish, jaw width and packaging are customized per PO within the standard MOQ tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What lead time applies to this variant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Samples in ${FACTS.sampleTime}; bulk production ${FACTS.leadTime} after PO confirmation. Custom tooling adds 15\u201320 days.`,
        },
      },
    ],
  }
}

export function qcHowToLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '7-Stage Bench Vise Quality Control Inspection',
    description: 'Every bench vise passes seven inspection gates with documented pass/fail criteria before shipment. Each gate has quantitative standards and traceability records.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Incoming Material Inspection', text: 'HT200/HT250 gray cast iron, 45# carbon steel and GCr15/Cr12MoV jaw steel verified against specification and batch certificates before entering production.' },
      { '@type': 'HowToStep', position: 2, name: 'Casting Inspection', text: 'Casting quality, gating and defect checks on bodies and bases, and dimensional checks against pattern approval.' },
      { '@type': 'HowToStep', position: 3, name: 'Machining Inspection', text: 'Jaw faces, slides, spindle threads and mounting surfaces checked to 0.05 mm CNC accuracy with documented pass/fail criteria.' },
      { '@type': 'HowToStep', position: 4, name: 'Heat Treatment', text: 'Jaw blanks quenched and tempered to 58–62 HRC; hardness verified per batch on the hardness tester.' },
      { '@type': 'HowToStep', position: 5, name: 'Surface Coating', text: 'Spray, powder-coat or Parkerizing finish verified — film thickness and corrosion resistance validated by 48-hour salt-spray testing.' },
      { '@type': 'HowToStep', position: 6, name: 'Assembly & Functional Test', text: 'Clamping force, swivel torque and 10,000+ cycle durability tested; units failing clamping force or jaw hardness checks are auto-rejected.' },
      { '@type': 'HowToStep', position: 7, name: 'Final Inspection & Packing', text: 'A 100-point assembly checklist, export packaging and compliance documentation (CE, ISO 9001, RoHS) plus 10-year ERP traceability verified before shipment.' },
    ],
  }
}