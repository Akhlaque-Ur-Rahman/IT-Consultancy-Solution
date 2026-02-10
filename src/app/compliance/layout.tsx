import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Compliance Services | EDUNEX - Registration & Legal",
  description: "Expert guidance for business registration, tax compliance, GST, trademark, and legal requirements for companies in India.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
