import heroHome from "@/assets/hero-home.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import contactEstimate from "@/assets/contact-estimate.jpg";
import reviewsHero from "@/assets/reviews-hero.jpg";
import servicesOverview from "@/assets/services-overview.jpg";
import sCommercial from "@/assets/service-commercial-plumbing.jpg";
import sDrain from "@/assets/service-drain-cleaning.jpg";
import sEmergency from "@/assets/service-emergency-plumbing.jpg";
import sLeak from "@/assets/service-leak-detection.jpg";
import sPipe from "@/assets/service-pipe-repair.jpg";
import sRepair from "@/assets/service-plumbing-repair.jpg";
import sCamera from "@/assets/service-sewer-camera.jpg";
import sSewer from "@/assets/service-sewer-line-repair.jpg";
import sWhInstall from "@/assets/service-water-heater-installation.jpg";
import sWhRepair from "@/assets/service-water-heater-repair.jpg";
import lArvin from "@/assets/loc-arvin.jpg";
import lBakersfield from "@/assets/loc-bakersfield.jpg";
import lLamont from "@/assets/loc-lamont.jpg";
import lMcfarland from "@/assets/loc-mcfarland.jpg";
import lOildale from "@/assets/loc-oildale.jpg";
import lRosedale from "@/assets/loc-rosedale.jpg";
import lShafter from "@/assets/loc-shafter.jpg";
import lTaft from "@/assets/loc-taft.jpg";
import lTehachapi from "@/assets/loc-tehachapi.jpg";
import lWasco from "@/assets/loc-wasco.jpg";

export const images: Record<string, string> = {
  "hero-home": heroHome,
  "about-team": aboutTeam,
  "contact-estimate": contactEstimate,
  "reviews-hero": reviewsHero,
  "services-overview": servicesOverview,
  "service-commercial-plumbing": sCommercial,
  "service-drain-cleaning": sDrain,
  "service-emergency-plumbing": sEmergency,
  "service-leak-detection": sLeak,
  "service-pipe-repair": sPipe,
  "service-plumbing-repair": sRepair,
  "service-sewer-camera": sCamera,
  "service-sewer-line-repair": sSewer,
  "service-water-heater-installation": sWhInstall,
  "service-water-heater-repair": sWhRepair,
  "loc-arvin": lArvin,
  "loc-bakersfield": lBakersfield,
  "loc-lamont": lLamont,
  "loc-mcfarland": lMcfarland,
  "loc-oildale": lOildale,
  "loc-rosedale": lRosedale,
  "loc-shafter": lShafter,
  "loc-taft": lTaft,
  "loc-tehachapi": lTehachapi,
  "loc-wasco": lWasco,
};

export const img = (key: string) => images[key] ?? heroHome;
