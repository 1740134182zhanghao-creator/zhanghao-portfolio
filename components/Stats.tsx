"use client";

import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";

function SparklesIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mb-5 size-6 text-slate-500">
      <path d="M12 2.75c.45 4.5 2.75 6.8 7.25 7.25-4.5.45-6.8 2.75-7.25 7.25C11.55 12.75 9.25 10.45 4.75 10 9.25 9.55 11.55 7.25 12 2.75Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
      <path d="M19 16.25c.18 1.75 1.1 2.67 2.85 2.85-1.75.18-2.67 1.1-2.85 2.85-.18-1.75-1.1-2.67-2.85-2.85 1.75-.18 2.67-1.1 2.85-2.85Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
    </svg>
  );
}

export function Stats() {
  const { messages } = useLanguage();

  return (
    <section id="data" className="mx-auto max-w-7xl px-6 py-24">
      <SectionTitle title={messages.capabilityTitle} />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
        {messages.capabilityStats.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.05} className="h-full">
            <GlassCard className="flex min-h-48 h-full flex-col items-center justify-center rounded-[2.4rem] px-4 py-8 text-center md:px-5">
              {item.id === "ai-production" ? <SparklesIcon /> : null}
              <p className="text-2xl font-semibold leading-[1.08] tracking-[-0.055em] text-slate-950 md:text-[1.65rem]">{item.value}</p>
              <p className="mt-5 max-w-36 text-sm font-medium leading-5 text-slate-600">{item.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
