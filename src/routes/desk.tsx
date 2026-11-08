import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { tableAgent } from "@/data/restaurant";
import { openDesk, setInboxStatus, setOrderStatus } from "@/lib/house.functions";
import { formatMin, formatNight, type DeskBoard } from "@/lib/house";
import { Button, Field, fieldClass, SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/desk")({
  head: () => ({ meta: [{ title: "House desk · Ciao Bella" }] }),
  component: DeskPage,
});

type Desk = DeskBoard;

function notice(status: string) {
  if (status === "sent") return "Email sent";
  if (status === "held") return "Saved. Email is held until sending is turned on";
  if (status === "done") return "Closed";
  return "Saved. Email has not been sent";
}

function linesOf(body: string) {
  const fields: { label: string; value: string }[] = [];
  for (const line of body.split("\n")) {
    const split = line.indexOf(":");
    if (split === -1) continue;
    const label = line.slice(0, split).trim();
    const value = line.slice(split + 1).trim();
    if (label && value) fields.push({ label, value });
  }
  return fields;
}

function InquiryCard({
  note,
  onDone,
}: {
  note: Desk["inbox"][number];
  onDone: () => void;
}) {
  const fields = linesOf(note.body);
  const date = fields.find((field) => field.label.toLowerCase() === "date")?.value;
  const details = fields.filter((field) => !["name", "email", "phone", "date"].includes(field.label.toLowerCase()));
  return (
    <li className="rounded-md border border-border bg-white p-4">
      <p className="text-xs uppercase tracking-widest text-primary">
        {note.kind} · {note.code}
      </p>
      <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-muted">Name</dt>
          <dd>{note.name || "—"}</dd>
        </div>
        <div>
          <dt className="text-muted">Email</dt>
          <dd className="break-all">{note.email || "—"}</dd>
        </div>
        <div>
          <dt className="text-muted">Telephone</dt>
          <dd>{note.phone || "—"}</dd>
        </div>
        <div>
          <dt className="text-muted">Date</dt>
          <dd>{date || (note.kind === "job" ? "Not on this form" : "—")}</dd>
        </div>
      </dl>
      <div className="mt-3 text-sm">
        <p className="text-muted">Details</p>
        {details.length === 0 ? <p>—</p> : null}
        {details.map((field) => (
          <p key={field.label}>
            <span className="text-muted">{field.label}: </span>
            {field.value}
          </p>
        ))}
      </div>
      <p className="mt-3 text-sm">
        <span className="text-muted">Notification: </span>
        {notice(note.status)}
      </p>
      {note.status !== "done" ? (
        <button type="button" className="mt-3 text-sm underline" onClick={onDone}>
          Mark done
        </button>
      ) : null}
    </li>
  );
}

function DeskPage() {
  const [pin, setPin] = useState("");
  const [desk, setDesk] = useState<Desk | null>(null);
  const [error, setError] = useState("");

  async function load(nextPin: string) {
    setError("");
    try {
      const result = await openDesk({ data: { pin: nextPin } });
      setPin(nextPin);
      setDesk(result);
    } catch {
      setError("That pin doesn’t open the desk.");
    }
  }

  async function order(code: string, status: string) {
    await setOrderStatus({ data: { pin, code, status } });
    await load(pin);
  }

  async function closeNote(id: string) {
    await setInboxStatus({ data: { pin, id, status: "done" } });
    await load(pin);
  }

  if (!desk) {
    return (
      <form
        className="mx-auto max-w-sm px-4 py-20"
        onSubmit={(event) => {
          event.preventDefault();
          const form = new FormData(event.currentTarget);
          void load(String(form.get("pin") ?? ""));
        }}
      >
        <SectionKicker>Staff</SectionKicker>
        <h1 className="mt-3 font-display text-4xl">House desk</h1>
        <p className="mt-3 text-sm text-muted">
          Guest notes for parties, catering, and jobs. Tables and the waitlist live in TableAgent.
          Food tickets print on Slice. There is no default pin.
        </p>
        <div className="mt-6">
          <Field label="Pin">
            <input className={fieldClass} name="pin" type="password" autoComplete="current-password" required />
          </Field>
        </div>
        {error ? <p className="mt-3 text-sm text-primary">{error}</p> : null}
        <Button className="mt-4" type="submit">
          Open the book
        </Button>
      </form>
    );
  }

  const letters = desk.inbox.filter((item) => item.kind === "letter");
  const notes = desk.inbox.filter((item) => item.kind !== "letter" && item.status !== "done");

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <SectionKicker>Staff</SectionKicker>
      <h1 className="mt-2 font-display text-4xl">House desk</h1>
      <section className="mt-8">
        <h2 className="font-display text-2xl">Tables</h2>
        <p className="mt-3 text-sm text-muted">
          Reservations, the waitlist, and the floor are in TableAgent. This desk does not seat tables.
        </p>
        <a className="mt-4 inline-flex bg-primary px-6 py-3 text-sm uppercase tracking-[0.16em] text-white" href={tableAgent.staff}>
          Open TableAgent
        </a>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">Food orders</h2>
        <p className="mt-3 text-sm text-muted">
          Takeout and delivery print on the Slice tablet. This list is only leftover house tickets from before that switch.
        </p>
        <ul className="mt-3 divide-y divide-border">
          {desk.orders.map((row) => (
            <li key={row.code} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-medium">
                  {formatNight(row.pickupDate)} · {formatMin(row.pickupMin)} · {row.guestName}
                </p>
                <p className="text-sm text-muted">
                  {row.code} · {row.total} · {row.status} · {row.phone}
                </p>
                <p className="text-sm">
                  {(row.items ?? []).map((item) => `${item.qty} ${item.name}`).join(", ")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["ready", "picked-up", "cancelled"].map((status) => (
                  <button
                    key={status}
                    type="button"
                    className="rounded-md border border-border px-3 py-2 text-xs"
                    onClick={() => void order(row.code, status)}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">Parties, catering, jobs, mailing list</h2>
        {notes.length === 0 ? <p className="mt-3 text-sm text-muted">Nothing waiting.</p> : null}
        <ul className="mt-3 space-y-3">
          {notes.map((note) => (
            <InquiryCard key={note.id} note={note} onDone={() => void closeNote(note.id)} />
          ))}
        </ul>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl">Confirmation slips</h2>
        <p className="mt-2 text-sm text-muted">
          Held means the letter is written and waiting on a mail sender. Sent means it left.
        </p>
        <ul className="mt-3 space-y-3">
          {letters.map((letter) => (
            <li key={letter.id} className="rounded-md border border-border p-4">
              <p className="text-xs uppercase tracking-widest text-primary">
                {letter.status} · {letter.email}
              </p>
              <pre className="mt-2 whitespace-pre-wrap font-sans text-sm">{letter.body}</pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
