import { o as restaurant, r as dinnerMenu } from "./restaurant-IoJpytYJ.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { a as formatMoney, c as nowMinutesNY, f as todayIso, i as formatMin, l as openSeatings, o as formatNight, r as areaLabel, s as isBookableDate, u as priceCents } from "./house-O5O77w6u.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house.functions-Dmuc4AjS.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0001_house_default = "create table if not exists floor_tables (\n  id text primary key,\n  area text not null,\n  seats integer not null,\n  label text not null\n);\n\ninsert into floor_tables (id, area, seats, label) values\n  ('D1', 'dining', 2, 'Dining 1'),\n  ('D2', 'dining', 2, 'Dining 2'),\n  ('D3', 'dining', 2, 'Dining 3'),\n  ('D4', 'dining', 2, 'Dining 4'),\n  ('D5', 'dining', 4, 'Dining 5'),\n  ('D6', 'dining', 4, 'Dining 6'),\n  ('D7', 'dining', 4, 'Dining 7'),\n  ('D8', 'dining', 4, 'Dining 8'),\n  ('D9', 'dining', 6, 'Dining 9'),\n  ('D10', 'dining', 6, 'Dining 10'),\n  ('D11', 'dining', 8, 'Dining 11'),\n  ('P1', 'patio', 2, 'Patio 1'),\n  ('P2', 'patio', 2, 'Patio 2'),\n  ('P3', 'patio', 2, 'Patio 3'),\n  ('P4', 'patio', 4, 'Patio 4'),\n  ('P5', 'patio', 4, 'Patio 5')\non conflict (id) do nothing;\n\ncreate table if not exists reservations (\n  id text primary key,\n  code text not null unique,\n  guest_name text not null,\n  email text not null,\n  phone text not null,\n  party integer not null,\n  area text not null,\n  table_id text not null references floor_tables (id),\n  service_date date not null,\n  start_min integer not null,\n  notes text not null default '',\n  status text not null default 'booked',\n  created_at timestamptz not null default now(),\n  constraint reservations_status check (status in ('booked', 'seated', 'done', 'no-show', 'cancelled')),\n  constraint reservations_party check (party between 1 and 8)\n);\n\ncreate index if not exists reservations_night on reservations (service_date, status);\n\ncreate table if not exists orders (\n  id text primary key,\n  code text not null unique,\n  guest_name text not null,\n  phone text not null,\n  email text not null default '',\n  pickup_date date not null,\n  pickup_min integer not null,\n  items jsonb not null,\n  total_cents integer not null,\n  notes text not null default '',\n  status text not null default 'placed',\n  created_at timestamptz not null default now(),\n  constraint orders_status check (status in ('placed', 'ready', 'picked-up', 'cancelled'))\n);\n\ncreate table if not exists inbox (\n  id text primary key,\n  kind text not null,\n  code text,\n  name text not null,\n  email text not null default '',\n  phone text not null default '',\n  summary text not null,\n  body text not null default '',\n  status text not null default 'open',\n  created_at timestamptz not null default now(),\n  constraint inbox_kind check (kind in ('party', 'catering', 'job', 'letter')),\n  constraint inbox_status check (status in ('open', 'done', 'held', 'sent'))\n);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0001_house.sql": _0001_house_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
function asArea(value) {
	return value === "dining" || value === "patio" ? value : null;
}
function clean(value, max) {
	return String(value ?? "").trim().slice(0, max);
}
function code(prefix) {
	const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const bytes = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(4));
	return `${prefix}-${Array.from(bytes, (byte) => alphabet[byte % 32]).join("")}`;
}
function deskPin() {
	return process.env.DESK_PIN?.trim() || "1380";
}
function assertDesk(pin) {
	if (pin !== deskPin()) throw new Error("That pin doesn’t open the desk.");
}
async function floorAndHolds(date) {
	const sql = await getSql();
	const tables = await sql`select id, area, seats, label from floor_tables order by id`;
	const holds = await sql`
    select table_id, start_min from reservations
    where service_date = ${date}::date and status = 'booked'
  `;
	return {
		sql,
		tables: tables.map((row) => ({
			id: row.id,
			area: row.area === "patio" ? "patio" : "dining",
			seats: Number(row.seats),
			label: row.label
		})),
		holds: holds.map((row) => ({
			tableId: row.table_id,
			startMin: Number(row.start_min)
		}))
	};
}
async function holdLetter(input) {
	const sql = await getSql();
	const id = crypto.randomUUID();
	const status = await sendLetter(input.to, `Ciao Bella · ${input.summary}`, input.body);
	await sql`
    insert into inbox (id, kind, code, name, email, summary, body, status)
    values (${id}, 'letter', ${input.code}, ${input.name}, ${input.to}, ${input.summary}, ${input.body}, ${status})
  `;
	return status;
}
async function sendLetter(to, subject, text) {
	const key = process.env.RESEND_API_KEY?.trim();
	const from = process.env.MAIL_FROM?.trim();
	if (!key || !from) return "held";
	return (await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from,
			to: [to],
			subject,
			text
		})
	})).ok ? "sent" : "held";
}
var listOpenings_createServerFn_handler = createServerRpc({
	id: "44812bab1d4e4235c7bfdf185cb612cbb5f5b52359e759f5f4c1ea79f8dc9494",
	name: "listOpenings",
	filename: "src/lib/house.functions.ts"
}, (opts) => listOpenings.__executeServer(opts));
var listOpenings = createServerFn({ method: "POST" }).validator((input) => input).handler(listOpenings_createServerFn_handler, async ({ data }) => {
	const area = asArea(data.area);
	const party = Number(data.party);
	if (!area || !isBookableDate(data.date) || party < 1 || party > 8) return { times: [] };
	const { tables, holds } = await floorAndHolds(data.date);
	const earliest = data.date === todayIso() ? nowMinutesNY() + 30 : 0;
	return { times: openSeatings(tables, holds, party, area, earliest) };
});
var bookTable_createServerFn_handler = createServerRpc({
	id: "47a875bdcfb02087b97858cdf19bf02bcfd1e8bf9840169e04da3ed2983d957e",
	name: "bookTable",
	filename: "src/lib/house.functions.ts"
}, (opts) => bookTable.__executeServer(opts));
var bookTable = createServerFn({ method: "POST" }).validator((input) => input).handler(bookTable_createServerFn_handler, async ({ data }) => {
	const area = asArea(data.area);
	const party = Number(data.party);
	const start = Number(data.startMin);
	const name = clean(data.name, 80);
	const email = clean(data.email, 120);
	const phone = clean(data.phone, 30);
	const notes = clean(data.notes, 400);
	if (!area || !isBookableDate(data.date)) return {
		ok: false,
		error: "That night isn’t a service night."
	};
	if (data.date === todayIso() && start < nowMinutesNY() + 30) return {
		ok: false,
		error: "That seating has already passed."
	};
	if (!Number.isInteger(start) || start < 1020 || start > 1230 || (start - 1020) % 15 !== 0) return {
		ok: false,
		error: "Pick one of the open seatings."
	};
	if (party < 1 || party > 8 || !name || !email.includes("@") || phone.replace(/\D/g, "").length < 7) return {
		ok: false,
		error: "Name, a real email, and a phone number are required."
	};
	const { sql, tables, holds } = await floorAndHolds(data.date);
	const table = tables.filter((item) => item.area === area && item.seats >= party).sort((a, b) => a.seats - b.seats || a.id.localeCompare(b.id)).find((item) => !holds.some((hold) => hold.tableId === item.id && hold.startMin < start + 90 && hold.startMin + 90 > start));
	if (!table) return {
		ok: false,
		error: "That seating just filled. Pick another time."
	};
	const id = crypto.randomUUID();
	const confirmation = code("CB");
	if (!(await sql`
      insert into reservations (id, code, guest_name, email, phone, party, area, table_id, service_date, start_min, notes)
      select ${id}, ${confirmation}, ${name}, ${email}, ${phone}, ${party}, ${area}, ${table.id}, ${data.date}::date, ${start}, ${notes}
      where not exists (
        select 1 from reservations
        where table_id = ${table.id} and service_date = ${data.date}::date and status = 'booked'
          and start_min < ${start + 90} and start_min + ${90} > ${start}
      )
      returning code
    `)[0]) return {
		ok: false,
		error: "That seating just filled. Pick another time."
	};
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
		`Call if the night changes. A table is held for 15 minutes past the seating.`
	].filter((line) => line !== "").join("\n");
	const mail = await holdLetter({
		to: email,
		name,
		summary: confirmation,
		body,
		code: confirmation
	});
	await holdLetter({
		to: restaurant.email,
		name: restaurant.fullName,
		summary: `${confirmation} house copy`,
		body,
		code: confirmation
	});
	return {
		ok: true,
		code: confirmation,
		when,
		party,
		area: areaLabel(area),
		mailed: mail === "sent"
	};
});
var placeOrder_createServerFn_handler = createServerRpc({
	id: "da9747755a2c31de8da6dfa3920c08a43b2467e9b5df5d2ef076dd6be401ec03",
	name: "placeOrder",
	filename: "src/lib/house.functions.ts"
}, (opts) => placeOrder.__executeServer(opts));
var placeOrder = createServerFn({ method: "POST" }).validator((input) => input).handler(placeOrder_createServerFn_handler, async ({ data }) => {
	const name = clean(data.name, 80);
	const phone = clean(data.phone, 30);
	const email = clean(data.email, 120);
	const notes = clean(data.notes, 300);
	const pickup = Number(data.pickupMin);
	if (!isBookableDate(data.date)) return {
		ok: false,
		error: "Pickup is Tuesday through Sunday."
	};
	if (!Number.isInteger(pickup) || pickup < 1020 || pickup > 1260 || (pickup - 1020) % 15 !== 0) return {
		ok: false,
		error: "Pick a pickup time between 5 and 9."
	};
	if (data.date === todayIso() && pickup < nowMinutesNY() + 20) return {
		ok: false,
		error: "That pickup time has already passed."
	};
	if (!name || phone.replace(/\D/g, "").length < 7) return {
		ok: false,
		error: "Name and phone are required."
	};
	const catalog = new Map(dinnerMenu.flatMap((section) => section.items.flatMap((item) => {
		const cents = priceCents(item.price);
		return cents == null ? [] : [[item.name, cents]];
	})));
	const lines = (data.items ?? []).map((item) => ({
		name: clean(item.name, 80),
		qty: Number(item.qty)
	})).filter((item) => item.qty > 0 && catalog.has(item.name)).slice(0, 12);
	if (!lines.length) return {
		ok: false,
		error: "Add at least one dish."
	};
	const priced = lines.map((item) => ({
		name: item.name,
		qty: Math.min(10, Math.floor(item.qty)),
		cents: catalog.get(item.name) ?? 0
	}));
	const total = priced.reduce((sum, item) => sum + item.cents * item.qty, 0);
	const confirmation = code("PU");
	const id = crypto.randomUUID();
	await (await getSql())`
      insert into orders (id, code, guest_name, phone, email, pickup_date, pickup_min, items, total_cents, notes)
      values (
        ${id}, ${confirmation}, ${name}, ${phone}, ${email}, ${data.date}::date, ${pickup},
        ${JSON.stringify(priced)}::jsonb, ${total}, ${notes}
      )
    `;
	return {
		ok: true,
		code: confirmation,
		total: formatMoney(total),
		when: `${formatNight(data.date)} at ${formatMin(pickup)}`
	};
});
var fileInquiry_createServerFn_handler = createServerRpc({
	id: "a0c4909c1e2aaf78ea559ae23382ab827c20cd5d1c4aff6c3df06ee88e6b97af",
	name: "fileInquiry",
	filename: "src/lib/house.functions.ts"
}, (opts) => fileInquiry.__executeServer(opts));
var fileInquiry = createServerFn({ method: "POST" }).validator((input) => input).handler(fileInquiry_createServerFn_handler, async ({ data }) => {
	const kind = data.kind === "party" || data.kind === "catering" || data.kind === "job" ? data.kind : null;
	if (!kind) return {
		ok: false,
		error: "Unknown request."
	};
	const details = Object.fromEntries(Object.entries(data.details ?? {}).slice(0, 12).map(([key, value]) => [clean(key, 40), clean(value, 400)]));
	const name = details.Name || details.name || "";
	const email = details.Email || details.email || "";
	const phone = details.Phone || details.phone || "";
	if (!name || !email.includes("@") || phone.replace(/\D/g, "").length < 7) return {
		ok: false,
		error: "Name, email, and phone are required."
	};
	const summary = Object.entries(details).filter(([key]) => ![
		"Name",
		"Email",
		"Phone"
	].includes(key)).map(([key, value]) => `${key}: ${value}`).join(" · ");
	const confirmation = code(kind === "party" ? "PY" : kind === "catering" ? "CT" : "JB");
	await (await getSql())`
      insert into inbox (id, kind, code, name, email, phone, summary, body, status)
      values (
        ${crypto.randomUUID()}, ${kind}, ${confirmation}, ${name}, ${email}, ${phone},
        ${summary || kind}, ${Object.entries(details).map(([key, value]) => `${key}: ${value}`).join("\n")},
        'open'
      )
    `;
	return {
		ok: true,
		code: confirmation
	};
});
var openDesk_createServerFn_handler = createServerRpc({
	id: "f4a438359f7b4ea4837ac997682b516de279a710f747a15c970bd1042937b247",
	name: "openDesk",
	filename: "src/lib/house.functions.ts"
}, (opts) => openDesk.__executeServer(opts));
var openDesk = createServerFn({ method: "POST" }).validator((input) => input).handler(openDesk_createServerFn_handler, async ({ data }) => {
	assertDesk(clean(data.pin, 40));
	const sql = await getSql();
	const today = todayIso();
	const reservations = await sql`
      select r.code, r.guest_name, r.phone, r.party, r.area, r.service_date::text as service_date,
             r.start_min, r.notes, r.status, t.label as table_label
      from reservations r
      join floor_tables t on t.id = r.table_id
      where r.service_date >= ${today}::date
      order by r.service_date, r.start_min
    `;
	const orders = await sql`
      select code, guest_name, phone, pickup_date::text as pickup_date, pickup_min, items, total_cents, notes, status
      from orders
      where pickup_date >= ${today}::date
      order by pickup_date, pickup_min
    `;
	const inbox = await sql`
      select id, kind, code, name, phone, email, summary, body, status
      from inbox
      order by created_at desc
      limit 40
    `;
	return {
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
			tableLabel: row.table_label
		})),
		orders: orders.map((row) => {
			const parsed = typeof row.items === "string" ? JSON.parse(row.items) : row.items;
			const items = Array.isArray(parsed) ? parsed.flatMap((item) => {
				if (!item || typeof item !== "object") return [];
				const row = item;
				return [{
					name: String(row.name ?? ""),
					qty: Number(row.qty ?? 0)
				}];
			}) : [];
			return {
				code: row.code,
				guestName: row.guest_name,
				phone: row.phone,
				pickupDate: String(row.pickup_date).slice(0, 10),
				pickupMin: Number(row.pickup_min),
				items,
				total: formatMoney(Number(row.total_cents)),
				notes: row.notes,
				status: row.status
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
			status: row.status
		}))
	};
});
var setReservationStatus_createServerFn_handler = createServerRpc({
	id: "ea27b7f381316176ac1a36cade98ba81bc055216445e4d09a598c8c9b4018424",
	name: "setReservationStatus",
	filename: "src/lib/house.functions.ts"
}, (opts) => setReservationStatus.__executeServer(opts));
var setReservationStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(setReservationStatus_createServerFn_handler, async ({ data }) => {
	assertDesk(clean(data.pin, 40));
	const status = data.status;
	if (![
		"booked",
		"seated",
		"done",
		"no-show",
		"cancelled"
	].includes(status)) throw new Error("Unknown status.");
	await (await getSql())`update reservations set status = ${status} where code = ${clean(data.code, 20)}`;
	return { ok: true };
});
var setOrderStatus_createServerFn_handler = createServerRpc({
	id: "a6c56fdca56884f2f256233d9fdf8d563d338566eff6ea9978672a2ba84e7d5d",
	name: "setOrderStatus",
	filename: "src/lib/house.functions.ts"
}, (opts) => setOrderStatus.__executeServer(opts));
var setOrderStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(setOrderStatus_createServerFn_handler, async ({ data }) => {
	assertDesk(clean(data.pin, 40));
	const status = data.status;
	if (![
		"placed",
		"ready",
		"picked-up",
		"cancelled"
	].includes(status)) throw new Error("Unknown status.");
	await (await getSql())`update orders set status = ${status} where code = ${clean(data.code, 20)}`;
	return { ok: true };
});
var setInboxStatus_createServerFn_handler = createServerRpc({
	id: "d1799ccb17a6b15d59b80b07c5aca93a118571fec2f264118a9f1c401fd9f637",
	name: "setInboxStatus",
	filename: "src/lib/house.functions.ts"
}, (opts) => setInboxStatus.__executeServer(opts));
var setInboxStatus = createServerFn({ method: "POST" }).validator((input) => input).handler(setInboxStatus_createServerFn_handler, async ({ data }) => {
	assertDesk(clean(data.pin, 40));
	const status = data.status === "done" ? "done" : "open";
	await (await getSql())`update inbox set status = ${status} where id = ${clean(data.id, 80)} and kind <> 'letter'`;
	return { ok: true };
});
//#endregion
export { bookTable_createServerFn_handler, fileInquiry_createServerFn_handler, listOpenings_createServerFn_handler, openDesk_createServerFn_handler, placeOrder_createServerFn_handler, setInboxStatus_createServerFn_handler, setOrderStatus_createServerFn_handler, setReservationStatus_createServerFn_handler };
