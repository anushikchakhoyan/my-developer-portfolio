import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/primitives/Button/Button";
import { TopNav } from "@/components/layout/TopNav";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Footer } from "@/components/layout/Footer";

import { AboutFocusCards } from "@/components/organisms/AboutFocusCards/AboutFocusCards";
import { CareerAccordion } from "@/components/organisms/CareerAccordion/CareerAccordion";
import { TestimonialSlider } from "@/components/organisms/TestimonialSlider/TestimonialSlider";
import { TokenInspector } from "@/components/organisms/TokenInspector/TokenInspector";
import { ArchitectureGrid } from "@/components/organisms/ArchitectureGrid/ArchitectureGrid";
import { ContactCard } from "@/components/organisms/ContactCard/ContactCard";

import { CAREER_DATA, TESTIMONIALS_DATA } from "@/lib/data";

export default function ShowcasePage() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <TopNav />
            <SidebarNav />

            {/* Slide 1: Hero Section */}
            <section
                id="slide-1"
                className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-24 pb-16"
            >
                <div className="max-w-4xl">
                    <span className="font-mono text-sm tracking-[3px] text-(--color-accent) font-semibold mb-4 block">
                        2018 → 2026 // PORTFOLIO
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-(--color-text) mb-6 tracking-tight">
                        I'm a UI Architect & <br /> Frontend Engineer
                    </h1>
                    <p className="text-base md:text-lg text-(--color-text-muted) mb-8 leading-relaxed max-w-3xl mx-auto">
                        My focus is turning fast-moving product requirements into clean, maintainable component architecture —
                        with design-system consistency, accessibility, and testing built in from the start. 
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="#slide-7">
                            <Button variant="primary">
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Slide 2: About Me */}
            <section
                id="slide-2"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">02.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            About Me
                        </h2>
                        <p className="text-md text-(--color-text-muted) mt-1">
                            A little about me and what I do.
                        </p>
                    </header>
                    <AboutFocusCards />
                </div>
            </section>

            {/* Slide 3: Career Timeline */}
            <section
                id="slide-3"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">03.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            Career Timeline
                        </h2>
                        <p className="text-md text-(--color-text-muted) mt-1">
                            7+ years of engineering impact across global companies and platforms.
                        </p>
                    </header>
                    <CareerAccordion items={CAREER_DATA} defaultOpenId="brainrocket" />
                </div>
            </section>

            {/* Slide 4: Testimonials */}
            <section
                id="slide-4"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">04.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            Testimonials
                        </h2>
                        <p className="text-md text-(--color-text-muted) mt-1">
                            Direct recommendations from engineering leads and directors.
                        </p>
                    </header>
                    <TestimonialSlider testimonials={TESTIMONIALS_DATA} />
                </div>
            </section>

            {/* Slide 5: Design Tokens & Engine */}
            <section
                id="slide-5"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">05.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            Try the Theme Engine
                        </h2>
                        <p className="text-md text-(--color-text-muted) mt-1">
                          Interactive Design Tokens: A live demo of OKLCH color tokens and native @layer architecture.
                        </p>
                    </header>
                    <TokenInspector />
                </div>
            </section>

            {/* Slide 6: Architecture Pipeline */}
            {/* <section
                id="slide-6"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">06.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            Design System Architecture
                        </h2>
                        <p className="text-sm text-(--color-text-muted) mt-1">
                            Scalable end-to-end component engineering pipeline.
                        </p>
                    </header>
                    <ArchitectureGrid />
                </div>
            </section> */}

            {/* Slide 7: Contact & Collaboration */}
            <section
                id="slide-7"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-(--color-primary) mr-2">07.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                            Contact &amp; Collaboration
                        </h2>
                        <p className="text-sm text-(--color-text-muted) mt-1">
                            Open for UI Architecture consultations, design system audits, and senior engineering roles.
                        </p>
                    </header>
                    <ContactCard />
                </div>
            </section>

            <Footer />
        </div>
    );
}