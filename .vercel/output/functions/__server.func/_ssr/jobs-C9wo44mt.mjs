import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as SectionKicker } from "./ui-CGIBD7hH.mjs";
import { t as InquiryForm } from "./inquiry-form-DBgo-Vqi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/jobs-C9wo44mt.js
var import_jsx_runtime = require_jsx_runtime();
function JobsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "The house" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl leading-tight",
				children: "Work a service"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted",
				children: "Servers, hosts, and kitchen hands. The note goes to the house desk, not a job board. If a service is hiring, someone calls."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/dining-room.jpg",
				alt: "The dining room set for service",
				className: "mt-8 aspect-video w-full rounded-md object-cover"
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md border border-border bg-surface p-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Leave a note"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
					kind: "job",
					submitLabel: "Send to the house",
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
							name: "role",
							label: "Role",
							required: true,
							placeholder: "Server, host, kitchen"
						},
						{
							name: "notes",
							label: "When you can work",
							type: "textarea",
							placeholder: "Nights, weekends…"
						}
					]
				})
			})]
		})]
	});
}
//#endregion
export { JobsPage as component };
