import { Phone, CalendarClock } from "lucide-react";
import { business } from "@/data/site";
import { AppLink } from "./ui";

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <a
        href={business.phoneHref}
        className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3 text-sm font-bold text-accent-foreground"
      >
        <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
      </a>
      <AppLink
        href="/contact/"
        className="flex items-center justify-center gap-2 rounded-xl bg-navy py-3 text-sm font-bold text-navy-foreground"
      >
        <CalendarClock className="h-4 w-4" /> Free Estimate
      </AppLink>
    </div>
  );
}
