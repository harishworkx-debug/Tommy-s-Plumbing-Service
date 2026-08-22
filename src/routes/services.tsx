import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { img } from "@/data/images";
import { business } from "@/data/site";
import { CtaBand, LinkCard, PageHero, Section, SectionHead } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Plumbing Services in Bakersfield, CA | Tommy's Plumbing Service",
      description:
        "Full list of plumbing services in Bakersfield, CA: repairs, emergency plumbing, drain cleaning, sewer, leak detection, pipes and water heaters. Call 661-592-2721.",
      path: "/services/",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={img("services-overview")}
        alt="Plumbing tools and fittings laid out for service in Bakersfield"
        h1="Plumbing Services in Bakersfield, CA"
        lede="Ten core residential and commercial plumbing services, all delivered by a licensed California contractor available 24 hours a day."
      />
      <Section>
        <SectionHead title="Choose the Service You Need" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/${s.slug}-bakersfield-ca/`}
              title={`${s.name} in Bakersfield`}
              text={s.short}
              image={img(s.image)}
              alt={s.alt}
            />
          ))}
        </div>
      </Section>
      <CtaBand
        heading="Not Sure Which Service You Need?"
        text={`Call ${business.phoneDisplay} and describe what you are seeing. Diagnosis and estimates are free.`}
      />
    </>
  );
}
