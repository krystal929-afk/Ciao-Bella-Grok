import { createServerFn } from "@tanstack/react-start";
import { dinnerMenu, restaurant } from "@/data/restaurant";
import { getSql } from "@/lib/db";
import {
  areaLabel,
  formatMin,
  formatMoney,
  formatNight,
  isBookableDate,
  LAST_PICKUP,
  nowMinutesNY,
  openSeatings,
  priceCents,
  STEP_MIN,
  todayIso,
  TURN_MIN,
  type Area,
  type DeskBoard,
  type FloorTable,
  type Hold,
} from "@/lib/house";

type TableRow = { id: string; area: string; seats: number; label: string };
type HoldRow = { table_id: string; start_min: number };

function asArea(value: string): Area | null {
  return value === "dining" || value === "patio" ? value : null;
}

function clean(value: unknown, max: number): string {
  return String(value ?? "").trim().slice(0, max);
}

function code(prefix: string): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(4));
  return `${prefix}-${Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("")}`;
}

function deskPin(): string {
  return process.env.DESK_PIN?.trim() || "1380";
}

function assertDesk(pin: string) {
  if (pin !== deskPin()) throw new Error("That pin doesn’t open the desk.");
}

async function floorAndHolds(date: string) {
  const sql = await getSql();
  const tables = await sql<TableRow>`select id, area, seats, label from floor_tables order by id`;
  const holds = await sql<HoldRow>`
    select table_id, start_min from reservations
    where service_date = ${date}::date and status = 'booked'
  `;
  return {
    sql,
    tables: tables.map(
      (row): FloorTable => ({
        id: row.id,
        area: row.area === "patio" ? "patio" : "dining",
        seats: Number(row.seats),
        label: row.label,
      }),
    ),
    holds: holds.map((row): Hold => ({ tableId: row.table_id, startMin: Number(row.start_min) })),
  };
}

async function holdLetter(input: {
  to: string;
  name: string;
  summary: string;
  body: string;
  code: string;
}) {
  const sql = await getSql();
  const id = crypto.randomUUID();
  const status = await sendLetter(input.to, `Ciao Bella · ${input.summary}`, input.body);
  await sql`
    insert into inbox (id, kind, code, name, email, summary, body, status)
    values (${id}, 'letter', ${input.code}, ${input.name}, ${input.to}, ${input.summary}, ${input.body}, ${status})
  `;
  return status;
}

async function sendLetter(to: string, subject: string, text: string): Promise<"sent" | "held"> {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.MAIL_FROM?.trim();
  if (!key || !from) return "held";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to: [to], subject, text }),
  });
  return response.ok ? "sent" : "held";
}

export const listOpenings = createServerFn({ method: "POST" })
  .validator((input: { date: string; party: number; area: string }) => input)
  .handler(async ({ data }) => {
    const area = asArea(data.area);
    const party = Number(data.party);
    if (!area || !isBookableDate(data.date) || party < 1 || party > 8) return { times: [] as number[] };
    const { tables, holds } = await floorAndHolds(data.date);
    const earliest = data.date === todayIso() ? nowMinutesNY() + 30 : 0;
    return { times: openSeatings(tables, holds, party, area, earliest) };
  });

export const bookTable = createServerFn({ method: "POST" })
  .validator(
    (input: {
      date: string;
      startMin: number;
      party: number;
      area: string;
      name: string;
      email: string;
      phone: string;
      notes: string;
    }) => input,
  )
  .handler(async ({ data }) => {
    const area = asArea(data.area);
    const party = Number(data.party);
    const start = Number(data.startMin);
    const name = clean(data.name, 80);
    const email = clean(data.email, 120);
    const phone = clean(data.phone, 30);
    const notes = clean(data.notes, 400);
    if (!area || !isBookableDate(data.date)) return { ok: false as const, error: "That night isn’t a service night." };
    if (data.date === todayIso() && start < nowMinutesNY() + 30) {
      return { ok: false as const, error: "That seating has already passed." };
    }
    if (!Number.isInteger(start) || start < 17 * 60 || start > 20 * 60 + 30 || (start - 17 * 60) % STEP_MIN !== 0) {
      return { ok: false as const, error: "Pick one of the open seatings." };
    }
    if (party < 1 || party > 8 || !name || !email.includes("@") || phone.replace(/\D/g, "").length < 7) {
      return { ok: false as const, error: "Name, a real email, and a phone number are required." };
    }

    const { sql, tables, holds } = await floorAndHolds(data.date);
    const table = tables
      .filter((item) => item.area === area && item.seats >= party)
      .sort((a, b) => a.seats - b.seats || a.id.localeCompare(b.id))
      .find((item) => !holds.some((hold) => hold.tableId === item.id && hold.startMin < start + TURN_MIN && hold.startMin + TURN_MIN > start));
    if (!table) return { ok: false as const, error: "That seating just filled. Pick another time." };

    const id = crypto.randomUUID();
    const confirmation = code("CB");
    const rows = await sql<{ code: string }>`
      insert into reservations (id, code, guest_name, email, phone, party, area, table_id, service_date, start_min, notes)
      select ${id}, ${confirmation}, ${name}, ${email}, ${phone}, ${party}, ${area}, ${table.id}, ${data.date}::date, ${start}, ${notes}
      where not exists (
        select 1 from reservations
        where table_id = ${table.id} and service_date = ${data.date}::date and status = 'booked'
          and start_min < ${start + TURN_MIN} and start_min + ${TURN_MIN} > ${start}
      )
      returning code
    `;
    if (!rows[0]) return { ok: false as const, error: "That seating just filled. Pick another time." };

    const when = `${formatNight(data.date)} at ${formatMin(start)}`;
    const body = [
      `${name}, your table is held.`,
      ``,
      `${when}`,
      `${party} ${party === 1 ? "guest" : "guests"} · ${areaLabel(area)}`,
      `Confirmation ${confirmation}`,
      notes ? `Note: ${notes}` : "",
      ``,
      `${restaurant.fullName}`,
      `${restaurant.street}, ${restaurant.city}`,
      restaurant.phoneDisplay,
      ``,
      `Call if the night changes. A table is held for 15 minutes past the seating.`,
    ]
      .filter((line) => line !== "")
      .join("\n");

    const mail = await holdLetter({
      to: email,
      name,
      summary: confirmation,
      body,
      code: confirmation,
    });
    await holdLetter({
      to: restaurant.email,
      name: restaurant.fullName,
      summary: `${confirmation} house copy`,
      body,
      code: confirmation,
    });

    return {
      ok: true as const,
      code: confirmation,
      when,
      party,
      area: areaLabel(area),
      mailed: mail === "sent",
    };
  });

export const placeOrder = createServerFn({ method: "POST" })
  .validator(
    (input: {
      name: string;
      phone: string;
      email: string;
      date: string;
      pickupMin: number;
      notes: string;
      items: { name: string; qty: number }[];
    }) => input,
  )
  .handler(async ({ data }) => {
    const name = clean(data.name, 80);
    const phone = clean(data.phone, 30);
    const email = clean(data.email, 120);
    const notes = clean(data.notes, 300);
    const pickup = Number(data.pickupMin);
    if (!isBookableDate(data.date)) return { ok: false as const, error: "Pickup is Tuesday through Sunday." };
    if (!Number.isInteger(pickup) || pickup < 17 * 60 || pickup > LAST_PICKUP || (pickup - 17 * 60) % STEP_MIN !== 0) {
      return { ok: false as const, error: "Pick a pickup time between 5 and 9." };
    }
    if (data.date === todayIso() && pickup < nowMinutesNY() + 20) {
      return { ok: false as const, error: "That pickup time has already passed." };
    }
    if (!name || phone.replace(/\D/g, "").length < 7) {
      return { ok: false as const, error: "Name and phone are required." };
    }
    const catalog = new Map(
      dinnerMenu.flatMap((section) =>
        section.items.flatMap((item) => {
          const cents = priceCents(item.price);
          return cents == null ? [] : [[item.name, cents] as const];
        }),
      ),
    );
    const lines = (data.items ?? [])
      .map((item) => ({ name: clean(item.name, 80), qty: Number(item.qty) }))
      .filter((item) => item.qty > 0 && catalog.has(item.name))
      .slice(0, 12);
    if (!lines.length) return { ok: false as const, error: "Add at least one dish." };
    const priced = lines.map((item) => ({
      name: item.name,
      qty: Math.min(10, Math.floor(item.qty)),
      cents: catalog.get(item.name) ?? 0,
    }));
    const total = priced.reduce((sum, item) => sum + item.cents * item.qty, 0);
    const confirmation = code("PU");
    const id = crypto.randomUUID();
    const sql = await getSql();
    await sql`
      insert into orders (id, code, guest_name, phone, email, pickup_date, pickup_min, items, total_cents, notes)
      values (
        ${id}, ${confirmation}, ${name}, ${phone}, ${email}, ${data.date}::date, ${pickup},
        ${JSON.stringify(priced)}::jsonb, ${total}, ${notes}
      )
    `;
    return {
      ok: true as const,
      code: confirmation,
      total: formatMoney(total),
      when: `${formatNight(data.date)} at ${formatMin(pickup)}`,
    };
  });

export const fileInquiry = createServerFn({ method: "POST" })
  .validator((input: { kind: string; details: Record<string, string> }) => input)
  .handler(async ({ data }) => {
    const kind = data.kind === "party" || data.kind === "catering" || data.kind === "job" ? data.kind : null;
    if (!kind) return { ok: false as const, error: "Unknown request." };
    const details = Object.fromEntries(
      Object.entries(data.details ?? {})
        .slice(0, 12)
        .map(([key, value]) => [clean(key, 40), clean(value, 400)]),
    );
    const name = details.Name || details.name || "";
    const email = details.Email || details.email || "";
    const phone = details.Phone || details.phone || "";
    if (!name || !email.includes("@") || phone.replace(/\D/g, "").length < 7) {
      return { ok: false as const, error: "Name, email, and phone are required." };
    }
    const summary = Object.entries(details)
      .filter(([key]) => !["Name", "Email", "Phone"].includes(key))
      .map(([key, value]) => `${key}: ${value}`)
      .join(" · ");
    const prefix = kind === "party" ? "PY" : kind === "catering" ? "CT" : "JB";
    const confirmation = code(prefix);
    const sql = await getSql();
    await sql`
      insert into inbox (id, kind, code, name, email, phone, summary, body, status)
      values (
        ${crypto.randomUUID()}, ${kind}, ${confirmation}, ${name}, ${email}, ${phone},
        ${summary || kind}, ${Object.entries(details).map(([key, value]) => `${key}: ${value}`).join("\n")},
        'open'
      )
    `;
    return { ok: true as const, code: confirmation };
  });

export const openDesk = createServerFn({ method: "POST" })
  .validator((input: { pin: string }) => input)
  .handler(async ({ data }) => {
    assertDesk(clean(data.pin, 40));
    const sql = await getSql();
    const today = todayIso();
    const reservations = await sql<{
      code: string;
      guest_name: string;
      phone: string;
      party: number;
      area: string;
      service_date: string;
      start_min: number;
      notes: string;
      status: string;
      table_label: string;
    }>`
      select r.code, r.guest_name, r.phone, r.party, r.area, r.service_date::text as service_date,
             r.start_min, r.notes, r.status, t.label as table_label
      from reservations r
      join floor_tables t on t.id = r.table_id
      where r.service_date >= ${today}::date
      order by r.service_date, r.start_min
    `;
    const orders = await sql<{
      code: string;
      guest_name: string;
      phone: string;
      pickup_date: string;
      pickup_min: number;
      items: unknown;
      total_cents: number;
      notes: string;
      status: string;
    }>`
      select code, guest_name, phone, pickup_date::text as pickup_date, pickup_min, items, total_cents, notes, status
      from orders
      where pickup_date >= ${today}::date
      order by pickup_date, pickup_min
    `;
    const inbox = await sql<{
      id: string;
      kind: string;
      code: string | null;
      name: string;
      phone: string;
      email: string;
      summary: string;
      body: string;
      status: string;
    }>`
      select id, kind, code, name, phone, email, summary, body, status
      from inbox
      order by created_at desc
      limit 40
    `;
    const board: DeskBoard = {
      reservations: reservations.map((row) => ({
        code: row.code,
        guestName: row.guest_name,
        phone: row.phone,
        party: Number(row.party),
        area: row.area === "patio" ? "patio" : "dining",
        serviceDate: String(row.service_date).slice(0, 10),
        startMin: Number(row.start_min),
        notes: row.notes,
        status: row.status,
        tableLabel: row.table_label,
      })),
      orders: orders.map((row) => {
        const parsed = typeof row.items === "string" ? JSON.parse(row.items) : row.items;
        const items = Array.isArray(parsed)
          ? parsed.flatMap((item) => {
              if (!item || typeof item !== "object") return [];
              const row = item as { name?: unknown; qty?: unknown };
              return [{ name: String(row.name ?? ""), qty: Number(row.qty ?? 0) }];
            })
          : [];
        return {
          code: row.code,
          guestName: row.guest_name,
          phone: row.phone,
          pickupDate: String(row.pickup_date).slice(0, 10),
          pickupMin: Number(row.pickup_min),
          items,
          total: formatMoney(Number(row.total_cents)),
          notes: row.notes,
          status: row.status,
        };
      }),
      inbox: inbox.map((row) => ({
        id: row.id,
        kind: row.kind,
        code: row.code ?? "",
        name: row.name,
        phone: row.phone,
        email: row.email,
        summary: row.summary,
        body: row.body,
        status: row.status,
      })),
    };
    return board;
  });

export const setReservationStatus = createServerFn({ method: "POST" })
  .validator((input: { pin: string; code: string; status: string }) => input)
  .handler(async ({ data }) => {
    assertDesk(clean(data.pin, 40));
    const status = data.status;
    if (!["booked", "seated", "done", "no-show", "cancelled"].includes(status)) {
      throw new Error("Unknown status.");
    }
    const sql = await getSql();
    await sql`update reservations set status = ${status} where code = ${clean(data.code, 20)}`;
    return { ok: true };
  });

export const setOrderStatus = createServerFn({ method: "POST" })
  .validator((input: { pin: string; code: string; status: string }) => input)
  .handler(async ({ data }) => {
    assertDesk(clean(data.pin, 40));
    const status = data.status;
    if (!["placed", "ready", "picked-up", "cancelled"].includes(status)) throw new Error("Unknown status.");
    const sql = await getSql();
    await sql`update orders set status = ${status} where code = ${clean(data.code, 20)}`;
    return { ok: true };
  });

export const setInboxStatus = createServerFn({ method: "POST" })
  .validator((input: { pin: string; id: string; status: string }) => input)
  .handler(async ({ data }) => {
    assertDesk(clean(data.pin, 40));
    const status = data.status === "done" ? "done" : "open";
    const sql = await getSql();
    await sql`update inbox set status = ${status} where id = ${clean(data.id, 80)} and kind <> 'letter'`;
    return { ok: true };
  });
