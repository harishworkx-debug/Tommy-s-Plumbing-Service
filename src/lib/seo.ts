import { SITE_URL, business } from "@/data/site";

export interface MetaInput {
  title: string;
  description: string;
  path: string; // must start and end with "/"
  image?: string;
}

export function pageHead({ title, description, path, image }: MetaInput) {
  const canonical = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { name: "twitter:card", content: "summary_large_image" },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PlumbingService",
  name: business.name,
  image: `${SITE_URL}/og-image.jpg`,
  "@id": `${SITE_URL}/#business`,
  url: SITE_URL,
  telephone: business.phoneDisplay,
  email: business.email,
  description: "Tommy's Plumbing Service provides residential and commercial plumbing repair, drain cleaning, sewer services, leak detection and water heater services in Bakersfield, CA.",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "US",
  },
};

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, areaName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: `${areaName}, CA` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
