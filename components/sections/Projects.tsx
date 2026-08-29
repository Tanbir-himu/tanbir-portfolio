import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import profile from "@/data/profile.json";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow={profile.projects.eyebrow} title={profile.projects.title} />

        <div className="mt-14 space-y-8">
          {profile.projects.items.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <GlassCard className="p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
                  {project.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg-tertiary/60 px-3 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
