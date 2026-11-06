export const AREAS = ["dining", "patio"] as const;
export type Area = (typeof AREAS)[number];

export const TURN_MIN = 90;
export const FIRST_SEATING = 17 * 60;
export const LAST_SEATING = 20 * 60 + 30;
export const LAST_PICKUP = 21 * 60;
export const STEP_MIN = 15;

export type FloorTable = { id: string; area: Area; seats: number; label: string };
export type Hold = { tableId: string; startMin: number };

export function weekdayOf(isoDate: string): number {
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return Number.NaN;
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
}

export function isBookableDate(isoDate: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(isoDate) && weekdayOf(isoDate) !== 1;
}

export function todayIso(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(now);
}

export function nowMinutesNY(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const minute = Number(parts.find((part) => part.type === "minute")?.value);
  return hour * 60 + minute;
}

export function timesBetween(start: number, end: number): number[] {
  const out: number[] = [];
  for (let t = start; t <= end; t += STEP_MIN) out.push(t);
  return out;
}

export function overlaps(holds: Hold[], tableId: string, start: number): boolean {
  return holds.some(
    (hold) =>
      hold.tableId === tableId &&
      hold.startMin < start + TURN_MIN &&
      hold.startMin + TURN_MIN > start,
  );
}

export function openSeatings(
  tables: FloorTable[],
  holds: Hold[],
  party: number,
  area: Area,
  earliest = 0,
): number[] {
  const room = tables.filter((table) => table.area === area && table.seats >= party);
  return timesBetween(FIRST_SEATING, LAST_SEATING).filter(
    (start) => start >= earliest && room.some((table) => !overlaps(holds, table.id, start)),
  );
}

export function pickTable(
  tables: FloorTable[],
  holds: Hold[],
  party: number,
  area: Area,
  start: number,
): FloorTable | null {
  return (
    tables
      .filter((table) => table.area === area && table.seats >= party && !overlaps(holds, table.id, start))
      .sort((a, b) => a.seats - b.seats || a.id.localeCompare(b.id))[0] ?? null
  );
}

export function formatMin(min: number): string {
  const h = Math.floor(min / 60);
  const m = min % 60;
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export function formatNight(isoDate: string): string {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

export function areaLabel(area: Area): string {
  return area === "dining" ? "Dining room" : "Patio";
}

const money = /\$(\d+\.\d{2})/;

export function priceCents(price: string): number | null {
  const match = price.match(money);
  return match ? Math.round(Number(match[1]) * 100) : null;
}

export function formatMoney(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

export type DeskReservation = {
  code: string;
  guestName: string;
  phone: string;
  party: number;
  area: Area;
  serviceDate: string;
  startMin: number;
  notes: string;
  status: string;
  tableLabel: string;
};

export type DeskOrder = {
  code: string;
  guestName: string;
  phone: string;
  pickupDate: string;
  pickupMin: number;
  items: { name: string; qty: number }[];
  total: string;
  notes: string;
  status: string;
};

export type DeskNote = {
  id: string;
  kind: string;
  code: string;
  name: string;
  phone: string;
  email: string;
  summary: string;
  body: string;
  status: string;
};

export type DeskBoard = {
  reservations: DeskReservation[];
  orders: DeskOrder[];
  inbox: DeskNote[];
};
