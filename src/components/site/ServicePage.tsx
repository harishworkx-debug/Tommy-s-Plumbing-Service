import { CheckCircle2, Wrench, ShieldCheck, Home } from "lucide-react";
import type { Service } from "@/data/services";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
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
} from "./ui";
import { Jsonld } from "./Jsonld";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/seo";

export function ServicePage({ service }: { service: Service }) {
  const path = `/${service.slug}-bakersfield-ca/`;
  const related = service.related
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(Boolean) as Service[];

  return (
    <>
      <Jsonld data={serviceSchema(service.name, service.description, "Bakersfield", path)} />
      <Jsonld data={faqSchema(service.faqs)} />
      <Jsonld
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.name, path },
        ])}
      />
      <PageHero image={img(service.image)} alt={service.alt} h1={service.h1} lede={service.lede} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: `${service.name} Bakersfield`, path },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="prose-local max-w-none">
            <h2>{service.name} You Can Rely On in Bakersfield</h2>
            {service.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}

            <h2>What Our {service.name} Service Includes</h2>
            <ul>
              {service.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <h2>Common Problems We Solve</h2>
            {service.problems.map((p) => (
              <div key={p.h}>
                <h3>{p.h}</h3>
                <p>{p.p}</p>
              </div>
            ))}

            <h2>Signs You Need {service.name}</h2>
            <ul>
              {service.signs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <h2>Why This Work Belongs With a Licensed Plumber</h2>
            <p>{service.professional}</p>

            <h2>Our Diagnostic Approach</h2>
            {service.diagnostic.map((d) => (
              <div key={d.h}>
                <h3>{d.h}</h3>
                <p>{d.p}</p>
              </div>
            ))}

            <h2>How We Perform the Work</h2>
            {service.work.map((w) => (
              <div key={w.h}>
                <h3>{w.h}</h3>
                <p>{w.p}</p>
              </div>
            ))}

            <h2>What to Expect on Service Day</h2>
            <p>{service.expect}</p>

            <h2>Maintenance Tips That Prevent Repeat Calls</h2>
            <ul>
              {service.maintenance.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <h2>Safety, Code and Warranty</h2>
            <p>{service.safety}</p>
          </div>

          <aside className="space-y-6">
            <Reveal className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <h3 className="text-lg">Benefits of Professional Service</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="surface-navy rounded-2xl p-6">
              <h3 className="text-lg text-navy-foreground">Need it handled today?</h3>
              <p className="mt-2 text-sm text-navy-foreground/75">
                Provider availability and pricing vary. Ask the independent provider for details before work begins.
              </p>
              <a
                href={business.phoneHref}
                className="mt-4 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
              >
                Call {business.phoneDisplay}
              </a>
            </Reveal>

            <Reveal className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-lg">
                <Home className="h-5 w-5 text-primary" /> Residential
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.residential}
              </p>
              <h3 className="mt-5 flex items-center gap-2 text-lg">
                <ShieldCheck className="h-5 w-5 text-primary" /> Verify the provider
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Providers are independent. Homeowners should verify required licensing, insurance,
                scope, pricing, and appointment availability before hiring.
              </p>
            </Reveal>

            <Reveal className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-lg">
                <ShieldCheck className="h-5 w-5 text-primary" /> Licensed in California
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Confirm the provider&apos;s required license and insurance before work begins.
              </p>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHead
          eyebrow="Service Areas"
          title={`${service.name} Across Bakersfield and Kern County`}
          sub="We bring the same equipment and standards to every community we serve."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {locations.map((l) => (
            <Reveal key={l.slug}>
              <a
                href={`/plumber-${l.slug}-ca/`}
                className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary"
              >
                <Wrench className="h-4 w-4 text-primary" />
                {l.name}
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Faqs faqs={service.faqs} title={`${service.name} FAQs`} />
      </Section>

      {related.length ? (
        <Section tone="muted">
          <SectionHead eyebrow="Related" title="Other Plumbing Services You May Need" />
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <LinkCard
                key={r.slug}
                href={`/${r.slug}-bakersfield-ca/`}
                title={`${r.name} in Bakersfield`}
                text={r.short}
                image={img(r.image)}
                alt={r.alt}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <CtaBand
        heading={`Get ${service.name} Scheduled in Bakersfield`}
        text={`Call ${business.phoneDisplay} to request help connecting with an independent local residential provider.`}
      />
    </>
  );
}
