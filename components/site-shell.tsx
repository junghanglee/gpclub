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
    <main className="min-h-screen bg-[#f8f6f1] text-ink">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f8f6f1]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-lg font-semibold tracking-[0.28em] text-[#161616] md:text-xl">
            GPCLUB
          </Link>
          <nav className="hidden gap-8 text-sm text-[#666] md:flex">
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
                  item === locale ? 'bg-[#111] text-white' : 'text-[#666] hover:bg-white'
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-12 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-[0.22em]">GPCLUB</div>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#666]">{t.pageLead}</p>
          </div>
          <div className="text-sm text-[#777]">© 2026 GPCLUB. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
