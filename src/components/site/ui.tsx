import { Link } from "@tanstack/react-router";
import * as motionLib from "motion/react";
import { Phone, ChevronRight, Star } from "lucide-react";
import type { ReactNode } from "react";
import { business } from "@/data/site";
import { cn } from "@/lib/utils";

const { motion } = motionLib;

export function AppLink({
  href,
  className,
  children,
  ...rest
}: { href: string; className?: string; children: ReactNode } & Record<string, unknown>) {
  return (
    <Link to={href as never} className={className} {...rest}>
      {children}
    </Link>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CallButton({ className, label }: { className?: string; label?: string }) {
  return (
    <a
      href={business.phoneHref}
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-[var(--shadow-card)] transition-transform hover:scale-[1.03]",
        className,
      )}
    >
      <Phone className="h-5 w-5" />
      {label ?? `Call ${business.phoneDisplay}`}
    </a>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "plain",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "plain" | "muted" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-20",
        tone === "muted" && "bg-secondary/60",
        tone === "navy" && "surface-navy",
        className,
      )}
    >
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  invert,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  invert?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.18em]",
            invert ? "text-accent" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl md:text-4xl", invert && "text-navy-foreground")}>{title}</h2>
      {sub ? (
        <p className={cn("mt-4 text-base leading-relaxed", invert ? "text-navy-foreground/75" : "text-muted-foreground")}>
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}

export function Stars({ rating = 5, className }: { rating?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-accent", className)}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="h-4 w-4"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          strokeWidth={1.6}
        />
      ))}
    </span>
  );
}

export function LinkCard({
  href,
  title,
  text,
  image,
  alt,
}: {
  href: string;
  title: string;
  text: string;
  image?: string;
  alt?: string;
}) {
  return (
    <Reveal>
      <AppLink
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
      >
        {image ? (
          <img
            src={image}
            alt={alt ?? title}
            loading="lazy"
            className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg text-card-foreground">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary">
            {title}
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </AppLink>
    </Reveal>
  );
}

export function Faqs({ faqs, title = "Frequently Asked Questions" }: { faqs: { q: string; a: string }[]; title?: string }) {
  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="mb-6 text-center text-3xl">{title}</h2>
      <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group p-5">
            <summary className="cursor-pointer list-none text-base font-bold text-card-foreground marker:hidden">
              <span className="flex items-start justify-between gap-4">
                {f.q}
                <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-90" />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function CtaBand({ heading, text }: { heading: string; text: string }) {
  return (
    <Section tone="navy">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl text-navy-foreground md:text-4xl">{heading}</h2>
          <p className="mt-4 text-navy-foreground/75">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <CallButton />
            <AppLink
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3.5 text-base font-bold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              Request a Free Estimate
            </AppLink>
          </div>
          <p className="mt-5 text-sm text-navy-foreground/70">
            {business.hours} · License {business.license} · {business.discount}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        {items.map((it, i) => (
          <li key={it.path} className="flex items-center gap-1">
            {i > 0 ? <ChevronRight className="h-3 w-3" /> : null}
            {i === items.length - 1 ? (
              <span className="font-semibold text-foreground">{it.name}</span>
            ) : (
              <AppLink href={it.path} className="hover:text-primary">
                {it.name}
              </AppLink>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  image,
  alt,
  h1,
  lede,
}: {
  image: string;
  alt: string;
  h1: string;
  lede: string;
}) {
  return (
    <header className="relative overflow-hidden">
      <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.21_0.06_258/0.95)_0%,oklch(0.24_0.07_258/0.82)_55%,oklch(0.24_0.07_258/0.45)_100%)]" />
      <div className="container-page relative py-20 md:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <h1 className="text-4xl text-navy-foreground md:text-5xl">{h1}</h1>
            <p className="mt-5 text-lg leading-relaxed text-navy-foreground/80">{lede}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <AppLink
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/30 px-6 py-3.5 text-base font-bold text-navy-foreground hover:bg-navy-foreground/10"
              >
                Free Estimate
              </AppLink>
            </div>
            <p className="mt-5 text-sm text-navy-foreground/70">
              Licensed &amp; insured · CA License {business.license} · Open 24/7
            </p>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
