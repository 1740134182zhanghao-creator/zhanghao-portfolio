import { experience } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <SectionTitle title="工作经历" />
      <Reveal className="mt-14">
        <GlassCard className="rounded-[3rem] p-7 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.36fr_1fr]">
            <div className="md:sticky md:top-32 md:self-start">
              <p className="text-sm text-slate-500">{experience.period}</p>
              <h3 className="mt-5 text-6xl font-semibold tracking-[-0.07em] text-slate-950">{experience.company}</h3>
              <p className="mt-5 text-slate-500">{experience.department}</p>
              <p className="mt-3 text-xl font-medium leading-8 text-slate-800">{experience.position}</p>
            </div>
            <ul className="grid gap-3 border-l border-white/80 pl-6">
              {experience.points.map((point) => <li key={point} className="rounded-[1.4rem] border border-white/55 bg-white/38 px-5 py-4 leading-8 text-slate-600 shadow-sm backdrop-blur-xl">{point}</li>)}
            </ul>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
