import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
    reactStrictMode: true,
};

// Only does something during `next dev`; it has no effect on the production build.
initOpenNextCloudflareForDev();

export default withBundleAnalyzer(nextConfig);