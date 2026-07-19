import { profile } from "@/lib/portfolio-data";
import { ArrowIcon, ExternalIcon } from "@/components/ui";
import { Terminal } from "@/components/terminal";
import { Typewriter } from "@/components/typewriter";

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
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 font-mono text-xs text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.08)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            Open to backend · cloud · DevOps roles
          </div>

          <h1
            className="animate-fade-up max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.08s" }}
          >
            Sai Jayanth
            <span className="block gradient-text pb-2">Rajamahendram</span>
          </h1>

          <p
            className="animate-fade-up mt-5 font-mono text-lg sm:text-xl"
            style={{ animationDelay: "0.16s" }}
          >
            <span className="text-slate-500">{"// "}</span>
            <Typewriter phrases={roles} />
          </p>

          <p
            className="animate-fade-up mt-5 max-w-2xl text-lg leading-8 text-slate-300"
            style={{ animationDelay: "0.24s" }}
          >
            {profile.subtitle}
          </p>

          <div className="animate-fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.32s" }}>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-3 text-sm font-semibold text-ink-950 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
            >
              View Projects
              <ArrowIcon />
            </a>
            <a
              href="/SaiJayanth_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/75 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-800"
            >
              Download Resume
              <ExternalIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-white"
            >
              Contact Me
            </a>
          </div>

          <div className="animate-fade-up mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.4s" }}>
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
          </div>
        </div>

        <div className="animate-fade-up relative" style={{ animationDelay: "0.3s" }}>
          <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/15 via-indigo-400/10 to-fuchsia-400/10 blur-3xl" />
          <div className="animate-float relative">
            <Terminal />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-slate-700 p-1.5">
          <div className="scroll-dot h-1.5 w-1.5 rounded-full bg-cyan-300" />
        </div>
      </div>
    </section>
  );
}
