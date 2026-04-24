'use client';

import Link from 'next/link';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  const heroFrames = t.heroFrames;

  return (
    <SiteShell locale={locale}>
      <section className="bg-[#f6f1eb] px-6 pb-10 pt-6 md:pb-14 md:pt-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
            <div className="flex min-h-[760px] flex-col justify-between rounded-[2.5rem] bg-[#f3ede4] p-8 md:p-12 xl:p-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d8578]">{t.heroEyebrow}</p>
                <h1 className="mt-8 max-w-[620px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#111] md:text-7xl xl:text-[92px]">
                  {t.heroTitle}
                </h1>
                <p className="mt-7 max-w-[520px] text-base leading-8 text-[#5f5b55] md:text-[17px]">
                  {t.heroDesc}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-[#111] px-7 py-3 text-sm font-semibold text-white">
                    {t.primaryCta}
                  </Link>
                  <Link href={`/${locale}/brand`} className="inline-flex rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#111]">
                    {t.secondaryCta}
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 border-t border-black/6 pt-8 md:grid-cols-3">
                {t.heroMetrics.map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#9a9185]">{item.label}</p>
                    <p className="mt-2 text-sm font-medium text-[#1e1d1a]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <article className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#ddd3c6]">
                <img src={heroFrames[0].image} alt={heroFrames[0].title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.18)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="max-w-[520px] rounded-[1.8rem] bg-white/70 px-6 py-6 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8174]">{heroFrames[0].label}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{heroFrames[0].title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#5f5b55]">{heroFrames[0].desc}</p>
                  </div>
                </div>
              </article>

              <div className="grid gap-5 md:grid-cols-2">
                {heroFrames.slice(1, 3).map((item) => (
                  <article key={item.title} className="relative min-h-[240px] overflow-hidden rounded-[2rem] bg-[#e5ddd1]">
                    <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.22)_100%)]" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="rounded-[1.4rem] bg-white/72 px-5 py-5 backdrop-blur-md">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8174]">{item.label}</p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#111]">{item.title}</h3>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9d9386]">{t.editSectionEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">{t.editSectionTitle}</h2>
            </div>
            <p className="max-w-[560px] text-sm leading-8 text-[#666]">{t.editSectionDesc}</p>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
            <article className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#ece4d8]">
              <img src={t.editorialFeature.image} alt={t.editorialFeature.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.20)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="max-w-[520px] rounded-[1.8rem] bg-white/72 px-6 py-6 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8174]">{t.editorialFeature.label}</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{t.editorialFeature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f5b55]">{t.editorialFeature.desc}</p>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              {t.editorialCards.map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-black/6 bg-[#faf8f4] p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] md:p-10">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">{item.label}</p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-8 text-[#666]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1eb] px-6 py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9d9386]">{t.brandSectionEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">{t.brandSectionTitle}</h2>
            </div>
            <p className="max-w-[560px] text-sm leading-8 text-[#666]">{t.brandSectionDesc}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.brandPanels.map((item, index) => (
              <article key={item.title} className={`${index === 0 ? 'bg-[#111] text-white' : 'bg-white text-[#111]'} rounded-[2rem] border border-black/6 p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] md:p-10`}>
                <p className={`text-[10px] uppercase tracking-[0.22em] ${index === 0 ? 'text-white/55' : 'text-[#9b9286]'}`}>{item.label}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className={`mt-4 text-sm leading-8 ${index === 0 ? 'text-white/72' : 'text-[#666]'}`}>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
