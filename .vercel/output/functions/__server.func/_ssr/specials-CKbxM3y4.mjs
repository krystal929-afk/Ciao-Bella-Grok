import { Y as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { s as specials } from "./router-CDNrVul_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/specials-CKbxM3y4.js
var import_jsx_runtime = require_jsx_runtime();
function tonight() {
	const weekday = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		weekday: "long"
	}).format(/* @__PURE__ */ new Date());
	return specials.find((item) => item.day === weekday);
}
function SpecialsPage() {
	const current = tonight();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "This week" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "Specials"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: current ? `Tonight is ${current.day}: ${current.title}. ${current.detail}` : "No printed special tonight. Tuesday and Wednesday are wine night. Thursday is pizza night. Friday through Sunday are the regular menu."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: specials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-border bg-surface p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-widest text-primary",
							children: item.day
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: item.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm",
							children: item.hours
						})
					]
				}, item.day))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/reservations",
				className: "mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg",
				children: "Reserve a table"
			})
		]
	});
}
//#endregion
export { SpecialsPage as component };
