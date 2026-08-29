import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type CommonProps = {
  variant?: "solid" | "outline";
  className?: string;
  children: React.ReactNode;
};

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type GradientButtonProps = AsButton | AsAnchor;

export default function GradientButton({
  variant = "solid",
  className,
  children,
  href,
  ...props
}: GradientButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan",
    variant === "solid" &&
      "bg-gradient-primary text-white hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-0.5",
    variant === "outline" &&
      "border border-accent-purple/50 text-text-primary hover:bg-accent-purple/10 hover:border-accent-purple hover:-translate-y-0.5",
    className
  );

  if (href) {
    return (
      <a href={href} className={styles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={styles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
