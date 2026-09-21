import { createFileRoute } from "@tanstack/react-router";
import { img } from "@/data/images";
import { CtaBand, PageHero, Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews | Tommy's Plumbing Service, Bakersfield CA",
      description:
        "Residential plumbing information and local provider connections for Bakersfield homeowners. Call 661-592-2721.",
      path: "/reviews/",
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        image={img("reviews-hero")}
        alt="Satisfied Bakersfield homeowner with a plumber after a completed repair"
        h1="Customer Reviews"
        lede="This site helps homeowners request connections with independent local residential plumbing providers."
      />
      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Before hiring a provider</h2>
          <p>
            Providers are independent. Ask about licensing, insurance, scope, pricing, scheduling,
            and any service guarantees before authorizing work. This site does not perform plumbing
            work and does not warrant or guarantee provider results.
          </p>
        </div>
      </Section>
      <CtaBand
        heading="Request a Local Residential Connection"
        text="Call to ask about connecting with an independent provider in your area."
      />
    </>
  );
}
