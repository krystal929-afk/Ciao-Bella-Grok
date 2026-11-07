import { createFileRoute } from "@tanstack/react-router";
import { hours, restaurant, tableAgent } from "@/data/restaurant";
import { SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/reservations")({
  head: () => ({ meta: [{ title: "Reservations · Ciao Bella Trattoria" }] }),
  component: ReservationsPage,
});

function ReservationsPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      <div>
        <SectionKicker>Dine with us</SectionKicker>
        <h1 className="mt-3 font-display text-5xl leading-tight">Reservations</h1>
        <p className="mt-5 text-muted">
          Tables, the waitlist, and seating are kept in TableAgent. This site does not hold a second
          book. Slice is only for takeout and delivery.
        </p>
        <p className="mt-4 text-sm">
          Prefer the phone?{" "}
          <a className="underline" href={restaurant.phoneHref}>
            {restaurant.phoneDisplay}
          </a>
        </p>
        <ul className="mt-8 space-y-1 text-sm">
          {hours.map((row) => (
            <li key={row.day} className="flex justify-between gap-6 border-b border-border py-2">
              <span>{row.day}</span>
              <span>{row.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-center gap-4">
        {tableAgent.reserve ? (
          <a href={tableAgent.reserve} className="inline-flex justify-center bg-primary px-8 py-4 text-sm uppercase tracking-[0.2em] text-white">
            Reserve a table
          </a>
        ) : (
          <p className="border border-border px-5 py-4 text-sm">
            The TableAgent booking link is not on this preview yet. Staff add it from the TableAgent
            website-integration screen. Guests can still call the dining room.
          </p>
        )}
        {tableAgent.waitlist ? (
          <a href={tableAgent.waitlist} className="inline-flex justify-center border border-fg px-8 py-4 text-sm uppercase tracking-[0.2em]">
            Join the waitlist
          </a>
        ) : null}
        <a href={tableAgent.staff} className="text-sm underline">
          Staff open the TableAgent book
        </a>
      </div>
    </div>
  );
}
