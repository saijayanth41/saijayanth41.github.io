"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  SiDocker,
  SiDotnet,
  SiKubernetes,
  SiLinux,
  SiTerraform
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Cloud } from "lucide-react";
import type { IconType } from "react-icons";

const ORBIT_ITEMS: Array<{ label: string; icon: IconType; color: string }> = [
  { label: ".NET", icon: SiDotnet, color: "#818cf8" },
  { label: "Azure", icon: Cloud as unknown as IconType, color: "#22d3ee" },
  { label: "AWS", icon: FaAws, color: "#f59e0b" },
  { label: "Linux", icon: SiLinux, color: "#e879f9" },
  { label: "Docker", icon: SiDocker, color: "#22d3ee" },
  { label: "Kubernetes", icon: SiKubernetes, color: "#818cf8" },
  { label: "Terraform", icon: SiTerraform, color: "#a78bfa" }
];

const RADIUS = 340;

export function HeroScene() {
  const [reduced, setReduced] = useState(true);
  const [mounted, setMounted] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const tiltX = useTransform(springY, [0, 1], [14, -14]);
  const tiltY = useTransform(springX, [0, 1], [-14, 14]);

  useEffect(() => {
    setMounted(true);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: MouseEvent) => {
      mx.set(event.clientX / window.innerWidth);
      my.set(event.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, mx, my]);

  if (!mounted) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-[1] hidden items-center justify-center sm:flex"
      aria-hidden="true"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX: reduced ? 0 : tiltX,
          rotateY: reduced ? 0 : tiltY
        }}
        className="relative h-1 w-1"
      >
        <div
          className="relative h-1 w-1"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(58deg)" }}
        >
          <div
            className={`relative h-1 w-1 ${reduced ? "" : "animate-orbit-spin"}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {ORBIT_ITEMS.map((item, i) => {
              const angle = (360 / ORBIT_ITEMS.length) * i;
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="absolute left-1/2 top-1/2 flex items-center gap-2 rounded-full border border-white/10 bg-ink-950/80 px-3 py-1.5 shadow-glow backdrop-blur"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${RADIUS}px) rotateX(-58deg)`,
                    transformStyle: "preserve-3d"
                  }}
                >
                  <Icon className="h-4 w-4" style={{ color: item.color }} />
                  <span className="whitespace-nowrap font-mono text-xs font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
