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
        glow: "0 0 0 1px rgba(56, 189, 248, 0.12), 0 24px 70px rgba(8, 13, 27, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
