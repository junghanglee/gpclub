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
    <main className="min-h-screen bg-[#f7f5f1] text-ink">
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f7f5f1]/95 backdrop-blur-xl">
        <div className="border-b border-black/5 bg-[#111] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[11px] uppercase tracking-[0.14em] text-white/80 md:text-xs">
            <span>K-Beauty B2B Distribution Hub · Vietnam</span>
            <span>Official GPCLUB Channel</span>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-xl font-semibold tracking-[0.22em] text-[#111] md:text-2xl">
            GPCLUB
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#555] lg:flex">
            {navKeys.map((key: PageKey) => (
              <Link key={key} href={`/${locale}/${key}`} className="transition hover:text-[#111]">
                {t.nav[key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-xs md:text-sm">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  item === locale ? 'bg-[#111] text-white' : 'bg-white text-[#666] hover:text-[#111]'
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-xl font-semibold tracking-[0.18em] text-[#111]">GPCLUB</div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666]">{t.pageLead}</p>
          </div>
          <div className="space-y-2 text-sm text-[#777] md:text-right">
            <p>Vietnam-based K-Beauty B2B partner</p>
            <p>© 2026 GPCLUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
