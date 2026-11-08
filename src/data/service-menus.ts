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
  "*Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.";

const burgerNote =
  "Grilled to order on a brioche bun • served with French fries, plain or Italian-seasoned • upgrade to truffle fries";

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

const sundaySupper: MenuSection = {
  id: "sunday-supper",
  title: "Mama's Sunday Supper",
  kicker: "Sundays · pour, share, linger",
  items: [
    {
      name: "Mama's Sunday Supper",
      price: "$75",
      description:
        "Feeds 4: Pollo Fritto, a big bowl of pasta, house salad, garlic knots. $5 Impero glasses. Dine-in or takeout.",
    },
  ],
};

export const lunchMenu: MenuSection[] = [
  {
    id: "lunch-deals",
    title: "Lunch",
    kicker: "11am–2pm, beginning November 26, 2026",
    note: "Every meal starts with our warm, house-made garlic knots, on us.",
    items: [
      {
        name: "Panino & Soup",
        price: "$22",
        description:
          "Your soup for just $3. Any whole panino plus a cup of soup. Dine-in or to-go. Daily once lunch service begins.",
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
    note: "Every panino comes on house-made panuozzo, baked fresh each morning from the same dough as the pizza: crisp outside, soft and airy inside. Prefer a classic hoagie? Ask for a Cusano's roll. Make any chicken panino fried, or add hot honey to anything.",
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
        description: "Mama's fried chicken cutlet, marinara, mozzarella",
      },
      {
        name: "Meatball Parmigiana",
        description: "House-made meatballs, marinara, melted mozzarella",
      },
      {
        name: "Caprese (V)",
        description: "Tomato, fresh mozzarella, basil, pesto",
      },
      {
        name: "Make Your Own Panino",
        description: "Roll included. Build it your way, or make it the Lunch Combo.",
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
        badges: ["House favorite"],
        price: "$20 chicken · $23 shrimp",
        description:
          "Alfredo-vodka blend with bacon and mushrooms, plus grilled chicken or wild-caught shrimp",
      },
      {
        name: "Pasta Plate",
        price: "$16",
        description:
          "Choice of pasta and sauce, including our house favorite Ciao Bella (has bacon), plus a soda",
      },
      {
        name: "Chicken Parm & Pasta",
        price: "$20",
        description: "Mama's fried chicken parmigiana, pasta, house salad",
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
    note: burgerNote,
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
      { name: "Arugula Salad (V)", description: "Arugula, balsamic glaze, shaved parmigiano" },
      { name: "House Salad (V)", description: "Crisp romaine, house dressing or any dressing" },
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
    ],
  },
  {
    id: "wine-night",
    title: "Wine Night",
    kicker: "Tuesday, Wednesday, Thursday, and Friday, 5–10pm",
    items: [
      {
        name: "Impero glass",
        price: "$7",
        description: "Or $5 paired with a dish or a board. Impero reds, whites, and rosé.",
      },
      { name: "Impero bottle", price: "$19", description: "Regular bottle $38." },
      { name: "Bottle and charcuterie board", price: "$44", description: "Dine-in." },
    ],
  },
];

export const dinnerMenu: MenuSection[] = [
  {
    id: "chefs-special",
    title: "Chef's Special",
    kicker: "Weekends and holidays · rotates with braised ribs and pork",
    note: "Every meal starts with our warm, house-made garlic knots, on us. Dinner is 5pm–10pm.",
    items: [
      {
        name: "Grilled Australian Lamb Chops",
        price: "$65",
        description:
          "Five chops, oven-roasted lemon-rosemary fries, our house-made honey Dijon sauce. Pairs with Impero Cabernet.",
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
        description: "Oven-roasted peppers, zucchini, eggplant, extra virgin olive oil",
      },
      {
        name: "Eggplant Rollatini (V)",
        description: "Eggplant rolled with ricotta, baked in marinara and mozzarella",
      },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    items: [
      { name: "Arugula Salad (V)", description: "Arugula, balsamic glaze, shaved parmigiano" },
      { name: "Caesar", description: "Crisp romaine, parmigiano, Caesar dressing, croutons" },
      {
        name: "Italian Bistro Salad (V)",
        badges: ["New"],
        description:
          "Mixed greens, tomato, cucumber, red onion, olives, parmigiano, balsamic. Add chicken, salmon or shrimp.",
      },
      {
        name: "Salad Niçoise",
        badges: ["Signature"],
        description: "Tuna, egg, olives, tomato, potato, green beans, honey Dijon",
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
        description: "Tender chicken, bright lemon and white wine pan sauce, capers",
      },
      { name: "Marsala", description: "Mama's fried cutlet, mushrooms, Marsala wine sauce" },
      { name: "Francese", badges: ["New"], description: "Egg-battered, lemon, white wine, butter" },
      { name: "Grilled Lemon", description: "Grilled breast, lemon, extra virgin olive oil" },
      { name: "Siciliana", description: "Mama's fried cutlet, eggplant, marinara, mozzarella" },
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
          "Pasta: spaghetti, penne, rigatoni, or fettuccine. Sauce: marinara, vodka, alfredo, bolognese, pesto, or Ciao Bella (has bacon). Add meatballs, grilled or fried chicken, or wild-caught shrimp.",
      },
      {
        name: "Ciao Bella Pasta",
        badges: ["House favorite"],
        description:
          "Our signature blend of alfredo and vodka sauce with bacon and mushrooms, plus grilled chicken or wild-caught shrimp",
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
    id: "pizza",
    title: "Pizza",
    kicker: "Chef Andrei's dough, made daily",
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
  sundaySupper,
  {
    id: "wine-night",
    title: "Wine Night",
    kicker: "Pour, share, linger · Tuesday, Wednesday, Thursday, and Friday, 5pm–10pm",
    items: [
      {
        name: "Impero glass, paired or with a board",
        price: "$5",
        description: "Impero reds: Cabernet, Chianti, Merlot. Impero whites: Chardonnay, Pinot Grigio, Rosé.",
      },
      { name: "Impero bottle", price: "$19", description: "Regular bottle $38." },
      { name: "Bottle and charcuterie board", price: "$44", description: "Dine-in." },
    ],
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
    id: "burgers",
    title: "The Burgers",
    kicker: "Three burgers, one bistro",
    note: burgerNote,
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
    ],
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
      { name: "Arugula Salad (V)", description: "Arugula, balsamic glaze, shaved parmigiano" },
      { name: "Caprese (V)", description: "Tomato, fresh mozzarella, basil, extra virgin olive oil" },
    ],
  },
  {
    id: "healthy-dinner",
    title: "At Dinner",
    kicker: "5pm–10pm",
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
      { name: "Arugula Salad (V)", description: "Arugula, balsamic glaze, shaved parmigiano" },
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
];

export const drinkMenu: MenuSection[] = [
  {
    id: "wine-night",
    title: "Wine Night",
    kicker: "Pour, share, linger · Tuesday, Wednesday, Thursday, and Friday, 5pm–10pm",
    note: "Impero reds: Cabernet, Chianti, Merlot. Impero whites: Chardonnay, Pinot Grigio, Rosé. Any Impero glass is $7, or $5 with its paired dish or a board.",
    items: [
      { name: "A glass, paired or with a board", price: "$5" },
      { name: "A bottle", price: "$19", description: "Regular bottle $38." },
      { name: "Bottle and board", price: "$44", description: "Dine-in." },
    ],
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
        description:
          "Lunch service begins November 26, 2026, 11am–2pm. Chef Andrei's house-made bread.",
      },
      {
        name: "Fritto Friday",
        price: "$23",
        description: "Pollo Fritto panino, fries and a soda. Lunch service begins November 26, 2026.",
      },
      {
        name: "Mama's Sunday Supper",
        price: "$75",
        description:
          "Feeds 4: Pollo Fritto, a big bowl of pasta, house salad, garlic knots. $5 Impero glasses. Dine-in or takeout.",
      },
    ],
  },
];

export const cateringMenu: MenuSection[] = [
  {
    id: "team-lunch",
    title: "Team Lunch Special",
    kicker: "Order 3 days ahead",
    items: [
      {
        name: "Team Lunch Special",
        price: "$205",
        description:
          "Full Chicken Alfredo tray plus a full Chicken Parmigiana tray, and a salad tray on us. Add a charcuterie platter for the team, +$69.",
      },
    ],
  },
  {
    id: "catering-pasta",
    title: "Pasta",
    kicker: "Half and full trays",
    note: "Ciao Bella Pasta is bacon, mushrooms, and chicken or shrimp.",
    items: [
      { name: "Chicken Alfredo" },
      { name: "Rigatoni Bolognese" },
      { name: "Ciao Bella Pasta", badges: ["House favorite"] },
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
    kicker: "Chicken or veal, with pasta",
    note: "Veal: call for pricing.",
    items: [
      { name: "Chicken or Veal Parmigiana, fried cutlet" },
      { name: "Grilled Chicken or Veal & Vegetables" },
    ],
  },
  {
    id: "catering-pizza",
    title: "Pizza",
    kicker: "Chef Andrei's dough · 3 days notice",
    items: [
      { name: "Margherita (V)", price: "Call" },
      { name: "Pepperoni", price: "Call" },
      { name: "Ciao Bella", badges: ["House favorite"], price: "Call" },
    ],
  },
  {
    id: "lunch-trays",
    title: "Lunch Trays",
    kicker: "Half and full trays",
    note: "Call for tray pricing. Salads come with our house dressing on the side.",
    items: [
      { name: "Charcuterie Platter, seasonal, serves 10", badges: ["New"] },
      { name: "Panini Platter, house-made bread", price: "Call" },
      { name: "House Salad, romaine (V)", price: "Call" },
      { name: "Arugula Salad (V)", price: "Call" },
      { name: "House-made soup, by the quart", price: "Call" },
    ],
  },
  {
    id: "catering-dessert",
    title: "Dessert",
    note: "Whole cakes for birthdays and events: add one to any catering order. Order 3 days ahead.",
    items: [
      { name: "Chocolate Mousse Cake", price: "Call" },
      { name: "Cheesecake", price: "Call" },
      { name: "Tiramisu", price: "Call" },
    ],
  },
];
