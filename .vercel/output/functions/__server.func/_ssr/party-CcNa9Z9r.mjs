import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { t as InquiryForm } from "./inquiry-form-DBgo-Vqi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/party-CcNa9Z9r.js
var import_jsx_runtime = require_jsx_runtime();
var occasions = [
	"Birthday",
	"Family gathering",
	"Rehearsal or shower",
	"Corporate dinner",
	"Something else"
];
function PartyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Celebrate with us" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl leading-tight",
				children: "A room for the occasion"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted",
				children: "Host the next celebration at Ciao Bella. Family gatherings, birthdays, and corporate dinners sit down to the same kitchen — pizzas, pastas, and the dishes regulars already trust. We’ll help from the first phone call to the last cannoli."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dining-room.jpg",
				alt: "Tables set for a private dinner",
				className: "mt-8 aspect-video w-full rounded-md object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 text-sm sm:grid-cols-2",
				children: [
					["The room", "Vintage dining room, white cloths, and a pace that lets people talk."],
					["The food", "Family-style or plated from the dinner and catering menus."],
					["The size", "Best for groups that need more than a standard reservation."],
					["The plan", "Tell us the date and headcount. We call back to lock the menu."]
				].map(([title, copy]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md border border-border bg-surface p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: copy
					})]
				}, title))
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md border border-border bg-surface p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Book a private party"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "More than eight guests. The note lands on the house desk, and the dining room calls back to lock the menu."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
						kind: "party",
						submitLabel: "Request the room",
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
								label: "Guest count",
								required: true,
								placeholder: "18"
							},
							{
								name: "occasion",
								label: "Occasion",
								options: occasions,
								required: true
							},
							{
								name: "notes",
								label: "Anything we should know",
								type: "textarea",
								placeholder: "Cake, high chairs, a quiet corner…"
							}
						]
					})
				})
			]
		})]
	});
}
//#endregion
export { PartyPage as component };
