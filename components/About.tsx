import { about } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { MotionSection, Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <MotionSection id="about" className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-32 md:grid-cols-[0.9fr_1.1fr]">
      <Reveal>
        <GlassCard className="relative aspect-square overflow-hidden rounded-[3rem] p-6">
          <div className="absolute inset-6 rounded-[2.45rem] bg-[radial-gradient(circle_at_50%_14%,#ffffff,transparent_30%),radial-gradient(circle_at_20%_76%,rgba(131,205,255,.28),transparent_28%),linear-gradient(145deg,#eef4fb,#ffffff_52%,#dde8f2)]" />
          <div className="absolute inset-x-0 bottom-0 mx-auto h-3/4 w-2/3 rounded-t-full bg-gradient-to-b from-white/70 via-slate-200 to-slate-400/70 blur-[0.2px]" />
          <div className="absolute bottom-8 left-8 right-8 rounded-[1.7rem] border border-white/70 bg-white/26 p-4 text-center text-sm text-slate-500 shadow-glass backdrop-blur-2xl">个人照片替换入口</div>
        </GlassCard>
      </Reveal>
      <div>
        <SectionTitle title="关于我" align="left" />
        <Reveal delay={0.1} className="mt-10 space-y-6 text-xl leading-10 text-slate-600">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="flex flex-wrap gap-3 pt-4">
            {about.tags.map((tag) => <span key={tag} className="rounded-full border border-white/80 bg-white/26 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-2xl">{tag}</span>)}
          </div>
        </Reveal>
      </div>
    </MotionSection>
  );
}
