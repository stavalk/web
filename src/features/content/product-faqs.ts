/**
 * Product FAQ pool: product-specific entries + shared fallbacks (≥5 total), localized.
 * Pure module so language drift (e.g. Spanish text on French pages) is node-testable.
 */
import type { ContentProduct } from './types'
import type { Locale } from '@/features/i18n/locale'
import { FACTS, MOQ_SHORT } from '@/product/facts'

export function productFaqs(product: ContentProduct, locale: Locale): { q: string; a: string }[] {
  const specific = product.faqs ?? []
  const pool: { q: string; a: string }[] = locale === 'fr'
    ? [
        {
          q: 'Quel est le minimum de commande pour personnaliser cet étau d\'établi ?',
          a: `Le MOQ de production standard est de ${MOQ_SHORT.standardRun} par modèle approuvé, avec des séries pilotes dès ${MOQ_SHORT.trialStandard} et ${MOQ_SHORT.customMould} pour un nouveau moule sur mesure.`,
        },
        {
          q: 'Combien de temps prennent les échantillons et la production ?',
          a: `Les échantillons sont prêts en ${FACTS.sampleTime} ; la production en série se termine en ${FACTS.leadTime} après confirmation du bon de commande et du dépôt.`,
        },
        {
          q: 'Puis-je modifier la finition, la couleur et le logo ?',
          a: 'Oui — la finition, la couleur de peinture, la gravure du logo, l\'emballage et les accessoires sont personnalisables sur chaque modèle. Partagez votre logo et nous réalisons une preuve visuelle avant la production.',
        },
        {
          q: 'Comment la qualité est-elle contrôlée avant l\'expédition ?',
          a: `Chaque étau passe une checklist d'assemblage de ${FACTS.assemblyChecklist} et un test de ${FACTS.pressureTest} avant le conditionnement ; les unités ne respectant pas les contrôles de force de serrage ou de dureté des mâchoires sont automatiquement écartées.`,
        },
      ]
    : locale === 'es'
      ? [
          {
            q: '¿Cuál es el pedido mínimo para personalizar este tornillo de banco?',
            a: `El MOQ de producción estándar es de ${MOQ_SHORT.standardRun} por modelo aprobado, con lotes piloto desde ${MOQ_SHORT.trialStandard} y ${MOQ_SHORT.customMould} para un nuevo molde a medida.`,
          },
          {
            q: '¿Cuánto tardan las muestras y la producción?',
            a: `Las muestras tardan ${FACTS.sampleTime}; la producción en serie se completa en ${FACTS.leadTime} tras confirmar el pedido y el depósito.`,
          },
          {
            q: '¿Puedo cambiar colores, acabado y el logo?',
            a: 'Sí — el acabado, el color de pintura, el grabado del logo, el embalaje y los accesorios se personalizan en cada modelo. Comparte tu logo y te haremos una prueba visual antes de la producción.',
          },
          {
            q: '¿Cómo se controla la calidad antes del envío?',
            a: `Cada tornillo de banco pasa por una lista de verificación de ${FACTS.assemblyChecklist} y una prueba de ${FACTS.pressureTest} antes de empaquetar; los fallos de apriete o dureza se rechazan automáticamente.`,
          },
        ]
      : [
          {
            q: 'What is the minimum order to customize this bench vise?',
            a: `MOQ is ${MOQ_SHORT.standardRun} per approved model for standard volume production, with pilot runs from ${MOQ_SHORT.trialStandard} and ${MOQ_SHORT.customMould} for a new custom mould.`,
          },
          {
            q: 'How long do samples and production take?',
            a: `Samples are ready in ${FACTS.sampleTime}; batch production completes in ${FACTS.leadTime} after confirmed PO and deposit.`,
          },
          {
            q: 'Can I change finish, color and the logo?',
            a: 'Yes — finish, paint color, engraved logo, packaging and accessories are all customizable on every model. Share your logo and we produce a visual proof before production.',
          },
          {
            q: 'How is quality controlled before shipment?',
            a: `Every vise passes a ${FACTS.assemblyChecklist} assembly checklist and a ${FACTS.pressureTest} before packing; units failing clamping force or jaw hardness checks are auto-rejected.`,
          },
        ]
  return [...specific, ...pool]
}