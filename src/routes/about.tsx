import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/site";
import { img } from "@/data/images";
import { CtaBand, PageHero, Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Tommy's Plumbing Service | Bakersfield, CA Plumber",
      description:
        "Residential plumbing information and local provider connections in Bakersfield, CA. Call 661-592-2721.",
      path: "/about/",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={img("about-team")}
        alt="Tommy's Plumbing Service technicians beside a service van in Bakersfield"
        h1="About Tommy's Plumbing Service"
        lede="A residential connection service helping Bakersfield homeowners find independent local plumbing providers."
      />
      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Residential Information and Local Connections</h2>
          <p>
            Tommy&apos;s Plumbing Service helps homeowners in {business.city}, {business.state}
            request a connection with an independent local residential plumbing provider. Call{" "}
            {business.phoneDisplay} to ask about available provider options.
          </p>
          <p>
            Residential topics include everyday repairs, urgent plumbing needs, drain cleaning,
            sewer line service, leak detection, pipe repair and repiping, and water heater repair
            and installation.
          </p>
          <h2>How We Work</h2>
          <p>
            Independent providers set their own scope, pricing, scheduling, and service terms.
            Homeowners should ask questions and confirm those details before work begins.
          </p>
          <p>
            Homeowners should verify that the provider they hire furnishes the license and insurance
            required for the work being performed.
          </p>
          <h2>What You Can Count On</h2>
          <ul>
            <li>Residential homeowner focus</li>
            <li>Independent provider connections when available</li>
            <li>Provider participation and appointment capacity vary by location</li>
            <li>Homeowners verify provider licensing and insurance before hiring</li>
            <li>Credit cards, NFC mobile payments, Apple Pay and Google Pay accepted</li>
          </ul>
        </div>
      </Section>
      <CtaBand
        heading="Connect With a Local Residential Provider"
        text={`Call ${business.phoneDisplay} to request help connecting with an independent provider.`}
      />
    </>
  );
}
