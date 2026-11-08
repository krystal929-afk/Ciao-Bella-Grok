export const restaurant = {
  name: "Ciao Bella",
  fullName: "Ciao Bella Trattoria",
  tagline: "Authentic Italian flavors in Deerfield",
  kicker: "Serving Italian classics with care",
  phoneDisplay: "(954)-428-2676",
  phoneHref: "tel:+19544282676",
  email: "orfeopizzeriarestaurant@mail.com",
  emailHref: "mailto:orfeopizzeriarestaurant@mail.com",
  street: "1380 S Federal Hwy",
  city: "Deerfield Beach, FL 33441",
  maps: "https://www.google.com/maps/search/?api=1&query=1380+S+Federal+Hwy+Deerfield+Beach+FL+33441",
};

/** Online orders. Shop 121887 on Slice. Tables stay on TableAgent. */
export const sliceOrder = {
  shopId: "121887",
  href: "https://slicelife.com/restaurants/fl/deerfield-beach/33441/ciao-bella-trattoria-deerfield-beach/menu",
  offer: "5% off online orders",
};

/**
 * TableAgent is the only reservation, waitlist, and table book.
 * The iframe is Ciao Bella’s widget. The listing URL says “miami” because
 * TableAgent filed the free account that way; the address on the listing is Deerfield Beach.
 */
export const tableAgent = {
  embed: "https://tableagent.com/iframe/ciao-bella-trattoria/",
  listing: "https://tableagent.com/miami/ciao-bella-trattoria/",
  staff: "https://tableagent.com/reservation-system/",
};

export const about =
  "Ciao Bella is a locally loved gem in Deerfield Beach, FL, serving up authentic Italian cuisine and handcrafted pizzas in a warm, family-friendly setting. Located at 1380 S Federal Hwy, we bring traditional flavors and recipes straight from Italy to your table — featuring everything from crisp, wood-fired pizzas and hearty pastas to fresh salads, seafood dishes, and classic desserts. Whether you're dining in, grabbing takeout, or ordering delivery, Ciao Bella is your go-to destination for delicious, made-from-scratch meals with genuine hospitality. Come taste the difference passion and tradition make!";

export const houseLine =
  "We are the oldest Italian restaurant and pizzeria in Broward County, and we specialize in authentic old-world Southern Italian food.";

export const hours: { day: string; time: string; closed?: boolean }[] = [
  { day: "Monday", time: "5:00 PM – 10:00 PM" },
  { day: "Tuesday", time: "5:00 PM – 10:00 PM" },
  { day: "Wednesday", time: "5:00 PM – 10:00 PM" },
  { day: "Thursday", time: "5:00 PM – 10:00 PM" },
  { day: "Friday", time: "5:00 PM – 10:00 PM" },
  { day: "Saturday", time: "5:00 PM – 10:00 PM" },
  { day: "Sunday", time: "5:00 PM – 10:00 PM" },
];

/** Lunch is not served until this New York calendar date. */
export const LUNCH_START = "2026-11-26";

export const reviews = [
  {
    name: "Diana Z.",
    quote:
      "A beautiful, vintage, very family-friendly place. The pizza is super delicious and crispy, and the service is spectacular — everyone is very kind. I love everything; it's all very special.",
  },
  {
    name: "Cornel S.",
    quote:
      "If you're searching for a taste of genuine Italian cuisine, look no further. From the moment you step inside, you're enveloped in a warm, pleasant, and wonderfully homey atmosphere. Every dish feels like a loving embrace from Italy itself.",
  },
  {
    name: "Kim H.",
    quote:
      "We had dinner here last night. Don't even get me started on the garlic knots. I could've made a meal out of those alone. They are amazing. The chicken parm was excellent. The serving portions are absolutely huge, be prepared for leftovers. Service was excellent, our waitress was wonderful. And the chef came out after our meal to ask how everything was. Highly recommend.",
  },
];

export type { MenuItem, MenuSection } from "@/data/service-menus";
export {
  cateringMenu,
  dinnerMenu,
  drinkMenu,
  healthyMenu,
  lunchMenu,
  rawMeatWarning,
} from "@/data/service-menus";


export type SavedRequest = {
  id: string;
  kind: "reservation" | "party" | "catering";
  createdAt: string;
  summary: string;
  details: Record<string, string>;
};

export const REQUESTS_KEY = "ciaobella-requests";

export function serviceStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "";
  const ymd = `${value("year")}-${value("month")}-${value("day")}`;
  const mins = Number(value("hour")) * 60 + Number(value("minute"));
  if (ymd >= LUNCH_START && mins >= 11 * 60 && mins < 14 * 60) {
    return { open: true, label: "Open now for lunch" };
  }
  if (mins >= 17 * 60 && mins < 22 * 60) {
    return { open: true, label: "Open now for dinner" };
  }
  if (mins < 17 * 60) {
    return ymd >= LUNCH_START
      ? { open: false, label: "Lunch 11:00 AM – 2:00 PM · dinner at 5:00 PM" }
      : { open: false, label: "Dinner at 5:00 PM · lunch starts November 26" };
  }
  return { open: false, label: "Closed for the evening · dinner is until 10:00 PM" };
}
