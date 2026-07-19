"use client";

import { GlassCard } from "./GlassCard";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";

export function Experience() {
  const { messages } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <SectionTitle title={messages.experience.title} />
      <div className="relative mt-16 grid gap-6 before:absolute before:left-6 before:top-8 before:hidden before:h-[calc(100%-4rem)] before:w-px before:bg-white/80 md:before:block">
        {messages.experience.items.map((item, index) => (
          <Reveal key={item.no} delay={index * 0.08}>
            <div className="grid gap-5 md:grid-cols-[5rem_minmax(0,1fr)]">
              <div className="flex items-center gap-3 md:hidden">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/80 bg-white/60 text-sm font-semibold text-slate-500 shadow-glass backdrop-blur-2xl">{item.no}</span>
                <span className="h-px flex-1 bg-white/80" aria-hidden="true" />
              </div>

              <div className="hidden md:flex md:justify-center">
                <span className="grid size-12 place-items-center rounded-full border border-white/80 bg-white/60 text-sm font-semibold text-slate-500 shadow-glass backdrop-blur-2xl">{item.no}</span>
              </div>

              <GlassCard className="rounded-[2.7rem] p-7 md:p-9 lg:p-10">
                <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(11rem,0.31fr)_minmax(0,1fr)] lg:grid-cols-[minmax(14rem,0.34fr)_minmax(0,1fr)] lg:gap-10">
                  <div className="min-w-0">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{item.period}</p>
                    <h3 className={`mt-4 break-words font-semibold text-slate-950 ${item.featured ? "text-5xl tracking-[-0.07em] lg:text-6xl" : "text-4xl tracking-[-0.055em] lg:text-5xl"}`}>
                      {item.company}
                    </h3>
                    {item.companyEnglish ? <p className="mt-3 break-words text-xs font-medium tracking-[0.22em] text-slate-400">{item.companyEnglish}</p> : null}
                    <p className="mt-4 text-lg font-medium leading-7 text-slate-700 lg:text-xl">{item.role}</p>
                    {item.department ? <p className="mt-2 text-sm leading-6 text-slate-500">{item.department}</p> : null}
                  </div>

                  <div className="min-w-0">
                    {item.responsibilities ? (
                      <ul className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                        {item.responsibilities.map((point) => (
                          <li key={point} className="flex min-h-28 items-start gap-3 rounded-[1.35rem] border border-white/60 bg-white/38 px-4 py-4 text-[0.95rem] leading-6 text-slate-600 shadow-sm backdrop-blur-xl">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {item.projects ? (
                      <div>
                        <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h4 className="text-lg font-semibold tracking-[-0.025em] text-slate-900">{item.projectsTitle}</h4>
                          {item.projectsLabel ? <p className="text-[0.68rem] font-medium tracking-[0.22em] text-slate-400">{item.projectsLabel}</p> : null}
                        </div>

                        <div className="grid auto-rows-fr gap-3 sm:grid-cols-2">
                          {item.projects.map((project) => (
                            <article key={`${project.title}-${project.role}`} className="min-w-0 rounded-[1.35rem] border border-white/60 bg-white/38 px-4 py-4 shadow-sm backdrop-blur-xl">
                              <h5 className="break-words text-base font-semibold leading-6 text-slate-900">{project.title}</h5>
                              {project.subtitle ? <p className="mt-1 break-words text-sm leading-5 text-slate-600">{project.subtitle}</p> : null}
                              <p className="mt-3 break-words text-xs font-medium leading-5 text-slate-500">{project.role}</p>
                            </article>
                          ))}
                        </div>

                        {item.summary ? (
                          <p className="mt-3 rounded-[1.35rem] border border-white/60 bg-white/30 px-5 py-4 text-sm leading-6 text-slate-600 shadow-sm backdrop-blur-xl">
                            {item.summary}
                          </p>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              </GlassCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
