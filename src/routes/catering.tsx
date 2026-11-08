import { createFileRoute } from "@tanstack/react-router";
import { cateringMenu } from "@/data/restaurant";
import { InquiryForm } from "@/components/inquiry-form";
import { SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/catering")({
  head: () => ({ meta: [{ title: "Catering · Ciao Bella Trattoria" }] }),
  component: CateringPage,
});

function CateringPage() {
  return (
    <div>
      <section className="relative">
        <img
          src="/images/brand/parm.jpg"
          alt="Chicken parmigiana and penne set for a gathering"
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-fg/45" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8">
            <p className="text-xs uppercase tracking-widest text-accent">Deerfield Beach catering</p>
            <h1 className="mt-2 max-w-lg font-display text-4xl text-bg sm:text-5xl">
              Fresh Italian favorites for events
            </h1>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-muted">
            Bring authentic Italian cuisine to the next gathering. Handcrafted pizzas, pastas,
            salads, and chicken are prepared fresh for groups of every size. Half trays feed a
            smaller table; full trays are the office lunch and the family reunion.
          </p>
          {cateringMenu.map((section) => (
            <section key={section.id} className="mt-10">
              <h2 className="font-display text-3xl">{section.title}</h2>
              <ul className="mt-3 divide-y divide-border">
                {section.items.map((item) => (
                  <li key={item.name} className="border-b border-green/30 py-3 last:border-0">
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="mt-6 text-sm text-muted">
            We’ll confirm tray sizes and pricing when we call you back. Add pizza and salads on the inquiry.
          </p>
        </div>
        <aside className="h-fit rounded-md border border-border bg-surface p-6 lg:col-span-2 lg:sticky lg:top-24">
          <SectionKicker>Inquire</SectionKicker>
          <h2 className="mt-2 font-display text-3xl">Tell us about the table</h2>
          <div className="mt-6">
            <InquiryForm
              kind="catering"
              submitLabel="Request a catering quote"
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "date", label: "Date", type: "date", required: true },
                { name: "guests", label: "Headcount", required: true, placeholder: "About 25" },
                {
                  name: "notes",
                  label: "What should we cook?",
                  type: "textarea",
                  placeholder: "Lasagna, penne vodka, a salad…",
                },
              ]}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
