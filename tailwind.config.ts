import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050814",
          900: "#080d1b",
          850: "#0b1222",
          800: "#101827"
        },
        line: "rgba(148, 163, 184, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56, 189, 248, 0.12), 0 24px 70px rgba(8, 13, 27, 0.55)",
        "glow-violet": "0 0 0 1px rgba(167, 139, 250, 0.14), 0 24px 70px rgba(8, 13, 27, 0.55)"
      },
      animation: {
        "aurora-1": "aurora-1 26s ease-in-out infinite alternate",
        "aurora-2": "aurora-2 32s ease-in-out infinite alternate",
        "aurora-3": "aurora-3 38s ease-in-out infinite alternate",
        marquee: "marquee 36s linear infinite",
        float: "float 7s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "orbit-spin": "orbit-spin 22s linear infinite"
      },
      keyframes: {
        "orbit-spin": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" }
        },
        "aurora-1": {
          "0%": { transform: "translate(-8%, -6%) scale(1)" },
          "100%": { transform: "translate(14%, 10%) scale(1.25)" }
        },
        "aurora-2": {
          "0%": { transform: "translate(10%, 4%) scale(1.1)" },
          "100%": { transform: "translate(-12%, -8%) scale(0.9)" }
        },
        "aurora-3": {
          "0%": { transform: "translate(0%, 12%) scale(0.95)" },
          "100%": { transform: "translate(6%, -10%) scale(1.2)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
