import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { classTypes, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Óratípusok",
  description:
    "A MEDITA Jóga óratípusai: relax és napindító jóga, stresszoldó jóga, reformer és talaj pilates, MOVE, fitball, funkcionális köredzés.",
};

export default function OratipusokPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">Jógaórák</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Óratípusaink
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            A nyugtató relax jógától a dinamikus reformer órákig – találd meg
            a hozzád illő gyakorlást.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <div className="space-y-16 md:space-y-20">
          {classTypes.map((c, i) => (
            <Reveal key={c.name}>
              <article className="border-t border-sand-200 pt-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="font-serif text-3xl text-ink-900 sm:text-4xl">
                    <span className="mr-4 text-2xl text-sand-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {c.name}
                  </h2>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-mint-700">
                    {c.instructor} órája
                  </p>
                </div>
                <p className="mt-5 max-w-3xl leading-8 text-ink-700">{c.desc}</p>

                {c.variants && (
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {c.variants.map((v) => (
                      <div
                        key={v.name}
                        className="rounded-2xl bg-sand-100 p-6"
                      >
                        <h3 className="font-serif text-xl text-ink-900">{v.name}</h3>
                        <p className="mt-2 text-sm leading-6 text-ink-700">{v.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-[2rem] bg-mint-100 px-8 py-12 text-center">
            <h2 className="font-serif text-2xl text-ink-900 sm:text-3xl">
              Megtaláltad a hozzád illő órát?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-700">
              Nézd meg az órarendet, és foglald le a helyed néhány kattintással.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href={site.bookingUrl}
                className="rounded-full bg-mint-700 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
              >
                Órarend és foglalás
              </Link>
              <Link
                href="/arak"
                className="rounded-full border border-mint-500 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-mint-800 transition-colors hover:bg-mint-200/50"
              >
                Áraink
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
