import { createFileRoute } from "@tanstack/react-router";
import { restaurant, sliceOrder } from "@/data/restaurant";

export const Route = createFileRoute("/order")({
  head: () => ({ meta: [{ title: "Order · Ciao Bella Trattoria" }] }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <div>
      <div className="relative">
        <img src="/images/brand/pizza-cheese.jpg" alt="" className="h-48 w-full object-cover sm:h-64" />
        <div className="absolute inset-0 bg-white/55" />
        <h1 className="absolute inset-0 flex items-center justify-center px-4 text-center font-display text-5xl uppercase tracking-wide">
          Order
        </h1>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <p className="font-script text-3xl text-primary">Takeout and delivery</p>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed">
          Food orders go through Slice, Ciao Bella’s ordering desk at {restaurant.street}. Pickup or
          delivery, guest checkout is fine. Slice emails a confirmation as soon as the kitchen accepts
          the ticket. {sliceOrder.offer}.
        </p>
        <p className="mt-3 text-sm text-muted">
          Tables are separate. A Slice order does not hold a dining-room table.
        </p>
        <a
          href={sliceOrder.href}
          className="mt-8 inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white"
        >
          Order on Slice
        </a>
        <p className="mt-6 text-sm">
          Prefer the phone?{" "}
          <a className="underline" href={restaurant.phoneHref}>
            {restaurant.phoneDisplay}
          </a>
        </p>
        <p className="mt-8 text-sm text-muted">Tuesday–Sunday, 5:00 PM – 9:00 PM. Monday the kitchen is closed.</p>
      </div>
    </div>
  );
}
