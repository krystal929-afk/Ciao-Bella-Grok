import type { MenuSection } from "@/data/service-menus";

const photos: Record<string, { src: string; alt: string }> = {
  starters: { src: "/images/brand/bruschetta.jpg", alt: "Bruschetta on a board of arugula" },
  pizza: { src: "/images/brand/pizza-cheese.jpg", alt: "Cheese pizza with a blistered crust" },
  "catering-pizza": { src: "/images/brand/pizza-cheese.jpg", alt: "Cheese pizza with a blistered crust" },
  chicken: { src: "/images/brand/parm.jpg", alt: "Chicken parmigiana with penne" },
  "entree-trays": { src: "/images/brand/parm.jpg", alt: "Chicken parmigiana with penne" },
  sea: { src: "/images/brand/salmon.jpg", alt: "Salmon with caprese salad" },
  pasta: { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  "catering-pasta": { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  "lunch-specials": { src: "/images/brand/shrimp.jpg", alt: "Shrimp scampi over pasta" },
  desserts: { src: "/images/brand/tiramisu.jpg", alt: "Slice of tiramisu" },
  "catering-dessert": { src: "/images/brand/tiramisu.jpg", alt: "Slice of tiramisu" },
  wine: { src: "/images/brand/wine.jpg", alt: "Bottles on the wine rack" },
  impero: { src: "/images/brand/wine.jpg", alt: "Bottles on the wine rack" },
};

export function MenuStack({ sections }: { sections: MenuSection[] }) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {sections.map((section) => (
        <MenuCard key={section.id} section={section} />
      ))}
    </div>
  );
}

function MenuCard({ section }: { section: MenuSection }) {
  const photo = photos[section.id];
  return (
    <section id={section.id} className="scroll-mt-24 border-l-4 border-primary bg-white px-5 py-8 shadow-sm sm:px-8">
      {photo ? <img src={photo.src} alt={photo.alt} className="mb-6 aspect-[4/3] w-full object-cover" /> : null}
      <h2 className="text-center font-display text-3xl uppercase tracking-wide text-green">{section.title}</h2>
      {section.kicker ? <p className="mt-2 text-center text-sm leading-relaxed">{section.kicker}</p> : null}
      <ul className="mt-6">
        {section.items.map((item) => (
          <li key={item.name} className="border-b border-green/40 py-4 last:border-0">
            <h3 className="text-lg leading-snug">
              {item.name}
              {item.badges?.map((badge) => (
                <span key={badge} className="ml-2 text-xs uppercase tracking-widest text-primary">
                  {badge}
                </span>
              ))}
              {item.price ? <span className="mt-1 block font-display text-primary sm:float-right sm:mt-0">{item.price}</span> : null}
            </h3>
            {item.description ? <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p> : null}
          </li>
        ))}
      </ul>
      {section.note ? <p className="mt-4 text-base leading-relaxed">{section.note}</p> : null}
      {section.warning ? (
        <p className="mt-4 text-base leading-relaxed text-fg print:text-[12pt]">{section.warning}</p>
      ) : null}
    </section>
  );
}
