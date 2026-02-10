import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Solutions | EDUNEX - CRM, ERP & Billing Systems",
  description: "Scalable enterprise software solutions including Custom CRM, ERP, Billing Systems, and IVR for business efficiency.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
