"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, heroVideos } from "@/data/portfolio";
import { Reveal } from "./Motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const carouselY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} id="hero" className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-6 pb-24 pt-32 text-center">
      <Reveal className="relative z-20">
        <p className="mx-auto mb-6 w-fit rounded-full border border-white/80 bg-white/50 px-5 py-2 text-sm text-slate-500 shadow-sm backdrop-blur-2xl">TEMU 海外项目经验 · 1300+ 商业视频作品</p>
        <h1 className="text-[clamp(4.7rem,13vw,12.5rem)] font-semibold leading-[0.78] tracking-[-0.105em] text-slate-950">{hero.name}</h1>
        <div className="mt-8 space-y-3">
          <h2 className="text-4xl font-semibold tracking-[-0.06em] text-slate-900 md:text-6xl">{hero.role}</h2>
          <p className="text-xl font-medium tracking-[-0.035em] text-slate-500 md:text-3xl">{hero.englishRole}</p>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="#projects" className="rounded-full bg-slate-950/90 px-8 py-4 text-center font-medium text-white shadow-glass transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">查看作品</a>
          <a href="#contact" className="rounded-full border border-white/80 bg-white/56 px-8 py-4 text-center font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-slate-400">联系我</a>
        </div>
      </Reveal>

      <motion.div style={{ y: carouselY }} className="relative mt-14 h-[540px] w-full max-w-6xl [perspective:1600px]">
        <div className="absolute inset-x-10 top-20 h-72 rounded-full bg-white/70 blur-3xl" />
        {heroVideos.map((video) => (
          <motion.div key={video.title} initial={{ opacity: 0, y: 44, rotateY: -18, filter: "blur(16px)" }} animate={{ opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)" }} transition={{ duration: 1, delay: video.delay, ease: [0.16, 1, 0.3, 1] }} className={`absolute left-1/2 top-2 ${video.z} ${video.x} ${video.rotate} ${video.scale} origin-center`}>
            <div className="group relative h-[500px] w-[282px] overflow-hidden rounded-[2.35rem] border border-white/75 bg-white/44 p-3 shadow-[0_40px_120px_rgba(15,23,42,.16)] backdrop-blur-3xl transition duration-700 hover:-translate-y-3 hover:scale-[1.025]">
              <div className={`relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br ${video.tone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,.96),transparent_24%),linear-gradient(115deg,transparent_16%,rgba(255,255,255,.55)_42%,transparent_68%)]" />
                <div className="absolute inset-x-6 top-6 h-44 rounded-[2rem] bg-white/35 blur-xl" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.45rem] border border-white/70 bg-white/45 p-4 text-left shadow-glass backdrop-blur-2xl">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">9:16 Video</p>
                  <p className="mt-2 text-xl font-semibold tracking-[-0.05em] text-slate-950">{video.title}</p>
                </div>
                <button className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/62 text-slate-950 opacity-0 shadow-glass backdrop-blur-2xl transition group-hover:opacity-100" aria-label={`${video.title} 播放占位`}>▶</button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
