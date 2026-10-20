import {notFound} from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import {getAllCaseStudies, getCaseStudyBySlug} from "@/lib/mdx";
import {MDXRemote} from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const studies = getAllCaseStudies();
    return studies.map(study => ({slug: study.slug}));
}

export default async function CaseStudyPage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) notFound();

    return (
        <article className="min-h-screen py-24 px-6 md:px-16 max-w-4xl mx-auto">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-mono text-(--color-primary) mb-8 hover:underline"
            >
                <ArrowLeft size={16}/> Return to Showcase
            </Link>

            <header className="mb-10 border-b border-(--color-border) pb-8">
                <div className="flex gap-2 mb-3">
                    {study?.meta?.tags?.map((tag: any) => (
                        <span key={tag}
                              className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-(--color-surface) border border-(--color-border) text-(--color-accent)">
              {tag}
            </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-(--color-text) mb-3">
                    {study.meta.title}
                </h1>
                <p className="text-lg text-(--color-text-muted)">
                    {study.meta.subtitle}
                </p>
            </header>

            <div className="prose prose-invert max-w-none text-(--color-text) leading-relaxed space-y-4">
                <MDXRemote source={study.content}/>
            </div>
        </article>
    );
}