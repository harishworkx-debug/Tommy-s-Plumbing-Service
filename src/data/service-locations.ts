export interface ServiceLocation {
  service: string;   // service slug
  location: string;  // location slug
  title: string;
  description: string;
  lede: string;
  intro: string[];
  local: { h: string; p: string }[];
  faqs: { q: string; a: string }[];
}

export const serviceLocations: ServiceLocation[] = [
  {
    service: "drain-cleaning", location: "rosedale",
    title: "Drain Cleaning in Rosedale, CA | Tommy's Plumbing Service",
    description: "Drain cleaning in Rosedale, CA for slow sinks, kitchen clogs and main line stoppages. pricing details and provider availability service. Call 661 689-3958.",
    lede: "Rosedale's newer ABS drain systems clog for different reasons than older lines, and clearing them properly means understanding what actually built up inside.",
    intro: [
      "Most Rosedale homes are recent enough that the drain piping itself is in good condition. When a kitchen sink backs up here, the cause is almost always accumulated grease and food waste rather than a failing pipe, and that distinction changes the right tool for the job.",
      "We see a second pattern in this area too: recently remodeled homes where building debris, grout or drywall compound found its way into a line and settled at the first turn. Cabling alone often will not move that; jetting will.",
    ],
    local: [
      { h: "Large kitchens, heavy use", p: "Rosedale's bigger homes cook at volume, and fats that cool in the drain line coat the pipe wall a little more every week until flow drops noticeably." },
      { h: "Multiple bathrooms sharing branches", p: "Three and four bathroom houses run several fixtures into shared branch lines, so a partial blockage in one arm shows up as gurgling in another." },
      { h: "Remodel debris", p: "Homes updated in the last few years frequently have building material sitting at the first elbow downstream of the work." },
      { h: "Settlement bellies", p: "Where backfill was not compacted well during building, a low spot collects solids and causes stoppages that seem to have no cause at all." },
    ],
    faqs: [
      { q: "How quickly can you clear a drain in Rosedale?", a: "We are only minutes from Rosedale and clear most branch line clogs in a single visit, often within an hour or two of arriving." },
      { q: "Do you jet or cable?", a: "It depends on what is in the line. Cabling breaks through obstructions; jetting scours grease and buildup off the pipe wall. For recurring kitchen clogs, jetting usually gives a lasting result." },
      { q: "Why does the same drain clog every few months?", a: "Because the buildup was never fully removed, or there is a defect such as a belly holding water. A camera inspection settles it definitively." },
    ],
  },
  {
    service: "plumbing-repair", location: "oildale",
    title: "Plumbing Repair in Oildale, CA | Tommy's Plumbing Service",
    description: "Plumbing repair in Oildale, CA for older galvanized pipe, valves, fixtures and leaks. pricing details and provider availability service. Call 661 689-3958.",
    lede: "Repairing plumbing in Oildale means working on houses that have been repaired many times already, and doing it in a way that does not create the next failure.",
    intro: [
      "The typical Oildale service call starts with something small: a valve that will not close, a faucet that drips, a toilet that keeps running. What we usually find behind it is a system with mixed materials and a long history, where the original galvanized still feeds a copper repair from thirty years ago.",
      "Those junctions are where problems concentrate. Corrosion accelerates where dissimilar metals meet without proper separation, and old compression fittings crack when disturbed. We plan repairs around that reality rather than being surprised by it.",
    ],
    local: [
      { h: "Seized shut-off valves", p: "Original multi-turn angle stops in mid-century Oildale homes are frequently frozen solid, so a simple faucet repair becomes a valve replacement first." },
      { h: "Mixed-material junctions", p: "Galvanized to copper transitions without dielectric separation corrode from the inside and fail without warning." },
      { h: "Rental property turnover", p: "Landlords here need repairs that survive homeowners, which means quality valves and supplies rather than the cheapest parts." },
      { h: "Crawl space access", p: "Raised foundations make some repairs easier and hide slow leaks that have been dripping onto subfloor for months." },
    ],
    faqs: [
      { q: "Can you replace a valve that will not shut off?", a: "Yes. Replacing seized angle stops with quarter-turn valves is one of our most common Oildale repairs, and it means you can actually isolate a fixture in an emergency." },
      { q: "Will repairing one section cause another leak?", a: "Old pipe can be brittle, and we tell you honestly when that risk exists. Where a run is clearly failing, we quote the branch replacement so you can compare." },
      { q: "Do you work with landlords in Oildale?", a: "Yes, we handle repairs and homeowner coordination for rental properties throughout Oildale." },
    ],
  },
  {
    service: "emergency-plumbing", location: "lamont",
    title: "Emergency Plumbing in Lamont, CA | Tommy's Plumbing Service",
    description: "provider availability emergency plumbing in Lamont, CA for burst pipes, sewer backups and no water. independent provider credentials. Call 661 689-3958.",
    lede: "In a household where one bathroom serves everyone, a plumbing failure is not an inconvenience. We answer Lamont emergency calls provider availabilitys a day.",
    intro: [
      "Emergency priority is about impact, and in Lamont the impact is often immediate. A stopped main line in a full household means no toilet, no shower and no laundry, all at once. We treat those calls accordingly.",
      "The first thing we do on the phone is get water shut off or the fixture isolated so the situation stops getting worse while a technician is on the way from Bakersfield.",
    ],
    local: [
      { h: "Main line backups", p: "Heavy daily use in large households pushes more through the lateral, and an aging line eventually stops keeping up." },
      { h: "Water heater failures", p: "A tank working hard every day fails sooner, and a rupture floods whatever space it sits in." },
      { h: "Burst supply lines", p: "Old angle stops and rubber supply hoses under constant use are frequent failure points." },
      { h: "No water situations", p: "A failed main valve or service line break stops everything, and with children in the house that cannot wait until morning." },
    ],
    faqs: [
      { q: "How fast can you get to Lamont at night?", a: "We dispatch provider availabilitys a day from Bakersfield and give you an honest arrival window when you call 661 689-3958." },
      { q: "What should I do before you arrive?", a: "Shut off the main water valve, or the fixture stop if the leak is isolated. For a water heater, close the cold inlet and turn off the gas or breaker." },
      { q: "Do emergency calls cost more?", a: "You get pricing before work begins at any hour, and estimates are free." },
    ],
  },
  {
    service: "water-heater-repair", location: "shafter",
    title: "Water Heater Repair in Shafter, CA | Tommy's Plumbing Service",
    description: "Water heater repair in Shafter, CA for no hot water, leaks and pilot problems. Tank and tankless. pricing details. Call 661 689-3958.",
    lede: "Shafter's hard water is hard on water heaters. We diagnose the actual failure and tell you plainly whether repair or replacement is the better spend.",
    intro: [
      "Sediment is the quiet villain in almost every Shafter water heater call. Mineral deposit settles on the tank bottom, insulates the water from the burner, forces longer heat cycles and eventually causes the rumbling sound most homeowners here recognize.",
      "That same buildup masks other problems. A tank that seems to have lost capacity may have a failed lower element rather than sediment, and only testing tells the difference.",
    ],
    local: [
      { h: "Heavy sediment accumulation", p: "Annual flushing makes a measurable difference to both efficiency and tank life in this water." },
      { h: "Older garage installations", p: "Many Shafter units predate current strapping, pan and venting requirements, which we correct at replacement." },
      { h: "residential demand", p: "Shafter homeowners running shift schedules need recovery capacity that a residential-style unit cannot provide." },
      { h: "Mixed housing stock", p: "Mid-century homes and new building need different approaches to venting, gas capacity and placement." },
    ],
    faqs: [
      { q: "Why does my water heater rumble?", a: "Water trapped beneath a layer of sediment boils and pops. Flushing usually quiets it, though heavy long-term buildup can be permanent." },
      { q: "Can you repair it today?", a: "In most cases yes. Our trucks carry the common failure parts, so single-visit repairs are the norm." },
      { q: "When is replacement the better choice?", a: "Past about ten years, or any time water is leaking from the tank body rather than a fitting. We give you both prices before you decide." },
    ],
  },
  {
    service: "sewer-line-repair", location: "wasco",
    title: "Sewer Line Repair in Wasco, CA | Tommy's Plumbing Service",
    description: "Sewer line repair in Wasco, CA for root damage, cracks and repeat backups. Camera located, targeted repairs. Call 661 689-3958.",
    lede: "Repeat sewer backups in Wasco usually trace to an aging clay lateral. We camera the line, locate the defect and repair the section that has actually failed.",
    intro: [
      "Wasco's older residential lines were installed when clay pipe was standard, and clay joints separate over time as soil moves with irrigation cycles and seasonal changes. Roots find those gaps, and once they are inside, cleaning only buys months.",
      "On rural parcels the lateral can also be long, which makes accurate locating essential. Digging in the wrong spot on an acre property is an expensive mistake.",
    ],
    local: [
      { h: "Clay joint separation", p: "The most common failure we find here, and usually the reason a line backs up two or three times a year." },
      { h: "Root intrusion", p: "Mature trees on established lots send roots directly to the moisture at a failed joint." },
      { h: "Agricultural soil movement", p: "Irrigation nearby and seasonal moisture swings shift soil and create bellies in long runs." },
      { h: "Long rural laterals", p: "Camera locating with depth marking keeps excavation to a single targeted area." },
    ],
    faqs: [
      { q: "Do I need a full line replacement?", a: "Often not. If the camera shows one failed joint or cracked section in an otherwise sound line, a spot repair solves it at a fraction of the cost." },
      { q: "How do you know where to dig?", a: "The camera head transmits its position, so we mark the exact surface location and depth of the defect before excavation." },
      { q: "Will my property be restored?", a: "Yes, we backfill in compacted lifts and restore the surface of the work area." },
    ],
  },
  {
    service: "leak-detection", location: "arvin",
    title: "Leak Detection in Arvin, CA | Tommy's Plumbing Service",
    description: "Leak detection in Arvin, CA for slab leaks, irrigation leaks and high water bills. Non-destructive location. Call 661 689-3958.",
    lede: "A water bill that climbed with no explanation is the most common reason Arvin homeowners call us, and the answer is almost always a leak nobody can see.",
    intro: [
      "Arvin properties often combine slab-on-grade homes with irrigated yards and outbuildings, which gives a hidden leak plenty of places to run without ever surfacing. Water disappears into soil that is already being watered, so the only symptom is the bill.",
      "We separate the domestic side from the irrigation side at the meter first. That single step tells us which half of the property to focus on and saves considerable time and money.",
    ],
    local: [
      { h: "Irrigation line losses", p: "A cracked lateral or a valve that seeps continuously can waste enormous volume with no visible pooling in already-watered ground." },
      { h: "Slab leaks", p: "Warm floor spots and unexplained moisture at wall bases point to a pressurized line under the concrete." },
      { h: "Long service runs", p: "On larger parcels, the line between the meter and the house is a common and easily overlooked failure point." },
      { h: "Freeze-damaged exterior lines", p: "A split that occurred in winter can seep quietly through spring until the bill reveals it." },
    ],
    faqs: [
      { q: "How do I know if I have a hidden leak?", a: "Shut every fixture off and watch the water meter. If it keeps moving, water is escaping somewhere in the system." },
      { q: "Can you detect a leak without breaking concrete?", a: "Yes. Meter verification, zone isolation and acoustic listening equipment locate the point first, so any opening is small and targeted." },
      { q: "Can you repair it the one visit?", a: "Usually yes. We carry repair materials and will give you a pricing details before starting." },
    ],
  },

  {
    service: "pipe-repair", location: "mcfarland",
    title: "Pipe Repair in McFarland, CA | Tommy's Plumbing Service",
    description: "Pipe repair in McFarland, CA for corroded galvanized lines, low pressure and hidden leaks. pricing details. Call 661 689-3958.",
    lede: "Low pressure and rusty morning water are the two symptoms we hear most in McFarland, and both point to the same thing: supply pipe corroding from the inside.",
    intro: [
      "Galvanized steel piping was built to last, but not forever. After several decades the interior rusts and scales until the effective diameter is a fraction of the original. Pressure drops gradually enough that households adapt to it without realizing how much they have lost.",
      "Replacing affected branches with copper or PEX restores pressure immediately and eliminates the discoloration. We handle the transitions correctly so the new work does not corrode where it meets what remains.",
    ],
    local: [
      { h: "Decades-old galvanized supply", p: "Common throughout McFarland's older housing, and failures tend to cluster once the first one occurs." },
      { h: "Hard water accelerating scale", p: "Mineral content compounds internal corrosion and narrows lines faster." },
      { h: "Hidden wall and floor leaks", p: "Older building conceals slow drips until staining or soft flooring appears." },
      { h: "High household demand", p: "Large families notice reduced pressure sooner because multiple fixtures run at once." },
    ],
    faqs: [
      { q: "Do I have to repipe the whole house?", a: "Not always. If pressure and water quality are still acceptable elsewhere, replacing the affected branches can be the right call. We show you what we find and price both options." },
      { q: "How long does a branch replacement take?", a: "Most are completed in a day, with a planned water shutoff window so you can prepare." },
      { q: "Will pressure improve right away?", a: "Yes, replacing internally rusted pipe restores flow immediately at the fixtures served by that branch." },
    ],
  },
  {
    service: "water-heater-installation", location: "tehachapi",
    title: "Water Heater Installation in Tehachapi, CA | Tommy's Plumbing Service",
    description: "Water heater installation in Tehachapi, CA sized for cold mountain water. Tank and tankless, code compliant. Call 661 689-3958.",
    lede: "At Tehachapi's elevation, incoming water is significantly colder than in the valley, and that changes how a water heater should be sized.",
    intro: [
      "A tankless unit rated for a comfortable flow at valley inlet temperatures can fall well short on a January morning in Tehachapi, because the colder the incoming water, the less of it the unit can raise to temperature. Sizing on summer numbers is the most common mistake we correct here.",
      "Tank units face the same physics with longer recovery times. We size for winter performance so the system works when it is most needed, and we address freeze exposure on the connecting lines at the same time.",
    ],
    local: [
      { h: "Cold inlet temperatures", p: "Winter groundwater at elevation demands more from any water heater, tank or tankless." },
      { h: "Freeze-exposed connections", p: "Lines feeding a garage or exterior-wall installation need insulation to survive a hard night." },
      { h: "Larger rural properties", p: "Long runs between the heater and distant fixtures increase wait times and heat loss, which affects placement decisions." },
      { h: "Seasonal and second homes", p: "Properties that sit empty need units and shutoff arrangements that tolerate periods without occupancy." },
    ],
    faqs: [
      { q: "Is tankless a good choice in Tehachapi?", a: "It can be, provided the unit is sized for winter inlet temperatures and the gas supply is adequate. We size for the coldest conditions, not the easiest." },
      { q: "Do you install to California code?", a: "Yes, including seismic strapping, drain pan, correct venting and proper relief valve discharge routing." },
      { q: "Do you remove the old unit?", a: "Yes, removal and disposal are included, and we protect flooring along the removal path." },
    ],
  },
];
