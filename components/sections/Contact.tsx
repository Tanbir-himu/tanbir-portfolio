"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, MapPin, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import GradientButton from "@/components/ui/GradientButton";
import profile from "@/data/profile.json";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    try {
      const response = await fetch(profile.contact.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={profile.contact.eyebrow} title={profile.contact.title} />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    className="w-full rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-lg border border-border bg-bg-tertiary/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-purple resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <GradientButton type="submit" disabled={status === "submitting"} className="w-full">
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </GradientButton>

                <AnimatePresence mode="wait">
                  {status === "success" && (
                    <motion.p
                      role="status"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                    >
                      <CheckCircle2 size={16} aria-hidden="true" />
                      Thanks for reaching out! I&apos;ll get back to you soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p
                      role="alert"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400"
                    >
                      <XCircle size={16} aria-hidden="true" />
                      Something went wrong. Please try again or email me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="space-y-4">
            <GlassCard>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary/20 text-accent-cyan">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="font-medium text-text-primary hover:text-accent-cyan transition-colors"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary/20 text-accent-cyan">
                  <Linkedin size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">LinkedIn</p>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-text-primary hover:text-accent-cyan transition-colors"
                  >
                    linkedin.com/in/tanbir-ai
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-primary/20 text-accent-cyan">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-medium text-text-primary">{profile.contact.location}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse-glow" aria-hidden="true" />
                <p className="text-sm font-medium text-emerald-400">{profile.contact.availability}</p>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
