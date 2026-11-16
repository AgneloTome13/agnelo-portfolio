import { useTranslation } from "react-i18next";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="border-t border-border/50 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">04</p>
        <h2 className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {t("contact.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("contact.subtitle")}</p>
        <a
          href="mailto:agnelotome09@gmail.com"
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" /> {t("contact.email")}
        </a>
        <div className="mt-8 flex items-center justify-center gap-6 text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="transition-colors hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <footer className="mt-20 border-t border-border/50 pt-6">
        <div className="mx-auto max-w-6xl px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} · {t("footer.rights")}
        </div>
      </footer>
    </section>
  );
}
