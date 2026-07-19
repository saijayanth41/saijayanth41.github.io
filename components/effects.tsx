"use client";

import { useEffect, useState } from "react";

/** Fixed animated aurora blobs behind the whole page. */
export function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob animate-aurora-1 left-[-10%] top-[-12%] h-[34rem] w-[34rem] bg-cyan-500/20" />
      <div className="aurora-blob animate-aurora-2 right-[-8%] top-[8%] h-[30rem] w-[30rem] bg-indigo-500/20" />
      <div className="aurora-blob animate-aurora-3 bottom-[-18%] left-[28%] h-[32rem] w-[32rem] bg-fuchsia-500/10" />
    </div>
  );
}

/** Thin gradient bar at the very top showing scroll progress. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
