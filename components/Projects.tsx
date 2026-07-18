import { projects } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title="精选案例" subtitle="四个代表性案例，展示从问题洞察到商业交付的 AI 视频设计思考。" />
      <div className="mt-16 grid gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.no} delay={i * 0.06}>
            <GlassCard className="shine group grid h-full gap-6 rounded-[3rem] p-4 md:grid-cols-[0.52fr_0.48fr] md:p-5">
              <div className={`relative aspect-[9/16] overflow-hidden rounded-[2.25rem] bg-gradient-to-br ${project.tone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_10%,rgba(255,255,255,.98),transparent_24%),linear-gradient(120deg,transparent_15%,rgba(255,255,255,.58)_42%,transparent_68%)] transition duration-700 group-hover:scale-105" />
                <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/48 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-slate-500 backdrop-blur-2xl">{project.no}</span>
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-white/70 bg-white/50 p-4 shadow-glass backdrop-blur-2xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Vertical Cover</p>
                  <p className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-slate-950">{project.product}</p>
                </div>
              </div>
              <div className="flex flex-col p-4 md:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-slate-400">{project.category}</p>
                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-slate-950">{project.title}</h3>
                <p className="mt-5 leading-8 text-slate-600">{project.desc}</p>
                <div className="mt-8 space-y-5 text-sm">
                  <div><p className="text-slate-400">职责</p><div className="mt-3 flex flex-wrap gap-2">{project.role.map((role) => <span key={role} className="rounded-full bg-white/55 px-3 py-2 text-slate-700 shadow-sm backdrop-blur-xl">{role}</span>)}</div></div>
                  <div><p className="text-slate-400">成果</p><p className="mt-2 w-fit rounded-full bg-slate-950/90 px-4 py-2 font-medium text-white">{project.result}</p></div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
