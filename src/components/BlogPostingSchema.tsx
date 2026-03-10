import Script from "next/script";
import { SITE_URL } from "@/config/company";

interface BlogPostingSchemaProps {
  post: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    authorName: string;
    url: string;
  };
}

export function BlogPostingSchema({ post }: BlogPostingSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "EDUNEX Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };

  return (
    <Script
      id="blog-posting-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
