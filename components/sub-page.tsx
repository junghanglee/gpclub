import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function SubPage({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = siteContent[locale];

  const titleMap: Record<PageKey, string> = {
    brand: t.brandTitle,
    products: t.featuredTitle,
    rd: t.rdTitle,
    partnership: t.partnerTitle,
    ai: t.aiTitle,
    contact: t.contactTitle,
  };

  const descMap: Record<PageKey, string> = {
    brand: t.brandDesc,
    products: t.heroDesc,
    rd: t.pageLead,
    partnership: t.partnerDesc,
    ai: t.aiDesc,
    contact: t.contactDesc,
  };

  return (
    <SiteShell locale={locale}>
      <section className="bg-[#f6f1eb] px-6 pb-12 pt-6 md:pb-16 md:pt-8">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
            <div className="flex min-h-[620px] flex-col justify-between rounded-[2.6rem] bg-[#f2ece3] p-8 md:p-12 xl:p-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d8578]">{page.toUpperCase()}</p>
                <h1 className="mt-8 max-w-[620px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#111] md:text-7xl xl:text-[84px]">
                  {titleMap[page]}
                </h1>
                <p className="mt-7 max-w-[520px] text-base leading-8 text-[#5f5b55] md:text-[17px]">{descMap[page]}</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href={`/${locale}`} className="inline-flex rounded-full bg-[#111] px-7 py-3 text-sm font-semibold text-white">
                  GPCLUB Home
                </Link>
                <Link href={`/${locale}/products`} className="inline-flex rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#111]">
                  {t.primaryCta}
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {[1, 2, 3].map((idx) => (
                <article key={idx} className={`${idx === 1 ? 'md:col-span-2' : ''} rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] md:p-10`}>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">SECTION 0{idx}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111]">준비 중인 페이지 초안</h2>
                  <p className="mt-4 text-sm leading-8 text-[#666]">현재는 홈 포맷을 먼저 확정하기 위한 단계이며, 서브페이지는 그 다음 동일 문법으로 확장할 예정입니다.</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
