"use client";
import { motion } from "framer-motion";

export function SectionTitle({ eyebrow, title, subtitle, align = "center" }: { eyebrow?: string; title: string; subtitle?: string; align?: "left" | "center" }) {
  return (
    <motion.div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-3xl`} initial={{ opacity: 0, y: 24, filter: "blur(12px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>
      {eyebrow ? <p className="text-sm font-medium tracking-[0.28em] text-slate-500">{eyebrow}</p> : null}
      <h2 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.06em] text-slate-950 md:text-7xl">{title}</h2>
      {subtitle ? <p className="mt-6 text-xl leading-9 text-slate-600">{subtitle}</p> : null}
    </motion.div>
  );
}
