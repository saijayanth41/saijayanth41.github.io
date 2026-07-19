"use client";

import type { ReactNode } from "react";

/**
 * Card wrapper whose ::before renders a radial glow that follows the cursor.
 * Position is passed via --spot-x/--spot-y CSS variables (see globals.css).
 */
export function Spotlight({
  children,
  className = "",
  as: Tag = "div"
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <Tag
      className={`spotlight-card ${className}`}
      onMouseMove={(event) => {
        const el = event.currentTarget;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </Tag>
  );
}
