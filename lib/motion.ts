import type { Transition, Variants } from "motion/react";

export const spring: Transition = { type: "spring", stiffness: 120, damping: 18, mass: 0.9 };
export const springSnappy: Transition = { type: "spring", stiffness: 260, damping: 20, mass: 0.6 };
export const springSoft: Transition = { type: "spring", stiffness: 80, damping: 20, mass: 1 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: spring }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: spring }
};

export const staggerContainer = (stagger = 0.09, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren }
  }
});

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" as const };
