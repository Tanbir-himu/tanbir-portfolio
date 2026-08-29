import type { ComponentPropsWithoutRef } from "react";

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="font-display text-2xl sm:text-3xl font-bold text-text-primary mt-12 mb-4"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="font-display text-xl sm:text-2xl font-semibold text-text-primary mt-8 mb-3"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="text-base sm:text-lg leading-relaxed text-text-secondary mb-5" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="text-accent-cyan underline underline-offset-4 hover:text-accent-purple transition-colors"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc list-outside pl-6 space-y-2 text-text-secondary mb-5" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal list-outside pl-6 space-y-2 text-text-secondary mb-5" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l-2 border-accent-purple pl-4 italic text-text-secondary my-6"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="font-mono text-sm bg-bg-tertiary text-accent-cyan px-1.5 py-0.5 rounded"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="font-mono text-sm bg-bg-tertiary border border-border rounded-xl p-4 overflow-x-auto my-6"
      {...props}
    />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="text-text-primary font-semibold" {...props} />
  ),
  hr: () => <hr className="border-border my-10" />,
};
