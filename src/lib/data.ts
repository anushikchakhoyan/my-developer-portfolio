export interface CareerItem {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
    techStack: string[];
    subprojects?: {
        title: string;
        period: string;
        bullets: string[];
        techStack: string[];
    }[];
}

export interface TestimonialItem {
    id: string;
    paragraphs: string[];
    author: string;
    link: string;
    title: string;
    role: string;
    avatar: string;
}

export const CAREER_DATA: CareerItem[] = [
    {
        id: "brainrocket",
        company: "BrainRocket",
        role: "Frontend UI Developer / Strong Middle UI Developer",
        period: "2025 — PRESENT",
        location: "FULL-TIME · YEREVAN, ARMENIA",
        bullets: [
            "Managed global iGaming platform brand support, ensuring design system compliance across co-branded promotional assets.",
            "Supported UFC brand partnership updates by modernizing game access points (thumbnails, play buttons, modals).",
            "Refactored UI codebase to achieve 1:1 pixel fidelity with updated design specifications."
        ],
        techStack: ["Angular (v12+)", "TypeScript", "RxJS", "Custom Design Systems"]
    },
    {
        id: "freelance",
        company: "Freelance",
        role: "Senior UI Developer",
        period: "2025 — 2026",
        location: "FREELANCE · WORLDWIDE / REMOTE",
        bullets: [],
        techStack: [],
        subprojects: [
            {
                title: "Green Development — Senior UI Developer",
                period: "Aug 2025 – Jan 2026 · Construction Admin Panel",
                bullets: [
                    "Built core design system and reusable front-end component library for Construction Admin Panel from scratch.",
                    "Standardized colors, spacing, typography, and component behavior for a unified look and faster development."
                ],
                techStack: ["Angular", "CSS", "PrimeNG"]
            },
            {
                title: "Eiger Ltd — Senior UI Developer",
                period: "Apr 2025 – Jul 2025 · Terrasoft iGaming",
                bullets: [
                    "Redesigned and built company website with modern responsive UI using Svelte and SvelteKit.",
                    "Implemented engaging micro-interactions and optimized for performance, accessibility, and SEO."
                ],
                techStack: ["Svelte/SvelteKit", "Strapi", "CSS Animations"]
            }
        ]
    },
    {
        id: "local-express",
        company: "Local Express Armenia",
        role: "Middle Frontend Developer (Food Retail Platform)",
        period: "2023 — 2025",
        location: "FULL-TIME · YEREVAN, HYBRID",
        bullets: [
            "Migrated legacy PHP-based UI components to modern, reusable React components.",
            "Refactored and optimized frontend code; integrated backend APIs for real-time responsiveness.",
            "Maintained shared component packages across food retail modules using Lerna monorepos."
        ],
        techStack: ["React.js", "Ant Design", "Lerna", "Redux"]
    },
    {
        id: "inspace",
        company: "InSpace Proximity",
        role: "UI Developer (Virtual Classroom Portal)",
        period: "2021 — 2023",
        location: "FULL-TIME · HYBRID",
        bullets: [
            "Developed 30+ responsive frontend components using modern TypeScript frameworks.",
            "Wrote unit test coverage using Jest to ensure reliability across classroom tools.",
            "Documented component guidelines; performed PR code reviews focusing on accessibility and performance."
        ],
        techStack: ["React.js", "TypeScript", "Tailwind CSS", "Jest", "MUI"]
    },
    {
        id: "develandoo",
        company: "Develandoo",
        role: "Middle, Junior & Intern Frontend Developer (SabX & Client Apps)",
        period: "2018 — 2021",
        location: "FULL-TIME · YEREVAN, ON-SITE",
        bullets: [
            "Promoted from Intern to Junior to Middle Developer across 3 yrs 9 mos.",
            "Built dynamic data tables with pagination, sorting, and live updates for SabX B2B/B2C marketplace.",
            "Delivered 10+ responsive client websites with high SEO performance scores."
        ],
        techStack: ["React.js", "Next.js", "Redux", "Tailwind", "Vue.js"]
    }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
    {
        id: "joseph-ben-zvi",
        author: "Joseph Ben Zvi",
        link: "https://www.linkedin.com/in/joseph-bz",
        title: "COO at Eiger Ltd",
        role: "COO / MANAGER",
        avatar: "JB",
        paragraphs: [
            "Had the pleasure to work with Anush for several meaningful months on a sideproject that she quickly took ownership of and dived deep into, cleaning and optimising the codebase, and turning into manageable, tidy and following best practices - as it should be :)",
            "Besides the technical side, what I personally have come to really value in people, is their attitude to others, to challenges and surprises (good or bad) that come up in the day to day life.",
            "Anush has a curious, positive and pleasant attitude, taking up the challenges with both hands, treating them as growth opportunities and gradually crunching them into beautiful and satisfying results.",
            "Thank you for your efforts with us and I wish you all the best in your next steps, knowing that the moment you find your next home whether short or long term, it will become brighter and better in any ways that you will be wholeheartedly offered by the owner to improve and build on."
        ]
    },
    {
        id: "yordan-petrov",
        author: "Yordan Petrov",
        link: "https://www.linkedin.com/in/dev-yordan-petrov",
        title: "Team Lead at BrainRocket · Front-End Developer",
        role: "TEAM LEAD",
        avatar: "YP",
        paragraphs: [
            "I am pleased to recommend Anush Chakhoyan for Front-End developer. I am Yordan Petrov, and I have known Anush for almost an year as their team leader.",
            "During the time I have worked with Anush, I have been consistently impressed by her technical knowledge and critical thinking. Her ability to learn fast distinguished her and contributed significantly to pushing features to production in fast approaching deadlines.",
            "In addition to her strong professional abilities, Anush is a highly reliable and motivated individual.",
            "Based on my experience with Anush, I am confident that she would be an excellent addition to your company. I strongly recommend her for Front-End developer and believe she has the ability, motivation, and character to succeed."
        ]
    }
];