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
    default: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, FreeNow, Uber | Lublin",
    template: "%s | MIDA",
  },

  // ─── Description: kluczowe frazy + call-to-action (do 155 znaków) ───
  description:
    "Jesteśmy Partnerem największych aplikacji taxi jak Bolt, Uber i FREE NOW. Działamy w kilku miastach w całej Polsce. Oferujemy współpracę na trzech płaszczyznach: auta firmowe, wynajem i własne auto.",

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
    title: "MIDA – Autoryzowany Partner Flotowy Bolt, Uber & FreeNow",
    description:
      "Jesteśmy Partnerem największych aplikacji taxi jak Bolt, Uber i FREE NOW. Zarabiaj jako kierowca – wsparcie 7/7, najlepsza flota, legalne rozliczenia.",
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
import WhatsAppButton from "@/components/More/WhatsAppButton";

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
        "@type": ["LocalBusiness", "EmploymentAgency", "TaxiService"],
        "@id": "https://www.mida-polska.pl/#business",
        name: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, FreeNow, Uber",
        description:
          "Jesteśmy Partnerem największych aplikacji taxi jak Bolt, Uber i FREE NOW. Działamy w kilku miastach w całej Polsce. Zatrudniamy kierowców na nasze auta, wynajmujemy auta w pełni wyposażone oraz rozliczamy kierowców jeżdżących własnymi autami.",
        image: "https://www.mida-polska.pl/images/herobg.png",
        logo: "https://www.mida-polska.pl/images/logo.png",
        url: "https://www.mida-polska.pl",
        telephone: "+48787611115",
        email: "biuro@mida-polska.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Nałęczowska 30, lok 12, Piętro I",
          addressLocality: "Lublin",
          postalCode: "20-701",
          addressCountry: "PL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 51.2224,
          longitude: 22.5556,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "16:30",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Lublin" },
          { "@type": "City", name: "Białystok" },
          { "@type": "City", name: "Opole" },
          { "@type": "City", name: "Wałbrzych" },
          { "@type": "City", name: "Kędzierzyn-Koźle" },
          { "@type": "City", name: "Leszno" },
          { "@type": "City", name: "Zielona Góra" },
          { "@type": "City", name: "Bydgoszcz" },
          { "@type": "City", name: "Nysa" },
          { "@type": "City", name: "Częstochowa" },
          { "@type": "City", name: "Grudziądz" },
        ],
        sameAs: [
          "https://www.facebook.com/midapartnerbolt",
          "https://www.instagram.com/mida.polska/",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Oferta Partnera Flotowego",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Współpraca z Uber",
              description:
                "Zostań kierowcą Uber z Mida Polska. Szkolenie, wsparcie i najlepsza flota.",
            },
            {
              "@type": "Offer",
              name: "Współpraca z Bolt",
              description:
                "Dołącz do Bolt jako kierowca. Partner flotowy Bolt w Polsce.",
            },
            {
              "@type": "Offer",
              name: "Współpraca z FreeNow",
              description:
                "Zarejestruj się jako kierowca FreeNow. Wsparcie Mida Polska.",
            },
          ],
        },
      },
      // 2. FAQPage – zajmuje dodatkowe miejsce w Google (rich snippet)
      {
        "@type": "FAQPage",
        "@id": "https://www.mida-polska.pl/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Czy potrzebuję własnej działalności, żeby pracować jako kierowca Uber lub Bolt?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nie, brak własnej działalności to nie problem. Mida Polska oferuje kompleksowe wsparcie formalne i rozliczeń dla wszystkich kierowców.",
            },
          },
          {
            "@type": "Question",
            name: "Ile można zarobić jako kierowca Bolt lub Uber w Lublinie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zarobki zależą od aktywności i oceny w aplikacji. Nasi najlepsi kierowcy zarabiają powyżej 7000 zł miesięcznie. Im wyższa ocena, tym lepsze zlecenia.",
            },
          },
          {
            "@type": "Question",
            name: "Jak zacząć pracę jako kierowca Uber lub Bolt z Mida Polska?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Wystarczy wypełnić formularz rekrutacyjny online. Skontaktujemy się z Tobą w kilka godzin, przeprowadzimy przez szkolenie i pomożemy wystartować.",
            },
          },
          {
            "@type": "Question",
            name: "W jakich miastach działa Mida Polska?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Działamy w Lublinie, Białymstoku, Opolu, Wałbrzychu, Bydgoszczy, Zielonej Górze, Częstochowie, Lesznie, Grudziądzu i wielu innych miastach w Polsce.",
            },
          },
          {
            "@type": "Question",
            name: "Czy Mida Polska oferuje szkolenie dla nowych kierowców?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tak, każdy nowy kierowca przechodzi bezpłatne szkolenie z obsługi aplikacji Uber, Bolt i FreeNow. Wsparcie dostępne 7 dni w tygodniu.",
            },
          },
        ],
      },
      // 3. WebSite – umożliwia SearchAction (pole wyszukiwania w SERP)
      {
        "@type": "WebSite",
        "@id": "https://www.mida-polska.pl/#website",
        url: "https://www.mida-polska.pl",
        name: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, FreeNow, Uber",
        description: "Oficjalny partner flotowy Uber, Bolt i FreeNow w Polsce",
        inLanguage: "pl-PL",
      },
    ],
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
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
