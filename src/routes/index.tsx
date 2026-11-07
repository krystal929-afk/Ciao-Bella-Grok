import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { about, sliceOrder } from "@/data/restaurant";
import { gallery, slides } from "@/data/menus";
import { HeroFilm, PhotoGallery } from "@/components/live-widgets";
import { Reviews } from "@/components/reviews";
import { InteriorHold } from "@/components/ui";
import { joinList } from "@/lib/house.functions";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [joined, setJoined] = useState(false);
  const [listError, setListError] = useState("");
  const [slide, setSlide] = useState(0);
  const current = slides[slide];

  useEffect(() => {
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % slides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <>
      <HeroFilm />

      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <h1 className="font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl">
          Ciao Bella – Italian restaurant in Deerfield Beach
        </h1>
        <p className="mt-10 font-display text-3xl uppercase leading-tight tracking-wide sm:text-4xl">
          Authentic Italian flavors in Deerfield
        </p>
        <p className="mt-6 font-script text-3xl text-primary sm:text-4xl">Serving Italian classics with care</p>
        <p className="mt-8 text-left text-[17px] leading-relaxed sm:text-center">{about}</p>
        <Link
          to="/food-menu"
          className="mt-8 inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white"
        >
          Our menu
        </Link>
        <Villa />
      </section>

      <section className="bg-white">
        <img src="/images/brand/shrimp.jpg" alt="Shrimp scampi over pasta" className="mx-auto aspect-[16/7] w-full max-w-5xl object-cover" />
        <div className="mx-auto max-w-3xl px-5 py-12 text-center">
          <h2 className="font-display text-4xl uppercase tracking-wide">Deerfield Beach catering</h2>
          <p className="mt-3 font-script text-3xl text-green">Fresh Italian favorites for events</p>
          <p className="mt-6 text-[17px] leading-relaxed">
            Bring authentic Italian cuisine to your next gathering with catering from Ciao Bella. Our
            handcrafted pizzas, pastas, salads, and more are prepared fresh for groups of all sizes. We
            make serving great food easy for any occasion.
          </p>
          <Link to="/catering" className="mt-6 inline-flex bg-green px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
            Inquire
          </Link>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 px-4 pb-12">
          {[
            ["/images/brand/parm.jpg", "Chicken parmigiana with penne"],
            ["/images/brand/salmon.jpg", "Salmon with caprese salad"],
            ["/images/brand/shrimp.jpg", "Shrimp scampi"],
          ].map(([src, alt]) => (
            <img key={src} src={src} alt={alt} className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>

      <section className="bg-bg px-4 py-12 text-center">
        <Link to={current.href as "/party"} className="inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
          Book now
        </Link>
        <div className="mx-auto mt-6 max-w-3xl border border-fg/80 bg-white p-3">
          <img src={current.image} alt={current.alt} className="aspect-[4/3] w-full object-cover" />
        </div>
        <p className="mt-4 font-display text-2xl">{current.title}</p>
        <div className="mt-4 flex items-center justify-center gap-3" aria-label="Slideshow">
          {slides.map((item, index) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => setSlide(index)}
              className={`h-2 w-10 ${index === slide ? "bg-green" : "bg-fg/20"}`}
            />
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-center">
        <h2 className="font-display text-4xl uppercase tracking-wide">Dine with us</h2>
        <p className="mt-3 font-script text-3xl text-green">Enjoy a relaxed dining experience</p>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed">
          Planning a meal with family or friends? Reserve your table and enjoy authentic Italian
          dishes, handcrafted pizzas, and warm hospitality. We’re ready to welcome you for dinner and
          special occasions.
        </p>
        <Link to="/reservations" className="mt-6 inline-flex bg-green px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
          Reserve
        </Link>
      </section>

      <section className="relative">
        <InteriorHold tone="dark" quiet className="h-80 w-full sm:h-[28rem]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <h2 className="font-display text-4xl uppercase tracking-wide">Host and celebrate</h2>
          <Link to="/party" className="mt-6 inline-flex bg-white px-8 py-3 text-sm uppercase tracking-[0.2em] text-fg">
            Book now
          </Link>
        </div>
      </section>

      <section className="bg-bg px-5 py-14 text-center">
        <h2 className="font-display text-4xl uppercase tracking-wide">Order and enjoy</h2>
        <p className="mt-3 font-script text-3xl text-primary">Fresh Italian meals made easy</p>
        <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed">
          Enjoy your Ciao Bella favorites from the comfort of home. Order online for takeout or
          delivery — pizzas, pastas, seafood, and more. 5% off online orders. You’ll get a confirmation
          email when the kitchen accepts the ticket.
        </p>
        <a href={sliceOrder.href} className="mt-6 inline-flex bg-primary px-10 py-3 text-sm uppercase tracking-[0.2em] text-white">
          Order
        </a>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4">
          <img src="/images/brand/pizza-cheese.jpg" alt="Cheese pizza" className="aspect-square w-full border border-fg/30 object-cover p-2" />
          <img src="/images/brand/tiramisu.jpg" alt="Tiramisu" className="aspect-square w-full border border-fg/30 object-cover p-2" />
        </div>
      </section>

      <Reviews />

      <section className="bg-white px-5 py-12 text-center">
        <h2 className="font-display text-3xl uppercase tracking-[0.2em]">Stay in touch</h2>
        {joined ? (
          <p className="mt-4 text-sm">The house has your email.</p>
        ) : (
          <form
            className="mx-auto mt-6 flex max-w-md flex-col gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const email = String(data.get("email") ?? "").trim();
              setListError("");
              void joinList({ data: { email } }).then((result) => {
                if (result.ok) setJoined(true);
                else setListError(result.error);
              });
            }}
          >
            <label className="sr-only" htmlFor="home-email">
              Email
            </label>
            <input
              id="home-email"
              required
              type="email"
              name="email"
              placeholder="Email address"
              className="border border-fg/20 bg-bg px-3 py-3 text-base"
            />
            <button type="submit" className="bg-green py-3 text-sm uppercase tracking-[0.2em] text-white">
              Submit
            </button>
            {listError ? <p className="text-sm text-primary">{listError}</p> : null}
          </form>
        )}
      </section>

      <iframe
        title="Map of Ciao Bella on Federal Highway"
        className="h-80 w-full border-0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-80.1005%2C26.2965%2C-80.0865%2C26.3028&layer=mapnik&marker=26.2996467%2C-80.0933693"
      />

      <PhotoGallery />
      <p className="sr-only">{gallery.length} photos</p>
    </>
  );
}

function Villa() {
  return (
    <svg viewBox="0 0 360 160" className="mx-auto mt-10 h-36 w-64 text-fg" aria-hidden>
      <path d="M40 130 L40 78 L70 58 L110 86 L110 130 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M110 130 L110 70 L180 42 L250 70 L250 130 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M250 130 L250 90 L290 78 L320 96 L320 130 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M168 130 v-28 h24 v28" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M150 88 h14 v12 h-14 Z M196 88 h14 v12 h-14 Z M150 108 h10 v10 h-10 Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M28 130 h310" stroke="currentColor" strokeWidth="1.2" />
      <path d="M20 130 q18 -28 8 -2 M338 130 q-16 -26 -6 -2" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
