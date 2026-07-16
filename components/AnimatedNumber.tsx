"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function DigitWheel({ digit, delay, duration, cycle }: { digit: string; delay: number; duration: number; cycle: number }) {
  const reduce = useReducedMotion();
  const target = Number(digit);
  const numbers = useMemo(() => [...Array.from({ length: 10 }, (_, i) => i), ...Array.from({ length: target + 1 }, (_, i) => i)], [target]);
  const finalY = `-${numbers.length - 1}em`;

  if (reduce) return <span>{digit}</span>;

  return (
    <span className="inline-block h-[1em] overflow-hidden align-[-0.05em] leading-none">
      <motion.span
        key={`${cycle}-${digit}`}
        className="block will-change-transform"
        initial={{ y: "0em", filter: "blur(2px)" }}
        animate={{ y: finalY, filter: "blur(0px)" }}
        transition={{ duration, delay, ease }}
      >
        {numbers.map((number, index) => (
          <span key={`${number}-${index}`} className="block h-[1em] leading-none tabular-nums">
            {number}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function AnimatedNumber({ value, suffix = "", duration = 1.08, delay = 0 }: { value: number; suffix?: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.65, margin: "-12% 0px -12% 0px" });
  const reduce = useReducedMotion();
  const [cycle, setCycle] = useState(0);
  const digits = String(value).split("");

  useEffect(() => {
    if (inView) setCycle((current) => current + 1);
  }, [inView]);

  return (
    <span ref={ref} className="inline-flex items-baseline leading-none tabular-nums">
      {digits.map((digit, index) => (
        <DigitWheel key={`${cycle}-${index}-${digit}`} digit={digit} cycle={cycle} delay={delay + index * 0.055} duration={duration + index * 0.035} />
      ))}
      {suffix ? (
        <motion.span
          key={`suffix-${cycle}`}
          className="ml-1 inline-block"
          initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(8px)" }}
          animate={reduce || cycle > 0 ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(8px)" }}
          transition={{ duration: 0.42, delay: delay + duration * 0.72, ease }}
        >
          {suffix}
        </motion.span>
      ) : null}
    </span>
  );
}
