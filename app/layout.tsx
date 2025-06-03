import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AosProvider from '@/components/providers/AosProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PureGleam | Modern Car Wash Services',
  description:
    'Experience revolutionary car washing technology that delivers spotless results while caring for your vehicle and the environment.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body>
        <AosProvider>{children}</AosProvider>
      </body>
    </html>
  );
}
