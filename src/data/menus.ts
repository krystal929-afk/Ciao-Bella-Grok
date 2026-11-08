import { sliceOrder, type MenuSection } from "@/data/restaurant";

export type Promo = {
  id: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  image?: string;
};

export const SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/share/19r6EvE6uH/"
	},
	{
		label: "Instagram",
		href: "https://www.instagram.com/ciaobellatrattoria"
	},
	{
		label: "Google",
		href: "https://share.google/IWOXZ2PdL2zKv9grN"
	}
];
export const promos: Promo[] = [
  {
    id: "holiday",
    title: "Holiday Parties",
    body: "The perfect venue for your Holiday Party! Book your party today!",
    cta: "Book your party",
    href: "/party",
    image: "/images/brand/holiday.jpg",
  },
  {
    id: "catering",
    title: "Did you know we do catering?",
    body: "Whatever your occasion, however big or small, we have the perfect options to choose from. Cater your birthday party, holiday party, corporate events, wedding festivities and more!",
    cta: "Catering Packages",
    href: "/catering",
    image: "/images/brand/catering-card.jpg",
  },
  {
    id: "reserve",
    title: "We are taking reservations!",
    body: "Let’s ensure you get a great table. We recommend making a reservation ahead of time.",
    cta: "Book Table",
    href: "/reservations",
  },
  {
    id: "order",
    title: "Order your favorite dishes in seconds!",
    body: "Takeout and delivery through Slice. 5% off online orders, and a confirmation email when the kitchen accepts the ticket.",
    cta: "Order",
    href: sliceOrder.href,
  },
  {
    id: "memories",
    title: "Turn moments into memories!",
    body: "Got a birthday party, rehearsal dinner, corporate or other event coming up? Inquire today and let us know how we can make your special occasion perfect!",
    cta: "Book your party",
    href: "/party",
  },
];
export const drinkMenu: MenuSection[] = [
	{
		id: "red",
		title: "Red",
		items: [
			{
				name: "Cabernet Sauvignon \"Fuga\", Apulia",
				description: "Deep ruby color, intense and round, excellent tannins."
			},
			{
				name: "Pinot Noir, Calatroni, Italy",
				description: "Boysenberry, dark cherry, and roasty mocha."
			},
			{
				name: "Chianti Classico DOCG, Nabucco",
				description: "Ripe cherry and strawberry on the nose."
			},
			{
				name: "Supertuscan Origo, Sangiovese/Cabernet",
				description: "Excellent body, matured in small French oak."
			},
			{
				name: "Montepulciano Roma DOC, Poggio Le Volpi",
				description: "Bright ruby, ripe red fruit and cherry."
			},
			{
				name: "Ripasso della Valpolicella, Tinazzi",
				description: "Deep ruby, prunes and cherry. 96 pts."
			},
			{
				name: "Amarone della Valpolicella DOCG, Villa Loren",
				description: "Full bodied, elegant tannins, long finish."
			},
			{
				name: "Brunello di Montalcino DOCG, La Togata",
				description: "Full-bodied, structured, austere and tannic. 92 pts."
			},
			{
				name: "Barolo DOCG, Tre Pais, Piedmont",
				description: "Full ruby, dry, long."
			},
			{
				name: "Barbera d'Asti, Duedu., Piedmont",
				description: "Vinous and fruity, with violet."
			}
		]
	},
	{
		id: "white",
		title: "White",
		items: [
			{
				name: "Prosecco Split, 200 ml",
			},
			{
				name: "Prosecco DOC, Nino Ardevi",
			},
			{
				name: "Rosé di Amarone DOP, Campo delle Rose",
				description: "Salmon pink. Raspberry and wild cherry."
			},
			{
				name: "Pinot Grigio delle Venezie, Tinazzi",
				description: "Straw yellow, fruity, floral."
			},
			{
				name: "Sauvignon Blanc, Collevento 921",
				description: "Citrus and a refined finish."
			},
			{
				name: "Falanghina del Benevento, Lava",
				description: "Medium-bodied, intense, persistent."
			}
		]
	},
	{
		id: "impero",
		title: "Impero Premium Collection",
		items: [
			{
				name: "Pinot Grigio",
			},
			{
				name: "Chardonnay",
			},
			{
				name: "Rosé",
			},
			{
				name: "Cabernet",
			},
			{
				name: "Merlot",
			},
			{
				name: "Chianti DOCG",
			}
		]
	},
	{
		id: "hot",
		title: "Hot Drinks",
		items: [
			{
				name: "Espresso",
				description: "A single shot of Italian espresso."
			},
			{
				name: "Caffè Americano",
				description: "Espresso lengthened with hot water."
			},
			{
				name: "Cappuccino",
				description: "Espresso, steamed milk, and foam."
			},
			{
				name: "Hot Tea",
			}
		]
	},
	{
		id: "fresh",
		title: "Fresh Drinks",
		items: [
			{
				name: "Red Bull",
				description: "The classic Red Bull."
			},
			{
				name: "Canned soda",
				description: "Cola, diet cola, or lemon-lime."
			},
			{
				name: "Iced Tea",
			},
			{
				name: "Panna water",
			},
			{
				name: "San Pellegrino",
			},
			{
				name: "Beer, domestic",
			},
			{
				name: "Beer, imported",
			}
		]
	}
];
export const specials = [
	{
		day: "Tuesday",
		title: "Wine Night",
		detail: "Half-price bottles. Glass $7, or $5 paired with a dish or board. Bottle $19. Bottle plus charcuterie board $44.",
		hours: "5:00 PM – 9:00 PM"
	},
	{
		day: "Wednesday",
		title: "Wine Night",
		detail: "Half-price bottles of wine.",
		hours: "5:00 PM – 9:00 PM"
	},
	{
		day: "Thursday",
		title: "Pizza Night",
		detail: "16\" pizza for $15. Dine-in only.",
		hours: "5:00 PM – 9:00 PM"
	}
];
export const slides = [
  {
    title: "Gather, Dine, Enjoy",
    href: "/food-menu",
    label: "Our Menu",
    image: "/images/brand/bruschetta.jpg",
    alt: "Bruschetta on a board of arugula",
  },
  {
    title: "Host And Celebrate",
    href: "/party",
    label: "Book a private party",
    image: "/images/brand/pizza-cheese.jpg",
    alt: "Cheese pizza with a blistered crust",
  },
  {
    title: "Catering With Tradition",
    href: "/catering",
    label: "Inquire about catering",
    image: "/images/brand/shrimp.jpg",
    alt: "Shrimp scampi over pasta",
  },
];
export const gallery = [
  { src: "/images/brand/calamari.jpg", alt: "Fried calamari with marinara and lemon" },
  { src: "/images/brand/pizza-hawaiian.jpg", alt: "Ham and pineapple pizza" },
  { src: "/images/brand/pizza-cheese.jpg", alt: "Cheese pizza with a blistered crust" },
  { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  { src: "/images/brand/salmon.jpg", alt: "Salmon with caprese salad" },
  { src: "/images/brand/bruschetta.jpg", alt: "Bruschetta on arugula" },
  { src: "/images/brand/tiramisu.jpg", alt: "Tiramisu with cocoa and whipped cream" },
  { src: "/images/brand/parm.jpg", alt: "Chicken parmigiana with penne" },
];
