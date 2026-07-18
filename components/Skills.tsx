import { tools } from "@/data/portfolio";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32 text-center">
      <SectionTitle title="工具系统" subtitle="围绕创意、生成、剪辑、包装与交付组成的 AI 视频制作工具栈。" />
      <div className="mt-14 flex flex-wrap justify-center gap-4">
        {tools.map((tool, i) => (
          <Reveal key={tool} delay={i * 0.035}>
            <span className="inline-flex rounded-full border border-white/75 bg-white/45 px-6 py-3 text-lg font-medium tracking-[-0.03em] text-slate-700 shadow-glass backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/70">{tool}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
