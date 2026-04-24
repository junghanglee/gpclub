import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPCLUB',
  description: 'Premium K-Beauty B2B portfolio for Vietnam distribution and multinational buyers',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
