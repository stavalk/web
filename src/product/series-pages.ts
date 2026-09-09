import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Series-level product pages (/products/{series}).
 *
 * Five bench vise manufacturing categories, each targeting buyer-facing
 * long-tail queries ("custom heavy-duty bench vise OEM", "private label pipe
 * vise manufacturer", etc.). The pages aggregate every product of the series,
 * add series-level B2B context (MOQ, lead time, customization) and funnel
 * to /contact with the series prefilled.
 */

export interface SeriesPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  faqs: { q: string; a: string }[]
}

export const seriesPages: Localized<SeriesPageData[]> = {
  en: [
    {
      slug: 'light-duty',
      navLabel: 'Light-Duty Vises',
      metaTitle: 'Custom Light-Duty Bench Vises — OEM Manufacturer | Stavalk',
      metaDescription:
        'Custom light-duty bench vises manufactured under your brand — 4″-5″ jaw, 1200-1500 lbs clamping force, OEM/ODM volume from 50-200 pcs. Factory direct from Qingdao, China.',
      kicker: 'Series · Light-Duty',
      h1: 'Custom Light-Duty Bench Vises — Compact Vises for Hobbyists and DIY',
      intro: [
        'Light-duty bench vises are the entry point for hobbyists, home workshops and DIY enthusiasts: compact 4″-5″ jaw widths, 1200-1500 lbs clamping force, and 360° swivel bases that handle a wide range of light clamping tasks — woodworking, electronics assembly, craft projects, and light metalwork.',
        'We manufacture light-duty vises under your brand from 50-200 pcs per model, with sample units available in 7-14 days. Body casting (HT200 gray cast iron), jaw inserts, handle style, swivel base, finish and packaging are specified per project.',
      ],
      faqs: [
        {
          q: 'Can I customize a light-duty bench vise for my brand?',
          a: 'Yes. Every light-duty vise is a manufacturing base — you specify jaw width (4″ or 5″), jaw face pattern (serrated or smooth), body color, handle style (sliding T-handle or Tommy bar), swivel base angle, logo placement (laser engraving, casting mark or label) and packaging. Custom tooling runs from 200+ pcs; standard models from 50 pcs.',
        },
        {
          q: 'What is the MOQ for light-duty bench vises?',
          a: 'Standard models start from 50 pcs; custom-tooling runs from 200+ pcs per model. Samples ship in 7-14 days and bulk production runs 25-35 days after confirmed PO and deposit.',
        },
        {
          q: 'What materials are used in light-duty vises?',
          a: 'HT200 gray cast iron bodies with hardened steel jaw inserts (58-62 HRC). Swivel bases are cast iron with chrome-plated locking handles. Powder coat or spray paint finishes in your brand color.',
        },
        {
          q: 'What certifications do your light-duty vises carry?',
          a: 'CE marking, ISO 9001:2015 quality management, and RoHS compliance. Product testing includes jaw hardness verification, clamping force testing and cyclic durability testing (10,000+ open/close cycles).',
        },
      ],
    },
    {
      slug: 'medium-duty',
      navLabel: 'Medium-Duty Vises',
      metaTitle: 'Custom Medium-Duty Bench Vises — Workshop OEM | Stavalk',
      metaDescription:
        'Custom medium-duty bench vises for workshops, auto repair and fabrication — 6″-8″ jaw, 3000-4000 lbs clamping force, hardened jaws, OEM volume from 50-200 pcs.',
      kicker: 'Series · Medium-Duty',
      h1: 'Custom Medium-Duty Bench Vises — Workshop Vises for General Metalworking',
      intro: [
        'Medium-duty vises are the workhorse of the workshop: 6″-8″ jaw widths, 3000-4000 lbs clamping force, replaceable hardened jaw faces and optional pipe jaws for round stock. They serve auto repair shops, general fabrication, metalworking and maintenance operations.',
        'We manufacture medium-duty platforms under your brand from 50-200 pcs per model, with HT250 gray cast iron bodies, precision-ground jaw faces and optional pipe jaw inserts for round workpieces.',
      ],
      faqs: [
        {
          q: 'What jaw configurations are available?',
          a: 'Standard 6″ and 8″ jaw widths with flat serrated jaws and optional pipe jaw inserts (1/2″-3″ pipe capacity). Jaw faces are hardened to 58-62 HRC and replaceable — your customers can refresh the gripping surface without replacing the whole vise.',
        },
        {
          q: 'Can I specify the swivel base angle?',
          a: 'Yes. Standard 360° swivel with positive-locking handle, or fixed base for applications that don\'t need rotation. Base locking mechanism, handle length and knob style are all specifiable.',
        },
        {
          q: 'What is the MOQ for medium-duty vises?',
          a: 'Standard models from 50 pcs; custom-tooling runs from 200+ pcs per model. Samples ship in 7-14 days and bulk production runs 25-35 days after confirmed PO and deposit.',
        },
        {
          q: 'What makes your medium-duty vises suitable for auto repair?',
          a: 'High clamping force (3000-4000 lbs), replaceable hardened jaw faces for gripping irregular parts, pipe jaw inserts for round tubing and a wide anvil surface for light hammering. Reinforced swivel base handles directional clamping forces common in auto repair.',
        },
      ],
    },
    {
      slug: 'heavy-duty',
      navLabel: 'Heavy-Duty Vises',
      metaTitle: 'Custom Heavy-Duty Bench Vises — Industrial OEM | Stavalk',
      metaDescription:
        'Custom heavy-duty bench vises for industrial fabrication, mining and shipbuilding — 8″-10″ jaw, 6000-8000 lbs force, forged steel, OEM volume from 20-50 pcs.',
      kicker: 'Series · Heavy-Duty',
      h1: 'Custom Heavy-Duty Bench Vises — Industrial-Grade Clamping for Extreme Applications',
      intro: [
        'Heavy-duty vises are built for the toughest jobs: 8″-10″ jaw widths, 6000-8000 lbs clamping force, forged carbon steel bodies and replaceable hardened jaw inserts. They serve heavy fabrication shops, mining equipment maintenance, shipyards and steel structure fabrication.',
        'We manufacture heavy-duty vises under your brand from 20-50 pcs per model, with forged 45# carbon steel bodies, anvil surfaces for hammering and corrosion-resistant coatings for harsh environments.',
      ],
      faqs: [
        {
          q: 'What is the difference between cast iron and forged steel vises?',
          a: 'Forged steel (45# carbon steel) vises offer significantly higher tensile strength and impact resistance than cast iron — essential for heavy-duty applications where extreme clamping forces and shock loads are common. Forged bodies resist cracking under overload.',
        },
        {
          q: 'Can heavy-duty vises be customized for specific industries?',
          a: 'Yes. Mining, shipyard and heavy fabrication customers specify jaw width, anvil shape, corrosion-resistant coatings, handle length and branding. We also produce vises with extended throat depth for deep-reach clamping.',
        },
        {
          q: 'What is the MOQ for heavy-duty vises?',
          a: 'From 20 pcs per model for standard heavy-duty units; custom-tooling runs from 50+ pcs. Samples ship in 7-14 days and production runs 25-35 days after confirmed PO.',
        },
        {
          q: 'How durable are heavy-duty vises under daily industrial use?',
          a: 'Our heavy-duty vises pass cyclic durability testing (10,000+ open/close cycles), salt spray corrosion testing (48+ hours) and clamping force verification at 120% of rated capacity. Replaceable jaw inserts extend service life significantly.',
        },
      ],
    },
    {
      slug: 'pipe',
      navLabel: 'Pipe Vises',
      metaTitle: 'Custom Pipe Vises — Chain & Tripod OEM | Stavalk',
      metaDescription:
        'Custom pipe vises for plumbing, pipe fitting and oil & gas — chain and tripod styles, 1/4″-6″ pipe capacity, serrated V-jaws, OEM volume from 20-100 pcs.',
      kicker: 'Series · Pipe Vises',
      h1: 'Custom Pipe Vises — Specialized Workholding for Pipe Fitting',
      intro: [
        'Pipe vises are purpose-built for gripping round pipe and tubing: chain-style for bench mounting and heavy pipe work, tripod-style for portable and field use. Serrated V-jaws hold pipe securely without crushing, and quick-release mechanisms speed up repositioning.',
        'We manufacture pipe vises under your brand in chain and tripod configurations, covering 1/4″ to 6″ pipe capacity for plumbing, HVAC, oil & gas and fire protection applications.',
      ],
      faqs: [
        {
          q: 'What is the difference between chain pipe vises and tripod pipe vises?',
          a: 'Chain pipe vises mount to a bench or stand and use a chain-and-screw mechanism for maximum holding power — ideal for heavy pipe and repeated use in shops. Tripod pipe vises are freestanding and portable — preferred for field work, job sites and mobile pipe fitting.',
        },
        {
          q: 'What pipe sizes can your vises handle?',
          a: 'Standard models cover 1/4″ to 6″ pipe capacity across multiple vise sizes. Jaw geometry and chain length are matched to the target pipe range. Custom capacities for larger or smaller pipe are available.',
        },
        {
          q: 'Can pipe vises be branded with our logo?',
          a: 'Yes. Logo laser engraving, casting marks, color-matched powder coating and branded packaging are standard customization options. Tripod legs can be color-coded per your brand palette.',
        },
        {
          q: 'What is the MOQ for pipe vises?',
          a: 'Chain pipe vises from 20 pcs; tripod pipe vises from 50 pcs. Samples in 7-14 days, production in 25-35 days after confirmed PO.',
        },
      ],
    },
    {
      slug: 'specialty',
      navLabel: 'Specialty Vises',
      metaTitle: 'Custom Specialty Vises — Precision & Machine OEM | Stavalk',
      metaDescription:
        'Custom precision and machine vises — cross-slide, milling, drill press and CNC vises with 0.001″ accuracy, hardened ground steel, OEM volume from 20-50 pcs.',
      kicker: 'Series · Specialty',
      h1: 'Custom Specialty Vises — Precision Workholding for Machining and Milling',
      intro: [
        'Specialty vises serve precision machining applications: cross-slide vises for compound positioning, milling vises for CNC table mounting, drill press vises for centered hole work and machine vises with double-locking mechanisms for production environments. All feature precision-ground hardened steel for 0.001″ accuracy.',
        'We manufacture specialty vises under your brand from 20-50 pcs per model, with hardened and ground GCr15 bearing steel or Cr12MoV tool steel jaw faces, Kurt-style bodies and double-locking mechanisms.',
      ],
      faqs: [
        {
          q: 'What accuracy can your specialty vises achieve?',
          a: 'Precision-ground jaw faces and bodies deliver parallelism within 0.001″ (0.025mm). All vises are inspected on CMM coordinate measuring machines before shipment, with inspection certificates available.',
        },
        {
          q: 'What types of specialty vises do you manufacture?',
          a: 'Cross-slide vises (compound X-Y positioning), milling machine vises (Kurt-style, single or double station), drill press vises (centered clamping), CNC machine vises (high-speed, double-locking) and custom workholding solutions.',
        },
        {
          q: 'Can specialty vises be customized for our CNC machines?',
          a: 'Yes. We match T-slot dimensions, mounting bolt patterns and jaw profiles to your specific CNC table and workpiece requirements. Custom jaw inserts (soft aluminum, V-groove, contoured) are common.',
        },
        {
          q: 'What is the MOQ for specialty vises?',
          a: 'From 20 pcs for standard precision vises; custom-tooling runs from 50+ pcs. Samples in 7-14 days, production in 25-35 days after confirmed PO.',
        },
      ],
    },
  ],
  es: [
    {
      slug: 'light-duty',
      navLabel: 'Mordazas ligeras',
      metaTitle: 'Mordazas de banco ligeras personalizadas — Fabricante OEM | Stavalk',
      metaDescription:
        'Mordazas de banco ligeras personalizadas bajo tu marca — boca 4″-5″, fuerza de sujeción 1200-1500 lbs, OEM/ODM desde 50-200 uds. Fábrica directa de Qingdao, China.',
      kicker: 'Serie · Ligera',
      h1: 'Mordazas de banco ligeras personalizadas — Compactas para aficionados y bricolaje',
      intro: [
        'Las mordazas ligeras son el punto de entrada para aficionados, talleres caseros y bricolaje: bocas compactas de 4″-5″, fuerza de sujeción de 1200-1500 lbs y bases giratorias de 360° que manejan una amplia gama de tareas de sujeción ligera — carpintería, montaje electrónico, proyectos de manualidades y metalurgia ligera.',
        'Fabricamos mordazas ligeras bajo tu marca desde 50-200 uds. por modelo, con muestras disponibles en 7-14 días. Fundición del cuerpo (hierro gris HT200), insertos de mordaza, estilo de manija, base giratoria, acabado y embalaje se especifican por proyecto.',
      ],
      faqs: [
        {
          q: '¿Puedo personalizar una mordaza ligera para mi marca?',
          a: 'Sí. Cada mordaza ligera es una base de fabricación: especificas ancho de boca (4″ o 5″), patrón de superficie (ranurada o lisa), color del cuerpo, estilo de manija, ángulo de la base giratoria, colocación del logo y embalaje.',
        },
        {
          q: '¿Cuál es el pedido mínimo para mordazas ligeras?',
          a: 'Modelos estándar desde 50 uds.; utillaje personalizado desde 200+ uds. Las muestras se envían en 7-14 días y la producción en serie tarda 25-35 días tras el PO y depósito confirmados.',
        },
        {
          q: '¿Qué materiales se utilizan?',
          a: 'Cuerpos de hierro gris HT200 con insertos de acero endurecido (58-62 HRC). Bases giratorias de fundición con manijas cromadas. Acabados en polvo o pintura en el color de tu marca.',
        },
        {
          q: '¿Qué certificaciones tienen?',
          a: 'Marcado CE, ISO 9001:2015 y cumplimiento RoHS. Pruebas de dureza de mordaza, fuerza de sujeción y resistencia cíclica (10.000+ ciclos).',
        },
      ],
    },
    {
      slug: 'medium-duty',
      navLabel: 'Mordazas medias',
      metaTitle: 'Mordazas de banco medias personalizadas — Taller OEM | Stavalk',
      metaDescription:
        'Mordazas de banco medias para talleres, reparación auto y fabricación — boca 6″-8″, 3000-4000 lbs, mordazas endurecidas, OEM desde 50-200 uds.',
      kicker: 'Serie · Media',
      h1: 'Mordazas de banco medias personalizadas — Para metalurgia general',
      intro: [
        'Las mordazas medias son el caballo de batalla del taller: bocas de 6″-8″, fuerza de sujeción de 3000-4000 lbs, caras de mordaza endurecidas reemplazables y mordazas para tubo opcionales. Sirven para talleres de reparación automotriz, fabricación general y operaciones de mantenimiento.',
        'Fabricamos mordazas medias bajo tu marca desde 50-200 uds. por modelo, con cuerpos de hierro gris HT250 y caras de mordaza rectificadas con precisión.',
      ],
      faqs: [
        {
          q: '¿Qué configuraciones de boca están disponibles?',
          a: 'Bocas estándar de 6″ y 8″ con mordazas planas ranuradas y mordazas para tubo opcionales (capacidad 1/2″-3″). Las caras de mordaza se endurecen a 58-62 HRC y son reemplazables.',
        },
        {
          q: '¿Puedo especificar el ángulo de la base giratoria?',
          a: 'Sí. Base giratoria estándar de 360° con mecanismo de bloqueo positivo, o base fija para aplicaciones que no necesitan rotación.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'Modelos estándar desde 50 uds.; utillaje personalizado desde 200+ uds. Muestras en 7-14 días, producción en 25-35 días.',
        },
        {
          q: '¿Por qué son adecuadas para reparación automotriz?',
          a: 'Alta fuerza de sujeción (3000-4000 lbs), caras reemplazables para piezas irregulares, mordazas para tubo y superficie de yunque para golpes ligeros.',
        },
      ],
    },
    {
      slug: 'heavy-duty',
      navLabel: 'Mordazas pesadas',
      metaTitle: 'Mordazas de banco pesadas personalizadas — Industrial OEM | Stavalk',
      metaDescription:
        'Mordazas de banco pesadas para fabricación industrial, minería y astilleros — boca 8″-10″, 6000-8000 lbs, acero forjado, OEM desde 20-50 uds.',
      kicker: 'Serie · Pesada',
      h1: 'Mordazas de banco pesadas personalizadas — Grado industrial para aplicaciones extremas',
      intro: [
        'Las mordazas pesadas están construidas para los trabajos más difíciles: bocas de 8″-10″, fuerza de sujeción de 6000-8000 lbs, cuerpos de acero forjado al carbono 45# e insertos de mordaza endurecidos reemplazables. Sirven para talleres de fabricación pesada, mantenimiento de equipo minero y astilleros.',
        'Fabricamos mordazas pesadas bajo tu marca desde 20-50 uds. por modelo, con superficies de yunque para martillado y recubrimientos resistentes a la corrosión.',
      ],
      faqs: [
        {
          q: '¿Qué diferencia hay entre mordazas de hierro y de acero forjado?',
          a: 'El acero forjado (45# al carbono) ofrece resistencia a la tracción y resistencia al impacto significativamente superiores al hierro gris — esencial para aplicaciones pesadas donde se ejercen fuerzas extremas y cargas de choque.',
        },
        {
          q: '¿Se pueden personalizar para industrias específicas?',
          a: 'Sí. Los clientes de minería, astilleros y fabricación pesada especifican ancho de boca, forma de yunque, recubrimientos anticorrosivos, largo de manija y marca.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'Desde 20 uds. por modelo; utillaje personalizado desde 50+ uds. Muestras en 7-14 días, producción en 25-35 días.',
        },
        {
          q: '¿Qué tan duraderas son bajo uso industrial diario?',
          a: 'Pruebas de resistencia cíclica (10.000+ ciclos), prueba de salmuera (48+ horas) y verificación de fuerza de sujeción al 120% de la capacidad nominal.',
        },
      ],
    },
    {
      slug: 'pipe',
      navLabel: 'Mordazas para tubo',
      metaTitle: 'Mordazas para tubo personalizadas — Cadena y trípode OEM | Stavalk',
      metaDescription:
        'Mordazas para tubo para plomería, gas y petróleo — estilos cadena y trípode, capacidad 1/4″-6″, OEM desde 20-100 uds.',
      kicker: 'Serie · Tubo',
      h1: 'Mordazas para tubo personalizadas — Sujección especializada para instalación de tubería',
      intro: [
        'Las mordazas para tubo están diseñadas específicamente para sujetar tubo redondo: estilo cadena para montaje en banco y trabajo pesado, estilo trípode para uso portátil y de campo. Las mandíbulas V ranuradas sujetan el tubo firmemente sin aplastarlo.',
        'Fabricamos mordazas para tubo bajo tu marca en configuraciones de cadena y trípode, cubriendo capacidad de 1/4″ a 6″ para plomería, HVAC, petróleo y gas y protección contra incendios.',
      ],
      faqs: [
        {
          q: '¿Cuál es la diferencia entre cadena y trípode?',
          a: 'La de cadena se monta en banco y usa mecanismo de cadena y tornillo para máxima fuerza de retención. La de trípode es independiente y portátil, preferida para trabajo en campo y instalaciones móviles.',
        },
        {
          q: '¿Qué tamaños de tubo manejan?',
          a: 'Modelos estándar cubren 1/4″ a 6″ de capacidad. Capacidades personalizadas para tubo más grande o más pequeño están disponibles.',
        },
        {
          q: '¿Se pueden personalizar con nuestro logo?',
          a: 'Sí. Grabado láser, marcas de fundición, acabado en polvo y embalaje personalizado son opciones estándar.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'Cadena desde 20 uds.; trípode desde 50 uds. Muestras en 7-14 días, producción en 25-35 días.',
        },
      ],
    },
    {
      slug: 'specialty',
      navLabel: 'Mordazas especiales',
      metaTitle: 'Mordazas especiales personalizadas — Precisión y máquina OEM | Stavalk',
      metaDescription:
        'Mordazas de precisión y máquina personalizadas — cruz, fresadora, taladro y CNC con precisión 0.001″, OEM desde 20-50 uds.',
      kicker: 'Serie · Especial',
      h1: 'Mordazas especiales personalizadas — Sujección de precisión para mecanizado y fresado',
      intro: [
        'Las mordazas especiales sirven para aplicaciones de mecanizado de precisión: mordazas de cruces para posicionamiento compuesto, mordazas de fresadora para montaje en mesa CNC y mordazas de taladro para taladrado centrado. Todas cuentan con acero endurecido y rectificado para precisión de 0.001″.',
        'Fabricamos mordazas especiales bajo tu marca desde 20-50 uds. por modelo, con caras de acero endurecido GCr15 o Cr12MoV y mecanismos de doble bloqueo.',
      ],
      faqs: [
        {
          q: '¿Qué precisión logran?',
          a: 'Paralelismo dentro de 0.001″ (0.025mm). Todas las mordazas se inspeccionan en máquinas de medición por coordenadas (CMM) antes del envío.',
        },
        {
          q: '¿Qué tipos fabrican?',
          a: 'Mordazas de cruces (posicionamiento X-Y), fresadoras (estilo Kurt), taladros (sujección centrada) y CNC (alta velocidad, doble bloqueo).',
        },
        {
          q: '¿Se pueden personalizar para nuestras máquinas CNC?',
          a: 'Sí. Ajustamos dimensiones de T-slot, patrones de pernos y perfiles de mandíbula a sus requisitos específicos.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'Desde 20 uds. para mordazas de precisión estándar; utillaje desde 50+ uds. Muestras en 7-14 días, producción en 25-35 días.',
        },
      ],
    },
  ],
  fr: [
    {
      slug: 'light-duty',
      navLabel: 'Étaux légers',
      metaTitle: "Étaux d'établi légers personnalisés — Fabricant OEM | Stavalk",
      metaDescription:
        "Étaux d'établi légers personnalisés sous votre marque — mâchoires 4″-5″, force de serrage 1200-1500 lbs, OEM/ODM dès 50-200 pcs. Usine directe de Qingdao, Chine.",
      kicker: 'Série · Léger',
      h1: "Étaux d'établi légers personnalisés — Compacts pour bricoleurs et passionnés",
      intro: [
        "Les étaux d'établi légers sont le point d'entrée pour les bricoleurs, ateliers domestiques et passionnés de DIY : largeurs de mâchoires compactes de 4″-5″, force de serrage de 1200-1500 lbs et bases orientables à 360° qui gèrent un large éventail de tâches de serrage légères — ébénisterie, montage d'électronique, projets d'artisanat et métallurgie légère.",
        "Nous fabriquons des étaux légers sous votre marque dès 50-200 pièces par modèle, avec des échantillons disponibles en 7-14 jours. Le corps est coulé en fonte grise HT200 ; les inserts de mâchoires, le style de manivelle, la base orientable, la finition et l'emballage sont spécifiés par projet.",
      ],
      faqs: [
        {
          q: 'Puis-je personnaliser un étau d\'établi léger pour ma marque ?',
          a: "Oui. Chaque étau léger est une base de fabrication : vous spécifiez la largeur de mâchoire (4″ ou 5″), le motif de surface (serré ou lisse), la couleur du corps, le style de manivelle (T à glissière ou barre), l'angle de la base orientable, le positionnement du logo (gravure laser, marque de moulage ou étiquette) et l'emballage. L'outillage personnalisé commence à 200+ pcs ; les modèles standard à 50 pcs.",
        },
        {
          q: 'Quel est le MOQ pour les étaux d\'établi légers ?',
          a: "Les modèles standard commencent à 50 pcs ; les outillages personnalisés à 200+ pcs par modèle. Les échantillons sont expédiés en 7-14 jours et la production en série prend 25-35 jours après confirmation du PO et du versement.",
        },
        {
          q: 'Quels matériaux sont utilisés dans les étaux légers ?',
          a: "Corps en fonte grise HT200 avec inserts en acier durci (58-62 HRC). Bases orientables en fonte avec manivelles chromées. Finition en poudre ou peinture dans la couleur de votre marque.",
        },
        {
          q: 'Quelles certifications portent vos étaux légers ?',
          a: "Marquage CE, gestion de la qualité ISO 9001:2015 et conformité RoHS. Les tests incluent la vérification de la dureté des mâchoires, la vérification de la force de serrage et les tests de durabilité cyclique (10 000+ cycles ouverture/fermeture).",
        },
      ],
    },
    {
      slug: 'medium-duty',
      navLabel: 'Étaux moyens',
      metaTitle: "Étaux d'établi moyens personnalisés — Atelier OEM | Stavalk",
      metaDescription:
        "Étaux d'établi moyens pour ateliers, réparation automobile et fabrication — mâchoires 6″-8″, force de serrage 3000-4000 lbs, mâchoires durcies, OEM dès 50-200 pcs.",
      kicker: 'Série · Moyen',
      h1: "Étaux d'établi moyens personnalisés — Pour la métallurgie générale",
      intro: [
        "Les étaux moyens sont le cheval de bataille de l'atelier : largeurs de mâchoires de 6″-8″, force de serrage de 3000-4000 lbs, faces de mâchoires durcies et remplacables, et mâchoires à tube en option pour les barres rondes. Ils répondent aux ateliers de réparation automobile, à la fabrication générale, à la métallurgie et aux opérations de maintenance.",
        "Nous fabriquons des plateformes moyennes sous votre marque dès 50-200 pièces par modèle, avec des corps en fonte grise HT250, des faces de mâchoires rectifiées avec précision et des inserts de mâchoires à tube en option pour les pièces rondes.",
      ],
      faqs: [
        {
          q: 'Quelles configurations de mâchoires sont disponibles ?',
          a: "Largeurs de mâchoires standard de 6″ et 8″ avec mâchoires plates à rainures et inserts de mâchoires à tube en option (capacité de 1/2″ à 3″). Les faces des mâchoires sont durcies à 58-62 HRC et remplacables — vos clients peuvent renouveler la surface de prise sans changer tout l'étau.",
        },
        {
          q: 'Puis-je spécifier l\'angle de la base orientable ?',
          a: "Oui. Base orientable standard à 360° avec levier de blocage à enclenchement positif, ou base fixe pour les applications qui ne nécessitent pas de rotation. Le mécanisme de blocage, la longueur du levier et le style de poignée sont tous spécifiables.",
        },
        {
          q: 'Quel est le MOQ pour les étaux moyens ?',
          a: "Les modèles standard à partir de 50 pcs ; les outillages personnalisés à partir de 200+ pcs par modèle. Les échantillons sont expédiés en 7-14 jours et la production en série prend 25-35 jours après confirmation du PO et du versement.",
        },
        {
          q: 'Qu\'est-ce qui rend vos étaux moyens adaptés à la réparation automobile ?',
          a: "Forte force de serrage (3000-4000 lbs), faces de mâchoires durcies remplaçables pour saisir des pièces irrégulières, inserts de mâchoires à tube pour tuyauterie ronde et surface d'enclume large pour le martelage léger. La base orientable renforcée supporte les forces de serrage directionnelles courantes en réparation automobile.",
        },
      ],
    },
    {
      slug: 'heavy-duty',
      navLabel: 'Étaux lourds',
      metaTitle: "Étaux d'établi lourds personnalisés — Industriel OEM | Stavalk",
      metaDescription:
        "Étaux d'établi lourds pour fabrication industrielle, mines et chantiers navals — mâchoires 8″-10″, force 6000-8000 lbs, acier forgé, OEM dès 20-50 pcs.",
      kicker: 'Série · Lourd',
      h1: "Étaux d'établi lourds personnalisés — Grade industriel pour applications extrêmes",
      intro: [
        "Les étaux lourds sont conçus pour les travaux les plus exigeants : largeurs de mâchoires de 8″-10″, force de serrage de 6000-8000 lbs, corps en acier au carbone forgé et inserts de mâchoires durcis et remplacables. Ils répondent aux ateliers de fabrication lourde, à la maintenance d'équipements miniers, aux chantiers navals et à la fabrication de structures métalliques.",
        "Nous fabriquons des étaux lourds sous votre marque dès 20-50 pièces par modèle, avec des corps en acier au carbone 45# forgé, des surfaces d'enclume pour le martelage et des revêtements anticorrosifs pour les environnements difficiles.",
      ],
      faqs: [
        {
          q: 'Quelle est la différence entre les étaux en fonte et en acier forgé ?',
          a: "Les étaux en acier forgé (acier au carbone 45#) offrent une résistance à la traction et une résistance aux chocs nettement supérieures à celles de la fonte — essentiel pour les applications lourdes où les forces de serrage extrêmes et les charges de choc sont fréquentes. Les corps forgés résistent à la fissuration en cas de surcharge.",
        },
        {
          q: 'Les étaux lourds peuvent-ils être personnalisés pour des industries spécifiques ?',
          a: "Oui. Les clients des secteurs miniers, navals et de la fabrication lourde spécifient la largeur de mâchoire, la forme de l'enclume, les revêtements anticorrosifs, la longueur du levier et le marquage. Nous produisons également des étaux avec une profondeur de gorge étendue pour un serrage en profondeur.",
        },
        {
          q: 'Quel est le MOQ pour les étaux lourds ?',
          a: "À partir de 20 pcs par modèle pour les étaux lourds standard ; les outillages personnalisés à partir de 50+ pcs. Les échantillons sont expédiés en 7-14 jours et la production prend 25-35 jours après confirmation du PO.",
        },
        {
          q: 'Quelle est la durabilité des étaux lourds sous usage industriel quotidien ?',
          a: "Nos étaux lourds passent les tests de durabilité cyclique (10 000+ cycles ouverture/fermeture), les tests de corrosion en brouillard salin (48+ heures) et la vérification de la force de serrage à 120% de la capacité nominale. Les inserts de mâchoires remplacables prolongent significativement la durée de vie.",
        },
      ],
    },
    {
      slug: 'pipe',
      navLabel: 'Étaux à tube',
      metaTitle: "Étaux à tube personnalisés — Chaîne et trépied OEM | Stavalk",
      metaDescription:
        "Étaux à tube pour plomberie, raccordement de tuyauteries et pétrole et gaz — chaîne et trépied, capacité de 1/4″ à 6″, mâchoires en V à rainures, OEM dès 20-100 pcs.",
      kicker: 'Série · Tube',
      h1: "Étaux à tube personnalisés — Serrage spécialisé pour le raccordement de tuyauteries",
      intro: [
        "Les étaux à tube sont spécialement conçus pour saisir les tuyaux et gaines ronds : le modèle à chaîne pour le montage sur établi et les travaux lourds sur tuyauterie, le modèle à trépied pour un usage portable et sur le terrain. Les mâchoires en V à rainures maintiennent le tuyau fermement sans l'écraser, et les mécanismes à libération rapide accélèrent le repositionnement.",
        "Nous fabriquons des étaux à tube sous votre marque en configurations chaîne et trépied, couvrant une capacité de 1/4″ à 6″ pour la plomberie, le CVC, le pétrole et gaz et la protection incendie.",
      ],
      faqs: [
        {
          q: 'Quelle est la différence entre les étaux à tube à chaîne et les étaux à tube à trépied ?',
          a: "Les étaux à tube à chaîne se montent sur un établi ou un support et utilisent un mécanisme à chaîne et vis pour une puissance de maintien maximale — idéal pour les tuyaux lourds et une utilisation répétée en atelier. Les étaux à tube à trépied sont autonomes et portables — préférés pour le travail sur le terrain, les chantiers et le raccordement mobile.",
        },
        {
          q: 'Quels diamètres de tuyaux vos étaux peuvent-ils prendre en charge ?',
          a: "Les modèles standard couvrent une capacité de 1/4″ à 6″ sur plusieurs tailles d'étaux. La géométrie des mâchoires et la longueur de la chaîne sont adaptées à la gamme de tuyauterie visée. Des capacités personnalisées pour des tuyaux plus grands ou plus petits sont disponibles.",
        },
        {
          q: 'Les étaux à tube peuvent-ils être marqués avec notre logo ?',
          a: "Oui. Le gravage laser du logo, les marques de moulage, le revêtement en poudre coloré et l'emballage de marque sont des options de personnalisation standard. Les pieds du trépied peuvent être codés par couleur selon la palette de votre marque.",
        },
        {
          q: 'Quel est le MOQ pour les étaux à tube ?',
          a: "Étaux à tube à chaîne dès 20 pcs ; étaux à tube à trépied dès 50 pcs. Échantillons en 7-14 jours, production en 25-35 jours après confirmation du PO.",
        },
      ],
    },
    {
      slug: 'specialty',
      navLabel: 'Étaux spéciaux',
      metaTitle: "Étaux spéciaux personnalisés — Précision et machine OEM | Stavalk",
      metaDescription:
        "Étaux de précision et machine personnalisés — à chariot, de fraiseuse, de perceuse et CNC avec précision de 0.001″, acier durci rectifié, OEM dès 20-50 pcs.",
      kicker: 'Série · Spécial',
      h1: "Étaux spéciaux personnalisés — Serrage de précision pour usinage et fraisage",
      intro: [
        "Les étaux spéciaux répondent aux applications d'usinage de précision : étaux à chariot pour le positionnement composé, étaux de fraiseuse pour le montage sur table CNC, étaux de perceuse pour le perçage centré et étaux de machine avec mécanisme de double verrouillage pour les environnements de production. Tous dotés d'acier durci et rectifié pour une précision de 0.001″.",
        "Nous fabriquons des étaux spéciaux sous votre marque dès 20-50 pièces par modèle, avec des faces en acier GCr15 durci et rectifié ou acier à outils Cr12MoV, des corps de style Kurt et des mécanismes de double verrouillage.",
      ],
      faqs: [
        {
          q: 'Quelle précision vos étaux spéciaux peuvent-ils atteindre ?',
          a: "Les faces de mâchoires et les corps rectifiés avec précision offrent un parallélisme inférieur à 0.001″ (0,025 mm). Tous les étaux sont inspectés sur des machines de mesure par coordonnées (CMM) avant expédition, avec certificats d'inspection disponibles.",
        },
        {
          q: 'Quels types d\'étaux spéciaux fabriquez-vous ?',
          a: "Étaux à chariot (positionnement composé X-Y), étaux de fraiseuse (style Kurt, simple ou double poste), étaux de perceuse (serrage centré), étaux de machine CNC (haute vitesse, double verrouillage) et solutions de serrage personnalisées.",
        },
        {
          q: 'Les étaux spéciaux peuvent-ils être personnalisés pour nos machines CNC ?',
          a: "Oui. Nous adaptons les dimensions des rainures en T, les patrons de boulons de montage et les profils de mâchoires aux exigences spécifiques de votre table CNC et de vos pièces. Les inserts de mâchoires personnalisés (aluminium mou, rainure V, profilés) sont courants.",
        },
        {
          q: 'Quel est le MOQ pour les étaux spéciaux ?',
          a: "À partir de 20 pcs pour les étaux de précision standard ; les outillages personnalisés à partir de 50+ pcs. Échantillons en 7-14 jours, production en 25-35 jours après confirmation du PO.",
        },
      ],
    },
  ],
}

export function getSeriesPage(locale: Locale, slug: string): SeriesPageData | undefined {
  return (seriesPages[locale] ?? seriesPages.en).find((p) => p.slug === slug)
}
