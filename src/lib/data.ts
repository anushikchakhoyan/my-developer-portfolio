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
        location: "FULL-TIME · YEREVAN, HYBRID",
        bullets: [
            "Managed global iGaming platform brand support, ensuring strict design system compliance across co-branded promotional assets. Additionally, supported high-profile brand partnerships, such as UFC, by modernizing core game access points including thumbnails, play buttons, and interactive modals. Through extensive UI codebase refactoring, achieved 1:1 pixel fidelity with updated design specifications to deliver enhanced visual consistency and frontend performance.",
        ],
        techStack: ["Angular (v12+)", "TypeScript", "RxJS", "Custom Design Systems"]
    },
    {
        id: "freelance",
        company: "Freelance",
        role: "Senior UI Developer",
        period: "2025 — 2026",
        location: "FREELANCE · WORLDWIDE, REMOTE",
        bullets: [],
        techStack: [],
        subprojects: [
            {
                title: "Green Development — Senior UI Developer",
                period: "Aug 2025 – Jan 2026 · Construction Admin Panel",
                bullets: [
                    "Built the core design system and reusable front-end component library from scratch for a Construction Admin Panel, standardizing colors, spacing, typography, and component behavior to deliver a unified look and accelerate development speed across the platform."
                ],
                techStack: ["Angular", "CSS", "PrimeNG"]
            },
            {
                title: "Eiger Ltd — Senior UI Developer",
                period: "Apr 2025 – Jul 2025 · Terrasoft iGaming",
                bullets: [
                    "Redesigned and built the company website with a modern responsive UI using Svelte and SvelteKit. Implemented engaging micro-interactions while optimizing the entire platform for high performance, web accessibility, and SEO."
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
            "Migrated legacy PHP-based UI components to modern, reusable React components while refactoring and optimizing frontend code to integrate backend APIs for real-time responsiveness. Additionally, maintained shared component packages across food retail modules utilizing Lerna monorepos."
        ],
        techStack: ["React.js", "Ant Design", "Lerna", "Redux"]
    },
    {
        id: "inspace",
        company: "InSpace Proximity",
        role: "UI Developer (Virtual Classroom Portal)",
        period: "2021 — 2023",
        location: "FULL-TIME · YEREVAN, HYBRID",
        bullets: [
            "Developed 30+ responsive frontend components using modern TypeScript frameworks and wrote comprehensive unit test coverage using Jest to ensure reliability across classroom tools. Additionally, documented component guidelines and performed thorough pull request code reviews with a strong focus on accessibility and performance."
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
            "Over a 3-year and 9-month journey, I successfully progressed from an Intern to Junior, and ultimately Middle Developer. I initially contributed to the SabX B2B/B2C marketplace by building dynamic data tables featuring pagination, sorting, and live updates. Later, as a Mid Developer, I led the development and delivery of 10+ responsive client websites, achieving high SEO performance scores and exceptional user experiences."
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