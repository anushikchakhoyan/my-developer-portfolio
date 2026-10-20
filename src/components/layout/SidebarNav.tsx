"use client";

import React, { useEffect, useState } from "react";

const SLIDES = [
    { id: "slide-1", title: "Intro" },
    { id: "slide-2", title: "About" },
    { id: "slide-3", title: "Experience" },
    { id: "slide-4", title: "Testimonials" },
    { id: "slide-5", title: "Tokens" },
    { id: "slide-6", title: "Architecture" },
    { id: "slide-7", title: "Contact" },
];

export const SidebarNav: React.FC = () => {
    const [activeId, setActiveId] = useState("slide-1");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        SLIDES.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3.5 z-40">
            {SLIDES.map((s) => (
                <a
                    key={s.id}
                    href={`#${s.id}`}
                    title={s.title}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        activeId === s.id
                            ? "bg-(--color-primary) scale-125 shadow-[0_0_12px_var(--color-primary)]"
                            : "bg-(--color-border) hover:bg-(--color-text-muted)"
                    }`}
                    aria-label={s.title}
                />
            ))}
        </nav>
    );
};