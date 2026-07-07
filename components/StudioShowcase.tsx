"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { studioSpaces } from "@/lib/data";

export default function StudioShowcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Nagyon halvány háttérkép, alul-felül homokszínbe úszva */}
      <Image
        src="/studio/hatter.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-[0.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-50/30 to-sand-50" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 md:grid-cols-[5fr_6fr] md:gap-20">
        {/* Szöveg + kattintható lista balra */}
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">
            A stúdió
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
            Tér, ami ölel
          </h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-ink-700">
            Meleg bézs falak, tölgy padló, len és kerámia – minden részlet a
            lelassulást szolgálja.
          </p>

          <ul className="mt-10 border-t border-sand-200">
            {studioSpaces.map((s, i) => (
              <li key={s.name} className="border-b border-sand-200">
                <button
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group flex w-full items-baseline gap-5 py-4 text-left transition-colors"
                >
                  <span
                    className={`font-serif text-lg transition-colors ${
                      active === i ? "text-mint-700" : "text-sand-400"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block font-serif text-2xl transition-colors ${
                        active === i
                          ? "text-ink-900"
                          : "text-taupe-500 group-hover:text-ink-800"
                      }`}
                    >
                      {s.name}
                    </span>
                    {/* aktív elem alatt finoman kinyíló leírás */}
                    <span
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        active === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <span className="block overflow-hidden">
                        <span className="block pt-2 text-sm leading-6 text-ink-700">
                          {s.desc}
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <Link
            href="/studio"
            className="mt-10 inline-block rounded-full bg-ink-900 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-ink-700"
          >
            Fedezd fel
          </Link>
        </div>

        {/* Váltakozó kép jobbra – lágy lekerekítés, alsó gradiens elmosás */}
        <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] md:aspect-[4/3]">
          {studioSpaces.map((s, i) => (
            <Image
              key={s.name}
              src={s.image}
              alt={s.name}
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className={`object-cover transition-all duration-700 ease-out ${
                active === i ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
              }`}
            />
          ))}
          {/* alsó gradiens elmosódás */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-sand-50/90 via-sand-50/30 to-transparent" />
          <p className="absolute bottom-5 left-7 font-serif text-2xl text-ink-900">
            {studioSpaces[active].name}
          </p>
        </div>
      </div>
    </section>
  );
}
