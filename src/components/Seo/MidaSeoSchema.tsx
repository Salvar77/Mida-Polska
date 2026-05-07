"use client";

const MidaSeoSchema = () => {
  const domain = "https://www.mida-polska.pl";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona Główna",
        item: domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Partner Uber",
        item: `${domain}/#uber`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Partner Bolt",
        item: `${domain}/#bolt`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Partner FREENOW",
        item: `${domain}/#freenow`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Rekrutacja Kierowców",
        item: `${domain}/#rekrutacja`,
      },
    ],
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Kierowca Taxi - Uber, Bolt, FREENOW",
    description:
      "Dołącz do Mida Polska – największego partnera Uber, Bolt i FREENOW. Rekrutujemy kierowców w ponad 50 miastach (Warszawa, Kraków, Wrocław, Lublin, Opole i inne). Oferujemy nowoczesną flotę, pełne wsparcie i atrakcyjne zarobki.",
    datePosted: "2026-05-01",
    validThrough: "2026-12-31",
    employmentType: "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: "Mida Polska",
      sameAs: "https://www.mida-polska.pl",
      logo: `${domain}/images/logo.png`,
    },

    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PL",
        addressLocality: "Lublin",
        addressRegion: "Lubelskie",
      },
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "PL",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "PLN",
      value: {
        "@type": "QuantitativeValue",
        minValue: 5000,
        maxValue: 12000,
        unitText: "MONTH",
      },
    },
  };

  const sharedReturnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "PL",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  };

  const sharedShipping = {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: "0",
      currency: "PLN",
    },
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "PL",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 1,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "DAY",
      },
    },
  };

  const fleetProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Wynajem Skoda Fabia pod Taxi",
      image: `${domain}/images/wynajem-aut-pod-taxi-skoda-fabia-lpg.webp`,
      description:
        "Wynajem nowoczesnej Skody Fabia (2021+) z LPG pod Uber, Bolt i FREENOW.",
      brand: { "@type": "Brand", name: "Skoda" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "93",
        bestRating: "5",
        worstRating: "1",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "radoslaw mikolajski",
        },
        reviewBody:
          "Wysokiej klasy profesjonaliści ja współpracuje z walbrzyskim oddziale firmy gdzie managerem jest Pan Lukasz co mogę powiedzieć gościu wie co robi naprawdę fachowiec który umie zarządzać całym oddziałem każdemu polecam takiego menagera",
      },
      offers: {
        "@type": "Offer",
        url: `${domain}/#flota`,
        price: "400.00",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        hasMerchantReturnPolicy: sharedReturnPolicy,
        shippingDetails: sharedShipping,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Wynajem Toyota Corolla pod Taxi",
      image: `${domain}/images/wynajem-samochodow-na-taxi-bolt-uber-toyota-corolla.webp`,
      description:
        "Najwyższy standard - Toyota Corolla Hybrid (2022+) pod Uber, Bolt i FREENOW.",
      brand: { "@type": "Brand", name: "Toyota" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "93",
        bestRating: "5",
        worstRating: "1",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Tomek Bogut",
        },
        reviewBody:
          "Szczerze polecam, bardzo pozytywne, pomocne podejscie do wspolpracy i komunikacji.",
      },
      offers: {
        "@type": "Offer",
        url: `${domain}/#flota`,
        price: "600.00",
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        hasMerchantReturnPolicy: sharedReturnPolicy,
        shippingDetails: sharedShipping,
      },
    },
  ];

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Rekrutacja",
        url: `${domain}/#rekrutacja`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Flota",
        url: `${domain}/#flota`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Zarobki",
        url: `${domain}/#zarobki`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Kontakt",
        url: `${domain}/#kontakt`,
      },
    ],
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
