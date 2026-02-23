import { blogPosts } from "@/data/mockData";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

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

  return {
    title: `${post.title} | EDUNEX Blog`,
    description: post.excerpt,
    keywords:
      post.tags.join(", ") +
      ", IT Consulting, regional business, regional tech",
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-4 pb-20 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog">
            <Button className="bg-[#f59e0b] text-black hover:bg-[#d97706]">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-4 pb-20 min-h-screen bg-black">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-[#f59e0b] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div>
            <span className="px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-bold uppercase tracking-wider mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-[#262626]">
              <div className="flex items-center gap-2 text-white">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/10 flex items-center justify-center">
                  <User className="w-5 h-5 text-[#f59e0b]" />
                </div>
                <div>
                  <p className="font-semibold block">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </header>

        {/* Article Image Placeholder */}
        <div className="relative h-[300px] md:h-[450px] bg-[#121212] rounded-3xl mb-12 overflow-hidden border border-[#262626]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/5 to-transparent" />
          <div className="flex flex-col items-center justify-center h-full text-center p-12">
            <Tag className="w-20 h-20 text-[#262626] mb-4" />
            <p className="text-gray-600 max-w-sm italic">
              Focusing on regional growth and technical excellence for
              businesses in Patna and beyond.
            </p>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-amber max-w-none">
          <div
            className="text-gray-300 leading-relaxed space-y-6 text-lg blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-[#262626]">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[#262626] text-gray-400 text-xs hover:text-[#f59e0b] hover:bg-[#f59e0b]/10 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Sharing & CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#121212] to-[#0a0a0a] border border-[#262626] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Found this useful?
            </h4>
            <p className="text-gray-400 text-sm">
              Share it with your network or talk to us for a custom solution.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[#262626] text-gray-400 hover:text-white hover:bg-[#262626]"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Link href="/contact">
              <Button className="bg-[#f59e0b] text-black hover:bg-[#d97706] px-8">
                Consult an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
