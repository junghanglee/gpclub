import { notFound } from 'next/navigation';
import { HomePage } from '@/components/home-page';
import { locales, type Locale } from '@/data/site';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocalePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  return <HomePage locale={locale} />;
}
