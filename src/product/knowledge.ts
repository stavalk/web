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