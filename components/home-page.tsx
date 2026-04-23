'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];
  const heroSlides = useMemo(
    () => [
      {
        label: 'Best Seller',
        title: 'PORE ERASER SERUM',
        subtitle: '다크모공 클리어, 다운타임 없는 즉각 솔루션',
        desc: t.heroDesc,
        tone: 'from-[#eee6db] via-[#f6f1ea] to-[#e2d2bf]',
      },
      {
        label: 'Signature Mask',
        title: 'BIO HYDROGEL MASK',
        subtitle: '프리미엄 마스크 포트폴리오를 위한 시그니처 라인',
        desc: t.brandDesc,
        tone: 'from-[#ece7de] via-[#f6f2eb] to-[#ded2c4]',
      },
      {
        label: 'Seasonal Care',
        title: 'SUN CARE LINE',
        subtitle: '베트남 리테일과 시즌 전개에 적합한 UV 케어',
        desc: t.partnerDesc,
        tone: 'from-[#e6eef2] via-[#f6fbfd] to-[#d9e8ee]',
      },
    ],
    [t]
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  return (
    <SiteShell locale={locale}>
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-r ${slide.tone} p-8 md:p-12`}>
            <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#666]">{slide.label}</p>
                <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-[#111] md:text-7xl">{slide.title}</h1>
                <p className="mt-4 text-xl font-medium tracking-[-0.03em] text-[#222] md:text-2xl">{slide.subtitle}</p>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#666] md:text-base">{slide.desc}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={`/${locale}/products`} className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                    {t.primaryCta}
                  </Link>
                  <Link href={`/${locale}/partnership`} className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#111]">
                    {t.partnerCta}
                  </Link>
                </div>
              </div>

              <div className="relative flex min-h-[360px] items-end justify-center md:min-h-[420px]">
                <div className="absolute bottom-0 h-[24%] w-[88%] rounded-t-[1.6rem] bg-white/70" />
                <div className="absolute left-[10%] bottom-[10%] h-[230px] w-[120px] rounded-[1.6rem] bg-gradient-to-b from-[#1b1b1b] to-[#080808] shadow-[0_20px_40px_rgba(0,0,0,0.18)]" />
                <div className="absolute left-[28%] bottom-[10%] h-[250px] w-[120px] rounded-[1.6rem] bg-gradient-to-b from-[#232323] to-[#090909] shadow-[0_20px_40px_rgba(0,0,0,0.18)]" />
                <div className="absolute left-[48%] bottom-[10%] h-[170px] w-[58px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] to-[#d9d9d9] shadow-[0_14px_28px_rgba(0,0,0,0.14)]" />
                <div className="absolute left-[58%] bottom-[10%] h-[188px] w-[60px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] to-[#dbe1e8] shadow-[0_14px_28px_rgba(0,0,0,0.14)]" />
                <div className="absolute left-[69%] bottom-[10%] h-[176px] w-[60px] rounded-[2rem] bg-gradient-to-b from-[#ffffff] to-[#dbe9dd] shadow-[0_14px_28px_rgba(0,0,0,0.14)]" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            {heroSlides.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={idx === activeSlide ? 'h-2.5 w-8 rounded-full bg-[#111]' : 'h-2.5 w-2.5 rounded-full bg-black/20'}
                aria-label={`Go to banner ${idx + 1}`}
              />
            ))}
            <span className="ml-2 text-xs uppercase tracking-[0.2em] text-[#888]">
              {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Best Seller</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#111]">지금 가장 인기있는 제품</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'PORE ERASER SERUM', desc: '다크모공 클리어, 즉각적인 브라이트닝 솔루션' },
            { name: 'HYDROGEL MASK', desc: '시그니처 마스크 포트폴리오를 위한 프리미엄 제안' },
            { name: 'SUN CARE LINE', desc: '시즌성 판매와 유통 제안에 적합한 UV 카테고리' },
          ].map((item, index) => (
            <article key={item.name} className="overflow-hidden rounded-[1.8rem] border border-black/6 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
              <div className={`h-64 ${index === 0 ? 'bg-[#e6ddd1]' : index === 1 ? 'bg-[#ece9e3]' : 'bg-[#dfe9ee]'}`} />
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">Best Item</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#111]">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666]">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#faf8f4] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Brand Story</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#111]">전문적인 피부 개선과 비즈니스 제안</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              '전문적인 피부 개선',
              '인체적용시험 기반 더마 사이언스',
              '지속적인 아름다움을 위한 에스테틱 방향성',
            ].map((item) => (
              <div key={item} className="rounded-[1.8rem] border border-black/6 bg-white p-8 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
                <p className="text-lg font-medium leading-8 text-[#222]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Review / Trust</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#111]">고민이 될 땐 신뢰할 수 있는 제안</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            '베트남 유통 파트너 대상 제품 제안',
            '다국적 바이어 대상 카테고리 설명',
            'AI 상담과 문의 폼을 통한 즉시 연결',
          ].map((item) => (
            <article key={item} className="rounded-[1.8rem] border border-black/6 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">Trust Point</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#111]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[#666]">GPCLUB은 제품 소개를 넘어 실제 공급과 유통 대화를 시작하기 쉬운 구조를 제공합니다.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
          <form className="rounded-[1.8rem] border border-black/6 bg-white p-8 shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Partnership</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#111]">{t.partnerTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#666]">{t.partnerDesc}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[0]}</HomeFieldLabel>
                <input className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="GPCLUB Vietnam Distribution Co." />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[1]}</HomeFieldLabel>
                <input type="email" className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="partner@gpclub.vn" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[2]}</HomeFieldLabel>
                <input className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="Vietnam" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[3]}</HomeFieldLabel>
                <select className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none">
                  <option>Distribution</option>
                  <option>Supply</option>
                  <option>OEM / ODM</option>
                  <option>Wholesale</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <HomeFieldLabel>{t.partnerFields[4]}</HomeFieldLabel>
                <textarea className="min-h-36 w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm leading-7 text-[#111] outline-none" placeholder="We are interested in discussing distribution opportunities, minimum order quantities, and lead times for the Vietnam market." />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
              {t.partnerCta}
            </button>
          </form>

          <div className="rounded-[1.8rem] bg-[#111] p-8 text-white shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">AI Consultation</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{t.aiTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">{t.aiDesc}</p>
            <div className="mt-8 space-y-3">
              {t.aiExamples.map((item) => (
                <div key={item} className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/85">
                  {item}
                </div>
              ))}
            </div>
            <Link href={`/${locale}/ai`} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111]">
              {t.aiCta}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
