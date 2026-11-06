import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Pause, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gallery, HERO_VIDEO, promos, slides } from "@/data/menus";
import { cn } from "@/lib/cn";

const PROMO_SEEN = "ciaobella-promo-seen";
const PROMO_INDEX = "ciaobella-promo-index";
const LIST_KEY = "ciaobella-newsletter";

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
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        poster="/images/house/hero-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        src={HERO_VIDEO}
      />
      <div className="absolute inset-0 bg-fg/45" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause the decorative video" : "Play the decorative video"}
        className="absolute right-4 top-4 z-10 inline-flex size-11 items-center justify-center rounded-full bg-fg/80 text-bg"
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>
    </div>
  );
}

export function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (sessionStorage.getItem(PROMO_SEEN) === "1") return;
    const stored = Number(localStorage.getItem(PROMO_INDEX) ?? "0");
    const next = Number.isFinite(stored) ? stored % promos.length : 0;
    setIndex(next);
    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
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
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-fg/60 p-4 sm:items-center" role="presentation" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-title"
        className="popup-rise w-full max-w-md rounded-md bg-surface p-6 text-fg shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-primary">Ciao Bella</p>
          <button type="button" aria-label="Close" onClick={close} className="inline-flex size-11 items-center justify-center rounded-md border border-border">
            <X className="size-4" />
          </button>
        </div>
        <h2 id="promo-title" className="mt-2 font-display text-3xl leading-tight">
          {promo.title}
        </h2>
        <p className="mt-3 text-sm text-muted">{promo.body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {promo.external ? (
            <a href={promo.href} target="_blank" rel="noreferrer" onClick={close} className="rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg">
              {promo.cta}
            </a>
          ) : (
            <Link to={promo.href as "/party"} onClick={close} className="rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg">
              {promo.cta}
            </Link>
          )}
          <button type="button" onClick={close} className="rounded-md border border-border px-5 py-3 text-sm">
            Not now
          </button>
        </div>
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
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-fg/60 p-4 sm:items-center" onClick={() => setOpen(false)}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Stay in touch"
        className="popup-rise w-full max-w-md rounded-md bg-surface p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display text-3xl">Stay in touch</h2>
          <button type="button" aria-label="Close" className="inline-flex size-11 items-center justify-center rounded-md border border-border" onClick={() => setOpen(false)}>
            <X className="size-4" />
          </button>
        </div>
        {done ? (
          <p className="mt-4 text-sm text-muted">You’re on the list on this device. We’ll treat it as a note to the house — call if you need a table sooner.</p>
        ) : (
          <form
            className="mt-4 grid gap-3"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              const email = String(data.get("email") ?? "").trim();
              const existing = JSON.parse(localStorage.getItem(LIST_KEY) ?? "[]") as string[];
              localStorage.setItem(LIST_KEY, JSON.stringify([email, ...existing].slice(0, 20)));
              setDone(true);
            }}
          >
            <p className="text-sm text-muted">Specials, holiday parties, and the occasional wine night. No spam folder filler.</p>
            <label className="text-sm">
              Email
              <input required type="email" name="email" className="mt-1 w-full rounded-md border border-border bg-bg px-3 py-3 text-base" />
            </label>
            <button type="submit" className="rounded-md bg-primary px-5 py-3 text-sm text-bg hover:bg-fg">
              Join the list
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
    <section className="bg-fg text-bg" aria-roledescription="carousel" aria-label="Highlights">
      <div className="relative">
        <img src={slide.image} alt={slide.alt} className="aspect-video w-full object-cover" />
        <div className="absolute inset-0 bg-fg/45" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
          <h2 className="font-display text-4xl">{slide.title}</h2>
          <Link to={slide.href} className="mt-4 inline-flex w-fit rounded-md bg-bg px-5 py-3 text-sm text-fg">
            {slide.label}
          </Link>
        </div>
        <div className="absolute right-4 top-4 flex gap-2">
          <button type="button" aria-label="Previous slide" className="inline-flex size-11 items-center justify-center rounded-full bg-fg/70" onClick={() => setIndex((value) => (value + slides.length - 1) % slides.length)}>
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" aria-label="Next slide" className="inline-flex size-11 items-center justify-center rounded-full bg-fg/70" onClick={() => setIndex((value) => (value + 1) % slides.length)}>
            <ChevronRight className="size-5" />
          </button>
          <button type="button" aria-label={playing ? "Stop slideshow" : "Start slideshow"} className="inline-flex size-11 items-center justify-center rounded-full bg-fg/70" onClick={() => setPlaying((value) => !value)}>
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
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-4xl">Photo gallery</h2>
        <a href="#after-gallery" className="text-sm text-primary">
          Skip photo gallery
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {gallery.map((item, index) => (
          <button key={item.src} type="button" className="overflow-hidden rounded-md" onClick={() => setActive(index)}>
            <img src={item.src} alt={item.alt} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
      {photo ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-fg/80 p-4" onClick={() => setActive(null)}>
          <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label={photo.alt}>
            <img src={photo.src} alt={photo.alt} className="max-h-[70vh] w-full rounded-md object-contain" />
            <p className="mt-3 text-center text-sm text-bg">{photo.alt}</p>
            <button type="button" aria-label="Close gallery" className="absolute right-2 top-2 inline-flex size-11 items-center justify-center rounded-full bg-fg text-bg" onClick={() => setActive(null)}>
              <X className="size-4" />
            </button>
            <button type="button" aria-label="Previous photo" className={cn("absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg")} onClick={() => setActive((value) => (value == null ? value : (value + gallery.length - 1) % gallery.length))}>
              <ChevronLeft className="size-5" />
            </button>
            <button type="button" aria-label="Next photo" className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg" onClick={() => setActive((value) => (value == null ? value : (value + 1) % gallery.length))}>
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
