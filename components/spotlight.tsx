"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import type { ReactNode } from "react";

/**
 * Card wrapper: cursor-follow radial glow (CSS vars) + subtle 3D tilt on hover.
 */
export function Spotlight({
  children,
  className = "",
  as: Tag = "div",
  tilt = true,
  lift = true
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  tilt?: boolean;
  lift?: boolean;
}) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={`spotlight-card ${className}`}
      style={
        tilt
          ? { rotateX: springX, rotateY: springY, transformPerspective: 900 }
          : undefined
      }
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onMouseMove={(event: React.MouseEvent<HTMLElement>) => {
        const el = event.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        el.style.setProperty("--spot-x", `${x}px`);
        el.style.setProperty("--spot-y", `${y}px`);

        if (tilt) {
          const px = x / rect.width - 0.5;
          const py = y / rect.height - 0.5;
          rotateY.set(px * 6);
          rotateX.set(py * -6);
        }
      }}
      onMouseLeave={() => {
        if (tilt) {
          rotateX.set(0);
          rotateY.set(0);
        }
      }}
    >
      {children}
    </MotionTag>
  );
}

/** Standalone parallax-tilt wrapper for elements that need 3D depth without the glow. */
export function TiltCard({ children, className = "", strength = 8 }: { children: ReactNode; className?: string; strength?: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [strength, -strength]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-strength, strength]);
  const springConfig = { stiffness: 260, damping: 24 };
  const rX = useSpring(rotateX, springConfig);
  const rY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      className={className}
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 900 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left) / rect.width - 0.5);
        y.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
