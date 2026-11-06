import { useState, type FormEvent } from "react";
import { fileInquiry } from "@/lib/house.functions";
import { Button, Field, fieldClass } from "@/components/ui";

type FieldSpec = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
  placeholder?: string;
};

export function InquiryForm({
  kind,
  fields,
  submitLabel,
}: {
  kind: "party" | "catering" | "job";
  fields: FieldSpec[];
  submitLabel: string;
}) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details: Record<string, string> = {};
    for (const field of fields) {
      details[field.label] = String(data.get(field.name) ?? "").trim();
    }
    setBusy(true);
    setError("");
    const result = await fileInquiry({ data: { kind, details } });
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setCode(result.code);
    event.currentTarget.reset();
  }

  if (code) {
    return (
      <div>
        <p className="font-display text-2xl text-fg">The house has it</p>
        <p className="mt-2 text-sm text-muted">
          Reference {code}. It is on the house desk. Call (954) 428-2676 if the date is inside the week.
        </p>
        <Button className="mt-6" type="button" tone="quiet" onClick={() => setCode("")}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      {fields.map((field) => (
        <Field key={field.name} label={field.label}>
          {field.options ? (
            <select className={fieldClass} name={field.name} required={field.required} defaultValue="">
              <option value="" disabled>
                Choose
              </option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              className={fieldClass}
              name={field.name}
              required={field.required}
              rows={4}
              placeholder={field.placeholder}
            />
          ) : (
            <input
              className={fieldClass}
              name={field.name}
              type={field.type ?? "text"}
              required={field.required}
              placeholder={field.placeholder}
            />
          )}
        </Field>
      ))}
      {error ? <p className="text-sm text-primary">{error}</p> : null}
      <Button type="submit" disabled={busy}>
        {submitLabel}
      </Button>
    </form>
  );
}
