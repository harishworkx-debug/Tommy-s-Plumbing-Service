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
  Star,
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
      title: "Plumber in Bakersfield, CA | Tommy's Plumbing Service | 661-319-9432",
      description:
        "Licensed 24/7 plumber in Bakersfield, CA. Emergency plumbing, drain cleaning, leak detection, sewer and water heater service. Free estimates. Call 661-319-9432.",
      path: "/",
    }),
  component: Home,
});

const homeFaqs = [
  {
    q: "Are you available 24 hours a day in Bakersfield?",
    a: "Yes. Tommy's Plumbing Service is open 24 hours a day, 7 days a week, including nights, weekends and holidays. Call 661-319-9432 and you will reach a real local plumbing company, not an answering service that routes work elsewhere.",
  },
  {
    q: "Do you charge for estimates?",
    a: "No. Estimates are free. We diagnose the problem, explain what is causing it, present your options and give you pricing before any work begins.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are a licensed and insured California plumbing contractor operating under State License #957013 for both residential and commercial plumbing work.",
  },
  {
    q: "Do you offer any discounts?",
    a: "We offer a 10% discount for seniors and military personnel on plumbing services.",
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
    q: "Do you handle commercial plumbing?",
    a: "Yes. We serve restaurants, offices, retail centers, salons, medical suites and multi-unit rental properties across Bakersfield, including scheduled preventative drain maintenance.",
  },
  {
    q: "How fast can you get here for an emergency?",
    a: "For emergencies inside Bakersfield we dispatch as soon as a truck is free, usually the same hour. Call 661-319-9432 and we will walk you through shutting the water off while we are on the way.",
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
                <Clock className="h-3.5 w-3.5" /> Open 24 hours · 7 days a week
              </span>
              <h1 className="mt-5 text-4xl text-navy-foreground md:text-6xl">
                Licensed Plumber in Bakersfield, CA
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">
                Tommy&apos;s Plumbing Service handles residential, commercial and emergency
                plumbing across Bakersfield and Kern County — drains, sewers, leaks, pipes and
                water heaters — with free estimates and workmanship that lasts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <AppLink
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3.5 text-base font-bold text-navy-foreground hover:bg-navy-foreground/10"
                >
                  Get a Free Estimate
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
            { icon: Clock, t: "24/7 Availability", d: "Nights, weekends and holidays" },
            { icon: ShieldCheck, t: "Licensed & Insured", d: `State License ${business.license}` },
            { icon: BadgeCheck, t: "Free Estimates", d: "Pricing before work begins" },
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
          <h2 className="!mt-0">Bakersfield&apos;s Local Plumbing Company Since Day One</h2>
          <p>
            Tommy&apos;s Plumbing Service operates out of {business.street} in Bakersfield, and
            everything we do is built around this valley: hard mineral-rich water, triple-digit
            summers, expansive soils that shift under sewer laterals and slab-on-grade homes where
            a copper pinhole leak hides under concrete for months. We are not a franchise routing
            calls to whoever is available. When you call {business.phoneDisplay}, you reach the
            company that shows up.
          </p>
          <p>
            That local focus matters because plumbing failures in Kern County follow patterns. In
            older neighborhoods near downtown and across the river in Oildale, galvanized supply
            lines have rusted internally for seventy years and clay sewer laterals sit under
            mature trees. In newer developments around Rosedale and the southwest, the piping is
            modern but slab construction, high static pressure and heavy irrigation create their
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
          sub="Ten core services covering residential and commercial plumbing across Bakersfield and Kern County."
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
              Plumbing emergencies do not keep business hours. A supply line lets go behind a
              washing machine, a water heater dumps forty gallons into a garage, or sewage backs up
              into a tub during a holiday weekend. We are open 24 hours a day and stay on the phone
              with you to find the right shut-off valve before the truck arrives, because minutes
              of containment save thousands in restoration.
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

      {/* 6. Residential vs commercial */}
      <Section>
        <SectionHead
          eyebrow="Who we serve"
          title="Residential and Commercial Plumbing Under One License"
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl">Residential Plumbing</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Homes across Bakersfield call us for dripping faucets, running toilets, seized angle
              stops, garbage disposals, shower cartridges, slab leaks, sewer backups, repiping and
              water heater replacement. We work clean, protect finished surfaces and explain what
              failed and why so it does not happen again next season.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "Single family homes, condos and mobile homes",
                "Remodel fixture installation and rough-in repairs",
                "Pre-sale plumbing inspections and camera reports",
                "Landlord and rental property maintenance",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl">Commercial Plumbing</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Restaurants, offices, retail centers, salons, medical suites and multi-unit
              properties need plumbing that does not interrupt revenue. We schedule around service
              hours, jet grease-heavy kitchen lines on a preventative cycle and keep documentation
              that satisfies inspections and property management requirements.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {[
                "Grease line hydro jetting and maintenance programs",
                "Commercial water heaters and recirculation systems",
                "Backflow, fixture and ADA-compliant installations",
                "After-hours service so doors stay open",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* 7. Why choose */}
      <Section tone="muted">
        <SectionHead eyebrow="Why Tommy's" title="Six Reasons Bakersfield Keeps Our Number" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              t: "A truly local company",
              d: "Based on Sillect Avenue in Bakersfield. Your call is answered by the company doing the work, not a national dispatch center.",
            },
            {
              t: "Licensed, bonded and insured",
              d: `California State License ${business.license} covering residential and commercial plumbing, with every job performed to current code.`,
            },
            {
              t: "Free, honest estimates",
              d: "We diagnose before we price, show you the failure, and give you repair and replacement options with no pressure.",
            },
            {
              t: "Open 24 hours a day",
              d: "Nights, weekends and holidays included. Emergencies get the same technicians and the same standards as scheduled work.",
            },
            {
              t: "Diagnostics, not guesswork",
              d: "Camera inspection, acoustic leak location and pressure testing mean we repair the actual defect instead of trenching or opening walls on a hunch.",
            },
            {
              t: "Respect for your home and budget",
              d: `Drop cloths, clean work areas, clear explanations, and a ${business.discount.toLowerCase()}.`,
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
            ["Free estimate", "You get plain-language options and pricing before a single fitting is loosened."],
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
          <h3>Slab-on-grade construction</h3>
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

      {/* 12. Reviews */}
      <Section>
        <SectionHead
          eyebrow="Reviews"
          title="Rated 4.5 Stars on Google and Yahoo"
          sub={`${business.google.count} Google ratings and ${business.yahoo.count} Yahoo Local ratings from Bakersfield homeowners and businesses.`}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              n: "Google · 4.5 stars",
              q: "Called late in the evening with water coming up in the shower. They talked me through what to do, arrived that night and cleared the main line. Straightforward pricing and no mess left behind.",
            },
            {
              n: "Yahoo Local · 4.5 stars",
              q: "Water heater quit on a Sunday. They diagnosed it honestly, told me the tank was worth replacing rather than repairing, and had hot water back the same day.",
            },
            {
              n: "Google · 4.5 stars",
              q: "Used them for a restaurant kitchen line that kept backing up. They jetted it properly and set up a maintenance schedule. Haven't had a backup since.",
            },
          ].map((r, i) => (
            <Reveal key={r.n} delay={i * 0.06}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <Stars rating={4.5} />
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{r.q}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">
                  {r.n}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <AppLink
            href="/reviews/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold hover:border-primary"
          >
            Read Customer Reviews
          </AppLink>
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
              We are a licensed and insured residential and commercial plumbing contractor working
              out of {business.street}, {business.city}, {business.state} {business.zip}. Our
              reputation was built one repair at a time on straightforward pricing, clean work and
              answering the phone when other companies close for the night.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Every technician works to California plumbing code under State License{" "}
              {business.license}. Whether the job is a fifteen-minute valve replacement or a full
              sewer lateral repair, you get the same diagnostics, the same materials standard and
              the same explanation of what we found.
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
            <h2 className="text-3xl md:text-4xl">Visit or Call Our Bakersfield Office</h2>
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
              <li className="flex gap-3">
                <Star className="mt-0.5 h-5 w-5 text-primary" />
                <span>
                  <span className="block font-bold text-foreground">Ratings</span>
                  4.5 stars on Google ({business.google.count}) and Yahoo Local (
                  {business.yahoo.count})
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
        heading="Talk to a Licensed Bakersfield Plumber Now"
        text={`Call ${business.phoneDisplay} any hour of the day or night for a free estimate. Licensed, insured, and local.`}
      />
    </>
  );
}
