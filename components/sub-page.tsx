import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

const pageStyles: Record<PageKey, { eyebrow: string; accent: string }> = {
  brand: { eyebrow: 'Brand', accent: 'from-[#f1e7d9] via-[#f8f3eb] to-[#e2cfb6]' },
  products: { eyebrow: 'Products', accent: 'from-[#eee4d5] via-[#f8f2e8] to-[#dcc4a6]' },
  rd: { eyebrow: 'R&D', accent: 'from-[#eee8de] via-[#f6f2eb] to-[#d9ccb9]' },
  partnership: { eyebrow: 'Partnership', accent: 'from-[#f3e8d8] via-[#f9f2e6] to-[#e4cfb0]' },
  ai: { eyebrow: 'AI Agent', accent: 'from-[#e9e0d3] via-[#f3ece2] to-[#d8c0a2]' },
  contact: { eyebrow: 'Contact', accent: 'from-[#f1e8db] via-[#f8f3eb] to-[#e2d1be]' },
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
      <section className="relative overflow-hidden border-b border-black/5">
        <div className={`absolute inset-0 bg-gradient-to-br ${style.accent}`} />
        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-14 md:pb-16 md:pt-16">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#7d6a4a]">{style.eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#111] md:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f5f5f] md:text-lg">{content.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={content.cta.href} className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
              {content.cta.label}
            </Link>
            <Link href={`/${locale}`} className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#222]">
              GPCLUB Home
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[#6f6f6f]">
            <span className="rounded-full bg-white/70 px-3 py-1.5">Korean HQ Portfolio</span>
            <span className="rounded-full bg-white/70 px-3 py-1.5">Vietnam B2B</span>
            <span className="rounded-full bg-white/70 px-3 py-1.5">Multi-national Buyers</span>
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
                <article key={item.name} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-soft">
                  <div className="relative">
                    <img
                      src={index === 0 ? '/images/samples/hero-pore-serum.svg' : index === 1 ? '/images/samples/hero-hydrogel-mask.svg' : '/images/samples/hero-sun-care.svg'}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#111] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                      {index === 0 ? 'BEST' : index === 1 ? 'SIGNATURE' : 'SEASONAL'}
                    </span>
                  </div>
                  <div className="p-6">
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
        <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[2rem] bg-[#efe7db] p-8 shadow-soft md:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-accentDeep">Capabilities</p>
            <ul className="space-y-4 text-sm leading-7 text-muted">
              {t.aiBullets.map((item) => (
                <li key={item} className="rounded-2xl bg-white/80 px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.5rem] border border-white/70 bg-white/70 p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Routing</p>
              <div className="space-y-3 text-sm text-muted">
                <div className="rounded-xl bg-sand px-4 py-3">Product guidance → suitable line recommendation</div>
                <div className="rounded-xl bg-sand px-4 py-3">Business inquiry → partnership / supply form handoff</div>
                <div className="rounded-xl bg-sand px-4 py-3">Language support → multilingual response flow</div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-line bg-white p-8 shadow-soft md:p-10">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accentDeep text-sm font-semibold text-white">AI</div>
                <div>
                  <p className="font-medium">GPCLUB Beauty Advisor</p>
                  <p className="text-sm text-muted">Interactive consultation preview</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                Online
              </div>
            </div>

            <div className="space-y-4 py-6">
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-sand px-4 py-3 text-sm leading-7 text-ink">
                {t.aiDesc}
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-accentDeep px-4 py-3 text-sm leading-7 text-white">
                {t.aiExamples[0]}
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-tl-md border border-line bg-white px-4 py-3 text-sm leading-7 text-muted">
                Based on your needs, I can guide you to mask, calming, brightening, or sun care lines and connect you to the partnership team if needed.
              </div>
              <div className="ml-auto max-w-[76%] rounded-2xl rounded-tr-md bg-[#f6f1e8] px-4 py-3 text-sm leading-7 text-ink">
                {t.aiExamples[1]}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">Suggested prompts</p>
              <div className="flex flex-wrap gap-3">
                {t.aiExamples.map((item) => (
                  <button key={item} type="button" className="rounded-full border border-line bg-sand px-4 py-2 text-sm text-muted transition hover:border-accent hover:text-ink">
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <form className="mt-6 flex items-center gap-3 rounded-[1.4rem] border border-line bg-sand px-4 py-3">
              <input
                type="text"
                placeholder="Type your question here..."
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
              />
              <button type="submit" className="rounded-full bg-accentDeep px-4 py-2 text-sm font-semibold text-white">
                Send
              </button>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/contact`} className="inline-flex rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-ink">
                Connect to team
              </Link>
              <p className="text-sm text-muted">If the inquiry is business-related, the AI can route it to GPCLUB’s partnership flow.</p>
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
