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
  metadataBase: new URL("https://www.mida-polska.pl"),

  // ─── Tytuł: fraza główna + USP + lokalizacja (do 60 znaków) ───
  title: {
    default: "Partner Flotowy Uber, Bolt, FreeNow | Mida Polska – Lublin",
    template: "%s | Mida Polska",
  },

  // ─── Description: kluczowe frazy + call-to-action (do 155 znaków) ───
  description:
    "Mida Polska – oficjalny partner flotowy Uber, Bolt i FreeNow. Zacznij zarabiać jako kierowca: szkolenie, wsparcie 7 dni w tygodniu, najlepsza flota. Lublin i cała Polska.",

  // ─── Keywords (pomocnicze dla innych wyszukiwarek niż Google) ───
  keywords: [
    "partner flotowy uber",
    "partner flotowy bolt",
    "partner flotowy freenow",
    "praca kierowca lublin",
    "praca kierowca taxi lublin",
    "dołącz do floty uber",
    "aplikacja bolt kierowca",
    "zarabiaj jako kierowca",
    "partner taxi polska",
    "wynajem auta na uber",
    "mida polska lublin",
    "flota taxi lublin",
    "rozliczenia kierowców",
  ],

  // ─── Open Graph (FB, LinkedIn, Messenger) ───
  openGraph: {
    title: "Mida Polska – Oficjalny Partner Flotowy Uber, Bolt & FreeNow",
    description:
      "Zacznij zarabiać jako kierowca. Szkolenie gratis, wsparcie 7/7, najlepsza flota w mieście. Aplikuj online – odpiszemy w kilka godzin!",
    url: "https://www.mida-polska.pl",
    siteName: "Mida Polska",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.mida-polska.pl/images/herobg.png",
        width: 1200,
        height: 630,
        alt: "Mida Polska – Praca jako kierowca Uber, Bolt, FreeNow w Lublinie",
      },
    ],
  },

  // ─── Twitter Card ───
  twitter: {
    card: "summary_large_image",
    title: "Mida Polska – Partner Flotowy Uber, Bolt, FreeNow",
    description:
      "Zacznij zarabiać jako kierowca. Szkolenie gratis, wsparcie 7/7, najlepsza flota w mieście!",
    images: ["https://www.mida-polska.pl/images/herobg.png"],
  },

  // ─── Canonical ───
  alternates: {
    canonical: "https://www.mida-polska.pl",
  },

  // ─── Robots ───
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

import { Providers } from "@/components/More/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── Structured Data: graph z trzema schematami ──────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. LocalBusiness – podstawa SEO lokalnego
      {
        "@type": ["LocalBusiness", "EmploymentAgency"],
        "@id": "https://www.mida-polska.pl/#business",
        "name": "Mida Polska",
        "description": "Oficjalny autoryzowany partner flotowy Uber, Bolt i FreeNow. Szkolimy i wspieramy kierowców na terenie całej Polski.",
        "image": "https://www.mida-polska.pl/images/herobg.png",
        "logo": "https://www.mida-polska.pl/images/logo.png",
        "url": "https://www.mida-polska.pl",
        "telephone": "+48787611115",
        "email": "biuro@mida-polska.pl",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "ul. Nałęczowska 30/12",
          "addressLocality": "Lublin",
          "postalCode": "20-701",
          "addressCountry": "PL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 51.2224,
          "longitude": 22.5556
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "10:00",
            "closes": "18:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Lublin" },
          { "@type": "City", "name": "Białystok" },
          { "@type": "City", "name": "Opole" },
          { "@type": "City", "name": "Wałbrzych" },
          { "@type": "City", "name": "Kędzierzyn-Koźle" },
          { "@type": "City", "name": "Leszno" },
          { "@type": "City", "name": "Zielona Góra" },
          { "@type": "City", "name": "Bydgoszcz" },
          { "@type": "City", "name": "Nysa" },
          { "@type": "City", "name": "Częstochowa" }
        ],
        "sameAs": [
          "https://www.facebook.com/midapolska",
          "https://www.instagram.com/midapolska"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Oferta Partnera Flotowego",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Współpraca z Uber",
              "description": "Zostań kierowcą Uber z Mida Polska. Szkolenie, wsparcie i najlepsza flota."
            },
            {
              "@type": "Offer",
              "name": "Współpraca z Bolt",
              "description": "Dołącz do Bolt jako kierowca. Partner flotowy Bolt w Polsce."
            },
            {
              "@type": "Offer",
              "name": "Współpraca z FreeNow",
              "description": "Zarejestruj się jako kierowca FreeNow. Wsparcie Mida Polska."
            }
          ]
        }
      },
      // 2. FAQPage – zajmuje dodatkowe miejsce w Google (rich snippet)
      {
        "@type": "FAQPage",
        "@id": "https://www.mida-polska.pl/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy potrzebuję własnej działalności, żeby pracować jako kierowca Uber lub Bolt?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie, brak własnej działalności to nie problem. Mida Polska oferuje kompleksowe wsparcie formalne i rozliczeń dla wszystkich kierowców."
            }
          },
          {
            "@type": "Question",
            "name": "Ile można zarobić jako kierowca Bolt lub Uber w Lublinie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zarobki zależą od aktywności i oceny w aplikacji. Nasi najlepsi kierowcy zarabiają powyżej 7000 zł miesięcznie. Im wyższa ocena, tym lepsze zlecenia."
            }
          },
          {
            "@type": "Question",
            "name": "Jak zacząć pracę jako kierowca Uber lub Bolt z Mida Polska?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wystarczy wypełnić formularz rekrutacyjny online. Skontaktujemy się z Tobą w kilka godzin, przeprowadzimy przez szkolenie i pomożemy wystartować."
            }
          },
          {
            "@type": "Question",
            "name": "W jakich miastach działa Mida Polska?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Działamy w Lublinie, Białymstoku, Opolu, Wałbrzychu, Bydgoszczy, Zielonej Górze, Częstochowie, Lesznie i wielu innych miastach w Polsce."
            }
          },
          {
            "@type": "Question",
            "name": "Czy Mida Polska oferuje szkolenie dla nowych kierowców?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, każdy nowy kierowca przechodzi bezpłatne szkolenie z obsługi aplikacji Uber, Bolt i FreeNow. Wsparcie dostępne 7 dni w tygodniu."
            }
          }
        ]
      },
      // 3. WebSite – umożliwia SearchAction (pole wyszukiwania w SERP)
      {
        "@type": "WebSite",
        "@id": "https://www.mida-polska.pl/#website",
        "url": "https://www.mida-polska.pl",
        "name": "Mida Polska",
        "description": "Oficjalny partner flotowy Uber, Bolt i FreeNow w Polsce",
        "inLanguage": "pl-PL"
      }
    ]
  };

  return (
    <html lang="pl" className={lato.variable}>
      <head>
        <script
          type="application/ld+json"
          id="mida-polska-jsonld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
