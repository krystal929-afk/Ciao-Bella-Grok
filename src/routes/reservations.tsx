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
      <div>
        <iframe
          title="Reserve a table at Ciao Bella Trattoria"
          src={tableAgent.embed}
          className="h-[820px] w-full border border-border bg-white"
        />
        <p className="mt-3 text-sm text-muted">
          The book is TableAgent. If it says reservations are not open, call the dining room. Online
          booking is switched on from the TableAgent desk, not from this page.
        </p>
        <a href={tableAgent.listing} className="mt-3 inline-flex text-sm underline">
          Open the TableAgent listing
        </a>
      </div>
    </div>
  );
}
