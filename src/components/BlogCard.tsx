"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  User,
} from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

interface BlogCardProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  tags: string[];
  delay?: number;
}

export function BlogCard({
  slug,
  title,
  category,
  date,
  readTime,
  excerpt,
  image,
  author,
  authorRole,
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative h-full"
    >
      <Link
        href={`/blog/${slug}`}
        className="block h-full rounded-[1.35rem] no-underline outline-none ring-offset-2 ring-offset-black focus-visible:ring-2 focus-visible:ring-[#f59e0b]/50"
      >
        <article className="relative flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.07] bg-gradient-to-b from-[#141414] via-[#101010] to-[#0a0a0a] shadow-[0_28px_72px_-36px_rgba(0,0,0,0.95)] transition-[border-color,box-shadow] duration-500 hover:border-[#f59e0b]/22 hover:shadow-[0_36px_88px_-40px_rgba(0,0,0,0.92),0_0_0_1px_rgba(245,158,11,0.06)]">
          <div
            className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-[#f59e0b]/[0.06] blur-3xl transition-opacity duration-500 group-hover:bg-[#f59e0b]/[0.1]"
            aria-hidden
          />
          <div className="absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-80" />

          <div className="relative aspect-[16/10] min-h-[168px] overflow-hidden bg-[#0a0a0a] sm:min-h-[180px]">
            <div
              className="pointer-events-none absolute inset-0 z-[1] opacity-[0.4]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24V0h24' fill='none' stroke='%23ffffff' stroke-opacity='0.05'/%3E%3C/svg%3E")`,
                backgroundSize: "24px 24px",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[#f59e0b]/[0.08] via-transparent to-transparent" />
            <ImageWithFallback
              src={`https://source.unsplash.com/800x600/?${encodeURIComponent(image)}`}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#101010] via-[#101010]/40 to-black/20" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/30 via-transparent to-transparent" />

            <div className="absolute left-4 top-4 z-10">
              <span className="rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fde68a] shadow-lg shadow-black/30 backdrop-blur-md">
                {category}
              </span>
            </div>

            <div className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-black/50 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-[#f59e0b]/35 group-hover:text-[#fbbf24]">
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </div>
          </div>

          <div className="relative z-[1] flex flex-1 flex-col p-6 pt-5">
            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-gray-500">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {readTime}
              </span>
            </div>

            <h3 className="mb-3 line-clamp-2 text-lg font-semibold leading-snug tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#fef3c7]">
              {title}
            </h3>
            <div className="mb-4 h-px w-12 rounded-full bg-gradient-to-r from-[#f59e0b]/70 to-transparent transition-all duration-300 group-hover:w-16" />

            <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400 [text-wrap:pretty] line-clamp-3">
              {excerpt}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02]">
                  <User
                    className="h-4 w-4 text-gray-300"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-gray-200">
                    {author}
                  </p>
                  <p className="truncate text-[10px] uppercase tracking-wider text-gray-500">
                    {authorRole}
                  </p>
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#f59e0b] transition-all duration-300 group-hover:gap-2">
                Read
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-[0.25] bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#d97706] opacity-80 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100" />
        </article>
      </Link>
    </motion.div>
  );
}
