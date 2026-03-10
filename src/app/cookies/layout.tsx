import type { Metadata } from "next";
import { SITE_URL } from "@/config/company";

export const metadata: Metadata = {
  title: "Cookie Policy | EDUNEX",
  description: "Learn how EDUNEX uses cookies to improve your experience on our website.",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
