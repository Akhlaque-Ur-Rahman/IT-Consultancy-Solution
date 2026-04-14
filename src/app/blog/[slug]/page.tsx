import { blogPosts } from "@/data/mockData";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Sparkles,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { BlogPostingSchema } from "@/components/BlogPostingSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { BlogReadingProgress } from "@/components/blog/BlogReadingProgress";
import {
  SITE_URL,
  META_TITLE_MAX,
  META_DESC_MAX,
  truncateMeta,
} from "@/config/company";

type Props = {
  params: Promise<{ slug: string }>;
};

function categoryVisualClass(category: string) {
  switch (category) {
    case "Compliance":
      return {
        blobA: "bg-emerald-500/25",
        blobB: "bg-teal-400/15",
        mesh: "from-emerald-500/12 via-transparent to-[#0a0a0a]",
      };
    case "Technology":
      return {
        blobA: "bg-sky-500/20",
        blobB: "bg-[#f59e0b]/20",
        mesh: "from-sky-500/10 via-transparent to-[#0a0a0a]",
      };
    default:
      return {
        blobA: "bg-[#f59e0b]/30",
        blobB: "bg-amber-600/15",
        mesh: "from-[#f59e0b]/14 via-transparent to-[#0a0a0a]",
      };
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | EDUNEX",
    };
  }

  const fullTitle = truncateMeta(`${post.title} | EDUNEX`, META_TITLE_MAX);
  const fullDesc = truncateMeta(post.excerpt, META_DESC_MAX);
  return {
    title: fullTitle,
    description: fullDesc,
    keywords: [...post.tags, "IT Consulting Patna", "Software Company Bihar"],
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: fullTitle,
      description: fullDesc,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const vis = categoryVisualClass(post.category);

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <BlogReadingProgress />
      <div className="relative z-[1]">
        <BlogPostingSchema
          post={{
            title: post.title,
            description: post.excerpt,
            image: `${SITE_URL}/logo.jpg`,
            datePublished: new Date(post.date).toISOString().split("T")[0],
            authorName: post.author,
            url: `${SITE_URL}/blog/${post.slug}`,
          }}
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Blog", item: "/blog" },
            { name: post.title, item: `/blog/${post.slug}` },
          ]}
        />

        {/* Hero */}
        <SectionAmbient
          preset="surface"
          className="relative overflow-hidden border-b border-white/[0.06] pb-20 pt-10 md:pb-28 md:pt-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            aria-hidden
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 70% 55% at 50% 0%, black 15%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="mb-10">
              <Link
                href="/blog"
                className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-gray-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition-all hover:border-[#f59e0b]/35 hover:text-[#fde68a]"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden
                />
                Back to articles
              </Link>
            </div>

            <div className="mx-auto max-w-[760px] text-center md:text-left">
              <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/[0.07] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#fde68a]/95 shadow-[0_0_32px_-12px_rgba(245,158,11,0.45)]">
                  <Sparkles
                    className="h-3.5 w-3.5 text-[#fbbf24]"
                    strokeWidth={2}
                    aria-hidden
                  />
                  {post.category}
                </span>
                <span className="hidden h-4 w-px bg-white/15 sm:block" />
                <span className="flex items-center gap-1.5 text-xs text-gray-500">
                  <BookOpen className="h-3.5 w-3.5 text-[#f59e0b]/70" aria-hidden />
                  Insight
                </span>
              </div>

              <h1 className="text-balance text-[2rem] font-semibold leading-[1.12] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
                <span className="bg-gradient-to-b from-white via-white to-gray-400/90 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-gray-400 md:mx-0 md:text-lg [text-wrap:pretty]">
                {post.excerpt}
              </p>

              <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.05] via-transparent to-transparent p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#f59e0b]/25 bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 shadow-[0_0_28px_-10px_rgba(245,158,11,0.5)]">
                    <User className="h-5 w-5 text-[#fbbf24]" aria-hidden />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-gray-500">{post.authorRole}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
                  <span className="inline-flex items-center gap-2 tabular-nums">
                    <Calendar className="h-4 w-4 text-[#f59e0b]/80" aria-hidden />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#f59e0b]/80" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>

        {/* Featured visual + article */}
        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-white/[0.06] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1100px] px-6">
            <div className="mx-auto max-w-[760px]">
              {/* Abstract hero frame */}
              <div className="relative mb-14 overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#050505] shadow-[0_40px_100px_-48px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div
                  className={`pointer-events-none absolute -left-1/4 top-1/2 h-[min(80%,420px)] w-[min(80%,420px)] -translate-y-1/2 rounded-full blur-3xl ${vis.blobA}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute -right-1/4 bottom-0 h-[min(60%,320px)] w-[min(60%,320px)] rounded-full blur-3xl ${vis.blobB}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${vis.mesh}`}
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/45 to-transparent" />
                <div className="relative flex min-h-[220px] flex-col justify-end p-8 md:min-h-[280px] md:p-10">
                  <p className="max-w-lg font-serif text-lg italic leading-relaxed text-gray-300/95 md:text-xl">
                    &ldquo;{post.excerpt.slice(0, 140)}
                    {post.excerpt.length > 140 ? "…" : ""}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]/75">
                    <span className="h-px w-8 bg-gradient-to-r from-[#f59e0b] to-transparent" />
                    EDUNEX editorial
                  </div>
                </div>
              </div>

              <article className="relative">
                <div className="pointer-events-none absolute -inset-px rounded-[1.75rem] bg-gradient-to-b from-[#f59e0b]/12 via-transparent to-transparent opacity-60 blur-sm" />
                <div className="relative rounded-[1.75rem] border border-white/[0.08] bg-[#060606]/90 p-8 shadow-[0_32px_80px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm md:p-11 lg:p-14">
                  <div
                    className={[
                      "blog-content prose prose-invert max-w-none",
                      "prose-lg md:prose-xl",
                      "prose-p:text-gray-300/95 prose-p:leading-[1.75]",
                      "prose-headings:scroll-mt-28 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white",
                      "prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-white/[0.08] prose-h2:pb-3 prose-h2:text-2xl md:prose-h2:text-3xl",
                      "prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-lg prose-h3:text-[#fde68a]/95 md:prose-h3:text-xl",
                      "prose-strong:text-white prose-strong:font-semibold",
                      "prose-a:text-[#fbbf24] prose-a:no-underline hover:prose-a:underline",
                    ].join(" ")}
                  >
                    <div
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>
                </div>
              </article>

              {/* Tags */}
              <div className="mt-12 border-t border-white/[0.07] pt-10">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Topics
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-4 py-2 text-xs font-medium text-[#fde68a]/90 transition-colors hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/10"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-white/[0.1] bg-gradient-to-br from-[#141414] via-[#0c0c0c] to-[#050505] p-8 shadow-[0_32px_90px_-48px_rgba(0,0,0,0.95)] md:p-10">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f59e0b]/[0.12] blur-3xl"
                  aria-hidden
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/35 to-transparent" />
                <div className="relative grid gap-10 md:grid-cols-[1fr_auto] md:items-center md:gap-12">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white md:text-[1.65rem]">
                      Ready for the next step?
                    </h2>
                    <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-gray-400 md:text-base">
                      Share this article or talk to our Patna team about software,
                      SEO, and compliance tailored to your business.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                    <Link href="/services" className="sm:shrink-0">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] sm:w-auto"
                      >
                        Services
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-80" />
                      </Button>
                    </Link>
                    <Link href="/case-studies" className="sm:shrink-0">
                      <Button
                        variant="outline"
                        className="w-full rounded-full border-white/15 bg-white/[0.04] text-gray-200 hover:bg-white/[0.08] sm:w-auto"
                      >
                        Case studies
                      </Button>
                    </Link>
                    <Link href="/contact" className="sm:shrink-0">
                      <Button className="w-full rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 font-semibold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] hover:shadow-[0_0_52px_-6px_rgba(245,158,11,0.55)] sm:w-auto">
                        Get in touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
