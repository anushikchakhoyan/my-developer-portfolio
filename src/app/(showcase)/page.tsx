import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
                <div className="max-w-3xl">
          <span className="font-mono text-sm tracking-[3px] text-[var(--color-accent)] font-semibold mb-4 block">
            2018 → 2026 // PORTFOLIO
          </span>
                    <h1 className="text-6xl md:text-8xl font-serif text-[var(--color-text)] mb-6 tracking-tight">
                        Anush.tech
                    </h1>
                    <p className="text-base md:text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed max-w-2xl mx-auto">
                        Lead UI Architect &amp; Frontend Engineer specializing in scalable design systems, React component architecture, and high-performance web applications.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href="#slide-7">
                            <Button variant="primary" icon={<ArrowUpRight size={16} />}>
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
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">02.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            About Me
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                            UI Architect &amp; Design Systems Lead focused on scalable frontend infrastructure.
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
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">03.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            Career Timeline
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
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
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">04.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            Testimonials
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
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
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">05.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            Design Tokens &amp; Engine
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                            Native CSS Cascade Layers (`@layer`) &amp; OKLCH color space architecture.
                        </p>
                    </header>
                    <TokenInspector />
                </div>
            </section>

            {/* Slide 6: Architecture Pipeline */}
            <section
                id="slide-6"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">06.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            Design System Architecture
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
                            Scalable end-to-end component engineering pipeline.
                        </p>
                    </header>
                    <ArchitectureGrid />
                </div>
            </section>

            {/* Slide 7: Contact & Collaboration */}
            <section
                id="slide-7"
                className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
            >
                <div className="max-w-4xl w-full">
                    <header className="mb-10 text-left">
                        <span className="font-serif text-3xl text-[var(--color-primary)] mr-2">07.</span>
                        <h2 className="text-3xl md:text-4xl font-serif inline-block text-[var(--color-text)]">
                            Contact &amp; Collaboration
                        </h2>
                        <p className="text-sm text-[var(--color-text-muted)] mt-1">
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