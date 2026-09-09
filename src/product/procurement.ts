import type { Localized } from './content'
import { FACTS, MOQ_SHORT } from './facts'

/**
 * B2B procurement profiles for the bench vise series pages (/products/{series}).
 *
 * Backed by the Stavalk series engineering & sourcing matrix
 * (castings / spindle steels / jaw steels per duty class): dimensions,
 * construction, clamping force and buyer fit per series. MOQ / lead-time
 * figures stay aligned with FACTS (single source of truth); commercial
 * wording follows the site's RFQ triage guidance.
 */

export interface ProcurementRow {
  label: string
  value: string
}

export interface ProcurementProfile {
  bestFor: string
  sizes: string
  construction: string
  customization: string
  moq: string
  leadTime: string
  specRows: ProcurementRow[]
  keyQuestions: string[]
}

export const procurementProfiles: Localized<Record<string, ProcurementProfile>> = {
  en: {
    'light-duty': {
      bestFor: 'Hobbyists, jewelry makers, electronics workshops & light woodworking',
      sizes: '4″–5″ jaw width · 3″–4″ opening · 3–5 kg',
      construction: 'HT200 gray cast iron body, 45# forged steel spindle, hardened jaws',
      customization: 'Jaw width, finish, logo & retail packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Hobby, jewelry, electronics & light woodworking projects' },
        { label: 'Available sizes', value: '4″–5″ jaw width · 3″–4″ opening · 3–5 kg' },
        { label: 'Construction', value: 'HT200 gray cast iron body, 45# forged steel spindle, hardened jaws' },
        { label: 'Jaw steel & hardness', value: 'GCr15 jaws at 58–62 HRC' },
        { label: 'Clamping force', value: 'approx. 2,000 lbs' },
        { label: 'Mounting', value: 'Small bolts; 360° swivel base optional' },
      ],
      keyQuestions: [
        'Target jaw width and opening range',
        'Bench thickness for mounting',
        'Finish, logo and packaging needs',
      ],
    },
    'medium-duty': {
      bestFor: 'General metalwork, auto repair, fabrication & woodworking shops',
      sizes: '6″–8″ jaw width · 4″–7″ opening · 5–8 kg',
      construction: 'HT200/HT250 gray cast iron body, 45# forged steel spindle, hardened jaws',
      customization: 'Jaw width, opening range, finish & logo',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'General metalwork, auto repair, fabrication & woodworking' },
        { label: 'Available sizes', value: '6″–8″ jaw width · 4″–7″ opening · 5–8 kg' },
        { label: 'Construction', value: 'HT200/HT250 gray cast iron body, 45# forged steel spindle, hardened jaws' },
        { label: 'Jaw steel & hardness', value: 'GCr15 jaws at 58–62 HRC' },
        { label: 'Clamping force', value: 'approx. 3,000 lbs' },
        { label: 'Mounting', value: 'Standard bench mount; swivel base optional' },
      ],
      keyQuestions: [
        'Most-used jaw width for your workshop',
        'Opening range for your largest stock',
        'Private-label finish and packaging',
      ],
    },
    'heavy-duty': {
      bestFor: 'Pipe fitting, ship work, mining maintenance & heavy fabrication',
      sizes: '8″–10″ jaw width · 7″–10″ opening · 8–14 kg',
      construction: 'HT250 heavy-wall gray cast iron body, heat-treated 45# steel spindle',
      customization: 'Base mount, jaw options, finish & packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Pipe fitting, ship work, mining maintenance & heavy fabrication' },
        { label: 'Available sizes', value: '8″–10″ jaw width · 7″–10″ opening · 8–14 kg' },
        { label: 'Construction', value: 'HT250 heavy-wall gray cast iron body, heat-treated 45# steel spindle' },
        { label: 'Jaw steel & hardness', value: 'Cr12MoV jaws at 58–62 HRC' },
        { label: 'Clamping force', value: 'up to 5,000 lbs' },
        { label: 'Mounting', value: 'Reinforced base for heavy hammering; fixed base for rigidity' },
      ],
      keyQuestions: [
        'Maximum stock size and hammering use',
        'Heavy or swivel base preference',
        'Batch size for production run',
      ],
    },
    pipe: {
      bestFor: 'Plumbers, pipe fitters & round-stock threading',
      sizes: '1/8″–2″ pipe capacity · 6–12 kg',
      construction: 'HT200 body with cast pipe-jaw serrations',
      customization: 'Pipe jaw sizes, serration pattern & finish',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Pipe fitting, threading & round-stock workholding' },
        { label: 'Available sizes', value: '1/8″–2″ pipe capacity · 6–12 kg' },
        { label: 'Construction', value: 'HT200 body with cast pipe-jaw serrations' },
        { label: 'Jaw steel & hardness', value: 'Replaceable hardened pipe jaws' },
        { label: 'Clamping force', value: 'Grips round stock securely without damage' },
        { label: 'Mounting', value: 'Fixed base; bench or stand mount' },
      ],
      keyQuestions: [
        'Pipe diameter range you work with',
        'Benchtop or floor/stand mounting',
        'Low-lead or coated contact surfaces',
      ],
    },
    specialty: {
      bestFor: 'Precision workholding & multi-angle or multi-jaw applications',
      sizes: 'Custom jaw/swivel configurations per spec',
      construction: 'Precision-machined HT250 base and slide',
      customization: 'Jaw geometry, swivel lock, quick-release & finish',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Precision workholding, multi-angle & multi-jaw applications' },
        { label: 'Available sizes', value: 'Custom jaw/swivel configurations per spec' },
        { label: 'Construction', value: 'Precision-machined HT250 base and slide' },
        { label: 'Jaw steel & hardness', value: 'GCr15/Cr12MoV jaws at 58–62 HRC' },
        { label: 'Clamping force', value: 'Consistent clamping force and alignment' },
        { label: 'Mounting', value: '360° swivel base or fixed base option' },
      ],
      keyQuestions: [
        'Application and workpiece shape',
        'Swivel lock or indexing requirements',
        'Volume and tooling considerations',
      ],
    },
  },
  es: {
    'light-duty': {
      bestFor: 'Hobbyistas, joyeros, talleres de electrónica y carpintería ligera',
      sizes: 'Ancho de mordaza 4″–5″ · apertura 3″–4″ · 3–5 kg',
      construction: 'Cuerpo de hierro gris HT200, husillo de acero forjado 45#, mordazas endurecidas',
      customization: 'Ancho de mordaza, acabado, logo y embalaje minorista',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Proyectos de hobby, joyería, electrónica y carpintería ligera' },
        { label: 'Tamaños disponibles', value: 'Ancho de mordaza 4″–5″ · apertura 3″–4″ · 3–5 kg' },
        { label: 'Construcción', value: 'Cuerpo de hierro gris HT200, husillo de acero forjado 45#, mordazas endurecidas' },
        { label: 'Acero y dureza de mordaza', value: 'Mordazas GCr15 a 58–62 HRC' },
        { label: 'Fuerza de sujeción', value: 'aprox. 2.000 lbs' },
        { label: 'Montaje', value: 'Pernos pequeños; base giratoria de 360° opcional' },
      ],
      keyQuestions: [
        'Ancho de mordaza y apertura objetivo',
        'Grosor del banco para el montaje',
        'Necesidades de acabado, logo y embalaje',
      ],
    },
    'medium-duty': {
      bestFor: 'Metalurgia general, reparación de autos, fabricación y carpintería',
      sizes: 'Ancho de mordaza 6″–8″ · apertura 4″–7″ · 5–8 kg',
      construction: 'Cuerpo de hierro gris HT200/HT250, husillo de acero forjado 45#, mordazas endurecidas',
      customization: 'Ancho de mordaza, apertura, acabado y logo',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Metalurgia general, reparación de autos, fabricación y carpintería' },
        { label: 'Tamaños disponibles', value: 'Ancho de mordaza 6″–8″ · apertura 4″–7″ · 5–8 kg' },
        { label: 'Construcción', value: 'Cuerpo de hierro gris HT200/HT250, husillo de acero forjado 45#, mordazas endurecidas' },
        { label: 'Acero y dureza de mordaza', value: 'Mordazas GCr15 a 58–62 HRC' },
        { label: 'Fuerza de sujeción', value: 'aprox. 3.000 lbs' },
        { label: 'Montaje', value: 'Montaje estándar de banco; base giratoria opcional' },
      ],
      keyQuestions: [
        'Ancho de mordaza más usado en tu taller',
        'Apertura para tu material más grande',
        'Acabado y embalaje de marca privada',
      ],
    },
    'heavy-duty': {
      bestFor: 'Fontanería, trabajo naval, mantenimiento de minería y fabricación pesada',
      sizes: 'Ancho de mordaza 8″–10″ · apertura 7″–10″ · 8–14 kg',
      construction: 'Cuerpo de hierro gris HT250 de pared gruesa, husillo de acero 45# tratado térmicamente',
      customization: 'Montaje de base, opciones de mordaza, acabado y embalaje',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Fontanería, trabajo naval, mantenimiento de minería y fabricación pesada' },
        { label: 'Tamaños disponibles', value: 'Ancho de mordaza 8″–10″ · apertura 7″–10″ · 8–14 kg' },
        { label: 'Construcción', value: 'Cuerpo de hierro gris HT250 de pared gruesa, husillo de acero 45# tratado térmicamente' },
        { label: 'Acero y dureza de mordaza', value: 'Mordazas Cr12MoV a 58–62 HRC' },
        { label: 'Fuerza de sujeción', value: 'hasta 5.000 lbs' },
        { label: 'Montaje', value: 'Base reforzada para uso con martillo; base fija para rigidez' },
      ],
      keyQuestions: [
        'Tamaño máximo de material y uso con martillo',
        'Preferencia de base pesada o giratoria',
        'Tamaño del lote de producción',
      ],
    },
    pipe: {
      bestFor: 'Fontaneros, instaladores de tuberías y roscado de material redondo',
      sizes: 'Capacidad de tubería 1/8″–2″ · 6–12 kg',
      construction: 'Cuerpo HT200 con estrías de mordaza para tubería fundidas',
      customization: 'Tamaños de mordaza para tubería, patrón de estrías y acabado',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Fontanería, roscado y sujeción de material redondo' },
        { label: 'Tamaños disponibles', value: 'Capacidad de tubería 1/8″–2″ · 6–12 kg' },
        { label: 'Construcción', value: 'Cuerpo HT200 con estrías de mordaza para tubería fundidas' },
        { label: 'Acero y dureza de mordaza', value: 'Mordazas para tubería endurecidas y reemplazables' },
        { label: 'Fuerza de sujeción', value: 'Sujeta material redondo de forma segura sin dañarlo' },
        { label: 'Montaje', value: 'Base fija; montaje en banco o soporte' },
      ],
      keyQuestions: [
        'Rango de diámetro de tubería que trabajas',
        'Montaje en banco o en soporte de suelo',
        'Superficies de contacto sin plomo o recubiertas',
      ],
    },
    specialty: {
      bestFor: 'Sujeción de precisión y aplicaciones multiángulo o multimordaza',
      sizes: 'Configuraciones personalizadas de mordaza/giratoria según especificación',
      construction: 'Base y corredera HT250 de mecanizado de precisión',
      customization: 'Geometría de mordaza, bloqueo de giro, liberación rápida y acabado',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Sujeción de precisión, aplicaciones multiángulo y multimordaza' },
        { label: 'Tamaños disponibles', value: 'Configuraciones personalizadas de mordaza/giratoria según especificación' },
        { label: 'Construcción', value: 'Base y corredera HT250 de mecanizado de precisión' },
        { label: 'Acero y dureza de mordaza', value: 'Mordazas GCr15/Cr12MoV a 58–62 HRC' },
        { label: 'Fuerza de sujeción', value: 'Fuerza de sujeción y alineación consistentes' },
        { label: 'Montaje', value: 'Base giratoria de 360° o base fija opcional' },
      ],
      keyQuestions: [
        'Aplicación y forma de la pieza de trabajo',
        'Requisitos de bloqueo de giro o indexación',
        'Consideraciones de volumen y utillaje',
      ],
    },
  },
  fr: {
    'light-duty': {
      bestFor: 'Bricoleurs, bijoutiers, ateliers d’électronique et menuiserie légère',
      sizes: 'Largeur de mâchoire 4″–5″ · ouverture 3″–4″ · 3–5 kg',
      construction: 'Corps en fonte grise HT200, vis en acier forgé 45#, mâchoires trempées',
      customization: 'Largeur de mâchoire, finition, logo et emballage retail',
      moq: `À partir de ${MOQ_SHORT.standardRun} pièces par projet — séries d’essai dès ${MOQ_SHORT.trialStandard}`,
      leadTime: `Échantillons en ${FACTS.sampleTime} · production en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt`,
      specRows: [
        { label: 'Scénario d’utilisation', value: 'Projets de hobby, bijouterie, électronique et menuiserie légère' },
        { label: 'Tailles disponibles', value: 'Largeur de mâchoire 4″–5″ · ouverture 3″–4″ · 3–5 kg' },
        { label: 'Construction', value: 'Corps en fonte grise HT200, vis en acier forgé 45#, mâchoires trempées' },
        { label: 'Acier et dureté des mâchoires', value: 'Mâchoires GCr15 à 58–62 HRC' },
        { label: 'Force de serrage', value: 'env. 2 000 lbs' },
        { label: 'Montage', value: 'Petits boulons ; base pivotante 360° en option' },
      ],
      keyQuestions: [
        'Largeur de mâchoire et plage d’ouverture visées',
        'Épaisseur de l’établi pour le montage',
        'Besoins de finition, logo et emballage',
      ],
    },
    'medium-duty': {
      bestFor: 'Métallurgie générale, réparation auto, fabrication et menuiserie',
      sizes: 'Largeur de mâchoire 6″–8″ · ouverture 4″–7″ · 5–8 kg',
      construction: 'Corps en fonte grise HT200/HT250, vis en acier forgé 45#, mâchoires trempées',
      customization: 'Largeur de mâchoire, ouverture, finition et logo',
      moq: `À partir de ${MOQ_SHORT.standardRun} pièces par projet — séries d’essai dès ${MOQ_SHORT.trialStandard}`,
      leadTime: `Échantillons en ${FACTS.sampleTime} · production en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt`,
      specRows: [
        { label: 'Scénario d’utilisation', value: 'Métallurgie générale, réparation auto, fabrication et menuiserie' },
        { label: 'Tailles disponibles', value: 'Largeur de mâchoire 6″–8″ · ouverture 4″–7″ · 5–8 kg' },
        { label: 'Construction', value: 'Corps en fonte grise HT200/HT250, vis en acier forgé 45#, mâchoires trempées' },
        { label: 'Acier et dureté des mâchoires', value: 'Mâchoires GCr15 à 58–62 HRC' },
        { label: 'Force de serrage', value: 'env. 3 000 lbs' },
        { label: 'Montage', value: 'Montage d’établi standard ; base pivotante en option' },
      ],
      keyQuestions: [
        'Largeur de mâchoire la plus utilisée dans votre atelier',
        'Ouverture pour votre plus grand matériau',
        'Finition et emballage en marque privée',
      ],
    },
    'heavy-duty': {
      bestFor: 'Plomberie, travail naval, maintenance minière et fabrication lourde',
      sizes: 'Largeur de mâchoire 8″–10″ · ouverture 7″–10″ · 8–14 kg',
      construction: 'Corps en fonte grise HT250 à paroi épaisse, vis en acier 45# traitée thermiquement',
      customization: 'Montage de base, options de mâchoires, finition et emballage',
      moq: `À partir de ${MOQ_SHORT.standardRun} pièces par projet — séries d’essai dès ${MOQ_SHORT.trialStandard}`,
      leadTime: `Échantillons en ${FACTS.sampleTime} · production en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt`,
      specRows: [
        { label: 'Scénario d’utilisation', value: 'Plomberie, travail naval, maintenance minière et fabrication lourde' },
        { label: 'Tailles disponibles', value: 'Largeur de mâchoire 8″–10″ · ouverture 7″–10″ · 8–14 kg' },
        { label: 'Construction', value: 'Corps en fonte grise HT250 à paroi épaisse, vis en acier 45# traitée thermiquement' },
        { label: 'Acier et dureté des mâchoires', value: 'Mâchoires Cr12MoV à 58–62 HRC' },
        { label: 'Force de serrage', value: 'jusqu’à 5 000 lbs' },
        { label: 'Montage', value: 'Base renforcée pour le martelage ; base fixe pour la rigidité' },
      ],
      keyQuestions: [
        'Taille maximale de matériau et usage au marteau',
        'Préférence de base lourde ou pivotante',
        'Taille du lot de production',
      ],
    },
    pipe: {
      bestFor: 'Plombiers, ajusteurs de tuyaux et filetage de matériau rond',
      sizes: 'Capacité tuyau 1/8″–2″ · 6–12 kg',
      construction: 'Corps HT200 avec stries de mâchoire à tuyau coulées',
      customization: 'Tailles de mâchoire à tuyau, motif de stries et finition',
      moq: `À partir de ${MOQ_SHORT.standardRun} pièces par projet — séries d’essai dès ${MOQ_SHORT.trialStandard}`,
      leadTime: `Échantillons en ${FACTS.sampleTime} · production en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt`,
      specRows: [
        { label: 'Scénario d’utilisation', value: 'Plomberie, filetage et bridage de matériau rond' },
        { label: 'Tailles disponibles', value: 'Capacité tuyau 1/8″–2″ · 6–12 kg' },
        { label: 'Construction', value: 'Corps HT200 avec stries de mâchoire à tuyau coulées' },
        { label: 'Acier et dureté des mâchoires', value: 'Mâchoires à tuyau trempées remplaçables' },
        { label: 'Force de serrage', value: 'Maintien sûr du matériau rond sans l’endommager' },
        { label: 'Montage', value: 'Base fixe ; montage sur établi ou support' },
      ],
      keyQuestions: [
        'Plage de diamètres de tuyau travaillés',
        'Montage sur établi ou sur support au sol',
        'Surfaces de contact sans plomb ou revêtues',
      ],
    },
    specialty: {
      bestFor: 'Bridage de précision et applications multi-angles ou multi-mâchoires',
      sizes: 'Configurations personnalisées mâchoire/pivotante selon spécification',
      construction: 'Base et coulisseau HT250 usinés avec précision',
      customization: 'Géométrie de mâchoire, verrouillage pivotant, dégagement rapide et finition',
      moq: `À partir de ${MOQ_SHORT.standardRun} pièces par projet — séries d’essai dès ${MOQ_SHORT.trialStandard}`,
      leadTime: `Échantillons en ${FACTS.sampleTime} · production en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt`,
      specRows: [
        { label: 'Scénario d’utilisation', value: 'Bridage de précision, applications multi-angles et multi-mâchoires' },
        { label: 'Tailles disponibles', value: 'Configurations personnalisées mâchoire/pivotante selon spécification' },
        { label: 'Construction', value: 'Base et coulisseau HT250 usinés avec précision' },
        { label: 'Acier et dureté des mâchoires', value: 'Mâchoires GCr15/Cr12MoV à 58–62 HRC' },
        { label: 'Force de serrage', value: 'Force de serrage et alignement constants' },
        { label: 'Montage', value: 'Base pivotante 360° ou base fixe au choix' },
      ],
      keyQuestions: [
        'Application et forme de la pièce',
        'Exigences de verrouillage pivotant ou d’indexage',
        'Considérations de volume et d’outillage',
      ],
    },
  },
}

/** Common commercial rows (MOQ / samples / pricing) for every series page. */
export const commercialRows: Localized<ProcurementRow[]> = {
  en: [
    { label: 'Sample path', value: 'Sample development available for qualified OEM/ODM projects.' },
    { label: 'Sample MOQ', value: 'Confirmed by model, jaw width, finish and accessory set.' },
    { label: 'Volume MOQ', value: 'MOQ is confirmed per model, finish, packaging configuration and order mix.' },
    { label: 'Pricing logic', value: 'Quotation is based on material grade, size, finish, packaging, order quantity and delivery terms.' },
    { label: 'Sample timing', value: `Samples in ${FACTS.sampleTime} after specification, finish sample approval and payment requirements are confirmed.` },
    { label: 'Production timing', value: `Production in ${FACTS.leadTime} after sample approval, final finishing, deposit and production scheduling are confirmed.` },
    { label: 'Packaging MOQ', value: 'Custom retail packaging may carry separate MOQ requirements.' },
    { label: 'Mixed orders', value: 'Mixed models or finishes are reviewed according to casting, coating and packaging requirements.' },
    { label: 'Inspection', value: 'Third-party inspection and buyer-appointed inspection can be discussed before production release.' },
    { label: 'Commercial terms', value: 'Available terms are discussed during quotation based on project scope and order history.' },
  ],
  es: [
    { label: 'Ruta de muestras', value: 'Desarrollo de muestras disponible para proyectos OEM/ODM calificados.' },
    { label: 'MOQ de muestras', value: 'Confirmado según modelo, ancho de mordaza, acabado y conjunto de accesorios.' },
    { label: 'MOQ de volumen', value: 'El MOQ se confirma por modelo, acabado, configuración de embalaje y mezcla de pedidos.' },
    { label: 'Lógica de precios', value: 'El presupuesto se basa en el grado del material, tamaño, acabado, embalaje, cantidad de pedido y condiciones comerciales.' },
    { label: 'Tiempo de muestras', value: `Muestras en ${FACTS.sampleTime} tras confirmar especificación, aprobación de muestra de acabado y requisitos de pago.` },
    { label: 'Tiempo de producción', value: `Producción en ${FACTS.leadTime} tras aprobación de muestra, acabado final, depósito y programación de producción.` },
    { label: 'MOQ de embalaje', value: 'El embalaje minorista personalizado puede tener requisitos de MOQ independientes.' },
    { label: 'Pedidos mixtos', value: 'Modelos o acabados mixtos se revisan según requisitos de fundición, recubrimiento y embalaje.' },
    { label: 'Inspección', value: 'La inspección de terceros y la inspección designada por el comprador pueden acordarse antes de la liberación de producción.' },
    { label: 'Condiciones comerciales', value: 'Las condiciones disponibles se analizan durante el presupuesto según el alcance del proyecto y el historial de pedidos.' },
  ],
  fr: [
    { label: 'Parcours d’échantillons', value: 'Développement d’échantillons disponible pour les projets OEM/ODM qualifiés.' },
    { label: 'MOQ d’échantillons', value: 'Confirmé selon le modèle, la largeur de mâchoire, la finition et l’ensemble d’accessoires.' },
    { label: 'MOQ de volume', value: 'Le MOQ est confirmé par modèle, finition, configuration d’emballage et mix de commandes.' },
    { label: 'Logique de prix', value: 'Le devis repose sur le grade de matériau, la taille, la finition, l’emballage, la quantité commandée et les conditions de livraison.' },
    { label: 'Délai d’échantillons', value: `Échantillons en ${FACTS.sampleTime} après confirmation de la spécification, de l’approbation de l’échantillon de finition et des conditions de paiement.` },
    { label: 'Délai de production', value: `Production en ${FACTS.leadTime} après approbation de l’échantillon, finition finale, dépôt et planification de la production.` },
    { label: 'MOQ d’emballage', value: 'Un emballage retail personnalisé peut impliquer des exigences de MOQ distinctes.' },
    { label: 'Commandes mixtes', value: 'Les modèles ou finitions mixtes sont étudiés selon les exigences de fonderie, de revêtement et d’emballage.' },
    { label: 'Inspection', value: 'Une inspection par tiers et une inspection désignée par l’acheteur peuvent être convenues avant le lancement de la production.' },
    { label: 'Conditions commerciales', value: 'Les conditions disponibles sont discutées lors du devis selon le périmètre du projet et l’historique de commandes.' },
  ],
}