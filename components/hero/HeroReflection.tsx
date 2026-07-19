"use client";

import { motion } from "framer-motion";
import type { HeroProject } from "@/data/heroProjects";

export type HeroReflectionVariant = "full" | "contact";

const reflectionTransition = { duration: 0.42, ease: [0.16, 1, 0.3, 1] } as const;

export function HeroReflection({ project, variant, reducedMotion }: { project: HeroProject; variant: HeroReflectionVariant; reducedMotion: boolean | null }) {
  const full = variant === "full";
  const transition = reducedMotion ? { duration: 0 } : reflectionTransition;

  return (
    <motion.div
      aria-hidden="true"
      data-reflection={variant}
      initial={{ height: "0%", opacity: 0, filter: "blur(3px)" }}
      animate={{ height: full ? "21%" : "8%", opacity: 1, filter: `blur(${full ? 2.5 : 3}px)` }}
      exit={{ height: "0%", opacity: 0, filter: "blur(4px)" }}
      transition={transition}
      className={`hero-reflection hero-reflection--${variant}`}
    >
      <motion.div animate={{ opacity: full ? 0.18 : 0 }} transition={transition} className="hero-reflection__surface">
        <img src={project.image} alt="" />
      </motion.div>
      <motion.div animate={{ opacity: full ? 0 : 0.065 }} transition={transition} className="hero-reflection__contact" />
    </motion.div>
  );
}
