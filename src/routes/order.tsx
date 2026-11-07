import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { sliceOrder } from "@/data/restaurant";

export const Route = createFileRoute("/order")({
  head: () => ({ meta: [{ title: "Order · Ciao Bella Trattoria" }] }),
  component: OrderPage,
});

function OrderPage() {
  useEffect(() => {
    window.location.replace(sliceOrder.href);
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl uppercase tracking-wide">Order</h1>
      <p className="mt-4">Sending you to Slice for pickup and delivery.</p>
      <a href={sliceOrder.href} className="mt-8 inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
        Continue to Slice
      </a>
    </div>
  );
}
