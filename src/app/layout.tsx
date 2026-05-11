import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "@/styles/globals.scss";

import { Providers } from "@/components/More/Providers";
import WhatsAppButton from "@/components/More/WhatsAppButton";
import MidaSeoSchema from "@/components/Seo/MidaSeoSchema";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mida-polska.pl"),

  title: {
    default: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, Uber, FREENOW | Lublin",
    template: "%s | MIDA",
  },
  publisher: "Mida Polska",

  description:
    "Mida Polska - autoryzowany partner flotowy Uber, Bolt, FREENOW. Działamy w Polsce: Warszawa, Kraków, Wrocław, Lublin, Opole i w 50+ innych miastach.",

  keywords: [
    "partner flotowy uber",
    "partner flotowy bolt",
    "partner flotowy freenow",
    "praca kierowca taxi",
    "partner taxi warszawa",
    "partner taxi kraków",
    "partner taxi wrocław",
    "partner taxi lublin",
    "wynajem auta na uber",
    "mida polska",
    "rozliczenia kierowców bolt",
  ],

  // ─── Open Graph (FB, LinkedIn, Messenger) ───
  openGraph: {
    title: "MIDA – Autoryzowany Partner Flotowy Bolt, Uber & FREENOW",
    description:
      "Mida Polska - autoryzowany partner flotowy Uber, Bolt, FREENOW. Działamy w Polsce: Warszawa, Kraków, Wrocław, Lublin, Opole i w 50+ innych miastach.",
    url: "https://www.mida-polska.pl",
    siteName: "Mida Polska",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://www.mida-polska.pl/images/najlepszy-partner-flotowy-bolt-uber-freenow-polska.webp",
        width: 1200,
        height: 630,
        alt: "Mida Polska – Praca jako kierowca Uber, Bolt, FREENOW w Lublinie",
      },
    ],
  },

  // ─── Twitter Card ───
  twitter: {
    card: "summary_large_image",
    title: "Mida Polska – Partner Flotowy Uber, Bolt, FREENOW",
    description:
      "Zacznij zarabiać jako kierowca. Szkolenie gratis, wsparcie 7/7, najlepsza flota w mieście!",
    images: [
      "https://www.mida-polska.pl/images/najlepszy-partner-flotowy-bolt-uber-freenow-polska.webp",
    ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "EmploymentAgency", "TaxiService"],
        "@id": "https://www.mida-polska.pl/#business",
        name: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, Uber, FREENOW",
        description:
          "Mida Polska to autoryzowany partner flotowy aplikacji Bolt, Uber oraz FREENOW. Działamy w kilkudziesięciu miastach Polski, m.in. w Warszawie, Krakowie, Wrocławiu, Lublinie, Opolu. Oferujemy zatrudnienie na autach firmowych, wynajem samochodów pod taxi oraz rzetelne rozliczenia dla kierowców z własnym pojazdem. Zapewniamy pełne wsparcie i terminowe wypłaty. Zapraszamy do kontaktu!",
        image:
          "https://www.mida-polska.pl/images/najlepszy-partner-flotowy-bolt-uber-freenow-polska.webp",
        logo: "https://www.mida-polska.pl/images/logo-mida-polska.webp",
        url: "https://www.mida-polska.pl",
        telephone: "+48787611115",
        email: "biuro@mida-polska.pl",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "124",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Kamil Kowalski" },
            reviewRating: { "@type": "Rating", ratingValue: "5" },
            reviewBody:
              "Świetny partner, rzetelne rozliczenia i bardzo pomocna obsługa. Polecam każdemu kierowcy.",
          },
        ],
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
            opens: "09:00",
            closes: "16:30",
          },
        ],
        areaServed: [
          { "@type": "City", name: "Warszawa" },
          { "@type": "City", name: "Kraków" },
          { "@type": "City", name: "Wrocław" },
          { "@type": "City", name: "Łódź" },
          { "@type": "City", name: "Poznań" },
          { "@type": "City", name: "Gdańsk" },
          { "@type": "City", name: "Szczecin" },
          { "@type": "City", name: "Bydgoszcz" },
          { "@type": "City", name: "Lublin" },
          { "@type": "City", name: "Białystok" },
          { "@type": "City", name: "Katowice" },
          { "@type": "City", name: "Gdynia" },
          { "@type": "City", name: "Częstochowa" },
          { "@type": "City", name: "Radom" },
          { "@type": "City", name: "Rzeszów" },
          { "@type": "City", name: "Toruń" },
          { "@type": "City", name: "Olsztyn" },
          { "@type": "City", name: "Bielsko-Biała" },
          { "@type": "City", name: "Gorzów Wielkopolski" },
          { "@type": "City", name: "Zielona Góra" },
          { "@type": "City", name: "Elbląg" },
          { "@type": "City", name: "Wałbrzych" },
          { "@type": "City", name: "Opole" },
          { "@type": "City", name: "Legnica" },
          { "@type": "City", name: "Płock" },
          { "@type": "City", name: "Ostrołęka" },
          { "@type": "City", name: "Jelenia Góra" },
          { "@type": "City", name: "Tychy" },
          { "@type": "City", name: "Stalowa Wola" },
          { "@type": "City", name: "Słupsk" },
          { "@type": "City", name: "Łomża" },
          { "@type": "City", name: "Ełk" },
          { "@type": "City", name: "Tarnów" },
          { "@type": "City", name: "Suwałki" },
          { "@type": "City", name: "Chełm" },
          { "@type": "City", name: "Kędzierzyn-Koźle" },
          { "@type": "City", name: "Zamość" },
          { "@type": "City", name: "Leszno" },
          { "@type": "City", name: "Świdnica" },
          { "@type": "City", name: "Nysa" },
          { "@type": "City", name: "Biała Podlaska" },
          { "@type": "City", name: "Puławy" },
          { "@type": "City", name: "Augustów" },
          { "@type": "City", name: "Sopot" },
          { "@type": "City", name: "Grudziądz" },
          { "@type": "City", name: "Świdnik" },
          { "@type": "City", name: "Rybnik" },
          { "@type": "City", name: "Mielno" },
          { "@type": "City", name: "Karpacz" },
          { "@type": "City", name: "Szklarska Poręba" },
          { "@type": "City", name: "Zakopane" },
          { "@type": "City", name: "Rumia" },
          { "@type": "City", name: "Dobrzeń Wielki" },
          { "@type": "City", name: "Łubniany" },
          { "@type": "City", name: "Prószków" },
          { "@type": "City", name: "Koszalin" },
          { "@type": "City", name: "Kalisz" },
        ],
        sameAs: [
          "https://www.facebook.com/midapartnerbolt",
          "https://www.instagram.com/mida.polska/",
          "https://share.google/yLOmKNkh9sSli75e4",
          "https://www.gowork.pl/opinie_czytaj,24021194",
          "https://rejestr.io/krs/848316/mida",
          "https://aleo.com/pl/firma/mida-sp-z-oo-lublin",
        ],
        hasMap: "https://share.google/yLOmKNkh9sSli75e4",
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
              name: "Współpraca z FREENOW",
              description:
                "Zarejestruj się jako kierowca FREENOW. Wsparcie Mida Polska.",
            },
          ],
        },
      },
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
              text: "Działamy w całej Polsce, m.in. w Warszawie, Krakowie, Wrocławiu, Lublinie, Opolu, Białymstoku, Gdańsku i ponad 50 innych miastach.",
            },
          },
          {
            "@type": "Question",
            name: "Czy Mida Polska oferuje szkolenie dla nowych kierowców?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tak, każdy nowy kierowca przechodzi bezpłatne szkolenie z obsługi aplikacji Uber, Bolt i FREENOW. Wsparcie dostępne 7 dni w tygodniu.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.mida-polska.pl/#website",
        url: "https://www.mida-polska.pl",
        name: "MIDA AUTORYZOWANY PARTNER FLOTOWY Bolt, Uber, FREENOW",
        description: "Oficjalny partner flotowy Uber, Bolt i FREENOW w Polsce",
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
        <MidaSeoSchema />
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
