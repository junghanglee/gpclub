import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

export function SubPage({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = siteContent[locale];

  const headerMap = {
    brand: { title: t.brandTitle, desc: t.brandDesc },
    products: { title: t.featuredTitle, desc: t.heroDesc },
    rd: { title: t.rdTitle, desc: t.pageLead },
    partnership: { title: t.partnerTitle, desc: t.partnerDesc },
    ai: { title: t.aiTitle, desc: t.aiDesc },
    contact: { title: t.contactTitle, desc: t.contactDesc },
  } as const;

  const content = headerMap[page];

  return (
    <SiteShell locale={locale}>
      <section className="bg-[#f6f1eb] px-6 pb-12 pt-6 md:pb-16 md:pt-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
            <div className="flex min-h-[620px] flex-col justify-between rounded-[2.5rem] bg-[#f3ede4] p-8 md:p-12 xl:p-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d8578]">{page.toUpperCase()}</p>
                <h1 className="mt-8 max-w-[620px] text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#111] md:text-7xl xl:text-[84px]">
                  {content.title}
                </h1>
                <p className="mt-7 max-w-[520px] text-base leading-8 text-[#5f5b55] md:text-[17px]">{content.desc}</p>
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
              {t.subpagePanels[page].map((item, index) => (
                <article key={item.title} className={`${index === 0 ? 'md:col-span-2' : ''} rounded-[2rem] border border-black/6 bg-white p-8 shadow-[0_14px_30px_rgba(0,0,0,0.03)] md:p-10`}>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9286]">{item.label}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#111]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-8 text-[#666]">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
