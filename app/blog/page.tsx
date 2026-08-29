import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { getAllPosts } from "@/lib/blog";
import profile from "@/data/profile.json";

export const metadata: Metadata = {
  title: `Blog | ${profile.site.name}`,
  description: "Thoughts and insights on AI data work, evaluation, and the journey into AI from Md Tanbir Hossen Joy.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-36 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm font-medium tracking-[0.2em] text-accent-cyan uppercase mb-3">
          BLOG
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
          Thoughts & Insights
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary text-base sm:text-lg">
          Reflections on AI data work, evaluation, and the path into artificial intelligence.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.1}>
              <BlogCard post={post} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
