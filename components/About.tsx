import { about } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <GlassCard className="rounded-[3.4rem] p-8 md:p-16">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.7rem] border border-white/70 bg-[radial-gradient(circle_at_50%_15%,#fff,transparent_30%),linear-gradient(160deg,#f9fbff,#e4edf6)] shadow-inner">
              <div className="absolute inset-x-12 bottom-0 h-4/5 rounded-t-full bg-gradient-to-b from-white/80 via-slate-200 to-slate-400/70" />
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.7rem] border border-white/70 bg-white/52 p-4 text-center text-sm text-slate-500 shadow-glass backdrop-blur-2xl">可替换个人资料 / 照片</div>
            </div>
          </Reveal>
          <div>
            <SectionTitle title="关于我" align="left" />
            <Reveal delay={0.1} className="mt-10 space-y-6 text-xl leading-10 text-slate-600">
              {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
              <div className="flex flex-wrap gap-3 pt-4">
                {about.tags.map((tag) => <span key={tag} className="rounded-full border border-white/80 bg-white/52 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-2xl">{tag}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
