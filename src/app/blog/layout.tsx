import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT & Business Growth Blog for Bihar SMEs | EDUNEX",
  description:
    "Read simple, practical advice on how to use technology to grow your shop, clinic, or distribution business in Patna and Bihar.",
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
