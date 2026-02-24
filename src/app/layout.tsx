import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/index.css";
import Shell from "@/components/Shell";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";
import { Preloader } from "@/components/Preloader";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.edunexservices.in"),
  title: "EDUNEX — Simple IT Solutions for Patna Businesses",
  description:
    "We help business owners in Patna grow with simple websites, custom apps, and expert tax advice. Reliable, honest, and local since 2012.",
  keywords: [
    "IT Consulting Patna",
    "Software Development Bihar",
    "Web Development Patna",
    "Mobile Apps Patna",
    "GST Registration Bihar",
    "Business Consulting Patna",
  ],
  authors: [{ name: "EDUNEX Team" }],
  creator: "EDUNEX",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.edunexservices.in",
    title: "EDUNEX — Simple IT Solutions for Patna Businesses",
    description:
      "Reliable websites, custom apps, and business growth tools for Patna's smart business owners.",
    siteName: "EDUNEX",
    images: [{ url: "/logo.jpg", width: 1200, height: 630, alt: "EDUNEX" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDUNEX — Simple IT Solutions for Patna Businesses",
    description:
      "Helping Patna businesses grow with honest technology since 2012.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EDUNEX Services",
  image: "https://www.edunexservices.in/logo.jpg",
  "@id": "https://www.edunexservices.in",
  url: "https://www.edunexservices.in",
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
    "https://facebook.com/edunex",
    "https://linkedin.com/company/edunex",
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
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <SmoothScrollWrapper />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
