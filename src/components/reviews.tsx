import { Pause, Play } from "lucide-react";
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
    <section className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-xs font-medium uppercase tracking-widest text-primary">
          Loved by our guests
        </p>
        <blockquote className="mt-6 font-display text-2xl leading-snug text-fg sm:text-3xl">
          “{current.quote}”
        </blockquote>
        <p className="mt-6 text-sm text-muted">
          Five stars · {current.name} · Google
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          {reviews.map((review, i) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Show review by ${review.name}`}
              className={`size-2.5 rounded-full ${i === index ? "bg-primary" : "bg-border"}`}
              onClick={() => setIndex(i)}
            />
          ))}
          <button
            type="button"
            className="ml-2 inline-flex size-11 items-center justify-center rounded-full border border-border"
            aria-label={playing ? "Stop reviews" : "Start reviews"}
            onClick={() => setPlaying((value) => !value)}
          >
            {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
