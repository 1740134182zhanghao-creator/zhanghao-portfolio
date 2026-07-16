"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.985, filter: "blur(14px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease, staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.985, filter: "blur(14px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.72, ease } },
};

export function MotionSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      variants={reduce ? undefined : sectionVariants}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: false, amount: 0.18, margin: "-8% 0px -12% 0px" }}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={reduce ? undefined : { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>{children}</motion.div>;
}

export function MotionItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} variants={reduce ? undefined : itemVariants}>{children}</motion.div>;
}

export function BlurReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 32, scale: 0.985, filter: "blur(14px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-90px" }}
      transition={{ duration: 0.82, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ text, as: Tag = "span", className = "" }: { text: string; as?: "h1" | "h2" | "p" | "span"; className?: string }) {
  const reduce = useReducedMotion();
  const chunks = text.includes("，") ? text.split(/(，|。)/).filter(Boolean) : [text];
  return (
    <Tag className={className}>
      {chunks.map((chunk, index) => (
        <motion.span
          key={`${chunk}-${index}`}
          className="inline-block"
          variants={reduce ? undefined : {
            hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.68, ease, delay: index * 0.045 } },
          }}
        >
          {chunk}
        </motion.span>
      ))}
    </Tag>
  );
}

export const Reveal = BlurReveal;
