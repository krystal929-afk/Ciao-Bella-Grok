import type { MenuSection } from "@/data/restaurant";

export type Promo = {
  id: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

export const SOCIALS = [
	{
		label: "Facebook",
		href: "https://www.facebook.com/100063594282286"
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
export const HERO_VIDEO = "https://static.spotapps.co/new_website_videos/344525_videos/344525_video_desktop_v3.mp4";
export const promos: Promo[] = [
	{
		id: "order",
		title: "Order your favorite dishes in seconds!",
		body: "Pizzas, pastas, and seafood, packed for pickup. Pay when you collect it.",
		cta: "Order pickup",
		href: "/order"
	},
	{
		id: "holiday",
		title: "Holiday Parties",
		body: "The perfect venue for your holiday party. Book your party today.",
		cta: "Book your party",
		href: "/party"
	},
	{
		id: "catering",
		title: "Did you know we do catering?",
		body: "Whatever the occasion, however big or small. Birthdays, holidays, corporate events, wedding festivities, and more.",
		cta: "Catering Packages",
		href: "/catering"
	},
	{
		id: "reserve",
		title: "We are taking reservations!",
		body: "Let’s make sure you get a great table. We recommend booking ahead.",
		cta: "Book Table",
		href: "/reservations"
	},
	{
		id: "memories",
		title: "Turn moments into memories!",
		body: "Birthday, rehearsal dinner, corporate gathering — tell us the date and we’ll take it from there.",
		cta: "Book your party",
		href: "/party"
	}
];
export const drinkMenu: MenuSection[] = [
	{
		id: "red",
		title: "Red",
		items: [
			{
				name: "Cabernet Sauvignon \"Fuga\", Apulia",
				price: "Glass $15.50 · Bottle $57.50",
				description: "Deep ruby color, intense and round, excellent tannins."
			},
			{
				name: "Pinot Noir, Calatroni, Italy",
				price: "Glass $12.50 · Bottle $48",
				description: "Boysenberry, dark cherry, and roasty mocha."
			},
			{
				name: "Chianti Classico DOCG, Nabucco",
				price: "Glass $14.50 · Bottle $55",
				description: "Ripe cherry and strawberry on the nose."
			},
			{
				name: "Supertuscan Origo, Sangiovese/Cabernet",
				price: "Glass $14.50 · Bottle $55",
				description: "Excellent body, matured in small French oak."
			},
			{
				name: "Montepulciano Roma DOC, Poggio Le Volpi",
				price: "Bottle $55",
				description: "Bright ruby, ripe red fruit and cherry."
			},
			{
				name: "Ripasso della Valpolicella, Tinazzi",
				price: "Bottle $55",
				description: "Deep ruby, prunes and cherry. 96 pts."
			},
			{
				name: "Amarone della Valpolicella DOCG, Villa Loren",
				price: "Bottle $96.50",
				description: "Full bodied, elegant tannins, long finish."
			},
			{
				name: "Brunello di Montalcino DOCG, La Togata",
				price: "Bottle $96.50",
				description: "Full-bodied, structured, austere and tannic. 92 pts."
			},
			{
				name: "Barolo DOCG, Tre Pais, Piedmont",
				price: "Bottle $96.50",
				description: "Full ruby, dry, long."
			},
			{
				name: "Barbera d'Asti, Duedu., Piedmont",
				price: "Bottle $48.50",
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
				price: "Glass $10 · Bottle $39.50"
			},
			{
				name: "Prosecco DOC, Nino Ardevi",
				price: "Bottle $49"
			},
			{
				name: "Rosé di Amarone DOP, Campo delle Rose",
				price: "Bottle $49",
				description: "Salmon pink. Raspberry and wild cherry."
			},
			{
				name: "Pinot Grigio delle Venezie, Tinazzi",
				price: "Bottle $49",
				description: "Straw yellow, fruity, floral."
			},
			{
				name: "Sauvignon Blanc, Collevento 921",
				price: "Glass $12.50 · Bottle $49",
				description: "Citrus and a refined finish."
			},
			{
				name: "Falanghina del Benevento, Lava",
				price: "Glass $12.50 · Bottle $49",
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
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Chardonnay",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Rosé",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Cabernet",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Merlot",
				price: "Glass $9.99 · Bottle $38"
			},
			{
				name: "Chianti DOCG",
				price: "Glass $9.99 · Bottle $38"
			}
		]
	},
	{
		id: "hot",
		title: "Hot Drinks",
		items: [
			{
				name: "Espresso",
				price: "$4.99",
				description: "A single shot of Italian espresso."
			},
			{
				name: "Caffè Americano",
				price: "$6",
				description: "Espresso lengthened with hot water."
			},
			{
				name: "Cappuccino",
				price: "$6.99",
				description: "Espresso, steamed milk, and foam."
			},
			{
				name: "Hot Tea",
				price: "$3.99"
			}
		]
	},
	{
		id: "fresh",
		title: "Fresh Drinks",
		items: [
			{
				name: "Red Bull",
				price: "$6",
				description: "The classic Red Bull."
			},
			{
				name: "Canned soda",
				price: "$3.99",
				description: "Cola, diet cola, or lemon-lime."
			},
			{
				name: "Iced Tea",
				price: "$3.99"
			},
			{
				name: "Panna water",
				price: "$3.50"
			},
			{
				name: "San Pellegrino",
				price: "$3.50"
			},
			{
				name: "Beer, domestic",
				price: "$5.95"
			},
			{
				name: "Beer, imported",
				price: "$6.95"
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
		image: "/images/house/slide1.jpg",
		alt: "Clams in white wine with lemon"
	},
	{
		title: "Host And Celebrate",
		href: "/party",
		label: "Book a private party",
		image: "/images/house/slide2.jpg",
		alt: "Arugula salad with feta, tomato, and balsamic"
	},
	{
		title: "Catering With Tradition",
		href: "/catering",
		label: "Inquire about catering",
		image: "/images/house/slide3.jpg",
		alt: "Piccata with capers, lemon, and spaghetti"
	}
];
export const gallery = [
	{
		src: "/images/house/g8.jpg",
		alt: "Fried calamari with marinara and lemon"
	},
	{
		src: "/images/house/g1.jpg",
		alt: "Ham and pineapple pizza"
	},
	{
		src: "/images/house/g4.jpg",
		alt: "Prosciutto and arugula pizza"
	},
	{
		src: "/images/house/g3.jpg",
		alt: "Shrimp over pasta"
	},
	{
		src: "/images/house/g6.jpg",
		alt: "Grilled salmon with caprese salad"
	},
	{
		src: "/images/house/g5.jpg",
		alt: "Arugula salad with feta and balsamic"
	},
	{
		src: "/images/house/g7.jpg",
		alt: "Tiramisu"
	},
	{
		src: "/images/house/g2.jpg",
		alt: "Lemon dessert"
	}
];
