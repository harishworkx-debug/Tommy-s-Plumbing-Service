export interface Faq { q: string; a: string }

export interface Service {
  slug: string;            // e.g. "plumbing-repair"
  name: string;            // "Plumbing Repair"
  short: string;           // nav / card blurb
  image: string;           // asset key
  alt: string;
  title: string;           // meta title
  description: string;     // meta description
  h1: string;
  lede: string;
  intro: string[];
  includes: string[];
  problems: { h: string; p: string }[];
  signs: string[];
  professional: string;
  benefits: string[];
  diagnostic: { h: string; p: string }[];
  work: { h: string; p: string }[];
  expect: string;
  residential: string;
  maintenance: string[];
  safety: string;
  faqs: Faq[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: "plumbing-repair",
    name: "Plumbing Repair",
    short: "Fast diagnosis and lasting repairs for fixtures, valves, supply lines and drains.",
    image: "service-plumbing-repair",
    alt: "Plumber repairing a copper supply line and shut-off valve in a Bakersfield home",
    title: "Plumbing Repair in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Licensed plumbing repair in Bakersfield, CA for leaks, valves, faucets, toilets and supply lines. pricing details, provider availability service. Call 661 689-3958.",
    h1: "Plumbing Repair in Bakersfield, CA",
    lede:
      "From a dripping angle stop under the sink to a failed pressure regulator on the main line, Tommy's Plumbing Service repairs residential and residential plumbing across Bakersfield with straightforward pricing and workmanship that holds up.",
    intro: [
      "Most plumbing repairs start small. A faucet that weeps at the base, a toilet that runs for a few seconds every hour, a washing machine valve that stiffens up. Left alone in Bakersfield's hard water and hot summers, those small problems accelerate: mineral scale builds inside the fixture, rubber seats harden, and a five-minute repair becomes a cabinet full of water damage.",
      "Our repair work is built around finding the actual cause instead of swapping parts and hoping. We check static water pressure at the hose bib, inspect shut-off valves, look at how the fixture was originally installed, and only then recommend a repair. If a component is worn beyond a reliable fix, we will tell you plainly and give you a pricing details for the replacement so you can decide.",
    ],
    includes: [
      "Faucet repair and faucet installation for kitchen, bath, laundry and outdoor hose bibs",
      "Toilet repair and toilet installation, including flange, wax ring and fill valve work",
      "Angle stops, ball valves, gate valves and main shut-off replacement",
      "Pressure regulator testing and replacement when household pressure runs high",
      "Garbage disposal repair and replacement, plus P-trap and tailpiece corrections",
      "Shower valve cartridges, tub diverters and mixing valve repairs",
      "Supply line and stub-out repairs behind sinks, toilets and appliances",
      "General plumbing repairs for rentals, homeowners and light residential spaces",
    ],
    problems: [
      { h: "Dripping and weeping faucets", p: "Hard water chews through rubber washers and ceramic cartridges. A steady drip wastes water every day and stains sinks and tubs. Rebuilding or replacing the cartridge usually restores the fixture completely." },
      { h: "Running toilets", p: "A worn flapper or misadjusted fill valve can quietly send hundreds of gallons down the drain each month. We test the flush cycle, inspect the flapper seat and set the water level correctly." },
      { h: "Seized shut-off valves", p: "Older multi-turn angle stops in Bakersfield homes often freeze in place from mineral buildup. Replacing them with quarter-turn valves means you can actually shut water off in an emergency." },
      { h: "Low or fluctuating water pressure", p: "This can be a failing regulator, a partially closed valve, scaled aerators or a hidden leak. We measure pressure rather than guess, then narrow the cause down to a single point." },
      { h: "Leaks under sinks and behind fixtures", p: "Slip joints loosen, P-traps corrode and supply hoses fail at the crimp. We repair the connection and check the cabinet base for water damage before finishing." },
    ],
    signs: [
      "Water stains on cabinet floors, drywall or ceilings below a bathroom",
      "A water bill that jumps without a change in household use",
      "Fixtures that sputter, hammer or bang when shut off quickly",
      "Corrosion, green crusting or white mineral trails on pipes and valves",
      "Slow filling toilets or a shower that loses pressure when another tap runs",
    ],
    professional:
      "Anything involving the main shut-off, the pressure regulator, gas piping, sewer connections, or a leak inside a wall or slab should be handled by a licensed plumber. California License #957013 covers the work we do, and every repair is performed to code so it holds up during a future inspection or home sale.",
    benefits: [
      "Lower water bills once drips and running fixtures are corrected",
      "Protection against water damage, mold and drywall repair costs",
      "Correct water pressure, which extends the life of every fixture in the house",
      "Repairs completed to California plumbing code by a licensed contractor",
      "pricing details before work begins and specialized warranties on qualifying repairs",
    ],
    diagnostic: [
      { h: "Listen first", p: "We start with what you have noticed: when the problem happens, what makes it worse, and whether it has changed over time. That history usually narrows the cause faster than any tool." },
      { h: "Test the system, not just the fixture", p: "Static pressure, flow at nearby fixtures and the condition of shut-off valves tell us whether the problem is isolated or system wide." },
      { h: "Isolate the failure point", p: "We shut off sections, dry the area and watch where water reappears. That confirms the leak source instead of assuming it." },
      { h: "Present options and pricing", p: "You get a clear explanation of the repair, what a replacement would cost instead, and an honest recommendation before anything is taken apart." },
    ],
    work: [
      { h: "Protect the work area", p: "Drop cloths, towels and a staged bucket go down before a single fitting is loosened, especially inside finished cabinetry." },
      { h: "Shut down and drain", p: "We isolate the smallest section possible so the rest of the home keeps water while we work." },
      { h: "Repair or replace with quality parts", p: "Brass angle stops, braided stainless supplies and manufacturer-matched cartridges instead of the cheapest option on the shelf." },
      { h: "Pressure test and observe", p: "Water goes back on slowly, connections are checked under pressure, and the fixture is cycled several times before we call it done." },
      { h: "Clean up completely", p: "Old parts leave with us, the cabinet is dried out, and you get a walkthrough of exactly what was repaired." },
    ],
    expect:
      "Repairs are scheduled in arrival windows, and we call ahead when we are on the way. Most single-fixture repairs are finished in one visit because our trucks carry the valves, cartridges, supplies and fittings used in the vast majority of Bakersfield homes.",
    residential:
      "In houses we handle everything from a leaking hose bib on the side yard to a full set of angle stop replacements before a kitchen remodel. Older neighborhoods near downtown and Oildale often need valve and galvanized stub-out work; newer tracts in the northwest more often need cartridge, regulator and disposal repairs.",

    maintenance: [
      "Exercise angle stops and the main shut-off twice a year so they are not seized when you need them",
      "Soak aerators and shower heads in vinegar to clear Bakersfield's mineral scale",
      "Replace braided supply hoses on washing machines and toilets every several years",
      "Keep household pressure in a safe range instead of letting a failing regulator run high",
      "Have a plumbing inspection before buying, selling or remodeling",
    ],
    safety:
      "Never force a corroded valve past resistance, and never over-tighten a compression nut to stop a drip; both can turn a small leak into an open line. Know where your main shut-off is before you need it, and if you smell gas or see water near electrical outlets, leave the area and call for emergency service.",
    faqs: [
      { q: "Do you charge for an estimate on a plumbing repair?", a: "No. Tommy's Plumbing Service provides pricing details. We diagnose the issue, explain what is failing and give you pricing before any repair begins." },
      { q: "Can most repairs be done in one visit?", a: "Yes. Our service vehicles carry the valves, cartridges, supply lines and fittings used in the majority of Bakersfield homes and homeowners, so single-fixture repairs are usually completed the one visit." },
      { q: "Should I repair or replace an old fixture?", a: "If the fixture body is sound and parts are still available, repair is usually the better value. If the fixture is heavily scaled, corroded or discontinued, replacement often costs less over time. We will give you both prices." },
      { q: "Do you offer a discount?", a: "Yes, we offer a 10% discount for seniors and military personnel, and specialized warranties are available on qualifying work." },
      { q: "Are you independent provider credentials?", a: "Yes. We are a independent provider credentials plumbing contractor operating under California State License #957013." },
    ],
    related: ["leak-detection", "pipe-repair", "drain-cleaning", "emergency-plumbing"],
  },

  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    short: "provider availability response for burst pipes, major leaks, sewer backups and no-water situations.",
    image: "service-emergency-plumbing",
    alt: "Emergency plumber stopping a burst pipe leak in a home laundry room at night",
    title: "Emergency Plumbing in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "provider availability emergency plumbing in Bakersfield, CA. Burst pipes, major leaks, sewer backups and no hot water. independent provider credentials, pricing details. Call 661 689-3958.",
    h1: "Emergency Plumbing in Bakersfield, CA",
    lede:
      "Water does not wait for provider scheduling. Tommy's Plumbing Service answers emergency calls provider availabilitys a day, 7 days a week across Bakersfield and Kern County, with licensed technicians who can stop the damage and then fix the cause.",
    intro: [
      "A plumbing emergency is any failure that is actively damaging your property or making the building unusable: a supply line that let go, a sewer backing up into a tub, a water heater dumping its tank, or a main line break in the front yard. Every minute those run, the repair bill grows.",
      "Our first job on an emergency call is containment. We isolate the water, stop the flow and make the space safe. Only then do we move into diagnosis and repair, so you are not paying for exploratory work while the floor is still flooding.",
    ],
    includes: [
      "Burst pipe and split supply line repair, including overnight and weekend calls",
      "Emergency leak repair inside walls, ceilings, crawl spaces and slabs",
      "Sewer backups and overflowing floor drains, tubs and toilets",
      "Main water line breaks and failed main shut-off valves",
      "Water heater failures, leaking tanks and complete loss of hot water",
      "Frozen or ruptured lines during Tehachapi-area cold snaps",
      "residential emergencies for residentials, homes and residential that cannot close",
    ],
    problems: [
      { h: "Supply line and pipe bursts", p: "Braided hoses, old galvanized nipples and pressure-stressed copper are the most common failures. Water can move through drywall and flooring in minutes, so shutting the main off first matters more than finding the exact spot." },
      { h: "Sewer backups", p: "Waste rising into the lowest fixture in the house is a main line problem, not a fixture problem. It needs cabling or hydro-jetting and often a camera inspection to find what caused it." },
      { h: "Water heater failure", p: "A tank that ruptures releases forty gallons plus whatever keeps refilling it. Shutting off the cold inlet and gas or breaker is the immediate step; replacement usually follows." },
      { h: "No water at all", p: "A failed main valve, a broken service line or a stuck pressure regulator can cut supply to the whole property. This is an emergency for households and a major inconvenience for home kitchens." },
      { h: "Gas odors near appliances", p: "Leave the building and call from outside. Once the property is safe, we can inspect and repair the appliance connection." },
    ],
    signs: [
      "Water spreading across a floor faster than towels can absorb it",
      "The sound of running water when every fixture is off",
      "Sewage odor combined with slow or gurgling drains throughout the building",
      "A ceiling that is bulging, dripping or discolored",
      "Water pooling in the yard above the main line or sewer route",
    ],
    professional:
      "Anything involving sewage, gas, electrical proximity or structural water intrusion needs a licensed plumber immediately. Improvised fixes such as tape wraps and clamps can hold long enough to feel safe and then fail at 3 a.m. under full pressure.",
    benefits: [
      "Round-the-clock availability, including nights, weekends and holidays",
      "Immediate containment that limits flooring, drywall and cabinet damage",
      "independent provider credentials work under California State License #957013",
      "pricing details for the permanent repair after the emergency is stabilized",
      "One company handles the stop-gap and the lasting fix, so nothing gets lost between trades",
    ],
    diagnostic: [
      { h: "Phone triage", p: "When you call 661 689-3958 we walk you through shutting off the right valve before we arrive. That single step often saves thousands in damage." },
      { h: "Stop the source", p: "On arrival we isolate the failed section so the rest of the property can keep water where possible." },
      { h: "Assess the spread", p: "We check adjacent rooms, subfloor, ceilings below and cabinet bases to understand how far the water traveled." },
      { h: "Explain the repair path", p: "You get the emergency fix, the permanent fix and the pricing for both before we continue." },
    ],
    work: [
      { h: "Immediate stabilization", p: "Cut, cap or isolate the failure so water stops moving into the structure." },
      { h: "Access the failure", p: "Minimal, targeted openings in drywall or flooring rather than tearing out an entire wall." },
      { h: "Permanent repair", p: "New sections of copper, PEX or ABS installed and pressure tested, not patched." },
      { h: "Verify the whole system", p: "We re-pressurize and check nearby joints, because a pressure event often stresses more than one point." },
      { h: "Document the damage", p: "Photos and a written description of the failure help if you need to file an insurance claim." },
    ],
    expect:
      "Emergency calls are dispatched by urgency. We confirm the address, tell you what to shut off, and give you an honest arrival time rather than an optimistic one. There is no separate estimate charge; you will know the cost before repair work begins.",
    residential:
      "Homes take the worst of it because water finds finished flooring, carpet and cabinetry. We prioritize occupied residences with no water or active flooding, and we work carefully in finished spaces to limit demolition.",

    maintenance: [
      "Tag the main shut-off and teach everyone in the building where it is",
      "Replace rubber washing machine hoses with braided stainless lines",
      "Have the sewer camera inspected if you have had more than one backup",
      "Watch water heater age; most tanks fail between year eight and year twelve",
      "Insulate exposed lines in unheated garages and higher-elevation areas",
    ],
    safety:
      "Keep people away from standing water near outlets, appliances or panels. Do not use a plunger on a line that is backing up from the main. If sewage has entered living space, limit contact and ventilate the area until it can be cleaned properly.",
    faqs: [
      { q: "Are you really available provider availabilitys?", a: "Yes. Tommy's Plumbing Service is open provider availabilitys a day, 7 days a week for both scheduling and emergency plumbing calls in Bakersfield and the surrounding Kern County communities." },
      { q: "What should I do before the plumber arrives?", a: "Shut off the main water valve, or the fixture stop if the leak is isolated. For water heater leaks, close the cold inlet and turn off gas or the breaker. Move belongings out of the water and keep the area clear." },
      { q: "Is an emergency call more expensive?", a: "We give you pricing before work begins, at any hour, and estimates are always free. You will never be surprised by the number after the fact." },
      { q: "Can you handle a sewage backup?", a: "Yes. We clear main line stoppages and can run a sewer camera inspection afterward to identify roots, bellies, grease or a broken section that caused the backup." },
      { q: "Do you serve areas outside Bakersfield at night?", a: "Yes, we respond throughout the surrounding area including Rosedale, Oildale, Shafter, Lamont, Arvin, Taft, Wasco, McFarland and Tehachapi." },
    ],
    related: ["plumbing-repair", "leak-detection", "sewer-line-repair", "water-heater-repair"],
  },

  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    short: "Cabling and hydro-jetting for kitchen, bath, laundry and main line stoppages.",
    image: "service-drain-cleaning",
    alt: "Plumber using a professional drain cleaning machine on a floor drain in a Bakersfield home",
    title: "Drain Cleaning in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Professional drain cleaning in Bakersfield, CA for slow drains, clogs and main line stoppages. pricing details and provider availability service. Call 661 689-3958.",
    h1: "Drain Cleaning in Bakersfield, CA",
    lede:
      "Slow sinks, gurgling tubs and recurring clogs are symptoms, not the problem. We clear the line properly and tell you what caused the blockage so it does not come back next month.",
    intro: [
      "A drain that has slowed over weeks is usually lined with grease, soap scum, hair and mineral deposit. A drain that stops suddenly is more often an object, a root intrusion or a failure further down the line. The two need different tools, and using the wrong one wastes your money.",
      "We size the approach to the line: a small drum machine for a lavatory arm, a full sectional machine for a main, and hydro-jetting where grease and scale need to be scoured off the pipe wall rather than punched through.",
    ],
    includes: [
      "Kitchen sink, garbage disposal and dishwasher drain clearing",
      "Bathroom sink, tub, shower and toilet drain stoppages",
      "Laundry standpipe and floor drain clearing",
      "Main sewer line cabling through cleanouts",
      "Hydro-jetting for grease-heavy residential and residential lines",
      "Drain inspection and camera verification after clearing",
      "Home kitchen line maintenance and drainage issues",
    ],
    problems: [
      { h: "Kitchen grease buildup", p: "Cooking fats cool and coat the inside of the drain, narrowing it a little more with every meal until water backs up. Cabling opens a channel; jetting removes the layer." },
      { h: "Hair and soap in bath lines", p: "The classic slow tub. Hair binds with soap scum into a mat at the trap or just past it, and it rebuilds unless the arm is cleared fully." },
      { h: "Root intrusion in older lines", p: "Clay and cast iron sewer laterals in older Bakersfield neighborhoods invite roots at every joint. Cutting them clears the line, but a camera inspection tells you how bad the joint really is." },
      { h: "Hard water scale", p: "Kern County water leaves mineral deposit inside older galvanized drains, reducing diameter permanently in some sections." },
      { h: "Improper venting or line slope", p: "A drain that gurgles or empties slowly even when clear may have a venting problem or a belly in the pipe that traps water and debris." },
    ],
    signs: [
      "Water standing in a sink or tub after use instead of draining freely",
      "Gurgling from a nearby fixture when another one drains",
      "Sewer odor near a floor drain, shower or laundry area",
      "More than one fixture backing up at the same time, which points to the main",
      "Repeated clogs at the same location within a few months",
    ],
    professional:
      "Store-bought chemical drain openers can damage older pipe, harm fixtures and create a hazard for whoever opens the line next. If plunging has failed, if two fixtures are affected at once, or if waste is coming up rather than going down, it is time for professional equipment.",
    benefits: [
      "Full-diameter clearing instead of a temporary channel through the blockage",
      "Camera verification so you know whether the pipe itself is damaged",
      "No corrosive chemicals left sitting in your drain system",
      "Cleaner, faster drains and no recurring odor",
      "pricing details and provider availability availability when a main line backs up at a bad time",
    ],
    diagnostic: [
      { h: "Identify affected fixtures", p: "Which drains are slow tells us immediately whether this is a branch line or the main." },
      { h: "Locate the access point", p: "We use an existing cleanout when possible so the machine works with the line rather than through a fixture." },
      { h: "Choose the right cutter head", p: "Grease, roots and solid objects all require different heads and cable diameters." },
      { h: "Camera when it matters", p: "For repeat stoppages or main line backups we recommend a sewer camera inspection to see the actual condition of the pipe." },
    ],
    work: [
      { h: "Protect the space", p: "Floors and surrounding surfaces are covered before equipment comes inside." },
      { h: "Cable the line", p: "The cutter is worked through the blockage and back multiple times so the full pipe diameter is opened." },
      { h: "Jet where needed", p: "High-pressure water scours grease, sludge and scale off the pipe wall, restoring near-original flow." },
      { h: "Flush and test", p: "We run heavy water through the line and watch the fixtures to confirm the line carries a real load." },
      { h: "Report findings", p: "You hear what came out, what caused it, and whether the pipe needs further attention." },
    ],
    expect:
      "Most branch line clogs are cleared within an hour or two. Main line work takes longer, especially when a cleanout must be located first. We keep the work area covered, wipe down after, and haul away everything that comes out of the line.",
    residential:
      "Household drain cleaning ranges from a single slow bathroom sink to a full main line stoppage affecting every fixture. In homes with mature landscaping, roots are the usual cause of repeat main line problems, and we will show you what we found.",

    maintenance: [
      "Never pour cooking grease down a kitchen drain, even with hot water behind it",
      "Use strainers in showers and tubs to catch hair before it reaches the trap",
      "Run plenty of cold water while a garbage disposal is grinding, and keep fibrous scraps out",
      "Flush infrequently used floor drains so the trap does not dry out and release odor",
      "Schedule preventative jetting for heavily used home kitchens rather than waiting for a backup",
    ],
    safety:
      "Do not mix chemical drain products, and never cable a line after chemicals have been poured in without telling the technician; caustic liquid can splash back. If waste has overflowed onto floors, treat it as contaminated and keep children and pets away until it is cleaned.",
    faqs: [
      { q: "How fast can you clear a clogged drain?", a: "Most branch line clogs are cleared in a single visit, often within an hour or two. Main sewer line stoppages take longer, and we are available provider availability when a backup cannot wait." },
      { q: "Is hydro-jetting better than cabling?", a: "They solve different problems. Cabling breaks through and cuts obstructions such as roots. Jetting scours grease, sludge and scale off the pipe wall and restores closer to full flow. We recommend based on what is in your line." },
      { q: "Why does my drain keep clogging?", a: "Repeat clogs usually mean the underlying cause was never removed, or the pipe has a defect such as a belly, offset joint or root intrusion. A sewer camera inspection answers that question definitively." },
      { q: "Are chemical drain cleaners safe to use first?", a: "We do not recommend them. They can damage older pipe and fixtures, rarely clear a real blockage, and create a splash hazard for the technician who opens the line afterward." },
      { q: "Do you clean drains for home kitchens?", a: "Yes. We handle residential drain lines including preventative jetting scheduled at your convenience." },
    ],
    related: ["sewer-camera-inspection", "sewer-line-repair", "plumbing-repair", "plumbing-repair"],
  },

  {
    slug: "sewer-camera-inspection",
    name: "Sewer Camera Inspection",
    short: "Video inspection that shows the true condition of your sewer lateral before you spend money.",
    image: "service-sewer-camera",
    alt: "Plumber running a sewer inspection camera into a residential cleanout while watching the monitor",
    title: "Sewer Camera Inspection in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Sewer camera inspection in Bakersfield, CA to find roots, breaks, bellies and blockages before you dig. pricing details. Call 661 689-3958.",
    h1: "Sewer Camera Inspection in Bakersfield, CA",
    lede:
      "Guesswork is expensive underground. A video inspection shows exactly what is happening inside your sewer lateral so repairs are targeted instead of exploratory.",
    intro: [
      "A sewer camera is a high-resolution head on a flexible push rod, fed through a cleanout and down the line while the technician watches a monitor. It shows joints, bellies, offsets, cracks, root masses, grease layers and foreign objects, with a locator that marks the depth and position from the surface.",
      "Homeowners use it before buying a property, after a second backup, or before committing to a repair. Contractors and homeowners use it to document line condition and settle disputes about what is actually wrong.",
    ],
    includes: [
      "Full video inspection of the sewer lateral from cleanout to the city connection",
      "Root intrusion assessment at joints and transitions",
      "Belly and low-spot identification where waste and water pool",
      "Crack, offset and collapse documentation",
      "Sewer line locating with depth and surface marking",
      "Pre-purchase inspections for home buyers in Bakersfield and Kern County",
      "Post-cleaning verification after cabling or hydro-jetting",
    ],
    problems: [
      { h: "Roots at pipe joints", p: "Trees seek the moisture and nutrients in a sewer line. Roots enter at a joint as hair-fine strands and grow into a dense mass that catches paper and solids." },
      { h: "Bellies and sags", p: "Soil movement or poor original bedding lets a section settle. Water stops draining fully through that spot and solids accumulate, causing repeat stoppages nothing seems to fix." },
      { h: "Offset and separated joints", p: "Older clay pipe shifts. The lip of the offset catches debris and lets soil enter the line." },
      { h: "Cracks and collapses", p: "Cast iron corrodes from the inside out; clay cracks under load. A camera distinguishes a repairable section from a line that needs replacement." },
      { h: "Foreign objects and misuse", p: "Wipes, hygiene products, building debris and toys show up far more often than people expect, especially in rental properties." },
    ],
    signs: [
      "Two or more main line backups in a year",
      "Sewage odor in the yard or around a cleanout",
      "Patches of unusually green or sunken lawn along the sewer route",
      "Gurgling toilets when the washing machine drains",
      "Buying an older home with mature trees and no service history",
    ],
    professional:
      "Reading a sewer video takes experience. Water level, camera orientation and pipe material all affect what an image means. A licensed plumber can tell the difference between a harmless deposit and a structural failure, and can locate the defect accurately enough to dig one hole instead of three.",
    benefits: [
      "Know the real condition of the line before spending money on repairs",
      "Avoid unnecessary excavation by pinpointing the exact defect and depth",
      "Documented evidence for real estate negotiations and insurance claims",
      "Confirmation that a cleaning actually restored the line",
      "A maintenance baseline you can compare against in future years",
    ],
    diagnostic: [
      { h: "Find or establish access", p: "We use an existing cleanout when available. If there is none, we discuss the best access point before starting." },
      { h: "Clear enough to see", p: "A line full of standing water or grease may need light cabling first so the camera can produce a usable image." },
      { h: "Record the run", p: "The full length is recorded so you can see the findings rather than take our word for it." },
      { h: "Locate and mark", p: "The transmitter in the camera head lets us mark the surface position and depth of any defect." },
    ],
    work: [
      { h: "Review the footage together", p: "We walk you through what you are seeing, in plain language, at each point of interest." },
      { h: "Classify severity", p: "Monitor, clean, spot repair or replace. Not every imperfection needs immediate work." },
      { h: "Quote only what is needed", p: "If a targeted spot repair solves it, we quote a spot repair rather than a full line replacement." },
      { h: "Plan access", p: "Where excavation is required, we identify the least disruptive dig location before work is scheduled." },
    ],
    expect:
      "A typical residential inspection takes under an hour once access is established. You will see the monitor during the run and get a clear explanation of findings, along with a pricing details for any recommended repair.",
    residential:
      "For homeowners, the most common use is answering why a main line keeps backing up, and whether a house being purchased has a sewer problem hiding underground. Older Bakersfield neighborhoods with mature trees are prime candidates.",

    maintenance: [
      "Inspect the lateral before purchasing any home older than about thirty years",
      "Re-inspect every few years if you have known root intrusion",
      "Camera the line after any main line backup rather than assuming cabling solved it",
      "Keep a permanent, accessible cleanout so future service is cheaper",
      "Avoid planting large trees directly over the sewer route",
    ],
    safety:
      "Never enter a trench or excavation to look at a pipe yourself; unshored soil collapses without warning. Keep cleanout caps sealed between services so sewer gas stays in the line.",
    faqs: [
      { q: "How long does a sewer camera inspection take?", a: "Most residential inspections take under an hour once we have access through a cleanout. Longer runs or lines that need clearing first take more time." },
      { q: "Can you tell me exactly where the problem is?", a: "Yes. The camera head carries a transmitter, so we locate the defect from the surface and mark its position and depth. That keeps excavation targeted." },
      { q: "Do I need an inspection before buying a house?", a: "It is one of the most valuable inspections you can add, especially on older properties with mature trees. Sewer repairs are among the costliest surprises a new owner can inherit." },
      { q: "Will you show me the video?", a: "Yes. We review the footage with you and explain what each finding means before recommending anything." },
      { q: "Does a camera inspection clear the clog?", a: "No, it diagnoses. If the line needs clearing we perform drain cleaning or hydro-jetting, then verify with the camera." },
    ],
    related: ["sewer-line-repair", "drain-cleaning", "leak-detection", "plumbing-repair"],
  },

  {
    slug: "sewer-line-repair",
    name: "Sewer Line Repair",
    short: "Spot repairs and replacement for cracked, collapsed and root-damaged sewer laterals.",
    image: "service-sewer-line-repair",
    alt: "Underground sewer line repair with new PVC pipe in an open trench at a California home",
    title: "Sewer Line Repair in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Sewer line repair and replacement in Bakersfield, CA for root damage, cracks, offsets and collapses. independent provider credentials. Call 661 689-3958.",
    h1: "Sewer Line Repair in Bakersfield, CA",
    lede:
      "When a sewer lateral fails, everything downstream of it stops working. We diagnose the exact failure, repair the section that is broken, and restore the yard properly when the work is done.",
    intro: [
      "Sewer laterals in Kern County range from modern ABS and PVC to decades-old clay and cast iron. Clay joints separate and admit roots. Cast iron scales and corrodes until the bottom of the pipe disappears. Soil movement creates bellies where waste sits instead of flowing.",
      "The right repair depends on what the camera shows. A single cracked section under a lawn is a very different job from a collapsed run beneath a driveway, and the price difference is significant. We quote what the line actually needs.",
    ],
    includes: [
      "Spot repair of cracked, offset or root-damaged sections",
      "Full lateral replacement where the line is beyond repair",
      "Cleanout installation so future service is faster and less invasive",
      "Underground plumbing and sewer line locating before excavation",
      "Transition repairs where old clay or cast iron meets newer pipe",
      "Backfill, compaction and surface restoration of the work area",
      "residential lateral repair for residentials, residential and multi-unit properties",
    ],
    problems: [
      { h: "Root-crushed joints", p: "Years of root growth can pry a joint apart entirely. Cutting roots buys time; the joint still needs repair before it collapses." },
      { h: "Corroded cast iron", p: "The invert of the pipe wears away first, so solids drag and catch. Once the bottom is gone, cleaning no longer helps." },
      { h: "Cracked clay under load", p: "Vehicle traffic, tree growth and soil shifting fracture brittle clay, letting soil in and waste out." },
      { h: "Bellied sections", p: "A low spot holds standing water permanently. Solids settle there and cause repeat stoppages no matter how often the line is cabled." },
      { h: "Improper prior repairs", p: "Mismatched couplings, no bedding, and sections installed at the wrong slope create failures that look like new problems." },
    ],
    signs: [
      "Repeated main line backups even after professional cleaning",
      "Sewage odor outdoors, especially after heavy use or rain",
      "Wet, sunken or unusually lush ground along the sewer path",
      "Slow drainage across the entire building rather than one fixture",
      "Rodent or insect activity near the sewer route, which can indicate a break",
    ],
    professional:
      "Sewer repair involves excavation, code-compliant materials, correct slope and proper bedding and compaction. Done wrong, the line fails again within a few years or the trench settles and cracks a driveway. This is licensed contractor work, and we perform it under California State License #957013.",
    benefits: [
      "A permanent solution instead of annual emergency cabling",
      "Targeted excavation based on camera locating, which limits landscape damage",
      "Modern materials with sealed joints that resist root intrusion",
      "Correct slope restored so waste actually carries",
      "Property value protected and future inspections passed",
    ],
    diagnostic: [
      { h: "Camera and locate", p: "We inspect the full lateral, mark defect positions on the surface and record the depth." },
      { h: "Confirm materials and route", p: "Knowing whether the line is clay, cast iron, ABS or Orangeburg changes the repair method and the price." },
      { h: "Check utilities", p: "Underground utilities are identified before any digging begins." },
      { h: "Present repair options", p: "Spot repair, partial replacement or full replacement, each with a written estimate." },
    ],
    work: [
      { h: "Controlled excavation", p: "We open only the area needed, protecting surrounding landscape and hardscape wherever possible." },
      { h: "Remove the failed section", p: "Damaged pipe is cut out cleanly rather than patched over." },
      { h: "Install and couple correctly", p: "New pipe is set on proper bedding at correct slope with appropriate transition couplings." },
      { h: "Test before closing", p: "The repair is verified, often with a camera pass, before any soil goes back." },
      { h: "Backfill and restore", p: "Soil is replaced in lifts and compacted so the trench does not settle, and the surface is restored." },
    ],
    expect:
      "Most spot repairs are completed in a day. Full replacements depend on length, depth and what is above the line. You will know the scope, timeline and cost before excavation starts, and we keep the site organized and safe throughout.",
    residential:
      "Homes in older parts of Bakersfield and Oildale most often need clay joint and cast iron work, while newer developments in Rosedale see damage from settling and improper original installation. We restore lawns and hardscape as part of the job.",

    maintenance: [
      "Camera the lateral every few years once the line is known to have root activity",
      "Install a permanent cleanout if the property does not have one",
      "Avoid parking heavy vehicles over a shallow lateral",
      "Keep aggressive tree species away from the sewer route",
      "Address slow drainage early rather than after a full backup",
    ],
    safety:
      "Never enter an open trench. Keep children and pets away from the excavation area, and do not drive over a freshly backfilled trench until it has been properly compacted.",
    faqs: [
      { q: "Do you always have to dig up the whole yard?", a: "No. Camera locating lets us pinpoint the defect and its depth so excavation is targeted. Many repairs need one access area rather than a trench across the property." },
      { q: "How do I know whether to repair or replace?", a: "The camera inspection decides it. An isolated crack or offset in an otherwise sound line is a spot repair. Widespread corrosion, multiple bellies or a collapse usually means replacement is the better investment." },
      { q: "How long does a sewer repair take?", a: "Most spot repairs are completed in a single day. Full lateral replacement depends on length, depth and surface conditions, and we give you a timeline with the estimate." },
      { q: "Will my yard be put back?", a: "Yes. We backfill in compacted lifts and restore the surface of the work area as part of the job." },
      { q: "Is the estimate free?", a: "Yes, estimates are free. For sewer work we recommend a camera inspection first so the quote reflects the real condition of the line." },
    ],
    related: ["sewer-camera-inspection", "drain-cleaning", "pipe-repair", "emergency-plumbing"],
  },

  {
    slug: "leak-detection",
    name: "Leak Detection",
    short: "Non-destructive location of slab, wall, underground and hidden supply leaks.",
    image: "service-leak-detection",
    alt: "Technician using electronic leak detection equipment on a bathroom floor in a Bakersfield home",
    title: "Leak Detection in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Professional leak detection in Bakersfield, CA for slab leaks, hidden pipe leaks and high water bills. pricing details, provider availability service. Call 661 689-3958.",
    h1: "Leak Detection in Bakersfield, CA",
    lede:
      "A hidden leak can run for months behind drywall or under a slab before it shows. We find it precisely, with electronic equipment and pressure testing, so the repair opens one small area instead of half a room.",
    intro: [
      "The evidence usually arrives before the water does: a water bill that climbed for no reason, a warm spot on the floor, a musty smell in a closet, or the sound of water running when everything is off. Those are classic signs of a concealed leak in the pressurized side of the system.",
      "Bakersfield's soil movement, hard water and slab-on-grade building make hidden leaks common here. Finding the exact point matters, because the difference between an accurate location and a rough guess is measured in square feet of flooring and drywall.",
    ],
    includes: [
      "Slab leak detection under concrete foundations",
      "In-wall and ceiling supply leak location",
      "Underground water service and irrigation line leak detection",
      "Pressure testing to confirm whether a system is losing water",
      "Water meter testing to quantify the loss",
      "Emergency leak repair once the source is confirmed",
      "residential leak investigation for multi-unit and mixed-use buildings",
    ],
    problems: [
      { h: "Slab leaks", p: "Copper lines routed through or beneath the slab can pinhole from age, abrasion or aggressive water. Symptoms include a warm floor spot, unexplained moisture at the base of walls and a continuously running meter." },
      { h: "In-wall supply leaks", p: "A weeping fitting inside a wall shows up as a stain, a soft spot in drywall, or peeling paint long after the leak began." },
      { h: "Underground service line leaks", p: "Between the meter and the house, a failing service line can lose significant water into the soil with almost no surface sign except a soggy patch." },
      { h: "Irrigation and hose bib leaks", p: "Outdoor leaks are frequently blamed on landscaping when the real cause is a failed valve or a cracked line under the yard." },
      { h: "Toilet and fixture losses", p: "Not every high bill is dramatic. A silently leaking flapper can waste more water in a month than a visible drip." },
    ],
    signs: [
      "Water bill increases with no change in household usage",
      "The meter's leak indicator moves with every fixture shut off",
      "A warm or damp area on a concrete floor",
      "Musty odor, peeling paint or discolored drywall",
      "The sound of running water inside a wall when the house is quiet",
    ],
    professional:
      "Cutting into drywall or breaking concrete to hunt for a leak is the expensive way to find it. Acoustic listening equipment, pressure isolation and moisture detection narrow the location to a small area first. That is the difference between a patch and a remodel.",
    benefits: [
      "Precise location before any surface is opened",
      "Lower water bills and no more escalating waste",
      "Protection against foundation damage, mold and flooring loss",
      "Documentation that supports an insurance claim",
      "Immediate repair capability once the leak is confirmed",
    ],
    diagnostic: [
      { h: "Verify the loss", p: "We check the meter with all fixtures closed to confirm the system is actually losing water and roughly how fast." },
      { h: "Isolate the zone", p: "Shutting off sections separately tells us whether the loss is inside, outside, hot side or cold side." },
      { h: "Listen and scan", p: "Acoustic equipment picks up the sound signature of pressurized water escaping, and moisture readings confirm the area." },
      { h: "Mark the point", p: "We mark the smallest reliable access area and explain what opening it will involve." },
    ],
    work: [
      { h: "Minimal access", p: "One targeted opening rather than exploratory demolition across a room." },
      { h: "Repair or reroute", p: "Depending on pipe condition and location, we repair the section or reroute the line to avoid repeating the failure." },
      { h: "Pressure test the fix", p: "The system is re-pressurized and monitored to confirm the loss has stopped." },
      { h: "Recheck the meter", p: "A final meter test with everything off verifies there is no second leak." },
      { h: "Clean and document", p: "Work area cleaned, photos provided for insurance where relevant." },
    ],
    expect:
      "Detection is usually completed in a single visit. We explain the confidence level of the location before opening anything, and estimates for the repair are provided so you can decide with real numbers.",
    residential:
      "Slab-on-grade homes throughout Bakersfield are the most common setting for our detection work. We also find irrigation and service line leaks in larger lots out toward Rosedale and Arvin, where landscape watering can hide a loss for a long time.",

    maintenance: [
      "Read your water meter monthly with everything off to catch losses early",
      "Watch for warm spots and unexplained moisture on slab floors",
      "Have household pressure checked; high pressure accelerates pinhole leaks",
      "Test toilet flappers with dye once a year",
      "Inspect irrigation valve boxes for constant seepage",
    ],
    safety:
      "Do not attempt to break concrete yourself to find a leak; you can strike a live line, electrical conduit or post-tension cable. Keep water away from outlets and panels, and call for emergency service if a leak becomes a flow you cannot control.",
    faqs: [
      { q: "How do you find a leak without tearing out walls?", a: "We combine meter verification, zone isolation, pressure testing and acoustic listening equipment to narrow the location before any surface is opened, so access is limited to a small targeted area." },
      { q: "What is a slab leak?", a: "It is a leak in a pressurized water line that runs through or beneath the concrete foundation. Warm floor spots, unexplained moisture at wall bases and a constantly moving meter are common signs." },
      { q: "My water bill doubled but I see nothing. Is that a leak?", a: "Very likely. Shut every fixture off and watch the meter. If it still moves, water is escaping somewhere, and hidden leaks are the usual explanation." },
      { q: "Can you repair the leak the one visit you find it?", a: "In most cases yes. provider technicians carry repair materials, and we will give you a pricing details before starting the repair." },
      { q: "Do you handle leaks at night?", a: "Yes. We are available provider availabilitys a day for emergency leak repair throughout Bakersfield and surrounding communities." },
    ],
    related: ["pipe-repair", "plumbing-repair", "emergency-plumbing", "sewer-camera-inspection"],
  },

  {
    slug: "pipe-repair",
    name: "Pipe Repair",
    short: "Repair, rerouting and replacement of copper, PEX, galvanized and ABS piping.",
    image: "service-pipe-repair",
    alt: "Plumber replacing a damaged section of copper and PEX pipe inside an open wall cavity",
    title: "Pipe Repair in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Pipe repair in Bakersfield, CA for pinhole leaks, corroded galvanized lines, burst pipes and reroutes. independent provider credentials. Call 661 689-3958.",
    h1: "Pipe Repair in Bakersfield, CA",
    lede:
      "Whether it is a pinhole in a copper line, a corroded galvanized branch or a section damaged during a remodel, we repair piping so the fix outlasts the pipe around it.",
    intro: [
      "Pipe failures follow patterns. Galvanized steel in older Bakersfield homes rusts from the inside until pressure drops and water discolors. Copper develops pinholes where water chemistry, velocity or grounding issues wear it thin. PEX fails at bad crimps far more often than in the tubing itself.",
      "Because the failure mode tells us what to expect next, we look at the whole run rather than the single wet spot. Sometimes a section repair is all you need. Sometimes rerouting a short length above the slab is the smarter, cheaper long-term answer.",
    ],
    includes: [
      "Pinhole and section repair on copper supply lines",
      "Galvanized pipe replacement with copper or PEX",
      "Burst and split pipe repair, including emergency response",
      "Repiping of individual branches, bathrooms or kitchens",
      "Reroutes to bypass slab-routed or inaccessible sections",
      "ABS and drain pipe repair for waste and vent lines",
      "Underground plumbing and hose bib line repair",
    ],
    problems: [
      { h: "Corroded galvanized piping", p: "Internal rust reduces diameter, drops pressure and colors the water. Once one section fails, others usually follow, so partial replacement is often recommended." },
      { h: "Copper pinhole leaks", p: "Small perforations that spray a fine mist inside walls. They are easy to repair but frequently signal water chemistry or pressure conditions worth addressing." },
      { h: "Freeze splits", p: "In higher elevation areas like Tehachapi, unprotected lines in garages, crawl spaces and exterior walls split when temperatures drop." },
      { h: "Damage during remodels", p: "Screws and nails through pipe are a common discovery, often surfacing weeks after the work was done." },
      { h: "Failed fittings and crimps", p: "The joint is nearly always the weak point. Poorly made crimps, over-tightened compression fittings and mixed metals cause slow leaks." },
    ],
    signs: [
      "Discolored or rusty water, particularly on first draw in the morning",
      "Pressure that has fallen gradually over the years",
      "Damp drywall, warped baseboards or bubbling paint",
      "Green or white corrosion crusting on visible pipe",
      "Recurrent leaks in the same area of the house",
    ],
    professional:
      "Pipe repair inside walls, under slabs and in crawl spaces requires correct materials, proper transitions between dissimilar metals and code-compliant support. A licensed plumber prevents the galvanic corrosion and unsupported runs that cause the next failure.",
    benefits: [
      "Restored water pressure and clean water at every fixture",
      "Modern materials that resist corrosion and scale",
      "Reduced risk of a sudden burst and major water damage",
      "Reroutes that permanently remove problem sections from inaccessible areas",
      "pricing details and specialized warranties on qualifying work",
    ],
    diagnostic: [
      { h: "Identify the material and age", p: "Galvanized, copper, CPVC and PEX each fail differently and need different repair strategies." },
      { h: "Find every affected point", p: "We check the run for additional corrosion or stress rather than repairing only the visible leak." },
      { h: "Assess access", p: "Sometimes a reroute through accessible space costs less and lasts longer than repairing a buried section." },
      { h: "Quote clearly", p: "You get a pricing details for the repair and, when relevant, for the larger replacement so you can weigh both." },
    ],
    work: [
      { h: "Isolate and drain", p: "The affected branch is shut down while the rest of the property keeps water where possible." },
      { h: "Cut out the failure", p: "Damaged pipe is removed back to sound material rather than patched with a clamp." },
      { h: "Install with correct transitions", p: "Dielectric separation between dissimilar metals, proper support and code-compliant fittings." },
      { h: "Pressure test", p: "The line is brought back up and inspected under full pressure before closing anything." },
      { h: "Restore access points", p: "Openings are left clean and ready for patching, and we tell you exactly what was done and where." },
    ],
    expect:
      "Simple section repairs are typically single-visit. Branch repipes and reroutes take longer and are scheduled with a clear plan for water shutoff windows so your household can plan around them.",
    residential:
      "Older homes throughout Bakersfield and Oildale frequently need galvanized branches replaced. Newer homes more often need fitting-level repairs and slab reroutes. We work carefully in finished spaces and keep access openings as small as practical.",

    maintenance: [
      "Keep static water pressure within a safe range with a working regulator",
      "Insulate exposed lines in garages, crawl spaces and unheated areas",
      "Fix small leaks immediately; pipe rarely improves on its own",
      "Have galvanized supply lines evaluated if the home is several decades old",
      "Note the location of repaired sections for future reference",
    ],
    safety:
      "Turn off the main and open a low fixture to relieve pressure before touching a damaged line. Do not use torches near insulation or framing without proper precautions, and keep water clear of electrical panels and outlets.",
    faqs: [
      { q: "Can a pinhole leak just be patched?", a: "A clamp is a temporary measure only. We cut out the failed section and install new pipe so the repair is permanent, and we check the rest of the run for early signs of the same failure." },
      { q: "Should I replace all my galvanized pipe at once?", a: "Not necessarily. If pressure and water quality are still good in most of the house, targeted branch replacement can be the right call. We will show you what we find and give you both options." },
      { q: "What is a reroute and why would I want one?", a: "A reroute runs a new line through accessible space to bypass a section in a slab or inaccessible wall. It often costs less than repeated slab access and eliminates the problem area entirely." },
      { q: "Do you repair drain and vent piping too?", a: "Yes, we repair ABS and cast iron waste and vent lines as well as pressurized supply piping." },
      { q: "How quickly can you respond to a burst pipe?", a: "We answer emergency calls provider availabilitys a day. Call 661 689-3958 and we will tell you what to shut off while we are on the way." },
    ],
    related: ["leak-detection", "plumbing-repair", "emergency-plumbing", "water-heater-repair"],
  },

  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    short: "Diagnosis and repair for tank and tankless units with no hot water or leaks.",
    image: "service-water-heater-repair",
    alt: "Plumber diagnosing a gas water heater with a multimeter in a Bakersfield garage",
    title: "Water Heater Repair in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Water heater repair in Bakersfield, CA for no hot water, leaks, pilot and thermostat issues. Tank and tankless. pricing details. Call 661 689-3958.",
    h1: "Water Heater Repair in Bakersfield, CA",
    lede:
      "No hot water, rusty water, a pilot that will not stay lit or a puddle under the tank. We diagnose the actual failure and tell you honestly whether a repair or a replacement is the better spend.",
    intro: [
      "Water heaters give warning before they quit. Hot water runs out sooner than it used to, the burner cycles more often, the tank rumbles when it heats, or a small drip appears at a fitting. Catching those signals early is the difference between a repair and an emergency replacement with water across the garage floor.",
      "Bakersfield's mineral-heavy water is hard on tanks. Sediment collects on the bottom, insulating the water from the burner, forcing longer heat cycles and shortening the life of the unit. Flushing and anode maintenance directly extend how long the heater lasts.",
    ],
    includes: [
      "Gas and electric tank water heater diagnosis and repair",
      "Thermocouple, pilot assembly and gas control valve replacement",
      "Heating element and thermostat replacement on electric units",
      "Temperature and pressure relief valve replacement",
      "Anode rod inspection and replacement",
      "Sediment flushing and burner cleaning",
      "Tankless descaling, error code diagnosis and component repair",
      "Leaking fitting, flex connector and expansion tank repairs",
    ],
    problems: [
      { h: "No hot water at all", p: "On gas units it is often the thermocouple, pilot assembly or gas valve. On electric units it is usually an element or thermostat, sometimes a tripped high-limit switch." },
      { h: "Hot water runs out quickly", p: "Sediment buildup reduces usable capacity, and a failed lower element on an electric unit cuts effective volume roughly in half." },
      { h: "Rumbling or popping sounds", p: "Water trapped under a sediment layer boils and pops. Flushing helps, though heavy long-term buildup can be permanent." },
      { h: "Rusty or discolored hot water", p: "A depleted anode rod means the tank lining is next. This is a strong signal that replacement is approaching." },
      { h: "Water pooling under the unit", p: "Fitting leaks are repairable. A leak from the tank body itself is not; the unit needs replacement." },
      { h: "Tankless error codes", p: "Most commonly scale buildup in the heat exchanger, ignition faults or a blocked vent. Descaling resolves a large share of them." },
    ],
    signs: [
      "Showers turning cold sooner than they used to",
      "Visible corrosion around the top or bottom fittings",
      "Moisture, rust stains or a damp pan beneath the unit",
      "A pilot light that repeatedly goes out",
      "The unit is eight or more years old and behaving differently",
    ],
    professional:
      "Water heaters combine gas or high-voltage electricity, pressurized water and a relief valve that must function correctly. Improper venting can allow combustion gases into the home, and a disabled T&P valve is genuinely dangerous. This is licensed work, and we do it to California code including proper seismic strapping.",
    benefits: [
      "Hot water restored, usually in a single visit",
      "Honest guidance on repair versus replacement based on age and condition",
      "Improved efficiency after sediment removal and burner service",
      "Code-compliant venting, strapping and relief valve installation",
      "pricing details and specialized warranties on qualifying work",
    ],
    diagnostic: [
      { h: "Confirm the symptom", p: "No heat, not enough heat, or a leak; each points down a different diagnostic path." },
      { h: "Test components", p: "Thermocouple continuity, element resistance, thermostat function and gas valve operation are measured rather than assumed." },
      { h: "Inspect the tank and fittings", p: "We determine whether water is coming from a serviceable fitting or the tank itself, which decides everything." },
      { h: "Check age and condition", p: "Serial date, anode condition and sediment level tell us how much life the unit realistically has left." },
    ],
    work: [
      { h: "Isolate safely", p: "Gas or power off, cold inlet closed, and pressure relieved before service begins." },
      { h: "Replace failed components", p: "Manufacturer-appropriate parts, installed and tested individually." },
      { h: "Flush and clean", p: "Sediment drained, burner assembly cleaned and combustion checked on gas units." },
      { h: "Verify operation", p: "Full heat cycle observed, temperature verified at the tap and relief valve confirmed functional." },
      { h: "Review the outlook", p: "You get a clear picture of remaining service life so the next failure is not a surprise." },
    ],
    expect:
      "Most repairs are completed in one visit because our trucks carry the common failure parts. If the tank itself has failed, we will quote replacement immediately and can usually install the one visit.",
    residential:
      "Garage and closet installations are the norm in Bakersfield homes, and both bring their own code requirements for strapping, drain pans and combustion air. We check those during any repair visit and tell you if something is out of compliance.",

    maintenance: [
      "Flush the tank annually to remove Bakersfield's mineral sediment",
      "Inspect the anode rod every few years and replace before it is consumed",
      "Test the T&P relief valve once a year",
      "Descale tankless units on the manufacturer's recommended schedule",
      "Keep the area around the heater clear of stored combustibles",
    ],
    safety:
      "Never cap or plug a T&P relief valve. If you smell gas near the heater, leave and call from outside. Water above 120 degrees at the tap is a scald risk, particularly with children and older adults in the home.",
    faqs: [
      { q: "Should I repair or replace my water heater?", a: "Age is the deciding factor. Under about eight years with a sound tank, repair is usually worthwhile. Past ten to twelve years, or with a leaking tank body, replacement is the better investment. We give you both numbers." },
      { q: "Why does my hot water run out so fast?", a: "Usually sediment buildup reducing usable capacity, or a failed lower heating element on an electric unit. Both are diagnosable in one visit." },
      { q: "Can you repair tankless water heaters?", a: "Yes. We descale heat exchangers, diagnose error codes, and repair ignition, venting and flow sensor issues on tankless systems." },
      { q: "Is a leaking water heater an emergency?", a: "If water is coming from the tank body, yes. Shut off the cold inlet and the gas or breaker and call 661 689-3958. We are available provider availabilitys a day." },
      { q: "How often should a water heater be flushed?", a: "Once a year in this area. Our water is mineral heavy, and sediment shortens tank life and raises energy use noticeably." },
    ],
    related: ["water-heater-installation", "plumbing-repair", "emergency-plumbing", "leak-detection"],
  },

  {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    short: "Code-compliant tank and tankless installation, sized correctly for your property.",
    image: "service-water-heater-installation",
    alt: "Technician installing a new water heater with fresh copper connections in a residential garage",
    title: "Water Heater Installation in Bakersfield, CA | Tommy's Plumbing Service",
    description:
      "Water heater installation in Bakersfield, CA. Tank and tankless units sized, installed and code-compliant. pricing details. Call 661 689-3958.",
    h1: "Water Heater Installation in Bakersfield, CA",
    lede:
      "A water heater installed correctly runs quieter, lasts longer and costs less to operate. We size the unit to your household, install to California code, and haul the old one away.",
    intro: [
      "Replacement usually happens under pressure, either because the old tank failed or because it is about to. That is exactly when people get talked into the wrong size or the wrong type. We slow that down enough to ask the right questions: how many people, how many bathrooms, what your peak demand looks like, and what the space and venting will actually support.",
      "Sizing matters more than brand. An undersized tank leaves you cold mid-shower; an oversized one wastes energy keeping water hot that nobody uses. For tankless, flow rate and incoming water temperature determine whether the unit can deliver what the household expects.",
    ],
    includes: [
      "Standard gas and electric tank water heater installation",
      "Tankless water heater installation with proper gas sizing and venting",
      "Full removal and disposal of the old unit",
      "New flex connectors, shut-off valve and dielectric unions",
      "Seismic strapping and drain pan installation to California requirements",
      "Expansion tank installation where a closed system requires it",
      "Venting inspection, correction and combustion air verification",
      "residential water heater replacement for homeowners and multi-unit properties",
    ],
    problems: [
      { h: "Undersized systems", p: "A 40-gallon tank in a four-bathroom household means someone always loses. Correct sizing eliminates the daily scheduling problem." },
      { h: "Improper venting on replacement units", p: "Reusing an old vent on a new unit without checking it is a genuine safety issue. We verify draft and combustion air every time." },
      { h: "Missing seismic strapping", p: "California requires two straps at specific heights. Many older installations do not have them, and inspectors and insurers notice." },
      { h: "No expansion tank on a closed system", p: "With a check valve or pressure regulator at the meter, thermal expansion has nowhere to go, which stresses the tank and relief valve." },
      { h: "Tankless installed without gas capacity", p: "A tankless unit can require far more gas input than the tank it replaced. If the gas line cannot supply it, performance suffers." },
    ],
    signs: [
      "The existing unit is over ten years old",
      "Rust-colored hot water or corrosion at the tank seams",
      "Repeated repairs on the same heater",
      "Hot water demand has outgrown the current capacity",
      "You are remodeling, adding a bathroom or converting to tankless",
    ],
    professional:
      "Installation involves gas piping or electrical connections, venting, water connections, seismic requirements and relief valve routing. Each is a code item, and mistakes are unsafe rather than merely inconvenient. Tommy's Plumbing Service installs under California State License #957013.",
    benefits: [
      "Right-sized capacity so the household stops running out of hot water",
      "Lower operating costs from an efficient, correctly configured unit",
      "Code-compliant strapping, venting, pan and relief valve routing",
      "Old unit removed and disposed of, with the area left clean",
      "pricing details, specialized warranties and a 10% senior and military discount",
    ],
    diagnostic: [
      { h: "Assess demand", p: "Occupants, bathrooms, appliance use and peak simultaneous demand determine capacity or flow rate." },
      { h: "Evaluate the space", p: "Clearances, combustion air, venting path, drain availability and access all affect what can be installed." },
      { h: "Check gas and electrical capacity", p: "Especially critical for tankless conversions, where gas line sizing decides feasibility." },
      { h: "Provide options", p: "You get a written estimate with realistic pros and cons for tank and tankless, not a single push." },
    ],
    work: [
      { h: "Remove the old unit", p: "Drained, disconnected safely and hauled away as part of the job." },
      { h: "Prepare the location", p: "Pan, platform, clearances and strapping points set before the new unit goes in." },
      { h: "Install and connect", p: "New shut-off, flex connectors, dielectric unions, correct relief valve discharge routing and verified venting." },
      { h: "Commission the system", p: "Fill, purge air, light and test, then confirm temperature at the fixtures." },
      { h: "Walk you through it", p: "Operation, temperature setting, maintenance schedule and warranty details explained before we leave." },
    ],
    expect:
      "A standard tank replacement is typically a single-visit job of a few hours. Tankless conversions take longer because of venting and gas work. You get the full price up front, and we protect flooring along the removal path.",
    residential:
      "Most Bakersfield homes use gas tank heaters in the garage. Tankless makes sense for households with high simultaneous demand or limited space, provided gas capacity supports it. We give a straight answer either way.",

    maintenance: [
      "Flush annually and note the date on the unit",
      "Set the thermostat around 120 degrees for safety and efficiency",
      "Keep the drain pan clear and the surrounding area free of stored items",
      "Have the anode rod checked before it is fully consumed",
      "Register the unit so the manufacturer warranty is active",
    ],
    safety:
      "Never install a water heater without correct venting, seismic strapping and a functioning relief valve routed to a safe discharge point. Do not store paint, solvents or gasoline near a gas heater's burner area.",
    faqs: [
      { q: "How long does water heater installation take?", a: "A standard tank replacement usually takes a few hours and is completed the one visit. Tankless installations take longer because of venting and gas line requirements." },
      { q: "Tank or tankless, which is better for my home?", a: "Tankless suits households with high simultaneous demand or tight space, if the gas supply supports it. A properly sized tank is often the better value for typical family use. We size both and let you compare." },
      { q: "Do you remove my old water heater?", a: "Yes. Removal and disposal of the old unit is included, and we protect flooring on the way out." },
      { q: "Is seismic strapping required in California?", a: "Yes. Water heaters must be strapped at the required points, and we install to that standard on every replacement along with a drain pan and correct relief valve routing." },
      { q: "Do you offer discounts on installation?", a: "Yes, seniors and military personnel receive a 10% discount, estimates are free, and specialized warranties are available on qualifying work." },
    ],
    related: ["water-heater-repair", "plumbing-repair", "plumbing-repair", "pipe-repair"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
