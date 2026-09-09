export interface GlossaryEntry {
  term: string
  short: string
  locale: string
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: 'OEM', short: 'Original Equipment Manufacturer — we manufacture to your approved specification; you own the design, tooling and intellectual property.', locale: 'en' },
  { term: 'ODM', short: 'Original Design Manufacturer — our engineering team develops the vise from your brief (concept, performance target or model adaptation); you approve before production.', locale: 'en' },
  { term: 'Private label', short: 'Your brand, finish and packaging on an existing validated model — no tooling development, no structural changes. Fastest route from concept to delivery.', locale: 'en' },
  { term: 'Co-branding', short: 'Small-batch production (5–10 pcs) applying your logo to an existing model with minimal customization.', locale: 'en' },
  { term: 'Gray cast iron', short: 'HT200/HT250 gray cast iron used for vise bodies and bases — strong under compression, stable and economical for bench vises.', locale: 'en' },
  { term: 'Forged carbon steel', short: '45# forged carbon steel used for spindles and handles, offering high tensile strength and toughness.', locale: 'en' },
  { term: 'Jaw steel', short: 'GCr15 or Cr12MoV steel used for hardened jaws, quenched and tempered to 58–62 HRC for wear resistance.', locale: 'en' },
  { term: 'Clamping force', short: 'The clamping force a vise delivers to the workpiece — measured directly on load test, targeting 2,000–5,000 lbs across the series.', locale: 'en' },
  { term: 'Swivel base', short: 'A 360° rotating base that lets the vise turn on the bench; lockable for fixed-angle work.', locale: 'en' },
  { term: 'Salt-spray test', short: '48-hour salt-spray testing that validates the corrosion resistance of spray, powder-coat or Parkerizing finishes.', locale: 'en' },
  { term: 'Cycle durability test', short: 'A 10,000+ cycle open–close test that validates spindle and slide wear over the vise lifetime.', locale: 'en' },
  { term: 'Assembly checklist', short: 'A 100-point final assembly checklist signed off before packing, catching clamping force and jaw hardness failures.', locale: 'en' },
  { term: 'Golden sample', short: 'The approved reference sample that sets the standard for mass production. All subsequent vises are compared to this benchmark.', locale: 'en' },
  { term: 'MOQ', short: 'Minimum Order Quantity — confirmed after specification review. Tiered: 5–10 co-branding, 20–50 pilot, 90–100+ standard volume per approved configuration.', locale: 'en' },

  { term: 'OEM', short: 'Fabricante de Equipo Original — fabricamos según tu especificación aprobada; tú eres propietario del diseño, el utillaje y la propiedad intelectual.', locale: 'es' },
  { term: 'ODM', short: 'Fabricante de Diseño Original — nuestro equipo de ingeniería desarrolla el tornillo a partir de tu brief (concepto, objetivo de rendimiento o adaptación de modelo); tú apruebas antes de la producción.', locale: 'es' },
  { term: 'Marca privada', short: 'Tu marca, acabado y embalaje sobre un modelo validado existente — sin desarrollo de utillaje, sin cambios estructurales. La vía más rápida del concepto a la entrega.', locale: 'es' },
  { term: 'Hierro fundido gris', short: 'Hierro fundido gris HT200/HT250 usado en cuerpos y bases de tornillos — resistente a la compresión, estable y económico.', locale: 'es' },
  { term: 'Acero al carbono forjado', short: 'Acero al carbono forjado 45# usado en husillos y manijas, con alta resistencia a la tracción y tenacidad.', locale: 'es' },
  { term: 'Acero de mordaza', short: 'Acero GCr15 o Cr12MoV usado en mordazas endurecidas, templadas y revenidas a 58–62 HRC.', locale: 'es' },
  { term: 'Fuerza de sujeción', short: 'Fuerza que ejerce el tornillo sobre la pieza, medida directamente en prueba de carga, con objetivo de 2.000–5.000 lbs según la serie.', locale: 'es' },
  { term: 'MOQ', short: 'Cantidad Mínima de Pedido — el menor número de unidades aceptadas por tirada de producción. Escalonado: 5–10 co-branding, 20–50 piloto, 90–100+ volumen.', locale: 'es' },
]