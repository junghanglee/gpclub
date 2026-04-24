'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];
  const [active, setActive] = useState(0);
  const slide = t.heroSlides[active];

  return (
    <SiteShell locale={locale}>
      <section className="bg-[#f7f2eb] px-6 pb-10 pt-6 md:pb-14 md:pt-8">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="flex min-h-[820px] flex-col justify-between rounded-[2.6rem] bg-[#f2ece3] p-8 md:p-12 xl:p-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d8578]">{t.heroEyebrow}</p>
                <h1 className="mt-8 max-w-[640px] text-5xl font-semibold leading-[0.9] tracking-[-0.07em] text-[#111] md:text-7xl xl:text-[96px]">
                  {t.heroTitle}
                </h1>
                <p className="mt-7 max-w-[520px] text-base leading-8 text-[#5f5b55] md:text-[17px]">{t.heroDesc}</p>

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
              <article className="relative min-h-[560px] overflow-hidden rounded-[2.6rem] bg-[#ddd3c6]">
                <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.24)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  <div className="max-w-[540px] rounded-[1.8rem] bg-white/72 px-6 py-6 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8a8174]">{slide.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{slide.title}</h2>
                    <p className="mt-3 text-base font-medium tracking-[-0.02em] text-[#222]">{slide.subtitle}</p>
                    <p className="mt-3 text-sm leading-7 text-[#5f5b55]">{slide.desc}</p>
                  </div>
                </div>
              </article>

              <div className="grid gap-5 md:grid-cols-[1.08fr_0.92fr]">
                <div className="grid gap-3 sm:grid-cols-3">
                  {t.heroSlides.map((item, idx) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={`overflow-hidden rounded-[1.6rem] border bg-white text-left transition ${idx === active ? 'border-[#111] shadow-[0_14px_28px_rgba(0,0,0,0.08)]' : 'border-black/8'}`}
                    >
                      <div className="relative h-28 overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d857a]">{item.label}</p>
                        <p className="mt-2 text-sm font-medium leading-6 text-[#222]">{item.title}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="rounded-[1.8rem] border border-black/8 bg-white px-5 py-5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#938a7f]">Design Intent</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-[#555]">
                    <p>기존 정보형 레이아웃을 버리고, 비주얼 중심의 브랜드 첫인상부터 다시 설계합니다.</p>
                    <p>이 화면은 최종본이 아니라, AHC형 포맷으로 다시 시작한 기준 초안입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9d9386]">{t.featureEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">{t.featureTitle}</h2>
            </div>
            <p className="max-w-[560px] text-sm leading-8 text-[#666]">{t.featureDesc}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.featureCards.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-black/6 bg-[#faf8f4] p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] md:p-10">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">{item.label}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-[#666]">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f1eb] px-6 py-24">
        <div className="mx-auto max-w-[1480px]">
          <div className="mb-12 grid gap-6 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9d9386]">{t.portfolioEyebrow}</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">{t.portfolioTitle}</h2>
            </div>
            <p className="max-w-[560px] text-sm leading-8 text-[#666]">{t.portfolioDesc}</p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {t.portfolioItems.map((item, index) => (
              <article key={item.title} className={`${index === 0 ? 'xl:col-span-2' : ''} overflow-hidden rounded-[2.2rem] border border-black/6 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.04)]`}>
                <div className={`grid ${index === 0 ? 'lg:grid-cols-[1.02fr_0.98fr]' : ''}`}>
                  <div className="relative min-h-[320px] overflow-hidden bg-[#ece4d8]">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-8 md:p-10 xl:p-12">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">{item.label}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{item.title}</h3>
                    <p className="mt-4 text-sm leading-8 text-[#666]">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
