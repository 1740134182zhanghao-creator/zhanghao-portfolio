"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "./i18n/LanguageProvider";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-4">
      <path d="M4 10h11M11.2 6.2 15 10l-3.8 3.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Navigation() {
  const { messages, toggleLocale } = useLanguage();
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.42)"]);
  const borderColor = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0)", "rgba(255,255,255,0.62)"]);
  const shadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(42,57,72,0), inset 0 0 0 rgba(255,255,255,0)", "0 14px 36px rgba(42,57,72,0.07), inset 0 1px 0 rgba(255,255,255,0.72)"]);
  const blur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px) saturate(125%)"]);

  return (
    <div className="fixed left-1/2 top-3 z-50 w-[calc(100%-1.5rem)] max-w-none -translate-x-1/2 sm:top-5 sm:w-[calc(100%-3rem)] lg:w-[calc(100%-7rem)]">
      <motion.nav initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} style={{ backgroundColor: background, borderColor, boxShadow: shadow, backdropFilter: blur, WebkitBackdropFilter: blur }} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-[1.2rem] border px-2.5 py-2 sm:px-4 sm:py-2.5">
        <a href="#hero" className="rounded-lg px-1 py-1 text-[11px] font-semibold tracking-[0.19em] text-slate-950 transition-opacity hover:opacity-60 sm:text-[13px]">ZHANG HAO</a>
        <div className="flex min-w-0 items-center justify-center gap-1 overflow-hidden sm:gap-2">
          {messages.navigation.items.map((item) => (
            <a key={item.href} href={item.href} className="shrink-0 rounded-full px-1 py-1.5 text-[9px] text-slate-600 transition hover:text-slate-950 sm:px-2.5 sm:text-[12px] lg:px-3.5 lg:text-[13px]">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button type="button" onClick={toggleLocale} aria-label={messages.navigation.languageAria} className="min-w-8 rounded-full border border-white/70 bg-white/34 px-2 py-2 text-[9px] font-semibold text-slate-700 shadow-sm backdrop-blur-xl transition hover:bg-white/62 sm:min-w-10 sm:text-[11px]">{messages.navigation.languageButton}</button>
          <a href="#contact" className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-2.5 py-2 text-[10px] font-medium text-white shadow-[0_7px_16px_rgba(15,23,42,.14)] transition hover:-translate-y-0.5 hover:bg-slate-800 sm:px-3.5 sm:text-xs"><span className="hidden sm:inline">{messages.navigation.connect}</span><ArrowIcon /></a>
        </div>
      </motion.nav>
    </div>
  );
}
