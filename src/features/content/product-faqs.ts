/**
 * Product FAQ pool: product-specific entries + shared fallbacks (≥5 total), localized.
 * Answers are self-contained per language (no English FACTS/MOQ fragments) so fr/es
 * pages never mix English words into the Q&A. Pure module => node-testable.
 */
import type { ContentProduct } from './types'
import type { Locale } from '@/features/i18n/locale'

const POOLS: Partial<Record<Locale, { q: string; a: string }[]>> = {
  fr: [
    {
      q: 'Quel est le minimum de commande pour personnaliser cet étau d\'établi ?',
      a: 'Le MOQ de production standard est de 90–100+ pièces par configuration approuvée, avec des séries pilotes dès 20–50 pièces et 90–100+ pièces pour un nouveau moule sur mesure (outillage dédié, +15–20 jours).',
    },
    {
      q: 'Combien de temps prennent les échantillons et la production ?',
      a: 'Les échantillons sont prêts en 7–12 jours ; la production en série se termine en 20–30 jours après confirmation du bon de commande et du dépôt.',
    },
    {
      q: 'Puis-je modifier la finition, la couleur et le logo ?',
      a: 'Oui — la finition, la couleur de peinture, la gravure du logo, l\'emballage et les accessoires sont personnalisables sur chaque modèle. Partagez votre logo et nous réalisons une preuve visuelle avant la production.',
    },
    {
      q: 'Comment la qualité est-elle contrôlée avant l\'expédition ?',
      a: 'Chaque étau passe une liste de contrôle d\'assemblage en 100 points et un test de durabilité de 10 000+ cycles avant le conditionnement ; les unités ne respectant pas les contrôles de force de serrage ou de dureté des mâchoires sont automatiquement écartées.',
    },
  ],
  es: [
    {
      q: '¿Cuál es el pedido mínimo para personalizar este tornillo de banco?',
      a: 'El MOQ de producción estándar es de 90–100+ unidades por configuración aprobada, con lotes piloto desde 20–50 unidades y 90–100+ unidades para un nuevo molde a medida (herramienta dedicada, +15–20 días).',
    },
    {
      q: '¿Cuánto tardan las muestras y la producción?',
      a: 'Las muestras están listas en 7–12 días; la producción en serie se completa en 20–30 días tras confirmar el pedido y el depósito.',
    },
    {
      q: '¿Puedo cambiar colores, acabado y el logo?',
      a: 'Sí — el acabado, el color de pintura, el grabado del logo, el embalaje y los accesorios se personalizan en cada modelo. Comparte tu logo y te haremos una prueba visual antes de la producción.',
    },
    {
      q: '¿Cómo se controla la calidad antes del envío?',
      a: 'Cada tornillo de banco pasa por una lista de verificación de 100 puntos y una prueba de durabilidad de más de 10 000 ciclos antes de empaquetar; los fallos de fuerza de apriete o de dureza de las mordazas se rechazan automáticamente.',
    },
  ],
  en: [
    {
      q: 'What is the minimum order to customize this bench vise?',
      a: 'MOQ is 90–100+ pieces per approved configuration for standard volume production, with pilot runs from 20–50 pieces and 90–100+ pieces for a new custom mould (dedicated tooling, +15–20 days).',
    },
    {
      q: 'How long do samples and production take?',
      a: 'Samples are ready in 7–12 days; batch production completes in 20–30 days after confirmed PO and deposit.',
    },
    {
      q: 'Can I change finish, color and the logo?',
      a: 'Yes — finish, paint color, engraved logo, packaging and accessories are all customizable on every model. Share your logo and we produce a visual proof before production.',
    },
    {
      q: 'How is quality controlled before shipment?',
      a: 'Every vise passes a 100-point assembly checklist and a 10,000+ cycle durability test before packing; units failing clamping force or jaw hardness checks are auto-rejected.',
    },
  ],
  de: undefined, it: undefined, pt: undefined, nl: undefined, pl: undefined, cs: undefined, sv: undefined, da: undefined, fi: undefined, no: undefined,
  ja: undefined, ko: undefined, 'zh-CN': undefined, 'zh-TW': undefined, vi: undefined, th: undefined, id: undefined, tr: undefined, ar: undefined,
}

export function productFaqs(product: ContentProduct, locale: Locale): { q: string; a: string }[] {
  const specific = product.faqs ?? []
  const pool = POOLS[locale] ?? POOLS.en!
  return [...specific, ...pool]
}