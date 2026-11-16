
import { useTranslation } from "react-i18next"
import {
  Monitor,
  Server,
  Database,
  GitBranch,
  Workflow,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    key: "frontend",
    icon: Monitor,
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      "PHP",
      "Laravel",
      "Symfony",
      "REST API",
    ],
  },
  {
    key: "database",
    icon: Database,
    skills: [
      "MySQL",
      "SQL Server",
    ],
  },
  {
    key: "devops",
    icon: GitBranch,
    skills: [
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    key: "methodologies",
    icon: Workflow,
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Clean Code",
    ],
  },
  {
    key: "other",
    icon: Layers,
    skills: [
      "MVC",
      "API Integration",
    ],
  },
];

export function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="border-t border-border/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            02
          </p>

          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            {t("skills.title")}
          </h2>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {t("skills.subtitle")}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.key}
                className="group rounded-xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card hover:-translate-y-1"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon size={21} />
                  </div>

                  <h3 className="font-semibold text-foreground">
                    {t(`skills.categories.${category.key}`)}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
