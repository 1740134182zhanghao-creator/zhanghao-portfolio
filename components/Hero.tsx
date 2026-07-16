"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero } from "@/data/portfolio";
import { Reveal } from "./Motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -46]);

  return (
    <section ref={ref} id="hero" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 md:grid-cols-[0.92fr_1.08fr] lg:gap-16">
      <Reveal>
        <div className="max-w-2xl">
          <p className="mb-6 w-fit rounded-full border border-white/80 bg-white/48 px-4 py-2 text-sm text-slate-600 shadow-sm backdrop-blur-2xl">服务市场：美国 · 欧洲 · 全球</p>
          <h1 className="text-7xl font-semibold leading-[0.92] tracking-[-0.08em] text-slate-950 md:text-8xl lg:text-[8.7rem]">
            {hero.name}
          </h1>
          <h2 className="mt-7 text-4xl font-semibold leading-tight tracking-[-0.05em] text-slate-900 md:text-5xl">
            {hero.role}
          </h2>
          <p className="mt-7 text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-slate-700 md:text-3xl">
            {hero.tagline}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="rounded-full bg-slate-950/90 px-8 py-4 text-center font-medium text-white shadow-glass transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">查看精选作品</a>
            <a href="#contact" className="rounded-full border border-white/80 bg-white/54 px-8 py-4 text-center font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400">下载个人简历</a>
          </div>
        </div>
      </Reveal>

      <motion.div style={{ y: mediaY }} initial={{ opacity: 0, scale: 0.96, filter: "blur(14px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ delay: 0.22, duration: 1, ease: [0.16, 1, 0.3, 1] }} className="glass-card shine relative aspect-[4/5] overflow-hidden rounded-[3rem] p-4 md:aspect-[5/6] lg:aspect-[4/5]">
        <motion.div style={{ y: glowY }} className="absolute -right-28 -top-20 h-72 w-72 rounded-full bg-sky-200/55 blur-3xl" />
        <div className="relative flex h-full flex-col overflow-hidden rounded-[2.35rem] border border-white/62 bg-[linear-gradient(145deg,rgba(255,255,255,.72),rgba(231,240,247,.42))] p-5 shadow-inner">
          <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.9rem] bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,.96),transparent_24%),radial-gradient(circle_at_78%_70%,rgba(141,199,255,.34),transparent_32%),linear-gradient(135deg,#eef7ff,#f9f6ff_48%,#dbe8f2)]">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_18%,rgba(255,255,255,.58)_44%,transparent_72%)]" />
            <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/46 px-4 py-2 text-sm text-slate-600 backdrop-blur-2xl">视频占位</div>
            <div className="absolute inset-x-8 bottom-8 rounded-[2rem] border border-white/70 bg-white/50 p-6 text-center shadow-glass backdrop-blur-2xl">
              <span className="mx-auto mb-5 grid size-16 place-items-center rounded-full bg-white/72 text-2xl text-slate-950 shadow-glass">▶</span>
              <p className="text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">个人作品 Showreel 即将上线</p>
              <p className="mt-3 text-sm text-slate-500">播放视频</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
