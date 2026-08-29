"use client";

import { motion, type Variants } from "framer-motion";
import { HTMLAttributes } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  as?: "div" | "section";
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
}
