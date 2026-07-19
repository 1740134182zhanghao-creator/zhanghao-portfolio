"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  aiGaibaoProjects,
  liveActionProjects,
  type GeneratedVideoProject,
} from "@/data/generatedProjects";
import { Reveal } from "./Motion";
import { SectionTitle } from "./SectionTitle";
import { useLanguage } from "./i18n/LanguageProvider";
import { GlassCard } from "./GlassCard";
import { ScrollStack, ScrollStackItem } from "./scroll-stack/ScrollStack";

type ProjectGroupId = "aigaibao" | "shipai";

function PlayIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4 translate-x-px">
      <path d="m7.35 5.1 7.35 4.25a.75.75 0 0 1 0 1.3L7.35 14.9a.75.75 0 0 1-1.12-.65v-8.5a.75.75 0 0 1 1.12-.65Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function VideoProjectCard({ project, category, playAction, onSelect }: { project: GeneratedVideoProject; category: string; playAction: string; onSelect: (project: GeneratedVideoProject) => void }) {
  const previewRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  const stopPreview = useCallback(() => {
    const video = previewRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  }, []);

  const startPreview = () => {
    if (reducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const video = previewRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => undefined);
  };

  const openProject = () => {
    stopPreview();
    onSelect(project);
  };

  return (
    <motion.button
      type="button"
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onClick={openProject}
      className="project-video-card group"
      aria-label={`${playAction}: ${category}`}
    >
      <span className="project-video-card__media">
        <video ref={previewRef} src={project.src} muted playsInline preload="metadata" />
        <span className="project-video-card__shade" aria-hidden="true" />
      </span>
      <span className="project-video-card__category">{category}</span>
      <span className="project-video-card__content project-video-card__content--minimal">
        <span className="project-video-card__play" aria-hidden="true"><PlayIcon /></span>
      </span>
    </motion.button>
  );
}

function VideoModal({ project, title, category, closeLabel, onClose }: { project: GeneratedVideoProject; title: string; category: string; closeLabel: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [close]);

  return (
    <motion.div
      className="project-video-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-video-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(event) => {
        if (event.target === event.currentTarget) close();
      }}
    >
      <motion.div
        className="project-video-modal__panel"
        initial={{ opacity: 0, y: 24, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.985 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="project-video-modal__header">
          <div>
            <span>{category}</span>
            <h3 id="project-video-modal-title">{title}</h3>
          </div>
          <button type="button" onClick={close} aria-label={closeLabel}><CloseIcon /></button>
        </div>
        <video key={project.src} ref={videoRef} src={project.src} controls playsInline preload="metadata" autoPlay />
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<GeneratedVideoProject | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Record<ProjectGroupId, boolean>>({
    aigaibao: false,
    shipai: false,
  });
  const { messages } = useLanguage();
  const closeModal = useCallback(() => setSelectedProject(null), []);
  const projectGroups = [
    { id: "aigaibao" as const, copy: messages.projects.groups.aigaibao, projects: aiGaibaoProjects.slice(0, 8) },
    { id: "shipai" as const, copy: messages.projects.groups.shipai, projects: liveActionProjects.slice(0, 8) },
  ];
  const selectedGroup = selectedProject?.id.startsWith("aigaibao") ? messages.projects.groups.aigaibao : messages.projects.groups.shipai;
  const selectedTitle = selectedGroup.title;
  const hasExpandedGroup = Object.values(expandedGroups).some(Boolean);

  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-6 py-32">
        <SectionTitle title={messages.projects.title} subtitle={messages.projects.subtitle} />
        <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-slate-500">{messages.projects.performance}</p>
        <ScrollStack className="mt-20" disabled={hasExpandedGroup}>
          {projectGroups.map((group, groupIndex) => {
            const expanded = expandedGroups[group.id];
            const visibleProjects = group.projects.slice(0, expanded ? 8 : 3);
            const previewId = `project-previews-${group.id}`;

            return (
              <ScrollStackItem key={group.id} index={groupIndex}>
                <GlassCard className="project-category-card">
                  <div className="flex flex-col gap-5 border-b border-white/60 pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="pt-1 text-sm font-medium tabular-nums tracking-[0.2em] text-slate-400">{String(groupIndex + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 md:text-4xl">{group.copy.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-500">{group.copy.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">{messages.projects.collectionLabel} · {group.projects.length}</span>
                  </div>

                  <div id={previewId} className={`project-preview-grid ${expanded ? "project-preview-grid--expanded" : ""}`}>
                    {visibleProjects.map((project, index) => (
                      <Reveal key={project.id} delay={(index % 3) * 0.045} className="project-preview-item h-full">
                        <VideoProjectCard project={project} category={group.copy.category} playAction={messages.projects.playAction} onSelect={setSelectedProject} />
                      </Reveal>
                    ))}
                  </div>

                  {group.projects.length > 3 ? (
                    <div className="project-category-action">
                      <button
                        type="button"
                        onClick={() => setExpandedGroups((current) => ({ ...current, [group.id]: !current[group.id] }))}
                        aria-expanded={expanded}
                        aria-controls={previewId}
                        className="rounded-full border border-white/80 bg-white/54 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white/76 focus:outline-none focus:ring-2 focus:ring-slate-400"
                      >
                        {expanded ? messages.projects.showFewerVideos : messages.projects.viewAllVideos}
                      </button>
                    </div>
                  ) : null}
                </GlassCard>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </section>
      <AnimatePresence>{selectedProject ? <VideoModal project={selectedProject} title={selectedTitle} category={messages.projects.collectionLabel} closeLabel={messages.projects.closeVideo} onClose={closeModal} /> : null}</AnimatePresence>
    </>
  );
}
