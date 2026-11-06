import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as cn } from "./cn-Ccejyh36.mjs";
import { Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-CGIBD7hH.js
var import_jsx_runtime = require_jsx_runtime();
var buttonStyles = cva("inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50", {
	variants: { tone: {
		primary: "bg-primary text-bg hover:bg-fg",
		quiet: "border border-border bg-surface text-fg hover:border-fg",
		invert: "bg-bg text-fg hover:bg-surface",
		ghost: "bg-transparent text-bg hover:bg-bg/15"
	} },
	defaultVariants: { tone: "primary" }
});
function Button({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonStyles({ tone }), className),
		...props
	});
}
var fieldClass = "w-full rounded-md border border-border bg-surface px-3 py-3 text-base text-fg outline-none transition-colors focus:border-primary";
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2 text-sm text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium",
			children: label
		}), children]
	});
}
function SectionKicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs font-medium uppercase tracking-widest text-primary",
		children
	});
}
//#endregion
export { fieldClass as i, Field as n, SectionKicker as r, Button as t };
