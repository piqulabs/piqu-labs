import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://piqulabs.com"; 
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/layanan/jasa-pembuatan-website`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/layanan/jasa-website-company-profile`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/layanan/jasa-website-booking-online`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}