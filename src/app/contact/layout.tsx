import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Enterprise IT Experts | EDUNEX",
  description:
    "Schedule a consultation with EDUNEX's senior architects for expert IT consulting, cloud migration strategies, and custom enterprise software development.",
  alternates: {
    canonical: "https://edunexservices.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
