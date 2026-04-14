"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/mockData";
import { BookOpen, Filter, Search } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";
import { Button } from "@/components/ui/button";

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
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-2 shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                <BookOpen className="h-4 w-4 text-[#fbbf24]" aria-hidden />
                <span className="text-sm font-semibold text-[#fbbf24]">
                  Insights &amp; Expertise
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl md:leading-tight">
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Blogs
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                Stay updated with the latest trends in digital transformation,
                regional business growth, and technology solutions.
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="mb-10 flex flex-col items-stretch justify-between gap-6 md:flex-row md:items-center">
              <motion.div
                className="flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mr-1 flex items-center gap-2 text-gray-400">
                  <Filter className="h-4 w-4" aria-hidden />
                  <span className="text-sm font-medium">Filter:</span>
                </div>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-5 py-2.5 text-xs font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "scale-105 bg-[#f59e0b] font-semibold text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                        : "border border-[#262626] bg-[#121212] text-gray-400 hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </motion.div>

              <motion.div
                className="relative w-full md:w-72"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Search
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                  aria-hidden
                />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-[#262626] bg-[#121212] py-2.5 pl-10 pr-4 text-sm text-gray-300 transition-colors focus:border-[#f59e0b]/50 focus:outline-none"
                />
              </motion.div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                  delay={index * 0.1}
                />
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-lg text-gray-500">
                  No blog posts found matching your criteria.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-[#f59e0b] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="relative border-t border-[#262626] py-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                Have a Tech Challenge?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 md:text-xl">
                Our experts can help you navigate your digital transformation
                journey with structured solutions and scalable results.
              </p>
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 py-7 text-lg font-semibold text-black transition-all duration-200 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
