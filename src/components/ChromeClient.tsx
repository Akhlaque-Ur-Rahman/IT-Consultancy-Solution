'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsultationCTA } from '@/components/ConsultationCTA';
import GoToTopButton from '@/components/GoToTopButton';

export default function ChromeClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const routes = [
    '/',
    '/about',
    '/services',
    '/solutions',
    '/case-studies',
    '/compliance',
    '/contact',
    '/resources',
  ];

  const showChrome = routes.some((r) => {
    if (r === '/') return pathname === '/';
    return pathname.startsWith(r);
  });

  if (!showChrome) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">{children}</main>
      <GoToTopButton />
      <Footer />
      <ConsultationCTA />
    </>
  );
}
