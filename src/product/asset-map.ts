/**
 * Product-specific asset configuration — legacy CDN prefix, R2 key prefix,
 * and missing-image fallback map.
 *
 * The framework's assetUrl() function consumes these values to rewrite
 * legacy CDN hotlinks onto the R2-backed CDN. When deploying a new product,
 * replace the prefix and map below with the new brand's asset structure.
 */

export const ASSET_CDN_PREFIX = 'images/benchvise/'

export const ASSET_LEGACY_SUBDIR = 'stavalk/'

export const MISSING_IMAGE_MAP: Record<string, string> = {
  'certifications/certifications-hero.webp': 'factory/stavalk-factory-building.webp',
  'factory/design-discussion.webp': 'factory/stavalk-design-discussion.webp',
  'factory/factory-aerial-1.webp': 'factory/stavalk-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/stavalk-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'news/dealers.webp': 'news/stavalk-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/stavalk-production-department.webp',
  'news/outdoor.webp': 'news/stavalk-outdoor-events.webp',
  'news/quality.webp': 'news/stavalk-quality-news.webp',
  'news/supply-chain.webp': 'news/stavalk-supply-chain.webp',
  'partners/partners-hero.webp': 'team/stavalk-meeting-overseas.webp',
  'products/accessories/oar-pump-1.webp': 'products/stavalk-accessories-product.webp',
  'products/benchvise-series.webp': 'products/stavalk-benchvise-collection.webp',
  'use-cases/workshop.webp': 'use-cases/stavalk-workshop-use-case.webp',
  'use-cases/industrial.webp': 'use-cases/stavalk-industrial-use-case.webp',
}
