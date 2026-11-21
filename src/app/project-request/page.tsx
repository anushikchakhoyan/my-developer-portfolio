import { Footer } from "@/components/layout/Footer";
import TopNav from "@/components/layout/TopNav";
import CustomBuilds from "@/components/organisms/ProjectRequest/CustomBuilds";

export default function ProjectRequest() {
    return (
        <div className="relative w-full overflow-x-hidden">
            <TopNav />
            <main id="main-content">
                <section
                    id="about-me"
                    className="min-h-screen w-full flex flex-col justify-center items-center px-6 py-20"
                >
                    <div className="max-w-4xl w-full">
                        <header className="text-left">
                            <span className="font-serif text-3xl text-(--color-primary) mr-2">01.</span>
                            <h2 className="text-3xl md:text-4xl font-serif inline-block text-(--color-text)">
                                Custom Website Builds
                            </h2>
                            <p className="text-sm text-(--color-text-muted) mt-1">
                                Landing pages, wedding sites, and personal portfolios—built from scratch.
                            </p>
                        </header>
                        <CustomBuilds />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}