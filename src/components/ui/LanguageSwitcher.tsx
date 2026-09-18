import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const languages = ["pt", "en"] as const;

    const changeLanguage = (language: (typeof languages)[number]) => {
        i18n.changeLanguage(language);
    };

    const currentLanguage = i18n.resolvedLanguage || i18n.language;

    return (
        <div className="inline-flex items-center rounded-full border border-border bg-card/50 p-0.5 text-xs">
            {languages.map((language) => (
                <button
                    key={language}
                    onClick={() => changeLanguage(language)}
                    className={
                        "rounded-full px-2.5 py-1 font-medium uppercase tracking-wider transition-colors " +
                        (currentLanguage === language
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground")
                    }
                >
                    {language}
                </button>
            ))}
        </div>
    );
};