
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ClipboardList, ArrowRight } from "lucide-react";

const SURVEY_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgQSUNEZdergNNVY-GzeJizVbMFewPyxiFwNhz5JqJbfbWJA/viewform?usp=header";

export const SurveyModal = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setIsOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="survey-title"
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsOpen(false)}
          aria-label={t("surveyModal.close")}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X size={18} />
        </button>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ClipboardList size={24} />
        </div>

        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {t("surveyModal.label")}
        </p>

        <h2
          id="survey-title"
          className="text-2xl font-semibold tracking-tight text-foreground"
        >
          {t("surveyModal.title")}
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {t("surveyModal.description")}
        </p>

        <div className="mt-6 rounded-lg border border-border bg-background/50 p-4">
          <p className="text-xs leading-relaxed text-muted-foreground">
            {t("surveyModal.note")}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("surveyModal.button")}
            <ArrowRight size={16} />
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("surveyModal.later")}
          </button>
        </div>
      </div>
    </div>
  );
};
