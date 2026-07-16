"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { site } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 220], ["min(94vw,1120px)", "min(88vw,900px)"]);
  const bg = useTransform(scrollY, [0, 220], ["rgba(255,255,255,0.36)", "rgba(255,255,255,0.54)"]);
  const blur = useTransform(scrollY, [0, 220], ["blur(18px) saturate(135%)", "blur(34px) saturate(170%)"]);

  return (
    <motion.nav
      style={{ width, backgroundColor: bg, backdropFilter: blur, WebkitBackdropFilter: blur }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-full border border-white/70 px-3 py-2.5 shadow-glass"
    >
      <div className="flex items-center justify-between gap-3">
        <a href="#hero" className="rounded-full px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-400">张皓</a>
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/55 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-400">
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full bg-slate-950/90 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 md:inline-flex">联系我</a>
        <button type="button" onClick={() => setOpen(!open)} className="inline-flex rounded-full bg-white/58 px-3 py-2 text-lg leading-none text-slate-900 shadow-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-slate-400 md:hidden" aria-label="打开导航菜单">{open ? "×" : "☰"}</button>
      </div>
      {open ? (
        <div className="mt-3 grid gap-1 rounded-[1.7rem] border border-white/60 bg-white/58 p-2 shadow-glass backdrop-blur-2xl md:hidden">
          {site.nav.map((item) => (
            <a key={item.href} onClick={() => setOpen(false)} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-white/65">
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.nav>
  );
}
