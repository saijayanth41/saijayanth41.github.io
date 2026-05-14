import type { IconType } from "react-icons";
import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Monitor,
  ServerCog,
} from "lucide-react";
import {
  SiAngular,
  SiApachekafka,
  SiDatabricks,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiSplunk,
  SiTerraform,
  SiTypescript,
  SiDotnet,
} from "react-icons/si";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-data";
import { Card, ExternalIcon, Section, Tag } from "@/components/ui";

const categoryIcons = {
  Backend: ServerCog,
  "Cloud & DevOps": Cloud,
  "Data & Streaming": Database,
  Frontend: Monitor,
  "AI & Automation": BrainCircuit,
};

const skillIcons: Record<string, IconType> = {
  "C#": SiDotnet,
  ".NET Core": SiDotnet,
  "ASP.NET Core": SiDotnet,
  "SQL Server": Database as unknown as IconType,
  AWS: Cloud as unknown as IconType,
  Azure: Cloud as unknown as IconType,
  Terraform: SiTerraform,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  "GitHub Actions": SiGithubactions,
  Jenkins: SiJenkins,
  Linux: SiLinux,
  Splunk: SiSplunk,
  Kafka: SiApachekafka,
  Databricks: SiDatabricks,
  MongoDB: SiMongodb,
  React: SiReact,
  "Next.js": SiNextdotjs,
  Angular: SiAngular,
  TypeScript: SiTypescript,
  FastAPI: SiFastapi,
  "Claude API": BrainCircuit as unknown as IconType,
  "Prompt Engineering": BrainCircuit as unknown as IconType,
  "Automation Workflows": SiGithubactions,
};

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend and cloud engineering for systems that need to stay reliable."
    >
      <div className="max-w-4xl space-y-5 text-lg leading-8 text-slate-300">
        <p>
          I am a Software Engineer with 3+ years of experience building and supporting enterprise healthcare applications, with hands-on work across .NET Core, REST APIs, SQL Server, Azure DevOps, AWS, Azure, Docker, Kubernetes, Terraform, CI/CD, and production support.
        </p>
        <p>
          My strongest experience is in Medicare and Medicaid systems, where correctness, secure delivery, deployment discipline, and fast production issue resolution matter every day.
        </p>
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Enterprise healthcare systems and production support."
      description="Hands-on backend engineering, release support, SQL tuning, API integration, and incident resolution in environments where uptime and data correctness matter."
    >
      <div className="relative space-y-5 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-400/40 before:via-slate-700 before:to-transparent md:before:block">
        {experience.map((item) => (
          <article key={item.company} className="relative md:pl-12">
            <span className="absolute left-[9px] top-7 hidden h-3 w-3 rounded-full border border-cyan-300/50 bg-ink-950 shadow-[0_0_20px_rgba(34,211,238,0.25)] md:block" />
            <Card className="transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/25">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-cyan-200">
                    <BriefcaseBusiness className="h-4 w-4" />
                    <p className="font-mono text-xs uppercase tracking-[0.18em]">{item.dates}</p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.company}</h3>
                  <p className="mt-1 text-base font-semibold text-slate-300">{item.role}</p>
                  <p className="mt-2 text-sm text-slate-500">{item.context}</p>
                </div>
                <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
                  {item.stack.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-300 lg:grid-cols-2">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Production-style projects across automation, infrastructure, and healthcare AI."
      description="Each project focuses on a real engineering surface: provisioning infrastructure, moving alerts into workflows, exposing APIs, streaming data, or automating deployment."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {supporting.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={
        "group rounded-2xl border bg-white/[0.035] p-6 shadow-glow backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055] " +
        (featured ? "border-cyan-400/20" : "border-line")
      }
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">{project.label}</p>
          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white">{project.name}</h3>
        </div>
        {featured ? (
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-5 space-y-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Problem</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.problem}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Build</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">Key challenges solved</p>
        <ul className="mt-3 grid gap-2">
          {project.challenges.map((challenge) => (
            <li key={challenge} className="flex gap-3 text-sm leading-6 text-slate-400">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-300" />
              <span>{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
      >
        <ExternalLink className="h-4 w-4" />
        GitHub
      </a>
    </article>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Backend-first stack with practical cloud and DevOps coverage."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skillGroup) => {
          const CategoryIcon = categoryIcons[skillGroup.group as keyof typeof categoryIcons] ?? Code2;

          return (
            <article key={skillGroup.group} className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10 transition duration-200 hover:-translate-y-0.5 hover:bg-white/[0.045] hover:ring-cyan-400/25">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <CategoryIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{skillGroup.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => {
                  const SkillIcon = skillIcons[skill];

                  return (
                    <span key={skill} className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-ink-950/65 px-3 py-1.5 text-xs font-medium text-slate-300">
                      {SkillIcon ? <SkillIcon className="h-3.5 w-3.5 text-cyan-200" /> : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Current cloud, platform, and engineering credentials."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <div key={certification.name} className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10">
            <p className="font-semibold leading-7 text-slate-200">{certification.name}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{certification.date}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science graduate foundation.">
      <Card className="max-w-3xl">
        {education.map((item) => (
          <div key={item.school} className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-cyan-200">
                <GraduationCap className="h-5 w-5" />
                <p className="font-mono text-xs uppercase tracking-[0.2em]">Education</p>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{item.degree}</h3>
              <p className="mt-2 text-base font-semibold text-cyan-200">{item.school}</p>
              <p className="mt-2 text-sm text-slate-500">{item.location}</p>
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{item.date}</p>
          </div>
        ))}
      </Card>
    </Section>
  );
}

export function OpenSourceSection() {
  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title="Small, practical contribution to ASP.NET Core documentation."
    >
      <Card className="max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">ASP.NET Core GitHub Repository</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">PR #66651 · OpenAPI/GetDocument troubleshooting</h3>
        <p className="mt-4 leading-8 text-slate-300">
          Improved troubleshooting documentation for OpenAPI/GetDocument behavior in ASP.NET Core, following the GitHub contribution workflow for a major Microsoft-maintained framework repository.
        </p>
        <a
          href="https://github.com/dotnet/aspnetcore/pull/66651"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
        >
          View PR
          <ExternalIcon />
        </a>
      </Card>
    </Section>
  );
}

export function ResumeSection() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="Resume and project proof."
      description="Download the resume, review the repositories, or contact me directly for backend, cloud, DevOps, and healthcare engineering roles."
    >
      <div className="flex flex-wrap gap-3">
        <a href="/SaiJayanth_Resume.pdf" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100">
          Download Resume
        </a>
        <a href="#projects" className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white">
          View Projects
        </a>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to backend, cloud, and DevOps engineering roles.">
      <Card className="max-w-3xl">
        <div className="grid gap-3">
          <ContactLink label="Email" value={profile.email} href={"mailto:" + profile.email} icon={Mail} />
          <ContactLink label="LinkedIn" value="linkedin.com/in/saijayanthr" href={profile.linkedin} icon={ExternalLink} />
          <ContactLink label="GitHub" value="github.com/saijayanth41" href={profile.github} icon={ExternalLink} />
          <ContactLink label="Location" value={`${profile.location} · Open to relocate`} href="#" icon={MapPin} />
        </div>
      </Card>
    </Section>
  );
}

type LucideIcon = typeof Mail;

function ContactLink({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center justify-between gap-4 rounded-2xl bg-ink-950/60 px-4 py-3 ring-1 ring-white/10 transition hover:bg-cyan-400/5 hover:ring-cyan-400/30"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
          <Icon className="h-5 w-5" />
        </span>
        <span>
          <span className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{label}</span>
          <span className="mt-1 block font-medium text-slate-200">{value}</span>
        </span>
      </span>
      {href !== "#" ? <ExternalIcon /> : null}
    </a>
  );
}
