import { ReactNode } from "react";

export type Locale = "en" | "hy";

export type WebsiteType = "Landing Page" | "Wedding Website" | "Personal Portfolio";

export interface CareerSubproject {
    title: string;
    period: string;
    bullets: string[];
    techStack: string[];
}

export interface CareerEntryContent {
    role: string;
    period: string;
    location: string;
    bullets: string[];
    subprojects?: CareerSubproject[];
}

export interface CareerItem {
    id: string;
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
    techStack: string[];
    subprojects?: CareerSubproject[];
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

export interface SkillGroup {
    step: string;
    title: string;
    desc: string;
    skills: string[];
    color: string;
};


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

export const SKILL_GROUPS: SkillGroup[] = [
    {
        step: "// FRONTEND",
        title: "React & Next.js",
        desc: "Production UIs built with strict TypeScript across React, Next.js and Svelte.",
        skills: ["React", "Next.js", "Gatsby.js", "Svelte", "SvelteKit", "TypeScript", "JavaScript ES6+", "HTML5 & CSS3"],
        color: "var(--color-primary)",
    },
    {
        step: "// STYLING",
        title: "Design Systems",
        desc: "Tokens, themes and reusable component libraries documented in Storybook.",
        skills: ["Tailwind CSS", "CSS Modules", "Sass", "Styled Components", "Shadcn UI", "Material UI", "Ant Design", "Chakra UI", "PrimeNG", "Storybook", "Figma"],
        color: "var(--color-accent)",
    },
    {
        step: "// ARCHITECTURE",
        title: "Scalable Systems",
        desc: "Micro frontends, rendering strategies and state patterns, tuned for Core Web Vitals.",
        skills: ["Micro Frontends", "Module Federation", "SSR & SSG", "State Management", "REST APIs", "GraphQL", "Core Web Vitals", "Lazy Loading", "Code Splitting"],
        color: "var(--color-primary)",
    },
    {
        step: "// QUALITY",
        title: "a11y & Testing",
        desc: "WCAG-minded semantic markup backed by automated unit and end-to-end coverage.",
        skills: ["WCAG & ARIA", "Semantic HTML", "Jest", "Cross-browser Compatibility", "Unit Testing"],
        color: "var(--color-accent)",
    },
    {
        step: "// DELIVERY",
        title: "Tooling & Cloud",
        desc: "Fast builds, enforced code quality and automated pipelines from commit to deploy.",
        skills: ["Vite", "Webpack & Babel", "ESLint & Prettier", "Git", "GitHub & GitLab", "CI/CD", "Vercel", "Cloudflare", "GitHub Pages"],
        color: "var(--color-primary)",
    },
    {
        step: "// AI & TEAMWORK",
        title: "AI-Assisted Delivery",
        desc: "LLM-assisted refactoring and prompt engineering, paired with mentoring and agile leadership.",
        skills: ["Cursor", "Claude", "Prompt Engineering", "n8n", "Technical Leadership", "Mentoring", "Agile & Scrum"],
        color: "var(--color-accent)",
    },
];

export type Article = {
    id: string;
    title: string;
    excerpt: string;
    url: string;
    date: string;
    readTime: number;
    lang: Locale;
    tags?: string[];
};

export const ARTICLES: Article[] = [
    {
        id: "design-system",
        title: "What is a Design System?",
        excerpt:
            "A true design system is a scalable contract between design and code, a shared Localeuage for visual consistency across channels.",
        url: "https://medium.com/@anushchakhoyan/what-is-a-design-system-1a09d638d6f0",
        date: "2026-10-04",
        readTime: 3,
        lang: "en",
        tags: ["Design Systems"],
    },
    {
        id: "cube-css",
        title: "CUBE CSS Cheatsheet",
        excerpt:
            "CUBE CSS stands for Composition, Utility, Block, Exception. It works with the natural cascade instead of fighting it.",
        url: "https://medium.com/@anushchakhoyan/cube-css-cheatsheet-472ff40d0df9",
        date: "2026-09-16",
        readTime: 3,
        lang: "en",
        tags: ["CSS", "Methodology"],
    },
    {
        id: "page-load-time",
        title: "Performance: Page load time",
        excerpt:
            "A large DOM hurts performance: the browser has to parse it and build a render tree before anything is painted.",
        url: "https://medium.com/stackademic/performance-page-load-time-84ba04a98fe0",
        date: "2026-06-25",
        readTime: 3,
        lang: "en",
        tags: ["Performance", "DOM"],
    },
    {
        id: "css-variable-animations",
        title: "[SOLVED] CSS Variable Animations",
        excerpt:
            "Custom properties changed how we organize CSS, but they had one major flaw. Here is how animating them is finally solved.",
        url: "https://medium.com/stackademic/solved-css-variable-animations-60c06049dffb",
        date: "2026-03-24",
        readTime: 2,
        lang: "en",
        tags: ["CSS", "Animation"],
    },
    {
        id: "css-interview-questions",
        title: "Թոփ CSS Հարցեր Հարցազրույցի Համար",
        excerpt:
            "Հարցազրույցներում CSS հարցերը հաճախ ստուգում են գիտելիքները հիմնական կոնցեպտների, լավագույն պրակտիկաների, օպտիմիզացիայի և ժամանակակից հատկությունների մասին։",
        url: "https://medium.com/@anushchakhoyan/%D5%A9%D5%B8%D6%83-css-%D5%B0%D5%A1%D6%80%D6%81%D5%A5%D6%80-%D5%B0%D5%A1%D6%80%D6%81%D5%A1%D5%A6%D6%80%D5%B8%D6%82%D5%B5%D6%81%D5%AB-%D5%B0%D5%A1%D5%B4%D5%A1%D6%80-8ea5a7bcebc2",
        date: "2026-01-29",
        readTime: 4,
        lang: "hy",
        tags: ["CSS", "Interview"],
    },
    {
        id: "hardware-acceleration",
        title: "Hardware Acceleration CSS-ում",
        excerpt:
            "Ժամանակակից վեբ-հավելվածներում օգտատերերի փորձառության (UX) որակը մեծ մասամբ որոշվում է անիմացիաների սահունությամբ։",
        url: "https://medium.com/@anushchakhoyan/hardware-acceleration-css-%D5%B8%D6%82%D5%B4-2e9a3bd63d95",
        date: "2025-11-25",
        readTime: 4,
        lang: "hy",
        tags: ["CSS", "Performance"],
    },
    {
        id: "svelte-sveltekit",
        title: "Ինչո՞ւ ընտրել Svelte և SvelteKit քո հաջորդ նախագծի համար",
        excerpt: "Ուղեցույց սկսնակների և փորձառուների համար՝ կայքեր ստեղծելու նոր մոտեցումներով։",
        url: "https://medium.com/@anushchakhoyan/%D5%AB%D5%B6%D5%B9%D5%B8-%D6%82-%D5%A8%D5%B6%D5%BF%D6%80%D5%A5%D5%AC-svelte-%D6%87-sveltekit-%D6%84%D5%B8-%D5%B0%D5%A1%D5%BB%D5%B8%D6%80%D5%A4-%D5%B6%D5%A1%D5%AD%D5%A1%D5%A3%D5%AE%D5%AB-%D5%B0%D5%A1%D5%B4%D5%A1%D6%80-f248a9304d48",
        date: "2025-06-12",
        readTime: 9,
        lang: "hy",
        tags: ["Svelte", "SvelteKit"],
    },
    {
        id: "accessible-website",
        title: "Ինչպե՞ս կարող եք Ձեր կայքը դարձնել հաշմանդամություն ունեցող անձանց համար հասանելի",
        excerpt:
            "Գիտե՞ք, որ աշխարհում ավելի քան մեկ միլիարդ մարդ ունի հաշմանդամություն։ Արդյո՞ք Ձեր կայքը հասանելի է նրանց համար։",
        url: "https://medium.com/@anushchakhoyan/%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%A8-%D5%A2%D5%B8%D5%AC%D5%B8%D6%80%D5%AB-%D5%B0%D5%A1%D5%B4%D5%A1%D6%80-%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5-%D5%BD-%D5%A7-aria-%D5%B6-%D5%A4%D5%A1%D6%80%D5%B1%D5%B6%D5%B8%D6%82%D5%B4-%D5%B1%D5%A5%D6%80-%D5%AF%D5%A1%D5%B5%D6%84%D5%A8-%D5%B0%D5%A1%D5%BD%D5%A1%D5%B6%D5%A5%D5%AC%D5%AB-%D5%A2%D5%B8%D5%AC%D5%B8%D6%80%D5%AB%D5%B6-1579a1476588",
        date: "2025-06-02",
        readTime: 4,
        lang: "hy",
        tags: ["Accessibility"],
    },
    {
        id: "rgb-oklch",
        title: "RGB-ի մահվան լուրերը չափազանցված են՞ թե՞ իսկապես ավարտվում է դարաշրջանը",
        excerpt:
            "Տեղեկատվական և պրակտիկ հոդված ժամանակակից գունային ձևաչափերի՝ lab, lch, oklab, oklch, hsl, մասին և դրանց համեմատությունը դասական hex և rgba ձևաչափերի հետ։",
        url: "https://medium.com/@anushchakhoyan/rgb-%D5%AB-%D5%B4%D5%A1%D5%B0%D5%BE%D5%A1%D5%B6-%D5%AC%D5%B8%D6%82%D6%80%D5%A5%D6%80%D5%A8-%D5%B9%D5%A1%D6%83%D5%A1%D5%A6%D5%A1%D5%B6%D6%81%D5%BE%D5%A1%D5%AE-%D5%A5%D5%B6-%D5%A9%D5%A5-%D5%AB%D5%BD%D5%AF%D5%A1%D5%BA%D5%A5%D5%BD-%D5%A1%D5%BE%D5%A1%D6%80%D5%BF%D5%BE%D5%B8%D6%82%D5%B4-%D5%A7-%D5%A4%D5%A1%D6%80%D5%A1%D5%B7%D6%80%D5%BB%D5%A1%D5%B6%D5%A8-1bf7f19f521f",
        date: "2025-05-19",
        readTime: 4,
        lang: "hy",
        tags: ["CSS", "Color"],
    },
    {
        id: "aria-beginners",
        title: "Make Your Website Accessible to All: A Beginner’s Guide to ARIA",
        excerpt:
            "A practical introduction to ARIA’s power in building web content for everyone, including users with disabilities.",
        url: "https://medium.com/stackademic/aria-accessible-rich-internet-applications-3da57ac03a3c",
        date: "2024-11-04",
        readTime: 3,
        lang: "en",
        tags: ["Accessibility", "ARIA"],
    },
    {
        id: "css-units-font-size",
        title: "Ինչպե՞ս վարպետորեն կառավարել կայքի տեքստի չափը՝ CSS-ի միջոցով",
        excerpt:
            "CSS-ում միավորներն (այսուհետ՝ unit) օգտագործվում են էլեմենտի չափը նշելու համար։ Նրանք կարող են դասակարգվել Absolute և Relative unit-ների։",
        url: "https://medium.com/@anushchakhoyan/css-units-font-size-46a3b96db79",
        date: "2023-09-13",
        readTime: 3,
        lang: "hy",
        tags: ["CSS", "Typography"],
    },
    {
        id: "css-focus-selector",
        title: "CSS Focus Selector",
        excerpt: "Ձեր վեբ կայքը ավելի ինտերակտիվ դարձնելու ժամանակն է։ Սովորե՛ք CSS Focus Selector-ները հիմա։",
        url: "https://medium.com/@anushchakhoyan/%D5%B5%D5%B8%D6%82%D6%80%D5%A1%D6%81%D5%B6%D5%A5%D5%B6%D6%84-focus-selector-%D5%A8-dae08236bb3e",
        date: "2023-07-03",
        readTime: 2,
        lang: "hy",
        tags: ["CSS", "Accessibility"],
    },
    {
        id: "browser-rendering",
        title: "[Rendering] How the Browser Renders a Web Page — CSSOM, Render Engine",
        excerpt:
            "Understanding what goes on inside a browser: how it interprets code and how parsing helps pages load faster.",
        url: "https://medium.com/stackademic/how-the-browser-renders-a-web-page-cssom-render-engine-c395d9f9cbda",
        date: "2023-05-26",
        readTime: 6,
        lang: "en",
        tags: ["Browser", "Rendering"],
    },
    {
        id: "styled-components",
        title: "[CSS] Taking React Styling to the Next Level — Styled Components",
        excerpt:
            "What actually is CSS-in-JS? What do Styled Components mean, and how do you use them? Find the answers in this article.",
        url: "https://medium.com/javascript-in-plain-english/taking-your-react-styling-to-the-next-level-with-styled-components-aa425078a0c2",
        date: "2023-05-09",
        readTime: 7,
        lang: "en",
        tags: ["React", "Styled Components"],
    },
];

export interface LocalizedBuildPackage {
    title: string;
    subtitle: string;
    tag?: string;
    price: string;
    turnaround: string;
    badge?: string;
    ctaLabel: string;
    selectedLabel?: string;
    includedTitle: string;
    features: string[];
}

export interface BuildPackage {
    slug: "landing" | "wedding" | "personal";
    value: WebsiteType;
    featured?: boolean;
}

export const BUILD_PACKAGES: BuildPackage[] = [
    {
        slug: "landing",
        value: "Landing Page",
    },
    {
        slug: "wedding",
        value: "Wedding Website",
        featured: true,
    },
    {
        slug: "personal",
        value: "Personal Portfolio",
    },
];