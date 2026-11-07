"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillSun } from "react-icons/ai";
import { BsMoonStarsFill, BsLinkedin, BsGithub } from "react-icons/bs";

import { ActionIconButton } from "../primitives/ActionIconButton/ActionIconButton";

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

            <div className="flex gap-2.5 pt-2">
                <ActionIconButton
                    icon={<BsLinkedin />}
                    label="LinkedIn Profile"
                    href="https://linkedin.com"
                    target="_blank"
                />
                <ActionIconButton
                    icon={<BsGithub />}
                    label="GitHub Profile"
                    href="https://github.com"
                    target="_blank"
                />
                <ActionIconButton
                    onClick={toggleTheme}
                    icon={theme === "dark" ? <BsMoonStarsFill size={18} /> : <AiFillSun size={18} />}
                    label="Toggle theme"
                    target="_blank"
                />
            </div>
        </header>
    );
};