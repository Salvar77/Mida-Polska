"use client";

const MidaSeoSchema = () => {
  const domain = "https://www.mida-polska.pl";

  // 1. BreadcrumbList - Menu nawigacyjne
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona Główna",
        "item": domain
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Partner Uber",
        "item": `${domain}/#uber`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Partner Bolt",
        "item": `${domain}/#bolt`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Partner FREENOW",
        "item": `${domain}/#freenow`
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Rekrutacja Kierowców",
        "item": `${domain}/#rekrutacja`
      }
    ]
  };

  // 2. JobPosting - Ogłoszenie o pracę (Kierowca)
  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Kierowca Taxi - Uber, Bolt, FREENOW",
    "description": "Dołącz do Mida Polska – największego partnera Uber, Bolt i FREENOW. Rekrutujemy kierowców w ponad 50 miastach (Warszawa, Kraków, Wrocław, Lublin, Opole i inne). Oferujemy nowoczesną flotę, pełne wsparcie i atrakcyjne zarobki.",
    "datePosted": "2026-05-01",
    "validThrough": "2026-12-31",
    "employmentType": "CONTRACTOR",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "Mida Polska",
      "sameAs": "https://www.mida-polska.pl",
      "logo": `${domain}/images/logo.png`,
      "areaServed": [
        "Warszawa", "Kraków", "Wrocław", "Łódź", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", "Lublin", "Białystok", "Katowice", "Gdynia", "Częstochowa", "Radom", "Rzeszów", "Toruń", "Olsztyn", "Bielsko-Biała", "Gorzów Wielkopolski", "Zielona Góra", "Elbląg", "Wałbrzych", "Opole", "Legnica", "Płock", "Ostrołęka", "Jelenia Góra", "Tychy", "Stalowa Wola", "Słupsk", "Łomża", "Ełk", "Tarnów", "Suwałki", "Chełm", "Kędzierzyn-Koźle", "Zamość", "Leszno", "Świdnica", "Nysa", "Biała Podlaska", "Puławy", "Augustów", "Sopot", "Grudziądz", "Świdnik", "Rybnik", "Mielno", "Karpacz", "Szklarska Poręba", "Zakopane", "Rumia", "Dobrzeń Wielki", "Łubniany", "Prószków", "Koszalin", "Kalisz"
      ]
    },
    "jobLocation": {
      "@id": "https://www.mida-polska.pl/#business"
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "PLN",
      "value": {
        "@type": "QuantitativeValue",
        "value": 7000,
        "unitText": "MONTH"
      }
    }
  };

  // 3. Products - Modele aut jako produkty (Zakupy w GSC)
  const fleetProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Wynajem Skoda Fabia pod Taxi",
      "image": `${domain}/images/wynajem-aut-pod-taxi-skoda-fabia-lpg.webp`,
      "description": "Wynajem nowoczesnej Skody Fabia (2021+) z LPG pod Uber, Bolt i FREENOW.",
      "brand": { "@type": "Brand", "name": "Skoda" },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#flota`,
        "price": "400.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Wynajem Toyota Corolla pod Taxi",
      "image": `${domain}/images/wynajem-samochodow-na-taxi-bolt-uber-toyota-corolla.webp`,
      "description": "Najwyższy standard - Toyota Corolla Hybrid (2022+) pod Uber, Bolt i FREENOW.",
      "brand": { "@type": "Brand", "name": "Toyota" },
      "offers": {
        "@type": "Offer",
        "url": `${domain}/#flota`,
        "price": "600.00",
        "priceCurrency": "PLN",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  // 4. SiteNavigationElement
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Rekrutacja",
        "url": `${domain}/#rekrutacja`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Flota",
        "url": `${domain}/#flota`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "Zarobki",
        "url": `${domain}/#zarobki`
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Kontakt",
        "url": `${domain}/#kontakt`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
      />
      {fleetProducts.map((product, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
        />
      ))}
    </>
  );
};

export default MidaSeoSchema;
