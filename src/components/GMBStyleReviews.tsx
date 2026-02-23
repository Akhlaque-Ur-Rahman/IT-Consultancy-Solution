"use client";
import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Review {
  id: string;
  author: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GMBStyleReviewsProps {
  reviews: Review[];
}

export function GMBStyleReviews({ reviews }: GMBStyleReviewsProps) {
  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header with Rating */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Reviews & Testimonials
          </h2>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-[#f59e0b] text-[#f59e0b]"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-white">{avgRating}</span>
          </div>
          <p className="text-gray-400">
            Based on {reviews.length}+ client reviews
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              className="bg-[#121212] border border-[#262626] rounded-lg p-6 hover:border-[#f59e0b]/30 transition-all duration-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Review Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  {review.avatar ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-[#262626] flex-shrink-0">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/100x100/?${encodeURIComponent(review.avatar)}`}
                        alt={review.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center text-black font-bold flex-shrink-0">
                      {review.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-white">
                      {review.author}
                    </div>
                    <div className="text-sm text-gray-400">
                      {review.company}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-[#f59e0b]/30 group-hover:text-[#f59e0b]/50 transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? "fill-[#f59e0b] text-[#f59e0b]"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#f59e0b]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Verified Reviews
          </span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#f59e0b]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            Trusted Partner
          </span>
          <span>•</span>
          <span>100+ 5-Star Reviews</span>
        </div>
      </div>
    </section>
  );
}
