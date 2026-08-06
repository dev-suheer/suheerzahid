export interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Olivepod",
    description:
      "An enterprise LLM chatbot platform with multi-model orchestration, RAG pipelines, and real-time streaming. Handles 50k+ concurrent conversations.",
    tech: ["React", "Python", "LangChain", "Redis", "PostgreSQL"],
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "MessageSquare",
  },
  {
    title: "Samwav",
    description:
      "Computer vision toolkit for real-time object detection, image segmentation, and visual search. Deployed across 200+ edge devices.",
    tech: ["PyTorch", "OpenCV", "FastAPI", "Docker", "ONNX"],
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "Eye",
  },
  {
    title: "BrandrsCo",
    description:
      "AI-powered code reviewer that catches bugs, suggests optimizations, and enforces style guides. Integrated with GitHub Actions.",
    tech: ["TypeScript", "GPT-4", "GitHub API", "Next.js", "Vercel"],
    gradient: "from-green-500/20 to-emerald-600/20",
    icon: "Code",
  },
  {
    title: "Forte - Real Estate",
    description:
      "ML pipeline orchestrator for training, evaluation, and deployment. Supports distributed training across multi-GPU clusters.",
    tech: ["Python", "Kubernetes", "Apache Airflow", "Go", "gRPC"],
    gradient: "from-orange-500/20 to-red-600/20",
    icon: "Workflow",
  },
  {
    title: "FYB",
    description:
      "AI image generation platform with fine-tuning, inpainting, and style transfer. Serves 10k+ generations daily.",
    tech: ["Stable Diffusion", "React", "Node.js", "AWS", "S3"],
    gradient: "from-pink-500/20 to-violet-600/20",
    icon: "Image",
  },
];
