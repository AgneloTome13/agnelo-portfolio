import { useTranslation } from "react-i18next"

const PROFILE_IMAGE = "https://api.dicebear.com/7.x/initials/svg?seed=FD&backgroundColor=0f172a&textColor=3b82f6";

export const Hero = () => {
    const { t } = useTranslation()

    return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 10%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t("hero.role")}
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects"
                className="inline-flex h-11 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("hero.cta.projects")}
              </a>
              <a href="#contact"
                className="inline-flex h-11 items-center rounded-full border border-border bg-card/40 px-5 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                {t("hero.cta.contact")}
              </a>
            </div>
          </div>

          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-full opacity-20 blur-2xl" style={{ background: "color-mix(in oklab, var(--primary) 50%, transparent)" }} />
            <img src={PROFILE_IMAGE} alt="Foto de perfil"
              className="relative z-10 h-48 w-48 rounded-full border-2 border-border object-cover shadow-lg md:h-64 md:w-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}