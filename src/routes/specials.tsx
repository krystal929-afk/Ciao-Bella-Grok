import { createFileRoute, Link } from "@tanstack/react-router";
import { promotions } from "@/data/service-menus";

export const Route = createFileRoute("/specials")({
  head: () => ({ meta: [{ title: "Specials · Ciao Bella Trattoria" }] }),
  component: SpecialsPage,
});

function tonight() {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
  }).format(new Date());
  return promotions.filter((item) => item.days?.includes(weekday) && item.id !== "fritto-friday" && item.id !== "lamb-bottle");
}

function SpecialsPage() {
  const current = tonight();
  return (
    <div className="relative min-h-[70vh]">
      <img src="/images/brand/tiramisu.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center text-white">
        <h1 className="font-display text-5xl uppercase tracking-wide">Specials</h1>
        <p className="mt-3 font-script text-3xl text-accent">Come hungry, leave like family.</p>
        <div className="mt-10 flex flex-col gap-10">
          {promotions.map((item) => (
            <article key={item.id}>
              <p className="text-sm uppercase tracking-[0.25em]">{item.when}</p>
              <div className="mt-4 border border-white/30 bg-black/70 p-4 text-left">
                <p>
                  {item.title} <span className="text-accent">{item.price}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-md text-sm">
          Offers cannot be combined. Dine-in unless noted. Ask your server for details.
        </p>
        {current.length ? (
          <p className="mt-4 text-sm">Tonight: {current.map((item) => item.title).join(" · ")}.</p>
        ) : null}
        <Link to="/reservations" className="mt-6 inline-flex bg-green px-8 py-3 text-sm uppercase tracking-[0.2em] text-white">
          Reserve
        </Link>
      </div>
    </div>
  );
}
