import { projects } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title="精选作品" subtitle="从创意概念到最终商业视频，展示 AI 在真实广告生产中的应用。" />
      <div className="mt-14 grid gap-7 md:grid-cols-2">
        {projects.map(([no, title, type, duty, tools, desc], i) => (
          <Reveal key={title} delay={i * 0.045}>
            <GlassCard className="shine group rounded-[2.7rem] p-4">
              <div className="relative aspect-video overflow-hidden rounded-[2.1rem] bg-[linear-gradient(135deg,#edf7ff,#fff_42%,#dce8f5)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,.95),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(141,199,255,.42),transparent_30%),radial-gradient(circle_at_52%_40%,rgba(210,190,255,.22),transparent_34%)] transition duration-700 group-hover:scale-105" />
                <span className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/42 px-4 py-2 text-sm font-semibold tracking-[0.25em] text-slate-500 backdrop-blur-2xl">{no}</span>
                <button className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/68 text-xl text-slate-950 opacity-0 shadow-glass backdrop-blur-2xl transition duration-500 group-hover:opacity-100" aria-label="播放视频">▶</button>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950">{title}</h3>
                <dl className="mt-6 grid gap-4 text-sm leading-7">
                  <div><dt className="text-slate-400">项目类型</dt><dd className="mt-1 text-slate-700">{type}</dd></div>
                  <div><dt className="text-slate-400">我的职责</dt><dd className="mt-1 text-slate-700">{duty}</dd></div>
                  <div><dt className="text-slate-400">使用工具</dt><dd className="mt-1 text-slate-700">{tools}</dd></div>
                  <div><dt className="text-slate-400">创意说明</dt><dd className="mt-1 text-slate-700">{desc}</dd></div>
                  <div><dt className="text-slate-400">项目成果</dt><dd className="mt-2 w-fit rounded-full bg-slate-950/90 px-4 py-2 text-white">数据整理中</dd></div>
                </dl>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
