import { createFileRoute } from "@tanstack/react-router";
import { drinkMenu } from "@/data/menus";
import { InteriorHold } from "@/components/ui";

export const Route = createFileRoute("/drink-menu")({
  head: () => ({ meta: [{ title: "Drinks · Ciao Bella Trattoria" }] }),
  component: DrinkMenu,
});

function DrinkMenu() {
  const groups = [
    { id: "red", label: "Wine" },
    { id: "hot", label: "Hot drink" },
    { id: "fresh", label: "Fresh drink" },
    { id: drinkMenu[drinkMenu.length - 1]?.id ?? "fresh", label: "Drinks" },
  ];
  return (
    <div>
      <div className="relative">
        <InteriorHold quiet className="h-48 w-full sm:h-64" />
        <div className="absolute inset-0 bg-white/50" />
        <h1 className="absolute inset-0 flex items-center justify-center font-display text-5xl uppercase tracking-wide">
          Our drinks
        </h1>
      </div>
      <div className="mx-auto -mt-6 max-w-3xl px-4 pb-16">
        <div className="bg-white shadow-sm">
          {groups.map((group) => (
            <a key={group.label} href={`#${group.id}`} className="block bg-primary py-3 text-center text-sm uppercase tracking-[0.2em] text-white">
              {group.label}
            </a>
          ))}
        </div>
        <div className="mt-6 bg-white p-6 shadow-sm">
          {drinkMenu.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-border py-6 last:border-0">
              <h2 className="text-center font-display text-3xl uppercase tracking-wide text-green">{section.title}</h2>
              <ul className="mt-4">
                {section.items.map((item) => (
                  <li key={item.name} className="border-b border-green/30 py-4 last:border-0">
                    <h3>{item.name}</h3>
                    {item.description ? <p className="mt-1 text-sm text-muted">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
