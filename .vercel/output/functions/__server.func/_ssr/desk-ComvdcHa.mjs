import { o as __toESM } from "../_runtime.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fieldClass, n as Field, r as SectionKicker, t as Button } from "./ui-CGIBD7hH.mjs";
import { c as setReservationStatus, i as openDesk, o as setInboxStatus, s as setOrderStatus } from "./house.functions-Ce2IJX6k.mjs";
import { i as formatMin, o as formatNight, r as areaLabel } from "./house-O5O77w6u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desk-ComvdcHa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DeskPage() {
	const [pin, setPin] = (0, import_react.useState)("");
	const [desk, setDesk] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	async function load(nextPin) {
		setError("");
		try {
			const result = await openDesk({ data: { pin: nextPin } });
			setPin(nextPin);
			setDesk(result);
		} catch {
			setError("That pin doesn’t open the desk.");
		}
	}
	async function reservation(code, status) {
		await setReservationStatus({ data: {
			pin,
			code,
			status
		} });
		await load(pin);
	}
	async function order(code, status) {
		await setOrderStatus({ data: {
			pin,
			code,
			status
		} });
		await load(pin);
	}
	async function closeNote(id) {
		await setInboxStatus({ data: {
			pin,
			id,
			status: "done"
		} });
		await load(pin);
	}
	if (!desk) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mx-auto max-w-sm px-4 py-20",
		onSubmit: (event) => {
			event.preventDefault();
			const form = new FormData(event.currentTarget);
			load(String(form.get("pin") ?? ""));
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Staff" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: "House desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Tonight’s book, pickup tickets, and notes. Guests don’t see this."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Pin",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						className: fieldClass,
						name: "pin",
						type: "password",
						autoComplete: "current-password",
						required: true
					})
				})
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-primary",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				type: "submit",
				children: "Open the book"
			})
		]
	});
	const letters = desk.inbox.filter((item) => item.kind === "letter");
	const notes = desk.inbox.filter((item) => item.kind !== "letter" && item.status !== "done");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "Staff" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "House desk"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Reservations"
					}),
					desk.reservations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No tables held."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-border",
						children: desk.reservations.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-medium",
								children: [
									formatNight(row.serviceDate),
									" · ",
									formatMin(row.startMin),
									" · ",
									row.guestName
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									row.code,
									" · ",
									row.party,
									" · ",
									areaLabel(row.area),
									" · ",
									row.tableLabel,
									" · ",
									row.phone,
									" · ",
									row.status,
									row.notes ? ` · ${row.notes}` : ""
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"seated",
									"done",
									"no-show",
									"cancelled"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-md border border-border px-3 py-2 text-xs",
									onClick: () => void reservation(row.code, status),
									children: status
								}, status))
							})]
						}, row.code))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Pickup"
					}),
					desk.orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "No tickets."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 divide-y divide-border",
						children: desk.orders.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [
										formatNight(row.pickupDate),
										" · ",
										formatMin(row.pickupMin),
										" · ",
										row.guestName
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										row.code,
										" · ",
										row.total,
										" · ",
										row.status,
										" · ",
										row.phone
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm",
									children: (row.items ?? []).map((item) => `${item.qty} ${item.name}`).join(", ")
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: [
									"ready",
									"picked-up",
									"cancelled"
								].map((status) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-md border border-border px-3 py-2 text-xs",
									onClick: () => void order(row.code, status),
									children: status
								}, status))
							})]
						}, row.code))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Parties, catering, jobs"
					}),
					notes.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Nothing waiting."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: notes.map((note) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs uppercase tracking-widest text-primary",
									children: [
										note.kind,
										" · ",
										note.code
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 font-medium",
									children: [
										note.name,
										" · ",
										note.phone
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: note.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "mt-3 text-sm underline",
									onClick: () => void closeNote(note.id),
									children: "Mark done"
								})
							]
						}, note.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Confirmation slips"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Held means the letter is written and waiting on a mail sender. Sent means it left."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: letters.map((letter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-md border border-border p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-widest text-primary",
								children: [
									letter.status,
									" · ",
									letter.email
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
								className: "mt-2 whitespace-pre-wrap font-sans text-sm",
								children: letter.body
							})]
						}, letter.id))
					})
				]
			})
		]
	});
}
//#endregion
export { DeskPage as component };
