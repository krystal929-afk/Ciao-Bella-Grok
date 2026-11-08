import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { reviews } from "@/data/restaurant";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const current = reviews[index];

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section className="bg-bg px-4 py-16 text-center">
      <h2 className="font-display text-4xl uppercase tracking-wide">Loved by our guests</h2>
      <p className="mt-4 font-script text-3xl text-primary">Review by – Google</p>
      <div className="relative mx-auto mt-8 max-w-2xl">
        <button
          type="button"
          aria-label="Previous review"
          className="absolute left-0 top-8 inline-flex size-11 items-center justify-center"
          onClick={() => setIndex((value) => (value + reviews.length - 1) % reviews.length)}
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          type="button"
          aria-label="Next review"
          className="absolute right-0 top-8 inline-flex size-11 items-center justify-center"
          onClick={() => setIndex((value) => (value + 1) % reviews.length)}
        >
          <ChevronRight className="size-6" />
        </button>
        <p className="font-display text-lg">
          {current.name.replace(".", " ")}{" "}
          <span className="text-green" aria-label="Five stars">
            ★★★★★
          </span>
        </p>
        <blockquote className="mx-auto mt-4 max-w-xl px-10 text-[17px] leading-relaxed">“{current.quote}”</blockquote>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        {reviews.map((review, i) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Show review by ${review.name}`}
            className={`size-3 rounded-full border border-fg ${i === index ? "bg-fg" : "bg-transparent"}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <button
        type="button"
        className="mt-4 inline-flex size-11 items-center justify-center"
        aria-label={playing ? "Stop reviews" : "Start reviews"}
        onClick={() => setPlaying((value) => !value)}
      >
        {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
      </button>
    </section>
  );
}
