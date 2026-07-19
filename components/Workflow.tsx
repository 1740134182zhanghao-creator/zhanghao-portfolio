"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";

export function Workflow() {
  const { messages } = useLanguage();

  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title={messages.workflow.title} subtitle={messages.workflow.subtitle} />
      <div className="mt-14 flex flex-col gap-3 rounded-[3rem] border border-white/70 bg-white/35 p-4 shadow-glass backdrop-blur-3xl md:flex-row md:items-stretch">
        {messages.workflow.steps.map((step, i) => (
          <motion.div key={step} initial={{ opacity: 0, y: 20, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] }} className="flex flex-1 items-center gap-3">
            <div className="glass-card flex min-h-32 flex-1 flex-col items-center justify-center rounded-[2rem] p-5 text-center">
              <span className="mb-3 text-slate-400">✦</span>
              <span className="text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-medium text-slate-700">{step}</p>
            </div>
            {i < messages.workflow.steps.length - 1 ? <span className="hidden shrink-0 text-slate-300 md:block">→</span> : null}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
