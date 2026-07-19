import type { IconType } from "react-icons";
import { Cloud } from "lucide-react";
import {
  SiApachekafka,
  SiDocker,
  SiDotnet,
  SiFastapi,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiSplunk,
  SiTerraform,
  SiTypescript
} from "react-icons/si";

const TECH: Array<{ name: string; icon: IconType }> = [
  { name: ".NET", icon: SiDotnet },
  { name: "AWS", icon: Cloud as unknown as IconType },
  { name: "Terraform", icon: SiTerraform },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Docker", icon: SiDocker },
  { name: "Python", icon: SiPython },
  { name: "Kafka", icon: SiApachekafka },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Jenkins", icon: SiJenkins },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Splunk", icon: SiSplunk },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Linux", icon: SiLinux }
];

export function TechMarquee() {
  const doubled = [...TECH, ...TECH];

  return (
    <div className="marquee-mask overflow-hidden border-y border-white/5 bg-white/[0.02] py-5" aria-hidden="true">
      <div className="marquee-track items-center gap-10 pr-10">
        {doubled.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <span
              key={`${tech.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-sm font-medium text-slate-500 transition hover:text-cyan-200"
            >
              <Icon className="h-5 w-5" />
              {tech.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
