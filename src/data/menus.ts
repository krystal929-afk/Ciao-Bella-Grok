import { onlineOrder } from "@/data/restaurant";

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
    body: "Order Ciao Bella for pickup or delivery.",
    cta: "Order",
    href: onlineOrder.href,
  },
  {
    id: "memories",
    title: "Turn moments into memories!",
    body: "Got a birthday party, rehearsal dinner, corporate or other event coming up? Inquire today and let us know how we can make your special occasion perfect!",
    cta: "Book your party",
    href: "/party",
  },
];
export { drinkMenu } from "@/data/service-menus";
export const specials = [
  {
    day: "Tuesday",
    title: "Wine Night",
    detail:
      "Impero wines. $5 a glass paired or with a board, or $7 for an Impero glass. Bottle $19 (regular $38). Bottle plus charcuterie board $44, dine-in.",
    hours: "5:00 PM – 9:00 PM, beginning November 17",
  },
  {
    day: "Wednesday",
    title: "Wine Night",
    detail:
      "Impero wines. $5 a glass paired or with a board, or $7 for an Impero glass. Bottle $19 (regular $38). Bottle plus charcuterie board $44, dine-in.",
    hours: "5:00 PM – 9:00 PM, beginning November 18",
  },
  {
    day: "Thursday",
    title: "Wine Night",
    detail:
      "Impero wines. $5 a glass paired or with a board, or $7 for an Impero glass. Bottle $19 (regular $38). Bottle plus charcuterie board $44, dine-in.",
    hours: "5:00 PM – 10:00 PM on November 12. Beginning November 19, 5:00 PM – 9:00 PM",
  },
  {
    day: "Friday",
    title: "Wine Night",
    detail:
      "Impero wines, 5:00 PM – 10:00 PM. $5 a glass paired or with a board, or $7 for an Impero glass. Bottle $19 (regular $38). Bottle plus charcuterie board $44, dine-in. Fritto Friday, once lunch begins November 26: Pollo Fritto panino, fries and a soda, $23.",
    hours: "5:00 PM – 10:00 PM",
  },
  {
    day: "Sunday",
    title: "Mama's Sunday Supper",
    detail:
      "$75. Feeds 4: Pollo Fritto, a big bowl of pasta, house salad, garlic knots. $5 Impero glasses. Dine-in or takeout.",
    hours: "5:00 PM – 10:00 PM through November 15. Beginning November 22, 5:00 PM – 9:00 PM",
  },
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
