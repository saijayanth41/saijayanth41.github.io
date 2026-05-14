export const profile = {
  name: "Sai Jayanth Rajamahendram",
  title: "Software Engineer specializing in .NET, Healthcare Systems, Cloud Infrastructure, and DevOps Automation",
  subtitle:
    "Backend engineer with healthcare production experience, cloud infrastructure projects, and hands-on DevOps automation across .NET, AWS, Azure, Kubernetes, Terraform, and CI/CD.",
  location: "Chicago, IL",
  email: "saijayanth41@gmail.com",
  github: "https://github.com/saijayanth41",
  linkedin: "https://www.linkedin.com/in/saijayanthr/",
  fit: [
    {
      label: "Core role fit",
      value: "Backend · Cloud · DevOps"
    },
    {
      label: "Domain strength",
      value: "Healthcare systems"
    },
    {
      label: "Production exposure",
      value: "CI/CD · RCA · SLA support"
    }
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Open Source", href: "#open-source" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const experience = [
  {
    company: "Cognizant Technology Solutions",
    role: "Software Engineer",
    dates: "Jul 2021 – Aug 2023",
    context: "Molina Healthcare | Medicare & Medicaid Systems",
    bullets: [
      "Engineered and supported Medicare and Medicaid workflow applications for Molina Healthcare, where reliability, data correctness, and secure delivery were required.",
      "Built and optimized C#/.NET Core REST APIs for eligibility and claims-adjacent healthcare systems.",
      "Improved SQL Server performance by reading execution plans, tuning queries, and adjusting indexing strategies.",
      "Integrated DocuSign REST and SOAP workflows for healthcare document processing and downstream system handoffs.",
      "Supported Azure DevOps CI/CD releases across development, QA, and production environments.",
      "Resolved SLA-driven production defects through root-cause analysis, IIS deployment troubleshooting, and code-quality checks with SonarQube."
    ],
    stack: [".NET Core", "C#", "SQL Server", "Azure DevOps", "IIS", "SonarQube", "REST APIs"]
  },
  {
    company: "Community Dreams Foundation",
    role: "Software Engineer",
    dates: "Jul 2025 – Present",
    context: "Nonprofit learning platforms",
    bullets: [
      "Build full-stack learning platform features with production-oriented frontend and backend workflows.",
      "Develop backend APIs and maintain application logic for nonprofit education use cases.",
      "Use cloud, automation, and AI-assisted development workflows to speed delivery without sacrificing maintainability."
    ],
    stack: ["React", "Backend APIs", "Cloud", "Automation", "AI-assisted workflows"]
  }
];

export const projects = [
  {
    name: "Auto-Triage One",
    href: "https://github.com/saijayanth41/Auto-Triage-One",
    label: "Splunk Incident Automation",
    description:
      "Splunk Technology Add-On that turns alerts into incident tickets across Jira, ServiceNow, Freshservice, or custom APIs without locking teams into one ITSM platform.",
    stack: ["Splunk", "Python", "REST APIs", "JavaScript", "HTML", "CSS"],
    highlights: [
      "Designed modular alert actions with retry, throttle, and logging behavior for operational reliability.",
      "Built setup UI, API integration flow, and Splunk Cloud-compatible packaging."
    ]
  },
  {
    name: "Amazon EKS Infrastructure Automation",
    href: "https://github.com/saijayanth41/Amazon-EKS-Infrastructure-Automation",
    label: "Cloud Infrastructure",
    description:
      "Terraform-based AWS EKS environment covering networking, Kubernetes compute, autoscaling, service exposure, and deployment manifests.",
    stack: ["AWS", "Terraform", "Kubernetes", "Docker", "Helm"],
    highlights: [
      "Provisioned VPC, EKS cluster, node groups, IAM roles, and load balancing resources.",
      "Configured HPA, Metrics Server, Helm workflows, and Kubernetes manifests."
    ]
  },
  {
    name: "Clinical Note Summarizer",
    href: "https://github.com/saijayanth41/Clinical-Note-Summarizer",
    label: "Healthcare AI",
    description:
      "FastAPI service that uses Claude API to convert clinical note text into structured healthcare summaries suitable for downstream review workflows.",
    stack: ["Python", "FastAPI", "Claude API"],
    highlights: [
      "Enforced structured JSON output for consistent API responses.",
      "Tested prompt and schema behavior across varied clinical note samples."
    ]
  },
  {
    name: "Instagram Analytics Platform",
    href: "https://github.com/saijayanth41/Instagram-Analytics-Platform",
    label: "Streaming Analytics",
    description:
      "Event-driven analytics platform that streams profile data through Kafka and serves live dashboard updates over WebSockets.",
    stack: ["Kafka", "FastAPI", "React", "MongoDB", "DynamoDB", "Apify"],
    highlights: [
      "Built a scraping-to-streaming pipeline for profile analysis workflows.",
      "Separated ingestion, persistence, and dashboard delivery across API and data stores."
    ]
  },
  {
    name: "Serverless URL Monitoring System",
    href: "https://github.com/saijayanth41/Serverless-URL-Monitoring-System",
    label: "Serverless Monitoring",
    description:
      "AWS-native uptime monitor that schedules URL checks and sends alerts without maintaining servers.",
    stack: ["AWS Lambda", "EventBridge", "SNS", "CloudWatch"],
    highlights: [
      "Scheduled checks with EventBridge and Lambda.",
      "Centralized alerts and observability through SNS and CloudWatch."
    ]
  },
  {
    name: "GitHub-to-Slack Commit Notifier",
    href: "https://github.com/saijayanth41/GitHub-to-Slack-Commit-Notifier",
    label: "Webhook Automation",
    description:
      "Flask webhook service that receives GitHub commit events, validates payloads, and posts concise updates into Slack.",
    stack: ["Python", "Flask", "GitHub Webhooks", "Slack Webhooks"],
    highlights: [
      "Processed event payloads from GitHub webhooks.",
      "Delivered real-time engineering notifications to Slack channels."
    ]
  },
  {
    name: "Jenkins Docker CI/CD Automation",
    href: "https://github.com/saijayanth41/Jenkins-Docker-CICD-Automation",
    label: "CI/CD Automation",
    description:
      "Jenkins and Docker deployment pipeline with automated builds, container runtime checks, service health validation, and recovery logic.",
    stack: ["Jenkins", "Docker", "Bash", "GitHub"],
    highlights: [
      "Used SCM triggers, Docker-in-Docker, and scripted deployment steps.",
      "Added HTTP health checks, email alerts, and auto-restart monitoring."
    ]
  }
];

export const skills = [
  {
    group: "Backend",
    items: ["C#", ".NET Core", "ASP.NET Core", "REST APIs", "Entity Framework", "SQL Server"]
  },
  {
    group: "Cloud & DevOps",
    items: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Azure DevOps", "GitHub Actions", "Jenkins", "Linux", "Splunk"]
  },
  {
    group: "Data & Streaming",
    items: ["Kafka", "PySpark", "Databricks", "DynamoDB", "MongoDB"]
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript"]
  },
  {
    group: "AI & Automation",
    items: ["Claude API", "FastAPI", "Prompt Engineering", "Automation Workflows"]
  }
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Multicloud Architect Professional",
    date: "Issued Oct 2025 · Expires Oct 2027"
  },
  {
    name: "Splunk Build-a-thon",
    date: "Issued Aug 2025"
  },
  {
    name: "Git Foundations",
    date: "Issued Dec 2024 · Expires Dec 2027"
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Certified Foundations Associate",
    date: "Issued Aug 2024 · Expires Aug 2026"
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    date: "Issued Jul 2024 · Expires Jul 2026"
  },
  {
    name: "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
    date: "Issued Nov 2022"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    date: "Issued Dec 2022"
  },
  {
    name: "Microsoft Certified Azure Fundamentals",
    date: "Issued Jan 2022"
  },
  {
    name: "ASP.NET Core 5.0 MVC",
    date: "Issued Jul 2022"
  }
];

export const education = [
  {
    degree: "M.S. Computer Science",
    school: "Illinois Institute of Technology",
    location: "Chicago, IL",
    date: "May 2025"
  }
];
