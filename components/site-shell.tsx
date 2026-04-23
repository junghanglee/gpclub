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
    <main className="min-h-screen bg-sand text-ink">
      <header className="sticky top-0 z-20 border-b border-line/80 bg-sand/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href={`/${locale}`} className="text-xl font-semibold tracking-[0.2em]">
            GPCLUB
          </Link>
          <nav className="hidden gap-8 text-sm text-muted md:flex">
            {navKeys.map((key: PageKey) => (
              <Link key={key} href={`/${locale}/${key}`} className="transition hover:text-ink">
                {t.nav[key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm">
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-full px-3 py-1.5 transition ${
                  item === locale ? 'bg-accent text-white' : 'text-muted hover:bg-white'
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-line/80 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-lg font-semibold tracking-[0.18em]">GPCLUB</div>
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{t.pageLead}</p>
          </div>
          <div className="text-sm text-muted">짤 2026 GPCLUB. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}
