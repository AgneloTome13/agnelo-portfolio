
export type Project = {
  id: string;
  title: string;
  category: string;
  status: "completed" | "development";
  role: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  stack: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "apoio-psicologico",
    image: "/public/images/projects/grace-medical.png",
    title: "Plataforma de Apoio Psicológico",
    category: "Web Application",
    status: "development",
    role: {
      pt: "Desenvolvimento Full Stack",
      en: "Full Stack Development",
    },
    description: {
      pt: "Plataforma digital para rastreio de saúde mental e aproximação entre pessoas que procuram apoio psicológico e profissionais da área.",
      en: "Digital platform for mental health screening and connecting people seeking psychological support with professionals.",
    },
    stack: ["React", "TypeScript", "Laravel", "MySQL"],
  },
  {
    id: "hospital-management",
    title: "Hospital Management System",
    category: "Enterprise Software",
    status: "completed",
    role: {
      pt: "Desenvolvimento e manutenção de funcionalidades",
      en: "Feature development and maintenance",
    },
    description: {
      pt: "Sistema de gestão hospitalar com módulos para gerir processos clínicos, administrativos e operacionais.",
      en: "Hospital management system with modules for clinical, administrative and operational processes.",
    },
    stack: ["PHP", "Symfony", "MySQL", "JavaScript"],
  },
  {
    id: "web-platform",
    title: "Web Development Project",
    category: "Web Application",
    status: "completed",
    role: {
      pt: "Desenvolvimento Full Stack",
      en: "Full Stack Development",
    },
    description: {
      pt: "Aplicação web desenvolvida para demonstrar competências de desenvolvimento frontend e backend.",
      en: "Web application developed to demonstrate frontend and backend development skills.",
    },
    stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },
];
