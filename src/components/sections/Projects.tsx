
import { projects } from "../../lib/projects";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const { t, i18n } = useTranslation();
  
  const lang = i18n.resolvedLanguage?.startsWith("en") ? "en" : "pt";

  const statusStyles = {
    completed: "border-green-500/20 bg-green-500/10 text-green-500",
    development: "border-blue-500/20 bg-blue-500/10 text-blue-500",
  };

  return (
    <section
      id="projects"
      className="border-t border-border/50 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">
            03
          </p>

          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            {t("projects.title")}
          </h2>

          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {t("projects.subtitle")}
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
            >
              {/* Project image */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/60 bg-muted">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-muted-foreground">
                    {t("projects.soon")}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">

                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-primary">
                    {p.category}
                  </span>

                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                        statusStyles[p.status]
                    }`}
                    >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
                        {t(`projects.status.${p.status}`)}
                    </span>
                </div>

                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description[lang]}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-foreground">
                    {t("projects.role")}: {p.role[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border bg-background/60 px-2 py-1 text-[11px] text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex gap-4 border-t border-border/50 pt-4">


                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={14} />
                      {t("projects.demo")}
                    </a>
                  )}
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
