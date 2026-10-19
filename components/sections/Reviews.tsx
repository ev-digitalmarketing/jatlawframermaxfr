"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Extrude } from "@/components/three-d/Extrude";
import { Slab } from "@/components/three-d/Slab";
import { Icon } from "@/components/ui/Icon";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { spring } from "@/lib/motion";
import { reviews, type Review } from "@/lib/reviews";

function ReviewBody({ review, focusable = true }: { review: Review; focusable?: boolean }) {
  const initials = review.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <figure className="flex h-full flex-col p-6 pt-9 sm:p-8 sm:pt-11">
      <Icon name="quote" className="h-8 w-8 text-gold-500" />
      <blockquote className="mt-3 text-[15px] leading-7 sm:text-base sm:leading-8">{review.text}</blockquote>
      <figcaption className="mt-auto pt-6">
        <div className="h-px w-full bg-current opacity-20" />
        <div className="mt-4 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500 font-heading text-sm font-bold text-navy-950"
          >
            {initials}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-heading text-sm font-semibold">{review.name}</span>
            <a
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={focusable ? 0 : -1}
              className="text-xs underline decoration-gold-500 decoration-2 underline-offset-4 opacity-80 hover:opacity-100"
            >
              Google review
            </a>
          </span>
          <span className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
            {Array.from({ length: review.rating }, (_, i) => (
              <Icon key={i} name="star" className="h-4 w-4 fill-gold-500 text-gold-500" />
            ))}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

/** Column spans so the last row never leaves an empty cell (6-column grid on large screens). */
function spanFor(i: number, n: number) {
  const last = i === n - 1;
  const md = n % 2 === 1 && last ? "md:col-span-2" : "";
  let lg = "lg:col-span-2";
  if (n % 3 === 2 && i >= n - 2) lg = "lg:col-span-3";
  if (n % 3 === 1 && last) lg = "lg:col-span-6";
  return `${md} ${lg}`;
}

/** Static grid of review cards. Cards use the section's inverse colours for contrast. */
export function ReviewGrid({ items = reviews }: { items?: Review[] }) {
  return (
    <Stagger className="grid gap-7 md:grid-cols-2 lg:grid-cols-6">
      {items.map((review, i) => (
        <StaggerItem key={review.id} className={`h-full ${spanFor(i, items.length)}`}>
          <Slab inverse>
            <ReviewBody review={review} />
          </Slab>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

const control =
  "grid h-11 w-11 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--card)] text-[color:var(--card-fg)] shadow-md transition-transform hover:-translate-y-0.5";

/** Cover-flow carousel: the active review faces you, neighbours rotate away in 3D. Swipe, click or wait. */
export function ReviewCarousel({ items = reviews }: { items?: Review[] }) {
  const [index, setIndex] = useState(0);
  const [hold, setHold] = useState(false);
  const reduce = useReducedMotion();
  const count = items.length;
  const go = useCallback((step: number) => setIndex((v) => (v + step + count) % count), [count]);

  useEffect(() => {
    if (hold || reduce) return;
    const id = setInterval(() => go(1), 9000);
    return () => clearInterval(id);
  }, [hold, reduce, go]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client reviews"
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
    >
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <motion.div
          onPanEnd={(_, info) => {
            if (info.offset.x < -50) go(1);
            else if (info.offset.x > 50) go(-1);
          }}
          style={{ touchAction: "pan-y" }}
          className="grid overflow-hidden px-5 pb-12 pt-4 sm:px-8"
        >
          {items.map((review, i) => {
            let offset = i - index;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;
            const distance = Math.abs(offset);

            // Shadow, opacity and perspective live on this flat wrapper; the 3D transform lives on its child.
            return (
              <div
                key={review.id}
                aria-hidden={offset !== 0}
                style={{ zIndex: 10 - distance, pointerEvents: offset === 0 ? "auto" : "none" }}
                className={`perspective-1600 col-start-1 row-start-1 mx-auto w-full max-w-2xl drop-shadow-slab transition-opacity duration-500 ${
                  distance > 1 ? "opacity-0" : distance === 1 ? "opacity-0 md:opacity-100" : "opacity-100"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ x: `${offset * 62}%`, rotateY: offset * -32, scale: 1 - distance * 0.14 }}
                  transition={spring}
                  className="preserve-3d relative h-full"
                >
                  <Extrude depth={5} faceClass="bg-[color:var(--inv)]" className="text-[color:var(--inv-fg)]">
                    <ReviewBody review={review} focusable={offset === 0} />
                  </Extrude>
                  <motion.div
                    aria-hidden="true"
                    initial={false}
                    animate={{ opacity: offset === 0 ? 0 : 0.45 }}
                    transition={{ duration: 0.4 }}
                    className="slab-shape pointer-events-none absolute inset-0 bg-navy-950"
                  />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button type="button" onClick={() => go(-1)} aria-label="Previous review" className={control}>
          <Icon name="left" className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {items.map((review, i) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show review from ${review.name}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[color:var(--accent)]" : "w-2.5 bg-[color:var(--line)] hover:bg-[color:var(--accent)]"
              }`}
            />
          ))}
        </div>
        <button type="button" onClick={() => go(1)} aria-label="Next review" className={control}>
          <Icon name="right" className="h-5 w-5" />
        </button>
      </div>
      <p className="mt-5 text-center text-sm">
        <Link
          href="/testimonials"
          className="font-heading font-semibold underline decoration-gold-500 decoration-2 underline-offset-4"
        >
          Read all client reviews
        </Link>
      </p>
    </div>
  );
}
