import { blogPosts } from "@/data/mockData";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { BlogPostingSchema } from "@/components/BlogPostingSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import {
  SITE_URL,
  META_TITLE_MAX,
  META_DESC_MAX,
  truncateMeta,
} from "@/config/company";

type Props = {
  params: Promise<{ slug: string }>;
};

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

  return (
    <div className="page-depth-grain min-h-screen bg-black">
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

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mx-auto max-w-[800px]">
              <div className="mb-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#f59e0b]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden />
                  Back to Articles
                </Link>
              </div>

              <header className="mb-0">
                <span className="mb-6 inline-block rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#f59e0b] shadow-[0_0_24px_-12px_rgba(245,158,11,0.35)]">
                  {post.category}
                </span>
                <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl md:leading-tight">
                  {post.title}
                </h1>

                <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-[#262626] pb-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f59e0b]/10">
                      <User className="h-5 w-5 text-[#f59e0b]" aria-hidden />
                    </div>
                    <div>
                      <p className="block font-semibold">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.authorRole}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden />
                    {post.readTime}
                  </div>
                </div>
              </header>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mx-auto max-w-[800px]">
              <div className="relative mb-12 h-[300px] overflow-hidden rounded-3xl border border-white/[0.09] bg-[#121212] md:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 to-transparent" />
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <Tag className="mb-4 h-20 w-20 text-[#262626]" aria-hidden />
                  <p className="max-w-sm italic text-gray-600">
                    Focusing on regional growth and technical excellence for
                    businesses in Patna and beyond.
                  </p>
                </div>
              </div>

              <article className="prose prose-invert prose-amber max-w-none">
                <div
                  className="blog-content space-y-6 text-lg leading-relaxed text-gray-300"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              <div className="mt-12 border-t border-[#262626] pt-8">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="cursor-pointer rounded-md bg-[#262626] px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-[#f59e0b]/10 hover:text-[#f59e0b]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] md:flex-row">
                <div>
                  <h2 className="mb-2 text-xl font-bold text-white">
                    Found this useful?
                  </h2>
                  <p className="text-sm text-gray-400">
                    Share it with your network or talk to us for a custom
                    solution.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-[#262626] text-gray-400 hover:bg-[#262626] hover:text-white"
                  >
                    <Share2 className="mr-2 h-4 w-4" aria-hidden />
                    Share
                  </Button>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-[#262626] text-gray-400 hover:bg-[#262626] hover:text-white"
                    >
                      Explore Services
                    </Button>
                  </Link>
                  <Link href="/case-studies">
                    <Button
                      variant="outline"
                      className="border-[#262626] text-gray-400 hover:bg-[#262626] hover:text-white"
                    >
                      Case Studies
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 font-semibold text-black hover:shadow-[0_0_24px_rgba(245,158,11,0.35)]">
                      Consult an Expert
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
