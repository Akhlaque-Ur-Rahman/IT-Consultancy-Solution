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
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { SectionAmbient } from "@/components/SectionAmbient";

export default function ResourcesPage() {
  const whitepapers = [
    {
      title: "The Bihar Digital Growth Guide 2026",
      description:
        "A 50-page roadmap for taking your regional business to a state-wide level.",
      downloads: 1234,
    },
    {
      title: "GST Compliance Checklist for SMEs",
      description:
        "Everything you need to keep your tax records safe and ready.",
      downloads: 987,
    },
    {
      title: "E-commerce for Local Retailers",
      description:
        "How to build an online store that works even on slow mobile data.",
      downloads: 756,
    },
  ];

  return (
    <div className="page-depth-grain min-h-screen bg-black">
      <div className="relative z-[1]">
        <BreadcrumbSchema
          items={[
            { name: "Home", item: "/" },
            { name: "Resources", item: "/resources" },
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
                  Knowledge Hub
                </span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl md:leading-tight">
                <span className="bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] bg-clip-text text-transparent">
                  Resources
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400 md:text-xl [text-wrap:balance]">
                Insights, guides, and knowledge to help you make informed
                decisions
              </p>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surfaceRaised"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-3xl font-bold text-white">
                  Latest Blog Posts
                </h2>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    className="border-[#f59e0b] bg-transparent text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black"
                  >
                    View All Posts
                  </Button>
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <motion.div
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/35"
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
                          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                        />
                        <div className="absolute left-4 top-4 rounded-full border border-[#f59e0b]/20 bg-black/80 px-3 py-1 text-xs font-medium text-[#f59e0b] backdrop-blur-sm">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" aria-hidden />
                            <span>{post.date}</span>
                          </div>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-white transition-colors group-hover:text-[#f59e0b]">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-3 text-sm text-gray-400">
                          {post.excerpt}
                        </p>
                        <span className="text-sm font-medium text-[#f59e0b] transition-colors group-hover:text-[#fbbf24]">
                          Read More →
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionAmbient>

        <SectionAmbient
          preset="surface"
          className="border-b border-[#262626] py-16 md:py-24"
        >
          <div className="mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-8 text-3xl font-bold text-white">
                Whitepapers &amp; Guides
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                {whitepapers.map((paper, index) => (
                  <motion.div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-[#171717] via-[#121212] to-[#0c0c0c] p-8 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.85)] transition-all duration-300 hover:border-[#f59e0b]/35"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f59e0b]/10 text-[#f59e0b]">
                      <Download className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-[#f59e0b]">
                      {paper.title}
                    </h3>
                    <p className="mb-6 text-sm text-gray-400">
                      {paper.description}
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-xs text-gray-500">
                        {paper.downloads.toLocaleString()} downloads
                      </span>
                      <Button className="border-0 bg-gradient-to-r from-[#f59e0b] to-[#d97706] font-medium text-black hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
          <div className="relative z-10 mx-auto max-w-[1400px] px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12 text-center">
                <HelpCircle className="mx-auto mb-4 h-12 w-12 text-[#f59e0b]" />
                <h2 className="mb-4 text-3xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-2xl text-gray-400">
                  Find answers to common questions about our services
                </p>
              </div>

              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#121212] px-6 transition-colors hover:border-[#f59e0b]/30"
                    >
                      <AccordionTrigger className="py-6 hover:no-underline">
                        <div className="text-left">
                          <p className="font-semibold text-white">
                            {faq.question}
                          </p>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 leading-relaxed text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-[#f59e0b] to-[#d97706] transition-transform duration-200 group-hover:scale-x-100" />
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mt-12 text-center">
                <p className="mb-4 text-gray-400">Still have questions?</p>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-8 py-6 font-semibold text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </SectionAmbient>
      </div>
    </div>
  );
}
