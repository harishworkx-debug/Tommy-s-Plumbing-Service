import type { Faq } from "./services";

export interface Location {
  slug: string;          // "bakersfield"
  name: string;          // "Bakersfield"
  image: string;
  alt: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  intro: string[];
  character: string;
  coverage: string;
  residential: string;
  emergency: string;
  drains: string;
  sewer: string;
  waterHeaters: string;
  leaks: string;
  pipes: string;
  problems: { h: string; p: string }[];
  whyLocal: string[];
  process: { h: string; p: string }[];
  faqs: Faq[];
  nearby: string[];
  featuredServices: string[];
}

export const locations: Location[] = [
  {
    slug: "bakersfield",
    name: "Bakersfield",
    image: "loc-bakersfield",
    alt: "Residential street with stucco homes and dry hills in Bakersfield, California",
    title: "Plumber in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Licensed plumber in Bakersfield, CA for residential and residential plumbing, drains, sewers, leaks and water heaters. provider availability, pricing details. Call 661-592-2721.",
    h1: "Plumber in Bakersfield, CA",
    lede:
      "Tommy's Plumbing Service is based at 3740 Sillect Ave #3c in Bakersfield and works across the entire city, from the older neighborhoods near downtown to the newer developments spreading northwest and southwest.",
    intro: [
      "Bakersfield is not one plumbing market; it is several. A 1940s bungalow near Oleander has galvanized supply lines and a clay sewer lateral under a mature tree. A 2015 tract home off Stockdale has PEX manifolds, a slab foundation and a garage water heater. Both call the same number, and both need a plumber who knows which failures to expect before opening anything.",
      "We have built our service around that variety. Our trucks carry parts for both eras, we camera sewer lines instead of guessing at them, and we quote work honestly whether that means a fifteen-minute valve replacement or a full lateral repair.",
    ],
    character:
      "The city sits at the southern end of the San Joaquin Valley with hot summers, hard mineral-rich water, expansive soils and slab-on-grade building across most subdivisions built since the 1970s. Those four factors drive the majority of the plumbing work we do here: scale in fixtures and water heaters, slab leaks in copper lines, soil movement stressing sewer laterals, and heat-accelerated wear on supply hoses and outdoor lines.",
    coverage:
      "We cover the full city and the surrounding communities, including the northwest around Rosedale, north across the river toward Oildale, the southwest corridor, the southeast neighborhoods, and the downtown and east Bakersfield areas. Because we are open provider availabilitys a day, a burst line at 2 a.m. gets the same response as a scheduled Tuesday appointment.",
    residential:
      "Residential work makes up the core of what we do in Bakersfield: leaking faucets and toilets, seized angle stops, garbage disposals, shower valve cartridges, hose bibs that split in the heat, slab leaks, sewer backups and water heater replacement. We also handle fixture installation for remodels and plumbing inspections before a sale.",

    emergency:
      "Emergency plumbing in Bakersfield means burst supply lines, sewer backups into tubs and showers, failed water heaters flooding garages and main line breaks in front yards. We answer provider availability at 661-592-2721, walk you through shutting off the correct valve, and contain the damage before beginning any repair.",
    drains:
      "Drain problems here trend toward grease in kitchen lines, hair and soap in bath lines and root intrusion in older main lines. We cable branch lines, hydro-jet where grease and scale need scouring, and camera the main when the same stoppage keeps returning.",
    sewer:
      "Sewer laterals in older Bakersfield neighborhoods are frequently clay or cast iron with mature trees directly overhead. Camera inspection tells us whether roots, an offset joint, a belly or corrosion is behind the problem, and we repair the specific defect rather than trenching the whole yard.",
    waterHeaters:
      "Hard water is the single biggest factor in water heater life here. Sediment insulates the burner, lengthens heat cycles and shortens tank life. We repair pilot, thermostat, element and valve failures, flush sediment, and install correctly sized tank and tankless units with code-compliant strapping and venting.",
    leaks:
      "Slab-on-grade building makes slab leaks common across the city. We verify the loss at the meter, isolate zones and use acoustic equipment to pinpoint the leak so the concrete opening is as small as possible, then repair or reroute the line.",
    pipes:
      "Older parts of the city still run galvanized supply piping that has rusted internally, dropping pressure and discoloring water. Newer homes more often need fitting-level repairs and slab reroutes. We repair, reroute and repipe with copper and PEX to current code.",
    problems: [
      { h: "Hard water scale", p: "Mineral deposit collects in aerators, shower heads, valve cartridges and water heater tanks, cutting flow and shortening component life across the whole house." },
      { h: "Slab leaks", p: "Copper lines under concrete slabs develop pinholes over time, showing up as warm floor spots, unexplained moisture and rising water bills." },
      { h: "Root intrusion in sewer laterals", p: "Mature trees in established neighborhoods send roots into clay pipe joints, causing repeat main line backups." },
      { h: "Heat-stressed outdoor plumbing", p: "Hose bibs, irrigation valves and exposed lines take a beating in triple-digit summers and are a common source of hidden water loss." },
      { h: "Soil movement", p: "Expansive valley soils shift with seasonal moisture changes, stressing underground lines and creating bellies in sewer laterals." },
    ],
    whyLocal: [
      "Local company based on Sillect Ave, not a call center routing work to subcontractors",
      "Open provider availabilitys a day, 7 days a week for scheduling and emergencies",
      "independent provider credentials under California State License #957013",
      "pricing details on every job, with pricing explained before work starts",
      "10% discount for seniors and military personnel",
      "Credit cards, Apple Pay, Google Pay and NFC mobile payments accepted",
      "4.5 star ratings on both Google and Yahoo Local",
    ],
    process: [
      { h: "Call and describe the problem", p: "We ask targeted questions to understand urgency and bring the right equipment on the first trip." },
      { h: "Arrival and inspection", p: "The technician inspects the affected area and the related system, not just the visible symptom." },
      { h: "pricing details", p: "You get pricing and options in plain language before any work begins." },
      { h: "Repair or installation", p: "Work performed to California code with quality materials and the area protected throughout." },
      { h: "Test and walkthrough", p: "We test under real conditions, clean up completely and explain what was done and what to watch for." },
    ],
    faqs: [
      { q: "Where is Tommy's Plumbing Service located in Bakersfield?", a: "We are located at 3740 Sillect Ave #3c, Bakersfield, CA 93308, and we serve the entire city plus surrounding Kern County communities." },
      { q: "Are you available for emergencies at night in Bakersfield?", a: "Yes. We are open provider availabilitys a day, 7 days a week, including nights, weekends and holidays. Call 661-592-2721." },
      { q: "Do you charge for estimates in Bakersfield?", a: "No. Estimates are free. We diagnose the issue, explain the options and provide pricing before any work begins." },
      { q: "What payment methods do you accept?", a: "Credit cards, Apple Pay, Google Pay and NFC mobile payments. Seniors and military personnel receive a 10% discount." },
      { q: "Do you work on both homes and homeowners?", a: "Yes, we are a licensed residential and residential plumbing contractor and handle everything from single fixture repairs to residential kitchen and multi-unit property work." },
    ],
    nearby: ["rosedale", "oildale", "shafter", "lamont", "arvin"],
    featuredServices: ["plumbing-repair", "emergency-plumbing", "drain-cleaning", "water-heater-repair", "leak-detection", "sewer-line-repair"],
  },

  {
    slug: "rosedale",
    name: "Rosedale",
    image: "loc-rosedale",
    alt: "Newer suburban neighborhood with tract homes in Rosedale, California",
    title: "Plumber in Rosedale, CA | Tommy's Plumbing Service",
    description:
      "Licensed plumber serving Rosedale, CA. Drain cleaning, leak detection, water heaters and provider availability emergency plumbing. pricing details. Call 661-592-2721.",
    h1: "Plumber in Rosedale, CA",
    lede:
      "Rosedale's newer subdivisions and larger lots create a distinct plumbing profile, and Tommy's Plumbing Service works here daily from our Bakersfield shop just minutes east.",
    intro: [
      "Most of Rosedale was built within the last few decades, which means PEX and copper supply lines, ABS drains and slab foundations rather than the galvanized and clay systems common closer to downtown. The failures are different: fittings and manifolds rather than rusted-through pipe, and settlement issues rather than century-old materials.",
      "Larger lots also mean more irrigation, more hose bibs and longer service lines, all of which are common sources of hidden water loss that never shows up as a puddle indoors.",
    ],
    character:
      "The area runs west of Bakersfield along Rosedale Highway with a mix of newer master-planned neighborhoods, semi-rural properties and small residential centers. Homes here tend to be larger with multiple bathrooms and higher simultaneous hot water demand, which is why water heater sizing questions come up more often in Rosedale than almost anywhere else we work.",
    coverage:
      "We cover Rosedale from the Calloway corridor west toward Allen Road and Renfro, including the newer developments north and south of Rosedale Highway and the semi-rural parcels beyond them. Response times are short because we are based only a few minutes away on Sillect Ave.",
    residential:
      "In Rosedale homes we handle fixture and faucet repair, toilet installation, garbage disposals, angle stop replacement, slab leak detection, irrigation-side leaks and water heater work. Multi-bathroom houses here frequently outgrow an original 40-gallon tank, and we size replacements around actual peak demand instead of simply matching what was there.",

    emergency:
      "Emergency calls from Rosedale most often involve failed supply hoses, garage water heater leaks and irrigation or service line breaks on larger lots. Because those larger properties can lose a great deal of water before anyone notices, shutting off at the meter is often the first thing we walk callers through.",
    drains:
      "Newer ABS drain systems in Rosedale rarely fail structurally, but they clog like anything else. Kitchen grease, disposal misuse and bath line hair are the usual causes, and building debris still turns up in homes that were recently remodeled.",
    sewer:
      "Sewer issues here are more often about installation quality and settlement than material failure: a belly where backfill was not compacted properly, or a joint that shifted as the soil moved. Camera inspection identifies those quickly, and spot repairs are usually all that is needed.",
    waterHeaters:
      "Larger Rosedale households with three or more bathrooms are strong candidates for either a high-capacity tank or a properly sized tankless system. We evaluate gas line capacity before recommending tankless, because an undersized gas supply is the most common reason a conversion disappoints.",
    leaks:
      "Slab leaks, irrigation leaks and service line leaks all show up here. On larger lots we frequently trace an unexplained bill to an underground line between the meter and the house rather than anything inside it.",
    pipes:
      "Piping in Rosedale is generally modern, so our work leans toward fitting repairs, crimp failures, reroutes around slab-routed lines and repairs after remodel damage rather than whole-house repiping.",
    problems: [
      { h: "Oversubscribed water heaters", p: "Larger homes with several bathrooms regularly run out of hot water because the original tank was sized for a smaller household." },
      { h: "Irrigation and service line leaks", p: "Bigger lots hide underground water loss well; the first symptom is usually the bill, not a wet spot." },
      { h: "Settlement in newer sewer laterals", p: "Backfill that was not compacted properly settles over the years, creating low spots that trap solids." },
      { h: "Fitting and crimp failures", p: "In PEX systems, the joint is the weak point, and a poor crimp can weep inside a wall for months." },
      { h: "Hard water in newer fixtures", p: "Modern cartridges and aerators scale up just as quickly as older ones in Kern County water." },
    ],
    whyLocal: [
      "Only minutes from Rosedale, so response times stay short",
      "provider availability availability for burst lines and after-hours emergencies",
      "Experience with newer PEX and manifold systems as well as older plumbing",
      "pricing details and a 10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Describe the symptom", p: "We ask about the bill, the fixtures affected and any recent remodeling, which narrows the cause before we arrive." },
      { h: "On-site diagnosis", p: "Meter verification for suspected leaks, camera for repeat drain issues, or direct inspection for fixture problems." },
      { h: "Free written estimate", p: "Clear pricing, with options where more than one approach is reasonable." },
      { h: "Complete the work", p: "Repairs and installations performed to code with the property protected." },
      { h: "Verify and explain", p: "Testing under real use, plus guidance on preventing a repeat." },
    ],
    faqs: [
      { q: "Do you serve all of Rosedale?", a: "Yes, we serve Rosedale from the Calloway corridor west to Allen Road and Renfro, including the semi-rural properties beyond the newer subdivisions." },
      { q: "Why does my Rosedale home run out of hot water?", a: "Usually the tank was sized for a smaller household than the one using it now, or sediment has reduced usable capacity. We measure actual demand before recommending a replacement." },
      { q: "Can you find an underground leak on a large lot?", a: "Yes. We verify the loss at the meter, isolate the irrigation and domestic sides separately and use acoustic equipment to locate the leak before digging." },
      { q: "How fast can you get to Rosedale in an emergency?", a: "We are based on Sillect Ave in Bakersfield, only minutes away, and we answer emergency calls provider availabilitys a day at 661-592-2721." },
      { q: "Do you work on newer PEX plumbing systems?", a: "Yes. We repair PEX fittings, manifolds and crimp failures as readily as we work on copper and galvanized systems." },
    ],
    nearby: ["bakersfield", "oildale", "shafter", "wasco"],
    featuredServices: ["plumbing-repair", "emergency-plumbing", "drain-cleaning", "water-heater-repair"],
  },

  {
    slug: "oildale",
    name: "Oildale",
    image: "loc-oildale",
    alt: "Older residential neighborhood with mature trees and oilfield hills in Oildale, California",
    title: "Plumber in Oildale, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Oildale, CA. Repairs for older plumbing, drain cleaning, sewer lines and water heaters. provider availability service, pricing details. Call 661-592-2721.",
    h1: "Plumber in Oildale, CA",
    lede:
      "Oildale's housing stock is older than most of Kern County, and that shapes almost every plumbing call we take here. We are just across the river from the neighborhood and work in it constantly.",
    intro: [
      "Many Oildale homes were built between the 1930s and the 1960s, with galvanized steel supply lines, cast iron or clay sewer laterals and decades of partial upgrades layered on top. It is common to find three generations of plumbing in one house: original galvanized in the walls, copper from a 1980s repair and PEX from last year's remodel.",
      "That mix creates specific problems, particularly at the transitions between dissimilar metals, and it is where careless work causes fast corrosion. We handle those transitions properly so the repair is not the next failure point.",
    ],
    character:
      "The neighborhood sits north of the Kern River with modest single-story homes, mature trees and long-established streets. Tree roots and aging underground lines are a constant theme, and many properties have never had their sewer lateral inspected.",
    coverage:
      "We cover Oildale from North Chester through the neighborhoods around Airport Drive and out toward the county areas at the edge of the community. We are only a few minutes away, which matters when a main line is backing up.",
    residential:
      "Residential work in Oildale is heavy on galvanized pipe replacement, seized valves, cast iron drain repair, water heater replacement in older garages and main line clearing. We also do a lot of straightforward fixture work in rental properties, where landlords need fast, durable repairs at a fair price.",

    emergency:
      "The most common Oildale emergencies are sewer backups and failures in old galvanized lines that finally rust through. Both tend to happen at the worst time, and both are covered by our provider availability service.",
    drains:
      "Root intrusion is the leading cause of repeat drain problems in this area because of the mature trees along nearly every street. Cabling clears the line; a camera inspection tells you whether the joint the roots came through is about to fail.",
    sewer:
      "Clay and cast iron laterals are the norm here. We locate the defect precisely before excavating, and we can often solve a recurring backup with a targeted spot repair instead of replacing an entire run.",
    waterHeaters:
      "Older garages and utility closets in Oildale frequently have water heaters that predate current strapping, pan and venting requirements. When we replace a unit we bring the installation up to current California code as part of the job.",
    leaks:
      "Because so many homes here have raised foundations and crawl spaces, leaks often show up as damp subfloor or a musty smell before any surface stain. We inspect crawl spaces directly and can usually pinpoint the source quickly.",
    pipes:
      "Galvanized replacement is our most requested pipe work in Oildale. Rust reduces the pipe's internal diameter until pressure drops noticeably and the first draw of water each morning runs brown. Replacing affected branches with copper or PEX restores both pressure and water quality.",
    problems: [
      { h: "Rusted galvanized supply lines", p: "Low pressure and discolored water are the classic symptoms, and once one branch fails the rest are typically close behind." },
      { h: "Root-damaged clay sewer laterals", p: "Mature street trees find every joint, causing backups that return a few months after each cleaning." },
      { h: "Corroded cast iron drains", p: "The bottom of the pipe wears away first, so solids catch and the line clogs even though nothing was flushed that should not have been." },
      { h: "Non-compliant older installations", p: "Water heaters without strapping or pans, improper venting and unsupported pipe runs are common in homes with a long history of do-it-yourself repairs." },
      { h: "Crawl space leaks", p: "Raised foundations hide leaks well, and a slow drip can rot subfloor before anyone notices upstairs." },
    ],
    whyLocal: [
      "Minutes from Oildale, just across the river from our Bakersfield shop",
      "Experienced with galvanized, cast iron and mixed-material older systems",
      "Fair, transparent pricing that landlords and homeowners can plan around",
      "pricing details and provider availability emergency availability",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Understand the house", p: "Age, past repairs and materials tell us a great deal before we pick up a tool." },
      { h: "Inspect thoroughly", p: "Crawl space, valves, pressure and drain behavior, not just the fixture that prompted the call." },
      { h: "pricing details with options", p: "Repair now versus plan a larger replacement, with honest pricing on both." },
      { h: "Perform the work", p: "Correct transitions between materials, proper support and code-compliant installation." },
      { h: "Confirm and advise", p: "Testing, cleanup and a straight assessment of what is likely to need attention next." },
    ],
    faqs: [
      { q: "Do you work on older Oildale homes with galvanized pipe?", a: "Constantly. We replace corroded galvanized branches with copper or PEX and handle the transitions correctly so dissimilar metals do not accelerate corrosion." },
      { q: "Why does my main line keep backing up?", a: "In Oildale it is usually root intrusion at clay pipe joints. Cleaning clears it temporarily; a camera inspection shows whether the joint needs a spot repair to stop the cycle." },
      { q: "Can you service rental properties?", a: "Yes. We work with landlords and homeowners throughout Oildale on repairs, homeowner coordination and preventative maintenance." },
      { q: "Is my old water heater installation still legal?", a: "Many older installations lack current strapping, pan and venting requirements. We bring the installation up to current California code when we replace a unit." },
      { q: "Are you available at night in Oildale?", a: "Yes, provider availabilitys a day, 7 days a week. Call 661-592-2721." },
    ],
    nearby: ["bakersfield", "rosedale", "shafter", "mcfarland"],
    featuredServices: ["plumbing-repair", "drain-cleaning", "sewer-line-repair", "water-heater-repair"],
  },

  {
    slug: "lamont",
    name: "Lamont",
    image: "loc-lamont",
    alt: "Residential street bordered by farmland in Lamont, California",
    title: "Plumber in Lamont, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Lamont, CA with emergency plumbing, drain cleaning, repairs and water heaters. pricing details and provider availability service. Call 661-592-2721.",
    h1: "Plumber in Lamont, CA",
    lede:
      "Lamont is a working agricultural community southeast of Bakersfield, and Tommy's Plumbing Service covers it for both household repairs and the after-hours emergencies that cannot wait for a trip into the city.",
    intro: [
      "Housing in Lamont ranges from older single-story homes to newer infill building, often with multi-generational households putting heavy daily demand on a plumbing system that was sized for far less. Bathrooms run continuously in the morning, laundry runs constantly, and kitchens see real use three times a day.",
      "That load reveals weak points quickly. Angle stops, flush valves, water heaters and drain lines all age faster in a busy household, and small problems become disruptive fast when there is only one bathroom.",
    ],
    character:
      "Surrounded by irrigated farmland southeast of the city, Lamont deals with dust, seasonal irrigation activity and water that is as mineral heavy as anywhere in the valley. Many properties sit on larger parcels with outbuildings, extra hose bibs and older underground lines.",
    coverage:
      "We serve the whole Lamont area including the neighborhoods around Main Street, the residential blocks off Weedpatch Highway and nearby unincorporated properties. Scheduled work and emergency calls are both available.",
    residential:
      "Household work here focuses on high-use fixtures: toilets that run or clog, kitchen drains that slow under heavy cooking, water heaters that cannot keep up with a full household, and hose bibs and outdoor lines that split. We also handle fixture installation and general plumbing repairs for rental housing.",

    emergency:
      "For a household with one bathroom, a stopped toilet or a sewer backup is an immediate emergency. We respond provider availabilitys a day, and we prioritize calls where a family has no usable bathroom or no water at all.",
    drains:
      "Heavy daily cooking pushes grease into kitchen lines faster than average, and bath lines in busy homes fill with hair and soap quickly. We cable branch lines, jet when grease is the underlying problem and camera main lines that back up repeatedly.",
    sewer:
      "Older laterals in the area, combined with agricultural soil conditions and irrigation nearby, can produce bellies, joint separations and root intrusion. We locate the defect and repair the specific section rather than replacing more than necessary.",
    waterHeaters:
      "Undersized water heaters are the most common complaint we hear in Lamont. A household of six or more using a small tank never gets ahead of demand. We size replacements around actual use and install to current code.",
    leaks:
      "With outbuildings, extra hose bibs and long yard lines, underground leaks are common and easy to miss. We verify at the meter, isolate the yard from the house and pinpoint the loss without trenching blindly.",
    pipes:
      "We repair and replace supply lines throughout Lamont, including galvanized branches in older homes and exterior lines damaged by sun, soil movement or equipment. Outdoor plumbing takes real abuse here and needs proper materials and support.",
    problems: [
      { h: "High-demand fixture wear", p: "Busy multi-generational households wear out flush valves, angle stops and faucet cartridges much faster than average." },
      { h: "Grease-loaded kitchen drains", p: "Frequent home cooking sends more fat into the drain line, narrowing it steadily until it backs up." },
      { h: "Undersized water heating", p: "Small tanks in large households never recover between uses, leaving the last person with cold water every morning." },
      { h: "Outdoor and yard line leaks", p: "Extra hose bibs, outbuildings and long underground runs create hidden losses that only show on the bill." },
      { h: "Single-bathroom vulnerability", p: "When one bathroom serves the whole household, any stoppage is an emergency rather than an inconvenience." },
    ],
    whyLocal: [
      "We answer provider availability, which matters when a household has one bathroom",
      "pricing details so families can plan before committing",
      "10% discount for seniors and military personnel",
      "Experience with high-demand households and older infrastructure",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Call and explain the urgency", p: "We triage by impact, so a family with no working bathroom is prioritized." },
      { h: "Inspect the whole system", p: "In high-use homes the fixture that failed is often not the only one close to failing." },
      { h: "pricing details", p: "Pricing explained up front, including what can wait and what should not." },
      { h: "Complete the repair", p: "Durable parts chosen for heavy use rather than the cheapest available." },
      { h: "Follow-up guidance", p: "Practical advice for reducing wear in a busy household." },
    ],
    faqs: [
      { q: "Do you come out to Lamont at night?", a: "Yes. We provide provider availability emergency plumbing throughout Lamont and the surrounding area. Call 661-592-2721." },
      { q: "What size water heater does a large household need?", a: "It depends on occupants, bathrooms and peak use. We measure actual demand rather than simply matching the old tank, because undersized heaters are the most common complaint we hear here." },
      { q: "My kitchen drain clogs every few months. Why?", a: "Grease buildup coats the pipe wall and rebuilds after each cabling. Hydro-jetting scours the line back closer to full diameter, which usually breaks the cycle." },
      { q: "Can you find a leak in a yard line?", a: "Yes. We isolate the yard from the house at the meter and use acoustic equipment to locate the loss before any digging." },
      { q: "Do you provide pricing details in Lamont?", a: "Yes, estimates are always free, with pricing explained before any work begins." },
    ],
    nearby: ["bakersfield", "arvin", "oildale", "tehachapi"],
    featuredServices: ["emergency-plumbing", "drain-cleaning", "plumbing-repair", "water-heater-repair"],
  },

  {
    slug: "shafter",
    name: "Shafter",
    image: "loc-shafter",
    alt: "Small town main street with brick storefronts and orchards in Shafter, California",
    title: "Plumber in Shafter, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Shafter, CA for residential and residential plumbing, water heaters, drains and emergencies. pricing details. Call 661-592-2721.",
    h1: "Plumber in Shafter, CA",
    lede:
      "Shafter combines a historic small-town core with newer housing and significant logistics and agricultural business, and each of those needs a different kind of plumbing support.",
    intro: [
      "The older homes near the center of town have the plumbing you would expect from mid-century building: galvanized branches, cast iron waste lines, original fixtures still in service. New subdivisions on the edges of town are modern PEX and ABS. And the residential and residential facilities around the logistics corridor have their own requirements entirely.",
      "We work across all three, from a leaking angle stop in a 1950s bungalow to a high-recovery water heater in a residential break area.",
    ],
    character:
      "Northwest of Bakersfield in the middle of orchard and row crop country, Shafter has clean, quiet residential streets, an active downtown and a growing employment base. Water here is hard, summers are hot, and outdoor plumbing sees plenty of sun exposure.",
    coverage:
      "We serve the entire Shafter area including downtown, the residential neighborhoods surrounding it, the newer developments on the perimeter and nearby unincorporated properties on the way toward Wasco.",
    residential:
      "Home plumbing work in Shafter covers fixture and faucet repair, toilet installation, water heater repair and replacement, drain clearing, leak detection and repairs to sun-damaged outdoor lines. In the older core we do a fair amount of galvanized and cast iron work.",

    emergency:
      "Emergency work here spans household burst lines and water heater failures through to residential restroom and drain emergencies at facilities that operate on shifts. We are available provider availabilitys a day for both.",
    drains:
      "Kitchen and bath line clogs are routine; the more interesting work is in older downtown buildings where cast iron waste lines have scaled down and need jetting or replacement. Camera inspection is the fastest way to tell which.",
    sewer:
      "Sewer laterals in the older parts of Shafter are often original. Camera inspection reveals root intrusion, corrosion or offsets, and targeted repair usually resolves the issue without replacing the full run.",
    waterHeaters:
      "Hard water shortens tank life here as it does throughout Kern County. We repair failed thermostats, elements, thermocouples and valves, flush sediment, and install correctly sized tank and tankless units with compliant venting and strapping.",
    leaks:
      "Slab leaks in newer neighborhoods and crawl space leaks in older homes both come up. We verify at the meter, isolate the affected zone and pinpoint before opening anything.",
    pipes:
      "Older homes need galvanized branch replacement and cast iron drain repair. Newer homes need fitting-level work and occasional reroutes. Outdoor lines in both need materials rated for real sun exposure.",
    problems: [
      { h: "Aging plumbing in the historic core", p: "Original galvanized supply and cast iron waste lines in mid-century homes reach the end of their service life together." },
      { h: "Sun-damaged exterior plumbing", p: "Hose bibs, exposed PVC and irrigation components degrade quickly in full valley sun and crack without warning." },
      { h: "residential hot water demand", p: "Facilities with shift schedules need recovery capacity that residential-style equipment cannot deliver." },
      { h: "Hard water scale", p: "Fixtures, cartridges and water heaters all accumulate mineral deposit that reduces flow and shortens component life." },
      { h: "Root intrusion near mature trees", p: "Established downtown streets have large trees whose roots find clay sewer joints." },
    ],
    whyLocal: [
      "Short drive from our Bakersfield shop for both scheduled and emergency work",
      "Comfortable working on mid-century systems and modern building alike",
      "Residential and residential capability from one licensed contractor",
      "pricing details and 10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Discuss the property", p: "Age and building type tell us what to bring and what to look for." },
      { h: "Inspect and test", p: "Pressure, drain behavior and fixture condition assessed together." },
      { h: "pricing details", p: "Options and pricing explained clearly before work begins." },
      { h: "Perform the work", p: "Code-compliant repair or installation with the area protected." },
      { h: "Test and clean up", p: "Verification under real use and a full walkthrough of what was done." },
    ],
    faqs: [
      { q: "Do you serve residential facilities in Shafter?", a: "Yes. We handle restrooms, break areas, kitchens and utility plumbing for Shafter homeowners, plus building plumbing for homeowner improvements, with after-hours scheduling available." },
      { q: "Can you work on older downtown homes?", a: "Yes, we regularly repair and replace galvanized supply lines and cast iron waste lines in Shafter's older housing stock." },
      { q: "Why do my outdoor faucets keep failing?", a: "Full valley sun degrades exposed plastic and rubber components quickly. We replace them with materials suited to the exposure and add proper support." },
      { q: "How quickly can you reach Shafter?", a: "Shafter is a short drive from our Bakersfield location, and we dispatch emergency calls provider availabilitys a day at 661-592-2721." },
      { q: "Are estimates free in Shafter?", a: "Yes, estimates are free for both residential and residential work." },
    ],
    nearby: ["bakersfield", "wasco", "rosedale", "oildale"],
    featuredServices: ["plumbing-repair", "water-heater-repair", "emergency-plumbing", "plumbing-repair"],
  },

  {
    slug: "wasco",
    name: "Wasco",
    image: "loc-wasco",
    alt: "Rural road through rose fields and farmland near Wasco, California",
    title: "Plumber in Wasco, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Wasco, CA. Sewer line repair, drain cleaning, leak detection and provider availability emergency plumbing. pricing details. Call 661-592-2721.",
    h1: "Plumber in Wasco, CA",
    lede:
      "Wasco sits in the heart of Kern County agriculture, and the plumbing here reflects it: older housing, long underground runs, heavy mineral content and properties that often include more than just a house.",
    intro: [
      "Much of Wasco's residential building stock predates modern plumbing materials, so galvanized supply lines and clay or cast iron sewer laterals are common. Many parcels also include shops, sheds or secondary structures with their own water lines, which multiplies the places a leak can hide.",
      "Distance matters too. When something fails out here, waiting until a plumber can make the drive is not always an option, which is why our provider availability availability covers Wasco the same way it covers Bakersfield.",
    ],
    character:
      "Known for its rose fields and surrounding row crops, Wasco is a farming town northwest of Bakersfield with a compact residential center and agricultural land in every direction. Soil, irrigation and mineral-heavy water all influence what fails and how often.",
    coverage:
      "We cover the Wasco city area and the surrounding rural properties, including homes along the highways toward Shafter and McFarland. Both scheduled service and emergency response are available.",
    residential:
      "Residential work here includes sewer line repair, main line clearing, galvanized pipe replacement, water heater repair and replacement, fixture repair and outdoor line work. Rural parcels frequently need underground plumbing and sewer line locating before anything can be diagnosed properly.",

    emergency:
      "Sewer backups, burst supply lines and water heater failures make up most of our emergency work in Wasco. We answer at any hour and walk callers through shutting off water before we arrive.",
    drains:
      "Older drain systems combined with mineral-heavy water lead to scale and grease buildup that narrows lines over time. Cabling opens them; jetting restores closer to original diameter when buildup is the real cause.",
    sewer:
      "This is some of our most common Wasco work. Aging clay laterals, root intrusion and soil movement produce recurring backups. A camera inspection identifies the defect and its depth, and a targeted spot repair often solves it without replacing the whole line.",
    waterHeaters:
      "Sediment accumulates quickly in this water. We flush, repair failed components and replace units that have reached the end of their service life, always with code-compliant strapping, venting and relief valve routing.",
    leaks:
      "Rural properties with outbuildings and long yard lines hide leaks well. We isolate sections at the meter and locate the loss acoustically, which avoids digging up a driveway or field edge on a guess.",
    pipes:
      "Galvanized replacement, underground line repair and repairs to lines serving secondary structures are all routine here. We use materials suited to burial depth and soil conditions.",
    problems: [
      { h: "Aging clay sewer laterals", p: "Joint separation and root intrusion cause repeat main line backups that cleaning alone will not fix permanently." },
      { h: "Long underground water runs", p: "Lines serving shops, sheds and secondary structures can leak for months without any visible sign." },
      { h: "Mineral scale in older piping", p: "Hard water and older galvanized pipe together reduce flow noticeably over the years." },
      { h: "Heavy sediment in water heaters", p: "Tanks fill with mineral deposit faster here, reducing capacity and shortening service life." },
      { h: "Soil movement around buried lines", p: "Agricultural soil conditions and irrigation cycles stress underground pipe and create low spots." },
    ],
    whyLocal: [
      "We travel to Wasco for both scheduled work and provider availability emergencies",
      "Sewer camera locating so rural excavation is targeted, not exploratory",
      "pricing details before any work begins",
      "10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Gather the history", p: "Previous backups, property layout and structures served all inform the diagnosis." },
      { h: "Locate before digging", p: "Camera and locator work identifies depth and position so excavation is minimal." },
      { h: "pricing details", p: "Written pricing with repair and replacement options where both are reasonable." },
      { h: "Perform the work", p: "Proper bedding, slope and compaction on underground work; code compliance throughout." },
      { h: "Restore and verify", p: "Site restored, line tested and findings explained." },
    ],
    faqs: [
      { q: "Do you travel to Wasco for service calls?", a: "Yes, we serve Wasco and the surrounding rural properties for both scheduled work and provider availability emergency plumbing." },
      { q: "My sewer keeps backing up. What is the next step?", a: "A sewer camera inspection. It shows whether roots, an offset joint, a belly or corrosion is causing the repeat backups, and it locates the defect so any repair is targeted." },
      { q: "Can you find a leak in a line running to an outbuilding?", a: "Yes. We isolate that section at the meter and locate the leak acoustically before excavating." },
      { q: "How often should a water heater be flushed here?", a: "At least once a year. Wasco's water is mineral heavy and sediment accumulates quickly, reducing capacity and shortening tank life." },
      { q: "Do you provide pricing details in Wasco?", a: "Yes, estimates are free, and we explain pricing and options before starting any work." },
    ],
    nearby: ["shafter", "mcfarland", "bakersfield", "rosedale"],
    featuredServices: ["sewer-line-repair", "drain-cleaning", "leak-detection", "water-heater-repair"],
  },

  {
    slug: "arvin",
    name: "Arvin",
    image: "loc-arvin",
    alt: "Residential street with mountains and vineyards in the distance in Arvin, California",
    title: "Plumber in Arvin, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Arvin, CA for leak detection, drain cleaning, repairs and emergency plumbing. pricing details, provider availability service. Call 661-592-2721.",
    h1: "Plumber in Arvin, CA",
    lede:
      "Arvin sits at the base of the mountains southeast of Bakersfield, surrounded by vineyards and orchards. We serve the community for everything from a running toilet to a failed main line.",
    intro: [
      "Arvin's homes range from long-established single-story houses to newer building, and many households here are large, with plumbing systems working hard every day. The community is also close enough to the foothills that temperature swings are sharper than in the valley floor neighborhoods, which affects exposed piping in winter.",
      "Because Arvin is a distance from central Bakersfield, we plan calls carefully so the right parts and equipment come on the first trip. Nobody wants to wait for a second visit because a technician arrived without the correct valve.",
    ],
    character:
      "Agricultural land surrounds the town, with vineyards and orchards running up toward the Tehachapi foothills. Water is hard, wind and dust are part of daily life, and winter mornings get cold enough to matter for uninsulated exterior lines.",
    coverage:
      "We serve Arvin and the surrounding area, including outlying residential properties and the agricultural support homeowners in and around town. Emergency calls are answered provider availabilitys a day.",
    residential:
      "Residential work in Arvin covers leak detection, fixture and faucet repair, toilet repair and installation, drain clearing, water heater service and repairs to outdoor plumbing that has taken sun and wind damage. Larger households also drive frequent water heater capacity questions.",

    emergency:
      "Burst lines after a cold snap, sewer backups and water heater failures are the most common Arvin emergencies. We answer at any hour and guide you through shutting off water while we are en route.",
    drains:
      "Kitchen grease and bath line hair account for most branch clogs. Main line stoppages in older parts of town are frequently root related, and a camera inspection is the fastest way to confirm it.",
    sewer:
      "Older laterals combined with soil movement near the foothills can produce offsets and bellies. We locate the defect precisely so repairs are contained to a small area.",
    waterHeaters:
      "Hard water and heavy household demand shorten tank life. We repair thermostats, elements, thermocouples and valves, flush sediment and install right-sized replacements to current California code.",
    leaks:
      "Leak detection is one of our most requested Arvin services. Slab leaks, irrigation leaks and service line leaks all appear here, and we verify at the meter before locating acoustically to keep any opening small.",
    pipes:
      "We repair and replace supply piping including freeze-split exterior lines, corroded older branches and damaged underground runs. Insulating exposed piping before winter prevents a great deal of this work.",
    problems: [
      { h: "Freeze splits on exposed lines", p: "Colder mornings near the foothills split uninsulated exterior pipe and hose bibs more often than in central Bakersfield." },
      { h: "Hidden irrigation and slab leaks", p: "A rising bill with no visible water is the usual first sign, and precise location keeps repair costs down." },
      { h: "High household hot water demand", p: "Large families outpace small tanks, especially in the morning." },
      { h: "Dust and wind wear on outdoor fixtures", p: "Exterior valves and hose bibs accumulate grit and fail earlier than they otherwise would." },
      { h: "Root intrusion in older laterals", p: "Established trees in older neighborhoods reach sewer joints and cause repeat backups." },
    ],
    whyLocal: [
      "We plan Arvin calls to arrive with the right parts on the first trip",
      "provider availability emergency response, including winter freeze failures",
      "Precise leak detection instead of exploratory demolition",
      "pricing details and 10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Detailed intake", p: "We ask enough questions on the phone to load the truck correctly for a town outside the city." },
      { h: "Verify before opening", p: "Meter checks and acoustic location come before any concrete or drywall is touched." },
      { h: "pricing details", p: "Clear pricing, presented before work starts." },
      { h: "Complete the work", p: "Code-compliant repairs with attention to protecting finished surfaces." },
      { h: "Prevention advice", p: "Practical steps, including winter protection for exposed lines." },
    ],
    faqs: [
      { q: "Do you come out to Arvin?", a: "Yes, we serve Arvin and the surrounding area for scheduled work and provider availability emergency plumbing. Call 661-592-2721." },
      { q: "My pipe split during a cold morning. Can you repair it?", a: "Yes. We repair freeze-split supply lines and hose bibs, and we can insulate exposed runs to prevent it happening again." },
      { q: "How do you find a leak I cannot see?", a: "We confirm the loss at the water meter, isolate zones and use acoustic listening equipment to pinpoint the location before opening any surface." },
      { q: "Can you install a larger water heater?", a: "Yes. We size the unit around your household's actual peak demand and install to current California code with proper strapping and venting." },
      { q: "Are your estimates free in Arvin?", a: "Yes, estimates are always free and pricing is explained before work begins." },
    ],
    nearby: ["lamont", "bakersfield", "tehachapi", "taft"],
    featuredServices: ["leak-detection", "emergency-plumbing", "drain-cleaning", "plumbing-repair"],
  },

  {
    slug: "taft",
    name: "Taft",
    image: "loc-taft",
    alt: "Hillside homes and oilfield terrain in Taft, California",
    title: "Plumber in Taft, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Taft, CA for residential plumbing, repairs, drains and water heaters. provider availability availability and pricing details. Call 661-592-2721.",
    h1: "Plumber in Taft, CA",
    lede:
      "Taft's older housing and residential history give it a plumbing profile all its own, and we serve both the residential neighborhoods and the homeowners that keep the town running.",
    intro: [
      "Many Taft homes date to the oil boom era, which means original galvanized supply lines, cast iron drains and decades of piecemeal upgrades. Add hillside lots, variable soil and long dry summers, and you get a mix of pressure problems, drain problems and underground line failures.",
      "On the residential side, Taft supports oilfield services, residential, residentials and public facilities, all of which need plumbing that keeps working during operating hours.",
    ],
    character:
      "Taft sits southwest of Bakersfield in the hills at the edge of the oilfields. Terrain is uneven, many properties are on slopes, and both water hardness and summer heat are significant. Older infrastructure is the norm rather than the exception.",
    coverage:
      "We serve Taft and the nearby communities in the surrounding area, covering residential repair, residential service and emergency response.",
    residential:
      "Home plumbing here often means replacing corroded galvanized branches, repairing cast iron waste lines, fixing pressure problems on hillside properties and replacing aging water heaters. We also handle everyday fixture, faucet and toilet work.",

    emergency:
      "Emergency work covers burst galvanized lines, sewer backups and water heater failures. Because Taft is a distance from the city, our provider availability availability and careful phone triage matter more here than almost anywhere we serve.",
    drains:
      "Older drain systems that have scaled down internally clog more easily than modern pipe. Jetting restores flow where buildup is the cause, and camera inspection confirms whether the pipe itself is still sound.",
    sewer:
      "Cast iron and clay laterals under hillside properties can suffer from both corrosion and movement. Locating the defect accurately is essential when excavation on a slope is involved, and we camera before we dig.",
    waterHeaters:
      "Hard water and older installations mean many Taft water heaters are past their service life and often out of compliance with current strapping and venting requirements. We bring installations up to code as part of replacement.",
    leaks:
      "Hillside properties can hide leaks well because water travels downslope before surfacing. Meter verification and acoustic location prevent digging in the wrong place entirely.",
    pipes:
      "Galvanized replacement is common, and pressure complaints frequently trace back to internally rusted pipe rather than the city supply. We repipe affected branches with copper or PEX and correct pressure regulation where needed.",
    problems: [
      { h: "Corroded oil-era plumbing", p: "Original galvanized supply lines rust internally, dropping pressure and discoloring water throughout the house." },
      { h: "Hillside pressure variation", p: "Elevation differences across properties create pressure issues that a correctly set regulator resolves." },
      { h: "Cast iron drain deterioration", p: "The invert of old cast iron wears through, catching solids and causing repeat clogs." },
      { h: "Non-compliant water heater installations", p: "Many older units lack current strapping, pans and venting requirements." },
      { h: "Underground line failures on slopes", p: "Movement and erosion stress buried pipe, and leaks surface far from their actual source." },
    ],
    whyLocal: [
      "Willing to make the drive, with provider availability availability for Taft emergencies",
      "Experienced with oil-era housing and older residential buildings",
      "residential and residential capability from one licensed contractor",
      "pricing details and 10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Thorough phone intake", p: "Distance means we plan the visit carefully and bring what the job is likely to need." },
      { h: "Full system assessment", p: "Pressure, pipe material, drain behavior and water heater condition reviewed together." },
      { h: "pricing details", p: "Honest pricing, including what can wait and what should not." },
      { h: "Perform the work", p: "Code-compliant repairs and installations with proper support and materials." },
      { h: "Verify and document", p: "Testing under load, cleanup and a clear summary of the work." },
    ],
    faqs: [
      { q: "Do you serve Taft and the surrounding area?", a: "Yes. We provide residential and residential plumbing service in Taft, including provider availability emergency response." },
      { q: "Why is my water pressure low throughout the house?", a: "In older Taft homes it is usually internally rusted galvanized pipe reducing the effective diameter, sometimes combined with a failing pressure regulator. We measure before recommending anything." },
      { q: "Can you handle residential plumbing for local homeowners?", a: "Yes, including restrooms, kitchens, break areas, drain jetting and residential water heating, with scheduling outside operating hours when needed." },
      { q: "Is my old water heater installation up to code?", a: "Many older installations are not. We check strapping, venting, pan and relief valve routing and bring the installation to current California code when we replace a unit." },
      { q: "Do you charge extra to travel to Taft?", a: "Estimates are free and pricing is discussed before work begins, so you always know the cost in advance." },
    ],
    nearby: ["bakersfield", "arvin", "rosedale", "tehachapi"],
    featuredServices: ["plumbing-repair", "plumbing-repair", "water-heater-repair", "drain-cleaning"],
  },

  {
    slug: "mcfarland",
    name: "McFarland",
    image: "loc-mcfarland",
    alt: "Quiet residential street with older homes and vineyards in McFarland, California",
    title: "Plumber in McFarland, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving McFarland, CA for pipe repair, drain cleaning, water heaters and emergency plumbing. pricing details. Call 661-592-2721.",
    h1: "Plumber in McFarland, CA",
    lede:
      "McFarland is a small agricultural community north of Bakersfield with older housing and hard-working plumbing systems. We serve it for repairs, replacements and after-hours emergencies.",
    intro: [
      "A large share of McFarland's homes were built decades ago and still carry their original supply piping. Combined with mineral-heavy water, that produces the pattern we see most here: gradually falling pressure, discolored water on the first draw and eventually a pinhole or a rusted-through joint.",
      "Households here are often large, so plumbing runs at high duty every day. Water heaters, toilets and kitchen drains take the brunt of it.",
    ],
    character:
      "Surrounded by vineyards and row crops, McFarland has a compact residential core, a small business district and agricultural properties on the outskirts. Water hardness and older infrastructure define most of the plumbing work here.",
    coverage:
      "We cover the McFarland area including the residential neighborhoods, the local business district and nearby rural properties toward Delano and Wasco.",
    residential:
      "Residential work centers on pipe repair and replacement, drain cleaning, water heater service, toilet and faucet repair and general plumbing repairs. For families with one or two bathrooms, we prioritize getting fixtures back in service quickly.",

    emergency:
      "Emergency calls here typically involve failed supply lines in older piping, sewer backups and water heater leaks. We are available provider availabilitys a day and will guide you through shutting off water before we arrive.",
    drains:
      "Heavy daily kitchen use and older drain lines are a difficult combination. Grease coats the pipe wall, and where the line has already scaled down, clogs return quickly unless the buildup is fully removed by jetting.",
    sewer:
      "Older laterals, sometimes clay, are prone to root intrusion and joint separation. Camera inspection identifies exactly which joint is failing, and a spot repair usually solves the recurring backup.",
    waterHeaters:
      "Sediment builds fast in this water. We flush tanks, repair failed components and replace units that are past service life, installing to current code with proper strapping, venting and relief valve routing.",
    leaks:
      "In older homes, small leaks inside walls or under floors often go unnoticed until damage appears. Meter verification and acoustic location let us find them before more of the structure is affected.",
    pipes:
      "Pipe repair is our most frequent McFarland service. Galvanized branches are replaced with copper or PEX, transitions are handled correctly to prevent galvanic corrosion, and pressure is verified after the work.",
    problems: [
      { h: "Internally rusted supply lines", p: "Decades of corrosion inside galvanized pipe reduce pressure and discolor water, and failures cluster once they begin." },
      { h: "Recurring kitchen drain clogs", p: "Heavy cooking plus already narrowed drain lines means grease blockages return quickly after simple cabling." },
      { h: "Overworked water heaters", p: "Large households and small tanks combined with heavy sediment means running out of hot water daily." },
      { h: "Root intrusion in older laterals", p: "Established trees and aging clay pipe produce repeat main line stoppages." },
      { h: "Hidden leaks in older building", p: "Wall and floor cavities conceal slow leaks until staining or soft flooring appears." },
    ],
    whyLocal: [
      "We serve smaller Kern County communities with the same provider availability availability as Bakersfield",
      "Deep experience with older galvanized and clay systems",
      "pricing details so families can plan the work",
      "10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Understand the property", p: "Age, materials and prior repairs guide the diagnosis before we arrive." },
      { h: "Diagnose accurately", p: "Pressure testing, camera inspection or acoustic location depending on the symptom." },
      { h: "pricing details", p: "Straightforward pricing with repair and replacement options explained." },
      { h: "Complete the work", p: "Correct materials, proper transitions and code-compliant installation." },
      { h: "Test and advise", p: "Verification plus guidance on what to expect from the rest of the system." },
    ],
    faqs: [
      { q: "Do you serve McFarland?", a: "Yes, we serve McFarland and the surrounding rural properties for scheduled work and provider availability emergency plumbing." },
      { q: "Why is my water brown in the morning?", a: "That is a classic sign of internally rusted galvanized supply pipe. Replacing the affected branches with copper or PEX restores both water quality and pressure." },
      { q: "My kitchen drain clogs constantly. What will actually fix it?", a: "Hydro-jetting removes the grease layer coating the pipe wall rather than punching a hole through it, which is why it breaks the cycle when cabling alone does not." },
      { q: "Can you replace a water heater the one visit?", a: "In most cases yes. We carry common sizes and can usually complete a standard replacement in a few hours, including removal of the old unit." },
      { q: "Are estimates free?", a: "Yes, estimates are always free and pricing is explained before any work begins." },
    ],
    nearby: ["wasco", "shafter", "oildale", "bakersfield"],
    featuredServices: ["pipe-repair", "drain-cleaning", "water-heater-repair", "emergency-plumbing"],
  },

  {
    slug: "tehachapi",
    name: "Tehachapi",
    image: "loc-tehachapi",
    alt: "Mountain town neighborhood with pines and snow-dusted ridges in Tehachapi, California",
    title: "Plumber in Tehachapi, CA | Tommy's Plumbing Service",
    description:
      "Plumber serving Tehachapi, CA for frozen and burst pipes, water heaters, drains and emergencies. pricing details, provider availability service. Call 661-592-2721.",
    h1: "Plumber in Tehachapi, CA",
    lede:
      "Tehachapi's elevation changes the plumbing equation entirely. Freezing nights, snow and larger rural properties create failures you simply do not see down in the valley.",
    intro: [
      "At roughly four thousand feet, Tehachapi gets real winter. Water lines in unheated garages, crawl spaces, exterior walls and outbuildings freeze, expand and split, usually announcing themselves the moment temperatures rise and the ice thaws. Winterization here is not optional advice; it is basic property protection.",
      "Many properties are also on larger parcels with well systems, pressure tanks, long service runs and secondary structures, which means diagnosis often starts outside the house rather than inside it.",
    ],
    character:
      "Set in the mountains southeast of Bakersfield, Tehachapi has pine-lined neighborhoods, ranch properties and a historic downtown. Winter temperatures regularly drop below freezing, and snow is a normal part of the season. Homes here often have detached garages, shops and guest structures with their own plumbing.",
    coverage:
      "We serve the Tehachapi area including in-town neighborhoods and outlying rural properties. Winter emergency calls are answered provider availabilitys a day.",
    residential:
      "Our residential work here is heavy on freeze damage: split supply lines, ruptured hose bibs, burst lines in unheated spaces and the water damage that follows a thaw. We also handle water heater installation and repair, drain clearing, fixture work and pressure problems on rural systems.",

    emergency:
      "The classic Tehachapi emergency is a pipe that froze overnight and split, then began flooding when it thawed. We answer provider availabilitys a day, tell you which valve to close and get a technician moving.",
    drains:
      "Standard clogs happen here as anywhere, but we also see drain and vent issues related to seasonal use in vacation and second properties where fixtures sit unused and traps dry out.",
    sewer:
      "Rural properties may have longer laterals or septic connections, and locating the line accurately is essential before any excavation, especially in frozen or snow-covered ground.",
    waterHeaters:
      "Colder incoming water means water heaters work harder here than in the valley, and recovery capacity matters more. We size replacements with that in mind, particularly for tankless units, which lose output as inlet temperature drops.",
    leaks:
      "Freeze-related leaks dominate in winter, and hidden leaks in crawl spaces and outbuildings are common year round. We isolate and locate before opening anything.",
    pipes:
      "Pipe repair and freeze protection are our most requested Tehachapi services. We repair splits, reroute vulnerable runs into conditioned space where practical, and insulate exposed piping properly rather than wrapping it and hoping.",
    problems: [
      { h: "Frozen and burst pipes", p: "Uninsulated lines in garages, crawl spaces and exterior walls split when they freeze, then flood when they thaw." },
      { h: "Ruptured hose bibs", p: "Outdoor faucets left connected to a hose over winter are among the most common freeze failures." },
      { h: "Reduced tankless output in winter", p: "Colder inlet water reduces the flow a tankless unit can heat, which surprises households that sized the unit on summer performance." },
      { h: "Dry traps in seasonal properties", p: "Unused fixtures in second homes let trap water evaporate, allowing sewer odor into the building." },
      { h: "Long rural service runs", p: "Distance between meter or well and structures increases exposure to both freezing and undetected leaks." },
    ],
    whyLocal: [
      "We understand mountain-specific failures, not just valley plumbing",
      "provider availability emergency response through winter",
      "Freeze protection and reroute work that prevents repeat damage",
      "pricing details and 10% senior and military discount",
      "independent provider credentials, California State License #957013",
    ],
    process: [
      { h: "Winter-aware intake", p: "We ask about exposure, insulation and where the split is likely to be before dispatching." },
      { h: "Shut down and assess", p: "Stopping the water comes first, then a full check for additional split sections." },
      { h: "pricing details", p: "Repair pricing plus optional freeze protection so the same failure does not repeat." },
      { h: "Repair and protect", p: "New pipe installed, vulnerable runs insulated or rerouted where practical." },
      { h: "Season-ready walkthrough", p: "Guidance on shut-off locations, winterization and hose bib protection." },
    ],
    faqs: [
      { q: "Do you service Tehachapi in winter?", a: "Yes. We respond to Tehachapi provider availabilitys a day, including winter freeze emergencies and burst pipe repairs." },
      { q: "How do I prevent my pipes from freezing?", a: "Disconnect hoses from outdoor faucets, insulate exposed lines in garages and crawl spaces, keep the structure above freezing, and know where your main shut-off is. We can also insulate or reroute vulnerable runs." },
      { q: "Is a tankless water heater a good idea at this elevation?", a: "It can be, but colder incoming water reduces the flow a unit can heat. We size for winter conditions rather than summer, so the system performs when you actually need it." },
      { q: "My second home smells like sewer when I arrive. Why?", a: "Trap water evaporates in unused fixtures, letting sewer gas in. Running every fixture briefly on arrival usually resolves it, and we can check venting if it persists." },
      { q: "Are estimates free in Tehachapi?", a: "Yes, estimates are free and we explain pricing before any work begins." },
    ],
    nearby: ["arvin", "lamont", "bakersfield", "taft"],
    featuredServices: ["emergency-plumbing", "pipe-repair", "water-heater-installation", "plumbing-repair"],
  },
];

export const locationBySlug = (slug: string) => locations.find((l) => l.slug === slug)!;
