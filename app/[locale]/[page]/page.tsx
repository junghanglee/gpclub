import { notFound } from 'next/navigation';
import { SubPage } from '@/components/sub-page';
import { locales, navKeys, type Locale, type PageKey } from '@/data/site';

export function generateStaticParams() {
  return locales.flatMap((locale) => navKeys.map((page) => ({ locale, page })));
}

export default function DetailPage({ params }: { params: { locale: string; page: string } }) {
  const locale = params.locale as Locale;
  const page = params.page as PageKey;

  if (!locales.includes(locale) || !navKeys.includes(page)) {
    notFound();
  }

  return <SubPage locale={locale} page={page} />;
}
