import { Link, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { restaurant, sliceOrder } from "@/data/restaurant";
import { SOCIALS } from "@/data/menus";
import { BirthdayNudge, NewsletterDialog, PromoPopup } from "@/components/live-widgets";
import { cn } from "@/lib/cn";

const links = [
  { to: "/food-menu", label: "Menu" },
  { to: "/drink-menu", label: "Drinks" },
  { to: "/specials", label: "Specials" },
  { href: sliceOrder.href, label: "Order" },
  { to: "/reservations", label: "Reserve" },
  { to: "/catering", label: "Catering" },
  { to: "/jobs", label: "Jobs" },
] as const;

const bottom = [
  { label: "Order", href: sliceOrder.href },
  { label: "Reserve", to: "/reservations" },
  { label: "Jobs", to: "/jobs" },
  { label: "Parties", to: "/party" },
  { label: "Catering", to: "/catering" },
] as const;

function Icon({ name }: { name: string }) {
  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.7" aria-hidden>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <text x="4" y="18" fontSize="16" fontFamily="Georgia, serif">
        G
      </text>
    </svg>
  );
}

function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {SOCIALS.map((social) => (
        <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`${social.label} page`}>
          <Icon name={social.label} />
        </a>
      ))}
    </div>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-40 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="shrink-0" aria-label="Ciao Bella home">
            <img src="/images/brand/logo.png" alt="Ciao Bella Italian Trattoria" className="size-16 object-contain sm:size-20" />
          </Link>
          <div className="flex items-center gap-5">
            <Socials className="text-fg" />
            <button
              type="button"
              className="inline-flex size-11 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X className="size-7" />
              ) : (
                <>
                  <span className="block h-0.5 w-7 bg-fg" />
                  <span className="block h-0.5 w-7 bg-fg" />
                  <span className="block h-0.5 w-7 bg-fg" />
                </>
              )}
            </button>
          </div>
        </div>
        <nav className="mx-auto hidden max-w-6xl items-center justify-end gap-6 px-4 pb-3 lg:flex" aria-label="Primary">
          {links.map((link) =>
            "href" in link ? (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-[0.18em] text-fg hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm uppercase tracking-[0.18em]",
                  path === link.to ? "text-primary" : "text-fg hover:text-primary",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
          <Link to="/party" className="bg-green px-5 py-2 text-sm uppercase tracking-[0.18em] text-white">
            Parties
          </Link>
        </nav>
      </header>
      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white lg:hidden">
          <div className="flex justify-end px-4 py-4">
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)} className="inline-flex size-11 items-center justify-center">
              <X className="size-7" />
            </button>
          </div>
          <nav className="mx-auto flex max-w-sm flex-col px-6 pb-24 text-center" aria-label="Mobile">
            {links.map((link) =>
              "href" in link ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-3 text-lg uppercase tracking-[0.2em]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "py-3 text-lg uppercase tracking-[0.2em]",
                    path === link.to && "bg-fg text-white",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Link to="/party" className="mt-2 bg-green py-3 text-lg uppercase tracking-[0.2em] text-white">
              Parties
            </Link>
          </nav>
        </div>
      ) : null}
      <main id="content" className="pb-16 lg:pb-0">
        {children}
      </main>
      <footer className="bg-footer px-4 py-14 text-center text-white">
        <p className="text-sm uppercase tracking-[0.25em]">Location</p>
        <p className="mt-4">{restaurant.street.replace("S ", "South ").replace("Hwy", "Highway")}</p>
        <p>Deerfield Beach, FL</p>
        <p>33441</p>
        <p className="mt-10 text-sm uppercase tracking-[0.25em]">Hours</p>
        <p className="mt-4">Dinner, every day</p>
        <p>5:00 PM – 10:00 PM</p>
        <p className="mt-4">Lunch, every day starting November 26</p>
        <p>11:00 AM – 2:00 PM</p>
        <p className="mt-10 text-sm uppercase tracking-[0.25em]">Find us on...</p>
        <Socials className="mt-4 justify-center text-2xl" />
        <p className="mt-10 text-sm uppercase tracking-[0.25em]">Contact us</p>
        <a className="mt-4 block" href={restaurant.phoneHref}>
          {restaurant.phoneDisplay}
        </a>
        <a className="mt-2 block break-all" href={restaurant.emailHref}>
          {restaurant.email}
        </a>
        <p className="mx-auto mt-10 max-w-md text-xs text-white/70">
          Dinner is daily, 5:00 PM – 10:00 PM, including Sunday. Lunch is daily, 11:00 AM – 2:00 PM, including Sunday, beginning November 26, 2026. Menu can change — call to confirm.
          <Link to="/accessibility-page-01" className="ml-2 underline underline-offset-4">
            Accessibility
          </Link>
          <Link to="/desk" className="ml-2 underline underline-offset-4">
            House desk
          </Link>
        </p>
      </footer>
      <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 bg-black text-white lg:hidden">
        {bottom.map((item) =>
          "href" in item ? (
            <a key={item.label} href={item.href} className="px-1 py-3 text-center text-[11px] uppercase tracking-wide">
              {item.label}
            </a>
          ) : (
            <Link key={item.label} to={item.to} className="px-1 py-3 text-center text-[11px] uppercase tracking-wide">
              {item.label}
            </Link>
          ),
        )}
      </nav>
      <BirthdayNudge />
      <PromoPopup />
      <NewsletterDialog />
    </div>
  );
}
