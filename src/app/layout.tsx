import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/index.css';
import Shell from '@/components/Shell';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'EDUNEX - IT Consulting & Software Development',
    template: '%s | EDUNEX'
  },
  description: 'EDUNEX delivers enterprise-grade technology solutions including web and mobile app development, CRM/ERP systems, and digital marketing.',
  keywords: ['IT Consulting', 'Software Development', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'Business Compliance', 'CRM', 'ERP'],
  authors: [{ name: 'EDUNEX Team' }],
  creator: 'EDUNEX',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edunex.com', // Placeholder URL
    title: 'EDUNEX - IT Consulting & Software Development',
    description: 'Enterprise-grade technology solutions for digital transformation.',
    siteName: 'EDUNEX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EDUNEX - IT Consulting & Software Development',
    description: 'Enterprise-grade technology solutions for digital transformation.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <SmoothScroll />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
