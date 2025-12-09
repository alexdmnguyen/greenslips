import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdPlaceholder from '@/components/AdPlaceholder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SAMBO SENTRAL - Sports & Esports News, Rumors & Predictions',
  description: 'Your one-stop source for the latest news, rumors, and predictions in sports and esports. Coverage of Baseball, Basketball, Tennis, VALORANT, CS2, and League of Legends.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AdPlaceholder position="left" />
        <AdPlaceholder position="right" />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
