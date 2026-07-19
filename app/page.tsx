import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Aurora, ScrollProgress } from "@/components/effects";
import { TechMarquee } from "@/components/marquee";
import {
  AboutSection,
  CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  OpenSourceSection,
  ProjectsSection,
  ResumeSection,
  SkillsSection
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Aurora />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <OpenSourceSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} <span className="text-slate-300">Sai Jayanth Rajamahendram</span>. Built with
            Next.js, TypeScript, and Tailwind CSS.
          </p>
          <a href="#top" className="w-fit font-medium text-slate-400 transition hover:text-cyan-200">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
