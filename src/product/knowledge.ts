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
      slug: 'bench-vise-size-guide',
      navLabel: 'Bench Vise Size Guide',
      metaTitle: 'Bench Vise Size Guide: Jaw Width, Opening, Throat',
      metaDescription:
        'How bench vise sizes work: jaw width is the name, opening and throat depth are the reach. Size ranges by duty class and what to measure before buying.',
      kicker: 'Knowledge',
      h1: 'Bench Vise Size Guide',
      intro:
        'A "6-inch" vise is not 6 inches of everything — the number is the jaw width, and opening and throat depth are separate numbers that decide what the vise can actually hold. This guide explains how to read vise sizes.',
      sections: [
        {
          title: 'How a Vise Is Sized',
          body: [
            'The naming number on a bench vise is the width of the jaws — a "6″ bench vise" has jaws roughly 6 inches wide. Everything else (opening, throat depth, weight) is a separate specification printed below it.',
            'Because jaw width is the headline number, it dominates a first comparison. But two vises with the same jaw width can have very different openings and throat depths.',
          ],
        },
        {
          title: 'The Duty Ladder and Typical Sizes',
          body: [
            'Bench vises cluster into light, medium and heavy duty, each with a familiar size range: light-duty vises run 2″-5″ jaws, medium-duty 5″-8″, and heavy-duty 8″ and up. A [4″ light-duty bench vise](/products/vise-light-4) suits hobby work, the [6″ medium-duty bench vise](/products/vise-medium-6) is the workshop standard, and an [8″ heavy-duty bench vise](/products/vise-heavy-8) handles fabrication.',
            'Bigger jaws mean more mass, which means more rigidity — but also more bench. The heavier the vise, the stronger the bench top it needs.',
          ],
        },
        {
          title: 'Opening: The Corner You Actually Hit',
          body: [
            'The jaw opening is the biggest gap between the jaws, and it is the number that really matters when you clamp a thick workpiece. A generous opening swallows pipe, castings and assemblies that an undersized vise simply cannot hold. The dedicated guide covers it in full: [how much jaw opening you need](/knowledge/how-much-jaw-opening-do-you-need).',
          ],
        },
        {
          title: 'Throat Depth: How Far the Work Can Reach',
          body: [
            'Throat depth is the reach from the top edge of the jaws back to the body — the space into which a workpiece stands while you work the top surface. It limits files, saws and grinding work on vertical faces. Details are in [how much throat depth you need](/knowledge/how-much-throat-depth-do-you-need).',
          ],
        },
        {
          title: 'Weight, Mounting and the Bench',
          body: [
            'A heavy-duty vise can weigh 50-80 lbs and puts real load through the bench. Match bolt size and spacing to the top, and reinforce thin faces. Mounting quality decides whether the [clamping force](/engineering/clamping-force) ends up in the workpiece or in a flexing table.',
          ],
        },
        {
          title: 'Size Is Only Part of the Spec',
          body: [
            'Size tells you capacity, not longevity. The [body material](/engineering/materials) and jaw construction decide how long that capacity lasts under use, which is why the full decision process starts with [how to choose a bench vise](/knowledge/how-to-choose-a-bench-vise).',
            'For volume or OEM programs, the [manufacturing team](/oem-manufacturing) can size a custom opening and throat for your application from a proven platform.',
          ],
        },
      ],
    },
    {
      slug: '4-inch-vs-6-inch-bench-vise',
      navLabel: '4″ vs 6″ Bench Vise',
      metaTitle: '4″ vs 6″ Bench Vise: Which Size Do You Need?',
      metaDescription:
        '4-inch vs 6-inch bench vise: jaw width, opening, clamping force and the work each handles. Hobby work or general workshop use — which to buy.',
      kicker: 'Knowledge',
      h1: '4″ vs 6″ Bench Vise',
      intro:
        'The 4-inch and 6-inch vises are the two most common workshop sizes, and the jump between them is bigger than the difference in jaw width. Knowing what the extra two inches buy tells you which one your bench needs.',
      sections: [
        {
          title: 'The Real Difference',
          body: [
            'A 4″ bench vise is a light-duty tool: smaller jaws, a smaller opening and lower mass, sized for hobby work, electronics and small repairs. A [6″ medium-duty bench vise](/products/vise-medium-6) sits a class up, with wider jaws, a bigger opening and a heavier body built for general metalwork and auto repair.',
          ],
        },
        {
          title: 'Jaw Width vs What You Can Hold',
          body: [
            'The extra two inches add jaw area, but the opening matters just as much. A 4″ light vise typically opens around 2-3″, a [4″ light-duty model](/products/vise-light-4) handles small stock, while a 6″ vise opens far wider and holds castings, pipe and assembled parts the small vise cannot.',
          ],
        },
        {
          title: 'Clamping Force',
          body: [
            'Mass is force: the 6″ body delivers noticeably more [clamping force](/engineering/clamping-force) and rigidity for sawing and filing under load. If your work regularly pushes hard against the jaws, the 6″ wins without argument.',
          ],
        },
        {
          title: 'Materials and Build',
          body: [
            'Both sizes come in gray iron bodies with hardened jaws, but the 6″ class gets more body mass and often a swivel base as standard. The trade-offs of the [body materials](/engineering/materials) apply across both.',
          ],
        },
        {
          title: 'Which One Fits Your Work',
          body: [
            'Go 4″ for small work, tight budgets and light benches; go 6″ if you do general workshop, automotive or metalwork or if you intend to grow into it. The full [choosing process](/knowledge/how-to-choose-a-bench-vise) walks through every factor.',
            'Sourcing for a product line? The [OEM team](/oem-manufacturing) builds both sizes and can tune jaw, opening and finish to your spec.',
          ],
        },
      ],
    },
    {
      slug: '6-inch-vs-8-inch-bench-vise',
      navLabel: '6″ vs 8″ Bench Vise',
      metaTitle: '6″ vs 8″ Bench Vise: When to Step Up in Size',
      metaDescription:
        '6-inch vs 8-inch bench vise: jaw width, opening, clamping force, weight and the heavy work the 8-inch class is built for. When to step up.',
      kicker: 'Knowledge',
      h1: '6″ vs 8″ Bench Vise',
      intro:
        'Stepping from a 6-inch to an 8-inch bench vise is a jump in mass, reach and price. It is worth it exactly when the work keeps hitting the limits of the smaller model.',
      sections: [
        {
          title: 'What Steps Up',
          body: [
            'The 8″ class adds jaw area, opening, throat depth and — most importantly — body mass. A [6″ medium-duty bench vise](/products/vise-medium-6) covers general workshop work, while an [8″ heavy-duty bench vise](/products/vise-heavy-8) is built for fabrication, heavier stock and constant hammering.',
          ],
        },
        {
          title: 'Opening and Throat Follow',
          body: [
            'Bigger jaws go with a wider jaw opening and deeper throat, so the 8″ takes pipe, thick sections and tall assemblies the 6″ cannot. If those are regular in your shop, the capacity is the reason to pay for the jump — see [what opening](/knowledge/how-much-jaw-opening-do-you-need) and [throat depth](/knowledge/how-much-throat-depth-do-you-need) you actually need.',
          ],
        },
        {
          title: 'Clamping Force and Rigidity',
          body: [
            'The heavier body delivers higher [clamping force](/engineering/clamping-force) and less flex under load, which matters for filing and grinding heavy work where a lighter vise walks on the bench.',
          ],
        },
        {
          title: 'Weight and the Bench Cost',
          body: [
            'An 8″ heavy-duty vise is a serious mounting job: expect 60-80 lbs of iron bolted to a reinforced bench. Budget both the price and the bench work before stepping up.',
          ],
        },
        {
          title: 'The Verdict',
          body: [
            'Choose 6″ for a general workshop and auto repair; choose 8″ for fabrication and industrial maintenance where the work is genuinely heavy. The [materials library](/engineering/materials) explains why the heavy class uses the bodies it does.',
            'Buying at volume? The [OEM manufacturing](/oem-manufacturing) route offers the 8″ platform with custom jaws, base and branding for private-label programs.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-jaw-opening-do-you-need',
      navLabel: 'How Much Jaw Opening Do You Need?',
      metaTitle: 'How Much Jaw Opening Do You Need? | Vise Opening Guide',
      metaDescription:
        'Jaw opening is the biggest gap a bench vise can clamp. How to measure your largest workpiece and pick an opening range by duty class.',
      kicker: 'Knowledge',
      h1: 'How Much Jaw Opening Do You Need?',
      intro:
        'The jaw opening is the maximum gap between the jaws — the biggest workpiece the vise can physically hold. It is the spec that most often surprises buyers, because it is smaller than the jaw width implies.',
      sections: [
        {
          title: 'Opening vs Jaw Width',
          body: [
            'Jaw width is sideways room; jaw opening is the vertical gap between the jaws. A 6″ vise with 6-inch-wide jaws might open only 4-6 inches. Buyers who want to clamp a thick casting must shop by opening, not by the headline size number.',
            'The difference matters enough that it runs through the whole [size guide](/knowledge/bench-vise-size-guide).',
          ],
        },
        {
          title: 'Measure Your Largest Workpiece',
          body: [
            'First, measure the thickest thing you will clamp — a casting, a pipe section, a stack of angle iron. That dimension plus a little clearance is your minimum opening. Everything else the vise does is secondary to clearing your biggest part.',
          ],
        },
        {
          title: 'Typical Openings by Class',
          body: [
            'Light-duty vises typically open 2-3″, medium-duty 4-6″, and heavy-duty 6-10″. The [6″ medium-duty bench vise](/products/vise-medium-6) opens enough for most workshop parts; an [8″ heavy-duty bench vise](/products/vise-heavy-8) swallows assembled work and pipe that the smaller class cannot.',
          ],
        },
        {
          title: 'When Max Opening Is the Whole Game',
          body: [
            'Pipe, castings, jigs and partially assembled work all need the jaws to clear the complete profile, not just a thin slice of it. Applications that do this constantly — fabrication, plumbing, maintenance — should weight opening higher than jaw width in [how to choose a bench vise](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Opening and Force Trade Hands',
          body: [
            'A wide opening is useless without the [clamping force](/engineering/clamping-force) to hold the part, and both depend on [body materials](/engineering/materials) that keep the frame rigid under load. Check all three on the same model, not separately.',
            'If your largest workpiece dictates a non-standard opening, the [OEM team](/oem-manufacturing) can specify one for your program.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-throat-depth-do-you-need',
      navLabel: 'How Much Throat Depth Do You Need?',
      metaTitle: 'How Much Throat Depth Do You Need? | Vise Reach Guide',
      metaDescription:
        'Throat depth is how deep a workpiece can stand in a bench vise. What it measures, why it matters for vertical work, and typical depths by class.',
      kicker: 'Knowledge',
      h1: 'How Much Throat Depth Do You Need?',
      intro:
        'Throat depth is the reach from the top edge of the jaws back to the body — the room a workpiece has to stand up while you work it. It decides how comfortably you can file, saw and grind vertical faces.',
      sections: [
        {
          title: 'What Throat Depth Measures',
          body: [
            'Sit a plate in the jaws and it stands in the space between the jaw faces and the body bars. How far it can reach before the body blocks it is the throat depth. Deeper throat means deeper work before you would need to re-position.',
            'Throat teams up with jaw opening in the [size guide](/knowledge/bench-vise-size-guide) as the two real "reach" numbers.',
          ],
        },
        {
          title: 'Why Depth Matters',
          body: [
            'Filing or dressing the top of a tall piece, sawing off a long blank, or working the end of a deep casting all depend on how far the work can stand up in the jaws. Too-shallow throats force awkward re-clamps or bench gymnastics.',
            'It matters most to metalworkers and woodworkers who dress vertical surfaces at height—the very work an [8″ heavy-duty bench vise](/products/vise-heavy-8) is built for.',
          ],
        },
        {
          title: 'Typical Depths by Class',
          body: [
            'Light-duty vises reach about 2-2.5″, medium-duty about 3″, and heavy-duty around 3.5-4″ or more. The differences are inches, but for tall work those inches are the difference between one setup and two.',
          ],
        },
        {
          title: 'Depth vs Opening: Read Both',
          body: [
            'Opening is how thick a part the jaws can hold; throat is how deep a part can stand. One wide-and-shallow vise will not do the job of a deep-throat model, so balance both against your work — the same logic as [choosing jaw opening](/knowledge/how-much-jaw-opening-do-you-need).',
          ],
        },
        {
          title: 'Reach Is Also Rigidity',
          body: [
            'A deep throat only helps if the body stays rigid when you push on the work. That rigidity comes from mass and the [body materials](/engineering/materials), holding the [clamping force](/engineering/clamping-force) at full depth instead of flexing away.',
            'Need a custom throat for a specific product? The [OEM route](/oem-manufacturing) adapts a platform to your geometry.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-clamping-force-do-you-need',
      navLabel: 'How Much Clamping Force Do You Need?',
      metaTitle: 'How Much Clamping Force Do You Need? | Vise Force Guide',
      metaDescription:
        'Clamping force is how hard a bench vise grips under work. Force ranges by duty class, why too much can be a problem, and how to verify published numbers.',
      kicker: 'Knowledge',
      h1: 'How Much Clamping Force Do You Need?',
      intro:
        'Clamping force is how hard the jaws actually grip the work under load. It decides whether the part stays put when you push, and reputable manufacturers publish it per model.',
      sections: [
        {
          title: 'What Clamping Force Is',
          body: [
            'Clamping force is the load the closed jaws deliver on a workpiece, usually measured in pounds of force (lbf) under controlled torque. It is the mechanical advantage of the [screw](/knowledge/how-does-a-bench-vise-work) turned into actual grip.',
            'A manufacturer that rates force is telling you what the vise can hold; a manufacturer that prints only "strong" is not. The measurement method is explained on the [clamping force](/engineering/clamping-force) engineering page.',
          ],
        },
        {
          title: 'Typical Ranges by Duty',
          body: [
            'Light-duty vises rate around 1,200-1,500 lbf, medium-duty a few thousand lbf, and heavy-duty models up to 6,000-8,000 lbf. The [6″ medium-duty bench vise](/products/vise-medium-6) holds general workshop work; the [6″ heavy-duty bench vise](/products/vise-heavy-6) carries the force for fabrication and hammering.',
          ],
        },
        {
          title: 'More Is Not Always Better',
          body: [
            'Excess force crushes delicate parts and distorts thin-walled work. Match the force to the material: soft or finished work needs controlled grip, brutal stock needs everything the jaw can give. Part of matching is choosing the right jaw surface, which is covered in [jaw design](/engineering/jaw-design) logic.',
          ],
        },
        {
          title: 'Force Needs a Strong Frame',
          body: [
            'A jaw that squeezes is only as good as the body that holds the squeeze. High force requires a rigid, often heavier [body material](/engineering/materials), which is why force ratings are inseparable from the frame behind them.',
          ],
        },
        {
          title: 'Putting It Together',
          body: [
            'Estimate the hardest push your work will take, add a safety margin, then pick the class that delivers it comfortably. Run the whole decision through [how to choose a bench vise](/knowledge/how-to-choose-a-bench-vise) so force, width, opening and throat all line up.',
            'For OEM programs the [engineering team](/oem-manufacturing) will confirm the rated force on the exact platform and jaw set you plan to ship.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-jaw-materials',
      navLabel: 'What Are Vise Jaws Made Of?',
      metaTitle: 'What Are Vise Jaws Made Of? | Bench Vise Jaw Materials',
      metaDescription:
        'Replaceable jaw materials compared: gray cast, tool steels like GCr15 and Cr12MoV, and when hardened or soft jaws are the right choice.',
      kicker: 'Knowledge',
      h1: 'What Are Vise Jaws Made Of?',
      intro:
        'The jaws are the one part of a bench vise that actually touches your work. Their material decides how long they grip without wearing, whether a part slides or holds, and how much abuse they take before they need replacing.',
      sections: [
        {
          title: 'Jaws Are a Wear Part',
          body: [
            'Jaws are replaceable working surfaces bolted to the body casting. Treating them as a wear part instead of part of the frame is the first step — a [medium-duty bench vise](/products/vise-medium-6) should get years of hard gripping from its standard jaws, but the set is designed to be swapped when it finally wears.',
            'To build a mental picture of the whole assembly including jaws, the [parts explainer](/knowledge/bench-vise-parts-explained) walks through each component.',
          ],
        },
        {
          title: 'What Vise Jaws Are Made Of',
          body: [
            'Quality bench vises use hardened tool steel inserts: high-carbon bearing steel GCr15 and high-chromium cold-work steel Cr12MoV are the two common grades, heat-treated to 58-62 HRC. These are the same families used in cutting tools, and they keep a toothed face biting into work for years.',
            'The wrong material — mild steel or soft cast — glazes, burrs and stretches under the pressure instead of holding.',
          ],
        },
        {
          title: 'Hardened Faces, Striated Grip',
          body: [
            'Hard inserts carry the cross-hatched pattern that bites into the workpiece. The geometry of that gripping surface is covered in [jaw design](/engineering/jaw-design); the heat treating that reaches the hardness is covered in [heat treatment](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'Hard vs Soft Jaws',
          body: [
            'Hard jaws hold and wear well on raw material. For finished or delicate work, replace the set with soft, plain or copper-backed jaws that protect the surface. Which [body material](/engineering/materials) sits behind them matters too — a rigid frame is what turns a hard jaw into a firm grip instead of a rocking one.',
          ],
        },
        {
          title: 'Specifying Jaws for Your Program',
          body: [
            'Jaw grade, hardness, pattern and dimensions are all selectable when you build a product line. The [OEM manufacturing](/oem-manufacturing) route lets you choose the jaw set that matches your market without redesigning the body.',
          ],
        },
      ],
    },
    {
      slug: 'why-are-bench-vise-jaws-hardened',
      navLabel: 'Why Are Bench Vise Jaws Hardened?',
      metaTitle: 'Why Are Bench Vise Jaws Hardened? | Jaw Hardness Explained',
      metaDescription:
        'Hardened jaws resist wear, embedding and galling, and keep their bite under clamping force. What hardness does and when you want the opposite.',
      kicker: 'Knowledge',
      h1: 'Why Are Bench Vise Jaws Hardened?',
      intro:
        'A vise jaw is hardened for one reason: to keep working after years of pressure. Soft metal gives under load, and a jaw that gives stops holding straight, quiet and safe.',
      sections: [
        {
          title: 'The Price of Soft Jaws',
          body: [
            'An unhardened jaw dents, burrs and embeds workpiece grit into its face. The bite degrades, particles get crushed into the surface, and a hard corner presses a deep score into the next part. Hardening is what stops that cycle.',
          ],
        },
        {
          title: 'Hardness Means Wear Resistance',
          body: [
            'Hardness is measured on the Rockwell scale, and vise jaws purpose-built for grip are hardened to 58-62 HRC. At that level the face resists indentation from the [clamping force](/engineering/clamping-force) and stays flat under repeated use. It is the spec on the jaws of the [6″ heavy-duty bench vise](/products/vise-heavy-6) and the rest of the heavy series. The number itself is decoded here: [what does 60 HRC mean](/knowledge/what-does-60-hrc-mean).',
          ],
        },
        {
          title: 'The Striated Face',
          body: [
            'Hardness alone is not enough — the face is machined or struck with a cross-hatch pattern that bites into the work. That pattern, plus the hardness keeping its edges sharp, is the whole [jaw-design](/engineering/jaw-design) story.',
          ],
        },
        {
          title: 'Hard but Not Brittle',
          body: [
            'Hardening is a balance: too soft wears, too brittle chips. Tempering pulls the hardness back from the extreme to where the insert takes hammering without snapping. The [heat-treatment](/engineering/heat-treatment) page explains how the balance is struck.',
          ],
        },
        {
          title: 'When You Want the Opposite',
          body: [
            'Hard jaws are wrong for finished surfaces and delicate parts. That is why soft, plain or copper-clad jaw sets exist — swap them in and the hardened set stays in the drawer. Everything in the [materials library](/engineering/materials) applies to the choices around them.',
            'Choosing jaw hardness for a product range? The [OEM tools](/oem-manufacturing) offer several grades and treatments per model.',
          ],
        },
      ],
    },
    {
      slug: 'what-does-60-hrc-mean',
      navLabel: 'What Does 60 HRC Mean?',
      metaTitle: 'What Does 60 HRC Mean? | Hardness Numbers Explained',
      metaDescription:
        'The Rockwell C scale decoded: what an HRC number is, what 60 HRC means for a vise jaw, and how to read hardness on a spec sheet.',
      kicker: 'Knowledge',
      h1: 'What Does 60 HRC Mean?',
      intro:
        'HRC is the hardness shorthand on almost every quality vise spec sheet. 60 HRC means a specific, testable level of hardness — and for a jaw it is the difference between "bites for years" and "wears out in a season".',
      sections: [
        {
          title: 'The Rockwell C Scale',
          body: [
            'The Rockwell C test presses a diamond cone into the surface under a fixed load and measures how far it penetrates. A bigger number means a shallower indentation — harder material. The scale is used for hardened steels all the way from knives to jaws.',
          ],
        },
        {
          title: 'What 60 HRC Feels Like',
          body: [
            'At 60 HRC a hardened tool-steel file will skate across the surface without cutting. It is tool-steel territory, the same hardness class as good metal-cutting tools, and it resists the dents and burrs that ruin softer faces.',
          ],
        },
        {
          title: 'The Typical Jaw Range',
          body: [
            'Quality vise jaws are heat-treated to 58-62 HRC — 60 sits in the middle. That range is deliberate: hard enough to grip for years, tempered enough not to chip under hammering. How that treatment is applied is covered by [heat treatment](/engineering/heat-treatment).',
            'In practice this is why a good jaw wears slowly even at full [clamping force](/engineering/clamping-force): the workpiece gets the marks, not the jaw. It is the same grade of insert you find in the [8″ heavy-duty bench vise](/products/vise-heavy-8) and across the heavy series.',
          ],
        },
        {
          title: 'Hardness vs Toughness',
          body: [
            'HRC measures one axis only. A part can be extremely hard and still brittle, which is why tempering pulls hardness down slightly to buy toughness. That trade is the reason behind [why bench vise jaws are hardened](/knowledge/why-are-bench-vise-jaws-hardened) at all. Reading 60 HRC on a sheet means reading it together with the steel grade — the [body materials](/engineering/materials) article shows the same logic applied to frames.',
          ],
        },
        {
          title: 'Reading the Spec Sheet',
          body: [
            'When a spec sheet says "jaws hardened to 58-62 HRC", it is telling you the inserts are in the tool-steel class and will hold their bite under load. A vise that omits hardness entirely is telling you something too.',
            'Need the treatment and grade documented for your own product? The [OEM route](/oem-manufacturing) can certify the hardness that ships in your brand.',
          ],
        },
      ],
    },
    {
      slug: 'fixed-vs-swivel-base-bench-vise',
      navLabel: 'Fixed vs. Swivel Base Bench Vise',
      metaTitle: 'Fixed vs. Swivel Base Bench Vise: Which to Choose?',
      metaDescription:
        'Fixed base or swivel base on a bench vise: rigidity, working angles and when the ability to rotate the vise is worth the trade-off.',
      kicker: 'Knowledge',
      h1: 'Fixed vs. Swivel Base Bench Vise',
      intro:
        'The base is the joint between the vise and the bench. Fixed or swivel changes whether you can turn the work or must reach around it — and how firm the whole vise feels under load.',
      sections: [
        {
          title: 'What the Base Does',
          body: [
            'The base bolts the vise to the bench and carries every load you put into the jaws. Its design is one of the first things to compare, alongside jaw and [body construction](/knowledge/bench-vise-parts-explained).',
          ],
        },
        {
          title: 'Fixed Base: Nothing Moves',
          body: [
            'A fixed base is a single casting bolted straight to the bench. There is no swivel joint to shift or loosen, so it gives the most direct, dead-solid feel — and it usually costs less. For work where the jaws only ever point one way, it is the stronger choice.',
          ],
        },
        {
          title: 'Swivel Base: Rotate to the Work',
          body: [
            'A swivel base adds a locking plate: loosen two bolts, turn the vise to the angle you want, and lock it down. Instead of walking around a long part, you swing the [6″ medium-duty bench vise](/products/vise-medium-6) to meet it. Standard on most medium and heavy workshop vises.',
          ],
        },
        {
          title: 'When Swivel Is Worth It',
          body: [
            'Long or awkward parts, automotive work and any job where you approach from several sides all favor a swivel. The ability to reposition without unclamping and re-clamping saves time on every piece. The [heavy-duty 6″ model](/products/vise-heavy-6) adds the mass to keep those angles rigid.',
          ],
        },
        {
          title: 'Rigidity Is the Whole Trade',
          body: [
            'A swivel joint is only as good as its lock: a weak lock flexes and steals [clamping force](/engineering/clamping-force) from the workpiece. That is why base mass and the [body material](/engineering/materials) matter more, not less, on a swivel model — the joint must be as solid as a fixed base.',
          ],
        },
        {
          title: 'Making the Call',
          body: [
            'Choose fixed for maximum rigidity and simplicity; choose swivel for versatility. The [choosing guide](/knowledge/how-to-choose-a-bench-vise) balances the base against jaw, opening and duty class. A dedicated [swivel-specialist model](/products/vise-specialty-swivel) covers jobs built around rotation.',
            'For OEM ranges, the [manufacturing team](/oem-manufacturing) supplies either base on the same body platform.',
          ],
        },
      ],
    },
    {
      slug: 'quick-release-bench-vise-mechanism',
      navLabel: 'Quick-Release Bench Vise Mechanism',
      metaTitle: 'Quick-Release Bench Vise Mechanism: How It Works',
      metaDescription:
        'How a quick-release bench vise disengages the screw to slide the jaw free, the trade-offs versus a standard screw, and when it is worth choosing.',
      kicker: 'Knowledge',
      h1: 'Quick-Release Bench Vise Mechanism',
      intro:
        'A standard vise opens and closes by turning the handle the whole way. A quick-release mechanism lets the sliding jaw move freely in an instant, then re-engage to clamp — useful when parts change size constantly.',
      sections: [
        {
          title: 'The Standard Screw',
          body: [
            'On a conventional vise the handle turns an Acme-threaded screw that drives the sliding jaw. It is simple, strong and self-locking, but changing from a thin part to a thick one means many turns. The mechanism is described in [how a bench vise works](/knowledge/how-does-a-bench-vise-work).',
          ],
        },
        {
          title: 'What Quick-Release Adds',
          body: [
            'A quick-release system adds a split or disengaging nut around the screw. Pull a lever and the nut releases the thread so the jaw slides by hand; release the lever and the nut re-engages to clamp normally. The [parts explainer](/knowledge/bench-vise-parts-explained) shows where the nut sits in the mechanism.',
          ],
        },
        {
          title: 'How It Works',
          body: [
            'A lever or trigger under the body drops a half-nut away from the screw. With the thread disengaged the jaw travels freely; when the lever is released, a spring pushes the half-nut back into the thread so turning the handle works as usual. One motion, no handle spinning.',
          ],
        },
        {
          title: 'The Trade-offs',
          body: [
            'Quick-release adds a moving part in the load path. It is more mechanism to keep clean and lubricated, and on a very heavily loaded vise it must be built well to hold rated [clamping force](/engineering/clamping-force). The half-nut and screw are wear surfaces — see [jaw materials](/knowledge/bench-vise-jaw-materials) for the same hardness logic applied to the frame.',
          ],
        },
        {
          title: 'Do You Need It?',
          body: [
            'If you swap between very different part sizes all day, quick-release earns its keep. If you clamp the same thick stock for long stretches, the standard screw is simpler and just as strong. The decision sits alongside duty class in the [choosing guide](/knowledge/how-to-choose-a-bench-vise).',
            'Most catalog models use a standard screw; a quick-release variant is normally an OEM decision. The [production team](/oem-manufacturing) can adapt a platform with the mechanism and finish you need.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-pipe-jaws',
      navLabel: 'Pipe Jaw Design',
      metaTitle: 'Pipe Jaw Design: How Bench Vise Pipe Jaws Work',
      metaDescription:
        'Pipe jaws add a V-groove under the flat jaws to grip round stock without crushing it. How the design works and when to choose a pipe vise.',
      kicker: 'Knowledge',
      h1: 'Pipe Jaw Design',
      intro:
        'Round stock is the hardest thing to hold in flat jaws — it rolls. Pipe jaws are the fix: a second, V-shaped gripping surface that centers and bites a tube or pipe so it cannot spin.',
      sections: [
        {
          title: 'Two Sets of Jaws',
          body: [
            'Many bench vises carry two gripping surfaces: the main flat jaws for general work and a set of pipe jaws tucked below or behind them. The [bench vise parts](/knowledge/bench-vise-parts-explained) breakdown places both on the body.',
          ],
        },
        {
          title: 'The V-Groove Principle',
          body: [
            'Pipe jaws are cut as a V. Lay a round bar or pipe into the V and it self-centers — the two angled faces seat the tube along its axis instead of letting it roll. The angle and the tooth pattern follow the same [jaw design](/engineering/jaw-design) rules as flat jaws, tuned for curved contact.',
          ],
        },
        {
          title: 'Where Pipe Jaws Sit',
          body: [
            'On a combined vise, pipe jaws sit in the throat below the flat jaws, so you can switch from a flat part to a tube without changing tools. On a dedicated pipe vise the whole tool is built around the V and the tube, with capacity sized to pipe diameters rather than general work.',
          ],
        },
        {
          title: 'Pipe Vise vs Bench Vise with Pipe Jaws',
          body: [
            'A dedicated [4″ pipe vise](/products/vise-pipe-4) or [6″ pipe vise](/products/vise-pipe-6) holds and rotates pipe for threading and cutting, often with a hinged or bench stand. A [6″ bench vise with pipe jaws](/products/vise-medium-6) covers occasional tube work alongside normal jobs. Match the tool to how often pipe appears in your work.',
          ],
        },
        {
          title: 'Grip, Force and Safety',
          body: [
            'A round part wants to turn under the handle, so pipe jaws need both a firm V and enough [clamping force](/engineering/clamping-force) to stop rotation — delivered through a rigid [body](/engineering/materials). A pipe that slips under a saw is a safety problem, not just a nuisance.',
            'Sizing pipe-jaw capacity for a product line is an [OEM specification](/oem-manufacturing) decision on the same platform.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-replaceable-jaws',
      navLabel: 'Replaceable Jaw Design',
      metaTitle: 'Replaceable Jaw Design: Serviceable Bench Vise Jaws',
      metaDescription:
        'How replaceable bench vise jaws are held, why serviceable jaws beat fixed ones, and what to match when ordering a replacement set.',
      kicker: 'Knowledge',
      h1: 'Replaceable Jaw Design',
      intro:
        'The jaws take every scratch, score and impact a vise ever sees. Designing them to be replaced — rather than cast into the body — is what lets a good vise outlive its first set of teeth.',
      sections: [
        {
          title: 'Jaws Are a Wear Part',
          body: [
            'The gripping faces are the hardest-worked surfaces on the tool. Treating them as replaceable is the difference between renewing a vise and replacing it. The material story behind those inserts is in [vise jaw materials](/knowledge/bench-vise-jaw-materials).',
          ],
        },
        {
          title: 'How Replaceable Jaws Are Held',
          body: [
            'Replaceable jaws are separate inserts seated on machined flats and fastened with countersunk socket-head screws, sometimes located by dowels or a shoulder so they cannot shift. Undo the screws and the set lifts off — no machining, no welding.',
          ],
        },
        {
          title: 'Why Replaceable Beats Fixed',
          body: [
            'A replaceable set can be renewed when teeth dull, upgraded to soft or copper-faced jaws for finished work, or swapped to suit a job. That serviceability is a [jaw-design](/engineering/jaw-design) choice, and the heat treatment that keeps the set hard is covered in [heat treatment](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'Buying and Fitting Replacements',
          body: [
            'Match the model, jaw width, screw spacing and hardness when ordering. Since the seats are machined to the [body](/engineering/materials), genuine replacements drop in flat and parallel. Keep the screws clean and lightly oiled so the set comes off easily next time — part of the routine in [bench vise maintenance](/knowledge/bench-vise-maintenance).',
          ],
        },
        {
          title: 'Design for Service',
          body: [
            'Designing for service is a selling point, not a cost: customers stay with a brand that keeps spare jaws available. The [OEM team](/oem-manufacturing) builds replaceable-jaw platforms and can supply branded spare sets.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-anvil-surface',
      navLabel: 'Bench Vise Anvil Surface',
      metaTitle: 'Bench Vise Anvil Surface: What It Is For',
      metaDescription:
        'The anvil surface on a bench vise: what the machined flat is for, fixed vs movable anvil plates, and its limits on a cast-iron body.',
      kicker: 'Knowledge',
      h1: 'Bench Vise Anvil Surface',
      intro:
        'Many bench vises finish with a flat machined pad at the back of the body — the anvil surface. It turns the vise into a small striking and shaping station, within limits.',
      sections: [
        {
          title: 'The Anvil on the Body',
          body: [
            'The anvil surface is a ground-flat area, usually behind the rear jaw, on the top of the body. It is one of the features listed in the [bench vise parts](/knowledge/bench-vise-parts-explained) breakdown, and it costs nothing to include on a good casting.',
          ],
        },
        {
          title: 'What It Is For',
          body: [
            'It is a spot for light striking and shaping: tapping a pin, flattening a strip, peening a rivet, straightening thin stock. It saves a trip to the bench block for small jobs because the vise is already holding the part.',
          ],
        },
        {
          title: 'Fixed vs Movable Anvil Plate',
          body: [
            'Light-duty vises sometimes fit a separate anvil plate — either fixed or movable with the sliding jaw. A movable plate travels with the jaw to keep the striking area useful as the vise opens. Dedicated [anvil specialist vises](/products/vise-specialty-anvil) build the feature in from the start.',
          ],
        },
        {
          title: 'Its Real Limits',
          body: [
            'A bench vise anvil is a convenience, not a blacksmith anvil. Bodies are gray iron, which is rigid but brittle — a heavy blow can crack a casting. Use it for controlled taps and light shaping, and save the sledgehammer for a proper anvil. The [body material](/engineering/materials) article explains why cast iron behaves this way.',
          ],
        },
        {
          title: 'Sourcing the Feature',
          body: [
            'Whether the pad is plain, stepped or a separate plate is a [design](/engineering/heat-treatment) and tooling choice. For a product range, the [OEM team](/oem-manufacturing) can add or shape the anvil surface to match your market.',
          ],
        },
      ],
    },
    {
      slug: 'automotive-repair-bench-vise',
      navLabel: 'Automotive Repair Bench Vise',
      metaTitle: 'Automotive Repair Bench Vise: Garage Workholding',
      metaDescription:
        'Why a bench vise is the garage workholding standard — brake parts, brackets, hoses, frame work and the vise class that covers general automotive repair.',
      kicker: 'Knowledge',
      h1: 'Automotive Repair Bench Vise',
      intro:
        'A bench vise is the permanent clamping station in most automotive workshops and home garages. It holds what your hands cannot — brake components, brackets, hoses and fabricated parts — while you cut, drill, grind and assemble.',
      sections: [
        {
          title: 'The Garage Workhorse',
          body: [
            'A [6″ medium-duty bench vise](/products/vise-medium-6) is the classic garage specification: wide enough for most brake parts, a jaw opening that swallows brackets, and a body heavy enough to take hammering. It is the tool that appears first in the shop and never gets put away.',
            'That same tool is covered in the [workshop applications](/knowledge/what-is-a-bench-vise-used-for) guide.',
          ],
        },
        {
          title: 'What It Holds',
          body: [
            'Brake calipers, brackets, small frame sections, hoses, fittings, springs — almost everything clamped in a garage passes through vise jaws. A [heavy-duty 6″ bench vise](/products/vise-heavy-6) covers the thicker parts and delivers the [clamping force](/engineering/clamping-force) to hold them under the hammer.',
          ],
        },
        {
          title: 'Why a Vise Beats a Clamp',
          body: [
            'An auto part is three-dimensional and reaches in all directions. A vise holds it once, in any orientation, without the part shifting. Replaceable [jaws](/knowledge/bench-vise-replaceable-jaws) protect finished surfaces while gripping hard enough to stop rotation.',
          ],
        },
        {
          title: 'Choosing the Right Class',
          body: [
            'Light-duty vises cover small parts and tight budgets; medium-duty covers most auto repair; heavy-duty handles frame work and larger castings. The [size guide](/knowledge/bench-vise-size-guide) walks through the dimensions, and the [choosing guide](/knowledge/how-to-choose-a-bench-vise) matches duty class to workload.',
          ],
        },
        {
          title: 'Making It Last in a Garage',
          body: [
            'Automotive grime is abrasive. A little [maintenance](/knowledge/bench-vise-maintenance) — clean the screw, light oil on the slide — keeps the mechanism from wearing prematurely. The [body material](/engineering/materials) and [jaw hardness](/knowledge/what-does-60-hrc-mean) determine how long the vise stays tight under constant use.',
            'For OEM garage lines, the [production team](/oem-manufacturing) supplies the body, base and finish your market needs.',
          ],
        },
      ],
    },
    {
      slug: 'metalworking-bench-vise',
      navLabel: 'Metalworking Bench Vise',
      metaTitle: 'Metalworking Bench Vise: Filing, Sawing and Clamping',
      metaDescription:
        'How a bench vise supports metalworking — filing, sawing, drilling and grinding. Why rigidity, jaw hardness and mounting decide the quality of cut.',
      kicker: 'Knowledge',
      h1: 'Metalworking Bench Vise',
      intro:
        'Metalworking is where a bench vise earns its reputation. A vise that sits dead-solid under the file, holds the saw straight and takes the grinder without moving — that is the difference between a clean finish and a ruined edge.',
      sections: [
        {
          title: 'The Foundation of Metalwork',
          body: [
            'Drilling, reaming, threading, filing and sawing all need a workpiece that cannot move. A [6″ heavy-duty bench vise](/products/vise-heavy-6) bolted to a solid bench is the simplest, cheapest way to create that dead-solid workholding for metal. The applications overview is in [what a vise is used for](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Rigidity Is the Quality Control',
          body: [
            'A vise that flexes pushes the workpiece out of square and ruins the cut. The amount of [clamping force](/engineering/clamping-force) the frame delivers, and how well it is mounted to the bench, decide whether the vise moves or the file does.',
            'That is why heavier vises have more body mass — the [body material](/engineering/materials) is the rigidity source.',
          ],
        },
        {
          title: 'Jaws That Bite and Jaws That Protect',
          body: [
            'Hardened, serrated jaws grip raw stock firmly. For finished or polished parts, swap in [replaceable soft jaws](/knowledge/bench-vise-replaceable-jaws). The jaw hardness and pattern are covered in [jaw design](/engineering/jaw-design) and [60 HRC explained](/knowledge/what-does-60-hrc-mean).',
          ],
        },
        {
          title: 'Sawing and Filing',
          body: [
            'A throat deep enough to clear a saw blade matters when cutting long sections — the [throat depth guide](/knowledge/how-much-throat-depth-do-you-need) shows what to measure. Filing the top of a clamped piece demands a vise that does not rock, which brings the choice back to mass and [mounting](/knowledge/bench-vise-maintenance).',
          ],
        },
        {
          title: 'Spec for the Job',
          body: [
            'Metalworking is a broad trade. The [choosing guide](/knowledge/how-to-choose-a-bench-vise) balances jaw width, opening and throat against the kinds of metalwork you do. For OEM product lines the [manufacturing team](/oem-manufacturing) can specify the exact platform.',
          ],
        },
      ],
    },
    {
      slug: 'welding-prep-bench-vise',
      navLabel: 'Welding Prep Bench Vise',
      metaTitle: 'Welding Prep Bench Vise: Holding Before the Arc',
      metaDescription:
        'How a bench vise supports welding preparation — holding parts for fit-up, tack welding, grinding and grinding. What body material and base to choose.',
      kicker: 'Knowledge',
      h1: 'Welding Prep Bench Vise',
      intro:
        'A bench vise does not replace welding clamps, but it is where fit-up, tacking, grinding and edge preparation happen before the arc. It holds the part at the right angle while the fit is set.',
      sections: [
        {
          title: 'The Vise Before the Arc',
          body: [
            'Fit-up, tacking, grinding the root face and cleaning spatter all happen before the torch fires. An [8″ heavy-duty bench vise](/products/vise-heavy-8) is big enough for most welded assemblies, heavy enough to absorb hammering, and stays put while you work a grinding wheel against the frame.',
            'The broader role of a vise in metalwork is covered in [what a bench vise is used for](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Heat and Body Material',
          body: [
            'Spatter and welding heat reach the vise body occasionally. Gray cast iron handles it without much concern; forged steel absorbs impacts better if hammering is frequent. The comparison is covered in [cast iron vs. forged steel](/knowledge/cast-iron-vs-steel-vises) and the [body materials](/engineering/materials) library.',
          ],
        },
        {
          title: 'Holding Round and Structural Sections',
          body: [
            'Weldments often involve pipe, round bar and structural sections. A vise with [pipe jaws](/knowledge/bench-vise-pipe-jaws) centers the work; a heavy-duty [swivel base](/knowledge/fixed-vs-swivel-base-bench-vise) lets you angle the piece without unclamping — saving time on every joint.',
          ],
        },
        {
          title: 'What This Does to the Vise',
          body: [
            'Welding prep is abrasive: grinding dust, spatter and repeated hammer blows all wear on the jaws. Replaceable [jaws](/knowledge/bench-vise-replaceable-jaws) and a little [maintenance](/knowledge/bench-vise-maintenance) keep the vise functional. The [jaw materials](/knowledge/bench-vise-jaw-materials) article explains why hardened inserts outlast the rest.',
          ],
        },
        {
          title: 'Choosing for Welding Work',
          body: [
            'Welding work rewards mass and rigidity. The [choosing guide](/knowledge/how-to-choose-a-bench-vise) covers the trade-offs; for a product range the [OEM team](/oem-manufacturing) supplies the heavy platform with the finish your market needs.',
          ],
        },
      ],
    },
    {
      slug: 'garage-workshop-bench-vise',
      navLabel: 'Garage & Workshop Bench Vise',
      metaTitle: 'Garage & Workshop Bench Vise: The Do-Everything Vise',
      metaDescription:
        'Why every workshop and garage needs a bench vise, what size covers the most jobs, and how to mount and maintain a garage vise.',
      kicker: 'Knowledge',
      h1: 'Garage & Workshop Bench Vise',
      intro:
        'A garage vise is the one tool that never gets put away. It holds pipe for threading, wood for drilling, metal for filing, and a dozen other jobs you did not plan when the bench went in.',
      sections: [
        {
          title: 'Why Every Workshop Needs One',
          body: [
            'A bench vise is the only workholding that turns the bench itself into a workstation. A [6″ medium-duty bench vise](/products/vise-medium-6) covers most workshop jobs without dominating the bench — and it is the single most-recommended first tool for any new workshop.',
            'The range of jobs it can handle is listed in [what a bench vise is used for](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Size for the Most Jobs',
          body: [
            'A medium-duty 6″ vise takes the majority of what a workshop sees — small parts, pipe, sheet and light fabrication. A [light 4″ vise](/products/vise-light-4) handles hobby-scale work. The [size guide](/knowledge/bench-vise-size-guide) breaks the dimensions down.',
          ],
        },
        {
          title: 'Base and Positioning',
          body: [
            'Fixed or swivel? For a garage that sees varied work, a [swivel base](/knowledge/fixed-vs-swivel-base-bench-vise) pays for itself in saved time. Mount it where the light is best and the bench is thickest, with bolts that match the base holes.',
          ],
        },
        {
          title: 'Keep It Running',
          body: [
            'The garage is dusty, and dust is abrasive. A little [maintenance](/knowledge/bench-vise-maintenance) — clean the screw, wipe the slide — keeps the vise from wearing out before its time. Hardened [jaws](/knowledge/what-does-60-hrc-mean) and replaceable [jaw sets](/knowledge/bench-vise-replaceable-jaws) complete the service picture.',
          ],
        },
        {
          title: 'Buying for Your Market',
          body: [
            'Garages are a global market. The [choosing guide](/knowledge/how-to-choose-a-bench-vise) helps end users; the [OEM route](/oem-manufacturing) helps brands build a garage line.',
          ],
        },
      ],
    },
    {
      slug: 'schools-training-bench-vise',
      navLabel: 'Schools & Training Bench Vise',
      metaTitle: 'Schools & Training Bench Vise: Safe Workholding for Students',
      metaDescription:
        'How a bench vise is used in schools and training — the vise that teaches workholding safely, what size to buy and how to maintain a classroom set.',
      kicker: 'Knowledge',
      h1: 'Schools & Training Bench Vise',
      intro:
        'In a school workshop the vise teaches workholding itself. It teaches students how to clamp, how to position, and how to stay safe — and it must do it a hundred times a day, year after year.',
      sections: [
        {
          title: 'The Vise That Teaches',
          body: [
            'A bench vise is often the first tool a student uses independently. It introduces the discipline of clamping properly, and a [4″ light-duty bench vise](/products/vise-light-4) or a [medium-duty 5″ model](/products/vise-medium-5) suits classroom height, student strength and the scale of education projects.',
            'The same models are covered in the [size guide](/knowledge/bench-vise-size-guide) and the [types overview](/knowledge/types-of-bench-vises-explained).',
          ],
        },
        {
          title: 'Safety and Durability',
          body: [
            'A student workshop beats tools hard: wrong clamping, sudden hammering and dropping parts. A robust [body material](/engineering/materials), hardened [jaws](/knowledge/what-does-60-hrc-mean) and replaceable [jaw sets](/knowledge/bench-vise-replaceable-jaws) mean the set lasts multiple classes without losing grip.',
          ],
        },
        {
          title: 'Mounting and Classroom Layout',
          body: [
            'A school bench is often thinner than a professional shop bench, so bolting the vise securely and reinforcing the top is essential. One fixed-position vise per station, positioned to keep students facing the right way and away from rotating equipment.',
          ],
        },
        {
          title: 'Maintaining a Classroom Set',
          body: [
            'Light [maintenance](/knowledge/bench-vise-maintenance) on a schedule — weekly screw wipe, monthly oil — keeps a class set running. Teach the students the same habit: wipe the vise when you finish. It is a maintenance lesson as much as a tool lesson.',
          ],
        },
        {
          title: 'Spec for Education',
          body: [
            'Education pricing, bulk supply and replacement availability matter as much as the vise itself. The [OEM route](/oem-manufacturing) handles classroom-volume orders and branded sets.',
          ],
        },
      ],
    },
    {
      slug: 'woodworking-bench-vise',
      navLabel: 'Woodworking Bench Vise',
      metaTitle: 'Woodworking Bench Vise: Workholding for Wood',
      metaDescription:
        'How a woodworking bench vise holds wood for sawing, drilling, planing and carving — when a metalworking vise is the wrong choice and what to use instead.',
      kicker: 'Knowledge',
      h1: 'Woodworking Bench Vise',
      intro:
        'Woodworking needs a different kind of grip. The finish matters, the material is soft, and the wrong vise can crush the grain before the cut starts. A woodworking vise holds firm without leaving marks.',
      sections: [
        {
          title: 'Why Woodworking Is Different',
          body: [
            'Wood is softer than metal but more sensitive to surface damage. Hardened serrated jaws — perfect for steel — will chew into walnut. The solution is flat, smooth [jaws](/knowledge/bench-vise-jaw-materials) or replaceable [soft jaws](/knowledge/bench-vise-replaceable-jaws) that protect the surface while still holding the work.',
            'The broader workholding context is in [what a bench vise is used for](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Jaw Opening for Lumber',
          body: [
            'A plank or cabinet side may exceed the jaw opening of a small vise. A [medium-duty 5″ or 6″ model](/products/vise-medium-6) gives the room; a [light 4″ vise](/products/vise-light-4) covers smaller stock. The [opening guide](/knowledge/how-much-jaw-opening-do-you-need) explains what to measure.',
          ],
        },
        {
          title: 'Holding and Positioning',
          body: [
            'A [swivel base](/knowledge/fixed-vs-swivel-base-bench-vise) helps when working long boards from different angles. Pipe jaws are less useful here, but a flat-faced set of [replaceable jaws](/knowledge/bench-vise-replaceable-jaws) with a wide opening covers most woodwork.',
          ],
        },
        {
          title: 'Avoiding Damage',
          body: [
            'Low [clamping force](/engineering/clamping-force) is often enough for wood — you want enough grip to hold, not enough to crush. This means the vise does not need heavy-duty mass, and the choice sits in the light-to-medium range of the [choosing guide](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'For OEM Ranges',
          body: [
            'Woodworking vises often sell with smooth jaw faces, woodworking base plates and a different branding tone. The [OEM team](/oem-manufacturing) supplies woodworking-focused variants on proven platforms.',
          ],
        },
      ],
    },
    {
      slug: 'private-label-bench-vise-guide',
      navLabel: 'Private Label Bench Vise Guide',
      metaTitle: 'Private Label Bench Vise Guide | OEM & Custom Vises',
      metaDescription:
        'How to build a private-label bench vise line — platform selection, jaw customization, MOQ, certification, and the OEM vs private label difference.',
      kicker: 'Knowledge',
      h1: 'Private Label Bench Vise Guide',
      intro:
        'Private label is how many brands enter the bench vise market: pick a proven platform, customize the details, ship it under your name. The process is faster and cheaper than designing from scratch — if you know what to specify.',
      sections: [
        {
          title: 'What Private Label Means',
          body: [
            'A private-label program takes a manufacturer\'s existing platform and stamps your branding, finish, jaw set and packaging onto it. The vise is proven; the label is yours. It is the faster, lower-risk alternative to building a vise from nothing — and it starts on the same [manufacturing](/oem-manufacturing) floor.',
          ],
        },
        {
          title: 'Platform Selection',
          body: [
            'Start with the platform that matches your market: light duty for hardware retail, medium for workshops, heavy for industrial. A [6″ medium-duty bench vise](/products/vise-medium-6) covers the broadest market; heavy-duty models cover fabrication. The [choosing guide](/knowledge/how-to-choose-a-bench-vise) walks through the parameters.',
          ],
        },
        {
          title: 'What You Can Customize',
          body: [
            'Jaw width, opening, jaw material and hardness, base type, paint or powder-coat, logo and packaging — all are selectable on the same frame. The [body materials](/engineering/materials) and [jaw materials](/knowledge/bench-vise-jaw-materials) explain the trade-offs behind each option.',
          ],
        },
        {
          title: 'MOQ, Lead Time and Certification',
          body: [
            'MOQ, lead time, sample approval and certifications are the commercial details that decide the program. They are laid out on the [OEM manufacturing](/oem-manufacturing) page and depend on volume, finish and the certifications your market requires.',
          ],
        },
        {
          title: 'Private Label vs OEM vs ODM',
          body: [
            'Private label uses an existing platform. OEM builds to your drawing. ODM starts from a concept. For bench vises, private label is the most common entry point because the tooling already exists. The [full OEM comparison](/knowledge/oem-bench-vise-manufacturing) explains where each route fits.',
            'Whichever route you choose, the [product range](/knowledge/types-of-bench-vises-explained) shows the breadth of platforms available.',
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
      slug: 'bench-vise-size-guide',
      navLabel: 'Guía de tamaños de mordazas de banco',
      metaTitle: 'Guía de tamaños de mordaza de banco: ancho, abertura y garganta',
      metaDescription:
        'Cómo funcionan los tamaños de las mordazas de banco: el ancho de mordaza es el número, la abertura y la garganta son el alcance. Rangos por clase y qué medir antes de comprar.',
      kicker: 'Conocimiento',
      h1: 'Guía de tamaños de mordaza de banco',
      intro:
        'Una mordaza de "6 pulgadas" no mide 6 pulgadas en todo — el número es el ancho de las mordazas, y la abertura y la garganta son números aparte que deciden lo que la mordaza puede sujetar de verdad. Esta guía explica cómo leer los tamaños.',
      sections: [
        {
          title: 'Cómo se mide una mordaza',
          body: [
            'El número de identificación de una mordaza de banco es el ancho de las mordazas — una "mordaza de banco de 6 pulgadas" tiene mordazas de unas 6 pulgadas de ancho. Todo lo demás (abertura, garganta, peso) es una especificación aparte.',
            'Como el ancho es el número principal, domina la primera comparación. Pero dos mordazas con el mismo ancho pueden tener aberturas y gargantas muy distintas.',
          ],
        },
        {
          title: 'La escala de clases y los tamaños típicos',
          body: [
            'Las mordazas de banco se agrupan en clase ligera, media y pesada, cada una con un rango de anchos habitual: ligeras de 2-5 pulgadas, medias de 5-8 y pesadas de 8 en adelante. Una [mordaza ligera de 4 pulgadas](/products/vise-light-4) sirve para afición, la [mordaza media de 6 pulgadas](/products/vise-medium-6) es el estándar del taller y una [mordaza pesada de 8 pulgadas](/products/vise-heavy-8) aguanta la fabricación.',
            'Mordazas mayores significan más masa, más rigidez — pero también más banco. Cuanto más pesada, más reforzada necesita la superficie.',
          ],
        },
        {
          title: 'La abertura: la medida que realmente choca',
          body: [
            'La abertura de mordaza es el hueco máximo entre las mordazas y es el número que de verdad importa al sujetar una pieza gruesa. Una abertura generosa admite tubos, piezas fundidas y montajes que una mordaza pequeña no puede contener. La guía completa está en [cuánta abertura de mordaza necesita](/knowledge/how-much-jaw-opening-do-you-need).',
          ],
        },
        {
          title: 'Garganta: hasta dónde llega la pieza',
          body: [
            'La garganta es la distancia desde el borde superior de las mordazas hasta el cuerpo — el espacio donde una pieza se mantiene en pie mientras trabaja la superficie superior. Limita el limado, el serrado y el amolado en caras verticales. Detalles en [cuánta garganta necesita](/knowledge/how-much-throat-depth-do-you-need).',
          ],
        },
        {
          title: 'Peso, montaje y el banco',
          body: [
            'Una mordaza pesada puede pesar 25-35 kg y transmite carga real al banco. Ajuste el tamaño y la separación de los pernos a la superficie y refuerce los tableros finos. La calidad del montaje decide si la [fuerza de cierre](/engineering/clamping-force) llega a la pieza o se pierde en una mesa que cede.',
          ],
        },
        {
          title: 'El tamaño es solo parte de la especificación',
          body: [
            'El tamaño indica capacidad, no durabilidad. El [material del cuerpo](/engineering/materials) y la construcción de las mordazas deciden cuánto dura esa capacidad con el uso, por eso el proceso completo empieza con [cómo elegir una mordaza de banco](/knowledge/how-to-choose-a-bench-vise).',
            'Para programas OEM o de volumen, el [equipo de fabricación](/oem-manufacturing) puede dimensionar una abertura y una garganta a medida para su aplicación sobre una plataforma probada.',
          ],
        },
      ],
    },
    {
      slug: '4-inch-vs-6-inch-bench-vise',
      navLabel: 'Mordaza de 4 vs 6 pulgadas',
      metaTitle: 'Mordaza de banco de 4 vs 6 pulgadas: ¿cuál necesita?',
      metaDescription:
        'Mordaza de banco de 4 vs 6 pulgadas: ancho de mordaza, abertura, fuerza de cierre y el trabajo que hace cada una. Afición o taller general — cuál comprar.',
      kicker: 'Conocimiento',
      h1: 'Mordaza de banco de 4 vs 6 pulgadas',
      intro:
        'Las mordazas de banco de 4 y 6 pulgadas son los dos tamaños de taller más comunes, y el salto entre ellas es mayor de lo que sugiere la diferencia de ancho. Saber qué aportan las pulgadas extra indica cuál necesita su banco.',
      sections: [
        {
          title: 'La diferencia real',
          body: [
            'Una mordaza de banco de 4 pulgadas es de clase ligera: mordazas más pequeñas, menos abertura y menos masa, pensada para afición, electrónica y reparaciones pequeñas. Una [mordaza media de 6 pulgadas](/products/vise-medium-6) sube de clase, con mordazas más anchas, más abertura y un cuerpo más pesado para metalurgia general y reparación de automoción.',
          ],
        },
        {
          title: 'Ancho frente a lo que puede sujetar',
          body: [
            'Las dos pulgadas extra suman superficie, pero la abertura importa tanto o más. Una ligera de 4 pulgadas abre normalmente entre 2 y 3 pulgadas, una [mordaza ligera de 4 pulgadas](/products/vise-light-4) admite piezas pequeñas, mientras que una de 6 abre mucho más y sujeta fundiciones, tubos y conjuntos que la pequeña no puede.',
          ],
        },
        {
          title: 'Fuerza de cierre',
          body: [
            'La masa es fuerza: el cuerpo de 6 pulgadas entrega notablemente más [fuerza de cierre](/engineering/clamping-force) y rigidez para serrar y limar bajo carga. Si su trabajo empuja con fuerza contra las mordazas, la de 6 gana sin discusión.',
          ],
        },
        {
          title: 'Materiales y construcción',
          body: [
            'Ambos tamaños se fabrican en hierro gris con mordazas templadas, pero la clase de 6 pulgadas recibe más masa de cuerpo y a menudo base giratoria de serie. Los pros y contras de los [materiales del cuerpo](/engineering/materials) aplican a las dos.',
          ],
        },
        {
          title: 'Cuál encaja con su trabajo',
          body: [
            'Elija 4 pulgadas para trabajo pequeño, presupuesto ajustado y bancos ligeros; elija 6 si hace taller general, automoción o metalurgia o si piensa crecer con ella. El [proceso completo de elección](/knowledge/how-to-choose-a-bench-vise) repasa cada factor.',
            '¿Comprando para una línea de producto? El [equipo OEM](/oem-manufacturing) fabrica ambos tamaños y puede ajustar mordaza, abertura y acabado a su especificación.',
          ],
        },
      ],
    },
    {
      slug: '6-inch-vs-8-inch-bench-vise',
      navLabel: 'Mordaza de 6 vs 8 pulgadas',
      metaTitle: 'Mordaza de banco de 6 vs 8 pulgadas: cuándo subir de tamaño',
      metaDescription:
        'Mordaza de banco de 6 vs 8 pulgadas: ancho de mordaza, abertura, fuerza de cierre, peso y el trabajo pesado para el que está hecha la clase de 8. Cuándo subir.',
      kicker: 'Conocimiento',
      h1: 'Mordaza de banco de 6 vs 8 pulgadas',
      intro:
        'Pasar de 6 a 8 pulgadas es un salto de masa, alcance y precio. Vale la pena exactamente cuando el trabajo choca una y otra vez contra los límites del modelo pequeño.',
      sections: [
        {
          title: 'Qué sube de nivel',
          body: [
            'La clase de 8 pulgadas suma área de mordaza, abertura, garganta y — sobre todo — masa de cuerpo. Una [mordaza media de 6 pulgadas](/products/vise-medium-6) cubre el taller general, mientras que una [mordaza pesada de 8 pulgadas](/products/vise-heavy-8) está hecha para fabricación, material más grueso y martilleo constante.',
          ],
        },
        {
          title: 'Abertura y garganta siguen al tamaño',
          body: [
            'Mordazas mayores van con abertura más amplia y garganta más profunda, así que la de 8 admite tubos, secciones gruesas y montajes altos que la de 6 no puede. Si eso es habitual en su taller, la capacidad es la razón del sobreprecio — vea [qué abertura](/knowledge/how-much-jaw-opening-do-you-need) y [qué garganta](/knowledge/how-much-throat-depth-do-you-need) necesita de verdad.',
          ],
        },
        {
          title: 'Fuerza de cierre y rigidez',
          body: [
            'El cuerpo más pesado entrega más [fuerza de cierre](/engineering/clamping-force) y menos flexión bajo carga, lo que importa para limar y amolar trabajo pesado donde una mordaza ligera camina sobre el banco.',
          ],
        },
        {
          title: 'Peso y el costo del banco',
          body: [
            'Una mordaza pesada de 8 pulgadas es un montaje serio: espere 27-35 kg de hierro atornillado a un banco reforzado. Tenga en cuenta el precio y el trabajo del banco antes de subir.',
          ],
        },
        {
          title: 'El veredicto',
          body: [
            'Elija 6 pulgadas para un taller general y reparación de automoción; elija 8 para fabricación y mantenimiento industrial donde el trabajo es verdaderamente pesado. La [biblioteca de materiales](/engineering/materials) explica por qué la clase pesada usa los cuerpos que usa.',
            '¿Comprando a volumen? La vía [OEM](/oem-manufacturing) ofrece la plataforma de 8 pulgadas con mordazas, base y marca a medida para programas de marca privada.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-jaw-opening-do-you-need',
      navLabel: '¿Cuánta abertura de mordaza necesita?',
      metaTitle: '¿Cuánta abertura de mordaza necesita? | Guía de abertura',
      metaDescription:
        'La abertura de mordaza es el hueco máximo que puede sujetar una mordaza de banco. Cómo medir su pieza más grande y elegir un rango por clase.',
      kicker: 'Conocimiento',
      h1: '¿Cuánta abertura de mordaza necesita?',
      intro:
        'La abertura de mordaza es el hueco máximo entre las mordazas — la pieza más grande que la mordaza puede sujetar físicamente. Es la especificación que más sorprende a los compradores, porque es menor de lo que sugiere el ancho.',
      sections: [
        {
          title: 'Abertura frente a ancho de mordaza',
          body: [
            'El ancho es el espacio lateral; la abertura es el hueco vertical entre las mordazas. Una mordaza de 6 pulgadas con mordazas de 6 pulgadas de ancho puede abrir solo entre 4 y 6 pulgadas. Quien quiera sujetar una fundición gruesa debe comprar por abertura, no por el número principal.',
            'La diferencia pesa lo bastante como para recorrer toda la [guía de tamaños](/knowledge/bench-vise-size-guide).',
          ],
        },
        {
          title: 'Mida su pieza más grande',
          body: [
            'Primero mida lo más grueso que vaya a sujetar — una fundición, un tramo de tubo, un montón de angular. Esa dimensión más un pequeño margen es su abertura mínima. Todo lo demás que haga la mordaza es secundario frente a caber con su pieza mayor.',
          ],
        },
        {
          title: 'Aberturas típicas por clase',
          body: [
            'Las mordazas ligeras abren normalmente 2-3 pulgadas, las medias 4-6 y las pesadas 6-10. La [mordaza media de 6 pulgadas](/products/vise-medium-6) abre lo suficiente para la mayoría de piezas de taller; una [mordaza pesada de 8 pulgadas](/products/vise-heavy-8) engulle piezas montadas y tubos que la clase pequeña no puede.',
          ],
        },
        {
          title: 'Cuando la abertura máxima lo es todo',
          body: [
            'Los tubos, las fundiciones, las plantillas y el trabajo parcialmente montado necesitan que las mordazas cubran el perfil completo, no solo una rebanada. Las aplicaciones que lo hacen constantemente — fabricación, fontanería, mantenimiento — deben pesar la abertura por encima del ancho al [elegir una mordaza de banco](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Abertura y fuerza van de la mano',
          body: [
            'Una abertura amplia es inútil sin la [fuerza de cierre](/engineering/clamping-force) para sujetar la pieza, y ambas dependen de los [materiales del cuerpo](/engineering/materials) que mantienen el marco rígido bajo carga. Compruebe las tres en el mismo modelo, no por separado.',
            'Si su pieza más grande exige una abertura no estándar, el [equipo OEM](/oem-manufacturing) puede especificarla para su programa.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-throat-depth-do-you-need',
      navLabel: '¿Cuánta garganta necesita?',
      metaTitle: '¿Cuánta garganta necesita? | Guía de alcance',
      metaDescription:
        'La garganta es lo que una pieza puede adentrarse en una mordaza de banco. Qué mide, por qué importa para el trabajo vertical y profundidades típicas por clase.',
      kicker: 'Conocimiento',
      h1: '¿Cuánta garganta necesita?',
      intro:
        'La garganta es la distancia desde el borde superior de las mordazas hasta el cuerpo — el espacio que una pieza tiene para ponerse en pie mientras trabaja. Decide lo cómodamente que limar, serrar y amolar caras verticales.',
      sections: [
        {
          title: 'Qué mide la garganta',
          body: [
            'Coloque una placa en las mordazas y se mantiene en el espacio entre las caras y las barras del cuerpo. Hasta dónde llega antes de que el cuerpo la bloquee es la garganta. Más garganta significa trabajo más profundo antes de tener que recolocar.',
            'La garganta trabaja junto a la abertura en la [guía de tamaños](/knowledge/bench-vise-size-guide) como los dos números reales de alcance.',
          ],
        },
        {
          title: 'Por qué importa la profundidad',
          body: [
            'Limar o repasar la parte superior de una pieza alta, serrar un trozo largo o trabajar el extremo de una fundición profunda dependen de cuánto puede levantarse la pieza entre las mordazas. Gargantas demasiado cortas obligan a aprietos incómodos o acrobacias en el banco.',
            'Importa sobre todo a metalúrgicos y carpinteros que repasan superficies verticales en altura — el trabajo para el que está hecha una [mordaza pesada de 8 pulgadas](/products/vise-heavy-8).',
          ],
        },
        {
          title: 'Profundidades típicas por clase',
          body: [
            'Las ligeras alcanzan unas 2-2,5 pulgadas, las medias unas 3 y las pesadas alrededor de 3,5-4 o más. Las diferencias son pulgadas, pero para piezas altas esas pulgadas son la diferencia entre un montaje y dos.',
          ],
        },
        {
          title: 'Garganta frente a abertura: lea las dos',
          body: [
            'La abertura es lo grueso que la mordaza puede sujetar; la garganta es lo profundo que una pieza puede ponerse en pie. Una mordaza ancha y baja no hará el trabajo de una de garganta profunda, así que equilibre ambas contra su trabajo — la misma lógica que al [elegir la abertura](/knowledge/how-much-jaw-opening-do-you-need).',
          ],
        },
        {
          title: 'El alcance también es rigidez',
          body: [
            'Una garganta profunda solo ayuda si el cuerpo se mantiene rígido al empujar la pieza. Esa rigidez viene de la masa y de los [materiales del cuerpo](/engineering/materials), manteniendo la [fuerza de cierre](/engineering/clamping-force) a plena profundidad en lugar de ceder.',
            '¿Necesita una garganta a medida para un producto concreto? La vía [OEM](/oem-manufacturing) adapta una plataforma a su geometría.',
          ],
        },
      ],
    },
    {
      slug: 'how-much-clamping-force-do-you-need',
      navLabel: '¿Cuánta fuerza de cierre necesita?',
      metaTitle: '¿Cuánta fuerza de cierre necesita? | Guía de fuerza',
      metaDescription:
        'La fuerza de cierre es lo fuerte que agarra una mordaza de banco bajo carga. Rangos por clase, por qué el exceso puede ser un problema y cómo verificar las cifras publicadas.',
      kicker: 'Conocimiento',
      h1: '¿Cuánta fuerza de cierre necesita?',
      intro:
        'La fuerza de cierre es lo fuerte que agarran de verdad las mordazas bajo carga. Decide si la pieza se queda quieta cuando empuja, y los fabricantes serios la publican por modelo.',
      sections: [
        {
          title: 'Qué es la fuerza de cierre',
          body: [
            'La fuerza de cierre es la carga que entregan las mordazas cerradas sobre una pieza, normalmente medida en libras de fuerza (lbf) bajo par controlado. Es la ventaja mecánica del [tornillo](/knowledge/how-does-a-bench-vise-work) convertida en sujeción real.',
            'Un fabricante que da una cifra le dice lo que la mordaza puede sujetar; uno que imprime solo "fuerte" no. El método de medición está explicado en la página de [fuerza de cierre](/engineering/clamping-force).',
          ],
        },
        {
          title: 'Rangos típicos por clase',
          body: [
            'Las ligeras rondan 1.200-1.500 lbf, las medias unos miles de lbf y las pesadas hasta 6.000-8.000 lbf. La [mordaza media de 6 pulgadas](/products/vise-medium-6) sujeta el trabajo general de taller; la [mordaza pesada de 6 pulgadas](/products/vise-heavy-6) lleva la fuerza para fabricación y martilleo.',
          ],
        },
        {
          title: 'Más no siempre es mejor',
          body: [
            'El exceso de fuerza aplasta piezas delicadas y deforma trabajo de pared fina. Ajuste la fuerza al material: las piezas blandas o acabadas necesitan sujeción controlada, el material bruto necesita todo lo que den las mordazas. Parte del ajuste es elegir la superficie de mordaza correcta, cubierta en la lógica de [diseño de mordazas](/engineering/jaw-design).',
          ],
        },
        {
          title: 'La fuerza necesita un marco fuerte',
          body: [
            'Una mordaza que aprieta solo vale lo que vale el cuerpo que sostiene el apriete. La fuerza alta exige un [material de cuerpo](/engineering/materials) rígido, a menudo más pesado, y por eso las cifras de fuerza son inseparables del conjunto.',
          ],
        },
        {
          title: 'Uniéndolo todo',
          body: [
            'Estime el empuje más fuerte que recibirá su trabajo, añada un margen de seguridad y elija la clase que lo entregue con comodidad. Lleve toda la decisión por [cómo elegir una mordaza de banco](/knowledge/how-to-choose-a-bench-vise) para que fuerza, ancho, abertura y garganta encajen.',
            'En programas OEM el [equipo de ingeniería](/oem-manufacturing) confirmará la fuerza medida en la plataforma y el juego de mordazas exactos que planea enviar.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-jaw-materials',
      navLabel: '¿De qué están hechas las mordazas?',
      metaTitle: '¿De qué están hechas las mordazas? | Materiales de mordaza',
      metaDescription:
        'Materiales de mordaza reemplazables comparados: fundición gris, aceros de herramienta como GCr15 y Cr12MoV, y cuándo elegir mordazas templadas o blandas.',
      kicker: 'Conocimiento',
      h1: '¿De qué están hechas las mordazas?',
      intro:
        'Las mordazas son la única parte de un tornillo de banco que toca de verdad su trabajo. Su material decide cuánto duran sujetando sin desgastarse, si una pieza resbala o se agarra, y cuánto castigo aguantan antes de necesitar cambio.',
      sections: [
        {
          title: 'Las mordazas son una pieza de desgaste',
          body: [
            'Las mordazas son superficies de trabajo reemplazables atornilladas al cuerpo de fundición. Tratarlas como pieza de desgaste en lugar de parte del marco es el primer paso — un [tornillo de banco medio de 6 pulgadas](/products/vise-medium-6) debe dar años de sujeción firme con sus mordazas de serie, pero el juego está diseñado para cambiarse cuando por fin se desgasta.',
            'Para hacerse una imagen de todo el conjunto, el [explicador de piezas](/knowledge/bench-vise-parts-explained) recorre cada componente.',
          ],
        },
        {
          title: 'De qué se hacen las mordazas',
          body: [
            'Los tornillos de banco de calidad usan insertos de acero de herramienta templado: el acero de rodamientos de alto carbono GCr15 y el acero de trabajo en frío de alto cromo Cr12MoV son los dos grados habituales, tratados a 58-62 HRC. Son las mismas familias de los útiles de corte y mantienen una cara dentada mordiendo el trabajo durante años.',
            'El material equivocado — acero dulce o fundición blanda — se bruñe, rebaba y estira bajo presión en lugar de sujetar.',
          ],
        },
        {
          title: 'Caras templadas, agarre estriado',
          body: [
            'Los insertos templados llevan el patrón cruzado que muerde la pieza. La geometría de esa superficie de agarre está cubierta en [diseño de mordazas](/engineering/jaw-design); el tratamiento térmico que alcanza la dureza está en [tratamiento térmico](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'Mordazas duras frente a blandas',
          body: [
            'Las mordazas duras sujetan y desgastan bien el material bruto. Para trabajo acabado o delicado, sustituya el juego por mordazas blandas, lisas o con respaldo de cobre que protejan la superficie. El [material del cuerpo](/engineering/materials) que va detrás también importa — un marco rígido convierte una mordaza dura en sujeción firme en lugar de una que se mece.',
          ],
        },
        {
          title: 'Especificar mordazas para su programa',
          body: [
            'El grado, la dureza, el patrón y las dimensiones de la mordaza son seleccionables al construir una línea de producto. La vía de [fabricación OEM](/oem-manufacturing) permite elegir el juego adecuado a su mercado sin rediseñar el cuerpo.',
          ],
        },
      ],
    },
    {
      slug: 'why-are-bench-vise-jaws-hardened',
      navLabel: '¿Por qué se endurecen las mordazas?',
      metaTitle: '¿Por qué se endurecen las mordazas? | Dureza explicada',
      metaDescription:
        'Las mordazas endurecidas resisten el desgaste, la incrustación y el bruñido, y mantienen su mordisco bajo la fuerza de sujeción. Qué hace la dureza y cuándo quiere lo contrario.',
      kicker: 'Conocimiento',
      h1: '¿Por qué se endurecen las mordazas?',
      intro:
        'Una mordaza de tornillo se endurece por una razón: seguir funcionando después de años de presión. El metal blando cede bajo carga, y una mordaza que cede deja de sujetar recto, en silencio y con seguridad.',
      sections: [
        {
          title: 'El precio de las mordazas blandas',
          body: [
            'Una mordaza sin templar se abolla, rebaba e incrusta partículas de la pieza en su cara. El mordisco se degrada, la suciedad se aplasta contra la superficie y una esquina dura marca la siguiente pieza. El templado detiene ese ciclo.',
          ],
        },
        {
          title: 'Dureza significa resistencia al desgaste',
          body: [
            'La dureza se mide en la escala Rockwell y las mordazas hechas para agarrar se templan a 58-62 HRC. A ese nivel la cara resiste la indentación de la [fuerza de sujeción](/engineering/clamping-force) y se mantiene plana con el uso repetido. Es la especificación de las mordazas del [tornillo pesado de banco de 6 pulgadas](/products/vise-heavy-6) y del resto de la serie pesada. El número se descifra aquí: [qué significa 60 HRC](/knowledge/what-does-60-hrc-mean).',
          ],
        },
        {
          title: 'La cara estriada',
          body: [
            'La dureza sola no basta — la cara se mecaniza o se estampa con un patrón cruzado que muerde la pieza. Ese patrón, más la dureza que mantiene sus filos afilados, es toda la historia del [diseño de mordazas](/engineering/jaw-design).',
          ],
        },
        {
          title: 'Dura pero no frágil',
          body: [
            'El templado es un equilibrio: demasiado blando se desgasta, demasiado duro salta. El revenido baja la dureza del extremo para que el inserto aguante el martilleo sin romperse. La página de [tratamiento térmico](/engineering/heat-treatment) explica cómo se logra el equilibrio.',
          ],
        },
        {
          title: 'Cuándo quiere lo contrario',
          body: [
            'Las mordazas duras son un error para superficies acabadas y piezas delicadas. Por eso existen juegos blandos, lisos o con revestimiento de cobre — cámbielos y el juego templado se queda en el cajón. Todo lo de la [biblioteca de materiales](/engineering/materials) aplica a las elecciones que los rodean.',
            '¿Eligiendo dureza de mordaza para una gama de producto? Las [herramientas OEM](/oem-manufacturing) ofrecen varios grados y tratamientos por modelo.',
          ],
        },
      ],
    },
    {
      slug: 'what-does-60-hrc-mean',
      navLabel: '¿Qué significa 60 HRC?',
      metaTitle: '¿Qué significa 60 HRC? | Dureza explicada',
      metaDescription:
        'La escala Rockwell C descifrada: qué es un número HRC, qué significa 60 HRC para una mordaza y cómo leer la dureza en una ficha.',
      kicker: 'Conocimiento',
      h1: '¿Qué significa 60 HRC?',
      intro:
        'HRC es la abreviatura de dureza en casi toda ficha de tornillo de banco de calidad. 60 HRC significa un nivel de dureza concreto y comprobable — y para una mordaza es la diferencia entre "muerde durante años" y "se desgasta en una temporada".',
      sections: [
        {
          title: 'La escala Rockwell C',
          body: [
            'La prueba Rockwell C presiona un cono de diamante sobre la superficie bajo una carga fija y mide cuánto penetra. Un número mayor significa una indentación más superficial — material más duro. La escala se usa para aceros templados desde cuchillos hasta mordazas.',
          ],
        },
        {
          title: 'Cómo se siente 60 HRC',
          body: [
            'A 60 HRC una lima de acero de herramienta templado resbala por la superficie sin cortar. Es territorio de acero de herramienta, la misma clase de dureza que los buenos útiles de corte, y resiste los abollones y rebabas que arruinan las caras más blandas.',
          ],
        },
        {
          title: 'El rango típico de las mordazas',
          body: [
            'Las mordazas de calidad se templan a 58-62 HRC — 60 está en el centro. Ese rango es deliberado: bastante dureza para agarrar años, bastante revenido para no saltar con el martilleo. Cómo se aplica el tratamiento lo cubre el [tratamiento térmico](/engineering/heat-treatment).',
            'En la práctica, por eso una buena mordaza se desgasta despacio incluso a plena [fuerza de sujeción](/engineering/clamping-force): las marcas las recibe la pieza, no la mordaza. Es el mismo grado de inserto del [tornillo pesado de banco de 8 pulgadas](/products/vise-heavy-8) y de toda la serie pesada.',
          ],
        },
        {
          title: 'Dureza frente a tenacidad',
          body: [
            'El HRC mide un solo eje. Una pieza puede ser extremadamente dura y aun así frágil, por eso el revenido baja ligeramente la dureza para comprar tenacidad. Ese compromiso es la razón de que [las mordazas de los tornillos se endurezcan](/knowledge/why-are-bench-vise-jaws-hardened). Leer 60 HRC en una ficha significa leerlo junto al grado de acero — el artículo de [materiales del cuerpo](/engineering/materials) muestra la misma lógica aplicada a los marcos.',
          ],
        },
        {
          title: 'Leer la ficha técnica',
          body: [
            'Cuando una ficha dice "mordazas templadas a 58-62 HRC", está diciendo que los insertos están en la clase de los aceros de herramienta y mantendrán su mordisco bajo carga. Un tornillo que omite la dureza por completo le está diciendo algo también.',
            '¿Necesita documentado el tratamiento y el grado para su producto? La vía [OEM](/oem-manufacturing) puede certificar la dureza que sale con su marca.',
          ],
        },
      ],
    },
    {
      slug: 'fixed-vs-swivel-base-bench-vise',
      navLabel: 'Tornillo con base fija vs giratoria',
      metaTitle: 'Base fija vs giratoria en tornillo de banco: ¿cuál elegir?',
      metaDescription:
        'Base fija o giratoria en un tornillo de banco: rigidez, ángulos de trabajo y cuándo vale la pena poder girar la mordaza.',
      kicker: 'Conocimiento',
      h1: 'Tornillo de banco con base fija vs giratoria',
      intro:
        'La base es la unión entre el tornillo y el banco. Fija o giratoria cambia si puede girar la pieza o tiene que llegar hasta ella — y la firmeza de todo el tornillo bajo carga.',
      sections: [
        {
          title: 'Qué hace la base',
          body: [
            'La base atornilla el tornillo al banco y carga toda la fuerza de las mordazas. Su diseño es uno de los primeros aspectos a comparar, junto con las mordazas y la [construcción del cuerpo](/knowledge/bench-vise-parts-explained).',
          ],
        },
        {
          title: 'Base fija: nada se mueve',
          body: [
            'Una base fija es una sola pieza fundida atornillada directamente al banco. No hay junta giratoria que se afloje ni desplace, por lo que ofrece el tacto más directo y sólido — y suele costar menos. Para trabajo donde las mordazas siempre apuntan al mismo lado, es la opción más fuerte.',
          ],
        },
        {
          title: 'Base giratoria: gire hacia la pieza',
          body: [
            'Una base giratoria añade una placa de bloqueo: afloje dos tuercas, gire el tornillo al ángulo que necesite y bloquee. En vez de rodear una pieza larga, gire el [tornillo medio de 6 pulgadas](/products/vise-medium-6) para llegar a ella. Es de serie en la mayoría de tornillos de taller.',
          ],
        },
        {
          title: 'Cuándo vale la pena girar',
          body: [
            'Piezas largas o incómodas, reparación de automoción y cualquier trabajo con múltiples ángulos favorecen la giratoria. La capacidad de reposicionar sin soltar el apriete ahorra tiempo. El [tornillo pesado de 6 pulgadas](/products/vise-heavy-6) aporta la masa para que esas ángulos sean rígidos.',
          ],
        },
        {
          title: 'La rigidez es la compensación',
          body: [
            'Una unión giratoria solo es tan buena como su bloqueo: un bloqueo flojo cede y resta [fuerza de sujeción](/engineering/clamping-force). Por eso la masa de base y el [material del cuerpo](/engineering/materials) importan más, no menos, en un modelo giratorio — la unión debe ser tan sólida como una base fija.',
          ],
        },
        {
          title: 'Llegar a la decisión',
          body: [
            'Elija fija para máxima rigidez y simplicidad; elija giratoria para versatilidad. La [guía de elección](/knowledge/how-to-choose-a-bench-vise) equilibra la base contra mordaza, abertura y clase. Un [modelo especialista giratorio](/products/vise-specialty-swivel) cubre trabajos centrados en la rotación.',
            'Para gamas OEM, el [equipo de fabricación](/oem-manufacturing) ofrece ambas bases sobre la misma plataforma.',
          ],
        },
      ],
    },
    {
      slug: 'quick-release-bench-vise-mechanism',
      navLabel: 'Mecanismo de liberación rápida',
      metaTitle: 'Mecanismo de liberación rápida de tornillo de banco: cómo funciona',
      metaDescription:
        'Cómo una mordaza de liberación rápida desengancha el tornillo para deslizar la mordaza libre, las compensaciones frente al tornillo estándar y cuándo vale elegirlo.',
      kicker: 'Conocimiento',
      h1: 'Mecanismo de liberación rápida de tornillo de banco',
      intro:
        'Un tornillo estándar abre y cierra girando manivela por todo el hilo. Un mecanismo de liberación rápida permite mover la mordaza libremente al instante, luego volver a enganchar para sujetar — útil cuando las piezas cambian de tamaño constantemente.',
      sections: [
        {
          title: 'El tornillo estándar',
          body: [
            'En un tornillo convencional la manivela acciona un tornillo roscado tipo Acme que empuja la mordaza. Es simple, fuerte y se bloquea solo, pero pasar de una pieza fina a una gruesa requiere muchas vueltas. El mecanismo se describe en [cómo funciona un tornillo de banco](/knowledge/how-does-a-bench-vise-work).',
          ],
        },
        {
          title: 'Qué añade la liberación rápida',
          body: [
            'Un sistema de liberación rápida añade una tuerca dividida o desenganchable alrededor del tornillo. Tire de una palanca y la tuerca suelta la rosca para que la mordaza se desplace a mano; suelte la palanca y vuelve a enganchar para apretar. El [explicador de piezas](/knowledge/bench-vise-parts-explained) muestra dónde se sitúa la tuerca.',
          ],
        },
        {
          title: 'Cómo funciona',
          body: [
            'Una palanca bajo el cuerpo desplaza una media tuerca fuera del tornillo. Con la rosca desenganchada la mordaza viaja libre; al soltar la palanca, un muelle devuelve la media tuerca a la rosca y girar la manivela vuelve a funcionar como siempre. Un movimiento, sin vueltas de manivela.',
          ],
        },
        {
          title: 'Las compensaciones',
          body: [
            'La liberación rápida añade una pieza móvil en la ruta de carga. Hay más mecanismo que limpiar y lubricar, y en un tornillo muy cargado debe estar bien construido para mantener la [fuerza de sujeción](/engineering/clamping-force) nominal. La media tuerca y el tornillo son superficies de desgaste — vea los mismos principios en los [materiales de mordaza](/knowledge/bench-vise-jaw-materials).',
          ],
        },
        {
          title: '¿La necesita?',
          body: [
            'Si cambia entre tamaños muy distintos todo el día, la liberación rápida vale la pena. Si sujeta el mismo material grueso durante largos tramos, el tornillo estándar es más simple y igual de fuerte. La decisión va junto a la clase en la [guía de elección](/knowledge/how-to-choose-a-bench-vise).',
            'La mayoría de modelos de catálogo usan tornillo estándar; la variante de liberación rápida es normalmente una decisión OEM. El [equipo de producción](/oem-manufacturing) puede adaptar una plataforma con el mecanismo y el acabado que necesite.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-pipe-jaws',
      navLabel: 'Diseño de mordazas para tubería',
      metaTitle: 'Diseño de mordazas para tubería: cómo funcionan',
      metaDescription:
        'Las mordazas para tubería añaden una ranura en V bajo las mordazas planas para sujetar material redondo sin aplastarlo. Cómo funciona el diseño y cuándo elegir un tornillo para tubería.',
      kicker: 'Conocimiento',
      h1: 'Diseño de mordazas para tubería',
      intro:
        'El material redondo es lo más difícil de sujetar en mordazas planas — rueda. Las mordazas para tubería son la solución: una segunda superficie de agarre en V que centra y muerde un tubo para que no gire.',
      sections: [
        {
          title: 'Dos juegos de mordazas',
          body: [
            'Muchos tornillos de banco llevan dos superficies de agarre: las mordazas planas principales para trabajo general y un juego de mordazas para tubería oculto debajo o detrás. El [explicador de piezas](/knowledge/bench-vise-parts-explained) ubica ambas en el cuerpo.',
          ],
        },
        {
          title: 'El principio de la ranura en V',
          body: [
            'Las mordazas para tubería se mecanizan en V. Coloque una barra redonda o un tubo en la V y se centra solo — las dos caras anguladas apoyan el tubo en su eje en lugar de dejarlo rodar. El ángulo y el patrón de dientes siguen las mismas reglas de [diseño de mordazas](/engineering/jaw-design) que las planas, adaptados para contacto curvo.',
          ],
        },
        {
          title: 'Dónde se sitúan',
          body: [
            'En un tornillo combinado, las mordazas para tubería se ubican en la garganta debajo de las planas, así que puede pasar de una pieza plana a un tubo sin cambiar de herramienta. En un tornillo dedicado para tubería toda la herramienta está construida alrededor de la V y el tubo, con capacidad dimensionada a diámetros de tubería.',
          ],
        },
        {
          title: 'Tornillo para tubería vs tornillo con mordazas para tubería',
          body: [
            'Un [tornillo para tubería de 4 pulgadas](/products/vise-pipe-4) o [de 6 pulgadas](/products/vise-pipe-6) sujeta y gira tubería para roscar y cortar, a menudo con soporte o adaptador. Un [tornillo medio de 6 pulgadas](/products/vise-medium-6) con mordazas para tubería cubre trabajo de tubería ocasional junto a los trabajos normales. Ajuste la herramienta a la frecuencia con que aparece la tubería.',
          ],
        },
        {
          title: 'Agarre, fuerza y seguridad',
          body: [
            'Una pieza redonda quiere girar bajo la manivela, así que las mordazas para tubería necesitan una V firme y suficiente [fuerza de sujeción](/engineering/clamping-force) para detener la rotación — a través de un [cuerpo](/engineering/materials) rígido. Un tubo que se suelta bajo una sierra es un problema de seguridad.',
            'Dimensionar la capacidad de las mordazas para tubería para una línea de producto es una decisión de [especificación OEM](/oem-manufacturing) sobre la misma plataforma.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-replaceable-jaws',
      navLabel: 'Mordazas reemplazables',
      metaTitle: 'Diseño de mordazas reemplazables: servicio de mordaza',
      metaDescription:
        'Cómo se fijan las mordazas reemplazables, por qué superan a las fijas y qué comprobar al pedir un juego de repuesto.',
      kicker: 'Conocimiento',
      h1: 'Diseño de mordazas reemplazables',
      intro:
        'Las mordazas reciben cada rasguño, marca y impacto que un tornillo alguna vez ve. Diseñarlas para ser reemplazadas — en vez de fusionadas al cuerpo — es lo que permite que un buen tornillo sobreviva a su primer juego de dientes.',
      sections: [
        {
          title: 'Las mordazas son una pieza de desgaste',
          body: [
            'Las caras de agarre son las superficies más trabajadas de la herramienta. Tratarlas como reemplazables es la diferencia entre renovar un tornillo y reemplazarlo. La historia del material detrás de esos insertos está en [materiales de mordaza](/knowledge/bench-vise-jaw-materials).',
          ],
        },
        {
          title: 'Cómo se fijan',
          body: [
            'Las mordazas reemplazables son inserciones separadas asentadas en planos mecanizados y fijadas con tornillos hexagonales avellanados, a menudo ubicadas con pasadores para que no se desplacen. Afloje los tornillos y el juego se levanta — sin mecanizado ni soldadura.',
          ],
        },
        {
          title: 'Por qué superan a las fijas',
          body: [
            'Un juego reemplazable puede renovarse cuando los dientes se desgastan, actualizarse a mordazas blandas o con respaldo de cobre para trabajo acabado, o cambiarse para adaptarse a una tarea. Esa mantenibilidad es una decisión de [diseño de mordazas](/engineering/jaw-design), y el tratamiento térmico que mantiene la dureza se cubre en [tratamiento térmico](/engineering/heat-treatment).',
          ],
        },
        {
          title: 'Comprar y montar repuestos',
          body: [
            'Compruebe modelo, ancho de mordaza, espaciado de tornillos y dureza al pedir repuestos. Como los asientos se mecanizan según el [cuerpo](/engineering/materials), los repuestos originales encajan planos y paralelos. Mantenga los tornillos limpios y aceitados para que el juego salga fácil la próxima vez — parte de la rutina de [mantenimiento](/knowledge/bench-vise-maintenance).',
          ],
        },
        {
          title: 'Diseñar para servicio',
          body: [
            'Diseñar para servicio es una ventaja, no un coste: el cliente se queda con una marca que mantiene piezas de repuesto disponibles. El [equipo OEM](/oem-manufacturing) construye plataformas con mordazas reemplazables y puede suministrar juegos de repuesto con su marca.',
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-anvil-surface',
      navLabel: 'Superficie de yunque',
      metaTitle: 'Superficie de yunque en tornillo de banco: para qué sirve',
      metaDescription:
        'La superficie de yunque en un tornillo de banco: para qué sirve la base mecanizada, yunque fijo vs móvil y sus límites en un cuerpo de fundición.',
      kicker: 'Conocimiento',
      h1: 'Superficie de yunque en tornillo de banco',
      intro:
        'Muchos tornillos de banco terminan con una plancha mecanizada plana en la parte trasera del cuerpo — la superficie de yunque. Convierte el tornillo en una estación pequeña de golpeado y conformado, con límites.',
      sections: [
        {
          title: 'El yunque en el cuerpo',
          body: [
            'La superficie de yunque es una zona mecanizada plana, normalmente detrás de las mordazas traseras, en la parte superior del cuerpo. Es una de las características enumeradas en el [explicador de piezas](/knowledge/bench-vise-parts-explained) y no cuesta nada incluirla en una buena pieza fundida.',
          ],
        },
        {
          title: 'Para qué sirve',
          body: [
            'Es un sitio para golpes ligeros y conformado: dar un toque a un pasador, aplanar una tira, peinar un remache, enderezar material delgado. Ahorra un viaje al yunque de banco para trabajos pequeños porque el tornillo ya tiene la pieza sujeta.',
          ],
        },
        {
          title: 'Yunque fijo frente a placa móvil',
          body: [
            'Los tornillos ligeros a veces montan una placa de yunque aparte — fija o móvil con la mordaza. Una placa móvil viaja con la mordaza para mantener el área de golpeado accesible. Los [tornillos especialistas con yunque](/products/vise-specialty-anvil) incorporan la función desde el principio.',
          ],
        },
        {
          title: 'Sus límites reales',
          body: [
            'El yunque de un tornillo de banco es una comodidad, no un yunque de herrero. Los cuerpos son de fundición gris, que es rígida pero frágil — un golpe fuerte puede agrietar la pieza. Úselo para toques controlados y conformado ligero, y guarde los golpes fuertes para un yunque real. El artículo de [materiales del cuerpo](/engineering/materials) explica por qué la fundición se comporta así.',
          ],
        },
        {
          title: 'Especificar la función',
          body: [
            'Si la plancha es lisa, escalonada o una pieza aparte es una decisión de [diseño](/engineering/heat-treatment) y herramientas. Para una gama de producto, el [equipo OEM](/oem-manufacturing) puede añadir o moldear la superficie de yunque según su mercado.',
          ],
        },
      ],
    },
    {
      slug: 'automotive-repair-bench-vise',
      navLabel: 'Tornillo de banco para reparación automotriz',
      metaTitle: 'Tornillo de banco para reparación automotriz: sujeción en taller',
      metaDescription:
        'Por qué un tornillo de banco es el estándar de sujeción en garajes — piezas de freno, soportes, mangueras y la clase de tornillo que cubre la reparación general.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para reparación automotriz',
      intro:
        'Un tornillo de banco es la estación de sujeción permanente en la mayoría de talleres de reparación y garajes. Sujeta lo que sus manos no pueden — componentes de freno, soportes, mangueras y piezas fabricadas — mientras corta, perfora, amola y monta.',
      sections: [
        {
          title: 'El caballo de batalla del garaje',
          body: [
            'Un [tornillo de banco medio de 6 pulgadas](/products/vise-medium-6) es la especificación clásica de garaje: lo suficientemente ancho para la mayoría de piezas de freno, con una abertura que traga soportes y un cuerpo lo suficientemente pesado para aguantar martillazos. Es la herramienta que aparece primero en el taller y nunca se guarda.',
            'Esa misma herramienta se cubre en la guía de [aplicaciones de taller](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Lo que sujeta',
          body: [
            'Pastillas, soportes, secciones de chasis, mangueras, accesorios, resortes — casi todo lo que se sujeta en un garaje pasa por las mordazas. Un [tornillo pesado de 6 pulgadas](/products/vise-heavy-6) cubre las piezas más gruesas y entrega la [fuerza de sujeción](/engineering/clamping-force) necesaria para aguantar bajo el martillo.',
          ],
        },
        {
          title: 'Por qué un tornillo supera a una abrazadera',
          body: [
            'Una pieza automotriz es tridimensional y se extiende en todas direcciones. Un tornillo la sujeta una vez, en cualquier orientación, sin que se mueva. Las [mordazas reemplazables](/knowledge/bench-vise-replaceable-jaws) protegen superficies acabadas mientras agarran lo suficiente para detener la rotación.',
          ],
        },
        {
          title: 'Elegir la clase correcta',
          body: [
            'Los tornillos ligeros cubren piezas pequeñas y presupuestos ajustados; los medios cubren la reparación general; los pesados manejan trabajo de chasis y fundiciones más gruesas. La [guía de tamaños](/knowledge/bench-vise-size-guide) recorre las dimensiones y la [guía de elección](/knowledge/how-to-choose-a-bench-vise) ajusta la clase al trabajo.',
          ],
        },
        {
          title: 'Hacerlo durar en un garaje',
          body: [
            'La suciedad automotriz es abrasiva. Un poco de [mantenimiento](/knowledge/bench-vise-maintenance) — limpiar el tornillo, aceitar el carril — evita que el mecanismo se desgaste prematuramente. El [material del cuerpo](/engineering/materials) y la [dureza de mordaza](/knowledge/what-does-60-hrc-mean) deciden cuánto dura el tornillo bajo uso constante.',
            'Para gamas OEM de garaje, el [equipo de producción](/oem-manufacturing) suministra el cuerpo, la base y el acabado que su mercado necesita.',
          ],
        },
      ],
    },
    {
      slug: 'metalworking-bench-vise',
      navLabel: 'Tornillo de banco para metalurgia',
      metaTitle: 'Tornillo de banco para metalurgia: limado, serrado y sujeción',
      metaDescription:
        'Cómo un tornillo de banco soporta la metalurgia — limado, serrado, perforación y amolado. Por qué la rigidez, la dureza de mordaza y el montaje deciden la calidad del corte.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para metalurgia',
      intro:
        'La metalurgia es donde un tornillo de banco gana su reputación. Un tornillo que se mantiene sólido bajo la lima, sujeta la sierra recta y toma el amolador sin moverse — esa es la diferencia entre un acabado limpio y un borde arruinado.',
      sections: [
        {
          title: 'La base del metal',
          body: [
            'Perforar, roscar, limar y serrar todos necesitan una pieza que no se mueva. Un [tornillo pesado de 6 pulgadas](/products/vise-heavy-6) atornillado a un banco sólido es la forma más simple de crear esa sujeción muerta para metal. Las aplicaciones se cubren en [para qué sirve un tornillo](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'La rigidez es el control de calidad',
          body: [
            'Un tornillo que cede saca la pieza de escuadra y arruina el corte. La cantidad de [fuerza de sujeción](/engineering/clamping-force) que entrega el marco y lo bien que esté montado al banco deciden si el tornillo se mueve o la lima lo hace.',
            'Por eso los tornillos más pesados tienen más masa — el [material del cuerpo](/engineering/materials) es la fuente de rigidez.',
          ],
        },
        {
          title: 'Mordazas que muerden y mordazas que protegen',
          body: [
            'Las mordazas templadas y estriadas sujetan material bruto firmemente. Para piezas acabadas o pulidas, cambie a [mordazas blandas reemplazables](/knowledge/bench-vise-replaceable-jaws). La dureza y el patrón se cubren en [diseño de mordazas](/engineering/jaw-design) y [qué significa 60 HRC](/knowledge/what-does-60-hrc-mean).',
          ],
        },
        {
          title: 'Serrar y limar',
          body: [
            'Una garganta lo suficientemente profunda para despejar la hoja de sierra importa al cortar secciones largas — la [guía de garganta](/knowledge/how-much-throat-depth-do-you-need) muestra qué medir. Limar la parte superior de una pieza sujeta exige un tornillo que no se balancee, lo que vuelve a masa y [montaje](/knowledge/bench-vise-maintenance).',
          ],
        },
        {
          title: 'Especificación para el trabajo',
          body: [
            'La metalurgia es un oficio amplio. La [guía de elección](/knowledge/how-to-choose-a-bench-vise) equilibra ancho, abertura y garganta contra los tipos de metal que se trabajan. Para líneas OEM, el [equipo de fabricación](/oem-manufacturing) puede especificar la plataforma exacta.',
          ],
        },
      ],
    },
    {
      slug: 'welding-prep-bench-vise',
      navLabel: 'Tornillo de banco para preparación de soldadura',
      metaTitle: 'Tornillo de banco para preparación de soldadura: antes del arco',
      metaDescription:
        'Cómo un tornillo de banco soporta la preparación de soldadura — ajuste, punteado, amolado y limpieza. Qué material de cuerpo y base elegir.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para preparación de soldadura',
      intro:
        'Un tornillo de banco no reemplaza las abrazaderas de soldar, pero es donde se realizan el ajuste, el punteado, el amolado y la preparación de bordes antes de que se encienda el arco.',
      sections: [
        {
          title: 'El tornillo antes del arco',
          body: [
            'El ajuste, el punteado, el amolado de la raíz y la limpieza de salpicaduras ocurren antes de que el soplete se encienda. Un [tornillo pesado de 8 pulgadas](/products/vise-heavy-8) es lo suficientemente grande para la mayoría de ensamblajes soldados y lo suficientemente pesado para absorber martillazos.',
            'El rol amplio del tornillo en la metalurgia se cubre en [para qué sirve un tornillo de banco](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Calor y material del cuerpo',
          body: [
            'Las salpicaduras y el calor de soldadura alcanzan el cuerpo ocasionalmente. La fundición gris lo aguanta sin preocupación; el acero forjado absorbe impactos mejor si se martilla con frecuencia. La comparación está en [fundición vs. acero forjado](/knowledge/cast-iron-vs-steel-vises) y la biblioteca de [materiales del cuerpo](/engineering/materials).',
          ],
        },
        {
          title: 'Sujetar secciones redondas y estructurales',
          body: [
            'Las soldaduras a menudo involucran tubería, barras redondas y secciones estructurales. Un tornillo con [mordazas para tubería](/knowledge/bench-vise-pipe-jaws) centra la pieza; una [base giratoria](/knowledge/fixed-vs-swivel-base-bench-vise) permite inclinarla sin soltar el apriete.',
          ],
        },
        {
          title: 'Lo que esto le hace al tornillo',
          body: [
            'La preparación de soldadura es abrasiva: polvo de amolar, salpicaduras y martillazos repetidos desgastan las mordazas. Las [mordazas reemplazables](/knowledge/bench-vise-replaceable-jaws) y un poco de [mantenimiento](/knowledge/bench-vise-maintenance) mantienen el tornillo funcional. Los [materiales de mordaza](/knowledge/bench-vise-jaw-materials) explican por qué las templadas duran más.',
          ],
        },
        {
          title: 'Elegir para trabajo de soldadura',
          body: [
            'El trabajo de soldadura premia masa y rigidez. La [guía de elección](/knowledge/how-to-choose-a-bench-vise) cubre las compensaciones; para una gama, el [equipo OEM](/oem-manufacturing) suministra la plataforma pesada con el acabado que su mercado necesita.',
          ],
        },
      ],
    },
    {
      slug: 'garage-workshop-bench-vise',
      navLabel: 'Tornillo de banco para garaje y taller',
      metaTitle: 'Tornillo de banco para garaje y taller: el que lo hace todo',
      metaDescription:
        'Por qué todo taller y garaje necesita un tornillo de banco, qué tamaño cubre más trabajos y cómo montar y mantener un tornillo de garaje.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para garaje y taller',
      intro:
        'Un tornillo de garaje es la única herramienta que nunca se guarda. Sujeta tubería para roscar, madera para perforar, metal para limar y una docena de trabajos que no planeó cuando construyó el banco.',
      sections: [
        {
          title: 'Por qué todo taller lo necesita',
          body: [
            'Un tornillo de banco es la única sujeción que convierte el banco en estación de trabajo. Un [tornillo medio de 6 pulgadas](/products/vise-medium-6) cubre la mayoría de trabajos de taller sin dominar el banco — y es la herramienta que más se recomienda como primera compra.',
            'El rango de trabajos se lista en [para qué sirve un tornillo de banco](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Tamaño para más trabajos',
          body: [
            'Un tornillo medio de 6 pulgadas toma la mayoría de lo que un taller ve — piezas pequeñas, tubería, lámina y fabricación ligera. Un [tornillo ligero de 4 pulgadas](/products/vise-light-4) maneja trabajo de afición. La [guía de tamaños](/knowledge/bench-vise-size-guide) desglosa las dimensiones.',
          ],
        },
        {
          title: 'Base y posición',
          body: [
            '¿Fija o giratoria? Para un garaje con trabajo variado, una [base giratoria](/knowledge/fixed-vs-swivel-base-bench-vise) se paga sola. Montelo donde la luz sea mejor y el banco más grueso, con pernos que coincidan con los agujeros de la base.',
          ],
        },
        {
          title: 'Mantenerlo funcionando',
          body: [
            'El garaje es polvoso y el polvo es abrasivo. Un poco de [mantenimiento](/knowledge/bench-vise-maintenance) — limpiar el tornillo, limpiar el carril — evita que se desgaste antes de tiempo. Las [mordazas templadas](/knowledge/what-does-60-hrc-mean) y los [juegos reemplazables](/knowledge/bench-vise-replaceable-jaws) completan el cuadro.',
          ],
        },
        {
          title: 'Comprar para su mercado',
          body: [
            'Los garajes son un mercado global. La [guía de elección](/knowledge/how-to-choose-a-bench-vise) ayuda al usuario final; la vía [OEM](/oem-manufacturing) ayuda a las marcas a construir una línea de garaje.',
          ],
        },
      ],
    },
    {
      slug: 'schools-training-bench-vise',
      navLabel: 'Tornillo de banco para escuelas y formación',
      metaTitle: 'Tornillo de banco para escuelas: sujeción segura para alumnos',
      metaDescription:
        'Cómo se usa un tornillo de banco en escuelas y formación — la herramienta que enseña la sujeción de forma segura, qué tamaño comprar y cómo mantener un juego de aula.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para escuelas y formación',
      intro:
        'En un aula de taller el tornillo enseña la sujeción por sí mismo. Enseña a los alumnos a sujetar, posicionar y mantenerse seguros — y debe hacerlo cien veces al día, año tras año.',
      sections: [
        {
          title: 'El tornillo que enseña',
          body: [
            'Un tornillo de banco es a menudo la primera herramienta que un alumno usa de forma independiente. Introduce la disciplina de sujetar correctamente, y un [tornillo ligero de 4 pulgadas](/products/vise-light-4) o un [medio de 5 pulgadas](/products/vise-medium-5) se adapta a la altura de aula, la fuerza de los alumnos y la escala de los proyectos.',
            'Los mismos modelos se cubren en la [guía de tamaños](/knowledge/bench-vise-size-guide) y la [visión general de tipos](/knowledge/types-of-bench-vises-explained).',
          ],
        },
        {
          title: 'Seguridad y durabilidad',
          body: [
            'Un aula golpea las herramientas fuerte: sujeción incorrecta, martillazos repentinos y piezas caídas. Un [material de cuerpo](/engineering/materials) robusto, [mordazas templadas](/knowledge/what-does-60-hrc-mean) y [juegos reemplazables](/knowledge/bench-vise-replaceable-jaws) significan que el juego dure múltiples clases sin perder agarre.',
          ],
        },
        {
          title: 'Montaje y distribución del aula',
          body: [
            'Un banco de aula suele ser más delgado que uno profesional, por lo que atornillar el tornillo con seguridad y reforzar la superficie es esencial. Un tornillo por estación, posicionado para que los alumnos miren la dirección correcta y estén lejos de equipos rotatorios.',
          ],
        },
        {
          title: 'Mantener un juego de aula',
          body: [
            'Un poco de [mantenimiento](/knowledge/bench-vise-maintenance) programado — limpieza semanal del tornillo, aceite mensual — mantiene el juego funcionando. Enseñe el mismo hábito a los alumnos: limpie el tornillo al terminar.',
          ],
        },
        {
          title: 'Especificación para educación',
          body: [
            'Precios de educación, suministro en volumen y disponibilidad de repuestos importan tanto como el tornillo. La vía [OEM](/oem-manufacturing) maneja pedidos de volumen de aula y juegos con marca.',
          ],
        },
      ],
    },
    {
      slug: 'woodworking-bench-vise',
      navLabel: 'Tornillo de banco para carpintería',
      metaTitle: 'Tornillo de banco para carpintería: sujeción de madera',
      metaDescription:
        'Cómo un tornillo de banco sujeta madera para serrar, perforar, cepillar y tallar — cuándo un tornillo de metalurgia es la elección incorrecta y qué usar en su lugar.',
      kicker: 'Centro de conocimiento',
      h1: 'Tornillo de banco para carpintería',
      intro:
        'La carpintería necesita un tipo de agarre diferente. El acabado importa, el material es blando y el tornillo equivocado puede aplastar la veta antes de que empiece el corte. Un tornillo de carpintería sujeta firme sin dejar marcas.',
      sections: [
        {
          title: 'Por qué la carpintería es diferente',
          body: [
            'La madera es más blanda que el metal pero más sensible al daño superficial. Las mordazas templadas y estriadas — perfectas para acero — masticarán la nuez. La solución es mordazas lisas y [planas](/knowledge/bench-vise-jaw-materials) o [mordazas blandas reemplazables](/knowledge/bench-vise-replaceable-jaws) que protegen la superficie mientras sujetan.',
            'El contexto general de sujeción está en [para qué sirve un tornillo](/knowledge/what-is-a-bench-vise-used-for).',
          ],
        },
        {
          title: 'Abertura para madera',
          body: [
            'Una tabla o lateral de armario puede superar la abertura de un tornillo pequeño. Un [modelo medio de 5 o 6 pulgadas](/products/vise-medium-6) da el espacio; un [tornillo ligero de 4 pulgadas](/products/vise-light-4) cubre material más pequeño. La [guía de abertura](/knowledge/how-much-jaw-opening-do-you-need) explica qué medir.',
          ],
        },
        {
          title: 'Sujetar y posicionar',
          body: [
            'Una [base giratoria](/knowledge/fixed-vs-swivel-base-bench-vise) ayuda al trabajar tablas largas desde distintos ángulos. Las mordazas para tubería son menos útiles aquí, pero un juego de [mordazas reemplazables](/knowledge/bench-vise-replaceable-jaws) con abertura amplia cubre la mayoría de trabajos de carpintería.',
          ],
        },
        {
          title: 'Evitar daños',
          body: [
            'Una [fuerza de sujeción](/engineering/clamping-force) baja suele ser suficiente para madera — quiere el agarre justo para sujetar, no lo suficiente para aplastar. Esto significa que el tornillo no necesita masa pesada, y la elección se sitúa en el rango ligero a medio de la [guía de elección](/knowledge/how-to-choose-a-bench-vise).',
          ],
        },
        {
          title: 'Para gamas OEM',
          body: [
            'Los tornillos de carpintería a menudo se venden con caras lisas, placas de banco de madera y un tono de marca diferente. El [equipo OEM](/oem-manufacturing) suministra variantes centradas en carpintería sobre plataformas probadas.',
          ],
        },
      ],
    },
    {
      slug: 'private-label-bench-vise-guide',
      navLabel: 'Guía de tornillo de marca privada',
      metaTitle: 'Guía de tornillo de marca privada | OEM y tornillos personalizados',
      metaDescription:
        'Cómo construir una línea de tornillos de marca privada — selección de plataforma, personalización de mordazas, MOQ, certificación y la diferencia OEM vs marca privada.',
      kicker: 'Centro de conocimiento',
      h1: 'Guía de tornillo de marca privada',
      intro:
        'La marca privada es como muchas marcas entran al mercado de tornillos de banco: elijen una plataforma probada, personalizan los detalles y la envían bajo su nombre. El proceso es más rápido y barato que diseñar desde cero — si sabe qué especificar.',
      sections: [
        {
          title: 'Qué significa marca privada',
          body: [
            'Un programa de marca privada toma una plataforma existente del fabricante y estampa su marca, acabado, juego de mordazas y embalaje. El tornillo está probado; la etiqueta es suya. Es la alternativa más rápida y de menor riesgo a construir un tornillo desde nada — y empieza en el mismo [piso de fabricación](/oem-manufacturing).',
          ],
        },
        {
          title: 'Selección de plataforma',
          body: [
            'Empiece con la plataforma que se adapte a su mercado: ligera para retail, media para talleres, pesada para industrial. Un [tornillo medio de 6 pulgadas](/products/vise-medium-6) cubre el mercado más amplio. La [guía de elección](/knowledge/how-to-choose-a-bench-vise) recorre los parámetros.',
          ],
        },
        {
          title: 'Lo que puede personalizar',
          body: [
            'Ancho de mordaza, abertura, material y dureza de mordaza, tipo de base, pintura o recubrimiento en polvo, logo y embalaje — todo es seleccionable sobre el mismo marco. Los [materiales del cuerpo](/engineering/materials) y los [materiales de mordaza](/knowledge/bench-vise-jaw-materials) explican las compensaciones.',
          ],
        },
        {
          title: 'MOQ, tiempo de entrega y certificación',
          body: [
            'MOQ, tiempo de entrega, aprobación de muestras y certificaciones son los detalles comerciales que deciden el programa. Están en la página de [fabricación OEM](/oem-manufacturing) y dependen de volumen, acabado y las certificaciones que su mercado requiera.',
          ],
        },
        {
          title: 'Marca privada vs OEM vs ODM',
          body: [
            'La marca privada usa una plataforma existente. El OEM construye según su dibujo. El ODM parte de un concepto. Para tornillos, la marca privada es la entrada más común porque el herramental ya existe. La [comparación completa](/knowledge/oem-bench-vise-manufacturing) explica dónde encaja cada vía.',
            'Sea cual sea la vía que elija, el [rango de productos](/knowledge/types-of-bench-vises-explained) muestra la amplitud de plataformas disponibles.',
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
      slug: 'bench-vise-size-guide',
      navLabel: "Guide des tailles d'étaux d'établi",
      metaTitle: "Guide des tailles d'étau d'établi : largeur, ouverture, gorge",
      metaDescription:
        "Comment fonctionnent les tailles d'étau d'établi : la largeur de mâchoires est le chiffre, l'ouverture et la gorge sont la portée. Fourchettes par classe et quoi mesurer avant d'acheter.",
      kicker: 'Connaissances',
      h1: "Guide des tailles d'étau d'établi",
      intro:
        "Un étau de \"6 pouces\" ne mesure pas 6 pouces partout — le chiffre est la largeur des mâchoires, et l'ouverture et la gorge sont des nombres à part qui décident de ce que l'étau peut réellement tenir. Ce guide explique comment lire les tailles.",
      sections: [
        {
          title: 'Comment un étau est dimensionné',
          body: [
            "Le chiffre qui donne son nom à un étau d'établi est la largeur des mâchoires — un \"étau d'établi de 6 pouces\" a des mâchoires d'environ 6 pouces de large. Tout le reste (ouverture, gorge, poids) est une spécification distincte.",
            "Comme la largeur est le chiffre principal, elle domine la première comparaison. Mais deux étaux de même largeur peuvent avoir des ouvertures et des gorges très différentes.",
          ],
        },
        {
          title: "L'échelle des classes et les tailles typiques",
          body: [
            "Les étaux d'établi se regroupent en classes légère, moyenne et lourde, chacune avec une fourchette de largeurs habituelle : légers de 2 à 5 pouces, moyens de 5 à 8 et lourds de 8 et plus. Un [étau léger de 4 pouces](/products/vise-light-4) convient au bricolage, l'[étau moyen de 6 pouces](/products/vise-medium-6) est la norme de l'atelier et un [étau lourd de 8 pouces](/products/vise-heavy-8) encaisse la fabrication.",
            "Des mâchoires plus grandes veulent dire plus de masse et plus de rigidité — mais aussi plus d'établi. Plus l'étau est lourd, plus le plateau doit être solide.",
          ],
        },
        {
          title: "L'ouverture : la mesure qui bloque vraiment",
          body: [
            "L'ouverture de mâchoires est le plus grand écart possible entre les mâchoires et c'est le chiffre qui importe vraiment quand on serre une pièce épaisse. Une ouverture généreuse avale les tubes, les pièces moulées et les assemblages qu'un étau trop petit ne peut tout simplement pas tenir. Le guide complet est dans [quelle ouverture de mâchoires vous faut-il](/knowledge/how-much-jaw-opening-do-you-need).",
          ],
        },
        {
          title: "La gorge : jusqu'où la pièce peut remonter",
          body: [
            "La gorge est la distance entre le bord supérieur des mâchoires et le corps — l'espace dans lequel une pièce se tient debout pendant qu'on travaille sa surface supérieure. Elle limite le limage, le sciage et le meulage sur faces verticales. Les détails sont dans [quelle gorge vous faut-il](/knowledge/how-much-throat-depth-do-you-need).",
          ],
        },
        {
          title: "Poids, fixation et établi",
          body: [
            "Un étau lourd peut peser 22-35 kg et transmet une charge réelle au plateau. Adaptez la taille et l'écartement des boulons au dessus et renforcez les plateaux minces. La qualité de la fixation décide si la [force de serrage](/engineering/clamping-force) arrive dans la pièce ou se perd dans une table qui fléchit.",
          ],
        },
        {
          title: "La taille n'est qu'une partie de la fiche",
          body: [
            "La taille indique la capacité, pas la longévité. Le [matériau du corps](/engineering/materials) et la construction des mâchoires décident de la durée de cette capacité à l'usage, et c'est pourquoi le processus complet commence par [comment choisir un étau d'établi](/knowledge/how-to-choose-a-bench-vise).",
            "Pour les programmes OEM ou en volume, l'[équipe de fabrication](/oem-manufacturing) peut dimensionner une ouverture et une gorge sur mesure pour votre application à partir d'une plateforme éprouvée.",
          ],
        },
      ],
    },
    {
      slug: '4-inch-vs-6-inch-bench-vise',
      navLabel: "Étau de 4 vs 6 pouces",
      metaTitle: "Étau d'établi de 4 vs 6 pouces : lequel choisir ?",
      metaDescription:
        "Étau d'établi de 4 vs 6 pouces : largeur de mâchoires, ouverture, force de serrage et le travail de chacun. Bricolage ou atelier général — lequel acheter.",
      kicker: 'Connaissances',
      h1: "Étau d'établi de 4 vs 6 pouces",
      intro:
        "Les étaux de 4 et 6 pouces sont les deux tailles d'atelier les plus courantes, et le bond entre eux est plus grand que la différence de largeur. Savoir ce que les pouces supplémentaires offrent indique celui dont votre établi a besoin.",
      sections: [
        {
          title: 'La vraie différence',
          body: [
            "Un étau de 4 pouces est un outil de classe légère : mâchoires plus petites, ouverture réduite et masse moindre, pensé pour le bricolage, l'électronique et les petites réparations. Un [étau moyen de 6 pouces](/products/vise-medium-6) monte d'une classe, avec des mâchoires plus larges, une plus grande ouverture et un corps plus lourd pour la métallurgie générale et l'auto.",
          ],
        },
        {
          title: "Largeur contre ce que vous pouvez tenir",
          body: [
            "Les deux pouces supplémentaires ajoutent de la surface, mais l'ouverture compte tout autant. Un léger de 4 pouces ouvre généralement de 2 à 3 pouces, un [étau léger de 4 pouces](/products/vise-light-4) tient les petites pièces, tandis qu'un 6 pouces ouvre bien plus et retient les pièces moulées, les tubes et les assemblages que le petit ne peut pas.",
          ],
        },
        {
          title: 'Force de serrage',
          body: [
            "La masse est de la force : le corps de 6 pouces fournit nettement plus de [force de serrage](/engineering/clamping-force) et de rigidité pour scier et limer sous charge. Si votre travail pousse fort contre les mâchoires, le 6 pouces gagne sans discussion.",
          ],
        },
        {
          title: 'Matériaux et construction',
          body: [
            "Les deux tailles se font en fonte grise avec mâchoires trempées, mais la classe 6 pouces reçoit plus de masse de corps et souvent une base pivotante de série. Les compromis des [matériaux du corps](/engineering/materials) s'appliquent aux deux.",
          ],
        },
        {
          title: "Lequel convient à votre travail",
          body: [
            "Choisissez le 4 pouces pour le travail petit, les budgets serrés et les plateaux légers ; choisissez le 6 pouces pour l'atelier général, l'automobile ou la métallurgie ou si vous comptez grandir avec lui. Le [processus de choix complet](/knowledge/how-to-choose-a-bench-vise) passe chaque facteur en revue.",
            "Vous approvisionnez une ligne de produits ? L'[équipe OEM](/oem-manufacturing) fabrique les deux tailles et peut régler mâchoires, ouverture et finition à votre spécification.",
          ],
        },
      ],
    },
    {
      slug: '6-inch-vs-8-inch-bench-vise',
      navLabel: "Étau de 6 vs 8 pouces",
      metaTitle: "Étau d'établi de 6 vs 8 pouces : quand passer à la taille au-dessus",
      metaDescription:
        "Étau d'établi de 6 vs 8 pouces : largeur, ouverture, force de serrage, poids et le travail lourd pour lequel la classe 8 est faite. Quand passer à la taille au-dessus.",
      kicker: 'Connaissances',
      h1: "Étau d'établi de 6 vs 8 pouces",
      intro:
        "Passer d'un étau de 6 à un étau de 8 pouces est un bond de masse, de portée et de prix. Cela vaut le coup exactement quand le travail touche sans cesse les limites du petit modèle.",
      sections: [
        {
          title: 'Ce qui monte de niveau',
          body: [
            "La classe 8 ajoute de la surface de mâchoires, de l'ouverture, de la gorge et — surtout — de la masse de corps. Un [étau moyen de 6 pouces](/products/vise-medium-6) couvre l'atelier général, tandis qu'un [étau lourd de 8 pouces](/products/vise-heavy-8) est fait pour la fabrication, les barres plus épaisses et le martelage constant.",
          ],
        },
        {
          title: "Ouverture et gorge suivent",
          body: [
            "Des mâchoires plus grandes vont avec une ouverture plus large et une gorge plus profonde, donc le 8 pouces prend les tubes, les sections épaisses et les assemblages hauts que le 6 ne peut pas. Si c'est courant dans votre atelier, la capacité est la raison de payer le supplément — voyez [quelle ouverture](/knowledge/how-much-jaw-opening-do-you-need) et [quelle gorge](/knowledge/how-much-throat-depth-do-you-need) il vous faut vraiment.",
          ],
        },
        {
          title: 'Force de serrage et rigidité',
          body: [
            "Le corps plus lourd fournit plus de [force de serrage](/engineering/clamping-force) et plie moins sous charge, ce qui compte pour limer et meuler du travail lourd où un étau léger balade sur l'établi.",
          ],
        },
        {
          title: "Le poids et le coût de l'établi",
          body: [
            "Un étau lourd de 8 pouces est une fixation sérieuse : comptez 27-35 kg de fonte boulonnée à un plateau renforcé. Budgetez le prix et le travail d'établi avant de monter de taille.",
          ],
        },
        {
          title: 'Le verdict',
          body: [
            "Choisissez le 6 pouces pour un atelier général et l'auto ; choisissez le 8 pouces pour la fabrication et la maintenance industrielle où le travail est vraiment lourd. La [bibliothèque de matériaux](/engineering/materials) explique pourquoi la classe lourde utilise les corps qu'elle utilise.",
            "Vous achetez en volume ? La voie [OEM](/oem-manufacturing) offre la plateforme 8 pouces avec mâchoires, base et marque sur mesure pour les programmes en marque de distributeur.",
          ],
        },
      ],
    },
    {
      slug: 'how-much-jaw-opening-do-you-need',
      navLabel: "Quelle ouverture de mâchoires vous faut-il ?",
      metaTitle: "Quelle ouverture de mâchoires faut-il ? | Guide d'ouverture",
      metaDescription:
        "L'ouverture de mâchoires est le plus grand écart qu'un étau d'établi peut serrer. Comment mesurer votre pièce la plus grande et choisir une fourchette par classe.",
      kicker: 'Connaissances',
      h1: "Quelle ouverture de mâchoires faut-il ?",
      intro:
        "L'ouverture de mâchoires est l'écart maximal entre les mâchoires — la pièce la plus grande que l'étau peut tenir physiquement. C'est la spécification qui surprend le plus les acheteurs, car elle est plus petite que ce que suggère la largeur.",
      sections: [
        {
          title: "Ouverture contre largeur de mâchoires",
          body: [
            "La largeur est l'espace latéral ; l'ouverture est l'écart vertical entre les mâchoires. Un étau de 6 pouces avec des mâchoires de 6 pouces de large peut n'ouvrir que de 4 à 6 pouces. Ceux qui veulent serrer une pièce moulée épaisse doivent acheter selon l'ouverture, pas selon le chiffre principal.",
            "La différence compte assez pour parcourir tout le [guide des tailles](/knowledge/bench-vise-size-guide).",
          ],
        },
        {
          title: 'Mesurez votre pièce la plus grande',
          body: [
            "D'abord, mesurez la chose la plus épaisse que vous allez serrer — une pièce moulée, un tronçon de tube, une pile de cornières. Cette dimension plus un petit jeu est votre ouverture minimale. Tout le reste de l'étau est secondaire face au fait de contenir votre pièce la plus grande.",
          ],
        },
        {
          title: 'Ouvertures typiques par classe',
          body: [
            "Les étaux légers ouvrent généralement de 2 à 3 pouces, les moyens de 4 à 6 et les lourds de 6 à 10. L'[étau moyen de 6 pouces](/products/vise-medium-6) ouvre assez pour la plupart des pièces d'atelier ; un [étau lourd de 8 pouces](/products/vise-heavy-8) avale les pièces montées et les tubes que la petite classe ne peut pas.",
          ],
        },
        {
          title: "Quand l'ouverture maximale est toute la partie",
          body: [
            "Les tubes, les pièces moulées, les gabarits et le travail partiellement assemblé exigent que les mâchoires couvrent le profil complet, pas seulement une tranche. Les applications qui le font constamment — fabrication, plomberie, maintenance — doivent peser l'ouverture plus que la largeur dans le [choix d'un étau d'établi](/knowledge/how-to-choose-a-bench-vise).",
          ],
        },
        {
          title: "Ouverture et force se passent la main",
          body: [
            "Une ouverture large est inutile sans la [force de serrage](/engineering/clamping-force) pour tenir la pièce, et les deux dépendent des [matériaux du corps](/engineering/materials) qui gardent le bâti rigide sous charge. Vérifiez les trois sur le même modèle, pas séparément.",
            "Si votre plus grande pièce impose une ouverture non standard, l'[équipe OEM](/oem-manufacturing) peut la spécifier pour votre programme.",
          ],
        },
      ],
    },
    {
      slug: 'how-much-throat-depth-do-you-need',
      navLabel: "Quelle gorge faut-il ?",
      metaTitle: "Quelle gorge faut-il ? | Guide de portée",
      metaDescription:
        "La gorge est la profondeur à laquelle une pièce peut se tenir dans un étau d'établi. Ce qu'elle mesure, pourquoi elle compte pour le travail vertical et les profondeurs typiques par classe.",
      kicker: 'Connaissances',
      h1: 'Quelle gorge faut-il ?',
      intro:
        "La gorge est la portée entre le bord supérieur des mâchoires et le corps — l'espace qu'une pièce a pour se tenir debout pendant que vous travaillez. Elle décide du confort pour limer, scier et meuler les faces verticales.",
      sections: [
        {
          title: 'Ce que mesure la gorge',
          body: [
            "Posez une plaque dans les mâchoires et elle se tient dans l'espace entre les faces et les barres du corps. Jusqu'où elle peut monter avant que le corps ne la bloque, c'est la gorge. Une gorge plus profonde veut dire un travail plus profond avant de devoir repositionner.",
            "La gorge travaille avec l'ouverture dans le [guide des tailles](/knowledge/bench-vise-size-guide) comme les deux vrais chiffres de portée.",
          ],
        },
        {
          title: 'Pourquoi la profondeur compte',
          body: [
            "Limer ou reprendre le dessus d'une pièce haute, scier une barre longue ou travailler l'extrémité d'une pièce moulée profonde dépendent de la hauteur à laquelle la pièce peut se dresser dans les mâchoires. Des gorges trop courtes forcent des re-serrages maladroits ou des acrobaties d'établi.",
            "Cela compte surtout pour les métallurgistes et les menuisiers qui reprennent des surfaces verticales en hauteur — le travail pour lequel un [étau lourd de 8 pouces](/products/vise-heavy-8) est fait.",
          ],
        },
        {
          title: 'Profondeurs typiques par classe',
          body: [
            "Les légers atteignent environ 5-6 cm, les moyens environ 7,5 et les lourds autour de 9-10 cm ou plus. Les différences sont des centimètres, mais pour les pièces hautes ces centimètres font la différence entre un montage et deux.",
          ],
        },
        {
          title: 'Gorge contre ouverture : lisez les deux',
          body: [
            "L'ouverture est l'épaisseur que l'étau peut tenir ; la gorge est la profondeur à laquelle une pièce peut se dresser. Un étau large et peu profond ne fera pas le travail d'un modèle à gorge profonde, donc équilibrez les deux face à votre travail — la même logique que pour [choisir l'ouverture](/knowledge/how-much-jaw-opening-do-you-need).",
          ],
        },
        {
          title: 'La portée, c\'est aussi la rigidité',
          body: [
            "Une gorge profonde n'aide que si le corps reste rigide quand on pousse sur la pièce. Cette rigidité vient de la masse et des [matériaux du corps](/engineering/materials), qui maintiennent la [force de serrage](/engineering/clamping-force) à pleine profondeur au lieu de fléchir.",
            "Besoin d'une gorge sur mesure pour un produit précis ? La voie [OEM](/oem-manufacturing) adapte une plateforme à votre géométrie.",
          ],
        },
      ],
    },
    {
      slug: 'how-much-clamping-force-do-you-need',
      navLabel: "Quelle force de serrage faut-il ?",
      metaTitle: "Quelle force de serrage faut-il ? | Guide de force",
      metaDescription:
        "La force de serrage est la vigueur avec laquelle un étau d'établi tient sous charge. Fourchettes par classe, pourquoi l'excès peut être un problème et comment vérifier les chiffres publiés.",
      kicker: 'Connaissances',
      h1: 'Quelle force de serrage faut-il ?',
      intro:
        "La force de serrage est la vigueur avec laquelle les mâchoires tiennent réellement la pièce sous charge. Elle décide si la pièce reste en place quand on pousse, et les fabricants sérieux la publient par modèle.",
      sections: [
        {
          title: 'Ce qu\'est la force de serrage',
          body: [
            "La force de serrage est la charge que les mâchoires fermées exercent sur une pièce, généralement mesurée en livres-force (lbf) sous couple contrôlé. C'est l'avantage mécanique de la [vis](/knowledge/how-does-a-bench-vise-work) transformé en prise réelle.",
            "Un fabricant qui publie un chiffre vous dit ce que l'étau peut tenir ; un fabricant qui imprime seulement \"solide\" ne le fait pas. La méthode de mesure est expliquée sur la page [force de serrage](/engineering/clamping-force).",
          ],
        },
        {
          title: 'Fourchettes typiques par classe',
          body: [
            "Les légers tournent autour de 1 200-1 500 lbf, les moyens de quelques milliers de lbf et les lourds jusqu'à 6 000-8 000 lbf. L'[étau moyen de 6 pouces](/products/vise-medium-6) tient le travail général d'atelier ; l'[étau lourd de 6 pouces](/products/vise-heavy-6) porte la force pour la fabrication et le martelage.",
          ],
        },
        {
          title: "Plus n'est pas toujours mieux",
          body: [
            "L'excès de force écrase les pièces délicates et déforme le travail à paroi mince. Adaptez la force au matériau : les pièces tendres ou finies exigent une prise contrôlée, le brut a besoin de tout ce que les mâchoires peuvent donner. Une partie de l'adaptation est le choix de la bonne surface de mâchoire, couvert par la logique de [conception des mâchoires](/engineering/jaw-design).",
          ],
        },
        {
          title: 'La force a besoin d\'un bâti solide',
          body: [
            "Une mâchoire qui serre ne vaut que ce que vaut le corps qui tient le serrage. Une force élevée exige un [matériau de corps](/engineering/materials) rigide, souvent plus lourd, et c'est pourquoi les chiffres de force sont inséparables du bâti.",
          ],
        },
        {
          title: 'Tout assembler',
          body: [
            "Estimez la poussée la plus dure que votre travail recevra, ajoutez une marge de sécurité, puis choisissez la classe qui la fournit confortablement. Faites passer toute la décision par [comment choisir un étau d'établi](/knowledge/how-to-choose-a-bench-vise) pour que force, largeur, ouverture et gorge s'alignent.",
            "Pour les programmes OEM, l'[équipe d'ingénierie](/oem-manufacturing) confirmera la force mesurée sur la plateforme et le jeu de mâchoires exacts que vous prévoyez d'expédier.",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-jaw-materials',
      navLabel: 'En quoi sont faites les mâchoires ?',
      metaTitle: "En quoi sont faites les mâchoires ? | Matériaux de mâchoires",
      metaDescription:
        "Matériaux de mâchoires remplaçables comparés : fonte grise, aciers à outils comme le GCr15 et le Cr12MoV, et quand choisir du trempé ou du doux.",
      kicker: 'Connaissances',
      h1: 'En quoi sont faites les mâchoires ?',
      intro:
        "Les mâchoires sont la seule partie d'un étau d'établi qui touche réellement votre pièce. Leur matériau décide de combien de temps elles tiennent sans s'user, si une pièce glisse ou se bloque, et combien d'abus elles encaissent avant d'avoir besoin d'être remplacées.",
      sections: [
        {
          title: 'Les mâchoires sont une pièce d\'usure',
          body: [
            "Les mâchoires sont des surfaces de travail remplaçables boulonnées sur le corps de fonderie. Les traiter comme une pièce d'usure plutôt que comme partie du bâti est la première étape — un [étau moyen de 6 pouces](/products/vise-medium-6) doit donner des années de serrage ferme avec ses mâchoires de série, mais le jeu est conçu pour être échangé quand il s'use enfin.",
            "Pour bâtir une image mentale de tout l'ensemble, l'[explicateur de pièces](/knowledge/bench-vise-parts-explained) parcourt chaque composant.",
          ],
        },
        {
          title: 'En quoi sont faites les mâchoires',
          body: [
            "Les étaux de qualité utilisent des insertions en acier à outils trempé : l'acier à roulements à haute teneur en carbone GCr15 et l'acier de travail à froid à haute teneur en chrome Cr12MoV sont les deux nuances courantes, traitées à 58-62 HRC. Ce sont les mêmes familles que les outils de coupe, et elles gardent une face striée qui mord la pièce pendant des années.",
            "Le mauvais matériau — acier doux ou fonte tendre — se frotte, perce et s'étire sous la pression au lieu de tenir.",
          ],
        },
        {
          title: 'Faces trempées, prise striée',
          body: [
            "Les insertions trempées portent le motif entrecroisé qui mord la pièce. La géométrie de cette surface de prise est couverte par la [conception des mâchoires](/engineering/jaw-design) ; le traitement thermique qui atteint cette dureté est couvert par le [traitement thermique](/engineering/heat-treatment).",
          ],
        },
        {
          title: 'Mâchoires dures contre mâchoires tendres',
          body: [
            "Les mâchoires dures tiennent et s'usent bien sur le brut. Pour le travail fini ou délicat, remplacez le jeu par des mâchoires tendres, lisses ou à dos cuivré qui protègent la surface. Le [matériau du corps](/engineering/materials) derrière compte aussi — un bâti rigide transforme une mâchoire dure en prise ferme au lieu d'une prise qui balance.",
          ],
        },
        {
          title: 'Spécifier les mâchoires pour votre programme',
          body: [
            "La nuance, la dureté, le motif et les dimensions des mâchoires sont tous sélectionnables quand on construit une gamme. La voie de [fabrication OEM](/oem-manufacturing) permet de choisir le jeu adapté à votre marché sans redessiner le corps.",
          ],
        },
      ],
    },
    {
      slug: 'why-are-bench-vise-jaws-hardened',
      navLabel: 'Pourquoi durcit-on les mâchoires ?',
      metaTitle: 'Pourquoi durcit-on les mâchoires ? | Dureté expliquée',
      metaDescription:
        "Les mâchoires trempées résistent à l'usure, à l'incrustation et au frotissement, et gardent leur prise sous la force de serrage. Ce que fait la dureté et quand on veut l'inverse.",
      kicker: 'Connaissances',
      h1: 'Pourquoi durcit-on les mâchoires ?',
      intro:
        "Une mâchoire d'étau est durcie pour une raison : continuer à travailler après des années de pression. Le métal tendre cède sous la charge, et une mâchoire qui cède cesse de tenir droit, silencieusement et en sécurité.",
      sections: [
        {
          title: 'Le prix des mâchoires tendres',
          body: [
            "Une mâchoire non trempée se bosselle, perce et incruste les particules de la pièce dans sa face. La prise se dégrade, les saletés s'écrasent dans la surface, et un angle dur marque la pièce suivante. Le durcissement arrête ce cycle.",
          ],
        },
        {
          title: 'La dureté, c\'est la résistance à l\'usure',
          body: [
            "La dureté se mesure sur l'échelle Rockwell, et les mâchoires conçues pour tenir sont trempées à 58-62 HRC. À ce niveau, la face résiste à l'indentation de la [force de serrage](/engineering/clamping-force) et reste plane sous l'usage répété. C'est la spécification des mâchoires de l'[étau lourd de 6 pouces](/products/vise-heavy-6) et du reste de la série lourde. Le chiffre est décodé ici : [ce que signifie 60 HRC](/knowledge/what-does-60-hrc-mean).",
          ],
        },
        {
          title: 'La face striée',
          body: [
            "La dureté seule ne suffit pas — la face est usinée ou frappée d'un motif entrecroisé qui mord la pièce. Ce motif, plus la dureté qui garde ses arêtes vives, est toute l'histoire de la [conception des mâchoires](/engineering/jaw-design).",
          ],
        },
        {
          title: 'Dur mais pas cassant',
          body: [
            "Le durcissement est un équilibre : trop tendre s'use, trop dur éclate. Le revenu ramène la dureté depuis l'extrême pour que l'insertion encaisse le martelage sans casser. La page [traitement thermique](/engineering/heat-treatment) explique comment l'équilibre est atteint.",
          ],
        },
        {
          title: 'Quand on veut le contraire',
          body: [
            "Les mâchoires dures sont fausses pour les surfaces finies et les pièces délicates. C'est pourquoi des jeux tendres, lisses ou plaqués cuivre existent — échangez-les et le jeu trempé reste au tiroir. Tout ce qui est dans la [bibliothèque de matériaux](/engineering/materials) s'applique aux choix qui les entourent.",
            "Vous choisissez la dureté de mâchoires pour une gamme ? Les [outils OEM](/oem-manufacturing) offrent plusieurs nuances et traitements par modèle.",
          ],
        },
      ],
    },
    {
      slug: 'what-does-60-hrc-mean',
      navLabel: 'Que signifie 60 HRC ?',
      metaTitle: 'Que signifie 60 HRC ? | Nombre de dureté expliqué',
      metaDescription:
        "L'échelle Rockwell C décodée : ce qu'est un nombre HRC, ce que 60 HRC signifie pour une mâchoire d'étau et comment lire la dureté sur une fiche.",
      kicker: 'Connaissances',
      h1: 'Que signifie 60 HRC ?',
      intro:
        "HRC est le raccourci de dureté sur presque toutes les fiches d'étau de qualité. 60 HRC signifie un niveau de dureté précis et testable — et pour une mâchoire, c'est la différence entre \"mord pendant des années\" et \"s'use en une saison\".",
      sections: [
        {
          title: "L'échelle Rockwell C",
          body: [
            "Le test Rockwell C presse un cône de diamant dans la surface sous une charge fixe et mesure la profondeur de pénétration. Un nombre plus grand signifie une indentation plus faible — un matériau plus dur. L'échelle sert pour les aciers trempés, des couteaux aux mâchoires.",
          ],
        },
        {
          title: 'Ce que 60 HRC donne en pratique',
          body: [
            "À 60 HRC, une lime en acier à outils trempé glisse sur la surface sans couper. C'est le territoire de l'acier à outils, la même classe de dureté que les bons outils de coupe, et elle résiste aux bosses et aux bavures qui ruinent les faces plus tendres.",
          ],
        },
        {
          title: "La fourchette typique des mâchoires",
          body: [
            "Les mâchoires de qualité sont traitées à 58-62 HRC — 60 est au centre. Cette fourchette est délibérée : assez dure pour tenir des années, assez revenue pour ne pas éclater sous le martelage. Comment le traitement est appliqué est couvert par le [traitement thermique](/engineering/heat-treatment).",
            "En pratique, voilà pourquoi une bonne mâchoire s'use lentement même à pleine [force de serrage](/engineering/clamping-force) : les marques vont sur la pièce, pas sur la mâchoire. C'est la même nuance d'insertion que l'on trouve dans l'[étau lourd de 8 pouces](/products/vise-heavy-8) et dans toute la série lourde.",
          ],
        },
        {
          title: 'Dureté contre ténacité',
          body: [
            "Le HRC mesure un seul axe. Une pièce peut être extrêmement dure et pourtant cassante, c'est pourquoi le revenu ramène légèrement la dureté pour acheter de la ténacité. Ce compromis est la raison d'être des [mâchoires d'étau trempées](/knowledge/why-are-bench-vise-jaws-hardened). Lire 60 HRC sur une fiche, c'est le lire avec la nuance d'acier — l'article sur les [matériaux du corps](/engineering/materials) montre la même logique pour les bâtis.",
          ],
        },
        {
          title: 'Lire la fiche technique',
          body: [
            "Quand une fiche dit \"mâchoires trempées à 58-62 HRC\", elle dit que les insertions sont dans la classe des aciers à outils et garderont leur prise sous charge. Un étau qui omet totalement la dureté vous dit aussi quelque chose.",
            "Besoin que le traitement et la nuance soient documentés pour votre produit ? La voie [OEM](/oem-manufacturing) peut certifier la dureté qui part sous votre marque.",
          ],
        },
      ],
    },
    {
      slug: 'fixed-vs-swivel-base-bench-vise',
      navLabel: 'Étau à base fixe vs. pivotante',
      metaTitle: "Base fixe vs. pivotante sur étau d'établi : lequel choisir ?",
      metaDescription:
        "Base fixe ou pivotante sur un étau d'établi : rigidité, angles de travail et quand la possibilité de tourner l'étau vaut le compromis.",
      kicker: 'Connaissances',
      h1: "Étau d'établi à base fixe vs. pivotante",
      intro:
        "La base est l'articulation entre l'étau et l'établi. Fixe ou pivotante change si l'on peut tourner la pièce ou si l'on doit la rejoindre — et la fermeté de l'ensemble sous charge.",
      sections: [
        {
          title: 'Ce que fait la base',
          body: [
            "La base boulonne l'étau à l'établi et porte toutes les charges que l'on met dans les mâchoires. Son conception est l'un des premiers points à comparer, aux côtés des mâchoires et de la [construction du corps](/knowledge/bench-vise-parts-explained).",
          ],
        },
        {
          title: 'Base fixe : rien ne bouge',
          body: [
            "Une base fixe est une seule fonte boulonnée directement à l'établi. Il n'y a pas de joint pivotant pour se desserrer ou se déplacer, ce qui donne le contact le plus direct et le plus solide — et elle coûte généralement moins cher. Pour un travail où les mâchoires pointent toujours dans la même direction, c'est le choix le plus robuste.",
          ],
        },
        {
          title: 'Base pivotante : tournez vers la pièce',
          body: [
            "Une base pivotante ajoute une plaque de blocage : desserrez deux boulons, tournez l'étau à l'angle voulu et bloquez. Au lieu de contourner une pièce longue, faites pivoter l'[étau moyen de 6 pouces](/products/vise-medium-6) pour l'atteindre. Standard sur la plupart des étaux d'atelier.",
          ],
        },
        {
          title: 'Quand la pivotante vaut la peine',
          body: [
            "Pièces longues ou encombrantes, réparation automobile et tout travail qui nécessite plusieurs angles favorisent la pivotante. La capacité de repositionner sans desserrer économise du temps sur chaque pièce. Le [modèle lourd de 6 pouces](/products/vise-heavy-6) apporte la masse pour maintenir ces angles rigides.",
          ],
        },
        {
          title: "La rigidité, c'est tout le compromis",
          body: [
            "Un joint pivotant n'est aussi bon que son blocage : un blocage faible fléchit et vole de la [force de serrage](/engineering/clamping-force) à la pièce. C'est pourquoi la masse de la base et le [matériau du corps](/engineering/materials) comptent plus, pas moins, sur un modèle pivotant — le joint doit être aussi solide qu'une base fixe.",
          ],
        },
        {
          title: 'Arriver à la décision',
          body: [
            "Choisissez la fixe pour la rigidité maximale et la simplicité ; choisissez la pivotante pour la polyvalence. Le [guide de choix](/knowledge/how-to-choose-a-bench-vise) équilibre la base face aux mâchoires, à l'ouverture et à la classe. Un [modèle spécialiste pivotant](/products/vise-specialty-swivel) couvre les travaux centrés sur la rotation.",
            "Pour les gammes OEM, l'[équipe de fabrication](/oem-manufacturing) fournit les deux bases sur la même plateforme.",
          ],
        },
      ],
    },
    {
      slug: 'quick-release-bench-vise-mechanism',
      navLabel: "Mécanisme de libération rapide",
      metaTitle: "Mécanisme de libération rapide d'étau d'établi : fonctionnement",
      metaDescription:
        "Comment une étau à libération rapide désengage la vis pour glisser les mâchoires librement, les compromis par rapport à la vis standard et quand la choisir.",
      kicker: 'Connaissances',
      h1: "Mécanisme de libération rapide d'étau d'établi",
      intro:
        "Une vis conventionnelle ouvre et ferme en tournant la manivelle sur toute la file. Un mécanisme de libération rapide permet de déplacer les mâchoires librement en un instant, puis de raccrocher pour serrer — utile quand les pièces changent constamment de taille.",
      sections: [
        {
          title: 'La vis standard',
          body: [
            "Sur un étau classique la manivelle entraîne une vis filetée type Acme qui pousse les mâchoires. C'est simple, fort et auto-bloquant, mais passer d'une pièce mince à une épaisse demande beaucoup de tours. Le mécanisme est décrit dans [comment fonctionne un étau d'établi](/knowledge/how-does-a-bench-vise-work).",
          ],
        },
        {
          title: "Ce qu'ajoute la libération rapide",
          body: [
            "Un système de libération rapide ajoute un écrou fendu ou désenclenchable autour de la vis. Tirez sur un levier et l'écrou libère le filetage pour que les mâchoires glissent à la main ; relâchez le levier et il raccroche pour serrer normalement. L'[explicateur de pièces](/knowledge/bench-vise-parts-explained) montre où se situe l'écrou.",
          ],
        },
        {
          title: 'Comment ça marche',
          body: [
            "Un levier sous le corps déplace un demi-écrou hors de la vis. Avec le filetage désengagé, les mâchoires voyagent librement ; en relâchant le levier, un ressort remet le demi-écrou en place et tourner la manivelle fonctionne comme d'habitude. Un mouvement, plus besoin de tourner la manivelle.",
          ],
        },
        {
          title: 'Les compromis',
          body: [
            "La libération rapide ajoute une pièce mobile dans le chemin de charge. C'est plus de mécanisme à nettoyer et à lubrifier, et sur un étau très chargé il doit être bien construit pour maintenir la [force de serrage](/engineering/clamping-force) nominale. Le demi-écrou et la vis sont des surfaces d'usure — voir les mêmes principes dans les [matériaux de mâchoires](/knowledge/bench-vise-jaw-materials).",
          ],
        },
        {
          title: 'En avez-vous besoin ?',
          body: [
            "Si vous changez constamment entre tailles très différentes, la libération rapide gagne sa place. Si vous serrez le même brut pendant de longues durées, la vis standard est plus simple et tout aussi forte. La décision se place aux côtés de la classe dans le [guide de choix](/knowledge/how-to-choose-a-bench-vise).",
            "La plupart des modèles de catalogue utilisent une vis standard ; la variante à libération rapide est généralement une décision OEM. L'[équipe de production](/oem-manufacturing) peut adapter une plateforme avec le mécanisme et la finition dont vous avez besoin.",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-pipe-jaws',
      navLabel: "Conception des mâchoires à tube",
      metaTitle: "Conception des mâchoires à tube : fonctionnement",
      metaDescription:
        "Les mâchoires à tube ajoutent un rainurage en V sous les mâchoires plates pour tenir le rond sans l'écraser. Comment le fonctionne et quand choisir un étau à tube.",
      kicker: 'Connaissances',
      h1: 'Conception des mâchoires à tube',
      intro:
        "Le rond est la pièce la plus difficile à tenir dans des mâchoires plates — il roule. Les mâchoires à tube sont la solution : une deuxième surface de prise en V qui centre et mord un tube pour qu'il ne tourne pas.",
      sections: [
        {
          title: 'Deux jeux de mâchoires',
          body: [
            "Beaucoup d'étaux d'établi portent deux surfaces de prise : les mâchoires plates principales pour le travail général et un jeu de mâchoires à tube encastré dessous ou derrière. L'[explicateur de pièces](/knowledge/bench-vise-parts-explained) les situe toutes les deux sur le corps.",
          ],
        },
        {
          title: 'Le principe de la rainure en V',
          body: [
            "Les mâchoires à tube sont usinées en V. Posez une barre ronde ou un tube dans la V et il se centre tout seul — les deux faces angulaires maintiennent le tube sur son axe au lieu de le laisser rouler. L'angle et le motif de dents suivent les mêmes règles de [conception des mâchoires](/engineering/jaw-design) que les plates, adaptées pour un contact courbe.",
          ],
        },
        {
          title: 'Où elles se situent',
          body: [
            "Sur un étau combiné, les mâchoires à tube se trouvent dans la gorge sous les mâchoires plates, pour passer d'une pièce plate à un tube sans changer d'outil. Sur un étau dédié à tube, tout l'outil est construit autour de la V et du tube, avec une capacité dimensionnée aux diamètres de tube.",
          ],
        },
        {
          title: "Étau à tube vs étau avec mâchoires à tube",
          body: [
            "Un [étau à tube de 4 pouces](/products/vise-pipe-4) ou [de 6 pouces](/products/vise-pipe-6) tient et tourne le tube pour le filetage et le sciage, souvent avec un support. Un [étau moyen de 6 pouces](/products/vise-medium-6) avec mâchoires à tube couvre le travail occasionnel de tube aux côtés des travaux normaux. Adaptez l'outil à la fréquence à laquelle la tube apparaît.",
          ],
        },
        {
          title: 'Prise, force et sécurité',
          body: [
            "Une pièce ronde veut tourner sous la manivelle, donc les mâchoires à tube ont besoin d'une V ferme et de suffisamment de [force de serrage](/engineering/clamping-force) pour arrêter la rotation — à travers un [corps](/engineering/materials) rigide. Un tube qui lâche sous une scie est un problème de sécurité.",
            "Dimensionner la capacité des mâchoires à tube pour une gamme est une décision de [spécification OEM](/oem-manufacturing) sur la même plateforme.",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-replaceable-jaws',
      navLabel: "Mâchoires remplaçables",
      metaTitle: "Conception de mâchoires remplaçables : entretien",
      metaDescription:
        "Comment les mâchoires remplaçables sont fixées, pourquoi elles sont meilleures que les fixes et quoi vérifier lors de la commande.",
      kicker: 'Connaissances',
      h1: 'Conception de mâchoires remplaçables',
      intro:
        "Les mâchoires prennent chaque rayure, marque et impact que l'étau ait jamais vu. Les concevoir comme remplaçables — plutôt que moulées dans le corps — est ce qui permet à un bon étau de survivre à son premier jeu de dents.",
      sections: [
        {
          title: 'Les mâchoires sont une pièce d\'usure',
          body: [
            "Les faces de prise sont les surfaces les plus sollicitées de l'outil. Les traiter comme remplaçables est la différence entre renouveler un étau et le remplacer. L'histoire du matériau derrière ces insertions est dans les [matériaux de mâchoires](/knowledge/bench-vise-jaw-materials).",
          ],
        },
        {
          title: 'Comment elles sont fixées',
          body: [
            "Les mâchoires remplaçables sont des insertions séparées posées sur des planus usinés et fixées par des vis hexagonales à tête plongée, parfois localisées par des goupilles pour qu'elles ne glissent pas. Désserrez les vis et le jeu se lève — ni usinage ni soudure.",
          ],
        },
        {
          title: 'Pourquoi elles sont meilleures que les fixes',
          body: [
            "Un jeu remplaçable peut être renouvelé quand les dents s'usent, mis à niveau avec des mâchoires tendres ou plaquées cuivre pour le travail fini, ou échangé pour un usage particulier. Cette maintenabilité est un choix de [conception des mâchoires](/engineering/jaw-design) et le traitement thermique qui garde la prise est couvert par le [traitement thermique](/engineering/heat-treatment).",
          ],
        },
        {
          title: 'Acheter et monter les pièces',
          body: [
            "Vérifiez le modèle, la largeur, l'espacement des vis et la dureté à la commande. Les surfaces d'appui étant usinées au [corps](/engineering/materials), les pièces d'origine s'emboîtent planes et parallèles. Gardez les vis propres et légèrement huilées — c'est aussi de l'[entretien](/knowledge/bench-vise-maintenance).",
          ],
        },
        {
          title: 'Concevoir pour le service',
          body: [
            "Concevoir pour le service est un atout, pas un coût : le client reste avec une marque qui maintient les pièces de rechange disponibles. L'[équipe OEM](/oem-manufacturing) construit des plateformes avec mâchoires remplaçables et fournit des jeux de rechange sous votre marque.",
          ],
        },
      ],
    },
    {
      slug: 'bench-vise-anvil-surface',
      navLabel: "Surface d'enclume",
      metaTitle: "Surface d'enclume d'étau d'établi : à quoi ça sert",
      metaDescription:
        "La surface d'enclume sur un étau d'établi : à quoi sert la surface usinée, enclume fixe vs mobile et ses limites sur un corps en fonte.",
      kicker: 'Connaissances',
      h1: "Surface d'enclume d'étau d'établi",
      intro:
        "Beaucoup d'étaux d'établi se terminent par une surface plane usinée à l'arrière du corps — la surface d'enclume. Elle transforme l'étau en une petite station de frappe et de formage, dans les limites du corps.",
      sections: [
        {
          title: "L'enclume sur le corps",
          body: [
            "La surface d'enclume est une zone plane rodée, généralement à l'arrière des mâchoires, sur le dessus du corps. C'est l'une des caractéristiques énumérées dans l'[explicateur de pièces](/knowledge/bench-vise-parts-explained), et elle ne coûte rien à inclure sur une bonne fonte.",
          ],
        },
        {
          title: "À quoi ça sert",
          body: [
            "C'est un endroit pour des frappes légères et du formage : enfoncer un goupille, aplatir une bande, peiner un rivet, redresser une bande mince. Cela évite un déplacement vers l'enclume de l'atelier pour les petits travaux.",
          ],
        },
        {
          title: "Enclume fixe vs plaque mobile",
          body: [
            "Certains étaux légers montrent une plaque d'enclume séparée — soit fixe, soit mobile avec les mâchoires. Une plaque mobile suit les mâchoires pour garder la zone de frappe accessible. Les [étaux spécialistes à enclume](/products/vise-specialty-anvil) intègrent la fonction dès le départ.",
          ],
        },
        {
          title: 'Ses vraies limites',
          body: [
            "L'enclume d'un étau d'établi est un confort, pas une enclume de forgeron. Les corps sont en fonte grise, rigide mais cassante — un coup violent peut fendre la pièce. Utilisez-la pour des taps contrôlés et du formage léger. L'article sur les [matériaux du corps](/engineering/materials) explique pourquoi la fonte se comporte ainsi.",
          ],
        },
        {
          title: 'Spécifier la fonction',
          body: [
            "Que la surface soit lisse, à étages ou une plaque séparée est une décision de [conception](/engineering/heat-treatment) et d'outillage. Pour une gamme, l'[équipe OEM](/oem-manufacturing) peut ajouter ou sculpter la surface d'enclume selon votre marché.",
          ],
        },
      ],
    },
    {
      slug: 'automotive-repair-bench-vise',
      navLabel: "Étau d'établi pour réparation automobile",
      metaTitle: "Étau d'établi pour réparation automobile : maintenance en garage",
      metaDescription:
        "Pourquoi un étau d'établi est le standard de maintien en garage — pièces de frein, supports, durites et la classe d'étau pour la réparation générale.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour réparation automobile",
      intro:
        "Un étau d'établi est la station de maintien permanente dans la plupart des ateliers de réparation et garages. Il tient ce que vos mains ne peuvent pas — composants de frein, supports, durites et pièces fabriquées — pendant que vous sciez, percez, meulez et assemblez.",
      sections: [
        {
          title: 'Le cheval de bataille du garage',
          body: [
            "Un [étau moyen de 6 pouces](/products/vise-medium-6) est la spécification classique de garage : assez large pour la plupart des pièces de frein, une ouverture qui avale les supports et un corps assez lourd pour encaisser les coups. C'est l'outil qui apparaît en premier dans l'atelier et ne se range jamais.",
            "Le même outil est couvert dans le guide des [applications d'atelier](/knowledge/what-is-a-bench-vise-used-for).",
          ],
        },
        {
          title: 'Ce qu\'il tient',
          body: [
            "Plaquettes, supports, sections de châssis, durites, raccords, ressorts — presque tout ce qui est serré dans un garage passe par les mâchoires. Un [étau lourd de 6 pouces](/products/vise-heavy-6) prend les pièces les plus épaisses et fournit la [force de serrage](/engineering/clamping-force) nécessaire pour résister au marteau.",
          ],
        },
        {
          title: 'Pourquoi un étau bat un serre-joint',
          body: [
            "Une pièce automobile est tridimensionnelle et s'étend dans toutes les directions. Un étau la tient une fois, dans n'importe quelle orientation, sans bouger. Des [mâchoires remplaçables](/knowledge/bench-vise-replaceable-jaws) protègent les surfaces finies tout en tenant assez pour arrêter la rotation.",
          ],
        },
        {
          title: 'Choisir la bonne classe',
          body: [
            "Les étaux légers couvrent les petites pièces et les budgets serrés ; les moyens couvrent la réparation générale ; les lourds gèrent le châssis et les pièces moulées plus épaisses. Le [guide des tailles](/knowledge/bench-vise-size-guide) parcourt les dimensions et le [guide de choix](/knowledge/how-to-choose-a-bench-vise) ajuste la classe au travail.",
          ],
        },
        {
          title: 'Le faire durer dans un garage',
          body: [
            "La crasse automobile est abrasive. Un peu d'[entretien](/knowledge/bench-vise-maintenance) — nettoyer la vis, huiler le glissement — empêche l'usure prématurée du mécanisme. Le [matériau du corps](/engineering/materials) et la [dureté des mâchoires](/knowledge/what-does-60-hrc-mean) décident de la durée de vie sous usage constant.",
            "Pour les gammes OEM garage, l'[équipe de production](/oem-manufacturing) fournit le corps, la base et la finition dont votre marché a besoin.",
          ],
        },
      ],
    },
    {
      slug: 'metalworking-bench-vise',
      navLabel: "Étau d'établi pour métallurgie",
      metaTitle: "Étau d'établi pour métallurgie : limage, sciage et maintien",
      metaDescription:
        "Comment un étau d'établi supporte la métallurgie — limage, sciage, perçage et meulage. Pourquoi la rigidité, la dureté et le montage décident de la qualité de la coupe.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour métallurgie",
      intro:
        "La métallurgie est l'endroit où un étau d'établi gagne sa réputation. Un étau qui reste solide sous la lime, tient la scie droite et prend le meuleur sans bouger — c'est la différence entre une finition nette et un bords abîmé.",
      sections: [
        {
          title: 'La base du métal',
          body: [
            "Percer, tarauder, limer et scier nécessitent tous une pièce qui ne bouge pas. Un [étau lourd de 6 pouces](/products/vise-heavy-6) boulonné à un plateau solide est le moyen le plus simple de créer ce maintien mort pour le métal. Les applications sont couvertes dans [à quoi sert un étau](/knowledge/what-is-a-bench-vise-used-for).",
          ],
        },
        {
          title: 'La rigidité, c\'est le contrôle qualité',
          body: [
            "Un étau qui fléchit sort la pièce de l'équerre et gâche la coupe. La quantité de [force de serrage](/engineering/clamping-force) que le bâti délivre et la qualité du montage sur l'établi décident si c'est l'étau ou la lime qui bouge.",
            "Voilà pourquoi les étaux plus lourds ont plus de masse — le [matériau du corps](/engineering/materials) est la source de rigidité.",
          ],
        },
        {
          title: 'Mâchoires qui mordent et mâchoires qui protègent',
          body: [
            "Des mâchoires trempées et striées tiennent le brut fermement. Pour les pièces finies ou polies, échangez contre des [mâchoires tendres remplaçables](/knowledge/bench-vise-replaceable-jaws). La dureté et le motif sont couverts dans la [conception des mâchoires](/engineering/jaw-design) et [que signifie 60 HRC](/knowledge/what-does-60-hrc-mean).",
          ],
        },
        {
          title: 'Scier et limer',
          body: [
            "Une gorge assez profonde pour dégager la lame de scie importe lors du sciage de sections longues — le [guide de gorge](/knowledge/how-much-throat-depth-do-you-need) montre quoi mesurer. Limer le dessus d'une pièce serrée exige un étau qui ne balance pas, ce qui ramène à la masse et au [montage](/knowledge/bench-vise-maintenance).",
          ],
        },
        {
          title: 'Spécification pour le métier',
          body: [
            "La métallurgie est un métier large. Le [guide de choix](/knowledge/how-to-choose-a-bench-vise) équilibre largeur, ouverture et gorge contre les types de métal travaillés. Pour les gammes OEM, l'[équipe de fabrication](/oem-manufacturing) peut spécifier la plateforme exacte.",
          ],
        },
      ],
    },
    {
      slug: 'welding-prep-bench-vise',
      navLabel: "Étau d'établi pour préparation de soudure",
      metaTitle: "Étau pour préparation de soudure : avant l'arc",
      metaDescription:
        "Comment un étau d'établi supporte la préparation de soudure — ajustage, points de soudure, meulage et nettoyage. Quel matériau de corps et quelle base choisir.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour préparation de soudure",
      intro:
        "Un étau d'établi ne remplace pas les pinces à souder, mais c'est là que l'ajustage, le pointage, le meulage et la préparation des bords se font avant que l'arc ne s'allume.",
      sections: [
        {
          title: 'L\'étau avant l\'arc',
          body: [
            "L'ajustage, le pointage, le meulage de la racine et le nettoyage des projections se font avant que le chalumeau ne s'allume. Un [étau lourd de 8 pouces](/products/vise-heavy-8) est assez grand pour la plupart des assemblages soudés et assez lourd pour absorber les coups de marteau.",
            "Le rôle large de l'étau dans la métallurgie est couvert dans [à quoi sert un étau d'établi](/knowledge/what-is-a-bench-vise-used-for).",
          ],
        },
        {
          title: 'Chaleur et matériau du corps',
          body: [
            "Les projections et la chaleur de soudure atteignent parfois le corps. La fonte grise tient sans problème ; l'acier forgé absorbe mieux les impacts si le martelage est fréquent. La comparaison est dans [fonte vs. acier forgé](/knowledge/cast-iron-vs-steel-vises) et la bibliothèque des [matériaux du corps](/engineering/materials).",
          ],
        },
        {
          title: 'Tenir les sections rondes et structurelles',
          body: [
            "Les soudures impliquent souvent des tubes, des barres rondes et des sections structurelles. Un étau avec [mâchoires à tube](/knowledge/bench-vise-pipe-jaws) centre la pièce ; une [base pivotante](/knowledge/fixed-vs-swivel-base-bench-vise) permet de l'incliner sans desserrer.",
          ],
        },
        {
          title: 'Ce que ça fait à l\'étau',
          body: [
            "La préparation de soudure est abrasive : poussière de meulage, projections et coups répétés usent les mâchoires. Des [mâchoires remplaçables](/knowledge/bench-vise-replaceable-jaws) et un peu d'[entretien](/knowledge/bench-vise-maintenance) gardent l'étau fonctionnel. Les [matériaux de mâchoires](/knowledge/bench-vise-jaw-materials) expliquent pourquoi les trempées durent plus.",
          ],
        },
        {
          title: 'Choisir pour le travail de soudure',
          body: [
            "Le travail de soudure récompense la masse et la rigidité. Le [guide de choix](/knowledge/how-to-choose-a-bench-vise) parcourt les compromis ; pour une gamme, l'[équipe OEM](/oem-manufacturing) fournit la plateforme lourde avec la finition dont votre marché a besoin.",
          ],
        },
      ],
    },
    {
      slug: 'garage-workshop-bench-vise',
      navLabel: "Étau d'établi pour garage et atelier",
      metaTitle: "Étau d'établi pour garage et atelier : le tout-en-un",
      metaDescription:
        "Pourquoi tout garage et atelier a besoin d'un étau d'établi, quelle taille couvre le plus de travaux et comment le monter et l'entretenir.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour garage et atelier",
      intro:
        "Un étau de garage est le seul outil qui ne se range jamais. Il tient le tube pour le filetage, le bois pour le perçage, le métal pour le limage et une douzaine de travaux que vous n'aviez pas prévus quand vous avez installé l'établi.",
      sections: [
        {
          title: 'Pourquoi tout atelier en a besoin',
          body: [
            "Un étau d'établi est le seul maintien qui transforme l'établi en poste de travail. Un [étau moyen de 6 pouces](/products/vise-medium-6) couvre la plupart des travaux sans dominer l'établi — et c'est l'outil le plus recommandé comme premier achat.",
            "L'éventail de travaux est listé dans [à quoi sert un étau](/knowledge/what-is-a-bench-vise-used-for).",
          ],
        },
        {
          title: 'La taille pour le plus de travaux',
          body: [
            "Un étau moyen de 6 pouces prend la majorité de ce que voit un atelier — petites pièces, tubes, tôle et fabrication légère. Un [étau léger de 4 pouces](/products/vise-light-4) gère le bricolage. Le [guide des tailles](/knowledge/bench-vise-size-guide) détaille les dimensions.",
          ],
        },
        {
          title: 'Base et positionnement',
          body: [
            "Fixe ou pivotante ? Pour un garage avec du travail varié, une [base pivotante](/knowledge/fixed-vs-swivel-base-bench-vise) se rentabilise toute seule. Montez-la là où la lumière est meilleure et l'établi le plus épais, avec des boulons qui correspondent aux trous de la base.",
          ],
        },
        {
          title: 'Le garder en marche',
          body: [
            "Le garage est poussiéreux et la poussière est abrasive. Un peu d'[entretien](/knowledge/bench-vise-maintenance) — nettoyer la vis, essuyer le glissement — empêche l'usure anticipée. Les [mâchoires trempées](/knowledge/what-does-60-hrc-mean) et les [jeux remplaçables](/knowledge/bench-vise-replaceable-jaws) complètent le tableau.",
          ],
        },
        {
          title: 'Acheter pour votre marché',
          body: [
            "Les garages sont un marché mondial. Le [guide de choix](/knowledge/how-to-choose-a-bench-vise) aide l'utilisateur final ; la voie [OEM](/oem-manufacturing) aide les marques à construire une gamme garage.",
          ],
        },
      ],
    },
    {
      slug: 'schools-training-bench-vise',
      navLabel: "Étau d'établi pour écoles et formation",
      metaTitle: "Étau d'établi pour écoles : maintien sûr pour étudiants",
      metaDescription:
        "Comment un étau d'établi est utilisé dans les écoles et la formation — l'outil qui enseigne le maintien en toute sécurité, quelle taille acheter et comment entretenir un jeu de classe.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour écoles et formation",
      intro:
        "Dans un atelier scolaire, l'étau enseigne le maintien lui-même. Il apprend aux étudiants à serrer, à positionner et à rester en sécurité — et il doit le faire cent fois par jour, année après année.",
      sections: [
        {
          title: 'L\'étau qui enseigne',
          body: [
            "Un étau d'établi est souvent le premier outil qu'un étudiant utilise seul. Il introduit la discipline du serrage correct, et un [étau léger de 4 pouces](/products/vise-light-4) ou un [modèle moyen de 5 pouces](/products/vise-medium-5) convient à la hauteur de classe, à la force des étudiants et à l'échelle des projets.",
            "Les mêmes modèles sont couverts dans le [guide des tailles](/knowledge/bench-vise-size-guide) et la [présentation des types](/knowledge/types-of-bench-vises-explained).",
          ],
        },
        {
          title: 'Sécurité et durabilité',
          body: [
            "Un atelier scolaire maltraite les outils : serrage incorrect, coups de marteau soudains et pièces qui tombent. Un [matériau de corps](/engineering/materials) robuste, des [mâchoires trempées](/knowledge/what-does-60-hrc-mean) et des [jeux remplaçables](/knowledge/bench-vise-replaceable-jaws) signifient que le jeu dure plusieurs classes sans perdre sa prise.",
          ],
        },
        {
          title: 'Montage et disposition de la classe',
          body: [
            "Un plateau de classe est souvent plus mince qu'un plateau professionnel, donc boulonner solidement et renforcer la surface est essentiel. Un étau par poste, positionné pour que les étudiants regardent dans la bonne direction et s'éloignent des équipements rotatifs.",
          ],
        },
        {
          title: 'Entretenir un jeu de classe',
          body: [
            "Un peu d'[entretien](/knowledge/bench-vise-maintenance) planifié — nettoyage hebdomadaire de la vis, huile mensuelle — garde le jeu en marche. Enseignez le même réflexe aux étudiants : nettoyez l'étau en finissant.",
          ],
        },
        {
          title: 'Spécification pour l\'éducation',
          body: [
            "Les tarifs éducation, l'approvisionnement en volume et la disponibilité des pièces comptent autant que l'étau lui-même. La voie [OEM](/oem-manufacturing) gère les commandes de volume de classe et les jeux marqués.",
          ],
        },
      ],
    },
    {
      slug: 'woodworking-bench-vise',
      navLabel: "Étau d'établi pour menuiserie",
      metaTitle: "Étau d'établi pour menuiserie : maintien du bois",
      metaDescription:
        "Comment un étau d'établi tient le bois pour scier, percer, raboter et sculpter — quand un étau de métallurgie est le mauvais choix et quoi utiliser à la place.",
      kicker: 'Connaissances',
      h1: "Étau d'établi pour menuiserie",
      intro:
        "La menuiserie a besoin d'une prise différente. Le fini compte, le matériau est tendre et le mauvais étau peut écraser la veine avant même que la coupe ne commence. Un étau de menuiserie tient fermement sans laisser de marques.",
      sections: [
        {
          title: 'Pourquoi la menuiserie est différente',
          body: [
            "Le bois est plus tendre que le métal mais plus sensible aux dommages de surface. Des mâchoires trempées striées — parfaites pour l'acier — mordront la noix. La solution est des mâchoires [lisses et planes](/knowledge/bench-vise-jaw-materials) ou des [mâchoires tendres remplaçables](/knowledge/bench-vise-replaceable-jaws) qui protègent la surface tout en tenant.",
            "Le contexte général du maintien est dans [à quoi sert un étau](/knowledge/what-is-a-bench-vise-used-for).",
          ],
        },
        {
          title: 'Ouverture pour le bois',
          body: [
            "Une planche ou un panneau de meuble peut dépasser l'ouverture d'un petit étau. Un [modèle moyen de 5 ou 6 pouces](/products/vise-medium-6) donne l'espace ; un [étau léger de 4 pouces](/products/vise-light-4) couvre le plus petit. Le [guide d'ouverture](/knowledge/how-much-jaw-opening-do-you-need) explique quoi mesurer.",
          ],
        },
        {
          title: 'Serrer et positionner',
          body: [
            "Une [base pivotante](/knowledge/fixed-vs-swivel-base-bench-vise) aide pour travailler des planches longues sous différents angles. Les mâchoires à tube sont moins utiles ici, mais un jeu de [mâchoires remplaçables](/knowledge/bench-vise-replaceable-jaws) avec ouverture large couvre la plupart des travaux de menuiserie.",
          ],
        },
        {
          title: 'Éviter les dommages',
          body: [
            "Une [force de serrage](/engineering/clamping-force) faible suffit souvent pour le bois — il faut juste assez de prise pour tenir, pas assez pour écraser. Cela signifie que l'étau n'a pas besoin de masse lourde, et le choix se situe dans la fourchette légère à moyenne du [guide de choix](/knowledge/how-to-choose-a-bench-vise).",
          ],
        },
        {
          title: 'Pour les gammes OEM',
          body: [
            "Les étaux de menuiserie se vendent souvent avec des faces lisses, des plaques de plateau en bois et un ton de marque différent. L'[équipe OEM](/oem-manufacturing) fournit des variantes orientées menuiserie sur des plateformes éprouvées.",
          ],
        },
      ],
    },
    {
      slug: 'private-label-bench-vise-guide',
      navLabel: "Guide d'étau de marque distributeur",
      metaTitle: "Guide d'étau de marque distributeur | OEM et étaux personnalisés",
      metaDescription:
        "Comment construire une gamme d'étaux de marque distributeur — sélection de plateforme, personnalisation des mâchoires, MOQ, certification et la différence OEM vs marque distributeur.",
      kicker: 'Connaissances',
      h1: "Guide d'étau de marque distributeur",
      intro:
        "La marque distributeur est la façon dont de nombreuses marques entrent sur le marché des étaux : elles choisissent une plateforme éprouvée, personnalisent les détails et l'expédient sous leur propre nom. Le processus est plus rapide et moins coûteux que de concevoir de zéro — si vous savez quoi spécifier.",
      sections: [
        {
          title: 'Ce que signifie marque distributeur',
          body: [
            "Un programme de marque distributeur prend une plateforme existante du fabricant et applique votre marque, finition, jeu de mâchoires et emballage. L'étau est éprouvé ; l'étiquette est la vôtre. C'est l'alternative la plus rapide et à moindre risque à construire un étau de zéro — et ça commence sur le même [plan de fabrication](/oem-manufacturing).",
          ],
        },
        {
          title: 'Sélection de la plateforme',
          body: [
            "Commencez par la plateforme qui correspond à votre marché : légère pour la distribution, moyenne pour les ateliers, lourde pour l'industrie. Un [étau moyen de 6 pouces](/products/vise-medium-6) couvre le marché le plus large. Le [guide de choix](/knowledge/how-to-choose-a-bench-vise) parcourt les paramètres.",
          ],
        },
        {
          title: 'Ce que vous pouvez personnaliser',
          body: [
            "Largeur de mâchoires, ouverture, matériau et dureté des mâchoires, type de base, peinture ou revêtement, logo et emballage — tout est sélectionnable sur le même bâti. Les [matériaux du corps](/engineering/materials) et les [matériaux de mâchoires](/knowledge/bench-vise-jaw-materials) expliquent les compromis.",
          ],
        },
        {
          title: 'MOQ, délais et certification',
          body: [
            "Le MOQ, les délais, l'approbation des échantillons et les certifications sont les détails commerciaux qui décident du programme. Ils sont sur la page de [fabrication OEM](/oem-manufacturing) et dépendent du volume, de la finition et des certifications que votre marché exige.",
          ],
        },
        {
          title: 'Marque distributeur vs OEM vs ODM',
          body: [
            "La marque distributeur utilise une plateforme existante. L'OEM construit selon votre dessin. L'ODM part d'un concept. Pour les étaux, la marque distributeur est la voie la plus courante car l'outillage existe déjà. La [comparaison complète](/knowledge/oem-bench-vise-manufacturing) explique où chaque voie s'inscrit.",
            "Quelle que soit la voie choisie, la [gamme de produits](/knowledge/types-of-bench-vises-explained) montre l'étendue des plateformes disponibles.",
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