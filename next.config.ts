import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
    reactStrictMode: true,
};

// Only does something during `next dev`; it has no effect on the production build.
initOpenNextCloudflareForDev();

// The analyzer is loaded only when ANALYZE=true, so builds on Cloudflare
// don't need @next/bundle-analyzer to be installed.
export default async function config(): Promise<NextConfig> {
    if (process.env.ANALYZE === "true") {
        const { default: bundleAnalyzer } = await import("@next/bundle-analyzer");
        return bundleAnalyzer({ enabled: true })(nextConfig);
    }
    return nextConfig;
}