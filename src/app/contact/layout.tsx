import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Talk — Free Tech Advice for your Patna Project",
  description:
    "Have a question or ready to build? Contact our Patna team for honest advice on your next website or app project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
