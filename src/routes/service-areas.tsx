import { createFileRoute } from "@tanstack/react-router";
import { locations } from "@/data/locations";
import { img } from "@/data/images";
import { business } from "@/data/site";
import { CtaBand, LinkCard, PageHero, Section, SectionHead } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/service-areas")({
  head: () =>
    pageHead({
      title: "Plumbing Service Areas in Kern County | Tommy's Plumbing Service",
      description:
        "Tommy's Plumbing Service covers Bakersfield, Rosedale, Oildale, Lamont, Shafter, Wasco, Arvin, Taft, McFarland and Tehachapi. Call 661 689-3958.",
      path: "/service-areas/",
    }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        image={img("loc-bakersfield")}
        alt="Bakersfield California residential street served by Tommy's Plumbing Service"
        h1="Plumbing Service Areas Across Kern County"
        lede="We provide residential plumbing information and help homeowners request local provider connections across Bakersfield and nine surrounding communities."
      />
      <Section>
        <SectionHead title="Pick Your City" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <LinkCard
              key={l.slug}
              href={`/plumber-${l.slug}-ca/`}
              title={`Plumber in ${l.name}, CA`}
              text={l.lede.slice(0, 130) + "…"}
              image={img(l.image)}
              alt={l.alt}
            />
          ))}
        </div>
      </Section>
      <CtaBand
        heading="Outside These Cities?"
        text={`Call ${business.phoneDisplay} — we cover much of Kern County and will tell you straight away if we can help.`}
      />
    </>
  );
}
