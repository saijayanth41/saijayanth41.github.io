"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { Spotlight } from "@/components/spotlight";
import { springSnappy } from "@/lib/motion";

type SectionProps = {
  id: string;
  index?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  description?: string;
};

export function Section({ id, index, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
              {index ? <span className="text-slate-600">{index}</span> : null}
              {eyebrow}
              <span className="h-px w-16 bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
            {description ? <p className="mt-4 text-base leading-8 text-slate-400">{description}</p> : null}
          </div>
        </Reveal>
        <Reveal delay={0.1}>{children}</Reveal>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <motion.span
      whileHover={{ y: -2, scale: 1.04 }}
      transition={springSnappy}
      className="rounded-full border border-slate-800 bg-ink-950/65 px-3 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-400/40 hover:text-cyan-200"
    >
      {children}
    </motion.span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Spotlight
      as="article"
      className={`rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-glow backdrop-blur ${className}`}
    >
      {children}
    </Spotlight>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M6.25 3.75 10.5 8l-4.25 4.25"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
      <path
        d="M5.25 4.25h6.5v6.5M11.5 4.5 4.25 11.75"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}
