import { createFileRoute, Link } from "@tanstack/react-router";
import { specials } from "@/data/menus";
import { SectionKicker } from "@/components/ui";

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
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionKicker>This week</SectionKicker>
      <h1 className="mt-3 font-display text-5xl">Specials</h1>
      <p className="mt-4 max-w-xl text-muted">
        {current
          ? `Tonight is ${current.day}: ${current.title}. ${current.detail}`
          : "No printed special tonight. Tuesday and Wednesday are wine night. Thursday is pizza night. Friday through Sunday are the regular menu."}
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {specials.map((item) => (
          <article key={item.day} className="rounded-md border border-border bg-surface p-5">
            <p className="text-xs uppercase tracking-widest text-primary">{item.day}</p>
            <h2 className="mt-2 font-display text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm text-muted">{item.detail}</p>
            <p className="mt-4 text-sm">{item.hours}</p>
          </article>
        ))}
      </div>
      <Link to="/reservations" className="mt-8 inline-flex rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg">
        Reserve a table
      </Link>
    </div>
  );
}
