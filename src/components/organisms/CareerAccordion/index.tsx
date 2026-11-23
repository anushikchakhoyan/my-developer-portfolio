"use client";

import { CareerItem } from "@/config/data";
import React, { useState } from "react";
import { FaAngleDown, FaLeaf } from "react-icons/fa6";
import { IoIosRocket } from "react-icons/io";

interface CareerAccordionProps {
    items: CareerItem[];
    defaultOpenId?: string;
}

export const CareerAccordion: React.FC<CareerAccordionProps> = ({
    items,
    defaultOpenId = "brainrocket",
}) => {
    const [openId, setOpenId] = useState<string | null>(defaultOpenId);

    const toggle = (id: string) => {
        setOpenId((curr) => (curr === id ? null : id));
    };

    return (
        <div className="relative pl-14 flex flex-col gap-3.5 max-w-4xl mx-auto w-full">
            <div className="absolute left-[1.2rem] top-9 bottom-9 w-0.5 bg-linear-to-b from-(--color-primary) via-(--color-accent) to-[oklch(0.78_0.16_140)] -translate-x-1/2 z-0" />
            <div
                className="absolute left-[1.2rem] top-2 -translate-x-1/2 w-9 h-9 rounded-full bg-(--color-bg) border-2 border-(--color-primary) flex items-center justify-center text-(--color-primary) shadow-[0_0_16px_var(--color-primary-glow)] z-10"
                aria-hidden="true"
            >
                <IoIosRocket size={17} />
            </div>
            <div
                className="absolute left-[1.2rem] bottom-2 -translate-x-1/2 w-9 h-9 rounded-full bg-(--color-bg) border-2 border-[oklch(0.78_0.16_140)] flex items-center justify-center text-[oklch(0.78_0.16_140)] shadow-[0_0_16px_rgba(0,0,0,0.3)] z-10"
                aria-hidden="true"
            >
                <FaLeaf size={17} />
            </div>
            {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                    <div
                        key={item.id}
                        className="rounded-md border border-(--color-border) bg-(--color-surface) overflow-hidden transition-all duration-200 hover:border-(--color-border-accent)"
                    >
                        <button
                            type="button"
                            onClick={() => toggle(item.id)}
                            className="w-full text-left px-5 py-3.5 flex justify-between items-center cursor-pointer select-none"
                            aria-expanded={isOpen}
                        >
                            <div>
                                <span className="font-mono text-xs tracking-wider text-(--color-accent) uppercase font-semibold">
                                    {item.period}
                                </span>
                                <h3 className="font-bold text-lg text-(--color-text)">
                                    {item.company}
                                </h3>
                                <span className="font-mono text-[0.7rem] text-(--color-text-dim) uppercase">
                                    {item.location}
                                </span>
                            </div>
                            <FaAngleDown
                                size={18}
                                className={`transition-transform duration-200 text-(--color-text-muted) ${
                                    isOpen ? "rotate-180 text-(--color-primary)" : ""
                                }`}
                            />
                        </button>

                        {isOpen && (
                            <div className="px-5 pb-5 pt-2 border-t border-(--color-border)">
                                {/* Standard Role */}
                                {item.bullets.length > 0 && (
                                    <>
                                        <div className="text-sm font-semibold text-(--color-primary) mb-2">
                                            {item.role}
                                        </div>
                                        <ul className="space-y-1.5 mb-3 text-md text-(--color-text-muted)">
                                            {item.bullets.map((b, idx) => (
                                                <li
                                                    key={idx}
                                                    className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-(--color-primary)"
                                                >
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-1.5">
                                            {item.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="font-mono text-xs px-2 py-0.5 rounded-sm bg-(--color-surface-hover) border border-(--color-border) text-(--color-text-muted)"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {/* Subprojects (e.g. Freelance) */}
                                {item.subprojects &&
                                    item.subprojects.map((sub, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className={
                                                sIdx < item.subprojects!.length - 1
                                                    ? "pb-3 mb-3 border-b border-dashed border-(--color-border)"
                                                    : ""
                                            }
                                        >
                                            <div className="text-sm font-semibold text-(--color-primary)">
                                                {sub.title}
                                            </div>
                                            <div className="font-mono text-xs text-(--color-text-dim) mb-1">
                                                {sub.period}
                                            </div>
                                            <ul className="space-y-1.5 mb-2 text-sm text-(--color-text-muted)">
                                                {sub.bullets.map((sb, sbIdx) => (
                                                    <li
                                                        key={sbIdx}
                                                        className="relative pl-4 before:content-['—'] before:absolute before:left-0 before:text-(--color-primary)"
                                                    >
                                                        {sb}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="flex flex-wrap gap-1.5">
                                                {sub.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="font-mono text-xs px-2 py-0.5 rounded-sm bg-(--color-surface-hover) border border-(--color-border) text-(--color-text-muted)"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default CareerAccordion;