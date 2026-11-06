//#region node_modules/.nitro/vite/services/ssr/assets/house-O5O77w6u.js
var FIRST_SEATING = 1020;
var LAST_SEATING = 1230;
var LAST_PICKUP = 1260;
function weekdayOf(isoDate) {
	const [y, m, d] = isoDate.split("-").map(Number);
	if (!y || !m || !d) return NaN;
	return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}
function isBookableDate(isoDate) {
	return /^\d{4}-\d{2}-\d{2}$/.test(isoDate) && weekdayOf(isoDate) !== 1;
}
function todayIso(now = /* @__PURE__ */ new Date()) {
	return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(now);
}
function nowMinutesNY(now = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(now);
	const hour = Number(parts.find((part) => part.type === "hour")?.value);
	const minute = Number(parts.find((part) => part.type === "minute")?.value);
	return hour * 60 + minute;
}
function timesBetween(start, end) {
	const out = [];
	for (let t = start; t <= end; t += 15) out.push(t);
	return out;
}
function overlaps(holds, tableId, start) {
	return holds.some((hold) => hold.tableId === tableId && hold.startMin < start + 90 && hold.startMin + 90 > start);
}
function openSeatings(tables, holds, party, area, earliest = 0) {
	const room = tables.filter((table) => table.area === area && table.seats >= party);
	return timesBetween(FIRST_SEATING, LAST_SEATING).filter((start) => start >= earliest && room.some((table) => !overlaps(holds, table.id, start)));
}
function formatMin(min) {
	const h = Math.floor(min / 60);
	const m = min % 60;
	const suffix = h >= 12 ? "PM" : "AM";
	return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${suffix}`;
}
function formatNight(isoDate) {
	const [y, m, d] = isoDate.split("-").map(Number);
	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
		timeZone: "UTC"
	}).format(new Date(Date.UTC(y, m - 1, d)));
}
function areaLabel(area) {
	return area === "dining" ? "Dining room" : "Patio";
}
var money = /\$(\d+\.\d{2})/;
function priceCents(price) {
	const match = price.match(money);
	return match ? Math.round(Number(match[1]) * 100) : null;
}
function formatMoney(cents) {
	return `$${(cents / 100).toFixed(2)}`;
}
//#endregion
export { formatMoney as a, nowMinutesNY as c, timesBetween as d, todayIso as f, formatMin as i, openSeatings as l, LAST_PICKUP as n, formatNight as o, areaLabel as r, isBookableDate as s, FIRST_SEATING as t, priceCents as u };
