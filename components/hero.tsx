"use client";

import { motion, useMotionValue, useScroll, useTransform, useSpring } from "motion/react";
import { profile } from "@/lib/portfolio-data";
import { ArrowIcon, ExternalIcon } from "@/components/ui";
import { Terminal } from "@/components/terminal";
import { Typewriter } from "@/components/typewriter";
import { fadeUp, springSnappy, staggerContainer } from "@/lib/motion";

const heroLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` }
];

const roles = [
  ".NET Backend Engineer",
  "Cloud Infrastructure Engineer",
  "DevOps Automation Engineer",
  "Healthcare Systems Engineer"
];

export function Hero() {
  const { scrollY } = useScroll();
  const terminalY = useTransform(scrollY, [0, 800], [0, -80]);
  const terminalYSpring = useSpring(terminalY, { stiffness: 100, damping: 30 });
  const gridY = useTransform(scrollY, [0, 800], [0, 60]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width);
        my.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(600px circle at ${x} ${y}, rgba(34,211,238,0.06), transparent 60%)`
          )
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 font-mono text-xs text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.08)]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            Open to backend · cloud · DevOps roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Sai Jayanth
            <span className="block gradient-text pb-2">Rajamahendram</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 font-mono text-lg sm:text-xl">
            <span className="text-slate-500">{"// "}</span>
            <Typewriter phrases={roles} />
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <motion.a
              href="#projects"
              whileHover={{ y: -3, boxShadow: "0 14px 45px rgba(34,211,238,0.4)" }}
              whileTap={{ scale: 0.96 }}
              transition={springSnappy}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-3 text-sm font-semibold text-ink-950"
            >
              View Projects
              <ArrowIcon />
            </motion.a>
            <motion.a
              href="/SaiJayanth_Resume.pdf"
              whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={springSnappy}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-5 py-3 text-sm font-semibold text-white"
            >
              Download Resume
              <ExternalIcon />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={springSnappy}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            {heroLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="text-sm font-medium text-slate-400 underline-offset-4 transition hover:text-cyan-200 hover:underline"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...springSnappy, delay: 0.3 }}
          style={{ y: terminalYSpring }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/15 via-indigo-400/10 to-fuchsia-400/10 blur-3xl" />
          <div className="animate-float relative">
            <Terminal />
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-700 p-1.5">
          <div className="scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </div>
      </div>
    </section>
  );
}
