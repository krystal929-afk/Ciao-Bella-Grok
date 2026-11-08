import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gallery, promos, slides } from "@/data/menus";
import { joinList, fileInquiry } from "@/lib/house.functions";
import { cn } from "@/lib/cn";

const PROMO_SEEN = "ciaobella-promo-seen";
const PROMO_INDEX = "ciaobella-promo-index";

const HERO_VIDEO = "/video/ciao-bella-hero.mp4";

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="relative aspect-video w-full bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/brand/calamari.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        src={HERO_VIDEO}
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the homepage video" : "Play the homepage video"}
        className="absolute left-3 top-1/2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center text-white"
      >
        {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
      </button>
    </div>
  );
}

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(PROMO_SEEN) === "1") return;
    setIndex(0);
    setOpen(true);
  }, []);

  function close() {
    sessionStorage.setItem(PROMO_SEEN, "1");
    localStorage.setItem(PROMO_INDEX, String((index + 1) % promos.length));
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, index]);

  if (!open) return null;
  const promo = promos[index];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center" role="presentation" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="popup-rise relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-md bg-white p-6 text-center text-fg shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" aria-label="Close" onClick={close} className="absolute right-3 top-3 inline-flex size-11 items-center justify-center">
          <X className="size-6" />
        </button>
        <h2 id="promo-title" className="mt-2 font-display text-3xl uppercase tracking-wide">
          {promo.title}
        </h2>
        {promo.image ? <img src={promo.image} alt="" className="mt-4 w-full object-cover" /> : null}
        <p className="mt-5 text-lg leading-snug">{promo.body}</p>
        {promo.href.startsWith("http") ? (
          <a
            href={promo.href}
            className="mt-6 inline-flex w-full items-center justify-center bg-black px-5 py-3 text-base text-white"
          >
            {promo.cta}
          </a>
        ) : (
          <Link
            to={promo.href as "/party"}
            onClick={close}
            className="mt-6 inline-flex w-full items-center justify-center bg-black px-5 py-3 text-base text-white"
          >
            {promo.cta}
          </Link>
        )}
      </div>
    </div>
  );
}

export function openNewsletter() {
  window.dispatchEvent(new CustomEvent("ciaobella-newsletter"));
}

export function NewsletterDialog() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    function onOpen() {
      setDone(false);
      setOpen(true);
    }
    window.addEventListener("ciaobella-newsletter", onOpen);
    return () => window.removeEventListener("ciaobella-newsletter", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Stay in touch"
        className="popup-rise w-full max-w-md rounded-md bg-white p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-3xl">Stay in touch</h2>
          <button type="button" aria-label="Close" className="inline-flex size-11 items-center justify-center" onClick={() => setOpen(false)}>
            <X className="size-5" />
          </button>
        </div>
        {done ? (
          <p className="mt-4 text-sm text-muted">The house has your email.</p>
        ) : (
          <form
            className="mt-4 grid gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const email = String(data.get("email") ?? "").trim();
              setError("");
              void joinList({ data: { email } }).then((result) => {
                if (result.ok) setDone(true);
                else setError(result.error);
              });
            }}
          >
            <label className="text-sm">
              Email
              <input required type="email" name="email" className="mt-1 w-full border border-border bg-bg px-3 py-3 text-base" />
            </label>
            {error ? <p className="text-sm text-primary">{error}</p> : null}
            <button type="submit" className="bg-green px-5 py-3 text-sm uppercase tracking-[0.15em] text-white">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export function MomentSlideshow() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const slide = slides[index];

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section className="bg-fg text-white" aria-roledescription="carousel" aria-label="Highlights">
      <div className="relative">
        <img src={slide.image} alt={slide.alt} className="aspect-video w-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
          <h2 className="font-display text-4xl">{slide.title}</h2>
          <Link to={slide.href as "/party"} className="mt-4 inline-flex w-fit bg-white px-5 py-3 text-sm text-fg">
            {slide.label}
          </Link>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <button type="button" aria-label="Previous slide" className="inline-flex size-11 items-center justify-center rounded-full bg-black/70 text-white" onClick={() => setIndex((value) => (value + slides.length - 1) % slides.length)}>
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next slide" className="inline-flex size-11 items-center justify-center rounded-full bg-black/70 text-white" onClick={() => setIndex((value) => (value + 1) % slides.length)}>
            <ChevronRight className="size-5" />
          </button>
          <button type="button" aria-label={playing ? "Stop slideshow" : "Start slideshow"} className="inline-flex size-11 items-center justify-center rounded-full bg-black/70 text-white" onClick={() => setPlaying((value) => !value)}>
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}

export function PhotoGallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active == null) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value == null ? value : (value + 1) % gallery.length));
      if (event.key === "ArrowLeft") setActive((value) => (value == null ? value : (value + gallery.length - 1) % gallery.length));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const photo = active == null ? null : gallery[active];

  return (
    <section className="bg-bg px-4 py-8">
      <h2 className="sr-only">Photo gallery</h2>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4">
        {gallery.map((item, index) => (
          <button key={item.src} type="button" className="border border-fg/50 bg-white p-2" onClick={() => setActive(index)}>
            <img src={item.src} alt={item.alt} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
      {photo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={photo.alt}>
            <img src={photo.src} alt={photo.alt} className="max-h-[70vh] w-full object-contain" />
            <p className="mt-3 text-center text-sm text-white">{photo.alt}</p>
            <button type="button" aria-label="Close gallery" className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-full bg-black text-white" onClick={() => setActive(null)}>
              <X className="size-4" />
            </button>
            <button type="button" aria-label="Previous photo" className={cn("absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white")} onClick={() => setActive((value) => (value == null ? value : (value + gallery.length - 1) % gallery.length))}>
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" aria-label="Next photo" className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-black text-white" onClick={() => setActive((value) => (value == null ? value : (value + 1) % gallery.length))}>
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function birthdayApproved() {
  return false;
}

export function BirthdayNudge() {
  if (!birthdayApproved()) return null;
  return <BirthdayOffer />;
}

function BirthdayOffer() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="fixed bottom-16 right-3 z-40 max-w-xs rounded-2xl border border-fg/10 bg-white p-4 shadow-lg lg:bottom-4">
      <p className="font-medium">Birthday dessert</p>
      <p className="mt-1 text-sm leading-snug">
        One complimentary dessert for the guest of honor, dine-in, during the birthday week. The house confirms before it is honored.
      </p>
      {sent ? (
        <p className="mt-3 text-sm">The house has the note.</p>
      ) : (
        <form
          className="mt-3 grid gap-2"
          onSubmit={(event) => {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            setError("");
            void fileInquiry({
              data: {
                kind: "party",
                details: {
                  Name: String(data.get("name") ?? ""),
                  Email: String(data.get("email") ?? ""),
                  Phone: String(data.get("phone") ?? ""),
                  Occasion: "Birthday dessert",
                  Date: String(data.get("date") ?? ""),
                },
              },
            }).then((result) => {
              if (result.ok) setSent(true);
              else setError(result.error);
            });
          }}
        >
          <input required name="name" placeholder="Name" className="border border-border px-2 py-2 text-sm" />
          <input required type="email" name="email" placeholder="Email" className="border border-border px-2 py-2 text-sm" />
          <input required type="tel" name="phone" placeholder="Phone" className="border border-border px-2 py-2 text-sm" />
          <input required type="date" name="date" aria-label="Birthday" className="border border-border px-2 py-2 text-sm" />
          {error ? <p className="text-sm text-primary">{error}</p> : null}
          <button type="submit" className="bg-primary px-3 py-2 text-sm text-white">
            Ask the house
          </button>
        </form>
      )}
    </div>
  );
}
