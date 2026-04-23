import Link from 'next/link';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

function HomeFieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-sm font-medium text-[#151515]">{children}</span>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  return (
    <SiteShell locale={locale}>
      <section className="relative overflow-hidden border-b border-black/5 bg-[#f8f6f1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.035),transparent_22%),radial-gradient(circle_at_80%_10%,rgba(0,0,0,0.03),transparent_18%),linear-gradient(to_bottom,#f8f6f1,#f4f1ea)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 md:grid-cols-[0.98fr_1.02fr] md:items-center md:pb-28 md:pt-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-[#5e5e5e]">
              <span className="h-2 w-2 rounded-full bg-black" />
              {t.heroEyebrow}
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#111] md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#5f5f5f] md:text-lg">
              {t.heroDesc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/${locale}/products`} className="rounded-full bg-[#111] px-7 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5">
                {t.primaryCta}
              </Link>
              <Link href={`/${locale}/brand`} className="rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium text-[#111] transition hover:-translate-y-0.5">
                {t.secondaryCta}
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 md:grid-cols-3">
              {[
                { label: 'B2B Focus', value: 'Vietnam + multinational buyers' },
                { label: 'Portfolio', value: 'Korean HQ aligned product lines' },
                { label: 'Support', value: 'AI + partnership inquiry flow' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.6rem] border border-black/6 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#7a7a7a]">{item.label}</p>
                  <p className="mt-3 text-sm leading-6 text-[#1e1e1e]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4 md:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[2.2rem] border border-black/6 bg-white p-5 shadow-[0_24px_60px_rgba(0,0,0,0.06)]">
                <div className="overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#f7f4ef] via-[#ece5d9] to-[#d4c0a6] p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.26em] text-[#7a7a7a]">Main Visual</p>
                      <p className="mt-2 text-sm text-[#666]">JMsolution-inspired premium portfolio mood</p>
                    </div>
                    <div className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-[#444]">Hero</div>
                  </div>

                  <div className="mt-8 grid grid-cols-[0.88fr_1.12fr] gap-4">
                    <div className="rounded-[1.6rem] bg-gradient-to-b from-[#d8b48b] to-[#8b6c49] shadow-[0_20px_40px_rgba(98,73,42,0.2)]" />
                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] bg-white/75 p-4 backdrop-blur">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-[#7a7a7a]">Core Line</p>
                        <p className="mt-2 text-lg font-semibold text-[#131313]">Water Luminous / Ampoule / Sun Care</p>
                      </div>
                      <div className="rounded-[1.5rem] bg-black px-5 py-6 text-white">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">For Vietnam B2B</p>
                        <p className="mt-3 text-sm leading-7 text-white/85">
                          A clean, editorial brand experience designed for distribution, supply, and multinational buyer communication.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.8rem] border border-black/6 bg-white p-5 shadow-[0_14px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#7a7a7a]">Best Seller Logic</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#111]">3 Core Lines</p>
                  <p className="mt-3 text-sm leading-7 text-[#666]">Mask, luminous care, and calming / sun-care categories positioned for B2B selection.</p>
                </div>
                <div className="rounded-[1.8rem] border border-black/6 bg-[#111] p-5 text-white shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Consultation</p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.03em]">24/7 AI-ready</p>
                  <p className="mt-3 text-sm leading-7 text-white/72">Guide product discovery, answer buyer questions, and route partnership inquiries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Brand Story</p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-5xl">{t.brandTitle}</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.04)] md:p-10">
            <p className="max-w-3xl text-base leading-8 text-[#666] md:text-lg">{t.brandDesc}</p>
          </div>
          <div className="grid gap-4">
            {t.values.map((value) => (
              <div key={value} className="rounded-[1.6rem] border border-black/6 bg-white px-5 py-6 text-sm font-medium text-[#1a1a1a] shadow-[0_10px_28px_rgba(0,0,0,0.035)]">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Portfolio</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-5xl">{t.featuredTitle}</h2>
          </div>
          <Link href={`/${locale}/products`} className="hidden text-sm text-[#666] md:block">
            View More →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {t.featuredItems.map((item, index) => (
            <article key={item.name} className="rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)] transition hover:-translate-y-1">
              <div className="mb-6 flex aspect-[4/4.7] items-center justify-center rounded-[1.6rem] bg-gradient-to-b from-[#f9f6f0] to-[#ede3d6]">
                <div className={`h-44 w-24 rounded-[1.5rem] shadow-[0_12px_30px_rgba(0,0,0,0.08)] ${index === 1 ? 'bg-[#d6d6d6]' : index === 2 ? 'bg-[#dbc7b8]' : 'bg-[#d7b389]'}`} />
              </div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#111]">{item.name}</h3>
                <span className="rounded-full bg-[#f4f1ea] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#777]">Core</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#666]">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Measured Direction</p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-5xl">Supply-ready portfolio logic for B2B markets</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#666]">
              Inspired by editorial skincare-tech storytelling, this section frames GPCLUB’s product strategy as category-driven, market-ready, and buyer-friendly.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { metric: '3', label: 'core product directions', desc: 'Mask, luminous care, calming/sun care' },
              { metric: '24/7', label: 'AI consultation flow', desc: 'buyer questions and product routing' },
              { metric: 'B2B', label: 'business-first structure', desc: 'for Vietnam and multinational partners' },
            ].map((item) => (
              <div key={item.label} className="rounded-[2rem] border border-black/6 bg-white p-7 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-[#111]">{item.metric}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[#7a7a7a]">{item.label}</p>
                <p className="mt-4 text-sm leading-7 text-[#666]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.05fr_0.95fr]">
        <form className="relative overflow-hidden rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] md:p-10">
          <div className="absolute right-6 top-6 rounded-full border border-black/8 bg-[#f3efe8] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#666]">
            B2B Inquiry
          </div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Partnership</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-4xl">{t.partnerTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[#666]">{t.partnerDesc}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="block">
              <HomeFieldLabel>{t.partnerFields[0]}</HomeFieldLabel>
              <input className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#111]" placeholder="GPCLUB Vietnam Distribution Co." />
            </label>
            <label className="block">
              <HomeFieldLabel>{t.partnerFields[1]}</HomeFieldLabel>
              <input type="email" className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#111]" placeholder="partner@gpclub.vn" />
            </label>
            <label className="block">
              <HomeFieldLabel>{t.partnerFields[2]}</HomeFieldLabel>
              <input className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#111]" placeholder="Vietnam" />
            </label>
            <label className="block">
              <HomeFieldLabel>{t.partnerFields[3]}</HomeFieldLabel>
              <select className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none transition focus:border-[#111]">
                <option>Distribution</option>
                <option>Supply</option>
                <option>OEM / ODM</option>
                <option>Wholesale</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <HomeFieldLabel>{t.partnerFields[4]}</HomeFieldLabel>
              <textarea
                className="min-h-36 w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm leading-7 text-[#111] outline-none transition placeholder:text-[#8a8a8a] focus:border-[#111]"
                placeholder="We are interested in discussing distribution opportunities, minimum order quantities, and lead times for the Vietnam market."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button type="submit" className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              {t.partnerCta}
            </button>
            <p className="text-sm text-[#666]">Business partnership · distribution · supply request</p>
          </div>
        </form>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#eeebe4] p-8 shadow-[0_16px_40px_rgba(0,0,0,0.05)] md:p-10">
          <div className="absolute right-6 top-6 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-[#666]">
            AI Preview
          </div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">AI Agent</p>
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-4xl">{t.aiTitle}</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#666]">{t.aiDesc}</p>

          <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/80 p-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-black/6 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111] text-sm font-semibold text-white">AI</div>
                <div>
                  <p className="font-medium text-[#111]">GPCLUB Beauty Advisor</p>
                  <p className="text-sm text-[#777]">Multi-language consultation assistant</p>
                </div>
              </div>
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            <div className="space-y-4 py-5">
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-[#f3eee6] px-4 py-3 text-sm leading-7 text-[#111]">
                {t.aiDesc}
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-md bg-[#111] px-4 py-3 text-sm leading-7 text-white">
                {t.aiExamples[0]}
              </div>
              <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-7 text-[#666] shadow-sm">
                {t.aiBullets[0]} · {t.aiBullets[1]}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#888]">Quick prompts</p>
              <div className="flex flex-wrap gap-3">
                {t.aiExamples.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-[#666] transition hover:border-black/20 hover:text-[#111]"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/ai`} className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
              {t.aiCta}
            </Link>
            <p className="text-sm text-[#666]">24/7 multilingual guidance · product discovery · inquiry routing</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Updates</p>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-5xl">Business-ready content blocks for launch</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#666]">
            Replacing temporary launch cards with structured update modules inspired by modern beauty brand editorial layouts.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            'Portfolio updates for Vietnam distribution',
            'Buyer-ready category recommendations',
            'Partnership and inquiry process guidance',
          ].map((title, idx) => (
            <article key={title} className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
              <div className={`h-56 ${idx === 0 ? 'bg-[#e9dfd2]' : idx === 1 ? 'bg-[#ecebe8]' : 'bg-[#ded7cd]'}`} />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#8a8a8a]">Editorial Block</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#111]">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2.2rem] bg-[#111] px-8 py-12 text-white md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.24em] text-white/55">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{t.contactTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{t.contactDesc}</p>
          <Link href={`/${locale}/contact`} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111]">
            {t.contactCta}
          </Link>
        </div>
      </section>

      <Link
        href={`/${locale}/ai`}
        className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-3 rounded-full bg-[#111] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">AI</span>
        Start Consultation
      </Link>
    </SiteShell>
  );
}
