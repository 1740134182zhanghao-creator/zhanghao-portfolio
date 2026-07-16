"use client";
import { motion } from "framer-motion";
import { workflow } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Workflow() {
  return (
    <section id="workflow" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title="AI 商业视频创作流程" />
      <div className="mt-14 grid gap-3 md:grid-cols-5">
        {workflow.map((step, i) => (
          <motion.div key={step} initial={{ opacity: 0, y: 20, scale: 0.98, filter: "blur(10px)" }} whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: i * 0.045, ease: [0.16, 1, 0.3, 1] }} className="glass-card rounded-[1.7rem] p-5 text-center text-sm font-medium leading-6 text-slate-700">
            <span className="mb-3 block text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>{step}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
