"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";

export const TopNav: React.FC = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");

    useEffect(() => {
        const active = document.documentElement.getAttribute("data-theme") as "dark" | "light";
        if (active) setTheme(active);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-16 px-6 md:px-16 flex items-center justify-between backdrop-blur-md bg-[oklch(from_var(--color-bg)_l_c_h/0.85)] border-b border-(--color-border) z-50">
            <Link href="#slide-1" className="font-serif text-xl md:text-2xl text-(--color-text)">
                Anush Chakhoyan
            </Link>

            <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-(--color-border) bg-(--color-surface) text-(--color-text) flex items-center justify-center transition-all hover:border-(--color-primary) hover:text-(--color-primary) hover:scale-105 cursor-pointer"
                aria-label="Toggle theme"
            >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
        </header>
    );
};