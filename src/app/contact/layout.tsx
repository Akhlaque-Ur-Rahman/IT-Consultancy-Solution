import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EDUNEX - Schedule a Free Consultation",
  description:
    "Get in touch with EDUNEX for your IT needs. Schedule a free consultation for software development, consulting, or digital marketing services.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
