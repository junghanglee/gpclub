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
      <section className="bg-white">
        <div className="relative h-[78vh] min-h-[720px] w-full overflow-hidden">
          <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.18)_34%,rgba(0,0,0,0.06)_60%,rgba(0,0,0,0.08)_100%)]" />

          <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-end px-6 pb-16 pt-24 md:px-10 md:pb-20 xl:px-14">
            <div className="max-w-[620px] text-white">
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/70">{slide.label}</p>
              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.07em] md:text-7xl xl:text-[92px]">
                {slide.title}
              </h1>
              <p className="mt-5 text-lg leading-8 tracking-[-0.02em] text-white/92 md:text-[24px] md:leading-[1.45]">
                {slide.subtitle}
              </p>
              <p className="mt-6 max-w-[520px] text-sm leading-8 text-white/74 md:text-[15px]">
                {slide.desc}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#111]">
                  {t.primaryCta}
                </Link>
                <Link href={`/${locale}/brand`} className="inline-flex rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm">
                  {t.secondaryCta}
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/12 bg-[linear-gradient(180deg,rgba(8,8,8,0.04)_0%,rgba(8,8,8,0.32)_100%)] backdrop-blur-[2px]">
            <div className="mx-auto flex max-w-[1600px] items-stretch gap-3 overflow-x-auto px-6 py-4 md:px-10 xl:px-14">
              {t.heroSlides.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`group min-w-[220px] flex-1 rounded-[1.4rem] border px-4 py-4 text-left transition ${
                    idx === active ? 'border-white/45 bg-white/16' : 'border-white/10 bg-black/12 hover:bg-white/10'
                  }`}
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/62">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-white">{item.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:px-10 xl:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9b9286]">PORTFOLIO</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#111] md:text-5xl">{t.portfolioTitle}</h2>
            </div>
            <p className="hidden max-w-[520px] text-sm leading-8 text-[#666] xl:block">{t.portfolioDesc}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.portfolioItems.map((item) => (
              <article key={item.title} className="group overflow-hidden rounded-[2rem] bg-[#f7f2eb]">
                <div className="relative h-[420px] overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="px-7 py-7">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">{item.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#111]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-[#666]">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
