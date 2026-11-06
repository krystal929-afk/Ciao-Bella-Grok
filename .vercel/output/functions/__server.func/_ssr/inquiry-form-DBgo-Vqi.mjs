import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fieldClass, n as Field, t as Button } from "./ui-CGIBD7hH.mjs";
import { n as fileInquiry } from "./house.functions-Ce2IJX6k.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/inquiry-form-DBgo-Vqi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InquiryForm({ kind, fields, submitLabel }) {
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const details = {};
		for (const field of fields) details[field.label] = String(data.get(field.name) ?? "").trim();
		setBusy(true);
		setError("");
		const result = await fileInquiry({ data: {
			kind,
			details
		} });
		setBusy(false);
		if (!result.ok) {
			setError(result.error);
			return;
		}
		setCode(result.code);
		event.currentTarget.reset();
	}
	if (code) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-2xl text-fg",
			children: "The house has it"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-muted",
			children: [
				"Reference ",
				code,
				". It is on the house desk. Call (954) 428-2676 if the date is inside the week."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			type: "button",
			tone: "quiet",
			onClick: () => setCode(""),
			children: "Send another"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-4",
		onSubmit,
		children: [
			fields.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: field.label,
				children: field.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					className: fieldClass,
					name: field.name,
					required: field.required,
					defaultValue: "",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						disabled: true,
						children: "Choose"
					}), field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: option,
						children: option
					}, option))]
				}) : field.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: fieldClass,
					name: field.name,
					required: field.required,
					rows: 4,
					placeholder: field.placeholder
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					className: fieldClass,
					name: field.name,
					type: field.type ?? "text",
					required: field.required,
					placeholder: field.placeholder
				})
			}, field.name)),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-primary",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				children: submitLabel
			})
		]
	});
}
//#endregion
export { InquiryForm as t };
