import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPCLUB',
  description: 'Premium clean beauty brand homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
