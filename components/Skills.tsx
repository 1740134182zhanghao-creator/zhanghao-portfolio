import { skills } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title="专业能力" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <GlassCard className="h-full rounded-[2.5rem] p-8">
              <h3 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{group.title}</h3>
              <div className="mt-7 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/80 bg-white/48 px-4 py-2.5 text-sm leading-6 text-slate-700 shadow-sm backdrop-blur-xl">
                    {item}{group.core.includes(item) ? <b className="ml-2 text-slate-950">核心工具</b> : null}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
