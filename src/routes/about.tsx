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
        "Licensed and insured plumbing contractor in Bakersfield, CA, open 24/7 with free estimates. California State License #957013. Call 661-592-2721.",
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
        lede="A local, licensed and insured plumbing contractor serving Bakersfield homes and businesses around the clock."
      />
      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Local, Licensed and Accountable</h2>
          <p>
            Tommy&apos;s Plumbing Service works out of {business.street}, {business.city},{" "}
            {business.state} {business.zip}. We are a licensed and insured residential and
            commercial plumbing contractor operating under California State License{" "}
            {business.license}, and we answer the phone at {business.phoneDisplay} 24 hours a day,
            7 days a week.
          </p>
          <p>
            Our work covers the full range of plumbing: everyday repairs, emergency response, drain
            cleaning, sewer camera inspection and lateral repair, leak detection, pipe repair and
            repiping, water heater repair and installation, and commercial service for restaurants,
            offices, retail and multi-unit properties.
          </p>
          <h2>How We Work</h2>
          <p>
            We diagnose before we quote. That means measuring pressure, isolating zones, running a
            camera or using acoustic equipment when it is warranted, and then explaining what we
            found in language that makes the decision obvious. Estimates are free and pricing is
            presented before the first fitting is loosened.
          </p>
          <p>
            We use quality materials — brass valves, braided stainless supplies, manufacturer-matched
            components — because the cheapest part on the shelf becomes the next service call. Work
            is performed to current California plumbing code so it holds up at inspection and at
            resale.
          </p>
          <h2>What You Can Count On</h2>
          <ul>
            <li>Open 24 hours a day, 7 days a week, including holidays</li>
            <li>Licensed and insured under California State License {business.license}</li>
            <li>Free estimates on every job</li>
            <li>{business.discount}</li>
            <li>Credit cards, NFC mobile payments, Apple Pay and Google Pay accepted</li>
            <li>4.5 star ratings on both Google and Yahoo Local</li>
          </ul>
        </div>
      </Section>
      <CtaBand
        heading="Work With a Local Bakersfield Plumber"
        text={`Call ${business.phoneDisplay} for a free estimate today.`}
      />
    </>
  );
}
