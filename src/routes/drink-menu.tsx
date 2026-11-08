import { createFileRoute } from "@tanstack/react-router";
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
      <div className="mt-6 flex flex-col gap-6">
        {drinkMenu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 border-l-4 border-primary bg-white px-5 py-8 shadow-sm sm:px-8">
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
        ))}
      </div>
    </div>
  );
}
