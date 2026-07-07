"use client";

import { useRef } from "react";
import Link from "next/link";
import ArchPlaceholder from "./ArchPlaceholder";
import { instructors } from "@/lib/data";

export default function InstructorSlider() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 300) + 24), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-1 pb-2"
      >
        {instructors.map((i) => (
          <Link
            key={i.slug}
            href={`/oktatok/${i.slug}`}
            data-card
            className="group w-72 shrink-0 snap-start"
          >
            <article>
              <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                <ArchPlaceholder initial={i.name.charAt(0)} className="aspect-[3/4] w-full" />
              </div>
              <div className="px-1 pt-5 text-center">
                <h3 className="font-serif text-2xl text-ink-900 transition-colors group-hover:text-mint-700">
                  {i.name}
                </h3>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
                  {i.role}
                </p>
                <p className="mt-2 text-xs leading-5 text-taupe-500">
                  {i.classes.join(" · ")}
                </p>
                <span className="mt-3 inline-block text-xs font-semibold tracking-[0.15em] text-mint-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  BEMUTATKOZÁS →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href="/oktatok"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-700 hover:text-mint-800"
        >
          Összes oktató →
        </Link>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Előző"
            className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-sand-300 text-ink-700 transition-colors hover:bg-sand-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Következő"
            className="flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-sand-300 text-ink-700 transition-colors hover:bg-sand-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
