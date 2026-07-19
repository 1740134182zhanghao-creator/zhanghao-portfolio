"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroCarousel } from "./hero/HeroCarousel";
import { HeroStats } from "./hero/HeroStats";
import { useLanguage } from "./i18n/LanguageProvider";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
      <path d="M4 10h11M11.2 6.2 15 10l-3.8 3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4 translate-x-px">
      <path d="m7.35 5.1 7.35 4.25a.75.75 0 0 1 0 1.3L7.35 14.9a.75.75 0 0 1-1.12-.65v-8.5a.75.75 0 0 1 1.12-.65Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-3.5">
      <path d="M10 2.65c.42 4.57 2.78 6.93 7.35 7.35-4.57.42-6.93 2.78-7.35 7.35-.42-4.57-2.78-6.93-7.35-7.35 4.57-.42 6.93-2.78 7.35-7.35Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

export function Hero() {
  const reducedMotion = useReducedMotion();
  const { messages } = useLanguage();

  return (
    <section id="hero" className="cinematic-hero coverflow-hero">
      <div className="cinematic-hero__light" aria-hidden="true" />
      <div className="cinematic-hero__content">
        <div className="cinematic-hero__grid">
          <div className="cinematic-hero__intro">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="cinematic-hero__badge">
              <SparkIcon />
              {messages.hero.badge}
            </motion.div>
            <motion.h1 initial={reducedMotion ? false : { opacity: 0, y: 26, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.3, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="cinematic-hero__title">
              <span>{messages.hero.title[0]}</span>
              <span>{messages.hero.title[1]}</span>
            </motion.h1>
            <motion.p initial={reducedMotion ? false : { opacity: 0, y: 22, filter: "blur(7px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.18, delay: 0.35, ease: [0.22, 1, 0.36, 1] }} className="cinematic-hero__description">
              {messages.hero.description[0]}<br className="hidden md:block" />{messages.hero.description[1]}
            </motion.p>
            <motion.a initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} href="#projects" className="cinematic-hero__cta group">
              <span className="cinematic-hero__cta-button"><PlayIcon /></span>
              <span>
                <span className="block text-sm font-medium text-slate-900">{messages.hero.cta}</span>
                <span className="mt-0.5 block text-xs text-slate-400 transition-colors group-hover:text-slate-600">{messages.hero.ctaHint}</span>
              </span>
              <ArrowIcon />
            </motion.a>
          </div>
          <HeroCarousel />
        </div>
        <HeroStats />
      </div>
    </section>
  );
}
