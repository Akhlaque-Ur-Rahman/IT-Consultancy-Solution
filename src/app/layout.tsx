import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/index.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationCTA } from '@/components/ConsultationCTA';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IT Consulting Website Design',
  description: 'Enterprise IT Consulting & Software Development',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <ConsultationCTA />
      </body>
    </html>
  );
}
