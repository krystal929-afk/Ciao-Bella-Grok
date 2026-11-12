import { createFileRoute } from "@tanstack/react-router";
import { MenuStack } from "@/components/menu-card";
import { drinkMenu } from "@/data/menus";

export const Route = createFileRoute("/drink-menu")({
  head: () => ({ meta: [{ title: "Drinks · Ciao Bella Trattoria" }] }),
  component: DrinkMenu,
});

function DrinkMenu() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 pb-16">
      <div className="bg-white py-4 text-center shadow-sm">
        <h1 className="font-display text-sm uppercase tracking-[0.28em]">Drinks</h1>
      </div>
      <MenuStack sections={drinkMenu} showPrices={false} />
    </div>
  );
}
