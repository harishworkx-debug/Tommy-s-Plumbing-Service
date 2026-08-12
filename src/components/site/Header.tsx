import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { business } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { AppLink } from "./ui";

const servicePath = (slug: string) => `/${slug}-bakersfield-ca/`;
const locationPath = (slug: string) => `/plumber-${slug}-ca/`;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="surface-navy hidden py-2 text-sm md:block">
        <div className="container-page flex items-center justify-between">
          <p className="text-navy-foreground/80">
            {business.street}, {business.city}, {business.state} {business.zip} · CA License{" "}
            {business.license}
          </p>
          <p className="text-navy-foreground/80">
            Open 24/7 · 10% senior &amp; military discount
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
          <AppLink href="/" className="flex flex-col leading-tight">
            <span className="font-display text-lg font-extrabold text-foreground">
              Tommy&apos;s Plumbing Service
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Bakersfield, CA · 24/7
            </span>
          </AppLink>

          <nav className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary">
                Plumbing Services <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-1/2 z-50 w-[46rem] -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-lift)]">
                  {services.map((s) => (
                    <AppLink
                      key={s.slug}
                      href={servicePath(s.slug)}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-popover-foreground hover:bg-secondary"
                    >
                      {s.name} in Bakersfield
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary">
                Service Areas <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-1/2 z-50 w-[34rem] -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-lift)]">
                  {locations.map((l) => (
                    <AppLink
                      key={l.slug}
                      href={locationPath(l.slug)}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-popover-foreground hover:bg-secondary"
                    >
                      Plumber in {l.name}
                    </AppLink>
                  ))}
                </div>
              </div>
            </div>

            <AppLink href="/about/" className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-secondary">
              About
            </AppLink>
            <AppLink href="/reviews/" className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-secondary">
              Reviews
            </AppLink>
            <AppLink href="/contact/" className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-secondary">
              Contact
            </AppLink>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground sm:inline-flex"
            >
              <Phone className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-border p-2.5 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="max-h-[75vh] overflow-y-auto border-t border-border bg-background lg:hidden">
            <div className="container-page py-4">
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-primary">
                Plumbing Services
              </p>
              <div className="mt-2 grid gap-1">
                {services.map((s) => (
                  <AppLink
                    key={s.slug}
                    href={servicePath(s.slug)}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-semibold hover:bg-secondary"
                  >
                    {s.name} in Bakersfield
                  </AppLink>
                ))}
              </div>
              <p className="mt-5 text-xs font-bold uppercase tracking-widest text-primary">
                Service Areas
              </p>
              <div className="mt-2 grid gap-1">
                {locations.map((l) => (
                  <AppLink
                    key={l.slug}
                    href={locationPath(l.slug)}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-semibold hover:bg-secondary"
                  >
                    Plumber in {l.name}
                  </AppLink>
                ))}
              </div>
              <div className="mt-5 grid gap-1">
                {[
                  ["/about/", "About Tommy's Plumbing"],
                  ["/reviews/", "Customer Reviews"],
                  ["/contact/", "Contact & Free Estimate"],
                ].map(([href, label]) => (
                  <AppLink
                    key={href as string}
                    href={href as string}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm font-semibold hover:bg-secondary"
                  >
                    {label}
                  </AppLink>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}
