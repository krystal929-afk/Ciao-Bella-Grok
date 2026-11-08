import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { LargePartyNotice } from "@/components/site-chrome";
import { InteriorHold, SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/party")({
  head: () => ({ meta: [{ title: "Private parties · Ciao Bella Trattoria" }] }),
  component: PartyPage,
});

const occasions = [
  "Birthday",
  "Family gathering",
  "Rehearsal or shower",
  "Corporate dinner",
  "Something else",
];

function PartyPage() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-2">
      <div>
        <SectionKicker>Celebrate with us</SectionKicker>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          Private parties & group events in Deerfield Beach
        </h1>
        <p className="mt-5 text-muted">
          Birthdays, anniversaries, and family reunions all have a place at Ciao Bella, where a warm,
          casual setting gives groups an easygoing way to gather. We can accommodate up to 50 guests
          at 1380 South Federal Highway. Inquire today to book your private party.
        </p>
        <LargePartyNotice className="mt-6" />
        <InteriorHold className="mt-8 aspect-video w-full rounded-md" />
        <ul className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
          {[
            ["The room", "Vintage dining room, white cloths, and a pace that lets people talk."],
            ["The food", "Family-style or plated from the dinner and catering menus."],
            ["The size", "Best for groups that need more than a standard reservation."],
            ["The plan", "Tell us the date and headcount. We call back to lock the menu."],
          ].map(([title, copy]) => (
            <li key={title} className="rounded-md border border-border bg-surface p-4">
              <p className="font-medium">{title}</p>
              <p className="mt-1 text-muted">{copy}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        <h2 className="font-display text-3xl">Book a private party</h2>
        <p className="mt-2 text-sm text-muted">
          More than eight guests. The note lands on the house desk, and the dining room calls back to lock the menu.
        </p>
        <div className="mt-6">
          <InquiryForm
            kind="party"
            submitLabel="Request the room"
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "date", label: "Date", type: "date", required: true },
              { name: "guests", label: "Guest count", required: true, placeholder: "18" },
              { name: "occasion", label: "Occasion", options: occasions, required: true },
              {
                name: "notes",
                label: "Anything we should know",
                type: "textarea",
                placeholder: "Cake, high chairs, a quiet corner…",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
