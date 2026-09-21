import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { business } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { serviceLocations } from "@/data/service-locations";
import { AppLink } from "./ui";

export function Footer() {
  return (
    <footer className="surface-navy pt-16">
      <div className="container-page grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-extrabold text-navy-foreground">
            Tommy&apos;s Plumbing Service
          </p>
          <p className="mt-3 text-sm leading-relaxed text-navy-foreground/75">
            A service helping homeowners connect with independent local residential plumbing
            providers in Bakersfield and Kern County.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-navy-foreground/80">
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <a href={business.phoneHref} className="font-bold text-navy-foreground">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>
                {business.street}, {business.city}, {business.state} {business.zip}
              </span>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 text-accent" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Plumbing Services</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {services.map((s) => (
              <li key={s.slug}>
                <AppLink href={`/${s.slug}-bakersfield-ca/`} className="hover:text-accent">
                  {s.name} in Bakersfield
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">Service Areas</p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {locations.map((l) => (
              <li key={l.slug}>
                <AppLink href={`/plumber-${l.slug}-ca/`} className="hover:text-accent">
                  {l.name}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            Popular Local Services
          </p>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            {serviceLocations.map((sl) => {
              const s = services.find((x) => x.slug === sl.service);
              const l = locations.find((x) => x.slug === sl.location);
              if (!s || !l) return null;
              return (
                <li key={`${sl.service}-${sl.location}`}>
                  <AppLink href={`/${sl.service}-${sl.location}-ca/`} className="hover:text-accent">
                    {s.name} in {l.name}
                  </AppLink>
                </li>
              );
            })}
            <li>
              <AppLink href="/services/" className="hover:text-accent">
                All Plumbing Services
              </AppLink>
            </li>
            <li>
              <AppLink href="/service-areas/" className="hover:text-accent">
                All Service Areas
              </AppLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15 py-6">
        <div className="container-page flex flex-col gap-4 text-xs text-navy-foreground/65">
          <p>
            Disclaimer: Tommy&apos;s Plumbing Service is a free service to assist homeowners in
            connecting with local service providers. All contractors/providers are independent and
            Tommy&apos;s Plumbing Service does not warrant or guarantee any work performed. It is the
            responsibility of the homeowner to verify that the hired contractor furnishes the
            necessary license and insurance required for the work being performed. All persons
            depicted in a photo or video are actors or models and not contractors listed on
            Tommy&apos;s Plumbing Service.
          </p>
          <p>
            Same-day and 24/7 emergency services are subject to provider participation, location,
            technician availability, and demand. Availability is not guaranteed and may vary by
            market and appointment capacity.
          </p>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Tommy&apos;s Plumbing Service</p>
          <div className="flex gap-4">
            <AppLink href="/privacy-policy/" className="hover:text-accent">
              Privacy Policy
            </AppLink>
            <AppLink href="/terms-of-service/" className="hover:text-accent">
              Terms of Service
            </AppLink>
            <AppLink href="/contact/" className="hover:text-accent">
              Contact
            </AppLink>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
