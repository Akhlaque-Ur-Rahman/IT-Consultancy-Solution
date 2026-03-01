import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | EDUNEX Services",
  description:
    "Stay updated with the latest trends in digital transformation, regional business growth, and technology solutions.",
  alternates: {
    canonical: "https://edunexservices.in/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
