import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MenuStack } from "@/components/menu-card";
import { dinnerMenu, lunchMenu, healthyMenu, cateringMenu, type MenuSection } from "@/data/restaurant";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/food-menu")({
  head: () => ({ meta: [{ title: "Menu · Ciao Bella Trattoria" }] }),
  component: FoodMenu,
});

const menus = [
  { id: "dinner", label: "Dinner menu", sections: dinnerMenu },
  { id: "lunch", label: "Lunch menu", sections: lunchMenu },
  { id: "healthy", label: "Healthy menu", sections: healthyMenu },
  { id: "catering", label: "Catering menu", sections: cateringMenu },
] as const;

type MenuId = (typeof menus)[number]["id"];

function FoodMenu() {
  const [menu, setMenu] = useState<MenuId>("dinner");
  const sections: MenuSection[] = menus.find((item) => item.id === menu)?.sections ?? dinnerMenu;
  const lunchNotice = menu === "lunch" || menu === "healthy";

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/brand/shrimp.jpg')] bg-cover bg-center opacity-25"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-bg/80" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-8 pb-16">
        <div className="bg-white shadow-sm">
          {menus.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn(
                "block w-full py-3 text-center font-display text-sm uppercase tracking-[0.28em]",
                menu === item.id ? "text-fg" : "bg-primary text-white",
              )}
              onClick={() => setMenu(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {lunchNotice ? (
          <p className="mt-6 bg-white px-5 py-4 text-base leading-relaxed shadow-sm">
            Through Sunday, November 15, dinner is daily, 5:00 PM – 10:00 PM. Beginning Monday, November 16, dinner is 5:00 PM until close, with no dining service from 2:00 PM to 5:00 PM. Lunch is daily, including Sunday, 11:00 AM – 2:00 PM, beginning November 26, 2026. It is not served before that date.
          </p>
        ) : null}
        <MenuStack sections={sections} showPrices={false} />
        {menu === "catering" ? (
          <Link
            to="/catering"
            className="mt-6 inline-flex bg-primary px-8 py-3 text-sm uppercase tracking-[0.18em] text-white"
          >
            Request a catering quote
          </Link>
        ) : null}
      </div>
    </div>
  );
}
