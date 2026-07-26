import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { houseRules, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Házirend",
  description:
    "A MEDITA Jóga stúdió házirendje – minden, amit az órákon való részvételről tudni érdemes.",
};

export default function HazirendPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">
            Stúdió házirend
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Hogy mindenki nyugalomban gyakorolhasson
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            Néhány egyszerű szabály, amellyel közösen őrizzük a stúdió
            csendjét és tisztaságát.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <ol className="space-y-0">
          {houseRules.map((rule, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <li className="flex gap-6 border-b border-sand-200 py-6 first:border-t sm:gap-8">
                <span className="w-10 shrink-0 pt-0.5 font-serif text-2xl text-sand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="leading-7 text-ink-700">{rule}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-16 rounded-[2rem] bg-mint-100 px-8 py-12 text-center">
            <h2 className="font-serif text-2xl text-ink-900 sm:text-3xl">
              Kérdésed van a házirenddel kapcsolatban?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink-700">
              Írj nekünk bátran a{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-mint-700 hover:text-mint-800">
                {site.email}
              </a>{" "}
              címre, vagy kérdezz minket a stúdióban.
            </p>
            <Link
              href="/kapcsolat"
              className="mt-7 inline-block rounded-full bg-mint-700 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
            >
              Kapcsolat
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
