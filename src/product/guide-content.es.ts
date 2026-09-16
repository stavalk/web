import type { Guide } from './guide-content'

/**
 * Spanish translations of the consumer guides (/guides/{slug}).
 * Mirrors the English guide set 1:1: same slugs, fully translated title,
 * intro, sections and FAQs so /es/guides/* renders genuine Spanish content.
 */
export const GUIDES_ES: Guide[] = [
  {
    slug: 'how-to-choose-a-bench-vise',
    title: 'Cómo elegir una mordaza de banco',
    intro: [
      'Elegir una mordaza de banco se reduce al ancho de boca, la fuerza de sujeción, el material del cuerpo y cómo se fija. Esto es lo que importa, en lenguaje claro.',
    ],
    sections: [
      {
        title: 'Ancho de boca y abertura',
        body: 'El ancho de boca determina la pieza más grande que puedes sujetar con seguridad. Una mordaza ligera de 2″-5″ es adecuada para afición y trabajos pequeños; una mediana de 6″-8″ cubre la mayoría de talleres; una pesada de 8″-10″ es para fabricación industrial. Ajusta la abertura a tu material más grande.',
      },
      {
        title: 'Fuerza de sujeción',
        body: 'La fuerza de sujeción va de 1200-1500 lbs (ligera) a 6000-8000 lbs (pesada). Más fuerza mantiene la pieza bajo un mecanizado agresivo, pero puede aplastar piezas delicadas: elige la fuerza que tu trabajo realmente necesita.',
      },
      {
        title: 'Fundición gris vs. acero forjado',
        body: 'La fundición gris (HT200/HT250) es el estándar económico y amortigua bien las vibraciones. El acero forjado o fundido al carbono (45#) resiste impactos y cargas de choque: la elección para aplicaciones pesadas de uso intensivo. Las caras de las mordazas se endurecen aparte a 58-62 HRC.',
      },
      {
        title: 'Base giratoria y fijación',
        body: 'Una base giratoria de 360° recoloca la pieza sin desatornillar; una base fija es más rígida para los golpes fuertes. Ajusta el tamaño y la separación de los tornillos a tu banco y refuerza el tablero para las mordazas pesadas.',
      },
    ],
    faqs: [
      { q: '¿Qué tamaño de mordaza de banco necesito?', a: 'La mayoría de talleres elige una mediana de 6″: suficiente fuerza y cobertura de boca para metalurgia, carpintería y reparación de coches en general, a un precio razonable.' },
      { q: '¿Vale la pena una base giratoria?', a: 'Si cambias a menudo el ángulo de trabajo, sí: ahorra desatornillar repetidamente. Para golpes fuertes y fuerza extrema, una base fija es más rígida.' },
    ],
    related: [
      { label: 'Ver series de mordazas de banco', href: '/products' },
      { label: 'Fabricación OEM de mordazas de banco', href: '/oem-manufacturing' },
      { label: 'Mantenimiento de mordazas de banco', href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-size-guide',
    title: 'Guía de tamaños de mordaza de banco: ancho de boca según el trabajo',
    intro: [
      'El ancho de boca es el atajo más rápido para dimensionar una mordaza de banco. Esta guía relaciona los anchos de boca habituales con los trabajos que cubren.',
    ],
    sections: [
      {
        title: '2″-5″ — Uso ligero',
        body: 'Montaje de electrónica, joyería, artesanía, pequeño trabajo de carpintería y modelismo. Fuerzas de 1200-1500 lbs sujetan piezas pequeñas sin aplastarlas.',
      },
      {
        title: '6″-8″ — Uso medio',
        body: 'Metalurgia general, reparación de coches, fabricación y carpintería. 3000-4000 lbs de fuerza con bocas endurecidas reemplazables y bocas opcionales para tubos en piezas redondas.',
      },
      {
        title: '8″-10″ — Uso pesado',
        body: 'Fontanería, trabajo naval, mantenimiento de minería y fabricación pesada. 6000-8000 lbs de fuerza, cuerpos de acero forjado y superficies de yunque para dar forma a las piezas.',
      },
      {
        title: 'Consideraciones de tamaños especiales',
        body: 'Las mordazas de precisión y de máquina se dimensionan por la altura de boca y la ranura de la mesa, no solo por el ancho: mide tu mesa CNC y tu pieza antes de elegir.',
      },
    ],
    faqs: [
      { q: '¿Una boca más grande siempre es mejor?', a: 'No. Bocas sobredimensionadas añaden peso y coste y pueden aplastar piezas pequeñas con fuerza excesiva. Dimensiona según tu trabajo regular más grande.' },
      { q: '¿Necesito bocas para tubos?', a: 'Solo si sujetas habitualmente piezas redondas: tubería, barra y tubo. Las bocas para tubos (o una mordaza para tubos dedicada) agarran piezas cilíndricas sin deslizamiento.' },
    ],
    related: [
      { label: 'Ver series de mordazas de banco', href: '/products' },
      { label: 'Cómo elegir una mordaza de banco', href: '/knowledge' },
    ],
  },
  {
    slug: 'bench-vise-maintenance-guide',
    title: 'Guía de mantenimiento de mordazas de banco',
    intro: [
      'Una mordaza de banco de calidad dura una generación con cuidados básicos. Estas rutinas previenen husillos atascados, bocas desgastadas y cuerpos corroídos.',
    ],
    sections: [
      {
        title: 'Lubrica el husillo y la corredera',
        body: 'Mantén el husillo principal y el canal de la corredera ligeramente engrasados y libres de suciedad. Un husillo limpio y lubricado es toda la diferencia entre una mordaza suave y una atascada.',
      },
      {
        title: 'Comprueba la alineación de las bocas',
        body: 'Sujeta periódicamente una pieza plana y comprueba que la presión sea uniforme en ambas caras. Sustituye los insertos de boca desgastados en mordazas con caras reemplazables en lugar de cambiar toda la unidad.',
      },
      {
        title: 'Protege la base giratoria y el yunque',
        body: 'Mantén los dientes de la base giratoria limpios y engrasados, y aprieta firmemente el bloqueo durante el trabajo. Usa el yunque solo para dar forma ligera: los golpes fuertes agrietan los cuerpos de fundición gris.',
      },
      {
        title: 'Previene el óxido',
        body: 'En ambientes húmedos, guarda las mordazas bajo cubierta y mantén una capa ligera de aceite en las superficies sin pintar. También conserva el acabado para el valor de reventa.',
      },
    ],
    faqs: [
      { q: '¿Qué grasa debo usar en una mordaza de banco?', a: 'Una grasa de litio de uso general funciona bien en el husillo y en el canal de la corredera. Limpia el exceso para que no atraiga suciedad.' },
      { q: '¿Por qué mi mordaza se siente atascada?', a: 'Normalmente es un canal o un husillo sucio o seco. Limpia, lubrica y gira el manubrio unas cuantas veces: la mayoría de mordazas pegajosas se liberan de inmediato.' },
    ],
    related: [
      { label: 'Mantenimiento de mordazas de banco', href: '/knowledge' },
      { label: 'Ver series de mordazas de banco', href: '/products' },
    ],
  },
  {
    slug: 'pipe-vise-guide',
    title: 'Guía de mordazas para tubos: cadena vs. trípode',
    intro: [
      'Las mordazas para tubos sujetan piezas redondas que las mordazas de boca abierta no pueden agarrar con seguridad. Conoce los dos estilos principales antes de elegir para tu taller u obra.',
    ],
    sections: [
      {
        title: 'Mordazas para tubos de cadena',
        body: 'Montadas en un banco o soporte, envuelven la tubería con una cadena y un mecanismo de husillo para una fuerza de sujeción máxima. Ideales para tubería pesada y uso repetido en taller.',
      },
      {
        title: 'Mordazas para tubos de trípode',
        body: 'Autónomas y portátiles, se montan en cualquier lugar: obra, reparaciones en campo y montaje móvil. Sujetan la tubería con el mismo agarre de boca acanalada en V con una fracción del tiempo de montaje.',
      },
      {
        title: 'Dimensionado de mordazas para tubos',
        body: 'La capacidad se mide por el diámetro de la tubería: las mordazas habituales cubren de 1/4″ a 6″. Ajusta la capacidad a la tubería más grande que tus cuadrillas cortan y roscan normalmente.',
      },
      {
        title: 'Accesorios y reparaciones',
        body: 'Los insertos de boca en V endurecidos y los eslabones de cadena de repuesto mantienen las mordazas para tubos en servicio. Pide repuestos al pedir flotas para que las unidades nunca esperen a la compra.',
      },
    ],
    faqs: [
      { q: '¿Mordaza de cadena o de trípode?', a: 'Elige cadena para talleres fijos que manejan tubería pesada y trípode para portabilidad entre obras: muchas operaciones llevan ambas.' },
      { q: '¿Cómo se evita que la tubería resbale en una mordaza para tubos?', a: 'Las bocas en V endurecidas y acanaladas agarran las piezas redondas con seguridad. Mantén las bocas limpias y la cadena ajustada firmemente contra la tubería.' },
    ],
    related: [
      { label: 'Serie de mordazas para tubos', href: '/products' },
      { label: 'Mordazas para la construcción', href: '/solutions' },
    ],
  },
  {
    slug: 'oem-bench-vise-order-guide',
    title: 'Guía de pedido OEM de mordazas de banco',
    intro: [
      'Pedir mordazas OEM es sencillo cuando conoces el proceso: requisito, especificación, muestra, producción, control de calidad, entrega.',
    ],
    sections: [
      {
        title: 'Empieza por el requisito',
        body: 'Define el ancho de boca, la abertura, la fuerza de sujeción, el material del cuerpo, el acabado, el marcado y el embalaje antes de contactar con una fábrica. Requisitos claros producen mejores primeras cotizaciones.',
      },
      {
        title: 'Congela la especificación',
        body: 'Ambas partes cotizan contra un único documento: dimensiones, materiales, tratamiento térmico, recubrimiento, marcado y embalaje. Los cambios tras la congelación son más lentos y costosos.',
      },
      {
        title: 'Aprueba una muestra física',
        body: 'Una muestra confirma la calidad del mecanizado, la dureza de la boca, el color del acabado, el marcado y el embalaje. Pruébala como la usarán tus clientes antes de aprobar la producción.',
      },
      {
        title: 'Producción, control de calidad y entrega',
        body: 'La producción tarda 25-35 días tras la confirmación del pedido. Las fábricas de confianza verifican la dureza de la boca (58-62 HRC), la fuerza de sujeción y la durabilidad cíclica por lote antes del envío.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el MOQ para mordazas OEM?', a: 'Los modelos estándar arrancan en 50-200 uds. por modelo; los pesados y especiales en 20-50 uds. Combinar modelos en un pedido mejora el precio unitario.' },
      { q: '¿Cuánto tardan las muestras?', a: 'Normalmente 7-14 días, con producción 25-35 días tras la muestra aprobada y el pedido confirmado.' },
      { q: '¿Qué certificaciones debo pedir?', a: 'El marcado CE, la gestión de calidad ISO 9001 y el cumplimiento de materiales RoHS son la base para la UE y la mayoría de mercados de exportación.' },
    ],
    related: [
      { label: 'Fabricación OEM de mordazas de banco', href: '/oem-manufacturing' },
      { label: 'Ver series de mordazas de banco', href: '/products' },
    ],
  },
  {
    slug: 'precision-vise-guide',
    title: 'Mordazas de precisión para mecanizado',
    intro: [
      'Las mordazas de precisión sujetan piezas con tolerancias que las mordazas ordinarias no pueden. Esta guía cubre las mordazas de deslizamiento transversal, de fresado y de máquina para CNC y mecanizado manual.',
    ],
    sections: [
      {
        title: 'El paralelismo es el punto',
        body: 'Las mordazas de precisión están rectificadas para que las bocas queden paralelas a la mesa dentro de 0,001″ (0,025 mm). Esa base determina la repetibilidad de cada pieza que mecanizas.',
      },
      {
        title: 'Mordazas de deslizamiento transversal',
        body: 'Añaden posicionamiento X-Y sin mover la pieza: útiles para patrones de agujeros precisos y segundas operaciones de fresado en una fresadora manual.',
      },
      {
        title: 'Mordazas de fresado y de máquina',
        body: 'Los cuerpos tipo Kurt con mecanismos de doble bloqueo sujetan sin levantamiento, incluso en cortes CNC de alta velocidad. Los tamaños se ajustan a la separación de las ranuras de la mesa, no solo al ancho de boca.',
      },
      {
        title: 'Bocas personalizadas',
        body: 'Las bocas de aluminio blando, con ranura en V y contorneadas protegen las superficies acabadas y acunan piezas irregulares: una personalización OEM habitual en talleres de producción.',
      },
    ],
    faqs: [
      { q: '¿Qué precisión ofrece una mordaza de precisión?', a: 'Las bocas rectificadas de precisión entregan 0,001″ (0,025 mm) de paralelismo con la mesa, verificado por máquinas de medición por coordenadas antes del envío.' },
      { q: '¿Pueden fabricar mordazas de precisión para mi mesa CNC?', a: 'Sí: los fabricantes ajustan las dimensiones de las ranuras en T, los patrones de tornillos y los perfiles de boca a tu máquina y piezas específicas.' },
    ],
    related: [
      { label: 'Serie de mordazas especiales', href: '/products' },
      { label: 'Centro de conocimiento', href: '/knowledge' },
    ],
  },
]