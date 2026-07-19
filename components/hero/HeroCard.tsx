"use client";

import { AnimatePresence, motion, type Transition } from "framer-motion";
import type { KeyboardEvent } from "react";
import type { HeroProject } from "@/data/heroProjects";
import { HeroReflection, type HeroReflectionVariant } from "./HeroReflection";

export type HeroCardVisual = {
  offset: number;
  x: number;
  y: number;
  z: number;
  scale: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
  blur: number;
  zIndex: number;
};

const spring: Transition = { type: "spring", stiffness: 112, damping: 27, mass: 0.9 };

export function HeroCard({ project, displayTitle, viewLabel, visual, active, reducedMotion, onActivate }: {
  project: HeroProject;
  displayTitle: string;
  viewLabel: string;
  visual: HeroCardVisual;
  active: boolean;
  reducedMotion: boolean | null;
  onActivate: () => void;
}) {
  const reflectionVariant: HeroReflectionVariant | null = active ? "full" : Math.abs(visual.offset) === 1 ? "contact" : null;

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <motion.article
      role="button"
      tabIndex={0}
      aria-label={`${viewLabel}: ${displayTitle}`}
      initial={reducedMotion ? false : { opacity: 0, y: visual.y + 36, z: visual.z - 100, scale: visual.scale * 0.98, rotateY: visual.rotateY * 1.12, rotateZ: visual.rotateZ, filter: "blur(6px)" }}
      animate={{ opacity: visual.opacity, x: visual.x, y: visual.y, z: visual.z, scale: visual.scale, rotateY: visual.rotateY, rotateZ: visual.rotateZ, filter: `blur(${visual.blur}px)`, zIndex: visual.zIndex }}
      whileHover={active || reducedMotion ? undefined : { opacity: Math.min(1, visual.opacity + 0.13), filter: "blur(0px)", transition: { duration: 0.22 } }}
      transition={spring}
      transformTemplate={({ x, y, z, rotateY, rotateZ, scale }) => `translateX(-50%) translate3d(${x}, ${y}, ${z}) rotateY(${rotateY}) rotateZ(${rotateZ}) scale(${scale})`}
      onClick={onActivate}
      onKeyDown={onKeyDown}
      data-distance={Math.abs(visual.offset)}
      className={`hero-cover-card ${active ? "is-active" : ""}`}
    >
      <motion.div animate={active && !reducedMotion ? { y: [0, -4, 0] } : { y: 0 }} transition={active ? { duration: 5.4, ease: "easeInOut", repeat: Infinity } : { duration: 0.25 }} className="hero-cover-card__float">
        <div className="hero-cover-card__glass">
          <div className="hero-cover-card__media">
            <img src={project.image} alt={displayTitle} loading={active ? "eager" : "lazy"} />
          </div>
        </div>
        <AnimatePresence initial={false}>
          {reflectionVariant ? <HeroReflection key="reflection" project={project} variant={reflectionVariant} reducedMotion={reducedMotion} /> : null}
        </AnimatePresence>
      </motion.div>
    </motion.article>
  );
}
