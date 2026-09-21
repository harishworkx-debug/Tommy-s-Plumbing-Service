import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/site";
import { Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-service")({
  head: () =>
    pageHead({
      title: "Terms of Service | Tommy's Plumbing Service, Bakersfield CA",
      description:
        "Terms covering estimates, scheduling, workmanship and payment for plumbing services provided by Tommy's Plumbing Service in Bakersfield, CA.",
      path: "/terms-of-service/",
    }),
  component: () => (
    <Section>
      <div className="prose-local mx-auto max-w-3xl">
        <h1 className="text-4xl">Terms of Service</h1>
        <h2>Estimates</h2>
        <p>
          Estimates are based on the conditions visible at the time of inspection.
          Concealed conditions — for example damage inside a wall or under a slab — may change
          scope, and we will review any change with you before proceeding.
        </p>
        <h2>Scheduling and emergency service</h2>
        <p>
          Provider availability varies. Emergency response times depend on current call volume and
          travel distance within Kern County.
        </p>
        <h2>Workmanship and licensing</h2>
        <p>
          Work is performed by independent service providers. Homeowners should verify the provider&apos;s
          license, insurance, and any warranties offered before the job begins.
        </p>
        <h2>Payment</h2>
        <p>
          Payment is due on completion unless agreed otherwise in writing. We accept{" "}
          {business.payments.join(", ")}. {business.discount}.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms: {business.phoneDisplay} or {business.email}.
        </p>
      </div>
    </Section>
  ),
});
