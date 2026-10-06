import { MetadataRoute } from "next";
import { products, blogs } from "@/data/websiteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.amarchemicals.com";

  // Core static pages
  const staticPages = [
    "",
    "/about",
    "/products",
    "/tools",
    "/industries",
    "/infrastructure",
    "/certifications",
    "/downloads",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic Product Pages
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Blog Pages
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...productPages, ...blogPages];
}
