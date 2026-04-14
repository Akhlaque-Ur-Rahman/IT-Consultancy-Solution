"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/mockData";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  Filter,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { PageFinalCTA } from "@/components/PageFinalCTA";
import { SectionAmbient } from "@/components/SectionAmbient";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/config/company";
import { buildContactUrl } from "@/lib/contactPrefill";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "technology", label: "Technology" },
    { id: "compliance", label: "Compliance" },
    { id: "development", label: "Development" },
    { id: "solutions", label: "Solutions" },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Resources", item: "/resources" },
            { name: "Blog", item: "/blog" },
          ]}
        />

        <SectionAmbient
          preset="surface"
          className="relative border-b border-[#262626] py-20 md:py-28 lg:py-32"
        >
          <div className="relative mx-auto max-w-[1400px] px-6">
            <div
              className="pointer-events-none absolute inset-0 -mx-6 overflow-hidden rounded-none md:-mx-10"
              aria-hidden
            >
              <div
                className="absolute -left-1/4 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full opacity-[0.12]"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(245,158,11,0.55) 0%, transparent 62%)",
                  filter: "blur(2px)",
                }}
              />
              <div
                className="absolute -right-1/4 bottom-0 h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full opacity-[0.1]"
                style={{
                  background:
                    "radial-gradient(circle at 60% 60%, rgba(251,191,36,0.45) 0%, transparent 65%)",
                  filter: "blur(3px)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "64px 64px",
                  maskImage:
                    "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
                }}
              />
            </div>

            <div className="relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 shadow-[0_0_0_1px_rgba(245,158,11,0.08),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
                  <BookOpen
                    className="h-4 w-4 text-[#fbbf24]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium tracking-wide text-[#fde68a]/90">
                    Insights &amp; guides
                  </span>
                  <span className="hidden h-3 w-px bg-white/15 sm:inline" />
                  <span className="hidden text-[13px] text-gray-500 sm:inline">
                    From the EDUNEX team
                  </span>
                </div>

                <h1 className="mb-6 max-w-[22ch] text-left text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.08] lg:max-w-none lg:text-[3.25rem] xl:text-[3.5rem]">
                  Practical ideas to{" "}
                  <span className="relative inline">
                    <span className="relative z-[1] bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                      automate &amp; grow
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[0.35em] rounded-sm bg-gradient-to-r from-[#f59e0b]/25 via-[#fbbf24]/20 to-transparent opacity-90"
                      aria-hidden
                    />
                  </span>{" "}
                  your business in Bihar
                </h1>

                <p className="mb-10 max-w-xl text-left text-base leading-relaxed text-gray-400 md:text-lg [text-wrap:balance]">
                  Articles on digital transformation, GST and compliance,
                  billing and ERP, and local SEO - written for regional SMEs who
                  want clarity, not jargon.
                </p>

                <div className="mb-10 flex flex-wrap gap-2">
                  {[
                    { label: "Technology", icon: Cpu },
                    { label: "Development", icon: TrendingUp },
                    { label: "Compliance", icon: ShieldCheck },
                  ].map(({ label, icon: Icon }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#0a0a0a]/80 px-3.5 py-1.5 text-xs font-medium text-gray-300 shadow-sm backdrop-blur-sm transition-colors hover:border-[#f59e0b]/25 hover:text-[#fde68a]"
                    >
                      <Icon
                        className="h-3.5 w-3.5 text-[#f59e0b]/90"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link href="#blog-posts">
                    <Button className="group h-12 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 text-[15px] font-semibold text-black shadow-[0_0_40px_-8px_rgba(245,158,11,0.45)] transition-all duration-300 hover:shadow-[0_0_48px_-6px_rgba(245,158,11,0.55)]">
                      Browse articles
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="h-12 rounded-full border-white/15 bg-white/[0.02] px-8 text-[15px] text-white backdrop-blur-sm transition-colors hover:border-[#f59e0b]/35 hover:bg-white/[0.04]"
                    >
                      Talk to us
                    </Button>
                  </Link>
                </div>

                <div className="mt-12 flex flex-wrap items-baseline gap-x-10 gap-y-4 border-t border-white/[0.06] pt-10">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      {blogPosts.length}+
                    </p>
                    <p className="text-sm text-gray-500">Articles</p>
                  </div>
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white tabular-nums">
                      {COMPANY_INFO.yearsOfExperience}+
                    </p>
                    <p className="text-sm text-gray-500">Years publishing</p>
                  </div>
                  <div className="max-w-[200px] text-sm leading-snug text-gray-500">
                    Regional focus - Patna, Bihar SMEs, real workflows.
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative lg:col-span-5"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="relative mx-auto aspect-[4/5] max-w-md lg:max-w-none">
                  <div
                    className="absolute inset-0 rounded-[2rem] border border-white/[0.08] bg-gradient-to-br from-[#161616] via-[#0c0c0c] to-black shadow-[0_32px_120px_-48px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.05),0_0_0_1px_rgba(245,158,11,0.06)]"
                    aria-hidden
                  />
                  <div className="relative flex h-full flex-col justify-between p-7 sm:p-9">
                    <div>
                      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f59e0b]/80">
                        What you&apos;ll find
                      </p>
                      <p className="text-lg font-medium text-white/95">
                        Guides aligned with how we build &amp; advise
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          t: "Growth & visibility",
                          s: "Local SEO, campaigns, and digital presence for Bihar markets",
                        },
                        {
                          t: "Operations & software",
                          s: "Billing, ERP, and custom apps your staff can actually use",
                        },
                        {
                          t: "Compliance & filings",
                          s: "GST, registrations, and statutory peace of mind",
                        },
                      ].map((row, i) => (
                        <div
                          key={row.t}
                          className="group rounded-2xl border border-white/[0.05] bg-black/40 p-4 backdrop-blur-md transition-colors hover:border-[#f59e0b]/20"
                          style={{ transitionDelay: `${i * 40}ms` }}
                        >
                          <p className="text-sm font-medium text-white">
                            {row.t}
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-gray-500 group-hover:text-gray-400">
                            {row.s}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-2xl border border-dashed border-[#f59e0b]/25 bg-[#f59e0b]/[0.04] px-4 py-3 text-center text-xs text-[#fde68a]/90">
                      Same voice as our services &amp; solutions pages - no
                      generic filler.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          id="blog-posts"
          preset="surfaceRaised"
          className="border-b border-[#262626] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/[0.06] px-3.5 py-1.5">
                <Sparkles
                  className="h-3.5 w-3.5 text-[#fbbf24]"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#fde68a]/90">
                  Article library
                </span>
              </div>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[2.35rem] lg:leading-[1.15]">
                Browse{" "}
                <span className="bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] bg-clip-text text-transparent">
                  articles
                </span>
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400 [text-wrap:pretty]">
                Filter by topic or search - every piece is written for Bihar SMEs
                and regional operators, not generic enterprise noise.
              </p>
            </motion.div>

            <div className="relative mb-10 md:mb-12">
              <div
                className="pointer-events-none absolute -inset-4 rounded-[1.75rem] opacity-[0.35]"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,158,11,0.14) 0%, transparent 55%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] p-4 shadow-[0_24px_64px_-40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                    maskImage:
                      "radial-gradient(ellipse 90% 80% at 50% 0%, black, transparent)",
                  }}
                  aria-hidden
                />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f59e0b]/25 to-transparent" />

                <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <motion.div
                    className="flex flex-wrap items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12, duration: 0.45 }}
                  >
                    <div className="mr-1 flex items-center gap-2 text-gray-400">
                      <Filter className="h-4 w-4 shrink-0" aria-hidden />
                      <span className="text-sm font-medium">Filter</span>
                    </div>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 sm:px-6 sm:py-3 sm:text-sm ${
                          selectedCategory === category.id
                            ? "scale-[1.02] bg-[#f59e0b] font-semibold text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                            : "border border-white/[0.08] bg-black/40 text-gray-400 backdrop-blur-sm hover:border-[#f59e0b]/40 hover:text-[#fde68a]"
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </motion.div>

                  <motion.div
                    className="relative w-full lg:max-w-sm lg:shrink-0"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12, duration: 0.45 }}
                  >
                    <Search
                      className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                      aria-hidden
                    />
                    <input
                      type="search"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full rounded-full border border-white/[0.1] bg-black/50 py-3 pl-10 pr-4 text-sm text-gray-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-colors placeholder:text-gray-600 focus:border-[#f59e0b]/45 focus:outline-none focus:ring-1 focus:ring-[#f59e0b]/25"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-8"
            >
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  slug={post.slug}
                  title={post.title}
                  category={post.category}
                  date={post.date}
                  readTime={post.readTime}
                  excerpt={post.excerpt}
                  image={post.image}
                  author={post.author}
                  authorRole={post.authorRole}
                  tags={post.tags}
                  delay={index * 0.08}
                />
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-[#141414] to-[#0c0c0c] px-6 py-16 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <p className="text-lg text-gray-400">
                  No articles match your filters or search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-[#f59e0b]/35 bg-[#f59e0b]/[0.08] px-6 py-2.5 text-sm font-semibold text-[#fde68a] transition-colors hover:bg-[#f59e0b]/[0.14]"
                >
                  Clear filters &amp; search
                </button>
              </div>
            )}
          </div>
        </SectionAmbient>

        <PageFinalCTA
          id="blog-final-cta"
          title={
            <>
              Have a{" "}
              <span className="bg-gradient-to-r from-[#fde68a] via-[#f59e0b] to-[#d97706] bg-clip-text text-transparent">
                Tech Challenge?
              </span>
            </>
          }
          description="Our experts can help you navigate digital transformation with structured solutions and scalable results - same team that ships your software, SEO, and compliance."
          primaryHref={buildContactUrl({
            serviceSlug: "consulting",
            ref: "/blog",
          })}
          primaryLabel="Get free consultation"
          secondaryHref="/services"
          secondaryLabel="Browse services"
          trustItems={[
            "Bihar-first delivery",
            "Clear scope & pricing",
            "No vendor lock-in",
          ]}
        />
      </div>
    </div>
  );
}
