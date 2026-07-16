import { type HTMLAttributes, type ReactNode } from "react";

export function GlassCard({ children, className = "", ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return <div className={`glass-card ${className}`} {...props}>{children}</div>;
}
