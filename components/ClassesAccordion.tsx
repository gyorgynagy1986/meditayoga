"use client";

import { useState } from "react";
import { classTypes } from "@/lib/data";

export default function ClassesAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-sand-300/70">
      {classTypes.map((c, i) => {
        const isOpen = open === i;
        return (
          <div key={c.name} className="border-b border-sand-300/70">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center gap-6 py-5 text-left"
            >
              <span
                className={`w-8 shrink-0 font-serif text-lg transition-colors ${
                  isOpen ? "text-mint-700" : "text-sand-400"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-serif text-2xl transition-colors sm:text-3xl ${
                    isOpen ? "text-ink-900" : "text-taupe-500 group-hover:text-ink-800"
                  }`}
                >
                  {c.name}
                </span>
                <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
                  {c.instructor} órája
                </span>
              </span>
              {/* plusz ikon, nyitáskor X-be fordul */}
              <span
                className={`relative h-9 w-9 shrink-0 rounded-full ring-1 transition-all duration-300 ${
                  isOpen ? "rotate-45 ring-mint-500 bg-mint-100" : "ring-sand-300 group-hover:ring-taupe-400"
                }`}
              >
                <span className="absolute left-1/2 top-1/2 h-3.5 w-px -translate-x-1/2 -translate-y-1/2 bg-ink-700" />
                <span className="absolute left-1/2 top-1/2 h-px w-3.5 -translate-x-1/2 -translate-y-1/2 bg-ink-700" />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-6 pl-14 pr-4">
                  <p className="leading-7 text-ink-700">{c.desc}</p>
                  {c.variants && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {c.variants.map((v) => (
                        <li
                          key={v.name}
                          className="rounded-full bg-mint-100 px-3.5 py-1.5 text-xs font-medium text-mint-800"
                        >
                          {v.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
