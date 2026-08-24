/** @type {import('next').NextConfig} */
const isGitHubPages = !!process.env.GITHUB_PAGES
const basePath = isGitHubPages ? "/cj6-site" : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
