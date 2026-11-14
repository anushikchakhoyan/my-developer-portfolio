"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { BsMoonStarsFill } from "react-icons/bs";
import { AiFillSun } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";

import { Button } from "../primitives/Button/Button";
import { Toast } from "../primitives/Toast/Toast";

export const TopNav: React.FC = () => {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [toastVisible, setToastVisible] = useState(false);
    
    useEffect(() => {
        const active = document.documentElement.getAttribute("data-theme") as "dark" | "light";
        if (active) setTheme(active);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
    };


    const handleDownloadCv = () => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 3500);
        window.location.href =
            "mailto:hello@anushui.dev?subject=Request%20for%20Anush%20Chakhoyan%20CV&body=Hi%20Anush,%0A%0APlease%20share%20your%20latest%20CV.";
    };

    return (
        <>
         <Toast message="CV requested — Opening direct email draft..." isVisible={toastVisible} />
         <header className="fixed top-0 left-0 right-0 h-16 px-6 md:px-16 flex items-center justify-between backdrop-blur-md bg-[oklch(from_var(--color-bg)_l_c_h/0.85)] border-b border-(--color-border) z-50">
            <Link href="#intro" className="font-serif text-xl md:text-2xl text-(--color-text)">
                Anush Chakhoyan
            </Link>
            <div className="flex gap-2.5">
                <Button
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
                    icon={theme === "dark" ? <BsMoonStarsFill size={18} /> : <AiFillSun size={18} />} />
            </div>
         </header>
        </>
    );
};