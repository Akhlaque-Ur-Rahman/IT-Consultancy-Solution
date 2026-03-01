import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "B2B IT Consulting & Cloud Experts | EDUNEX Services",
  description:
    "Partner with EDUNEX for enterprise IT consulting, custom software framework development, and scalable cloud architectures that accelerate your B2B growth.",
  alternates: {
    canonical: "https://edunexservices.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
