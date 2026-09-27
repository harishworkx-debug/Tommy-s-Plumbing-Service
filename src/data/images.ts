// Replace these placeholder URLs with paths to real photos of your business in the /public/ folder.
// Real photos are a major local SEO asset. Google uses them for entity validation, and customers trust real technicians over stock photos.
// To use a local file, place it in public/ (e.g. public/hero.jpg) and change the string here to "/hero.jpg".

export const images: Record<string, string> = {
  "hero-home":
    "https://placehold.co/1600x900/eeeeee/333333?text=Actual+Tommy's+Service+Van+at+Bakersfield+Home",
  "about-team":
    "https://placehold.co/1200x800/eeeeee/333333?text=Tommy's+Real+Team+Photo",
  "contact-estimate":
    "https://placehold.co/1200x800/eeeeee/333333?text=Technician+Providing+an+Estimate",
  "reviews-hero":
    "https://placehold.co/1600x900/eeeeee/333333?text=Tommy's+Technician+with+Happy+Customer",
  "services-overview":
    "https://placehold.co/1200x800/eeeeee/333333?text=Tommy's+Fully+Stocked+Service+Van",

  "service-plumbing-repair":
    "https://placehold.co/1200x800/eeeeee/333333?text=Real+Plumbing+Repair+Work",
  "service-emergency-plumbing":
    "https://placehold.co/1200x800/eeeeee/333333?text=Actual+Emergency+Leak+Repair",
  "service-drain-cleaning":
    "https://placehold.co/1200x800/eeeeee/333333?text=Technician+using+Professional+Drain+Machine",
  "service-sewer-camera":
    "https://placehold.co/1200x800/eeeeee/333333?text=Actual+Sewer+Camera+Inspection+Screen",
  "service-sewer-line-repair":
    "https://placehold.co/1200x800/eeeeee/333333?text=Real+Sewer+Line+Spot+Repair",
  "service-leak-detection":
    "https://placehold.co/1200x800/eeeeee/333333?text=Technician+Using+Acoustic+Leak+Detector",
  "service-pipe-repair":
    "https://placehold.co/1200x800/eeeeee/333333?text=Copper+or+PEX+Pipe+Replacement+Job",
  "service-water-heater-repair":
    "https://placehold.co/1200x800/eeeeee/333333?text=Diagnosing+a+Real+Water+Heater",
  "service-water-heater-installation":
    "https://placehold.co/1200x800/eeeeee/333333?text=New+Water+Heater+Installation+by+Tommy's",
  "service-commercial-plumbing":
    "https://placehold.co/1200x800/eeeeee/333333?text=Commercial+Hydro-Jetting+or+Flushometer+Repair",

  "loc-bakersfield":
    "https://placehold.co/1200x800/eeeeee/333333?text=Tommy's+Van+in+Downtown+Bakersfield",
  "loc-rosedale":
    "https://placehold.co/1200x800/eeeeee/333333?text=Service+Call+at+a+Rosedale+Home",
  "loc-oildale":
    "https://placehold.co/1200x800/eeeeee/333333?text=Tommy's+Van+in+an+Oildale+Neighborhood",
  "loc-lamont":
    "https://placehold.co/1200x800/eeeeee/333333?text=Service+Call+in+Lamont",
  "loc-shafter":
    "https://placehold.co/1200x800/eeeeee/333333?text=Commercial+or+Residential+Job+in+Shafter",
  "loc-wasco":
    "https://placehold.co/1200x800/eeeeee/333333?text=Sewer+Repair+Job+in+Wasco",
  "loc-arvin":
    "https://placehold.co/1200x800/eeeeee/333333?text=Leak+Detection+Job+in+Arvin",
  "loc-taft":
    "https://placehold.co/1200x800/eeeeee/333333?text=Tommy's+Van+on+a+Hillside+in+Taft",
  "loc-mcfarland":
    "https://placehold.co/1200x800/eeeeee/333333?text=Repipe+Job+in+McFarland",
  "loc-tehachapi":
    "https://placehold.co/1200x800/eeeeee/333333?text=Freeze+Repair+Job+in+Tehachapi",
};

export const img = (key: string) =>
  images[key] ?? images["hero-home"] ?? "https://placehold.co/1600x900/eeeeee/333333?text=Missing+Image";
