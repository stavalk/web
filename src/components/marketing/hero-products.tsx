import { ArrowRight } from 'lucide-react'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { useTranslation } from '@/features/i18n/provider'
import { pick, heroProducts } from '@/product/content'
import { SectionHead } from '@/components/marketing/section-head'

/** Home section: the three hero bench vise platforms (6" medium, 6" heavy, 8" heavy). */
export function HeroProducts() {
  const { locale } = useTranslation()
  const c = pick(heroProducts, locale)
  const fl = useLocalizePath()

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.items.map((p) => (
            <a
              key={p.slug}
              href={fl(`/products/${p.slug}`)}
              className="marine-card group flex flex-col overflow-hidden text-current transition-transform hover:-translate-y-0.5"
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="kicker">{p.tag}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{p.tagline}</p>
                <dl className="mt-4 space-y-1.5 text-[13px] leading-snug">
                  <div>
                    <dt className="inline font-bold">{c.specLabel}: </dt>
                    <dd className="inline text-fg-2">{p.spec}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">{c.applicationLabel}: </dt>
                    <dd className="inline text-fg-2">{p.application}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">{c.materialLabel}: </dt>
                    <dd className="inline text-fg-2">{p.material}</dd>
                  </div>
                </dl>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                  {c.cta}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}