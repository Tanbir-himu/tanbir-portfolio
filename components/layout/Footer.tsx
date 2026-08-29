"use client";

import { Linkedin, Mail, ArrowUp } from "lucide-react";
import profile from "@/data/profile.json";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm text-text-secondary">{profile.footer.copyright}</p>
          <p className="text-xs text-text-muted mt-1">{profile.footer.credit}</p>
        </div>

        <div className="flex items-center gap-4">
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
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-primary text-white hover:-translate-y-0.5 transition-transform"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
