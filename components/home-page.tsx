'use client';

import Link from 'next/link';
import { FormEvent, ReactNode, useMemo, useState } from 'react';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

function HomeFieldLabel({ children }: { children: ReactNode }) {
  return <span className="mb-2 block text-sm font-medium text-[#151515]">{children}</span>;
}

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
        image: '/images/samples/hero-pore-serum.svg',
      },
      {
        label: 'Signature Mask',
        title: 'BIO HYDROGEL MASK',
        subtitle: '프리미엄 마스크 포트폴리오를 위한 시그니처 라인',
        desc: t.brandDesc,
        tone: 'from-[#ece7de] via-[#f6f2eb] to-[#ded2c4]',
        image: '/images/samples/hero-hydrogel-mask.svg',
      },
      {
        label: 'Seasonal Care',
        title: 'SUN CARE LINE',
        subtitle: '베트남 리테일과 시즌 전개에 적합한 UV 케어',
        desc: t.partnerDesc,
        tone: 'from-[#e6eef2] via-[#f6fbfd] to-[#d9e8ee]',
        image: '/images/samples/hero-sun-care.svg',
      },
    ],
    [t]
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [inquiry, setInquiry] = useState({
    company: '',
    email: '',
    country: '',
    type: 'Distribution',
    detail: '',
  });
  const [inquiryStatus, setInquiryStatus] = useState<'idle' | 'invalid' | 'done'>('idle');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiPreview, setAiPreview] = useState(t.aiExamples[0]);
  const slide = heroSlides[activeSlide];

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiry.company.trim() || !inquiry.email.trim() || !inquiry.detail.trim()) {
      setInquiryStatus('invalid');
      return;
    }
    setInquiryStatus('done');
  };

  const handleAiSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setAiPreview(`Preview response: ${aiPrompt.slice(0, 80)}${aiPrompt.length > 80 ? '…' : ''}`);
    setAiPrompt('');
  };

  return (
    <SiteShell locale={locale}>
      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className={`overflow-hidden rounded-[2rem] bg-gradient-to-r ${slide.tone} p-8 md:p-12`}>
            <div className="grid items-center gap-10 md:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#666]">{slide.label}</p>
                <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-7xl">{slide.title}</h1>
                <p className="mt-4 text-lg font-medium tracking-[-0.03em] text-[#222] md:text-2xl">{slide.subtitle}</p>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#666] md:text-base">{slide.desc}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={`/${locale}/products`} className="rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                    {t.primaryCta}
                  </Link>
                  <Link href={`/${locale}/partnership`} className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#111]">
                    {t.partnerCta}
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.6rem] border border-black/10 bg-white/70 shadow-[0_14px_28px_rgba(0,0,0,0.08)]">
                <img src={slide.image} alt={slide.title} className="h-[360px] w-full object-cover md:h-[420px]" />
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

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-3 overflow-x-auto rounded-[1.4rem] border border-black/6 bg-white p-4 md:grid-cols-4">
          {['Mask Packs', 'Ampoule / Serum', 'Sun Care', 'B2B Set Offers'].map((item) => (
            <button
              key={item}
              type="button"
              className="min-w-[180px] rounded-xl bg-[#f5f2ec] px-4 py-3 text-left text-sm font-medium text-[#333] transition hover:bg-[#ece7de] md:min-w-0"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Best Seller</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">지금 가장 인기있는 제품</h2>
          </div>
          <Link href={`/${locale}/products`} className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#333] md:inline-flex">
            View All Portfolio
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'PORE ERASER SERUM', desc: '다크모공 클리어, 즉각적인 브라이트닝 솔루션', tag: 'BEST', meta: 'Brightening · Pore Care', image: '/images/samples/hero-pore-serum.svg' },
            { name: 'HYDROGEL MASK', desc: '시그니처 마스크 포트폴리오를 위한 프리미엄 제안', tag: 'SIGNATURE', meta: 'Premium Mask · Export Ready', image: '/images/samples/hero-hydrogel-mask.svg' },
            { name: 'SUN CARE LINE', desc: '시즌성 판매와 유통 제안에 적합한 UV 카테고리', tag: 'SEASONAL', meta: 'UV Care · Retail Campaign', image: '/images/samples/hero-sun-care.svg' },
          ].map((item) => (
            <article key={item.name} className="overflow-hidden rounded-[1.8rem] border border-black/6 bg-white shadow-[0_14px_34px_rgba(0,0,0,0.04)]">
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-[#111] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">{item.tag}</span>
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8a8a8a]">Best Item</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#111]">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#666]">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a]">{item.meta}</p>
                  <Link href={`/${locale}/products`} className="rounded-full bg-[#111] px-3 py-1.5 text-xs font-semibold text-white">
                    Details
                  </Link>
                </div>
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
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">전문적인 피부 개선과 비즈니스 제안</h2>
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

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-[1.8rem] border border-black/6 bg-[linear-gradient(90deg,#111_0%,#2b2b2b_52%,#3a3a3a_100%)] px-7 py-8 text-white md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">ONE SHOT ONE SOLUTION</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl">with GPCLUB · Buyer-first B2B curation</h3>
            <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111]">
              Explore Best Line
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Review / Trust</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">고민이 될 땐 신뢰할 수 있는 제안</h2>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { id: 'sihaa_', text: '아이크림 포 페이스 N개 사용중이에요. 흡수 빠르고 유통 제안하기 좋은 반응형 라인.' },
            { id: 'beauty_yet', text: '얼굴 전체에 바르는 #국민아이크림. 보습/탄력 포인트가 명확해서 설명이 쉬웠어요.' },
            { id: 'hella_cos', text: '괜히 유명한 게 아닌 라인. 카테고리 스토리가 명확해서 바이어 대응이 좋았습니다.' },
            { id: 'onevelycos', text: '빠른 흡수감과 데일리 사용감이 강점. 시즌 제안용으로도 깔끔했습니다.' },
          ].map((item) => (
            <article key={item.id} className="rounded-[1.2rem] border border-black/6 bg-white p-5 shadow-[0_10px_22px_rgba(0,0,0,0.04)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8a8a8a]">@{item.id}</p>
              <p className="mt-3 text-sm leading-7 text-[#444]">{item.text}</p>
            </article>
          ))}
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
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={handleInquirySubmit} className="rounded-[1.8rem] border border-black/6 bg-white p-6 shadow-[0_14px_34px_rgba(0,0,0,0.04)] md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-[#8a8a8a]">Partnership</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-[#111]">{t.partnerTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#666]">{t.partnerDesc}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[0]}</HomeFieldLabel>
                <input value={inquiry.company} onChange={(e) => setInquiry((prev) => ({ ...prev, company: e.target.value }))} className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="GPCLUB Vietnam Distribution Co." />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[1]}</HomeFieldLabel>
                <input type="email" value={inquiry.email} onChange={(e) => setInquiry((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="partner@gpclub.vn" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[2]}</HomeFieldLabel>
                <input value={inquiry.country} onChange={(e) => setInquiry((prev) => ({ ...prev, country: e.target.value }))} className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none" placeholder="Vietnam" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[3]}</HomeFieldLabel>
                <select value={inquiry.type} onChange={(e) => setInquiry((prev) => ({ ...prev, type: e.target.value }))} className="w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm text-[#111] outline-none">
                  <option>Distribution</option>
                  <option>Supply</option>
                  <option>OEM / ODM</option>
                  <option>Wholesale</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <HomeFieldLabel>{t.partnerFields[4]}</HomeFieldLabel>
                <textarea value={inquiry.detail} onChange={(e) => setInquiry((prev) => ({ ...prev, detail: e.target.value }))} className="min-h-36 w-full rounded-2xl border border-black/8 bg-[#f5f1ea] px-4 py-4 text-sm leading-7 text-[#111] outline-none" placeholder="We are interested in discussing distribution opportunities, minimum order quantities, and lead times for the Vietnam market." />
              </label>
            </div>
            <button type="submit" className="mt-8 inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
              {t.partnerCta}
            </button>
            {inquiryStatus === 'invalid' && <p className="mt-3 text-sm text-[#b42318]">회사명 · 이메일 · 상세내용을 입력해 주세요.</p>}
            {inquiryStatus === 'done' && <p className="mt-3 text-sm text-[#157347]">문의가 접수된 것으로 가정하고 다음 단계(담당자 연결)로 안내합니다.</p>}
          </form>

          <div className="rounded-[1.8rem] bg-[#111] p-8 text-white shadow-[0_14px_34px_rgba(0,0,0,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/55">AI Consultation</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{t.aiTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">{t.aiDesc}</p>
            <div className="mt-8 space-y-3">
              <div className="rounded-xl bg-white px-4 py-3 text-sm text-[#111]">{aiPreview}</div>
              {t.aiExamples.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setAiPreview(`Preview response: ${item}`)}
                  className="block w-full rounded-xl bg-white/10 px-4 py-3 text-left text-sm text-white/85"
                >
                  {item}
                </button>
              ))}
            </div>
            <form onSubmit={handleAiSubmit} className="mt-5 flex gap-2">
              <input
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder="Ask in any language..."
                className="w-full rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/60"
              />
              <button type="submit" className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#111]">
                Send
              </button>
            </form>
            <Link href={`/${locale}/ai`} className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111]">
              {t.aiCta}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
