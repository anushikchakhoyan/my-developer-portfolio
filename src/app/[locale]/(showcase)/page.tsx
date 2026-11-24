import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

import { Button } from "@/components/primitives/Button";
import { TopNav } from "@/components/layout/TopNav";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { Footer } from "@/components/layout/Footer";

import { TestimonialSlider } from "@/components/organisms/TestimonialSlider";
import { AboutFocusCards } from "@/components/organisms/AboutFocusCards";
import { CareerAccordion } from "@/components/organisms/CareerAccordion";
import { TokenInspector } from "@/components/organisms/TokenInspector";
import { ContactCard } from "@/components/organisms/ContactCard";
import { Skills } from "@/components/organisms/Skills";
import { Blog } from "@/components/organisms/Blog";

import { CAREER_DATA, TESTIMONIALS_DATA } from "@/config/data";

export default async function ShowcasePage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations("showcase");

    return (
        <div id="top" className="relative w-full overflow-x-hidden">
            <TopNav />
            <SidebarNav />
            <main id="main-content">
                {/* Slide 1: Hero Section */}
                <section
                    id="intro"
                    className="min-h-screen w-full flex flex-col justify-center items-center text-center px-6 pt-24 pb-16"
                >
                    <div className="max-w-4xl">
                        <span className="font-mono text-sm tracking-[3px] text-(--color-accent) font-semibold mb-4 block">
                            {t("hero.eyebrow")}
                        </span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif text-(--color-text) mb-6 tracking-tight">
                            {t("hero.titleLine1")} <br /> {t("hero.titleLine2")}
                        </h1>
                        <p className="text-base md:text-lg text-(--color-text-muted) mb-8 leading-relaxed max-w-3xl mx-auto">
                            {t("hero.subtitle")}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link href="#contact">
                                <Button variant="primary">
                                    {t("hero.primaryCta")}
                                </Button>
                            </Link>
                            <Link href="/project-request">
                                <Button>
                                    {t("hero.secondaryCta")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Slide 2: About Me */}
                <section
                    id="about-me"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">02.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("about.title")}
                            </h2>
                            <p className="text-md text-(--color-text-muted) mt-1">
                                {t("about.subtitle")}
                            </p>
                        </header>
                        <AboutFocusCards />
                    </div>
                </section>

                {/* Slide 3: Career Timeline */}
                <section
                    id="career"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">03.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("career.title")}
                            </h2>
                            <p className="text-md text-(--color-text-muted) mt-1">
                                {t("career.subtitle")}
                            </p>
                        </header>
                        <CareerAccordion items={CAREER_DATA} defaultOpenId="brainrocket" />
                    </div>
                </section>

                {/* Slide 4: Testimonials */}
                <section
                    id="testimonials"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">04.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("testimonials.title")}
                            </h2>
                            <p className="text-md text-(--color-text-muted) mt-1">
                                {t("testimonials.subtitle")}
                            </p>
                        </header>
                        <TestimonialSlider testimonials={TESTIMONIALS_DATA} />
                    </div>
                </section>

                {/* Slide 5: Design Tokens & Engine */}
                <section
                    id="demo"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">05.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("tokens.title")}
                            </h2>
                            <p className="text-md text-(--color-text-muted) mt-1">
                                {t("tokens.subtitle")}
                            </p>
                        </header>
                        <TokenInspector />
                    </div>
                </section>

                {/* Slide 6: Skills & Stack */}
                <section
                    id="skills"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">06.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("skills.title")}
                            </h2>
                            <p className="text-sm text-(--color-text-muted) mt-1">
                                {t("skills.subtitle")}
                            </p>
                        </header>
                        <Skills />
                    </div>
                </section>

                {/* Slide 7: Blog */}
                <section
                    id="blog"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">07.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("blog.title")}
                            </h2>
                            <p className="text-sm text-(--color-text-muted) mt-1">
                                {t("blog.subtitle")}
                            </p>
                        </header>
                        <Blog />
                    </div>
                </section>

                {/* Slide 8: Contact */}
                <section
                    id="contact"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="mb-10 text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">08.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                {t("contact.title")}
                            </h2>
                            <p className="text-sm text-(--color-text-muted) mt-1">
                                {t("contact.subtitle")}
                            </p>
                        </header>
                        <ContactCard />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}