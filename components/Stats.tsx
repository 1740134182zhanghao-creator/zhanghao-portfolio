import { stats } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Counter, Reveal } from "./Motion";

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex justify-center">
        <span className="rounded-full border border-white/80 bg-white/44 px-6 py-2.5 text-sm text-slate-600 shadow-sm backdrop-blur-2xl">服务市场：美国 · 欧洲 · 全球</span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <GlassCard className="rounded-[2.4rem] px-7 py-9 text-center">
              <p className="text-6xl font-semibold leading-none tracking-[-0.08em] text-slate-950 md:text-7xl lg:text-8xl">
                <Counter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-5 text-base font-medium text-slate-600">{item.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
