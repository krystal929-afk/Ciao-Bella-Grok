import { o as __toESM } from "../_runtime.mjs";
import { i as hours, o as restaurant } from "./restaurant-IoJpytYJ.mjs";
import { J as require_react, Y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as fieldClass, n as Field, r as SectionKicker, t as Button } from "./ui-CGIBD7hH.mjs";
import { r as listOpenings, t as bookTable } from "./house.functions-Ce2IJX6k.mjs";
import { f as todayIso, i as formatMin, r as areaLabel } from "./house-O5O77w6u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reservations-D1deNNuJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ReservationsPage() {
	const [date, setDate] = (0, import_react.useState)(todayIso());
	const [party, setParty] = (0, import_react.useState)(2);
	const [area, setArea] = (0, import_react.useState)("dining");
	const [times, setTimes] = (0, import_react.useState)([]);
	const [start, setStart] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [held, setHeld] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		let cancel = false;
		setLoading(true);
		setStart(null);
		listOpenings({ data: {
			date,
			party,
			area
		} }).then((result) => {
			if (!cancel) setTimes(result.times);
		}).catch(() => {
			if (!cancel) setTimes([]);
		}).finally(() => {
			if (!cancel) setLoading(false);
		});
		return () => {
			cancel = true;
		};
	}, [
		date,
		party,
		area
	]);
	async function onSubmit(event) {
		event.preventDefault();
		if (start == null) return;
		const form = new FormData(event.currentTarget);
		setError("");
		setLoading(true);
		const result = await bookTable({ data: {
			date,
			startMin: start,
			party,
			area,
			name: String(form.get("name") ?? ""),
			email: String(form.get("email") ?? ""),
			phone: String(form.get("phone") ?? ""),
			notes: String(form.get("notes") ?? "")
		} });
		setLoading(false);
		if (!result.ok) {
			setError(result.error);
			const again = await listOpenings({ data: {
				date,
				party,
				area
			} });
			setTimes(again.times);
			setStart(null);
			return;
		}
		setHeld(result);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionKicker, { children: "The book" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-5xl leading-tight",
				children: "Hold a table"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-muted",
				children: "The dining room keeps its own book. A seating is ninety minutes, last call is 8:30, and a table is only offered if one is actually free. Parties over eight use the party page."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/house/g6.jpg",
				alt: "Grilled salmon with caprese salad",
				className: "mt-8 aspect-video w-full rounded-md object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: "Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 text-sm",
						children: hours.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4 border-b border-border py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: row.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: row.closed ? "text-muted" : "text-fg",
								children: row.time
							})]
						}, row.day))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "mt-4 inline-block text-sm text-primary",
						href: restaurant.phoneHref,
						children: restaurant.phoneDisplay
					})
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-md border border-border bg-surface p-6",
			children: held ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-widest text-primary",
					children: "Table held"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: held.code
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-lg",
					children: [
						held.when,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						held.party,
						" ",
						held.party === 1 ? "guest" : "guests",
						" · ",
						held.area
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: held.mailed ? "A confirmation email is on its way." : "This screen is your confirmation. The house desk has the same slip. Email sends once the restaurant connects a mail sender — call if you need it read back."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-6",
					type: "button",
					tone: "quiet",
					onClick: () => setHeld(null),
					children: "Book another table"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-5",
				onSubmit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: "Find a seating"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-3",
						children: [
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
								label: "Party",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: fieldClass,
									value: party,
									onChange: (event) => setParty(Number(event.target.value)),
									children: Array.from({ length: 8 }, (_, index) => index + 1).map((count) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: count,
										children: count
									}, count))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Room",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: fieldClass,
									value: area,
									onChange: (event) => setArea(event.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "dining",
										children: areaLabel("dining")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "patio",
										children: areaLabel("patio")
									})]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: "Open seatings"
						}),
						loading && times.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Checking the book…"
						}) : null,
						!loading && times.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Nothing open for that party and room. Monday is closed. Try the other room, a smaller party, or the party page."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: times.map((time) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setStart(time),
								className: start === time ? "rounded-md bg-primary px-3 py-2 text-sm text-bg" : "rounded-md border border-border px-3 py-2 text-sm",
								children: formatMin(time)
							}, time))
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
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
									type: "email",
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Note",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: fieldClass,
									name: "notes",
									placeholder: "Anniversary, high chair…"
								})
							})
						]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-primary",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						disabled: start == null || loading,
						children: "Hold this table"
					})
				]
			})
		})]
	});
}
//#endregion
export { ReservationsPage as component };
