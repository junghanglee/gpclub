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
      <section className="relative overflow-hidden border-b border-black/5 bg-[#f7f5f1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_rgba(247,245,241,0.88)_34%,_rgba(236,233,227,0.96)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:py-10">
          <div className="overflow-hidden rounded-[2.3rem] border border-black/6 bg-[linear-gradient(90deg,#efefef_0%,#f8f8f8_22%,#f2f0ed_46%,#ebe7df_100%)] shadow-[0_28px_70px_rgba(0,0,0,0.07)]">
            <div className="grid min-h-[560px] items-center gap-10 px-8 py-10 md:grid-cols-[0.95fr_1.05fr] md:px-12 md:py-14">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-[#666] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#111]" />
                  {t.heroEyebrow}
                </div>

                <p className="mt-10 text-xl font-medium tracking-[-0.03em] text-[#181818] md:text-3xl">
                  Vietnam-based Korean beauty portfolio
                </p>
                <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#111] md:text-8xl">
                  {t.heroTitle}
                </h1>
                <p className="mt-7 max-w-xl text-base leading-8 text-[#666] md:text-lg">
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

                <div className="mt-10 flex items-center gap-3">
                  <span className="h-2.5 w-8 rounded-full bg-[#111]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="ml-3 text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">01 / 04</span>
                </div>

                <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                  {[
                    { title: 'Niacinamide Line', state: 'active' },
                    { title: 'Hydrogel Mask', state: 'default' },
                    { title: 'Sun Care', state: 'default' },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className={`rounded-[1.4rem] border px-4 py-4 text-sm shadow-sm ${
                        item.state === 'active'
                          ? 'border-black/10 bg-white text-[#111]'
                          : 'border-black/6 bg-white/55 text-[#666]'
                      }`}
                    >
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a]">Campaign</p>
                      <p className="mt-2 font-medium">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[420px] items-end justify-center md:min-h-[500px]">
              </div>

              <div className="relative flex min-h-[420px] items-end justify-center md:min-h-[500px]">
                <div className="absolute right-[-2%] top-[8%] h-[78%] w-[78%] rounded-full border-[10px] border-[#d6bf94] opacity-80" />
                <div className="absolute right-[8%] bottom-[8%] h-[62%] w-[62%] rounded-full border-[8px] border-[#eadab4] opacity-80" />
                <div className="absolute left-[6%] top-[6%] h-8 w-8 rounded-full bg-white/70 blur-sm" />
                <div className="absolute right-[18%] top-[18%] h-6 w-6 rounded-full bg-white/80 blur-sm" />
                <div className="absolute bottom-[20%] left-[14%] h-5 w-5 rounded-full bg-white/70 blur-sm" />

                <div className="absolute bottom-0 h-[30%] w-[88%] rounded-t-[2rem] bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.05)]" />

                <div className="relative z-10 flex w-full max-w-[620px] items-end justify-center gap-4 md:gap-5">
                  <div className="hidden h-[280px] w-[150px] rounded-[1.6rem] bg-gradient-to-b from-[#171717] to-[#0b0b0b] shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:block" />
                  <div className="hidden h-[300px] w-[150px] rounded-[1.6rem] bg-gradient-to-b from-[#1f1f1f] to-[#0b0b0b] shadow-[0_18px_40px_rgba(0,0,0,0.22)] md:block" />
                  <div className="hidden h-[320px] w-[150px] rounded-[1.6rem] bg-gradient-to-b from-[#1b1b1b] to-[#080808] shadow-[0_18px_40px_rgba(0,0,0,0.24)] md:block" />

                  <div className="absolute bottom-[8%] left-[34%] h-[150px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#f8f8f8] via-[#ececec] to-[#d9d9d9] shadow-[0_16px_30px_rgba(0,0,0,0.14)]" />
                  <div className="absolute bottom-[8%] left-[43%] h-[170px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#fcfcfc] via-[#eff0f2] to-[#d8dee6] shadow-[0_16px_30px_rgba(0,0,0,0.14)]" />
                  <div className="absolute bottom-[8%] left-[52%] h-[158px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#fcfcfc] via-[#eff6ef] to-[#dce9dc] shadow-[0_16px_30px_rgba(0,0,0,0.14)]" />
                  <div className="absolute bottom-[8%] left-[61%] h-[164px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#fcfcfc] via-[#f4f4f4] to-[#d8d8d8] shadow-[0_16px_30px_rgba(0,0,0,0.14)]" />
                </div>

                <div className="absolute bottom-[4%] left-[50%] z-20 flex h-[90px] w-[90px] -translate-x-1/2 items-center justify-center rounded-full border-[6px] border-[#d3b26b] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.12)]">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#8b7449]">New</p>
                    <p className="mt-1 text-sm font-semibold text-[#8b7449]">SERUM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-6 md:grid-cols-[1.12fr_0.88fr]">
          <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(120deg,#f5f4f1_0%,#ece9e3_50%,#ddd6ca_100%)] shadow-[0_16px_36px_rgba(0,0,0,0.05)]">
            <div className="grid min-h-[280px] gap-8 px-8 py-8 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-10">
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Niacinamide Line</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#111] md:text-4xl">Brightening care for modern B2B selection</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#666]">
                  A clean portfolio story built around toner, serum, and sun care style presentation — ideal for buyers looking for a modern Korean skincare line.
                </p>
                <Link href={`/${locale}/products`} className="mt-6 inline-flex w-fit rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                  Explore line
                </Link>
              </div>
              <div className="relative flex items-end justify-center">
                <div className="absolute bottom-0 h-[26%] w-[90%] rounded-t-[1.6rem] bg-white/80" />
                <div className="absolute left-[8%] bottom-[8%] h-[155px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#fbfbfb] via-[#ececec] to-[#d7d7d7] shadow-[0_14px_26px_rgba(0,0,0,0.12)]" />
                <div className="absolute left-[24%] bottom-[8%] h-[178px] w-[62px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] via-[#eef1f5] to-[#dbe1e8] shadow-[0_14px_26px_rgba(0,0,0,0.12)]" />
                <div className="absolute left-[42%] bottom-[8%] h-[164px] w-[60px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] via-[#eff4ef] to-[#dde9dd] shadow-[0_14px_26px_rgba(0,0,0,0.12)]" />
                <div className="absolute left-[60%] bottom-[8%] h-[168px] w-[60px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] via-[#f4f4f4] to-[#d8d8d8] shadow-[0_14px_26px_rgba(0,0,0,0.12)]" />
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(135deg,#ece8de_0%,#e2d8ca_100%)] p-7 shadow-[0_16px_36px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Bio Hydrogel Mask</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#111]">Hydrogel-focused signature promotion block</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#666]">A campaign-style section suitable for hero follow-up, best item promotion, or signature line storytelling.</p>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-black/6 bg-[linear-gradient(135deg,#eef5f8_0%,#dae8ef_100%)] p-7 shadow-[0_16px_36px_rgba(0,0,0,0.05)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[#8a8a8a]">Sun Care Promotion</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#111]">Seasonal visual block for UV and outdoor care</h3>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#666]">A clean seasonal panel that can later take real JMsolution-style campaign visuals for sun care or brightening launches.</p>
            </article>
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
