import { o as __toESM } from "../_runtime.mjs";
import { a as houseLine, o as restaurant, s as reviews, t as about } from "./restaurant-IoJpytYJ.mjs";
import { J as require_react, Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { a as Pause, r as Play } from "../_libs/lucide-react.mjs";
import { a as openNewsletter, i as PhotoGallery, n as HeroFilm, r as MomentSlideshow } from "./router-CDNrVul_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-iBa8XFs0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reviews() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const current = reviews[index];
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const timer = window.setInterval(() => {
			setIndex((value) => (value + 1) % reviews.length);
		}, 7e3);
		return () => window.clearInterval(timer);
	}, [playing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4 py-16 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-primary",
					children: "Loved by our guests"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "mt-6 font-display text-2xl leading-snug text-fg sm:text-3xl",
					children: [
						"“",
						current.quote,
						"”"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-sm text-muted",
					children: [
						"Five stars · ",
						current.name,
						" · Google"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-center gap-3",
					children: [reviews.map((review, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": `Show review by ${review.name}`,
						className: `size-2.5 rounded-full ${i === index ? "bg-primary" : "bg-border"}`,
						onClick: () => setIndex(i)
					}, review.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "ml-2 inline-flex size-11 items-center justify-center rounded-full border border-border",
						"aria-label": playing ? "Stop reviews" : "Start reviews",
						onClick: () => setPlaying((value) => !value),
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" })
					})]
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative bg-fg text-bg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroFilm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-96 max-w-6xl flex-col justify-end px-4 py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: restaurant.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-xl font-display text-4xl leading-tight sm:text-6xl",
						children: restaurant.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-sm text-bg/85",
						children: "Dinner on Federal Highway. Pizzas, red-sauce classics, and a dining room that still feels like a family table."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/food-menu",
							className: "rounded-md bg-bg px-5 py-3 text-sm text-fg hover:bg-surface",
							children: "Our menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/reservations",
							className: "rounded-md border border-bg/40 px-5 py-3 text-sm text-bg hover:bg-bg/10",
							children: "Reserve a table"
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Deerfield Beach" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-tight",
					children: "A table that still tastes like home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted",
					children: about
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 border-l-2 border-accent pl-4 font-display text-xl leading-snug text-fg",
					children: houseLine
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/house/g6.jpg",
				alt: "Grilled salmon with caprese salad",
				className: "aspect-video w-full rounded-md object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MomentSlideshow, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/house/g3.jpg",
				alt: "Shrimp over pasta",
				className: "aspect-square w-full max-w-md rounded-md object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Order and enjoy" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl leading-tight",
					children: "Fresh Italian meals, taken home"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "Packed from the dinner menu and paid at the door. Tuesday through Sunday, between 5 and 9."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/order",
					className: "mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
					children: "Order pickup"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoGallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "after-gallery",
			className: "mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Find us" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl",
					children: "1380 South Federal Highway"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-muted",
					children: restaurant.city
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Sunday, Tuesday – Saturday, 5:00 PM – 9:00 PM. Monday closed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					className: "mt-4 inline-block text-sm text-primary",
					href: restaurant.maps,
					children: "Open in maps"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				title: "Map of Ciao Bella on Federal Highway",
				className: "h-72 w-full rounded-md border border-border",
				src: "https://www.openstreetmap.org/export/embed.html?bbox=-80.1005%2C26.2965%2C-80.0865%2C26.3028&layer=mapnik&marker=26.2996467%2C-80.0933693"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Stay in touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Wine nights, holiday parties, and the dinner list."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: openNewsletter,
					className: "rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
					children: "Join the list"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {})
	] });
}
//#endregion
export { Home as component };
