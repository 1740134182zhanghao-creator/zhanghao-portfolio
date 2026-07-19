"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from "react";
import { heroProjects } from "@/data/heroProjects";
import { HeroCard, type HeroCardVisual } from "./HeroCard";
import { useLanguage } from "../i18n/LanguageProvider";

const CARD_STATES = [
  { x: 0, y: 0, z: 220, scale: 1, opacity: 1, blur: 0, rotate: 0, zIndex: 100 },
  { x: 224, y: 24, z: 58, scale: 0.8, opacity: 0.92, blur: 0.15, rotate: 11, zIndex: 80 },
  { x: 400, y: 50, z: -74, scale: 0.66, opacity: 0.66, blur: 1.65, rotate: 21, zIndex: 60 },
  { x: 548, y: 76, z: -168, scale: 0.52, opacity: 0.34, blur: 4.2, rotate: 30, zIndex: 40 },
] as const;

function circularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function visualForOffset(offset: number): HeroCardVisual {
  const distance = Math.min(Math.abs(offset), CARD_STATES.length - 1);
  const state = CARD_STATES[distance];
  const side = offset < 0 ? -1 : 1;

  return {
    offset,
    x: distance === 0 ? 0 : state.x * side,
    y: state.y,
    z: state.z,
    scale: state.scale,
    rotateY: distance === 0 ? 0 : state.rotate * -side,
    rotateZ: distance === 0 ? 0 : side * (distance === 1 ? 1.5 : distance === 2 ? 3 : 5),
    opacity: state.opacity,
    blur: state.blur,
    zIndex: state.zIndex,
  };
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="size-5">
      <path d={direction === "left" ? "m11.8 4.4-5.4 5.6 5.4 5.6" : "m8.2 4.4 5.4 5.6-5.4 5.6"} stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(4);
  const { messages } = useLanguage();
  const reducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const wheelLock = useRef(false);
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 58, damping: 24, mass: 0.55 });
  const parallaxY = useSpring(pointerY, { stiffness: 58, damping: 24, mass: 0.55 });

  const move = useCallback((direction: number) => {
    setActiveIndex((current) => (current + direction + heroProjects.length) % heroProjects.length);
  }, []);

  const goTo = useCallback((index: number) => setActiveIndex(index), []);

  const cards = useMemo(() => heroProjects.map((project, index) => ({ project, index, visual: visualForOffset(circularOffset(index, activeIndex, heroProjects.length)) })), [activeIndex]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleWheel = (event: WheelEvent) => {
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const amount = horizontal ? event.deltaX : event.deltaY;
      const clearlyPageScroll = !horizontal && Math.abs(event.deltaY) > 70;

      if (Math.abs(amount) < 12 || clearlyPageScroll || wheelLock.current) return;

      event.preventDefault();
      wheelLock.current = true;
      move(amount > 0 ? 1 : -1);
      window.setTimeout(() => { wheelLock.current = false; }, 370);
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [move]);

  const updateParallax = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || !stageRef.current) return;
    const bounds = stageRef.current.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 9);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button, a")) return;
    dragStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    dragStart.current = null;
    if (!start) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) move(deltaX < 0 ? 1 : -1);
  };

  return (
    <div ref={stageRef} data-active-index={activeIndex} onPointerMove={updateParallax} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp} onPointerCancel={() => { dragStart.current = null; }} className="hero-carousel">
      <div className="hero-carousel__floor" aria-hidden="true" />
      <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={() => move(-1)} className="hero-carousel__control hero-carousel__control--previous" aria-label={messages.hero.previous}><ArrowIcon direction="left" /></button>
      <button type="button" onPointerDown={(event) => event.stopPropagation()} onClick={() => move(1)} className="hero-carousel__control hero-carousel__control--next" aria-label={messages.hero.next}><ArrowIcon direction="right" /></button>
      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.35, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="hero-carousel__entry"
      >
        <motion.div style={{ x: parallaxX, y: parallaxY }} className="hero-carousel__scene">
          {cards.map(({ project, index, visual }) => <HeroCard key={project.id} project={project} displayTitle={messages.hero.carouselTitles[index]} viewLabel={messages.hero.viewImage} visual={visual} active={index === activeIndex} reducedMotion={reducedMotion} onActivate={() => goTo(index)} />)}
        </motion.div>
      </motion.div>
      <p className="sr-only" aria-live="polite">{messages.hero.currentWork}: {messages.hero.carouselTitles[activeIndex]}</p>
    </div>
  );
}
