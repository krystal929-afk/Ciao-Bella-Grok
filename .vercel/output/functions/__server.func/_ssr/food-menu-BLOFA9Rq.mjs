import { o as __toESM } from "../_runtime.mjs";
import { n as cateringMenu, r as dinnerMenu } from "./restaurant-IoJpytYJ.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { J as require_react, Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/food-menu-BLOFA9Rq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var highlights = {
	appetizers: {
		src: "/images/calamari.jpg",
		alt: "Fried calamari with lemon and marinara"
	},
	pizza: {
		src: "/images/pizza.jpg",
		alt: "Pizza with basil and blistered crust"
	},
	chicken: {
		src: "/images/chicken-parm.jpg",
		alt: "Chicken parmigiana with spaghetti"
	},
	desserts: {
		src: "/images/tiramisu.jpg",
		alt: "Slice of tiramisu"
	}
};
function FoodMenu() {
	const [menu, setMenu] = (0, import_react.useState)("dinner");
	const sections = menu === "dinner" ? dinnerMenu : cateringMenu;
	const [active, setActive] = (0, import_react.useState)(sections[0].id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Dinner" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl",
					children: "Our menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "Prices from the published Ciao Bella menu. Plates are generous — guests regularly leave with tomorrow’s lunch. Call if you need to confirm a dish."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/order",
					className: "rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
					children: "Order pickup"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("rounded-full border px-4 py-2 text-sm", menu === "dinner" ? "border-primary bg-primary text-bg" : "border-border"),
					onClick: () => {
						setMenu("dinner");
						setActive(dinnerMenu[0].id);
					},
					children: "Menu"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("rounded-full border px-4 py-2 text-sm", menu === "catering" ? "border-primary bg-primary text-bg" : "border-border"),
					onClick: () => {
						setMenu("catering");
						setActive(cateringMenu[0].id);
					},
					children: "Catering Menu"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-20 z-30 -mx-4 mt-8 overflow-x-auto border-y border-border bg-bg/95 px-4 py-3 backdrop-blur",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `#${section.id}`,
						onClick: () => setActive(section.id),
						className: cn("shrink-0 rounded-full border px-4 py-2 text-sm", active === section.id ? "border-primary bg-primary text-bg" : "border-border bg-surface text-fg"),
						children: section.title
					}, section.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catering",
						className: "shrink-0 rounded-full border border-border px-4 py-2 text-sm",
						children: "Catering inquiry"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-col gap-14",
				children: sections.map((section) => {
					const photo = highlights[section.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: section.id,
						className: "scroll-mt-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-6 md:grid-cols-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: photo ? "md:col-span-3" : "md:col-span-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-3xl",
									children: section.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 divide-y divide-border",
									children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "py-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-lg",
												children: item.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "shrink-0 text-sm text-primary",
												children: item.price
											})]
										}), item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 max-w-prose text-sm text-muted",
											children: item.description
										}) : null]
									}, item.name))
								})]
							}), photo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photo.src,
								alt: photo.alt,
								className: "aspect-square w-full rounded-md object-cover md:col-span-2"
							}) : null]
						})
					}, section.id);
				})
			})
		]
	});
}
//#endregion
export { FoodMenu as component };
