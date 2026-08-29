import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { mdxComponents } from "@/components/blog/MDXComponents";
import profile from "@/data/profile.json";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${profile.site.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const shareUrl = `${profile.site.url}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { "@type": "Person", name: "Md Tanbir Hossen Joy" },
  };

  return (
    <article className="pt-36 pb-24 sm:pt-40 sm:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:gap-2.5 transition-all mb-8"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-text-muted">
          <span className="rounded-full bg-accent-purple/15 px-2.5 py-1 text-accent-purple font-medium">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
          {post.title}
        </h1>

        <div className="mt-12">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="mt-16 flex items-center gap-4 border-t border-border pt-8">
          <span className="text-sm text-text-secondary">Share:</span>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-panel text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
            aria-label="Share via email"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-panel text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
