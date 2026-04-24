import Link from 'next/link';
import { Locale, PageKey, localeLabels, locales, navKeys, siteContent } from '@/data/site';

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const t = siteContent[locale];

  return (
    <main className="min-h-screen bg-white text-[#111]">
      <header className="sticky top-0 z-50 border-b border-black/6 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 xl:px-14">
          <Link href={`/${locale}`} className="text-[24px] font-semibold tracking-[0.28em] text-[#111]">
            GPCLUB
          </Link>

          <nav className="hidden items-center gap-8 text-[13px] font-medium uppercase tracking-[0.14em] text-[#444] xl:flex">
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
                className={`rounded-full border px-3 py-1.5 transition ${item === locale ? 'border-[#111] bg-[#111] text-white' : 'border-black/8 bg-white text-[#666]'}`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-black/6 bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-10 text-sm text-[#666] md:px-10 xl:flex-row xl:items-end xl:justify-between xl:px-14">
          <div>
            <div className="text-[22px] font-semibold tracking-[0.24em] text-[#111]">GPCLUB</div>
            <p className="mt-3 max-w-[760px] leading-8">{t.pageLead}</p>
          </div>
          <div className="space-y-1 text-left xl:text-right">
            <p>Vietnam-based K-Beauty B2B partner</p>
            <p>© 2026 GPCLUB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
