import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { dinnerMenu, cateringMenu } from "@/data/restaurant";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/food-menu")({
  head: () => ({ meta: [{ title: "Menu · Ciao Bella Trattoria" }] }),
  component: FoodMenu,
});

const highlights: Record<string, { src: string; alt: string }> = {
  appetizers: { src: "/images/brand/calamari.jpg", alt: "Fried calamari with lemon and marinara" },
  pizza: { src: "/images/brand/pizza-hawaiian.jpg", alt: "Ham and pineapple pizza" },
  chicken: { src: "/images/brand/parm.jpg", alt: "Chicken parmigiana with penne" },
  fish: { src: "/images/brand/salmon.jpg", alt: "Salmon with caprese salad" },
  pasta: { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  desserts: { src: "/images/brand/tiramisu.jpg", alt: "Slice of tiramisu" },
};

function FoodMenu() {
  const [menu, setMenu] = useState<"dinner" | "catering">("dinner");
  const sections = menu === "dinner" ? dinnerMenu : cateringMenu;
  const [active, setActive] = useState(sections[0].id);

  return (
    <div>
      <div className="relative">
        <img src="/images/brand/parm.jpg" alt="" className="h-48 w-full object-cover sm:h-64" />
        <div className="absolute inset-0 bg-white/55" />
        <h1 className="absolute inset-0 flex items-center justify-center font-display text-5xl uppercase tracking-wide">
          Our menu
        </h1>
      </div>
      <div className="mx-auto -mt-8 max-w-3xl px-4 pb-16">
        <div className="bg-white p-4 shadow-sm">
          <button
            type="button"
            className={cn("w-full py-3 text-center text-sm uppercase tracking-[0.2em]", menu === "dinner" ? "text-fg" : "bg-primary text-white")}
            onClick={() => {
              setMenu("dinner");
              setActive(dinnerMenu[0].id);
            }}
          >
            Menu
          </button>
          <button
            type="button"
            className={cn("mt-1 w-full py-3 text-center text-sm uppercase tracking-[0.2em]", menu === "catering" ? "text-fg" : "bg-primary text-white")}
            onClick={() => {
              setMenu("catering");
              setActive(cateringMenu[0].id);
            }}
          >
            Catering menu
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
                  <h2 className="font-display text-3xl uppercase tracking-wide text-green">{section.title}</h2>
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
    </div>
  );
}
