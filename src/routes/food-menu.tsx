import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { dinnerMenu, cateringMenu, type MenuSection } from "@/data/restaurant";
import { cn } from "@/lib/cn";

export const Route = createFileRoute("/food-menu")({
  head: () => ({ meta: [{ title: "Menu · Ciao Bella Trattoria" }] }),
  component: FoodMenu,
});

const highlights: Record<string, { src: string; alt: string }> = {
  appetizers: { src: "/images/brand/bruschetta.jpg", alt: "Bruschetta on a board of arugula" },
  pizza: { src: "/images/brand/pizza-cheese.jpg", alt: "Cheese pizza with a blistered crust" },
  chicken: { src: "/images/brand/parm.jpg", alt: "Chicken parmigiana with penne" },
  fish: { src: "/images/brand/salmon.jpg", alt: "Salmon with caprese salad" },
  pasta: { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  desserts: { src: "/images/brand/tiramisu.jpg", alt: "Slice of tiramisu" },
};

function FoodMenu() {
  const [menu, setMenu] = useState<"dinner" | "catering">("dinner");
  const sections = menu === "dinner" ? dinnerMenu : cateringMenu;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/images/brand/shrimp.jpg')] bg-cover bg-center opacity-25"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-bg/80" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-4 py-8 pb-16">
        <div className="bg-white shadow-sm">
          <button
            type="button"
            className={cn(
              "block w-full py-3 text-center font-display text-sm uppercase tracking-[0.28em]",
              menu === "dinner" ? "text-fg" : "bg-primary text-white",
            )}
            onClick={() => setMenu("dinner")}
          >
            Menu
          </button>
          <button
            type="button"
            className={cn(
              "block w-full py-3 text-center font-display text-sm uppercase tracking-[0.28em]",
              menu === "catering" ? "text-fg" : "bg-primary text-white",
            )}
            onClick={() => setMenu("catering")}
          >
            Catering menu
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          {sections.map((section) => (
            <MenuCard key={section.id} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MenuCard({ section }: { section: MenuSection }) {
  const photo = highlights[section.id];
  return (
    <section id={section.id} className="scroll-mt-24 border-l-4 border-primary bg-white px-5 py-8 shadow-sm sm:px-8">
      {photo ? (
        <img src={photo.src} alt={photo.alt} className="mb-6 aspect-[4/3] w-full object-cover" />
      ) : null}
      <h2 className="text-center font-display text-3xl uppercase tracking-wide text-green">{section.title}</h2>
      <ul className="mt-6">
        {section.items.map((item) => (
          <li key={item.name} className="border-b border-green/40 py-4 last:border-0">
            <h3 className="text-lg">{item.name}</h3>
            {item.description ? <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
