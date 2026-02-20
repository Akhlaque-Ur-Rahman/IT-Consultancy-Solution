import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions - CRM, ERP & Billing Software",
  description:
    "Scalable enterprise software solutions by EDUNEX. Custom CRM, ERP systems, and automated billing platforms to streamline your operations.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
