import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import { AppLayout } from "@/components/AppLayout";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { Preloader } from "@/components/Preloader";
import Script from "next/script";
import { SITE_URL } from "@/config/company";
import { WebSiteSchema } from "@/components/WebSiteSchema";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EDUNEX | End-to-End Digital Solutions for Patna & Bihar",
  description:
    "Simple billing, stock control, and growth tools for shops and clinics in Bihar. Local team in Patna since 2018.",
  keywords: [
    "Digital Solutions Patna",
    "Business Software Bihar",
    "Billing Software Patna",
    "Stock Management Bihar",
    "GST Registration Bihar",
    "Local Business Software Patna",
  ],
  authors: [{ name: "EDUNEX Team" }],
  creator: "EDUNEX",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "EDUNEX | End-to-End Digital Solutions for Patna & Bihar",
    description:
      "Simple systems for real business work. Billing, stock, and growth help from a Patna team since 2018.",
    siteName: "EDUNEX",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "EDUNEX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUNEX | End-to-End Digital Solutions for Patna & Bihar",
    description:
      "Simple digital tools for shops and clinics in Bihar. Local support in Patna since 2018.",
    images: ["/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "192x192" },
      { url: "/logo.jpg", type: "image/jpeg", sizes: "512x512" },
    ],
    apple: [{ url: "/logo.jpg" }],
    shortcut: [{ url: "/favicon.png" }],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const isPreview = process.env.VERCEL_ENV === "preview";
  if (!isPreview) return baseMetadata;
  return {
    ...baseMetadata,
    robots: { index: false, follow: false },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "EDUNEX Services",
  description:
    "End-to-End Digital Solutions Provider for shops, clinics, and small firms in Patna, Bihar.",
  image: `${SITE_URL}/logo.jpg`,
  logo: `${SITE_URL}/logo.jpg`,
  url: SITE_URL,
  telephone: "+91 70708 09208",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ward 15, Phulwari Sharif",
    addressLocality: "Patna",
    addressRegion: "BR",
    postalCode: "801505",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.5788,
    longitude: 85.0747,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-7070809208",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/edunexservices",
    "https://twitter.com/edunexservices",
    "https://www.facebook.com/edunexservices",
  ],
};

const navigationLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Services", url: `${SITE_URL}/services` },
    { "@type": "SiteNavigationElement", position: 2, name: "Solutions", url: `${SITE_URL}/solutions` },
    { "@type": "SiteNavigationElement", position: 3, name: "Case Studies", url: `${SITE_URL}/case-studies` },
    { "@type": "SiteNavigationElement", position: 4, name: "Compliance", url: `${SITE_URL}/compliance` },
    { "@type": "SiteNavigationElement", position: 5, name: "About", url: `${SITE_URL}/about` },
    { "@type": "SiteNavigationElement", position: 6, name: "Blog", url: `${SITE_URL}/blog` },
    { "@type": "SiteNavigationElement", position: 7, name: "Resources", url: `${SITE_URL}/resources` },
    { "@type": "SiteNavigationElement", position: 8, name: "Contact", url: `${SITE_URL}/contact` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <WebSiteSchema />
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationLd) }}
        />
        <Preloader />
        <SmoothScrollWrapper />
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
