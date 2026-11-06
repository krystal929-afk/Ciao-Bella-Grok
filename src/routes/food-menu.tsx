import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { dinnerMenu, cateringMenu } from "@/data/restaurant";
import { cn } from "@/lib/cn";
import { SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/food-menu")({
  head: () => ({ meta: [{ title: "Menu · Ciao Bella Trattoria" }] }),
  component: FoodMenu,
});

const highlights: Record<string, { src: string; alt: string }> = {
  appetizers: { src: "/images/calamari.jpg", alt: "Fried calamari with lemon and marinara" },
  pizza: { src: "/images/pizza.jpg", alt: "Pizza with basil and blistered crust" },
  chicken: { src: "/images/chicken-parm.jpg", alt: "Chicken parmigiana with spaghetti" },
  desserts: { src: "/images/tiramisu.jpg", alt: "Slice of tiramisu" },
};

function FoodMenu() {
  const [menu, setMenu] = useState<"dinner" | "catering">("dinner");
  const sections = menu === "dinner" ? dinnerMenu : cateringMenu;
  const [active, setActive] = useState(sections[0].id);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionKicker>Dinner</SectionKicker>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-5xl">Our menu</h1>
          <p className="mt-3 max-w-xl text-muted">
            Prices from the published Ciao Bella menu. Plates are generous — guests regularly leave
            with tomorrow’s lunch. Call if you need to confirm a dish.
          </p>
        </div>
        <Link
          to="/order"
          className="rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg"
        >
          Order pickup
        </Link>
      </div>

      <div className="mt-6 flex gap-2">
        <button
          type="button"
          className={cn("rounded-full border px-4 py-2 text-sm", menu === "dinner" ? "border-primary bg-primary text-bg" : "border-border")}
          onClick={() => {
            setMenu("dinner");
            setActive(dinnerMenu[0].id);
          }}
        >
          Menu
        </button>
        <button
          type="button"
          className={cn("rounded-full border px-4 py-2 text-sm", menu === "catering" ? "border-primary bg-primary text-bg" : "border-border")}
          onClick={() => {
            setMenu("catering");
            setActive(cateringMenu[0].id);
          }}
        >
          Catering Menu
        </button>
      </div>

      <div className="sticky top-20 z-30 -mx-4 mt-8 overflow-x-auto border-y border-border bg-bg/95 px-4 py-3 backdrop-blur">
        <div className="flex gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setActive(section.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm",
                active === section.id
                  ? "border-primary bg-primary text-bg"
                  : "border-border bg-surface text-fg",
              )}
            >
              {section.title}
            </a>
          ))}
          <Link to="/catering" className="shrink-0 rounded-full border border-border px-4 py-2 text-sm">
            Catering inquiry
          </Link>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-14">
        {sections.map((section) => {
          const photo = highlights[section.id];
          return (
            <section key={section.id} id={section.id} className="scroll-mt-36">
              <div className="grid gap-6 md:grid-cols-5">
                <div className={photo ? "md:col-span-3" : "md:col-span-5"}>
                  <h2 className="font-display text-3xl">{section.title}</h2>
                  <ul className="mt-4 divide-y divide-border">
                    {section.items.map((item) => (
                      <li key={item.name} className="py-4">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-lg">{item.name}</h3>
                          <span className="shrink-0 text-sm text-primary">{item.price}</span>
                        </div>
                        {item.description ? (
                          <p className="mt-1 max-w-prose text-sm text-muted">{item.description}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
                {photo ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="aspect-square w-full rounded-md object-cover md:col-span-2"
                  />
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
