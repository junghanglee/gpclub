import Link from 'next/link';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <SiteShell locale={locale}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,179,140,0.18),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(139,115,85,0.12),_transparent_30%)]" />
        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-16 md:grid-cols-[1fr_0.95fr] md:items-center md:py-24">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dfd2c1] bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-accentDeep backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accentDeep" />
              {t.heroEyebrow}
            </div>
            <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.05] md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted md:text-xl">{t.heroDesc}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${locale}/products`} className="rounded-full bg-accentDeep px-7 py-3.5 text-sm font-medium text-white shadow-soft transition hover:-translate-y-0.5">
                {t.primaryCta}
              </Link>
              <Link href={`/${locale}/brand`} className="rounded-full border border-line bg-white px-7 py-3.5 text-sm font-medium shadow-sm transition hover:-translate-y-0.5">
                {t.secondaryCta}
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
              {t.values.map((value) => (
                <div key={value} className="rounded-2xl border border-white/70 bg-white/80 px-4 py-4 text-sm font-medium text-ink shadow-sm backdrop-blur">
                  {value}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-8 top-10 hidden h-32 w-32 rounded-full bg-[#e8dbc8] blur-3xl md:block" />
            <div className="absolute -right-10 bottom-6 hidden h-36 w-36 rounded-full bg-[#d9c2a2] blur-3xl md:block" />

            <div className="relative rounded-[2.25rem] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
              <div className="rounded-[1.8rem] border border-line bg-gradient-to-b from-[#fcfbf8] via-[#f4ede4] to-[#e8dccd] p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-muted">GPCLUB Signature</p>
                    <p className="mt-2 text-sm text-muted">Soft luxury skincare concept</p>
                  </div>
                  <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-accentDeep">
                    New Season
                  </div>
                </div>

                <div className="mt-10 grid grid-cols-[0.7fr_1.3fr] gap-6">
                  <div className="flex items-end">
                    <div className="h-48 w-full rounded-[2rem] bg-gradient-to-b from-[#d5b691] to-[#8b7355] shadow-[0_20px_50px_rgba(91,70,45,0.18)]" />
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[1.4rem] bg-white/80 p-4 shadow-sm">
                      <p className="text-xs uppercase tracking-[0.25em] text-muted">Featured</p>
                      <p className="mt-2 text-lg font-semibold">Premium skincare for modern global beauty</p>
                    </div>
                    <div className="rounded-[1.4rem] bg-[#f8f3ec] p-4 shadow-sm">
                      <p className="text-sm leading-7 text-muted">
                        Clean formulations, refined visuals, and elegant brand communication designed for both customers and partners.
                      </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-4 text-sm text-muted shadow-sm">Hydrating care</div>
                      <div className="rounded-[1.4rem] border border-white/70 bg-white/70 p-4 text-sm text-muted shadow-sm">Global-ready branding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Brand Story</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{t.brandTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{t.brandDesc}</p>
        </div>
        <div className="grid gap-4">
          {t.values.map((value) => (
            <div key={value} className="rounded-3xl border border-line bg-white px-5 py-6 text-sm font-medium shadow-soft">
              {value}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Products</p>
            <h2 className="text-3xl font-semibold md:text-4xl">{t.featuredTitle}</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.featuredItems.map((item, index) => (
            <article key={item.name} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <div className="mb-6 flex aspect-[4/4.5] items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-[#faf8f4] to-[#eee4d7]">
                <div className={`h-40 w-24 rounded-[1.5rem] shadow-sm ${index === 1 ? 'bg-[#d9d9d9]' : index === 2 ? 'bg-[#d7c2b2]' : 'bg-[#d6b894]'}`} />
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">R&D</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{t.rdTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.rdItems.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-line bg-sand px-6 py-8">
                <div className="mb-4 h-10 w-10 rounded-full bg-accent/30" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
          <div className="absolute right-6 top-6 rounded-full border border-[#d9c7ad] bg-[#f8f2ea] px-3 py-1 text-xs font-medium text-accentDeep">
            B2B Inquiry Form
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Partnership</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{t.partnerTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted">{t.partnerDesc}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[0]}</span>
              <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted shadow-sm">GPCLUB Vietnam Distribution Co.</div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[1]}</span>
              <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted shadow-sm">partner@gpclub.vn</div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[2]}</span>
              <div className="rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted shadow-sm">Vietnam</div>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[3]}</span>
              <div className="flex items-center justify-between rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-muted shadow-sm">
                <span>Distribution / Supply</span>
                <span>▾</span>
              </div>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-sm font-medium text-ink">{t.partnerFields[4]}</span>
              <div className="min-h-36 rounded-2xl border border-line bg-sand px-4 py-4 text-sm leading-7 text-muted shadow-sm">
                We are interested in discussing distribution opportunities, minimum order quantities, and lead times for the Vietnam market.
              </div>
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/partnership`} className="inline-flex rounded-full bg-accentDeep px-6 py-3 text-sm font-semibold text-white">
              {t.partnerCta}
            </Link>
            <p className="text-sm text-muted">Business partnership · distribution · supply request</p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#efe7db] p-8 shadow-soft md:p-10">
          <div className="absolute right-6 top-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium text-accentDeep">
            Live Assistant Preview
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">AI Agent</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{t.aiTitle}</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-muted">{t.aiDesc}</p>

          <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-soft backdrop-blur">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accentDeep text-sm font-semibold text-white">
                  AI
                </div>
                <div>
                  <p className="font-medium">GPCLUB Beauty Advisor</p>
                  <p className="text-sm text-muted">Multi-language consultation assistant</p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4 py-5">
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-[#f6f1e8] px-4 py-3 text-sm leading-7 text-ink">
                {t.aiDesc}
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-accentDeep px-4 py-3 text-sm leading-7 text-white">
                {t.aiExamples[0]}
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-7 text-muted shadow-sm">
                {t.aiBullets[0]} · {t.aiBullets[1]}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Quick prompts</p>
              <div className="flex flex-wrap gap-3">
                {t.aiExamples.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-ink"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/ai`} className="inline-flex rounded-full bg-accentDeep px-6 py-3 text-sm font-semibold text-white">
              {t.aiCta}
            </Link>
            <p className="text-sm text-muted">24/7 multilingual guidance · product discovery · inquiry routing</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">News</p>
        <h2 className="text-3xl font-semibold md:text-4xl">{t.newsTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft transition hover:-translate-y-1">
              <div className="h-56 bg-gradient-to-br from-[#f1ece3] to-[#d8c6af]" />
              <div className="p-6">
                <p className="text-sm text-muted">2026.04</p>
                <h3 className="mt-3 text-lg font-semibold">GPCLUB Brand Update #{item}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2rem] bg-accentDeep px-8 py-12 text-white md:px-12 md:py-14">
          <p className="text-sm uppercase tracking-[0.25em] text-white/70">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{t.contactTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/80">{t.contactDesc}</p>
          <Link href={`/${locale}/contact`} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-accentDeep">
            {t.contactCta}
          </Link>
        </div>
      </section>

      <Link
        href={`/${locale}/ai`}
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 rounded-full bg-accentDeep px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">AI</span>
        Start Consultation
      </Link>
    </SiteShell>
  );
}
