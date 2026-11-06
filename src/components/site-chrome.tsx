import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { restaurant, serviceStatus } from "@/data/restaurant";
import { SOCIALS } from "@/data/menus";
import { NewsletterDialog, PromoPopup, openNewsletter } from "@/components/live-widgets";
import { cn } from "@/lib/cn";

const links = [
  { to: "/food-menu", label: "Menu" },
  { to: "/drink-menu", label: "Drinks" },
  { to: "/specials", label: "Specials" },
  { to: "/reservations", label: "Reserve" },
  { to: "/order", label: "Order" },
  { to: "/catering", label: "Catering" },
  { to: "/party", label: "Parties" },
  { to: "/jobs", label: "Jobs" },
] as const;

const bottom = [
  { label: "Order", to: "/order" },
  { label: "Reserve", to: "/reservations" },
  { label: "Parties", to: "/party" },
  { label: "Catering", to: "/catering" },
  { label: "Jobs", to: "/jobs" },
] as const;

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const status = serviceStatus();

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <div className="bg-fg text-bg">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs tracking-wide">
          <p>
            <span className={status.open ? "text-accent" : "text-bg/80"}>{status.label}</span>
            <span className="mx-2 text-bg/40">·</span>
            {restaurant.street}, {restaurant.city}
          </p>
          <a href={restaurant.phoneHref} className="inline-flex items-center gap-2 hover:text-accent">
            <Phone className="size-3.5" aria-hidden />
            {restaurant.phoneDisplay}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3 leading-none" onClick={() => setOpen(false)}>
              <img src="/images/house/logo.png" alt="" className="size-12 rounded-full" />
              <span>
                <span className="block font-display text-2xl text-fg">Ciao Bella</span>
                <span className="block text-xs uppercase tracking-widest text-muted">
                  Trattoria · Deerfield Beach
                </span>
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
          <nav className="mt-3 hidden flex-wrap gap-x-5 gap-y-2 lg:flex" aria-label="Primary">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm tracking-wide text-muted hover:text-fg",
                  path === link.to && "text-fg",
                  link.to === "/party" && "rounded-md bg-primary px-3 py-2 text-bg hover:bg-fg",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {open ? (
          <nav className="border-t border-border px-4 py-3 lg:hidden" aria-label="Mobile">
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="block py-3 text-lg"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
      <main id="content" className="pb-16 lg:pb-0">
        {children}
      </main>
      <footer className="border-t border-border bg-fg text-bg">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <p className="font-display text-3xl">Ciao Bella</p>
            <p className="mt-2 max-w-xs text-sm text-bg/75">
              Old-world Southern Italian cooking on Federal Highway.
            </p>
            <button type="button" onClick={openNewsletter} className="mt-4 text-sm underline decoration-accent underline-offset-4">
              Stay in touch
            </button>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-widest text-accent">Visit</p>
            <p className="mt-3">{restaurant.street}</p>
            <p>{restaurant.city}</p>
            <a className="mt-3 inline-block underline decoration-accent underline-offset-4" href={restaurant.maps}>
              Get directions
            </a>
          </div>
          <div className="text-sm">
            <p className="uppercase tracking-widest text-accent">Dinner</p>
            <p className="mt-3">Sunday, Tuesday – Saturday, 5–9 PM</p>
            <p>Monday, closed</p>
            <a className="mt-3 inline-block text-bg" href={restaurant.phoneHref}>
              {restaurant.phoneDisplay}
            </a>
            <a className="mt-2 block text-bg/80" href={restaurant.emailHref}>
              {restaurant.email}
            </a>
            <div className="mt-3 flex gap-4">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="underline decoration-accent underline-offset-4">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-bg/15 px-4 py-4 text-center text-xs text-bg/60">
          Ciao Bella Trattoria · Deerfield Beach. Menu and hours can change — call to confirm.
          <Link to="/desk" className="ml-3 underline decoration-bg/40 underline-offset-4">
            House desk
          </Link>
        </div>
      </footer>
      <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 bg-fg text-bg lg:hidden">
        {bottom.map((item) => (
          <Link key={item.label} to={item.to} className="px-1 py-3 text-center text-xs">
            {item.label}
          </Link>
        ))}
      </nav>
      <PromoPopup />
      <NewsletterDialog />
    </div>
  );
}
