"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import profile from "@/data/profile.json";

const ParticleScene = dynamic(() => import("@/components/three/ParticleScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-purple/10 animate-pulse" />
  ),
});

function useParticleCount() {
  const [count, setCount] = useState(800);

  useEffect(() => {
    const update = () => setCount(window.innerWidth < 768 ? 800 : 2000);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return count;
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  const particleCount = useParticleCount();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg-primary"
    >
      <div className="absolute inset-0 z-0">
        <ParticleScene particleCount={particleCount} />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-bg-primary pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-1 rounded-full glass-panel px-4 py-2 font-mono text-sm text-accent-cyan"
        >
          {profile.hero.eyebrow}
          <span className="ml-0.5 inline-block h-4 w-[2px] bg-accent-cyan animate-blink" aria-hidden="true" />
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary"
        >
          {profile.hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-4 text-xl sm:text-2xl font-display font-semibold text-gradient"
        >
          {profile.hero.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-text-secondary"
        >
          {profile.hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton href={profile.hero.ctaPrimary.href} variant="solid">
            {profile.hero.ctaPrimary.label}
          </GradientButton>
          <GradientButton href={profile.hero.ctaSecondary.href} variant="outline">
            {profile.hero.ctaSecondary.label}
          </GradientButton>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center justify-center gap-4">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-panel text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <Linkedin size={18} aria-hidden="true" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Send an email"
            className="flex h-11 w-11 items-center justify-center rounded-full glass-panel text-text-secondary hover:text-accent-cyan transition-colors"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
