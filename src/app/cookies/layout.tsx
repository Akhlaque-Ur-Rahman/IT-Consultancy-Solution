import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | EDUNEX",
  description: "Learn how EDUNEX uses cookies to improve your experience on our website.",
  alternates: {
    canonical: "https://edunexservices.in/cookies",
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
