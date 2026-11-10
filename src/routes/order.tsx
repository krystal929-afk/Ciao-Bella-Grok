import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { onlineOrder } from "@/data/restaurant";

export const Route = createFileRoute("/order")({
  head: () => ({ meta: [{ title: "Order · Ciao Bella Trattoria" }] }),
  component: OrderPage,
});

function OrderPage() {
  useEffect(() => {
    window.location.replace(onlineOrder.href);
  }, []);

  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl uppercase tracking-wide">Order</h1>
      <p className="mt-4">Sending you to online ordering for pickup and delivery.</p>
      <img
        src="/images/brand/order-qr.svg"
        alt="QR code for Ciao Bella online ordering"
        width="180"
        height="180"
        className="mx-auto mt-8 size-44 bg-white p-2"
      />
      <a href={onlineOrder.href} className="mt-8 inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
        Continue to order
      </a>
    </div>
  );
}
