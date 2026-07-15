"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  [1300, "Commercial Videos", "+"],
  [100, "Product Categories", "+"],
  [100, "High-performing Videos", "+"],
  [3, "Years Experience", "+"],
] as const;

const achievements = [
  "Produced over 1300 commercial videos.",
  "Worked with a 12–13 member creative team.",
  "Produced AI, UGC and Live Action videos.",
  "Specialized in AI commercial production since June 2025.",
  "Served global markets including US and Europe.",
];

const projects = [
  ["Global Product Launch", "AI Video Lead", "Keynote-style hero film for a fast-moving e-commerce launch.", "ChatGPT, Midjourney, Seedance", "+38% CTR lift"],
  ["UGC Conversion System", "Creative Strategist", "AI-guided creator scripts scaled across product categories.", "ChatGPT, Voice Clone, Premiere Pro", "100+ winning videos"],
  ["Beauty Commerce Series", "Prompt Director", "Polished short-form ads with premium lighting and product motion.", "Midjourney, Kling, After Effects", "Multi-market rollout"],
  ["Home Goods AI Scenes", "Video Designer", "Lifestyle storytelling for compact household products.", "Dreamina, Seedance, Photoshop", "Lower production cycle"],
  ["Fashion Motion Ads", "AI Commercial Producer", "Dynamic avatar, fabric and runway-inspired e-commerce video set.", "Nano Banana, Kling, Premiere Pro", "High retention hooks"],
  ["EU Seasonal Campaign", "Editor & AI Artist", "Localized visuals designed for European paid social channels.", "ChatGPT, Midjourney, Seedance", "Faster localization"],
] as const;

const workflow = ["Research", "Strategy", "ChatGPT", "Prompt Engineering", "Midjourney", "Seedance", "Voice Clone", "Editing", "Commercial Video"];
const stack = ["ChatGPT", "Seedance", "Midjourney", "Kling", "Nano Banana", "Dreamina", "Premiere Pro", "After Effects", "Photoshop"];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 80, damping: 22 });
  const rounded = useTransform(spring, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-black">
      <div className="noise" />
      <nav className="fixed left-1/2 top-5 z-50 w-[min(92vw,980px)] -translate-x-1/2 rounded-full border border-black/10 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-2xl">
        <div className="flex items-center justify-between text-sm font-medium">
          <a href="#hero" className="tracking-tight">Zhang Hao</a>
          <div className="hidden gap-6 text-black/60 md:flex">
            {['About', 'Experience', 'Projects', 'Workflow', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-black">{item}</a>)}
          </div>
          <a href="#contact" className="rounded-full bg-black px-4 py-2 text-white transition hover:scale-105">Contact</a>
        </div>
      </nav>

      <section id="hero" className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-32 text-center">
        <Reveal>
          <p className="mb-6 rounded-full border border-black/10 px-4 py-2 text-sm text-black/60">AI-powered commercial video for global e-commerce</p>
          <h1 className="text-6xl font-semibold tracking-[-0.07em] md:text-8xl lg:text-9xl">Zhang Hao</h1>
          <h2 className="mt-5 text-2xl font-medium tracking-[-0.03em] text-black/70 md:text-4xl">AI Creative Video Designer</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/55 md:text-xl">Creating AI-powered commercial videos for global e-commerce brands.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#projects" className="rounded-full bg-black px-7 py-4 font-medium text-white transition hover:scale-105">View Projects</a>
            <a href="#contact" className="rounded-full border border-black/10 bg-white px-7 py-4 font-medium transition hover:scale-105">Download Resume</a>
          </div>
        </Reveal>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, duration: 1 }} className="glass mt-16 aspect-video w-full max-w-5xl overflow-hidden rounded-[2rem] p-3">
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.4rem] bg-black">
            <video className="absolute inset-0 h-full w-full object-cover opacity-55" autoPlay muted loop playsInline poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Crect width='1600' height='900' fill='%23000'/%3E%3C/svg%3E" />
            <div className="relative z-10 text-white"><p className="text-sm uppercase tracking-[0.4em] text-white/55">Hero Reel Placeholder</p><p className="mt-4 text-3xl font-semibold md:text-6xl">AI Commerce Films</p></div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-24 md:grid-cols-4">
        {stats.map(([value, label, suffix]) => <Reveal key={label}><div className="glass rounded-[2rem] p-7"><p className="text-4xl font-semibold tracking-[-0.05em] md:text-6xl"><Counter value={value} suffix={suffix} /></p><p className="mt-3 text-sm text-black/55">{label}</p></div></Reveal>)}
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-6 py-28 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal><div className="glass aspect-square rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_35%,#f4f4f5,transparent_45%),linear-gradient(145deg,#fff,#e5e7eb)] p-8"><div className="flex h-full items-end rounded-[2rem] border border-black/10 p-8 text-black/45">Profile image placeholder</div></div></Reveal>
        <Reveal delay={0.1}><p className="text-sm uppercase tracking-[0.35em] text-black/45">About</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Commercial storytelling shaped by AI craft.</h2><p className="mt-8 text-xl leading-9 text-black/58">Zhang Hao designs high-performing commercial videos at the intersection of creative strategy, prompt engineering, AI image/video generation and polished post-production. His work helps e-commerce brands test faster, localize globally and ship premium advertising systems at scale.</p></Reveal>
      </section>

      <section id="experience" className="mx-auto max-w-5xl px-6 py-28"><Reveal><div className="glass rounded-[2.5rem] p-8 md:p-12"><p className="text-sm uppercase tracking-[0.35em] text-black/45">Experience</p><div className="mt-8 border-l border-black/10 pl-8"><p className="text-black/45">Aug 2023 - Aug 2026</p><h3 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">TEMU</h3><p className="mt-2 text-xl text-black/60">AI Creative Video Designer</p><ul className="mt-8 grid gap-3 text-black/62">{achievements.map((item) => <li key={item} className="rounded-2xl bg-black/[0.03] p-4">{item}</li>)}</ul></div></div></Reveal></section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-28"><Reveal><p className="text-sm uppercase tracking-[0.35em] text-black/45">Selected Projects</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Six premium case studies.</h2></Reveal><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map(([title, role, description, tools, result], i) => <Reveal key={title} delay={i * 0.04}><article className="glass group rounded-[2rem] p-4 transition duration-500 hover:-translate-y-2"><div className="aspect-video rounded-[1.4rem] bg-gradient-to-br from-zinc-950 via-zinc-800 to-zinc-500 p-5 text-white"><p className="text-xs uppercase tracking-[0.3em] text-white/45">Video</p><div className="mt-16 h-2 w-20 rounded-full bg-white/70" /></div><div className="p-3"><h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-2 text-sm text-black/45">Role — {role}</p><p className="mt-4 text-black/58">{description}</p><p className="mt-5 text-sm text-black/45">AI Tools</p><p className="font-medium">{tools}</p><p className="mt-5 rounded-full bg-black px-4 py-2 text-center text-sm text-white">{result}</p></div></article></Reveal>)}</div></section>

      <section id="workflow" className="mx-auto max-w-6xl px-6 py-28"><Reveal><p className="text-sm uppercase tracking-[0.35em] text-black/45">AI Workflow</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">From insight to commercial video.</h2></Reveal><div className="mt-12 grid gap-3">{workflow.map((step, i) => <motion.div key={step} whileHover={{ scale: 1.015 }} className="glass flex items-center justify-between rounded-3xl p-5"><span className="text-xl font-medium">{step}</span><span className="text-black/35">{i === workflow.length - 1 ? '✓' : '↓'}</span></motion.div>)}</div></section>

      <section className="mx-auto max-w-7xl px-6 py-28"><Reveal><p className="text-sm uppercase tracking-[0.35em] text-black/45">AI Stack</p><div className="mt-8 flex flex-wrap gap-3">{stack.map((tool) => <span key={tool} className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-lg shadow-sm backdrop-blur">{tool}</span>)}</div></Reveal></section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-32 text-center"><Reveal><div className="glass rounded-[3rem] p-10 md:p-16"><p className="text-sm uppercase tracking-[0.35em] text-black/45">Contact</p><h2 className="mt-5 text-5xl font-semibold tracking-[-0.06em] md:text-7xl">Let’s build the next commercial system.</h2><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a className="rounded-full bg-black px-7 py-4 text-white" href="mailto:hello@zhanghao.video">Email</a><a className="rounded-full border border-black/10 px-7 py-4" href="https://www.linkedin.com/" target="_blank">LinkedIn</a><a className="rounded-full border border-black/10 px-7 py-4" href="#">Resume</a></div></div></Reveal></section>
    </main>
  );
}
