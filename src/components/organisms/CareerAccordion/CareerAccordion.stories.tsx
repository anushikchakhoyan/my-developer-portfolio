import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { CareerAccordion, ExperienceItem } from "./CareerAccordion";

const mockExperience: ExperienceItem[] = [
    {
        id: "brainrocket",
        company: "BrainRocket",
        role: "Lead UI Developer / Design System Compliance",
        period: "2025 — PRESENT",
        location: "FULL-TIME · YEREVAN, ARMENIA",
        bullets: [
            "Engineered high-performance iGaming platform brand compliance modules.",
            "Achieved 1:1 pixel fidelity across UFC promotional modules with modern CSS layers."
        ],
        techStack: ["Next.js", "TypeScript", "RxJS", "Design Tokens"]
    },
    {
        id: "green-dev",
        company: "Green Development & Eiger Ltd",
        role: "Senior UI Architect",
        period: "2025 — 2026",
        location: "FREELANCE · WORLDWIDE / REMOTE",
        bullets: [
            "Built core design system and reusable front-end component library from scratch.",
            "Re-architected client platform in SvelteKit with accessible micro-interactions."
        ],
        techStack: ["SvelteKit", "PrimeNG", "Tailwind CSS", "Strapi"]
    }
];

const meta: Meta<typeof CareerAccordion> = {
    title: "Organisms/CareerAccordion",
    component: CareerAccordion,
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof CareerAccordion>;

export const DefaultTimeline: Story = {
    args: {
        items: mockExperience,
        defaultOpenId: "brainrocket"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Assert initial card is visible
        const firstRole = canvas.getByText(/design system compliance/i);
        await expect(firstRole).toBeInTheDocument();

        // Toggle second item
        const secondCompanyHeader = canvas.getByText(/green development/i);
        await userEvent.click(secondCompanyHeader);

        // Assert second item expanded
        const secondRole = await canvas.findByText(/senior ui architect/i);
        await expect(secondRole).toBeInTheDocument();
    }
};