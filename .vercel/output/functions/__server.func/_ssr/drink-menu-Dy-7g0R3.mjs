import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { o as drinkMenu } from "./router-CDNrVul_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/drink-menu-Dy-7g0R3.js
var import_jsx_runtime = require_jsx_runtime();
function DrinkMenu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "The list" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "Our drinks"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-muted",
				children: "Italian bottles by the glass and the bottle, plus espresso and the usual cold drinks. Prices from the published list."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sticky top-20 z-30 -mx-4 mt-8 flex gap-2 overflow-x-auto border-y border-border bg-bg/95 px-4 py-3",
				children: drinkMenu.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${section.id}`,
					className: "shrink-0 rounded-full border border-border px-4 py-2 text-sm",
					children: section.title
				}, section.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex flex-col gap-12",
				children: drinkMenu.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: section.id,
					className: "scroll-mt-36",
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
								className: "mt-1 text-sm text-muted",
								children: item.description
							}) : null]
						}, item.name))
					})]
				}, section.id))
			})
		]
	});
}
//#endregion
export { DrinkMenu as component };
