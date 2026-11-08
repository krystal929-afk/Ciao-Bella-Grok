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

export type MenuItem = {
  name: string;
  description?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const dinnerMenu: MenuSection[] = [
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Fried Calamari",
        description: "Crispy fried calamari, served with marinara sauce and lemon.",
      },
      {
        name: "Bruschetta",
        description:
          "Toasted bread topped with fresh tomatoes, garlic, basil, olive oil and a touch of balsamic glaze.",
      },
      {
        name: "Mozzarella Sticks",
        description: "Breaded mozzarella, fried golden and served with marinara sauce.",
      },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      { name: "House Soup" },
      { name: "Pasta e Fagioli" },
      { name: "Cream of Mushroom" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "House Salad",
        description: "Lettuce, tomatoes, cucumbers, onions and carrots.",
      },
      {
        name: "Arugula Salad",
        description: "Fresh arugula, cherry tomatoes, shaved parmesan and balsamic vinaigrette.",
      },
      {
        name: "Caesar Salad",
        description: "Crisp romaine, croutons and parmesan cheese tossed in Caesar dressing.",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    items: [
      {
        name: "Cheese Pizza",
        description: "Classic cheese pizza with our homemade sauce and mozzarella.",
      },
      {
        name: "Pepperoni Pizza",
        description: "Classic cheese pizza topped with pepperoni.",
      },
      {
        name: "Ciao Bella Pizza",
        description:
          "Mozzarella, prosciutto, arugula and burrata cheese in the center. A Ciao Bella favorite.",
      },
      {
        name: "White Pizza",
        description: "Mozzarella cheese, ricotta, parmesan, and garlic.",
      },
      {
        name: "Calzone",
        description: "Mozzarella cheese, ricotta, parmesan.",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      {
        name: "Spaghetti & Meatballs",
        description: "Spaghetti with our homemade meatballs and marinara sauce.",
      },
      {
        name: "Penne Vodka",
        description: "Penne in a creamy vodka sauce with a touch of marinara.",
      },
      {
        name: "Ciao Bella Pasta",
        description: "Spaghetti with crispy bacon, vodka sauce, parmesan cheese and fresh parsley.",
      },
      {
        name: "Lasagna",
        description: "Layers of pasta, ricotta, meat sauce and mozzarella.",
      },
      {
        name: "Manicotti",
        description: "Pasta tubes stuffed with ricotta, topped with marinara and melted mozzarella.",
      },
      {
        name: "Eggplant Rolatini",
        description:
          "Eggplant slices rolled with ricotta, baked in marinara and topped with melted mozzarella.",
      },
      {
        name: "Eggplant Parmigiana",
        description:
          "Breaded eggplant topped with marinara and melted mozzarella. Served with pasta.",
      },
    ],
  },
  {
    id: "veal",
    title: "Veal",
    items: [
      {
        name: "Veal Parmigiana",
        description:
          "Breaded veal cutlet topped with marinara and melted mozzarella. Served with spaghetti.",
      },
      {
        name: "Veal Piccata",
        description:
          "Sautéed veal in a lemon, white wine and caper sauce. Served with pasta or vegetables.",
      },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    items: [
      {
        name: "Chicken Parmigiana",
        description:
          "Breaded chicken cutlet topped with marinara and melted mozzarella. Served with pasta.",
      },
      {
        name: "Chicken Piccata",
        description:
          "Sautéed chicken in a lemon, white wine and caper sauce. Served with pasta or vegetables.",
      },
      {
        name: "Chicken Marsala",
        description:
          "Sautéed chicken with mushrooms in a marsala wine sauce. Served with pasta or vegetables.",
      },
    ],
  },
  {
    id: "fish",
    title: "Fish",
    items: [
      {
        name: "Salmone Grilled & Caprese",
        description: "Grilled salmon served with a fresh caprese salad.",
      },
      {
        name: "Tilapia Piccata",
        description:
          "Tilapia sautéed in a lemon, white wine and caper sauce. Served with pasta or vegetables.",
      },
      {
        name: "Shrimp Scampi",
        description:
          "Jumbo shrimp sautéed in garlic, white wine and lemon sauce. Served over linguine.",
      },
      {
        name: "Snapper Francaise",
        description:
          "Fresh snapper dipped in egg and sautéed in lemon, white wine and butter. Served with pasta or vegetables.",
      },
      {
        name: "White Clams over Linguini",
        description: "Fresh clams sautéed in garlic, white wine and olive oil. Served over linguini.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Tiramisu" },
      { name: "Spumoni Bomba" },
      { name: "Tartufo" },
      { name: "Sorbetto Limoncello" },
      {
        name: "Cannoli",
        description: "Crispy cannoli shells filled with sweet ricotta cream and chocolate chips.",
      },
    ],
  },
];

export const cateringMenu: MenuSection[] = [
  {
    id: "catering-pasta",
    title: "Pasta",
    items: [
      { name: "Spaghetti Marinara" },
      { name: "Ziti & Meat Sauce" },
      { name: "Baked Ziti" },
      { name: "Cheese Ravioli" },
      { name: "Sausage Parmigiana with Pasta" },
      { name: "Lasagna" },
      { name: "Rigatoni Bolognese" },
      { name: "Manicotti Cheese" },
      { name: "Penne Vodka" },
      { name: "Fettuccine Alfredo" },
    ],
  },
  {
    id: "catering-specialties",
    title: "Ravioli & Specialties",
    items: [
      { name: "Linguine Red or White Clam" },
      { name: "Eggplant Parmigiana with Pasta" },
      { name: "Eggplant Rollatini with Pasta" },
      { name: "Chicken Parmigiana with Pasta" },
      { name: "Chicken Cacciatore with Pasta" },
      { name: "Chicken Marsala with Pasta" },
      { name: "Chicken Francese with Pasta" },
      { name: "Chicken Piccata with Pasta" },
    ],
  },
  {
    id: "catering-veal-seafood",
    title: "Veal & Seafood",
    items: [
      { name: "Veal Parmigiana with Pasta" },
      { name: "Veal Piccata with Pasta" },
      { name: "Veal Marsala with Pasta" },
      { name: "Calamari Marinara over Linguine" },
      { name: "Mussels Marinara over Linguine" },
      { name: "Shrimp Marinara over Linguine" },
      { name: "Shrimp Scampi over Linguine" },
      { name: "Tilapia Francese over Spaghetti" },
      { name: "Seafood over Linguine" },
    ],
  },
  {
    id: "catering-dolce",
    title: "Dolce",
    items: [{ name: "Tiramisu" }],
  },
];

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
