"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { useLanguage } from "./i18n/LanguageProvider";

const PORTFOLIO_URL = "https://pan.baidu.com/s/1T0x7Hv7YDHvFQAsURuh8Fg?pwd=1234";

type CopyField = "phone" | "email" | null;

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

export function Contact() {
  const { locale, messages } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<CopyField>(null);
  const resumeFileName = locale === "zh" ? "zhang-hao-resume_CN.pdf" : "zhang-hao-resume_EN.pdf";
  const resumeHref = `/resume/${resumeFileName}`;

  const closeContact = useCallback(() => {
    setContactOpen(false);
    setCopiedField(null);
  }, []);

  useEffect(() => {
    if (!contactOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeContact();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeContact, contactOpen]);

  const copyContact = async (value: string, field: Exclude<CopyField, null>) => {
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.inset = "0 auto auto 0";
      textarea.style.opacity = "0";
      textarea.style.pointerEvents = "none";
      document.body.appendChild(textarea);
      textarea.focus({ preventScroll: true });
      textarea.select();
      textarea.setSelectionRange(0, textarea.value.length);
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("Copy command was rejected");
    };

    try {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(value);
        } catch {
          fallbackCopy();
        }
      } else {
        fallbackCopy();
      }
      setCopiedField(field);
      window.setTimeout(() => setCopiedField((current) => (current === field ? null : current)), 1800);
    } catch {
      setCopiedField(null);
    }
  };

  const secondaryButtonClass = "inline-flex min-w-40 items-center justify-center rounded-full border border-white/80 bg-white/54 px-8 py-4 font-medium text-slate-900 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-40 text-center">
      <Reveal>
        <GlassCard className="shine rounded-[4rem] p-10 md:p-20">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{messages.contact.eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-[-0.075em] text-slate-950 md:text-8xl">
            <span className="block">{messages.contact.title[0]}</span>
            <span className="block">{messages.contact.title[1]}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-slate-600">{messages.contact.text}</p>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-40 items-center justify-center rounded-full bg-slate-950/90 px-8 py-4 font-medium text-white shadow-glass transition hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {messages.contact.viewMoreProjects}
            </a>
            <a
              className={secondaryButtonClass}
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              download={resumeFileName}
            >
              {messages.contact.downloadResume}
            </a>
            <button type="button" className={secondaryButtonClass} onClick={() => setContactOpen(true)} aria-haspopup="dialog">
              {messages.contact.contactMe}
            </button>
          </div>

        </GlassCard>
      </Reveal>

      <AnimatePresence>
        {contactOpen ? (
          <motion.div
            className="fixed inset-0 z-[1200] grid place-items-center bg-slate-950/20 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) closeContact();
            }}
          >
            <motion.div
              className="relative w-full max-w-xl overflow-hidden rounded-[2.25rem] border border-white/90 bg-[rgba(248,250,252,0.94)] p-6 text-left shadow-[0_30px_90px_rgba(15,23,42,.24),inset_0_1px_0_rgba(255,255,255,.98)] ring-1 ring-slate-200/60 backdrop-blur-2xl sm:p-8"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.985 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" aria-hidden="true" />
              <button
                type="button"
                onClick={closeContact}
                aria-label={messages.contact.closeDialog}
                className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-slate-200/90 bg-white/90 text-slate-800 shadow-sm backdrop-blur-xl transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <CloseIcon />
              </button>

              <div className="pr-14">
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-500">{messages.contact.eyebrow}</p>
                <h3 id="contact-dialog-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{messages.contact.contactDialogTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{messages.contact.contactDialogDescription}</p>
              </div>

              <div className="mt-8 space-y-3">
                <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/[0.88] p-4 shadow-sm backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{messages.contact.phoneLabel}</p>
                    <a href={`tel:${messages.contact.phone}`} className="mt-1.5 block text-base font-medium text-slate-900 transition hover:text-slate-600">{messages.contact.phone}</a>
                  </div>
                  <button type="button" onClick={() => void copyContact(messages.contact.phone, "phone")} className="mt-3 rounded-full border border-slate-200/90 bg-slate-50/95 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 sm:mt-0">
                    {copiedField === "phone" ? messages.contact.copied : messages.contact.copy}
                  </button>
                </div>

                <div className="rounded-[1.5rem] border border-slate-200/80 bg-white/[0.88] p-4 shadow-sm backdrop-blur-xl sm:flex sm:items-center sm:justify-between sm:gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{messages.contact.emailLabel}</p>
                    <a href={`mailto:${messages.contact.email}`} className="mt-1.5 block break-all text-base font-medium text-slate-900 transition hover:text-slate-600">{messages.contact.email}</a>
                  </div>
                  <button type="button" onClick={() => void copyContact(messages.contact.email, "email")} className="mt-3 shrink-0 rounded-full border border-slate-200/90 bg-slate-50/95 px-4 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400 sm:mt-0">
                    {copiedField === "email" ? messages.contact.copied : messages.contact.copy}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
