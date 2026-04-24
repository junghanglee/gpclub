import Link from 'next/link';
import { Locale, PageKey, localeLabels, locales, navKeys, siteContent } from '@/data/site';

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = siteContent[locale];

  return (
    <main className="min-h-screen bg-[#f6f3ee] text-[#111]">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f6f3ee]/88 backdrop-blur-2xl">
        <div className="border-b border-black/5 bg-[#1a1a1a] text-white">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[10px] uppercase tracking-[0.28em] text-white/72 md:text-[11px]">
            <span>K-Beauty Portfolio for Vietnam B2B</span>
            <span>Strategic Distribution · Supply · Partnership</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
          <Link href={`/${locale}`} className="text-[22px] font-semibold tracking-[0.34em] text-[#111] md:text-[26px]">
            GPCLUB
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.14em] text-[#555] xl:flex">
            {navKeys.map((key: PageKey) => (
              <Link key={key} href={`/${locale}/${key}`} className="transition hover:text-[#111]">
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-xs">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-full border px-3 py-1.5 transition ${
                  item === locale
                    ? 'border-[#111] bg-[#111] text-white'
                    : 'border-black/8 bg-white/90 text-[#666] hover:border-black/15 hover:text-[#111]'
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-black/6 bg-white">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-[22px] font-semibold tracking-[0.28em] text-[#111]">GPCLUB</div>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#666]">{t.pageLead}</p>
          </div>
          <div className="space-y-2 text-sm text-[#777] md:text-right">
            <p>Vietnam-based K-Beauty B2B partner</p>
            <p>Portfolio alignment with Korean headquarters</p>
            <p>© 2026 GPCLUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
