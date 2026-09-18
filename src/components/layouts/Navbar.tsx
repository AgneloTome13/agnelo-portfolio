import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "../ui/LanguageSwitcher"

const navLinks = [
    {
        name: "navigation.home",
        href: "#home"
    },
    {
        name: "navigation.about",
        href: "#about"
    },
    {
        name: "navigation.skills",
        href: "#skills"
    },
    {
        name: "navigation.projects",
        href: "#projects"
    },
    {
        name: "navigation.contact",
        href: "#contact"
    }
]

export const Navbar = () => {
    const { t } = useTranslation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "glass-strong py-3" : "bg-transparent"}  py-5`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-light hover:text-primary">
                    AT<span className="text-primary">.</span>
                </a>

                {/* Desktop Navbar */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass px-2 py-1 flex items-center gap-1 rounded-full">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                                {t(link.name)}
                            </a>
                        ))}
                    </div>
                </div>

                {/* BTN LanguageSwitcher */}
                <div className="hidden md:block">
                    <LanguageSwitcher />
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-2 md:hidden">
                    <LanguageSwitcher />

                    <button
                        className="p-2 text-foreground cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && ( 
                <div className="md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-lg text-muted-foreground hover:text-foreground py-2">
                                {t(link.name)}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}