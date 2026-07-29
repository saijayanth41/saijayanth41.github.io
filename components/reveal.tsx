"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  variants = fadeUp
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={shouldReduceMotion ? { hidden: { opacity: 1 }, visible: { opacity: 1 } } : variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Wraps children so each direct motion child staggers in on scroll. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.09,
  delayChildren = 0
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={shouldReduceMotion ? undefined : staggerContainer(stagger, delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
