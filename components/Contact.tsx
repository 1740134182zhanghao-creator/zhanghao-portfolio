import { contact } from "@/data/portfolio";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-36 text-center">
      <Reveal>
        <GlassCard className="shine rounded-[3.4rem] p-10 md:p-16">
          <h2 className="text-5xl font-semibold leading-[1.02] tracking-[-0.07em] text-slate-950 md:text-7xl">{contact.title}</h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-slate-600">{contact.text}</p>
          <div className="mt-9 grid gap-3 text-slate-600">
            {contact.info.map((item) => <p key={item}>{item}</p>)}
          </div>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="rounded-full bg-slate-950/90 px-8 py-4 font-medium text-white shadow-glass transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400" href="mailto:your-email@example.com">发送邮件</a>
            <a className="rounded-full border border-white/80 bg-white/54 px-8 py-4 font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400" href="#">下载简历</a>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
