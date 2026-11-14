"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { Button } from "@/components/primitives/Button/Button";

export const AboutFocusCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1  gap-8">
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
                    I'm fluent in the tools that make good UI work: Next.js/React.js for the app layer, 
                    Tailwind for styling, Storybook for component docs, Figma for handoff, 
                    plus a real focus on accessibility, testing, and design-system consistency. 
                    Lately I've been leaning into AI-assisted workflows to move faster without cutting corners.
                </p>
                <p className="text-sm leading-relaxed mb-10 text-(--color-text)">
                    When I'm not shipping components, I'm usually refining my own tooling or exploring whatever's new in the frontend world.
                </p>

                <div className="flex flex-col items-start sm:items-center gap-4">
                    <Link href="#contact">
                        <Button variant="primary" icon={<FiArrowUpRight size={14} />}>
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};