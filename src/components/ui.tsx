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

export function InteriorHold({
  className,
  tone = "light",
  quiet = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  quiet?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <div
      role="img"
      aria-label="Dining room photographs are paused during the renovation"
      className={cn(
        "flex items-center justify-center text-center",
        dark ? "bg-[#2a1216] text-white" : "bg-[#f3efe6] text-[#7a1e2c]",
        className,
      )}
    >
      {quiet ? null : (
        <div className="px-6 py-8">
          <img src="/images/brand/logo.png" alt="" className="mx-auto h-16 w-16 object-contain" />
          <p className="mt-3 text-xs uppercase tracking-[0.2em]">Dining room photos return after the renovation</p>
        </div>
      )}
    </div>
  );
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
