import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

const pageStyles: Record<PageKey, { eyebrow: string; accent: string }> = {
  brand: { eyebrow: 'Brand', accent: 'from-[#f7f1e6] to-[#eadcc8]' },
  products: { eyebrow: 'Products', accent: 'from-[#f9f6f0] to-[#e7dbca]' },
  rd: { eyebrow: 'R&D', accent: 'from-[#f6f2ea] to-[#ddd4c7]' },
  partnership: { eyebrow: 'Partnership', accent: 'from-[#f7efe2] to-[#e3cfb6]' },
  ai: { eyebrow: 'AI Agent', accent: 'from-[#efe8dd] to-[#d9c3a5]' },
  contact: { eyebrow: 'Contact', accent: 'from-[#f8f3ec] to-[#e1d4c6]' },
};

export function SubPage({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = siteContent[locale];
  const style = pageStyles[page];

  const headerMap = {
    brand: { title: t.brandTitle, desc: t.brandDesc, cta: { href: `/${locale}/products`, label: t.primaryCta } },
    products: { title: t.featuredTitle, desc: t.heroDesc, cta: { href: `/${locale}/partnership`, label: t.partnerCta } },
    rd: { title: t.rdTitle, desc: t.pageLead, cta: { href: `/${locale}/contact`, label: t.contactCta } },
    partnership: { title: t.partnerTitle, desc: t.partnerDesc, cta: { href: `/${locale}/contact`, label: t.partnerCta } },
    ai: { title: t.aiTitle, desc: t.aiDesc, cta: { href: `/${locale}/contact`, label: t.aiCta } },
    contact: { title: t.contactTitle, desc: t.contactDesc, cta: { href: `/${locale}/partnership`, label: t.partnerCta } },
  } as const;

  const content = headerMap[page];

  return (
    <SiteShell locale={locale}>
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${style.accent} opacity-60`} />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 md:py-20">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accentDeep">{style.eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{content.desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={content.cta.href} className="rounded-full bg-accentDeep px-6 py-3 text-sm font-medium text-white shadow-soft">
              {content.cta.label}
            </Link>
            <Link href={`/${locale}`} className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">
              GPCLUB Home
            </Link>
          </div>
        </div>
      </section>

      {page === 'products' && (
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-3">
            {t.featuredItems.map((item, index) => (
              <article key={item.name} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft">
                <div className="mb-6 flex aspect-[4/4.5] items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-[#faf8f4] to-[#eee4d7]">
                  <div className={`h-44 w-24 rounded-[1.5rem] shadow-sm ${index === 1 ? 'bg-[#d9d9d9]' : index === 2 ? 'bg-[#d7c2b2]' : 'bg-[#d6b894]'}`} />
                </div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                  <span className="rounded-full bg-sand px-3 py-1">Hydration</span>
                  <span className="rounded-full bg-sand px-3 py-1">Daily Care</span>
                  <span className="rounded-full bg-sand px-3 py-1">Premium</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {page === 'partnership' && (
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Inquiry Form</p>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[0]}</span>
                <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted">GPCLUB Global Partner</div>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[1]}</span>
                <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted">hello@partner.com</div>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[2]}</span>
                <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted">Vietnam</div>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[3]}</span>
                <div className="flex items-center justify-between rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted">
                  <span>Distribution / OEM / Supply</span>
                  <span>▾</span>
                </div>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[4]}</span>
                <div className="min-h-40 rounded-2xl border border-line bg-sand px-4 py-4 text-sm leading-7 text-muted">
                  Please share your company profile, expected order quantity, and target market so GPCLUB can review your request.
                </div>
              </label>
            </div>
            <Link href={`/${locale}/contact`} className="mt-8 inline-flex rounded-full bg-accentDeep px-6 py-3 text-sm font-semibold text-white">
              {t.partnerCta}
            </Link>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Business Scope</p>
            <div className="space-y-4 text-sm leading-7 text-muted">
              <div className="rounded-2xl bg-sand px-5 py-4">Distribution partnership</div>
              <div className="rounded-2xl bg-sand px-5 py-4">Supply and sourcing discussion</div>
              <div className="rounded-2xl bg-sand px-5 py-4">OEM / ODM cooperation</div>
              <div className="rounded-2xl bg-sand px-5 py-4">Regional market expansion</div>
            </div>
          </div>
        </section>
      )}

      {page === 'ai' && (
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#efe7db] p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Capabilities</p>
            <ul className="space-y-4 text-sm leading-7 text-muted">
              {t.aiBullets.map((item) => (
                <li key={item} className="rounded-2xl bg-white/80 px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accentDeep text-sm font-semibold text-white">AI</div>
                <div>
                  <p className="font-medium">GPCLUB Beauty Advisor</p>
                  <p className="text-sm text-muted">Preview conversation</p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-4 py-6">
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-sand px-4 py-3 text-sm leading-7 text-ink">
                {t.aiDesc}
              </div>
              {t.aiExamples.map((item, idx) => (
                <div key={item} className={idx === 1 ? 'ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-accentDeep px-4 py-3 text-sm leading-7 text-white' : 'max-w-[88%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-7 text-muted border border-line'}>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {t.aiExamples.map((item) => (
                <button key={item} type="button" className="rounded-full border border-line bg-sand px-4 py-2 text-sm text-muted">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {page !== 'products' && page !== 'partnership' && page !== 'ai' && (
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div className={`rounded-[2rem] bg-gradient-to-br ${style.accent} p-6 shadow-soft`}>
            <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-accentDeep">Overview</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                {(page === 'brand'
                  ? t.values
                  : page === 'rd'
                    ? t.rdItems
                    : ['Email', 'Business inquiry', 'Distribution request']
                ).map((item) => (
                  <li key={item} className="rounded-xl bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
            <p className="text-sm leading-8 text-muted">{t.pageLead}</p>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
