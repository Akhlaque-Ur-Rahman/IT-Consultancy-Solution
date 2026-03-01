import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Case Studies & Tech Success | EDUNEX",
  description:
    "Explore EDUNEX's high-impact case studies. See how we architect scalable enterprise cloud solutions and custom software driving real B2B growth.",
  alternates: {
    canonical: "https://edunexservices.in/case-studies",
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
