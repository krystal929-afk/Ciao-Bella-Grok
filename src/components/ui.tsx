import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-wide transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      tone: {
        primary: "bg-primary text-bg hover:bg-fg",
        quiet: "border border-border bg-surface text-fg hover:border-fg",
        invert: "bg-bg text-fg hover:bg-surface",
        ghost: "bg-transparent text-bg hover:bg-bg/15",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

export function Button({
  className,
  tone,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonStyles>) {
  return <button className={cn(buttonStyles({ tone }), className)} {...props} />;
}

export const fieldClass =
  "w-full rounded-md border border-border bg-surface px-3 py-3 text-base text-fg outline-none transition-colors focus:border-primary";

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm text-fg">
      <span className="font-medium">{label}</span>
      {children}
    </label>
  );
}

export function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest text-primary">{children}</p>
  );
}
