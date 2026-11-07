import { createFileRoute, Link } from "@tanstack/react-router";
import { specials } from "@/data/menus";
import { InteriorHold } from "@/components/ui";

export const Route = createFileRoute("/specials")({
  head: () => ({ meta: [{ title: "Specials · Ciao Bella Trattoria" }] }),
  component: SpecialsPage,
});

function tonight() {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
  }).format(new Date());
  return specials.find((item) => item.day === weekday);
}

function SpecialsPage() {
  const current = tonight();
  return (
    <div className="relative min-h-[70vh]">
      <img src="/images/brand/tiramisu.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center text-white">
        <h1 className="font-display text-5xl uppercase tracking-wide">Specials</h1>
        <div className="mt-10 flex flex-col gap-10">
          {specials.map((item) => (
            <article key={item.day}>
              <p className="text-sm uppercase tracking-[0.25em]">{item.day}</p>
              <div className="mt-4 border border-white/30 bg-black/70 p-4 text-left">
                {item.day === "Tuesday" ? (
                  <InteriorHold className="mb-4 aspect-video w-full" />
                ) : null}
                <p>
                  {item.title}! {item.detail}
                </p>
                <p className="mt-4 text-center">{item.hours}</p>
              </div>
            </article>
          ))}
        </div>
        {current ? <p className="mt-8 text-sm">Tonight: {current.title}.</p> : null}
        <Link to="/reservations" className="mt-6 inline-flex bg-green px-8 py-3 text-sm uppercase tracking-[0.2em] text-white">
          Reserve
        </Link>
      </div>
    </div>
  );
}
