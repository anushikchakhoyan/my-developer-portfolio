"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { toast } from "sonner";

import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

import { Button } from "../primitives/Button";

const PAGE_LINKS = [
    { label: "Showcase", href: "/" },
    { label: "Project Request", href: "/project-request" },
];

export const TopNav: React.FC = () => {
    const pathname = usePathname();
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const active = document.documentElement.getAttribute("data-theme") as "dark" | "light";
        if (active) setTheme(active);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Close mobile menu on Escape key
    useEffect(() => {
        if (!mobileMenuOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    };

    const handleDownloadCv = () => {
        setMobileMenuOpen(false);
        toast("CV requested — Opening direct email draft...", {
            duration: 3500,
        });
        window.location.href =
            "mailto:hello@anushui.dev?subject=Request%20for%20Anush%20Chakhoyan%20CV&body=Hi%20Anush,%0A%0APlease%20share%20your%20latest%20CV.";
    };

    const isRouteActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 h-16 px-6 md:px-16 flex items-center justify-between backdrop-blur-md bg-[oklch(from_var(--color-bg)_l_c_h/0.85)] border-b border-(--color-border) z-50">
                <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-xl md:text-2xl text-(--color-text) hover:text-(--color-primary) transition-colors shrink-0"
                >
                    Anush Chakhoyan
                </Link>

                {/* Desktop Navigation & Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <nav
                        aria-label="Primary page navigation"
                        className="flex items-center rounded-lg border border-(--color-border) bg-(--color-surface) p-0.5"
                    >
                        {PAGE_LINKS.map((item) => {
                            const isActive = isRouteActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`font-mono text-[0.72rem] px-3 py-1.5 rounded-md transition-colors ${
                                        isActive
                                            ? "bg-[oklch(0.78_0.15_var(--accent-hue)/0.14)] text-(--color-primary) font-medium"
                                            : "text-(--color-text-muted) hover:text-(--color-text)"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    <Button
                        size="sm"
                        icon={<FiDownload size={15} />}
                        aria-label="Download CV"
                        onClick={handleDownloadCv}
                    >
                        Download CV
                    </Button>

                    <Button
                        iconOnly
                        filled
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        icon={
                            theme === "dark" ? <BsMoonStarsFill size={18} /> : <AiFillSun size={18} />
                        }
                    />
                </div>

                {/* Mobile Controls: Theme Toggle + Burger Button */}
                <div className="flex md:hidden items-center gap-2">
                    <Button
                        iconOnly
                        filled
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        icon={
                            theme === "dark" ? <BsMoonStarsFill size={17} /> : <AiFillSun size={17} />
                        }
                    />

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-drawer"
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        className="w-10 h-10 rounded-md border border-(--color-border) bg-(--color-surface) text-(--color-text) hover:border-(--color-primary) hover:text-(--color-primary) flex items-center justify-center transition-colors cursor-pointer"
                    >
                        {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Backdrop & Slide-Down Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Dimmed Backdrop */}
                    <div
                        onClick={() => setMobileMenuOpen(false)}
                        aria-hidden="true"
                        className="fixed inset-0 bg-black/45 backdrop-blur-xs"
                    />

                    {/* Menu Panel */}
                    <nav
                        id="mobile-nav-drawer"
                        aria-label="Mobile navigation"
                        className="fixed top-16 left-0 right-0 border-b border-(--color-border) bg-(--color-surface) px-6 py-6 shadow-xl flex flex-col gap-5"
                    >
                        <div className="space-y-2">
                            <div className="font-mono text-[0.68rem] uppercase tracking-wider text-(--color-text-dim) px-1">
                                Pages
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
                                            <span>{item.label}</span>
                                            <BsArrowUpRight size={13} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="pt-3 border-t border-(--color-border) flex flex-col gap-3">
                            <Button
                                size="sm"
                                icon={<FiDownload size={15} />}
                                aria-label="Download CV"
                                onClick={handleDownloadCv}
                            >
                                Download CV
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
};

export default TopNav;