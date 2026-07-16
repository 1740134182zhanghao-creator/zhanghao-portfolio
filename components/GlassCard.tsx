"use client";

import { type HTMLAttributes, type ReactNode } from "react";

export function GlassCard({ children, className = "", onMouseMove, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={`glass-card ${className}`}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
        onMouseMove?.(event);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
