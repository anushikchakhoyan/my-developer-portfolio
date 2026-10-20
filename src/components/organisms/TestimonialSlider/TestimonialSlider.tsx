"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TestimonialItem } from "@/lib/data";

interface TestimonialSliderProps {
    testimonials: TestimonialItem[];
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
    const [index, setIndex] = useState(0);
    const current = testimonials[index];

    return (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 max-w-4xl mx-auto w-full">
            <div className="flex justify-between items-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-mono text-xs tracking-wider font-bold text-[var(--color-accent)] bg-[oklch(0.78_0.15_var(--accent-hue)/0.16)] border border-[oklch(0.78_0.15_var(--accent-hue)/0.45)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    {current.role}
                </div>
                <span className="font-mono text-xs text-[var(--color-text-dim)]">
          0{index + 1} / 0{testimonials.length}
        </span>
            </div>

            <div className="space-y-3.5 mb-8 text-[var(--color-text)] font-light text-sm md:text-base leading-relaxed">
                {current.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                ))}
            </div>

            <div className="flex justify-between items-center flex-wrap gap-4 pt-4 border-t border-[var(--color-border)]">
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[var(--color-surface-hover)] border border-[var(--color-border)] text-[var(--color-primary)] font-bold flex items-center justify-center font-mono text-sm">
                        {current.avatar}
                    </div>
                    <div>
                        <a
                            href={current.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-sm md:text-base text-[var(--color-text)] hover:text-[var(--color-primary)] inline-flex items-center gap-1 transition-colors"
                        >
                            {current.author}
                            <ArrowUpRight size={14} />
                        </a>
                        <div className="text-xs text-[var(--color-text-muted)] font-mono">
                            {current.title}
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    {testimonials.map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setIndex(dotIdx)}
                            className={`h-2.5 rounded-full transition-all cursor-pointer ${
                                dotIdx === index
                                    ? "w-6 bg-[var(--color-primary)]"
                                    : "w-2.5 bg-[var(--color-border)] hover:bg-[var(--color-text-muted)]"
                            }`}
                            aria-label={`Go to slide ${dotIdx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};