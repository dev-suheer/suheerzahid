export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: "GlowingSoft Technologies",
    role: "Senior Full Stack Developer",
    period: "2024 — Present",
    description:
      "Building and shipping large-scale web platforms. Owning features end-to-end from backend APIs to frontend delivery.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "Octa Tech LLC",
    role: "Full Stack Developer",
    period: "2022 — 2024",
    description:
      "Delivered full stack web applications across multiple client projects. Handled everything from database design to production deployment.",
    tech: ["React.js", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"],
  },
  {
    company: "IT Experts LLC",
    role: "Full Stack Developer",
    period: "2020 — 2022",
    description:
      "Built web apps, admin dashboards, and REST APIs for business clients. Delivered internal tools that improved team operations.",
    tech: ["React.js", "Node.js", "Angular", "PostgreSQL", "REST APIs"],
  },
  {
    company: "Code Ninja",
    role: "Junior Frontend Developer",
    period: "2019 — 2020",
    description:
      "Built web interfaces and integrated backend APIs. Shipped production-ready features while growing core development skills.",
    tech: ["React.js", "Node.js", "TypeScript", "REST APIs"],
  },
];