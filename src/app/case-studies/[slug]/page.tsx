import { notFound } from "next/navigation";
import { caseStudies } from "@/data/mockData";
import { CaseStudyDetailClient } from "@/components/case-studies/CaseStudyDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailClient caseStudy={caseStudy} slug={slug} />;
}
