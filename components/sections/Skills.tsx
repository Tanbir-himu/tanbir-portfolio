"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Sparkles as FallbackIcon } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassCard from "@/components/ui/GlassCard";
import profile from "@/data/profile.json";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={profile.skills.eyebrow} title={profile.skills.title} />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.items.map((skill, i) => {
            const Icon =
              (Icons as unknown as Record<string, Icons.LucideIcon>)[skill.icon] ??
              FallbackIcon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary/20 text-accent-cyan">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
