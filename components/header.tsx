"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { navItems, profile } from "@/lib/portfolio-data";
import { springSnappy } from "@/lib/motion";

export function Header() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 8));

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(5,8,20,0.82)" : "rgba(5,8,20,0.4)",
        boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.03)" : "0 0 0 rgba(0,0,0,0)"
      }}
      transition={{ duration: 0.25 }}
      className="sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springSnappy}
          className="font-display text-sm font-semibold tracking-wide text-white"
        >
          <span className="gradient-text">{"<SJ />"}</span>
        </motion.a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200 " +
                (active === item.href ? "text-cyan-200" : "text-slate-400 hover:text-white")
              }
            >
              {active === item.href ? (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-cyan-400/10"
                  transition={springSnappy}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </a>
          ))}
        </nav>
        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ y: -2, borderColor: "rgba(103,232,249,0.6)" }}
          whileTap={{ scale: 0.96 }}
          transition={springSnappy}
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200"
        >
          Email
        </motion.a>
      </div>
      <nav
        className="mx-auto flex w-full max-w-6xl gap-1 overflow-x-auto px-5 pb-3 sm:px-6 lg:hidden"
        aria-label="Mobile navigation"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={
              "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition " +
              (active === item.href
                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                : "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-cyan-400/40 hover:text-white")
            }
          >
            {item.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
