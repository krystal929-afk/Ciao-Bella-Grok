import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { hours, restaurant } from "@/data/restaurant";
import { bookTable, listOpenings } from "@/lib/house.functions";
import { areaLabel, formatMin, todayIso, type Area } from "@/lib/house";
import { Button, Field, fieldClass, SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/reservations")({
  head: () => ({ meta: [{ title: "Reservations · Ciao Bella Trattoria" }] }),
  component: ReservationsPage,
});

type Held = { code: string; when: string; party: number; area: string; mailed: boolean };

function ReservationsPage() {
  const [date, setDate] = useState(todayIso());
  const [party, setParty] = useState(2);
  const [area, setArea] = useState<Area>("dining");
  const [times, setTimes] = useState<number[]>([]);
  const [start, setStart] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [held, setHeld] = useState<Held | null>(null);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    setStart(null);
    listOpenings({ data: { date, party, area } })
      .then((result) => {
        if (!cancel) setTimes(result.times);
      })
      .catch(() => {
        if (!cancel) setTimes([]);
      })
      .finally(() => {
        if (!cancel) setLoading(false);
      });
    return () => {
      cancel = true;
    };
  }, [date, party, area]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (start == null) return;
    const form = new FormData(event.currentTarget);
    setError("");
    setLoading(true);
    const result = await bookTable({
      data: {
        date,
        startMin: start,
        party,
        area,
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        notes: String(form.get("notes") ?? ""),
      },
    });
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      const again = await listOpenings({ data: { date, party, area } });
      setTimes(again.times);
      setStart(null);
      return;
    }
    setHeld(result);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div>
        <SectionKicker>The book</SectionKicker>
        <h1 className="mt-3 font-display text-5xl leading-tight">Hold a table</h1>
        <p className="mt-5 text-muted">
          The dining room keeps its own book. A seating is ninety minutes, last call is 8:30, and a
          table is only offered if one is actually free. Parties over eight use the party page.
        </p>
        <img
          src="/images/house/g6.jpg"
          alt="Grilled salmon with caprese salad"
          className="mt-8 aspect-video w-full rounded-md object-cover"
        />
        <div className="mt-8">
          <h2 className="font-display text-2xl">Hours</h2>
          <ul className="mt-3 text-sm">
            {hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4 border-b border-border py-2">
                <span>{row.day}</span>
                <span className={row.closed ? "text-muted" : "text-fg"}>{row.time}</span>
              </li>
            ))}
          </ul>
          <a className="mt-4 inline-block text-sm text-primary" href={restaurant.phoneHref}>
            {restaurant.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        {held ? (
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">Table held</p>
            <h2 className="mt-2 font-display text-4xl">{held.code}</h2>
            <p className="mt-4 text-lg">
              {held.when}
              <br />
              {held.party} {held.party === 1 ? "guest" : "guests"} · {held.area}
            </p>
            <p className="mt-4 text-sm text-muted">
              {held.mailed
                ? "A confirmation email is on its way."
                : "This screen is your confirmation. The house desk has the same slip. Email sends once the restaurant connects a mail sender — call if you need it read back."}
            </p>
            <Button className="mt-6" type="button" tone="quiet" onClick={() => setHeld(null)}>
              Book another table
            </Button>
          </div>
        ) : (
          <form className="grid gap-5" onSubmit={onSubmit}>
            <h2 className="font-display text-3xl">Find a seating</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Date">
                <input
                  className={fieldClass}
                  type="date"
                  min={todayIso()}
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  required
                />
              </Field>
              <Field label="Party">
                <select
                  className={fieldClass}
                  value={party}
                  onChange={(event) => setParty(Number(event.target.value))}
                >
                  {Array.from({ length: 8 }, (_, index) => index + 1).map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Room">
                <select
                  className={fieldClass}
                  value={area}
                  onChange={(event) => setArea(event.target.value as Area)}
                >
                  <option value="dining">{areaLabel("dining")}</option>
                  <option value="patio">{areaLabel("patio")}</option>
                </select>
              </Field>
            </div>
            <div>
              <p className="text-sm font-medium">Open seatings</p>
              {loading && times.length === 0 ? <p className="mt-3 text-sm text-muted">Checking the book…</p> : null}
              {!loading && times.length === 0 ? (
                <p className="mt-3 text-sm text-muted">
                  Nothing open for that party and room. Monday is closed. Try the other room, a smaller
                  party, or the party page.
                </p>
              ) : (
                <div className="mt-3 flex flex-wrap gap-2">
                  {times.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setStart(time)}
                      className={
                        start === time
                          ? "rounded-md bg-primary px-3 py-2 text-sm text-bg"
                          : "rounded-md border border-border px-3 py-2 text-sm"
                      }
                    >
                      {formatMin(time)}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name">
                <input className={fieldClass} name="name" required />
              </Field>
              <Field label="Phone">
                <input className={fieldClass} name="phone" type="tel" required />
              </Field>
              <Field label="Email">
                <input className={fieldClass} name="email" type="email" required />
              </Field>
              <Field label="Note">
                <input className={fieldClass} name="notes" placeholder="Anniversary, high chair…" />
              </Field>
            </div>
            {error ? <p className="text-sm text-primary">{error}</p> : null}
            <Button type="submit" disabled={start == null || loading}>
              Hold this table
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
