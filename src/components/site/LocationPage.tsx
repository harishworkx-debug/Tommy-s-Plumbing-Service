import { CheckCircle2, MapPin } from "lucide-react";
import type { Location } from "@/data/locations";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { serviceLocations } from "@/data/service-locations";
import { img } from "@/data/images";
import { business } from "@/data/site";
import {
  Breadcrumbs,
  CtaBand,
  Faqs,
  LinkCard,
  PageHero,
  Reveal,
  Section,
  SectionHead,
  AppLink,
} from "./ui";
import { Jsonld } from "./Jsonld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function LocationPage({ location }: { location: Location }) {
  const path = `/plumber-${location.slug}-ca/`;
  const featured = location.featuredServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);
  const nearby = location.nearby
    .map((s) => locations.find((x) => x.slug === s))
    .filter(Boolean) as Location[];
  const combos = serviceLocations.filter((sl) => sl.location === location.slug);

  const blocks: { h: string; p: string }[] = [
    { h: `Residential Plumbing in ${location.name}`, p: location.residential },
    { h: `Commercial Plumbing in ${location.name}`, p: location.commercial },
    { h: `24/7 Emergency Plumber in ${location.name}`, p: location.emergency },
    { h: `Drain Cleaning in ${location.name}`, p: location.drains },
    { h: `Sewer Line Service in ${location.name}`, p: location.sewer },
    { h: `Water Heaters in ${location.name}`, p: location.waterHeaters },
    { h: `Leak Detection in ${location.name}`, p: location.leaks },
    { h: `Pipe Repair and Repiping in ${location.name}`, p: location.pipes },
  ];

  return (
    <>
      <Jsonld
        data={serviceSchema(
          `Plumbing Services in ${location.name}`,
          location.description,
          location.name,
          path,
        )}
      />
      <Jsonld data={faqSchema(location.faqs)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas/" },
          { name: location.name, path },
        ])}
      />
      <PageHero image={img(location.image)} alt={location.alt} h1={location.h1} lede={location.lede} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas/" },
          { name: `Plumber in ${location.name}`, path },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="prose-local max-w-none">
            <h2>Your Local Plumber in {location.name}, California</h2>
            {location.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2>Plumbing Characteristics of {location.name}</h2>
            <p>{location.character}</p>

            <h2>Areas We Cover</h2>
            <p>{location.coverage}</p>

            {blocks.map((b) => (
              <div key={b.h}>
                <h2>{b.h}</h2>
                <p>{b.p}</p>
              </div>
            ))}

            <h2>Plumbing Problems We See Most in {location.name}</h2>
            {location.problems.map((p) => (
              <div key={p.h}>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}

            <h2>How a Service Call Works</h2>
            {location.process.map((p) => (
              <div key={p.h}>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg">Why {location.name} Calls Tommy&apos;s</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {location.whyLocal.map((w) => (
                  <li key={w} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {w}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="surface-navy rounded-2xl p-6">
              <h3 className="text-lg text-navy-foreground">
                Plumber on call in {location.name} right now
              </h3>
              <p className="mt-2 text-sm text-navy-foreground/75">
                Open 24 hours a day, 7 days a week. Free estimates before work begins.
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
              >
                Call {business.phoneDisplay}
              </a>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          eyebrow={`${location.name}, CA`}
          title={`Plumbing Services We Provide in ${location.name}`}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) =>
            s ? (
              <LinkCard
                key={s.slug}
                href={`/${s.slug}-bakersfield-ca/`}
                title={`${s.name} in ${location.name}`}
                text={s.short}
                image={img(s.image)}
                alt={s.alt}
              />
            ) : null,
          )}
        </div>
      </Section>

      {combos.length ? (
        <Section>
          <SectionHead title={`Dedicated ${location.name} Service Pages`} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {combos.map((c) => {
              const s = services.find((x) => x.slug === c.service);
              if (!s) return null;
              return (
                <AppLink
                  key={c.service}
                  href={`/${c.service}-${location.slug}-ca/`}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary"
                >
                  {s.name} in {location.name}, CA
                </AppLink>
              );
            })}
          </div>
        </Section>
      ) : null}

      <Section tone="muted">
        <Faqs faqs={location.faqs} title={`Plumbing FAQs for ${location.name}`} />
      </Section>

      <Section>
        <SectionHead title="Nearby Communities We Serve" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nearby.map((n) => (
            <AppLink
              key={n.slug}
              href={`/plumber-${n.slug}-ca/`}
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary"
            >
              <MapPin className="h-4 w-4 text-primary" /> Plumber in {n.name}, CA
            </AppLink>
          ))}
        </div>
      </Section>

      <CtaBand
        heading={`Need a Plumber in ${location.name} Today?`}
        text={`Call ${business.phoneDisplay} for 24/7 licensed plumbing service and a free estimate.`}
      />
    </>
  );
}
