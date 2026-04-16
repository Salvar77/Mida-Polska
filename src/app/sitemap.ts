import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mida-polska.pl";
  const now = new Date();

  return [
    // Strona główna – najwyższy priorytet
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Podstrony statyczne
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
