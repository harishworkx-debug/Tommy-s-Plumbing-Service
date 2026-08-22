import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business } from "@/data/site";
import { img } from "@/data/images";
import { CallButton, PageHero, Reveal, Section } from "@/components/site/ui";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Tommy's Plumbing Service | Bakersfield, CA | 661-592-2721",
      description:
        "Contact Tommy's Plumbing Service in Bakersfield, CA for 24/7 plumbing and a free estimate. Call 661-592-2721 or visit 3740 Sillect Ave #3c.",
      path: "/contact/",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={img("contact-estimate")}
        alt="Plumber providing a free written estimate to a Bakersfield homeowner"
        h1="Contact Tommy's Plumbing Service"
        lede="Call any hour of the day for emergency service, scheduling or a free estimate in Bakersfield and Kern County."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl">Reach Us Directly</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The fastest way to get help is a phone call. We answer 24 hours a day, ask the
              questions that matter and dispatch with the right equipment on the truck.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  <span className="block font-bold text-foreground">Phone</span>
                  <a href={business.phoneHref} className="text-primary">
                    {business.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  <span className="block font-bold text-foreground">Email</span>
                  <a href={`mailto:${business.email}`} className="text-primary">
                    {business.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  <span className="block font-bold text-foreground">Address</span>
                  {business.street}, {business.city}, {business.state} {business.zip}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  <span className="block font-bold text-foreground">Hours</span>
                  {business.hours}
                </span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              California State License {business.license} · {business.discount} · We accept{" "}
              {business.payments.join(", ")}.
            </p>
            <div className="mt-7">
              <CallButton />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <iframe
              src={business.mapEmbed}
              title="Map to Tommy's Plumbing Service in Bakersfield, CA"
              className="h-[28rem] w-full rounded-3xl border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
