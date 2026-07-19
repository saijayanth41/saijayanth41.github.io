"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 3, suffix: "+", label: "Years in production" },
  { value: 9, suffix: "", label: "Projects shipped" },
  { value: 9, suffix: "", label: "Certifications" },
  { value: 1, suffix: "", label: "OSS PR merged upstream" }
];

const DURATION_MS = 1100;

function CountUp({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }

    let frame: number;
    const begin = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - begin) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4">
      {STATS.map((stat) => (
        <div key={stat.label} className="bg-ink-950/90 px-5 py-6 text-center">
          <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
            <span className="gradient-text">
              <CountUp value={stat.value} suffix={stat.suffix} start={start} />
            </span>
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
