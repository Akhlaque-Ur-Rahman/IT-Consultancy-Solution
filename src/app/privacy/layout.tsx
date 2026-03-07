import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EDUNEX",
  description:
    "Read our Privacy Policy to understand how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://edunexservices.in/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
