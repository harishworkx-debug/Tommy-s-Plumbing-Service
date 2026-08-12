import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/data/site";
import { Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Tommy's Plumbing Service, Bakersfield CA",
      description:
        "How Tommy's Plumbing Service in Bakersfield, CA collects, uses and protects the information you share when requesting plumbing service.",
      path: "/privacy-policy/",
    }),
  component: () => (
    <Section>
      <div className="prose-local mx-auto max-w-3xl">
        <h1 className="text-4xl">Privacy Policy</h1>
        <p>
          Tommy&apos;s Plumbing Service collects only the information needed to schedule and
          perform plumbing work: your name, phone number, service address and a description of the
          problem. We use it to contact you, dispatch a technician, provide an estimate and keep a
          service record.
        </p>
        <h2>How we use your information</h2>
        <p>
          We do not sell or rent customer information. We share details only with team members
          performing your job or, where required, with suppliers ordering a specific part for your
          repair.
        </p>
        <h2>Phone calls and messages</h2>
        <p>
          Calling {business.phoneDisplay} or emailing {business.email} means we may contact you at
          that number or address about your service request.
        </p>
        <h2>Website data</h2>
        <p>
          This site may use standard analytics to understand traffic and improve content. That data
          is aggregated and is not used to identify individual visitors.
        </p>
        <h2>Questions</h2>
        <p>
          Contact us at {business.phoneDisplay} or {business.email}, or write to {business.street},{" "}
          {business.city}, {business.state} {business.zip}.
        </p>
      </div>
    </Section>
  ),
});
