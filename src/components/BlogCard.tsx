"use client";

import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import Link from "next/link";

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
  tags,
  delay = 0,
}: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-[#121212] border border-[#262626] rounded-2xl overflow-hidden hover:border-[#f59e0b]/40 transition-all duration-300 flex flex-col h-full hover:shadow-2xl"
    >
      {/* Image Placeholder/Background */}
      <div className="relative h-48 bg-[#1a1a1a] overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
          <Tag className="w-12 h-12 text-[#262626] group-hover:text-[#f59e0b]/20 transition-colors duration-300" />
        </div>
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-black text-xs font-bold uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{excerpt}</p>

        <div className="mt-auto pt-6 border-t border-[#262626] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#262626] flex items-center justify-center">
              <User className="w-4 h-4 text-gray-400" />
            </div>
            <span className="text-xs font-medium text-gray-300">{author}</span>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-1 text-sm font-semibold text-[#f59e0b] group-hover:gap-2 transition-all"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
