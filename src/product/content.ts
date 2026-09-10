import type { Locale } from '@/features/i18n/locale'
import { FACTS, MOQ_SHORT, COLLABORATION_MODES } from './facts'

/**
 * Marketing content for the Stavalk site, localized en/es/fr.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is trilingual (en/es/fr) so all
 * locale routes render the same structure.
 */

export interface Localized<T> extends Record<string, T> {
  en: T
  es: T
  fr: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  if (locale in d) return d[locale as keyof Localized<T>]
  return d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  ctaTertiary: string
  ctaQuartiary: string
  ctaMicro: string
  stats: { value: string; label: string }[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'Qingdao, China Factory · OEM / ODM / Private Label · Samples to Batch Production',
    titlePre: 'Bench Vise Specialist for',
    titleAccent: 'Tool Brands & Distributors',
    titlePost: '',
    sub: 'OEM, ODM and private-label bench vises — from product development and prototyping to quality-controlled production.',
    ctaPrimary: 'Start Your Bench Vise Project',
    ctaSecondary: 'Explore Bench Vises',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Reply within 1 business day · NDA available before file exchange · MOQ confirmed after specification review',
    stats: [
      { value: '8,000 m²', label: 'In-house factory — Qingdao, China' },
      { value: '80,000+', label: 'Vises produced annually' },
      { value: '50+', label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: 'Stavalk 6" Heavy-Duty',
    mockupHint: 'Your finish · your colors · your packaging',
    heroNote: FACTS.moqNote,
    float1: { value: '1–2 units', label: 'Sample & approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fábrica en Qingdao, China · OEM / ODM / Marca privada · Muestras a producción en serie',
    titlePre: 'Especialista en tornillos de banco para',
    titleAccent: 'marcas y distribuidores de herramientas',
    titlePost: '',
    sub: 'Tornillos de banco OEM, ODM y marca privada — desde el desarrollo de producto y el prototipado hasta la producción con control de calidad.',
    ctaPrimary: 'Inicia tu proyecto de tornillo de banco',
    ctaSecondary: 'Explorar tornillos de banco',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Respuesta en 1 día hábil · NDA disponible antes del intercambio de archivos · MOQ confirmado tras revisar la especificación',
    stats: [
      { value: '8.000 m²', label: 'Fábrica propia — Qingdao, China' },
      { value: '80.000+', label: 'Tornillos producidos anualmente' },
      { value: '50+', label: 'Países de exportación' },
      { value: FACTS.ndaWindow, label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: 'Stavalk 6" uso intensivo',
    mockupHint: 'Tu acabado · tus colores · tu packaging',
    heroNote: FACTS.moqNoteEs,
    float1: { value: '1–2 uds.', label: 'Muestra y aprobación (antes de compromiso de volumen)' },
    float2: { value: FACTS.leadTime, label: 'Plazo de producción (tras PO)' },
  },
  fr: {
    kicker: 'Usine à Qingdao, Chine · OEM / ODM / Marque privée · Des échantillons à la production en série',
    titlePre: 'Spécialiste des étaux d’établi pour',
    titleAccent: 'marques et distributeurs d’outillage',
    titlePost: '',
    sub: 'Étaux d’établi OEM, ODM et marque privée — du développement produit et du prototypage à la production sous contrôle qualité.',
    ctaPrimary: 'Lancez votre projet d’étau d’établi',
    ctaSecondary: 'Explorer les étaux d’établi',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Réponse sous 1 jour ouvré · NDA disponible avant l’échange de fichiers · MOQ confirmé après examen des spécifications',
    stats: [
      { value: '8 000 m²', label: 'Usine intégrée — Qingdao, Chine' },
      { value: '80 000+', label: 'Étaux produits chaque année' },
      { value: '50+', label: 'Pays de destination à l’export' },
      { value: FACTS.ndaWindow, label: 'Délai de réponse NDA' },
    ],
    mockupLabel: 'Plateforme signature',
    mockupBrand: 'Stavalk 6" usage intensif',
    mockupHint: 'Votre finition · vos couleurs · votre emballage',
    heroNote: 'Le MOQ est confirmé après examen des spécifications, car le matériau, la taille de mâchoire, la finition, l’emballage et les accessoires influent sur la production.',
    float1: { value: '1–2 units', label: 'Échantillon et approbation (avant tout engagement de volume)' },
    float2: { value: FACTS.leadTime, label: 'Délai de production (après PO)' },
  },
}

/* ─────────────────────────── home: why us (Stavalk advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'The Manufacturing Brand',
    title: 'Powered by Stavalk',
    sub: 'Stavalk is a professional bench vise manufacturing company headquartered in Qingdao, China. Our 8,000 m² plant employs 200+ workers and engineers, with an annual capacity of 80,000+ vises. From raw cast iron and forged steel to a finished, boxed vice, everything runs in-house — engineering, casting, machining, surface finishing, assembly and QC — with 50+ export countries served.',
    image: 'https://assets.Stavalk.com/images/stavalk/factory/afarer-production-department.webp',
    imageCaption: 'Stavalk manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: '8,000 m² plant',
        body: 'In-house from raw iron and steel to a finished, boxed bench vise, in Qingdao, China.',
      },
      {
        title: '200+ workers',
        body: 'Factory workers and engineers on site across casting, machining and assembly.',
      },
      {
        title: '80,000+ vises / year',
        body: 'Annual in-house capacity for volume OEM/ODM programs.',
      },
      {
        title: '58–62 HRC jaws',
        body: 'Hardened jaws with exacting hardness ratings verified on every batch.',
      },
    ],
  },
  es: {
    kicker: 'La marca de fabricación',
    title: 'Con el respaldo de Stavalk',
    sub: 'Stavalk es una empresa profesional de fabricación de tornillos de banco con sede en Qingdao, China. Nuestra planta de 8.000 m² emplea a más de 200 operarios e ingenieros, con una capacidad anual de más de 80.000 tornillos. Desde el hierro fundido en bruto y el acero forjado hasta un tornillo terminado y encajado, todo se hace en casa — ingeniería, fundición, mecanizado, acabado de superficies, montaje y control de calidad — y servimos a más de 50 países de exportación.',
    image: 'https://assets.Stavalk.com/images/stavalk/factory/afarer-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Stavalk, Qingdao, China',
    bullets: [
      {
        title: 'Planta de 8,000 m²',
        body: 'Del hierro y el acero en bruto al tornillo terminado y encajado, en Qingdao, China.',
      },
      {
        title: '+200 operarios',
        body: 'Operarios e ingenieros de planta en fundición, mecanizado y montaje.',
      },
      {
        title: '80.000+ tornillos/año',
        body: 'Capacidad anual interna para programas OEM/ODM por volumen.',
      },
      {
        title: 'Mordazas de 58–62 HRC',
        body: 'Mordazas templadas con dureza exacta verificada en cada lote.',
      },
    ],
  },
  fr: {
    kicker: 'La marque de fabrication',
    title: 'Propulsé par Stavalk',
    sub: 'Stavalk est une entreprise professionnelle de fabrication d’étaux d’établi basée à Qingdao, en Chine. Notre usine de 8 000 m² emploie plus de 200 ouvriers et ingénieurs, avec une capacité annuelle de plus de 80 000 étaux. De la fonte brute et de l’acier forgé à un étau fini et cartonné, tout est réalisé en interne — ingénierie, fonderie, usinage, finition, assemblage et contrôle qualité — et nous servons plus de 50 pays à l’export.',
    image: 'https://assets.Stavalk.com/images/stavalk/factory/afarer-production-department.webp',
    imageCaption: 'Installations de fabrication de Stavalk, Qingdao, Chine',
    bullets: [
      {
        title: 'Usine de 8 000 m²',
        body: 'Du fer et de l’acier bruts à l’étau fini et cartonné, à Qingdao, en Chine.',
      },
      {
        title: 'Plus de 200 ouvriers',
        body: 'Ouvriers et ingénieurs sur site en fonderie, usinage et assemblage.',
      },
      {
        title: '80 000+ étaux/an',
        body: 'Capacité annuelle intégrée pour les programmes OEM/ODM en volume.',
      },
      {
        title: 'Mâchoires de 58–62 HRC',
        body: 'Mâchoires trempées avec dureté exacte vérifiée sur chaque lot.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Finish', 'QC on every run', 'Worldwide export'],
  es: ['OEM & ODM', 'Marca privada', 'Servicio de muestras', 'Diseño y acabado', 'QC en cada lote', 'Exportación mundial'],
  fr: ['OEM & ODM', 'Marque privée', 'Service d’échantillons', 'Conception & finition', 'QC sur chaque lot', 'Exportation mondiale'],
}

/* ─────────────────────────── home: trust bar ─────────────────────────── */

export interface TrustStat {
  value: string
  label: string
}

export interface TrustBarContent {
  stats: TrustStat[]
}

export const trustBar: Localized<TrustBarContent> = {
  en: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'for volume production; pilot runs from 20–50 pcs' },
      { value: FACTS.sampleTime, label: 'samples to your desk after artwork confirmation' },
      { value: FACTS.leadTime, label: 'batch production after confirmed PO and deposit' },
      { value: FACTS.annualCapacity, label: 'annual in-house capacity at the Qingdao plant' },
      { value: FACTS.warehouseM2, label: 'owned plant, from raw casting to finished vise' },
      { value: FACTS.workers, label: 'factory workers and engineers on site' },
      { value: 'ISO 9001 · CE · ISO 14001 · RoHS', label: 'certified; RoHS-compliant materials and finishes' },
      { value: '50+', label: 'export markets across the EU, US, AU and Asia' },
      { value: '58–62 HRC', label: 'jaw hardness verified on every batch before packing' },
      { value: 'Ductile Iron & Forged Steel', label: 'precision-machined bodies with hardened replaceable jaws' },
    ],
  },
  es: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'para volumen; piloto desde 20–50 uds.' },
      { value: FACTS.sampleTime, label: 'muestras en tu escritorio tras confirmar el arte' },
      { value: FACTS.leadTime, label: 'producción en serie tras PO y depósito confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidad anual interna en la planta de Qingdao' },
      { value: FACTS.warehouseM2, label: 'planta propia, de la fundición en bruto al tornillo terminado' },
      { value: FACTS.workers, label: 'operarios e ingenieros de planta' },
      { value: 'ISO 9001 · CE · ISO 14001 · RoHS', label: 'certificada; materiales y acabados conformes a RoHS' },
      { value: '50+', label: 'mercados de exportación en la UE, EE. UU., Australia y Asia' },
      { value: '58–62 HRC', label: 'dureza de mordaza verificada en cada lote antes del embalaje' },
      { value: 'Fundición dúctil y acero forjado', label: 'cuerpos mecanizados de precisión con mordazas templadas reemplazables' },
    ],
  },
  fr: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'pour la production en volume ; lots pilotes à partir de 20–50 pcs' },
      { value: FACTS.sampleTime, label: 'échantillons livrés après confirmation du graphisme' },
      { value: FACTS.leadTime, label: 'production en série après PO et acompte confirmés' },
      { value: FACTS.annualCapacity, label: 'de capacité annuelle intégrée à l’usine de Qingdao' },
      { value: FACTS.warehouseM2, label: 'd’usine intégrée, de la coulée brute à l’étau fini' },
      { value: FACTS.workers, label: 'd’ouvriers et d’ingénieurs sur site' },
      { value: 'ISO 9001 · CE · ISO 14001 · RoHS', label: 'certifiés ; matériaux et finitions conformes RoHS' },
      { value: '50+', label: 'marchés d’exportation en UE, USA, Australie et Asie' },
      { value: '58–62 HRC', label: 'dureté des mâchoires vérifiée sur chaque lot avant emballage' },
      { value: 'Fonte ductile et acier forgé', label: 'corps usinés de précision avec mâchoires trempées remplaçables' },
    ],
  },
}

/* ─────────────────────────── home: Manufacturing Scope (OEM/ODM/Private Label/Volume) ─────────────────────────── */

export interface ScopeCard {
  title: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: ScopeCard[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'Manufacturing Scope',
    title: 'Four Ways Brands and Buyers Work With Our Plant',
    sub: 'OEM, ODM, private label or volume supply — the same in-house engineering and quality system behind every program.',
    cta: 'Request a Manufacturing Quote',
    items: [
      {
        title: 'OEM — Build to Your Specification',
        body: COLLABORATION_MODES.oem.full,
      },
      {
        title: 'ODM — Develop the Vise with Our Engineering Team',
        body: COLLABORATION_MODES.odm.full,
      },
      {
        title: 'Private Label — Your Brand on a Proven Platform',
        body: COLLABORATION_MODES.privateLabel.full,
      },
      {
        title: 'Volume Supply — Repeat and Fleet Orders',
        body: 'Large-run production for distributors, hardware chains, tool retailers and industrial buyers, with locked specifications, batch traceability and consistent fit and finish across reorders.',
      },
    ],
  },
  es: {
    kicker: 'Alcance de fabricación',
    title: 'Cuatro formas de trabajar con nuestra planta',
    sub: 'OEM, ODM, marca privada o suministro por volumen — los mismos estándares de ingeniería y calidad en cada programa.',
    cta: 'Solicita un presupuesto de fabricación',
    items: [
      {
        title: 'OEM — Fabrica según tu especificación',
        body: 'Fabricamos según tu especificación aprobada: planos, dimensiones, materiales, acabado y embalaje. Tú eres propietario del diseño y la propiedad intelectual.',
      },
      {
        title: 'ODM — Desarrolla el tornillo con nuestro equipo de ingeniería',
        body: 'Nuestro equipo de ingeniería desarrolla el diseño, la construcción, el acabado y el embalaje a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de una plataforma probada. La fábrica propone el diseño; el comprador lo aprueba antes de la producción.',
      },
      {
        title: 'Marca privada — Tu marca en una plataforma probada',
        body: 'Tu marca, acabado y embalaje sobre un modelo validado existente — sin desarrollo de utillaje ni cambios estructurales. La vía más rápida del concepto a la entrega.',
      },
      {
        title: 'Suministro por volumen — pedidos repetidos y de flota',
        body: 'Producción en volumen para distribuidores, cadenas de ferretería, minoristas de herramientas y compradores industriales, con especificaciones fijadas, trazabilidad por lote y encaje y acabado homogéneos entre reposiciones.',
      },
    ],
  },
  fr: {
    kicker: 'Périmètre de fabrication',
    title: 'Quatre façons de travailler avec notre usine',
    sub: 'OEM, ODM, marque privée ou fourniture en volume — le même savoir-faire d’ingénierie interne et le même système qualité derrière chaque programme.',
    cta: 'Demander un devis de fabrication',
    items: [
      {
        title: 'OEM — Fabriquez selon votre spécification',
        body: 'OEM (fabrication selon la spécification du client) : nous fabriquons selon votre spécification approuvée — vos plans, vos dimensions, vos matériaux, votre finition et votre emballage. Vous êtes propriétaire du design et de la propriété intellectuelle.',
      },
      {
        title: 'ODM — Développez l’étau avec notre équipe d’ingénierie',
        body: 'ODM : notre équipe d’ingénierie développe le design de l’étau, sa construction, sa finition et son emballage à partir de votre cahier des charges — qu’il s’agisse d’un concept de marché, d’un objectif de performance ou de l’adaptation d’un modèle éprouvé. L’usine propose le design ; l’acheteur l’approuve avant la production.',
      },
      {
        title: 'Marque privée — Votre marque sur une plateforme éprouvée',
        body: 'Marque privée : votre marque, votre finition et votre emballage sur un modèle existant validé — sans développement d’outillage ni modification structurelle. La voie la plus rapide du concept à la livraison.',
      },
      {
        title: 'Fourniture en volume — Commandes récurrentes et de flotte',
        body: 'Production en grandes séries pour les distributeurs, les chaînes de quincaillerie, les détaillants d’outillage et les acheteurs industriels, avec spécifications figées, traçabilité par lot et ajustage et finition homogènes d’une commande récurrente à l’autre.',
      },
    ],
  },
}

/* ─────────────────────────── home: Inside the Plant (manufacturing capability) ─────────────────────────── */

export interface CapabilityBlock {
  name: string
  body: string
}

export interface CapabilityContent {
  kicker: string
  title: string
  sub: string
  items: CapabilityBlock[]
}

export const capability: Localized<CapabilityContent> = {
  en: {
    kicker: 'Manufacturing Capability',
    title: 'Inside the Plant',
    sub: 'Every process below runs in-house. Nothing critical is subcontracted.',
    items: [
      {
        name: 'Casting & Forging',
        body: 'Ductile iron and forged steel bodies cast and hammered on site, with precision machining to 0.05 mm positional accuracy and computer-optimized nesting to control material waste.',
      },
      {
        name: 'CNC Machining',
        body: 'CNC-machined jaw faces, guides and slide channels hold tight tolerances for smooth, accurate clamping. Hardened jaws reach 58–62 HRC.',
      },
      {
        name: 'Heat Treatment',
        body: 'Jaws and screw rods induction-hardened to 58–62 HRC for long service life, with controlled hardness verified on every batch.',
      },
      {
        name: 'Surface Finish',
        body: 'Powder coating, electrostatic painting or brushed finish in your colors and texture — with RoHS-compliant materials and custom logo marking.',
      },
      {
        name: 'Assembly and Adjustment',
        body: 'Each vise follows a 100-point assembly checklist signed off by the line lead — slide, screw, swivel base, jaw alignment and handle fitment.',
      },
      {
        name: 'Export Packing',
        body: 'Each vise is oiled, wrapped and export-grade packed, with printed retail cartons and molded inserts available.',
      },
    ],
  },
  es: {
    kicker: 'Capacidad de fabricación',
    title: 'Dentro de la planta',
    sub: 'Todos los procesos siguientes se realizan en casa. Nada crítico se subcontrata.',
    items: [
      {
        name: 'Fundición y forja',
        body: 'Cuerpos de hierro dúctil y acero forjado fundidos y martillados en el sitio, con mecanizado de precisión de 0,05 mm y optimización por ordenador para controlar el desperdicio de material.',
      },
      {
        name: 'Mecanizado CNC',
        body: 'Caras de mordaza, guías y canales mecanizados por CNC mantienen tolerancias estrictas para un cierre suave y preciso. Las mordazas templadas alcanzan 58–62 HRC.',
      },
      {
        name: 'Tratamiento térmico',
        body: 'Mordazas y husillos endurecidos por inducción hasta 58–62 HRC para una larga vida útil, con dureza controlada verificada en cada lote.',
      },
      {
        name: 'Acabado de superficies',
        body: 'Recubrimiento en polvo, pintura electrostática o acabado cepillado en tus colores y textura — con materiales conformes a RoHS y marcado de logo personalizado.',
      },
      {
        name: 'Ensamblado y ajuste',
        body: 'Cada tornillo sigue un checklist de ensamblado de 100 puntos firmado por el responsable de línea: corredera, husillo, base giratoria, alineación de mordazas y ajuste del manillar.',
      },
      {
        name: 'Embalaje de exportación',
        body: 'Cada tornillo se engrasa, envuelve y embala para exportación, con cartones minoristas impresos e insertos moldeados disponibles.',
      },
    ],
  },
  fr: {
    kicker: 'Capacité de fabrication',
    title: 'Au cœur de l’usine',
    sub: 'Tous les processus ci-dessous sont réalisés en interne. Aucun élément critique n’est sous-traité.',
    items: [
      {
        name: 'Fonderie et forge',
        body: 'Des corps en fonte ductile et en acier forgé coulés et forgés sur place, avec un usinage de précision à 0,05 mm et un nesting optimisé par ordinateur pour maîtriser les pertes de matière.',
      },
      {
        name: 'Usinage CNC',
        body: 'Les faces de mâchoire, les guides et les glissières usinés au CNC maintiennent des tolérances serrées pour un serrage précis et fluide. Les mâchoires trempées atteignent 58–62 HRC.',
      },
      {
        name: 'Traitement thermique',
        body: 'Mâchoires et vis de serrage trempées par induction à 58–62 HRC pour une longue durée de vie, avec dureté contrôlée vérifiée sur chaque lot.',
      },
      {
        name: 'Finition de surface',
        body: 'Revêtement poudre, peinture électrostatique ou finition brossée dans vos couleurs et votre texture — avec des matériaux conformes RoHS et un marquage de logo personnalisé.',
      },
      {
        name: 'Assemblage et réglage',
        body: 'Chaque étau suit une check-list d’assemblage de 100 points validée par le chef de ligne — glissière, vis, base pivotante, alignement des mâchoires et pose de la poignée.',
      },
      {
        name: 'Emballage export',
        body: 'Chaque étau est huilé, enveloppé et emballé au standard export, avec cartons de vente imprimés et inserts moulés disponibles.',
      },
    ],
  },
}

/* ─────────────────────────── home: quality control (How Every Vise Is Verified) ─────────────────────────── */

export interface QualityStep {
  title: string
  body: string
}

export interface QualityContent {
  kicker: string
  title: string
  sub: string
  steps: QualityStep[]
}

export const quality: Localized<QualityContent> = {
  en: {
    kicker: 'Quality Control',
    title: 'How Every Vise Is Verified',
    sub: 'Quality is a documented process, not a promise. Here is what happens to your order before it ships.',
    steps: [
      {
        title: 'Incoming Material QC',
        body: 'Iron, steel, jaw inserts and hardware are quarantined until QC sign-off. Castings and stock undergo hardness, tensile and chemical-composition testing before any batch enters the line.',
      },
      {
        title: 'In-Process Checkpoints',
        body: 'QC checkpoints at every production stage, with machined samples pulled and dimensionally verified against the batch standard.',
      },
      {
        title: 'Clamping & Hardness Test',
        body: 'Every jaw face is hardness-tested to 58–62 HRC, and every sliding screw is cycled to verify smooth, accurate clamping with no binding across the full opening.',
      },
      {
        title: 'Structural Verification',
        body: 'Clamping force, jaw parallelism, slide alignment and swivel-base lock are verified against the specification before final inspection.',
      },
      {
        title: 'Final Inspection',
        body: '100-point checklist per vise, plus dimensional and weight verification against the approved sample.',
      },
      {
        title: 'Batch Traceability',
        body: 'Every material lot receives a unique ERP number. Each vise’s bill of materials links back to the original supplier batch. Records retained 10 years.',
      },
    ],
  },
  es: {
    kicker: 'Control de calidad',
    title: 'Cómo se verifica cada tornillo',
    sub: 'La calidad es un proceso documentado, no una promesa. Esto es lo que le ocurre a tu pedido antes de enviarlo.',
    steps: [
      {
        title: 'Control de calidad de entrada',
        body: 'El hierro, el acero, los insertos de mordaza y el herraje quedan en cuarentena hasta la validación. Las fundiciones y el stock pasan ensayos de dureza, tracción y composición química antes de entrar en la línea.',
      },
      {
        title: 'Puntos de control en proceso',
        body: 'Puntos de control en cada etapa de producción, con muestras mecanizadas extraídas y verificadas dimensionalmente contra el estándar del lote.',
      },
      {
        title: 'Ensayo de cierre y dureza',
        body: 'Cada cara de mordaza se ensaya en dureza hasta 58–62 HRC, y cada husillo deslizante se cicla para verificar un cierre suave y preciso sin atascos en toda la apertura.',
      },
      {
        title: 'Verificación estructural',
        body: 'La fuerza de cierre, el paralelismo de mordazas, la alineación de la corredera y el bloqueo de la base giratoria se verifican contra la especificación antes de la inspección final.',
      },
      {
        title: 'Inspección final',
        body: 'Checklist de 100 puntos por tornillo, además de verificación dimensional y de peso contra la muestra aprobada.',
      },
      {
        title: 'Trazabilidad de lote',
        body: 'Cada lote de material recibe un número ERP único. La lista de materiales de cada tornillo enlaza con el lote del proveedor original. Registros conservados 10 años.',
      },
    ],
  },
  fr: {
    kicker: 'Contrôle qualité',
    title: 'Comment chaque étau est vérifié',
    sub: 'La qualité est un processus documenté, pas une promesse. Voici ce qui arrive à votre commande avant son expédition.',
    steps: [
      {
        title: 'Contrôle qualité des matières entrantes',
        body: 'Le fer, l’acier, les insertions de mâchoire et la quincaillerie sont mis en quarantaine jusqu’à la validation par le QC. Les pièces coulées et le stock subissent des tests de dureté, de traction et de composition chimique avant l’entrée de tout lot en ligne.',
      },
      {
        title: 'Points de contrôle en cours de production',
        body: 'Des points de contrôle qualité à chaque étape de production, avec prélèvement d’échantillons usinés et vérification dimensionnelle par rapport au standard du lot.',
      },
      {
        title: 'Test de serrage et de dureté',
        body: 'Chaque face de mâchoire est testée en dureté à 58–62 HRC, et chaque vis de serrage est actionnée pour vérifier un serrage fluide et précis, sans blocage sur toute l’ouverture.',
      },
      {
        title: 'Vérification structurelle',
        body: 'La force de serrage, le parallélisme des mâchoires, l’alignement de la glissière et le verrouillage de la base pivotante sont vérifiés conformément à la spécification avant l’inspection finale.',
      },
      {
        title: 'Inspection finale',
        body: 'Check-list de 100 points par étau, plus vérification des dimensions et du poids par rapport à l’échantillon approuvé.',
      },
      {
        title: 'Traçabilité des lots',
        body: 'Chaque lot de matière reçoit un numéro ERP unique. La nomenclature de chaque étau renvoie au lot d’origine du fournisseur. Les registres sont conservés 10 ans.',
      },
    ],
  },
}

/* ─────────────────────────── home: commercial terms ─────────────────────────── */

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface MoqTier {
  stage: string
  quantity: string
  purpose: string
  note: string
}

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  moqTiers: MoqTier[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'Standard MOQ, sampling, production and delivery terms are listed below. Projects involving new tooling, specialized materials, compliance testing or custom packaging are quoted separately.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          FACTS.moqExplanation.coBrand,
          FACTS.moqExplanation.pilot,
          FACTS.moqExplanation.standard,
        ],
      },
      {
        label: 'Lead time',
        lines: [
          '25–35 days from confirmed PO and deposit',
          'Custom tooling development: +15–20 days for molds',
          'Expedited production available for rush orders',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Prototype samples ship in 7–14 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Export documentation handled in-house',
          'Export-grade packing; printed retail cartons available',
        ],
      },
    ],
    certs:
      'ISO 9001 quality management · CE certification for models destined for EU markets (scope confirmed per project) · ISO 14001 environmental management · RoHS documentation with every order.',
    moqTiers: [
      {
        stage: 'Sample & approval',
        quantity: FACTS.moqExplanation.sample,
        purpose: 'Confirm jaw width, finish, colors and packaging before any production run',
        note: '7–14 days; physical vise, not a rendering',
      },
      {
        stage: 'Co-branding small bulk',
        quantity: FACTS.moqExplanation.coBrand,
        purpose: 'Test a design on a proven model with logo marking',
        note: 'Fastest way to validate a new brand',
      },
      {
        stage: 'Pilot batch / initial stock',
        quantity: FACTS.moqExplanation.pilot,
        purpose: 'Validate the market or open your store with real inventory',
        note: 'Lowest volume on existing models',
      },
      {
        stage: 'Standard volume production',
        quantity: '50–200 pcs standard models; 20–50 pcs heavy/specialty',
        purpose: 'Regular production runs at the best unit price',
        note: FACTS.moqExplanation.customMould,
      },
    ],
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Los términos estándar de MOQ, muestreo, producción y entrega se indican a continuación. Los proyectos con utillaje nuevo, materiales especiales, ensayos de cumplimiento o packaging a medida se presupuestan por separado.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          `Co-branding: ${FACTS.moqExplanation.coBrand}`,
          `Lote piloto: ${FACTS.moqExplanation.pilot}`,
          `Volumen estándar: ${FACTS.moqExplanation.standard}`,
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          '25–35 días desde el PO confirmado y el depósito',
          'Desarrollo de utillaje a medida: +15–20 días para moldes',
          'Producción acelerada disponible para pedidos urgentes',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de prototipo salen en 7–14 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Exportación y documentación',
        lines: [
          'Documentación de exportación gestionada en casa',
          'Embalaje de exportación; cartones minoristas impresos disponibles',
        ],
      },
    ],
    certs:
      'ISO 9001 · Certificación CE para modelos destinados al mercado de la UE (alcance confirmado por proyecto) · ISO 14001 gestión ambiental · Documentación RoHS con cada pedido.',
    moqTiers: [
      {
        stage: 'Muestra y aprobación',
        quantity: FACTS.moqExplanation.sample,
        purpose: 'Confirmar ancho de mordaza, acabado, colores y packaging antes de cualquier producción',
        note: '7–14 días; tornillo físico, no un render',
      },
      {
        stage: 'Co-branding en pequeño lote',
        quantity: FACTS.moqExplanation.coBrand,
        purpose: 'Probar un diseño sobre un modelo probado con marcado de logo',
        note: 'La vía más rápida para validar una nueva marca',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: FACTS.moqExplanation.pilot,
        purpose: 'Validar el mercado o abrir tu tienda con inventario real',
        note: 'El volumen más bajo sobre modelos existentes',
      },
      {
        stage: 'Producción de volumen estándar',
        quantity: '50–200 uds. modelos estándar; 20–50 uds. pesados/especiales',
        purpose: 'Producción regular al mejor precio unitario',
        note: FACTS.moqExplanation.customMould,
      },
    ],
  },
  fr: {
    kicker: 'Conditions commerciales',
    title: 'Conditions commerciales, énoncées en toute transparence',
    sub: 'Les conditions standard de MOQ, d’échantillonnage, de production et de livraison sont indiquées ci-dessous. Les projets impliquant de nouveaux outillages, des matériaux spécialisés, des essais de conformité ou un emballage sur mesure font l’objet d’une offre séparée.',
    cells: [
      {
        label: 'Commande minimale',
        lines: [
          `Co-branding : ${FACTS.moqExplanation.coBrand}`,
          `Lot pilote : ${FACTS.moqExplanation.pilot}`,
          `Volume standard : ${FACTS.moqExplanation.standard}`,
        ],
      },
      {
        label: 'Délai de livraison',
        lines: [
          '25–35 jours à compter du PO confirmé et du dépôt',
          'Développement d’outillage sur mesure : +15–20 jours pour les moules',
          'Production accélérée disponible pour les commandes urgentes',
        ],
      },
      {
        label: 'Échantillonnage',
        lines: [
          'Les échantillons prototype partent en 7–14 jours',
          'Le coût de l’échantillon est déduit de la commande en volume',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Documentation d’exportation gérée en interne',
          'Emballage standard export ; cartons de vente imprimés disponibles',
        ],
      },
    ],
    certs: 'ISO 9001 gestion de la qualité · Certification CE pour les modèles destinés au marché de l’UE (périmètre confirmé par projet) · ISO 14001 gestion environnementale · Documentation RoHS avec chaque commande.',
    moqTiers: [
      {
        stage: 'Échantillon & approbation',
        quantity: FACTS.moqExplanation.sample,
        purpose: 'Confirmer la largeur de mâchoire, la finition, les couleurs et l’emballage avant toute production',
        note: '7–14 jours ; étau physique, pas un rendu',
      },
      {
        stage: 'Co-branding en petit volume',
        quantity: FACTS.moqExplanation.coBrand,
        purpose: 'Tester un design sur un modèle éprouvé avec marquage du logo',
        note: 'La voie la plus rapide pour valider une nouvelle marque',
      },
      {
        stage: 'Lot pilote / stock initial',
        quantity: FACTS.moqExplanation.pilot,
        purpose: 'Valider le marché ou ouvrir votre boutique avec un stock réel',
        note: 'Le volume le plus faible sur les modèles existants',
      },
      {
        stage: 'Production en volume standard',
        quantity: '50–200 pièces modèles standard ; 20–50 pièces lourds/spéciaux',
        purpose: 'Production régulière au meilleur prix unitaire',
        note: FACTS.moqExplanation.customMould,
      },
    ],
  },
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Built for Businesses Creating Their Own Bench Vises',
    sub: 'Whether you are launching a new tool brand or expanding an existing hardware line, our manufacturing solutions can be adapted to your business.',
    segments: [
      {
        slug: 'tool-brands',
        title: 'Tool & Hardware Brands',
        body: 'Develop custom bench vises that match your brand positioning, target market and product strategy.',
        points: ['Custom designs', 'Brand finish', 'Product development', 'Private label'],
        cta: 'Explore Custom Vises',
        href: '/product-development',
      },
      {
        slug: 'industrial-companies',
        title: 'Industrial & Workshop Companies',
        body: 'Expand your product portfolio with customized bench vises designed for your market.',
        points: ['Product customization', 'Multiple models', 'OEM production'],
        cta: 'View Custom Vises',
        href: '/solutions/industrial-vise-programs',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributors & Retailers',
        body: 'Create differentiated bench vise collections instead of competing on the same standard products.',
        points: ['Private label', 'Custom packaging', 'Retail-ready products'],
        cta: 'Learn More',
        href: '/solutions/private-label-vises',
      },
      {
        slug: 'workshops-schools',
        title: 'Workshops, Schools & Institutions',
        body: 'Develop bench vises and workholding equipment tailored to your operating environment and users.',
        points: ['Custom specifications', 'Branding', 'Bulk production'],
        cta: 'View Solutions',
        href: '/solutions/workshop-vise-solutions',
      },
    ],
  },
  es: {
    kicker: 'A quién servimos',
    title: 'Hecho para empresas que crean sus propios tornillos de banco',
    sub: 'Ya sea que estés lanzando una nueva marca de herramientas o ampliando una línea de hardware existente, nuestras soluciones de fabricación se adaptan a tu negocio.',
    segments: [
      {
        slug: 'tool-brands',
        title: 'Marcas de herramientas y hardware',
        body: 'Desarrolla tornillos de banco personalizados que coincidan con el posicionamiento de tu marca, tu mercado objetivo y tu estrategia de producto.',
        points: ['Diseños personalizados', 'Acabado de marca', 'Desarrollo de producto', 'Marca privada'],
        cta: 'Explorar tornillos personalizados',
        href: '/product-development',
      },
      {
        slug: 'industrial-companies',
        title: 'Empresas industriales y de taller',
        body: 'Amplía tu cartera de productos con tornillos de banco personalizados diseñados para tu mercado.',
        points: ['Personalización de producto', 'Varios modelos', 'Producción OEM'],
        cta: 'Ver tornillos personalizados',
        href: '/solutions/industrial-vise-programs',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distribuidores y minoristas',
        body: 'Crea colecciones de tornillos de banco diferenciadas en lugar de competir con los mismos productos estándar.',
        points: ['Marca privada', 'Embalaje personalizado', 'Productos listos para retail'],
        cta: 'Saber más',
        href: '/solutions/private-label-vises',
      },
      {
        slug: 'workshops-schools',
        title: 'Talleres, escuelas e instituciones',
        body: 'Desarrolla tornillos de banco y equipos de sujeción adaptados a tu entorno operativo y a tus usuarios.',
        points: ['Especificaciones personalizadas', 'Marca', 'Producción por volumen'],
        cta: 'Ver soluciones',
        href: '/solutions/workshop-vise-solutions',
      },
    ],
  },
  fr: {
    kicker: 'Qui nous servons',
    title: 'Conçu pour les entreprises qui créent leurs propres étaux d’établi',
    sub: 'Que vous lanciez une nouvelle marque d’outillage ou que vous étendiez une gamme bricolage existante, nos solutions de fabrication s’adaptent à votre entreprise.',
    segments: [
      {
        slug: 'tool-brands',
        title: 'Marques d’outillage et de quincaillerie',
        body: 'Développez des étaux d’établi personnalisés qui correspondent au positionnement de votre marque, à votre marché cible et à votre stratégie produit.',
        points: ['Designs personnalisés', 'Finition de marque', 'Développement produit', 'Marque privée'],
        cta: 'Explorer les étaux sur mesure',
        href: '/product-development',
      },
      {
        slug: 'industrial-companies',
        title: 'Entreprises industrielles et ateliers',
        body: 'Élargissez votre portefeuille de produits avec des étaux d’établi personnalisés conçus pour votre marché.',
        points: ['Personnalisation produit', 'Plusieurs modèles', 'Production OEM'],
        cta: 'Voir les étaux sur mesure',
        href: '/solutions/industrial-vise-programs',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributeurs & détaillants',
        body: 'Créez des collections d’étaux d’établi différenciées plutôt que de concurrencer les mêmes produits standard.',
        points: ['Marque privée', 'Emballage sur mesure', 'Produits prêts pour la vente au détail'],
        cta: 'En savoir plus',
        href: '/solutions/private-label-vises',
      },
      {
        slug: 'workshops-schools',
        title: 'Ateliers, écoles & institutions',
        body: 'Développez des étaux d’établi et des équipements de bridage adaptés à votre environnement d’exploitation et à vos utilisateurs.',
        points: ['Spécifications sur mesure', 'Image de marque', 'Production en volume'],
        cta: 'Voir les solutions',
        href: '/solutions/workshop-vise-solutions',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Customization Capability',
    title: 'Custom Bench Vise Solutions For Your Business',
    sub: 'From OEM/ODM programs for brands to private-label lines for distributors and sourcing teams — every requirement turns into a manufacturable product.',
    pillars: [
      {
        title: 'Vise Design',
        body: 'Define the vise as your product requires.',
        points: ['Jaw width', 'Opening', 'Material', 'Construction'],
      },
      {
        title: 'Finish & Branding',
        body: 'Put your identity on every vise.',
        points: ['Logo', 'Colors', 'Texture', 'Marking'],
      },
      {
        title: 'Accessories',
        body: 'Complete the product with matched parts.',
        points: ['Jaw inserts', 'Pipe jaws', 'Base', 'Packaging'],
      },
      {
        title: 'Production Requirements',
        body: 'Tailor how your project is produced.',
        points: ['Quantity', 'Specification', 'Application'],
      },
    ],
  },
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones de tornillos de banco personalizados para tu negocio',
    sub: 'De los programas OEM/ODM para marcas a las líneas de marca privada para distribuidores y equipos de compra — cada requisito se convierte en un producto fabricable.',
    pillars: [
      {
        title: 'Diseño del tornillo',
        body: 'Define el tornillo según lo que requiere tu producto.',
        points: ['Ancho de mordaza', 'Apertura', 'Material', 'Construcción'],
      },
      {
        title: 'Acabado y marca',
        body: 'Pon tu identidad en cada tornillo.',
        points: ['Logo', 'Colores', 'Textura', 'Marcado'],
      },
      {
        title: 'Accesorios',
        body: 'Completa el producto con piezas a juego.',
        points: ['Insertos de mordaza', 'Mordazas tubulares', 'Base', 'Embalaje'],
      },
      {
        title: 'Requisitos de producción',
        body: 'Adapta cómo se produce tu proyecto.',
        points: ['Cantidad', 'Especificación', 'Aplicación'],
      },
    ],
  },
  fr: {
    kicker: 'Capacité de personnalisation',
    title: 'Solutions d’étaux d’établi sur mesure pour votre entreprise',
    sub: 'Des programmes OEM/ODM pour les marques aux gammes en marque privée pour les distributeurs et les équipes d’approvisionnement — chaque exigence devient un produit manufacturable.',
    pillars: [
      {
        title: 'Conception de l’étau',
        body: 'Définissez l’étau selon les exigences de votre produit.',
        points: ['Largeur de mâchoire', 'Ouverture', 'Matériau', 'Construction'],
      },
      {
        title: 'Finition & marque',
        body: 'Apposez votre identité sur chaque étau.',
        points: ['Logo', 'Couleurs', 'Texture', 'Marquage'],
      },
      {
        title: 'Accessoires',
        body: 'Complétez le produit avec des pièces assorties.',
        points: ['Insertions de mâchoire', 'Mâchoires de tube', 'Base', 'Emballage'],
      },
      {
        title: 'Exigences de production',
        body: 'Adaptez la manière dont votre projet est produit.',
        points: ['Quantité', 'Spécification', 'Application'],
      },
    ],
  },
}

/* ─────────────────────────── custom vise studio ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Configurator',
    title: 'Specification Builder',
    sub: 'Scroll the build — from the jaw width to the carton it ships in, every layer is specified by you.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Jaw Width and Opening',
        body: 'Choose a proven platform or specify a custom opening — jaw width, capacity, body type and base style.',
      },
      {
        title: 'Construction',
        body: 'Ductile iron or forged steel body. Slide type, screw pitch and reinforcement zones specified per use case.',
      },
      {
        title: 'Finish & Branding',
        body: 'Powder coat, paint or brushed finish in your colors, with laser or cast logo marking from your brand files.',
      },
      {
        title: 'Jaw Inserts',
        body: 'Hardened serrated jaws, smooth jaw caps or pipe jaws in your spec, with custom shapes and textures.',
      },
      {
        title: 'Accessories and Packaging',
        body: 'Swivel bases, bench mounting kits and spare parts — customized and bundled. Printed cartons to your spec.',
      },
    ],
  },
  es: {
    kicker: 'Configurador',
    title: 'Constructor de especificaciones',
    sub: 'Desliza por todo el proceso — de la anchura de mordaza a la caja en la que se envía, cada capa es especificada por ti.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Anchura de mordaza y apertura',
        body: 'Elige una plataforma probada o especifica una apertura propia: ancho de mordaza, capacidad, tipo de cuerpo y estilo de base.',
      },
      {
        title: 'Construcción',
        body: 'Cuerpo de hierro dúctil o acero forjado. Tipo de corredera, paso de husillo y zonas de refuerzo según el uso.',
      },
      {
        title: 'Acabado y marca',
        body: 'Pintura en polvo, esmalte o acabado cepillado en tus colores, con marcado de logo por láser o fundido desde tus archivos de marca.',
      },
      {
        title: 'Insertos de mordaza',
        body: 'Mordazas templadas dentadas, cubiertas de mordaza lisas o mordazas tubulares en tu especificación, con formas y texturas personalizadas.',
      },
      {
        title: 'Accesorios y embalaje',
        body: 'Bases giratorias, kits de montaje de banco y repuestos — personalizados y empaquetados. Cajas impresas según tu especificación.',
      },
    ],
  },
  fr: {
    kicker: 'Configurateur',
    title: 'Constructeur de spécifications',
    sub: 'Faites défiler la construction — de la largeur de mâchoire au carton dans lequel il est expédié, chaque couche est spécifiée par vous.',
    scrollHint: 'Faites défiler pour explorer',
    steps: [
      {
        title: 'Largeur de mâchoire et ouverture',
        body: 'Choisissez une plateforme éprouvée ou spécifiez une ouverture personnalisée : largeur de mâchoire, capacité, type de corps et style de base.',
      },
      {
        title: 'Construction',
        body: 'Corps en fonte ductile ou en acier forgé. Type de glissière, pas de vis et zones de renfort spécifiés selon l’usage.',
      },
      {
        title: 'Finition & marque',
        body: 'Revêtement poudre, peinture ou finition brossée en vos couleurs, avec marquage du logo au laser ou coulé à partir de vos fichiers de marque.',
      },
      {
        title: 'Insertions de mâchoire',
        body: 'Mâchoires trempées striées, capuchons de mâchoire lisses ou mâchoires de tube selon votre spécification, avec formes et textures personnalisées.',
      },
      {
        title: 'Accessoires et emballage',
        body: 'Bases pivotantes, kits de montage sur établi et pièces de rechange — personnalisés et regroupés. Cartons imprimés selon votre spécification.',
      },
    ],
  },
}

/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  series: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export interface ProductFilterGroup {
  key: string
  label: string
}

export const productFilters: Localized<{ all: string; groups: ProductFilterGroup[] }> = {
  en: {
    all: 'All Series',
    groups: [
      { key: 'light-duty', label: 'Light-Duty' },
      { key: 'medium-duty', label: 'Medium-Duty' },
      { key: 'heavy-duty', label: 'Heavy-Duty' },
      { key: 'pipe', label: 'Pipe' },
      { key: 'specialty', label: 'Specialty' },
    ],
  },
  es: {
    all: 'Todas las series',
    groups: [
      { key: 'light-duty', label: 'Uso ligero' },
      { key: 'medium-duty', label: 'Uso medio' },
      { key: 'heavy-duty', label: 'Uso intensivo' },
      { key: 'pipe', label: 'Tubería' },
      { key: 'specialty', label: 'Especial' },
    ],
  },
  fr: {
    all: 'Toutes les séries',
    groups: [
      { key: 'light-duty', label: 'Usage léger' },
      { key: 'medium-duty', label: 'Usage moyen' },
      { key: 'heavy-duty', label: 'Usage intensif' },
      { key: 'pipe', label: 'Tuyauterie' },
      { key: 'specialty', label: 'Spécial' },
    ],
  },
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Series',
    title: 'Bench Vise Series Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the jaw width, finish and specs to your product.',
    items: [
      {
        slug: 'vise-light-4',
        series: 'light-duty',
        sku: 'VISE-LD4',
        name: 'Light Fixed Anvil Plate Vise',
        tagline: 'The home workshop classic',
        desc: 'A compact cast-iron bench vise on a fixed anvil plate — the classic first vise for home workshops, hobby repairs and light maintenance. Smooth one-hand clamping for everyday DIY.',
        uses: ['Home Workshop', 'Hobby', 'Light Maintenance'],
        for: ['Tool startups', 'Retail lines'],
        specs: '4" jaw width · cast iron · fixed anvil plate',
        artwork: 'Cast-iron body · hardened serrated jaws · anvil plate · complete package',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        hue: 195,
      },
      {
        slug: 'vise-light-5',
        series: 'light-duty',
        sku: 'VISE-LD5',
        name: 'Light Movable Anvil Plate Vise',
        tagline: 'Anvil plate with a twist',
        desc: 'A cast-iron bench vise with a movable anvil plate that swings work into the best angle for filing, fitting and finishing. Compact, accurate and ideal for garage benches and craft tables.',
        uses: ['Garage', 'DIY', 'Craft'],
        for: ['Hardware chains', 'Retail lines'],
        specs: '5" jaw width · cast iron · movable anvil plate',
        artwork: 'Hardened jaws · movable anvil plate · anti-distortion geometry',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-light-2',
        series: 'light-duty',
        sku: 'VISE-LT2',
        name: 'Lightweight Fixed Anvil Vise',
        tagline: 'Ultra-light, bench-proven',
        desc: 'A lightweight cast-iron bench vise with a fixed anvil for hobbyists, students and home workstations — easy to install, precise enough for everyday bench work.',
        uses: ['Hobby', 'Students', 'Home Benchwork'],
        for: ['Tool startups', 'Education'],
        specs: '2–3" jaw width · light cast iron · fixed anvil',
        artwork: 'Lightweight body · fixed anvil · serrated jaws',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-03.jpg',
        hue: 210,
      },
      {
        slug: 'vise-light-3',
        series: 'light-duty',
        sku: 'VISE-LT3',
        name: 'Lightweight Movable Anvil Vise',
        tagline: 'Lightweight with a rotating anvil',
        desc: 'A light bench vise with a movable anvil plate for holding fittings, angle stock and small parts at natural working angles — a best-selling entry model for value lines.',
        uses: ['Benchwork', 'Fittings', 'Craft'],
        for: ['Retail lines', 'Value brands'],
        specs: '2–3" jaw width · movable anvil plate · light cast iron',
        artwork: 'Movable anvil plate · hardened jaws · compact base',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-04.jpg',
        hue: 330,
      },
      {
        slug: 'vise-medium-6',
        series: 'medium-duty',
        sku: 'VISE-MD6',
        name: 'Household Vises',
        tagline: 'The universal all-rounder',
        desc: 'A ductile-iron bench vise for home, trade and light industrial use — front and back swivel and lock, replaceable hardened jaws and an anvil for flattening. Our best-selling profile.',
        uses: ['Home', 'Trade', 'Light Industrial'],
        for: ['Professional brands', 'Retail lines'],
        specs: '6" jaw width · ductile iron · swivel and lock · anvil',
        artwork: 'Ductile-iron body · replaceable hardened jaws · swivel and lock · anvil',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-medium-8',
        series: 'medium-duty',
        sku: 'VISE-MD8',
        name: 'French-Style Movable Anvil Vise',
        tagline: 'European profile, precise control',
        desc: 'A French-pattern bench vise with a movable anvil plate — a wide ductile-iron body and smooth thread for metalworking, woodworking and assembly in professional workshops.',
        uses: ['Metalworking', 'Woodworking', 'Assembly'],
        for: ['Professional brands', 'Workshops'],
        specs: '4–8" jaw width · ductile iron · movable anvil plate',
        artwork: 'Movable anvil plate · hardened jaws · reinforced guides',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-02.jpg',
        hue: 170,
      },
      {
        slug: 'vise-medium-5',
        series: 'medium-duty',
        sku: 'VISE-MD5',
        name: 'Fixed Table Vise',
        tagline: 'Bolt straight to the bench',
        desc: 'A compact ductile-iron table vise with a fixed base and no-fuss clamping — ideal for finishing shops, schools and workstations that need a solid grip in a small footprint.',
        uses: ['Finishing', 'Schools', 'Workstations'],
        for: ['Hardware chains', 'Educational suppliers'],
        specs: '4–5" jaw width · ductile iron · fixed base',
        artwork: 'Fixed base · hardened jaws · compact package',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-03.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-6',
        series: 'heavy-duty',
        sku: 'VISE-HD6',
        name: 'Heavy Duty Fixed Anvil Plate Vise',
        tagline: 'Forged for demanding work',
        desc: 'A heavy-duty forged-steel bench vise on a fixed anvil plate for fabrication, metalworking and industrial maintenance — serious clamping force with a solid anvil surface for striking work.',
        uses: ['Metalworking', 'Fabrication', 'Industrial'],
        for: ['Industrial brands', 'Heavy users'],
        specs: '6" jaw width · forged steel · fixed anvil plate',
        artwork: 'Forged-steel body · hardened jaws · fixed anvil plate',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        hue: 260,
      },
      {
        slug: 'vise-heavy-8',
        series: 'heavy-duty',
        sku: 'VISE-HD8',
        name: 'Heavy Duty Movable Anvil Vise',
        tagline: 'Industrial-grade grip',
        desc: 'An 8" heavy-duty bench vise with a movable anvil plate and a reinforced cast-iron body for pipe fitting, welding tables and heavy fabrication benches.',
        uses: ['Pipe Fitting', 'Welding', 'Heavy Fabrication'],
        for: ['Industrial suppliers', 'Contractors'],
        specs: '8" jaw width · reinforced cast iron · movable anvil plate',
        artwork: 'Reinforced body · hardened jaws · movable anvil plate',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-02.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-5',
        series: 'heavy-duty',
        sku: 'VISE-HD5',
        name: 'Heavy Duty Fixed Anvil Vise',
        tagline: 'Fixed anvil, forged core',
        desc: 'A heavy-duty bench vise with a fixed anvil cast into the body — a steady, hammer-rated surface with full clamping force for trade and workshop use.',
        uses: ['Workshop', 'Welding', 'Fabrication'],
        for: ['Industrial brands', 'Contractors'],
        specs: 'Heavy-duty cast body · fixed anvil · hardened jaws',
        artwork: 'Fixed anvil · hardened jaws · hardened screw assembly',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-03.jpg',
        hue: 170,
      },
      {
        slug: 'vise-pipe-4',
        series: 'pipe',
        sku: 'VISE-PP4',
        name: 'Pipe Vise 4"',
        tagline: 'Dedicated when precision counts',
        desc: 'A pipe vise with self-centering V-jaws for round and irregular stock — built for plumbers, fitters and shops that work with pipe and tubing on a daily basis.',
        uses: ['Plumbing', 'Pipe Fitting', 'Tubing'],
        for: ['Plumbing brands', 'Trade suppliers'],
        specs: '4" jaw width · self-centering V-jaws · ductile iron',
        artwork: 'Self-centering V-jaws · pipe anvil · hardened screw',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-pipe-6',
        series: 'pipe',
        sku: 'VISE-PP6',
        name: 'Pipe Vise 6"',
        tagline: 'Heavy pipe and square stock',
        desc: 'A heavy pipe vise for larger diameters and high-torque applications, with replaceable V-jaws and a reinforced base for repetitive trade use.',
        uses: ['Heavy Pipe', 'Welding', 'Fitting'],
        for: ['Trade suppliers', 'Contractors'],
        specs: '6" jaw width · replaceable V-jaws · ductile iron · anvil',
        artwork: 'Replaceable V-jaws · reinforced base · hardened screw assembly',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-swivel',
        series: 'specialty',
        sku: 'VISE-SP01',
        name: 'ADI Industrial Swivel Vise',
        tagline: 'Full 360° positioning',
        desc: 'An industrial swivel bench vise in ADI cast steel — a full 360° swivel base for angled clamping, assembly benches and operators who reposition work frequently. Built for production duty.',
        uses: ['Assembly', 'Positioning', 'Production'],
        for: ['Industrial brands', 'Assembly lines'],
        specs: '360° swivel base · ADI cast steel · hardened jaws',
        artwork: '360° swivel base · hardened jaws · reinforced throat',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        hue: 170,
      },
      {
        slug: 'vise-specialty-round',
        series: 'specialty',
        sku: 'VISE-SP02',
        name: 'Movable Round Anvil Table Vise',
        tagline: 'Round swivel base, round anvil',
        desc: 'A table vise on a round swivel base with a movable round anvil — compact, precise and easy to rotate for positioning work in finishing shops, schools and small workstations.',
        uses: ['Finishing', 'Schools', 'Positioning'],
        for: ['Educational suppliers', 'Workshops'],
        specs: 'Round swivel base · movable round anvil · compact',
        artwork: 'Round swivel base · movable anvil · hardened jaws',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-02.jpg',
        hue: 330,
      },
      {
        slug: 'vise-specialty-pliers',
        series: 'specialty',
        sku: 'VISE-SP03',
        name: 'French Fixed Anvil Pliers',
        tagline: 'The workshop classic pliers',
        desc: 'A French-pattern plier-style bench vise with a fixed anvil — simple, rugged and made for repetitive bench work where low cost meets day-in, day-out reliability.',
        uses: ['Benchwork', 'Craft', 'Light Trade'],
        for: ['Retail lines', 'Value brands'],
        specs: 'French pattern · fixed anvil · cast iron',
        artwork: 'Folded-steel spring · fixed anvil · serrated jaws',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-03.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-anvil',
        series: 'specialty',
        sku: 'VISE-SP04',
        name: 'Anvil',
        tagline: 'Hammer-rated work surface',
        desc: 'A companion anvil for bench work — a solid hammer-rated striking surface for flattening, peening and shaping metal right next to your vise.',
        uses: ['Flattening', 'Shaping', 'Benchwork'],
        for: ['Tool brands', 'Hardware lines'],
        specs: 'Cast anvil · hammer-rated striking face',
        artwork: 'Hammer-rated face · rounded horn',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-04.jpg',
        hue: 210,
      },
      {
        slug: 'vise-specialty-square',
        series: 'specialty',
        sku: 'VISE-SP05',
        name: 'Square Anvil Table Vise',
        tagline: 'Square anvil, swivel base',
        desc: 'A table vise with a square-anvil top and a 360° swivel base — a compact all-rounder for assembly, maintenance and positioning work at home or in the shop.',
        uses: ['Assembly', 'Maintenance', 'Positioning'],
        for: ['Retail lines', 'Workshops'],
        specs: 'Square-anvil top · 360° swivel · table mount',
        artwork: 'Square anvil · swivel base · hardened jaws',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-05.jpg',
        hue: 195,
      },
    ],
  },
  es: {
    kicker: 'Series de producto',
    title: 'Series de tornillos de banco disponibles para personalización',
    sub: 'Cada serie es una plataforma de fabricación — elige un punto de partida y adaptamos el ancho de mordaza, el acabado y las especificaciones a tu producto.',
    items: [
      {
        slug: 'vise-light-4',
        series: 'light-duty',
        sku: 'VISE-LD4',
        name: 'Tornillo de banco ligero con placa de yunque fija',
        tagline: 'El clásico del taller casero',
        desc: 'Un tornillo de banco compacto de hierro fundido sobre placa de yunque fija — el clásico primer tornillo para talleres caseros, reparaciones de hobby y mantenimiento ligero. Cierre suave con una mano para el bricolaje diario.',
        uses: ['Taller casero', 'Hobby', 'Mantenimiento ligero'],
        for: ['Marcas emergentes de herramientas', 'Líneas de retail'],
        specs: 'Ancho de mordaza 4" · hierro fundido · placa de yunque fija',
        artwork: 'Cuerpo de hierro fundido · mordazas dentadas templadas · placa de yunque · paquete completo',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        hue: 195,
      },
      {
        slug: 'vise-light-5',
        series: 'light-duty',
        sku: 'VISE-LD5',
        name: 'Tornillo de banco ligero con placa de yunque móvil',
        tagline: 'Placa de yunque con sus giros',
        desc: 'Un tornillo de banco de hierro fundido con placa de yunque móvil que orienta la pieza al mejor ángulo para limar, ajustar y rematar. Compacto, preciso e ideal para bancos de garaje y mesas de artesanía.',
        uses: ['Garaje', 'Bricolaje', 'Artesanía'],
        for: ['Cadenas de ferretería', 'Líneas de retail'],
        specs: 'Ancho de mordaza 5" · hierro fundido · placa de yunque móvil',
        artwork: 'Mordazas templadas · placa de yunque móvil · geometría antideformación',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-light-2',
        series: 'light-duty',
        sku: 'VISE-LT2',
        name: 'Tornillo de banco ultraligero con yunque fijo',
        tagline: 'Ultraligero y probado en banco',
        desc: 'Un tornillo de banco ligero de hierro fundido con yunque fijo para aficionados, estudiantes y puestos de trabajo caseros — fácil de instalar, preciso para el trabajo diario de banco.',
        uses: ['Hobby', 'Estudiantes', 'Trabajo de banco'],
        for: ['Marcas emergentes de herramientas', 'Educación'],
        specs: 'Ancho de mordaza 2–3" · hierro fundido ligero · yunque fijo',
        artwork: 'Cuerpo ligero · yunque fijo · mordazas dentadas',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-03.jpg',
        hue: 210,
      },
      {
        slug: 'vise-light-3',
        series: 'light-duty',
        sku: 'VISE-LT3',
        name: 'Tornillo de banco ultraligero con yunque móvil',
        tagline: 'Ligero, con yunque giratorio',
        desc: 'Un tornillo de banco ligero con placa de yunque móvil para sujetar accesorios, material angular y piezas pequeñas en ángulos naturales de trabajo — un modelo de entrada superventas para líneas de valor.',
        uses: ['Trabajo de banco', 'Accesorios', 'Artesanía'],
        for: ['Líneas de retail', 'Marcas de valor'],
        specs: 'Ancho de mordaza 2–3" · placa de yunque móvil · hierro fundido ligero',
        artwork: 'Placa de yunque móvil · mordazas templadas · base compacta',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-04.jpg',
        hue: 330,
      },
      {
        slug: 'vise-medium-6',
        series: 'medium-duty',
        sku: 'VISE-MD6',
        name: 'Tornillos domésticos',
        tagline: 'El comodín universal',
        desc: 'Un tornillo de banco de hierro dúctil para uso doméstico, comercial y ligero industrial — giro y bloqueo frontal y trasero, mordazas templadas reemplazables y yunque para aplanar. Nuestro perfil más vendido.',
        uses: ['Hogar', 'Comercio', 'Industrial ligero'],
        for: ['Marcas profesionales', 'Líneas de retail'],
        specs: 'Ancho de mordaza 6" · hierro dúctil · giro y bloqueo · yunque',
        artwork: 'Cuerpo de hierro dúctil · mordazas templadas reemplazables · giro y bloqueo · yunque',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-medium-8',
        series: 'medium-duty',
        sku: 'VISE-MD8',
        name: 'Tornillo con yunque móvil estilo francés',
        tagline: 'Perfil europeo, control preciso',
        desc: 'Un tornillo de banco de patrón francés con placa de yunque móvil — cuerpo ancho de hierro dúctil y rosca suave para metalurgia, carpintería y montaje en talleres profesionales.',
        uses: ['Metalurgia', 'Carpintería', 'Montaje'],
        for: ['Marcas profesionales', 'Talleres'],
        specs: 'Ancho de mordaza 4–8" · hierro dúctil · placa de yunque móvil',
        artwork: 'Placa de yunque móvil · mordazas templadas · guías reforzadas',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-02.jpg',
        hue: 170,
      },
      {
        slug: 'vise-medium-5',
        series: 'medium-duty',
        sku: 'VISE-MD5',
        name: 'Tornillo de mesa fijo',
        tagline: 'Atornillado directo al banco',
        desc: 'Un tornillo de mesa compacto de hierro dúctil con base fija y sujeción sencilla — ideal para talleres de acabado, escuelas y puestos de trabajo que necesitan un agarre sólido en poco espacio.',
        uses: ['Acabado', 'Escuelas', 'Puestos de trabajo'],
        for: ['Cadenas de ferretería', 'Proveedores educativos'],
        specs: 'Ancho de mordaza 4–5" · hierro dúctil · base fija',
        artwork: 'Base fija · mordazas templadas · paquete compacto',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-03.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-6',
        series: 'heavy-duty',
        sku: 'VISE-HD6',
        name: 'Tornillo resistente con placa de yunque fija',
        tagline: 'Forjado para trabajo exigente',
        desc: 'Un tornillo de banco de acero forjado para uso intensivo sobre placa de yunque fija — fuerza de cierre seria con superficie de yunque sólida para trabajo de impacto en fabricación, metalurgia y mantenimiento industrial.',
        uses: ['Metalurgia', 'Fabricación', 'Industrial'],
        for: ['Marcas industriales', 'Usuarios exigentes'],
        specs: 'Ancho de mordaza 6" · acero forjado · placa de yunque fija',
        artwork: 'Cuerpo de acero forjado · mordazas templadas · placa de yunque fija',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        hue: 260,
      },
      {
        slug: 'vise-heavy-8',
        series: 'heavy-duty',
        sku: 'VISE-HD8',
        name: 'Tornillo resistente con yunque móvil',
        tagline: 'Sujeción de grado industrial',
        desc: 'Un tornillo de banco pesado de 8 pulgadas con placa de yunque móvil y cuerpo de hierro fundido reforzado para instalación de tuberías, mesas de soldadura y bancos de fabricación pesada.',
        uses: ['Instalación de tuberías', 'Soldadura', 'Fabricación pesada'],
        for: ['Proveedores industriales', 'Contratistas'],
        specs: 'Ancho de mordaza 8" · hierro fundido reforzado · placa de yunque móvil',
        artwork: 'Cuerpo reforzado · mordazas templadas · placa de yunque móvil',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-02.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-5',
        series: 'heavy-duty',
        sku: 'VISE-HD5',
        name: 'Tornillo resistente con yunque fijo',
        tagline: 'Yunque fijo, núcleo forjado',
        desc: 'Un tornillo de banco pesado con yunque fijo fundido en el cuerpo — superficie estable preparada para martilleo con toda la fuerza de cierre para uso comercial y de taller.',
        uses: ['Taller', 'Soldadura', 'Fabricación'],
        for: ['Marcas industriales', 'Contratistas'],
        specs: 'Cuerpo fundido resistente · yunque fijo · mordazas templadas',
        artwork: 'Yunque fijo · mordazas templadas · conjunto de husillo templado',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-03.jpg',
        hue: 170,
      },
      {
        slug: 'vise-pipe-4',
        series: 'pipe',
        sku: 'VISE-PP4',
        name: 'Tornillo de tubería 4"',
        tagline: 'Dedicado cuando la precisión importa',
        desc: 'Un tornillo de tubería con mordazas en V autocentrantes para stock redondo e irregular — diseñado para fontaneros, instaladores y talleres que trabajan con tuberías a diario.',
        uses: ['Fontanería', 'Instalación de tuberías', 'Tubos'],
        for: ['Marcas de fontanería', 'Proveedores del sector'],
        specs: 'Ancho de mordaza 4" · mordazas en V autocentrantes · hierro dúctil',
        artwork: 'Mordazas en V autocentrantes · yunque de tubería · husillo templado',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-pipe-6',
        series: 'pipe',
        sku: 'VISE-PP6',
        name: 'Tornillo de tubería 6"',
        tagline: 'Tubería pesada y stock cuadrado',
        desc: 'Un tornillo de tubería pesado para diámetros mayores y usos de alto par, con mordazas en V reemplazables y base reforzada para uso comercial repetitivo.',
        uses: ['Tubería pesada', 'Soldadura', 'Ajuste'],
        for: ['Proveedores del sector', 'Contratistas'],
        specs: 'Ancho de mordaza 6" · mordazas en V reemplazables · hierro dúctil · yunque',
        artwork: 'Mordazas en V reemplazables · base reforzada · conjunto de husillo templado',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-swivel',
        series: 'specialty',
        sku: 'VISE-SP01',
        name: 'Tornillo industrial giratorio ADI',
        tagline: 'Posicionamiento completo de 360°',
        desc: 'Un tornillo de banco industrial giratorio en acero fundido ADI — base giratoria completa de 360° para sujeción en ángulo, bancos de montaje y operadores que reposicionan la pieza con frecuencia. Construido para producción.',
        uses: ['Montaje', 'Posicionamiento', 'Producción'],
        for: ['Marcas industriales', 'Líneas de montaje'],
        specs: 'Base giratoria de 360° · acero fundido ADI · mordazas templadas',
        artwork: 'Base giratoria de 360° · mordazas templadas · garganta reforzada',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        hue: 170,
      },
      {
        slug: 'vise-specialty-round',
        series: 'specialty',
        sku: 'VISE-SP02',
        name: 'Tornillo de mesa con yunque redondo móvil',
        tagline: 'Base giratoria redonda, yunque redondo',
        desc: 'Un tornillo de mesa sobre base giratoria redonda con yunque redondo móvil — compacto, preciso y fácil de girar para trabajos de posicionamiento en talleres de acabado, escuelas y pequeños puestos de trabajo.',
        uses: ['Acabado', 'Escuelas', 'Posicionamiento'],
        for: ['Proveedores educativos', 'Talleres'],
        specs: 'Base giratoria redonda · yunque redondo móvil · compacto',
        artwork: 'Base giratoria redonda · yunque móvil · mordazas templadas',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-02.jpg',
        hue: 330,
      },
      {
        slug: 'vise-specialty-pliers',
        series: 'specialty',
        sku: 'VISE-SP03',
        name: 'Alicates con yunque fijo estilo francés',
        tagline: 'Los alicates clásicos del taller',
        desc: 'Un tornillo tipo alicates de patrón francés con yunque fijo — simple, robusto y pensado para el trabajo repetitivo de banco donde el bajo coste se une a la fiabilidad día tras día.',
        uses: ['Trabajo de banco', 'Artesanía', 'Comercio ligero'],
        for: ['Líneas de retail', 'Marcas de valor'],
        specs: 'Patrón francés · yunque fijo · hierro fundido',
        artwork: 'Muelle de acero plegado · yunque fijo · mordazas dentadas',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-03.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-anvil',
        series: 'specialty',
        sku: 'VISE-SP04',
        name: 'Yunque',
        tagline: 'Superficie de trabajo para martilleo',
        desc: 'Un yunque de acompañamiento para el trabajo de banco — una superficie de impacto sólida para aplanar, tallar y dar forma al metal justo al lado del tornillo.',
        uses: ['Aplanado', 'Dado de forma', 'Trabajo de banco'],
        for: ['Marcas de herramientas', 'Líneas de ferretería'],
        specs: 'Yunque de fundición · cara de impacto',
        artwork: 'Cara de impacto · cuerno redondeado',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-04.jpg',
        hue: 210,
      },
      {
        slug: 'vise-specialty-square',
        series: 'specialty',
        sku: 'VISE-SP05',
        name: 'Tornillo de mesa con yunque cuadrado',
        tagline: 'Yunque cuadrado, base giratoria',
        desc: 'Un tornillo de mesa con parte superior de yunque cuadrado y base giratoria de 360° — un todoterreno compacto para montaje, mantenimiento y posicionamiento en casa o en el taller.',
        uses: ['Montaje', 'Mantenimiento', 'Posicionamiento'],
        for: ['Líneas de retail', 'Talleres'],
        specs: 'Parte superior de yunque cuadrado · giro de 360° · montaje de mesa',
        artwork: 'Yunque cuadrado · base giratoria · mordazas templadas',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-05.jpg',
        hue: 195,
      },
    ],
  },
  fr: {
    kicker: 'Séries de produit',
    title: 'Séries d’étaux d’établi disponibles pour la personnalisation',
    sub: 'Chaque série est une plateforme de fabrication — choisissez un point de départ et nous adaptons la largeur de mâchoire, la finition et les spécifications à votre produit.',
    items: [
      {
        slug: 'vise-light-4',
        series: 'light-duty',
        sku: 'VISE-LD4',
        name: 'Étau léger à plaque d’enclume fixe',
        tagline: 'Le classique de l’atelier à domicile',
        desc: 'Un étau d’établi compact en fonte sur plaque d’enclume fixe — le premier étau des ateliers à domicile, des réparations hobby et de l’entretien léger. Un serrage fluide d’une seule main pour le bricolage quotidien.',
        uses: ['Atelier maison', 'Hobby', 'Entretien léger'],
        for: ['Startups d’outillage', 'Gammes retail'],
        specs: 'Largeur de mâchoire 4" · fonte · plaque d’enclume fixe',
        artwork: 'Corps en fonte · mâchoires striées trempées · plaque d’enclume · ensemble complet',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        hue: 195,
      },
      {
        slug: 'vise-light-5',
        series: 'light-duty',
        sku: 'VISE-LD5',
        name: 'Étau léger à plaque d’enclume mobile',
        tagline: 'Une plaque d’enclume qui pivote',
        desc: 'Un étau d’établi en fonte avec plaque d’enclume mobile qui oriente la pièce au meilleur angle pour limer, ajuster et finir. Compact, précis, idéal pour les établis de garage et les tables d’artisanat.',
        uses: ['Garage', 'Bricolage', 'Artisanat'],
        for: ['Chaînes de quincaillerie', 'Gammes retail'],
        specs: 'Largeur de mâchoire 5" · fonte · plaque d’enclume mobile',
        artwork: 'Mâchoires trempées · plaque d’enclume mobile · géométrie antiforme',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-light-2',
        series: 'light-duty',
        sku: 'VISE-LT2',
        name: 'Étau extra-léger à enclume fixe',
        tagline: 'Ultra-léger, éprouvé sur établi',
        desc: 'Un étau d’établi léger en fonte avec enclume fixe, pour les amateurs, les étudiants et les postes de travail à domicile — facile à installer, assez précis pour le travail d’établi quotidien.',
        uses: ['Hobby', 'Étudiants', 'Travail d’établi'],
        for: ['Startups d’outillage', 'Éducation'],
        specs: 'Largeur de mâchoire 2–3" · fonte légère · enclume fixe',
        artwork: 'Corps léger · enclume fixe · mâchoires striées',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-03.jpg',
        hue: 210,
      },
      {
        slug: 'vise-light-3',
        series: 'light-duty',
        sku: 'VISE-LT3',
        name: 'Étau extra-léger à enclume mobile',
        tagline: 'Léger, enclume rotative',
        desc: 'Un étau d’établi léger avec plaque d’enclume mobile pour tenir raccords, profilés et petites pièces aux angles de travail naturels — un modèle d’entrée très vendu pour les gammes d’entrée de gamme.',
        uses: ['Travail d’établi', 'Raccords', 'Artisanat'],
        for: ['Gammes retail', 'Marques d’entrée de gamme'],
        specs: 'Largeur de mâchoire 2–3" · plaque d’enclume mobile · fonte légère',
        artwork: 'Plaque d’enclume mobile · mâchoires trempées · base compacte',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-04.jpg',
        hue: 330,
      },
      {
        slug: 'vise-medium-6',
        series: 'medium-duty',
        sku: 'VISE-MD6',
        name: 'Étaux domestiques',
        tagline: 'Le polyvalent universel',
        desc: 'Un étau d’établi en fonte ductile pour l’usage domestique, professionnel et industriel léger — pivotement et verrou avant et arrière, mâchoires trempées remplaçables et enclume pour aplatir. Notre profil le plus vendu.',
        uses: ['Maison', 'Métier', 'Industriel léger'],
        for: ['Marques professionnelles', 'Gammes retail'],
        specs: 'Largeur de mâchoire 6" · fonte ductile · pivotement et verrou · enclume',
        artwork: 'Corps en fonte ductile · mâchoires trempées remplaçables · pivotement et verrou · enclume',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-medium-8',
        series: 'medium-duty',
        sku: 'VISE-MD8',
        name: 'Étau à enclume mobile style français',
        tagline: 'Profil européen, contrôle précis',
        desc: 'Un étau d’établi à patte française avec plaque d’enclume mobile — corps large en fonte ductile et filetage fluide pour le travail des métaux, le bois et l’assemblage dans les ateliers professionnels.',
        uses: ['Travail des métaux', 'Menuiserie', 'Assemblage'],
        for: ['Marques professionnelles', 'Ateliers'],
        specs: 'Largeur de mâchoire 4–8" · fonte ductile · plaque d’enclume mobile',
        artwork: 'Plaque d’enclume mobile · mâchoires trempées · guides renforcés',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-02.jpg',
        hue: 170,
      },
      {
        slug: 'vise-medium-5',
        series: 'medium-duty',
        sku: 'VISE-MD5',
        name: 'Étau de table fixe',
        tagline: 'Fixez-le directement sur l’établi',
        desc: 'Un étau de table compact en fonte ductile avec base fixe et serrage simple — idéal pour les ateliers de finition, les écoles et les postes de travail qui ont besoin d’une prise solide en peu d’espace.',
        uses: ['Finition', 'Écoles', 'Postes de travail'],
        for: ['Chaînes de quincaillerie', 'Fournisseurs éducatifs'],
        specs: 'Largeur de mâchoire 4–5" · fonte ductile · base fixe',
        artwork: 'Base fixe · mâchoires trempées · ensemble compact',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-03.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-6',
        series: 'heavy-duty',
        sku: 'VISE-HD6',
        name: 'Étau lourd à plaque d’enclume fixe',
        tagline: 'Forgé pour les travaux exigeants',
        desc: 'Un étau d’établi en acier forgé à usage intensif sur plaque d’enclume fixe — une force de serrage sérieuse avec une surface d’enclume solide pour le travail de frappe en fabrication, métallurgie et maintenance industrielle.',
        uses: ['Travail des métaux', 'Fabrication', 'Industriel'],
        for: ['Marques industrielles', 'Utilisateurs exigeants'],
        specs: 'Largeur de mâchoire 6" · acier forgé · plaque d’enclume fixe',
        artwork: 'Corps en acier forgé · mâchoires trempées · plaque d’enclume fixe',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        hue: 260,
      },
      {
        slug: 'vise-heavy-8',
        series: 'heavy-duty',
        sku: 'VISE-HD8',
        name: 'Étau lourd à enclume mobile',
        tagline: 'Pince de niveau industriel',
        desc: 'Un étau d’établi lourd de 8 pouces avec plaque d’enclume mobile et corps en fonte renforcée pour le raccordement de tuyauterie, les tables de soudage et les établis de fabrication lourde.',
        uses: ['Raccordement de tuyauterie', 'Soudage', 'Fabrication lourde'],
        for: ['Fournisseurs industriels', 'Entrepreneurs'],
        specs: 'Largeur de mâchoire 8" · fonte renforcée · plaque d’enclume mobile',
        artwork: 'Corps renforcé · mâchoires trempées · plaque d’enclume mobile',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-02.jpg',
        hue: 195,
      },
      {
        slug: 'vise-heavy-5',
        series: 'heavy-duty',
        sku: 'VISE-HD5',
        name: 'Étau lourd à enclume fixe',
        tagline: 'Enclume fixe, noyau forgé',
        desc: 'Un étau d’établi lourd avec enclume fixe fondue dans le corps — une surface stable prête pour le marteau avec toute la force de serrage pour l’usage professionnel et d’atelier.',
        uses: ['Atelier', 'Soudage', 'Fabrication'],
        for: ['Marques industrielles', 'Entrepreneurs'],
        specs: 'Corps moulé lourd · enclume fixe · mâchoires trempées',
        artwork: 'Enclume fixe · mâchoires trempées · ensemble vis trempée',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-03.jpg',
        hue: 170,
      },
      {
        slug: 'vise-pipe-4',
        series: 'pipe',
        sku: 'VISE-PP4',
        name: 'Étau de tuyauterie 4"',
        tagline: 'Dédié quand la précision compte',
        desc: 'Un étau de tuyauterie avec mâchoires en V auto-centrantes pour les pièces rondes et irrégulières — conçu pour les plombiers, les monteurs et les ateliers qui travaillent la tuyauterie au quotidien.',
        uses: ['Plomberie', 'Raccordement de tuyauterie', 'Tubes'],
        for: ['Marques de plomberie', 'Fournisseurs du métier'],
        specs: 'Largeur de mâchoire 4" · mâchoires en V auto-centrantes · fonte ductile',
        artwork: 'Mâchoires en V auto-centrantes · enclume de tube · vis trempée',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        hue: 210,
      },
      {
        slug: 'vise-pipe-6',
        series: 'pipe',
        sku: 'VISE-PP6',
        name: 'Étau de tuyauterie 6"',
        tagline: 'Tuyauterie lourde et profilé carré',
        desc: 'Un étau de tuyauterie lourd pour les grands diamètres et les applications à couple élevé, avec mâchoires en V remplaçables et base renforcée pour l’usage commercial répétitif.',
        uses: ['Tuyauterie lourde', 'Soudage', 'Ajustage'],
        for: ['Fournisseurs du métier', 'Entrepreneurs'],
        specs: 'Largeur de mâchoire 6" · mâchoires en V remplaçables · fonte ductile · enclume',
        artwork: 'Mâchoires en V remplaçables · base renforcée · ensemble vis trempé',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-02.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-swivel',
        series: 'specialty',
        sku: 'VISE-SP01',
        name: 'Étau industriel pivotant ADI',
        tagline: 'Positionnement complet à 360°',
        desc: 'Un étau d’établi industriel pivotant en acier moulé ADI — une base pivotante complète à 360° pour le serrage en angle, les établis d’assemblage et les opérateurs qui repositionnent fréquemment la pièce. Conçu pour la production.',
        uses: ['Assemblage', 'Positionnement', 'Production'],
        for: ['Marques industrielles', 'Lignes d’assemblage'],
        specs: 'Base pivotante 360° · acier moulé ADI · mâchoires trempées',
        artwork: 'Base pivotante 360° · mâchoires trempées · gorge renforcée',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        hue: 170,
      },
      {
        slug: 'vise-specialty-round',
        series: 'specialty',
        sku: 'VISE-SP02',
        name: 'Étau de table à enclume ronde mobile',
        tagline: 'Base pivotante ronde, enclume ronde',
        desc: 'Un étau de table sur base pivotante ronde avec enclume ronde mobile — compact, précis et facile à faire pivoter pour les travaux de positionnement dans les ateliers de finition, les écoles et les petits postes de travail.',
        uses: ['Finition', 'Écoles', 'Positionnement'],
        for: ['Fournisseurs éducatifs', 'Ateliers'],
        specs: 'Base pivotante ronde · enclume ronde mobile · compact',
        artwork: 'Base pivotante ronde · enclume mobile · mâchoires trempées',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-02.jpg',
        hue: 330,
      },
      {
        slug: 'vise-specialty-pliers',
        series: 'specialty',
        sku: 'VISE-SP03',
        name: 'Pince à enclume fixe style français',
        tagline: 'La pince classique d’atelier',
        desc: 'Un étau-pince à patte française avec enclume fixe — simple, robuste et conçu pour le travail d’établi répétitif où le coût réduit rencontre la fiabilité jour après jour.',
        uses: ['Travail d’établi', 'Artisanat', 'Métier léger'],
        for: ['Gammes retail', 'Marques d’entrée de gamme'],
        specs: 'Patte française · enclume fixe · fonte',
        artwork: 'Ressort en acier plié · enclume fixe · mâchoires striées',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-03.jpg',
        hue: 28,
      },
      {
        slug: 'vise-specialty-anvil',
        series: 'specialty',
        sku: 'VISE-SP04',
        name: 'Enclume',
        tagline: 'Surface de travail pour le marteau',
        desc: 'Une enclume d’accompagnement pour le travail d’établi — une surface de frappe solide pour aplatir, marteler et donner forme au métal juste à côté de votre étau.',
        uses: ['Aplatissage', 'Mise en forme', 'Travail d’établi'],
        for: ['Marques d’outillage', 'Gammes de quincaillerie'],
        specs: 'Enclume moulée · face de frappe',
        artwork: 'Face de frappe · corne arrondie',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-04.jpg',
        hue: 210,
      },
      {
        slug: 'vise-specialty-square',
        series: 'specialty',
        sku: 'VISE-SP05',
        name: 'Étau de table à enclume carrée',
        tagline: 'Enclume carrée, base pivotante',
        desc: 'Un étau de table avec dessus d’enclume carrée et base pivotante à 360° — un polyvalent compact pour l’assemblage, la maintenance et le positionnement à la maison ou dans l’atelier.',
        uses: ['Assemblage', 'Maintenance', 'Positionnement'],
        for: ['Gammes retail', 'Ateliers'],
        specs: 'Dessus d’enclume carrée · pivotement 360° · fixation de table',
        artwork: 'Enclume carrée · base pivotante · mâchoires trempées',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-05.jpg',
        hue: 195,
      },
    ],
  },
}

/* ─────────────────────────── video showcases ─────────────────────────── */

export interface VideoStep {
  t: string
  d?: string
}

export interface VideoShowcaseContent {
  badge: string
  title: string
  sub: string
  points: VideoStep[]
}

export const videoShowcase: Localized<{
  launch: VideoShowcaseContent
  process: VideoShowcaseContent
}> = {
  en: {
    launch: {
      badge: 'Brand Launch',
      title: 'Dreaming of launching your own bench vise brand?',
      sub: 'You don\'t need your own factory to launch a bench vise brand. We are the manufacturing partner behind your line: specification, engineering, sampling, QC, packaging and export-ready production — all under one contract with one accountable team.',
      points: [
        { t: 'Full OEM/ODM Concept-to-Production', d: 'Custom jaw widths, finishes, logo marking and custom packaging.' },
        { t: 'Low MOQ Flexible Launch', d: 'Small-batch support so you can test the market without tying up massive capital.' },
        { t: 'Complete Accessory Bundles', d: 'Swivel bases, mounting kits and spare parts ready to go.' },
        { t: 'Enterprise-Grade Quality & Certification', d: 'Strict QA/QC protocols, hardness testing, and global export compliance.' },
      ],
    },
    process: {
      badge: 'Inside the Factory',
      title: 'How a bench vise is born',
      sub: 'Ever wondered how raw iron turns into a precision bench vise? Five steps inside our plant.',
      points: [
        { t: 'Casting & Precision Machining' },
        { t: 'Heat Treatment & Hardening' },
        { t: 'Surface Finish & Marking' },
        { t: 'Assembly & Swivel Base' },
        { t: 'Inspection, Oil & Pack' },
      ],
    },
  },
  es: {
    launch: {
      badge: 'Lanzamiento de marca',
      title: '¿Sueñas con lanzar tu propia marca de tornillos de banco?',
      sub: 'No necesitas tu propia fábrica para lanzar una marca de tornillos de banco. Somos el socio de fabricación detrás de tu línea: especificación, ingeniería, muestras, control de calidad, packaging y producción lista para exportar — todo bajo un solo contrato y un solo equipo responsable.',
      points: [
        { t: 'OEM/ODM completo del concepto a la producción', d: 'Anchos de mordaza personalizados, acabados, marcado de logo y embalaje a medida.' },
        { t: 'Lanzamiento flexible con MOQ bajo', d: 'Producción de pequeños lotes para testear el mercado sin inmovilizar capital.' },
        { t: 'Paquetes de accesorios completos', d: 'Bases giratorias, kits de montaje y repuestos listos para enviar.' },
        { t: 'Calidad y certificación de nivel empresarial', d: 'Protocolos estrictos de QA/QC, pruebas de dureza y cumplimiento de exportación global.' },
      ],
    },
    process: {
      badge: 'Dentro de la fábrica',
      title: 'Cómo nace un tornillo de banco',
      sub: '¿Alguna vez te preguntaste cómo el hierro en bruto se convierte en un tornillo de banco de precisión? Cinco pasos en nuestra planta.',
      points: [
        { t: 'Fundición y mecanizado de precisión' },
        { t: 'Tratamiento térmico y endurecimiento' },
        { t: 'Acabado de superficie y marcado' },
        { t: 'Ensamblado y base giratoria' },
        { t: 'Inspección, engrasado y embalaje' },
      ],
    },
  },
  fr: {
    launch: {
      badge: 'Lancement de marque',
      title: 'Vous rêvez de lancer votre propre marque d’étaux d’établi ?',
      sub: 'Pas besoin de posséder votre propre usine pour lancer une marque d’étaux d’établi. Nous sommes le partenaire de fabrication derrière votre gamme : spécification, ingénierie, échantillonnage, contrôle qualité, packaging et production prête pour l\'export — le tout sous un seul contrat et une seule équipe responsable.',
      points: [
        { t: 'OEM/ODM complet, du concept à la production', d: 'Largeurs de mâchoire personnalisées, finitions, marquage du logo et packaging sur mesure.' },
        { t: 'Lancement flexible avec MOQ réduit', d: 'Soutien aux petits lots afin de tester le marché sans immobiliser de capitaux importants.' },
        { t: 'Packs d\'accessoires complets', d: 'Bases pivotantes, kits de montage et pièces de rechange, prêts à expédier.' },
        { t: 'Qualité et certification de niveau entreprise', d: 'Protocoles stricts de QA/QC, tests de dureté et conformité à l\'export mondial.' },
      ],
    },
    process: {
      badge: 'Au cœur de l\'usine',
      title: 'Comment naît un étau d’établi',
      sub: 'Vous êtes-vous déjà demandé comment la fonte brute devient un étau d’établi de précision ? Cinq étapes au sein de notre usine.',
      points: [
        { t: 'Fonderie et usinage de précision' },
        { t: 'Traitement thermique et trempe' },
        { t: 'Finition de surface et marquage' },
        { t: 'Assemblage et base pivotante' },
        { t: 'Inspection, huilage et emballage' },
      ],
    },
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake through finished goods — every step inside our own plant.',
    steps: [
      {
        title: 'Requirement Intake',
        body: 'We collect your specification, target market, compliance requirements and volume forecast. NDA signed before any file exchange.',
      },
      {
        title: 'Engineering Review',
        body: 'Jaw width, opening, body material, screw design and finish are assessed for manufacturability. You receive a written report with cost drivers identified.',
      },
      {
        title: 'Sample Development',
        body: 'A prototype is machined and assembled to confirm geometry, clamping feel, finish and weight. Ships in 7–14 days.',
      },
      {
        title: 'Sample Approval',
        body: 'You sign off on the physical sample. Nothing enters production until the golden sample is approved and archived as the batch reference.',
      },
      {
        title: 'Batch Production',
        body: 'Manufactured in our own plant under the QC process above, with batch traceability to material lot level.',
      },
      {
        title: 'Export-Ready Delivery',
        body: 'Oiled, wrapped, boxed, documented and handed over ready for export.',
      },
    ],
    note: 'The approved sample is the contract. Every vise in the batch is measured against it.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Desde la recepción de requisitos hasta el producto terminado — cada paso dentro de nuestra propia planta.',
    steps: [
      {
        title: 'Recepción de requisitos',
        body: 'Recopilamos tu especificación, mercado objetivo, requisitos de cumplimiento y previsión de volumen. NDA firmado antes de cualquier intercambio de archivos.',
      },
      {
        title: 'Revisión de ingeniería',
        body: 'El ancho de mordaza, la apertura, el material del cuerpo, el diseño del husillo y el acabado se evalúan en cuanto a fabricabilidad. Recibes un informe escrito con los factores de coste identificados.',
      },
      {
        title: 'Desarrollo de muestras',
        body: 'Se mecaniza y ensambla un prototipo para confirmar geometría, sensación de cierre, acabado y peso. Se envía en 7–14 días.',
      },
      {
        title: 'Aprobación de la muestra',
        body: 'Validas la muestra física. Nada entra en producción hasta que la muestra dorada esté aprobada y archivada como referencia del lote.',
      },
      {
        title: 'Producción en serie',
        body: 'Fabricado en nuestra propia planta bajo el proceso de control de calidad descrito, con trazabilidad por lote hasta el nivel de material.',
      },
      {
        title: 'Entrega lista para exportación',
        body: 'Engrasado, envuelto, encajado, documentado y entregado listo para la exportación.',
      },
    ],
    note: 'La muestra aprobada es el punto de referencia. Cada tornillo del lote se mide contra ella.',
  },
  fr: {
    kicker: 'Processus de développement',
    title: 'De la spécification au produit fini',
    sub: 'De la collecte des exigences au produit fini — chaque étape au sein de notre propre usine.',
    steps: [
      {
        title: 'Collecte des exigences',
        body: 'Nous recueillons votre spécification, votre marché cible, vos exigences de conformité et vos prévisions de volume. NDA signé avant tout échange de fichiers.',
      },
      {
        title: 'Revue d\'ingénierie',
        body: 'La largeur de mâchoire, l\'ouverture, le matériau du corps, la conception de la vis et la finition sont évalués en termes de fabricabilité. Vous recevez un rapport écrit identifiant les facteurs de coût.',
      },
      {
        title: 'Développement d\'échantillon',
        body: 'Un prototype est usiné et assemblé pour confirmer la géométrie, la sensation de serrage, la finition et le poids. Expédié sous 7–14 jours.',
      },
      {
        title: 'Approbation de l\'échantillon',
        body: 'Vous validez l\'échantillon physique. Rien n\'entre en production tant que l\'échantillon de référence n\'est pas approuvé et archivé comme référence du lot.',
      },
      {
        title: 'Production en série',
        body: 'Fabriqué dans notre propre usine selon le processus de contrôle qualité décrit ci-dessus, avec traçabilité du lot jusqu\'au niveau du lot de matière.',
      },
      {
        title: 'Livraison prête pour l\'export',
        body: 'Huilé, enveloppé, cartonné, documenté et remis prêt pour l\'export.',
      },
    ],
    note: 'L\'échantillon approuvé fait office de contrat. Chaque étau du lot est mesuré par rapport à lui.',
  },
}

/* ─────────────────────────── home: vise categories ─────────────────────────── */

export interface BoardCategory {
  id: string
  label: string
  desc: string
  image: string
  href: string
}

export interface BoardCategoriesContent {
  kicker: string
  title: string
  sub: string
  viewLabel: string
  items: BoardCategory[]
}

export const boardCategories: Localized<BoardCategoriesContent> = {
  en: {
    kicker: 'Our Vises',
    title: 'Performance Meets Precision',
    sub: 'Every vise category is a manufacturing platform — choose your starting point and we customize the jaw width, finish and specs to your product.',
    viewLabel: 'View',
    items: [
      { id: 'light-duty', label: 'Light-Duty', desc: 'Compact cast-iron vises for home, hobby and light maintenance work.', image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg', href: '/products/vise-light-4' },
      { id: 'medium-duty', label: 'Medium-Duty', desc: 'Versatile ductile-iron vises for professional workshops and schools.', image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg', href: '/products/vise-medium-6' },
      { id: 'heavy-duty', label: 'Heavy-Duty', desc: 'Forged-steel vises engineered for fabrication, industrial and demanding work.', image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg', href: '/products/vise-heavy-6' },
      { id: 'pipe', label: 'Pipe', desc: 'Self-centering vises for pipe and tube work in plumbing and fitting.', image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg', href: '/products/vise-pipe-4' },
      { id: 'specialty', label: 'Specialty', desc: 'ADI swivel, round-anvil and plier-style vises for angled clamping, finishing and benchwork.', image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp', href: '/products/vise-specialty-swivel' },
    ],
  },
  es: {
    kicker: 'Nuestros Tornillos',
    title: 'Rendimiento y Precisión',
    sub: 'Cada categoría es una plataforma de fabricación — elige tu punto de partida y adaptamos el ancho de mordaza, el acabado y las especificaciones a tu producto.',
    viewLabel: 'Ver',
    items: [
      { id: 'light-duty', label: 'Uso ligero', desc: 'Tornillos de hierro fundido compactos para el hogar, el hobby y el mantenimiento ligero.', image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg', href: '/products/vise-light-4' },
      { id: 'medium-duty', label: 'Uso medio', desc: 'Tornillos de hierro dúctil versátiles para talleres profesionales y escuelas.', image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg', href: '/products/vise-medium-6' },
      { id: 'heavy-duty', label: 'Uso intensivo', desc: 'Tornillos de acero forjado diseñados para fabricación, uso industrial y trabajo exigente.', image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg', href: '/products/vise-heavy-6' },
      { id: 'pipe', label: 'Tubería', desc: 'Tornillos autocentrantes para tubos y tuberías en fontanería y ajuste.', image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg', href: '/products/vise-pipe-4' },
      { id: 'specialty', label: 'Especial', desc: 'Tornillos giratorios ADI, de yunque redondo y alicates para sujeción en ángulo, acabado y trabajo de banco.', image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp', href: '/products/vise-specialty-swivel' },
    ],
  },
  fr: {
    kicker: 'Nos Étaux',
    title: 'Performance et Précision',
    sub: 'Chaque catégorie d\'étaux est une plateforme de fabrication : choisissez votre point de départ et nous adaptons la largeur de mâchoire, la finition et les spécifications à votre produit.',
    viewLabel: 'Voir',
    items: [
      { id: 'light-duty', label: 'Usage léger', desc: 'Étaux en fonte compacts pour la maison, le hobby et l\'entretien léger.', image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg', href: '/products/vise-light-4' },
      { id: 'medium-duty', label: 'Usage moyen', desc: 'Étaux en fonte ductile polyvalents pour les ateliers professionnels et les écoles.', image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg', href: '/products/vise-medium-6' },
      { id: 'heavy-duty', label: 'Usage intensif', desc: 'Étaux en acier forgé conçus pour la fabrication, l\'industrie et les travaux exigeants.', image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg', href: '/products/vise-heavy-6' },
      { id: 'pipe', label: 'Tuyauterie', desc: 'Étaux auto-centrants pour tubes et tuyauterie en plomberie et ajustage.', image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg', href: '/products/vise-pipe-4' },
      { id: 'specialty', label: 'Spécial', desc: 'Étaux pivotants ADI, à enclume ronde et pinces pour le bridage en angle, la finition et le travail d’établi.', image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp', href: '/products/vise-specialty-swivel' },
    ],
  },
}

/* ─────────────────────────── home: product platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'Base Platforms',
    sub: 'Base platforms, not catalog products. Every jaw width, material and finish is specified per project.',
    items: [
      {
        title: 'Light-Duty',
        body: 'Compact cast-iron platforms for retail lines, home hardware and light maintenance programs.',
        uses: ['Retail lines', 'Home hardware', 'Light maintenance'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Medium-Duty',
        body: 'Versatile ductile-iron platforms for professional workshops, schools and fabricators.',
        uses: ['Workshops', 'Schools', 'Professional brands'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Heavy-Duty',
        body: 'Forged-steel platforms for clubs, industrial facilities and demanding fabrication work.',
        uses: ['Industrial', 'Fabrication', 'Heavy users'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Pipe & Specialty',
        body: 'Durable, high-cycle platforms for plumbing, pipe fitting, positioning and production environments.',
        uses: ['Plumbing', 'Production', 'Institutional buyers'],
        cta: 'Request This Platform',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas base',
    sub: 'Plataformas base, no productos de catálogo. Cada ancho de mordaza, material y acabado se especifica por proyecto.',
    items: [
      {
        title: 'Uso ligero',
        body: 'Plataformas compactas de hierro fundido para líneas de retail, ferretería de hogar y programas de mantenimiento ligero.',
        uses: ['Líneas de retail', 'Ferretería de hogar', 'Mantenimiento ligero'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Uso medio',
        body: 'Plataformas versátiles de hierro dúctil para talleres profesionales, escuelas y fabricantes.',
        uses: ['Talleres', 'Escuelas', 'Marcas profesionales'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Uso intensivo',
        body: 'Plataformas de acero forjado para clubes, instalaciones industriales y fabricación exigente.',
        uses: ['Industrial', 'Fabricación', 'Usuarios exigentes'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Tubería y especial',
        body: 'Plataformas duraderas de alto ciclo para fontanería, ajuste de tuberías, posicionamiento y entornos de producción.',
        uses: ['Fontanería', 'Producción', 'Compradores institucionales'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
    ],
  },
  fr: {
    kicker: 'Plateformes produit',
    title: 'Plateformes de base',
    sub: 'Des plateformes de base, pas des produits de catalogue. Chaque largeur de mâchoire, matériau et finition est spécifié par projet.',
    items: [
      {
        title: 'Usage léger',
        body: 'Plateformes en fonte compactes pour les gammes retail, la quincaillerie de maison et les programmes d\'entretien léger.',
        uses: ['Gammes retail', 'Quincaillerie de maison', 'Entretien léger'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Usage moyen',
        body: 'Plateformes en fonte ductile polyvalentes pour les ateliers professionnels, les écoles et les fabricants.',
        uses: ['Ateliers', 'Écoles', 'Marques professionnelles'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Usage intensif',
        body: 'Plateformes en acier forgé pour les clubs, les installations industrielles et la fabrication exigeante.',
        uses: ['Industriel', 'Fabrication', 'Utilisateurs exigeants'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Tuyauterie & spécial',
        body: 'Plateformes durables à fort cycle d\'utilisation pour la plomberie, le raccordement de tuyauterie, le positionnement et les environnements de production.',
        uses: ['Plomberie', 'Production', 'Acheteurs institutionnels'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
    ],
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Production Projects',
    title: 'Recent Production',
    sub: 'Manufacturing projects delivered from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        tag: 'Batch Traceability',
        title: 'Shipment Release & Traceability Handover',
        body: 'Every batch ships with its quality handover — inspection records, per-vise serial numbers and the signed release transfer, filed under 10-year ERP traceability. The photo shows the actual release & traceability handover record at the plant.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Workshop Fleet',
        title: 'Workshop Fleet Vises — Medium-Duty Platform',
        body: 'Medium-duty platform with specification adjustments and workshop graphics locked at the sample stage, tooling reused across two orders so the expansion reorder matched the original fleet exactly.',
        hue: 28,
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
      },
      {
        tag: 'Brand Line Extension',
        title: 'Brand Line Extension — Bench Vise',
        body: 'An established hardware brand added a bench vise line: engineering review, custom mold, three jaw widths, and a 50 pcs first production run with hardness and clamp verification before scale-up — designs and tooling owned by the brand.',
        hue: 210,
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Proyectos de fabricación entregados desde la planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Trazabilidad de lotes',
        title: 'Liberación de embarque y traspaso de trazabilidad',
        body: 'Cada lote sale con su traspaso de calidad: registros de inspección, número de serie por tornillo y el acta de liberación firmada, archivados con trazabilidad ERP de 10 años. La foto muestra el acta real de liberación y trazabilidad en planta.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Flota de taller',
        title: 'Tornillos de flota — plataforma de uso medio',
        body: 'Plataforma de uso medio con ajustes de especificación y gráficos del taller fijados en la fase de muestra; el utillaje se reutilizó dos pedidos para que la ampliación coincidiera exactamente con la flota original.',
        hue: 28,
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
      },
      {
        tag: 'Extensión de marca',
        title: 'Extensión de línea — tornillo de banco',
        body: 'Una marca de hardware consolidada añadió una línea de tornillos de banco: revisión de ingeniería, molde a medida, tres anchos de mordaza y una primera tirada de 50 unidades verificada en dureza y cierre antes del escalado — con diseños y utillaje en propiedad de la marca.',
        hue: 210,
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
      },
    ],
  },
  fr: {
    kicker: 'Projets de production',
    title: 'Production récente',
    sub: 'Des projets de fabrication livrés depuis notre usine — avec les chiffres que les acheteurs demandent réellement.',
    projects: [
      {
        tag: 'Traçabilité des lots',
        title: 'Libération d\'expédition et transfert de traçabilité',
        body: 'Chaque lot part avec son transfert qualité — registres d\'inspection, numéros de série par étau et acte de libération signé, archivés sous 10 ans de traçabilité ERP. La photo montre le registre réel de libération et de traçabilité à l\'usine.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Flotte d\'atelier',
        title: 'Étaux de flotte — plateforme usage moyen',
        body: 'Plateforme usage moyen avec ajustements de spécification et graphismes d\'atelier figés au stade de l\'échantillon, outillage réutilisé sur deux commandes afin que la réitération corresponde exactement à la flotte d\'origine.',
        hue: 28,
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
      },
      {
        tag: 'Extension de gamme',
        title: 'Extension de gamme — étau d\'établi',
        body: 'Une marque de quincaillerie établie a ajouté une gamme d\'étaux d\'établi : revue d\'ingénierie, moule sur mesure, trois largeurs de mâchoire et une première production de 50 pièces vérifiée en dureté et en serrage avant la montée en série — les designs et l\'outillage restant la propriété de la marque.',
        hue: 210,
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
      },
    ],
  },
}

/* ─────────────────────────── buyer's guides (home) ─────────────────────────── */

export interface GuideLink {
  title: string
  body: string
  href: string
}

export interface GuidesContent {
  kicker: string
  title: string
  sub: string
  guides: GuideLink[]
}

export const guides: Localized<GuidesContent> = {
  en: {
    kicker: "Buyer's Guides",
    title: 'Manufacturing Guides',
    sub: 'The questions every bench vise brand asks before ordering — answered in plain language, with our real terms.',
    guides: [
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'Bench Vise OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Bench Vises',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
  es: {
    kicker: 'Guías del comprador',
    title: 'Guías de fabricación',
    sub: 'Las preguntas que toda marca de tornillos de banco hace antes de pedir — respondidas con claridad y con nuestras condiciones reales.',
    guides: [
      {
        title: 'Marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'MOQ y precios OEM de tornillos de banco',
        body: 'Niveles de MOQ desde 1–2 muestras hasta series de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para tornillos de banco',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
  fr: {
    kicker: 'Guides de l\'acheteur',
    title: 'Guides de fabrication',
    sub: 'Les questions que toute marque d\'étaux d\'établi se pose avant de commander — réponses en langage clair, avec nos conditions réelles.',
    guides: [
      {
        title: 'Marque blanche : le guide complet, étape par étape',
        body: 'Du choix de l\'usine à la production — le parcours complet en six étapes pour les nouvelles marques.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'MOQ et tarifs OEM d\'étaux d\'établi',
        body: 'Niveaux de MOQ allant de 1–2 échantillons à des séries en volume, les six facteurs de coût, et cinq façons de réduire les coûts sans sacrifier la qualité.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'Certification CE pour étaux d\'établi',
        body: 'Ce que couvre réellement le CE, les cinq documents à exiger, et comment vérifier qu\'un certificat nomme bien votre modèle.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
}

/* ─────────────────────── manufacturing guides (knowledge) ─────────────────────── */

export const manufacturingGuides: Localized<GuidesContent> = {
  en: {
    kicker: 'Manufacturing Guides',
    title: 'From Factory to Finished Product',
    sub: 'The complete sourcing library — every stage of a custom bench vise project with our real lead times, terms and documentation.',
    guides: [
      {
        title: 'How to Choose a Bench Vise OEM Manufacturer',
        body: 'The audit questions that separate a real factory from a trader: certifications, QC, samples and ownership.',
        href: '/news/how-to-choose-vise-oem-manufacturer',
      },
      {
        title: 'Bench Vise Product Development Timeline',
        body: 'Sample in 7–14 days, production in 25–35 days, tooling plus 15–20 — the full calendar, stage by stage.',
        href: '/news/custom-vise-development-timeline',
      },
      {
        title: 'Information to Prepare Before Ordering',
        body: 'The five details that let a factory quote accurately on the first pass — and avoid spec rework.',
        href: '/news/info-needed-before-vise-production',
      },
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'Bench Vise OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Bench Vises',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
  es: {
    kicker: 'Guías de fabricación',
    title: 'De la fábrica al producto terminado',
    sub: 'La biblioteca completa de abastecimiento — cada etapa de un proyecto de tornillos de banco a medida con nuestros plazos, condiciones y documentación reales.',
    guides: [
      {
        title: 'Cómo elegir un fabricante OEM de tornillos de banco',
        body: 'Las preguntas de auditoría que separan una fábrica real de un intermediario: certificaciones, control de calidad, muestras y propiedad.',
        href: '/news/how-to-choose-vise-oem-manufacturer',
      },
      {
        title: 'Calendario de desarrollo de producto de tornillos de banco',
        body: 'Muestra en 7–14 días, producción en 25–35 días, utillaje más 15–20 — el calendario completo, etapa por etapa.',
        href: '/news/custom-vise-development-timeline',
      },
      {
        title: 'Información para preparar antes de pedir',
        body: 'Los cinco detalles que permiten a una fábrica cotizar con precisión a la primera — y evitar rehacer la especificación.',
        href: '/news/info-needed-before-vise-production',
      },
      {
        title: 'Marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'MOQ y precios OEM de tornillos de banco',
        body: 'Niveles de MOQ desde 1–2 muestras hasta series de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para tornillos de banco',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
  fr: {
    kicker: 'Guides de fabrication',
    title: 'De l\'usine au produit fini',
    sub: 'La bibliothèque complète d\'approvisionnement — chaque étape d\'un projet d\'étau d\'établi sur mesure avec nos délais, conditions et documentation réels.',
    guides: [
      {
        title: 'Comment choisir un fabricant OEM d\'étaux d\'établi',
        body: 'Les questions d\'audit qui distinguent une vraie usine d\'un intermédiaire : certifications, contrôle qualité, échantillons et propriété.',
        href: '/news/how-to-choose-vise-oem-manufacturer',
      },
      {
        title: 'Calendrier de développement produit d\'étaux d\'établi',
        body: 'Échantillon sous 7–14 jours, production sous 25–35 jours, outillage plus 15–20 — le calendrier complet, étape par étape.',
        href: '/news/custom-vise-development-timeline',
      },
      {
        title: 'Informations à préparer avant de commander',
        body: 'Les cinq détails qui permettent à une usine de chiffrer précisément du premier coup — et d\'éviter de refaire la spécification.',
        href: '/news/info-needed-before-vise-production',
      },
      {
        title: 'Marque blanche : le guide complet, étape par étape',
        body: 'Du choix de l\'usine à la production — le parcours complet en six étapes pour les nouvelles marques.',
        href: '/news/private-label-vise-guide',
      },
      {
        title: 'MOQ et tarifs OEM d\'étaux d\'établi',
        body: 'Niveaux de MOQ allant de 1–2 échantillons à des séries en volume, les six facteurs de coût, et cinq façons de réduire les coûts sans sacrifier la qualité.',
        href: '/news/vise-oem-moq-pricing',
      },
      {
        title: 'Certification CE pour étaux d\'établi',
        body: 'Ce que couvre réellement le CE, les cinq documents à exiger, et comment vérifier qu\'un certificat nomme bien votre modèle.',
        href: '/news/ce-certification-bench-vise',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Manufacturing FAQ',
    sub: 'Questions buyers ask before placing an order — answered with our actual terms.',
    items: [
      {
        q: 'What does Stavalk manufacture?',
        a: 'Stavalk is a professional bench vise manufacturing factory specializing in customized bench vises for global brands and businesses — engineered, sampled and produced in our own 8,000 m² plant in Qingdao, China, with 200+ workers and an annual capacity of 80,000+ vises.',
      },
      {
        q: 'What is the difference between OEM and ODM?',
        a: `OEM: we manufacture to your approved specification — your drawings, dimensions, materials, finish and packaging. You own the design and intellectual property. ODM: our engineering team develops the vise from your brief — whether a market concept, performance target or adaptation of a proven model — and you approve before production. Private label puts your brand on an existing validated model with no structural changes. Both OEM and ODM routes run through the same plant, QC system and export team.`,
      },
      {
        q: 'What is your minimum order quantity?',
        a: `Standard volume production starts at ${MOQ_SHORT.standardRun}; heavy-duty and specialty models run at 20–50 pcs. Co-branding small bulk starts at 5–10 pcs; pilot batches from 20–50 pcs.`,
      },
      {
        q: 'How long does production take?',
        a: '25–35 days from confirmed PO and deposit. Custom tooling adds 15–20 days for mold development. Expedited production is available for rush orders.',
      },
      {
        q: 'How fast can I get a sample?',
        a: 'Prototype samples typically ship within 7–14 days of approved artwork and specification.',
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management, CE certification for models destined for EU markets (scope confirmed per project), ISO 14001 for environmental management, and RoHS documentation provided with every order. Audits are welcome.',
      },
      {
        q: 'Do you handle export documentation?',
        a: 'Yes. Export documentation and export-grade packing are handled in-house, and we supply brands in 50+ countries across the EU, US, AU and Asia.',
      },
      {
        q: 'Will my design be shown to other clients?',
        a: 'No. Artwork, tooling and specification files remain your property. We sign an NDA before any file exchange and we never reuse or resell client tooling or designs.',
      },
      {
        q: 'Do you sell your own bench vise brand?',
        a: 'No. We manufacture exclusively under our clients’ brands. We do not compete with our clients in any market.',
      },
      {
        q: 'Can you match a vise I already sell?',
        a: 'Yes. Send a physical sample or full specification and our engineering team will return a manufacturability report with materials, jaw width, tolerances and cost drivers.',
      },
      {
        q: 'Can you manufacture bench vises with our logo?',
        a: 'Yes. Custom branding — logos, colors, finish and cast or laser marking — is incorporated into the product design and production according to the agreed specifications. You own all brand and artwork files.',
      },
      {
        q: 'Can you develop a completely new bench vise product?',
        a: 'Yes. Custom product development starts from your concept, sketches, specifications or market requirements. We work through specification review, structural engineering, prototype sampling and approval before mass production.',
      },
      {
        q: 'What materials do you use for bench vises?',
        a: 'Ductile iron, gray iron and forged steel bodies with hardened jaw inserts rated 58–62 HRC, and RoHS-compliant surface finishes — with quality certification (ISO 9001, CE, ISO 14001, RoHS).',
      },
      {
        q: 'Do you work with new or startup tool brands?',
        a: `Yes. OEM/ODM projects are developed according to your product requirements, target market and volume — pilot runs start at 20–50 pcs and standard volume production at ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'What information should I provide for an OEM bench vise inquiry?',
        a: 'The most useful information: product type, target market, jaw width or specifications, desired material and finish, branding requirements, estimated quantity, packaging requirements and target launch schedule. Our team returns an engineering assessment and quotation within one business day.',
      },
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Qué fabrica Stavalk?',
        a: 'Stavalk es una fábrica profesional de fabricación de tornillos de banco, especializada en tornillos de banco personalizados para marcas y empresas globales — diseñados, muestreados y producidos en nuestra propia planta de 8.000 m² en Qingdao, China, con más de 200 operarios y una capacidad anual de más de 80.000 tornillos.',
      },
      {
        q: '¿Cuál es la diferencia entre OEM y ODM?',
        a: 'OEM: fabricamos según tu especificación aprobada — planos, dimensiones, materiales, acabado y embalaje. Tú eres propietario del diseño y la propiedad intelectual. ODM: nuestro equipo de ingeniería desarrolla el tornillo a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de un modelo probado — y tú apruebas antes de la producción. Marca privada pone tu marca en un modelo validado existente sin cambios estructurales. Ambas rutas pasan por la misma planta, el mismo sistema de QC y el mismo equipo de exportación.',
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: `La producción de volumen estándar parte de ${MOQ_SHORT.standardRun}; los modelos de uso intensivo y especiales, de 20–50 uds. El pequeño lote de co-branding parte de 5–10 uds.; los lotes piloto, de 20–50 uds.`,
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: '25–35 días desde el PO confirmado y el depósito. El utillaje añade 15–20 días de desarrollo de molde. Se dispone de producción acelerada para pedidos urgentes.',
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: 'Las muestras de prototipo salen en 7–14 días tras la aprobación del arte y la especificación.',
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para la gestión de calidad, certificación CE para modelos destinados al mercado de la UE (alcance confirmado por proyecto), ISO 14001 para gestión ambiental y documentación RoHS entregada con cada pedido. Las auditorías son bienvenidas.',
      },
      {
        q: '¿Gestionáis la documentación de exportación?',
        a: 'Sí. La documentación de exportación y el embalaje de exportación se gestionan en casa, y suministramos a marcas en más de 50 países de la UE, EE. UU., Australia y Asia.',
      },
      {
        q: '¿Mostraréis mi diseño a otros clientes?',
        a: 'No. Los archivos de arte, utillaje y especificaciones siguen siendo de tu propiedad. Firmamos un NDA antes de cualquier intercambio y nunca reutilizamos ni vendemos moldes o diseños de clientes.',
      },
      {
        q: '¿Vendéis vuestra propia marca de tornillos de banco?',
        a: 'No. Fabricamos exclusivamente bajo las marcas de nuestros clientes. No competimos con nuestros clientes en ningún mercado.',
      },
      {
        q: '¿Podéis replicar un tornillo que ya vendo?',
        a: 'Sí. Envíanos una muestra física o una especificación completa y nuestro equipo de ingeniería te devolverá un informe de fabricabilidad con materiales, ancho de mordaza, tolerancias y factores de coste.',
      },
      {
        q: '¿Podéis fabricar tornillos de banco con nuestro logotipo?',
        a: 'Sí. La personalización de marca — logotipos, colores, acabado y marcado fundido o por láser — se incorpora al diseño y a la producción según las especificaciones acordadas. Todos los archivos de marca y arte son de tu propiedad.',
      },
      {
        q: '¿Podéis desarrollar un producto de tornillos de banco completamente nuevo?',
        a: 'Sí. El desarrollo de productos personalizados parte de tu concepto, bocetos, especificaciones o requisitos de mercado. Trabajamos en revisión de especificaciones, ingeniería estructural, muestras de prototipo y aprobación antes de la producción en masa.',
      },
      {
        q: '¿Qué materiales usáis para los tornillos de banco?',
        a: 'Cuerpos de hierro dúctil, hierro gris y acero forjado con insertos de mordaza templados de 58–62 HRC, y acabados de superficie conformes a RoHS, con certificación de calidad (ISO 9001, CE, ISO 14001, RoHS).',
      },
      {
        q: '¿Trabajáis con marcas de herramientas nuevas o emergentes?',
        a: `Sí. Los proyectos OEM/ODM se desarrollan según tus requisitos de producto, mercado objetivo y volumen — los pilotos parten de 20–50 uds. y la producción de volumen estándar, de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: '¿Qué información debo dar en una consulta OEM de tornillos de banco?',
        a: 'La información más útil: tipo de producto, mercado objetivo, ancho de mordaza o especificaciones, material y acabado deseados, requisitos de marca, cantidad estimada, requisitos de embalaje y fecha de lanzamiento prevista. Nuestro equipo responde con una evaluación de ingeniería y un presupuesto en un día laborable.',
      },
    ],
  },
  fr: {
    kicker: 'FAQ',
    title: 'Questions fréquentes sur la fabrication',
    sub: 'Les questions que les acheteurs posent avant de passer commande — réponses avec nos conditions réelles.',
    items: [
      {
        q: 'Que fabrique Stavalk ?',
        a: 'Stavalk est une usine professionnelle de fabrication d\'étaux d\'établi, spécialisée dans les étaux d\'établi personnalisés pour les marques et entreprises du monde entier — conçus, échantillonnés et produits dans notre propre usine de 8 000 m² à Qingdao, en Chine, avec plus de 200 ouvriers et une capacité annuelle de plus de 80 000 étaux.',
      },
      {
        q: 'Quelle est la différence entre OEM et ODM ?',
        a: 'OEM : nous fabriquons selon votre spécification approuvée — vos plans, dimensions, matériaux, finition et packaging. Vous possédez la conception et la propriété intellectuelle. ODM : notre équipe d\'ingénierie développe l\'étau à partir de votre brief — qu\'il s\'agisse d\'un concept de marché, d\'un objectif de performance ou de l\'adaptation d\'un modèle éprouvé — et vous approuvez avant la production. La marque blanche appose votre marque sur un modèle validé existant, sans modification structurelle. Les deux filières passent par la même usine, le même système de contrôle qualité et la même équipe d\'export.',
      },
      {
        q: 'Quelle est votre quantité minimale de commande ?',
        a: `La production en volume standard part de ${MOQ_SHORT.standardRun} ; les modèles usage intensif et spéciaux, de 20–50 pièces. Le petit lot en co-branding part de 5–10 pièces ; les lots pilotes de 20–50 pièces.`,
      },
      {
        q: 'Combien de temps prend la production ?',
        a: '25–35 jours à compter du bon de commande confirmé et de l\'acompte. L\'outillage sur mesure ajoute 15–20 jours de développement de moule. Une production accélérée est disponible pour les commandes urgentes.',
      },
      {
        q: 'En combien de temps puis-je recevoir un échantillon ?',
        a: 'Les échantillons de prototype partent généralement sous 7–14 jours après approbation du graphisme et de la spécification.',
      },
      {
        q: 'Quelles certifications détenez-vous ?',
        a: 'ISO 9001 pour le management de la qualité, certification CE pour les modèles destinés aux marchés de l\'UE (périmètre confirmé par projet), ISO 14001 pour la gestion environnementale et documentation RoHS fournie avec chaque commande. Les audits sont les bienvenus.',
      },
      {
        q: 'Gérez-vous la documentation à l\'export ?',
        a: 'Oui. La documentation à l\'export et l\'emballage adapté à l\'export sont pris en charge en interne, et nous approvisionnons des marques dans plus de 50 pays de l\'UE, des États-Unis, d\'Australie et d\'Asie.',
      },
      {
        q: 'Mon design sera-t-il montré à d\'autres clients ?',
        a: 'Non. Les fichiers de graphisme, l\'outillage et les spécifications restent votre propriété. Nous signons un NDA avant tout échange de fichiers et ne réutilisons ni ne revendons jamais l\'outillage ou les designs de nos clients.',
      },
      {
        q: 'Vendez-vous votre propre marque d\'étaux d\'établi ?',
        a: 'Non. Nous fabriquons exclusivement sous les marques de nos clients. Nous ne sommes en concurrence avec aucun de nos clients sur quelque marché que ce soit.',
      },
      {
        q: 'Pouvez-vous reproduire un étau que je vends déjà ?',
        a: 'Oui. Envoyez un échantillon physique ou une spécification complète et notre équipe d\'ingénierie vous retournera un rapport de fabricabilité avec les matériaux, la largeur de mâchoire, les tolérances et les facteurs de coût.',
      },
      {
        q: 'Pouvez-vous fabriquer des étaux d\'établi avec notre logo ?',
        a: 'Oui. La personnalisation de marque — logos, couleurs, finition et marquage coulé ou au laser — est intégrée à la conception et à la production selon les spécifications convenues. Vous détenez l\'ensemble des fichiers de marque et de graphisme.',
      },
      {
        q: 'Pouvez-vous développer un produit d\'étau d\'établi entièrement nouveau ?',
        a: 'Oui. Le développement de produit sur mesure part de votre concept, de vos croquis, de vos spécifications ou de vos exigences de marché. Nous travaillons à travers la revue de spécification, l\'ingénierie structurelle, l\'échantillonnage de prototype et l\'approbation avant la production de masse.',
      },
      {
        q: 'Quels matériaux utilisez-vous pour les étaux d\'établi ?',
        a: 'Corps en fonte ductile, en fonte grise et en acier forgé avec insertions de mâchoire trempées de 58–62 HRC, et finitions de surface conformes RoHS, avec certification qualité (ISO 9001, CE, ISO 14001, RoHS).',
      },
      {
        q: 'Travaillez-vous avec des marques d\'outillage nouvelles ou en démarrage ?',
        a: `Oui. Les projets OEM/ODM sont développés selon vos exigences produit, votre marché cible et votre volume — les séries pilotes partent de 20–50 pièces et la production en volume standard de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Quelles informations dois-je fournir pour une demande OEM d\'étau d\'établi ?',
        a: 'Les informations les plus utiles : le type de produit, le marché cible, la largeur de mâchoire ou les spécifications, le matériau et la finition souhaités, les exigences de marque, la quantité estimée, les exigences d\'emballage et le calendrier de lancement visé. Notre équipe renvoie une évaluation d\'ingénierie et un devis sous un jour ouvrable.',
      },
    ],
  },
}

export const homeFaq: Localized<FaqContent> = {
  en: {
    kicker: faq.en.kicker,
    title: faq.en.title,
    sub: faq.en.sub,
    items: [
      faq.en.items[1],
      faq.en.items[2],
      faq.en.items[3],
      faq.en.items[5],
      {
        q: 'Can buyers audit the factory or use third-party inspection?',
        a: 'Yes. We welcome buyer audits and work regularly with SGS, TÜV, BV and Intertek. Third-party inspection can be arranged at any production stage — incoming material, in-process or final inspection — and inspection reports are provided on request.',
      },
    ],
  },
  es: {
    kicker: faq.es.kicker,
    title: faq.es.title,
    sub: faq.es.sub,
    items: [
      faq.es.items[1],
      faq.es.items[2],
      faq.es.items[3],
      faq.es.items[5],
      {
        q: '¿Pueden los compradores auditar la fábrica o usar inspección de terceros?',
        a: 'Sí. Aceptamos auditorías de compradores y trabajamos regularmente con SGS, TÜV, BV e Intertek. La inspección de terceros puede organizarse en cualquier etapa de producción — material entrante, en proceso o inspección final — y los informes de inspección se proporcionan a petición.',
      },
    ],
  },
  fr: {
    kicker: faq.fr.kicker,
    title: faq.fr.title,
    sub: faq.fr.sub,
    items: [
      faq.fr.items[1],
      faq.fr.items[2],
      faq.fr.items[3],
      faq.fr.items[5],
      {
        q: 'Les acheteurs peuvent-ils auditer l\'usine ou recourir à une inspection tierce ?',
        a: 'Oui. Nous accueillons volontiers les audits d\'acheteurs et travaillons régulièrement avec SGS, TÜV, BV et Intertek. Une inspection tierce peut être organisée à n\'importe quel stade de la production — matière entrante, contrôle en cours ou inspection finale — et les rapports d\'inspection sont fournis sur demande.',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Ready to Start Your Bench Vise Project?',
    body: "Whether you already have a complete product specification or are still developing your concept, our team can help you evaluate the next step. Tell us what you want to build — we'll review your requirements and discuss the most practical path from concept to production.",
    button: 'Start Your Bench Vise Project',
    note: 'Reply within 1 business day · NDA on request before file exchange · info@Stavalk.com · +86-13305324192',
  },
  es: {
    title: '¿Listo para iniciar tu proyecto de tornillos de banco?',
    body: 'Ya sea que tengas una especificación de producto completa o estés todavía desarrollando tu concepto, nuestro equipo puede ayudarte a evaluar el siguiente paso. Cuéntanos qué quieres construir — revisaremos tus requisitos y plantearemos la vía más práctica del concepto a la producción.',
    button: 'Inicia tu proyecto de tornillos de banco',
    note: 'Respuesta en 1 día laborable · NDA disponible antes del intercambio de archivos · info@Stavalk.com · +86-13305324192',
  },
  fr: {
    title: 'Prêt à lancer votre projet d\'étaux d\'établi ?',
    body: 'Que vous disposiez déjà d\'une spécification produit complète ou que vous développiez encore votre concept, notre équipe peut vous aider à évaluer la suite. Dites-nous ce que vous souhaitez construire — nous examinerons vos exigences et évoquerons la voie la plus pratique, du concept à la production.',
    button: 'Lancer votre projet d\'étaux d\'établi',
    note: 'Réponse sous 1 jour ouvrable · NDA sur demande avant l\'échange de fichiers · info@Stavalk.com · +86-13305324192',
  },
}

/* ─────────────────────────── home: value proposition (More Than a Vise Factory) ─────────────────────────── */

export interface ValuePropCard {
  title: string
  body: string
}

export interface ValuePropContent {
  kicker: string
  title: string
  sub: string
  cards: ValuePropCard[]
}

export const valueProp: Localized<ValuePropContent> = {
  en: {
    kicker: 'Our Role',
    title: 'More Than a Bench Vise Factory',
    sub: 'Many manufacturers can produce a standard bench vise. Our role is different. Stavalk is a custom bench vise product development and manufacturing partner, helping businesses move from an initial idea to a production-ready product.',
    cards: [
      {
        title: 'Product Development',
        body: 'Turn your concept, sketches, specifications or market requirements into a manufacturable bench vise product.',
      },
      {
        title: 'Custom Manufacturing',
        body: 'Customize product construction, jaw width, materials, finish, branding and packaging according to your requirements.',
      },
      {
        title: 'Prototype Development',
        body: 'Evaluate the product before committing to mass production through sample development and testing.',
      },
      {
        title: 'Production Support',
        body: 'Once the design is approved, we manage the transition from prototype to repeatable mass production.',
      },
      {
        title: 'Quality Control',
        body: 'Quality checks throughout production help ensure that finished products meet the agreed specifications.',
      },
      {
        title: 'Global Supply',
        body: 'Support with packaging and export documentation helps simplify the sourcing process.',
      },
    ],
  },
  es: {
    kicker: 'Nuestro papel',
    title: 'Más que una fábrica de tornillos de banco',
    sub: 'Muchos fabricantes pueden producir un tornillo de banco estándar. Nuestro papel es distinto. Stavalk es un socio de desarrollo de productos y fabricación de tornillos de banco personalizados que ayuda a las empresas a pasar de la idea inicial a un producto listo para producir.',
    cards: [
      {
        title: 'Desarrollo de producto',
        body: 'Convierte tu concepto, bocetos, especificaciones o requisitos de mercado en un producto de tornillos de banco fabricable.',
      },
      {
        title: 'Fabricación personalizada',
        body: 'Personaliza construcción, ancho de mordaza, materiales, acabado, marca y embalaje según tus requisitos.',
      },
      {
        title: 'Desarrollo de prototipos',
        body: 'Evalúa el producto antes de comprometerte con la producción en masa mediante muestras y pruebas.',
      },
      {
        title: 'Soporte de producción',
        body: 'Una vez aprobado el diseño, gestionamos la transición del prototipo a la producción en serie repetible.',
      },
      {
        title: 'Control de calidad',
        body: 'Los controles de calidad a lo largo de la producción aseguran que el producto final cumpla las especificaciones acordadas.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo con embalaje y documentación de exportación para simplificar el proceso de abastecimiento.',
      },
    ],
  },
  fr: {
    kicker: 'Notre rôle',
    title: 'Plus qu\'une usine d\'étaux d\'établi',
    sub: 'De nombreux fabricants savent produire un étau d\'établi standard. Notre rôle est différent. Stavalk est un partenaire de développement produit et de fabrication d\'étaux d\'établi sur mesure qui aide les entreprises à passer de l\'idée initiale à un produit prêt pour la production.',
    cards: [
      {
        title: 'Développement produit',
        body: 'Transformez votre concept, vos croquis, vos spécifications ou vos exigences de marché en un produit d\'étau d\'établi fabricable.',
      },
      {
        title: 'Fabrication sur mesure',
        body: 'Personnalisez la construction du produit, la largeur de mâchoire, les matériaux, la finition, la marque et son packaging selon vos exigences.',
      },
      {
        title: 'Développement de prototypes',
        body: 'Évaluez le produit avant de vous engager dans la production de masse grâce à l\'échantillonnage et aux tests.',
      },
      {
        title: 'Soutien à la production',
        body: 'Une fois le design approuvé, nous gérons la transition du prototype vers une production de masse reproductible.',
      },
      {
        title: 'Contrôle qualité',
        body: 'Des contrôles qualité tout au long de la production garantissent que les produits finis répondent aux spécifications convenues.',
      },
      {
        title: 'Approvisionnement mondial',
        body: 'Un soutien pour le packaging et la documentation à l\'export simplifie le processus d\'approvisionnement.',
      },
    ],
  },
}

/* ─────────────────────────── home: role boundary (Where We Stop, You Start) ─────────────────────────── */

export interface BoundaryRow {
  ours: string
  theirs: string
}

export interface BoundaryContent {
  kicker: string
  title: string
  sub: string
  oursTitle: string
  theirsTitle: string
  rows: BoundaryRow[]
  footer: string
}

export const boundary: Localized<BoundaryContent> = {
  en: {
    kicker: 'Who We Are',
    title: 'Built by a Vise Factory, Not a Trading Platform',
    sub: 'We are a manufacturing partner, not a marketplace. Our role is to help customers turn ideas, designs and product requirements into manufacturable bench vise products. You own your brand. You control your market. We support production execution.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Structural engineering, materials selection, mold development', theirs: 'Pricing, channels and sales' },
      { ours: 'Finish, marking and packaging from your brand files', theirs: 'Ownership of all brand and artwork files' },
      { ours: 'Prototyping, sampling and sample approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final inspection', theirs: 'Your market, your customers, your data' },
      { ours: 'Certification documentation and export-grade packing', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your artwork, tooling and specification files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Construido por una fábrica de tornillos, no por una plataforma comercial',
    sub: 'Somos un socio de fabricación, no un marketplace. Nuestro papel es ayudar a los clientes a convertir ideas, diseños y requisitos de producto en productos de tornillos de banco fabricables. Tú eres dueño de tu marca. Tú controlas tu mercado. Nosotros ejecutamos la producción.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Ingeniería estructural, selección de materiales y desarrollo de moldes', theirs: 'Precios, canales y ventas' },
      { ours: 'Acabado, marcado y embalaje desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y arte' },
      { ours: 'Prototipado, muestreo y documentación de aprobación de muestras', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación de certificación y embalaje de exportación', theirs: 'Relaciones con el cliente final y posventa' },
    ],
    footer:
      'Tus archivos de arte, utillaje y especificación siguen siendo de tu propiedad y nunca se reutilizan, revenden ni muestran a otro cliente.',
  },
  fr: {
    kicker: 'Qui nous sommes',
    title: 'Construit par une usine d\'étaux, pas par une plateforme commerciale',
    sub: 'Nous sommes un partenaire de fabrication, pas une marketplace. Notre rôle est d\'aider les clients à transformer leurs idées, designs et exigences produit en produits d\'étau d\'établi fabricables. Vous détenez votre marque. Vous contrôlez votre marché. Nous assurons l\'exécution de la production.',
    oursTitle: 'Nous nous chargeons',
    theirsTitle: 'Vous conservez',
    rows: [
      { ours: 'Revue de spécification et évaluation de fabricabilité', theirs: 'Nom, identité et positionnement de marque' },
      { ours: 'Ingénierie structurelle, sélection des matériaux, développement du moule', theirs: 'Tarifs, canaux et ventes' },
      { ours: 'Finition, marquage et emballage à partir de vos fichiers de marque', theirs: 'Propriété de tous les fichiers de marque et de graphisme' },
      { ours: 'Prototypage, échantillonnage et documentation d\'approbation des échantillons', theirs: 'Approbation finale de chaque échantillon' },
      { ours: 'Production par lots, contrôle qualité en cours et inspection finale', theirs: 'Votre marché, vos clients, vos données' },
      { ours: 'Documentation de certification et emballage adapté à l\'export', theirs: 'Relations clients finaux et après-vente' },
    ],
    footer:
      'Vos fichiers de graphisme, d\'outillage et de spécification restent votre propriété et ne sont jamais réutilisés, revendus ni montrés à un autre client.',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  strength: { title: string; body: string }[]
  partnering: { title: string; body: string[] }
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'About Stavalk',
    sub: 'Your Custom Bench Vise Manufacturing Partner',
    story: [
      'We are a bench vise OEM/ODM factory that has spent years building vises for brands, distributors and sourcing teams around the world. Along the way, we kept meeting the same kind of customer — brands and buyers with a clear product vision but no in-house plant to build it.',
      'So we built Stavalk around them. Tiered minimums from co-branding runs, complete engineering and design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.',
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every vise passes multi-point QC — materials, casting, machining, heat treatment, assembly and packaging are checked at every stage of production.',
      },
      {
        title: 'Manufacturer, Not Middleman',
        body: 'Design, mould engineering, prototype, production and testing all happen under one roof — no trading-desk gap between you and the plant.',
      },
      {
        title: 'Flexible by Design',
        body: 'Tiered MOQs, modular options and honest lead times let brands grow from trial orders to volume runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Custom molds', 'Sample service', 'Design & finish', 'Multi-point QC', 'Export documentation'],
    stats: [
      { value: '50–200 pcs', label: 'Standard volume MOQ (per approved configuration)' },
      { value: '7–14 days', label: 'Sample lead time' },
      { value: '25–35 days', label: 'Production lead time' },
      { value: '20–50 pcs', label: 'Pilot order MOQ (heavy/specialty)' },
    ],
    strength: [
      {
        title: 'Product Development',
        body: 'From concept sketches to production drawings — our engineers refine jaw width, opening, body material and hardening to hit your target performance and price.',
      },
      {
        title: 'OEM Manufacturing',
        body: 'Build your exact specification: materials, jaw width, finish, logo placement, accessories and packaging, in standard volume batches.',
      },
      {
        title: 'ODM Solutions',
        body: 'Start from our proven in-house platforms — light-duty, medium-duty, heavy-duty, pipe and specialty — and customize branding, finish and trim for a fast, low-risk launch.',
      },
      {
        title: 'Engineering Support',
        body: 'Mould engineering, prototyping and sample iteration under one roof, with visual proofs and finish approvals at every milestone before mass production.',
      },
      {
        title: 'Quality Management',
        body: 'Multi-point QC across casting, machining, heat treatment, assembly and packaging, plus on-sample and pre-shipment inspections you can book as a third party.',
      },
      {
        title: 'Global Delivery',
        body: 'Export documentation, export-grade packing and in-house documentation support for brands in 50+ markets.',
      },
    ],
    partnering: {
      title: 'Partnering With Global Businesses',
      body: [
        'Stavalk works with tool brands, distributors, hardware chains, schools and industrial companies that need a reliable bench vise factory — from a first trial order to container-scale programs.',
        'Tell us your market and target price, and we respond with a spec sheet, MOQ and lead times for your specific business model.',
      ],
    },
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'Sobre Stavalk',
    sub: 'Tu socio de fabricación de tornillos de banco a medida',
    story: [
      'Somos una fábrica OEM/ODM de tornillos de banco que lleva años fabricando tornillos para marcas, distribuidores y equipos de compra de todo el mundo. En el camino, nos encontrábamos una y otra vez con el mismo tipo de cliente: marcas y compradores con un plan de producto claro pero sin planta productiva propia.',
      'Por eso construimos Stavalk a su alrededor. Pedidos mínimos por tramos, soporte de ingeniería y diseño completo, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada tornillo supera un control de calidad multipunto: material, fundición, mecanizado, tratamiento térmico, montaje y embalaje se revisan en cada etapa de la producción.',
      },
      {
        title: 'Fabricante, no intermediario',
        body: 'Ingeniería, moldes, prototipos, producción y ensayos ocurren bajo el mismo techo: sin mesas de negociación entre tú y la planta.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ por tramos, opciones modulares y plazos reales permiten crecer del pedido de prueba a la serie por volumen.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'Moldes a medida', 'Servicio de muestras', 'Diseño y acabado', 'QC multipunto', 'Documentación de exportación'],
    stats: [
      { value: '50–200 uds.', label: 'MOQ de volumen estándar (por configuración aprobada)' },
      { value: '7–14 días', label: 'Plazo de muestras' },
      { value: '25–35 días', label: 'Plazo de producción' },
      { value: '20–50 uds.', label: 'MOQ de pedido piloto (pesado/especial)' },
    ],
    strength: [
      {
        title: 'Desarrollo de producto',
        body: 'Del boceto al plano de producción — nuestros ingenieros afinan ancho de mordaza, apertura, material del cuerpo y templado para alcanzar tu rendimiento y precio objetivo.',
      },
      {
        title: 'Fabricación OEM',
        body: 'Construimos tu especificación exacta: materiales, ancho de mordaza, acabado, colocación del logotipo, accesorios y embalaje, en lotes de volumen estándar.',
      },
      {
        title: 'Soluciones ODM',
        body: 'Parte de nuestras plataformas probadas — uso ligero, medio, intensivo, tubería y especial — y personaliza marca, acabado y detalles para un lanzamiento rápido y de bajo riesgo.',
      },
      {
        title: 'Soporte de ingeniería',
        body: 'Ingeniería de moldes, prototipos e iteración de muestras bajo el mismo techo, con pruebas visuales y aprobaciones de acabado en cada hito antes de la producción en serie.',
      },
      {
        title: 'Gestión de calidad',
        body: 'QC multipunto en fundición, mecanizado, tratamiento térmico, montaje y embalaje, más inspecciones sobre muestra y previas al envío que puedes contratar como tercero.',
      },
      {
        title: 'Entrega global',
        body: 'Documentación de exportación, embalaje de exportación y soporte documental interno para marcas en más de 50 mercados.',
      },
    ],
    partnering: {
      title: 'Colaboramos con empresas de todo el mundo',
      body: [
        'Stavalk trabaja con marcas de herramientas, distribuidores, cadenas de ferretería, escuelas y empresas industriales que necesitan una fábrica de tornillos de banco fiable — desde el primer pedido de prueba hasta programas de producción por volumen.',
        'Cuéntanos tu mercado y tu precio objetivo, y te responderemos con una ficha de especificaciones, MOQ y plazos para tu modelo de negocio.',
      ],
    },
  },
  fr: {
    kicker: 'À propos de nous',
    title: 'À propos de Stavalk',
    sub: 'Votre partenaire de fabrication d\'étaux d\'établi sur mesure',
    story: [
      'Nous sommes une usine OEM/ODM d\'étaux d\'établi qui, depuis des années, fabrique des étaux pour des marques, des distributeurs et des équipes d\'approvisionnement du monde entier. Chemin faisant, nous rencontrions sans cesse le même type de client : des marques et des acheteurs avec une vision produit claire, mais sans usine en propre pour la réaliser.',
      'Nous avons donc bâti Stavalk autour d\'eux. Des minimums par paliers, un soutien complet en ingénierie et en design, et une équipe de fabrication qui traite votre première commande avec autant de sérieux que la centième. Vous apportez la marque ; nous faisons tourner l\'usine.',
    ],
    values: [
      {
        title: 'La qualité d\'abord',
        body: 'Chaque étau passe par un contrôle qualité multipoint — matériaux, fonderie, usinage, traitement thermique, assemblage et emballage sont vérifiés à chaque étape de la production.',
      },
      {
        title: 'Fabricant, pas intermédiaire',
        body: 'Design, ingénierie de moule, prototype, production et tests ont lieu sous le même toit — aucun intermédiaire commercial entre vous et l\'usine.',
      },
      {
        title: 'Flexibles par conception',
        body: 'Des MOQ par paliers, des options modulaires et des délais honnêtes permettent aux marques de passer de la commande d\'essai à la production en volume.',
      },
    ],
    capabilities: ['OEM / ODM / marque blanche', 'Moules sur mesure', 'Service d\'échantillonnage', 'Design & finition', 'QC multipoint', 'Documentation à l\'export'],
    stats: [
      { value: '50–200 pièces', label: 'MOQ de volume standard (par configuration approuvée)' },
      { value: '7–14 jours', label: 'Délai d\'échantillonnage' },
      { value: '25–35 jours', label: 'Délai de production' },
      { value: '20–50 pièces', label: 'MOQ de commande pilote (lourd/spécial)' },
    ],
    strength: [
      {
        title: 'Développement produit',
        body: 'Du croquis de concept aux plans de production — nos ingénieurs affinent la largeur de mâchoire, l\'ouverture, le matériau du corps et la trempe pour atteindre vos objectifs de performance et de prix.',
      },
      {
        title: 'Fabrication OEM',
        body: 'Construisez votre spécification exacte : matériaux, largeur de mâchoire, finition, placement du logo, accessoires et packaging, en lots de volume standard.',
      },
      {
        title: 'Solutions ODM',
        body: 'Partez de nos plateformes internes éprouvées — usage léger, moyen, intensif, tuyauterie et spécial — et personnalisez la marque, la finition et les détails pour un lancement rapide et à faible risque.',
      },
      {
        title: 'Soutien d\'ingénierie',
        body: 'Ingénierie de moule, prototypage et itération d\'échantillons sous un même toit, avec épreuves visuelles et approbations de finition à chaque étape avant la production de masse.',
      },
      {
        title: 'Gestion de la qualité',
        body: 'Contrôle qualité multipoint sur la fonderie, l\'usinage, le traitement thermique, l\'assemblage et le packaging, plus des inspections sur échantillon et avant expédition que vous pouvez réserver en tant que tiers.',
      },
      {
        title: 'Livraison mondiale',
        body: 'Documentation à l\'export, emballage adapté à l\'export et soutien documentaire interne pour des marques présentes dans plus de 50 marchés.',
      },
    ],
    partnering: {
      title: 'Partenaire d\'entreprises du monde entier',
      body: [
        'Stavalk travaille avec des marques d\'outillage, des distributeurs, des chaînes de quincaillerie, des écoles et des entreprises industrielles qui ont besoin d\'une usine d\'étaux d\'établi fiable — de la première commande d\'essai aux programmes à l\'échelle de conteneurs.',
        'Dites-nous quel est votre marché et votre prix cible, et nous vous répondrons avec une fiche de spécifications, le MOQ et les délais adaptés à votre modèle économique.',
      ],
    },
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  mockupBrand: string
  stepLabel: string
  boardLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your Vise',
    title: 'Visualize Your Bench Vise Concept Before Production',
    sub: 'Preview how your brand will look on a real vise — pick a finish, watch the mockup update live, then send us your logo for a full design.',
    status: 'Interactive Preview',
    statusBody: 'Try the palette now, then send us your idea — our team will create a free mockup of your full design.',
    steps: [
      { title: 'Choose vise model', body: 'From light-duty platforms to heavy-duty, pipe and specialty shapes — each with realistic proportions.' },
      { title: 'Select finish', body: 'Pick your brand colors and texture and watch the vise change instantly.' },
      { title: 'Upload logo', body: 'Place your logo and marking on the body — adjust size and position.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom vise to share with your team.' },
    ],
    mockupLabel: 'Live mockup preview',
    mockupBrand: 'Stavalk 6" Heavy-Duty',
    stepLabel: 'Step',
    boardLabel: 'YOUR BRAND',
    cta: 'Create Your Design',
  },
  es: {
    kicker: 'Diseña tu tornillo',
    title: 'Visualiza tu concepto de tornillo de banco antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca en un tornillo real: elige un acabado, observa cómo se actualiza el mockup en vivo y envíanos tu logo para un diseño completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba la paleta ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu diseño completo.',
    steps: [
      { title: 'Elige el modelo de tornillo', body: 'De plataformas de uso ligero a formas de uso intensivo, tubería y especial, cada una con proporciones realistas.' },
      { title: 'Selecciona el acabado', body: 'Elige tus colores y textura de marca y observa cómo el tornillo cambia al instante.' },
      { title: 'Sube tu logo', body: 'Coloca tu logo y tu marcado en el cuerpo: ajusta el tamaño y la posición.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu tornillo personalizado para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa del mockup en vivo',
    mockupBrand: 'Stavalk 6" uso intensivo',
    stepLabel: 'Paso',
    boardLabel: 'TU MARCA',
    cta: 'Crea tu diseño',
  },
  fr: {
    kicker: 'Concevez votre étau',
    title: 'Visualisez votre concept d\'étau d\'établi avant la production',
    sub: 'Aperçu de l\'aspect de votre marque sur un étau réel — choisissez une finition, regardez le mockup se mettre à jour en direct, puis envoyez-nous votre logo pour un design complet.',
    status: 'Aperçu interactif',
    statusBody: 'Essayez la palette dès maintenant, puis envoyez-nous votre idée — notre équipe créera un mockup gratuit de votre design complet.',
    steps: [
      { title: 'Choisir le modèle d\'étau', body: 'Des plateformes usage léger aux formes usage intensif, tuyauterie et spécial — chacune avec des proportions réalistes.' },
      { title: 'Sélectionner la finition', body: 'Choisissez les couleurs et la texture de votre marque et regardez l\'étau changer instantanément.' },
      { title: 'Téléverser le logo', body: 'Placez votre logo et votre marquage sur le corps — ajustez la taille et la position.' },
      { title: 'Générer le mockup', body: 'Exportez un aperçu de votre étau personnalisé à partager avec votre équipe.' },
    ],
    mockupLabel: 'Aperçu du mockup en direct',
    mockupBrand: 'Stavalk 6" usage intensif',
    stepLabel: 'Étape',
    boardLabel: 'VOTRE MARQUE',
    cta: 'Créer votre design',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Product Series',
    title: 'Bench Vise Series Available For Customization',
    sub: 'Each model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the jaw width, finish, colors and specs to your product.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each vise is built for you with your choices at every layer.',
    customPoints: ['Jaw width & opening', 'Colors & finish', 'Logo & marking', 'Accessories & packaging'],
  },
  es: {
    kicker: 'Series de producto',
    title: 'Series de tornillos de banco disponibles para personalización',
    sub: 'Cada modelo de abajo es una plataforma de fabricación. Elige uno como punto de partida y adaptaremos el ancho de mordaza, el acabado, los colores y las especificaciones a tu producto.',
    customTitle: 'Cada producto se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada tornillo se construye para ti con tus elecciones en cada capa.',
    customPoints: ['Anchura de mordaza y apertura', 'Colores y acabado', 'Logo y marcado', 'Accesorios y embalaje'],
  },
  fr: {
    kicker: 'Séries produit',
    title: 'Séries d\'étaux d\'établi disponibles pour la personnalisation',
    sub: 'Chaque modèle ci-dessous est une plateforme de fabrication. Choisissez-en un comme point de départ et nous adapterons la largeur de mâchoire, la finition, les couleurs et les spécifications à votre produit.',
    customTitle: 'Chaque produit peut être personnalisé',
    customBody: 'Rien ne part tel quel en l\'état. Chaque étau est construit pour vous avec vos choix à chaque couche.',
    customPoints: ['Largeur de mâchoire et ouverture', 'Couleurs et finition', 'Logo et marquage', 'Accessoires et packaging'],
  },
}

/* ─────────────────────────── catalog download (email capture) ─────────────────────────── */

export interface CatalogContent {
  kicker: string
  title: string
  body: string
  emailLabel: string
  emailPlaceholder: string
  submit: string
  secure: string
  successTitle: string
  successBody: string
}

export const catalogDownload: Localized<CatalogContent> = {
  en: {
    kicker: 'Product Catalog',
    title: 'Get the full catalog and MOQ sheet',
    body: 'All five series with specs, finish options, MOQ tiers, sample timing and packaging — sent to your inbox by our sales team within one business day.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourcompany.com',
    submit: 'Request the Catalog',
    secure: 'No spam. Only the catalog and answers to your project.',
    successTitle: 'Request received',
    successBody: 'Our sales team will send the full product catalog and MOQ sheet to {email} within one business day.',
  },
  es: {
    kicker: 'Catálogo de productos',
    title: 'Recibe el catálogo completo y la ficha de MOQ',
    body: 'Las cinco series con especificaciones, opciones de acabado, MOQ escalonados, tiempos de muestreo y embalaje — enviados a tu correo por nuestro equipo comercial en un día laborable.',
    emailLabel: 'Correo de trabajo',
    emailPlaceholder: 'tu@tuempresa.com',
    submit: 'Solicitar el catálogo',
    secure: 'Sin spam. Solo el catálogo y respuestas sobre tu proyecto.',
    successTitle: 'Solicitud recibida',
    successBody: 'Nuestro equipo comercial enviará el catálogo completo y la ficha de MOQ a {email} en un día laborable.',
  },
  fr: {
    kicker: 'Catalogue produits',
    title: 'Recevez le catalogue complet et la fiche de MOQ',
    body: 'Les cinq séries avec spécifications, options de finition, paliers de MOQ, délais d\'échantillonnage et packaging — envoyés dans votre boîte mail par notre équipe commerciale sous un jour ouvrable.',
    emailLabel: 'E-mail professionnel',
    emailPlaceholder: 'vous@votreentreprise.com',
    submit: 'Demander le catalogue',
    secure: 'Pas de spam. Uniquement le catalogue et les réponses concernant votre projet.',
    successTitle: 'Demande reçue',
    successBody: 'Notre équipe commerciale enverra le catalogue produit complet et la fiche de MOQ à {email} sous un jour ouvrable.',
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Customized Bench Vise Projects',
    title: 'Customized Bench Vise Projects',
    sub: 'A look at how bench vise products come to life — from client requirements to finished vises.',
    note: 'Want your project featured here? Start a conversation and let’s design it together.',
  },
  es: {
    kicker: 'Proyectos de tornillos de banco personalizados',
    title: 'Proyectos de tornillos de banco personalizados',
    sub: 'Una mirada a cómo los productos de tornillos de banco cobran vida: de los requisitos del cliente a los tornillos terminados.',
    note: '¿Quieres que tu proyecto aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
  },
  fr: {
    kicker: 'Projets d\'étaux d\'établi personnalisés',
    title: 'Projets d\'étaux d\'établi personnalisés',
    sub: 'Un aperçu de la façon dont les produits d\'étaux d\'établi prennent vie — des exigences des clients aux étaux finis.',
    note: 'Vous souhaitez voir votre projet mis en avant ici ? Engagez la conversation et concevons-le ensemble.',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'Custom Bench Vise Solutions For Your Business',
    sub: 'Whether you need branded vises for your organization or customized bench vise products for your business, we help turn requirements into finished products.',
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones de tornillos de banco personalizados para tu negocio',
    sub: 'Ya sea que necesites tornillos con marca para tu organización o productos de tornillos de banco personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
  },
  fr: {
    kicker: 'Besoins des clients',
    title: 'Solutions d\'étaux d\'établi sur mesure pour votre entreprise',
    sub: 'Que vous ayez besoin d\'étaux à votre marque pour votre organisation ou de produits d\'étau d\'établi personnalisés pour votre activité, nous vous aidons à transformer vos exigences en produits finis.',
  },
}

/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake, engineering review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your spec, reference vise or drawings. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Recepción de requisitos, revisión de ingeniería, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, un tornillo de referencia o planos. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
  fr: {
    kicker: 'Processus de développement',
    title: 'De la spécification au produit fini',
    sub: 'Collecte des exigences, revue d\'ingénierie, échantillonnage, production et export — chaque étape au sein de notre propre usine.',
    consultTitle: 'Commencez par une revue de spécification',
    consultBody: 'Envoyez-nous votre spécification, un étau de référence ou des plans. Nous vous retournons une évaluation de fabricabilité et un devis, sans engagement.',
  },
}

/* ─────────────────────────── signature series (home) ─────────────────────────── */

export interface SeriesItem {
  title: string
  sku: string
  body: string
  image: string
  href: string
}

export interface SeriesContent {
  kicker: string
  title: string
  sub: string
  items: SeriesItem[]
}

export const series: Localized<SeriesContent> = {
  en: {
    kicker: 'Signature Series',
    title: 'Bench Vise Series',
    sub: 'Five manufacturing series ready for your private label — light-duty, medium-duty, heavy-duty, pipe and specialty, each configurable to your specs.',
    items: [
      {
        title: 'Light-Duty Series (Home Workshop)',
        sku: 'VISE-LD4',
        body: 'Compact cast-iron vises with a fixed or movable anvil plate and hardened serrated jaws — ideal for home, hobby and craft work.',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        href: '/products/vise-light-4',
      },
      {
        title: 'Medium-Duty Series (Professional Workshops)',
        sku: 'VISE-MD6',
        body: 'Versatile ductile-iron vises with replaceable hardened jaws and anvils — trusted for workshops, schools and light fabrication.',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        href: '/products/vise-medium-6',
      },
      {
        title: 'Heavy-Duty Series (Forged Steel)',
        sku: 'VISE-HD6',
        body: 'Forged-steel bodies with jaws hardened to 58–62 HRC and high clamping force — built for metalworking, fabrication and industrial maintenance.',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        href: '/products/vise-heavy-6',
      },
      {
        title: 'Pipe Series (Plumbing & Fitting)',
        sku: 'VISE-PP4',
        body: 'Self-centering V-jaws for pipe, tubing and irregular stock — built for plumbers, fitters and daily shop use.',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        href: '/products/vise-pipe-4',
      },
      {
        title: 'Specialty Series (Positioning & Finishing)',
        sku: 'VISE-SP01',
        body: 'ADI swivel, round-anvil and plier-style vises for angled clamping, finishing and production benchwork.',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        href: '/products/vise-specialty-swivel',
      },
    ],
  },
  es: {
    kicker: 'Serie insignia',
    title: 'Series de tornillos de banco',
    sub: 'Cinco series de fabricación listas para tu marca propia — uso ligero, medio, intensivo, tubería y especial, cada una configurable según tu especificación.',
    items: [
      {
        title: 'Serie de uso ligero (taller casero)',
        sku: 'VISE-LD4',
        body: 'Tornillos compactos de hierro fundido con placa de yunque fija o móvil y mordazas dentadas templadas — ideales para el hogar, el hobby y la artesanía.',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        href: '/products/vise-light-4',
      },
      {
        title: 'Serie de uso medio (talleres profesionales)',
        sku: 'VISE-MD6',
        body: 'Tornillos versátiles de hierro dúctil con mordazas templadas reemplazables y yunques — confiables para talleres, escuelas y fabricación ligera.',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        href: '/products/vise-medium-6',
      },
      {
        title: 'Serie de uso intensivo (acero forjado)',
        sku: 'VISE-HD6',
        body: 'Cuerpos de acero forjado con mordazas templadas a 58–62 HRC y alta fuerza de cierre — construidos para metalurgia, fabricación y mantenimiento industrial.',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        href: '/products/vise-heavy-6',
      },
      {
        title: 'Serie de tubería (fontanería y ajuste)',
        sku: 'VISE-PP4',
        body: 'Mordazas en V autocentrantes para tubería, tubo y material irregular — pensadas para fontaneros, instaladores y el uso diario del taller.',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        href: '/products/vise-pipe-4',
      },
      {
        title: 'Serie especial (posicionamiento y acabado)',
        sku: 'VISE-SP01',
        body: 'Tornillos giratorios ADI, de yunque redondo y alicates para sujeción en ángulo, acabado y trabajo de banco de producción.',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        href: '/products/vise-specialty-swivel',
      },
    ],
  },
  fr: {
    kicker: 'Série signature',
    title: 'Séries d\'étaux d\'établi',
    sub: 'Cinq séries de fabrication prêtes pour votre marque blanche — usage léger, moyen, intensif, tuyauterie et spécial, chacune configurable selon votre spécification.',
    items: [
      {
        title: 'Série usage léger (atelier maison)',
        sku: 'VISE-LD4',
        body: 'Étaux compacts en fonte avec plaque d’enclume fixe ou mobile et mâchoires striées trempées — idéaux pour la maison, le hobby et l’artisanat.',
        image: 'https://assets.Stavalk.com/site/products/2026/light-duty/light-duty-01.jpg',
        href: '/products/vise-light-4',
      },
      {
        title: 'Série usage moyen (ateliers professionnels)',
        sku: 'VISE-MD6',
        body: 'Étaux polyvalents en fonte ductile avec mâchoires trempées remplaçables et enclumes — fiables pour les ateliers, les écoles et la fabrication légère.',
        image: 'https://assets.Stavalk.com/site/products/2026/medium-duty/medium-duty-01.jpg',
        href: '/products/vise-medium-6',
      },
      {
        title: 'Série usage intensif (acier forgé)',
        sku: 'VISE-HD6',
        body: 'Corps en acier forgé avec mâchoires trempées à 58–62 HRC et force de serrage élevée — conçus pour le travail des métaux, la fabrication et la maintenance industrielle.',
        image: 'https://assets.Stavalk.com/site/products/2026/heavy-duty/heavy-duty-01.jpg',
        href: '/products/vise-heavy-6',
      },
      {
        title: 'Série tuyauterie (plomberie et ajustage)',
        sku: 'VISE-PP4',
        body: 'Mâchoires en V auto-centrantes pour tuyaux, tubes et profilés irréguliers — conçues pour les plombiers, les monteurs et l’usage quotidien en atelier.',
        image: 'https://assets.Stavalk.com/site/products/2026/pipe/pipe-01.jpg',
        href: '/products/vise-pipe-4',
      },
      {
        title: 'Série spéciale (positionnement et finition)',
        sku: 'VISE-SP01',
        body: 'Étaux pivotants ADI, à enclume ronde et pinces pour le bridage en angle, la finition et le travail d’établi de production.',
        image: 'https://assets.Stavalk.com/site/products/2026/specialty/specialty-01.webp',
        href: '/products/vise-specialty-swivel',
      },
    ],
  },
}
