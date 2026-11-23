"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { toast } from "sonner";

import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

import { Button } from "../primitives/Button";
import { LanguageSwitcher } from "../organisms/LanguageSwitcher";
import { siteConfig } from "@/config/site";

type ThemeMode = "dark" | "light";

const PAGE_LINKS = [
    { key: "showcase" as const, href: "/" },
    { key: "projectRequest" as const, href: "/project-request" },
];

export const TopNav: React.FC = () => {
    const pathname = usePathname();
    const t = useTranslations("nav");
    const [theme, setTheme] = useState<ThemeMode>("dark");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Sync theme once on mount from localStorage or current DOM attribute
    useEffect(() => {
        const saved = localStorage.getItem("theme") as ThemeMode | null;
        const attr = document.documentElement.getAttribute("data-theme") as ThemeMode | null;
        const initial: ThemeMode = saved === "light" || saved === "dark" ? saved : attr ?? "dark";
        setTheme(initial);
        document.documentElement.setAttribute("data-theme", initial);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Escape key & body scroll lock when mobile menu is open
    useEffect(() => {
        if (!mobileMenuOpen) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const next: ThemeMode = theme === "dark" ? "light" : "dark";
        setTheme(next);
        localStorage.setItem("theme", next);
        document.documentElement.setAttribute("data-theme", next);
    };

    const handleDownloadCv = () => {
        setMobileMenuOpen(false);
        toast("CV requested — Opening direct email draft...", {
            duration: 3500,
        });
        window.location.href = `mailto:${siteConfig.email}?subject=Request%20for%20Anush%20Chakhoyan%20CV&body=Hi%20Anush,%0A%0APlease%20share%20your%20latest%20CV.`;
    };

    const isRouteActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-16 px-4 sm:px-6 lg:px-12 xl:px-16 flex items-center justify-between gap-3 backdrop-blur-md bg-[oklch(from_var(--color-bg)_l_c_h/0.85)] border-b border-(--color-border) z-50">
                <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-lg sm:text-xl xl:text-2xl text-(--color-text) hover:text-(--color-primary) transition-colors whitespace-nowrap shrink-0"
                >
                    Anush Chakhoyan
                </Link>

                {/* Desktop & Tablet Navigation */}
                <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
                    <nav
                        aria-label="Primary page navigation"
                        className="flex items-center rounded-lg border border-(--color-border) bg-(--color-surface) p-0.5 shrink-0"
                    >
                        {PAGE_LINKS.map((item) => {
                            const isActive = isRouteActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`font-mono text-[0.7rem] lg:text-[0.72rem] px-2.5 lg:px-3 py-1.5 rounded-md transition-colors whitespace-nowrap shrink-0 ${
                                        isActive
                                            ? "bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-primary) font-medium"
                                            : "text-(--color-text-muted) hover:text-(--color-text)"
                                    }`}
                                >
                                    {t(item.key)}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="shrink-0">
                        <LanguageSwitcher />
                    </div>

                    <Button
                        size="sm"
                        icon={<FiDownload size={14} />}
                        aria-label={t("downloadCv")}
                        onClick={handleDownloadCv}
                        className="whitespace-nowrap shrink-0"
                    >
                        <span className="hidden lg:inline">{t("downloadCv")}</span>
                    </Button>

                    <Button
                        iconOnly
                        filled
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="shrink-0"
                        icon={
                            theme === "dark" ? <BsMoonStarsFill size={17} /> : <AiFillSun size={18} />
                        }
                    />
                </div>

                {/* Mobile Controls (< md): Theme Toggle + Burger Button */}
                <div className="flex md:hidden items-center gap-2 shrink-0">
                    <Button
                        iconOnly
                        filled
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="shrink-0"
                        icon={
                            theme === "dark" ? <BsMoonStarsFill size={17} /> : <AiFillSun size={18} />
                        }
                    />

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-drawer"
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="w-10 h-10 rounded-md border border-(--color-border) bg-(--color-surface) text-(--color-text) hover:border-(--color-primary) hover:text-(--color-primary) flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    >
                        {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Backdrop & Slide-Down Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                        className="fixed inset-0 bg-black/45 backdrop-blur-xs"
                    />

                    <nav
                        id="mobile-nav-drawer"
                        aria-label="Mobile navigation"
                        className="fixed top-16 left-0 right-0 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-(--color-border) bg-(--color-surface) px-4 sm:px-6 py-5 shadow-xl flex flex-col gap-5"
                    >
                        <div className="space-y-2">
                            <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim) px-1">
                                {t("mobilePagesLabel")}
                            </div>
                            <div className="flex flex-col gap-1.5">
                                {PAGE_LINKS.map((item) => {
                                    const isActive = isRouteActive(item.href);

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`flex items-center justify-between px-3.5 py-3 rounded-lg border font-mono text-xs transition-colors ${
                                                isActive
                                                    ? "border-(--color-primary) bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-primary) font-medium"
                                                    : "border-(--color-border) bg-(--color-surface-hover)/50 text-(--color-text-muted) hover:text-(--color-text)"
                                            }`}
                                        >
                                            <span>{t(item.key)}</span>
                                            <BsArrowUpRight size={13} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="pt-3 border-t border-(--color-border) flex flex-wrap items-center justify-between gap-3">
                            <LanguageSwitcher />
                            <Button
                                size="sm"
                                icon={<FiDownload size={15} />}
                                aria-label={t("downloadCv")}
                                onClick={handleDownloadCv}
                                className="whitespace-nowrap"
                            >
                                {t("downloadCv")}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default TopNav;