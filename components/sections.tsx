import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skills,
} from "@/lib/portfolio-data";
import { Card, ExternalIcon, Section, Tag } from "@/components/ui";

export function AboutSection() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Backend, cloud, and DevOps work for systems that need to stay correct."
    >
      <Card className="max-w-4xl">
        <p className="text-lg leading-8 text-slate-300">
          I am a Software Engineer with 3+ years of experience developing and
          supporting enterprise healthcare applications, with hands-on
          experience in .NET Core, REST APIs, SQL Server, Azure DevOps, AWS,
          Azure, Docker, Kubernetes, Terraform, CI/CD, and production support.
        </p>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          I have worked on Medicare and Medicaid systems where reliability, data
          correctness, and secure engineering matter. My work spans backend
          APIs, cloud infrastructure, automation, deployment pipelines, defect
          resolution, and production operations.
        </p>
      </Card>
    </Section>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Enterprise healthcare engineering with production support exposure."
      description="The strongest signal is not just project work: it is experience supporting healthcare workflows where releases, defects, data correctness, and uptime matter."
    >
      <div className="space-y-6">
        {experience.map((item) => (
          <Card key={item.company}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 text-base font-semibold text-cyan-200">
                  {item.company}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                  {item.dates}
                </p>
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
        ))}
      </div>
    </Section>
  );
}

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects mapped to backend, cloud, automation, and reliability signals."
      description="The project set is weighted toward infrastructure, APIs, CI/CD, observability, and workflow automation rather than standalone UI samples."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.name}
            className={index === 0 ? "lg:col-span-2" : ""}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-300">
                  {project.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:max-w-sm sm:justify-end">
                {project.stack.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </div>
            <p className="mt-5 leading-7 text-slate-300">
              {project.description}
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              Engineering signal
            </p>
            <ul className="mt-3 grid gap-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-violet-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
            >
              View Repository
              <ExternalIcon />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function SkillsSection() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Backend-first skills with deployable cloud and DevOps coverage."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((skillGroup) => (
          <Card key={skillGroup.group}>
            <h3 className="font-display text-xl font-semibold text-white">
              {skillGroup.group}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials that support the cloud and platform story."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => (
          <div
            key={certification.name}
            className="rounded-2xl border border-line bg-white/[0.035] p-5"
          >
            <p className="font-semibold leading-7 text-slate-200">
              {certification.name}
            </p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
              {certification.date}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" eyebrow="Education" title="Graduate computer science foundation.">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <Card key={item.school}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">Education</p>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.degree}</h3>
            <p className="mt-2 text-base font-semibold text-cyan-200">{item.school}</p>
            <p className="mt-2 text-sm text-slate-500">{item.location}</p>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">{item.date}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function OpenSourceSection() {
  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title="Open-source contribution with practical framework documentation value."
    >
      <Card className="max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
          ASP.NET Core GitHub Repository
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-white">
          PR #66651 · OpenAPI/GetDocument troubleshooting
        </h3>
        <p className="mt-4 leading-8 text-slate-300">
          Improved troubleshooting documentation for OpenAPI/GetDocument
          behavior in ASP.NET Core, following the GitHub contribution workflow
          for a major Microsoft-maintained framework repository.
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
      title="Resume-ready summary for recruiting workflows."
      description="Download the resume, scan the project work, or contact me directly for backend, cloud, DevOps, and healthcare engineering roles."
    >
      <div className="flex flex-wrap gap-3">
        <a
          href="/SaiJayanth_Resume.pdf"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100"
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
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to software engineering, cloud, and DevOps roles."
    >
      <Card className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg leading-8 text-slate-300">
            Based in {profile.location}. Strong fit for backend engineering,
            cloud infrastructure, DevOps automation, production support, and
            healthcare technology teams that value reliable delivery.
          </p>
        </div>
        <div className="grid gap-3">
          <ContactLink
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactLink
            label="LinkedIn"
            value="linkedin.com/in/saijayanthr"
            href={profile.linkedin}
          />
          <ContactLink
            label="GitHub"
            value="github.com/saijayanth41"
            href={profile.github}
          />
          <ContactLink label="Location" value={profile.location} href="#" />
        </div>
      </Card>
    </Section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink-950/60 px-4 py-3 transition hover:border-cyan-400/40 hover:bg-cyan-400/5"
    >
      <span>
        <span className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
          {label}
        </span>
        <span className="mt-1 block font-medium text-slate-200">{value}</span>
      </span>
      {href !== "#" ? <ExternalIcon /> : null}
    </a>
  );
}
