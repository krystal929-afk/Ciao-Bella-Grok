export type MenuItem = {
  name: string;
  description?: string;
  badges?: string[];
  /** Approved special or promotion price only. Regular prices stay in menu-prices.ts. */
  price?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  kicker?: string;
  note?: string;
  warning?: string;
  items: MenuItem[];
};

export const rawMeatWarning =
  "*Cooked to order. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.";

const burgerItems: MenuItem[] = [
  {
    name: "Ciao Bella Burger",
    badges: ["New"],
    description:
      "Beef patty, American cheese, crispy bacon, lettuce, tomato, pickles and our Ciao Bella sauce on a brioche bun",
  },
  {
    name: "Truffle Burger*",
    badges: ["New"],
    description:
      "Wagyu beef patty, Swiss cheese, sautéed mushrooms, crispy onions, truffle aioli on a brioche bun",
  },
  {
    name: "Italiano Burger",
    badges: ["Signature"],
    description:
      "Beef patty, provolone, roasted red peppers, lettuce, tomato, red onion, garlic aioli on a brioche bun",
  },
];

export type Promotion = {
  id: string;
  title: string;
  price: string;
  when: string;
  detail: string;
  days?: string[];
};

export const promotions: Promotion[] = [
  {
    id: "sunday-supper",
    title: "Mama's Sunday Supper",
    price: "$75",
    when: "Sundays · Family style · Dine-in or takeout · Feeds 4",
    days: ["Sunday"],
    detail:
      "Eight pieces of Pollo Fritto, a big bowl of pasta in marinara or vodka sauce, a house salad and warm garlic knots. Impero by the glass, $6. Sunday chicken meets Sunday gravy, the way Mama set the table. Pour, share, linger.",
  },
  {
    id: "early-supper",
    title: "Early Supper",
    price: "$38",
    when: "Every night · 5–6 PM · Three courses · Dine-in",
    detail:
      "Bruschetta or Caesar, then any Pick Your Pasta or Chicken, Your Way, then cheesecake or chocolate mousse cake. Add chicken +$7 or shrimp +$11.",
  },
  {
    id: "pollo-bucket",
    title: "Pollo Fritto Bucket",
    price: "$42 · $59",
    when: "Takeout · 8 or 12 pieces",
    detail:
      "Buttermilk fried chicken, a side of mac & cheese al forno and garlic knots. Hot honey +$1.",
  },
  {
    id: "fritto-friday",
    title: "Fritto Friday",
    price: "$23",
    when: "Fridays · Lunch · begins November 26, 2026",
    days: ["Friday"],
    detail: "Pollo Fritto panino, French fries and a soda. A $29.50 value. Lunch service is not available before November 26.",
  },
  {
    id: "lamb-bottle",
    title: "Lamb & Bottle for Two",
    price: "$85",
    when: "Weekends and holidays · When lamb is in rotation",
    days: ["Friday", "Saturday", "Sunday"],
    detail:
      "Our Grilled Australian Lamb Chops with any bottle of Impero wine. A $103 value. While it lasts.",
  },
  {
    id: "wine-charcuterie",
    title: "Wine & Charcuterie",
    price: "$55",
    when: "Wine Nights · Tuesday–Friday · 5 PM until close · Dine-in",
    days: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    detail:
      "Any bottle of Impero wine with our charcuterie board. Save $5. Just a glass? $6 with any board or paired dish.",
  },
  {
    id: "kids-free",
    title: "Kids Eat Free Wednesdays",
    price: "Free",
    when: "Dinner · Wednesday · 12 and under",
    days: ["Wednesday"],
    detail: "One kids' meal free with each adult entrée, every Wednesday night.",
  },
  {
    id: "office-catering",
    title: "Office Catering",
    price: "10% off",
    when: "First order of $150 or more · Order 3 days ahead",
    detail:
      "Feed the team: try our Team Lunch Special, add a charcuterie platter, or pick any trays.",
  },
  {
    id: "vip",
    title: "VIP Club",
    price: "$79 a year",
    when: "Dine-in · Join with your server",
    detail:
      "Free bottle of Impero wine when you join, a $38 value. First seats at Mama's Sunday Supper. $6 Impero glass, any night. Free dessert every month with a dinner entrée, birthday month included. Worth $180+ in wine and desserts your first year. Show your VIP card when you order. Dine-in. Join with your server.",
  },
];

const sundaySupper: MenuSection = {
  id: "sunday-supper",
  title: "Mama's Sunday Supper",
  kicker: "Sundays · family style · dine-in or takeout · feeds 4",
  items: [
    {
      name: "Mama's Sunday Supper",
      price: "$75",
      description: promotions[0].detail,
    },
  ],
};

const wineNightItems: MenuItem[] = [
  {
    name: "Impero glass, paired or with a board",
    price: "$6",
    description: "Impero reds: Cabernet, Chianti, Merlot. Impero whites: Chardonnay, Pinot Grigio, Rosé.",
  },
  { name: "Any other Impero glass", price: "$7", description: "During Wine Night." },
  { name: "Impero bottle", price: "$29", description: "Regular bottle $38." },
  { name: "Bottle and charcuterie board", price: "$55", description: "Dine-in. Save $5." },
];

export const lunchMenu: MenuSection[] = [
  {
    id: "lunch-deals",
    title: "Lunch",
    kicker: "11am–2pm, beginning November 26, 2026",
    note: "Every meal starts with our warm, house-made garlic knots, on us. We like our chicken fried.",
    items: [
      {
        name: "Panino & Soup",
        price: "$22",
        description: "Any whole panino plus a cup of soup. Dine-in or to-go. Daily at lunch.",
      },
      {
        name: "The Lunch Combo",
        price: "$16",
        description: "Half a panino plus soup or a small salad. A lighter lunch for less.",
      },
    ],
  },
  {
    id: "panini",
    title: "Panini",
    kicker: "On Chef Andrei's house-made bread",
    note: "Every panino comes on his house-made panuozzo, baked fresh each morning from the same dough as our pizza: crisp outside, soft and airy inside. Prefer a classic hoagie? Ask for a Cusano's roll. Make any chicken panino fried, or add hot honey to anything.",
    items: [
      {
        name: "Pollo Fritto",
        badges: ["New"],
        description: "Buttermilk fried chicken, Calabrian hot honey, provolone, pickled peppers",
      },
      {
        name: "Sausage & Peppers",
        badges: ["Guest favorite"],
        description: "Grilled Italian sausage, peppers, onions",
      },
      {
        name: "Chicken Parmigiana",
        description: "Mama's fried chicken cutlet, marinara, mozzarella, parmigiano",
      },
      {
        name: "Meatball Parmigiana",
        description: "House-made meatballs, marinara, melted mozzarella, parmigiano",
      },
      {
        name: "Caprese (V)",
        description: "Tomato, fresh mozzarella, basil, pesto",
      },
      {
        name: "Make Your Own Panino",
        description: "Roll included. Build it your way, or make it a half-panino combo.",
      },
    ],
  },
  {
    id: "pizza",
    title: "Pizza & Calzone",
    kicker: "Chef Andrei's dough",
    items: [
      {
        name: "Personal Pizza",
        description: "Margherita, pepperoni, or our house favorite Ciao Bella",
      },
      {
        name: "Calzone (V)",
        description: "Ricotta, parmigiano and mozzarella. Add sausage, chicken, ham or pepperoni.",
      },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    kicker: "House-made daily · cup or bowl",
    items: [
      { name: "Tomato (V)", description: "Tomato, basil, extra virgin olive oil" },
      { name: "Pasta e Fagioli", description: "Pasta, beans, bacon" },
      { name: "Stracciatella", description: "Egg, parmigiano and spinach in chicken broth" },
    ],
  },
  {
    id: "lunch-specials",
    title: "Lunch Specials",
    items: [
      {
        name: "Ciao Bella Pasta",
        price: "$16",
        badges: ["House favorite"],
        description: "Vodka sauce with bacon. Add grilled chicken +$7 or wild-caught shrimp +$11.",
      },
      {
        name: "Pasta Plate",
        price: "$16",
        description: "Choice of pasta and sauce (marinara, vodka, alfredo, bolognese or pesto), plus a soda.",
      },
      {
        name: "Chicken Parm & Pasta",
        price: "$20",
        description: "Mama's fried chicken parmigiana, pasta, house salad.",
      },
    ],
  },
  sundaySupper,
  {
    id: "grill",
    title: "From the Grill",
    kicker: "Chicken or salmon",
    items: [
      {
        name: "Grilled Chicken Breast Plate",
        description: "Seasonal roasted vegetables, extra virgin olive oil",
      },
      {
        name: "Grilled Salmon Plate",
        badges: ["New"],
        description: "Wild-caught salmon, seasonal roasted vegetables, extra virgin olive oil",
      },
      {
        name: "Sausage & Peppers Plate",
        description: "Grilled Italian sausage and sautéed peppers, with French fries or a side salad",
      },
    ],
  },
  {
    id: "burgers",
    title: "The Burgers",
    kicker: "Three burgers, one bistro",
    note: "Grilled to order on a brioche bun. Served with French fries, plain or Italian-seasoned.",
    warning: rawMeatWarning,
    items: burgerItems,
  },
  {
    id: "salads",
    title: "Salads",
    note: "Add a protein: chicken, wild-caught salmon, or shrimp, grilled or fried (breaded).",
    items: [
      {
        name: "Salad Niçoise",
        badges: ["Signature"],
        description: "Canned tuna, egg, olives, tomato, potato, green beans, honey Dijon vinaigrette",
      },
      { name: "Caprese (V)", description: "Tomato, fresh mozzarella, basil, extra virgin olive oil" },
      {
        name: "Arugula Salad (V)",
        badges: ["New"],
        description: "Arugula, balsamic glaze, shaved parmigiano, black olives, red onion, tomato, cucumber",
      },
      {
        name: "House Salad (V)",
        description: "Crisp romaine, tomato, cucumber, house dressing or any dressing",
      },
      { name: "Caesar Salad", description: "Crisp romaine, parmigiano, Caesar dressing, croutons" },
      {
        name: "Italian Bistro Salad (V)",
        badges: ["New"],
        description: "Mixed greens, tomato, cucumber, red onion, olives, parmigiano, balsamic",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Grilled Vegetables (V)" },
      { name: "Roasted Potatoes (V)" },
      { name: "French Fries, plain or Italian-seasoned (V)" },
      { name: "Truffle Fries, parmigiano", badges: ["New"] },
      {
        name: "Mac & Cheese al Forno (V)",
        badges: ["New"],
        description: "Baked with fontina and parmigiano, toasted breadcrumbs",
      },
      { name: "Sausage", badges: ["New"] },
    ],
  },
  {
    id: "whats-in-it-lunch",
    title: "What's in it",
    note: "We fry with good oils. Organic extra virgin olive oil and organic butter. Fresh garlic. Non-GMO unbleached flour. Wild-caught salmon, shrimp and tuna. Australian lamb. Soups and lasagna are house-made daily (Pasta e Fagioli has bacon). House-made meatballs and honey Dijon. Ciao Bella sauce: vodka sauce with bacon. (V) vegetarian. Please let us know about any allergies.",
    items: [],
  },
];

export const dinnerMenu: MenuSection[] = [
  {
    id: "chefs-special",
    title: "Chef's Special",
    kicker: "Weekends and holidays · rotates with braised ribs",
    note: "Every meal starts with our warm, house-made garlic knots, on us. Through November 15, dinner is 5–10pm. Beginning November 16, dinner is 5pm until close.",
    items: [
      {
        name: "Grilled Australian Lamb Chops",
        price: "$65",
        description: "Five chops, lemon-rosemary fries, house-made honey Dijon. Pairs with Impero Cabernet.",
      },
      {
        name: "Braised Ribs",
        price: "$42",
      },
    ],
  },
  {
    id: "starters",
    title: "Starters",
    items: [
      {
        name: "Charcuterie Board",
        badges: ["It's back"],
        description: "Seasonal meats and cheeses, fig jelly, olives, grilled bread",
      },
      { name: "Bruschetta", description: "Tomato, garlic, basil, extra virgin olive oil" },
      {
        name: "Meatballs & Ricotta",
        description: "House-made meatballs, marinara, whipped ricotta, grilled bread",
      },
      {
        name: "Mussels",
        badges: ["New"],
        description: "White wine and garlic, or spicy marinara, grilled bread",
      },
      { name: "Caprese (V)", description: "Tomato, fresh mozzarella, basil, extra virgin olive oil" },
      {
        name: "Antipasto (V)",
        description: "Roasted peppers, zucchini, eggplant, extra virgin olive oil",
      },
      {
        name: "Eggplant Rollatini (V)",
        description: "Eggplant rolled with ricotta, baked in marinara and mozzarella",
      },
    ],
  },
  {
    id: "chicken",
    title: "Chicken, Your Way",
    kicker: "Pasta, fries or salad",
    items: [
      {
        name: "Mama's Fried Chicken",
        badges: ["New"],
        description: "Buttermilk fried, lemon, rosemary, Calabrian hot honey",
      },
      { name: "Parmigiana", description: "Mama's fried cutlet, marinara, mozzarella" },
      {
        name: "Piccata",
        badges: ["Family recipe"],
        description: "Bright lemon and white wine pan sauce, capers",
      },
      { name: "Marsala", description: "Mama's fried cutlet, mushrooms, Marsala wine sauce" },
      { name: "Francese", badges: ["New"], description: "Egg-battered, lemon, white wine, butter" },
      { name: "Grilled Lemon", description: "Grilled breast, lemon, extra virgin olive oil" },
      { name: "Siciliana", description: "Mama's fried cutlet, eggplant, marinara, mozzarella" },
    ],
  },
  {
    id: "pizza",
    title: "Pizza",
    kicker: "Chef Andrei's dough, fermented 2 days",
    items: [
      { name: "Margherita (V)", description: "Mozzarella, house sauce, basil, extra virgin olive oil" },
      { name: "Pepperoni", description: "Mozzarella, house sauce, pepperoni" },
      {
        name: "Ciao Bella",
        badges: ["House favorite"],
        description: "Mozzarella, prosciutto, arugula, burrata in the center",
      },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    kicker: "Build it, or go classic",
    items: [
      {
        name: "Pick Your Pasta",
        description:
          "Pasta: spaghetti, penne, rigatoni, fettuccine, or angel hair. Sauce: marinara, vodka, alfredo, bolognese, or pesto. Add meatballs, grilled or fried chicken, or wild-caught shrimp.",
      },
      {
        name: "Ciao Bella Pasta",
        badges: ["House favorite"],
        description:
          "Our signature vodka sauce with bacon. Add grilled chicken or wild-caught shrimp.",
      },
      {
        name: "Spaghetti & Meatballs",
        description: "Our Sunday spaghetti with house-made meatballs and marinara",
      },
      { name: "Penne alla Vodka", description: "Vodka sauce, a touch of marinara, parmigiano" },
      {
        name: "Lasagna",
        badges: ["Family recipe"],
        description: "House-made daily: ricotta, meat sauce, mozzarella",
      },
      {
        name: "Manicotti",
        badges: ["Family recipe"],
        description: "Pasta shells filled with ricotta, mozzarella and parmigiano, baked in marinara",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      {
        name: "Arugula Salad (V)",
        badges: ["New"],
        description: "Arugula, balsamic glaze, shaved parmigiano, black olives, red onion, tomato, cucumber",
      },
      { name: "Caesar", description: "Crisp romaine, parmigiano, Caesar dressing, croutons" },
      {
        name: "Italian Bistro Salad (V)",
        badges: ["New"],
        description: "Mixed greens, tomato, cucumber, red onion, olives, parmigiano, balsamic. Add chicken, salmon or shrimp.",
      },
      {
        name: "Salad Niçoise",
        badges: ["Signature"],
        description: "Tuna, egg, olives, tomato, potato, green beans, honey Dijon",
      },
    ],
  },
  sundaySupper,
  {
    id: "wine-night",
    title: "Wine Night",
    kicker: "Pour, share, linger · Tuesday, Wednesday, Thursday, and Friday, 5pm until close",
    items: wineNightItems,
  },
  {
    id: "sea",
    title: "From the Sea",
    items: [
      {
        name: "Grilled Salmon",
        badges: ["New"],
        description:
          "Grilled wild-caught salmon, lemon, extra virgin olive oil, roasted potatoes and seasonal vegetables",
      },
      {
        name: "Mussels",
        badges: ["New"],
        description: "Mussels in white wine, garlic and extra virgin olive oil, or spicy marinara, with grilled bread",
      },
      {
        name: "Snapper",
        badges: ["New"],
        description: "Pan-seared snapper fillet, lemon, capers, cherry tomatoes, roasted potatoes",
      },
      {
        name: "Scungilli",
        badges: ["New"],
        description: "Scungilli with butter, garlic and lemon",
      },
      {
        name: "Zuppa di Pesce",
        badges: ["New"],
        description: "Mussels, shrimp, clams and calamari in our house white sauce",
      },
      {
        name: "Shrimp Scampi",
        badges: ["New"],
        description: "Wild-caught shrimp in our house white sauce",
      },
      {
        name: "Shrimp Parmigiana",
        badges: ["New"],
        description: "Breaded wild-caught shrimp, marinara, mozzarella",
      },
    ],
  },
  {
    id: "burgers",
    title: "The Burgers",
    kicker: "With fries",
    note: "Served with French fries.",
    warning: rawMeatWarning,
    items: burgerItems,
  },
  {
    id: "desserts",
    title: "Desserts",
    kicker: "Made for sharing, or not",
    note: "Whole cakes available with catering orders, 3 days notice.",
    items: [
      { name: "Chocolate Mousse Cake", badges: ["New"] },
      { name: "Cheesecake", badges: ["New"] },
      { name: "Tiramisu", badges: ["New"] },
      { name: "Sorbetto Limoncello", badges: ["New"] },
    ],
  },
  {
    id: "kids",
    title: "Kids Menu",
    kicker: "12 and under, with a soft drink",
    note: "Kids like their chicken fried too.",
    items: [
      { name: "Cheese Pizza" },
      { name: "Pasta with Marinara or Butter" },
      { name: "Mama's Fried Chicken Tenders", badges: ["New"] },
      { name: "Mini Meatballs & Pasta" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      { name: "Grilled Vegetables (V)" },
      { name: "Roasted Potatoes (V)" },
      { name: "French Fries, plain or Italian-seasoned (V)" },
      { name: "Truffle Fries, parmigiano", badges: ["New"] },
      {
        name: "Mac & Cheese al Forno (V)",
        badges: ["New"],
        description: "Baked with fontina and parmigiano, toasted breadcrumbs",
      },
      { name: "House Salad, romaine (V)" },
      { name: "Sausage", badges: ["New"] },
    ],
  },
  {
    id: "grill",
    title: "From the Grill",
    kicker: "Fries or a side salad",
    items: [
      {
        name: "Sausage & Peppers",
        description: "Grilled Italian sausage, sautéed peppers and onions, with French fries or a side salad",
      },
    ],
  },
  {
    id: "whats-in-it-dinner",
    title: "What's in it",
    note: "We fry with good oils. Organic extra virgin olive oil and organic butter. Fresh garlic. Non-GMO unbleached flour. Wild-caught salmon, shrimp and tuna. Australian lamb. (V) vegetarian. Please let us know about any allergies.",
    items: [],
  },
];

export const healthyMenu: MenuSection[] = [
  {
    id: "healthy-lunch",
    title: "At Lunch",
    kicker: "Begins November 26, 2026 · 11am–2pm",
    note: "Eat light. Never boring. Fresh, grilled, simply Italian. Add a protein: chicken, wild-caught salmon, or shrimp, grilled or fried (breaded).",
    items: [
      {
        name: "Grilled Chicken Breast Plate",
        description: "Seasonal roasted vegetables, extra virgin olive oil",
      },
      {
        name: "Grilled Salmon Plate",
        badges: ["New"],
        description: "Wild-caught salmon, seasonal roasted vegetables, extra virgin olive oil",
      },
      {
        name: "Salad Niçoise",
        badges: ["Signature"],
        description: "Canned tuna, egg, olives, tomato, potato, green beans, honey Dijon vinaigrette",
      },
      {
        name: "Arugula Salad (V)",
        badges: ["New"],
        description: "Arugula, balsamic glaze, shaved parmigiano, black olives, red onion, tomato, cucumber",
      },
      { name: "Caprese (V)", description: "Tomato, fresh mozzarella, basil, extra virgin olive oil" },
    ],
  },
  {
    id: "healthy-dinner",
    title: "At Dinner",
    kicker: "5pm until close",
    items: [
      {
        name: "Grilled Lemon Chicken",
        description: "Grilled chicken breast, lemon, extra virgin olive oil, vegetables",
      },
      {
        name: "Salad Niçoise",
        badges: ["Signature"],
        description: "Canned tuna, egg, olives, tomato, potato, green beans, honey Dijon vinaigrette",
      },
      {
        name: "Arugula Salad (V)",
        badges: ["New"],
        description: "Arugula, balsamic glaze, shaved parmigiano, black olives, red onion, tomato, cucumber",
      },
      {
        name: "Antipasto (V)",
        description: "Oven-roasted peppers, zucchini, eggplant, extra virgin olive oil",
      },
      {
        name: "Grilled Salmon",
        badges: ["New"],
        description:
          "Grilled wild-caught salmon, lemon, extra virgin olive oil, roasted potatoes, seasonal vegetables",
      },
      {
        name: "Grilled Vegetables, side (V)",
        description: "Seasonal vegetables off the grill, extra virgin olive oil",
      },
    ],
  },
  {
    id: "whats-in-it-healthy",
    title: "What's in it",
    note: "(V) vegetarian. Please let us know about any allergies.",
    items: [
      { name: "Seafood", description: "Wild-caught salmon, shrimp and tuna" },
      { name: "House vinaigrette", description: "House-made honey Dijon" },
      { name: "Flour", description: "Non-GMO unbleached" },
      { name: "Frying", description: "We fry with good oils" },
      { name: "Grilled items", description: "Chicken, salmon, vegetables, sausage" },
      { name: "Olive oil and butter", description: "Organic extra virgin olive oil, organic butter" },
      { name: "Garlic", description: "Always fresh" },
    ],
  },
];

export const drinkMenu: MenuSection[] = [
  {
    id: "wine-night",
    title: "Wine Night",
    kicker: "Pour, share, linger · Tuesday, Wednesday, Thursday, and Friday, 5pm until close",
    note: "Impero reds: Cabernet, Chianti, Merlot. Impero whites: Chardonnay, Pinot Grigio, Rosé.",
    items: wineNightItems,
  },
  {
    id: "wine",
    title: "Wine",
    kicker: "Glass or bottle",
    items: [
      { name: "House Pinot Grigio, Istà", description: "White, Venezie, Italy" },
      { name: "House Montepulciano d'Abruzzo", description: "Red, Gran Sasso DOC, Abruzzo" },
    ],
  },
  {
    id: "impero",
    title: "Impero Wines",
    kicker: "Paired for you",
    items: [
      { name: "Impero Cabernet · Red", description: "Pairs with lamb chops and the Truffle Burger" },
      {
        name: "Impero Chianti · Red",
        description: "Pairs with Chicken Parmigiana, Spaghetti & Meatballs, and Lasagna",
      },
      { name: "Impero Merlot · Red", description: "Pairs with Chicken Marsala and Rigatoni Bolognese" },
      {
        name: "Impero Chardonnay · White",
        description: "Pairs with Mama's Fried Chicken, Penne alla Vodka, and any alfredo pasta",
      },
      {
        name: "Impero Pinot Grigio · White",
        description: "Pairs with Piccata, Francese, Grilled Salmon, Snapper, and Mussels",
      },
      {
        name: "Impero Rosé · Rosé",
        description: "Pairs with Ciao Bella Pasta, the Charcuterie Board, and Margherita",
      },
    ],
  },
  {
    id: "more-bottles",
    title: "More Bottles",
    items: [{ name: "Le Cascine Sauvignon Blanc", description: "White, Italy" }],
  },
  {
    id: "beer",
    title: "Beer",
    items: [
      { name: "Domestic", description: "Bud Light, Coors Light, Michelob Ultra" },
      {
        name: "Imported",
        description: "Modelo Especial, Corona Extra, Heineken, Stella Artois, Peroni, Dos Equis",
      },
    ],
  },
  {
    id: "soda",
    title: "Soda",
    items: [
      {
        name: "Canned Sodas",
        description:
          "Coca-Cola, Diet Coke, Coca-Cola Zero Sugar, Sprite, Fanta, Canada Dry Ginger Ale, Minute Maid Lemonade",
      },
    ],
  },
  {
    id: "water",
    title: "Water",
    items: [
      { name: "San Pellegrino Sparkling", description: "500 mL" },
      { name: "Acqua Panna Still", description: "500 mL" },
    ],
  },
  {
    id: "coffee",
    title: "Coffee",
    items: [{ name: "Espresso" }, { name: "Cappuccino" }],
  },
  {
    id: "drink-promos",
    title: "Come Back",
    items: [
      {
        name: "Panino & Soup",
        price: "$22",
        description: "Lunch service begins November 26, 2026, 11am–2pm. Chef Andrei's house-made bread.",
      },
      {
        name: "Fritto Friday",
        price: "$23",
        description: "Pollo Fritto panino, fries and a soda. Lunch service begins November 26, 2026.",
      },
      {
        name: "Mama's Sunday Supper",
        price: "$75",
        description: promotions[0].detail,
      },
    ],
  },
];

export const cateringMenu: MenuSection[] = [
  {
    id: "team-lunch",
    title: "Team Lunch Special",
    kicker: "Order 3 days ahead · serves 10",
    items: [
      {
        name: "Team Lunch Special",
        price: "$220",
        description:
          "Half Chicken Alfredo tray, half Chicken Parmigiana tray, and a complimentary salad tray. Optional charcuterie platter for the team, +$99.",
      },
      {
        name: "Office Catering",
        price: "10% off",
        description: "First order of $150 or more. Team Lunch, a charcuterie platter, or any trays. Order 3 days ahead.",
      },
    ],
  },
  {
    id: "catering-pasta",
    title: "Pasta",
    kicker: "Half and full trays",
    items: [
      { name: "Chicken Alfredo" },
      { name: "Rigatoni Bolognese" },
      {
        name: "Ciao Bella Pasta",
        badges: ["House favorite"],
        description: "Vodka sauce with bacon. Add chicken or shrimp.",
      },
      { name: "Lasagna", badges: ["Family recipe"] },
    ],
  },
  {
    id: "pollo-fritto",
    title: "Pollo Fritto",
    kicker: "Half and full trays",
    items: [
      { name: "Fried Chicken, bone-in", badges: ["New"] },
      { name: "Fried Chicken Tenders, hot honey", badges: ["New"] },
    ],
  },
  {
    id: "entree-trays",
    title: "Entrée Trays",
    kicker: "With pasta",
    items: [
      { name: "Chicken Parmigiana, fried cutlet" },
      { name: "Grilled Chicken & Vegetables" },
    ],
  },
  {
    id: "catering-pizza",
    title: "Pizza",
    kicker: "Chef Andrei's dough · priced per pizza · order 3 days ahead",
    items: [
      { name: "Margherita (V)" },
      { name: "Pepperoni" },
      { name: "Ciao Bella", badges: ["House favorite"] },
    ],
  },
  {
    id: "lunch-trays",
    title: "Lunch Trays",
    kicker: "Half and full trays",
    note: "Panini are cut in half, a chef's mix on house-made bread. A half salad tray serves 10. A full salad tray serves 20. House dressing on the side.",
    items: [
      { name: "Charcuterie Platter, seasonal, serves 10", badges: ["New"] },
      { name: "Panini Platter, 10 panini" },
      { name: "House Salad, romaine (V)" },
      { name: "Arugula Salad (V)" },
      { name: "House-made soup, per quart" },
    ],
  },
  {
    id: "catering-dessert",
    title: "Dessert",
    kicker: "Whole cakes, 12 slices",
    note: "Add one to any catering order. Order 3 days ahead.",
    items: [
      { name: "Chocolate Mousse Cake" },
      { name: "Cheesecake" },
      { name: "Tiramisu" },
    ],
  },
];

/** PDF afternoon service. Not published. Do not offer it, or book it, until Kat confirms the start date. */
export const afternoonMenu: MenuSection[] = [
  {
    id: "afternoon",
    title: "Afternoon",
    kicker: "Not in service. Pending a start date and reservation rule.",
    note: "The PDF lists panini, pizza, calzone, soups, salads and sides from 2–5pm. Lunch still begins November 26. This section is not on the public menu.",
    items: [
      ...lunchMenu.find((section) => section.id === "panini")!.items,
      ...lunchMenu.find((section) => section.id === "pizza")!.items,
      ...lunchMenu.find((section) => section.id === "soup")!.items,
      ...lunchMenu.find((section) => section.id === "salads")!.items,
      ...lunchMenu.find((section) => section.id === "sides")!.items,
    ],
  },
];
