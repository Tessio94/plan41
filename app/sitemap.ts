import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.plan41.hr";

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    { url: `${baseUrl}/o-nama`, lastModified: new Date() },
    { url: `${baseUrl}/usluge`, lastModified: new Date() },
    { url: `${baseUrl}/mentorstvo`, lastModified: new Date() },
  ];
}
