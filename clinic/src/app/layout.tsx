import type { Metadata } from 'next';
import { Nunito } from "next/font/google";
import './globals.css';
import Header from './components/header/page';
import Footer from './components/footer/page';


const nunito = Nunito({subsets: ['latin']});

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
    <html lang="en">
      <body className={`${nunito.className} ${nunito.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
