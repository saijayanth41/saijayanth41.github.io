import { Cloud, Code2, RefreshCw, ServerCog } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { ArrowIcon, ExternalIcon } from "@/components/ui";

const heroLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

const engineeringCards = [
  {
    title: "Backend Engineering",
    icon: ServerCog,
    items: [".NET Core", "REST APIs", "SQL Server"],
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    items: ["AWS", "Azure", "Terraform", "Kubernetes"],
  },
  {
    title: "Production Engineering",
    icon: RefreshCw,
    items: ["CI/CD", "RCA", "SLA Support", "Monitoring"],
  },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(56,189,248,0.18),transparent_30rem),radial-gradient(circle_at_82%_8%,rgba(99,102,241,0.15),transparent_28rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink-950 to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 font-mono text-xs text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.08)]">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Backend systems · Cloud infrastructure · Production support
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-cyan-100">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-100"
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

          <div className="mt-8 flex flex-wrap gap-4">
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

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-glow backdrop-blur-xl">
              <div className="flex items-center gap-3 text-slate-300">
                <Code2 className="h-5 w-5 text-cyan-300" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  Production stack
                </p>
              </div>
              <p className="mt-4 font-display text-2xl font-semibold leading-tight text-white">
                Backend systems, cloud infrastructure, and DevOps automation built for production environments.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {engineeringCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="group rounded-2xl border border-white/10 bg-ink-900/70 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055]"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-base font-semibold text-white">
                      {card.title}
                    </h2>
                    <ul className="mt-3 space-y-2">
                      {card.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="h-1 w-1 rounded-full bg-cyan-300/80" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
