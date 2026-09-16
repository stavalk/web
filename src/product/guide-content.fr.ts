import type { Guide } from './guide-content'

/**
 * French translations of the consumer guides (/guides/{slug}).
 * Mirrors the English guide set 1:1: same slugs, fully translated title,
 * intro, sections and FAQs so /fr/guides/* renders genuine French content.
 */
export const GUIDES_FR: Guide[] = [
  {
    slug: 'how-to-choose-a-bench-vise',
    title: "Comment choisir un étau d'établi",
    intro: [
      "Choisir un étau d'établi se résume à la largeur de mâchoire, la force de serrage, le matériau du corps et la fixation. Voici ce qui compte, en langage simple.",
    ],
    sections: [
      {
        title: 'Largeur de mâchoire et ouverture',
        body: "La largeur de mâchoire détermine la plus grande pièce que vous pouvez maintenir en sécurité. Un étau léger de 2″-5″ convient au bricolage et aux petits travaux ; un étau moyen de 6″-8″ couvre la plupart des ateliers ; un étau lourd de 8″-10″ est destiné à la fabrication industrielle. Adaptez l'ouverture à votre plus gros matériau.",
      },
      {
        title: 'Force de serrage',
        body: 'La force de serrage va de 1200-1500 lbs (léger) à 6000-8000 lbs (lourd). Une force plus élevée maintient la pièce sous un usinage agressif, mais peut écraser les pièces délicates — choisissez la force dont votre travail a réellement besoin.',
      },
      {
        title: 'Fonte grise vs. acier forgé',
        body: "La fonte grise (HT200/HT250) est le standard économique et amortit bien les vibrations. L'acier forgé ou coulé au carbone (45#) résiste aux chocs et aux charges dynamiques — le choix pour les applications lourdes à usage intensif. Les faces de mâchoires sont trempées séparément à 58-62 HRC.",
      },
      {
        title: 'Base orientable et fixation',
        body: "Une base orientable à 360° repositionne la pièce sans dévisser ; une base fixe est plus rigide pour les martelages lourds. Adaptez la taille et l'entraxe des boulons à votre établi et renforcez le plateau pour les étaux lourds.",
      },
    ],
    faqs: [
      { q: "Quelle taille d'étau d'établi me faut-il ?", a: "La plupart des ateliers choisissent un étau moyen de 6″ — suffisamment de force et de couvert de mâchoire pour la métallerie, le travail du bois et la réparation automobile, à un prix raisonnable." },
      { q: 'Une base orientable vaut-elle le coup ?', a: "Si vous changez souvent l'angle de travail, oui — elle évite de dévisser sans cesse. Pour les martelages lourds et les forces extrêmes, une base fixe est plus rigide." },
    ],
    related: [
      { label: "Parcourir les séries d'étaux d'établi", href: '/products' },
      { label: "Fabrication OEM d'étaux d'établi", href: '/oem-manufacturing' },
      { label: "Entretien des étaux d'établi", href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-size-guide',
    title: "Guide des tailles d'étau d'établi : largeur de mâchoire selon le travail",
    intro: [
      "La largeur de mâchoire est le raccourci le plus rapide pour dimensionner un étau d'établi. Ce guide associe les largeurs de mâchoire courantes aux travaux qu'elles couvrent.",
    ],
    sections: [
      {
        title: '2″-5″ — Usage léger',
        body: 'Montage électronique, bijouterie, artisanat, petit travail du bois et maquettes. Des forces de 1200-1500 lbs maintiennent les petites pièces sans les écraser.',
      },
      {
        title: '6″-8″ — Usage moyen',
        body: "Métallerie générale, réparation automobile, fabrication et travail du bois. 3000-4000 lbs de force avec mâchoires trempées remplaçables et mâchoires à tubes en option pour les pièces rondes.",
      },
      {
        title: '8″-10″ — Usage lourd',
        body: "Plomberie, travail naval, maintenance minière et fabrication lourde. 6000-8000 lbs de force, corps en acier forgé et surfaces d'enclume pour façonner le travail.",
      },
      {
        title: 'Considérations de tailles spéciales',
        body: "Les étaux de précision et de machine se dimensionnent par la hauteur de mâchoire et la rainure de table, pas seulement par la largeur : mesurez votre table CNC et votre pièce avant de choisir.",
      },
    ],
    faqs: [
      { q: 'Une mâchoire plus grande est-elle toujours meilleure ?', a: 'Non. Des mâchoires surdimensionnées ajoutent du poids et du coût et peuvent écraser les petites pièces avec une force excessive. Dimensionnez selon votre plus gros travail régulier.' },
      { q: 'Ai-je besoin de mâchoires pour tubes ?', a: 'Seulement si vous maintenez régulièrement des pièces rondes — tubes, barres et tuyaux. Les mâchoires pour tubes (ou un étau à tuyaux dédié) saisissent les pièces cylindriques sans glissement.' },
    ],
    related: [
      { label: "Parcourir les séries d'étaux d'établi", href: '/products' },
      { label: "Comment choisir un étau d'établi", href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-maintenance-guide',
    title: "Guide d'entretien de l'étau d'établi",
    intro: [
      "Un étau d'établi de qualité dure une génération avec un entretien de base. Ces routines empêchent les vis grippées, les mâchoires usées et les corps corrodés.",
    ],
    sections: [
      {
        title: 'Lubrifiez la vis et le coulisseau',
        body: "Gardez la vis mère et le canal du coulisseau légèrement graissés et exempts de saleté. Une vis propre et lubrifiée fait toute la différence entre un étau fluide et un étau bloqué.",
      },
      {
        title: "Vérifiez l'alignement des mâchoires",
        body: 'Bridez régulièrement une pièce plane et vérifiez une pression uniforme sur les deux faces. Remplacez les inserts de mâchoire usés sur les étaux à faces remplaçables plutôt que de changer toute l\'unité.',
      },
      {
        title: "Protégez la base orientable et l'enclume",
        body: "Gardez les dents de la base orientable propres et graissées et serrez fermement le verrou pendant le travail. Utilisez l'enclume uniquement pour un façonnage léger — les martelages lourds fissurent les corps en fonte grise.",
      },
      {
        title: 'Prévenez la rouille',
        body: "Dans les environnements humides, rangez les étaux sous abri et gardez une fine couche d'huile sur les surfaces non peintes. Cela préserve aussi le fini pour la valeur de revente.",
      },
    ],
    faqs: [
      { q: "Quelle graisse utiliser sur un étau d'établi ?", a: 'Une graisse lithium polyvalente fonctionne bien sur la vis et le canal du coulisseau. Essuyez l\'excédent pour qu\'elle n\'attire pas la saleté.' },
      { q: "Pourquoi mon étau semble-t-il bloqué ?", a: 'En général, c\'est un canal ou une vis sale ou sèche. Nettoyez, lubrifiez et manœuvrez la manivelle plusieurs fois : la plupart des étaux collants se libèrent immédiatement.' },
    ],
    related: [
      { label: "Entretien des étaux d'établi", href: '/knowledge' },
      { label: "Parcourir les séries d'étaux d'établi", href: '/products' },
    ],
  },
  {
    slug: 'pipe-vise-guide',
    title: "Guide des étaux à tuyaux : chaîne vs. trépied",
    intro: [
      "Les étaux à tuyaux maintiennent les pièces rondes que les étaux à mâchoires ouvertes ne peuvent pas saisir en sécurité. Comprenez les deux styles principaux avant de choisir pour votre atelier ou votre chantier.",
    ],
    sections: [
      {
        title: 'Étaux à tuyaux à chaîne',
        body: "Montés sur un établi ou un support, ils enserrent le tuyau avec une chaîne et un mécanisme à vis pour une force de maintien maximale. Idéaux pour les tuyaux lourds et l'usage répété en atelier.",
      },
      {
        title: 'Étaux à tuyaux à trépied',
        body: "Autonomes et portables, ils s'installent n'importe où — chantiers, réparations de terrain et montage mobile. Ils tiennent le tuyau avec la même prise de mâchoire en V striée en une fraction du temps de mise en place.",
      },
      {
        title: 'Dimensionnement des étaux à tuyaux',
        body: "La capacité se mesure au diamètre du tuyau — les étaux courants couvrent de 1/4″ à 6″. Adaptez la capacité au plus gros tuyau que vos équipes coupent et filetent régulièrement.",
      },
      {
        title: 'Accessoires et réparations',
        body: "Les inserts de mâchoires en V trempés et les maillons de chaîne de rechange maintiennent les étaux à tuyaux en service. Demandez des pièces de rechange lors des commandes de flottes pour que les unités ne patientent jamais sur l'approvisionnement.",
      },
    ],
    faqs: [
      { q: 'Étau à tuyaux à chaîne ou à trépied ?', a: 'Choisissez la chaîne pour les ateliers fixes manipulant des tuyaux lourds et le trépied pour la portabilité entre chantiers — beaucoup d\'opérations possèdent les deux.' },
      { q: 'Comment éviter le glissement du tuyau dans un étau à tuyaux ?', a: 'Les mâchoires en V trempées et striées saisissent les pièces rondes en sécurité. Gardez les mâchoires propres et la chaîne réglée fermement contre le tuyau.' },
    ],
    related: [
      { label: "Série d'étaux à tuyaux", href: '/products' },
      { label: 'Étaux pour la construction', href: '/solutions' },
    ],
  },
  {
    slug: 'oem-bench-vise-order-guide',
    title: "Guide de commande OEM d'étaux d'établi",
    intro: [
      "Commander des étaux OEM est simple quand on connaît le processus : besoin, spécification, échantillon, production, contrôle qualité, livraison.",
    ],
    sections: [
      {
        title: 'Commencez par le besoin',
        body: "Définissez la largeur de mâchoire, l'ouverture, la force de serrage, le matériau du corps, la finition, le marquage et l'emballage avant de contacter une usine. Des besoins clairs produisent de meilleures premières cotations.",
      },
      {
        title: 'Figez la spécification',
        body: "Les deux parties cotent sur un seul document : dimensions, matériaux, traitement thermique, revêtement, marquage et emballage. Les changements après le gel sont plus lents et plus coûteux.",
      },
      {
        title: "Approuvez un échantillon physique",
        body: "Un échantillon confirme la qualité d'usinage, la dureté des mâchoires, la couleur de finition, le marquage et l'emballage. Testez-le comme vos clients l'utiliseront avant d'approuver la production.",
      },
      {
        title: 'Production, contrôle qualité et livraison',
        body: "La production prend 25-35 jours après confirmation de la commande. Les usines de confiance vérifient la dureté des mâchoires (58-62 HRC), la force de serrage et la durabilité cyclique par lot avant l'expédition.",
      },
    ],
    faqs: [
      { q: 'Quel est le MOQ pour les étaux OEM ?', a: 'Les modèles standard démarrent à 50-200 pièces par modèle ; les lourds et spéciaux à 20-50. Combiner des modèles dans une commande améliore le prix unitaire.' },
      { q: 'Combien de temps prennent les échantillons ?', a: 'Généralement 7-14 jours, avec une production de 25-35 jours après échantillon approuvé et commande confirmée.' },
      { q: 'Quelles certifications demander ?', a: "Le marquage CE, le système de qualité ISO 9001 et la conformité matériaux RoHS sont la base pour l'UE et la plupart des marchés d'exportation." },
    ],
    related: [
      { label: "Fabrication OEM d'étaux d'établi", href: '/oem-manufacturing' },
      { label: "Parcourir les séries d'étaux d'établi", href: '/products' },
    ],
  },
  {
    slug: 'precision-vise-guide',
    title: "Étaux de précision pour l'usinage",
    intro: [
      "Les étaux de précision maintiennent les pièces à des tolérances que les étaux ordinaires ne peuvent pas atteindre. Ce guide couvre les étaux à avance croisée, de fraisage et de machine pour le CNC et l'usinage manuel.",
    ],
    sections: [
      {
        title: "Le parallélisme est l'essentiel",
        body: "Les étaux de précision sont rectifiés pour que les mâchoires restent parallèles à la table à 0,001″ (0,025 mm) près. Cette base détermine la répétabilité de chaque pièce usinée.",
      },
      {
        title: 'Étaux à avance croisée',
        body: 'Ils ajoutent un positionnement X-Y sans déplacer la pièce — utiles pour les motifs de perçage précis et les opérations de fraisage secondaires sur une fraiseuse manuelle.',
      },
      {
        title: 'Étaux de fraisage et de machine',
        body: "Les corps type Kurt à double verrouillage maintiennent la pièce sans levage, même en coupe CNC à grande vitesse. Les tailles s'adaptent à l'entraxe des rainures de table, pas seulement à la largeur de mâchoire.",
      },
      {
        title: 'Mâchoires personnalisées',
        body: "Les mâchoires en aluminium doux, à rainure en V et profilées protègent les surfaces finies et bercent les pièces irrégulières — une personnalisation OEM courante pour les ateliers de production.",
      },
    ],
    faqs: [
      { q: 'Quelle précision offre un étau de précision ?', a: "Les mâchoires rectifiées de précision offrent 0,001″ (0,025 mm) de parallélisme avec la table, vérifié par machines à mesurer tridimensionnelles avant expédition." },
      { q: 'Peut-on fabriquer des étaux de précision pour ma table CNC ?', a: "Oui — les fabricants adaptent les dimensions des rainures en T, les schémas de boulonnage et les profils de mâchoires à votre machine et à vos pièces spécifiques." },
    ],
    related: [
      { label: "Série d'étaux spéciaux", href: '/products' },
      { label: 'Centre de connaissances', href: '/knowledge' },
    ],
  },
]