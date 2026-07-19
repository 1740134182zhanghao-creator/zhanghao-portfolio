"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageProvider";

export function HeroStats() {
  const reducedMotion = useReducedMotion();
  const { messages } = useLanguage();

  return (
    <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 1.2, delay: 0.62, ease: [0.22, 1, 0.36, 1] }} className="hero-stats">
      <div className="hero-stats__profile">
        <Image src="/avatar/zhanghao.png" alt={messages.heroStats.avatarAlt} width={196} height={196} sizes="(max-width: 639px) 75px, (max-width: 1279px) 90px, 98px" priority />
        <div className="hero-stats__profile-copy">
          <p>{messages.heroStats.name}</p>
          <span>{messages.heroStats.role}</span>
          <small className="hero-stats__positioning">{messages.heroStats.positioning}</small>
          <small>⌖ {messages.heroStats.location}</small>
        </div>
      </div>
      <div className="hero-stats__metrics">
        {messages.heroStats.metrics.map((metric) => (
          <div key={metric.label} className="hero-stats__metric">
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
      <div className="hero-stats__experience">
        <div className="hero-stats__experience-copy">
          <p>{messages.heroStats.experienceTitle}</p>
          <span>{messages.heroStats.experiencePeriod}</span>
          <small>{messages.heroStats.experienceRole}</small>
        </div>
        <b className="hero-stats__logo">TEMU</b>
      </div>
    </motion.div>
  );
}
