import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header/page';
import Footer from './components/footer/page';
import ScrollToUp from './components/scroll-up/page';
import { Marck_Script, Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-nunito',
});

const marck = Marck_Script({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-marck'
});

export const metadata: Metadata = {
  title: "Центр Ветеринарної Медицини",
  description: "Центр Ветеринарної Медицини на Разумовській, 54",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${marck.variable} ${nunito.variable}`} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        <ScrollToUp />
      </body>
    </html>
  );
}
