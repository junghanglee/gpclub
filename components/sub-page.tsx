import Link from 'next/link';
import { Locale, PageKey, siteContent } from '@/data/site';
import { SiteShell } from '@/components/site-shell';

const pageStyles: Record<PageKey, { eyebrow: string; accent: string }> = {
  brand: { eyebrow: 'Brand', accent: 'from-[#f7f1e6] to-[#eadcc8]' },
  products: { eyebrow: 'Products', accent: 'from-[#f9f6f0] to-[#e7dbca]' },
  rd: { eyebrow: 'R&D', accent: 'from-[#f6f2ea] to-[#ddd4c7]' },
  partnership: { eyebrow: 'Partnership', accent: 'from-[#f7efe2] to-[#e3cfb6]' },
  ai: { eyebrow: 'AI Agent', accent: 'from-[#efe8dd] to-[#d9c3a5]' },
  contact: { eyebrow: 'Contact', accent: 'from-[#f8f3ec] to-[#e1d4c6]' },
};

export function SubPage({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = siteContent[locale];
  const style = pageStyles[page];

  const pageMap = {
    brand: {
      title: t.brandTitle,
      desc: t.brandDesc,
      bullets: t.values,
      cta: { href: `/${locale}/products`, label: t.primaryCta },
    },
    products: {
      title: t.featuredTitle,
      desc: t.heroDesc,
      bullets: t.featuredItems.map((item) => `${item.name} ??${item.desc}`),
      cta: { href: `/${locale}/partnership`, label: t.partnerCta },
    },
    rd: {
      title: t.rdTitle,
      desc: t.pageLead,
      bullets: t.rdItems,
      cta: { href: `/${locale}/contact`, label: t.contactCta },
    },
    partnership: {
      title: t.partnerTitle,
      desc: t.partnerDesc,
      bullets: t.partnerFields,
      cta: { href: `/${locale}/contact`, label: t.partnerCta },
    },
    ai: {
      title: t.aiTitle,
      desc: t.aiDesc,
      bullets: t.aiBullets,
      cta: { href: `/${locale}/contact`, label: t.aiCta },
    },
    contact: {
      title: t.contactTitle,
      desc: t.contactDesc,
      bullets: ['Email', 'Business inquiry', 'Distribution request'],
      cta: { href: `/${locale}/partnership`, label: t.partnerCta },
    },
  } as const;

  const content = pageMap[page];

  return (
    <SiteShell locale={locale}>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accentDeep">{style.eyebrow}</p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-6xl">{content.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{content.desc}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={content.cta.href} className="rounded-full bg-accentDeep px-6 py-3 text-sm font-medium text-white shadow-soft">
              {content.cta.label}
            </Link>
            <Link href={`/${locale}`} className="rounded-full border border-line bg-white px-6 py-3 text-sm font-medium">
              GPCLUB Home
            </Link>
          </div>
        </div>
        <div className={`rounded-[2rem] bg-gradient-to-br ${style.accent} p-6 shadow-soft`}>
          <div className="rounded-[1.5rem] border border-white/60 bg-white/70 p-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accentDeep">Overview</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              {content.bullets.map((item) => (
                <li key={item} className="rounded-xl bg-white px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
