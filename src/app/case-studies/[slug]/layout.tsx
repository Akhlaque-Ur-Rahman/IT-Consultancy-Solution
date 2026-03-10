import type { Metadata } from "next";
import { caseStudies } from "@/data/mockData";
import { SITE_URL } from "@/config/company";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | EDUNEX",
    };
  }

  return {
    title: `${caseStudy.title} | EDUNEX Case Studies`,
    description: caseStudy.challenge,
    alternates: {
      canonical: `${SITE_URL}/case-studies/${slug}`,
    },
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.challenge,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
