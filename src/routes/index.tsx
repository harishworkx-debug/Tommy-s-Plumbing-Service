import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Clock,
  ShieldCheck,
  BadgeCheck,
  CreditCard,
  MapPin,
  Wrench,
  Droplets,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { serviceLocations } from "@/data/service-locations";
import { business } from "@/data/site";
import { img } from "@/data/images";
import {
  AppLink,
  CallButton,
  CtaBand,
  Faqs,
  LinkCard,
  Reveal,
  Section,
  SectionHead,
  Stars,
} from "@/components/site/ui";
import { Jsonld } from "@/components/site/Jsonld";
import { faqSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Plumber in Bakersfield, CA | Tommy's Plumbing Service | 661-592-2721",
      description:
        "Residential plumbing information and local provider connections in Bakersfield, CA. Drain cleaning, leak detection, sewer and water heater service. Call 661-592-2721.",
      path: "/",
    }),
  component: Home,
});

const homeFaqs = [
  {
    q: "How does the local provider connection work?",
    a: "Call 661-592-2721 to request help connecting with an independent local residential plumbing provider. Availability depends on provider participation, location, and appointment capacity.",
  },
  {
    q: "How is pricing handled?",
    a: "The independent provider explains scope and pricing before work begins. Ask the provider about any inspection or estimate charges before scheduling.",
  },
  {
    q: "How can homeowners verify provider credentials?",
    a: "Providers are independent. Homeowners are responsible for verifying that the provider has the license and insurance required for the work being performed.",
  },
  {
    q: "Which areas around Bakersfield do you serve?",
    a: "We serve Bakersfield plus Rosedale, Oildale, Lamont, Shafter, Wasco, Arvin, Taft, McFarland and Tehachapi, along with surrounding Kern County communities.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Credit cards, NFC mobile payments, Apple Pay and Google Pay.",
  },
  {
    q: "How fast can you get here for an emergency?",
    a: "Participating providers respond as quickly as possible. Call 661-592-2721 to connect with an available emergency plumber.",
  },
];

function Home() {
  return (
    <>
      <Jsonld data={faqSchema(homeFaqs)} />

      {/* 1. Hero */}
      <header className="relative overflow-hidden">
        <img
          src={img("hero-home")}
          alt="Licensed Bakersfield plumber repairing a kitchen sink supply line in a California home"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.2_0.06_258/0.96)_0%,oklch(0.23_0.07_258/0.85)_50%,oklch(0.24_0.07_258/0.4)_100%)]" />
        <div className="container-page relative py-24 md:py-32">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-accent">
                <Clock className="h-3.5 w-3.5" /> Residential provider connections
              </span>
              <h1 className="mt-5 text-4xl text-navy-foreground md:text-6xl">
                Residential Plumbing Connections in Bakersfield, CA
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">
                Tommy&apos;s Plumbing Service helps homeowners connect with independent local
                providers for residential drains, sewers, leaks, pipes, and water heaters across
                Bakersfield and Kern County.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <AppLink
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3.5 text-base font-bold text-navy-foreground hover:bg-navy-foreground/10"
                >
                  Get Connected
                </AppLink>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-navy-foreground/75">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" /> CA License {business.license}
                </span>
                <span className="flex items-center gap-2">
                  <Stars rating={4.5} /> 4.5 on Google &amp; Yahoo
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck className="h-4 w-4 text-accent" /> 10% senior &amp; military discount
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* 2. Trust strip */}
      <div className="border-b border-border bg-card">
        <div className="container-page grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Clock, t: "Provider availability", d: "Varies by location and capacity" },
            { icon: ShieldCheck, t: "Verify credentials", d: "Ask providers about licensing and insurance" },
            { icon: BadgeCheck, t: "Clear provider terms", d: "Discuss scope and pricing before work" },
            { icon: CreditCard, t: "Easy Payments", d: "Cards, Apple Pay, Google Pay" },
          ].map((i) => (
            <div key={i.t} className="flex items-center gap-3">
              <i.icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.6} />
              <div>
                <p className="text-sm font-bold text-card-foreground">{i.t}</p>
                <p className="text-xs text-muted-foreground">{i.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Intro */}
      <Section>
        <div className="prose-local mx-auto max-w-3xl text-center">
          <h2 className="!mt-0">Connecting Bakersfield Homeowners Since Day One</h2>
          <p>
            Tommy&apos;s Plumbing Service operates out of {business.street} in Bakersfield, and
            helps connect you with local professionals who understand this valley: hard mineral-rich water, triple-digit
            summers, expansive soils that shift under sewer laterals and slab-on-grade homes where
            a copper pinhole leak hides under concrete for months. We connect you with an independent local provider.
          </p>
          <p>
            That local focus matters because plumbing failures in Kern County follow patterns. In
            older neighborhoods near downtown and across the river in Oildale, galvanized supply
            lines have rusted internally for seventy years and clay sewer laterals sit under
            mature trees. In newer developments around Rosedale and the southwest, the piping is
            modern but slab building, high static pressure and heavy irrigation create their
            own failures. We carry parts and equipment for both, so the first visit is usually the
            only visit.
          </p>
        </div>
      </Section>

      {/* 4. Services grid */}
      <Section tone="muted" id="services">
        <SectionHead
          eyebrow="Plumbing Services"
          title="Everything We Repair, Replace and Install"
          sub="Residential plumbing information and provider connections across Bakersfield and Kern County."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <LinkCard
              key={s.slug}
              href={`/${s.slug}-bakersfield-ca/`}
              title={`${s.name} in Bakersfield`}
              text={s.short}
              image={img(s.image)}
              alt={s.alt}
            />
          ))}
        </div>
      </Section>

      {/* 5. Emergency */}
      <Section tone="navy">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-destructive/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">
              <AlertTriangle className="h-3.5 w-3.5" /> Emergency plumbing
            </span>
            <h2 className="mt-4 text-3xl text-navy-foreground md:text-4xl">
              Burst Pipe or Sewer Backup at 2 a.m.? We Answer.
            </h2>
            <p className="mt-4 leading-relaxed text-navy-foreground/80">
              Plumbing emergencies can happen at any time. A supply line lets go behind a
              washing machine, a water heater dumps forty gallons into a garage, or sewage backs up
              into a tub during a holiday weekend. We can help you request a connection with an
              independent local provider, subject to provider participation and availability.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-navy-foreground/80 sm:grid-cols-2">
              {[
                "Burst and leaking supply lines",
                "Sewer and main line backups",
                "Failed or flooding water heaters",
                "No water or no hot water calls",
                "Overflowing toilets and drains",
                "Slab leaks and hidden water loss",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CallButton />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={img("service-emergency-plumbing")}
              alt="Emergency plumber responding to a burst pipe at night in Bakersfield"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

      {/* 6. Residential services */}
      <Section>
        <SectionHead
          eyebrow="Who we serve"
          title="Residential Plumbing Help for Bakersfield Homeowners"
        />
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl">Residential services and local connections</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Homeowners can request help with faucets, toilets, drains, leaks, sewer lines, pipes,
            and water heaters. Tommy&apos;s Plumbing Service is a connection service, not the
            contractor performing the work. We help homeowners find an independent local provider
            and encourage them to confirm scope, pricing, licensing, insurance, and availability
            directly with that provider.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {[
              "Single-family homes, condos, and other residential properties",
              "Residential repairs, maintenance, and installations",
              "Help with urgent residential plumbing needs when providers participate",
              "Clear provider details before homeowners schedule work",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 7. Why choose */}
      <Section tone="muted">
        <SectionHead eyebrow="Why Tommy's" title="Six Reasons Bakersfield Keeps Our Number" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Local residential focus",
              d: "Information and connection help for homeowners seeking residential plumbing providers in Bakersfield and Kern County.",
            },
            {
              t: "Independent providers",
              d: "Providers are independent. Homeowners should verify required licensing, insurance, scope, and pricing before hiring.",
            },
            {
              t: "Clear next steps",
              d: "Request help connecting with a local provider and discuss the service details directly before work begins.",
            },
            {
              t: "Availability varies",
              d: "single-visit and emergency options depend on provider participation, location, technician availability, and demand.",
            },
            {
              t: "Diagnostics, not guesswork",
              d: "Camera inspection, acoustic leak location and pressure testing mean we repair the actual defect instead of trenching or opening walls on a hunch.",
            },
            {
              t: "Homeowner-first information",
              d: "Compare the provider's scope and pricing, and confirm the protections you expect before scheduling.",
            },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Wrench className="h-7 w-7 text-primary" strokeWidth={1.6} />
                <h3 className="mt-4 text-lg">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. Process */}
      <Section>
        <SectionHead eyebrow="Our process" title="What Happens From Your Call to Cleanup" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            ["Call us", "Tell us what you are seeing. We ask targeted questions so the right parts and equipment are on the truck."],
            ["On-site diagnosis", "We inspect the failure and the system around it — pressure, valves, venting and related fixtures."],
            ["pricing discussion", "You get plain-language options and pricing before a single fitting is loosened."],
            ["The work", "Performed to California plumbing code with quality materials and your home protected throughout."],
            ["Test and walkthrough", "We test under real conditions, clean up completely and explain what to watch for."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-display text-3xl font-extrabold text-primary/30">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 9. Local conditions long-form */}
      <Section tone="muted">
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Why Plumbing Fails Differently in Bakersfield</h2>
          <p>
            Four local conditions cause the majority of the calls we take. Understanding them helps
            homeowners catch problems early instead of paying for water damage.
          </p>
          <h3>Hard water and mineral scale</h3>
          <p>
            Kern County water carries a heavy mineral load. Scale collects inside aerators, shower
            heads, valve cartridges, angle stops and water heater tanks. In a heater, sediment
            settles over the burner and insulates it from the water, lengthening every heating
            cycle, driving up gas use and shortening tank life by years. In fixtures, scale chews
            through rubber seats and stiffens cartridges until they drip. Annual flushing and
            periodic aerator cleaning are the cheapest maintenance available here.
          </p>
          <h3>Slab-on-grade building</h3>
          <p>
            Most subdivisions built since the 1970s sit on concrete slabs with copper supply lines
            run underneath. Over decades those lines develop pinhole leaks from abrasion against
            the slab and from water chemistry. The symptoms are subtle: a warm spot on the floor, a
            faint running sound with everything off, an unexplained jump in the water bill. We
            confirm loss at the meter, isolate zones and pinpoint acoustically so the concrete
            opening stays as small as possible, or reroute overhead when that is the better value.
          </p>
          <h3>Expansive soils and sewer laterals</h3>
          <p>
            Valley soils swell and shrink with seasonal moisture. That movement stresses buried
            sewer laterals, opening joints and creating bellies where solids collect. Add mature
            trees over clay pipe in older neighborhoods and root intrusion becomes the leading
            cause of repeat main line stoppages. A camera inspection tells you which of those it
            actually is before anyone digs.
          </p>
          <h3>Extreme summer heat</h3>
          <p>
            Triple-digit summers punish hose bibs, irrigation valves, exposed lines and washing
            machine supply hoses. Rubber hoses harden and split at the crimp, and outdoor plastic
            becomes brittle. Replacing braided stainless supply hoses every few years costs almost
            nothing and prevents one of the most damaging failures we respond to.
          </p>
        </div>
      </Section>

      {/* 10. Service areas */}
      <Section>
        <SectionHead
          eyebrow="Service areas"
          title="Communities We Serve Across Kern County"
          sub="Bakersfield and nine nearby cities, each with its own dedicated plumbing page."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {locations.map((l) => (
            <LinkCard
              key={l.slug}
              href={`/plumber-${l.slug}-ca/`}
              title={l.name}
              text={l.lede.slice(0, 120) + "…"}
              image={img(l.image)}
              alt={l.alt}
            />
          ))}
        </div>
      </Section>

      {/* 11. Popular local pages */}
      <Section tone="muted">
        <SectionHead title="Popular Service and Neighborhood Combinations" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceLocations.map((sl) => {
            const s = services.find((x) => x.slug === sl.service);
            const l = locations.find((x) => x.slug === sl.location);
            if (!s || !l) return null;
            return (
              <Reveal key={`${sl.service}-${sl.location}`}>
                <AppLink
                  href={`/${sl.service}-${sl.location}-ca/`}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  {s.name} in {l.name}, CA
                </AppLink>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* 12. Homeowner notice */}
      <Section>
        <SectionHead
          eyebrow="For homeowners"
          title="Connect with an independent local provider"
          sub="Provider participation, service scope, pricing, and appointment availability vary by location."
        />
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 text-center text-sm leading-relaxed text-muted-foreground">
          This site does not perform plumbing work or guarantee provider results. Before hiring,
          ask the independent provider about licensing, insurance, pricing, scheduling, and the
          work included.
        </div>
      </Section>



      {/* 14. Maintenance tips */}
      <Section>
        <div className="prose-local mx-auto max-w-3xl">
          <h2 className="!mt-0">Preventative Plumbing Maintenance for Bakersfield Homes</h2>
          <p>
            Most of the emergencies we respond to were preventable. A short seasonal routine keeps
            the majority of failures from ever reaching the point of a 2 a.m. phone call.
          </p>
          <ul>
            <li>Flush the water heater once a year to clear sediment, and check the temperature and pressure relief valve while you are there.</li>
            <li>Test static water pressure at a hose bib. Anything consistently above 80 psi is stressing every fixture in the house and usually points to a failing regulator.</li>
            <li>Replace rubber washing machine hoses with braided stainless lines, and exercise shut-off valves so they do not seize in place.</li>
            <li>Keep grease, coffee grounds, rice and fibrous scraps out of kitchen drains; run hot water for thirty seconds after heavy use.</li>
            <li>Watch for slow drains that return within weeks — that pattern almost always means a defect in the line, not a simple clog.</li>
            <li>Camera the sewer lateral if you have mature trees and clay pipe, especially before buying or remodeling.</li>
            <li>Check under sinks and behind toilets monthly for staining, swelling cabinet bases or mineral trails on fittings.</li>
          </ul>
        </div>
      </Section>

      {/* 15. Water quality / hard water */}
      <Section tone="muted">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Droplets className="h-9 w-9 text-primary" strokeWidth={1.6} />
            <h2 className="mt-3 text-3xl md:text-4xl">Hard Water Is the Quiet Cost in Every Kern County Home</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Scale does not announce itself. It builds a fraction of a millimeter at a time inside
              valve bodies, heater tanks and supply lines until flow drops, cycles lengthen and
              components fail early. Households here typically see water heaters age faster,
              cartridges drip sooner and aerators clog more often than the same fixtures would in a
              soft water region. Regular flushing, correct pressure and occasional descaling
              recover most of that lost life for a fraction of replacement cost.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <AppLink
                href="/water-heater-repair-bakersfield-ca/"
                className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold hover:border-primary"
              >
                Water Heater Repair in Bakersfield
              </AppLink>
              <AppLink
                href="/pipe-repair-bakersfield-ca/"
                className="rounded-full border border-border bg-card px-5 py-3 text-sm font-bold hover:border-primary"
              >
                Pipe Repair in Bakersfield
              </AppLink>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <img
              src={img("service-water-heater-repair")}
              alt="Plumber servicing a scaled residential water heater in Bakersfield"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

      {/* 16. Diagnostics tech */}
      <Section>
        <SectionHead
          eyebrow="Equipment"
          title="Diagnostics That Replace Guesswork"
          sub="The right tool on the first visit is what keeps repairs small."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Sewer camera inspection", "High-resolution push cameras with locating so we know the exact depth and position of a defect before anything is opened."],
            ["Acoustic leak detection", "Listening equipment that isolates pressurized leaks under slabs and behind walls to a small area."],
            ["Hydro jetting", "High-pressure scouring that removes grease and scale from the pipe wall instead of punching a hole through it."],
            ["Pressure and flow testing", "Meter checks, static pressure readings and zone isolation that confirm the cause instead of assuming it."],
          ].map((c, i) => (
            <Reveal key={c[0]} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="text-lg">{c[0]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 17. Warning signs */}
      <Section tone="navy">
        <SectionHead
          invert
          eyebrow="Warning signs"
          title="Call a Plumber Before These Become Emergencies"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "A water bill that climbs without a change in usage",
            "Warm spots on a slab floor or a running sound with all taps off",
            "Gurgling drains or a toilet that bubbles when the washer drains",
            "Sewage odor in the yard, garage or lowest bathroom",
            "Discolored or rusty water at multiple fixtures",
            "Water pressure that drops off across the whole house",
            "Repeated clogs in the same fixture within weeks",
            "Popping or rumbling from the water heater tank",
            "Staining, swelling or soft spots under sinks and around toilets",
          ].map((s, i) => (
            <Reveal key={s} delay={i * 0.03}>
              <div className="flex gap-3 rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3 text-sm text-navy-foreground/85">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {s}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CallButton />
        </div>
      </Section>

      {/* 18. About preview */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={img("about-team")}
              alt="Tommy's Plumbing Service team standing beside a service van in Bakersfield"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl md:text-4xl">About Tommy&apos;s Plumbing Service</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Tommy&apos;s Plumbing Service helps homeowners request connections with independent
              local residential providers in {business.city}, {business.state}. This site does not
              perform plumbing work or guarantee provider results.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Homeowners can ask providers about diagnostics, materials, scope, pricing, licensing,
              insurance, and the expected schedule before authorizing work.
            </p>
            <div className="mt-7">
              <AppLink
                href="/about/"
                className="inline-flex rounded-full bg-navy px-6 py-3.5 text-sm font-bold text-navy-foreground"
              >
                More About Our Company
              </AppLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 19. FAQ */}
      <Section tone="muted">
        <Faqs faqs={homeFaqs} title="Bakersfield Plumbing Questions, Answered" />
      </Section>

      {/* 20. Map + contact */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">Call About Residential Provider Connections</h2>
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
          </Reveal>
          <Reveal delay={0.08}>
            <iframe
              src={business.mapEmbed}
              title="Map to Tommy's Plumbing Service in Bakersfield, CA"
              className="h-80 w-full rounded-3xl border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        heading="Talk to a Local Residential Provider"
        text={`Call ${business.phoneDisplay} to request help connecting with an independent provider.`}
      />
    </>
  );
}
