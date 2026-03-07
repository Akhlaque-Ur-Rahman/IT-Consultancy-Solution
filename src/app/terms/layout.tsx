import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EDUNEX",
  description:
    "Service terms and conditions for using EDUNEX IT and compliance services.",
  alternates: {
    canonical: "https://edunexservices.in/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
