import type { Metadata } from "next";
import Link from "next/link";
import InstructorPortrait from "@/components/InstructorPortrait";
import Reveal from "@/components/Reveal";
import { instructors, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Oktatók",
  description:
    "A MEDITA Jóga oktatói: jóga, pilates, meditáció és mozgásórák tapasztalt, elhivatott oktatókkal.",
};

export default function OktatokPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">Oktatóink</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Akikkel együtt gyakorolhatsz
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            Mindannyian más úton érkeztünk a jógához és a mozgáshoz – éppen
            ezért mindenki megtalálja köztünk a hozzá illő oktatót.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((i, idx) => (
            <Reveal key={i.slug} delay={(idx % 3) * 120}>
            <Link href={`/oktatok/${i.slug}`} className="group">
              <article>
                <div className="transition-transform duration-500 group-hover:-translate-y-1.5">
                  <InstructorPortrait
                    name={i.name}
                    photo={i.photo}
                    className="aspect-[3/4] w-full"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="px-1 pt-6 text-center">
                  <h2 className="font-serif text-3xl text-ink-900 transition-colors group-hover:text-mint-700">
                    {i.name}
                  </h2>
                  <p className="mt-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
                    {i.role}
                  </p>
                  <ul className="mt-4 flex flex-wrap justify-center gap-1.5">
                    {i.classes.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-mint-100 px-3 py-1 text-xs font-medium text-mint-800"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-xs font-semibold tracking-[0.15em] text-mint-700">
                    BEMUTATKOZÁS →
                  </span>
                </div>
              </article>
            </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-mint-100 px-6 py-14 text-center">
          <h2 className="font-serif text-3xl text-ink-900 sm:text-4xl">Gyakorolj velünk</h2>
          <p className="mx-auto mt-3 max-w-md leading-7 text-ink-700">
            Válaszd ki a hozzád illő órát, és foglalj helyet néhány kattintással.
          </p>
          <Link
            href={site.bookingUrl}
            className="mt-7 inline-block rounded-full bg-mint-700 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
          >
            Órafoglalás
          </Link>
        </div>
      </section>
    </>
  );
}
