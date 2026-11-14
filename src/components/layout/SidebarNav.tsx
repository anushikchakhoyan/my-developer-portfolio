"use client";

import React, { useEffect, useState } from "react";

const SLIDES = [
    { id: "slide-1", title: "Home" },
    { id: "slide-2", title: "About me" },
    { id: "slide-3", title: "Experience" },
    { id: "slide-4", title: "Testimonials" },
    { id: "slide-5", title: "Live Demo" },
    // { id: "slide-6", title: "Blog" },
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
                   aria-label={s.title}
                   className="group relative flex h-6 w-6 items-center justify-center"
                >
                   <span
                     className={`block h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                     activeId === s.id
                        ? "bg-(--color-primary) scale-125 shadow-[0_0_12px_var(--color-primary)]"
                        : "bg-(--color-border) group-hover:bg-(--color-text-muted)"
                      }`}
                    />
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 translate-x-1
                         whitespace-nowrap rounded-lg border border-(--color-border) bg-(--color-bg)/90
                         px-3 py-1.5 font-serif text-sm text-(--color-text) opacity-0
                         shadow-[0_8px_18px_-8px_var(--color-primary)] backdrop-blur-md
                         transition-all duration-200
                         group-hover:translate-x-0 group-hover:opacity-100
                         group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                    >
                     {s.title}
                       <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45
                             border-r border-t border-(--color-border) bg-(--color-bg)" />
                    </span>
                 </a>
            ))}
        </nav>
    );
};