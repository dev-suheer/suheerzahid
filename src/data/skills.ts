export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Web Development",
    icon: "Globe",
    skills: [
      { name: "TypeScript", level: 93 },
      { name: "React / Next.js", level: 92 },
      { name: "Node.js", level: 91 },
      { name: "Angular", level: 87 },
      { name: "GraphQL", level: 80 },
    ],
  },
  {
    category: "React Native",
    icon: "Brain",
    skills: [
      { name: "Expo + Cli", level: 95 },
      { name: "Firebase", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Supabase", level: 88 },
      { name: "App Store Deployment", level: 90 },
    ],
  },
  {
    category: "Infrastructure",
    icon: "Server",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 88 },
      { name: "CI/CD", level: 87 },
      { name: "PostgreSQL", level: 83 },
    ],
  },
];
