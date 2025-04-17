import type { Metadata } from 'next';
import './globals.css';
import Header from './components/header/page';
import Footer from './components/footer/page';
import ScrollToUp from './components/scroll-up/page';
import { Marck_Script } from 'next/font/google';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});


const marck = Marck_Script({
  subsets: ['latin', 'cyrillic'], // ВАЖНО
  weight: '400',
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
      <body className={`${nunito.className} ${marck.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToUp />
      </body>
    </html>
  );
}
