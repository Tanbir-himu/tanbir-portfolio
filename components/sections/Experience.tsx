"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import profile from "@/data/profile.json";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={profile.experience.eyebrow} title={profile.experience.title} />

        <div className="relative mt-16">
          <div
            className="absolute left-4 md:left-1/2 top-0 h-full w-px md:-translate-x-1/2 bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan opacity-40"
            aria-hidden="true"
          />

          <ol className="space-y-10 md:space-y-0">
            {profile.experience.items.map((entry, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={`${entry.org}-${i}`}
                  className="relative md:grid md:grid-cols-2 md:gap-x-10 md:py-6"
                >
                  <span
                    className="absolute left-4 md:left-1/2 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-primary ring-4 ring-bg-primary animate-pulse-glow"
                    aria-hidden="true"
                  />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className={cn(
                      "pl-12 md:pl-0",
                      isEven ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"
                    )}
                  >
                    <GlassCard className="text-left inline-block w-full">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold text-text-primary">
                          {entry.org}
                        </h3>
                        {entry.status && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            {entry.status}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-accent-cyan">{entry.role}</p>
                      <p className="mt-1 text-xs text-text-muted font-mono">{entry.period}</p>
                      <ul className="mt-4 space-y-2">
                        {entry.details.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-text-secondary leading-relaxed flex gap-2"
                          >
                            <span className="text-accent-purple mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-purple" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
