import { contact } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-40 text-center">
      <Reveal>
        <GlassCard className="shine rounded-[4rem] p-10 md:p-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.075em] text-slate-950 md:text-8xl">{contact.title}</h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">{contact.text}</p>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="rounded-full bg-slate-950/90 px-8 py-4 font-medium text-white shadow-glass transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" href="#projects">查看作品</a>
            <a className="rounded-full border border-white/80 bg-white/54 px-8 py-4 font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400" href="#">下载简历</a>
            <a className="rounded-full border border-white/80 bg-white/54 px-8 py-4 font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400" href={`mailto:${contact.email}`}>联系我</a>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
