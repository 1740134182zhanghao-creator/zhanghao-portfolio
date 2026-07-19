"use client";

import Image from "next/image";
import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";
import { GlareHover } from "./effects/GlareHover";

export function About() {
  const { messages } = useLanguage();
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-32">
      <GlassCard className="rounded-[3.4rem] p-8 md:p-16">
        <div className="grid items-center gap-12 md:grid-cols-[0.62fr_1fr] lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.7rem] border border-white/70 bg-slate-100 shadow-inner">
              {imageFailed ? (
                <div className="grid h-full place-items-center bg-[linear-gradient(145deg,#f8fafc,#e8eef4)] px-8 text-center text-sm text-slate-400">{messages.about.imageFallback}</div>
              ) : (
                <GlareHover width="100%" height="100%" background="transparent" borderRadius="inherit" borderColor="transparent" glareColor="#ffffff" glareOpacity={0.28} glareAngle={-45} glareSize={325} transitionDuration={1400} playOnce className="about-avatar-glare">
                  <Image src="/avatar/zhanghao.png" alt={messages.about.imageAlt} fill sizes="(max-width: 767px) calc(100vw - 112px), 380px" className="object-cover object-center" onError={() => setImageFailed(true)} />
                </GlareHover>
              )}
            </div>
          </Reveal>
          <div>
            <SectionTitle title={messages.about.title} align="left" />
            <Reveal delay={0.1} className="mt-9 space-y-5 text-[1.05rem] leading-8 text-slate-600 md:text-lg md:leading-9">
              {messages.about.paragraphs.map((paragraph, index) => <p key={index} className="max-w-[46rem]">{paragraph}</p>)}
              <div className="flex flex-wrap gap-3 pt-5">
                {messages.about.tags.map((tag) => <span key={tag} className="rounded-full border border-white/80 bg-white/52 px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-2xl">{tag}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
