import { experiences } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <SectionTitle title="工作经历" />
      <div className="relative mt-16 grid gap-6 before:absolute before:left-6 before:top-8 before:hidden before:h-[calc(100%-4rem)] before:w-px before:bg-white/80 md:before:block">
        {experiences.map((item, i) => (
          <Reveal key={item.no} delay={i * 0.08}>
            <div className="grid gap-5 md:grid-cols-[5rem_1fr]">
              <div className="hidden md:flex md:justify-center"><span className="grid size-12 place-items-center rounded-full border border-white/80 bg-white/60 text-sm font-semibold text-slate-500 shadow-glass backdrop-blur-2xl">{item.no}</span></div>
              <GlassCard className="rounded-[2.7rem] p-7 md:p-10">
                <div className="grid gap-8 md:grid-cols-[0.36fr_1fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{item.period}</p>
                    <h3 className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-slate-950">{item.title}</h3>
                    <p className="mt-4 text-xl font-medium text-slate-700">{item.role}</p>
                  </div>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {item.body.map((point) => <li key={point} className="rounded-[1.25rem] border border-white/60 bg-white/38 px-4 py-3 text-slate-600 shadow-sm backdrop-blur-xl">• {point}</li>)}
                  </ul>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
