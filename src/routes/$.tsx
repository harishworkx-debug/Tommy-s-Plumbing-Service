import { createFileRoute, notFound } from "@tanstack/react-router";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { serviceLocations } from "@/data/service-locations";
import { ServicePage } from "@/components/site/ServicePage";
import { LocationPage } from "@/components/site/LocationPage";
import { ServiceLocationPage } from "@/components/site/ServiceLocationPage";
import { pageHead } from "@/lib/seo";

type Resolved =
  | { kind: "service"; slug: string }
  | { kind: "location"; slug: string }
  | { kind: "combo"; service: string; location: string };

function resolve(splat: string): Resolved | null {
  const path = splat.replace(/^\/+|\/+$/g, "");
  const service = services.find((s) => path === `${s.slug}-bakersfield-ca`);
  if (service) return { kind: "service", slug: service.slug };

  const location = locations.find((l) => path === `plumber-${l.slug}-ca`);
  if (location) return { kind: "location", slug: location.slug };

  const combo = serviceLocations.find((sl) => path === `${sl.service}-${sl.location}-ca`);
  if (combo) return { kind: "combo", service: combo.service, location: combo.location };

  return null;
}

export const Route = createFileRoute("/$")({
  loader: ({ params }) => {
    const resolved = resolve((params as { _splat?: string })._splat ?? "");
    if (!resolved) throw notFound();
    return resolved;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page not found" }, { name: "robots", content: "noindex" }] };
    }
    if (loaderData.kind === "service") {
      const s = services.find((x) => x.slug === loaderData.slug)!;
      return pageHead({
        title: s.title,
        description: s.description,
        path: `/${s.slug}-bakersfield-ca/`,
      });
    }
    if (loaderData.kind === "location") {
      const l = locations.find((x) => x.slug === loaderData.slug)!;
      return pageHead({
        title: l.title,
        description: l.description,
        path: `/plumber-${l.slug}-ca/`,
      });
    }
    const sl = serviceLocations.find(
      (x) => x.service === loaderData.service && x.location === loaderData.location,
    )!;
    return pageHead({
      title: sl.title,
      description: sl.description,
      path: `/${sl.service}-${sl.location}-ca/`,
    });
  },
  component: DynamicPage,
});

function DynamicPage() {
  const data = Route.useLoaderData();
  if (data.kind === "service") {
    const s = services.find((x) => x.slug === data.slug);
    return s ? <ServicePage service={s} /> : null;
  }
  if (data.kind === "location") {
    const l = locations.find((x) => x.slug === data.slug);
    return l ? <LocationPage location={l} /> : null;
  }
  const sl = serviceLocations.find(
    (x) => x.service === data.service && x.location === data.location,
  );
  const s = services.find((x) => x.slug === data.service);
  const l = locations.find((x) => x.slug === data.location);
  return sl && s && l ? <ServiceLocationPage data={sl} service={s} location={l} /> : null;
}
