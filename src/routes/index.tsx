import { createFileRoute, Link } from "@tanstack/react-router";
import { about, houseLine, restaurant } from "@/data/restaurant";
import { Reviews } from "@/components/reviews";
import { HeroFilm, MomentSlideshow, PhotoGallery, openNewsletter } from "@/components/live-widgets";
import { SectionKicker } from "@/components/ui";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative bg-fg text-bg">
        <HeroFilm />
        <div className="relative mx-auto flex min-h-96 max-w-6xl flex-col justify-end px-4 py-12">
          <p className="text-xs uppercase tracking-widest text-accent">{restaurant.kicker}</p>
          <h1 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-6xl">
            {restaurant.tagline}
          </h1>
          <p className="mt-4 max-w-md text-sm text-bg/85">
            Dinner on Federal Highway. Pizzas, red-sauce classics, and a dining room that still
            feels like a family table.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/food-menu" className="rounded-md bg-bg px-5 py-3 text-sm text-fg hover:bg-surface">
              Our menu
            </Link>
            <Link
              to="/reservations"
              className="rounded-md border border-bg/40 px-5 py-3 text-sm text-bg hover:bg-bg/10"
            >
              Reserve a table
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <SectionKicker>Deerfield Beach</SectionKicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">A table that still tastes like home</h2>
          <p className="mt-5 text-muted">{about}</p>
          <p className="mt-5 border-l-2 border-accent pl-4 font-display text-xl leading-snug text-fg">
            {houseLine}
          </p>
        </div>
        <img
          src="/images/house/g6.jpg"
          alt="Grilled salmon with caprese salad"
          className="aspect-video w-full rounded-md object-cover"
        />
      </section>

      <MomentSlideshow />

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2">
        <img
          src="/images/house/g3.jpg"
          alt="Shrimp over pasta"
          className="aspect-square w-full max-w-md rounded-md object-cover"
        />
        <div>
          <SectionKicker>Order and enjoy</SectionKicker>
          <h2 className="mt-3 font-display text-4xl leading-tight">Fresh Italian meals, taken home</h2>
          <p className="mt-4 text-muted">
            Packed from the dinner menu and paid at the door. Tuesday through Sunday, between 5 and 9.
          </p>
          <Link
            to="/order"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg"
          >
            Order pickup
          </Link>
        </div>
      </section>

      <PhotoGallery />
      <div id="after-gallery" className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-2">
        <div>
          <SectionKicker>Find us</SectionKicker>
          <h2 className="mt-3 font-display text-4xl">1380 South Federal Highway</h2>
          <p className="mt-3 text-muted">{restaurant.city}</p>
          <p className="mt-2 text-sm text-muted">Sunday, Tuesday – Saturday, 5:00 PM – 9:00 PM. Monday closed.</p>
          <a className="mt-4 inline-block text-sm text-primary" href={restaurant.maps}>
            Open in maps
          </a>
        </div>
        <iframe
          title="Map of Ciao Bella on Federal Highway"
          className="h-72 w-full rounded-md border border-border"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-80.1005%2C26.2965%2C-80.0865%2C26.3028&layer=mapnik&marker=26.2996467%2C-80.0933693"
        />
      </div>
      <section className="bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-10">
          <div>
            <h2 className="font-display text-3xl">Stay in touch</h2>
            <p className="mt-2 text-sm text-muted">Wine nights, holiday parties, and the dinner list.</p>
          </div>
          <button type="button" onClick={openNewsletter} className="rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg">
            Join the list
          </button>
        </div>
      </section>
      <Reviews />
    </>
  );
}
