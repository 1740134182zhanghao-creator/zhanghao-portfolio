"use client";
import { motion } from "framer-motion";
import { workflow } from "@/data/portfolio";
import { MotionSection, StaggerContainer } from "./Motion";
import { SectionTitle } from "./SectionTitle";

export function Workflow() {
  return (
    <MotionSection id="workflow" className="mx-auto max-w-7xl px-6 py-32">
      <SectionTitle title="AI 商业视频创作流程" />
      <StaggerContainer className="mt-14 grid gap-3 md:grid-cols-5">
        {workflow.map((step, i) => (
          <motion.div key={step} variants={{ hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(14px)" }, show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: i * 0.015 } } }} className="glass-card rounded-[1.7rem] p-5 text-center text-sm font-medium leading-6 text-slate-700">
            <span className="mb-3 block text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>{step}
          </motion.div>
        ))}
      </StaggerContainer>
    </MotionSection>
  );
}
