import { n as cateringMenu } from "./restaurant-IoJpytYJ.mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { t as InquiryForm } from "./inquiry-form-DBgo-Vqi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catering-DbYEVGJx.js
var import_jsx_runtime = require_jsx_runtime();
function CateringPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/catering.jpg",
				alt: "Trays of lasagna, pasta, and salad set for a gathering",
				className: "aspect-video w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-fg/45" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto w-full max-w-6xl px-4 pb-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-accent",
						children: "Deerfield Beach catering"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 max-w-lg font-display text-4xl text-bg sm:text-5xl",
						children: "Fresh Italian favorites for events"
					})]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted",
					children: "Bring authentic Italian cuisine to the next gathering. Handcrafted pizzas, pastas, salads, and chicken are prepared fresh for groups of every size. Half trays feed a smaller table; full trays are the office lunch and the family reunion."
				}),
				cateringMenu.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: section.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-border",
						children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-baseline justify-between gap-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 text-sm text-primary",
								children: item.price
							})]
						}, item.name))
					})]
				}, section.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted",
					children: "Tray prices are from the published catering menu. Pickup is arranged when we confirm the order. Add pizza and salads on the inquiry and we’ll price them with you."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-md border border-border bg-surface p-6 lg:col-span-2 lg:sticky lg:top-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Inquire" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl",
					children: "Tell us about the table"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
						kind: "catering",
						submitLabel: "Request a catering quote",
						fields: [
							{
								name: "name",
								label: "Name",
								required: true
							},
							{
								name: "phone",
								label: "Phone",
								type: "tel",
								required: true
							},
							{
								name: "email",
								label: "Email",
								type: "email",
								required: true
							},
							{
								name: "date",
								label: "Date",
								type: "date",
								required: true
							},
							{
								name: "guests",
								label: "Headcount",
								required: true,
								placeholder: "About 25"
							},
							{
								name: "notes",
								label: "What should we cook?",
								type: "textarea",
								placeholder: "Lasagna, penne vodka, a salad…"
							}
						]
					})
				})
			]
		})]
	})] });
}
//#endregion
export { CateringPage as component };
