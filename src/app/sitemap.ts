import { MetadataRoute } from 'next';
import { services, caseStudies, blogPosts } from '@/data/mockData';
import { SITE_URL } from '@/config/company';

/** Stable lastmod for static content - avoids changing on every request */
const staticLastMod = process.env.VERCEL_BUILD_TIME
  ? new Date(process.env.VERCEL_BUILD_TIME)
  : new Date('2026-03-01');

function parseDate(dateStr: string): Date {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? staticLastMod : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || SITE_URL;

  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/case-studies',
    '/compliance',
    '/contact',
    '/cookies',
    '/privacy',
    '/resources',
    '/services',
    '/solutions',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: staticLastMod,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: staticLastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.slug}`,
    lastModified: staticLastMod,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseDate(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
