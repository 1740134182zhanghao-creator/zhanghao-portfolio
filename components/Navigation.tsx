"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/data/portfolio";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 220], ["min(94vw,1120px)", "min(88vw,900px)"]);
  const bg = useTransform(scrollY, [0, 220], ["rgba(255,255,255,0.32)", "rgba(255,255,255,0.40)"]);
  const border = useTransform(scrollY, [0, 220], ["rgba(255,255,255,0.58)", "rgba(255,255,255,0.70)"]);
  const blur = useTransform(scrollY, [0, 220], ["blur(26px) saturate(155%)", "blur(34px) saturate(175%)"]);

  useEffect(() => {
    const sections = site.nav.map((item) => document.querySelector(item.href)).filter((section): section is Element => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.24, 0.42, 0.62], rootMargin: "-18% 0px -52% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      style={{ width, backgroundColor: bg, borderColor: border, backdropFilter: blur, WebkitBackdropFilter: blur }}
      className="fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-full border px-3 py-2.5 shadow-glass"
    >
      <div className="flex items-center justify-between gap-3">
        <a href="#hero" className="rounded-full px-4 py-2 text-sm font-semibold tracking-tight text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-400">张皓</a>
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-slate-400 ${active === item.href ? "bg-white/30 text-slate-950 shadow-sm" : "text-slate-600 hover:bg-white/24 hover:text-slate-950"}`}>
              {item.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/50 bg-slate-950/86 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 md:inline-flex">联系我</a>
        <button type="button" onClick={() => setOpen(!open)} className="inline-flex rounded-full border border-white/50 bg-white/32 px-3 py-2 text-lg leading-none text-slate-900 shadow-sm backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-slate-400 md:hidden" aria-label="打开导航菜单">{open ? "×" : "☰"}</button>
      </div>
      {open ? (
        <div className="mt-3 grid gap-1 rounded-[1.7rem] border border-white/60 bg-white/26 p-2 shadow-glass backdrop-blur-2xl md:hidden">
          {site.nav.map((item) => (
            <a key={item.href} onClick={() => setOpen(false)} href={item.href} className={`rounded-2xl px-4 py-3 text-sm font-medium ${active === item.href ? "bg-white/30 text-slate-950" : "text-slate-700 hover:bg-white/24"}`}>
              {item.label}
            </a>
          ))}
        </div>
      ) : null}
    </motion.nav>
  );
}
