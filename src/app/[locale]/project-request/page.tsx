import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import TopNav from "@/components/layout/TopNav";
import CustomBuilds from "@/components/organisms/CustomBuilds";

export default function ProjectRequest() {
    return (
        <div id="top" className="relative w-full overflow-x-hidden">
            <TopNav />
            <main id="main-content" className="pt-8">
                <Suspense
                    fallback={
                        <div className="w-full max-w-5xl mx-auto my-24 px-6">
                            <div className="h-96 rounded-lg border border-(--color-border) bg-(--color-surface) animate-pulse" />
                        </div>
                    }
                >
                    <CustomBuilds />
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}