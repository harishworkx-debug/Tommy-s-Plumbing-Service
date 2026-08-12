import { createFileRoute } from "@tanstack/react-router";
import { SITE_URL } from "@/data/site";
import { services } from "@/data/services";
import { locations } from "@/data/locations";
import { serviceLocations } from "@/data/service-locations";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const paths = [
          "/",
          "/services/",
          "/service-areas/",
          "/about/",
          "/reviews/",
          "/contact/",
          "/privacy-policy/",
          "/terms-of-service/",
          ...services.map((s) => `/${s.slug}-bakersfield-ca/`),
          ...locations.map((l) => `/plumber-${l.slug}-ca/`),
          ...serviceLocations.map((sl) => `/${sl.service}-${sl.location}-ca/`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
