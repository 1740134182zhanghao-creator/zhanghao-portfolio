import { stats } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Counter, Reveal } from "./Motion";

export function Stats() {
  return (
    <section id="data" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.05}>
            <GlassCard className="rounded-[2.4rem] px-6 py-9 text-center">
              <p className="text-5xl font-semibold leading-none tracking-[-0.08em] text-slate-950 md:text-6xl">
                {typeof item.value === "number" ? <Counter value={item.value} suffix={item.suffix} /> : item.value}
              </p>
              <p className="mt-5 text-base font-medium text-slate-600">{item.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
