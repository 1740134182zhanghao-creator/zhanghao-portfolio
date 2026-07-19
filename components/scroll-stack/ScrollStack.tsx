"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import "./ScrollStack.css";

type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

type ScrollStackItemProps = {
  children: ReactNode;
  index: number;
  className?: string;
};

type StackItemStyle = CSSProperties & {
  "--scroll-stack-index": number;
};

export function ScrollStack({ children, className = "", disabled = false }: ScrollStackProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const desktopQuery = window.matchMedia("(min-width: 1024px) and (min-height: 800px)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const reset = () => {
      root.dataset.stackEnabled = "false";
      root.querySelectorAll<HTMLElement>(".scroll-stack-card").forEach((card) => {
        card.style.removeProperty("--scroll-stack-scale");
      });
    };

    const update = () => {
      animationFrame = 0;

      if (disabled || !desktopQuery.matches || reducedMotionQuery.matches) {
        reset();
        return;
      }

      root.dataset.stackEnabled = "true";
      const cards = Array.from(root.querySelectorAll<HTMLElement>(".scroll-stack-card"));

      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) {
          card.style.setProperty("--scroll-stack-scale", "1");
          return;
        }

        const nextTop = nextCard.getBoundingClientRect().top;
        const start = window.innerHeight * 0.86;
        const end = 116 + index * 20;
        const progress = Math.min(1, Math.max(0, (start - nextTop) / Math.max(1, start - end)));
        const scale = 1 - progress * 0.025;
        card.style.setProperty("--scroll-stack-scale", scale.toFixed(4));
      });
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    desktopQuery.addEventListener("change", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);

    return () => {
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      desktopQuery.removeEventListener("change", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      reset();
    };
  }, [disabled]);

  return <div ref={rootRef} className={`scroll-stack ${disabled ? "scroll-stack--disabled" : ""} ${className}`.trim()}>{children}</div>;
}

export function ScrollStackItem({ children, index, className = "" }: ScrollStackItemProps) {
  const style: StackItemStyle = { "--scroll-stack-index": index };
  return <div className={`scroll-stack-card ${className}`.trim()} style={style}>{children}</div>;
}
