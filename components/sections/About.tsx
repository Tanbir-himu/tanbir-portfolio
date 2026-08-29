import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import profile from "@/data/profile.json";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={profile.about.eyebrow} title={profile.about.title} />

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <AnimatedSection className="space-y-5">
            {profile.about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base sm:text-lg leading-relaxed text-text-secondary">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="grid gap-4 sm:grid-cols-2">
            {profile.about.stats.map((stat, i) => (
              <GlassCard key={i} className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <p className="font-display text-lg font-bold text-text-primary">
                    {stat.label}
                  </p>
                  {stat.pulse && (
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse-glow"
                      aria-label="In progress"
                    />
                  )}
                </div>
                <p className="text-sm text-text-secondary">{stat.value}</p>
              </GlassCard>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
