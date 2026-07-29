import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { priceGroups, priceNote, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Áraink",
  description:
    "A MEDITA Jóga árai: jóga- és pilates órák, bérletek, reformer pilates, diákkedvezmény.",
};

export default function ArakPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">Áraink</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Egyszerű, átlátható árak
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            Alkalmi jeggyel és bérlettel is várunk – diákoknak 20%
            kedvezménnyel.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          {priceGroups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 120}>
              <div className="h-full rounded-[2rem] bg-white p-8 ring-1 ring-sand-200 sm:p-10">
                <h2 className="font-serif text-3xl text-ink-900">{g.name}</h2>
                <ul className="mt-8">
                  {g.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-4 border-b border-sand-200 py-4 last:border-b-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{item.name}</p>
                        {item.note && (
                          <p className="mt-0.5 text-xs leading-5 text-taupe-500">{item.note}</p>
                        )}
                      </div>
                      <p className="shrink-0 font-serif text-2xl text-mint-800">{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-wide text-taupe-500">{priceNote}</p>

        <Reveal>
          <div className="mt-16 text-center">
            <Link
              href={site.bookingUrl}
              className="inline-block rounded-full bg-mint-700 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
            >
              Órarend és foglalás
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
