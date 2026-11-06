import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { dinnerMenu } from "@/data/restaurant";
import { placeOrder } from "@/lib/house.functions";
import { formatMin, LAST_PICKUP, priceCents, timesBetween, todayIso, FIRST_SEATING } from "@/lib/house";
import { Button, Field, fieldClass, SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/order")({
  head: () => ({ meta: [{ title: "Pickup · Ciao Bella Trattoria" }] }),
  component: OrderPage,
});

const dishes = dinnerMenu.flatMap((section) =>
  section.items.flatMap((item) => {
    const cents = priceCents(item.price);
    return cents == null ? [] : [{ section: section.title, name: item.name, cents }];
  }),
);

function OrderPage() {
  const [qty, setQty] = useState<Record<string, number>>({});
  const [date, setDate] = useState(todayIso());
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [slip, setSlip] = useState<{ code: string; total: string; when: string } | null>(null);
  const times = useMemo(() => timesBetween(FIRST_SEATING, LAST_PICKUP), []);
  const total = dishes.reduce((sum, dish) => sum + (qty[dish.name] ?? 0) * dish.cents, 0);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setBusy(true);
    setError("");
    const result = await placeOrder({
      data: {
        name: String(form.get("name") ?? ""),
        phone: String(form.get("phone") ?? ""),
        email: String(form.get("email") ?? ""),
        date,
        pickupMin: Number(form.get("time")),
        notes: String(form.get("notes") ?? ""),
        items: Object.entries(qty).map(([name, count]) => ({ name, qty: count })),
      },
    });
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setSlip(result);
    setQty({});
  }

  if (slip) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16">
        <SectionKicker>Pickup</SectionKicker>
        <h1 className="mt-3 font-display text-5xl">{slip.code}</h1>
        <p className="mt-4 text-lg">
          {slip.when}
          <br />
          {slip.total} due when you collect it
        </p>
        <p className="mt-4 text-sm text-muted">
          The kitchen has the ticket. Pay at the door. Call (954) 428-2676 if you’re running late.
        </p>
        <Button className="mt-6" type="button" tone="quiet" onClick={() => setSlip(null)}>
          Order something else
        </Button>
      </div>
    );
  }

  return (
    <form className="mx-auto max-w-3xl px-4 py-14" onSubmit={onSubmit}>
      <SectionKicker>Pickup</SectionKicker>
      <h1 className="mt-3 font-display text-5xl">Order for the door</h1>
      <p className="mt-4 max-w-xl text-muted">
        Dinner menu, packed for pickup. No delivery app and no card on this page — you pay when the
        bag is ready. Tuesday through Sunday, 5 to 9.
      </p>
      <ul className="mt-8 divide-y divide-border">
        {dishes.map((dish) => {
          const count = qty[dish.name] ?? 0;
          return (
            <li key={dish.name} className="flex items-center justify-between gap-4 py-3">
              <span>
                <span className="block">{dish.name}</span>
                <span className="text-sm text-muted">
                  {dish.section} · ${(dish.cents / 100).toFixed(2)}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-md border border-border"
                  aria-label={`Remove one ${dish.name}`}
                  onClick={() => setQty((current) => ({ ...current, [dish.name]: Math.max(0, count - 1) }))}
                >
                  –
                </button>
                <span className="w-6 text-center text-sm">{count}</span>
                <button
                  type="button"
                  className="inline-flex size-11 items-center justify-center rounded-md border border-border"
                  aria-label={`Add one ${dish.name}`}
                  onClick={() => setQty((current) => ({ ...current, [dish.name]: Math.min(10, count + 1) }))}
                >
                  +
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input className={fieldClass} name="name" required />
        </Field>
        <Field label="Phone">
          <input className={fieldClass} name="phone" type="tel" required />
        </Field>
        <Field label="Email">
          <input className={fieldClass} name="email" type="email" />
        </Field>
        <Field label="Date">
          <input className={fieldClass} type="date" min={todayIso()} value={date} onChange={(event) => setDate(event.target.value)} required />
        </Field>
        <Field label="Pickup time">
          <select className={fieldClass} name="time" defaultValue={17 * 60}>
            {times.map((time) => (
              <option key={time} value={time}>
                {formatMin(time)}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Note">
          <input className={fieldClass} name="notes" placeholder="Extra sauce, no garlic…" />
        </Field>
      </div>
      {error ? <p className="mt-4 text-sm text-primary">{error}</p> : null}
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="font-display text-3xl">${(total / 100).toFixed(2)}</p>
        <Button type="submit" disabled={busy || total === 0}>
          Place pickup
        </Button>
      </div>
    </form>
  );
}
