"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/portfolio-data";

export function Header() {
  const [active, setActive] = useState("");

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/82 shadow-[0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide text-white">
          <span className="gradient-text">{"<SJ />"}</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                "rounded-full px-3 py-2 text-sm font-medium transition duration-200 " +
                (active === item.href
                  ? "bg-cyan-400/10 text-cyan-200"
                  : "text-slate-400 hover:bg-white/[0.06] hover:text-white")
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/15"
        >
          Email
        </a>
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
    </header>
  );
}
