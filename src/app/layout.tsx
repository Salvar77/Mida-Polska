import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.scss";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Mida Polska - Autoryzowany Partner Flotowy | Lublin i cała Polska",
  description: "Zarabiaj jako kierowca z Mida Polska. Oficjalny autoryzowany partner flotowy najpopularniejszych aplikacji transportowych: Uber, Bolt, FreeNow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mida Polska",
    "image": "https://mida-polska.pl/images/herobg.png",
    "url": "https://mida-polska.pl",
    "telephone": "+48787611115",
    "email": "biuro@mida-polska.pl",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ul. Nałęczowska 30/12",
      "addressLocality": "Lublin",
      "postalCode": "20-701",
      "addressCountry": "PL"
    },
    "areaServed": [
      "Lublin", "Białystok", "Opole", "Wałbrzych", "Kędzierzyn-Koźle", 
      "Leszno", "Zielona Góra", "Bydgoszcz", "Nysa", "Częstochowa"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="pl" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
