import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Knowledge Center (/knowledge/*). Informational articles answer the
 * question-style queries around bench vise selection and manufacturing —
 * the queries buyers research before ever reaching out.
 */

export interface KnowledgeArticle {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const knowledge: Localized<KnowledgeArticle[]> = {
  en: [
    {
      slug: 'what-is-a-bench-vise',
      navLabel: 'What Is a Bench Vise?',
      metaTitle: 'What Is a Bench Vise? A Complete Buying Primer',
      metaDescription:
        'A bench vise is a fixed workholding tool that clamps workpieces for cutting, drilling, grinding and assembly. How it works, the parts and the materials behind it.',
      kicker: 'Knowledge',
      h1: 'What Is a Bench Vise?',
      intro:
        'A bench vise is a mechanical workholding device bolted to a workbench that holds a workpiece between two opposing jaws while you cut, drill, grind, file or assemble it. Fixed to the bench, it keeps both hands free and the work stable under force.',
      sections: [
        {
          title: 'The Short Answer',
          body: [
            'A bench vise is the permanent clamp of a workshop. Two jaws open wide to admit a workpiece, then close under screw pressure until the part is locked rigid. Because the vise is bolted to the bench, the operator works against a fixed point instead of chasing the part across the table.',
            'The size range tells you the workload: light-duty vises serve hobby and small work, a [6″ medium-duty bench vise](/products/vise-medium-6) covers workshops and auto repair, and heavy-duty models handle industrial fabrication.',
          ],
        },
        {
          title: 'What a Bench Vise Is Used For',
          body: [
            'Boring repetitive job or precision fit-up, a vise frees both hands so you can saw, file, tap, drill and deburr safely. It also holds stock still during assembly and repair work that needs steady pressure or multiple hands.',
            'The holding power comes from the screw, not your grip. How much force a given model can deliver under load is covered in the [clamping force](/engineering/clamping-force) reference.',
          ],
        },
        {
          title: 'How It Holds Work Rigid',
          body: [
            'The leadscrew is the engine: each turn of the handle pushes the movable jaw forward by a fixed pitch, multiplying your arm force into tonnes of clamped load. The slide keeps the jaw moving straight so the faces stay parallel and the grip is even.',
            'The gripping surfaces themselves matter as much as the frame — separate [jaw design](/engineering/jaw-design) explains why faces are hardened and patterned the way they are.',
          ],
        },
        {
          title: 'The Materials Behind a Good Vise',
          body: [
            'Body material decides rigidity, weight, damping and how the vise fails under overload. Gray cast iron is the workshop standard, ductile iron adds shock resilience, and forged steel bodies handle the heaviest work. The full comparison is in the [materials library](/engineering/materials).',
            'Respectable manufacturers verify jaw hardness per batch (58-62 HRC is the bench-vise standard) and publish measured performance rather than marketing claims.',
          ],
        },
        {
          title: 'From Off-the-Shelf to Custom',
          body: [
            'If your volume is small, the catalog covers it. If you are sourcing for a brand or establishing a private-label range, the [OEM manufacturing](/oem-manufacturing) process starts from a proven platform and customizes jaws, finish, base and branding.',
            'New to vises entirely? The next article walks through the mechanism in detail: [how a bench vise works](/knowledge/how-does-a-bench-vise-work).',
          ],
        },
      ],
    },
    {
      slug: 'how-does-a-bench-vise-work',
      navLabel: 'How Does a Bench Vise Work?',
      metaTitle: 'How Does a Bench Vise Work? Mechanism Explained',
      metaDescription:
        'How a bench vise works: the leadscrew drives the movable jaw, slides keep faces parallel and clamping force multiplies handle effort. Mechanism, parts and materials.',
      kicker: 'Knowledge',
      h1: 'How Does a Bench Vise Work?',
      intro:
        'A bench vise turns rotational handle force into straight-line clamping force. Understanding the leadscrew, the slide and the jaw faces explains which vise feels smooth, holds hard and stays accurate for decades.',
      sections: [
        {
          title: 'The Screw and Handle Drive It All',
          body: [
            'The fixed jaw is cast as part of the body, bolted to the bench. The movable jaw rides on the slide and is pulled forward by a leadscrew. Turning the handle clockwise advances the screw a fixed amount per rotation — this is what converts each turn into a tiny, controlled clamp.',
          ],
        },
        {
          title: 'Where the Clamping Force Comes From',
          body: [
            'The mechanical advantage makes a vise powerful: the long handle arm multiplies your pull, and the screw thread converts it into a straight-line load far beyond anything you could exert by hand. Force per model is rated and tested — the [clamping force](/engineering/clamping-force) page shows how it is measured and what to ask for.',
          ],
        },
        {
          title: 'The Slide Keeps Jaws Parallel',
          body: [
            'As the screw pushes the movable jaw, the slide (or twin slides on wide models) prevents it from rotating. Parallel jaw faces mean the load spreads evenly across the workpiece instead of crushing one edge. On heavier work the slide also carries the shear load so the screw stays protected.',
          ],
        },
        {
          title: 'Jaw Faces Do the Actual Holding',
          body: [
            'Serrated faces bite into rough stock; smooth or soft jaws protect finished parts. Inserts are hardened and replaceable, so the wearing surface is a service part rather than the whole body — see [jaw design](/engineering/jaw-design) for the pattern and hardness logic.',
            'In heavy-duty models the body itself is built to take hammering and high torque. A [forged-steel heavy-duty vise](/products/vise-heavy-6) is the example of that engineering, and the [heat treatment](/engineering/heat-treatment) page explains how the jaws get their durable edge.',
          ],
        },
        {
          title: 'Beyond the Plain Screw',
          body: [
            'Swivel bases, quick-release mechanisms and pipe jaws are variations on the same screw-and-slide principle. When a brand needs a specific mechanism, geometry or finish, the [OEM manufacturing](/oem-manufacturing) process develops it from a proven base design.',
            'Prefer the component view first? Read [bench vise parts explained](/knowledge/bench-vise-parts-explained).',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-parts-explained',
      navLabel: 'Bench Vise Parts Explained',
      metaTitle: 'Bench Vise Parts Explained: Jaws, Screw, Slide, Base',
      metaDescription:
        'Every part of a bench vise: fixed and movable jaws, leadscrew, slide, swivel base and anvil — what it does, what wears out and what keeps it working.',
      kicker: 'Knowledge',
      h1: 'Bench Vise Parts Explained',
      intro:
        'A bench vise looks like one solid lump of iron, but it is a machine with a handful of engineered parts. Knowing each one — and which can wear, break or be replaced — helps you buy better and maintain smarter.',
      sections: [
        {
          title: 'The Jaws',
          body: [
            'The fixed jaw is cast into the body; the movable jaw slides against it. The working faces carry a serrated pattern to bite into rough stock, and modern vise faces are replaceable inserts rather than part of the body. The [jaw design](/engineering/jaw-design) page covers patterns and why faces are hardened to 58-62 HRC — a figure that is batch-verified at the [heat treatment](/engineering/heat-treatment) stage.',
          ],
        },
        {
          title: 'The Leadscrew and Handle',
          body: [
            'The leadscrew turns handle rotation into linear jaw movement. Its thread pitch determines both speed per turn and how much force the handle can generate. The further the screw engages, the more [clamping force](/engineering/clamping-force) it can hold before the system yields.',
          ],
        },
        {
          title: 'The Slide',
          body: [
            'The slide is the tongue of metal under the movable jaw that keeps it tracking straight and in parallel with the fixed jaw. On wide or heavy models you will find twin slides for rigidity. A worn, gritty slide is a top cause of a vise that feels "stuck".',
          ],
        },
        {
          title: 'The Base: Fixed and Swivel',
          body: [
            'The base connects the vise to the bench and, on swivel models, carries a locking mechanism that rotates the whole head 360°. A swivel base repositions work without unbolting; a fixed base is simpler and more rigid for heavy hammering.',
          ],
        },
        {
          title: 'The Anvil',
          body: [
            'Many medium and heavy vises add a flat anvil surface behind the jaws for light flattening and peening. On purpose-built models this surface is machined flat and reinforced, as on the [anvil bench vise](/products/vise-specialty-anvil).',
            'Every part — jaw inserts included — is available as a service item. When you buy at volume, ordering [replacement parts](/oem-manufacturing) with your production run is a standard OEM option.',
          ],
        },
      ],
    },
    {
      slug: 'what-is-a-bench-vise-used-for',
      navLabel: 'What Is a Bench Vise Used For?',
      metaTitle: 'What Is a Bench Vise Used For? 8 Core Trades',
      metaDescription:
        'What a bench vise is used for: automotive repair, metalworking, welding prep, woodworking, industrial fabrication, schools and more — with the vise class for each.',
      kicker: 'Knowledge',
      h1: 'What Is a Bench Vise Used For?',
      intro:
        'Anything that needs to be held still against force — sawing, filing, drilling, hammering, assembling — is faster, safer and more accurate in a bench vise. These are the core trades and the vise class each one relies on.',
      sections: [
        {
          title: 'Automotive Repair and Garages',
          body: [
            'Brake components, brackets, hoses and small frame work spend most of their time clamped. A [6″ medium-duty bench vise](/products/vise-medium-6) is the classic garage spec: wide enough for most parts, with jaw inserts that grip without chewing finished surfaces.',
          ],
        },
        {
          title: 'Metalworking and Fabrication',
          body: [
            'Filing, deburring, tapping and grinding all push hard against the work. Heavy and industrial models take the hammering and torque that lighter vises cannot. For extreme forces a [forged-steel heavy-duty vise](/products/vise-heavy-6) holds its height and parallelism under load, and the frame is only as strong as the [body material](/engineering/materials) behind it.',
          ],
        },
        {
          title: 'Welding and Grinding Prep',
          body: [
            'Vises hold work at working height for tacking, cleaning weld seams and grinding. The swivel base is valuable here because joints get faces at awkward angles without re-clamping.',
          ],
        },
        {
          title: 'Woodworking',
          body: [
            'Workshops use vises to hold boards for chopping, planing and assembly. Smooth or padded jaws protect the wood surface, and bench selection matters as much as the vise: the mounting and clamping load are covered in the [choosing guide](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Industrial Manufacturing',
          body: [
            'On production lines the vise becomes a station: repeated assembly, inspection and finishing at machine height. Measured [clamping force](/engineering/clamping-force) plus replaceable wear parts keep these stations consistent over years of shifts.',
          ],
        },
        {
          title: 'Schools, Training and Specialist Work',
          body: [
            'Teaching shops need forgiving, low-cost vises that survive novice misuse; specialist setups add pipe jaws, round-stock jaws and other configurations. When the application does not match a catalog model, the [OEM manufacturing](/oem-manufacturing) route builds the configuration you need.',
          ],
        },
      ],
    },
    {
      slug: 'types-of-bench-vises-explained',
      navLabel: 'Types of Bench Vises Explained',
      metaTitle: 'Types of Bench Vises Explained: Light, Heavy, Pipe',
      metaDescription:
        'Types of bench vises: light-duty, medium-duty, heavy-duty, pipe vises, fixed vs swivel and specialty forms — how to tell them apart and which workload each fits.',
      kicker: 'Knowledge',
      h1: 'Types of Bench Vises Explained',
      intro:
        'Bench vises divide into a handful of families — light, medium and heavy duty, pipe vises, and specialist forms. Know the family and you know the workload it is designed for.',
      sections: [
        {
          title: 'Light-Duty Vises',
          body: [
            'Light-duty vises suit hobby work, electronics and small repairs. They clamp lighter stock at lower forces and are inexpensive to mount in a home workshop. A [4″ light-duty bench vise](/products/vise-light-4) is the typical entry point.',
          ],
        },
        {
          title: 'Medium-Duty Vises',
          body: [
            'The workshop workhorse. Medium-duty vises take general metalwork, woodworking and automotive repair with enough jaw and opening to cover most parts. The [6″ medium-duty bench vise](/products/vise-medium-6) is the most common specification in this class.',
          ],
        },
        {
          title: 'Heavy-Duty Vises',
          body: [
            'Built for fabrication, mining, shipyards and industrial maintenance, heavy-duty vises add mass, wider jaws and deeper throats to handle high torque and hammering. The [8″ heavy-duty bench vise](/products/vise-heavy-8) shows the body geometry that survives sustained abuse.',
          ],
        },
        {
          title: 'Pipe Vises',
          body: [
            'Pipe vises swap flat jaws for V-shaped jaws that grip round stock and larger tubing without flattening it. Plumbers, fabricators and maintenance shops use them to thread and hold pipe; a [6″ pipe vise](/products/vise-pipe-6) covers the common union range.',
          ],
        },
        {
          title: 'Fixed vs Swivel',
          body: [
            'Every class comes in fixed-base and swivel-base versions. Swivel adds 360° rotation for awkward angles; fixed is simpler, cheaper and stiffer for heavy hammering. The choice is part of [how to choose a bench vise](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Specialist Forms',
          body: [
            'Beyond the straight families there are anvil vises, round-jaw and square-jaw variants, and multi-purpose workshop forms. These are catalog models on their own and also the starting platforms for custom OEM work. The [square-jaw specialist vise](/products/vise-specialty-square) and the [materials library](/engineering/materials) give you the frame of reference.',
            'If your product plan or market needs a configuration that is not on the page, the [OEM manufacturing](/oem-manufacturing) route turns a proven platform into your own spec.',
          ],
        },
      ],
    },
    {
      slug: 'how-to-choose-a-bench-vise',
      navLabel: 'How to Choose a Bench Vise',
      metaTitle: 'How to Choose a Bench Vise | Jaw Width & Clamping Force',
      metaDescription:
        'How to choose a bench vise: jaw width, opening, clamping force, body material, swivel base and mounting — explained in plain language.',
      kicker: 'Knowledge',
      h1: 'How to Choose a Bench Vise',
      intro:
        'A bench vise is a long-term workshop investment. Getting the size, materials and features right the first time saves money and frustration. This guide walks through every deciding factor.',
      sections: [
        {
          title: 'Jaw Width and Opening',
          body: [
            'Jaw width determines the size of workpieces you can grip and how evenly force distributes across them. A 2″-5″ light-duty vise suits hobby and small work; [6″-8″ medium-duty](/products/vise-medium-6) covers most workshop and auto repair tasks; 8″-10″ heavy-duty handles industrial fabrication.',
            'Opening (maximum gap between closed and open jaws) must exceed your largest workpiece. Measure your biggest material before choosing.',
          ],
        },
        {
          title: 'Clamping Force',
          body: [
            '[Clamping force](/engineering/clamping-force) — 1200-1500 lbs for light-duty up to 6000-8000 lbs for heavy-duty — determines what the vise can hold under work pressure. Beyond a point, more force can damage delicate workpieces, so match force to application.',
            'Reputable manufacturers publish [clamping force per model](/engineering/clamping-force), measured under controlled torque. Ask for it when comparing [OEM suppliers](/oem-manufacturing).',
          ],
        },
        {
          title: 'Body Material: Cast Iron vs. Forged Steel',
          body: [
            '[Gray cast iron (HT200/HT250)](/engineering/materials) resists compression and is economical — the standard choice for light to medium vises. Forged or cast carbon steel (45#) adds tensile strength and impact resistance, essential for heavy-duty and shock-load applications.',
            'Jaw faces are hardened separately (58-62 HRC) so the gripping surface outlasts the body. [Replaceable jaw inserts](/engineering/jaw-design) extend service life. For the full mechanical picture, see the [cast iron vs. forged steel comparison](/knowledge/cast-iron-vs-steel-vises).',
          ],
        },
        {
          title: 'Swivel Base and Mounting',
          body: [
            'A 360° swivel base repositions work without unbolting — ideal for shops that change work angles. A fixed base is more rigid for heavy hammering and is simpler and cheaper.',
            'Mounting matters too: match bolt size and spacing to your workbench, and reinforce the top for heavy-duty vises. A thin, soft bench defeats an otherwise good vise.',
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-ductile-vises',
      navLabel: 'Cast Iron vs. Ductile Iron Vises',
      metaTitle: 'Cast Iron vs. Ductile Iron Bench Vises | Which Body Is Right?',
      metaDescription:
        'Gray cast iron (HT200/HT250) vs. ductile iron (QT450) bench vise bodies: rigidity, impact resistance, cost and which applications each material fits.',
      kicker: 'Knowledge',
      h1: 'Cast Iron vs. Ductile Iron Bench Vises Compared',
      intro:
        'Gray cast iron and ductile iron look similar on the shelf but behave differently when the clamp tightens and the work gets heavy. This article compares the two body materials and points to the engineering pages where the numbers come from.',
      sections: [
        {
          title: 'Why the Body Material Is the First Decision',
          body: [
            'The body is the whole vise. Body material decides rigidity, weight, dampening, price and — most importantly — how the vise fails when it is overloaded. Choosing between [gray cast iron](/engineering/materials) and ductile iron is a workload decision, not a preference.',
            'Both are cast in Stavalk\u2019s own foundry in Qingdao and verified with material certificates per batch, so the comparison below is against confirmed grades, not marketing language.',
          ],
        },
        {
          title: 'Gray Cast Iron (HT200 / HT250): The Standard',
          body: [
            'Gray cast iron is the workhorse of bench vises. It resists compression well, damps vibration better than steel, machines cleanly to tight tolerances, and is the most economical body material — which is why light- and medium-duty vises use it. The graphite flakes that give it dampening also make it brittle under sharp impacts, so a hard hammer strike or off-axis load can crack a corner.',
            'The replaceable [jaw design](/engineering/jaw-design) keeps gray-iron bodies serviceable: the hardened jaw faces take the wear, so the body lasts, as covered in the [heat treatment](/engineering/heat-treatment) page.',
          ],
        },
        {
          title: 'Ductile Iron (QT450): Impact Resilience',
          body: [
            'Ductile iron is gray iron\u2019s tougher sibling. Spheroidal graphite nodules stop cracks from propagating, so ductile-iron bodies absorb impacts and heavy workpieces without chipping. It is specified across the range for trade and light-industrial series that see harder daily use — at a moderate cost premium over gray iron.',
            'The full material comparison — strength, hardness, impact resistance, cost and typical use — lives on the [Materials Library](/engineering/materials) page.',
          ],
        },
        {
          title: 'Where Forged Steel Comes In',
          body: [
            'Neither cast material can match forged steel for tensile strength. The heavy-duty series is forged from 45# steel precisely so its body does not flex under multi-thousand-pound [clamping force](/engineering/clamping-force). If your bench does repeated shock loads, see the [6″ Heavy Duty Bench Vise](/products/vise-heavy-6) for how that is built.',
          ],
        },
        {
          title: 'How to Choose Between the Two',
          body: [
            'Match the material to the work, not the marketing: light and medium bench use → gray cast iron for the best price. Busy shops, drops and off-axis loads → ductile iron. Sustained heavy fabrication and striking → forged steel on a heavy-duty platform.',
            'Still weighing options? Compare against the [cast iron vs. steel vises](/knowledge/cast-iron-vs-steel-vises) article, or send the duty profile to the engineering team through the [OEM manufacturing](/oem-manufacturing) page so the grade is confirmed before tooling starts.',
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-steel-vises',
      navLabel: 'Cast Iron vs. Steel Vises',
      metaTitle: 'Cast Iron vs. Forged Steel Bench Vises Compared',
      metaDescription:
        'Cast iron vs. forged steel bench vises: cost, durability, weight, impact resistance and which applications each suits best.',
      kicker: 'Knowledge',
      h1: 'Cast Iron vs. Forged Steel Bench Vises Compared',
      intro:
        'The two materials that dominate bench vise bodies behave very differently under load. This comparison helps you specify the right body for the job.',
      sections: [
        {
          title: 'Why Cast Iron Is the Workhorse',
          body: [
            '[Gray cast iron (HT200/HT250)](/engineering/materials) is cast at relatively low cost, damps vibration better than steel, and resists compression well. It is the standard for light-, medium- and most heavy-duty vises.',
            'Its weakness is tension and impact: a hard hammer strike near the corner of a cast iron vise can crack it. That is why heavy hammering applications favor steel.',
          ],
        },
        {
          title: 'Why Forged Steel Wins on Impact',
          body: [
            'Forged or cast carbon steel bodies (45# or better) have substantially higher tensile strength and toughness. They resist cracking under [shock loads and extreme clamping forces](/engineering/clamping-force), making them the choice for mining, shipyard and heavy fabrication work.',
            'The trade-off is cost and weight. Steel vises are more expensive to produce and heavier to mount, so buyers pay for what they actually need.',
          ],
        },
        {
          title: 'Jaw Material Is Separate',
          body: [
            'Regardless of body material, the jaw faces are heat-treated to 58-62 HRC for wear resistance. GCr15 bearing steel and Cr12MoV tool steel are common choices; both hold an edge under repeated clamping.',
            'Contoured, V-groove or soft aluminum jaws protect delicate workpieces — a common OEM customization.',
          ],
        },
        {
          title: 'Choosing Between Them',
          body: [
            'For general workshop, woodworking, auto repair and light industrial use, cast iron is the right cost-performance pick. For extreme force, hammering or harsh industrial environments, forged steel is the investment that pays back in fewer broken vises.',
            'When sourcing [OEM](/oem-manufacturing), ask the factory to specify exact material grade — HT200 vs. HT250 vs. 45# steel — rather than just "cast iron" or "steel". For the ductile-iron alternative, see [cast iron vs. ductile iron](/knowledge/cast-iron-vs-ductile-vises), and how a forged body is built on the [6″ Heavy Duty Bench Vise](/products/vise-heavy-6).',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-maintenance',
      navLabel: 'Bench Vise Maintenance',
      metaTitle: 'Bench Vise Maintenance: Lubrication & Care',
      metaDescription:
        'How to maintain a bench vise: thread lubrication, jaw alignment, swivel base care, anvil maintenance and storage for long service life.',
      kicker: 'Knowledge',
      h1: 'Bench Vise Maintenance: What Keeps a Vise Working for Decades',
      intro:
        'A quality bench vise is meant to last a generation. Most premature failures come from neglect, not use. This guide covers the maintenance that keeps vises from seizing up and wearing out.',
      sections: [
        {
          title: 'Lubricate the Screw Thread',
          body: [
            'The main screw is the vise\'s only precision moving part. Keep it lightly greased — lithium or general-purpose grease works — and wipe off dirt before it packs into the threads.',
            'Lubricate the slide channel too. A seized or gritty slide is the most common cause of a "stuck" vise.',
          ],
        },
        {
          title: 'Keep Jaws Aligned',
          body: [
            'Jaw faces wear with use; serrations flatten and faces drift out of parallel. Check alignment periodically by clamping a flat piece and inspecting whether it presses evenly.',
            'On vises with [replaceable jaw inserts](/engineering/jaw-design), swap worn faces rather than the whole vise — [replacement jaws](/oem-manufacturing) are a standard OEM spare. This is the cheapest way to restore grip.',
          ],
        },
        {
          title: 'Care for the Swivel Base',
          body: [
            'Tighten the swivel locking handle firmly to avoid vibration loosening during work. Periodically clean the base teeth and re-apply grease so rotation stays smooth.',
            'Avoid using the swivel as a workstop: hard lateral force works against the base lock and can strip it.',
          ],
        },
        {
          title: 'Anvil and Storage',
          body: [
            'The [anvil](/products/vise-specialty-anvil) surface is for light hammering, not heavy forging — treating it as a forging anvil cracks cast iron bodies. Keep it clean and lightly oiled to prevent rust.',
            'Store vises under cover in humid environments. A light coat of oil on unpainted surfaces prevents corrosion and keeps the finish fresh. Choosing a vise rather than maintaining one? Start at [how to choose a bench vise](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
      ],
    },
    {
      slug: 'oem-bench-vise-manufacturing',
      navLabel: 'OEM Bench Vise Manufacturing',
      metaTitle: 'OEM Bench Vise Manufacturing: MOQ, Customization & QC',
      metaDescription:
        'Guide to OEM bench vise manufacturing: minimum order quantities, jaw customization, swivel base options, quality standards and certifications.',
      kicker: 'Knowledge',
      h1: 'OEM Bench Vise Manufacturing: How Custom Vises Get Made',
      intro:
        'Whether you need a branded private label run or a fully custom vise, understanding the manufacturing pipeline — from casting to quality testing — sets the right expectations for cost, lead time and MOQ.',
      sections: [
        {
          title: 'The Manufacturing Pipeline',
          body: [
            'Vise production starts with casting: [sand-cast gray iron](/engineering/materials) or forged steel blanks, then precision CNC machining of jaw faces, slides and screw seats. [Heat treatment](/engineering/heat-treatment) hardens jaw faces to 58-62 HRC, followed by surface grinding and final assembly.',
            'Powder coating or spray paint finishes the body, and branding (laser engraving, casting marks or labels) is applied per your artwork.',
          ],
        },
        {
          title: 'MOQ and Lead Times',
          body: [
            'Standard models run from 50-200 pcs depending on series; custom-tooling runs start higher. Samples ship in 7-14 days and bulk production runs 25-35 days after confirmed PO and deposit.',
            'Combining several models in one order spreads fixed costs and improves unit pricing — a common way brands test multiple SKUs at once. Start from a [reference model](/products/vise-medium-6) to anchor your spec.',
          ],
        },
        {
          title: 'Customization Options',
          body: [
            'Jaw width and opening, [jaw surface pattern](/engineering/jaw-design) (serrated, smooth, V-groove), swivel base angle, anvil shape, handle style, body color and branding are all specifiable.',
            'Custom-tooling projects add shaped bodies, branded castings and unique jaw geometries, starting from higher quantities to amortize the tooling cost.',
          ],
        },
        {
          title: 'Quality Standards',
          body: [
            'Reputable factories verify jaw hardness (58-62 HRC), clamping force per model, swivel torque, and run cyclic durability testing (10,000+ open/close cycles) plus salt-spray corrosion testing.',
            'Certifications to look for: CE marking, ISO 9001 quality management, ISO 14001 environmental management and RoHS material compliance. For the full material trade-off behind the specs, see [cast iron vs. forged steel](/knowledge/cast-iron-vs-steel-vises).',
          ],
        },
      ],
    },
  ],
  es: [
    {
      slug: 'what-is-a-bench-vise',
      navLabel: '¿Qué es una mordaza de banco?',
      metaTitle: '¿Qué es una mordaza de banco? Guía básica de compra',
      metaDescription:
        'Una mordaza de banco es una herramienta fija que sujeta piezas para cortar, taladrar, rectificar y ensamblar. Cómo funciona, sus partes y sus materiales.',
      kicker: 'Centro de conocimiento',
      h1: '¿Qué es una mordaza de banco?',
      intro:
        'Una mordaza de banco es un dispositivo mecánico de sujeción atornillado al banco de trabajo que sostiene una pieza entre dos mordazas opuestas mientras cortas, taladras, rectificas, limas o ensamblas. Fija al banco, deja ambas manos libres y la pieza estable bajo la fuerza.',
      sections: [
        {
          title: 'La respuesta corta',
          body: [
            'Una mordaza de banco es la abrazadera permanente del taller. Dos mordazas se abren para admitir la pieza y luego cierran por presión de husillo hasta bloquearla. Como va atornillada al banco, se trabaja contra un punto fijo en lugar de perseguir la pieza por la mesa.',
            'El tamaño habla de la carga: las ligeras sirven para afición y trabajo pequeño, una [mordaza de banco mediana de 6″](/products/vise-medium-6) cubre taller y reparación de coches, y las pesadas aguantan fabricación industrial.',
          ],
        },
        {
          title: 'Para qué se usa',
          body: [
            'Trabajo repetitivo o puesta a punto fina: la mordaza libra ambas manos para serrar, limar, roscar, taladrar y desbarbar con seguridad. También mantiene la pieza quieta durante montajes o reparaciones que necesitan presión constante.',
            'La fuerza de sujeción viene del husillo, no del agarre. Cuánta fuerza entrega cada modelo bajo carga está en la referencia de [fuerza de sujeción](/engineering/clamping-force).',
          ],
        },
        {
          title: 'Cómo mantiene la pieza rígida',
          body: [
            'El husillo es el motor: cada vuelta del manubrio empuja la mordaza móvil una distancia fija y multiplica la fuerza del brazo en toneladas de carga. La corredera mantiene el recorrido recto para que las caras queden paralelas y la presión sea uniforme.',
            'Las superficies de agarre importan tanto como el cuerpo — la página de [diseño de mordazas](/engineering/jaw-design) explica por qué las caras van endurecidas y estriadas.',
          ],
        },
        {
          title: 'Los materiales de una buena mordaza',
          body: [
            'El material del cuerpo decide rigidez, peso, amortiguación y cómo falla bajo sobrecarga. La fundición gris es el estándar del taller, el hierro dúctil suma resiliencia a impactos y el acero forjado aguanta el trabajo más duro. La comparación completa vive en la [biblioteca de materiales](/engineering/materials).',
            'Los fabricantes serios verifican la dureza de boca por lote (58-62 HRC es el estándar) y publican prestaciones medidas, no promesas de marketing.',
          ],
        },
        {
          title: 'De catálogo a personalizado',
          body: [
            'Si tu volumen es pequeño, el catálogo lo cubre. Si compras para una marca o lanzas una línea de marca privada, el proceso de [fabricación OEM](/oem-manufacturing) parte de una plataforma consolidada y personaliza mordazas, acabado, base y branding.',
            '¿Nuevo en mordazas? El siguiente artículo detalla el mecanismo: [cómo funciona una mordaza de banco](/knowledge/how-does-a-bench-vise-work).',
          ],
        },
      ],
    },
    {
      slug: 'how-does-a-bench-vise-work',
      navLabel: '¿Cómo funciona una mordaza de banco?',
      metaTitle: '¿Cómo funciona una mordaza de banco? Mecanismo explicado',
      metaDescription:
        'Cómo funciona una mordaza de banco: el husillo mueve la mordaza, la corredera mantiene el paralelismo y la fuerza multiplica el esfuerzo de la mano.',
      kicker: 'Centro de conocimiento',
      h1: '¿Cómo funciona una mordaza de banco?',
      intro:
        'Una mordaza de banco convierte la fuerza rotatoria del manubrio en sujeción rectilínea. Entender el husillo, la corredera y las caras de mordaza explica qué mordaza se siente suave, sujeta fuerte y dura décadas.',
      sections: [
        {
          title: 'El husillo y el manubrio lo mueven todo',
          body: [
            'La mordaza fija va fundida con el cuerpo, atornillado al banco. La mordaza móvil se desliza sobre la corredera y es arrastrada por el husillo. Girar el manubrio avanza el husillo una distancia fija por vuelta — así cada giro se vuelve un apriete pequeño y controlado.',
          ],
        },
        {
          title: 'De dónde sale la fuerza de sujeción',
          body: [
            'La ventaja mecánica hace potente a la mordaza: el brazo largo del manubrio multiplica tu esfuerzo y el filete del tornillo lo convierte en carga lineal muy superior a la manual. La fuerza por modelo se mide y certifica — la página de [fuerza de sujeción](/engineering/clamping-force) muestra cómo se testea y qué pedir.',
          ],
        },
        {
          title: 'La corredera mantiene el paralelismo',
          body: [
            'Mientras el husillo empuja, la corredera evita que la mordaza móvil gire. Con las caras paralelas, la carga se reparte uniforme en vez de aplastar un borde. En trabajo pesado la corredera también soporta el esfuerzo de corte para proteger el husillo.',
          ],
        },
        {
          title: 'Las caras son las que sujetan',
          body: [
            'Las caras estriadas muerden material bruto; las lisas o blandas protegen piezas acabadas. Los insertos van endurecidos y son reemplazables, así la superficie de desgaste es una pieza de servicio y no todo el cuerpo — ver [diseño de mordazas](/engineering/jaw-design) para el patrón y la dureza.',
            'En los modelos pesados el propio cuerpo se construye para golpes y alto par. Una [mordaza pesada de acero forjado](/products/vise-heavy-6) es el ejemplo de esa ingeniería, y la página de [tratamiento térmico](/engineering/heat-treatment) explica cómo las mordazas consiguen su filo duradero.',
          ],
        },
        {
          title: 'Más allá del husillo simple',
          body: [
            'Las bases giratorias, el desbloqueo rápido y las mordazas para tubo son variaciones del mismo principio. Cuando una marca necesita un mecanismo, geometría o acabado concretos, el proceso de [fabricación OEM](/oem-manufacturing) lo desarrolla desde un diseño base consolidado.',
            '¿Prefieres primero la vista por piezas? Lee [piezas de la mordaza explicadas](/knowledge/bench-vise-parts-explained).',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-parts-explained',
      navLabel: 'Piezas de la mordaza explicadas',
      metaTitle: 'Piezas de mordaza de banco: mordazas, husillo, base',
      metaDescription:
        'Cada pieza de una mordaza de banco: mordazas fija y móvil, husillo, corredera, base giratoria y yunque — qué hace, qué se desgasta y qué se reemplaza.',
      kicker: 'Centro de conocimiento',
      h1: 'Piezas de la mordaza de banco, explicadas',
      intro:
        'Una mordaza parece un bloque sólido de hierro, pero es una máquina con pocas piezas bien diseñadas. Conocer cada una — y cuál puede desgastarse, romperse o reemplazarse — ayuda a comprar mejor y mantener mejor.',
      sections: [
        {
          title: 'Las mordazas',
          body: [
            'La mordaza fija va fundida con el cuerpo; la móvil se desliza contra ella. Las caras de trabajo llevan estriado para morder el material bruto, y las mordazas modernas usan insertos reemplazables en lugar de formar parte del cuerpo. La página de [diseño de mordazas](/engineering/jaw-design) cubre patrones y por qué las caras van endurecidas a 58-62 HRC — cifra verificada por lote en el [tratamiento térmico](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'El husillo y el manubrio',
          body: [
            'El husillo convierte el giro del manubrio en movimiento lineal de la mordaza. El paso de su rosca decide tanto la velocidad por vuelta como cuánta fuerza genera. Cuanto más rosca en contacto, más [fuerza de sujeción](/engineering/clamping-force) puede resistir el sistema.',
          ],
        },
        {
          title: 'La corredera',
          body: [
            'La corredera es la lengüeta bajo la mordaza móvil que la mantiene recta y paralela a la fija. En modelos anchos o pesados verás doble corredera para rigidez. Una corredera desgastada o arenosa es una causa principal de mordaza «trabada».',
          ],
        },
        {
          title: 'La base: fija y giratoria',
          body: [
            'La base une la mordaza al banco y, en los modelos giratorios, lleva un mecanismo de bloqueo que rota la cabeza 360°. Una base giratoria reposiciona la pieza sin desatornillar; la fija es más simple y rígida para martillar fuerte.',
          ],
        },
        {
          title: 'El yunque',
          body: [
            'Muchas mordazas medianas y pesadas añaden un yunque tras las mordazas para aplanado y peinado ligero. En modelos específicos esa superficie va mecanizada plana y reforzada, como en la [mordaza con yunque](/products/vise-specialty-anvil).',
            'Toda pieza — insertos de mordaza incluidos — está disponible como recambio. Al comprar en volumen, pedir [piezas de repuesto](/oem-manufacturing) junto a la producción es una opción OEM estándar.',
          ],
        },
      ],
    },
    {
      slug: 'what-is-a-bench-vise-used-for',
      navLabel: '¿Para qué se usa una mordaza de banco?',
      metaTitle: '¿Para qué se usa una mordaza de banco? 8 oficios',
      metaDescription:
        'Para qué se usa una mordaza de banco: reparación de coches, metalurgia, preparación de soldadura, carpintería, fabricación, escuelas y más — con la clase de mordaza para cada uno.',
      kicker: 'Centro de conocimiento',
      h1: '¿Para qué se usa una mordaza de banco?',
      intro:
        'Todo lo que necesite quedar quieto ante una fuerza — serrar, limar, taladrar, martillar, ensamblar — es más rápido, seguro y preciso en una mordaza de banco. Estos son los oficios principales y la clase de mordaza que usa cada uno.',
      sections: [
        {
          title: 'Reparación de coches y talleres',
          body: [
            'Componentes de freno, soportes, mangueras y piezas pequeñas pasan casi todo su tiempo sujetas. Una [mordaza mediana de 6″](/products/vise-medium-6) es la especificación clásica de taller: ancha para la mayoría de piezas, con insertos que agarran sin dañar acabados.',
          ],
        },
        {
          title: 'Metalurgia y fabricación',
          body: [
            'Limar, desbarbar, roscar y rectificar empujan fuerte contra la pieza. Las mordazas pesadas e industriales aguantan el martilleo y el par que las ligeras no pueden. Para fuerzas extremas, una [mordaza pesada de acero forjado](/products/vise-heavy-6) mantiene altura y paralelismo bajo carga, y el cuerpo solo es tan fuerte como el [material](/engineering/materials) que lo forma.',
          ],
        },
        {
          title: 'Preparación de soldadura y rectificado',
          body: [
            'La mordaza sujeta a la pieza a altura de trabajo para puntear, limpiar cordones y rectificar. La base giratoria vale mucho aquí porque las uniones se presentan en ángulos incómodos sin volver a sujetar.',
          ],
        },
        {
          title: 'Carpintería',
          body: [
            'Los talleres usan la mordaza para sujetar tablas al cortar, cepillar y ensamblar. Las mordazas lisas o acolchadas protegen la madera, y la elección del banco importa tanto como la mordaza: el montaje y la carga se cubren en la [guía de elección](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Fabricación industrial',
          body: [
            'En las líneas de producción la mordaza es una estación: ensamblaje, inspección y acabado repetidos a altura de máquina. La [fuerza de sujeción](/engineering/clamping-force) medida y las piezas de desgaste reemplazables mantienen esas estaciones consistentes durante años.',
          ],
        },
        {
          title: 'Escuelas, formación y trabajo especial',
          body: [
            'Los talleres de enseñanza necesitan mordazas económicas y tolerantes al mal uso del novato; los trabajos especiales añaden mordazas para tubo, piezas redondas y otras configuraciones. Cuando la aplicación no encaja con un modelo de catálogo, la vía [OEM](/oem-manufacturing) construye la configuración que necesitas.',
          ],
        },
      ],
    },
    {
      slug: 'types-of-bench-vises-explained',
      navLabel: 'Tipos de mordazas de banco, explicados',
      metaTitle: 'Tipos de mordazas de banco: ligeras, pesadas, para tubo',
      metaDescription:
        'Tipos de mordazas de banco: ligeras, medianas, pesadas, para tubo, fijas vs giratorias y formas especiales — cómo distinguirlas y a qué carga sirve cada una.',
      kicker: 'Centro de conocimiento',
      h1: 'Tipos de mordazas de banco, explicados',
      intro:
        'Las mordazas de banco se dividen en pocas familias — ligeras, medianas y pesadas, para tubo, y formas especiales. Conocer la familia indica la carga de trabajo para la que fue diseñada.',
      sections: [
        {
          title: 'Mordazas ligeras',
          body: [
            'Las ligeras sirven para afición, electrónica y reparos pequeños. Sujetan piezas menos pesadas con menor fuerza y son baratas de montar en un taller casero. Una [mordaza ligera de 4″](/products/vise-light-4) es el punto de entrada típico.',
          ],
        },
        {
          title: 'Mordazas medianas',
          body: [
            'El caballo de batalla del taller. Las medianas soportan metalurgia general, carpintería y reparación de coches, con boca y abertura suficientes para la mayoría de piezas. La [mordaza mediana de 6″](/products/vise-medium-6) es la especificación más común de la clase.',
          ],
        },
        {
          title: 'Mordazas pesadas',
          body: [
            'Construidas para fabricación, minería, astilleros y mantenimiento industrial, las pesadas suman masa, mordazas más anchas y mayor garganta para alto par y martilleo. La [mordaza pesada de 8″](/products/vise-heavy-8) muestra la geometría de cuerpo que sobrevive al abuso continuado.',
          ],
        },
        {
          title: 'Mordazas para tubo',
          body: [
            'Las mordazas para tubo cambian las caras planas por mordazas en V que agarran piezas redondas y tubo grande sin aplastarlo. Los fontaneros, fabricantes y talleres de mantenimiento las usan para roscar y sujetar tubo; una [mordaza para tubo de 6″](/products/vise-pipe-6) cubre el rango común.',
          ],
        },
        {
          title: 'Fijas vs giratorias',
          body: [
            'Cada clase incluye versiones de base fija y giratoria. La giratoria añade rotación de 360° para ángulos incómodos; la fija es más simple, barata y rígida para martillar fuerte. La elección es parte de [cómo elegir una mordaza de banco](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Formas especiales',
          body: [
            'Más allá de las familias rectas hay mordazas con yunque, de mordaza redonda o cuadrada, y formas polivalentes. Son modelos de catálogo por derecho propio y también plataformas de partida para trabajo OEM. La [mordaza especial cuadrada](/products/vise-specialty-square) y la [biblioteca de materiales](/engineering/materials) dan el marco de referencia.',
            'Si tu plan de producto o tu mercado necesita una configuración que no está en la página, la vía [OEM](/oem-manufacturing) convierte una plataforma consolidada en tu propia especificación.',
          ],
        },
      ],
    },
    {
      slug: 'how-to-choose-a-bench-vise',
      navLabel: 'Cómo elegir una mordaza de banco',
      metaTitle: 'Cómo elegir una mordaza de banco | Boca y fuerza',
      metaDescription:
        'Cómo elegir una mordaza de banco: ancho de boca, abertura, fuerza de sujeción, material del cuerpo, base giratoria y montaje — explicado con claridad.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo elegir una mordaza de banco',
      intro:
        'Una mordaza de banco es una inversión a largo plazo en el taller. Acertar con el tamaño, los materiales y las funciones desde el principio ahorra dinero y frustraciones. Esta guía repasa cada factor decisivo.',
      sections: [
        {
          title: 'Ancho y abertura de boca',
          body: [
            'El ancho de boca determina el tamaño de las piezas que puedes sujetar y cómo se distribuye la fuerza. Las de 2″-5″ ligeras sirven para aficionados y trabajo pequeño; las de [6″-8″ medias](/products/vise-medium-6) cubren taller y reparación de coches; las de 8″-10″ pesadas aguantan fabricación industrial.',
            'La abertura (máximo entre mordazas) debe superar tu pieza más grande. Mide tu material más grande antes de elegir.',
          ],
        },
        {
          title: 'Fuerza de sujeción',
          body: [
            '[La fuerza de sujeción](/engineering/clamping-force) — 1200-1500 lbs (ligera) hasta 6000-8000 lbs (pesada) — determina qué puede retener la mordaza bajo presión de trabajo. Más fuerza puede dañar piezas delicadas, así que ajusta la fuerza a la aplicación.',
            'Los fabricantes serios publican [la fuerza por modelo](/engineering/clamping-force), medida bajo par controlado. Pídelo al comparar [proveedores OEM](/oem-manufacturing).',
          ],
        },
        {
          title: 'Material del cuerpo: fundición vs. acero',
          body: [
            '[La fundición gris (HT200/HT250)](/engineering/materials) resiste compresión y es económica: la elección estándar para mordazas ligeras y medias. El acero al carbono (45#) añade resistencia a la tracción y al impacto, esencial en aplicaciones pesadas.',
            'Las caras de mordaza se endurecen aparte (58-62 HRC) para que la superficie de agarre dure más que el cuerpo. Los [insertos reemplazables](/engineering/jaw-design) alargan la vida. Para el cuadro mecánico completo, consulta la [comparación fundición vs. acero](/knowledge/cast-iron-vs-steel-vises).',
          ],
        },
        {
          title: 'Base giratoria y montaje',
          body: [
            'Una base giratoria de 360° reposiciona la pieza sin desatornillar — ideal para talleres que cambian de ángulo. La base fija es más rígida para martillar y más simple.',
            'El montaje también importa: ajusta el tamaño de pernos a tu banco y refuerza la tapa para mordazas pesadas.',
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-ductile-vises',
      navLabel: 'Fundición vs. hierro dúctil',
      metaTitle: 'Mordazas de fundición vs. hierro dúctil | ¿Qué cuerpo es adecuado?',
      metaDescription:
        'Cuerpos de mordaza de banco de fundición gris (HT200/HT250) vs. hierro dúctil (QT450): rigidez, resistencia al impacto, costo y aplicaciones.',
      kicker: 'Centro de conocimiento',
      h1: 'Mordazas de fundición vs. hierro dúctil, comparadas',
      intro:
        'La fundición gris y el hierro dúctil se ven similares en el estante pero se comportan distinto cuando la mordaza aprieta y la pieza pesa. Este artículo compara ambos materiales de cuerpo y señala las páginas de ingeniería donde están los números.',
      sections: [
        {
          title: 'Por qué el material del cuerpo es la primera decisión',
          body: [
            'El cuerpo es toda la mordaza. El material del cuerpo decide rigidez, peso, amortiguación, precio y — lo más importante — cómo falla la mordaza cuando se sobrecarga. Elegir entre [fundición gris](/engineering/materials) y hierro dúctil es una decisión de carga de trabajo, no una preferencia.',
            'Ambos se funden en la fábrica propia de Stavalk en Qingdao y se verifican con certificados de material por lote, así que la comparación es contra grados confirmados, no lenguaje de marketing.',
          ],
        },
        {
          title: 'Fundición gris (HT200 / HT250): el estándar',
          body: [
            'La fundición gris es el caballo de batalla de las mordazas de banco. Resiste bien la compresión, amortigua la vibración mejor que el acero, se mecaniza limpiamente con tolerancias ajustadas y es el material de cuerpo más económico — por eso las mordazas ligeras y medianas la usan. Las escamas de grafito que le dan amortiguación también la hacen frágil ante impactos agudos, así que un golpe fuerte o una carga fuera de eje puede agrietar una esquina.',
            'El [diseño de mordazas](/engineering/jaw-design) reemplazable mantiene los cuerpos de fundición gris serviciables: las caras endurecidas toman el desgaste, así el cuerpo dura, como cubre la página de [tratamiento térmico](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'Hierro dúctil (QT450): resiliencia al impacto',
          body: [
            'El hierro dúctil es el hermano más resistente de la fundición gris. Los nódulos de grafito esferoidal detienen la propagación de grietas, así que los cuerpos de hierro dúctil absorben impactos y piezas pesadas sin astillarse. Se especifica en toda la gama para series de comercio e industrial ligero con uso diario más duro — a un sobrecosto moderado sobre la fundición gris.',
            'La comparación completa de materiales — resistencia, dureza, resistencia al impacto, costo y uso típico — vive en la [Biblioteca de Materiales](/engineering/materials).',
          ],
        },
        {
          title: 'Dónde entra el acero forjado',
          body: [
            'Ningún material fundido iguala al acero forjado en resistencia a la tracción. La serie pesada se forja en acero 45# precisamente para que el cuerpo no flexione bajo [fuerza de sujeción](/engineering/clamping-force) de miles de libras. Si tu banco recibe cargas de choque repetidas, mira la [Mordaza de Banco Pesada de 6″](/products/vise-heavy-6) para ver cómo se construye.',
          ],
        },
        {
          title: 'Cómo elegir entre ambos',
          body: [
            'Iguala el material al trabajo, no al marketing: uso ligero y medio de banco → fundición gris al mejor precio. Talleres ocupados, caídas y cargas fuera de eje → hierro dúctil. Fabricación pesada sostenida y golpeo → acero forjado en una plataforma de servicio pesado.',
            '¿Sopesando opciones? Compárala con el artículo [fundición vs. acero](/knowledge/cast-iron-vs-steel-vises), o envía el perfil de servicio al equipo de ingeniería a través de [fabricación OEM](/oem-manufacturing) para confirmar el grado antes de comenzar el utillaje.',
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-steel-vises',
      navLabel: 'Fundición vs. acero',
      metaTitle: 'Mordazas de fundición vs. acero forjado',
      metaDescription:
        'Mordazas de banco de fundición vs. acero forjado: coste, durabilidad, peso, resistencia al impacto y aplicaciones ideales.',
      kicker: 'Centro de conocimiento',
      h1: 'Mordazas de fundición vs. acero forjado, comparadas',
      intro:
        'Los dos materiales que dominan los cuerpos de las mordazas se comportan de forma muy distinta bajo carga. Esta comparación te ayuda a especificar el cuerpo adecuado.',
      sections: [
        {
          title: 'Por qué la fundición es el caballo de batalla',
          body: [
            '[La fundición gris (HT200/HT250)](/engineering/materials) se cuela a bajo costo, amortigua la vibración mejor que el acero y resiste bien la compresión. Es el estándar para mordazas ligeras, medias y la mayoría de las pesadas.',
            'Su punto débil es la tensión y el impacto: un golpe fuerte en una esquina puede agrietarla. Por eso las aplicaciones de martilleo prefieren acero.',
          ],
        },
        {
          title: 'Por qué el acero forjado gana en impacto',
          body: [
            'Los cuerpos de acero al carbono forjado tienen resistencia a la tracción y tenacidad muy superiores. Resisten grietas bajo [cargas de choque y fuerzas de sujeción extremas](/engineering/clamping-force), ideales para minería, astilleros y fabricación pesada.',
            'La contra es el coste y el peso. El acero es más caro de producir y más pesado de montar.',
          ],
        },
        {
          title: 'El material de las mordazas es aparte',
          body: [
            'Independientemente del cuerpo, las caras de mordaza se tratan térmicamente a 58-62 HRC. El acero de rodamientos GCr15 y el acero de herramientas Cr12MoV son opciones comunes.',
            'Las mordazas de perfil, V o aluminio blando protegen piezas delicadas — una personalización OEM habitual.',
          ],
        },
        {
          title: 'Cómo elegir',
          body: [
            'Para taller general, carpintería, reparación de coches y uso ligero industrial, la fundición es la elección calidad-precio. Para fuerza extrema o entornos duros, el acero forjado es la inversión que se paga con menos mordazas rotas.',
            'Al [abastecerte OEM](/oem-manufacturing), pide la calidad exacta del material (HT200, HT250 o 45#), no solo "fundición" o "acero". Para la alternativa de hierro dúctil, consulta [fundición vs. hierro dúctil](/knowledge/cast-iron-vs-ductile-vises), y cómo se construye el cuerpo forjado en la [Mordaza de Banco Pesada de 6″](/products/vise-heavy-6).',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-maintenance',
      navLabel: 'Mantenimiento de mordazas',
      metaTitle: 'Mantenimiento de mordazas de banco: cuidado y lubricación',
      metaDescription:
        'Cómo mantener una mordaza de banco: lubricación del husillo, alineación de mordazas, base giratoria, yunque y almacenamiento.',
      kicker: 'Centro de conocimiento',
      h1: 'Mantenimiento de mordazas: qué mantiene una mordaza en uso durante décadas',
      intro:
        'Una mordaza de calidad está pensada para durar toda una generación. La mayoría de fallos prematuros vienen de la negligencia, no del uso. Esta guía cubre el mantenimiento que evita que las mordazas se atasquen.',
      sections: [
        {
          title: 'Lubrica el husillo',
          body: [
            'El husillo es la única pieza de precisión. Manténlo engrasado ligeramente y limpia la suciedad antes de que se acumule en las roscas.',
            'Lubrica también la corredera. Un deslizamiento atascado es la causa más común de una mordaza "trabada".',
          ],
        },
        {
          title: 'Mantén las mordazas alineadas',
          body: [
            'Las caras se desgastan con el uso y pierden paralelismo. Comprueba la alineación sujetando una pieza plana y observando si presiona de forma uniforme.',
            'En mordazas con [insertos reemplazables](/engineering/jaw-design), cambia la cara desgastada en lugar de toda la mordaza — [las mordazas de repuesto](/oem-manufacturing) son un recambio OEM habitual.',
          ],
        },
        {
          title: 'Cuida la base giratoria',
          body: [
            'Aprieta bien el bloqueo para evitar que la vibración afloje la base. Limpia los dientes y vuelve a engrasar para que el giro siga siendo suave.',
            'No uses la base como tope de trabajo: la fuerza lateral puede dañar el bloqueo.',
          ],
        },
        {
          title: 'Yunque y almacenamiento',
          body: [
            'El [yunque](/products/vise-specialty-anvil) es para martillar ligero, no para forja pesada. Mantenlo limpio y ligeramente aceitado contra el óxido.',
            'Guarda las mordazas a cubierto en ambientes húmedos. Una capa ligera de aceite previene la corrosión. ¿Estás eligiendo una mordaza en lugar de mantenerla? Empieza en [cómo elegir una mordaza de banco](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
      ],
    },
    {
      slug: 'oem-bench-vise-manufacturing',
      navLabel: 'Fabricación OEM de mordazas',
      metaTitle: 'Fabricación OEM de mordazas: MOQ, personalización y control',
      metaDescription:
        'Guía de fabricación OEM de mordazas de banco: pedidos mínimos, personalización de boca, opciones de base y certificaciones.',
      kicker: 'Centro de conocimiento',
      h1: 'Fabricación OEM de mordazas: cómo se fabrican las mordazas personalizadas',
      intro:
        'Necesites una tirada de marca privada o una mordaza totalmente personalizada, entender el proceso de fabricación — de la fundición a las pruebas de calidad — fija expectativas correctas de coste y plazo.',
      sections: [
        {
          title: 'El proceso de fabricación',
          body: [
            'La producción empieza en la fundición: [piezas de fundición gris](/engineering/materials) o acero forjado, luego mecanizado CNC de caras, deslizaderas y asientos de husillo. El [tratamiento térmico](/engineering/heat-treatment) endurece las mordazas a 58-62 HRC, seguido de rectificado y ensamblaje.',
            'El acabado en polvo o pintura termina el cuerpo y se aplica la marca (grabado láser o etiqueta).',
          ],
        },
        {
          title: 'Pedidos mínimos y plazos',
          body: [
            'Los modelos estándar van de 50-200 uds. según la serie; el utillaje personalizado parte de más. Las muestras salen en 7-14 días y la producción en 25-35 días tras el PO y el depósito.',
            'Combinar varios modelos en un pedido reparte los costes fijos y mejora el precio unitario. Empieza desde un [modelo de referencia](/products/vise-medium-6) para anclar tu especificación.',
          ],
        },
        {
          title: 'Opciones de personalización',
          body: [
            'Ancho y abertura de boca, [patrón de la superficie](/engineering/jaw-design) (ranurada, lisa, V), ángulo de la base, forma del yunque, estilo de manija, color y marca son especificables.',
            'Los proyectos con utillaje añaden cuerpos con forma y fundiciones de marca, con cantidades mayores para amortizar el utillaje.',
          ],
        },
        {
          title: 'Estándares de calidad',
          body: [
            'Las fábricas solventes verifican dureza de boca (58-62 HRC), fuerza de sujeción, par de la base y pruebas cíclicas (10.000+ ciclos) y de salmuera.',
            'Certificaciones a buscar: marcado CE, ISO 9001, ISO 14001 y cumplimiento RoHS. Para el balance completo de materiales, consulta [fundición vs. acero](/knowledge/cast-iron-vs-steel-vises).',
          ],
        },
      ],
    },
  ],
  fr: [
    {
      slug: 'what-is-a-bench-vise',
      navLabel: "Qu'est-ce qu'un étau d'établi ?",
      metaTitle: "Qu'est-ce qu'un étau d'établi ? Guide d'achat",
      metaDescription:
        "Un étau d'établi est un outil de bridage fixe qui maintient une pièce pour couper, percer, meuler et assembler. Fonctionnement, pièces et matériaux.",
      kicker: 'Knowledge',
      h1: "Qu'est-ce qu'un étau d'établi ?",
      intro:
        "Un étau d'établi est un dispositif de bridage mécanique boulonné à l'établi qui maintient une pièce entre deux mâchoires opposées pendant que vous coupez, percez, meulez, limez ou assemblez. Fixe à l'établi, il laisse les deux mains libres et la pièce stable sous la force.",
      sections: [
        {
          title: 'La réponse courte',
          body: [
            "Un étau d'établi est la pince permanente de l'atelier. Deux mâchoires s'ouvrent pour admettre la pièce, puis se referment sous pression de vis jusqu'au blocage. Comme l'étau est boulonné à l'établi, on travaille contre un point fixe au lieu de courir après la pièce.",
            "La gamme de tailles indique la charge : les légers servent à la petite mécanique et à la maquette, un [étau d'établi moyen de 6″](/products/vise-medium-6) couvre atelier et réparation automobile, et les lourds supportent la fabrication industrielle.",
          ],
        },
        {
          title: "À quoi sert un étau d'établi",
          body: [
            'Travail répétitif ou ajustage fin : l\'étau libère les deux mains pour scier, limer, tarauder, percer et ébavurer en sécurité. Il maintient aussi la pièce immobile pendant le montage ou les réparations qui exigent une pression constante.',
            "La force de serrage vient de la vis, pas de votre main. La force réelle de chaque modèle sous charge est décrite dans la référence [force de serrage](/engineering/clamping-force).",
          ],
        },
        {
          title: "Comment il maintient la pièce rigide",
          body: [
            "La vis mère est le moteur : chaque tour de manivelle avance la mâchoire mobile d'un pas fixe et multiplie la force du bras en tonnes de charge. Le coulisseau garde la course droite pour que les faces restent parallèles et la pression uniforme.",
            "Les surfaces de prise comptent autant que le bâti — la page [conception de mâchoires](/engineering/jaw-design) explique pourquoi les faces sont trempées et striées.",
          ],
        },
        {
          title: 'Les matériaux d\'un bon étau',
          body: [
            "Le matériau du corps décide la rigidité, le poids, l'amortissement et la façon dont l'étau cède sous surcharge. La fonte grise est le standard de l'atelier, la fonte ductile ajoute la résilience aux chocs et l'acier forgé tient les travaux les plus durs. La comparaison complète vit dans la [bibliothèque des matériaux](/engineering/materials).",
            "Les fabricants sérieux vérifient la dureté des mâchoires par lot (58-62 HRC est la norme) et publient des performances mesurées, pas du marketing.",
          ],
        },
        {
          title: "Du catalogue au sur-mesure",
          body: [
            "Si votre volume est faible, le catalogue le couvre. Si vous approvisionnez une marque ou lancez une gamme privée, le processus de [fabrication OEM](/oem-manufacturing) part d'une plateforme éprouvée et personnalise mâchoires, finition, base et marquage.",
            "Nouveau sur les étaux ? L'article suivant détaille le mécanisme : [comment fonctionne un étau d'établi](/knowledge/how-does-a-bench-vise-work).",
          ],
        },
      ],
    },
    {
      slug: 'how-does-a-bench-vise-work',
      navLabel: "Comment fonctionne un étau d'établi ?",
      metaTitle: "Comment fonctionne un étau d'établi ? Mécanisme expliqué",
      metaDescription:
        "Comment un étau d'établi fonctionne : la vis mère pousse la mâchoire, le coulisseau garde le parallélisme et la force multiplie l'effort de la main.",
      kicker: 'Knowledge',
      h1: "Comment fonctionne un étau d'établi ?",
      intro:
        "Un étau d'établi transforme la force rotative de la manivelle en serrage rectiligne. Comprendre la vis mère, le coulisseau et les faces de mâchoires explique quel étau est doux, tient fort et dure des décennies.",
      sections: [
        {
          title: 'La vis et la manivelle entraînent tout',
          body: [
            "La mâchoire fixe est coulée avec le corps, boulonné à l'établi. La mâchoire mobile glisse sur le coulisseau et est tirée par la vis mère. Tourner la manivelle avance la vis d'un pas fixe par rotation — chaque tour devient ainsi un serrage précis et contrôlé.",
          ],
        },
        {
          title: "D'où vient la force de serrage",
          body: [
            "L'avantage mécanique rend l'étau puissant : le long bras de manivelle multiplie votre effort et le filet de vis le convertit en charge linéaire bien supérieure au geste manuel. La force par modèle est mesurée et certifiée — la page [force de serrage](/engineering/clamping-force) montre comment elle est testée et ce qu'il faut demander.",
          ],
        },
        {
          title: 'Le coulisseau garde les mâchoires parallèles',
          body: [
            "Pendant que la vis pousse, le coulisseau empêche la mâchoire mobile de tourner. Des faces parallèles répartissent la charge uniformément au lieu d'écraser un bord. Sur les étaux lourds, le coulisseau porte aussi l'effort de cisaillement pour protéger la vis.",
          ],
        },
        {
          title: 'Les faces font le serrage réel',
          body: [
            "Les faces striées mordent dans la matière brute ; les faces lisses ou tendres protègent les pièces finies. Les inserts sont trempés et remplaçables, si bien que la surface d'usure est une pièce de service, pas tout le corps — voir [conception de mâchoires](/engineering/jaw-design) pour le motif et la dureté.",
            "Sur les modèles lourds, le corps lui-même est conçu pour le martelage et le fort couple. Un [étau lourd en acier forgé](/products/vise-heavy-6) illustre cette ingénierie, et la page [traitement thermique](/engineering/heat-treatment) explique l'arête durable des mâchoires.",
          ],
        },
        {
          title: 'Au-delà de la simple vis',
          body: [
            "Bases orientables, desserrage rapide et mâchoires à tube sont des variantes du même principe. Quand une marque a besoin d'un mécanisme, d'une géométrie ou d'une finition précis, le processus de [fabrication OEM](/oem-manufacturing) le développe depuis une base éprouvée.",
            "Préférez d'abord la vue par pièces ? Lisez [les pièces d'un étau expliquées](/knowledge/bench-vise-parts-explained).",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-parts-explained',
      navLabel: "Les pièces d'un étau expliquées",
      metaTitle: "Les pièces d'un étau d'établi : mâchoires, vis, base",
      metaDescription:
        "Chaque pièce d'un étau d'établi : mâchoires fixe et mobile, vis mère, coulisseau, base orientable et enclume — son rôle, ce qui s'use et ce qui se remplace.",
      kicker: 'Knowledge',
      h1: "Les pièces d'un étau d'établi, expliquées",
      intro:
        "Un étau ressemble à un bloc de fonte, mais c'est une machine avec quelques pièces bien conçues. Connaître chacune — et laquelle peut s'user, casser ou se remplacer — aide à mieux acheter et mieux entretenir.",
      sections: [
        {
          title: 'Les mâchoires',
          body: [
            "La mâchoire fixe est coulée avec le corps ; la mobile glisse contre elle. Les faces de travail portent un motif strié pour mordre la matière brute, et les étaux modernes utilisent des inserts remplaçables plutôt que des faces moulées. La page [conception de mâchoires](/engineering/jaw-design) couvre les motifs et pourquoi les faces sont trempées à 58-62 HRC — une valeur vérifiée par lot au [traitement thermique](/engineering/heat-treatment).",
          ],
        },
        {
          title: 'La vis mère et la manivelle',
          body: [
            "La vis mère transforme la rotation de la manivelle en mouvement linéaire de la mâchoire. Son pas décide à la fois la vitesse par tour et la force générable. Plus la vis engage de filet, plus elle peut tenir de [force de serrage](/engineering/clamping-force).",
          ],
        },
        {
          title: 'Le coulisseau',
          body: [
            "Le coulisseau est la languette sous la mâchoire mobile qui la maintient droite et parallèle à la fixe. Sur les étaux larges ou lourds, on trouve un double coulisseau pour la rigidité. Un coulisseau usé ou sableux est une cause majeure d'étau « grippé ».",
          ],
        },
        {
          title: 'La base : fixe et orientable',
          body: [
            "La base relie l'étau à l'établi et, sur les modèles orientables, porte un mécanisme de verrouillage qui fait pivoter la tête à 360°. Une base orientable repositionne la pièce sans dévisser ; une base fixe est plus simple et plus rigide pour le martelage lourd.",
          ],
        },
        {
          title: "L'enclume",
          body: [
            "Beaucoup d'étaux moyens et lourds ajoutent une enclume plate derrière les mâchoires pour les petits aplatissements et matage. Sur les modèles dédiés, cette surface est usinée plane et renforcée, comme sur l'[étau à enclume](/products/vise-specialty-anvil).",
            "Toute pièce — inserts de mâchoires compris — est disponible en rechange. En achetant en volume, commander des [pièces de rechange](/oem-manufacturing) avec votre production est une option OEM standard.",
          ],
        },
      ],
    },
    {
      slug: 'what-is-a-bench-vise-used-for',
      navLabel: "À quoi sert un étau d'établi ?",
      metaTitle: "À quoi sert un étau d'établi ? 8 métiers clés",
      metaDescription:
        "À quoi sert un étau d'établi : réparation automobile, travail des métaux, préparation de soudure, menuiserie, fabrication industrielle, écoles et plus — avec la classe d'étau pour chacun.",
      kicker: 'Knowledge',
      h1: "À quoi sert un étau d'établi ?",
      intro:
        "Tout ce qui doit rester immobile sous une force — scier, limer, percer, marteler, assembler — est plus rapide, sûr et précis dans un étau d'établi. Voici les métiers essentiels et la classe d'étau qu'ils utilisent.",
      sections: [
        {
          title: 'Réparation automobile et garages',
          body: [
            "Composants de frein, supports, durites et pièces petites passent presque tout leur temps bridés. Un [étau d'établi moyen de 6″](/products/vise-medium-6) est la spécification classique de garage : assez large pour la plupart des pièces, avec des inserts qui serrent sans abîmer les finitions.",
          ],
        },
        {
          title: 'Travail des métaux et fabrication',
          body: [
            "Limer, ébavurer, tarauder et meuler poussent fort contre la pièce. Les étaux lourds et industriels encaissent le martelage et le couple que les légers ne peuvent pas. Pour les forces extrêmes, un [étau lourd en acier forgé](/products/vise-heavy-6) conserve hauteur et parallélisme sous charge, et le bâti n'est aussi fort que le [matériau de corps](/engineering/materials).",
          ],
        },
        {
          title: 'Préparation de soudure et meulage',
          body: [
            "L'étau tient la pièce à hauteur de travail pour pointer, nettoyer les cordons et meuler. La base orientable compte ici, car les joints se présentent à des angles inconfortables sans re-serrer.",
          ],
        },
        {
          title: 'Menuiserie',
          body: [
            "Les ateliers utilisent l'étau pour tenir les planches lors du tronçonnage, du rabotage et de l'assemblage. Les mâchoires lisses ou rembourrées protègent le bois, et le choix de l'établi compte autant que l'étau : le montage et la charge sont couverts dans le [guide de choix](/knowledge/how-to-choose-a-bench-vise).",
          ],
        },
        {
          title: 'Fabrication industrielle',
          body: [
            "Sur les lignes de production, l'étau devient un poste : assemblage, contrôle et finition répétés à hauteur de machine. Une [force de serrage](/engineering/clamping-force) mesurée et des pièces d'usure remplaçables gardent ces postes constants pendant des années.",
          ],
        },
        {
          title: 'Écoles, formation et travail spécifique',
          body: [
            "Les ateliers d'enseignement ont besoin d'étaux économiques et tolérants au mauvais usage des débutants ; les travaux spécifiques ajoutent des mâchoires à tube, des pièces rondes et d'autres configurations. Quand l'application ne correspond pas à un modèle du catalogue, la voie [OEM](/oem-manufacturing) construit la configuration qu'il vous faut.",
          ],
        },
      ],
    },
    {
      slug: 'types-of-bench-vises-explained',
      navLabel: "Les types d'étaux d'établi expliqués",
      metaTitle: "Types d'étaux d'établi : légers, lourds, à tube",
      metaDescription:
        "Types d'étaux d'établi : légers, moyens, lourds, à tube, fixes vs orientables et formes spéciales — comment les distinguer et quelle charge chacun supporte.",
      kicker: 'Knowledge',
      h1: "Les types d'étaux d'établi, expliqués",
      intro:
        "Les étaux d'établi se divisent en quelques familles — légers, moyens et lourds, à tube, et formes spéciales. Connaître la famille indique la charge de travail pour laquelle il est conçu.",
      sections: [
        {
          title: 'Les étaux légers',
          body: [
            "Les légers conviennent au bricolage, à l'électronique et aux petits travaux. Ils serrent des pièces légères avec moins de force et sont économiques à monter dans un atelier à la maison. Un [étau léger de 4″](/products/vise-light-4) est le point d'entrée typique.",
          ],
        },
        {
          title: 'Les étaux moyens',
          body: [
            "Le cheval de trait de l'atelier. Les étaux moyens supportent le travail général des métaux, la menuiserie et la réparation automobile, avec une mâchoire et une ouverture suffisantes pour la plupart des pièces. L'[étau d'établi moyen de 6″](/products/vise-medium-6) est la spécification la plus courante de la classe.",
          ],
        },
        {
          title: 'Les étaux lourds',
          body: [
            "Conçus pour la fabrication, les mines, les chantiers navals et la maintenance industrielle, les étaux lourds ajoutent de la masse, des mâchoires plus larges et une gorge plus profonde pour le couple élevé et le martelage. L'[étau lourd de 8″](/products/vise-heavy-8) montre la géométrie de corps qui survit à un usage intensif.",
          ],
        },
        {
          title: 'Les étaux à tube',
          body: [
            "Les étaux à tube remplacent les mâchoires plates par des mâchoires en V qui saisissent les pièces rondes et les gros tubes sans les aplatir. Plombiers, fabricants et ateliers de maintenance s'en servent pour fileter et tenir le tube ; un [étau à tube de 6″](/products/vise-pipe-6) couvre la plage courante.",
          ],
        },
        {
          title: 'Fixes vs orientables',
          body: [
            "Chaque classe existe en version à base fixe et orientable. L'orientable ajoute 360° de rotation pour les angles inconfortables ; la fixe est plus simple, moins chère et plus rigide pour le martelage lourd. Ce choix fait partie de [comment choisir un étau d'établi](/knowledge/how-to-choose-a-bench-vise).",
          ],
        },
        {
          title: 'Les formes spéciales',
          body: [
            "Au-delà des familles droites, il y a les étaux à enclume, les variantes à mâchoires rondes ou carrées et les formes polyvalentes. Ce sont des modèles de catalogue à part entière et aussi des plateformes de départ pour le travail OEM. L'[étau spécial à mâchoires carrées](/products/vise-specialty-square) et la [bibliothèque des matériaux](/engineering/materials) donnent le cadre de référence.",
            "Si votre plan produit ou votre marché exige une configuration qui n'est pas en page, la voie [OEM](/oem-manufacturing) transforme une plateforme éprouvée en votre propre spécification.",
          ],
        },
      ],
    },
    {
      slug: 'how-to-choose-a-bench-vise',
      navLabel: "Comment choisir un étau d'établi",
      metaTitle: "Comment choisir un étau d'établi | Largeur de mâchoire et force de serrage",
      metaDescription:
        "Comment choisir un étau d'établi : largeur de mâchoire, ouverture, force de serrage, matériau du corps, base orientable et montage — expliqué clairement.",
      kicker: 'Knowledge',
      h1: "Comment choisir un étau d'établi",
      intro:
        "Un étau d'établi est un investissement à long terme pour l'atelier. Bien choisir la taille, les matériaux et les fonctionnalités dès le départ évite dépenses et frustration. Ce guide passe en revue chaque critère de décision.",
      sections: [
        {
          title: 'Largeur et ouverture de mâchoire',
          body: [
            "La largeur de mâchoire détermine la taille des pièces que vous pouvez saisir et la répartition de la force. Les 2″-5″ légers conviennent aux amateurs et aux petits travaux ; les [6″-8″ moyens](/products/vise-medium-6) couvrent la plupart des ateliers et de la réparation automobile ; les 8″-10″ lourds supportent la fabrication industrielle.",
            "L'ouverture (écart maximum entre mâchoires fermées et ouvertes) doit dépasser votre pièce la plus grande. Mesurez votre matériau le plus volumineux avant de choisir.",
          ],
        },
        {
          title: 'Force de serrage',
          body: [
            '[La force de serrage](/engineering/clamping-force) — de 1200-1500 lbs pour les légers jusqu\'à 6000-8000 lbs pour les lourds — détermine ce que l\'étau peut retenir sous pression de travail. Au-delà d\'un certain seuil, une force excessive peut endommager les pièces délicates, il faut donc adapter la force à l\'application.',
            "Les fabricants réputés publient [la force de serrage par modèle](/engineering/clamping-force), mesurée sous couple contrôlé. Exigez-la lors de la comparaison entre [fournisseurs OEM](/oem-manufacturing).",
          ],
        },
        {
          title: "Matériau du corps : fonte vs acier forgé",
          body: [
            "[La fonte grise (HT200/HT250)](/engineering/materials) résiste à la compression et est économique — le choix standard pour les étaux légers et moyens. L'acier forgé ou moulé au carbone (45#) apporte une résistance à la traction et des propriétés de choc supérieures, indispensables pour les étaux lourds et les applications à chocs.",
            "Les faces des mâchoires sont trempées séparément (58-62 HRC) pour que la surface de prise dure plus longtemps que le corps. Les [inserts de mâchoires remplaçables](/engineering/jaw-design) prolongent la durée de vie. Pour le tableau mécanique complet, consultez la [comparaison fonte vs acier forgé](/knowledge/cast-iron-vs-steel-vises).",
          ],
        },
        {
          title: 'Base orientable et montage',
          body: [
            "Une base orientable à 360° repositionne la pièce sans déboulonner — idéale pour les ateliers qui changent d'angle de travail. Une base fixe est plus rigide pour le martelage lourd, plus simple et moins coûteuse.",
            "Le montage est également important : adaptez la taille des boulons à votre établi et renforcez le plateau pour les étaux lourds. Un établi fin et mou réduit à néant les mérites d'un bon étau.",
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-ductile-vises',
      navLabel: 'Fonte vs fonte ductile',
      metaTitle: "Étaux de fonte vs fonte ductile | Quel corps choisir ?",
      metaDescription:
        "Corps d'étaux d'établi en fonte grise (HT200/HT250) vs fonte ductile (QT450) : rigidité, résistance aux chocs, coût et applications.",
      kicker: 'Knowledge',
      h1: "Étaux d'établi en fonte vs fonte ductile, comparés",
      intro:
        "La fonte grise et la fonte ductile se ressemblent en rayon mais se comportent différemment quand le serrage se resserre et que la pièce devient lourde. Cet article compare les deux matériaux de corps et renvoie aux pages d'ingénierie où les chiffres sont sourcés.",
      sections: [
        {
          title: 'Pourquoi le matériau du corps est la première décision',
          body: [
            "Le corps, c'est tout l'étau. Le matériau du corps décide de la rigidité, du poids, de l'amortissement, du prix et — surtout — de la façon dont l'étau cède en cas de surcharge. Choisir entre [fonte grise](/engineering/materials) et fonte ductile est une décision de charge de travail, pas une préférence.",
            "Les deux sont coulés dans la fonderie Stavalk de Qingdao et vérifiés avec des certificats de matériaux par lot, la comparaison ci-dessous repose donc sur des nuances confirmées, pas sur du langage marketing.",
          ],
        },
        {
          title: 'Fonte grise (HT200/HT250) : le standard',
          body: [
            "La fonte grise est le cheval de trait des étaux d'établi. Elle résiste bien à la compression, amortit mieux les vibrations que l'acier, s'usine proprement à tolérances serrées et est le matériau de corps le plus économique — c'est pourquoi les étaux légers et moyens l'utilisent. Les lamelles de graphite qui lui donnent l'amortissement la rendent aussi fragile aux chocs vifs : un coup de marteau ou une charge hors axe peut fissurer un coin.",
            "La [conception de mâchoires](/engineering/jaw-design) remplaçable garde les corps de fonte grise réparables : les faces trempées prennent l'usure, le corps dure, comme l'explique la page [traitement thermique](/engineering/heat-treatment).",
          ],
        },
        {
          title: 'Fonte ductile (QT450) : la résilience aux chocs',
          body: [
            "La fonte ductile est la sœur plus résistante de la fonte grise. Les nodules de graphite sphéroïdal arrêtent la propagation des fissures, si bien que les corps en fonte ductile absorbent les chocs et les pièces lourdes sans s'écailler. Elle est spécifiée dans la gamme pour les séries de commerce et d'industrie légère soumises à un usage quotidien plus dur — contre un modeste supplément de coût sur la fonte grise.",
            "La comparaison complète des matériaux — résistance, dureté, résistance aux chocs, coût et usage typique — vit sur la [Bibliothèque des Matériaux](/engineering/materials).",
          ],
        },
        {
          title: "Où l'acier forgé intervient",
          body: [
            "Aucun matériau moulé n'égale l'acier forgé en résistance à la traction. La série lourde est forgée en acier 45# précisément pour que son corps ne fléchisse pas sous une [force de serrage](/engineering/clamping-force) de plusieurs milliers de livres. Si votre établi subit des chocs répétés, regardez l'[étau d'établi lourd de 6″](/products/vise-heavy-6) pour voir comment c'est construit.",
          ],
        },
        {
          title: 'Comment choisir entre les deux',
          body: [
            "Adaptez le matériau au travail, pas au marketing : usage léger et moyen d'établi → fonte grise au meilleur prix. Ateliers actifs, chutes et charges hors axe → fonte ductile. Fabrication lourde soutenue et martelage → acier forgé sur une plateforme lourde.",
            "Encore indécis ? Comparez avec l'article [fonte vs acier forgé](/knowledge/cast-iron-vs-steel-vises), ou envoyez le profil de service à l'équipe d'ingénierie via la page [fabrication OEM](/oem-manufacturing) pour confirmer la nuance avant le début de l'outillage.",
          ],
        },
      ],
    },
    {
      slug: 'cast-iron-vs-steel-vises',
      navLabel: 'Fonte vs acier forgé',
      metaTitle: "Étaux d'établi en fonte vs acier forgé, comparés",
      metaDescription:
        "Étaux d'établi en fonte vs acier forgé : coût, durabilité, poids, résistance aux chocs et applications adaptées à chaque matériau.",
      kicker: 'Knowledge',
      h1: "Étaux d'établi en fonte vs acier forgé, comparés",
      intro:
        "Les deux matériaux qui dominent les corps d'étaux se comportent très différemment sous charge. Cette comparaison vous aide à spécifier le bon corps pour le job.",
      sections: [
        {
          title: 'Pourquoi la fonte est le pilier de l\'atelier',
          body: [
            "[La fonte grise (HT200/HT250)](/engineering/materials) est coulée à coût relativement faible, amortit mieux les vibrations que l'acier et résiste bien à la compression. C'est le standard pour les étaux légers, moyens et la plupart des lourds.",
            "Sa faiblesse est la traction et le choc : un coup violent sur un coin peut la fissurer. C'est pourquoi les applications à martelage lourd préfèrent l'acier.",
          ],
        },
        {
          title: 'Pourquoi l\'acier forgé l\'emporte sur les chocs',
          body: [
            "Les corps en acier au carbone forgé (45# ou supérieur) offrent une résistance à la traction et une ténacité nettement supérieures. Ils résistent à la fissuration sous [charges de choc et forces de serrage extrêmes](/engineering/clamping-force), ce qui en fait le choix pour les mines, les chantiers navals et la fabrication lourde.",
            "L'inconvénient est le coût et le poids. Les étaux en acier sont plus coûteux à produire et plus lourds à installer.",
          ],
        },
        {
          title: 'Le matériau des mâchoires est distinct',
          body: [
            "Quel que soit le corps, les faces des mâchoires sont traitées thermiquement à 58-62 HRC pour résister à l'usure. L'acier à roulements GCr15 et l'acier à outils Cr12MoV sont des choix courants ; les deux conservent leur arête après serrages répétés.",
            "Les mâchoires profilées, à rainure V ou en aluminium mou protègent les pièces délicates — une personnalisation OEM fréquente.",
          ],
        },
        {
          title: 'Comment choisir entre les deux',
          body: [
            "Pour l'atelier général, la menuiserie, la réparation automobile et l'usage industriel léger, la fonte est le bon choix rapport qualité-pour. Pour les forces extrêmes, le martelage ou les environnements industriels difficiles, l'acier forgé est l'investissement qui s'amortit en étaux moins cassés.",
            "Lors d'approvisionnement [OEM](/oem-manufacturing), demandez à l'usine de spécifier la qualité exacte du matériau — HT200 vs HT250 vs acier 45# — plutôt que simplement « fonte » ou « acier ». Voyez aussi l'alternative en fonte ductile sur [fonte vs fonte ductile](/knowledge/cast-iron-vs-ductile-vises) et comment le corps forgé est construit sur l'[étau d'établi lourd de 6″](/products/vise-heavy-6).",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-maintenance',
      navLabel: "Entretien de l'étau d'établi",
      metaTitle: "Entretien de l'étau d'établi : lubrification et soins",
      metaDescription:
        "Comment entretenir un étau d'établi : lubrification du filet, alignement des mâchoires, entretien de la base orientable, soins de l'enclume et stockage pour une longue durée de vie.",
      kicker: 'Knowledge',
      h1: "Entretien de l'étau d'établi : ce qui fait durer un étau pendant des décennies",
      intro:
        "Un étau d'établi de qualité est conçu pour durer une génération. La plupart des défaillances prématurées viennent de la négligence, pas de l'usage. Ce guide couvre l'entretien qui empêche les étaux de se gripper et de s'user.",
      sections: [
        {
          title: 'Lubrifier le filet de la vis',
          body: [
            "La vis principale est la seule pièce mobile de précision de l'étau. Maintenez-la légèrement graissée — la graisse au lithium ou multi-usages convient — et enlevez la saleté avant qu'elle ne s'incruste dans les filets.",
            "Lubrifiez aussi le guide de coulissement. Un coulissement grippé ou sablonneux est la cause la plus fréquente d'un étau « bloqué ».",
          ],
        },
        {
          title: 'Maintenir l\'alignement des mâchoires',
          body: [
            "Les faces des mâchoires s'usent avec le temps ; les crans s'aplatissent et les surfaces dévient du parallélisme. Vérifiez l'alignement en serrant une pièce plate et en observant si la pression est uniforme.",
            "Sur les étaux à [inserts de mâchoires remplaçables](/engineering/jaw-design), remplacez les faces usées plutôt que tout l'étau — [les mâchoires de rechange](/oem-manufacturing) sont une pièce OEM courante. C'est le moyen le plus économique de restaurer la prise.",
          ],
        },
        {
          title: 'Soigner la base orientable',
          body: [
            "Serrez fermement le levier de blocage de la base orientable pour éviter que les vibrations ne l'endent pendant le travail. Nettoyez périodiquement les dents de la base et réappliquez de la graisse pour maintenir la rotation en douceur.",
            "N'utilisez pas la base comme butée de travail : une force latérale excessive agit contre le mécanisme de blocage et peut l'abîmer.",
          ],
        },
        {
          title: 'Enclume et stockage',
          body: [
            "La surface de l'[enclume](/products/vise-specialty-anvil) est destinée au martelage léger, pas à la forge lourde — l'utiliser comme enclume de forge fissure les corps en fonte. Gardez-la propre et légèrement huilée pour prévenir la rouille.",
            "Rangez les étaux à l'abri dans les environnements humides. Une fine couche d'huile sur les surfaces non peintes prévient la corrosion et maintient la finition. Vous choisissez un étau plutôt que de l'entretenir ? Commencez par [comment choisir un étau d'établi](/knowledge/how-to-choose-a-bench-vise).",
          ],
        },
      ],
    },
    {
      slug: 'oem-bench-vise-manufacturing',
      navLabel: "Fabrication OEM d'étaux d'établi",
      metaTitle: "Fabrication OEM d'étaux d'établi : MOQ, personnalisation et contrôle qualité",
      metaDescription:
        "Guide de fabrication OEM d'étaux d'établi : quantités minimales, personnalisation de mâchoires, options de base orientable, normes de qualité et certifications.",
      kicker: 'Knowledge',
      h1: "Fabrication OEM d'étaux d'établi : comment les étaux personnalisés sont fabriqués",
      intro:
        "Que vous ayez besoin d'une production à marque privée ou d'un étau entièrement personnalisé, comprendre le processus de fabrication — de la fonderie aux tests de qualité — fixe les bonnes attentes en termes de coût, délai et MOQ.",
      sections: [
        {
          title: 'Le processus de fabrication',
          body: [
            "La production commence par la coulée : [pièces en fonte grise](/engineering/materials) ou acier forgé, puis usinage CNC de précision des faces de mâchoires, des glissières et des sièges de vis. Le [traitement thermique](/engineering/heat-treatment) durcit les faces des mâchoires à 58-62 HRC, suivi du rectifage et de l'assemblage final.",
            "Le revêtement en poudre ou la peinture termine le corps, et le marquage (gravure laser, marques de moulage ou étiquettes) est appliqué selon vos graphiques.",
          ],
        },
        {
          title: 'MOQ et délais de livraison',
          body: [
            "Les modèles standard vont de 50 à 200 pièces selon la série ; les outillages personnalisés partent de quantités supérieures. Les échantillons sont expédiés en 7 à 14 jours et la production en série prend 25 à 35 jours après confirmation du PO et du versement.",
            "Combiner plusieurs modèles dans une seule commande répartit les coûts fixes et améliore le prix unitaire — un moyen courant pour les marques de tester plusieurs SKUs à la fois. Partez d'un [modèle de référence](/products/vise-medium-6) pour ancrer votre spécification.",
          ],
        },
        {
          title: 'Options de personnalisation',
          body: [
            "Largeur et ouverture de mâchoire, [motif de surface des mâchoires](/engineering/jaw-design) (serré, lisse, rainure V), angle de la base orientable, forme de l'enclume, style de manivelle, couleur du corps et marquage sont tous spécifiables.",
            "Les projets avec outillage personnalisé ajoutent des corps profilés, des fontes de marque et des géométries de mâchoires uniques, à partir de quantités supérieures pour amortir le coût de l'outillage.",
          ],
        },
        {
          title: 'Normes de qualité',
          body: [
            "Les usines réputées vérifient la dureté des mâchoires (58-62 HRC), la force de serrage par modèle, le couple de la base orientable et effectuent des tests de durabilité cyclique (10 000+ cycles ouverture/fermeture) ainsi que des tests de corrosion en brouillard salin.",
            "Certifications à rechercher : marquage CE, ISO 9001 pour la gestion de la qualité, ISO 14001 pour la gestion environnementale et conformité RoHS. Pour l'équilibre complet des matériaux, consultez [fonte vs acier forgé](/knowledge/cast-iron-vs-steel-vises).",
          ],
        },
      ],
    },
  ],
}

export interface KnowledgeMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const knowledgeMeta: Localized<KnowledgeMeta> = {
  en: {
    metaTitle: 'Bench Vise Knowledge Center | Selection & Manufacturing Guides',
    metaDescription:
      'How to choose a bench vise, cast iron vs steel, jaw hardness and OEM manufacturing — plain-language guides for buyers and sourcing teams.',
    h1: 'Bench Vise Knowledge Center',
  },
  es: {
    metaTitle: 'Centro de conocimiento | Guías de selección y fabricación de mordazas',
    metaDescription:
      'Cómo elegir una mordaza de banco, hierro fundido vs acero, dureza de boca y fabricación OEM — guías claras para compradores.',
    h1: 'Centro de conocimiento sobre mordazas de banco',
  },
  fr: {
    metaTitle: "Centre de connaissances | Guides de sélection et de fabrication d'étaux d'établi",
    metaDescription:
      "Comment choisir un étau d'établi, fonte vs acier, dureté des mâchoires et fabrication OEM — des guides simples pour les acheteurs.",
    h1: "Centre de connaissances sur les étaux d'établi",
  },
}

export function getArticle(locale: Locale, slug: string): KnowledgeArticle | undefined {
  return (knowledge[locale] ?? knowledge.en).find((a) => a.slug === slug)
}