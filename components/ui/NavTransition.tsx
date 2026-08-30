"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavTransitionContextValue {
  navigate: (href: string) => void;
}

const NavTransitionContext = createContext<NavTransitionContextValue | null>(null);

const BURST_COUNT = 10;
const IN_DURATION = 0.28;
const OUT_DURATION = 0.26;
const BURST_COLORS = ["#4F46E5", "#7C3AED", "#06B6D4"];

type Phase = "in" | "out";

export function NavTransitionProvider({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("in");
  const targetRef = useRef<HTMLElement | null>(null);

  const navigate = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion || active) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      targetRef.current = el;
      setPhase("in");
      setActive(true);
    },
    [active]
  );

  const handleInComplete = () => {
    targetRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
    setPhase("out");
  };

  const handleOutComplete = () => {
    setActive(false);
  };

  return (
    <NavTransitionContext.Provider value={{ navigate }}>
      {children}
      <AnimatePresence>
        {active && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center overflow-hidden"
            style={{ perspective: 1000 }}
            aria-hidden="true"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateX: 0 }}
              animate={
                phase === "in"
                  ? { scale: 2.4, opacity: 1, rotateX: 14 }
                  : { scale: 4.5, opacity: 0, rotateX: -10 }
              }
              transition={{
                duration: phase === "in" ? IN_DURATION : OUT_DURATION,
                ease: phase === "in" ? "easeIn" : "easeOut",
              }}
              onAnimationComplete={phase === "in" ? handleInComplete : handleOutComplete}
              style={{
                width: "60vmax",
                height: "60vmax",
                borderRadius: "9999px",
                background:
                  "radial-gradient(circle, rgba(79,70,229,0.9) 0%, rgba(124,58,237,0.85) 45%, rgba(6,182,212,0.55) 75%, transparent 100%)",
                transformStyle: "preserve-3d",
              }}
            />

            {phase === "in" &&
              Array.from({ length: BURST_COUNT }).map((_, i) => {
                const angle = (i / BURST_COUNT) * Math.PI * 2;
                const distance = 220;
                return (
                  <motion.span
                    key={i}
                    className="absolute h-1.5 w-1.5 rounded-full"
                    style={{ background: BURST_COLORS[i % BURST_COLORS.length] }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{
                      x: Math.cos(angle) * distance,
                      y: Math.sin(angle) * distance,
                      opacity: 0,
                    }}
                    transition={{ duration: IN_DURATION + 0.15, ease: "easeOut" }}
                  />
                );
              })}
          </motion.div>
        )}
      </AnimatePresence>
    </NavTransitionContext.Provider>
  );
}

export function useNavTransition() {
  const ctx = useContext(NavTransitionContext);
  if (!ctx) {
    throw new Error("useNavTransition must be used within a NavTransitionProvider");
  }
  return ctx;
}
