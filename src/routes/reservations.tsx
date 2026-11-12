import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useRef, useState } from "react";
import { restaurant, tableAgent, hoursAreNew } from "@/data/restaurant";
import { LargePartyNotice } from "@/components/site-chrome";
import { SectionKicker } from "@/components/ui";

const bookingOn = createServerFn({ method: "GET" }).handler(async () => {
  return process.env.BOOKING_ENABLED?.trim().toLowerCase() === "true";
});

export const Route = createFileRoute("/reservations")({
  head: () => ({ meta: [{ title: "Reservations · Ciao Bella Trattoria" }] }),
  loader: () => bookingOn(),
  component: ReservationsPage,
});

function ReservationsPage() {
  const enabled = Route.useLoaderData();
  return (
    <div
      data-booking={enabled ? "on" : "off"}
      className="mx-auto grid max-w-6xl gap-6 px-4 pb-0 pt-8 max-lg:-mb-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12 lg:py-14"
    >
      <div>
        <SectionKicker>Dine with us</SectionKicker>
        <h1 className="mt-3 font-display text-5xl leading-tight">Reservations</h1>
        <p className="mt-5 text-muted">
          Through Sunday, November 15, dinner is daily, 5:00 PM – 10:00 PM. Beginning Monday,
          November 16, operating hours are Monday–Thursday 11:00 AM – 9:00 PM, Friday 11:00 AM –
          10:00 PM, Saturday 11:00 AM – 11:00 PM, and Sunday 11:00 AM – 9:00 PM. From that date,
          dinner is 5:00 PM until close, and the dining room does not serve between 2:00 PM and
          5:00 PM. Lunch is 11:00 AM – 2:00 PM, including Sunday, beginning November 26, 2026.
          Lunch service and lunch reservations are not available before that date.
        </p>
        <dl className="mt-8 space-y-4 text-sm">
          <div className="border-b border-border py-3">
            <dt className="uppercase tracking-[0.18em] text-primary">Through November 15</dt>
            <dd className="mt-1">Dinner, every day · 5:00 PM – 10:00 PM</dd>
          </div>
          <div className="border-b border-border py-3">
            <dt className="uppercase tracking-[0.18em] text-primary">Beginning November 16</dt>
            <dd className="mt-1">Monday–Thursday · 11:00 AM – 9:00 PM</dd>
            <dd className="mt-1">Friday · 11:00 AM – 10:00 PM</dd>
            <dd className="mt-1">Saturday · 11:00 AM – 11:00 PM</dd>
            <dd className="mt-1">Sunday · 11:00 AM – 9:00 PM</dd>
            <dd className="mt-1">Dinner · 5:00 PM until close</dd>
            <dd className="mt-1">No dining service from 2:00 PM to 5:00 PM</dd>
          </div>
          <div className="border-b border-border py-3">
            <dt className="uppercase tracking-[0.18em] text-primary">Lunch</dt>
            <dd className="mt-1">Daily, including Sunday · 11:00 AM – 2:00 PM</dd>
            <dd className="mt-1 text-muted">Service and reservations begin November 26, 2026</dd>
          </div>
        </dl>
        <LargePartyNotice className="mt-6" />
      </div>
      {enabled ? <BookingWidget /> : <CallToReserve />}
    </div>
  );
}

function CallToReserve() {
  return (
    <section className="border-l-4 border-primary bg-white px-6 py-10 shadow-sm sm:px-10">
      <p className="text-xs uppercase tracking-[0.28em] text-primary">The dining room</p>
      <h2 className="mt-4 font-display text-4xl leading-tight">
        Call to Reserve:{" "}
        <a href={restaurant.phoneHref} className="text-primary">
          (954) 428-2676
        </a>
      </h2>
      <p className="mt-6 max-w-md text-muted">
        Call the dining room for a table.{" "}
        {hoursAreNew()
          ? "Dinner is 5:00 PM until close. There is no dining service from 2:00 PM to 5:00 PM. Lunch reservations begin November 26."
          : "Through November 15, dinner is 5:00 PM – 10:00 PM. Lunch reservations begin November 26."}
      </p>
    </section>
  );
}

function BookingWidget() {
  const frame = useRef<HTMLIFrameElement>(null);
  const [blocked, setBlocked] = useState(false);

  function onLoad() {
    const node = frame.current;
    if (!node) return;
    try {
      const href = node.contentWindow?.location.href ?? "";
      if (href === "" || href === "about:blank") setBlocked(true);
    } catch {
      setBlocked(false);
    }
  }

  if (blocked) {
    return (
      <section className="border-l-4 border-primary bg-white px-6 py-10 shadow-sm sm:px-10">
        <p className="text-xs uppercase tracking-[0.28em] text-primary">The dining room</p>
        <h2 className="mt-4 font-display text-4xl leading-tight">Reserve a table</h2>
        <a
          href={tableAgent.search}
          className="mt-6 inline-flex bg-primary px-5 py-3 text-sm uppercase tracking-[0.16em] text-white"
        >
          Continue to booking
        </a>
        <p className="mt-6 text-muted">
          Or call{" "}
          <a className="text-primary underline" href={restaurant.phoneHref}>
            (954) 428-2676
          </a>
          .
        </p>
      </section>
    );
  }

  return (
    <iframe
      ref={frame}
      title="Reserve a table at Ciao Bella Trattoria"
      src={tableAgent.embed}
      className="h-[820px] w-full border border-border bg-white"
      onLoad={onLoad}
    />
  );
}
