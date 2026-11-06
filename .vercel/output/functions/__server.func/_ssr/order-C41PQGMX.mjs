import { o as __toESM } from "../_runtime.mjs";
import { r as dinnerMenu } from "./restaurant-IoJpytYJ.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fieldClass, n as Field, r as SectionKicker, t as Button } from "./ui-CGIBD7hH.mjs";
import { a as placeOrder } from "./house.functions-Ce2IJX6k.mjs";
import { d as timesBetween, f as todayIso, i as formatMin, n as LAST_PICKUP, t as FIRST_SEATING, u as priceCents } from "./house-O5O77w6u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-C41PQGMX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dishes = dinnerMenu.flatMap((section) => section.items.flatMap((item) => {
	const cents = priceCents(item.price);
	return cents == null ? [] : [{
		section: section.title,
		name: item.name,
		cents
	}];
}));
function OrderPage() {
	const [qty, setQty] = (0, import_react.useState)({});
	const [date, setDate] = (0, import_react.useState)(todayIso());
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [slip, setSlip] = (0, import_react.useState)(null);
	const times = (0, import_react.useMemo)(() => timesBetween(FIRST_SEATING, LAST_PICKUP), []);
	const total = dishes.reduce((sum, dish) => sum + (qty[dish.name] ?? 0) * dish.cents, 0);
	async function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		setBusy(true);
		setError("");
		const result = await placeOrder({ data: {
			name: String(form.get("name") ?? ""),
			phone: String(form.get("phone") ?? ""),
			email: String(form.get("email") ?? ""),
			date,
			pickupMin: Number(form.get("time")),
			notes: String(form.get("notes") ?? ""),
			items: Object.entries(qty).map(([name, count]) => ({
				name,
				qty: count
			}))
		} });
		setBusy(false);
		if (!result.ok) {
			setError(result.error);
			return;
		}
		setSlip(result);
		setQty({});
	}
	if (slip) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Pickup" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: slip.code
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-lg",
				children: [
					slip.when,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					slip.total,
					" due when you collect it"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "The kitchen has the ticket. Pay at the door. Call (954) 428-2676 if you’re running late."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-6",
				type: "button",
				tone: "quiet",
				onClick: () => setSlip(null),
				children: "Order something else"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mx-auto max-w-3xl px-4 py-14",
		onSubmit,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Pickup" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl",
				children: "Order for the door"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-muted",
				children: "Dinner menu, packed for pickup. No delivery app and no card on this page — you pay when the bag is ready. Tuesday through Sunday, 5 to 9."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 divide-y divide-border",
				children: dishes.map((dish) => {
					const count = qty[dish.name] ?? 0;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block",
							children: dish.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [
								dish.section,
								" · $",
								(dish.cents / 100).toFixed(2)
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center rounded-md border border-border",
									"aria-label": `Remove one ${dish.name}`,
									onClick: () => setQty((current) => ({
										...current,
										[dish.name]: Math.max(0, count - 1)
									})),
									children: "–"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-6 text-center text-sm",
									children: count
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center rounded-md border border-border",
									"aria-label": `Add one ${dish.name}`,
									onClick: () => setQty((current) => ({
										...current,
										[dish.name]: Math.min(10, count + 1)
									})),
									children: "+"
								})
							]
						})]
					}, dish.name);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Name",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							name: "name",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Phone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							name: "phone",
							type: "tel",
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							name: "email",
							type: "email"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Date",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							type: "date",
							min: todayIso(),
							value: date,
							onChange: (event) => setDate(event.target.value),
							required: true
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Pickup time",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: fieldClass,
							name: "time",
							defaultValue: 1020,
							children: times.map((time) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: time,
								children: formatMin(time)
							}, time))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Note",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: fieldClass,
							name: "notes",
							placeholder: "Extra sauce, no garlic…"
						})
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-primary",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-3xl",
					children: ["$", (total / 100).toFixed(2)]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					disabled: busy || total === 0,
					children: "Place pickup"
				})]
			})
		]
	});
}
//#endregion
export { OrderPage as component };
