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

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-sm font-medium text-ink">{children}</span>;
}

function TextInput({ placeholder, type = 'text' }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-ink outline-none transition placeholder:text-muted focus:border-accent"
    />
  );
}

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

      {page === 'brand' && (
        <>
          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Brand Positioning</p>
              <div className="space-y-4 text-sm leading-7 text-muted">
                <div className="rounded-2xl bg-sand px-5 py-4">Vietnam-based B2B gateway for a Korean headquarters-aligned portfolio</div>
                <div className="rounded-2xl bg-sand px-5 py-4">Focused on distributors, wholesalers, and multinational buyers</div>
                <div className="rounded-2xl bg-sand px-5 py-4">Built around the same product direction as the Korean headquarters</div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Core Categories</p>
              <ul className="space-y-3 text-sm leading-7 text-muted">
                {t.featuredItems.map((item) => (
                  <li key={item.name} className="rounded-xl bg-sand px-4 py-3">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="grid gap-6 md:grid-cols-3">
              {['Korean headquarters portfolio alignment', 'Vietnam market B2B execution', 'Support for multinational buyers'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft">
                  <p className="text-sm leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === 'products' && (
        <>
          <section className="mx-auto max-w-6xl px-6 pt-20">
            <div className="grid gap-4 md:grid-cols-4">
              {['Mask', 'Ampoule', 'Calming', 'Sun Care'].map((item) => (
                <div key={item} className="rounded-2xl border border-line bg-white px-5 py-5 text-sm font-medium shadow-soft">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Portfolio Direction</p>
                  <h2 className="text-3xl font-semibold">Korean headquarters-aligned portfolio for Vietnam B2B</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-muted">
                  GPCLUB structures the product lineup for distributors and multinational buyers by category, use case, and business readiness.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-3">
              {t.featuredItems.map((item, index) => (
                <article key={item.name} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft">
                  <div className="mb-6 flex aspect-[4/4.5] items-center justify-center rounded-[1.5rem] bg-gradient-to-b from-[#faf8f4] to-[#eee4d7]">
                    <div className={`h-44 w-24 rounded-[1.5rem] shadow-sm ${index === 1 ? 'bg-[#d9d9d9]' : index === 2 ? 'bg-[#d7c2b2]' : 'bg-[#d6b894]'}`} />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="rounded-full bg-sand px-3 py-1 text-xs text-muted">Core Line</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-muted">
                    <span className="rounded-full bg-sand px-3 py-1">B2B Ready</span>
                    <span className="rounded-full bg-sand px-3 py-1">Korean Portfolio</span>
                    <span className="rounded-full bg-sand px-3 py-1">Vietnam Market</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Problem-solving Categories</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Hydration & Glow', 'Brightening Care', 'Calming Care', 'Sun Protection', 'Ampoule Focus', 'Mask Pack Portfolio'].map((item) => (
                    <div key={item} className="rounded-2xl bg-sand px-4 py-4 text-sm text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">B2B Fit</p>
                <div className="space-y-4 text-sm leading-7 text-muted">
                  <div className="rounded-2xl bg-sand px-5 py-4">Suitable for distributors seeking Korean product lines in Vietnam</div>
                  <div className="rounded-2xl bg-sand px-5 py-4">Structured for multi-national buyer communication</div>
                  <div className="rounded-2xl bg-sand px-5 py-4">Ready for supply discussion, market selection, and category expansion</div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {page === 'rd' && (
        <>
          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Portfolio Direction</p>
              <ul className="space-y-3 text-sm leading-7 text-muted">
                {t.rdItems.map((item) => (
                  <li key={item} className="rounded-xl bg-sand px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Supply Logic</p>
              <p className="text-sm leading-8 text-muted">GPCLUB positions the Korean headquarters-aligned product portfolio for business use in Vietnam, with an emphasis on market-fit categories, partner communication, and scalable supply discussions.</p>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="grid gap-6 md:grid-cols-3">
              {['Category-led portfolio strategy', 'Business-oriented portfolio communication', 'Vietnam market-ready supply discussion'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft">
                  <p className="text-sm leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {page === 'partnership' && (
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
          <form className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Inquiry Form</p>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <FieldLabel>{t.partnerFields[0]}</FieldLabel>
                <TextInput placeholder="GPCLUB Global Partner" />
              </label>
              <label className="block">
                <FieldLabel>{t.partnerFields[1]}</FieldLabel>
                <TextInput type="email" placeholder="hello@partner.com" />
              </label>
              <label className="block">
                <FieldLabel>{t.partnerFields[2]}</FieldLabel>
                <TextInput placeholder="Vietnam" />
              </label>
              <label className="block">
                <FieldLabel>{t.partnerFields[3]}</FieldLabel>
                <select className="w-full rounded-2xl border border-line bg-sand px-4 py-4 text-sm text-ink outline-none transition focus:border-accent">
                  <option>Distribution</option>
                  <option>Supply</option>
                  <option>OEM / ODM</option>
                  <option>Wholesale</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <FieldLabel>{t.partnerFields[4]}</FieldLabel>
                <textarea
                  placeholder="Please share your company profile, expected order quantity, and target market so GPCLUB can review your request."
                  className="min-h-40 w-full rounded-2xl border border-line bg-sand px-4 py-4 text-sm leading-7 text-ink outline-none transition placeholder:text-muted focus:border-accent"
                />
              </label>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button type="submit" className="inline-flex rounded-full bg-accentDeep px-6 py-3 text-sm font-semibold text-white shadow-soft">
                {t.partnerCta}
              </button>
              <p className="text-sm text-muted">Business partnership · distribution · supply request</p>
            </div>
          </form>

          <div className="rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Business Scope</p>
            <div className="space-y-4 text-sm leading-7 text-muted">
              <div className="rounded-2xl bg-sand px-5 py-4">Distribution partnership in Vietnam</div>
              <div className="rounded-2xl bg-sand px-5 py-4">Supply and sourcing discussion</div>
              <div className="rounded-2xl bg-sand px-5 py-4">OEM / ODM cooperation</div>
              <div className="rounded-2xl bg-sand px-5 py-4">Multi-national buyer support</div>
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

      {page === 'contact' && (
        <>
          <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Contact Channels</p>
              <div className="space-y-4 text-sm leading-7 text-muted">
                <div className="rounded-2xl bg-sand px-5 py-4">Product inquiry</div>
                <div className="rounded-2xl bg-sand px-5 py-4">Distribution partnership</div>
                <div className="rounded-2xl bg-sand px-5 py-4">Supply discussion</div>
                <div className="rounded-2xl bg-sand px-5 py-4">Multi-national buyer support</div>
              </div>
            </div>
            <form className="rounded-[2rem] bg-white p-8 shadow-soft md:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Send Inquiry</p>
              <div className="space-y-5">
                <label className="block">
                  <FieldLabel>Name / Company</FieldLabel>
                  <TextInput placeholder="GPCLUB Partner" />
                </label>
                <label className="block">
                  <FieldLabel>Email</FieldLabel>
                  <TextInput type="email" placeholder="contact@example.com" />
                </label>
                <label className="block">
                  <FieldLabel>Inquiry</FieldLabel>
                  <textarea
                    placeholder="Tell us what you need help with."
                    className="min-h-36 w-full rounded-2xl border border-line bg-sand px-4 py-4 text-sm leading-7 text-ink outline-none transition placeholder:text-muted focus:border-accent"
                  />
                </label>
                <button type="submit" className="inline-flex rounded-full bg-accentDeep px-6 py-3 text-sm font-semibold text-white shadow-soft">
                  {t.contactCta}
                </button>
              </div>
            </form>
          </section>

          <section className="mx-auto max-w-6xl px-6 pb-20">
            <div className="grid gap-6 md:grid-cols-3">
              {['General inquiry', 'Distribution / wholesale', 'Supply and multi-national buyer communication'].map((item) => (
                <div key={item} className="rounded-[2rem] border border-line bg-white p-6 shadow-soft">
                  <p className="text-sm leading-7 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </SiteShell>
  );
}
