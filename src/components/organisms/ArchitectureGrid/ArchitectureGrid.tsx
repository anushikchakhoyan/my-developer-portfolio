import React from "react";

const PIPELINE_STEPS = [
    {
        step: "01 // TOKENS",
        title: "Figma Sync",
        desc: "Automated token extraction from Figma variables into JSON transform pipelines.",
        color: "var(--color-primary)"
    },
    {
        step: "02 // COMPONENTS",
        title: "React & Svelte",
        desc: "Accessible, headless UI primitive components built with strict TypeScript.",
        color: "var(--color-accent)"
    },
    {
        step: "03 // TESTING",
        title: "a11y & Jest",
        desc: "Automated WCAG 2.2 AA audit checks & Jest unit testing coverage.",
        color: "var(--color-primary)"
    },
    {
        step: "04 // DELIVERY",
        title: "Monorepo Sync",
        desc: "Lerna / NPM packages distributed across enterprise product teams.",
        color: "var(--color-accent)"
    }
];

export const ArchitectureGrid: React.FC = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto w-full">
            {PIPELINE_STEPS.map((item) => (
                <div
                    key={item.step}
                    className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6 hover:border-(--color-border-accent) transition-all hover:-translate-y-1"
                >
          <span
              className="font-mono text-xs tracking-wider block mb-2 font-semibold"
              style={{ color: item.color }}
          >
            {item.step}
          </span>
                    <h4 className="font-bold text-lg text-(--color-text) mb-2">{item.title}</h4>
                    <p className="text-xs text-(--color-text-muted) leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
    );
};