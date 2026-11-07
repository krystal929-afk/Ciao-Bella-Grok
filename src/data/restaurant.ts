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
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday", time: "5:00 PM – 9:00 PM" },
  { day: "Wednesday", time: "5:00 PM – 9:00 PM" },
  { day: "Thursday", time: "5:00 PM – 9:00 PM" },
  { day: "Friday", time: "5:00 PM – 9:00 PM" },
  { day: "Saturday", time: "5:00 PM – 9:00 PM" },
  { day: "Sunday", time: "5:00 PM – 9:00 PM" },
];

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
      "Don't even get me started on the garlic knots. I could've made a meal out of those alone. The chicken parm was excellent, the portions are huge, and the chef came out after our meal to ask how everything was.",
  },
];

export type MenuItem = {
  name: string;
  price: string;
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
        price: "$17.95",
        description: "Crispy fried calamari, served with marinara sauce and lemon.",
      },
      {
        name: "Bruschetta",
        price: "$9.95",
        description:
          "Toasted bread topped with fresh tomatoes, garlic, basil, olive oil and a touch of balsamic glaze.",
      },
      {
        name: "Mozzarella Sticks",
        price: "$10.95",
        description: "Breaded mozzarella, fried golden and served with marinara sauce.",
      },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    items: [
      { name: "House Soup", price: "$4.99" },
      { name: "Pasta e Fagioli", price: "$5.95" },
      { name: "Cream of Mushroom", price: "$6.99" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "House Salad",
        price: "$6.95",
        description: "Lettuce, tomatoes, cucumbers, onions and carrots.",
      },
      {
        name: "Arugula Salad",
        price: "$8.95",
        description: "Fresh arugula, cherry tomatoes, shaved parmesan and balsamic vinaigrette.",
      },
      {
        name: "Caesar Salad",
        price: "$7.95",
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
        price: "$16.95",
        description: "Classic cheese pizza with our homemade sauce and mozzarella.",
      },
      {
        name: "Pepperoni Pizza",
        price: "$17.95",
        description: "Classic cheese pizza topped with pepperoni.",
      },
      {
        name: "Ciao Bella Pizza",
        price: "$24.95",
        description:
          "Mozzarella, prosciutto, arugula and burrata cheese in the center. A Ciao Bella favorite.",
      },
      {
        name: "White Pizza",
        price: "$15.95",
        description: "Mozzarella cheese, ricotta, parmesan, and garlic.",
      },
      {
        name: "Calzone",
        price: "$19.99",
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
        price: "$18.95",
        description: "Spaghetti with our homemade meatballs and marinara sauce.",
      },
      {
        name: "Penne Vodka",
        price: "$18.95",
        description: "Penne in a creamy vodka sauce with a touch of marinara.",
      },
      {
        name: "Ciao Bella Pasta",
        price: "$21.95",
        description: "Spaghetti with crispy bacon, vodka sauce, parmesan cheese and fresh parsley.",
      },
      {
        name: "Lasagna",
        price: "$19.95",
        description: "Layers of pasta, ricotta, meat sauce and mozzarella.",
      },
      {
        name: "Manicotti",
        price: "$18.95",
        description: "Pasta tubes stuffed with ricotta, topped with marinara and melted mozzarella.",
      },
      {
        name: "Eggplant Rolatini",
        price: "$19.95",
        description:
          "Eggplant slices rolled with ricotta, baked in marinara and topped with melted mozzarella.",
      },
      {
        name: "Eggplant Parmigiana",
        price: "$19.95",
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
        price: "$25.95",
        description:
          "Breaded veal cutlet topped with marinara and melted mozzarella. Served with spaghetti.",
      },
      {
        name: "Veal Piccata",
        price: "$26.95",
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
        price: "$21.95",
        description:
          "Breaded chicken cutlet topped with marinara and melted mozzarella. Served with pasta.",
      },
      {
        name: "Chicken Piccata",
        price: "$22.95",
        description:
          "Sautéed chicken in a lemon, white wine and caper sauce. Served with pasta or vegetables.",
      },
      {
        name: "Chicken Marsala",
        price: "$23.95",
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
        price: "$24.95",
        description: "Grilled salmon served with a fresh caprese salad.",
      },
      {
        name: "Tilapia Piccata",
        price: "$22.95",
        description:
          "Tilapia sautéed in a lemon, white wine and caper sauce. Served with pasta or vegetables.",
      },
      {
        name: "Shrimp Scampi",
        price: "$24.95",
        description:
          "Jumbo shrimp sautéed in garlic, white wine and lemon sauce. Served over linguine.",
      },
      {
        name: "Snapper Francaise",
        price: "$26.95",
        description:
          "Fresh snapper dipped in egg and sautéed in lemon, white wine and butter. Served with pasta or vegetables.",
      },
      {
        name: "White Clams over Linguini",
        price: "$28.95",
        description: "Fresh clams sautéed in garlic, white wine and olive oil. Served over linguini.",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      { name: "Tiramisu", price: "$9.95" },
      { name: "Spumoni Bomba", price: "$10.99" },
      { name: "Tartufo", price: "$10.99" },
      { name: "Sorbetto Limoncello", price: "$10.99" },
      {
        name: "Cannoli",
        price: "$7.95",
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
      { name: "Spaghetti Marinara", price: "Half $50 · Full $90" },
      { name: "Ziti & Meat Sauce", price: "Half $50 · Full $95" },
      { name: "Baked Ziti", price: "Half $55 · Full $95" },
      { name: "Cheese Ravioli", price: "Half $50 · Full $85" },
      { name: "Sausage Parmigiana with Pasta", price: "Half $65 · Full $105" },
      { name: "Lasagna", price: "Half $65 · Full $110" },
      { name: "Rigatoni Bolognese", price: "Half $50 · Full $90" },
      { name: "Manicotti Cheese", price: "Half $50 · Full $90" },
      { name: "Penne Vodka", price: "Half $65 · Full $100" },
      { name: "Fettuccine Alfredo", price: "Half $60 · Full $100" },
    ],
  },
  {
    id: "catering-specialties",
    title: "Ravioli & Specialties",
    items: [
      { name: "Linguine Red or White Clam", price: "Half $70 · Full $105" },
      { name: "Eggplant Parmigiana with Pasta", price: "Half $60 · Full $100" },
      { name: "Eggplant Rollatini with Pasta", price: "Half $65 · Full $105" },
      { name: "Chicken Parmigiana with Pasta", price: "Half $65 · Full $105" },
      { name: "Chicken Cacciatore with Pasta", price: "Half $65 · Full $105" },
      { name: "Chicken Marsala with Pasta", price: "Half $65 · Full $110" },
      { name: "Chicken Francese with Pasta", price: "Half $65 · Full $110" },
      { name: "Chicken Piccata with Pasta", price: "Half $75 · Full $125" },
    ],
  },
  {
    id: "catering-veal-seafood",
    title: "Veal & Seafood",
    items: [
      { name: "Veal Parmigiana with Pasta", price: "Half $70 · Full $135" },
      { name: "Veal Piccata with Pasta", price: "Half $75 · Full $135" },
      { name: "Veal Marsala with Pasta", price: "Half $75 · Full $135" },
      { name: "Calamari Marinara over Linguine", price: "Half $75 · Full $145" },
      { name: "Mussels Marinara over Linguine", price: "Half $75 · Full $135" },
      { name: "Shrimp Marinara over Linguine", price: "Half $75 · Full $145" },
      { name: "Shrimp Scampi over Linguine", price: "Half $90 · Full $145" },
      { name: "Tilapia Francese over Spaghetti", price: "Half $95 · Full $145" },
      { name: "Seafood over Linguine", price: "Half $95 · Full $145" },
    ],
  },
  {
    id: "catering-dolce",
    title: "Dolce",
    items: [{ name: "Tiramisu", price: "Half $75 · Full $140" }],
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
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "";
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const mins = hour * 60 + minute;
  if (weekday === "Mon") {
    return { open: false, label: "Closed Mondays · dinner starts Tuesday at 5" };
  }
  const close = 21 * 60;
  const openAt = 17 * 60;
  if (mins >= openAt && mins < close) {
    return { open: true, label: "Open now for dinner" };
  }
  if (mins < openAt) {
    return { open: false, label: "Closed until 5:00 PM" };
  }
  return { open: false, label: "Closed for the evening · see you tomorrow" };
}
