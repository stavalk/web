import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Solutions system (/solutions/custom-bench-vise, /solutions/private-label-vises,
 * /solutions/industrial-vise-programs, /solutions/construction-vise-supply,
 * /solutions/workshop-vise-solutions).
 */

export type CtaLevel = 'cold' | 'warm' | 'hot'

export interface SolutionPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  serviceType: string
  answer: string
  intro: string[]
  scenario: { title: string; body: string }
  pairs: { problem: string; solution: string }[]
  steps: { title: string; body: string }[]
  caseStudy: { title: string; body: string; tags: string[] }
  faqs: { q: string; a: string }[]
  ctaLevel: CtaLevel
  ctaLabel?: string
}

export const SOLUTION_PATHS: Record<string, string> = {
  'custom-bench-vise': '/product-development',
}

export function solutionPath(slug: string): string {
  return SOLUTION_PATHS[slug] ?? `/solutions/${slug}`
}

export const solutionPages: Localized<SolutionPageData[]> = {
  en: [
    {
      slug: 'custom-bench-vise',
      navLabel: 'Custom Bench Vise Manufacturing',
      metaTitle: 'Custom Bench Vise Manufacturing | OEM Vises for Your Brand',
      metaDescription:
        'Develop custom bench vises with Stavalk. We support requirement analysis, jaw customization, prototypes and manufacturing for tool brands and distributors.',
      kicker: 'Custom Bench Vise Manufacturer',
      serviceType: 'Custom Bench Vise Manufacturing',
      answer:
        'We develop custom bench vises and accessories from your requirement — jaw width, clamping force, body material, swivel base, branding and packaging — through engineering, sampling and production. Custom projects start at 50-200 pcs per model; samples ship in 7-14 days, and production runs 25-35 days after confirmed PO and deposit.',
      h1: 'Custom Bench Vises Built Around Your Requirements',
      intro: [
        'You need workholding tools built to your specification — jaw size, clamping force, materials, branding — without running a foundry yourself. We are the manufacturing partner that takes your requirement and returns a deliverable product.',
        'Every project is handled by a dedicated specialist who manages design, samples, production and delivery, so you always know where your order stands.',
      ],
      scenario: {
        title: 'You need vises built to your specification',
        body: 'A product requirement — not a catalog pick. Your jaw preferences, your quality level, your packaging. We engineer, sample and produce it on proven platforms, with flexibility from the first small run.',
      },
      pairs: [
        {
          problem: 'Factory catalogs only offer stock vises you cannot change.',
          solution: 'We produce custom vises with your jaw specs, castings and branding — from first sample to full production runs.',
        },
        {
          problem: 'Big minimums lock you into inventory before the market is validated.',
          solution: 'Custom volume starts from 50-200 pcs per model, while pilot runs start low — so first runs stay small while unit pricing stays fair.',
        },
        {
          problem: 'You have no engineering team on your side.',
          solution: 'Our in-house design and engineering team turns an idea or reference vise into production-ready castings and drawings.',
        },
        {
          problem: 'Unknown factory quality and slow communication.',
          solution: 'A project specialist owns samples, QC milestones and delivery timelines from start to finish — one point of contact, clear updates.',
        },
      ],
      steps: [
        { title: 'Submit your project', body: 'Tell us your requirements, or share sketches and reference vises.' },
        { title: 'Design & sample', body: 'We develop drawings and ship a physical sample within 7-14 days.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 25-35 days with multi-point QC.' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional packing, plus reorder support at consistent quality.' },
      ],
      caseStudy: {
        title: 'Tool brand product extension',
        body: 'A hardware brand moved into workholding with a branded medium-duty vise. We developed the vise from a rough sketch, reached sample approval and produced the first production run on schedule.',
        tags: ['Vise development', 'Branded castings', 'First production run'],
      },
      faqs: [
        {
          q: 'Can you develop a bench vise from my idea?',
          a: 'Yes. We help evaluate your requirements and develop a production-ready solution — from concept and drawings to a physical sample.',
        },
        {
          q: 'Can I customize jaw width and clamping force?',
          a: 'Yes. Jaw width, opening, clamping force, body material, swivel base and branding are developed according to project requirements.',
        },
        {
          q: 'What is the minimum order for custom bench vise manufacturing?',
          a: 'Custom volume starts from 50-200 pcs per model, with lower pilot runs to validate. Larger quantities unlock better unit pricing, and reorders keep your tooling and designs.',
        },
        {
          q: 'How do you ensure vise quality?',
          a: 'We verify jaw hardness (58-62 HRC), clamping force testing, swivel base torque, cyclic durability testing (10,000+ cycles) and salt spray corrosion testing before shipment.',
        },
        {
          q: 'Do you provide samples before production?',
          a: 'Yes — a physical sample is produced and approved before any production run. Sample time is typically 7-14 days.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Discuss Your Custom Bench Vise Project',
    },
    {
      slug: 'private-label-vises',
      navLabel: 'Private Label Vises',
      metaTitle: 'Private Label Bench Vise Manufacturing | Custom Vise Production',
      metaDescription:
        'Stavalk provides private label bench vise manufacturing for tool retailers and distributors — branded vises from specification to production.',
      kicker: 'Private Label Bench Vises',
      serviceType: 'Private Label Bench Vise Manufacturing',
      answer:
        'Private label puts your brand on proven, ready-to-produce bench vise platforms without new tooling. Pick a base model, apply your logo, finish, packaging and accessories, and order from 50-200 pcs. It is the fastest, lowest-risk way to launch; samples take 7-14 days and production 25-35 days after PO.',
      h1: 'Private Label Bench Vise Manufacturing For Your Brand',
      intro: [
        'Private label production lets you launch a workholding line under your own brand without investing in tooling or a foundry. Your logo, finish and packaging go on quality-verified platforms, with quantities that grow with demand.',
        'We support the product side so you can focus on the brand side: design, packaging and reorder management are handled by us.',
      ],
      scenario: {
        title: 'You have a brand — and need a product under it',
        body: 'A brand identity for a category where you currently have no SKUs. You want a sellable bench vise line carrying your name, at a quantity that matches your stage.',
      },
      pairs: [
        {
          problem: 'Branding only on a sticker — the vise still looks generic.',
          solution: 'Full brand integration: logo casting, jaw engraving, color-matched powder coat finish, branded packaging.',
        },
        {
          problem: 'First orders force you to buy hundreds of units you may not sell.',
          solution: 'Start with a small validation batch on a standard platform, then scale to volume runs — validate the market before big batches.',
        },
        {
          problem: 'Design and packaging development feels out of reach.',
          solution: 'Your brand assets are turned into production-ready casting and packaging artwork by our design team.',
        },
        {
          problem: 'Reorders drift in quality or availability.',
          solution: 'Tooling and designs stay yours, and reorders run on the same verified platforms at consistent quality.',
        },
      ],
      steps: [
        { title: 'Share your brand', body: 'Send your logo, finish colors and any existing brand assets.' },
        { title: 'Develop artwork', body: 'We design casting graphics, finish and packaging around your brand.' },
        { title: 'Approve sample', body: 'A physical sample confirms finish, engraving and packaging.' },
        { title: 'Produce & deliver', body: 'Production runs to your quantity, with QC and export handled end to end.' },
      ],
      caseStudy: {
        title: 'New brand, first production order',
        body: 'A tool retailer launched its own bench vise line from just a logo. We developed the full casting and packaging artwork, produced a first run for market testing, then scaled to a full production order within one season.',
        tags: ['Brand development', 'Packaging design', 'Scaled production'],
      },
      faqs: [
        {
          q: 'What is private label bench vise manufacturing?',
          a: 'Private label bench vise manufacturing allows businesses to sell vises under their own brand with customized specification and production support.',
        },
        {
          q: 'What is included in a private label vise program?',
          a: 'Your brand on the vise itself — logo casting, finish color — plus optional branded packaging and accessories: a complete sellable product under your name.',
        },
        {
          q: 'Can the design change between orders?',
          a: 'Yes. Once brand assets are production-ready, reorders can refresh finish, engraving or packaging at any time.',
        },
        {
          q: 'We only have a logo. Can you still help?',
          a: 'Yes. Our design team develops the full casting and packaging artwork from your logo and brand colors.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discuss Your Private Label Project',
    },
    {
      slug: 'industrial-vise-programs',
      navLabel: 'Industrial Vise Programs',
      metaTitle: 'Industrial Vise Programs | Heavy-Duty Vises for Operations',
      metaDescription:
        'Fleet and tooling programs for industrial operations, shipyards and fabrication shops — heavy-duty vises with bulk supply and replacement support.',
      kicker: 'Industrial Vise Programs',
      serviceType: 'Industrial Vise Supply Program',
      answer:
        'We supply heavy-duty vises to industrial operations, shipyards, mining and fabrication shops, built for daily abuse: 8″-10″ jaws, 6000-8000 lbs clamping force, forged steel bodies and replaceable jaw inserts. Fleet pricing, replacement jaw inserts and bulk procurement are available from 20-50 pcs.',
      h1: 'Heavy-Duty Vise Programs For Industrial Operations',
      intro: [
        'Industrial operations chew through workholding tools. We supply heavy-duty vises engineered for daily abuse — forged steel bodies, extreme clamping force, replaceable jaw parts — with fleet pricing and parts programs.',
        'Quantities are recommended from actual usage, not guesses, and reorder programs keep tools fresh year after year.',
      ],
      scenario: {
        title: 'Your shops need vises that survive constant use',
        body: 'Vises are used by crews daily and represent a constant replacement cost. You need durable tools, consistent supply and parts support — without managing foundry relationships yourself.',
      },
      pairs: [
        {
          problem: 'Standard vises wear out fast under daily industrial use.',
          solution: 'Forged steel heavy-duty vises with reinforced castings built for repeated abuse.',
        },
        {
          problem: 'Crews damage jaw faces and spare parts are hard to find.',
          solution: 'Replaceable jaw inserts and a standing parts program for quick refresh.',
        },
        {
          problem: 'Consistency across shifts and reorders is poor.',
          solution: 'Fleet tokenization: identical vises and specs on every reorder.',
        },
        {
          problem: 'Spend is uncoordinated across sites.',
          solution: 'A single supply program with fleet pricing and a dedicated contact.',
        },
      ],
      steps: [
        { title: 'Describe your operation', body: 'Sites, application, abuse level and current spending.' },
        { title: 'Get a fleet plan', body: 'We recommend vise types and quantities based on usage.' },
        { title: 'Approve samples', body: 'Your spec and finish confirmed on a physical vise.' },
        { title: 'Receive and reorder', body: 'Delivery, spare parts and a reorder program for future needs.' },
      ],
      caseStudy: {
        title: 'Shipyard workholding refresh',
        body: 'A shipyard replaced its aging heavy-duty vises with forged steel units in a phased delivery. Crews reported faster, more secure clamping and the yard reordered identical spec units the following year.',
        tags: ['Fleet refresh', 'Forged steel', 'Parts support'],
      },
      faqs: [
        {
          q: 'Can industrial vises be customized?',
          a: 'Yes. Jaw width, anvil shape, corrosion-resistant coatings, handle length and branding can be specified for your application.',
        },
        {
          q: 'What types of vises do you supply for industry?',
          a: 'Heavy-duty bench vises, combination vises, pipe vises and specialty precision vises for machining and fabrication.',
        },
        {
          q: 'Do you offer fleet pricing?',
          a: 'Yes — volume pricing applies to fleet programs, with a dedicated contact for reorders, parts and maintenance questions.',
        },
        {
          q: 'How durable are heavy-duty vises under industrial use?',
          a: 'Heavy-duty vises pass cyclic durability testing (10,000+ cycles), salt spray corrosion testing (48+ hours) and clamping force verification at 120% of rated capacity.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Request An Industrial Vise Program',
    },
    {
      slug: 'construction-vise-supply',
      navLabel: 'Construction Vise Supply',
      metaTitle: 'Construction Vise Supply | Pipe & Portable Vises for Job Sites',
      metaDescription:
        'Portable and pipe vises for construction sites, MEP contractors and oil & gas — durable, job-site-ready with bulk supply programs.',
      kicker: 'Construction Vise Supply',
      serviceType: 'Construction Vise Supply',
      answer:
        'We supply portable pipe vises and heavy-duty vises built for harsh job-site conditions: 1/4″-6″ pipe capacity, chain and tripod configurations, corrosion-resistant coatings. Bulk supply from 20-100 pcs supports construction, plumbing, HVAC and oil & gas operations.',
      h1: 'Durable Vises For Construction And Job-Site Conditions',
      intro: [
        'Construction and job sites are hard on tools: harsh conditions, portability needs and constant abuse. We supply pipe vises and portable vises engineered for the field, with bulk supply and parts support.',
        'Tripod pipe vises set up anywhere; chain vises handle heavy pipe in the shop. Both are coated to resist the elements.',
      ],
      scenario: {
        title: 'Your crews work on tough, mobile job sites',
        body: 'Pipe fitters, plumbers and HVAC crews need vises that travel well, set up fast and withstand dust, moisture and abuse. You need reliable supply at volume for crews across sites.',
      },
      pairs: [
        {
          problem: 'Bench vises can\'t travel to job sites.',
          solution: 'Portable tripod pipe vises that set up anywhere with no bench required.',
        },
        {
          problem: 'In-field vises rust and fail quickly.',
          solution: 'Corrosion-resistant coatings and hardened parts tested for harsh environments.',
        },
        {
          problem: 'Crews waste time repositioning pipe.',
          solution: 'Quick-release mechanisms and wide pipe capacity for fast, secure clamping.',
        },
        {
          problem: 'Supply is unreliable across a growing crew.',
          solution: 'Bulk supply program with reserve stock and consistent delivery.',
        },
      ],
      steps: [
        { title: 'Tell us about your operation', body: 'Crew size, applications and job-site conditions.' },
        { title: 'Choose vise types', body: 'Tripod, chain or portable vises matched to your trades.' },
        { title: 'Approve sample', body: 'Verify fit, function and coating on a physical vise.' },
        { title: 'Supply & reorder', body: 'Bulk delivery, spare parts and reorder support for ongoing jobs.' },
      ],
      caseStudy: {
        title: 'MEP contractor roll-out',
        body: 'A mechanical contractor standardized pipe vises across five regional crews. Portable tripod units cut setup time, and the firm reorders the same spec for every new crewmember.',
        tags: ['Portable vises', 'Fleet standardization', 'Parts support'],
      },
      faqs: [
        {
          q: 'What vises are best for job sites?',
          a: 'Tripod pipe vises for portability and chain pipe vises for heavy, repeated pipe work — both in corrosion-resistant finishes.',
        },
        {
          q: 'What pipe sizes do your vises handle?',
          a: 'Standard models cover 1/4″ to 6″ pipe capacity across multiple vise sizes. Custom capacities for larger pipe are available.',
        },
        {
          q: 'Can vises be branded for our company?',
          a: 'Yes. Logo engraving, color-coded coatings and branded packaging are standard options.',
        },
        {
          q: 'What is the MOQ?',
          a: 'Chain pipe vises from 20 pcs; tripod pipe vises from 50 pcs. Samples in 7-14 days, production in 25-35 days.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discuss Your Construction Vise Supply',
    },
    {
      slug: 'workshop-vise-solutions',
      navLabel: 'Workshop Vise Solutions',
      metaTitle: 'Workshop Vise Solutions | Vises for Makerspaces & Schools',
      metaDescription:
        'Tiered vise solutions for makerspaces, vocational schools and training centers — light to professional ranges with program pricing.',
      kicker: 'Workshop Vise Solutions',
      serviceType: 'Workshop Vise Solutions',
      answer:
        'For makerspaces, trade schools and training centers we supply tiered vise packages: light-duty for hobby entry, medium-duty for general shop work and specialty precision vises for machining classes. Volume pricing from 10-50 pcs supports shop-wide outfitting within program budgets.',
      h1: 'Vise Solutions For Makerspaces And Training Programs',
      intro: [
        'Training environments run different: mixed skill levels, high utilization, strict safety needs and program budgets. Our tiered vise packages let shops outfit from student entry benches to advanced machining stations.',
        'We advise on quantities and layouts so every station is productive, with spare parts and reorder support for new cohorts.',
      ],
      scenario: {
        title: 'You run a workshop with mixed skill levels',
        body: 'Students and members use vises daily, from light craft to precision machining. You need a range that supports every skill level, fits a program budget and stands up to daily use.',
      },
      pairs: [
        {
          problem: 'One vise type can\'t serve beginner to advanced.',
          solution: 'Tiered ranges — light, medium and precision — matched to each station\'s purpose.',
        },
        {
          problem: 'Tool misuse and damage is common.',
          solution: 'Durable construction plus clear marking of capacity and safe-clamp guidance.',
        },
        {
          problem: 'Program budgets are tight.',
          solution: 'Volume pricing and package discounts for shop-wide outfitting.',
        },
        {
          problem: 'Equipment must survive multiple cohorts.',
          solution: 'Reinforced construction plus spare parts and reorder support for long program life.',
        },
      ],
      steps: [
        { title: 'Share your program', body: 'Station count, skill levels and budget cycle.' },
        { title: 'Build the package', body: 'A tiered vise set matched to your stations, not guesses.' },
        { title: 'Approve sample', body: 'Verify fit, function and finish on a physical vise.' },
        { title: 'Deliver & renew', body: 'Bulk supply, spare parts and reorders for new cohorts.' },
      ],
      caseStudy: {
        title: 'Vocational school outfitting',
        body: 'A technical school equipped its metalworking and woodworking shops with tiered vise sets. Instructors reported faster setup and better engagement across skill levels, and renewed with a matching reorder.',
        tags: ['Tiered outfitting', 'Program launch', 'Renewal orders'],
      },
      faqs: [
        {
          q: 'What vise range suits a training workshop?',
          a: 'Light-duty 2″-5″ vises for entry work, medium-duty 6″-8″ for general shop use and precision specialty vises for machining classes.',
        },
        {
          q: 'Can schools customize vises?',
          a: 'Yes. Finish colors, capacity markings, safety labels and packaging can be customized for education programs.',
        },
        {
          q: 'Can quantities match our station count?',
          a: 'Yes — program pricing is built around station quantities, and we recommend numbers based on your layout and rotation.',
        },
        {
          q: 'Do you work with program procurement timelines?',
          a: 'Yes. We plan sample and production lead times around school budget and season cycles.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discuss Your Workshop Vise Program',
    },
  ],
  es: [
    {
      slug: 'custom-bench-vise',
      navLabel: 'Fabricación de mordazas personalizadas',
      metaTitle: 'Fabricación de mordazas de banco personalizadas | OEM',
      metaDescription:
        'Desarrolla mordazas de banco personalizadas con Stavalk. Ofrecemos análisis de requisitos, personalización de mordazas, muestras y fabricación.',
      kicker: 'Fabricante de mordazas personalizadas',
      serviceType: 'Fabricación de mordazas de banco personalizadas',
      answer:
        'Desarrollamos mordazas de banco y accesorios personalizados a partir de tu requisito — ancho de boca, fuerza de sujeción, material del cuerpo, base giratoria, marca y embalaje — con ingeniería, muestras y producción. Los proyectos parten de 50-200 uds. por modelo; las muestras llegan en 7-14 días y la producción en 25-35 días tras el PO y el depósito.',
      h1: 'Mordazas de banco personalizadas según tus requisitos',
      intro: [
        'Necesitas herramientas de sujeción producidas según tus especificaciones — tamaño de boca, fuerza, materiales, marca — sin gestionar una fundición propia. Somos ese socio de fabricación: recibimos tu requisito y entregamos el producto terminado.',
        'Cada proyecto cuenta con un especialista dedicado que gestiona diseño, muestras, producción y entrega, para que siempre sepas cómo va tu pedido.',
      ],
      scenario: {
        title: 'Necesitas mordazas según especificación',
        body: 'Esto es un requisito de producto, no una elección de catálogo. Tu preferencia de boca, tu nivel de calidad, tu embalaje. Ejecutamos ingeniería, muestras y producción sobre plataformas probadas.',
      },
      pairs: [
        {
          problem: 'El catálogo de la fábrica solo tiene diseños existentes que no se pueden modificar.',
          solution: 'Producimos mordazas personalizadas según tu boca, fundición y marca, de la primera muestra a la producción completa.',
        },
        {
          problem: 'Los pedidos mínimos grandes te encierran en inventario antes de validar el mercado.',
          solution: 'El volumen personalizado parte de 50-200 uds. por modelo, con pedidos piloto bajos para validar primero.',
        },
        {
          problem: 'No tienes equipo de ingeniería.',
          solution: 'Nuestro equipo de diseño e ingeniería convierte una idea o mordaza de referencia en fundiciones y planos producibles.',
        },
        {
          problem: 'Calidad de fábrica desconocida y comunicación lenta.',
          solution: 'Un especialista de proyecto gestiona muestras, control de calidad y plazos de principio a fin: un solo interlocutor.',
        },
      ],
      steps: [
        { title: 'Envía tu proyecto', body: 'Cuéntanos tu requisito o comparte bocetos y mordazas de referencia.' },
        { title: 'Diseña y muestra', body: 'Desarrollamos planos y enviamos una muestra física en 7-14 días.' },
        { title: 'Confirma y produce', body: 'Tras tu aprobación, producción en 25-35 días con control de calidad multipunto.' },
        { title: 'Entrega y reordena', body: 'Exportación mundial con embalaje profesional y soporte de reorden.' },
      ],
      caseStudy: {
        title: 'Extensión de línea de una marca de herramientas',
        body: 'Una marca de ferretería entró en la sujeción con una mordaza media de marca. Desarrollamos la mordaza desde un boceto y la primera producción se entregó a tiempo.',
        tags: ['Desarrollo de mordaza', 'Fundición de marca', 'Primera producción'],
      },
      faqs: [
        {
          q: '¿Podéis desarrollar una mordaza a partir de mi idea?',
          a: 'Sí. Te ayudamos a evaluar el requisito y a desarrollar una solución fabricable: del concepto a la muestra física.',
        },
        {
          q: '¿Se pueden personalizar ancho de boca y fuerza de sujeción?',
          a: 'Sí. Boca, abertura, fuerza, material del cuerpo, base giratoria y marca se desarrollan según los requisitos del proyecto.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'El volumen personalizado parte de 50-200 uds. por modelo, con pilotos más bajos para validar. A mayor cantidad, mejor precio unitario.',
        },
        {
          q: '¿Cómo garantizáis la calidad de las mordazas?',
          a: 'Verificamos dureza de boca (58-62 HRC), fuerza de sujeción, par de la base y resistencia cíclica (10.000+ ciclos).',
        },
        {
          q: '¿Proporcionáis muestras antes de la producción?',
          a: 'Sí: la muestra física se produce y aprueba antes de la producción en serie; el muestreo suele tardar 7-14 días.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Comenta tu proyecto de mordaza personalizada',
    },
    {
      slug: 'private-label-vises',
      navLabel: 'Mordazas de marca privada',
      metaTitle: 'Fabricación de mordazas de marca privada | Producción',
      metaDescription:
        'Stavalk ofrece fabricación de mordazas de banco de marca privada para minoristas y distribuidores — mordazas con marca de la especificación a la producción.',
      kicker: 'Mordazas de marca privada',
      serviceType: 'Fabricación de mordazas de marca privada',
      answer:
        'La marca privada pone tu marca sobre plataformas probadas y listas para producir sin utillaje nuevo. Elige un modelo base, aplica tu logo, acabado, embalaje y pide desde 50-200 uds. Las muestras tardan 7-14 días y la producción 25-35 días tras el PO.',
      h1: 'Fabricación de mordazas de marca privada para tu marca',
      intro: [
        'La marca privada te permite lanzar una línea de sujeción con tu propia marca sin invertir en utillaje ni fundición. Tu logo, acabado y embalaje se aplican sobre plataformas verificadas.',
        'Nosotros nos ocupamos del lado del producto: diseño, embalaje y gestión de reorden.',
      ],
      scenario: {
        title: 'Tienes una marca — necesitas el producto que la lleve',
        body: 'Una identidad de marca para una categoría sin SKUs. Quieres una línea de mordazas vendible con tu nombre en cantidades que encajen con tu etapa.',
      },
      pairs: [
        {
          problem: 'La marca solo vive en la pegatina.',
          solution: 'Integración de marca completa: logo en la fundición, grabado en la mordaza, acabado en polvo y embalaje de marca.',
        },
        {
          problem: 'El primer pedido es demasiado grande.',
          solution: 'Empieza con un lote pequeño de validación y escala al volumen estándar cuando valides el mercado.',
        },
        {
          problem: 'El desarrollo de diseño y embalaje parece inalcanzable.',
          solution: 'Nuestro equipo convierte tu material de marca en planos de fundición y embalaje listos para producción.',
        },
        {
          problem: 'Los reordenes son inestables.',
          solution: 'Los moldes y diseños son tuyos; los reordenes se producen en las mismas plataformas con calidad constante.',
        },
      ],
      steps: [
        { title: 'Comparte tu marca', body: 'Envía tu logo, colores y material de marca.' },
        { title: 'Desarrollamos los planos', body: 'Diseñamos fundición, acabado y embalaje alrededor de tu marca.' },
        { title: 'Confirma la muestra', body: 'La muestra física confirma acabado, grabado y embalaje.' },
        { title: 'Produce y entrega', body: 'Producimos tus cantidades con control de calidad y exportación de principio a fin.' },
      ],
      caseStudy: {
        title: 'Marca nueva, primer pedido de producción',
        body: 'Una tienda de herramientas lanzó su línea de mordazas con solo un logo. Completamos el diseño de fundición y embalaje y escalamos a producción completa en un trimestre.',
        tags: ['Desarrollo de marca', 'Diseño de embalaje', 'Producción escalada'],
      },
      faqs: [
        {
          q: '¿Qué es la fabricación de mordazas de marca privada?',
          a: 'Permite a las empresas vender mordazas bajo su propia marca, con especificaciones personalizadas y soporte de producción.',
        },
        {
          q: '¿Qué incluye un programa de marca privada?',
          a: 'Tu marca en la mordaza — logo en fundición, color de acabado — más embalaje y accesorios opcionales de marca.',
        },
        {
          q: '¿Se puede modificar el diseño entre pedidos?',
          a: 'Sí. Una vez listos los activos, puedes actualizar acabado, grabado o embalaje en cualquier reorden.',
        },
        {
          q: 'Solo tenemos un logo, ¿podéis ayudarnos?',
          a: 'Sí. Nuestro equipo desarrolla todos los planos de fundición y embalaje con solo tu logo y colores.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tu proyecto de marca privada',
    },
    {
      slug: 'industrial-vise-programs',
      navLabel: 'Programas de mordazas industriales',
      metaTitle: 'Programas de mordazas industriales | Pesadas para operaciones',
      metaDescription:
        'Programas de flota y utillaje para operaciones industriales, astilleros y talleres — mordazas pesadas con suministro por volumen y piezas.',
      kicker: 'Programas de mordazas industriales',
      serviceType: 'Programa de suministro de mordazas industriales',
      answer:
        'Suministramos mordazas pesadas a operaciones industriales, astilleros, minería y talleres: bocas 8″-10″, fuerza 6000-8000 lbs, acero forjado y mordazas reemplazables. Precio de flota y piezas desde 20-50 uds.',
      h1: 'Programas de mordazas pesadas para operaciones industriales',
      intro: [
        'Las operaciones industriales desgastan las herramientas de sujeción. Suministramos mordazas pesadas para el uso diario, con precio de flota y programas de piezas.',
        'Las cantidades se recomiendan según el uso real, no por conjetura.',
      ],
      scenario: {
        title: 'Tus talleres necesitan mordazas que aguanten',
        body: 'Las mordazas se usan a diario y representan un costo constante. Necesitas herramientas duraderas, suministro constante y soporte de piezas.',
      },
      pairs: [
        {
          problem: 'Las mordazas estándar se desgastan rápido.',
          solution: 'Mordazas pesadas de acero forjado con fundiciones reforzadas.',
        },
        {
          problem: 'Las caras se dañan y las piezas son difíciles de encontrar.',
          solution: 'Insertos de mordaza reemplazables y programa de piezas permanente.',
        },
        {
          problem: 'La consistencia entre turnos es pobre.',
          solution: 'Fleets estandarizadas: mordazas idénticas en cada reorden.',
        },
        {
          problem: 'El gasto está descoordinado entre sitios.',
          solution: 'Un programa único con precio de flota y un contacto dedicado.',
        },
      ],
      steps: [
        { title: 'Describe tu operación', body: 'Sitios, aplicación, nivel de abuso y gasto actual.' },
        { title: 'Recibe el plan de flota', body: 'Recomendamos tipos y cantidades según el uso.' },
        { title: 'Confirma muestras', body: 'Tu especificación y acabado en una mordaza física.' },
        { title: 'Recibe y reordena', body: 'Entrega, piezas y programa de reorden.' },
      ],
      caseStudy: {
        title: 'Renovación de sujección de un astillero',
        body: 'Un astillero renovó sus mordazas pesadas con unidades de acero forjado. Los equipos reportaron sujección más segura y el astillero reordenó la misma especificación al año siguiente.',
        tags: ['Renovación de flota', 'Acero forjado', 'Soporte de piezas'],
      },
      faqs: [
        {
          q: '¿Se pueden personalizar las mordazas industriales?',
          a: 'Sí. Boca, forma de yunque, recubrimientos anticorrosivos y marca se especifican para tu aplicación.',
        },
        {
          q: '¿Qué tipos suministráis?',
          a: 'Mordazas pesadas, combinadas y para tubo, y mordazas de precisión para mecanizado.',
        },
        {
          q: '¿Ofrecéis precio de flota?',
          a: 'Sí — el precio por volumen se aplica a programas de flota con un contacto dedicado.',
        },
        {
          q: '¿Qué tan duraderas son?',
          a: 'Resistencia cíclica (10.000+ ciclos), prueba de salmuera (48+ horas) y 120% de capacidad nominal.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Solicita un programa de mordazas industriales',
    },
    {
      slug: 'construction-vise-supply',
      navLabel: 'Suministro de mordazas de construcción',
      metaTitle: 'Suministro de mordazas de construcción | Portátiles y para tubo',
      metaDescription:
        'Mordazas portátiles y para tubo para obras, contratistas MEP y petróleo y gas — duraderas, listas para obra, con suministro por volumen.',
      kicker: 'Suministro de mordazas de construcción',
      serviceType: 'Suministro de mordazas de construcción',
      answer:
        'Suministramos mordazas portátiles y para tubo para condiciones duras de obra: capacidad 1/4″-6″, configuraciones de cadena y trípode, recubrimientos anticorrosivos. Suministro por volumen desde 20-100 uds.',
      h1: 'Mordazas duraderas para obras y condiciones de obra',
      intro: [
        'Las obras son duras con las herramientas: condiciones hostiles, portabilidad y abuso constante. Suministramos mordazas para tubo y portátiles para el campo, con soporte de suministro y piezas.',
        'El trípode se monta en cualquier lugar; la cadena maneja tubería pesada en taller. Ambos con recubrimientos resistentes.',
      ],
      scenario: {
        title: 'Tus equipos trabajan en obras móviles',
        body: 'Instaladores y fontaneros necesitan mordazas que viajen bien, monten rápido y resistan polvo, humedad y abuso.',
      },
      pairs: [
        {
          problem: 'Las mordazas de banco no viajan a la obra.',
          solution: 'Trípodes portátiles que se montan en cualquier lugar.',
        },
        {
          problem: 'Se oxidan y fallan rápido.',
          solution: 'Recubrimientos anticorrosivos y piezas endurecidas.',
        },
        {
          problem: 'Pérdida de tiempo al reposicionar tubería.',
          solution: 'Mecanismos de liberación rápida y gran capacidad.',
        },
        {
          problem: 'Suministro poco fiable.',
          solution: 'Programa de suministro por volumen con stock de reserva.',
        },
      ],
      steps: [
        { title: 'Cuéntanos tu operación', body: 'Tamaño del equipo, aplicaciones y condiciones.' },
        { title: 'Elige tipos de mordaza', body: 'Trípode, cadena o portátiles según tus oficios.' },
        { title: 'Confirma la muestra', body: 'Verifica ajuste, función y recubrimiento.' },
        { title: 'Suministra y reordena', body: 'Entrega por volumen, piezas y soporte de reorden.' },
      ],
      caseStudy: {
        title: 'Despliegue de un contratista MEP',
        body: 'Un contratista estandarizó mordazas de tubo en cinco equipos regionales. La portabilidad redujo el tiempo de montaje y la empresa reordena la misma especificación.',
        tags: ['Mordazas portátiles', 'Estandarización de flota', 'Soporte de piezas'],
      },
      faqs: [
        {
          q: '¿Qué mordazas son mejores para obra?',
          a: 'Trípodes para portabilidad y cadenas para trabajo pesado repetido, en acabados anticorrosivos.',
        },
        {
          q: '¿Qué tamaños de tubería manejan?',
          a: 'Modelos estándar de 1/4″ a 6″. Capacidades personalizadas disponibles.',
        },
        {
          q: '¿Se pueden personalizar con marca?',
          a: 'Sí. Grabado, recubrimientos de color y embalaje personalizado.',
        },
        {
          q: '¿Cuál es el pedido mínimo?',
          a: 'Cadena desde 20 uds.; trípode desde 50 uds. Muestras en 7-14 días.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta tu suministro de mordazas de construcción',
    },
    {
      slug: 'workshop-vise-solutions',
      navLabel: 'Soluciones de mordazas de taller',
      metaTitle: 'Soluciones de mordazas de taller | Para makerspaces y escuelas',
      metaDescription:
        'Paquetes de mordazas por niveles para makerspaces, escuelas técnicas y centros de formación — con precio de programa.',
      kicker: 'Soluciones de mordazas de taller',
      serviceType: 'Soluciones de mordazas de taller',
      answer:
        'Para makerspaces y centros de formación suministramos paquetes por niveles: ligero para iniciación, medio para taller general y de precisión para mecanizado. Precio por volumen desde 10-50 uds.',
      h1: 'Soluciones de mordazas para talleres y programas de formación',
      intro: [
        'Los entornos de formación son diferentes: niveles mixtos, alto uso, requisitos de seguridad y presupuestos. Nuestros paquetes por niveles permiten equipar desde bancos de iniciación hasta estaciones de mecanizado.',
        'Aconsejamos cantidades y disposición para que cada estación sea productiva.',
      ],
      scenario: {
        title: 'Gestionas un taller con niveles mixtos',
        body: 'Estudiantes y miembros usan mordazas a diario, de artesanía ligera a mecanizado. Necesitas una gama que soporte cada nivel.',
      },
      pairs: [
        {
          problem: 'Un tipo de mordaza no sirve de principiante a avanzado.',
          solution: 'Gamas por niveles — ligera, media, precisión — según la estación.',
        },
        {
          problem: 'El mal uso es común.',
          solution: 'Construcción duradera con marcado de capacidad y guía.',
        },
        {
          problem: 'El presupuesto es ajustado.',
          solution: 'Precios por volumen y descuentos por paquete.',
        },
        {
          problem: 'El equipo debe aguantar muchas promociones.',
          solution: 'Construcción reforzada con piezas y soporte de reorden.',
        },
      ],
      steps: [
        { title: 'Comparte tu programa', body: 'Nº de estaciones, niveles y ciclo presupuestario.' },
        { title: 'Construye el paquete', body: 'Un set por niveles ajustado a tus estaciones.' },
        { title: 'Confirma la muestra', body: 'Verifica ajuste, función y acabado.' },
        { title: 'Entrega y renueva', body: 'Suministro por volumen, piezas y reordenes.' },
      ],
      caseStudy: {
        title: 'Equipamiento de una escuela técnica',
        body: 'Una escuela equipó sus talleres de metal y madera con sets por niveles. Los instructores reportaron mejor progreso y renovaron con un reorden idéntico.',
        tags: ['Equipamiento por niveles', 'Lanzamiento del programa', 'Pedidos de renovación'],
      },
      faqs: [
        {
          q: '¿Qué gama sirve a un taller de formación?',
          a: 'Ligeras 2″-5″ para entrada, medias 6″-8″ para taller general y de precisión para mecanizado.',
        },
        {
          q: '¿Se pueden personalizar?',
          a: 'Sí. Colores, marcados de capacidad, etiquetas de seguridad y embalaje.',
        },
        {
          q: '¿Pueden las cantidades coincidir con nuestras estaciones?',
          a: 'Sí — el precio de programa se construye alrededor de las cantidades de estación.',
        },
        {
          q: '¿Trabajáis con los plazos de compra del programa?',
          a: 'Sí. Planificamos muestras y producción según el ciclo presupuestario.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta tu programa de mordazas de taller',
    },
  ],
  fr: [
    {
      slug: 'custom-bench-vise',
      navLabel: "Fabrication d'étaux d'établi personnalisés",
      metaTitle: "Fabrication d'étaux d'établi personnalisés | Étaux OEM pour votre marque",
      metaDescription:
        "Développez des étaux d'établi personnalisés avec Stavalk. Analyse des besoins, personnalisation des mâchoires, prototypes et fabrication pour marques d'outillage et distributeurs.",
      kicker: "Fabricant d'étaux d'établi personnalisés",
      serviceType: "Fabrication d'étaux d'établi personnalisés",
      answer:
        "Nous développons des étaux d'établi et accessoires sur mesure — largeur de mâchoire, force de serrage, matériau du corps, base orientable, marquage et emballage — de l'ingénierie aux échantillons et à la production. Les projets personnalisés commencent à 50-200 pièces par modèle ; échantillons en 7-14 jours, production en 25-35 jours après PO et versement.",
      h1: "Étaux d'établi personnalisés conçus selon vos exigences",
      intro: [
        "Vous avez besoin d'outils de serrage fabriqués selon vos spécifications — taille de mâchoire, force, matériaux, marquage — sans exploiter votre propre fonderie. Nous sommes le partenaire de fabrication qui reçoit vos exigences et livre le produit fini.",
        "Chaque projet est géré par un spécialiste dédié qui pilote conception, échantillons, production et livraison, pour que vous sachiez toujours où en est votre commande.",
      ],
      scenario: {
        title: "Vous avez besoin d'étaux fabriqués selon vos spécifications",
        body: "Un besoin produit — pas un choix de catalogue. Vos préférences de mâchoire, votre niveau de qualité, votre emballage. Nous concevons, échantillonnons et produisons sur des plateformes éprouvées.",
      },
      pairs: [
        {
          problem: "Les catalogues d'usine ne proposent que des étaux standards que vous ne pouvez pas modifier.",
          solution: "Nous produisons des étaux personnalisés avec vos spécifications de mâchoire, fontes et marquage — de la première échantillon à la production complète.",
        },
        {
          problem: "Les grands minimums vous enferment dans du stock avant validation du marché.",
          solution: "Le volume personnalisé commence à 50-200 pièces par modèle, avec des lots pilotes plus petits pour valider d'abord.",
        },
        {
          problem: "Vous n'avez pas d'équipe d'ingénierie de votre côté.",
          solution: "Notre équipe interne de conception transforme une idée ou un étau de référence en fontings et plans de production.",
        },
        {
          problem: "Qualité d'usine inconnue et communication lente.",
          solution: "Un spécialiste de projet gère échantillons, contrôle qualité et délais de bout en bout — un seul interlocuteur, mises à jour claires.",
        },
      ],
      steps: [
        { title: "Soumettez votre projet", body: "Décrivez vos exigences ou partagez des croquis et étaux de référence." },
        { title: "Conception et échantillon", body: "Nous développons les plans et expédions un échantillon physique en 7-14 jours." },
        { title: "Validation et production", body: "Après approbation, production de 25-35 jours avec contrôle qualité multi-point." },
        { title: "Livraison et réassortiment", body: "Exportation mondiale, emballage professionnel, support de réassortiment à qualité constante." },
      ],
      caseStudy: {
        title: "Extension de gamme d'une marque d'outillage",
        body: "Une marque de quincaillerie est entrée dans le serrage avec un étau moyen de marque. Développement à partir d'un croquis, validation de l'échantillon et première série livrée dans les délais.",
        tags: ["Développement d'étau", "Fontes de marque", "Première production"],
      },
      faqs: [
        {
          q: "Pouvez-vous développer un étau d'établi à partir de mon idée ?",
          a: "Oui. Nous vous aidons à évaluer vos besoins et développer une solution industrielle — du concept et des plans à un échantillon physique.",
        },
        {
          q: "Puis-je personnaliser la largeur de mâchoire et la force de serrage ?",
          a: "Oui. Largeur de mâchoire, ouverture, force de serrage, matériau du corps, base orientable et marquage sont développés selon les exigences du projet.",
        },
        {
          q: "Quel est le minimum de commande pour la fabrication d'étaux d'établi personnalisés ?",
          a: "Le volume personnalisé commence à 50-200 pièces par modèle, avec des lots pilotes plus réduits. Des quantités supérieures améliorent le prix unitaire, et les réassortiments conservent vos outillages.",
        },
        {
          q: "Comment garantissez-vous la qualité des étaux ?",
          a: "Vérification de la dureté des mâchoires (58-62 HRC), force de serrage, couple de la base orientable, durabilité cyclique (10 000+ cycles) et résistance à la corrosion en brouillard salin avant expédition.",
        },
        {
          q: "Fournissez-vous des échantillons avant la production ?",
          a: "Oui — un échantillon physique est produit et approuvé avant toute série. Délai d'échantillonnage de 7-14 jours.",
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: "Discutez de votre projet d'étau d'établi personnalisé",
    },
    {
      slug: 'private-label-vises',
      navLabel: "Étaux à marque privée",
      metaTitle: "Fabrication d'étaux d'établi à marque privée | Production personnalisée",
      metaDescription:
        "Stavalk propose la fabrication d'étaux d'établi à marque privée pour détaillants et distributeurs — étaux de marque, de la spécification à la production.",
      kicker: "Étaux d'établi à marque privée",
      serviceType: "Fabrication d'étaux d'établi à marque privée",
      answer:
        "La marque privée met votre marque sur des plateformes d'étaux d'établi éprouvées et prêtes à produire sans nouvel outillage. Choisissez un modèle de base, appliquez logo, finition, emballage et commandez dès 50-200 pièces. Moyen le plus rapide et le moins risqué de lancer ; échantillons en 7-14 jours, production en 25-35 jours après PO.",
      h1: "Fabrication d'étaux d'établi à marque privée pour votre marque",
      intro: [
        "La marque privée vous permet de lancer une gamme de serrage sous votre propre marque sans investir dans l'outillage ni la fonderie. Votre logo, finition et emballage s'appliquent sur des plateformes vérifiées, avec des quantités qui évoluent avec la demande.",
        "Nous gérons le volet produit pour que vous vous concentriez sur la marque : conception, emballage et gestion des réassortiments sont de notre ressort.",
      ],
      scenario: {
        title: "Vous avez une marque — et besoin d'un produit qui la porte",
        body: "Identité de marque pour une catégorie sans SKU. Vous souhaitez une gamme d'étaux d'établi vendable portant votre nom, à une quantité adaptée à votre étape.",
      },
      pairs: [
        {
          problem: "Le marquage ne vit que sur l'étiquette — l'étau reste générique.",
          solution: "Intégration complète de la marque : logo dans la fonte, gravure sur mâchoires, finition en poudre colorée, emballage de marque.",
        },
        {
          problem: "Les premières commandes vous obligent à acheter des centaines d'unités incertaines.",
          solution: "Commencez avec un petit lot de validation sur plateforme standard, puis passez au volume — validez le marché avant les grands lots.",
        },
        {
          problem: "Le développement du design et de l'emballage semble inaccessible.",
          solution: "Vos éléments de marque sont transformés en plans de production pour la fonte et l'emballage par notre équipe de conception.",
        },
        {
          problem: "Les réassortiments dérivent en qualité ou en disponibilité.",
          solution: "Outillages et conceptions restent les vôtres, réassortiments sur les mêmes plateformes vérifiées à qualité constante.",
        },
      ],
      steps: [
        { title: "Partagez votre marque", body: "Envoyez votre logo, couleurs de finition et éléments de marque existants." },
        { title: "Développement des graphiques", body: "Nous concevons graphiques de fonte, finition et emballage autour de votre marque." },
        { title: "Validation de l'échantillon", body: "Un échantillon physique confirme finition, gravure et emballage." },
        { title: "Production et livraison", body: "Production selon vos quantités, contrôle qualité et exportation de bout en bout." },
      ],
      caseStudy: {
        title: "Nouvelle marque, première commande de production",
        body: "Un détaillant d'outillage a lancé sa gamme d'étaux d'établi avec juste un logo. Graphiques de fonte et d'emballage développés, première série pour tester le marché, puis commande complète en un trimestre.",
        tags: ["Développement de marque", "Conception d'emballage", "Production à grande échelle"],
      },
      faqs: [
        {
          q: "Qu'est-ce que la fabrication d'étaux d'établi à marque privée ?",
          a: "Elle permet aux entreprises de vendre des étaux sous leur propre marque avec spécifications personnalisées et support de production.",
        },
        {
          q: "Qu'un programme de marque privée comprend-il ?",
          a: "Votre marque sur l'étau — logo dans la fonte, couleur de finition — plus emballage et accessoires de marque en option : un produit complet et vendable sous votre nom.",
        },
        {
          q: "Le design peut-il changer entre les commandes ?",
          a: "Oui. Une fois les éléments de marque prêts pour la production, les réassortiments peuvent renouveler finition, gravure ou emballage à tout moment.",
        },
        {
          q: "Nous n'avons qu'un logo — pouvez-vous quand même nous aider ?",
          a: "Oui. Notre équipe de conception développe tous les graphiques de fonte et d'emballage à partir de votre logo et couleurs de marque.",
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: "Discutez de votre projet de marque privée",
    },
    {
      slug: 'industrial-vise-programs',
      navLabel: "Programmes d'étaux industriels",
      metaTitle: "Programmes d'étaux industriels | Étaux lourds pour opérations",
      metaDescription:
        "Programmes de flotte et d'outillage pour opérations industrielles, chantiers navals et ateliers — étaux lourds avec approvisionnement en volume et pièces de rechange.",
      kicker: "Programmes d'étaux industriels",
      serviceType: "Programme d'approvisionnement en étaux industriels",
      answer:
        "Nous fournissons des étaux lourds aux opérations industrielles, chantiers navals, mines et ateliers de fabrication, conçus pour un usage quotidien intensif : mâchoires de 8″ à 10″, force de serrage de 6000-8000 lbs, corps en acier forgé et inserts de mâchoires remplacables. Tarif de flotte et pièces de rechange dès 20-50 pièces.",
      h1: "Programmes d'étaux lourds pour opérations industrielles",
      intro: [
        "Les opérations industrielles usent rapidement les outils de serrage. Nous fournissons des étaux lourds pour un usage quotidien intensif — corps en acier forgé, force de serrage extrême, inserts de mâchoires remplacables — avec tarif de flotte et programmes de pièces.",
        "Les quantités sont recommandées selon l'usage réel, pas des estimations, et les programmes de réassortiment maintiennent les outils en état d'année en année.",
      ],
      scenario: {
        title: "Vos ateliers ont besoin d'étaux qui résistent à un usage constant",
        body: "Les étaux sont utilisés quotidiennement et représentent un coût de remplacement permanent. Besoin d'outils durables, d'approvisionnement constant et de support en pièces — sans gérer les relations fonderie vous-même.",
      },
      pairs: [
        {
          problem: "Les étaux standards s'usent vite sous usage industriel quotidien.",
          solution: "Étaux lourds en acier forgé avec fontes renforcées, conçus pour un usage intensif répété.",
        },
        {
          problem: "Les équipes endommagent les faces de mâchoires, pièces de rechange difficiles à trouver.",
          solution: "Inserts de mâchoires remplacables et programme permanent de pièces pour renouvellement rapide.",
        },
        {
          problem: "L'homogénéité entre équipes et réassortiments est insuffisante.",
          solution: "Flottes standardisées : étaux identiques à chaque réassortiment.",
        },
        {
          problem: "Les dépenses sont mal coordonnées entre sites.",
          solution: "Un seul programme d'approvisionnement avec tarif de flotte et contact dédié.",
        },
      ],
      steps: [
        { title: "Décrivez votre opération", body: "Sites, applications, niveau d'usage et dépenses actuelles." },
        { title: "Recevez un plan de flotte", body: "Nous recommandons types et quantités d'étaux selon l'usage." },
        { title: "Validez les échantillons", body: "Votre spécification et finition confirmées sur un étau physique." },
        { title: "Réceptionnez et réassortissez", body: "Livraison, pièces de rechange et programme de réassortiment pour besoins futurs." },
      ],
      caseStudy: {
        title: "Renouvellement de serrage dans un chantier naval",
        body: "Un chantier naval a remplacé ses étaux lourds vieillissants par des unités en acier forgé, livraison par phases. Serrage plus rapide et plus sûr rapporté, réassortiment même spécification l'année suivante.",
        tags: ["Renouvellement de flotte", "Acier forgé", "Support en pièces"],
      },
      faqs: [
        {
          q: "Les étaux industriels peuvent-ils être personnalisés ?",
          a: "Oui. Largeur de mâchoire, forme de l'enclume, revêtements anticorrosifs, longueur du levier et marquage spécifiés pour votre application.",
        },
        {
          q: "Quels types d'étaux fournissez-vous pour l'industrie ?",
          a: "Étaux d'établi lourds, combinés, à tube et de précision pour usinage et fabrication.",
        },
        {
          q: "Proposez-vous un tarif de flotte ?",
          a: "Oui — tarif de volume pour programmes de flotte, contact dédié pour réassortiments, pièces et maintenance.",
        },
        {
          q: "Quelle durabilité des étaux lourds sous usage industriel ?",
          a: "Tests de durabilité cyclique (10 000+ cycles), corrosion en brouillard salin (48+ heures) et vérification de force à 120% de la capacité nominale.",
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: "Demandez un programme d'étaux industriels",
    },
    {
      slug: 'construction-vise-supply',
      navLabel: "Approvisionnement en étaux de construction",
      metaTitle: "Approvisionnement en étaux de construction | Portables et à tube pour chantiers",
      metaDescription:
        "Étaux portables et à tube pour chantiers, entrepreneurs MEP et pétrole et gaz — robustes, prêts pour le chantier, avec programmes d'approvisionnement en volume.",
      kicker: "Approvisionnement en étaux de construction",
      serviceType: "Approvisionnement en étaux de construction",
      answer:
        "Nous fournissons des étaux à tube portables et des étaux lourds pour conditions difficiles de chantier : capacité de 1/4″ à 6″, configurations chaîne et trépied, revêtements anticorrosifs. Approvisionnement en volume dès 20-100 pièces pour construction, plomberie, CVC et pétrole et gaz.",
      h1: "Étaux robustes pour la construction et les conditions de chantier",
      intro: [
        "Les chantiers sont durs pour les outils : conditions hostiles, besoins en portabilité et usage intensif. Nous fournissons des étaux à tube et portables conçus pour le terrain, avec support d'approvisionnement et pièces.",
        "Le trépied se monte n'importe où ; la chaîne gère les tuyaux lourds en atelier. Les deux sont revêtus pour résister aux intempéries.",
      ],
      scenario: {
        title: "Vos équipes travaillent sur des chantiers mobiles et difficiles",
        body: "Installateurs, plombiers et techniciens CVC ont besoin d'étaux qui se transportent bien, se montent rapidement et résistent à la poussière, l'humidité et l'usage intensif. Approvisionnement fiable en volume pour équipes réparties sur plusieurs sites.",
      },
      pairs: [
        {
          problem: "Les étaux d'établi ne se transportent pas sur les chantiers.",
          solution: "Étaux à tube à trépied portables qui se montent n'importe où, sans établi nécessaire.",
        },
        {
          problem: "Les étaux sur le terrain rouillent et tombent en panne rapidement.",
          solution: "Revêtements anticorrosifs et pièces durcies testées pour environnements difficiles.",
        },
        {
          problem: "Les équipes perdent du temps à repositionner la tuyauterie.",
          solution: "Mécanismes à libération rapide et grande capacité pour serrage rapide et sûr.",
        },
        {
          problem: "L'approvisionnement est peu fiable pour une équipe en croissance.",
          solution: "Programme d'approvisionnement en volume avec stock de réserve et livraison régulière.",
        },
      ],
      steps: [
        { title: "Décrivez votre opération", body: "Taille de l'équipe, applications et conditions de chantier." },
        { title: "Choisissez les types d'étaux", body: "Trépied, chaîne ou portables adaptés à vos métiers." },
        { title: "Validez l'échantillon", body: "Vérifiez ajustement, fonction et revêtement sur un étau physique." },
        { title: "Approvisionnement et réassortiment", body: "Livraison en volume, pièces de rechange et support pour chantiers en cours." },
      ],
      caseStudy: {
        title: "Déploiement d'un entrepreneur MEP",
        body: "Un entrepreneur a standardisé les étaux à tube sur cinq équipes régionales. Unités portables à trépied réduisant le temps de montage, même spécification réassortie pour chaque nouveau collaborateur.",
        tags: ["Étaux portables", "Standardisation de flotte", "Support en pièces"],
      },
      faqs: [
        {
          q: "Quels étaux sont les plus adaptés aux chantiers ?",
          a: "Étaux à tube à trépied pour la portabilité et à chaîne pour travaux lourds répétés — tous en finitions anticorrosives.",
        },
        {
          q: "Quels diamètres de tuyauterie vos étaux peuvent-ils gérer ?",
          a: "Modèles standard de 1/4″ à 6″. Capacités personnalisées pour tuyaux plus grands disponibles.",
        },
        {
          q: "Les étaux peuvent-ils être marqués avec notre entreprise ?",
          a: "Oui. Gravure de logo, revêtements colorés et emballage de marque sont des options standard.",
        },
        {
          q: "Quel est le MOQ ?",
          a: "Chaîne dès 20 pcs ; trépied dès 50 pcs. Échantillons en 7-14 jours, production en 25-35 jours.",
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: "Discutez de votre approvisionnement en étaux de construction",
    },
    {
      slug: 'workshop-vise-solutions',
      navLabel: "Solutions d'étaux pour ateliers",
      metaTitle: "Solutions d'étaux pour ateliers | Étaux pour espaces de création et écoles",
      metaDescription:
        "Solutions d'étaux par niveaux pour espaces de création, écoles professionnelles et centres de formation — gamme légère à professionnelle, tarif de programme.",
      kicker: "Solutions d'étaux pour ateliers",
      serviceType: "Solutions d'étaux pour ateliers",
      answer:
        "Pour espaces de création, écoles professionnelles et centres de formation, packs d'étaux par niveaux : léger pour l'initiation, moyen pour l'atelier général et de précision pour l'usinage. Tarif de volume dès 10-50 pièces pour équiper un atelier entier dans le cadre de budgets de programme.",
      h1: "Solutions d'étaux pour espaces de création et programmes de formation",
      intro: [
        "Les environnements de formation sont différents : niveaux mixtes, forte utilisation, exigences de sécurité strictes et budgets de programme. Nos packs par niveaux permettent d'équiper des postes d'initiation aux stations d'usinage avancé.",
        "Nous conseillons quantités et disposition pour que chaque poste soit productif, avec pièces de rechange et support de réassortiment pour les nouvelles cohortes.",
      ],
      scenario: {
        title: "Vous gérez un atelier avec des niveaux mixtes",
        body: "Étudiants et membres utilisent les étaux quotidiennement, de l'artisanat léger à l'usinage de précision. Gamme couvrant tous les niveaux, intégrée dans un budget de programme et résistant à un usage quotidien.",
      },
      pairs: [
        {
          problem: "Un seul type d'étau ne sert pas du débutant à l'avancé.",
          solution: "Gammes par niveaux — léger, moyen, précision — adaptées à chaque poste.",
        },
        {
          problem: "Le mauvais usage et les dommages sont fréquents.",
          solution: "Construction durable et marquages clairs de capacité et de guide de serrage sûr.",
        },
        {
          problem: "Les budgets de programme sont serrés.",
          solution: "Tarifs de volume et remises par pack pour équiper un atelier entier.",
        },
        {
          problem: "L'équipement doit survivre à plusieurs cohortes.",
          solution: "Construction renforcée avec pièces de rechange et support de réassortiment pour longue durée de vie.",
        },
      ],
      steps: [
        { title: "Partagez votre programme", body: "Nombre de postes, niveaux et cycle budgétaire." },
        { title: "Construisez le pack", body: "Un set d'étaux par niveaux adapté à vos postes, pas par estimation." },
        { title: "Validez l'échantillon", body: "Vérifiez ajustement, fonction et finition sur un étau physique." },
        { title: "Livraison et renouvellement", body: "Approvisionnement en volume, pièces et réassortiments pour nouvelles cohortes." },
      ],
      caseStudy: {
        title: "Équipement d'une école professionnelle",
        body: "Une école a équipé ses ateliers de métallurgie et ébénisterie avec des sets d'étaux par niveaux. Instructeurs rapportant montage plus rapide et meilleur engagement, renouvellement avec réassortiment identique.",
        tags: ["Équipement par niveaux", "Lancement de programme", "Commandes de renouvellement"],
      },
      faqs: [
        {
          q: "Quelle gamme convient à un atelier de formation ?",
          a: "Légers 2″-5″ pour l'initiation, moyens 6″-8″ pour l'atelier général et de précision pour l'usinage.",
        },
        {
          q: "Les écoles peuvent-elles personnaliser les étaux ?",
          a: "Oui. Couleurs de finition, marquages de capacité, étiquettes de sécurité et emballage personnalisables pour programmes éducatifs.",
        },
        {
          q: "Les quantités peuvent-elles correspondre à nos postes ?",
          a: "Oui — tarif de programme construit autour des quantités par poste.",
        },
        {
          q: "Travaillez-vous avec les cycles d'achat des programmes ?",
          a: "Oui. Planification des échantillons et production selon le cycle budgétaire.",
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: "Discutez de votre programme d'étaux pour atelier",
    },
  ],
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return (solutionPages[locale] ?? solutionPages.en).find((p) => p.slug === slug)
}
