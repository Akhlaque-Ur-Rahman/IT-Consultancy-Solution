"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/mockData";
import { Filter, Search } from "lucide-react";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

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
    <div className="pt-4 lg:pt-8 pb-20 min-h-screen bg-black">
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "/" },
          { name: "Resources", item: "/resources" },
          { name: "Blog", item: "/blog" },
        ]}
      />
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <span className="text-sm font-medium text-[#f59e0b]">
              Insights & Expertise
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Blogs</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends in digital transformation,
            regional business growth, and technology solutions.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <motion.div
            className="flex flex-wrap items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-gray-400 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-[#f59e0b] text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                    : "bg-[#121212] text-gray-400 border border-[#262626] hover:border-[#f59e0b]/50 hover:text-[#f59e0b]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="relative w-full md:w-64"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#262626] rounded-full py-2 pl-10 pr-4 text-sm text-gray-300 focus:outline-none focus:border-[#f59e0b]/50 transition-colors"
            />
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No blog posts found matching your criteria.
            </p>
            <button
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

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 bg-[#121212] border border-[#262626] rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-white">
            Have a Tech Challenge?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Our experts can help you navigate your digital transformation
            journey with structured solutions and scalable results.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] text-black rounded-lg font-semibold transition-all duration-200">
              Get Free Consultation
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
