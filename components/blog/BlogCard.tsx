import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full group">
      <GlassCard className="h-full flex flex-col">
        <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
          <span className="rounded-full bg-accent-purple/15 px-2.5 py-1 text-accent-purple font-medium">
            {post.category}
          </span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold text-text-primary group-hover:text-gradient transition-colors">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">
          {post.excerpt.slice(0, 150)}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-cyan">
          Read More
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </GlassCard>
    </Link>
  );
}
