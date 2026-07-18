import { achievements } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-start gap-12 md:grid-cols-[0.7fr_1fr]">
        <SectionTitle title="项目成果" align="left" />
        <div className="grid gap-4">
          {achievements.map((item, i) => (
            <Reveal key={item} delay={i * 0.055}>
              <GlassCard className="rounded-[2.2rem] px-7 py-6 text-2xl font-semibold tracking-[-0.05em] text-slate-900 md:text-3xl">{item}</GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
