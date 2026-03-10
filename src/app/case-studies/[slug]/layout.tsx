import type { Metadata } from "next";
import { caseStudies } from "@/data/mockData";
import { SITE_URL, META_TITLE_MAX, META_DESC_MAX, truncateMeta } from "@/config/company";

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

  const rawDesc =
    caseStudy.challenge.length >= 130
      ? `${caseStudy.challenge} Patna & Bihar case study.`
      : `${caseStudy.challenge} ${caseStudy.solution} From ${caseStudy.client}.`;
  const metaDesc = truncateMeta(rawDesc, META_DESC_MAX);
  const rawTitle = `${caseStudy.title} | ${caseStudy.client} | EDUNEX`;
  const title = truncateMeta(rawTitle, META_TITLE_MAX);

  return {
    title,
    description: metaDesc,
    keywords: [
      caseStudy.industry,
      caseStudy.problemSolved,
      "Billing Software Patna",
      "Custom Software Bihar",
      caseStudy.client,
    ],
    alternates: {
      canonical: `${SITE_URL}/case-studies/${slug}`,
    },
    openGraph: {
      title,
      description: metaDesc,
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
