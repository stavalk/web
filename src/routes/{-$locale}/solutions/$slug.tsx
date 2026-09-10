import { createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { isLocale, defaultLocale, type Locale } from '@/features/i18n/locale'
import type { SolutionPageData } from '@/product/solution-pages'
import { SolutionPage } from '@/components/marketing/solution-page'

export const Route = createFileRoute('/{-$locale}/solutions/$slug')({
  loader: async ({ params }) => {
    const { locale, slug } = params as { locale?: string; slug: string }
    const l = (isLocale(locale) ? locale : defaultLocale) as Locale
    const { getSolutionPage, solutionPath } = await import('@/product/solution-pages')
    const path = solutionPath(slug)
    if (path !== `/solutions/${slug}`) throw redirect({ href: path, statusCode: 301 })
    if (!getSolutionPage(l, slug)) throw notFound()
    return { origin: await getOrigin(), path, page: getSolutionPage(l, slug) as SolutionPageData }
  },
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const { locale } = params as { locale?: string }
    const l = (isLocale(locale) ? locale : defaultLocale) as Locale
    const page = loaderData?.page
    const { meta, links } = localeHead({
      origin,
      locale: l,
      path: loaderData?.path ?? '',
      title: page?.metaTitle ?? '',
      description: page?.metaDescription ?? '',
    })
    return { meta, links }
  },
  component: SolutionDetail,
})

function SolutionDetail() {
  const data = Route.useLoaderData()
  if (!data?.page) return null
  return <SolutionPage page={data.page} path={data.path} />
}