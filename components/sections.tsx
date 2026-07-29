"use client";

import { motion } from "motion/react";
import type { IconType } from "react-icons";
import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  GitPullRequest,
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
import { Spotlight } from "@/components/spotlight";
import { Stats } from "@/components/stats";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { springSnappy } from "@/lib/motion";

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

/* Accent gradients cycled across project cards so the grid reads colorful but coherent. */
const projectAccents = [
  "from-cyan-400 to-sky-500",
  "from-indigo-400 to-violet-500",
  "from-fuchsia-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
];

export function AboutSection() {
  return (
    <Section
      id="about"
      index="01"
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
      <div className="mt-12">
        <Stats />
      </div>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      eyebrow="Experience"
      title="Enterprise healthcare systems and production support."
      description="Hands-on backend engineering, release support, SQL tuning, API integration, and incident resolution in environments where uptime and data correctness matter."
    >
      <RevealGroup className="relative space-y-5" stagger={0.16}>
        <motion.span
          aria-hidden="true"
          className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px origin-top bg-gradient-to-b from-cyan-400/40 via-indigo-400/30 to-transparent md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
        {experience.map((item) => (
          <RevealItem key={item.company} className="relative md:pl-12">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={springSnappy}
              className="absolute left-[5px] top-7 hidden h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 bg-ink-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] md:flex"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-300 to-indigo-400" />
            </motion.span>
            <motion.div whileHover={{ y: -4 }} transition={springSnappy}>
            <Card className="hover:border-cyan-400/25">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 font-display text-base font-bold text-cyan-200 ring-1 ring-cyan-400/25">
                    {item.company
                      .split(" ")
                      .slice(0, 2)
                      .map((word) => word[0])
                      .join("")}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 text-cyan-200">
                      <BriefcaseBusiness className="h-4 w-4" />
                      <p className="font-mono text-xs uppercase tracking-[0.18em]">{item.dates}</p>
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">{item.company}</h3>
                    <p className="mt-1 text-base font-semibold text-slate-300">{item.role}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.context}</p>
                  </div>
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
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
            </motion.div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Production-style projects across automation, infrastructure, and healthcare AI."
      description="Each project focuses on a real engineering surface: provisioning infrastructure, moving alerts into workflows, exposing APIs, streaming data, or automating deployment."
    >
      <RevealGroup className="grid gap-5 lg:grid-cols-3" stagger={0.12}>
        {featured.map((project, i) => (
          <RevealItem key={project.name}>
            <ProjectCard project={project} accent={projectAccents[i % projectAccents.length]} featured />
          </RevealItem>
        ))}
      </RevealGroup>
      <RevealGroup className="mt-5 grid gap-5 md:grid-cols-2" stagger={0.1}>
        {supporting.map((project, i) => (
          <RevealItem key={project.name}>
            <ProjectCard
              project={project}
              accent={projectAccents[(i + featured.length) % projectAccents.length]}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  accent,
  featured = false,
}: {
  project: Project;
  accent: string;
  featured?: boolean;
}) {
  return (
    <Spotlight
      as="article"
      className={
        "group flex flex-col rounded-2xl border bg-white/[0.035] shadow-glow backdrop-blur transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055] " +
        (featured ? "border-cyan-400/20" : "border-line")
      }
    >
      <div className={`h-1 w-full rounded-t-2xl bg-gradient-to-r ${accent} opacity-70 transition group-hover:opacity-100`} />
      <div className="flex flex-1 flex-col p-6">
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

        <div className="mt-auto pt-6">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            <ExternalLink className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </Spotlight>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      index="04"
      eyebrow="Skills"
      title="Backend-first stack with practical cloud and DevOps coverage."
    >
      <RevealGroup className="grid gap-5 md:grid-cols-2" stagger={0.1}>
        {skills.map((skillGroup) => {
          const CategoryIcon = categoryIcons[skillGroup.group as keyof typeof categoryIcons] ?? Code2;

          return (
            <RevealItem key={skillGroup.group}>
            <Spotlight
              as="article"
              className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10 hover:bg-white/[0.045] hover:ring-cyan-400/25"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 text-cyan-200 ring-1 ring-cyan-400/25">
                  <CategoryIcon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-semibold text-white">{skillGroup.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => {
                  const SkillIcon = skillIcons[skill];

                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-ink-950/65 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
                    >
                      {SkillIcon ? <SkillIcon className="h-3.5 w-3.5 text-cyan-200" /> : null}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </Spotlight>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      index="05"
      eyebrow="Certifications"
      title="Current cloud, platform, and engineering credentials."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <Spotlight
            key={certification.name}
            className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10 transition duration-200 hover:-translate-y-0.5 hover:ring-cyan-400/25"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-400/15 text-amber-300 ring-1 ring-amber-400/25">
                <Award className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold leading-6 text-slate-200">{certification.name}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-slate-500">{certification.date}</p>
              </div>
            </div>
          </Spotlight>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" index="06" eyebrow="Education" title="Computer science graduate foundation.">
      <Card className="max-w-3xl">
        {education.map((item) => (
          <div key={item.school} className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-400/20 to-fuchsia-400/15 text-indigo-200 ring-1 ring-indigo-400/25">
                <GraduationCap className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{item.degree}</h3>
                <p className="mt-2 text-base font-semibold text-cyan-200">{item.school}</p>
                <p className="mt-2 text-sm text-slate-500">{item.location}</p>
              </div>
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
      index="07"
      eyebrow="Open Source"
      title="Small, practical contribution to ASP.NET Core documentation."
    >
      <Card className="max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-400/15 text-emerald-300 ring-1 ring-emerald-400/25">
            <GitPullRequest className="h-5 w-5" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">ASP.NET Core GitHub Repository</p>
        </div>
        <h3 className="mt-4 font-display text-2xl font-semibold text-white">PR #66651 · OpenAPI/GetDocument troubleshooting</h3>
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
      index="08"
      eyebrow="Resume"
      title="Resume and project proof."
      description="Download the resume, review the repositories, or contact me directly for backend, cloud, DevOps, and healthcare engineering roles."
    >
      <div className="flex flex-wrap gap-3">
        <a
          href="/SaiJayanth_Resume.pdf"
          className="rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
        >
          Download Resume
        </a>
        <a
          href="#projects"
          className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
        >
          View Projects
        </a>
      </div>
    </Section>
  );
}

export function ContactSection() {
  return (
    <Section id="contact" index="09" eyebrow="Contact" title="Let's build something reliable together.">
      <div className="gradient-border max-w-3xl rounded-3xl p-8 shadow-glow sm:p-10">
        <p className="text-lg leading-8 text-slate-300">
          Open to backend, cloud, and DevOps engineering roles. The fastest way to reach me is email — I usually reply within a day.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(34,211,238,0.35)]"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>
        <div className="mt-8 grid gap-3">
          <ContactLink label="LinkedIn" value="linkedin.com/in/saijayanthr" href={profile.linkedin} icon={ExternalLink} />
          <ContactLink label="GitHub" value="github.com/saijayanth41" href={profile.github} icon={ExternalLink} />
          <ContactLink label="Location" value={`${profile.location} · Open to Relocate`} href="#" icon={MapPin} />
        </div>
      </div>
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
  const isLink = href !== "#";
  const Wrapper = isLink ? "a" : "div";

  return (
    <Wrapper
      {...(isLink
        ? {
            href,
            target: isExternal ? "_blank" : undefined,
            rel: isExternal ? "noreferrer" : undefined
          }
        : {})}
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
      {isLink ? <ExternalIcon /> : null}
    </Wrapper>
  );
}
