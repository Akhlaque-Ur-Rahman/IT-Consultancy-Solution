import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local IT Consulting & Software Experts in Bihar | EDUNEX",
  description:
    "Partner with EDUNEX, Patna's trusted technology experts. We build custom software, billing systems, and provide reliable IT support for Bihar businesses.",
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
