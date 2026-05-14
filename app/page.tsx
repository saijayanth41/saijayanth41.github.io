import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
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
      <Header />
      <main>
        <Hero />
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
      <footer className="border-t border-line py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Sai Jayanth Rajamahendram.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </footer>
    </>
  );
}
