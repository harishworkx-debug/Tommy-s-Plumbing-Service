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
        "Expert residential and commercial plumbing services in Bakersfield, CA. Call 661 689-3958.",
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
        lede="A fully licensed plumbing contractor serving residential and commercial properties in Bakersfield and Kern County."
      />
      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Serving Kern County Since 2011</h2>
          <p>
            Established in 2011, Tommy&apos;s Plumbing Service has been providing expert residential and commercial plumbing solutions to homeowners and businesses throughout {business.city} and surrounding communities for over a decade.
          </p>
          <p>
            When you call {business.phoneDisplay}, you are reaching a local company based right here in Bakersfield, not an out-of-state call center. Our dispatchers understand the area, and our technicians know the specific plumbing challenges of the San Joaquin Valley—from the hard mineral scale that ruins water heaters to the expansive soils that stress underground sewer lines.
          </p>
          
          <h2>Our Credentials & Commitment</h2>
          <p>
            Plumbing is essential to the health and safety of your property, which is why we take our professional credentials seriously. We are a fully licensed, bonded, and insured California plumbing contractor (<strong>License #957013</strong>). 
          </p>
          <p>
            We provide clear, upfront pricing before any work begins, so there are no surprise charges when the job is done. Furthermore, we stand behind our workmanship with robust warranties on our repairs and installations.
          </p>
          
          <h2>Complete Plumbing Solutions</h2>
          <p>
            Our experienced technicians are equipped to handle:
          </p>
          <ul>
            <li><strong>Residential & Commercial Plumbing:</strong> From single-family homes to commercial facilities.</li>
            <li><strong>24/7 Emergency Service:</strong> We respond around the clock to burst pipes, major leaks, and sewer backups.</li>
            <li><strong>Core Services:</strong> Drain cleaning, sewer camera inspections, leak detection, repiping, and water heater repair/installation.</li>
          </ul>

          <h2>Payment & Financing</h2>
          <p>
            We believe professional plumbing should be accessible. We offer flexible financing options for larger projects like sewer line replacements or tankless water heater installations. We also accept all major credit cards, NFC mobile payments, Apple Pay, and Google Pay.
          </p>
        </div>
      </Section>
      <CtaBand
        heading="Schedule Your Plumbing Service"
        text={`Call ${business.phoneDisplay} to speak with our team today.`}
      />
    </>
  );
}
