"use client";
import { motion } from "framer-motion";
import { TextReveal } from "./Motion";

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <motion.div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
      {eyebrow ? <TextReveal as="p" text={eyebrow} className="text-sm font-medium tracking-[0.28em] text-slate-500" /> : null}
      <TextReveal as="h2" text={title} className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-7xl" />
      {subtitle ? <TextReveal as="p" text={subtitle} className="mt-6 text-xl leading-9 text-slate-600" /> : null}
    </motion.div>
  );
}
