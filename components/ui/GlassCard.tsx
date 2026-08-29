import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function GlassCard({
  className,
  hover = true,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-panel glow-border rounded-2xl p-6",
        hover &&
          "transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
