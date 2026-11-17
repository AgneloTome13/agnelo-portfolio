
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
    id: "grace-medical",
    image: "/images/projects/grace-medical.png",
    demo: "https://gmcclinica.ao/",
    title: "Grace Medical Center",
    category: "Web Application",
    status: "completed",
    role: {
      pt: "Desenvolvimento Full Stack",
      en: "Full Stack Development",
    },
    description: {
      pt: "Website institucional, com foco na apresentação dos serviços médicos, especialidades e informações da clínica. Interface moderna, responsiva e intuitiva. Inclui gestão de conteúdos e suporte a 2 idiomas.",
      en: "Institutional website, focusing on presenting medical services, specialties, and clinic information. Modern, responsive, and intuitive interface. Includes content management and support for 2 languages.",
    },
    stack: ["Laravel", "JavaScript", "MySQL"],
  },
  {
    id: "boa-imagem",
    image: "/images/projects/boa-imagem.png",
    demo: "https://boa-imagem.vercel.app/",
    github: "https://github.com/AgneloTome13/boa-imagem",
    title: "Boa Imagem",
    category: "Enterprise Software",
    status: "completed",
    role: {
      pt: "Desenvolvimento e manutenção de funcionalidades",
      en: "Feature development and maintenance",
    },
    description: {
      pt: "O projeto explora a criação de interfaces, atrativas e responsivas, utilizando apenas HTML, CSS e JavaScript, sem recorrer a frameworks ou bibliotecas externas.",
      en: "Modern, attractive, and responsive interfaces created using only HTML, CSS, and JavaScript, without relying on external frameworks or libraries.",
    },
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "apoio-psicologico",
    image: "/images/projects/em-desenvolvimento.jpg",
    title: "App Apoio",
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
    stack: ["Laravel", "React", "TailwindCSS", "MySQL"],
  },
];
