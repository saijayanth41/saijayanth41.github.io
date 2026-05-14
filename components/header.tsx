import { navItems, profile } from "@/lib/portfolio-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink-950/82 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-display text-sm font-semibold tracking-wide text-white">
          Sai Jayanth
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/[0.06] hover:text-white"
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
            className="shrink-0 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:border-cyan-400/40 hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
