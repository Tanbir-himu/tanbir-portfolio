"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      aria-label="Scroll to About section"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent-cyan transition-colors"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown size={28} aria-hidden="true" />
    </motion.a>
  );
}
