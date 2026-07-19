"use client";

import { useEffect, useRef, useState } from "react";

type Line = { prompt?: boolean; text: string; className?: string };

const LINES: Line[] = [
  { prompt: true, text: "whoami" },
  { text: "sai-jayanth · software engineer", className: "text-slate-300" },
  { prompt: true, text: "cat stack.txt" },
  { text: ".NET Core · SQL Server · AWS · Azure · Terraform · K8s", className: "text-slate-300" },
  { prompt: true, text: "./deploy.sh --env production" },
  { text: "✓ build passed   ✓ tests green   ✓ shipped", className: "text-emerald-300" },
  { prompt: true, text: "uptime" },
  { text: "3+ years in production · healthcare-grade reliability", className: "text-slate-300" }
];

const CHAR_MS = 34;
const LINE_PAUSE_MS = 420;

export function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLineIndex(LINES.length);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || lineIndex >= LINES.length) return;

    const line = LINES[lineIndex];

    if (charIndex < line.text.length) {
      const timer = setTimeout(() => setCharIndex(charIndex + 1), line.prompt ? CHAR_MS : 8);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setLineIndex(lineIndex + 1);
      setCharIndex(0);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(timer);
  }, [started, lineIndex, charIndex]);

  return (
    <div
      ref={ref}
      className="gradient-border overflow-hidden rounded-2xl font-mono text-[13px] leading-6 shadow-glow"
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 text-xs text-slate-500">sai@production ~ zsh</span>
      </div>
      <div className="min-h-[15.5rem] bg-ink-950/80 p-5">
        {LINES.slice(0, lineIndex + 1).map((line, i) => {
          const text = i === lineIndex ? line.text.slice(0, charIndex) : line.text;
          if (i === lineIndex && charIndex === 0 && lineIndex >= LINES.length) return null;

          return (
            <p key={i} className={line.className ?? "text-slate-100"}>
              {line.prompt ? <span className="mr-2 text-cyan-300">$</span> : null}
              {text}
              {i === lineIndex && lineIndex < LINES.length ? (
                <span className="caret" aria-hidden="true" />
              ) : null}
            </p>
          );
        })}
        {lineIndex >= LINES.length ? (
          <p>
            <span className="mr-2 text-cyan-300">$</span>
            <span className="caret" aria-hidden="true" />
          </p>
        ) : null}
      </div>
    </div>
  );
}
