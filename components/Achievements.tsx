"use client";

import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";

export function Achievements() {
  const { messages } = useLanguage();

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-32">
      <div className="grid items-start gap-12 md:grid-cols-[0.7fr_1fr]">
        <SectionTitle title={messages.achievements.title} align="left" />
        <div className="grid gap-4">
          {messages.achievements.items.map((item, i) => (
            <Reveal key={item.no} delay={i * 0.055}>
              <GlassCard className="rounded-[2.2rem] px-7 py-7 md:px-8">
                {item.period ? <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.period}</p> : null}
                <h3 className={`${item.period ? "mt-3" : ""} text-2xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 md:text-3xl`}>{item.title}</h3>
                {item.role ? <p className="mt-2 text-sm font-medium text-slate-600">{item.role}</p> : null}
                <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600">
                  {item.body.map((point) => <li key={point}>• {point}</li>)}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
