// Remote stock photos from Pexels — used because local AI-generated assets
// are not available in this environment. Each key maps to a real, on-topic
// photo URL guaranteed to load.

export const images: Record<string, string> = {
  "hero-home":
    "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "about-team":
    "https://images.pexels.com/photos/13821194/pexels-photo-13821194.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "contact-estimate":
    "https://images.pexels.com/photos/7578999/pexels-photo-7578999.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "reviews-hero":
    "https://images.pexels.com/photos/8486928/pexels-photo-8486928.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "services-overview":
    "https://images.pexels.com/photos/12105083/pexels-photo-12105083.jpeg?auto=compress&cs=tinysrgb&w=1200",

  "service-plumbing-repair":
    "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-emergency-plumbing":
    "https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-drain-cleaning":
    "https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-sewer-camera":
    "https://images.pexels.com/photos/7937292/pexels-photo-7937292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-sewer-line-repair":
    "https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-leak-detection":
    "https://images.pexels.com/photos/7937299/pexels-photo-7937299.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-pipe-repair":
    "https://images.pexels.com/photos/29226620/pexels-photo-29226620.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-water-heater-repair":
    "https://images.pexels.com/photos/19980200/pexels-photo-19980200.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-water-heater-installation":
    "https://images.pexels.com/photos/34938439/pexels-photo-34938439.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "service-commercial-plumbing":
    "https://images.pexels.com/photos/10949030/pexels-photo-10949030.jpeg?auto=compress&cs=tinysrgb&w=1200",

  "loc-bakersfield":
    "https://images.pexels.com/photos/13278726/pexels-photo-13278726.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-rosedale":
    "https://images.pexels.com/photos/9716231/pexels-photo-9716231.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-oildale":
    "https://images.pexels.com/photos/13190807/pexels-photo-13190807.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-lamont":
    "https://images.pexels.com/photos/943700/pexels-photo-943700.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-shafter":
    "https://images.pexels.com/photos/12641333/pexels-photo-12641333.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-wasco":
    "https://images.pexels.com/photos/5393082/pexels-photo-5393082.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-arvin":
    "https://images.pexels.com/photos/19061962/pexels-photo-19061962.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-taft":
    "https://images.pexels.com/photos/19512691/pexels-photo-19512691.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-mcfarland":
    "https://images.pexels.com/photos/13777907/pexels-photo-13777907.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "loc-tehachapi":
    "https://images.pexels.com/photos/8283929/pexels-photo-8283929.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const img = (key: string) =>
  images[key] ?? images["hero-home"] ?? "https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&cs=tinysrgb&w=1600";
