import type { CSSProperties, ReactNode } from "react";
import "./GlareHover.css";

type GlareHoverProps = {
  children: ReactNode;
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: CSSProperties;
};

type GlareVariables = CSSProperties & Record<`--gh-${string}`, string>;

function toRgba(color: string, opacity: number) {
  const hex = color.replace("#", "");

  if (/^[0-9a-f]{6}$/i.test(hex)) {
    const red = Number.parseInt(hex.slice(0, 2), 16);
    const green = Number.parseInt(hex.slice(2, 4), 16);
    const blue = Number.parseInt(hex.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }

  if (/^[0-9a-f]{3}$/i.test(hex)) {
    const red = Number.parseInt(hex[0] + hex[0], 16);
    const green = Number.parseInt(hex[1] + hex[1], 16);
    const blue = Number.parseInt(hex[2] + hex[2], 16);
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  }

  return color;
}

export function GlareHover({
  children,
  width = "500px",
  height = "500px",
  background = "#000",
  borderRadius = "10px",
  borderColor = "#333",
  glareColor = "#fff",
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = "",
  style,
}: GlareHoverProps) {
  const variables: GlareVariables = {
    "--gh-width": width,
    "--gh-height": height,
    "--gh-background": background,
    "--gh-radius": borderRadius,
    "--gh-border": borderColor,
    "--gh-angle": `${glareAngle}deg`,
    "--gh-duration": `${transitionDuration}ms`,
    "--gh-size": `${glareSize}%`,
    "--gh-color": toRgba(glareColor, glareOpacity),
    ...style,
  };

  return (
    <div className={`glare-hover${playOnce ? " glare-hover--play-once" : ""}${className ? ` ${className}` : ""}`} style={variables}>
      {children}
    </div>
  );
}
