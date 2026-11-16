import { useTranslation } from "react-i18next"

export const About = () => {
    const { t } = useTranslation()

    return (
        <section id="about" className="border-t border-border/50 py-24">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_2fr]">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary">01</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                        {t("about.title")}
                    </h2>
                </div>

                <div className="space-y-8">
                    <p className="text-lg leading-relaxed text-muted-foreground text-justify">
                        {t("about.description")}
                    </p>

                    <div>
                        <h3 className="text-sm font-medium uppercase tracking-wider text-foreground/80">
                            {t("about.goals.title")}
                        </h3>

                        <ul className="mt-4 space-y-2 text-muted-foreground">
                            {(["about.goals.1", "about.goals.2", "about.goals.3"] as const).map((k) => (
                                <li key={k} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                                    {t(k)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}