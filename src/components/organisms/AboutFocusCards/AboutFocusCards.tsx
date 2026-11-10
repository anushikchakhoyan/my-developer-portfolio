"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "@/components/primitives/Button/Button";

const FOCUS_AREAS = [
    { name: "React Component Architecture", tag: "Lead" },
    { name: "Design Systems & UI Libraries", tag: "System" },
    { name: "Web Accessibility (a11y)", tag: "WCAG 2.2" },
    { name: "Jest & Automated Testing", tag: "Testing" },
    { name: "Cross-Team Alignment", tag: "Agile" },
    { name: "AI-Assisted Workflows", tag: "Speed" },
];

export const AboutFocusCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8">
            {/* Left Column: Bio Card */}
            <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-8">
                <h3 className="font-serif text-3xl text-(--color-primary) mb-1">
                    Hey there, stranger.
                </h3>
                <p className="text-(--color-text-muted) mb-8 text-md leading-relaxed">
                    welcome to my corner of the web.
                </p>
                <p className="text-sm leading-relaxed mb-4 text-(--color-text)">
                    I'm Anush, a UI Architect and Frontend Engineer with 7+ years turning messy product 
                    requirements into interfaces people actually enjoy using.
                    Most of that time has been spent deep in React and TypeScript,
                    building production UIs for iGaming, E-commerce, Admin tooling, and Edtech platforms.
                </p>
                <p className="text-sm leading-relaxed mb-4 text-(--color-text)">
                    I'm fluent in the tools that make good UI work: Next.js for the app layer, 
                    Tailwind for styling, Storybook for component docs, Figma for handoff, 
                    plus a real focus on accessibility, testing, and design-system consistency. 
                    Lately I've been leaning into AI-assisted workflows to move faster without cutting corners.
                </p>
                <p className="text-sm leading-relaxed mb-10 text-(--color-text)">
                    When I'm not shipping components, I'm usually refining my own tooling or exploring whatever's new in the frontend world.
                </p>

                <div className="flex flex-col items-start sm:items-center gap-4">
                    <Link href="#slide-7">
                        <Button variant="primary" icon={<FiArrowUpRight size={14} />}>
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Right Column: Focus Areas */}
            <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-8 hover:border-(--color-border-accent) transition-all">
                <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-lg text-(--color-text)">Core Focus Areas</h4>
                    <span className="font-mono text-xs text-(--color-accent) tracking-wider">
                        HOVER TO INSPECT
                    </span>
                </div>

                <div className="flex flex-col gap-3">
                    {FOCUS_AREAS.map((focus) => (
                        <div
                            key={focus.name}
                            className="group flex items-center justify-between px-4 py-3 rounded-full border border-(--color-border) bg-(--color-surface-hover) transition-all duration-200 hover:translate-x-1 hover:border-(--color-primary) hover:shadow-lg cursor-default"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-(--color-primary) transition-transform group-hover:scale-125" />
                                <span className="text-sm text-(--color-text) font-medium">
                                    {focus.name}
                                </span>
                            </div>
                            <span className="font-mono text-xs tracking-wider text-(--color-accent) opacity-0 group-hover:opacity-100 transition-opacity uppercase">
                                {focus.tag}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};