import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_STUDIES_DIR = path.join(process.cwd(), "content/case-studies");

export interface CaseStudyMeta {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    role: string;
    tags: string[];
}

export function getAllCaseStudies(): CaseStudyMeta[] {
    if (!fs.existsSync(CASE_STUDIES_DIR)) return [];

    const files = fs.readdirSync(CASE_STUDIES_DIR);
    return files
        .filter(file => file.endsWith(".mdx"))
        .map(file => {
            const source = fs.readFileSync(path.join(CASE_STUDIES_DIR, file), "utf8");
            const { data } = matter(source);
            return {
                slug: file.replace(/\.mdx$/, ""),
                title: data.title ?? "Untitled Study",
                subtitle: data.subtitle ?? "",
                date: data.date ?? "2026",
                role: data.role ?? "Lead UI Architect",
                tags: data.tags ?? []
            };
        });
}

export function getCaseStudyBySlug(slug: string) {
    const fullPath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const source = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(source);

    return {
        content,
        meta: {
            slug,
            title: data.title ?? "Case Study",
            subtitle: data.subtitle ?? "",
            date: data.date ?? "2026",
            role: data.role ?? "Lead UI Architect",
            tags: data.tags ?? []
        }
    };
}