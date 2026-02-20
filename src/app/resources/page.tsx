"use client";

import { motion } from "motion/react";
import { blogPosts, faqs } from "@/data/mockData";
import { BookOpen, Download, HelpCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import Link from "next/link";
import type { Metadata } from "next";

export default function ResourcesPage() {
  const whitepapers = [
    {
      title: "Digital Transformation ROI: A 2026 Guide",
      description:
        "Measuring the impact of digital initiatives on business outcomes",
      downloads: 1234,
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Step-by-step guide to successful cloud adoption",
      downloads: 987,
    },
    {
      title: "E-commerce Security & Compliance",
      description:
        "Protecting customer data and ensuring regulatory compliance",
      downloads: 756,
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 mb-4">
            <BookOpen className="w-4 h-4 text-[#f59e0b]" />
            <span className="text-sm font-medium text-[#f59e0b]">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Resources</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, guides, and knowledge to help you make informed decisions
          </p>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Latest Blog Posts</h2>
            <Button
              variant="outline"
              className="border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black bg-transparent"
            >
              View All Posts
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group relative bg-[#121212] rounded-2xl border border-[#262626] overflow-hidden hover:border-[#f59e0b]/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-48 bg-[#0a0a0a]">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${encodeURIComponent(post.image)}`}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-sm text-xs font-medium text-[#f59e0b] border border-[#f59e0b]/20">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 group-hover:text-[#f59e0b] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-[#f59e0b] hover:text-[#fbbf24] p-0 hover:bg-transparent"
                  >
                    Read More →
                  </Button>
                </div>
                {/* Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Whitepapers Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Whitepapers & Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden bg-[#121212] rounded-2xl border border-[#262626] p-8 hover:border-[#f59e0b]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center mb-6 text-[#f59e0b]">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {paper.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {paper.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {paper.downloads.toLocaleString()} downloads
                  </span>
                  <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] text-black font-medium border-0">
                    <Download className="mr-2 w-4 h-4" />
                    Download
                  </Button>
                </div>
                {/* Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-[#f59e0b] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="group relative overflow-hidden bg-[#121212] rounded-xl border border-[#262626] px-6 hover:border-[#f59e0b]/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="text-left">
                      <p className="font-semibold text-white">{faq.question}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                  {/* Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black font-semibold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] px-8 py-6">
                Contact Support
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
