import { profile } from "@/lib/portfolio-data";
import { ArrowIcon, ExternalIcon } from "@/components/ui";

const heroLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_30rem),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.16),transparent_28rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 font-mono text-xs text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Healthcare systems · Cloud infrastructure · DevOps automation
          </div>

          <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-cyan-200">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100"
            >
              View Projects
              <ArrowIcon />
            </a>
            <a
              href="/SaiJayanth_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:bg-slate-800"
            >
              Download Resume
              <ExternalIcon />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
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

        <div className="rounded-3xl border border-line bg-ink-900/70 p-5 shadow-glow backdrop-blur">
          <div className="rounded-2xl border border-line bg-ink-950 p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300">
              Role alignment
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
              Production backend work with cloud delivery depth.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Positioned for teams that need API engineering, infrastructure
              automation, release support, and healthcare domain context in the
              same engineer.
            </p>
            <div className="mt-6 grid gap-3">
              {profile.fit.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-white/[0.035] px-4 py-3"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3 pt-4 sm:grid-cols-3">
            {[".NET APIs", "AWS/Azure", "K8s/Terraform"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-white/[0.035] px-4 py-3"
              >
                <p className="font-display text-lg font-semibold text-white">
                  {item}
                </p>
                <p className="mt-1 text-xs text-slate-500">Primary signal</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
