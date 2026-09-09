/**
 * Bench vise guides (/guides/{slug}).
 *
 * Structured consumer-facing guides that accompany the B2B product pages.
 * The slugs align with the knowledge-hub content for buyers new to workholding.
 */

export interface GuideSection {
  title: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  intro: string[]
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-choose-a-bench-vise',
    title: 'How to Choose a Bench Vise',
    intro: [
      'Choosing a bench vise comes down to jaw width, clamping force, body material and how it mounts. Here is what matters, in plain language.',
    ],
    sections: [
      {
        title: 'Jaw Width and Opening',
        body: 'Jaw width determines the maximum workpiece you can grip securely. A 4″-5″ light-duty vise is right for hobby and small work; 6″-8″ medium-duty covers most workshops; 8″-10″ heavy-duty is for industrial fabrication. Match opening to your biggest material.',
      },
      {
        title: 'Clamping Force',
        body: 'Clamping force ranges from 1200-1500 lbs (light) to 6000-8000 lbs (heavy). Higher force holds work under aggressive machining but can crush delicate pieces — pick the force your work actually needs.',
      },
      {
        title: 'Cast Iron vs. Forged Steel',
        body: 'Gray cast iron (HT200/HT250) is the economical standard and dampens vibration well. Forged or cast carbon steel (45#) resists impact and shock loads — the choice for heavy, hard-use applications. Jaw faces are hardened separately to 58-62 HRC.',
      },
      {
        title: 'Swivel Base and Mounting',
        body: 'A 360° swivel base repositions work without unbolting; a fixed base is more rigid for heavy hammering. Match bolt size and spacing to your bench and reinforce the top for heavy-duty vises.',
      },
    ],
    faqs: [
      { q: 'What size bench vise do I need?', a: 'Most workshops choose a 6″ medium-duty vise — enough force and jaw coverage for general metalwork, woodwork and auto repair, at a reasonable price.' },
      { q: 'Is a swivel base worth it?', a: 'If you frequently change work angles, yes — it saves repeated unbolting. For heavy hammering and extreme force, a fixed base is more rigid.' },
    ],
    related: [
      { label: 'Browse bench vise series', href: '/products' },
      { label: 'OEM bench vise manufacturing', href: '/oem-manufacturing' },
      { label: 'Bench vise maintenance', href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-size-guide',
    title: 'Bench Vise Size Guide: Jaw Width by Job',
    intro: [
      'Jaw width is the fastest shortcut to sizing a bench vise. This guide maps typical jaw widths to the jobs they serve.',
    ],
    sections: [
      {
        title: '4″-5″ — Light Duty',
        body: 'Electronics assembly, jewelry, craft, small woodworking and model work. Forces of 1200-1500 lbs hold small parts without crushing them.',
      },
      {
        title: '6″-8″ — Medium Duty',
        body: 'General metalwork, auto repair, fabrication and woodworking. 3000-4000 lbs of force with replaceable hardened jaws and optional pipe jaws for round stock.',
      },
      {
        title: '8″-10″ — Heavy Duty',
        body: 'Pipe fitting, ship work, mining maintenance and heavy fabrication. 6000-8000 lbs of force, forged steel bodies and anvil surfaces for shaping work.',
      },
      {
        title: 'Specialty Size Considerations',
        body: 'Precision and machine vises are sized by jaw height and table slot, not just width — measure your CNC table and workpiece before choosing.',
      },
    ],
    faqs: [
      { q: 'Is a bigger jaw always better?', a: 'No. Oversized jaws add weight and cost and can crush small workpieces with excessive force. Size to your largest regular job.' },
      { q: 'Do I need pipe jaws?', a: 'Only if you regularly hold round stock — pipe, rod and tube. Pipe jaws (or a dedicated pipe vise) grip cylindrical work without slipping.' },
    ],
    related: [
      { label: 'Browse bench vise series', href: '/products' },
      { label: 'How to choose a bench vise', href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-maintenance-guide',
    title: 'Bench Vise Maintenance Guide',
    intro: [
      'A quality bench vise lasts a generation with basic care. These routines prevent seized threads, worn jaws and corroded bodies.',
    ],
    sections: [
      {
        title: 'Lubricate the Thread and Slide',
        body: 'Keep the main screw and slide channel lightly greased and free of grit. A clean, lubed thread is the whole difference between a smooth and a stuck vise.',
      },
      {
        title: 'Check Jaw Alignment',
        body: 'Clamp a flat piece periodically and check even pressure across the faces. Swap worn jaw inserts on vises that have replaceable faces rather than replacing the whole unit.',
      },
      {
        title: 'Protect Swivel and Anvil',
        body: 'Keep the swivel base teeth clean and greased, and tighten the lock firmly during work. Use the anvil for light shaping only — heavy forging cracks cast iron bodies.',
      },
      {
        title: 'Prevent Rust',
        body: 'In humid environments, store vises under cover and keep a light oil coat on unpainted surfaces. This also preserves the finish for resale value.',
      },
    ],
    faqs: [
      { q: 'What grease should I use on a bench vise?', a: 'A general-purpose lithium grease works well on the screw thread and slide channel. Wipe off excess so it does not attract grit.' },
      { q: 'Why does my vise feel stuck?', a: 'Usually a gritty or dry slide channel or thread. Clean, lubricate and work the handle a few times — most sticky vises free up immediately.' },
    ],
    related: [
      { label: 'Bench vise maintenance', href: '/knowledge' },
      { label: 'Browse bench vise series', href: '/products' },
    ],
  },
  {
    slug: 'pipe-vise-guide',
    title: 'Pipe Vise Guide: Chain vs. Tripod',
    intro: [
      'Pipe vises hold round stock that open-jaw vises cannot grip securely. Understand the two main styles before choosing for your shop or site.',
    ],
    sections: [
      {
        title: 'Chain Pipe Vises',
        body: 'Mounted to a bench or stand, chain vises wrap a chain and screw mechanism around the pipe for maximum holding power. Ideal for heavy pipe and repeated shop use.',
      },
      {
        title: 'Tripod Pipe Vises',
        body: 'Freestanding and portable, tripod vises set up anywhere — job sites, field repairs and mobile fitting. They hold pipe with the same serrated V-jaw grip at a fraction of the setup time.',
      },
      {
        title: 'Sizing Pipe Vises',
        body: 'Capacity is measured by pipe diameter — typical vises cover 1/4″ to 6″. Match capacity to the largest pipe your crews regularly cut and thread.',
      },
      {
        title: 'Accessories and Repairs',
        body: 'Hardened V-jaw inserts and spare chain links keep pipe vises in service. Ask for spares when ordering fleets so units never wait on procurement.',
      },
    ],
    faqs: [
      { q: 'Chain or tripod pipe vise?', a: 'Choose chain for fixed shops handling heavy pipe and tripod for portability across job sites — many operations carry both.' },
      { q: 'How do you prevent pipe slip in a pipe vise?', a: 'Serrated hardened V-jaws grip round stock securely. Keep the jaws clean and the chain adjusted snugly against the pipe.' },
    ],
    related: [
      { label: 'Pipe vise series', href: '/products' },
      { label: 'Construction vise supply', href: '/solutions' },
    ],
  },
  {
    slug: 'oem-bench-vise-order-guide',
    title: 'OEM Bench Vise Order Guide',
    intro: [
      'Ordering OEM vises is straightforward when you know the process: requirement, spec, sample, production, QC, delivery.',
    ],
    sections: [
      {
        title: 'Start With the Requirement',
        body: 'Define jaw width, opening, clamping force, body material, finish, branding and packaging before contacting a factory. Clear requirements produce better first quotes.',
      },
      {
        title: 'Freeze the Specification',
        body: 'Both sides quote against one document: dimensions, materials, heat treatment, coating, branding and packaging. Changes after freezing are slower and costlier.',
      },
      {
        title: 'Approve a Physical Sample',
        body: 'A sample confirms machining quality, jaw hardness, finish color, branding and packaging. Test it the way your customers will use it before approving production.',
      },
      {
        title: 'Production, QC and Delivery',
        body: 'Production runs 25-35 days after PO confirmation. Reputable factories verify jaw hardness (58-62 HRC), clamping force and cycle durability per batch before shipment.',
      },
    ],
    faqs: [
      { q: 'What is the MOQ for OEM bench vises?', a: 'Standard models run from 50-200 pcs per model; heavy-duty and specialty from 20-50 pcs. Combining models in one order improves unit pricing.' },
      { q: 'How long do samples take?', a: 'Typically 7-14 days, with production 25-35 days after approved sample and confirmed PO.' },
      { q: 'What certifications should I ask for?', a: 'CE marking, ISO 9001 quality management and RoHS material compliance are the baseline for EU and most export markets.' },
    ],
    related: [
      { label: 'OEM bench vise manufacturing', href: '/oem-manufacturing' },
      { label: 'Browse bench vise series', href: '/products' },
    ],
  },
  {
    slug: 'precision-vise-guide',
    title: 'Precision Vises for Machining',
    intro: [
      'Precision vises hold work to tolerances that ordinary vises cannot. This guide covers cross-slide, milling and machine vises for CNC and manual machining.',
    ],
    sections: [
      {
        title: 'Parallelism is the Point',
        body: 'Precision vises are ground so jaws sit parallel to the table within 0.001″ (0.025mm). That baseline determines repeatability of every part you machine.',
      },
      {
        title: 'Cross-Slide Vises',
        body: 'Add X-Y positioning without moving the workpiece — useful for precise hole patterns and second-op milling operations on a manual mill.',
      },
      {
        title: 'Milling and Machine Vises',
        body: 'Kurt-style bodies with double-locking mechanisms hold work without lift, even on high-speed CNC cuts. Sizes are matched to table slot spacing, not jaw width alone.',
      },
      {
        title: 'Custom Jaws',
        body: 'Soft aluminum, V-groove and contoured jaws protect finished surfaces and cradle irregular parts — a common OEM customization for production shops.',
      },
    ],
    faqs: [
      { q: 'What accuracy does a precision vise provide?', a: 'Precision-ground jaws deliver 0.001″ (0.025mm) parallelism to the table, verified by coordinate measuring machines before shipment.' },
      { q: 'Can precision vises be made for my CNC table?', a: 'Yes — manufacturers match T-slot dimensions, bolt patterns and jaw profiles to your specific machine and workpieces.' },
    ],
    related: [
      { label: 'Specialty vise series', href: '/products' },
      { label: 'Knowledge center', href: '/knowledge' },
    ],
  },
]

/**
 * Compact card form of each guide, used by hub pages and the knowledge index.
 * Guides ship in English; the localized maps mirror the same cards so every
 * locale's index/sitemap stays consistent with the base set.
 */
export interface GuideCard {
  slug: string
  title: string
  intro: string
}

function toCards(g: Guide): GuideCard {
  return { slug: g.slug, title: g.title, intro: g.intro[0] ?? g.intro.join(' ') }
}

const CARDS = GUIDES.map(toCards)

/** @deprecated use GUIDE_CARDS */
export const localizedGuides: (locale: string) => Guide[] = () => GUIDES

export const GUIDE_CARDS: import('./content').Localized<GuideCard[]> = {
  en: CARDS,
  es: CARDS,
  fr: CARDS,
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug)
}

export function getGuide(path: string, _locale?: string): Guide | undefined {
  const slug = path.replace(/^\/guides\//, '')
  return getGuideBySlug(slug)
}

export const GUIDES_ES: Guide[] = GUIDES
export const GUIDES_FR: Guide[] = GUIDES