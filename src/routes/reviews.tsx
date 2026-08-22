import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/site";
import { img } from "@/data/images";
import { CtaBand, PageHero, Reveal, Section, SectionHead, Stars } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews | Tommy's Plumbing Service, Bakersfield CA",
      description:
        "Tommy's Plumbing Service is rated 4.5 stars on Google and Yahoo Local by Bakersfield homeowners and businesses. Call 661-592-2721 for 24/7 service.",
      path: "/reviews/",
    }),
  component: ReviewsPage,
});

const reviews = [
  { s: "Google", q: "Called at night with a main line backing up into the shower. They walked me through what to do, showed up and cleared it. Clean, fast, fair price." },
  { s: "Yahoo Local", q: "Water heater died on a weekend. Honest advice about repair versus replacement and hot water back the same day." },
  { s: "Google", q: "Found a slab leak that two other companies could not pinpoint. Opened one small area instead of tearing up the floor." },
  { s: "Yahoo Local", q: "They maintain the grease line at our restaurant. No backups since we started on a schedule with them." },
  { s: "Google", q: "Replaced every seized angle stop in an older home and repaired the pressure regulator. Explained everything as they went." },
  { s: "Yahoo Local", q: "Fast response for a burst hose bib in July. Reasonable rate and they cleaned up completely." },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        image={img("reviews-hero")}
        alt="Satisfied Bakersfield homeowner with a plumber after a completed repair"
        h1="Customer Reviews"
        lede={`Rated 4.5 stars on Google (${business.google.count} ratings) and 4.5 stars on Yahoo Local (${business.yahoo.count} ratings).`}
      />
      <Section>
        <SectionHead eyebrow="4.5 stars" title="What Bakersfield Customers Say" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.q} delay={i * 0.05}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Stars rating={4.5} />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{r.q}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                  {r.s} · 4.5 stars
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand
        heading="See Why We Are Rated 4.5 Stars"
        text={`Call ${business.phoneDisplay} for 24/7 licensed plumbing and a free estimate.`}
      />
    </>
  );
}
