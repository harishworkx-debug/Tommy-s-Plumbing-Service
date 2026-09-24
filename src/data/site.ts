export const SITE_URL = "https://www.tommysplumbing.net";

export const business = {
  name: "Tommy's Plumbing Service",
  legalType: "Residential Plumbing Service Connection",
  street: "3740 Sillect Ave #3c",
  city: "Bakersfield",
  state: "CA",
  zip: "93308",
  country: "US",
  phoneDisplay: "661 689-3958",
  phoneHref: "tel:+16615922721",
  email: "tps.tommy@gmail.com",
  license: "#957013",
  hours: "Provider availability varies by location and appointment capacity",
  lat: 35.394147,
  lng: -119.038072,
  google: { rating: 0, count: 0 },
  yahoo: { rating: 0, count: 0 },
  discount: "",
  payments: ["Credit Cards", "NFC Mobile Payments", "Apple Pay", "Google Pay"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.4479155027334!2d-119.03807158897601!3d35.39414654557751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea697b0e54e7f5%3A0x6375f49af1d8360c!2sTommy%27s%20Plumbing%20Service!5e0!3m2!1sen!2sin!4v1786444684358!5m2!1sen!2sin",
};

export const url = (path: string) => `${SITE_URL}${path}`;
