/**
 * Product-specific route configuration for the content loader.
 *
 * SHADOWED_PATHS: route paths owned by static route handlers; registry
 * entries under these paths are never rendered from the content system.
 *
 * EXTRA_PATHS: dedicated-route pages served outside the registry,
 * mapping URL path → YAML slug.
 *
 * When deploying a new product, replace these with the new site's
 * route structure. The loader mechanism itself is framework-level.
 */

import { ENTITY_PAGE_PATH } from '@/config/navigation'

export const SHADOWED_PATHS: Set<string> = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/terms', '/privacy',
  '/projects', '/knowledge',
  ENTITY_PAGE_PATH,
])

export const EXTRA_PATHS: Record<string, string> = {
  '/oem-odm': 'oem-manufacturing',
  '/oem-manufacturing': 'oem-manufacturing',
  '/odm-development': 'odm-development',
  '/product-development': 'product-development',
  '/oem-odm-private-label-comparison': 'oem-odm-private-label-comparison',
  '/oem-onboarding-guide': 'oem-onboarding-guide',
  '/factory-audit-checklist': 'factory-audit-checklist',
  '/about/identity': 'about-identity',
}