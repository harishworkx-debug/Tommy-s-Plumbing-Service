import type { ServiceLocation } from "@/data/service-locations";
import type { Service } from "@/data/services";
import type { Location } from "@/data/locations";
import { img } from "@/data/images";
import { business } from "@/data/site";
import {
  AppLink,
  Breadcrumbs,
  CtaBand,
  Faqs,
  PageHero,
  Reveal,
  Section,
  SectionHead,
} from "./ui";
import { Jsonld } from "./Jsonld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function ServiceLocationPage({
  data,
  service,
  location,
}: {
  data: ServiceLocation;
  service: Service;
  location: Location;
}) {
  const path = `/${service.slug}-${location.slug}-ca/`;
  const h1 = `${service.name} in ${location.name}, CA`;

  return (
    <>
      <Jsonld data={serviceSchema(service.name, data.description, location.name, path)} />
      <Jsonld data={faqSchema(data.faqs)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: location.name, path: `/plumber-${location.slug}-ca/` },
          { name: service.name, path },
        ])}
      />
      <PageHero image={img(service.image)} alt={service.alt} h1={h1} lede={data.lede} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: `Plumber in ${location.name}`, path: `/plumber-${location.slug}-ca/` },
          { name: h1, path },
        ]}
      />

      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2>
            {service.name} for {location.name} Homes and Businesses
          </h2>
          {data.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <h2>What Makes {location.name} Different</h2>
          {data.local.map((l) => (
            <div key={l.h}>
              <h3>{l.h}</h3>
              <p>{l.p}</p>
            </div>
          ))}
          <h2>What You Get With Tommy&apos;s Plumbing Service</h2>
          <ul>
            <li>Licensed and insured California contractor, State License {business.license}</li>
            <li>Open 24 hours a day, 7 days a week for emergencies in {location.name}</li>
            <li>Free estimates with pricing explained before any work starts</li>
            <li>{business.discount}</li>
            <li>4.5 star ratings on both Google and Yahoo Local</li>
          </ul>
        </div>
      </Section>

      <Section tone="muted">
        <Faqs faqs={data.faqs} title={`${service.name} in ${location.name} FAQs`} />
      </Section>

      <Section>
        <SectionHead title="Keep Exploring" />
        <div className="grid gap-3 sm:grid-cols-2">
          <Reveal>
            <AppLink
              href={`/${service.slug}-bakersfield-ca/`}
              className="block rounded-xl border border-border bg-card px-5 py-4 font-semibold hover:border-primary"
            >
              {service.name} in Bakersfield, CA
            </AppLink>
          </Reveal>
          <Reveal>
            <AppLink
              href={`/plumber-${location.slug}-ca/`}
              className="block rounded-xl border border-border bg-card px-5 py-4 font-semibold hover:border-primary"
            >
              Plumber in {location.name}, CA
            </AppLink>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading={`${service.name} in ${location.name} — Call ${business.phoneDisplay}`}
        text="Licensed, insured and available around the clock with free estimates."
      />
    </>
  );
}
