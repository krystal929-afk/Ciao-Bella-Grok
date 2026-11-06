import { createFileRoute } from "@tanstack/react-router";
import { drinkMenu } from "@/data/menus";
import { SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/drink-menu")({
  head: () => ({ meta: [{ title: "Drinks · Ciao Bella Trattoria" }] }),
  component: DrinkMenu,
});

function DrinkMenu() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionKicker>The list</SectionKicker>
      <h1 className="mt-3 font-display text-5xl">Our drinks</h1>
      <p className="mt-3 max-w-xl text-muted">
        Italian bottles by the glass and the bottle, plus espresso and the usual cold drinks.
        Prices from the published list.
      </p>
      <div className="sticky top-20 z-30 -mx-4 mt-8 flex gap-2 overflow-x-auto border-y border-border bg-bg/95 px-4 py-3">
        {drinkMenu.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="shrink-0 rounded-full border border-border px-4 py-2 text-sm">
            {section.title}
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-12">
        {drinkMenu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-36">
            <h2 className="font-display text-3xl">{section.title}</h2>
            <ul className="mt-4 divide-y divide-border">
              {section.items.map((item) => (
                <li key={item.name} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg">{item.name}</h3>
                    <span className="shrink-0 text-sm text-primary">{item.price}</span>
                  </div>
                  {item.description ? <p className="mt-1 text-sm text-muted">{item.description}</p> : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
