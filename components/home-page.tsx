'use client';

import Link from 'next/link';
import { FormEvent, ReactNode, useMemo, useState } from 'react';
import { Locale, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

function HomeFieldLabel({ children }: { children: ReactNode }) {
  return <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.14em] text-[#4d4d4d]">{children}</span>;
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = siteContent[locale];

  const heroSlides = useMemo(
    () =>
      t.homeSlides.map((item, idx) => ({
        ...item,
        desc: idx === 0 ? t.heroDesc : idx === 1 ? t.brandDesc : idx === 2 ? t.partnerDesc : t.pageLead,
        tone:
          idx === 0
            ? 'from-[#f6f0e7] via-[#fbf8f4] to-[#e9dfd1]'
            : idx === 1
              ? 'from-[#f3eee7] via-[#f9f6f1] to-[#e5ddd2]'
              : idx === 2
                ? 'from-[#eef2f2] via-[#f8fbfb] to-[#dde5e5]'
                : idx === 3
                  ? 'from-[#efe8df] via-[#f8f5f1] to-[#e3d6ca]'
                  : 'from-[#eef1eb] via-[#f8faf7] to-[#dde7dd]',
      })),
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
  const [aiPreview, setAiPreview] = useState<string>(t.aiExamples[0]);
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
    setAiPreview(`${t.homeAiPreviewPrefix} ${aiPrompt.slice(0, 80)}${aiPrompt.length > 80 ? '…' : ''}`);
    setAiPrompt('');
  };

  return (
    <SiteShell locale={locale}>
      <section className="border-b border-black/5 bg-[#f6f3ee]">
        <div className="mx-auto max-w-[1400px] px-6 py-6 md:py-8">
          <div className={`overflow-hidden rounded-[2.3rem] bg-gradient-to-r ${slide.tone}`}>
            <div className="grid min-h-[720px] items-stretch lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-14 xl:px-16 xl:py-16">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#7d7469]">{t.heroEyebrow}</p>
                  <div className="mt-8 inline-flex rounded-full border border-black/8 bg-white/80 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#6a6258]">
                    {slide.label}
                  </div>
                  <h1 className="mt-7 max-w-[620px] text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#111] md:text-7xl xl:text-[92px]">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-[560px] text-lg font-medium leading-8 tracking-[-0.03em] text-[#1f1f1f] md:text-[28px] md:leading-[1.35]">
                    {slide.subtitle}
                  </p>
                  <p className="mt-7 max-w-[520px] text-sm leading-8 text-[#666] md:text-[15px]">
                    {slide.desc}
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-8">
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
                      {t.primaryCta}
                    </Link>
                    <Link href={`/${locale}/partnership`} className="inline-flex rounded-full border border-black/10 bg-white/88 px-6 py-3 text-sm font-semibold text-[#111]">
                      {t.partnerCta}
                    </Link>
                  </div>

                  <div className="grid gap-3 md:grid-cols-3">
                    {[
                      'Korean HQ Portfolio',
                      'Vietnam B2B Focus',
                      'Multi-national Buyer Ready',
                    ].map((item) => (
                      <div key={item} className="rounded-[1.2rem] border border-black/6 bg-white/72 px-4 py-4 text-[12px] uppercase tracking-[0.16em] text-[#5b554f]">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="grid gap-4 border-t border-black/6 pt-8 md:grid-cols-3">
                    {[
                      { label: 'Positioning', value: 'Premium K-Beauty B2B' },
                      { label: 'Market', value: 'Vietnam · Global Buyers' },
                      { label: 'Focus', value: 'Distribution · Supply' },
                    ].map((item) => (
                      <div key={item.label}>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-[#938a7f]">{item.label}</p>
                        <p className="mt-2 text-sm font-medium tracking-[-0.02em] text-[#1d1d1d]">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative min-h-[360px] overflow-hidden border-l border-white/40 bg-white/30">
                <img src={slide.image} alt={slide.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.02)_45%,rgba(255,255,255,0.18)_100%)]" />
                <div className="absolute left-8 top-8 rounded-[1.5rem] border border-white/70 bg-white/58 px-5 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-md md:left-10 md:top-10">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#8b8378]">Hero Visual</p>
                  <p className="mt-3 max-w-[220px] text-sm leading-7 text-[#4e4a44]">
                    Campaign-led product imagery prepared for premium first impression and buyer-facing presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-start">
            <div className="flex items-center gap-3">
              {heroSlides.map((item, idx) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={idx === activeSlide ? 'h-2.5 w-10 rounded-full bg-[#111]' : 'h-2.5 w-2.5 rounded-full bg-black/20'}
                  aria-label={`Go to banner ${idx + 1}`}
                />
              ))}
              <span className="ml-2 text-[11px] uppercase tracking-[0.22em] text-[#8d857a]">
                {String(activeSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[1.15fr_0.85fr]">
              <div className="grid gap-3 sm:grid-cols-3">
                {heroSlides.map((item, idx) => (
                  <button
                    key={`${item.title}-thumb`}
                    type="button"
                    onClick={() => setActiveSlide(idx)}
                    className={`overflow-hidden rounded-[1.2rem] border bg-white text-left transition ${idx === activeSlide ? 'border-[#111] shadow-[0_12px_28px_rgba(0,0,0,0.08)]' : 'border-black/8'}`}
                  >
                    <div className="relative h-28 overflow-hidden">
                      <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    </div>
                    <div className="px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[#8d857a]">{item.label}</p>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#222] line-clamp-2">{item.title}</p>
                      <p className="mt-1 text-[12px] leading-5 text-[#777] line-clamp-2">{item.subtitle}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="rounded-[1.5rem] border border-black/8 bg-white px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#938a7f]">Banner Use</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-[#555]">
                  <p>Hero campaigns can rotate by mask, serum, sun care, or seasonal category focus.</p>
                  <p>Additional hero files can be swapped in without changing the homepage layout.</p>
                </div>
                <div className="mt-5 rounded-[1rem] bg-[#f6f1e8] px-4 py-4 text-[12px] leading-6 text-[#6a6257]">
                  Recommended: lead with visual campaigns above, then connect the same story to featured product lines below.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 grid gap-5 xl:grid-cols-[0.78fr_1.22fr] xl:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Key Portfolio</p>
              <h2 className="mt-4 max-w-[760px] text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">
                {t.homeBestSellerTitle}
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <p className="max-w-[520px] text-sm leading-8 text-[#666]">
                The hero campaign now leads directly into the portfolio lines most likely to matter in distributor review and buyer selection.
              </p>
              <Link href={`/${locale}/products`} className="inline-flex rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-[#111]">
                {t.homeBestSellerCta}
              </Link>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {t.homeBestSellerItems.map((item, index) => (
              <article
                key={item.name}
                className={`${index === 0 ? 'xl:col-span-2' : ''} overflow-hidden rounded-[2rem] border border-black/6 bg-[#fbfaf8] shadow-[0_18px_50px_rgba(0,0,0,0.04)]`}
              >
                <div className={`grid ${index === 0 ? 'lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
                  <div className="relative min-h-[320px] overflow-hidden bg-[linear-gradient(180deg,#f6f1e8_0%,#f1ebe1_100%)]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    <span className="absolute left-6 top-6 rounded-full bg-[#111] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex flex-col justify-between p-8 md:p-10 xl:p-12">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#9d9589]">Campaign-linked Line</p>
                      <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111] md:text-4xl">{item.name}</h3>
                      <p className="mt-5 max-w-[420px] text-sm leading-8 text-[#666]">{item.desc}</p>
                    </div>
                    <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
                      <div className="rounded-full border border-black/8 bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#7b746a]">
                        {item.meta}
                      </div>
                      <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-[#111] px-5 py-3 text-sm font-semibold text-white">
                        {t.homeDetailsLabel}
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
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/6 bg-[#1a1a1a] p-8 text-white md:p-10 xl:p-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">Brand Direction</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{t.homeBrandStoryTitle}</h2>
            <p className="mt-6 max-w-[500px] text-sm leading-8 text-white/72">
              GPCLUB presents Korean headquarters-aligned beauty lines in a format built for distributor review, buyer discussion, and practical supply conversation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {t.homeBrandStoryItems.map((item, index) => (
              <div key={item} className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#9b927f]">0{index + 1}</p>
                <p className="mt-6 text-2xl font-semibold leading-[1.35] tracking-[-0.04em] text-[#111]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="rounded-[2.2rem] border border-black/6 bg-[linear-gradient(135deg,#111_0%,#242424_55%,#4a443e_100%)] px-8 py-10 text-white md:px-12 md:py-12 xl:px-14">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/56">{t.homeBannerEyebrow}</p>
            <div className="mt-5 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <h3 className="max-w-[900px] text-3xl font-semibold tracking-[-0.04em] md:text-5xl">{t.homeBannerTitle}</h3>
              <Link href={`/${locale}/products`} className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111]">
                {t.homeBannerCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf8] py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#9a917f]">Trust Structure</p>
              <h2 className="mt-4 max-w-[760px] text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-6xl">{t.homeTrustTitle}</h2>
            </div>
            <p className="max-w-[420px] text-sm leading-8 text-[#666]">
              A tighter portfolio story makes first contact easier for distributors, sourcing teams, and multinational buyers.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)] md:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#9c9488]">Why buyers trust structure</p>
              <div className="mt-8 grid gap-4">
                {t.homeTrustPoints.map((item, index) => (
                  <div key={item} className="grid gap-2 rounded-[1.2rem] bg-[#f5f1ea] px-5 py-5 md:grid-cols-[56px_1fr] md:items-start">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8c8274]">0{index + 1}</span>
                    <p className="text-base font-medium leading-8 text-[#222]">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-8 text-[#666]">
                GPCLUB is built to move interest into distribution, sourcing, and partnership review more smoothly.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {t.homeReviewCards.map((item) => (
                <article key={item.id} className="rounded-[1.8rem] border border-black/6 bg-white p-6 shadow-[0_16px_34px_rgba(0,0,0,0.04)]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#9a9286]">@{item.id}</p>
                  <p className="mt-4 text-sm leading-8 text-[#555]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 xl:grid-cols-[1fr_0.95fr]">
          <form onSubmit={handleInquirySubmit} className="rounded-[2rem] border border-black/6 bg-[#fbfaf8] p-8 shadow-[0_18px_40px_rgba(0,0,0,0.04)] md:p-10 xl:p-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#9a917f]">Partnership Inquiry</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] md:text-5xl">{t.partnerTitle}</h2>
            <p className="mt-5 max-w-[620px] text-sm leading-8 text-[#666]">{t.partnerDesc}</p>

            <div className="mt-8 rounded-[1.2rem] border border-black/6 bg-white px-5 py-4 text-sm leading-7 text-[#666]">
              Share company profile, target market, expected volume, and product interest to speed up partner review.
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[0]}</HomeFieldLabel>
                <input value={inquiry.company} onChange={(e) => setInquiry((prev) => ({ ...prev, company: e.target.value }))} className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none" placeholder="GPCLUB Vietnam Distribution Co." />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[1]}</HomeFieldLabel>
                <input type="email" value={inquiry.email} onChange={(e) => setInquiry((prev) => ({ ...prev, email: e.target.value }))} className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none" placeholder="partner@gpclub.vn" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[2]}</HomeFieldLabel>
                <input value={inquiry.country} onChange={(e) => setInquiry((prev) => ({ ...prev, country: e.target.value }))} className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none" placeholder="Vietnam" />
              </label>
              <label className="block">
                <HomeFieldLabel>{t.partnerFields[3]}</HomeFieldLabel>
                <select value={inquiry.type} onChange={(e) => setInquiry((prev) => ({ ...prev, type: e.target.value }))} className="w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm text-[#111] outline-none">
                  <option>Distribution</option>
                  <option>Supply</option>
                  <option>OEM / ODM</option>
                  <option>Wholesale</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <HomeFieldLabel>{t.partnerFields[4]}</HomeFieldLabel>
                <textarea value={inquiry.detail} onChange={(e) => setInquiry((prev) => ({ ...prev, detail: e.target.value }))} className="min-h-40 w-full rounded-[1.2rem] border border-black/8 bg-white px-4 py-4 text-sm leading-8 text-[#111] outline-none" placeholder="We are interested in discussing distribution opportunities, minimum order quantities, and lead times for the Vietnam market." />
              </label>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.16em] text-[#7b746a]">
              {['Distribution', 'Supply', 'OEM / ODM', 'Wholesale'].map((item) => (
                <span key={item} className="rounded-full border border-black/8 bg-white px-3 py-2">
                  {item}
                </span>
              ))}
            </div>

            <button type="submit" className="mt-8 inline-flex rounded-full bg-[#111] px-6 py-3 text-sm font-semibold text-white">
              {t.partnerCta}
            </button>
            {inquiryStatus === 'invalid' && <p className="mt-4 text-sm text-[#b42318]">{t.homeInquiryInvalid}</p>}
            {inquiryStatus === 'done' && <p className="mt-4 text-sm text-[#157347]">{t.homeInquiryDone}</p>}
          </form>

          <div className="rounded-[2rem] border border-black/6 bg-[#171717] p-8 text-white shadow-[0_18px_40px_rgba(0,0,0,0.08)] md:p-10 xl:p-12">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/48">AI Consultation</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">{t.aiTitle}</h2>
            <p className="mt-5 text-sm leading-8 text-white/72">{t.aiDesc}</p>
            <p className="mt-4 max-w-[520px] text-sm leading-8 text-white/52">
              Built to shorten product discovery and route business inquiries more quickly.
            </p>

            <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-white/6 p-5">
              <div className="rounded-[1.2rem] bg-white px-4 py-4 text-sm leading-7 text-[#111]">{aiPreview}</div>
              <div className="mt-4 space-y-3">
                {t.aiExamples.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setAiPreview(`${t.homeAiPreviewPrefix} ${item}`)}
                    className="block w-full rounded-[1rem] border border-white/10 bg-white/6 px-4 py-3 text-left text-sm text-white/86"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
              {[
                { title: 'Product Match', desc: 'Need-based product narrowing' },
                { title: 'Buyer Routing', desc: 'Business-intent inquiry handoff' },
                { title: 'Multi-language', desc: 'Regional buyer communication support' },
              ].map((item) => (
                <div key={item.title} className="rounded-[1rem] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/72">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-white/86">{item.desc}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleAiSubmit} className="mt-6 flex gap-2">
              <input
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                placeholder={t.homeAiInputPlaceholder}
                className="w-full rounded-full border border-white/14 bg-white/8 px-4 py-3 text-sm text-white outline-none placeholder:text-white/48"
              />
              <button type="submit" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111]">
                {t.homeAiSend}
              </button>
            </form>

            <Link href={`/${locale}/ai`} className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111]">
              {t.aiCta}
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
