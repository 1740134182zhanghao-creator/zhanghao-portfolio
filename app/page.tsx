import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-slate-950">
      <div className="liquid-bg" />
      <div className="liquid-orb left-[4vw] top-[22vh] h-72 w-72 bg-sky-200/70" />
      <div className="liquid-orb right-[3vw] top-[10vh] h-96 w-96 bg-violet-200/70" />
      <div className="liquid-orb bottom-[18vh] left-[42vw] h-80 w-80 bg-cyan-200/60" />
      <div className="noise" />
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Workflow />
      <Skills />
      <Contact />
    </main>
  );
}
