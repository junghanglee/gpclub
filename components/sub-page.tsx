import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

const pageStyles: Record<PageKey, { eyebrow: string; accent: string; chip: string }> = {
  brand: { eyebrow: 'Brand', accent: 'from-[#f7f0e6] via-[#fbf8f3] to-[#e7dac9]', chip: 'Positioning' },
  products: { eyebrow: 'Products', accent: 'from-[#f5eee3] via-[#fbf8f2] to-[#e5d6c2]', chip: 'Portfolio' },
  rd: { eyebrow: 'R&D', accent: 'from-[#f3eee7] via-[#faf7f3] to-[#e4d9cc]', chip: 'Supply View' },
  partnership: { eyebrow: 'Partnership', accent: 'from-[#f5efe6] via-[#fbf8f2] to-[#e6d8c8]', chip: 'Inquiry' },
  ai: { eyebrow: 'AI Advisor', accent: 'from-[#f0ebe3] via-[#f8f5f1] to-[#ddd4c8]', chip: 'AI Flow' },
  contact: { eyebrow: 'Contact', accent: 'from-[#f6efe7] via-[#fbf8f3] to-[#e6dacf]', chip: 'Contact Flow' },
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.14em] text-[#4d4d4d]">{children}</span>;
}

function TextInput({ placeholder, type = 'text' }: { placeholder: string; type?: string }) {
  return <input type={type} placeholder={placeholder} className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none" />;
}

function Hero({
  eyebrow,
  chip,
  title,
  desc,
  accent,
  locale,
  primaryHref,
  primaryLabel,
}: {
  eyebrow: string;
  chip: string;
  title: string;
  desc: string;
  accent: string;
  locale: Locale;
  primaryHref: string;
  primaryLabel: string;
}) {
  return (
    <section className="border-b border-black/5 bg-[#f6f3ee]">
      <div className="mx-auto max-w-[1400px] px-6 py-6 md:py-8">
        <div className={`overflow-hidden rounded-[2.2rem] bg-gradient-to-r ${accent}`}>
          <div className="grid min-h-[520px] items-stretch xl:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-14 xl:px-16 xl:py-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#7d7469]">{eyebrow}</p>
                <div className="mt-8 inline-flex rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#6a6258]">{chip}</div>
                <h1 className="mt-7 max-w-[760px] text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-[#111] md:text-7xl xl:text-[86px]">{title}</h1>
                <p className="mt-7 max-w-[620px] text-sm leading-8 text-[#666] md:text-[15px]">{desc}</p>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={primaryHref} className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                  {primaryLabel}
                </Link>
                <Link href={`/${locale}`} className="inline-flex rounded-full border border-black/10 bg-white/88 px-6 py-3 text-sm font-semibold text-[#111]">
                  GPCLUB Home
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden border-l border-white/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_26%,rgba(255,255,255,0.94),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.34))]" />
              <div className="grid h-full gap-4 p-8 md:grid-cols-2 md:p-10 xl:p-12">
                {['Korean HQ Portfolio', 'Vietnam B2B', 'Buyer Review Ready', 'Clinical Premium Tone'].map((item, index) => (
                  <div key={item} className={`${index === 0 ? 'md:col-span-2' : ''} flex min-h-[120px] items-end rounded-[1.6rem] border border-white/70 bg-white/60 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] backdrop-blur-md`}>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#5f584f]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ label, title, desc }: { label: string; title: string; desc: string }) {
  return (
    <article className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition hover:-translate-y-[2px] hover:shadow-[0_22px_48px_rgba(0,0,0,0.06)] md:p-10">
      <p className="text-[11px] uppercase tracking-[0.26em] text-[#9b927f]">{label}</p>
      <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{title}</h3>
      <p className="mt-5 text-sm leading-8 text-[#666]">{desc}</p>
    </article>
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
      <Hero eyebrow={style.eyebrow} chip={style.chip} title={content.title} desc={content.desc} accent={style.accent} locale={locale} primaryHref={content.cta.href} primaryLabel={content.cta.label} />

      {page === 'brand' && (
        <>
          <section className="bg-white py-24">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Brand Structure</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">Positioning, hierarchy, and buyer-facing clarity</h2>
                </div>
                <p className="max-w-[520px] text-sm leading-8 text-[#666]">The brand page should explain why GPCLUB feels credible, connected to headquarters, and ready for business conversation.</p>
              </div>
              <div className="grid gap-6 xl:grid-cols-3">
                <InfoCard label="01" title="Vietnam-facing portfolio gateway" desc="GPCLUB is framed as a market-ready business gateway for Korean headquarters-aligned beauty lines entering Vietnam and buyer-facing review conversations." />
                <InfoCard label="02" title="Built for buyer confidence" desc="The page structure favors clarity, editing, and hierarchy so distributors and wholesale partners can understand the portfolio without retail-style noise." />
                <InfoCard label="03" title="Aligned with headquarters direction" desc="Brand language, category framing, and product hierarchy are designed to suggest continuity with a Korean headquarters portfolio system." />
              </div>
            </div>
          </section>

          <section className="bg-[#f7f4ef] py-24">
            <div className="mx-auto grid max-w-[1400px] gap-8 px-6 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-black/6 bg-[#171717] p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10 xl:p-12">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">Brand View</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">A cleaner portfolio system, rebuilt for B2B trust.</h2>
                <p className="mt-6 text-sm leading-8 text-white/72">GPCLUB should feel edited, credible, and portfolio-led rather than generic or distributor-template driven.</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {t.featuredItems.map((item, index) => (
                  <article key={item.name} className={`${index === 0 ? 'md:col-span-2' : ''} rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)] md:p-10`}>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#9a927f]">Category</p>
                        <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{item.name}</h3>
                      </div>
                      <Link href={`/${locale}/products`} className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111]">
                        View Line
                      </Link>
                    </div>
                    <p className="mt-4 text-sm leading-8 text-[#666]">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {page === 'products' && (
        <>
          <section className="bg-white py-24">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Product Portfolio</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">A cleaner product structure for distributor review and buyer selection</h2>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <p className="max-w-[520px] text-sm leading-8 text-[#666]">Campaign visuals and product cards are structured to carry the same story from first impression into shortlist review.</p>
                  <div className="flex flex-wrap gap-2">
                    {['Mask', 'Ampoule', 'Calming', 'Sun Care'].map((item) => (
                      <div key={item} className="rounded-full border border-black/8 bg-white px-4 py-2 text-[12px] uppercase tracking-[0.14em] text-[#555]">{item}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-3">
                {t.featuredItems.map((item, index) => (
                  <article key={item.name} className={`${index === 0 ? 'xl:col-span-2' : ''} overflow-hidden rounded-[2rem] border border-black/6 bg-[#fbfaf8] shadow-[0_18px_50px_rgba(0,0,0,0.04)]`}>
                    <div className={`grid ${index === 0 ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
                      <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(180deg,#f6f1e8_0%,#f1ebe1_100%)]">
                        <img src={index === 0 ? '/images/products/serum-dropper.jpg' : index === 1 ? '/images/products/mask-boxes-white.jpg' : '/images/products/sun-cream-tubes.jpg'} alt={item.name} className="h-full w-full object-cover" />
                        <span className="absolute left-6 top-6 rounded-full bg-[#111] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{index === 0 ? 'BEST' : index === 1 ? 'SIGNATURE' : 'SEASONAL'}</span>
                      </div>
                      <div className="flex flex-col justify-between p-8 md:p-10 xl:p-12">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#9d9589]">Campaign-linked Line</p>
                          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{item.name}</h3>
                          <p className="mt-5 max-w-[420px] text-sm leading-8 text-[#666]">{item.desc}</p>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {['Distributor Review', 'Korean Portfolio', 'Vietnam Market'].map((chip) => (
                              <span key={chip} className="rounded-full border border-black/8 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#7b746a]">{chip}</span>
                            ))}
                          </div>
                          <Link href={`/${locale}/partnership`} className="inline-flex rounded-full bg-[#111] px-5 py-3 text-sm font-semibold text-white">
                            {t.partnerCta}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f7f4ef] py-24">
            <div className="mx-auto grid max-w-[1400px] gap-6 px-6 xl:grid-cols-2">
              <InfoCard label="Category Logic" title="Commercially legible category design" desc="Hydration, brightening, calming, sun care, and mask-led proposals are organized for quicker buyer reading and shorter explanation." />
              <InfoCard label="B2B Fit" title="Presentation designed for buyer review" desc="The layout supports product review, market-fit discussion, and first-stage supply communication in the same cleaner visual language used on the homepage." />
            </div>
          </section>
        </>
      )}

      {page === 'rd' && (
        <>
          <section className="bg-white py-24">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Supply View</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">Strong categories, clear supply-facing logic</h2>
                </div>
                <p className="max-w-[520px] text-sm leading-8 text-[#666]">This section explains how the portfolio is selected, structured, and discussed for supply-facing review rather than generic R&D display.</p>
              </div>

              <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[2rem] border border-black/6 bg-[#171717] p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10 xl:p-12">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">R&D / Supply View</p>
                  <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Strong categories, clear supply-facing logic</h2>
                  <p className="mt-6 text-sm leading-8 text-white/72">This section is intended less as a laboratory claim page and more as a disciplined explanation of how the portfolio is structured, selected, and prepared for supply discussion.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {t.rdItems.map((item, index) => (
                    <div key={item} className={`${index === 0 ? 'md:col-span-2' : ''} rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)]`}>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#9a927f]">Direction 0{index + 1}</p>
                      <p className="mt-5 text-2xl font-semibold leading-[1.35] tracking-[-0.04em] text-[#111]">{item}</p>
                      <p className="mt-4 text-sm leading-7 text-[#666]">Supply-facing category logic prepared for structured business review.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f4ef] py-24">
            <div className="mx-auto grid max-w-[1400px] gap-6 px-6 xl:grid-cols-3">
              <InfoCard label="01" title="Category-led portfolio strategy" desc="The portfolio is organized by category logic so buyers can move from broad interest to shortlist review more quickly." />
              <InfoCard label="02" title="Business-oriented communication" desc="Product language is shaped for partner discussion, not just consumer-facing claims or generic beauty copy." />
              <InfoCard label="03" title="Vietnam market-ready discussion" desc="The structure supports early review of market fit, supply readiness, and expansion potential for Vietnam-facing business use." />
            </div>
          </section>
        </>
      )}

      {page === 'partnership' && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Inquiry Flow</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">Partner review, supply discussion, and business inquiry</h2>
              </div>
              <p className="max-w-[520px] text-sm leading-8 text-[#666]">The inquiry flow should feel as considered as the hero and portfolio — clear enough for first contact, structured enough for real business review.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1fr_0.92fr]">
              <form className="rounded-[2rem] border border-black/6 bg-[#fbfaf8] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)] md:p-10 xl:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a917f]">Partnership Inquiry</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-5xl">{t.partnerTitle}</h2>
                <p className="mt-5 max-w-[620px] text-sm leading-8 text-[#666]">{t.partnerDesc}</p>

                <div className="mt-8 rounded-[1.2rem] border border-black/6 bg-white px-5 py-4 text-sm leading-7 text-[#666]">Include company background, target channel, expected volume, and category interest for faster review.</div>

                <div className="mt-10 grid gap-5 md:grid-cols-2">
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
                    <select className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none">
                      <option>Distribution</option>
                      <option>Supply</option>
                      <option>OEM / ODM</option>
                      <option>Wholesale</option>
                    </select>
                  </label>
                  <label className="block md:col-span-2">
                    <FieldLabel>{t.partnerFields[4]}</FieldLabel>
                    <textarea placeholder="Please share your company profile, expected order quantity, and target market so GPCLUB can review your request." className="min-h-40 w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm leading-8 text-[#111] outline-none" />
                  </label>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button type="submit" className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                    {t.partnerCta}
                  </button>
                  <p className="text-sm text-[#666]">Business partnership · distribution · supply request</p>
                </div>
              </form>

              <div className="grid gap-6">
                <InfoCard label="Business Scope" title="Distribution partnership in Vietnam" desc="Designed for distributors evaluating Korean beauty lines for Vietnam market entry, category expansion, or channel development." />
                <InfoCard label="Business Scope" title="Supply and sourcing discussion" desc="Structured to open early conversations around MOQ, lead time, supply conditions, and category fit without unnecessary friction." />
                <div className="rounded-[2rem] border border-black/6 bg-[#171717] p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">OEM / ODM / Buyer Support</p>
                  <p className="mt-5 text-2xl font-semibold leading-[1.35] tracking-[-0.04em]">The same flow can extend into OEM / ODM discussion and multi-market buyer communication when needed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === 'ai' && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">AI Flow</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">AI guidance prepared for product discovery and routing</h2>
              </div>
              <p className="max-w-[520px] text-sm leading-8 text-[#666]">The AI section should read less like a chatbot demo and more like a first-response layer for buyer questions and inquiry routing.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border border-black/6 bg-[#171717] p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10 xl:p-12">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/48">Capabilities</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{t.aiTitle}</h2>
                <p className="mt-6 text-sm leading-8 text-white/72">{t.aiDesc}</p>
                <div className="mt-8 space-y-4">
                  {t.aiBullets.map((item) => (
                    <div key={item} className="rounded-[1.3rem] border border-white/10 bg-white/6 px-5 py-5 text-sm leading-8 text-white/86">{item}</div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/6 bg-[#fbfaf8] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)] md:p-10 xl:p-12">
                <div className="flex items-center justify-between border-b border-black/6 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#9a927f]">Interactive Preview</p>
                    <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#111]">GPCLUB Beauty Advisor</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#666]">
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                    Online
                  </div>
                </div>

                <div className="space-y-4 py-6">
                  <div className="max-w-[88%] rounded-[1.4rem] rounded-tl-md bg-white px-4 py-4 text-sm leading-8 text-[#333] shadow-sm">{t.aiDesc}</div>
                  <div className="max-w-[88%] rounded-[1.2rem] border border-black/6 bg-[#f6f1e8] px-4 py-4 text-[12px] leading-7 text-[#6a6257]">Positioned for product discovery, buyer screening, and inquiry routing.</div>
                  <div className="ml-auto max-w-[80%] rounded-[1.4rem] rounded-tr-md bg-[#111] px-4 py-4 text-sm leading-8 text-white">{t.aiExamples[0]}</div>
                  <div className="max-w-[88%] rounded-[1.4rem] rounded-tl-md border border-black/6 bg-[#f3eee6] px-4 py-4 text-sm leading-8 text-[#444]">I can narrow the portfolio by skin concern, format, or business goal, then route distribution or supply inquiries to the next step.</div>
                </div>

                <div>
                  <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#9a927f]">Suggested prompts</p>
                  <div className="flex flex-wrap gap-3">
                    {t.aiExamples.map((item) => (
                      <button key={item} type="button" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-[#555] transition hover:text-[#111]">
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <form className="mt-6 flex items-center gap-3 rounded-[1.4rem] border border-black/8 bg-white px-4 py-3">
                  <input type="text" placeholder="Type your question here..." className="w-full bg-transparent text-sm text-[#111] outline-none placeholder:text-[#888]" />
                  <button type="submit" className="rounded-full bg-[#111] px-4 py-2 text-sm font-semibold text-white">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === 'contact' && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Contact Flow</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">Direct contact for product, sourcing, and partnership review</h2>
              </div>
              <p className="max-w-[520px] text-sm leading-8 text-[#666]">Contact should feel direct and commercially useful — a real extension of the portfolio and inquiry experience, not a generic final page.</p>
            </div>

            <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
              <div className="grid gap-6">
                {['Product inquiry', 'Distribution partnership', 'Supply discussion', 'Multi-national buyer support'].map((item, index) => (
                  <InfoCard key={item} label={`Contact 0${index + 1}`} title={item} desc="Each path is framed to feel direct, polished, and commercially credible rather than like a generic contact block." />
                ))}
              </div>

              <form className="rounded-[2rem] border border-black/6 bg-[#fbfaf8] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)] md:p-10 xl:p-12">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a917f]">Send Inquiry</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-5xl">{t.contactTitle}</h2>
                <p className="mt-5 max-w-[620px] text-sm leading-8 text-[#666]">Use this channel for product questions, partnership review, sourcing discussion, or buyer communication around GPCLUB's Vietnam-facing portfolio.</p>
                <div className="mt-8 rounded-[1.2rem] border border-black/6 bg-white px-5 py-4 text-sm leading-7 text-[#666]">Best used for product review, sourcing discussion, partnership questions, or buyer-side communication.</div>

                <div className="mt-10 space-y-5">
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
                    <textarea placeholder="Tell us what you need help with." className="min-h-40 w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm leading-8 text-[#111] outline-none" />
                  </label>
                  <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-[#7b746a]">
                    {['Product Review', 'Sourcing', 'Partnership', 'Buyer Contact'].map((item) => (
                      <span key={item} className="rounded-full border border-black/8 bg-white px-3 py-2">
                        {item}
                      </span>
                    ))}
                  </div>
                  <button type="submit" className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                    {t.contactCta}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </SiteShell>
  );
}
