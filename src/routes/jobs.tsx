import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/inquiry-form";
import { InteriorHold, SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/jobs")({
  head: () => ({ meta: [{ title: "Jobs · Ciao Bella Trattoria" }] }),
  component: JobsPage,
});

function JobsPage() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-2">
      <div>
        <SectionKicker>Careers</SectionKicker>
        <h1 className="mt-3 font-display text-5xl leading-tight">We are hiring</h1>
        <p className="mt-5 text-muted">
          Apply below to become a part of the team and we’ll get back to you. If you have questions,
          call {""}
          <a className="underline" href="tel:+19544282676">
            (954) 428-2676
          </a>
          .
        </p>
        <InteriorHold className="mt-8 aspect-video w-full rounded-md" />
      </div>
      <div className="rounded-md border border-border bg-surface p-6">
        <h2 className="font-display text-3xl">Leave a note</h2>
        <div className="mt-6">
          <InquiryForm
            kind="job"
            submitLabel="Send to the house"
            fields={[
              { name: "name", label: "Name", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "role", label: "Role", required: true, placeholder: "Server, host, kitchen" },
              { name: "notes", label: "When you can work", type: "textarea", placeholder: "Nights, weekends…" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
