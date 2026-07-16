import { AnimatedNumber } from "./AnimatedNumber";
import { stats } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { MotionItem, MotionSection, StaggerContainer } from "./Motion";

export function Stats() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-6 py-24">
      <MotionItem className="mb-10 flex justify-center">
        <span className="rounded-full border border-white/70 bg-white/24 px-6 py-2.5 text-sm text-slate-600 shadow-sm backdrop-blur-2xl">服务市场：美国 · 欧洲 · 全球</span>
      </MotionItem>
      <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, i) => (
          <MotionItem key={item.label}>
            <GlassCard className="rounded-[2.4rem] bg-white/[0.20] px-7 py-9 text-center">
              <p className="text-6xl font-semibold leading-none tracking-[-0.08em] text-slate-950 md:text-7xl lg:text-8xl">
                <AnimatedNumber value={item.value} suffix={item.suffix} delay={i * 0.1} />
              </p>
              <p className="mt-5 text-base font-medium text-slate-600">{item.label}</p>
            </GlassCard>
          </MotionItem>
        ))}
      </StaggerContainer>
    </MotionSection>
  );
}
