import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'About P-Vita | Revolutionary Health Technology',
  description:
    'Discover the story behind P-Vita, a pioneering health tech company transforming wellness through innovative solutions. Meet our team and learn about our mission.',
  keywords: ['health technology', 'wellness', 'innovation', 'about us'],
  openGraph: {
    title: 'About P-Vita',
    description:
      'Revolutionary health technology company transforming wellness',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About P-Vita',
    description: 'Revolutionary health technology company transforming wellness',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={`${manrope.className} bg-white text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
